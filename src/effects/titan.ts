import type { EffectDefinition } from './schema.js';

export const TITAN_20_EFFECTS: Record<string, EffectDefinition> = {
  // 71. Film Noir High-Contrast Hard Shadows
  film_noir_shadows: {
    id: 'film_noir_shadows',
    name: '1940s Classic Film Noir Venetian Blind',
    category: 'color_filter',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Black and white with extreme crushed blacks and blown highlights reminiscent of Maltese Falcon',
    filters: [
      'hue=s=0',
      'curves=strong_contrast',
      'eq=contrast=1.45:brightness=-0.04',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 72. Matrix Digital Rain Green Tint
  matrix_code_rain_green: {
    id: 'matrix_code_rain_green',
    name: 'Matrix Cyber Green Dystopia',
    category: 'color_filter',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Signature Wachowski Matrix green tint with lifted greenish shadows and muted skin tones',
    filters: [
      'colorbalance=rs=-0.1:gs=0.25:bs=-0.15:rh=-0.1:gh=0.2:bh=-0.1',
      'eq=contrast=1.15:saturation=1.1',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 73. Tilt-Shift Miniature Toy City Effect
  tilt_shift_miniature: {
    id: 'tilt_shift_miniature',
    name: 'Tilt-Shift Miniature Model World',
    category: 'lighting_optics',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Top and bottom selective focus blur transforming real landscapes into miniature toy cities',
    filters: [
      'split[base][blur];[blur]boxblur=25:5[blurred];[base][blurred]blend=all_expr=if(between(Y\\,H*0.35\\,H*0.65)\\,A\\,B)',
      'eq=saturation=1.35:contrast=1.1',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 74. Cinematic Slow Shutter / Neon Light Smear (Wong Kar-Wai Style)
  wong_kar_wai_slow_shutter: {
    id: 'wong_kar_wai_slow_shutter',
    name: 'Wong Kar-Wai 12fps Step-Printing Smear',
    category: 'speed_motion',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Chungking Express slow-shutter motion trail with frame repetition and vivid neon colors',
    filters: [
      'fps=12',
      'tblend=all_mode=lighten',
      'eq=saturation=1.3:contrast=1.15',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 75. 3D Glitch RGB Pixel Sorter
  pixel_sort_digital_glitch: {
    id: 'pixel_sort_digital_glitch',
    name: 'Cyberpunk Pixel Sort Displacement',
    category: 'distortion_glitch',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Vertical streak displacement simulating corrupted GPU VRAM buffer sort',
    filters: [
      'boxblur=lpos=0:lr=0:cr=20',
      'rgbashift=rh=-10:bh=10',
      'eq=contrast=1.2',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 76. Cybernetic HUD Sci-Fi Target Reticle Overlay
  scifi_cyber_hud_reticle: {
    id: 'scifi_cyber_hud_reticle',
    name: 'Sci-Fi Cybernetic HUD Targeting Reticle',
    category: 'layout_composition',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Futuristic combat pilot HUD targeting reticle with coordinate brackets',
    filters: [
      'drawbox=x=(w-240)/2:y=(h-240)/2:w=240:h=240:color=cyan@0.6:t=2',
      'drawbox=x=(w-40)/2:y=(h-40)/2:w=40:h=40:color=red@0.8:t=fill',
      "drawtext=text='TARGET LOCKED':fontcolor=cyan:fontsize=20:x=(w-text_w)/2:y=(h-280)/2",
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 77. Comic Pop Halftone Print Dots
  halftone_pop_art_dots: {
    id: 'halftone_pop_art_dots',
    name: 'Pop-Art Halftone Print Dots',
    category: 'color_filter',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Roy Lichtenstein halftone dot printing screen texture with hyper-saturated primaries',
    filters: [
      'eq=saturation=2.0:contrast=1.4',
      'drawgrid=w=6:h=6:t=1:c=black@0.25',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 78. Audio Stadium Megaphone Announcement
  audio_stadium_megaphone: {
    id: 'audio_stadium_megaphone',
    name: 'Stadium Loudspeaker Megaphone',
    category: 'audio_voice',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Harsh narrow bandpass with massive echo slap-back simulating public stadium loudspeaker',
    filters: [],
    audioFilters: [
      'highpass=f=500,lowpass=f=2500,aecho=0.8:0.7:250|500:0.4|0.3,volume=1.6',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 79. Audio Pitch Tremolo Vibrato Shiver
  audio_tremolo_vibrato: {
    id: 'audio_tremolo_vibrato',
    name: 'Ghostly Tremolo & Vibrato Shiver',
    category: 'audio_voice',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Oscillating amplitude and pitch modulation creating eerie phantom vocal vibration',
    filters: [],
    audioFilters: [
      'tremolo=f=6.0:d=0.7',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 80. Edge Glow Neon Tron Outline
  neon_tron_edge_glow: {
    id: 'neon_tron_edge_glow',
    name: 'TRON Cyan Glowing Cyber Edges',
    category: 'lighting_optics',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Extracts silhouette edges and converts them into pulsating neon cyan energy lines',
    filters: [
      'edgedetect=low=0.1:high=0.3,colorchannelmixer=rr=0:rg=0:rb=0:gr=0:gg=1:gb=0:br=0:bg=0:bb=1',
      'gblur=sigma=1.5',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 81. Lens Distortion Fisheye GoPro Action View
  fisheye_gopro_action: {
    id: 'fisheye_gopro_action',
    name: 'Action Cam Fisheye Barrel Distortion',
    category: 'distortion_glitch',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Curved barrel optic distortion mimicking 170-degree ultra-wide action cameras',
    filters: [
      'lenscorrection=k1=0.2:k2=-0.05',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 82. Soft Dream Mist Diffuser (Black Pro-Mist 1/4)
  black_promist_halation: {
    id: 'black_promist_halation',
    name: 'Tiffen Black Pro-Mist 1/4 Filter',
    category: 'lighting_optics',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Subtle halation bloom that reduces harsh digital sensor edge contrast while keeping skin creamy',
    filters: [
      'split[main][bloom];[bloom]gblur=sigma=4:steps=1[b];[main][b]blend=all_mode=screen:all_opacity=0.2',
      'eq=contrast=0.98',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 83. Super 8mm Home Movie Warmth
  super_8mm_kodachrome: {
    id: 'super_8mm_kodachrome',
    name: '1970s Kodachrome Super 8mm Warmth',
    category: 'color_filter',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Rich amber Kodachrome warm palette with saturated reds and organic grain',
    filters: [
      'colorbalance=rs=0.12:gs=0.04:bs=-0.1:rm=0.08:bm=-0.08',
      'noise=alls=12:allf=t+u',
      'vignette=PI/4',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 84. Film Negative Color Inversion
  color_negative_xray: {
    id: 'color_negative_xray',
    name: 'Inverted Color Negative / X-Ray',
    category: 'color_filter',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Exact chromatic and luminance inversion producing photographic negative film aesthetics',
    filters: [
      'negate',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 85. Starburst 4-Point Cross Screen Flare
  starburst_cross_flare: {
    id: 'starburst_cross_flare',
    name: '4-Point Starburst Diamond Flare',
    category: 'lighting_optics',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Simulates 4-point glass cross-screen star filters on pinpoint light specular highlights',
    filters: [
      'split[base][star];[star]boxblur=lpos=1:lr=15:cr=15[diag];[base][diag]blend=all_mode=addition:all_opacity=0.3',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 86. Split Toning Amber & Steel Blue
  split_toning_amber_steel: {
    id: 'split_toning_amber_steel',
    name: 'Split Toning Amber Highlights & Steel Shadows',
    category: 'color_filter',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Professional fine art split-toning: warm amber highlights balanced by cold steel blue shadows',
    filters: [
      'colorbalance=rs=-0.08:gs=-0.04:bs=0.12:rh=0.14:gh=0.08:bh=-0.1',
      'eq=contrast=1.12',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 87. Fast Whip Zoom Flash Transition
  whip_zoom_flash: {
    id: 'whip_zoom_flash',
    name: 'Whip Zoom In & Flash Transition',
    category: 'transition',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Snappy snap zoom in coupled with an exposure bloom flash',
    filters: [
      'fade=t=out:st=0:d=0.25:color=white',
      'zoompan=z=zoom+0.01:d=1:s=1280x720:fps=30',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 88. Drone Horizon Rolling Shutter Correction Simulator
  drone_aerial_cinematic: {
    id: 'drone_aerial_cinematic',
    name: 'Drone Aerial Landscape Polarizer',
    category: 'color_filter',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Circular polarizer glass simulation cutting atmospheric haze and deepening sky blues',
    filters: [
      'eq=contrast=1.2:saturation=1.25',
      'colorbalance=bh=0.08:bm=-0.04:bs=0.04',
      'unsharp=5:5:0.8:3:3:0.3',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 89. Dark Academia Moody Amber
  dark_academia_moody: {
    id: 'dark_academia_moody',
    name: 'Dark Academia Moody Library',
    category: 'color_filter',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Warm dark woods, muted sage greens and deep shadows for introspective storytelling',
    filters: [
      'colorbalance=rm=0.1:gm=0.02:bm=-0.12:rs=0.05:gs=0.02:bs=-0.05',
      'eq=contrast=1.18:brightness=-0.03:saturation=0.9',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 90. Dual-Tone 50/50 Red and Blue Split Lighting
  dualtone_red_blue_split: {
    id: 'dualtone_red_blue_split',
    name: 'Dual-Tone 50/50 Neon Red & Blue',
    category: 'color_filter',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Studio fashion dual-tone: left half illuminated in crimson red, right half in electric blue',
    filters: [
      'split[base][copy];[base]crop=iw/2:ih:0:0,colorbalance=rs=0.4:bs=-0.2[left];[copy]crop=iw/2:ih:iw/2:0,colorbalance=rs=-0.2:bs=0.4[right];[left][right]hstack',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },
};
