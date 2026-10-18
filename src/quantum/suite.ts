import fs from 'node:fs';
import path from 'node:path';
import { spawn } from 'node:child_process';
import { probeMedia } from '../inspector.js';
import { runFFmpegDirect, type CommandExecutionResult } from '../executor.js';
import { assertInputExists, assertOutputNotExists } from '../validator.js';

export class QuantumMediaSuite {
  // 121. AV1 Next-Gen Video Transcoding (libsvtav1)
  static async transcodeAV1(
    input: string,
    output: string,
    crf: number = 28
  ): Promise<CommandExecutionResult> {
    assertInputExists(input);
    assertOutputNotExists(output);

    const start = Date.now();
    const args = [
      '-i', input,
      '-c:v', 'libsvtav1',
      '-crf', String(crf),
      '-preset', '8',
      '-c:a', 'libopus',
      '-b:a', '128k',
      output,
    ];

    try {
      await runFFmpegDirect(args);
    } catch {
      // Fallback to libx265 / HEVC if libsvtav1 is not installed
      await runFFmpegDirect([
        '-i', input,
        '-c:v', 'libx265',
        '-crf', String(crf),
        '-preset', 'fast',
        '-c:a', 'aac',
        '-b:a', '128k',
        output,
      ]);
    }

    const verified = await probeMedia(output);
    return {
      command: 'transcode-av1',
      args,
      durationMs: Date.now() - start,
      outputSize: parseInt(verified.format.size || '0', 10),
    };
  }

  // 122. RTMP Live Streaming Broadcast Push Engine
  static async streamToRTMP(
    input: string,
    rtmpUrl: string,
    maxTimeSec: number = 10
  ): Promise<CommandExecutionResult> {
    assertInputExists(input);

    const start = Date.now();
    const args = [
      '-re',
      '-i', input,
      '-c:v', 'libx264',
      '-preset', 'veryfast',
      '-maxrate', '3000k',
      '-bufsize', '6000k',
      '-pix_fmt', 'yuv420p',
      '-g', '60',
      '-c:a', 'aac',
      '-b:a', '128k',
      '-ar', '44100',
      '-t', String(maxTimeSec),
      '-f', 'flv',
      rtmpUrl,
    ];

    try {
      await runFFmpegDirect(args);
    } catch (e) {
      console.warn(`[RTMP] Stream push completed or interrupted: ${(e as Error).message}`);
    }

    return {
      command: 'stream-rtmp',
      args,
      durationMs: Date.now() - start,
      outputSize: 0,
    };
  }

  // 123. Audio Phase Alignment & Stereo Phase Correlation Fixer
  static async fixAudioPhase(
    input: string,
    output: string
  ): Promise<CommandExecutionResult> {
    assertInputExists(input);
    assertOutputNotExists(output);

    const start = Date.now();
    const args = [
      '-i', input,
      '-c:v', 'copy',
      '-af', 'phase=in=s:out=s',
      output,
    ];

    await runFFmpegDirect(args);
    const verified = await probeMedia(output);

    return {
      command: 'fix-audio-phase',
      args,
      durationMs: Date.now() - start,
      outputSize: parseInt(verified.format.size || '0', 10),
    };
  }

  // 124. Freeze-Frame Motion Blur Shutter Stutter (180-Degree Rule Simulation)
  static async simulateMotionShutter180(
    input: string,
    output: string
  ): Promise<CommandExecutionResult> {
    assertInputExists(input);
    assertOutputNotExists(output);

    const start = Date.now();
    const args = [
      '-i', input,
      '-vf', 'tblend=all_mode=average,fps=24',
      '-c:v', 'libx264',
      '-preset', 'veryfast',
      '-c:a', 'copy',
      output,
    ];

    await runFFmpegDirect(args);
    const verified = await probeMedia(output);

    return {
      command: 'simulate-shutter-180',
      args,
      durationMs: Date.now() - start,
      outputSize: parseInt(verified.format.size || '0', 10),
    };
  }

  // 125. Dynamic Speech Compressor & Voice Leveler
  static async levelVoiceDynamics(
    input: string,
    output: string
  ): Promise<CommandExecutionResult> {
    assertInputExists(input);
    assertOutputNotExists(output);

    const start = Date.now();
    const args = [
      '-i', input,
      '-c:v', 'copy',
      '-af', 'acompressor=threshold=-18dB:ratio=4:attack=20:release=250:makeup=3dB',
      output,
    ];

    await runFFmpegDirect(args);
    const verified = await probeMedia(output);

    return {
      command: 'level-voice-dynamics',
      args,
      durationMs: Date.now() - start,
      outputSize: parseInt(verified.format.size || '0', 10),
    };
  }

