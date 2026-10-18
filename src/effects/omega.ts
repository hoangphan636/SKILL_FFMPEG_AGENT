import type { EffectDefinition } from './schema.js';

export const OMEGA_20_EFFECTS: Record<string, EffectDefinition> = {
  // 191. Christopher Nolan Tenet Inverted Reverse Momentum
  tenet_inverted_time_forward: {
    id: 'tenet_inverted_time_forward',
    name: 'Tenet Temporal Inversion Blue Entropy Flow',
    category: 'speed_motion',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Reverse entropy visual stutter with Hoyte van Hoytema cold cobalt blue grade',
    filters: [
      'colorbalance=rs=-0.1:gs=-0.05:bs=0.25:rm=-0.08:bm=0.18',
      'eq=contrast=1.3:saturation=0.9',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 192. Cyberpunk Netrunner Brain-Dance Glitch Distortion
  braindance_netrunner_glitch: {
    id: 'braindance_netrunner_glitch',
    name: 'Cyberpunk Braindance Neural Memory Stream',
    category: 'distortion_glitch',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Thermal memory layers with digital static distortion and golden neon scanlines',
    filters: [
      'colorbalance=rh=0.3:gh=0.1:bh=-0.2:rs=0.1:bs=0.2',
      'drawgrid=w=iw:h=8:t=1:c=yellow@0.3',
      'eq=contrast=1.35',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 193. Mad Max Fury Road Desert Scorched Chrome & Flame
  mad_max_scorched_chrome: {
    id: 'mad_max_scorched_chrome',
    name: 'Mad Max Fury Road Scorched Chrome & Flame',
    category: 'color_filter',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'John Seale ultra-saturated apocalyptic orange desert with deep turquoise skies',
    filters: [
      'colorbalance=rh=0.4:gh=0.1:bh=-0.3:rs=-0.1:gs=0.15:bs=0.3',
      'eq=contrast=1.4:saturation=1.5',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 194. Studio Ghibli Miyazaki Watercolor Skies & Grass
  ghibli_miyazaki_watercolor: {
    id: 'ghibli_miyazaki_watercolor',
    name: 'Studio Ghibli Lush Meadow & Cerulean Skies',
    category: 'color_filter',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Hand-painted animation warmth: vivid emerald greens, pastel sky blues and soft daylight',
    filters: [
      'colorbalance=rm=-0.05:gm=0.18:bm=0.12:rh=0.1:gh=0.15:bh=0.05',
      'eq=contrast=1.1:saturation=1.35:brightness=0.03',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 195. David Fincher Fight Club Grimy Fluorescent Hospital Green
  fincher_fight_club_green: {
    id: 'fincher_fight_club_green',
    name: 'David Fincher Grimy Fluorescent Sodium Green',
    category: 'color_filter',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Jeff Cronenweth sickly green fluorescent cast with crushed shadow midtones',
    filters: [
      'colorbalance=rs=-0.08:gs=0.22:bs=-0.15:rm=-0.05:gm=0.18:bm=-0.1',
      'eq=contrast=1.32:saturation=0.85',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 196. Tron Legacy Grid Blue Light-Cycle Bloom
  tron_legacy_lightcycle_grid: {
    id: 'tron_legacy_lightcycle_grid',
    name: 'Tron Legacy Kevin Flynn Digital Grid Cyan',
    category: 'lighting_optics',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Pitch-black environment illuminated by luminescent neon cyan circuitry streaks',
    filters: [
      'colorchannelmixer=rr=0.1:rg=0:rb=0:gr=0:gg=1.2:gb=0:br=0:bg=0:bb=1.5',
      'eq=contrast=1.6:brightness=-0.1',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 197. Vintage 1920s German Expressionism Metropolis
  metropolis_1920s_expressionism: {
    id: 'metropolis_1920s_expressionism',
    name: 'Fritz Lang 1927 Metropolis Expressionist Silver',
    category: 'color_filter',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Dramatic chiaroscuro high-contrast silent film with silver nitrate glow',
    filters: [
      'format=gray',
      'eq=contrast=1.5:brightness=-0.05',
      'noise=alls=15:allf=t',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 198. Neon Tokyo Shinjuku Hologram Billboard Rain
  shinjuku_cyber_billboard_rain: {
    id: 'shinjuku_cyber_billboard_rain',
    name: 'Neo-Shinjuku Giant Cyber Billboard Bleed',
    category: 'color_filter',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Massive LED billboard reflections cutting through dense rainy midnight smog',
    filters: [
      'colorbalance=rh=0.35:gh=-0.1:bh=0.3:rs=-0.15:gs=0.1:bs=0.25',
      'eq=contrast=1.35:saturation=1.4',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 199. Audio: Daft Punk Alive 2007 French House Flanger
  audio_daft_punk_flanger: {
    id: 'audio_daft_punk_flanger',
    name: 'Daft Punk Alive Sweeping French Touch Flanger',
    category: 'audio_voice',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Analog bucket-brigade flanger sweeping across audio frequencies',
    filters: [
      'flanger=delay=8:depth=4:regen=50:width=80:speed=0.4:phase=45',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 200. Audio: Pink Floyd The Wall Rotary Speaker Leslie Modulator
  audio_leslie_rotary_speaker: {
    id: 'audio_leslie_rotary_speaker',
    name: 'Pink Floyd 1979 Leslie Rotating Speaker Doppler',
    category: 'audio_voice',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Doppler frequency pitch shifting of a rotating mechanical speaker horn',
    filters: [
      'vibrato=f=4:d=0.3,chorus=0.8:0.9:30:0.4:0.25:2',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 201. John Wick Continental Hotel Crimson & Gold Neon
  john_wick_continental_crimson: {
    id: 'john_wick_continental_crimson',
    name: 'John Wick Continental Hotel Blood Velvet & Amber',
    category: 'color_filter',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Dan Laustsen lush blood crimson lighting with gold whiskey glass reflections',
    filters: [
      'colorbalance=rh=0.38:gh=-0.08:bh=-0.15:rm=0.2:gm=0.05:bm=-0.1',
      'eq=contrast=1.3:saturation=1.35',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 202. IMAX 15/70 Underwater Abyss Deep Blue Deep Sea
  abyss_deep_sea_hydro: {
    id: 'abyss_deep_sea_hydro',
    name: 'James Cameron Mariana Abyss Oceanic Blue',
    category: 'color_filter',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Heavy water absorption: zero reds, saturated oceanic blues with submarine searchlight halo',
    filters: [
      'colorchannelmixer=rr=0.15:rg=0:rb=0:gr=0:gg=0.85:gb=0:br=0:bg=0:bb=1.35',
      'eq=contrast=1.25:brightness=-0.04',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 203. 1980s VHS Fast-Forward Tracking Scanlines
  vhs_fast_forward_scanlines: {
    id: 'vhs_fast_forward_scanlines',
    name: '1985 JVC VCR 8x Fast-Forward Rewind Scanlines',
    category: 'distortion_glitch',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'High-speed analog magnetic tape scanlines with horizontal noise bands',
    filters: [
      'drawgrid=w=iw:h=12:t=2:c=white@0.25',
      'noise=c0s=18:c0f=t',
      'colorbalance=rs=0.1:bs=-0.1',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 204. Wes Anderson Isle of Dogs Monochrome Japanese Woodblock
  isle_of_dogs_woodblock: {
    id: 'isle_of_dogs_woodblock',
    name: 'Wes Anderson Isle of Dogs Woodblock Print',
    category: 'color_filter',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Desaturated Japanese woodblock printing tones with warm ivory parchment grain',
    filters: [
      'colorbalance=rh=0.15:gh=0.12:bh=-0.18:rs=0.08:gs=0.06:bs=-0.1',
      'eq=contrast=1.22:saturation=0.6',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 205. NASA Hubble James Webb Cosmic Deep Field Infrared
  james_webb_deep_space_field: {
    id: 'james_webb_deep_space_field',
    name: 'James Webb Space Telescope Mid-Infrared Cosmic Dust',
    category: 'lighting_optics',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Cosmic nebula infrared glow: fiery orange interstellar gas against velvet space',
    filters: [
      'colorbalance=rh=0.35:gh=0.15:bh=-0.25:rm=0.15:bm=0.15:rs=-0.15:bs=-0.15',
      'eq=contrast=1.45:saturation=1.4',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 206. Apple Vision Pro Spatial Video Pass-Through Micro-OLED
  vision_pro_spatial_passthrough: {
    id: 'vision_pro_spatial_passthrough',
    name: 'Apple Vision Pro Spatial 4K Micro-OLED Pass-Through',
    category: 'lighting_optics',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Ultra-crisp 23 million pixel Micro-OLED perceptual sharpness with wide DCI-P3 color',
    filters: [
      'unsharp=5:5:1.2:3:3:0.6',
      'eq=contrast=1.08:saturation=1.15',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 207. Audio: Kraftwerk 1978 Kling Klang Vocoder Robot Speech
  audio_kling_klang_robot_vocoder: {
    id: 'audio_kling_klang_robot_vocoder',
    name: 'Kraftwerk The Robots Kling Klang Synthesizer Voice',
    category: 'audio_voice',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Bandpass filtered robotic formant synthesizer vocal texture',
    filters: [
      'highpass=f=300,lowpass=f=3400,crystalizer=i=3.0,tremolo=f=12:d=0.7',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 208. Audio: Cinema Subwoofer Earthquake 30Hz Bass Shaker
  audio_earthquake_30hz_shaker: {
    id: 'audio_earthquake_30hz_shaker',
    name: 'IMAX Cinema 30Hz Sub-Bass Floor Shaker',
    category: 'audio_voice',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Extreme physical infrasound bass boost shaking cinema seats',
    filters: [
      'bass=g=12:f=35:w=0.4,lowpass=f=18000',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 209. Cyber Matrix Code Infiltration Glitch Wall
  matrix_code_infiltration_wall: {
    id: 'matrix_code_infiltration_wall',
    name: 'Matrix Data Stream Breach Infiltration HUD',
    category: 'layout_composition',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Data stream cascade with phosphor green high-contrast edge luminescence',
    filters: [
      'colorchannelmixer=rr=0:rg=0:rb=0:gr=0:gg=1.4:gb=0:br=0:bg=0:bb=0.2',
      'drawgrid=w=24:h=24:t=1:c=green@0.3',
      'eq=contrast=1.5',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 210. 1969 Apollo 11 Lunar Module Surface TV Broadcast
  apollo_11_lunar_broadcast: {
    id: 'apollo_11_lunar_broadcast',
    name: '1969 Apollo 11 Neil Armstrong Moonwalk SSTV',
    category: 'distortion_glitch',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Slow-scan lunar transmission: ghostly low frame rate, RF static and high contrast',
    filters: [
      'format=gray',
      'eq=contrast=1.6:brightness=0.08',
      'noise=alls=22:allf=t',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },
};
