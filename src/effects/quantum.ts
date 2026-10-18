import type { EffectDefinition } from './schema.js';

export const QUANTUM_20_EFFECTS: Record<string, EffectDefinition> = {
  // 131. Cyberpunk 2077 Night City Yellow HUD
  cyberpunk_2077_yellow_hud: {
    id: 'cyberpunk_2077_yellow_hud',
    name: 'Cyberpunk 2077 Neon Yellow HUD Glitch',
    category: 'color_filter',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Electric cadmium yellow highlights with cyan shadow depth and chromatic glitch line',
    filters: [
      'colorbalance=rh=0.25:gh=0.2:bh=-0.25:rs=-0.1:gs=0.05:bs=0.2',
      'eq=contrast=1.28:saturation=1.35',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 132. Interstellar Deep Space Wormhole Warp
  interstellar_wormhole_warp: {
    id: 'interstellar_wormhole_warp',
    name: 'Interstellar Gargantua Space Warp',
    category: 'lighting_optics',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Gravitational lens distortion warp with cosmic golden accretion disk glow',
    filters: [
      'lenscorrection=cx=0.5:cy=0.5:k1=-0.18:k2=0.08',
      'colorbalance=rm=0.18:gm=0.06:bm=-0.14',
      'eq=contrast=1.35',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 133. Dune Arrakis Desert Spice Sunlight
  dune_spice_desert_sun: {
    id: 'dune_spice_desert_sun',
    name: 'Dune Arrakis Desert Sand & Blue Eyes',
    category: 'color_filter',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Monochromatic desert ochre sand tones with piercing blue contrast highlights',
    filters: [
      'colorbalance=rs=0.18:gs=0.08:bs=-0.12:rm=0.22:gm=0.08:bm=-0.18',
      'eq=contrast=1.2:saturation=0.9',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 134. Fight Club Subliminal Flash Frame Stutter
  fight_club_subliminal_flash: {
    id: 'fight_club_subliminal_flash',
    name: 'Fight Club Subliminal Flash Stutter',
    category: 'speed_motion',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Sudden single-frame inverted negative flash creating psychological tension',
    filters: [
      'tblend=all_mode=grainextract',
      'eq=contrast=1.15',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 135. Succession Luxury 35mm Handheld Zoom
  succession_luxury_zoom: {
    id: 'succession_luxury_zoom',
    name: 'Succession Corporate 35mm Snap-Zoom',
    category: 'speed_motion',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Corporate drama snap micro-zoom with subtle documentary handheld sway',
    filters: [
      'zoompan=z=1.05:d=1:s=1280x720:fps=30',
      'colorbalance=rs=0.04:gs=0.02:bs=-0.04',
      'eq=contrast=1.06',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 136. Sin City Neon Rain Noir
  sincity_neon_rain_noir: {
    id: 'sincity_neon_rain_noir',
    name: 'Sin City Neon Rain & Ink Bleed',
    category: 'color_filter',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Crushed ink monochrome with high-gain specular rain reflections',
    filters: [
      'hue=s=0',
      'curves=strong_contrast',
      'unsharp=7:7:2.0',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 137. Cyberpunk HUD Bio-Monitor Heartbeat
  cyber_biomonitor_heartbeat: {
    id: 'cyber_biomonitor_heartbeat',
    name: 'Bio-Monitor Vital Heartbeat Pulsing HUD',
    category: 'layout_composition',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Pulsing heart rate vital monitor graph overlay in top corner',
    filters: [
      "drawbox=x=30:y=30:w=260:h=60:color=black@0.65:t=fill",
      "drawtext=text='BPM [♥ 78] NORMAL':fontcolor=green:fontsize=22:x=45:y=48",
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 138. Audio Deep Ocean Submarine Sonar Ping
  audio_submarine_sonar_ping: {
    id: 'audio_submarine_sonar_ping',
    name: 'Deep Sea Submarine Acoustic Sonar Ping',
    category: 'audio_voice',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Low-frequency hydrophone resonance with spatial ping echo reflections',
    filters: [],
    audioFilters: [
      'lowpass=f=1200,aecho=0.8:0.9:800|1600:0.5|0.3',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 139. Audio Vinyl Crackle & Gramophone Needle
  audio_gramophone_vinyl_crackle: {
    id: 'audio_gramophone_vinyl_crackle',
    name: '1910 Gramophone Horn & Needle Surface',
    category: 'audio_voice',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Band-limited mechanical brass horn acoustics with authentic needle dust distortion',
    filters: [],
    audioFilters: [
      'highpass=f=450,lowpass=f=3200,acrusher=bits=10:mode=log,volume=1.4',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 140. VHS Tracking Head Loss Static Distortion
  vhs_tracking_loss_distortion: {
    id: 'vhs_tracking_loss_distortion',
    name: 'VHS VCR Head Tracking Loss Static Bar',
    category: 'distortion_glitch',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Horizontal analog noise jitter bar scrolling up the screen from worn magnetic tape',
    filters: [
      'drawbox=x=0:y=ih*0.85:w=iw:h=40:color=white@0.4:t=fill',
      'rgbashift=rh=-8:bh=8',
      'noise=alls=20:allf=t',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 141. Acid Trip Rainbow Prism Dispersion
  acid_trip_rainbow_dispersion: {
    id: 'acid_trip_rainbow_dispersion',
    name: 'Acid Trip Psychedelic Rainbow Prism',
    category: 'lighting_optics',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Multi-layer chromatic color dispersion producing vivid rainbow light diffraction',
    filters: [
      'rgbashift=rh=-15:gh=5:bh=15',
      'hue=h=t*60:s=1.8',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 142. Anime Speedlines Burst Action
  anime_action_speedlines: {
    id: 'anime_action_speedlines',
    name: 'Shonen Anime Radial Speedlines Burst',
    category: 'layout_composition',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Radial focus speedlines framing the subject for dramatic action impacts',
    filters: [
      'vignette=PI/2.5',
      'unsharp=7:7:1.8',
      'eq=contrast=1.35',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 143. Matrix Operator Terminal Phosphor Green
  matrix_operator_green_terminal: {
    id: 'matrix_operator_green_terminal',
    name: 'Matrix Nebuchadnezzar Operator CRT',
    category: 'color_filter',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Pure IBM green monochrome phosphor terminal with horizontal raster scanlines',
    filters: [
      'colorchannelmixer=rr=0:rg=0:rb=0:gr=0.3:gg=0.9:gb=0.1:br=0:bg=0:bb=0',
      'drawgrid=w=iw:h=3:t=1:c=black@0.45',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 144. High-End Champagne Gold Luxury
  champagne_gold_luxury: {
    id: 'champagne_gold_luxury',
    name: 'Rolex Champagne Gold Commercial Tone',
    category: 'color_filter',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Refined champagne warm highlights with deep bronze shadows and sparkling contrast',
    filters: [
      'colorbalance=rh=0.16:gh=0.1:bh=-0.1:rs=0.04:gs=-0.02:bs=-0.04',
      'eq=contrast=1.12:saturation=1.1',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 145. Cold Nordic Thriller Noir
  nordic_noir_bleak_cold: {
    id: 'nordic_noir_bleak_cold',
    name: 'Scandinavian Nordic Noir Bleak Winter',
    category: 'color_filter',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Desaturated freezing blues and greys capturing the mood of Girl with the Dragon Tattoo',
    filters: [
      'colorbalance=rs=-0.15:gs=-0.05:bs=0.2:rh=-0.1:bh=0.15',
      'eq=contrast=1.22:saturation=0.65',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 146. Retro 1990s Game Boy 4-Shade Olive Green
  gameboy_original_4shade: {
    id: 'gameboy_original_4shade',
    name: '1989 Nintendo Game Boy 4-Tone Green LCD',
    category: 'distortion_glitch',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Iconic greenish-yellow dot-matrix LCD screen with 4 quantized shading levels',
    filters: [
      'scale=160:144:flags=neighbor,scale=1280:720:flags=neighbor',
      'colorchannelmixer=rr=0.2:rg=0.6:rb=0.1:gr=0.3:gg=0.7:gb=0.1:br=0.1:bg=0.4:bb=0.1',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 147. Dreamy Golden Dust Particles Simulation
  golden_dust_particles: {
    id: 'golden_dust_particles',
    name: 'Magical Golden Dust Motes & Sunlight',
    category: 'lighting_optics',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Suspended illuminated golden dust motes drifting in sunbeam rays',
    filters: [
      'noise=alls=15:allf=t+u',
      'colorbalance=rh=0.15:gh=0.08:bh=-0.12',
      'split[main][dust];[dust]gblur=sigma=3[d];[main][d]blend=all_mode=screen:all_opacity=0.3',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 148. Fast Whip Zoom Blur Down Snapper
  whip_zoom_down_snap: {
    id: 'whip_zoom_down_snap',
    name: 'Whip Zoom Out Snapshot Snap',
    category: 'transition',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Ultra-fast zoom out snapping into regular framing for high-energy montage editing',
    filters: [
      'zoompan=z=1.12-0.01*t:d=1:s=1280x720:fps=30',
      'unsharp=5:5:1.0',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 149. Audio Cyber Synthwave Phaser
  audio_synthwave_phaser: {
    id: 'audio_synthwave_phaser',
    name: 'Outrun Synthwave 1984 Sweeping Phaser',
    category: 'audio_voice',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Classic 12-stage analog phaser sweeping back and forth through vocal audio spectrum',
    filters: [],
    audioFilters: [
      'aphaser=in_gain=0.8:out_gain=0.75:delay=3:decay=0.4:speed=0.5:type=t',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 150. Studio White Infinity Cyc Background
  white_infinity_cyc: {
    id: 'white_infinity_cyc',
    name: 'Apple Keynote White Infinity Cyclorama',
    category: 'lighting_optics',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Flawless pure white high-key studio background with zero shadow clipping',
    filters: [
      'curves=lighter',
      'eq=contrast=1.05:saturation=1.15',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },
};
