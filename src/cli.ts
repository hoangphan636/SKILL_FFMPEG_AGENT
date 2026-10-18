import { Command } from 'commander';
import { probeMedia } from './inspector.js';
import { MediaEngine } from './executor.js';
import { runBatchManifest } from './batch.js';
import { EffectEngine } from './effects/engine.js';
import { FaceTracker } from './tracking/tracker.js';
import { AdvancedMediaEngine } from './advanced/engine.js';
import { ApexCinemaStudio } from './cinema/studio.js';
import { EnterpriseTitanSuite } from './titan/suite.js';
import { InfiniteApexStudio } from './infinite/studio.js';
import type { EffectCategory } from './effects/schema.js';

const program = new Command();

program
  .name('ffmpeg-agent')
  .description('Infinite Apex Enterprise FFmpeg Media Agent & 120+ Suite on Windows')
  .version('6.0.0');

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

// --- 2. ADVANCED PROFESSIONAL SUITE ---
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

// --- 3. APEX CINEMA & BROADCAST STUDIO ---
program
  .command('package-hls <input> <outputDir>')
  .description('Package video into adaptive HTTP Live Streaming (HLS m3u8 + ts segments)')
  .option('--segment-duration <number>', 'Segment duration in seconds', (v) => parseFloat(v), 4)
  .action(async (input: string, outputDir: string, options: { segmentDuration: number }) => {
    try {
      const result = await ApexCinemaStudio.packageHLS(input, outputDir, options.segmentDuration);
      console.log(`[Success] Packaged into HLS stream in ${result.durationMs}ms at "${outputDir}"`);
    } catch (err) {
      console.error(`[Error] ${(err as Error).message}`);
      process.exit(1);
    }
  });

program
  .command('detect-scenes <input>')
  .description('Detect cinematic scene cuts and shot transitions with timestamp scores')
  .option('--threshold <number>', 'Scene cut sensitivity 0.1 to 1.0', (v) => parseFloat(v), 0.35)
  .action(async (input: string, options: { threshold: number }) => {
    try {
      const scenes = await ApexCinemaStudio.detectSceneCuts(input, options.threshold);
      console.log(`Found ${scenes.length} scene transition(s):`);
      console.log(JSON.stringify(scenes, null, 2));
    } catch (err) {
      console.error(`[Error] ${(err as Error).message}`);
      process.exit(1);
    }
  });

program
  .command('contact-sheet <input> <outputImage>')
  .description('Generate filmstrip contact sheet preview storyboard grid')
  .option('--cols <number>', 'Grid columns', (v) => parseInt(v, 10), 4)
  .option('--rows <number>', 'Grid rows', (v) => parseInt(v, 10), 3)
  .action(async (input: string, outputImage: string, options: { cols: number; rows: number }) => {
    try {
      const result = await ApexCinemaStudio.generateContactSheet(input, outputImage, options.cols, options.rows);
      console.log(`[Success] Contact sheet generated in ${result.durationMs}ms at "${outputImage}"`);
    } catch (err) {
      console.error(`[Error] ${(err as Error).message}`);
      process.exit(1);
    }
  });

program
  .command('isolate-vocals <input> <vocalsOut> <instrumentalOut>')
  .description('Split dialog/vocals and instrumental background music tracks')
  .action(async (input: string, vocalsOut: string, instrumentalOut: string) => {
    try {
      const result = await ApexCinemaStudio.isolateVocals(input, vocalsOut, instrumentalOut);
      console.log(`[Success] Vocals and Instrumental split in ${result.durationMs}ms`);
    } catch (err) {
      console.error(`[Error] ${(err as Error).message}`);
      process.exit(1);
    }
  });

program
  .command('conform-aspect <input> <output>')
  .description('Conform video to broadcast standard aspect ratio with letterbox/pillarbox padding')
  .option('--ratio <aspect>', 'Target aspect ratio (16:9, 9:16, 1:1, 21:9)', '16:9')
  .action(async (input: string, output: string, options: { ratio: any }) => {
    try {
      const result = await ApexCinemaStudio.conformAspectRatio(input, output, options.ratio);
      console.log(`[Success] Conformed to ${options.ratio} in ${result.durationMs}ms`);
    } catch (err) {
      console.error(`[Error] ${(err as Error).message}`);
      process.exit(1);
    }
  });

