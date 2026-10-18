import fs from 'node:fs';
import path from 'node:path';
import { probeMedia } from '../inspector.js';
import { runFFmpegDirect, type CommandExecutionResult } from '../executor.js';
import { assertInputExists, assertOutputNotExists } from '../validator.js';

export class ApexHyperMediaSuite {
  // 151. Apple ProRes 422 HQ Broadcast Master Export
  static async exportProRes(
    input: string,
    output: string,
    profile: 'proxy' | 'lt' | 'standard' | 'hq' = 'hq'
  ): Promise<CommandExecutionResult> {
    assertInputExists(input);
    assertOutputNotExists(output);

    const profileMap = { proxy: '0', lt: '1', standard: '2', hq: '3' };
    const start = Date.now();
    const args = [
      '-i', input,
      '-c:v', 'prores_ks',
      '-profile:v', profileMap[profile],
      '-pix_fmt', 'yuv422p10le',
      '-c:a', 'pcm_s24le',
      output,
    ];

    await runFFmpegDirect(args);
    const verified = await probeMedia(output);

    return {
      command: 'export-prores',
      args,
      durationMs: Date.now() - start,
      outputSize: parseInt(verified.format.size || '0', 10),
    };
  }

  // 152. 3D Spatial Anaglyph Red-Cyan Stereoscopic 3D Conversion
  static async convertStereo3D(
    leftInput: string,
    rightInput: string,
    output: string
  ): Promise<CommandExecutionResult> {
    assertInputExists(leftInput);
    assertInputExists(rightInput);
    assertOutputNotExists(output);

    const start = Date.now();
    const args = [
      '-i', leftInput,
      '-i', rightInput,
      '-filter_complex', 'stereo3d=sbs2l:arrc',
      '-c:v', 'libx264',
      '-crf', '19',
      '-c:a', 'aac',
      output,
    ];

    await runFFmpegDirect(args);
    const verified = await probeMedia(output);

    return {
      command: 'convert-stereo3d',
      args,
      durationMs: Date.now() - start,
      outputSize: parseInt(verified.format.size || '0', 10),
    };
  }

  // 153. Motion Freeze Frame Impact Punch
  static async freezeFrame(
    input: string,
    output: string,
    freezeSec: number = 2.0,
    freezeDurationSec: number = 1.5
  ): Promise<CommandExecutionResult> {
    assertInputExists(input);
    assertOutputNotExists(output);

    const start = Date.now();
    const startFreeze = freezeSec;
    const endFreeze = freezeSec + freezeDurationSec;

    // tpad filter stops the frame at specific point
    const filter = `split=2[orig][freeze];[freeze]trim=start=${startFreeze}:end=${startFreeze + 0.04},setpts=PTS-STARTPTS,loop=loop=${Math.round(freezeDurationSec * 30)}:size=1:start=0[looped];[orig]trim=start=0:end=${startFreeze},setpts=PTS-STARTPTS[pre];[orig]trim=start=${startFreeze},setpts=PTS-STARTPTS[post];[pre][looped][post]concat=n=3:v=1:a=0[v]`;

    const args = [
      '-i', input,
      '-filter_complex', filter,
      '-map', '[v]',
      '-c:v', 'libx264',
      '-pix_fmt', 'yuv420p',
      output,
    ];

    await runFFmpegDirect(args);
    const verified = await probeMedia(output);

    return {
      command: 'freeze-frame',
      args,
      durationMs: Date.now() - start,
      outputSize: parseInt(verified.format.size || '0', 10),
    };
  }

  // 154. Audio Spatial Binaural 8D Panner (Rotational Circle around Head)
  static async createBinauralSpatial(
    input: string,
    output: string,
    speedHz: number = 0.2
  ): Promise<CommandExecutionResult> {
    assertInputExists(input);
    assertOutputNotExists(output);

    const start = Date.now();
    const args = [
      '-i', input,
      '-af', `apulsator=mode=sine:hz=${speedHz}:width=0.9, stereowiden=delay=20:feedback=0.3:crossfeed=0.3:drymix=0.8`,
      '-c:v', 'copy',
      '-c:a', 'aac',
      '-b:a', '320k',
      output,
    ];

    await runFFmpegDirect(args);
    const verified = await probeMedia(output);

    return {
      command: 'create-binaural-spatial',
      args,
      durationMs: Date.now() - start,
      outputSize: parseInt(verified.format.size || '0', 10),
    };
  }

