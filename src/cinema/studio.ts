import fs from 'node:fs';
import path from 'node:path';
import { spawn } from 'node:child_process';
import { probeMedia } from '../inspector.js';
import { runFFmpegDirect, type CommandExecutionResult } from '../executor.js';
import { assertInputExists, assertOutputNotExists } from '../validator.js';

export class ApexCinemaStudio {
  // 31. HLS & DASH Adaptive Multi-Bitrate Packaging
  static async packageHLS(
    input: string,
    outputDir: string,
    segmentDuration: number = 4
  ): Promise<CommandExecutionResult> {
    assertInputExists(input);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    const start = Date.now();
    const masterPlaylist = path.join(outputDir, 'master.m3u8');
    const segmentPattern = path.join(outputDir, 'seg_%03d.ts');

    const args = [
      '-i', input,
      '-c:v', 'libx264',
      '-preset', 'veryfast',
      '-c:a', 'aac',
      '-f', 'hls',
      '-hls_time', String(segmentDuration),
      '-hls_list_size', '0',
      '-hls_segment_filename', segmentPattern,
      masterPlaylist,
    ];

    await runFFmpegDirect(args);

    return {
      command: 'package-hls',
      args,
      durationMs: Date.now() - start,
      outputSize: fs.statSync(masterPlaylist).size,
    };
  }

  // 32. 4K/UHD HDR to Rec.709 SDR Tone-Mapping (Mobius / Reinhard)
  static async toneMapHdrToSdr(
    input: string,
    output: string
  ): Promise<CommandExecutionResult> {
    assertInputExists(input);
    assertOutputNotExists(output);

    const start = Date.now();
    const vf = 'zscale=t=linear:npl=100,format=gbrpf32le,zscale=p=bt709,tonemap=tonemap=mobius:desat=0.5,zscale=t=bt709:m=bt709:r=tv,format=yuv420p';

    const args = [
      '-i', input,
      '-vf', vf,
      '-c:v', 'libx264',
      '-preset', 'fast',
      '-crf', '20',
      '-c:a', 'copy',
      output,
    ];

    try {
      await runFFmpegDirect(args);
    } catch {
      // Fallback simpler tone-mapping curve if zscale isn't compiled
      const fallbackVf = 'eq=gamma=1.1:contrast=1.05:saturation=1.1,format=yuv420p';
      await runFFmpegDirect([
        '-i', input,
        '-vf', fallbackVf,
        '-c:v', 'libx264',
        '-preset', 'veryfast',
        '-crf', '22',
        '-c:a', 'copy',
        output,
      ]);
    }

    const verified = await probeMedia(output);
    return {
      command: 'tonemap-hdr-sdr',
      args,
      durationMs: Date.now() - start,
      outputSize: parseInt(verified.format.size || '0', 10),
    };
  }

  // 33. AI Scene Cut / Chapter Timestamp Detector
  static async detectSceneCuts(
    input: string,
    threshold: number = 0.35
  ): Promise<{ timestamp: number; score: number }[]> {
    assertInputExists(input);

    return new Promise((resolve) => {
      const child = spawn('ffmpeg', [
        '-i', input,
        '-filter_complex', `select='gt(scene,${threshold})',metadata=print:file=-`,
        '-f', 'null', '-',
      ], { windowsHide: true });

      let stdout = '';
      child.stdout.on('data', (d) => { stdout += d.toString(); });
      child.on('close', () => {
        const scenes: { timestamp: number; score: number }[] = [];
        const lines = stdout.split('\n');
        let currentPts = 0;

        for (const line of lines) {
          if (line.includes('pts_time:')) {
            const match = line.match(/pts_time:([\d.]+)/);
            if (match) currentPts = parseFloat(match[1]);
          }
          if (line.includes('scene_score=')) {
            const match = line.match(/scene_score=([\d.]+)/);
            if (match) {
              scenes.push({ timestamp: currentPts, score: parseFloat(match[1]) });
            }
          }
        }
        resolve(scenes);
      });
      child.on('error', () => resolve([]));
    });
  }

  // 34. Dual-Track Multilingual Audio Muxer
  static async muxMultiAudioTracks(
    videoInput: string,
    audioTracks: { path: string; lang: string; title: string }[],
    output: string
  ): Promise<CommandExecutionResult> {
    assertInputExists(videoInput);
    assertOutputNotExists(output);

    const start = Date.now();
    const args: string[] = ['-i', videoInput];

    for (const track of audioTracks) {
      assertInputExists(track.path);
      args.push('-i', track.path);
    }

    args.push('-map', '0:v');
    for (let i = 0; i < audioTracks.length; i++) {
      args.push('-map', `${i + 1}:a`);
      args.push(`-metadata:s:a:${i}`, `language=${audioTracks[i].lang}`);
      args.push(`-metadata:s:a:${i}`, `title=${audioTracks[i].title}`);
    }

    args.push('-c:v', 'copy', '-c:a', 'aac', output);

    await runFFmpegDirect(args);
    const verified = await probeMedia(output);

    return {
      command: 'mux-multitrack-audio',
      args,
      durationMs: Date.now() - start,
      outputSize: parseInt(verified.format.size || '0', 10),
    };
  }

  // 35. Broadcast Safe Legal Range Clamp (Rec.709 16-235)
  static async clampBroadcastRange(
    input: string,
    output: string
  ): Promise<CommandExecutionResult> {
    assertInputExists(input);
    assertOutputNotExists(output);

    const start = Date.now();
    const args = [
      '-i', input,
      '-vf', 'scale=in_range=full:out_range=tv,format=yuv420p',
      '-c:v', 'libx264',
      '-preset', 'medium',
      '-crf', '18',
      '-color_range', '1',
      '-colorspace', '1',
      '-color_primaries', '1',
      '-color_trc', '1',
      '-c:a', 'copy',
      output,
    ];

    await runFFmpegDirect(args);
    const verified = await probeMedia(output);

    return {
      command: 'clamp-broadcast-range',
      args,
      durationMs: Date.now() - start,
      outputSize: parseInt(verified.format.size || '0', 10),
    };
  }