// --- 4. ENTERPRISE TITAN SUITE ---
program
  .command('burn-timecode <input> <output>')
  .description('Burn-in SMPTE Timecode / LTC counter onto video for editorial dailies')
  .option('--timecode <tc>', 'Starting timecode (e.g. 01:00:00:00)', '01:00:00:00')
  .option('--fps <number>', 'Framerate for drop-frame/non-drop calculation', (v) => parseInt(v, 10), 30)
  .action(async (input: string, output: string, options: { timecode: string; fps: number }) => {
    try {
      const result = await EnterpriseTitanSuite.burnTimecode(input, output, options);
      console.log(`[Success] SMPTE Timecode burned into ${output} in ${result.durationMs}ms`);
    } catch (err) {
      console.error(`[Error] ${(err as Error).message}`);
      process.exit(1);
    }
  });

program
  .command('stabilize <input> <output>')
  .description('Stabilize shaky handheld action footage using deshake motion vectors')
  .action(async (input: string, output: string) => {
    try {
      const result = await EnterpriseTitanSuite.stabilizeVideo(input, output);
      console.log(`[Success] Footage stabilized into ${output} in ${result.durationMs}ms`);
    } catch (err) {
      console.error(`[Error] ${(err as Error).message}`);
      process.exit(1);
    }
  });

program
  .command('animated-lower-third <input> <text> <subtitle> <output>')
  .description('Overlay dynamic animated lower-third title card with smooth slide-in')
  .action(async (input: string, text: string, subtitle: string, output: string) => {
    try {
      const result = await EnterpriseTitanSuite.overlayAnimatedLowerThird(input, text, subtitle, output);
      console.log(`[Success] Animated lower-third applied into ${output} in ${result.durationMs}ms`);
    } catch (err) {
      console.error(`[Error] ${(err as Error).message}`);
      process.exit(1);
    }
  });

program
  .command('limit-audio <input> <output>')
  .description('Apply studio broadcast audio brickwall limiter preventing digital clipping')
  .action(async (input: string, output: string) => {
    try {
      const result = await EnterpriseTitanSuite.applyBroadcastLimiter(input, output);
      console.log(`[Success] Audio brickwall limited into ${output} in ${result.durationMs}ms`);
    } catch (err) {
      console.error(`[Error] ${(err as Error).message}`);
      process.exit(1);
    }
  });

program
  .command('benchmark-quality <reference> <distorted>')
  .description('Benchmark perceptual video quality using SSIM & PSNR objective metrics')
  .action(async (reference: string, distorted: string) => {
    try {
      const metrics = await EnterpriseTitanSuite.benchmarkVideoQuality(reference, distorted);
      console.log('--- Video Quality Benchmark Report ---');
      console.log(`PSNR Average : ${metrics.psnrAvg.toFixed(2)} dB`);
      console.log(`SSIM Average : ${metrics.ssimAvg.toFixed(4)} (Perceptual similarity)`);
    } catch (err) {
      console.error(`[Error] ${(err as Error).message}`);
      process.exit(1);
    }
  });

program
  .command('spritesheet [options] <input> <outputPng>')
  .description('Generate web video scrubbing thumbnail sprite sheet (10x10 tile matrix)')
  .option('--interval <sec>', 'Seconds between thumbnail captures', (v) => parseFloat(v), 2)
  .action(async (input: string, outputPng: string, options: { interval: number }) => {
    try {
      const result = await EnterpriseTitanSuite.generateThumbnailSpritesheet(input, outputPng, options.interval);
      console.log(`[Success] Scrubbing spritesheet generated into ${outputPng} in ${result.durationMs}ms`);
    } catch (err) {
      console.error(`[Error] ${(err as Error).message}`);
      process.exit(1);
    }
  });

program
  .command('sanitize <input> <output>')
  .description('Sanitize video metadata, stripping GPS coordinates, camera model and Exif privacy tags')
  .action(async (input: string, output: string) => {
    try {
      const result = await EnterpriseTitanSuite.sanitizeMetadata(input, output);
      console.log(`[Success] Metadata sanitized into ${output} in ${result.durationMs}ms`);
    } catch (err) {
      console.error(`[Error] ${(err as Error).message}`);
      process.exit(1);
    }
  });

program
  .command('pillarbox-blur <input> <output>')
  .description('Embed vertical portrait video onto 16:9 widescreen with dynamic blurred background')
  .action(async (input: string, output: string) => {
    try {
      const result = await EnterpriseTitanSuite.dynamicBlurBackgroundPillarbox(input, output);
      console.log(`[Success] Blurred pillarbox generated into ${output} in ${result.durationMs}ms`);
    } catch (err) {
      console.error(`[Error] ${(err as Error).message}`);
      process.exit(1);
    }
  });

