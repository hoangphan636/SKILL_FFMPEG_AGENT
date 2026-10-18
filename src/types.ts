import { z } from 'zod';

export const TimeStringSchema = z.string().regex(
  /^(?:(?:\d{1,2}:)?\d{1,2}:\d{1,2}(?:\.\d+)?|\d+(?:\.\d+)?)$/,
  'Format must be HH:MM:SS, MM:SS, or seconds (e.g. 00:01:30, 90, 90.5)'
);

export const ConvertTaskSchema = z.object({
  type: z.literal('convert'),
  input: z.string().min(1, 'Input path required'),
  output: z.string().min(1, 'Output path required'),
  crf: z.number().int().min(0).max(51).default(23).optional(),
  preset: z.enum([
    'ultrafast',
    'superfast',
    'veryfast',
    'faster',
    'fast',
    'medium',
    'slow',
    'slower',
    'veryslow',
  ]).default('medium').optional(),
});

export const TrimTaskSchema = z.object({
  type: z.literal('trim'),
  input: z.string().min(1),
  output: z.string().min(1),
  start: TimeStringSchema.default('00:00:00'),
  duration: TimeStringSchema.optional(),
  to: TimeStringSchema.optional(),
});

export const ExtractAudioTaskSchema = z.object({
  type: z.literal('extract-audio'),
  input: z.string().min(1),
  output: z.string().min(1),
  bitrate: z.string().regex(/^\d+k$/i, 'Bitrate must be like 128k, 192k, 320k').optional(),
});

export const ThumbnailTaskSchema = z.object({
  type: z.literal('thumbnail'),
  input: z.string().min(1),
  output: z.string().min(1),
  at: TimeStringSchema.default('00:00:01'),
});

export const MuxSubsTaskSchema = z.object({
  type: z.literal('mux-subs'),
  input: z.string().min(1),
  output: z.string().min(1),
  subtitles: z.string().min(1),
});

export const EffectTaskSchema = z.object({
  type: z.literal('effect'),
  effectId: z.string().min(1, 'Effect ID required'),
  input: z.string().min(1),
  output: z.string().min(1),
});

export const TaskSchema = z.discriminatedUnion('type', [
  ConvertTaskSchema,
  TrimTaskSchema,
  ExtractAudioTaskSchema,
  ThumbnailTaskSchema,
  MuxSubsTaskSchema,
  EffectTaskSchema,
]);

export const BatchManifestSchema = z.object({
  tasks: z.array(TaskSchema).min(1, 'At least one task required in batch manifest'),
});

export type TaskConfig = z.infer<typeof TaskSchema>;
export type BatchManifest = z.infer<typeof BatchManifestSchema>;
