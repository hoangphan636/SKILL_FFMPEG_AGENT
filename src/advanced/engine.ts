import fs from 'node:fs';
import path from 'node:path';
import { spawn } from 'node:child_process';
import { probeMedia } from '../inspector.js';
import { runFFmpegDirect, type CommandExecutionResult } from '../executor.js';
import { assertInputExists, assertOutputNotExists } from '../validator.js';

export class AdvancedMediaEngine {
  // 1. Target Size Bitrate Optimizer (Two-Pass calculation)
  static async compressToTargetSize(
    input: string,
    output: string,
    targetSizeMB: number
  ): Promise<CommandExecutionResult> {
    assertInputExists(input);
    assertOutputNotExists(output);

    const info = await probeMedia(input);
    const duration = parseFloat(info.format.duration ?? '10.0');
    const targetBits = targetSizeMB * 8 * 1024 * 1024;
    const audioBitrateK = 128;
    const totalBitrateK = Math.floor(targetBits / duration / 1000);
    const videoBitrateK = Math.max(100, totalBitrateK - audioBitrateK);

    const start = Date.now();
    const args = [
      '-i', input,
      '-c:v', 'libx264',
      '-b:v', `${videoBitrateK}k`,
      '-maxrate', `${Math.floor(videoBitrateK * 1.3)}k`,
      '-bufsize', `${videoBitrateK * 2}k`,
      '-preset', 'fast',
      '-c:a', 'aac',
      '-b:a', `${audioBitrateK}k`,
      output,
    ];

    await runFFmpegDirect(args);
    const verified = await probeMedia(output);

    return {
      command: 'compress-target-size',
      args,
      durationMs: Date.now() - start,
      outputSize: parseInt(verified.format.size || '0', 10),
    };
  }

  // 2. Hardware Acceleration Auto-Detection
  static async detectHardwareAccel(): Promise<string[]> {
    return new Promise((resolve) => {
      const child = spawn('ffmpeg', ['-hwaccels'], { windowsHide: true });
      let stdout = '';
      child.stdout.on('data', (d) => { stdout += d.toString(); });
      child.on('close', () => {
        const lines = stdout.split('\n').map((l) => l.trim()).filter((l) => l && !l.includes('Hardware acceleration'));
        resolve(lines);
      });
      child.on('error', () => resolve([]));
    });
  }

  // 3. Audio Loudness Normalization (EBU R128)
  static async normalizeAudio(
    input: string,
    output: string,
    targetI: number = -16
  ): Promise<CommandExecutionResult> {
    assertInputExists(input);
    assertOutputNotExists(output);

    const start = Date.now();
    const args = [
      '-i', input,
      '-c:v', 'copy',
      '-af', `loudnorm=I=${targetI}:TP=-1.5:LRA=11`,
      output,
    ];

    await runFFmpegDirect(args);
    const verified = await probeMedia(output);

    return {
      command: 'normalize-audio',
      args,
      durationMs: Date.now() - start,
      outputSize: parseInt(verified.format.size || '0', 10),
    };
  }

  // 4. Burn-in Hard Subtitles
  static async burnSubtitles(
    input: string,
    subtitlesPath: string,
    output: string
  ): Promise<CommandExecutionResult> {
    assertInputExists(input);
    assertInputExists(subtitlesPath);
    assertOutputNotExists(output);

    const start = Date.now();
    // Normalize path for FFmpeg filter escape on Windows
    const escapedSubs = path.resolve(subtitlesPath).replace(/\\/g, '/').replace(/:/g, '\\:');
    const args = [
      '-i', input,
      '-vf', `subtitles='${escapedSubs}'`,
      '-c:v', 'libx264',
      '-preset', 'veryfast',
      '-c:a', 'copy',
      output,
    ];

    await runFFmpegDirect(args);
    const verified = await probeMedia(output);

    return {
      command: 'burn-subtitles',
      args,
      durationMs: Date.now() - start,
      outputSize: parseInt(verified.format.size || '0', 10),
    };
  }

  // 5. Intelligent Smart Crop to 9:16 (TikTok / Reels / Shorts)
  static async smartCrop916(
    input: string,
    output: string
  ): Promise<CommandExecutionResult> {
    assertInputExists(input);
    assertOutputNotExists(output);

    const start = Date.now();
    // Crops to 9:16 center with scale fallback
    const args = [
      '-i', input,
      '-vf', "crop='min(iw,ih*9/16)':'min(ih,iw*16/9)':(iw-out_w)/2:(ih-out_h)/2,scale=1080:1920",
      '-c:v', 'libx264',
      '-preset', 'veryfast',
      '-c:a', 'copy',
      output,
    ];

    await runFFmpegDirect(args);
    const verified = await probeMedia(output);

    return {
      command: 'smart-crop-916',
      args,
      durationMs: Date.now() - start,
      outputSize: parseInt(verified.format.size || '0', 10),
    };
  }

