import { spawn } from 'node:child_process';
import { assertInputExists, assertOutputNotExists } from './validator.js';
import { probeMedia } from './inspector.js';

export interface CommandExecutionResult {
  command: string;
  args: string[];
  durationMs: number;
  outputSize: number;
}

export async function runFFmpegDirect(args: string[]): Promise<void> {
  return new Promise((resolve, reject) => {
    const child = spawn('ffmpeg', ['-hide_banner', '-y', ...args], {
      windowsHide: true,
      stdio: ['ignore', 'pipe', 'pipe'],
    });

    let stderr = '';
    child.stderr.on('data', (d) => {
      stderr += d.toString();
    });

    child.on('error', (err) => {
      reject(new Error(`Failed to spawn ffmpeg: ${err.message}`));
    });

    child.on('close', (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`FFmpeg exited with code ${code}:\n${stderr.trim()}`));
      }
    });
  });
}

export class MediaEngine {
  static async convert(
    input: string,
    output: string,
    options: { crf?: number; preset?: string } = {}
  ): Promise<CommandExecutionResult> {
    assertInputExists(input);
    assertOutputNotExists(output);

    const crf = options.crf ?? 23;
    const preset = options.preset ?? 'medium';
    const start = Date.now();

    const primaryArgs = [
      '-i', input,
      '-c:v', 'libx264',
      '-crf', String(crf),
      '-preset', preset,
      '-c:a', 'aac',
      '-b:a', '128k',
      output,
    ];

    try {
      await runFFmpegDirect(primaryArgs);
    } catch (err) {
      console.warn(`[MediaEngine] Convert attempt failed. Retrying once with fallback (preset=ultrafast, crf=28)...`);
      const fallbackArgs = [
        '-i', input,
        '-c:v', 'libx264',
        '-crf', '28',
        '-preset', 'ultrafast',
        '-c:a', 'aac',
        '-b:a', '96k',
        output,
      ];
      await runFFmpegDirect(fallbackArgs);
    }

    const verified = await probeMedia(output);
    const size = parseInt(verified.format.size || '0', 10);

    return {
      command: 'convert',
      args: primaryArgs,
      durationMs: Date.now() - start,
      outputSize: size,
    };
  }

  static async trim(
    input: string,
    output: string,
    options: { start?: string; duration?: string; to?: string }
  ): Promise<CommandExecutionResult> {
    assertInputExists(input);
    assertOutputNotExists(output);

    const start = Date.now();
    const args: string[] = [];

    if (options.start) {
      args.push('-ss', options.start);
    }
    args.push('-i', input);

    if (options.duration) {
      args.push('-t', options.duration);
    } else if (options.to) {
      args.push('-to', options.to);
    }

    // Fast stream copy MVP
    args.push('-c', 'copy', output);

    await runFFmpegDirect(args);
    const verified = await probeMedia(output);

    return {
      command: 'trim',
      args,
      durationMs: Date.now() - start,
      outputSize: parseInt(verified.format.size || '0', 10),
    };
  }

  static async extractAudio(
    input: string,
    output: string,
    options: { bitrate?: string } = {}
  ): Promise<CommandExecutionResult> {
    assertInputExists(input);
    assertOutputNotExists(output);

    const start = Date.now();
    const args = ['-i', input, '-vn'];

    if (options.bitrate) {
      args.push('-b:a', options.bitrate);
    }
    args.push(output);

    await runFFmpegDirect(args);
    const verified = await probeMedia(output);

    return {
      command: 'extract-audio',
      args,
      durationMs: Date.now() - start,
      outputSize: parseInt(verified.format.size || '0', 10),
    };
  }

  static async thumbnail(
    input: string,
    output: string,
    options: { at?: string } = {}
  ): Promise<CommandExecutionResult> {
    assertInputExists(input);
    assertOutputNotExists(output);

    const start = Date.now();
    const at = options.at ?? '00:00:01';
    const args = ['-ss', at, '-i', input, '-vframes', '1', output];

    await runFFmpegDirect(args);

    return {
      command: 'thumbnail',
      args,
      durationMs: Date.now() - start,
      outputSize: 0,
    };
  }

  static async muxSubs(
    input: string,
    output: string,
    options: { subtitles: string }
  ): Promise<CommandExecutionResult> {
    assertInputExists(input);
    assertInputExists(options.subtitles);
    assertOutputNotExists(output);

    const start = Date.now();
    const args = [
      '-i', input,
      '-i', options.subtitles,
      '-c', 'copy',
      '-c:s', 'srt',
      output,
    ];

    await runFFmpegDirect(args);
    const verified = await probeMedia(output);

    return {
      command: 'mux-subs',
      args,
      durationMs: Date.now() - start,
      outputSize: parseInt(verified.format.size || '0', 10),
    };
  }
}
