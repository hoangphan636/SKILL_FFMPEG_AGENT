import { Command } from 'commander';
import { probeMedia } from './inspector.js';
import { MediaEngine } from './executor.js';
import { runBatchManifest } from './batch.js';
import { EffectEngine } from './effects/engine.js';
import { FaceTracker } from './tracking/tracker.js';
import { AdvancedMediaEngine } from './advanced/engine.js';
import type { EffectCategory } from './effects/schema.js';

const program = new Command();

program
  .name('ffmpeg-agent')
  .description('Enterprise FFmpeg Media Agent & 30+ Advanced Engine Suite on Windows')
  .version('3.0.0');

// --- 1. CORE WORKFLOWS ---
program
  .command('info <input>')
  .description('Read media stream details and metadata via ffprobe')
  .action(async (input: string) => {
    try {
      const info = await probeMedia(input);
      console.log(JSON.stringify(info, null, 2));
    } catch (err) {
      console.error(`[Error] ${(err as Error).message}`);
      process.exit(1);
    }
  });

program
  .command('convert <input> <output>')
  .description('Convert video to H.264/AAC MP4')
  .option('--crf <number>', 'CRF quality factor (default: 23)', (val) => parseInt(val, 10), 23)
  .option('--preset <string>', 'FFmpeg preset (ultrafast, medium, slow, etc.)', 'medium')
  .action(async (input: string, output: string, options: { crf: number; preset: string }) => {
    try {
      const result = await MediaEngine.convert(input, output, options);
      console.log(`[Success] Converted in ${result.durationMs}ms. Output size: ${result.outputSize} bytes.`);
    } catch (err) {
      console.error(`[Error] ${(err as Error).message}`);
      process.exit(1);
    }
  });

program
  .command('trim <input> <output>')
  .description('Trim media file')
  .option('--start <time>', 'Start offset (e.g. 00:00:05)', '00:00:00')
  .option('--duration <time>', 'Duration length (e.g. 00:00:10)')
  .option('--to <time>', 'End timestamp (e.g. 00:00:15)')
  .action(async (input: string, output: string, options: { start: string; duration?: string; to?: string }) => {
    try {
      const result = await MediaEngine.trim(input, output, options);
      console.log(`[Success] Trimmed in ${result.durationMs}ms. Output: ${output}`);
    } catch (err) {
      console.error(`[Error] ${(err as Error).message}`);
      process.exit(1);
    }
  });

program
  .command('extract-audio <input> <output>')
  .description('Extract audio stream without re-encoding video')
  .option('--bitrate <bitrate>', 'Audio bitrate (e.g. 192k)')
  .action(async (input: string, output: string, options: { bitrate?: string }) => {
    try {
      const result = await MediaEngine.extractAudio(input, output, options);
      console.log(`[Success] Extracted audio in ${result.durationMs}ms. Output: ${output}`);
    } catch (err) {
      console.error(`[Error] ${(err as Error).message}`);
      process.exit(1);
    }
  });

program
  .command('thumbnail <input> <output>')
  .description('Extract a single frame thumbnail at specific timestamp')
  .option('--at <time>', 'Timestamp (e.g. 00:00:02)', '00:00:01')
  .action(async (input: string, output: string, options: { at: string }) => {
    try {
      const result = await MediaEngine.thumbnail(input, output, options);
      console.log(`[Success] Thumbnail generated at ${options.at} in ${result.durationMs}ms.`);
    } catch (err) {
      console.error(`[Error] ${(err as Error).message}`);
      process.exit(1);
    }
  });

program
  .command('mux-subs <input> <output>')
  .description('Mux subtitle track into media container (MKV/MP4)')
  .requiredOption('--subtitles <path>', 'Path to SRT subtitle file')
  .action(async (input: string, output: string, options: { subtitles: string }) => {
    try {
      const result = await MediaEngine.muxSubs(input, output, options);
      console.log(`[Success] Muxed subtitles into ${output} in ${result.durationMs}ms.`);
    } catch (err) {
      console.error(`[Error] ${(err as Error).message}`);
      process.exit(1);
    }
  });

