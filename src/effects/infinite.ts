import type { EffectDefinition } from './schema.js';

export const INFINITE_20_EFFECTS: Record<string, EffectDefinition> = {
  // 101. Blade Runner Amber Cyberpunk Smog
  bladerunner_2049_amber: {
    id: 'bladerunner_2049_amber',
    name: 'Blade Runner 2049 Las Vegas Amber Haze',
    category: 'color_filter',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Roger Deakins iconic orange dust atmosphere with high-contrast amber radioactive glow',
    filters: [
      'colorbalance=rm=0.35:gm=0.1:bm=-0.25:rs=0.2:gs=0.05:bs=-0.15',
      'eq=contrast=1.25:brightness=-0.02',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 102. Wes Anderson Pastel Symmetry
  wes_anderson_symmetry: {
    id: 'wes_anderson_symmetry',
    name: 'Wes Anderson Grand Budapest Pastel Yellow',
    category: 'color_filter',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Whimsical warm yellow pastel wash with soft highlights and vintage storybook charm',
    filters: [
      'colorbalance=rm=0.12:gm=0.08:bm=-0.08:rh=0.1:gh=0.06:bh=-0.06',
      'eq=contrast=0.95:brightness=0.04:saturation=1.15',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 103. Oppenheimer Trinity B&W High-Contrast 70mm
  oppenheimer_70mm_monochrome: {
    id: 'oppenheimer_70mm_monochrome',
    name: 'Oppenheimer IMAX 70mm B&W Dramatic',
    category: 'color_filter',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Ultra-crisp 70mm black and white simulation with pure deep blacks and micro-contrast',
    filters: [
      'hue=s=0',
      'eq=contrast=1.38:brightness=-0.03',
      'unsharp=5:5:1.0:3:3:0.5',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 104. Euphoria Glitter Purple & Teal Neon
  euphoria_neon_purple: {
    id: 'euphoria_neon_purple',
    name: 'Euphoria Glitter Neon Purple & Teal',
    category: 'lighting_optics',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Deep violet shadows combined with shimmering cyan highlights and dreamy glow',
    filters: [
      'colorbalance=rs=0.2:gs=-0.1:bs=0.3:rh=-0.1:gh=0.15:bh=0.25',
      'split[base][glitter];[glitter]gblur=sigma=6[g];[base][g]blend=all_mode=screen:all_opacity=0.3',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 105. Cyber Glitch Data Corrupter
  cyber_digital_corrupter: {
    id: 'cyber_digital_corrupter',
    name: 'Digital Data Packet Drop Glitch',
    category: 'distortion_glitch',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Simulates packet loss stutter with sudden chromatic shifts and block noise',
    filters: [
      'rgbashift=rh=-12:bh=12:gv=4',
      'noise=alls=18:allf=t',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 106. Vintage Technicolor 3-Strip Process
  technicolor_3strip_vintage: {
    id: 'technicolor_3strip_vintage',
    name: '1939 Technicolor 3-Strip Dye Transfer',
    category: 'color_filter',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Wizard of Oz saturated crimson reds, emerald greens and royal blues',
    filters: [
      'eq=saturation=1.65:contrast=1.2',
      'colorbalance=rs=0.1:gs=0.08:bs=0.08',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 107. Dreamcore Ethereal Bloom Vignette
  dreamcore_ethereal_bloom: {
    id: 'dreamcore_ethereal_bloom',
    name: 'Dreamcore Ethereal Soft Light Bloom',
    category: 'lighting_optics',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Surreal nostalgic dreamcore diffusion with lifted milky blacks and light halo',
    filters: [
      'split[base][diff];[diff]gblur=sigma=12:steps=2[d];[base][d]blend=all_mode=screen:all_opacity=0.4',
      'vignette=PI/4',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 108. Audio Radio Lo-Fi Vinyl Crackle
  audio_lofi_vinyl_beats: {
    id: 'audio_lofi_vinyl_beats',
    name: 'Lo-Fi Chillhop Vinyl Warmth',
    category: 'audio_voice',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Cuts harsh highs at 4500Hz with subtle tube warmth for relaxing Lo-Fi beats',
    filters: [],
    audioFilters: [
      'lowpass=f=4500,highpass=f=120,volume=1.2',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 109. Audio Bass Sub-Woofer Boost
  audio_bass_subwoofer_boost: {
    id: 'audio_bass_subwoofer_boost',
    name: 'Bass Monster Sub-Woofer Boost (+6dB)',
    category: 'audio_voice',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Deep 60Hz punchy sub-bass boost for car speakers and party sound systems',
    filters: [],
    audioFilters: [
      'bass=g=6:f=80:w=0.6',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 110. Matrix Bullet-Time Orbit Freeze Simulator
  bullet_time_matrix_freeze: {
    id: 'bullet_time_matrix_freeze',
    name: 'Matrix Bullet-Time 360 Freeze',
    category: 'speed_motion',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Simulates freezing action while camera rotates smoothly across scene',
    filters: [
      'setpts=0.1*PTS',
      'zoompan=z=zoom+0.003:d=1:s=1280x720:fps=30',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 111. Cinematic Split-Diopter Dual Focus
  split_diopter_dual_focus: {
    id: 'split_diopter_dual_focus',
    name: 'Brian De Palma Split-Diopter Dual Focus',
    category: 'layout_composition',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Left half blurred background with sharp foreground, right half sharp background',
    filters: [
      'split[base][blur];[blur]boxblur=20:5[b];[base]crop=iw/2:ih:0:0[left_sharp];[b]crop=iw/2:ih:iw/2:0[right_blur];[left_sharp][right_blur]hstack',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 112. Solar Flare Coronal Mass Ejection
  solar_flare_corona: {
    id: 'solar_flare_corona',
    name: 'Solar Flare Golden Sun Burst',
    category: 'lighting_optics',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Intense golden light leak flooding in from top-right corner',
    filters: [
      'split[base][sun];[sun]colorchannelmixer=rr=1.8:rg=1.2:rb=0.2,gblur=sigma=25[s];[base][s]blend=all_mode=addition:all_opacity=0.35',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 113. Vintage 1960s French New Wave Film
  french_new_wave_1960: {
    id: 'french_new_wave_1960',
    name: '1960s French New Wave Cinema (Godard Style)',
    category: 'color_filter',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Natural Parisian daylight, crisp monochrome and organic silver halide grain',
    filters: [
      'hue=s=0',
      'noise=alls=16:allf=t+u',
      'eq=contrast=1.18:brightness=0.01',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 114. Action Motion Zoom Blur Impact
  motion_zoom_blur_impact: {
    id: 'motion_zoom_blur_impact',
    name: 'Punch Impact Radial Zoom Blur',
    category: 'transition',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Sudden high-speed micro-zoom creating intense impact sensation',
    filters: [
      'zoompan=z=1.08:d=1:s=1280x720:fps=30',
      'unsharp=7:7:1.2',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 115. Vintage Polarized Sunglasses Shutter
  polarized_sunglasses_look: {
    id: 'polarized_sunglasses_look',
    name: 'Polarized Aviator Sunglasses Tint',
    category: 'color_filter',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Deepened green-tinted skies, glare reduction and warm bronze highlights',
    filters: [
      'colorbalance=rm=0.08:gm=0.05:bm=-0.08:rs=-0.04:gs=0.04:bs=-0.04',
      'eq=contrast=1.15',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 116. Audio Space Astronaut Radio Helmet
  audio_astronaut_helmet: {
    id: 'audio_astronaut_helmet',
    name: 'NASA Apollo Astronaut Helmet Comm',
    category: 'audio_voice',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Ultra-compressed resonant capsule radio communication with static hum',
    filters: [],
    audioFilters: [
      'highpass=f=600,lowpass=f=2800,acrusher=bits=6:mode=lin,volume=2.0',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 117. Sin City Black & Pure Red Accent
  sincity_isolated_red: {
    id: 'sincity_isolated_red',
    name: 'Sin City Noir with Crimson Red Accent',
    category: 'color_filter',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Frank Miller comic style: pure high-contrast B&W while retaining deep blood reds',
    filters: [
      'colorchannelmixer=rr=1.5:rg=0:rb=0:gr=0.3:gg=0.3:gb=0.3:br=0.3:bg=0.3:bb=0.3',
      'eq=contrast=1.35',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 118. Retro Commodore 64 16-Color Palette
  commodore_64_retro: {
    id: 'commodore_64_retro',
    name: '1982 Commodore 64 Gaming Visuals',
    category: 'distortion_glitch',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Retro 8-bit home computer palette quantization and block resolution',
    filters: [
      'scale=320:200:flags=neighbor,scale=1280:720:flags=neighbor',
      'eq=saturation=1.5:contrast=1.3',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 119. Ethereal White Angelic Dream Glow
  angelic_white_dream_glow: {
    id: 'angelic_white_dream_glow',
    name: 'Angelic Pure White Overexposure Diffusion',
    category: 'lighting_optics',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Luminous pearlescent white highlights with gentle dream bloom diffusion',
    filters: [
      'split[base][glow];[glow]gblur=sigma=15:steps=2[g];[base][g]blend=all_mode=lighten:all_opacity=0.4',
      'curves=lighter',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 120. Audio Helium Voice Pitch Warp
  audio_helium_balloon: {
    id: 'audio_helium_balloon',
    name: 'Helium Balloon Party Pitch Shift',
    category: 'audio_voice',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Realistic vocal tract resonance shift mimicking breathing helium gas',
    filters: [],
    audioFilters: [
      'asetrate=44100*1.5,atempo=0.666',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },
};
