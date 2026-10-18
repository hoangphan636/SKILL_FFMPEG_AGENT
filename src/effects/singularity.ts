import type { EffectDefinition } from './schema.js';

export const SINGULARITY_20_EFFECTS: Record<string, EffectDefinition> = {
  // 221. Stanley Kubrick 2001 A Space Odyssey Stargate Slit-Scan
  kubrick_2001_stargate_slitscan: {
    id: 'kubrick_2001_stargate_slitscan',
    name: '2001 Space Odyssey Douglas Trumbull Slit-Scan Warp',
    category: 'lighting_optics',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Hypnotic psychedelic infinite space tunnel with saturated complementary color streaks',
    filters: [
      'colorchannelmixer=rr=1.4:rg=-0.2:rb=0.2:gr=0.2:gg=1.3:gb=-0.1:br=-0.2:bg=0.2:bb=1.5',
      'eq=contrast=1.45:saturation=1.6',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 222. Guillermo del Toro Pan's Labyrinth Amber Fairy Glow & Deep Teal
  pans_labyrinth_fairy_amber: {
    id: 'pans_labyrinth_fairy_amber',
    name: 'Guillermo del Toro Fairy Amber & Shadow Teal',
    category: 'color_filter',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Dark fantasy aesthetic: glowing amber magic dust balanced by deep teal gothic shadows',
    filters: [
      'colorbalance=rh=0.3:gh=0.15:bh=-0.25:rs=-0.15:gs=0.1:bs=0.25:rm=0.1:gm=-0.05:bm=0.1',
      'eq=contrast=1.32:saturation=1.2',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 223. The Matrix Resurrections Golden Daylight Code Fracture
  matrix_resurrections_golden_code: {
    id: 'matrix_resurrections_golden_code',
    name: 'Matrix Resurrections Warm Daylight Digital Fracture',
    category: 'lighting_optics',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'John Toll golden sunlit San Francisco grade with sub-surface digital green code flares',
    filters: [
      'colorbalance=rh=0.25:gh=0.15:bh=-0.2:rm=-0.05:gm=0.12:bm=-0.05',
      'eq=contrast=1.2:saturation=1.25',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 224. Vintage 1950s Technicolor IB Dye Transfer Process 4
  technicolor_ib_process4: {
    id: 'technicolor_ib_process4',
    name: '1950s Singin in the Rain Technicolor IB Dye Transfer',
    category: 'color_filter',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Ultra-rich saturated primary pigments: deep velvety blacks, vivid canary yellows and ruby reds',
    filters: [
      'colorbalance=rs=0.15:gs=-0.05:bs=-0.1:rh=0.2:gh=0.1:bh=-0.15',
      'eq=contrast=1.35:saturation=1.45',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 225. Cyberpunk Kiroshi Optics Cyber-Eye Scan HUD
  kiroshi_optics_scanner_hud: {
    id: 'kiroshi_optics_scanner_hud',
    name: 'Kiroshi Optics Threat Scanner Cyber HUD',
    category: 'layout_composition',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Cybernetic optical implant HUD with scanning grid, telemetry markers and cyan flare',
    filters: [
      'drawbox=x=80:y=80:w=iw-160:h=ih-160:color=cyan@0.4:t=1',
      'drawgrid=w=60:h=60:t=1:c=cyan@0.15',
      'colorbalance=rm=-0.05:gm=0.1:bm=0.2',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 226. Martin Scorsese Taxi Driver 1976 Steaming Grimy Steam & Red Lights
  taxi_driver_1976_neon_steam: {
    id: 'taxi_driver_1976_neon_steam',
    name: 'Martin Scorsese Taxi Driver 1976 Grimy NYC Steam',
    category: 'color_filter',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Michael Chapman 1970s Manhattan nocturnal steam, smeared neon reflections and blood red taillights',
    filters: [
      'colorbalance=rh=0.32:gh=-0.1:bh=-0.15:rs=0.1:gs=0.08:bs=-0.1',
      'eq=contrast=1.28:saturation=1.2',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 227. Audio: Hans Zimmer Inception Horn of Doom (Sub-Woofer Braam Impact)
  audio_inception_braam_brass: {
    id: 'audio_inception_braam_brass',
    name: 'Hans Zimmer Inception Brass Braam Doom Impact',
    category: 'audio_voice',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Massive slowed orchestral brass braam impact resonating in 40Hz sub-bass frequencies',
    filters: [
      'bass=g=10:f=50:w=0.4,aecho=0.8:0.88:300|600:0.5|0.3',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 228. Audio: Aphex Twin Drill n Bass Granular Bitcrush Stutter
  audio_granular_drill_bitcrush: {
    id: 'audio_granular_drill_bitcrush',
    name: 'Aphex Twin Granular 8-Bit Lo-Fi Bitcrush',
    category: 'audio_voice',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Extreme dynamic granular sampling and downsampled 8-bit digital crunch',
    filters: [
      'acrusher=bits=8:mode=log:aa=1:samples=4',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 229. Robert Eggers The Lighthouse 1.19:1 B&W Orthochromatic Film
  the_lighthouse_orthochromatic: {
    id: 'the_lighthouse_orthochromatic',
    name: 'Robert Eggers The Lighthouse 19th Century Ortho B&W',
    category: 'color_filter',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Jarin Blaschke 19th century orthochromatic film stock: blind to red light, deep weathered skin textures',
    filters: [
      'colorchannelmixer=rr=0:rg=0.6:rb=0.4:gr=0:gg=0.6:gb=0.4:br=0:bg=0.6:bb=0.4',
      'eq=contrast=1.55:brightness=-0.04',
      'noise=alls=16:allf=t',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 230. Cyberpunk Holographic Glitch Chromatic Displacement
  hologram_chromatic_displacement: {
    id: 'hologram_chromatic_displacement',
    name: 'Cyberpunk Hologram RGB Phase Shifter',
    category: 'distortion_glitch',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Horizontal channel displacement separating Red and Blue channels into ghost reflections',
    filters: [
      'colorchannelmixer=rr=1:rg=0:rb=0:gr=0:gg=0.9:gb=0:br=0:bg=0:bb=1.2',
      'drawgrid=w=iw:h=4:t=1:c=white@0.2',
      'eq=contrast=1.25',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 231. Hayao Miyazaki Spirited Away Twilight Train on the Water
  spirited_away_twilight_train: {
    id: 'spirited_away_twilight_train',
    name: 'Miyazaki Spirited Away Sea Railway Twilight',
    category: 'color_filter',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Nostalgic watercolor evening: periwinkle water reflections, pastel peach sunset and peaceful tranquility',
    filters: [
      'colorbalance=rh=0.22:gh=0.08:bh=0.15:rs=-0.05:gs=0.05:bs=0.22',
      'eq=contrast=1.12:saturation=1.3',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 232. 1999 The Matrix Neo Waking Up Pod Slime Visor
  matrix_pod_slime_visor: {
    id: 'matrix_pod_slime_visor',
    name: 'Matrix Real World Pod Awakening Desaturated Slate',
    category: 'color_filter',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Bill Pope cold real world palette: desaturated slate greys, pale skin tones and electrical sparks',
    filters: [
      'colorbalance=rs=-0.15:gs=-0.08:bs=0.15:rh=-0.05:gh=-0.02:bh=0.08',
      'eq=contrast=1.3:saturation=0.55',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 233. Audio: Vangelis CS-80 Bladerunner Synthesizer Reverb Cloud
  audio_vangelis_cs80_cloud: {
    id: 'audio_vangelis_cs80_cloud',
    name: 'Vangelis Yamaha CS-80 Shimmer Reverb Cloud',
    category: 'audio_voice',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Lush expansive algorithmic shimmer reverb echoing synthetic pads across futuristic rain',
    filters: [
      'aecho=0.85:0.85:250|500|750:0.6|0.4|0.2,stereowiden=delay=25:feedback=0.4:crossfeed=0.4:drymix=0.7',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 234. Audio: 1940s WWII BBC Wireless Radio Broadcast Tube
  audio_wwii_bbc_wireless_radio: {
    id: 'audio_wwii_bbc_wireless_radio',
    name: '1940s Winston Churchill BBC Wireless AM Radio',
    category: 'audio_voice',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Band-limited vacuum tube AM receiver: telephone-like bandpass filter with static carbon crackle',
    filters: [
      'highpass=f=350,lowpass=f=2800,volume=1.4,acrusher=bits=10:mode=lin:aa=1:samples=2',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 235. Ridley Scott Gladiator Elysium Wheat Fields Golden Afterlife
  gladiator_elysium_golden_fields: {
    id: 'gladiator_elysium_golden_fields',
    name: 'Ridley Scott Gladiator Elysium Golden Wheat Haze',
    category: 'lighting_optics',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'John Mathieson spiritual afterglow: slow warm sunbeam flares washing over flowing golden grain',
    filters: [
      'colorbalance=rh=0.38:gh=0.22:bh=-0.3:rm=0.18:gm=0.1:bm=-0.15',
      'eq=contrast=1.18:brightness=0.05:saturation=1.28',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 236. Cyber Surveillance Thermal Blue Cold-Spot Hunter
  surveillance_cold_spot_hunter: {
    id: 'surveillance_cold_spot_hunter',
    name: 'Defense Intelligence Cold-Spot Forensic FLIR',
    category: 'distortion_glitch',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Forensic thermal imaging isolating cold temperature anomalies in bright royal cobalt hues',
    filters: [
      'format=gbrp',
      'lutrgb=r=255-val:g=val*0.5:b=val*1.5',
      'eq=contrast=1.35',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 237. Wes Anderson The French Dispatch Split-Screen 35mm Vignette
  french_dispatch_pastels: {
    id: 'french_dispatch_pastels',
    name: 'The French Dispatch Ennui-sur-Blasé Pastel Yellow',
    category: 'color_filter',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Storybook French postcard look: delicate buttery yellows, gentle sky blues and vignette borders',
    filters: [
      'colorbalance=rh=0.22:gh=0.18:bh=-0.15:rs=0.05:gs=0.04:bs=-0.08',
      'vignette=PI/3.5',
      'eq=contrast=1.14:saturation=1.2',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 238. Audio: Sub-Bass 808 Sidechain Pumping Compression Duck
  audio_edm_sidechain_pump: {
    id: 'audio_edm_sidechain_pump',
    name: 'French Electro 128 BPM Sidechain Pumping Duck',
    category: 'audio_voice',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Rhythmic volume swell ducking simulating sidechain compressor triggered by 4-on-the-floor kick',
    filters: [
      'tremolo=f=2.13:d=0.7',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 239. James Cameron Avatar Pandora Bioluminescent Night Jungle
  avatar_pandora_bioluminescence: {
    id: 'avatar_pandora_bioluminescence',
    name: 'Avatar Pandora Bioluminescent Forest Violet & Cyan',
    category: 'lighting_optics',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Mauro Fiore nocturnal alien jungle: deep royal purple canopy illuminated by glowing cyan flora',
    filters: [
      'colorbalance=rs=-0.12:gs=0.15:bs=0.35:rh=-0.08:gh=0.18:bh=0.28:rm=0.15:gm=-0.05:bm=0.2',
      'eq=contrast=1.38:saturation=1.45',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 240. 2024 Apple Spatial Persona Clean High-Key Studio Portrait
  apple_spatial_persona_clean: {
    id: 'apple_spatial_persona_clean',
    name: 'Apple Vision Pro Spatial Persona High-Key Portrait',
    category: 'lighting_optics',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Studio diffuse key light: natural skintone acutance, zero chromatic aberration, pure neutral whites',
    filters: [
      'unsharp=5:5:0.8:3:3:0.3',
      'colorbalance=rs=0.02:gs=0.01:bs=-0.02',
      'eq=contrast=1.08:brightness=0.02:saturation=1.06',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },
};
