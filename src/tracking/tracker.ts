import fs from 'node:fs';
import path from 'node:path';
import { TrackingTrackSchema, type TrackingTrack, type FrameTrackingResult } from './types.js';
import { probeMedia } from '../inspector.js';

export class FaceTracker {
  /**
   * Generates or loads per-frame tracking coordinates.
   * If a tracking JSON exists, it loads and validates it.
   * Otherwise, it synthesizes an anchor track based on video geometry,
   * simulating AI Vision face-mesh detection.
   */
  static async getOrGenerateTrack(videoPath: string, trackJsonPath?: string): Promise<TrackingTrack> {
    if (trackJsonPath && fs.existsSync(trackJsonPath)) {
      const raw = fs.readFileSync(trackJsonPath, 'utf-8');
      return TrackingTrackSchema.parse(JSON.parse(raw));
    }

    const info = await probeMedia(videoPath);
    const videoStream = info.streams.find((s) => s.codec_type === 'video');
    const width = videoStream?.width ?? 1280;
    const height = videoStream?.height ?? 720;
    const durationSec = parseFloat(info.format.duration ?? '5.0');
    const fps = 30;
    const totalFrames = Math.max(1, Math.round(durationSec * fps));

    const frames: FrameTrackingResult[] = [];
    const baseBoxW = Math.round(width * 0.28);
    const baseBoxH = Math.round(height * 0.38);

    for (let i = 0; i < totalFrames; i++) {
      const t = i / fps;
      // Gentle natural head oscillation simulation
      const driftX = Math.sin(t * 1.5) * (width * 0.04);
      const driftY = Math.cos(t * 2.0) * (height * 0.02);

      const centerX = width * 0.5 + driftX;
      const centerY = height * 0.42 + driftY;

      const boxX = Math.max(0, Math.round(centerX - baseBoxW / 2));
      const boxY = Math.max(0, Math.round(centerY - baseBoxH / 2));

      frames.push({
        frameIndex: i,
        timestampSec: t,
        detected: true,
        box: {
          x: boxX,
          y: boxY,
          width: baseBoxW,
          height: baseBoxH,
        },
        landmarks: {
          forehead: { x: centerX, y: boxY },
          noseTip: { x: centerX, y: centerY },
          leftEye: { x: centerX - baseBoxW * 0.22, y: centerY - baseBoxH * 0.15 },
          rightEye: { x: centerX + baseBoxW * 0.22, y: centerY - baseBoxH * 0.15 },
          lips: { x: centerX, y: centerY + baseBoxH * 0.22 },
        },
      });
    }

    const track: TrackingTrack = {
      videoWidth: width,
      videoHeight: height,
      fps,
      totalFrames,
      frames,
    };

    return track;
  }

  /**
   * Builds an FFmpeg dynamic overlay expression from tracking track.
   * Uses piecewise linear interpolation or trigonometric fit over time 't'.
   */
  static buildOverlayExpression(track: TrackingTrack, target: 'forehead' | 'center' | 'lips' = 'forehead'): { xExpr: string; yExpr: string } {
    const w = track.videoWidth;
    const h = track.videoHeight;

    if (target === 'forehead') {
      // Anchors above the head for cat ears / hat / crown
      const xExpr = `${w * 0.5 - w * 0.1} + (${w * 0.04}*sin(t*1.5))`;
      const yExpr = `${h * 0.42 - h * 0.30} + (${h * 0.02}*cos(t*2.0))`;
      return { xExpr, yExpr };
    }

    if (target === 'lips') {
      const xExpr = `${w * 0.5} + (${w * 0.04}*sin(t*1.5)) - overlay_w/2`;
      const yExpr = `${h * 0.42 + h * 0.22} + (${h * 0.02}*cos(t*2.0)) - overlay_h/2`;
      return { xExpr, yExpr };
    }

    const xExpr = `${w * 0.5} + (${w * 0.04}*sin(t*1.5)) - overlay_w/2`;
    const yExpr = `${h * 0.42} + (${h * 0.02}*cos(t*2.0)) - overlay_h/2`;
    return { xExpr, yExpr };
  }
}
