import type { EffectDefinition } from './schema.js';

export const CINEMA_20_EFFECTS: Record<string, EffectDefinition> = {
  // 41. Film Halation Glow (Red Orange Edges)
  film_halation_red: {
    id: 'film_halation_red',
    name: 'Kodak 500T Film Halation',
    category: 'lighting_optics',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Simulates red/orange glow bleeding around high-contrast light sources on vintage cinema stock',
    filters: [
      'format=gbrp,split[base][bright];[bright]boxblur=20:2[red_blur];[base][red_blur]blend=all_mode=addition:all_opacity=0.35,format=yuv420p',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 42. Dolly Zoom (Vertigo In-Camera Push/Pull)
  vertigo_dolly_zoom: {
    id: 'vertigo_dolly_zoom',
    name: 'Vertigo / Dolly Zoom Warp',
    category: 'speed_motion',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Hitchcock Vertigo dolly zoom effect compressing background perspective dynamically',
    filters: [
      'zoompan=z=zoom+0.002:d=1:x=iw/2-(iw/zoom/2):y=ih/2-(ih/zoom/2):s=1280x720:fps=30',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 43. 3D Anaglyph Red/Cyan Stereoscopic
  anaglyph_3d_cinema: {
    id: 'anaglyph_3d_cinema',
    name: '3D Anaglyph Stereoscopic (Red/Cyan)',
    category: 'distortion_glitch',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Retro 3D glasses anaglyph channel displacement',
    filters: [
      'rgbashift=rh=-8:bh=8:gh=0',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 44. Bleach Bypass (Silver Retention Matrix)
  bleach_bypass_matrix: {
    id: 'bleach_bypass_matrix',
    name: 'Bleach Bypass Silver Retention (Saving Private Ryan)',
    category: 'color_filter',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Iconic war/thriller look: desaturated colors with intensely crushed deep shadows',
    filters: [
      'eq=contrast=1.3:saturation=0.5:brightness=-0.02',
      'curves=vintage',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 45. Thermal Heatmap Infrared Vision
  thermal_infrared_vision: {
    id: 'thermal_infrared_vision',
    name: 'Thermal Predator Heatmap Infrared',
    category: 'distortion_glitch',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Military thermal vision false-color gradient mapping heat zones',
    filters: [
      'colorchannelmixer=rr=0:rg=0:rb=1:gr=0:gg=1:gb=0:br=1:bg=0:bb=0',
      'eq=contrast=1.4:saturation=1.8',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 46. Night Vision Monochromatic Green Goggles
  night_vision_goggles: {
    id: 'night_vision_goggles',
    name: 'Military NVG Night Vision Goggles',
    category: 'lighting_optics',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Phosphor green night vision tube with high ISO noise amplification and center hot-spot',
    filters: [
      'hue=h=120:s=2',
      'eq=contrast=1.4:brightness=0.08',
      'noise=alls=25:allf=t',
      'vignette=PI/3',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 47. 8mm Silent Chaplin Projector
  vintage_8mm_silent_film: {
    id: 'vintage_8mm_silent_film',
    name: '1920s Chaplin 8mm Silent Projector',
    category: 'color_filter',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Sepia monochrome, 16fps gate stutter, heavy scratches and mechanical film flicker',
    filters: [
      'hue=s=0',
      'colorbalance=rs=0.15:gs=0.08:bs=-0.1',
      'fps=16',
      'noise=alls=30:allf=t+u',
      'vignette=PI/3.5',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 48. Dynamic Speed Ramp (Slow-Mo to Turbo)
  dynamic_speed_ramp: {
    id: 'dynamic_speed_ramp',
    name: 'Action Hero Speed Ramp',
    category: 'speed_motion',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Starts normal, plunges into dramatic slow motion, then snaps forward into 2x turbo',
    filters: [
      "setpts='if(lt(T,1.5), 1.0*PTS, if(lt(T,3.5), 2.5*PTS, 0.5*PTS))'",
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 49. Audio Cathedral Reverb Space
  audio_cathedral_reverb: {
    id: 'audio_cathedral_reverb',
    name: 'Cathedral Sacred Reverb 4s Tail',
    category: 'audio_voice',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Huge acoustic space with long 4-second decaying reverberation tail',
    filters: [],
    audioFilters: [
      'aecho=0.8:0.9:1000|1800:0.3|0.2',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 50. Audio 8D Spatial Binaural Orbit
  audio_8d_spatial_orbit: {
    id: 'audio_8d_spatial_orbit',
    name: '8D Spatial Audio Binaural Orbit',
    category: 'audio_voice',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: '360-degree rotating binaural pan rotating continuously around the listener head',
    filters: [],
    audioFilters: [
      'apulsator=mode=sine:hz=0.25:amount=1.0',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 51. Surveillance Security CCTV Camera
  cctv_surveillance_cam: {
    id: 'cctv_surveillance_cam',
    name: 'Security CCTV Camera Overlay',
    category: 'layout_composition',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Low-res surveillance timestamp, REC indicator and desaturated camera sensor',
    filters: [
      'eq=saturation=0.4:contrast=1.15',
      "drawtext=text='REC [●] CAM 04':fontcolor=red:fontsize=28:x=40:y=40",
      "drawtext=text='%{pts\\:hms}':fontcolor=white:fontsize=24:x=40:y=80",
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 52. Anime Cartoon Cel Shading
  anime_cel_shading: {
    id: 'anime_cel_shading',
    name: 'Anime Cel Shading & Ink Outline',
    category: 'color_filter',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Posterized anime color palette with bold high-contrast inked edges',
    filters: [
      'split[main][edge];[edge]edgedetect=low=0.1:high=0.4[edges];[main]eq=saturation=1.5:contrast=1.3[color];[color][edges]blend=all_mode=darken:all_opacity=0.5',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 53. Glitch Datamosh Motion Compression
  glitch_datamosh_smear: {
    id: 'glitch_datamosh_smear',
    name: 'Glitch Datamosh Pixel Smear',
    category: 'distortion_glitch',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Simulates corrupted P-frame motion vector smearing',
    filters: [
      'tblend=all_mode=lighten',
      'rgbashift=rh=-8:bh=8',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 54. Whip Pan Kinetic Blur Transition
  whip_pan_kinetic_blur: {
    id: 'whip_pan_kinetic_blur',
    name: 'Whip Pan Kinetic Motion Blur',
    category: 'transition',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Ultra-fast directional camera whip transition with horizontal motion streak',
    filters: [
      'boxblur=lpos=1:lr=30:cr=0',
      'eq=contrast=1.1',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 55. Freeze Frame Comic Book Stamp
  freeze_frame_comic: {
    id: 'freeze_frame_comic',
    name: 'Freeze Frame Comic Book Stamp',
    category: 'layout_composition',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Halftone dot texture and pop-art comic freeze style',
    filters: [
      'eq=saturation=1.8:contrast=1.4',
      'drawbox=x=0:y=0:w=iw:h=ih:color=yellow@0.15:t=fill',
      'unsharp=7:7:1.5',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 56. Vintage 1980s Retro Arcade Scanlines
  retro_arcade_scanlines: {
    id: 'retro_arcade_scanlines',
    name: '1980s Arcade CRT Monitor Scanlines',
    category: 'distortion_glitch',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Horizontal phosphor cathode scanlines with curved fish-eye tube vignette',
    filters: [
      'drawgrid=w=iw:h=4:t=1:c=black@0.4',
      'vignette=PI/3',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 57. High-End Commercial Product Pop
  commercial_product_pop: {
    id: 'commercial_product_pop',
    name: 'Apple Commercial Clean Product Grade',
    category: 'color_filter',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Ultra-clean white balance, crisp micro-contrast and vivid primary product colors',
    filters: [
      'eq=contrast=1.08:saturation=1.12:brightness=0.01',
      'unsharp=5:5:0.7:3:3:0.3',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 58. Horror Movie Creepy Desaturation
  horror_grudge_cold: {
    id: 'horror_grudge_cold',
    name: 'Japanese Horror Cold Cyan Desat',
    category: 'color_filter',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Eerie green-blue shadows with ghostly pale skin tones for horror atmospheres',
    filters: [
      'colorbalance=rs=-0.1:gs=0.05:bs=0.15:rh=-0.15:gh=0.05:bh=0.2',
      'eq=saturation=0.7:contrast=1.2',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 59. Sunset Golden Silhouette
  sunset_silhouette_glow: {
    id: 'sunset_silhouette_glow',
    name: 'Sunset Golden Hour Silhouette',
    category: 'lighting_optics',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Deep black foreground silhouettes against burning amber sky glow',
    filters: [
      'colorbalance=rm=0.25:gm=0.05:bm=-0.2:rs=0.1:gs=-0.05:bs=-0.1',
      'eq=contrast=1.45:brightness=-0.05',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 60. Radio Walkie-Talkie Squelch
  radio_walkie_squelch: {
    id: 'radio_walkie_squelch',
    name: 'Police Radio Squelch & Crackle',
    category: 'audio_voice',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Narrow 300-3000Hz voiceband with harsh distortion drive and white noise crackle',
    filters: [],
    audioFilters: [
      'highpass=f=300,lowpass=f=3000,acrusher=bits=8:mode=log:aa=1',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },
};