  // 6. Fast Animated GIF Generator with Palette Optimization
  static async createOptimizedGif(
    input: string,
    output: string,
    options: { fps?: number; width?: number; start?: string; duration?: string } = {}
  ): Promise<CommandExecutionResult> {
    assertInputExists(input);
    assertOutputNotExists(output);

    const fps = options.fps ?? 15;
    const width = options.width ?? 480;
    const start = Date.now();

    const args: string[] = [];
    if (options.start) args.push('-ss', options.start);
    args.push('-i', input);
    if (options.duration) args.push('-t', options.duration);

    const filter = `fps=${fps},scale=${width}:-1:flags=lanczos,split[s0][s1];[s0]palettegen=max_colors=128[p];[s1][p]paletteuse=dither=bayer`;
    args.push('-vf', filter, output);

    await runFFmpegDirect(args);

    const verified = await probeMedia(output);
    return {
      command: 'create-gif',
      args,
      durationMs: Date.now() - start,
      outputSize: parseInt(verified.format.size || '0', 10),
    };
  }

  // 7. Audio Waveform Video Visualizer
  static async generateAudioVisualizer(
    audioInput: string,
    output: string,
    mode: 'waves' | 'bars' = 'waves'
  ): Promise<CommandExecutionResult> {
    assertInputExists(audioInput);
    assertOutputNotExists(output);

    const start = Date.now();
    const filter = mode === 'bars'
      ? 'showcqt=s=1280x720:fps=30:count=5'
      : 'showwaves=s=1280x720:mode=line:colors=cyan:rate=30';

    const args = [
      '-i', audioInput,
      '-filter_complex', `[0:a]${filter}[v]`,
      '-map', '[v]',
      '-map', '0:a',
      '-c:v', 'libx264',
      '-preset', 'veryfast',
      '-c:a', 'aac',
      output,
    ];

    await runFFmpegDirect(args);
    const verified = await probeMedia(output);

    return {
      command: 'audio-visualizer',
      args,
      durationMs: Date.now() - start,
      outputSize: parseInt(verified.format.size || '0', 10),
    };
  }

  // 8. Video Watermark / Logo Overlay
  static async addWatermark(
    input: string,
    watermarkImage: string,
    output: string,
    position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' = 'bottom-right',
    opacity: number = 0.8
  ): Promise<CommandExecutionResult> {
    assertInputExists(input);
    assertInputExists(watermarkImage);
    assertOutputNotExists(output);

    const start = Date.now();
    let posExpr = 'W-w-20:H-h-20'; // bottom-right
    if (position === 'top-left') posExpr = '20:20';
    if (position === 'top-right') posExpr = 'W-w-20:20';
    if (position === 'bottom-left') posExpr = '20:H-h-20';

    const filter = `[1:v]format=rgba,colorchannelmixer=aa=${opacity}[logo];[0:v][logo]overlay=${posExpr}`;
    const args = [
      '-i', input,
      '-i', watermarkImage,
      '-filter_complex', filter,
      '-c:v', 'libx264',
      '-preset', 'veryfast',
      '-c:a', 'copy',
      output,
    ];

    await runFFmpegDirect(args);
    const verified = await probeMedia(output);

    return {
      command: 'add-watermark',
      args,
      durationMs: Date.now() - start,
      outputSize: parseInt(verified.format.size || '0', 10),
    };
  }

  // 9. Black Frame & Silence Detector (Auto-Cut / QC)
  static async detectBlackAndSilence(input: string): Promise<{ blackFramesCount: number; silenceEventsCount: number }> {
    assertInputExists(input);

    return new Promise((resolve) => {
      const child = spawn('ffmpeg', [
        '-i', input,
        '-vf', 'blackdetect=d=0.5:pix_th=0.10',
        '-af', 'silencedetect=noise=-30dB:d=0.5',
        '-f', 'null', '-',
      ], { windowsHide: true });

      let stderr = '';
      child.stderr.on('data', (d) => { stderr += d.toString(); });
      child.on('close', () => {
        const blackMatches = stderr.match(/black_start/g) || [];
        const silenceMatches = stderr.match(/silence_start/g) || [];
        resolve({
          blackFramesCount: blackMatches.length,
          silenceEventsCount: silenceMatches.length,
        });
      });
      child.on('error', () => resolve({ blackFramesCount: 0, silenceEventsCount: 0 }));
    });
  }

  // 10. Lossless Video Concatenation
  static async concatMediaList(
    inputs: string[],
    output: string
  ): Promise<CommandExecutionResult> {
    if (inputs.length < 2) throw new Error('At least 2 media inputs required for concat');
    for (const inp of inputs) assertInputExists(inp);
    assertOutputNotExists(output);

    const start = Date.now();
    const listFile = path.resolve('work', `concat_${Date.now()}.txt`);
    const content = inputs.map((f) => `file '${path.resolve(f).replace(/'/g, "'\\''")}'`).join('\n');
    fs.writeFileSync(listFile, content, 'utf-8');

    const args = [
      '-f', 'concat',
      '-safe', '0',
      '-i', listFile,
      '-c', 'copy',
      output,
    ];

    try {
      await runFFmpegDirect(args);
    } finally {
      if (fs.existsSync(listFile)) fs.unlinkSync(listFile);
    }

    const verified = await probeMedia(output);
    return {
      command: 'concat-media',
      args,
      durationMs: Date.now() - start,
      outputSize: parseInt(verified.format.size || '0', 10),
    };
  }
}