program
  .command('clean-speech <input> <output>')
  .description('Filter vocal rumble and apply de-essing speech EQ')
  .action(async (input: string, output: string) => {
    try {
      const result = await EnterpriseTitanSuite.cleanSpeechAudio(input, output);
      console.log(`[Success] Cleaned speech audio into ${output} in ${result.durationMs}ms`);
    } catch (err) {
      console.error(`[Error] ${(err as Error).message}`);
      process.exit(1);
    }
  });

// --- 5. INFINITE APEX SUITE (FEATURES 91-100) ---
program
  .command('insert-broll <mainVideo> <bRollVideo> <output>')
  .description('Insert secondary B-Roll footage PIP at specific timestamp')
  .option('--start <sec>', 'Timestamp in seconds to begin B-roll', (v) => parseFloat(v), 2)
  .option('--duration <sec>', 'Duration in seconds of B-roll', (v) => parseFloat(v), 3)
  .action(async (mainVideo: string, bRollVideo: string, output: string, options: { start: number; duration: number }) => {
    try {
      const result = await InfiniteApexStudio.insertBRoll(mainVideo, bRollVideo, output, {
        startTimeSec: options.start,
        durationSec: options.duration,
      });
      console.log(`[Success] B-Roll inserted into ${output} in ${result.durationMs}ms`);
    } catch (err) {
      console.error(`[Error] ${(err as Error).message}`);
      process.exit(1);
    }
  });

program
  .command('auto-ducking <voiceInput> <bgmInput> <output>')
  .description('Auto-duck background music track under vocal speech audio')
  .action(async (voiceInput: string, bgmInput: string, output: string) => {
    try {
      const result = await InfiniteApexStudio.autoAudioDucking(voiceInput, bgmInput, output);
      console.log(`[Success] Audio auto-ducked into ${output} in ${result.durationMs}ms`);
    } catch (err) {
      console.error(`[Error] ${(err as Error).message}`);
      process.exit(1);
    }
  });

program
  .command('add-progress-bar <input> <output>')
  .description('Add animated linear progress bar indicator for TikTok / Reels')
  .option('--height <px>', 'Height of bar in pixels', (v) => parseInt(v, 10), 8)
  .action(async (input: string, output: string, options: { height: number }) => {
    try {
      const result = await InfiniteApexStudio.addProgressBar(input, output, options.height);
      console.log(`[Success] Progress bar added into ${output} in ${result.durationMs}ms`);
    } catch (err) {
      console.error(`[Error] ${(err as Error).message}`);
      process.exit(1);
    }
  });

program
  .command('blur-privacy <input> <output>')
  .description('Apply center oval privacy blur to obscure faces / sensitive content')
  .action(async (input: string, output: string) => {
    try {
      const result = await InfiniteApexStudio.blurCenterPrivacy(input, output);
      console.log(`[Success] Center privacy blur applied into ${output} in ${result.durationMs}ms`);
    } catch (err) {
      console.error(`[Error] ${(err as Error).message}`);
      process.exit(1);
    }
  });

program
  .command('extract-keyframes <input> <outputDir>')
  .description('Extract true I-Frame visual keyframes for fast scene overview')
  .action(async (input: string, outputDir: string) => {
    try {
      const result = await InfiniteApexStudio.extractKeyframes(input, outputDir);
      console.log(`[Success] Extracted keyframes to "${outputDir}" in ${result.durationMs}ms`);
    } catch (err) {
      console.error(`[Error] ${(err as Error).message}`);
      process.exit(1);
    }
  });

program
  .command('follower-cta <input> <output>')
  .description('Overlay pop-up animated Call-To-Action (SUBSCRIBE NOW / FOLLOW)')
  .option('--text <ctaText>', 'CTA text banner', 'SUBSCRIBE NOW')
  .action(async (input: string, output: string, options: { text: string }) => {
    try {
      const result = await InfiniteApexStudio.overlayFollowerCTA(input, output, options.text);
      console.log(`[Success] Follower CTA overlaid into ${output} in ${result.durationMs}ms`);
    } catch (err) {
      console.error(`[Error] ${(err as Error).message}`);
      process.exit(1);
    }
  });

program
  .command('widen-stereo <input> <output>')
  .description('Widen stereo soundstage width for headphone immersion')
  .action(async (input: string, output: string) => {
    try {
      const result = await InfiniteApexStudio.widenStereoAudio(input, output);
      console.log(`[Success] Stereo audio widened into ${output} in ${result.durationMs}ms`);
    } catch (err) {
      console.error(`[Error] ${(err as Error).message}`);
      process.exit(1);
    }
  });

// --- 6. EFFECTS & AI TRACKING COMMANDS ---
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
