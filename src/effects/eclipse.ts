import type { EffectDefinition } from './schema.js';

export const ECLIPSE_30_EFFECTS: Record<string, EffectDefinition> = {
  // --- 1. Dune Part Two: Emperor Corrino Golden Throne Room ---
  dune_emperor_corrino_golden_throne: {
    id: 'dune_emperor_corrino_golden_throne',
    name: 'Dune: Emperor Corrino Golden Throne',
    category: 'color_filter',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Kaitain imperial gold opulence, deep shadow contrast, and warm atmospheric haze inspired by Dune: Part Two',
    filters: [
      'colorbalance=rs=0.18:gs=0.12:bs=-0.16:rm=0.12:gm=0.08:bm=-0.14:rh=0.22:gh=0.15:bh=-0.20',
      'eq=contrast=1.18:saturation=1.12:brightness=0.02',
      'curves=all=0/0 0.2/0.14 0.6/0.64 1/0.95',
      'vignette=PI/3.8',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // --- 2. Cyberpunk: Arasaka Tower Orbital Helipad ---
  arasaka_orbital_helipad_night: {
    id: 'arasaka_orbital_helipad_night',
    name: 'Cyberpunk: Arasaka Orbital Helipad Night',
    category: 'lighting_optics',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Top floor Arasaka corporate cold cyan glass, neon red warning lights and high-altitude smog',
    filters: [
      'colorbalance=rs=-0.12:gs=0.08:bs=0.22:rm=-0.08:gm=0.05:bm=0.18:rh=0.18:gh=-0.08:bh=-0.05',
      'eq=contrast=1.30:saturation=1.22:brightness=-0.02',
      'unsharp=5:5:1.2:5:5:0.0',
      'vignette=PI/3.2',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // --- 3. The Batman: Gotham Police Blimp Searchlight ---
  gotham_police_blimp_searchlight: {
    id: 'gotham_police_blimp_searchlight',
    name: 'The Batman: Gotham Blimp Searchlight',
    category: 'lighting_optics',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Harsh sodium-vapor searchlight cone cutting through rainy Gotham rooftop darkness with lens bloom',
    filters: [
      'colorbalance=rs=0.15:gs=0.08:bs=-0.15:rm=-0.05:gm=-0.05:bm=0.05:rh=0.25:gh=0.20:bh=0.05',
      'eq=contrast=1.35:saturation=0.85:brightness=-0.04',
      'curves=all=0/0 0.15/0.05 0.5/0.45 0.85/0.95 1/1',
      'boxblur=luma_radius=1:luma_power=1',
      'vignette=PI/2.8',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // --- 4. Interstellar: Miller Planet Gigantic Wave Crest ---
  interstellar_wave_crest_monolith: {
    id: 'interstellar_wave_crest_monolith',
    name: 'Interstellar: Tidal Wave Monolith Crest',
    category: 'color_filter',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Imposing 4,000-foot tidal wave wall, deep ocean indigo hue, cold foam spray, and heavy IMAX 70mm grain',
    filters: [
      'colorbalance=rs=-0.18:gs=0.02:bs=0.26:rm=-0.14:gm=0.04:bm=0.20:rh=-0.08:gh=0.08:bh=0.18',
      'eq=contrast=1.24:saturation=0.92:brightness=-0.02',
      'noise=alls=12:allf=t+u',
      'vignette=PI/3.4',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // --- 5. Matrix Revolutions: Club Hel Coat Check Shootout ---
  matrix_club_hel_subterranean: {
    id: 'matrix_club_hel_subterranean',
    name: 'The Matrix: Club Hel Underground Shootout',
    category: 'color_filter',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Latex bondage club neon amber/olive green underworld, strobe flashes, and extreme contrast',
    filters: [
      'colorbalance=rs=0.10:gs=0.18:bs=-0.16:rm=0.08:gm=0.15:bm=-0.12:rh=-0.05:gh=0.12:bh=-0.08',
      'eq=contrast=1.38:saturation=1.15:brightness=-0.03',
      'unsharp=3:3:1.4:3:3:0.0',
      'vignette=PI/3.5',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // --- 6. Blade Runner 2049: K Memory Maker Glass Laboratory ---
  bladerunner_k_memory_lab_sterile: {
    id: 'bladerunner_k_memory_lab_sterile',
    name: 'Blade Runner 2049: Ana Stelline Memory Dome',
    category: 'color_filter',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Sterile high-key white isolation chamber, soft luminous bloom, and pastel dream memory reflections',
    filters: [
      'colorbalance=rs=0.05:gs=0.08:bs=0.12:rm=0.02:gm=0.05:bm=0.08:rh=0.08:gh=0.10:bh=0.15',
      'eq=contrast=1.06:saturation=0.88:brightness=0.08',
      'curves=all=0/0.06 0.5/0.58 1/0.98',
      'boxblur=luma_radius=1:luma_power=1',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // --- 7. Oppenheimer: Trinity Shockwave Glass Shatter ---
  oppenheimer_shockwave_glass_shatter: {
    id: 'oppenheimer_shockwave_glass_shatter',
    name: 'Oppenheimer: Trinity Bunker Shockwave',
    category: 'distortion_glitch',
    difficulty: 'hard',
    engine: 'ffmpeg',
    description: 'Delayed blinding orange-yellow fireball flash followed by concrete dust shudder and extreme luma bloom',
    filters: [
      'colorbalance=rs=0.28:gs=0.15:bs=-0.22:rm=0.20:gm=0.10:bm=-0.18:rh=0.35:gh=0.22:bh=-0.15',
      'eq=contrast=1.42:saturation=1.28:brightness=0.04',
      'noise=alls=16:allf=t+u',
      'unsharp=5:5:1.5:5:5:0.0',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // --- 8. Mad Max Fury Road: Night Swamp Stilt Walkers ---
  mad_max_swamp_stilt_walkers_blue: {
    id: 'mad_max_swamp_stilt_walkers_blue',
    name: 'Mad Max: Night Swamp Stilt Walkers',
    category: 'color_filter',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Monochromatic eerie deep cobalt night swamp grade, crows on stilts, and crushed black water reflections',
    filters: [
      'colorbalance=rs=-0.25:gs=-0.08:bs=0.35:rm=-0.20:gm=-0.04:bm=0.28:rh=-0.15:gh=0.02:bh=0.22',
      'eq=contrast=1.32:saturation=0.75:brightness=-0.05',
      'curves=all=0/0 0.2/0.08 0.6/0.55 1/0.92',
      'vignette=PI/3.0',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // --- 9. Princess Mononoke: Night-Walker Forest Transformation ---
  mononoke_nightwalker_celestial_glow: {
    id: 'mononoke_nightwalker_celestial_glow',
    name: 'Princess Mononoke: Night-Walker Celestial Glow',
    category: 'lighting_optics',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Ethereal translucent cyan-turquoise spirit towering over nocturnal forest canopy with celestial bloom',
    filters: [
      'colorbalance=rs=-0.15:gs=0.18:bs=0.24:rm=-0.10:gm=0.14:bm=0.20:rh=-0.02:gh=0.15:bh=0.22',
      'eq=contrast=1.16:saturation=1.25:brightness=0.03',
      'boxblur=luma_radius=1:luma_power=1',
      'curves=blue=0/0 0.5/0.6 1/1',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // --- 10. Fight Club: Tyler Durden Basement Soap Laboratory ---
  fight_club_soap_basement_dirty_green: {
    id: 'fight_club_soap_basement_dirty_green',
    name: 'Fight Club: Paper St. Basement Laboratory',
    category: 'color_filter',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Fincher dirty olive green basement tones, grimy tallow soap steam, and harsh exposed single-bulb lighting',
    filters: [
      'colorbalance=rs=0.04:gs=0.20:bs=-0.12:rm=0.02:gm=0.16:bm=-0.10:rh=0.06:gh=0.18:bh=-0.08',
      'eq=contrast=1.28:saturation=0.92:brightness=-0.02',
      'noise=alls=10:allf=t+u',
      'vignette=PI/3.2',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // --- 11. 1980s Arcade Tron: Master Control Program Core ---
  tron_mcp_cylindrical_red_core: {
    id: 'tron_mcp_cylindrical_red_core',
    name: 'Tron 1982: Master Control Program Core',
    category: 'distortion_glitch',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Glowing crimson red rotating polygon face, electronic computer scanlines, and intense vector bloom',
    filters: [
      'colorbalance=rs=0.32:gs=-0.20:bs=-0.22:rm=0.25:gm=-0.15:bm=-0.18:rh=0.38:gh=-0.10:bh=-0.12',
      'eq=contrast=1.45:saturation=1.40:brightness=0.02',
      'unsharp=5:5:1.6:5:5:0.0',
      'vignette=PI/3.0',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // --- 12. Fincher: The Social Network Billiards & Dorm Green ---
  social_network_kirkland_dorm_amber: {
    id: 'social_network_kirkland_dorm_amber',
    name: 'The Social Network: Kirkland House Coding Session',
    category: 'color_filter',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Warm mahogany wood desk amber, rainy Harvard window cool daylight spill, and razor-sharp digital crispness',
    filters: [
      'colorbalance=rs=0.14:gs=0.08:bs=-0.10:rm=0.10:gm=0.04:bm=-0.06:rh=-0.04:gh=0.04:bh=0.12',
      'eq=contrast=1.22:saturation=1.08:brightness=0.0',
      'unsharp=5:5:1.0:3:3:0.0',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // --- 13. Audio: Lightsaber Ignition & Plasma Hum ---
  audio_lightsaber_ignition_plasma_hum: {
    id: 'audio_lightsaber_ignition_plasma_hum',
    name: 'Audio: Lightsaber Ignition & 50Hz Plasma Hum',
    category: 'audio_voice',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Iconic cinematic lightsaber plasma arc snap followed by deep 50Hz magnetic hum and slight flange resonance',
    filters: [],
    audioFilters: [
      'bass=g=11:f=55:w=0.6',
      'flanger=delay=4:depth=3:regen=45:width=80:speed=0.4',
      'treble=g=5:f=4800',
      'volume=1.2',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // --- 14. Audio: Dune Voice of Muaddib Bene Gesserit Sub-Octave ---
  audio_dune_voice_muaddib_sub_octave: {
    id: 'audio_dune_voice_muaddib_sub_octave',
    name: 'Audio: Bene Gesserit Voice Sub-Octave Command',
    category: 'audio_voice',
    difficulty: 'hard',
    engine: 'ffmpeg',
    description: 'Terrifying multi-layered vocal command with sub-bass frequency slam, pitch doubling and harsh room resonance',
    filters: [],
    audioFilters: [
      'bass=g=16:f=42:w=0.5',
      'aecho=0.8:0.7:28:0.4',
      'chorus=0.7:0.9:35:0.5:0.25:2',
      'compand=attacks=0.01:decays=0.1:points=-80/-80|-20/-6|0/0',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // --- 15. Audio: Interstellar Gargantua Event Horizon Singularity ---
  audio_interstellar_event_horizon_roar: {
    id: 'audio_interstellar_event_horizon_roar',
    name: 'Audio: Gargantua Event Horizon Singularity Roar',
    category: 'audio_voice',
    difficulty: 'hard',
    engine: 'ffmpeg',
    description: 'Cosmic gravitational wave shear, massive 25Hz infra-bass pressure and swirling Doppler stereo panning',
    filters: [],
    audioFilters: [
      'bass=g=18:f=32:w=0.4',
      'aphaser=in_gain=0.9:out_gain=0.8:delay=3.5:decay=0.5:speed=0.25',
      'aecho=0.8:0.88:120:0.45',
      'stereowiden=crossfeed=0.4:feedback=0.5',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // --- 16. Audio: Cyberpunk Sandevistan Cyberware Whine ---
  audio_sandevistan_acceleration_whine: {
    id: 'audio_sandevistan_acceleration_whine',
    name: 'Audio: Sandevistan Neural Acceleration Whine',
    category: 'audio_voice',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'High-frequency military cyberware spinal recharge whine, sudden acoustic time-dilation pitch drop',
    filters: [],
    audioFilters: [
      'highpass=f=200',
      'treble=g=10:f=7500:w=0.7',
      'flanger=delay=2:depth=5:regen=60:width=95:speed=1.2',
      'aecho=0.8:0.6:45:0.5',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // --- 17. Audio: Neve 1073 British Vintage Preamp Warmth ---
  audio_neve_1073_warm_saturation: {
    id: 'audio_neve_1073_warm_saturation',
    name: 'Audio: Rupert Neve 1073 Vintage Harmonic Warmth',
    category: 'audio_voice',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Analog transformer harmonic saturation, silky 12kHz high-shelf sheen, and punchy 100Hz mid-bass foundation',
    filters: [],
    audioFilters: [
      'bass=g=4:f=100:w=0.7',
      'treble=g=4:f=12000:w=0.8',
      'compand=attacks=0.02:decays=0.15:points=-90/-90|-30/-22|-12/-8|0/-2:gain=2',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // --- 18. Audio: Metro Boomin Dark 808 Slide Sub-Distortion ---
  audio_metro_dark_808_slide_distortion: {
    id: 'audio_metro_dark_808_slide_distortion',
    name: 'Audio: Metro Boomin Hard-Clipping 808 Sub',
    category: 'audio_voice',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Atlanta trap club wall-shaker: boosted 45Hz sub-bass with gentle soft-clipper saturation on the upper harmonics',
    filters: [],
    audioFilters: [
      'bass=g=15:f=48:w=0.5',
      'acrossover=split=120[sub][top];[sub]volume=1.6[subout];[top]volume=0.9[topout];[subout][topout]amix=inputs=2',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // --- 19. Wes Anderson: Asteroid City Turquoise Crater Basin ---
  asteroid_city_turquoise_crater: {
    id: 'asteroid_city_turquoise_crater',
    name: 'Asteroid City: 1955 Turquoise Crater Desert',
    category: 'color_filter',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Vivid turquoise desert sky, saturated cadmium orange sand dunes, and ultra-high key pastel contrast',
    filters: [
      'colorbalance=rs=0.18:gs=0.08:bs=-0.14:rm=0.12:gm=0.10:bm=-0.08:rh=-0.08:gh=0.14:bh=0.22',
      'eq=contrast=1.16:saturation=1.45:brightness=0.04',
      'curves=all=0/0 0.5/0.56 1/0.98',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // --- 20. Batman Returns: Penguin Subterranean Arctic Lair ---
  batman_penguin_arctic_subterranean: {
    id: 'batman_penguin_arctic_subterranean',
    name: 'Batman Returns: Penguin Arctic Sewer Lair',
    category: 'color_filter',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Tim Burton gothic icy teal pools, decaying brick arches, stark silhouettes, and cold fog haze',
    filters: [
      'colorbalance=rs=-0.18:gs=0.08:bs=0.25:rm=-0.12:gm=0.04:bm=0.18:rh=-0.05:gh=0.08:bh=0.15',
      'eq=contrast=1.34:saturation=0.82:brightness=-0.04',
      'unsharp=3:3:1.2:3:3:0.0',
      'vignette=PI/3.1',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // --- 21. Tenet: Oslo Freeport Fire Suppression Cyan Haze ---
  tenet_oslo_freeport_halon_gas: {
    id: 'tenet_oslo_freeport_halon_gas',
    name: 'Tenet: Oslo Freeport Halon Gas Breach',
    category: 'lighting_optics',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Sterile high-security art vault cyan gas fog, emergency halon exhaust, and clinical 65mm IMAX cool tones',
    filters: [
      'colorbalance=rs=-0.15:gs=0.14:bs=0.22:rm=-0.10:gm=0.10:bm=0.16:rh=-0.06:gh=0.08:bh=0.14',
      'eq=contrast=1.20:saturation=0.88:brightness=0.01',
      'curves=all=0/0.03 0.5/0.52 1/0.96',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // --- 22. Quentin Tarantino: Pulp Fiction Jack Rabbit Slims ---
  pulp_fiction_jack_rabbit_slims: {
    id: 'pulp_fiction_jack_rabbit_slims',
    name: 'Pulp Fiction: Jack Rabbit Slims 50s Diner',
    category: 'color_filter',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: '1950s retro diner neon turquoise booths, cherry red Corvette seating, and warm nostalgic tungsten spill',
    filters: [
      'colorbalance=rs=0.16:gs=0.04:bs=-0.08:rm=0.10:gm=-0.02:bm=0.08:rh=-0.05:gh=0.12:bh=0.18',
      'eq=contrast=1.18:saturation=1.32:brightness=0.01',
      'noise=alls=10:allf=t+u',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // --- 23. Zero Dark Thirty: Abbottabad Stealth Blackout Raid ---
  zero_dark_thirty_stealth_night_raid: {
    id: 'zero_dark_thirty_stealth_night_raid',
    name: 'Zero Dark Thirty: Abbottabad Stealth Raid',
    category: 'color_filter',
    difficulty: 'hard',
    engine: 'ffmpeg',
    description: 'Pitch-black military compound infiltration, ambient moonlit deep slate blue, and ultra-high dynamic range',
    filters: [
      'colorbalance=rs=-0.22:gs=-0.05:bs=0.25:rm=-0.16:gm=-0.02:bm=0.20:rh=-0.10:gh=0.04:bh=0.15',
      'eq=contrast=1.36:saturation=0.68:brightness=-0.06',
      'curves=all=0/0 0.3/0.14 0.7/0.65 1/0.95',
      'vignette=PI/2.9',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // --- 24. 2001 A Space Odyssey: Discovery One Centrifuge Pod ---
  kubrick_centrifuge_white_minimalism: {
    id: 'kubrick_centrifuge_white_minimalism',
    name: '2001: Discovery One White Centrifuge Ring',
    category: 'color_filter',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Super-panavision 70mm clinical white curved walls, immaculate geometry, zero grain, and razor contrast',
    filters: [
      'colorbalance=rs=0.02:gs=0.02:bs=0.06:rm=0.0:gm=0.02:bm=0.04:rh=0.04:gh=0.04:bh=0.08',
      'eq=contrast=1.26:saturation=0.92:brightness=0.03',
      'unsharp=5:5:1.2:5:5:0.0',
      'curves=all=0/0 0.5/0.52 1/1',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // --- 25. Apple Vision Pro: Spatial Micro-OLED Pure True Black ---
  apple_spatial_micro_oled_true_black: {
    id: 'apple_spatial_micro_oled_true_black',
    name: 'Apple Vision Pro: Micro-OLED True Black Immersion',
    category: 'quality_enhancement',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Perfect zero-nit OLED black levels, ultra-vibrant HDR wide color gamut (P3/Rec.2020), and zero light bleed',
    filters: [
      'curves=all=0/0 0.08/0 0.25/0.22 0.75/0.78 1/1',
      'eq=contrast=1.28:saturation=1.24:brightness=-0.01',
      'unsharp=3:3:0.9:3:3:0.0',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // --- 26. Cyberpunk: Dogtown Barghest Combat Drone HUD ---
  cyberpunk_barghest_drone_combat_hud: {
    id: 'cyberpunk_barghest_drone_combat_hud',
    name: 'Cyberpunk: Barghest Combat Drone Targeting HUD',
    category: 'distortion_glitch',
    difficulty: 'hard',
    engine: 'ffmpeg',
    description: 'Kurt Hansen paramilitary green night optics, tactical crosshair reticle artifacts, and signal telemetry flicker',
    filters: [
      'colorbalance=rs=-0.18:gs=0.28:bs=-0.12:rm=-0.14:gm=0.22:bm=-0.10:rh=0.05:gh=0.30:bh=-0.05',
      'eq=contrast=1.35:saturation=1.20:brightness=0.02',
      'unsharp=5:5:1.5:5:5:0.0',
      'vignette=PI/3.3',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // --- 27. Lord of the Rings: Lothlorien Elven Canopy Silver ---
  lotr_lothlorien_elven_silver_canopy: {
    id: 'lotr_lothlorien_elven_silver_canopy',
    name: 'LOTR: Lothlórien Golden Wood & Starlight Silver',
    category: 'lighting_optics',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Peter Jackson soft ethereal silver starlight glow, golden Mallorn foliage, and delicate diffusion bloom',
    filters: [
      'colorbalance=rs=0.12:gs=0.10:bs=0.16:rm=0.08:gm=0.08:bm=0.14:rh=0.12:gh=0.14:bh=0.22',
      'eq=contrast=1.08:saturation=1.12:brightness=0.05',
      'boxblur=luma_radius=1:luma_power=1',
      'curves=all=0/0.04 0.5/0.56 1/0.98',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // --- 28. Miami Vice 2006: High-Definition Night Sky Viper ---
  miami_vice_2006_hd_night_ocean: {
    id: 'miami_vice_2006_hd_night_ocean',
    name: 'Miami Vice 2006: Michael Mann Viper HD Night',
    category: 'color_filter',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Michael Mann pioneer Sony HD digital cinema aesthetic, sodium streetlight reflections, and raw digital grain',
    filters: [
      'colorbalance=rs=0.12:gs=-0.04:bs=0.18:rm=0.08:gm=-0.02:bm=0.14:rh=0.15:gh=0.08:bh=0.05',
      'eq=contrast=1.30:saturation=1.10:brightness=-0.03',
      'noise=alls=14:allf=t+u',
      'unsharp=5:5:1.3:5:5:0.0',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // --- 29. Akira: Neo-Tokyo Olympic Stadium Cryo Chamber ---
  akira_cryo_capsule_subzero_blue: {
    id: 'akira_cryo_capsule_subzero_blue',
    name: 'Akira: Neo-Tokyo Cryogenic Capsule Deep Freeze',
    category: 'color_filter',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Sub-zero subterranean nitrogen fog, clinical cold ice blue hues, and extreme cellular animation outlines',
    filters: [
      'colorbalance=rs=-0.22:gs=0.08:bs=0.30:rm=-0.16:gm=0.05:bm=0.24:rh=-0.08:gh=0.10:bh=0.22',
      'eq=contrast=1.28:saturation=1.18:brightness=-0.01',
      'unsharp=5:5:1.5:5:5:0.0',
      'vignette=PI/3.2',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // --- 30. Hayao Miyazaki: Laputa Castle in the Sky Meadow ---
  laputa_floating_meadow_sunlit_breeze: {
    id: 'laputa_floating_meadow_sunlit_breeze',
    name: 'Laputa: Floating Island Sunlit Meadow',
    category: 'color_filter',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'High-altitude crystalline sky blue, vibrant green moss, warm sunshine, and soft hand-painted watercolor edges',
    filters: [
      'colorbalance=rs=0.08:gs=0.14:bs=0.18:rm=0.06:gm=0.12:bm=0.12:rh=0.04:gh=0.12:bh=0.22',
      'eq=contrast=1.12:saturation=1.36:brightness=0.03',
      'curves=all=0/0 0.5/0.54 1/1',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },
};
