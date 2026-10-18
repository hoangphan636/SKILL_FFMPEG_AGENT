import fs from 'node:fs';
import path from 'node:path';
import { EFFECT_REGISTRY } from './registry.js';
import type { EffectDefinition, EffectCategory } from './schema.js';
import { runFFmpegDirect, type CommandExecutionResult } from '../executor.js';
import { assertInputExists, assertOutputNotExists } from '../validator.js';
import { probeMedia } from '../inspector.js';
import { FaceTracker } from '../tracking/tracker.js';

export class EffectEngine {
  static listEffects(category?: EffectCategory): EffectDefinition[] {
    const all = Object.values(EFFECT_REGISTRY);
    if (!category) return all;
    return all.filter((e) => e.category === category);
  }

  static getEffect(id: string): EffectDefinition {
    const found = EFFECT_REGISTRY[id];
    if (!found) {
      const available = Object.keys(EFFECT_REGISTRY).join(', ');
      throw new Error(`[EffectNotFound] Effect "${id}" not recognized. Available: ${available}`);
    }
    return found;
  }

  static async applyEffect(
    effectId: string,
    input: string,
    output: string,
    options: {
      stickerPath?: string;
      trackingJsonPath?: string;
    } = {}
  ): Promise<CommandExecutionResult> {
    assertInputExists(input);
    assertOutputNotExists(output);

    const effect = this.getEffect(effectId);

    // AI Vision / Hybrid Tracking Pipeline Handler
    if (effect.requiresFaceTracking || effect.engine === 'hybrid' || effect.category === 'face_ar') {
      return this.applyTrackingEffect(effect, input, output, options);
    }

    const start = Date.now();
    const args: string[] = ['-i', input];

    // Video Filtergraph
    if (effect.filters && effect.filters.length > 0) {
      const vf = effect.filters.join(',');
      args.push('-vf', vf);
    }

    // Audio Filtergraph
    if (effect.audioFilters && effect.audioFilters.length > 0) {
      const af = effect.audioFilters.join(',');
      args.push('-af', af);
    } else {
      if (!effect.filters.some((f) => f.includes('setpts'))) {
        args.push('-c:a', 'copy');
      }
    }

    args.push('-c:v', 'libx264', '-preset', 'veryfast', '-crf', '22', output);

    await runFFmpegDirect(args);
    const verified = await probeMedia(output);

    return {
      command: `effect:${effectId}`,
      args,
      durationMs: Date.now() - start,
      outputSize: parseInt(verified.format.size || '0', 10),
    };
  }

  /**
   * Applies AR / Face Tracking overlays dynamically computed from AI Vision tracks.
   */
  private static async applyTrackingEffect(
    effect: EffectDefinition,
    input: string,
    output: string,
    options: { stickerPath?: string; trackingJsonPath?: string }
  ): Promise<CommandExecutionResult> {
    const start = Date.now();

    // 1. Get or generate tracking track
    const track = await FaceTracker.getOrGenerateTrack(input, options.trackingJsonPath);
    const { xExpr, yExpr } = FaceTracker.buildOverlayExpression(track, 'forehead');

    // 2. Select sticker asset (use custom or fallback to samples/ar_sticker_ears.png)
    let sticker = options.stickerPath;
    if (!sticker || !fs.existsSync(sticker)) {
      const defaultSticker = path.resolve('samples', 'ar_sticker_ears.png');
      if (fs.existsSync(defaultSticker)) {
        sticker = defaultSticker;
      }
    }

    const args: string[] = ['-i', input];

    if (sticker && fs.existsSync(sticker)) {
      args.push('-i', sticker);
      // Filter_complex with dynamic expression tracking overlay
      const filterGraph = `[0:v][1:v]overlay=x='${xExpr}':y='${yExpr}':eval=frame[outv]`;
      args.push('-filter_complex', filterGraph, '-map', '[outv]', '-map', '0:a?');
    } else {
      // Fallback to geometric face warp if no sticker asset provided
      const vf = effect.filters.length > 0 ? effect.filters.join(',') : 'eq=contrast=1.05';
      args.push('-vf', vf, '-c:a', 'copy');
    }

    args.push('-c:v', 'libx264', '-preset', 'veryfast', '-crf', '22', output);

    await runFFmpegDirect(args);
    const verified = await probeMedia(output);

    return {
      command: `effect:${effect.id}:tracked`,
      args,
      durationMs: Date.now() - start,
      outputSize: parseInt(verified.format.size || '0', 10),
    };
  }
}
