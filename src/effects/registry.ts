import type { EffectDefinition } from './schema.js';
import { EXTENDED_30_EFFECTS } from './extended.js';
import { CINEMA_20_EFFECTS } from './cinema.js';
import { TITAN_20_EFFECTS } from './titan.js';
import { INFINITE_20_EFFECTS } from './infinite.js';
import { QUANTUM_20_EFFECTS } from './quantum.js';
import { APEX_20_EFFECTS } from './apex.js';
import { OMEGA_20_EFFECTS } from './omega.js';
import { SINGULARITY_20_EFFECTS } from './singularity.js';
import { TITAN_30_EFFECTS } from './titan_expanded.js';
import { APEX_STUDIO_30_EFFECTS } from './apex_studio.js';
import { CHRONOS_30_EFFECTS } from './chronos.js';

const BASE_REGISTRY: Record<string, EffectDefinition> = {
  // 1. Color Filters
  cinematic_teal_orange: {
    id: 'cinematic_teal_orange',
    name: 'Cinematic Teal & Orange',
    category: 'color_filter',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Cinematic Hollywood look with pushed blues/teals in shadows and warm orange skin tones',
    filters: [
      'colorbalance=rs=0.1:gs=-0.05:bs=-0.1:rh=-0.1:gh=0.05:bh=0.15',
      'eq=contrast=1.12:saturation=1.2:brightness=0.01',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },
  vintage_film_grain: {
    id: 'vintage_film_grain',
    name: 'Vintage Film Grain',
    category: 'color_filter',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Retro 35mm film aesthetic with subtle grain and edge vignette',
    filters: [
      'noise=alls=15:allf=t+u',
      'curves=vintage',
      'vignette=PI/4',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },
  black_and_white_dramatic: {
    id: 'black_and_white_dramatic',
    name: 'B&W Dramatic Noir',
    category: 'color_filter',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'High-contrast monochrome film noir style',
    filters: [
      'hue=s=0',
      'eq=contrast=1.35:brightness=-0.02',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },
  warm_golden_hour: {
    id: 'warm_golden_hour',
    name: 'Warm Golden Hour',
    category: 'color_filter',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Cozy golden sunlight tone with boosted warm midtones',
    filters: [
      'colorbalance=rm=0.15:gm=0.05:bm=-0.1:rs=0.05:bs=-0.05',
      'eq=saturation=1.1',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 2. Beauty & Makeup
  skin_smoothing_soft: {
    id: 'skin_smoothing_soft',
    name: 'Soft Skin Glow',
    category: 'beauty_makeup',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Gentle bilateral spatial smoothing to soften skin texture while preserving sharp edges',
    filters: [
      'gblur=sigma=1.2:steps=1',
      'eq=brightness=0.03:saturation=1.05:contrast=1.02',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },
  ai_face_mesh_makeup: {
    id: 'ai_face_mesh_makeup',
    name: 'AI Virtual Makeup & Lip Color',
    category: 'beauty_makeup',
    difficulty: 'hard',
    engine: 'ai_vision',
    description: '68/468 landmark face mesh tracking with virtual lipstick and blush synthesis',
    filters: [],
    supportsBatch: false,
    requiresFaceTracking: true,
  },

  // 3. Face & AR Effects
  mirror_face_warp: {
    id: 'mirror_face_warp',
    name: 'Symmetric Face Mirror',
    category: 'face_ar',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Split-screen horizontal mirror distortion effect',
    filters: [
      'crop=iw/2:ih:0:0,split[left][left_copy];[left_copy]hflip[right];[left][right]hstack',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },
  ar_3d_headwear_sticker: {
    id: 'ar_3d_headwear_sticker',
    name: 'AR Headwear / Animal Ears Sticker',
    category: 'face_ar',
    difficulty: 'hard',
    engine: 'hybrid',
    description: 'Rigid 3D object/sticker anchored to head rotation coordinates',
    filters: ['overlay=x=W*0.3:y=H*0.1'],
    supportsBatch: true,
    requiresFaceTracking: true,
  },

  // 4. Background & Green Screen
  chromakey_green: {
    id: 'chromakey_green',
    name: 'Green Screen Chromakey',
    category: 'background_greenscreen',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Standard chromakey transparency removal for green studio backgrounds',
    filters: [
      'chromakey=0x00FF00:0.15:0.1',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },
  background_defocus_blur: {
    id: 'background_defocus_blur',
    name: 'Cinematic Background Blur Bokeh',
    category: 'background_greenscreen',
    difficulty: 'medium',
    engine: 'hybrid',
    description: 'Diffuses background to create f/1.4 lens bokeh with subject depth isolation',
    filters: [
      'split[main][bg];[bg]boxblur=20:5[bg_blur];[bg_blur][main]overlay=0:0',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 5. Transitions
  fade_to_black: {
    id: 'fade_to_black',
    name: 'Fade to Black & Out',
    category: 'transition',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Smooth fade in at start and fade out at end',
    filters: [
      'fade=t=in:st=0:d=0.8,fade=t=out:st=4.2:d=0.8',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },
  white_flash_transition: {
    id: 'white_flash_transition',
    name: 'White Flash Bang',
    category: 'transition',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'High energy flash transition commonly used in TikTok/Shorts pacing',
    filters: [
      'fade=t=out:st=0:d=0.3:color=white',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 6. Distortion & Glitch
  rgb_split_aberration: {
    id: 'rgb_split_aberration',
    name: 'RGB Split / Chromatic Aberration',
    category: 'distortion_glitch',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Offsets red and blue color planes for digital glitch/cyberpunk look',
    filters: [
      'rgbashift=rh=-6:bh=6:gv=2',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },
  vhs_retro_tape: {
    id: 'vhs_retro_tape',
    name: 'VHS Retro Tape Simulation',
    category: 'distortion_glitch',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Scanline distortion with noise and color desaturation',
    filters: [
      'rgbashift=rh=-4:bh=4',
      'noise=alls=20:allf=t',
      'eq=saturation=0.8:contrast=1.1',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 7. Text & Subtitle Effects
  lower_third_title: {
    id: 'lower_third_title',
    name: 'Lower Third Neon Banner',
    category: 'text_subtitle',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Clean branded title positioned at bottom with semi-transparent background box',
    filters: [
      "drawtext=text='FFmpeg AI Agent':fontsize=36:fontcolor=white:box=1:boxcolor=black@0.6:boxborderw=10:x=(w-text_w)/2:y=h-th-40",
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 8. Audio & Voice Effects
  audio_echo_reverb: {
    id: 'audio_echo_reverb',
    name: 'Audio Echo & Reverb',
    category: 'audio_voice',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Atmospheric audio reverb with decaying multi-stage echo',
    filters: [],
    audioFilters: [
      'aecho=0.8:0.88:60:0.4',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },
  voice_deep_pitch: {
    id: 'voice_deep_pitch',
    name: 'Deep Bass Voice Changer',
    category: 'audio_voice',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Low-pitch pitch shift for dramatic voiceover/narration',
    filters: [],
    audioFilters: [
      'asetrate=44100*0.8,atempo=1.25',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },
  voice_chipmunk: {
    id: 'voice_chipmunk',
    name: 'Chipmunk High Pitch',
    category: 'audio_voice',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Sped-up pitch shift for comedic chipmunk voice effect',
    filters: [],
    audioFilters: [
      'asetrate=44100*1.35,atempo=0.74',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 9. Speed & Motion
  speed_2x_fast: {
    id: 'speed_2x_fast',
    name: '2x Fast Motion (Hyperlapse)',
    category: 'speed_motion',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Doubles video and audio playback speed smoothly',
    filters: ['setpts=0.5*PTS'],
    audioFilters: ['atempo=2.0'],
    supportsBatch: true,
    requiresFaceTracking: false,
  },
  speed_half_slowmo: {
    id: 'speed_half_slowmo',
    name: '0.5x Slow Motion',
    category: 'speed_motion',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Halves playback speed for cinematic slow motion',
    filters: ['setpts=2.0*PTS'],
    audioFilters: ['atempo=0.5'],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 10. Layout & Composition
  cinematic_letterbox: {
    id: 'cinematic_letterbox',
    name: 'Cinematic 2.39:1 Letterbox Bars',
    category: 'layout_composition',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Adds ultra-wide aspect ratio black letterbox bars at top and bottom',
    filters: [
      'drawbox=y=0:h=ih*0.12:color=black:t=fill',
      'drawbox=y=ih-ih*0.12:h=ih*0.12:color=black:t=fill',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },
  duet_split_screen: {
    id: 'duet_split_screen',
    name: 'Duet Side-by-Side Split',
    category: 'layout_composition',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Crops input into 9:16 vertical side-by-side duet composition',
    filters: [
      'crop=iw/2:ih:0:0',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 11. Lighting & Optics
  dreamy_bloom_glow: {
    id: 'dreamy_bloom_glow',
    name: 'Dreamy Bloom & Glow',
    category: 'lighting_optics',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Soft optical highlight bloom diffusion',
    filters: [
      'split[base][blur];[blur]gblur=sigma=8:steps=2[blurred];[base][blurred]blend=all_mode=screen:all_opacity=0.35',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 12. Quality Enhancement
  clarity_sharpen_denoise: {
    id: 'clarity_sharpen_denoise',
    name: 'Pro Denoise & Unsharp Mask',
    category: 'quality_enhancement',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Reduces high-ISO sensor noise and applies unsharp masking for crisp detail',
    filters: [
      'hqdn3d=1.5:1.5:6:6',
      'unsharp=5:5:0.8:3:3:0.4',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },
};

export const EFFECT_REGISTRY: Record<string, EffectDefinition> = {
  ...BASE_REGISTRY,
  ...EXTENDED_30_EFFECTS,
  ...CINEMA_20_EFFECTS,
  ...TITAN_20_EFFECTS,
  ...INFINITE_20_EFFECTS,
  ...QUANTUM_20_EFFECTS,
  ...APEX_20_EFFECTS,
  ...OMEGA_20_EFFECTS,
  ...SINGULARITY_20_EFFECTS,
  ...TITAN_30_EFFECTS,
  ...APEX_STUDIO_30_EFFECTS,
  ...CHRONOS_30_EFFECTS,
};