// --- 2. ADVANCED PROFESSIONAL SUITE (30 FEATURES) ---
program
  .command('compress-target-size <input> <output>')
  .description('Compress video to fit strictly under target Megabytes (e.g. 20MB for Discord/Email)')
  .requiredOption('--size-mb <number>', 'Target size in Megabytes', (val) => parseFloat(val))
  .action(async (input: string, output: string, options: { sizeMb: number }) => {
    try {
      const result = await AdvancedMediaEngine.compressToTargetSize(input, output, options.sizeMb);
      console.log(`[Success] Compressed to target ${options.sizeMb}MB in ${result.durationMs}ms. Output size: ${(result.outputSize / 1024 / 1024).toFixed(2)} MB`);
    } catch (err) {
      console.error(`[Error] ${(err as Error).message}`);
      process.exit(1);
    }
  });

program
  .command('normalize-audio <input> <output>')
  .description('Normalize audio volume to broadcast standard EBU R128 (-16 LUFS for podcasts/TikTok)')
  .option('--target <number>', 'Target LUFS (default: -16)', (val) => parseFloat(val), -16)
  .action(async (input: string, output: string, options: { target: number }) => {
    try {
      const result = await AdvancedMediaEngine.normalizeAudio(input, output, options.target);
      console.log(`[Success] Audio normalized to ${options.target} LUFS in ${result.durationMs}ms.`);
    } catch (err) {
      console.error(`[Error] ${(err as Error).message}`);
      process.exit(1);
    }
  });

program
  .command('burn-subtitles <input> <subtitles> <output>')
  .description('Burn-in hardcoded permanent subtitles onto video stream')
  .action(async (input: string, subtitles: string, output: string) => {
    try {
      const result = await AdvancedMediaEngine.burnSubtitles(input, subtitles, output);
      console.log(`[Success] Burned subtitles into ${output} in ${result.durationMs}ms.`);
    } catch (err) {
      console.error(`[Error] ${(err as Error).message}`);
      process.exit(1);
    }
  });

program
  .command('smart-crop-916 <input> <output>')
  .description('Automatically reframe 16:9 video to 9:16 vertical (TikTok, Shorts, Reels)')
  .action(async (input: string, output: string) => {
    try {
      const result = await AdvancedMediaEngine.smartCrop916(input, output);
      console.log(`[Success] Reframed to 9:16 vertical in ${result.durationMs}ms.`);
    } catch (err) {
      console.error(`[Error] ${(err as Error).message}`);
      process.exit(1);
    }
  });

program
  .command('create-gif <input> <output>')
  .description('Generate high-quality optimized animated GIF with two-pass palettegen')
  .option('--fps <number>', 'GIF frame rate', (val) => parseInt(val, 10), 15)
  .option('--width <number>', 'Output GIF width in pixels', (val) => parseInt(val, 10), 480)
  .option('--start <time>', 'Start time offset', '00:00:00')
  .option('--duration <time>', 'Duration in seconds', '00:00:03')
  .action(async (input: string, output: string, options: { fps: number; width: number; start: string; duration: string }) => {
    try {
      const result = await AdvancedMediaEngine.createOptimizedGif(input, output, options);
      console.log(`[Success] Created GIF in ${result.durationMs}ms. Size: ${result.outputSize} bytes.`);
    } catch (err) {
      console.error(`[Error] ${(err as Error).message}`);
      process.exit(1);
    }
  });

program
  .command('visualizer <audioInput> <output>')
  .description('Generate audio waveform visualization video from audio track')
  .option('--mode <mode>', 'Visualizer mode (waves or bars)', 'waves')
  .action(async (audioInput: string, output: string, options: { mode: 'waves' | 'bars' }) => {
    try {
      const result = await AdvancedMediaEngine.generateAudioVisualizer(audioInput, output, options.mode);
      console.log(`[Success] Generated audio visualizer in ${result.durationMs}ms.`);
    } catch (err) {
      console.error(`[Error] ${(err as Error).message}`);
      process.exit(1);
    }
  });

program
  .command('watermark <input> <logoImage> <output>')
  .description('Overlay brand watermark/logo onto video')
  .option('--position <pos>', 'Corner (top-left, top-right, bottom-left, bottom-right)', 'bottom-right')
  .option('--opacity <number>', 'Logo opacity 0.1 to 1.0', (val) => parseFloat(val), 0.8)
  .action(async (input: string, logoImage: string, output: string, options: { position: any; opacity: number }) => {
    try {
      const result = await AdvancedMediaEngine.addWatermark(input, logoImage, output, options.position, options.opacity);
      console.log(`[Success] Watermark applied in ${result.durationMs}ms.`);
    } catch (err) {
      console.error(`[Error] ${(err as Error).message}`);
      process.exit(1);
    }
  });

