import { z } from 'zod';

export const BoundingBoxSchema = z.object({
  x: z.number().min(0),
  y: z.number().min(0),
  width: z.number().positive(),
  height: z.number().positive(),
});

export const LandmarkPointSchema = z.object({
  x: z.number(),
  y: z.number(),
  z: z.number().optional(),
});

export const FrameTrackingResultSchema = z.object({
  frameIndex: z.number().int().nonnegative(),
  timestampSec: z.number().nonnegative(),
  detected: z.boolean(),
  box: BoundingBoxSchema.optional(),
  landmarks: z.record(z.string(), LandmarkPointSchema).optional(),
});

export const TrackingTrackSchema = z.object({
  videoWidth: z.number().int().positive(),
  videoHeight: z.number().int().positive(),
  fps: z.number().positive(),
  totalFrames: z.number().int().positive(),
  frames: z.array(FrameTrackingResultSchema),
});

export type BoundingBox = z.infer<typeof BoundingBoxSchema>;
export type LandmarkPoint = z.infer<typeof LandmarkPointSchema>;
export type FrameTrackingResult = z.infer<typeof FrameTrackingResultSchema>;
export type TrackingTrack = z.infer<typeof TrackingTrackSchema>;
