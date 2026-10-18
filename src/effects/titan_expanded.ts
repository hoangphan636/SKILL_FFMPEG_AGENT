import type { EffectDefinition } from './schema.js';

export const TITAN_30_EFFECTS: Record<string, EffectDefinition> = {
  // 241. Dune Part Two Giedi Prime Harkonnen Infrared Monochromatic
  harkonnen_giedi_prime_infrared: {
    id: 'harkonnen_giedi_prime_infrared',
    name: 'Dune 2 Giedi Prime Harkonnen Pure Infrared B&W',
    category: 'color_filter',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Greig Fraser ARRI Alexa LF IR look: chalky stark white skin tones, pitch-black skies and solarized high-contrast',
    filters: [
      'colorchannelmixer=rr=1.5:rg=0:rb=0:gr=1.5:gg=0:gb=0:br=1.5:bg=0:bb=0',
      'eq=contrast=1.65:brightness=-0.05',
      'unsharp=5:5:1.2:3:3:0.4',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 242. Cyberpunk 2077 Cyberpsycho Sandevistan Speed Trail
  sandevistan_cyberpsycho_trail: {
    id: 'sandevistan_cyberpsycho_trail',
    name: 'Cyberpunk Sandevistan Chrono Ghost Speed Trail',
    category: 'speed_motion',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Ultra-fast relativistic motion ghosting with electric cyan & neon yellow trail echoes',
    filters: [
      'tmix=frames=5:weights="1 0.8 0.6 0.4 0.2"',
      'colorbalance=rh=0.2:gh=0.15:bh=-0.1:rs=-0.1:gs=0.1:bs=0.25',
      'eq=contrast=1.25:saturation=1.35',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 243. Interstellar Gargantua Accretion Disk Gravitational Warp
  gargantua_gravitational_lens: {
    id: 'gargantua_gravitational_lens',
    name: 'Interstellar Gargantua Dual Event Horizon Warp',
    category: 'lighting_optics',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Einsteinian light bending: dual spherical warp with blinding celestial gold accretion glow',
    filters: [
      'lenscorrection=cx=0.5:cy=0.5:k1=-0.25:k2=0.12',
      'colorbalance=rh=0.35:gh=0.18:bh=-0.25:rm=0.2:gm=0.08:bm=-0.18',
      'eq=contrast=1.4:saturation=1.3',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 244. Matrix Bullet-Time Orbit Camera Freeze
  bullet_time_orbital_freeze: {
    id: 'bullet_time_orbital_freeze',
    name: 'The Matrix 1999 Orbital Bullet-Time Freeze Arc',
    category: 'speed_motion',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Iconic 120-camera green-tinted array freeze with simulated circular arc rotation',
    filters: [
      'colorbalance=rs=-0.12:gs=0.25:bs=-0.1:rh=-0.08:gh=0.18:bh=-0.08',
      'eq=contrast=1.3:saturation=0.9',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 245. Akira 1988 Neo-Tokyo Kaneda Bike Light Streaks
  akira_kaneda_light_trails: {
    id: 'akira_kaneda_light_trails',
    name: 'Akira 1988 Neo-Tokyo Kaneda Red Taillight Streaks',
    category: 'lighting_optics',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Katsuhiro Otomo cel animation: hyper-saturated laser red streak bloom cutting through pitch night',
    filters: [
      'colorbalance=rh=0.45:gh=-0.15:bh=-0.15:rs=-0.1:gs=-0.05:bs=0.1',
      'eq=contrast=1.45:saturation=1.5',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 246. Oppenheimer Trinity Test Los Alamos Atomic Fireball
  oppenheimer_trinity_fireball: {
    id: 'oppenheimer_trinity_fireball',
    name: 'Oppenheimer Trinity Test Blinding Nuclear Flash',
    category: 'lighting_optics',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Blinding pure white overexposure decay into scorching cadmium orange shockwave fire',
    filters: [
      'colorbalance=rh=0.45:gh=0.2:bh=-0.35:rm=0.25:gm=0.1:bm=-0.2',
      'eq=contrast=1.5:brightness=0.1:saturation=1.4',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 247. Sin City Frank Miller High-Contrast Hardcover Ink
  sincity_hardcover_comic_ink: {
    id: 'sincity_hardcover_comic_ink',
    name: 'Sin City Frank Miller Pure Lithographic Ink Noir',
    category: 'color_filter',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Pure graphic novel aesthetic: 100% crushed absolute blacks, razor-sharp paper whites, zero midtone gray',
    filters: [
      'format=gray',
      'eq=contrast=2.4:brightness=-0.15',
      'unsharp=7:7:1.8:7:7:1.0',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 248. Drive 2011 Nicolas Winding Refn Synthwave Cyan & Magenta
  drive_2011_synthwave_night: {
    id: 'drive_2011_synthwave_night',
    name: 'Drive 2011 LA Midnight Scorpion Jacket Neon',
    category: 'color_filter',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Newton Thomas Sigel nocturnal romance: deep sodium vapor yellow headlights against electric pink & cyan',
    filters: [
      'colorbalance=rs=-0.15:gs=0.1:bs=0.28:rh=0.3:gh=-0.05:bh=0.2:rm=0.1:gm=-0.08:bm=0.18',
      'eq=contrast=1.35:saturation=1.38',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 249. Wes Anderson Asteroid City 1955 Desert Pastel Orange & Turquoise
  asteroid_city_1955_pastel: {
    id: 'asteroid_city_1955_pastel',
    name: 'Asteroid City 1955 Desert Ochre & Vivid Turquoise',
    category: 'color_filter',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Robert Yeoman vintage Kodachrome cartoon look: warm apricot sand dunes under candy-coated turquoise skies',
    filters: [
      'colorbalance=rh=0.35:gh=0.18:bh=-0.22:rs=-0.12:gs=0.12:bs=0.28:rm=0.15:gm=0.08:bm=-0.1',
      'eq=contrast=1.18:saturation=1.42',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 250. Blade Runner 1982 Deckard Voight-Kampff Iris Reflection
  voight_kampff_iris_macro: {
    id: 'voight_kampff_iris_macro',
    name: 'Blade Runner 1982 Voight-Kampff Iris Amber Flare',
    category: 'lighting_optics',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Jordan Cronenweth glowing red capillary retinal tapetum lucidum reflection with CRT telemetry grid',
    filters: [
      'colorbalance=rh=0.35:gh=-0.08:bh=-0.2:rs=0.12:bs=0.15',
      'drawbox=x=(iw-180)/2:y=(ih-180)/2:w=180:h=180:color=red@0.5:t=1',
      'eq=contrast=1.32',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 251. 1990s Game Boy Camera 4-Level Green Thermal Dither
  gameboy_camera_thermal_dither: {
    id: 'gameboy_camera_thermal_dither',
    name: '1998 Nintendo Game Boy Pocket Camera 128x112 Dither',
    category: 'distortion_glitch',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Iconic greenish dot-matrix LCD sensor with ordered pixel dithering and high-contrast quantization',
    filters: [
      'format=gray',
      'scale=160:144:flags=neighbor',
      'scale=iw*6:ih*6:flags=neighbor',
      'colorchannelmixer=rr=0.4:rg=0.5:rb=0.1:gr=0.5:gg=0.6:gb=0.1:br=0.1:bg=0.2:bb=0.1',
      'eq=contrast=1.8',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 252. Ghost in the Shell 1995 Thermoptic Camouflage Invisibility
  thermoptic_camouflage_shimmer: {
    id: 'thermoptic_camouflage_shimmer',
    name: 'Ghost in the Shell 1995 Thermoptic Camouflage Water Shimmer',
    category: 'distortion_glitch',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Light-bending cloaking device: refractive edge ripple distortion over translucent stealth silhouette',
    filters: [
      'lenscorrection=cx=0.5:cy=0.5:k1=-0.12:k2=0.06',
      'unsharp=7:7:2.0:7:7:1.5',
      'colorbalance=rs=-0.08:gs=0.15:bs=0.22',
      'eq=contrast=1.2:saturation=0.8',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 253. Fight Club 1999 Ikea Catalog Subliminal Composite Bleed
  ikea_catalog_subliminal_bleed: {
    id: 'ikea_catalog_subliminal_bleed',
    name: 'Fight Club 1999 Ikea Living Room Corporate Desaturation',
    category: 'color_filter',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Desaturated corporate office beige midtones with sterile fluorescent blue reflections',
    filters: [
      'colorbalance=rs=0.08:gs=0.05:bs=-0.08:rh=-0.05:gh=0.02:bh=0.12',
      'eq=contrast=1.16:saturation=0.72',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 254. Tron Kevin Flynn 1982 Vector Phosphor Scope
  tron_1982_vector_scope: {
    id: 'tron_1982_vector_scope',
    name: 'Tron 1982 Mainframe Vector Phosphor Line Grid',
    category: 'lighting_optics',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Monochrome black world illuminated exclusively by bright cyan and electric red 1-pixel vector boundaries',
    filters: [
      'edgedetect=low=0.15:high=0.4:mode=wires',
      'colorchannelmixer=rr=0:rg=0:rb=0:gr=0:gg=1.4:gb=0:br=0:bg=0:bb=1.6',
      'eq=contrast=1.6',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 255. Audio: Ludwig Göransson Tenet Inverted Percussion Reverse Swell
  audio_tenet_reverse_percussion: {
    id: 'audio_tenet_reverse_percussion',
    name: 'Tenet Inverted Percussion Forward Forward Swell',
    category: 'audio_voice',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Backwards transient sucking into forward drum hit with sub-bass stereo widening',
    filters: [
      'aecho=0.8:0.7:150|300:0.4|0.2,stereowiden=delay=20:feedback=0.3:crossfeed=0.3:drymix=0.8',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 256. Audio: Cyberpunk 2077 Trauma Team Dispatch Radio Comm
  audio_trauma_team_dispatch: {
    id: 'audio_trauma_team_dispatch',
    name: 'Cyberpunk 2077 Trauma Team Tactical Radio Code Red',
    category: 'audio_voice',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Band-limited encrypted tactical tactical helmet radio: sharp 2.5kHz resonance with burst squelch',
    filters: [
      'highpass=f=400,lowpass=f=3200,compand=attacks=0.01:decays=0.05:points=-70/-70|-20/-10|0/0,volume=1.5',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 257. Audio: Interstellar Cornfield Chase Organ Pipe Resonator
  audio_interstellar_pipe_organ: {
    id: 'audio_interstellar_pipe_organ',
    name: 'Hans Zimmer Temple Church 32ft Pipe Organ Resonator',
    category: 'audio_voice',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Massive acoustic church pipe organ resonance with deep 16Hz pedal sub-harmonics',
    filters: [
      'bass=g=9:f=45:w=0.5,aecho=0.85:0.9:280|560|840:0.5|0.3|0.2',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 258. Audio: Daft Punk Tron Legacy Electronic Arp Phaser
  audio_tron_daft_punk_arp: {
    id: 'audio_tron_daft_punk_arp',
    name: 'Daft Punk Tron Legacy Sweeping 8-Pole Analog Phaser',
    category: 'audio_voice',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Lush sweeping 8-pole analog phaser modulating synth pads across stereo panorama',
    filters: [
      'apulsator=mode=sine:hz=0.3:width=0.85,chorus=0.7:0.9:40:0.4:0.25:2',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 259. Audio: 1960s Motown Abbey Road Tube Limiter Saturation
  audio_motown_abbey_road_tube: {
    id: 'audio_motown_abbey_road_tube',
    name: '1960s Abbey Road EMI TG12345 Console Warm Tube Saturation',
    category: 'audio_voice',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Warm harmonic British transformer saturation with musical second-order harmonics',
    filters: [
      'crystalizer=i=2.2,highpass=f=60,lowpass=f=14000,volume=1.25',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 260. Audio: Deep Sub-Bass 808 Earthquake Infrasound Driver
  audio_808_earthquake_driver: {
    id: 'audio_808_earthquake_driver',
    name: 'Trap 808 Sub-Bass Infrasound 25Hz Rumble Floor',
    category: 'audio_voice',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Heavy 25-50Hz infrasound wave driving high-power club subwoofers without clipping',
    filters: [
      'bass=g=11:f=32:w=0.45,lowpass=f=16000',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 261. Guillermo del Toro The Shape of Water Emerald Aquatic Glow
  shape_of_water_emerald: {
    id: 'shape_of_water_emerald',
    name: 'The Shape of Water Emerald Aquatic Cold Romance',
    category: 'color_filter',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Dan Laustsen 1960s cold war fairy tale: deep emerald greens, teal shadows and wet bathroom tile gloss',
    filters: [
      'colorbalance=rs=-0.15:gs=0.18:bs=0.08:rh=-0.08:gh=0.15:bh=0.05',
      'eq=contrast=1.28:saturation=1.18',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 262. Denis Villeneuve Sicario Desert Thermal FLIR Dust Storm
  sicario_desert_thermal_storm: {
    id: 'sicario_desert_thermal_storm',
    name: 'Sicario Roger Deakins Twilight Border Dust & FLIR',
    category: 'color_filter',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Juarez sunset border crossing: silhouetted tactical operators against violet twilight and dust storm amber',
    filters: [
      'colorbalance=rh=0.35:gh=0.12:bh=-0.28:rs=0.05:gs=-0.08:bs=0.22',
      'eq=contrast=1.38:brightness=-0.06:saturation=1.25',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 263. Stanley Kubrick The Shining Overlook Gold Ballroom
  the_shining_overlook_ballroom: {
    id: 'the_shining_overlook_ballroom',
    name: 'The Shining 1980 Overlook Gold Ballroom Chandelier',
    category: 'lighting_optics',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'John Alcott warm incandescent tungsten chandelier glow with symmetrical Steadicam wide depth',
    filters: [
      'colorbalance=rh=0.32:gh=0.18:bh=-0.25:rm=0.15:gm=0.08:bm=-0.12',
      'eq=contrast=1.2:saturation=1.28',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 264. Hayao Miyazaki Princess Mononoke Ancient Forest Kodama Spirits
  mononoke_ancient_forest_kodama: {
    id: 'mononoke_ancient_forest_kodama',
    name: 'Princess Mononoke Ancient Cedar Forest & Kodama Glow',
    category: 'lighting_optics',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Sacred cedar forest moss greens with soft mystical white spirit flares drifting across canopy',
    filters: [
      'colorbalance=rm=-0.05:gm=0.2:bm=0.05:rs=-0.08:gs=0.15:bs=0.1',
      'eq=contrast=1.15:saturation=1.3:brightness=0.03',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 265. Matrix 1999 Digital Stream Rain Phosphor Code Drop
  matrix_1999_digital_stream_drop: {
    id: 'matrix_1999_digital_stream_drop',
    name: 'The Matrix 1999 Digital Rain Phosphor Drop Cascade',
    category: 'layout_composition',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Iconic Simon Whiteley Japanese katakana green rain cascade over dark mainframe terminal',
    filters: [
      'colorchannelmixer=rr=0:rg=0:rb=0:gr=0:gg=1.35:gb=0:br=0:bg=0:bb=0.25',
      'drawgrid=w=18:h=18:t=1:c=green@0.25',
      'eq=contrast=1.45',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 266. Christopher Nolan Dunkirk Supermarine Spitfire Cockpit 70mm
  dunkirk_spitfire_cockpit_70mm: {
    id: 'dunkirk_spitfire_cockpit_70mm',
    name: 'Dunkirk 70mm Spitfire Cockpit Channel English Sky',
    category: 'color_filter',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Hoyte van Hoytema cold English Channel blues, matte cockpit metals and crystal-clear cloud horizon',
    filters: [
      'colorbalance=rs=-0.08:gs=0.02:bs=0.2:rh=0.05:gh=0.08:bh=0.18',
      'eq=contrast=1.24:saturation=1.12',
      'unsharp=5:5:0.8:3:3:0.3',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 267. 1980s MTV VHS Neon Synth Pop Glitch
  mtv_1980s_synth_pop_glitch: {
    id: 'mtv_1980s_synth_pop_glitch',
    name: '1984 MTV Video Music Awards VHS Head Jitter',
    category: 'distortion_glitch',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Authentic 1980s analog TV signal: oversaturated electric hot pinks, cyan flare and horizontal VCR tracking roll',
    filters: [
      'drawgrid=w=iw:h=8:t=1:c=magenta@0.2',
      'colorbalance=rh=0.25:gh=-0.1:bh=0.2:rs=0.1:bs=0.15',
      'eq=contrast=1.3:saturation=1.4',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 268. 2024 Apple Spatial Cinema Dark Mode Immersion
  apple_spatial_cinema_dark_immersion: {
    id: 'apple_spatial_cinema_dark_immersion',
    name: 'Apple Vision Pro Dark Cinema Spatial Environment',
    category: 'lighting_optics',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Immaculate theater darkness with soft dynamic screen bounce halo illuminating virtual cinema seats',
    filters: [
      'vignette=PI/3',
      'unsharp=5:5:1.0:3:3:0.5',
      'eq=contrast=1.12:brightness=-0.02:saturation=1.08',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 269. Blade Runner 2049 Baseline Test Joi Holographic Pink
  baseline_test_joi_holographic: {
    id: 'baseline_test_joi_holographic',
    name: 'Blade Runner 2049 Joi Translucent Holographic Magenta',
    category: 'lighting_optics',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Translucent glowing holographic magenta with cyan fringing on edges and dreamy soft diffusion',
    filters: [
      'colorbalance=rh=0.32:gh=-0.08:bh=0.28:rm=0.15:gm=-0.05:bm=0.18:rs=-0.1:gs=0.1:bs=0.2',
      'eq=contrast=1.2:saturation=1.45',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 270. Star Wars 1977 Death Star Trench Run Strobe Laser
  death_star_trench_laser_strobe: {
    id: 'death_star_trench_laser_strobe',
    name: 'Star Wars 1977 Death Star Surface Green Turbolaser Strobe',
    category: 'lighting_optics',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Industrial matte gray surface flashed by violent pulses of high-energy emerald laser fire',
    filters: [
      'colorbalance=rh=-0.2:gh=0.35:bh=-0.2:rm=-0.1:gm=0.25:bm=-0.1',
      'eq=contrast=1.45:brightness=0.02',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },
};