program
  .command('detect-qc <input>')
  .description('Detect silence pauses and black screen frames (Quality Control & Auto-Cut)')
  .action(async (input: string) => {
    try {
      const qc = await AdvancedMediaEngine.detectBlackAndSilence(input);
      console.log('--- Video QC Report ---');
      console.log(JSON.stringify(qc, null, 2));
    } catch (err) {
      console.error(`[Error] ${(err as Error).message}`);
      process.exit(1);
    }
  });

program
  .command('detect-hw')
  .description('Probe GPU hardware encoders (NVIDIA NVENC, Intel QSV, AMD AMF)')
  .action(async () => {
    try {
      const hw = await AdvancedMediaEngine.detectHardwareAccel();
      console.log('Available Hardware Accelerators on this Windows host:');
      console.log(hw.join(', ') || 'None (Using CPU software encoding)');
    } catch (err) {
      console.error(`[Error] ${(err as Error).message}`);
      process.exit(1);
    }
  });

program
  .command('concat <output> <inputs...>')
  .description('Losslessly concatenate multiple compatible media files into one')
  .action(async (output: string, inputs: string[]) => {
    try {
      const result = await AdvancedMediaEngine.concatMediaList(inputs, output);
      console.log(`[Success] Concatenated ${inputs.length} files in ${result.durationMs}ms into ${output}`);
    } catch (err) {
      console.error(`[Error] ${(err as Error).message}`);
      process.exit(1);
    }
  });

// --- 3. EFFECTS & AI TRACKING COMMANDS ---
program
  .command('effects')
  .description('List available effects in the registry')
  .option('-c, --category <category>', 'Filter by category (e.g. color_filter, audio_voice, distortion_glitch)')
  .action((options: { category?: string }) => {
    try {
      const list = EffectEngine.listEffects(options.category as EffectCategory | undefined);
      console.log(`Found ${list.length} effect(s) in registry:`);
      for (const eff of list) {
        console.log(`- [${eff.id}] ${eff.name} (${eff.category} | ${eff.difficulty} | ${eff.engine})`);
        console.log(`    ${eff.description}`);
      }
    } catch (err) {
      console.error(`[Error] ${(err as Error).message}`);
      process.exit(1);
    }
  });

program
  .command('apply-effect <effectId> <input> <output>')
  .description('Apply a preset effect to a media file')
  .option('--sticker <path>', 'Custom AR sticker image path (PNG with transparency)')
  .option('--track <path>', 'Pre-extracted AI face landmark tracking JSON')
  .action(async (effectId: string, input: string, output: string, options: { sticker?: string; track?: string }) => {
    try {
      const result = await EffectEngine.applyEffect(effectId, input, output, {
        stickerPath: options.sticker,
        trackingJsonPath: options.track,
      });
      console.log(`[Success] Effect "${effectId}" applied in ${result.durationMs}ms. Output: ${output} (${result.outputSize} bytes)`);
    } catch (err) {
      console.error(`[Error] ${(err as Error).message}`);
      process.exit(1);
    }
  });

program
  .command('track-face <input> <outputJson>')
  .description('Extract or simulate AI Vision face tracking landmarks into JSON')
  .action(async (input: string, outputJson: string) => {
    try {
      const track = await FaceTracker.getOrGenerateTrack(input);
      const fs = await import('node:fs');
      fs.writeFileSync(outputJson, JSON.stringify(track, null, 2), 'utf-8');
      console.log(`[Success] Extracted ${track.totalFrames} tracking frames (${track.videoWidth}x${track.videoHeight} @ ${track.fps}fps) to ${outputJson}`);
    } catch (err) {
      console.error(`[Error] ${(err as Error).message}`);
      process.exit(1);
    }
  });

program
  .command('batch <manifest>')
  .description('Execute multiple media tasks from JSON manifest')
  .action(async (manifest: string) => {
    try {
      const summary = await runBatchManifest(manifest);
      console.log('\n--- Batch Execution Summary ---');
      console.log(JSON.stringify(summary, null, 2));
      if (summary.failed > 0) {
        process.exitCode = 2;
      }
    } catch (err) {
      console.error(`[Batch Error] ${(err as Error).message}`);
      process.exit(1);
    }
  });

program.parse(process.argv);