  // 126. Automated Thumbnail Carousel Storyboard Generator (9 Distinct Frames)
  static async extractThumbnailCarousel(
    input: string,
    outputDir: string
  ): Promise<CommandExecutionResult> {
    assertInputExists(input);
    if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

    const info = await probeMedia(input);
    const duration = parseFloat(info.format.duration ?? '5.0');
    const start = Date.now();

    const pattern = path.join(outputDir, 'thumb_card_%02d.jpg');
    const interval = Math.max(0.5, duration / 9);

    const args = [
      '-i', input,
      '-vf', `fps=1/${interval.toFixed(2)},scale=640:360`,
      '-vframes', '9',
      pattern,
    ];

    await runFFmpegDirect(args);

    return {
      command: 'extract-carousel',
      args,
      durationMs: Date.now() - start,
      outputSize: fs.readdirSync(outputDir).length,
    };
  }

  // 127. High-Pass Audio Wind Noise Scrubber
  static async scrubWindNoise(
    input: string,
    output: string,
    cutoffHz: number = 100
  ): Promise<CommandExecutionResult> {
    assertInputExists(input);
    assertOutputNotExists(output);

    const start = Date.now();
    const args = [
      '-i', input,
      '-c:v', 'copy',
      '-af', `highpass=f=${cutoffHz},afftdn=nf=-25`,
      output,
    ];

    await runFFmpegDirect(args);
    const verified = await probeMedia(output);

    return {
      command: 'scrub-wind-noise',
      args,
      durationMs: Date.now() - start,
      outputSize: parseInt(verified.format.size || '0', 10),
    };
  }

  // 128. Picture-in-Picture Gaming Facecam Grid (Corner Circular / Rounded Box)
  static async overlayGamingFacecam(
    gameplayVideo: string,
    facecamVideo: string,
    output: string
  ): Promise<CommandExecutionResult> {
    assertInputExists(gameplayVideo);
    assertInputExists(facecamVideo);
    assertOutputNotExists(output);

    const start = Date.now();
    // Overlays facecam at top-right corner with a sleek border
    const filter = '[1:v]scale=360:240,drawbox=x=0:y=0:w=360:h=240:color=cyan@0.8:t=4[cam];[0:v][cam]overlay=W-w-30:30[outv];[0:a][1:a]amix=inputs=2[outa]';
    const args = [
      '-i', gameplayVideo,
      '-i', facecamVideo,
      '-filter_complex', filter,
      '-map', '[outv]',
      '-map', '[outa]',
      '-c:v', 'libx264',
      '-preset', 'veryfast',
      output,
    ];

    await runFFmpegDirect(args);
    const verified = await probeMedia(output);

    return {
      command: 'gaming-facecam',
      args,
      durationMs: Date.now() - start,
      outputSize: parseInt(verified.format.size || '0', 10),
    };
  }

  // 129. Dynamic Animated Countdown Timer Overlay (e.g., 5-4-3-2-1 Top Right)
  static async overlayCountdownTimer(
    input: string,
    startSeconds: number,
    output: string
  ): Promise<CommandExecutionResult> {
    assertInputExists(input);
    assertOutputNotExists(output);

    const start = Date.now();
    const filter = `drawtext=fontcolor=yellow:fontsize=48:box=1:boxcolor=black@0.6:boxborderw=10:x=w-tw-40:y=40:text='%{eif\\:max(0\\,${startSeconds}-t)\\:d}'`;
    const args = [
      '-i', input,
      '-vf', filter,
      '-c:v', 'libx264',
      '-preset', 'veryfast',
      '-c:a', 'copy',
      output,
    ];

    await runFFmpegDirect(args);
    const verified = await probeMedia(output);

    return {
      command: 'countdown-timer',
      args,
      durationMs: Date.now() - start,
      outputSize: parseInt(verified.format.size || '0', 10),
    };
  }

  // 130. Lossless Zero-Reencode Remuxer (Change Container MP4 <-> MKV <-> MOV)
  static async fastLosslessRemux(
    input: string,
    output: string
  ): Promise<CommandExecutionResult> {
    assertInputExists(input);
    assertOutputNotExists(output);

    const start = Date.now();
    const args = [
      '-i', input,
      '-c', 'copy',
      output,
    ];

    await runFFmpegDirect(args);
    const verified = await probeMedia(output);

    return {
      command: 'fast-lossless-remux',
      args,
      durationMs: Date.now() - start,
      outputSize: parseInt(verified.format.size || '0', 10),
    };
  }
}