  // 155. Automated Optical Color Inversion X-Ray Scanner
  static async renderXRayHeatmap(
    input: string,
    output: string
  ): Promise<CommandExecutionResult> {
    assertInputExists(input);
    assertOutputNotExists(output);

    const start = Date.now();
    const args = [
      '-i', input,
      '-vf', 'format=gbrp,negate,colorbalance=rs=0.4:gs=-0.2:bs=-0.5,format=yuv420p',
      '-c:a', 'copy',
      output,
    ];

    await runFFmpegDirect(args);
    const verified = await probeMedia(output);

    return {
      command: 'render-xray-heatmap',
      args,
      durationMs: Date.now() - start,
      outputSize: parseInt(verified.format.size || '0', 10),
    };
  }

  // 156. Video Speed Interpolator 60fps Motion Flow (Minkowski Blend)
  static async interpolateMotionFlow(
    input: string,
    output: string,
    fps: number = 60
  ): Promise<CommandExecutionResult> {
    assertInputExists(input);
    assertOutputNotExists(output);

    const start = Date.now();
    const args = [
      '-i', input,
      '-vf', `minterpolate=fps=${fps}:mi_mode=blend`,
      '-c:v', 'libx264',
      '-preset', 'fast',
      '-crf', '18',
      '-c:a', 'copy',
      output,
    ];

    await runFFmpegDirect(args);
    const verified = await probeMedia(output);

    return {
      command: 'interpolate-motion-flow',
      args,
      durationMs: Date.now() - start,
      outputSize: parseInt(verified.format.size || '0', 10),
    };
  }

  // 157. Broadcast Audio Multiband Dynamics Enhancer (FM Radio Voice)
  static async enhanceRadioVoice(
    input: string,
    output: string
  ): Promise<CommandExecutionResult> {
    assertInputExists(input);
    assertOutputNotExists(output);

    const start = Date.now();
    const args = [
      '-i', input,
      '-af', 'highpass=f=75, lowpass=f=12000, crystalizer=i=2.0, compand=attacks=0.02:decays=0.1:points=-80/-80|-40/-30|-20/-10|0/0:soft-knee=6',
      '-c:v', 'copy',
      '-c:a', 'aac',
      '-b:a', '256k',
      output,
    ];

    await runFFmpegDirect(args);
    const verified = await probeMedia(output);

    return {
      command: 'enhance-radio-voice',
      args,
      durationMs: Date.now() - start,
      outputSize: parseInt(verified.format.size || '0', 10),
    };
  }

  // 158. Video Watermark Remover / Delogo Scrubber
  static async removeCornerWatermark(
    input: string,
    output: string,
    x: number,
    y: number,
    w: number,
    h: number
  ): Promise<CommandExecutionResult> {
    assertInputExists(input);
    assertOutputNotExists(output);

    const start = Date.now();
    const args = [
      '-i', input,
      '-vf', `delogo=x=${x}:y=${y}:w=${w}:h=${h}:show=0`,
      '-c:v', 'libx264',
      '-crf', '18',
      '-c:a', 'copy',
      output,
    ];

    await runFFmpegDirect(args);
    const verified = await probeMedia(output);

    return {
      command: 'remove-watermark',
      args,
      durationMs: Date.now() - start,
      outputSize: parseInt(verified.format.size || '0', 10),
    };
  }

  // 159. Video Audio Reverse (Backwards Rewind Effect)
  static async reverseMedia(
    input: string,
    output: string
  ): Promise<CommandExecutionResult> {
    assertInputExists(input);
    assertOutputNotExists(output);

    const start = Date.now();
    const args = [
      '-i', input,
      '-vf', 'reverse',
      '-af', 'areverse',
      '-c:v', 'libx264',
      '-pix_fmt', 'yuv420p',
      output,
    ];

    await runFFmpegDirect(args);
    const verified = await probeMedia(output);

    return {
      command: 'reverse-media',
      args,
      durationMs: Date.now() - start,
      outputSize: parseInt(verified.format.size || '0', 10),
    };
  }

  // 160. Clean Transparent Alpha Channel Video to ProRes 4444 (QuickTime Alpha)
  static async exportProResAlpha(
    input: string,
    output: string
  ): Promise<CommandExecutionResult> {
    assertInputExists(input);
    assertOutputNotExists(output);

    const start = Date.now();
    const args = [
      '-i', input,
      '-c:v', 'prores_ks',
      '-profile:v', '4444',
      '-pix_fmt', 'yuva444p10le',
      '-c:a', 'pcm_s24le',
      output,
    ];

    await runFFmpegDirect(args);
    const verified = await probeMedia(output);

    return {
      command: 'export-prores-alpha',
      args,
      durationMs: Date.now() - start,
      outputSize: parseInt(verified.format.size || '0', 10),
    };
  }
}