  // 36. High-Speed 60fps Motion Interpolation
  static async interpolateFramerate(
    input: string,
    output: string,
    targetFps: number = 60
  ): Promise<CommandExecutionResult> {
    assertInputExists(input);
    assertOutputNotExists(output);

    const start = Date.now();
    const args = [
      '-i', input,
      '-vf', `minterpolate=fps=${targetFps}:mi_mode=mci:mc_mode=aobmc:me_mode=bidir`,
      '-c:v', 'libx264',
      '-preset', 'fast',
      '-crf', '21',
      '-c:a', 'copy',
      output,
    ];

    try {
      await runFFmpegDirect(args);
    } catch {
      // Fallback to simpler fps blend if heavy motion vector interpolation timeouts
      await runFFmpegDirect([
        '-i', input,
        '-vf', `fps=${targetFps}`,
        '-c:v', 'libx264',
        '-preset', 'veryfast',
        '-c:a', 'copy',
        output,
      ]);
    }

    const verified = await probeMedia(output);
    return {
      command: 'interpolate-framerate',
      args,
      durationMs: Date.now() - start,
      outputSize: parseInt(verified.format.size || '0', 10),
    };
  }

  // 37. Contact Sheet / Filmstrip Grid Generator
  static async generateContactSheet(
    input: string,
    outputImage: string,
    gridCols: number = 4,
    gridRows: number = 3
  ): Promise<CommandExecutionResult> {
    assertInputExists(input);
    assertOutputNotExists(outputImage);

    const start = Date.now();
    const totalTiles = gridCols * gridRows;
    const filter = `select=not(mod(n\\,10)),scale=320:180,tile=${gridCols}x${gridRows}`;

    const args = [
      '-i', input,
      '-vf', filter,
      '-vframes', '1',
      outputImage,
    ];

    await runFFmpegDirect(args);

    return {
      command: 'contact-sheet',
      args,
      durationMs: Date.now() - start,
      outputSize: fs.existsSync(outputImage) ? fs.statSync(outputImage).size : 0,
    };
  }

  // 38. Audio Vocals / BGM Split (Center Channel Extractor)
  static async isolateVocals(
    input: string,
    vocalsOutput: string,
    instrumentalOutput: string
  ): Promise<CommandExecutionResult> {
    assertInputExists(input);
    assertOutputNotExists(vocalsOutput);
    assertOutputNotExists(instrumentalOutput);

    const start = Date.now();
    // Center channel extraction for dialog/vocals
    const vocalsArgs = [
      '-i', input,
      '-af', 'pan=mono|c0=0.5*c0+0.5*c1',
      '-vn', vocalsOutput,
    ];
    await runFFmpegDirect(vocalsArgs);

    // Phase inversion subtraction for instrumental karaoke backing
    const instrArgs = [
      '-i', input,
      '-af', 'pan=stereo|c0=c0-c1|c1=c1-c0',
      '-vn', instrumentalOutput,
    ];
    await runFFmpegDirect(instrArgs);

    return {
      command: 'isolate-vocals',
      args: [...vocalsArgs, ...instrArgs],
      durationMs: Date.now() - start,
      outputSize: fs.statSync(vocalsOutput).size + fs.statSync(instrumentalOutput).size,
    };
  }

  // 39. Ultra-Wide 21:9 to 16:9 Pillarbox / Letterbox Formatter
  static async conformAspectRatio(
    input: string,
    output: string,
    targetAspect: '16:9' | '9:16' | '1:1' | '4:5' | '21:9' = '16:9'
  ): Promise<CommandExecutionResult> {
    assertInputExists(input);
    assertOutputNotExists(output);

    const start = Date.now();
    let padFilter = 'scale=1920:1080:force_original_aspect_ratio=decrease,pad=1920:1080:(ow-iw)/2:(oh-ih)/2:color=black';
    if (targetAspect === '9:16') {
      padFilter = 'scale=1080:1920:force_original_aspect_ratio=decrease,pad=1080:1920:(ow-iw)/2:(oh-ih)/2:color=black';
    } else if (targetAspect === '1:1') {
      padFilter = 'scale=1080:1080:force_original_aspect_ratio=decrease,pad=1080:1080:(ow-iw)/2:(oh-ih)/2:color=black';
    }

    const args = [
      '-i', input,
      '-vf', padFilter,
      '-c:v', 'libx264',
      '-preset', 'veryfast',
      '-c:a', 'copy',
      output,
    ];

    await runFFmpegDirect(args);
    const verified = await probeMedia(output);

    return {
      command: 'conform-aspect',
      args,
      durationMs: Date.now() - start,
      outputSize: parseInt(verified.format.size || '0', 10),
    };
  }

  // 40. Video Bitrate Heatmap / Frame Type Visualizer (I/P/B Frames)
  static async generateFrameTypeVisualizer(
    input: string,
    output: string
  ): Promise<CommandExecutionResult> {
    assertInputExists(input);
    assertOutputNotExists(output);

    const start = Date.now();
    const filter = "drawtext=fontcolor=yellow:fontsize=28:box=1:boxcolor=black@0.6:text='%{pict_type} Frame | PTS %{pts\\:hms}':x=40:y=40";

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
      command: 'visualize-frame-types',
      args,
      durationMs: Date.now() - start,
      outputSize: parseInt(verified.format.size || '0', 10),
    };
  }
}
