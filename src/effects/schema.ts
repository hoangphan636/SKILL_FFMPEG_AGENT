import { z } from 'zod';

export const EffectCategorySchema = z.enum([
  'color_filter',
  'beauty_makeup',
  'face_ar',
  'background_greenscreen',
  'transition',
  'distortion_glitch',
  'text_subtitle',
  'audio_voice',
  'speed_motion',
  'layout_composition',
  'lighting_optics',
  'quality_enhancement',
]);

export const EffectDifficultySchema = z.enum(['easy', 'medium', 'hard']);

export const EffectEngineSchema = z.enum(['ffmpeg', 'ai_vision', 'hybrid']);

export const EffectParameterSchema = z.object({
  name: z.string(),
  type: z.enum(['number', 'string', 'boolean']),
  defaultValue: z.union([z.number(), z.string(), z.boolean()]),
  description: z.string(),
  min: z.number().optional(),
  max: z.number().optional(),
});

export const EffectDefinitionSchema = z.object({
  id: z.string(),
  name: z.string(),
  category: EffectCategorySchema,
  difficulty: EffectDifficultySchema,
  engine: EffectEngineSchema,
  description: z.string(),
  filters: z.array(z.string()),
  audioFilters: z.array(z.string()).optional(),
  parameters: z.record(z.string(), EffectParameterSchema).optional(),
  supportsBatch: z.boolean().default(true),
  requiresFaceTracking: z.boolean().default(false),
  requiresExternalAsset: z.boolean().default(false).optional(),
  notes: z.string().optional(),
});

export type EffectCategory = z.infer<typeof EffectCategorySchema>;
export type EffectDifficulty = z.infer<typeof EffectDifficultySchema>;
export type EffectEngine = z.infer<typeof EffectEngineSchema>;
export type EffectDefinition = z.infer<typeof EffectDefinitionSchema>;
