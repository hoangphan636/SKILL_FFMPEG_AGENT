import type { EffectDefinition } from './schema.js';

export const PHOENIX_30_EFFECTS: Record<string, EffectDefinition> = {
  // --- 1. Dune: Arrakis Spice Harvester Sandstorm Swallowed ---
  dune_sandstorm_swallowed_spice: {
    id: 'dune_sandstorm_swallowed_spice',
    name: 'Dune: Spice Harvester Sandstorm Swallowed',
    category: 'color_filter',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Engulfed in 800km/h Coriolis sandstorm: blinding ochre cinnamon particulate bloom and reduced visibility',
    filters: [
      'colorbalance=rs=0.22:gs=0.10:bs=-0.20:rm=0.18:gm=0.08:bm=-0.16:rh=0.25:gh=0.14:bh=-0.22',
      'eq=contrast=1.12:saturation=1.20:brightness=0.05',
      'noise=alls=18:allf=t+u',
      'boxblur=luma_radius=1:luma_power=1',
      'vignette=PI/3.6',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // --- 2. Cyberpunk: Afterlife Rogue Amendiares Private Booth ---
  cyberpunk_afterlife_rogue_booth: {
    id: 'cyberpunk_afterlife_rogue_booth',
    name: 'Cyberpunk: Afterlife Rogue Private Booth',
    category: 'lighting_optics',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Iconic mercenary club underworld: dim amber pendant lamps, electric turquoise smoke and heavy crushed blacks',
    filters: [
      'colorbalance=rs=0.15:gs=0.04:bs=-0.12:rm=-0.05:gm=0.08:bm=0.18:rh=0.20:gh=0.12:bh=-0.05',
      'eq=contrast=1.36:saturation=1.24:brightness=-0.03',
      'unsharp=3:3:1.2:3:3:0.0',
      'vignette=PI/3.1',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // --- 3. The Batman: Iceberg Lounge Neon Red Rain Walk ---
  the_batman_iceberg_lounge_neon_walk: {
    id: 'the_batman_iceberg_lounge_neon_walk',
    name: 'The Batman: Iceberg Lounge Blood Red Rain Alley',
    category: 'lighting_optics',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Greig Fraser soaked pavement reflections, searing neon red entryway and impenetrable Gotham alley shadows',
    filters: [
      'colorbalance=rs=0.28:gs=-0.12:bs=-0.16:rm=0.22:gm=-0.08:bm=-0.10:rh=0.35:gh=-0.05:bh=-0.08',
      'eq=contrast=1.44:saturation=1.30:brightness=-0.04',
      'unsharp=5:5:1.4:5:5:0.0',
      'vignette=PI/2.9',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // --- 4. Interstellar: Miller Planet Water Droplet Visor ---
  interstellar_water_droplet_visor: {
    id: 'interstellar_water_droplet_visor',
    name: 'Interstellar: Astronaut Visor Salt Spray Ocean',
    category: 'color_filter',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Anamorphic lens water spray dispersion, endless slate grey ocean horizons and pure IMAX naturalism',
    filters: [
      'colorbalance=rs=-0.14:gs=0.02:bs=0.22:rm=-0.10:gm=0.04:bm=0.16:rh=-0.04:gh=0.06:bh=0.14',
      'eq=contrast=1.20:saturation=0.88:brightness=0.01',
      'unsharp=3:3:1.0:3:3:0.0',
      'curves=all=0/0 0.5/0.52 1/0.98',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // --- 5. The Matrix: Nebuchadnezzar Core Cable Web ---
  matrix_nebuchadnezzar_cable_web: {
    id: 'matrix_nebuchadnezzar_cable_web',
    name: 'The Matrix: Nebuchadnezzar Core Cable Web',
    category: 'color_filter',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Dark industrial hovercraft interior: tangled ribbed cables, cold metallic phosphor blue and low tungsten halogen',
    filters: [
      'colorbalance=rs=-0.16:gs=0.06:bs=0.20:rm=-0.12:gm=0.08:bm=0.14:rh=0.08:gh=0.05:bh=-0.08',
      'eq=contrast=1.32:saturation=0.90:brightness=-0.03',
      'noise=alls=12:allf=t+u',
      'vignette=PI/3.3',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // --- 6. Blade Runner: Chinatown Noodle Stand Rain Neon ---
  bladerunner_chinatown_noodle_neon: {
    id: 'bladerunner_chinatown_noodle_neon',
    name: 'Blade Runner 1982: White Dragon Noodle Bar',
    category: 'lighting_optics',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Ridley Scott steam-choked Chinatown night, neon red and electric cyan Chinese lanterns, wet umbrella glints',
    filters: [
      'colorbalance=rs=0.18:gs=-0.06:bs=0.20:rm=0.12:gm=0.02:bm=0.16:rh=0.25:gh=-0.02:bh=0.15',
      'eq=contrast=1.35:saturation=1.32:brightness=-0.02',
      'curves=all=0/0 0.2/0.12 0.6/0.65 1/1',
      'vignette=PI/3.2',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // --- 7. Oppenheimer: Theoretical Physics Chalkboard Glow ---
  oppenheimer_chalkboard_quantum_equations: {
    id: 'oppenheimer_chalkboard_quantum_equations',
    name: 'Oppenheimer: Princeton Quantum Chalkboard Glow',
    category: 'color_filter',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Deep matte slate chalkboard green, brilliant white chalk dust luminescence and 65mm Kodak Portra film warmth',
    filters: [
      'colorbalance=rs=0.06:gs=0.12:bs=-0.08:rm=0.04:gm=0.08:bm=-0.04:rh=0.02:gh=0.04:bh=0.06',
      'eq=contrast=1.24:saturation=1.05:brightness=0.01',
      'unsharp=5:5:1.2:3:3:0.0',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // --- 8. Mad Max: The Citadel Aquifer Waterfall Rush ---
  mad_max_citadel_aquifer_waterfall: {
    id: 'mad_max_citadel_aquifer_waterfall',
    name: 'Mad Max: Immortan Joe Aquifer Flood Torrent',
    category: 'color_filter',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Blinding white frothing water cascade plunging down bleached terracotta sandstone cliffs in 120-degree heat',
    filters: [
      'colorbalance=rs=0.24:gs=0.12:bs=-0.16:rm=0.16:gm=0.06:bm=-0.10:rh=-0.05:gh=0.08:bh=0.20',
      'eq=contrast=1.38:saturation=1.35:brightness=0.02',
      'unsharp=3:3:1.3:3:3:0.0',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // --- 9. Princess Mononoke: Iron Town Furnace Forge Sparks ---
  mononoke_iron_town_furnace_forge: {
    id: 'mononoke_iron_town_furnace_forge',
    name: 'Princess Mononoke: Tataraba Iron Furnace Fire',
    category: 'lighting_optics',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Roaring charcoal blast furnace orange embers, molten iron glow, dark soot silhouettes and rhythmic labor steam',
    filters: [
      'colorbalance=rs=0.32:gs=0.14:bs=-0.25:rm=0.24:gm=0.08:bm=-0.20:rh=0.38:gh=0.18:bh=-0.15',
      'eq=contrast=1.42:saturation=1.40:brightness=0.01',
      'boxblur=luma_radius=1:luma_power=1',
      'vignette=PI/3.0',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // --- 10. Fight Club: Lou Tavern Basement Bare-Knuckle ---
  fight_club_lou_tavern_concrete_pit: {
    id: 'fight_club_lou_tavern_concrete_pit',
    name: 'Fight Club: Lou Tavern Bare-Knuckle Pit',
    category: 'color_filter',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Raw fluorescent flicker, damp blood-spattered concrete, desaturated human flesh and grimy sodium yellow highlights',
    filters: [
      'colorbalance=rs=0.08:gs=0.14:bs=-0.10:rm=0.05:gm=0.10:bm=-0.08:rh=-0.05:gh=0.08:bh=0.02',
      'eq=contrast=1.34:saturation=0.82:brightness=-0.03',
      'noise=alls=14:allf=t+u',
      'vignette=PI/3.1',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // --- 11. Cyberpunk 2077: Trauma Team AV Aerial Triage ---
  cyberpunk_trauma_team_av_triage: {
    id: 'cyberpunk_trauma_team_av_triage',
    name: 'Cyberpunk: Trauma Team Aerial AV Triage',
    category: 'lighting_optics',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Armored aerodyne interior: flashing emergency white/cyan defibrillator strobes and deep midnight blue exterior',
    filters: [
      'colorbalance=rs=-0.12:gs=0.16:bs=0.26:rm=-0.08:gm=0.12:bm=0.20:rh=0.10:gh=0.18:bh=0.30',
      'eq=contrast=1.38:saturation=1.26:brightness=0.01',
      'unsharp=5:5:1.4:5:5:0.0',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // --- 12. Zodiac: Lake Berryessa Picnic Sun Bleach ---
  zodiac_lake_berryessa_sun_bleach: {
    id: 'zodiac_lake_berryessa_sun_bleach',
    name: 'Zodiac: 1969 Lake Berryessa Bleached Noon',
    category: 'color_filter',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Fincher chilling midday sun: scorched golden oak grass, blinding silver water reflections and Kodachrome 64 pastels',
    filters: [
      'colorbalance=rs=0.16:gs=0.08:bs=-0.12:rm=0.12:gm=0.05:bm=-0.08:rh=0.15:gh=0.10:bh=-0.02',
      'eq=contrast=1.16:saturation=1.12:brightness=0.04',
      'curves=all=0/0.02 0.5/0.55 1/0.98',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // --- 13. Audio: Blade Runner 2049 Spinner Jet Takeoff ---
  audio_bladerunner_spinner_takeoff: {
    id: 'audio_bladerunner_spinner_takeoff',
    name: 'Audio: Blade Runner Spinner Aerodyne Jet Turbine',
    category: 'audio_voice',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Low-frequency pneumatic air-cushion whoosh, rising vertical takeoff turbine whine and stereo exhaust Doppler',
    filters: [],
    audioFilters: [
      'bass=g=13:f=60:w=0.6',
      'aphaser=in_gain=0.9:out_gain=0.8:delay=4.2:decay=0.6:speed=0.5',
      'treble=g=6:f=6400:w=0.7',
      'volume=1.25',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // --- 14. Audio: Dune Sandworm Thumper Rhythmic Pulse ---
  audio_dune_sandworm_thumper_pulse: {
    id: 'audio_dune_sandworm_thumper_pulse',
    name: 'Audio: Fremen Thumper Seismic Rhythmic Thump',
    category: 'audio_voice',
    difficulty: 'hard',
    engine: 'ffmpeg',
    description: 'Rhythmic hydraulic spring piston hammering sandbed with 35Hz sub-soil acoustic shockwaves',
    filters: [],
    audioFilters: [
      'bass=g=18:f=35:w=0.4',
      'compand=attacks=0.005:decays=0.08:points=-80/-80|-18/-3|0/0:gain=3',
      'aecho=0.8:0.7:110:0.35',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // --- 15. Audio: Tron Legacy Daft Punk Grid Master Synth ---
  audio_tron_grid_master_synth_lead: {
    id: 'audio_tron_grid_master_synth_lead',
    name: 'Audio: Tron Legacy Daft Punk Grid Lead Synth',
    category: 'audio_voice',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Punchy French electro lead synth: wide analog chorus, saturated mid harmonics and warm valve drive',
    filters: [],
    audioFilters: [
      'chorus=0.7:0.9:45:0.4:0.3:2',
      'treble=g=5:f=5200:w=0.8',
      'bass=g=6:f=120:w=0.7',
      'volume=1.15',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // --- 16. Audio: Fairchild 670 Vintage Tube Limiter Punch ---
  audio_fairchild_670_tube_punch: {
    id: 'audio_fairchild_670_tube_punch',
    name: 'Audio: Fairchild 670 Vintage Tube Compressor Magic',
    category: 'audio_voice',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Legendary 20-tube stereo mastering compressor glue: fast variable-mu action, musical thickness and subtle warmth',
    filters: [],
    audioFilters: [
      'compand=attacks=0.01:decays=0.3:points=-90/-90|-28/-16|-10/-6|0/-1:gain=2',
      'bass=g=3:f=90:w=0.8',
      'treble=g=3:f=10000:w=0.8',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // --- 17. Audio: Southside 808 Hi-Hat Triplet Rolls ---
  audio_southside_808_hihat_triplets: {
    id: 'audio_southside_808_hihat_triplets',
    name: 'Audio: Southside 808 Sharp Hi-Hat Sizzle & Rolls',
    category: 'audio_voice',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Crisp Atlanta trap hi-hat top end: high-pass filtered sizzle at 8kHz with ultra-transient presence',
    filters: [],
    audioFilters: [
      'highpass=f=2500',
      'treble=g=12:f=9500:w=0.6',
      'compand=attacks=0.002:decays=0.05:points=-70/-70|-15/-4|0/0:gain=1',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // --- 18. Audio: Submarine Sonar Active Ping & Thermal Layer ---
  audio_submarine_sonar_active_ping: {
    id: 'audio_submarine_sonar_active_ping',
    name: 'Audio: Active Sonar 1.5kHz Ping & Deep Sea Reverb',
    category: 'audio_voice',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Piercing naval acoustic transducer ping at 1500Hz with multi-second oceanic thermocline reverberation',
    filters: [],
    audioFilters: [
      'equalizer=f=1500:width_type=h:width=120:g=14',
      'aecho=0.8:0.9:450:0.5',
      'bass=g=8:f=50:w=0.5',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // --- 19. Wes Anderson: The French Dispatch Printing Press Monochrome ---
  french_dispatch_printing_press_bw: {
    id: 'french_dispatch_printing_press_bw',
    name: 'The French Dispatch: Ennui Printing Press 35mm B&W',
    category: 'color_filter',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Rich velvety monochrome 1.37:1 Academy ratio, ink-stained print shop textures, fine grain and stark whites',
    filters: [
      'hue=s=0',
      'eq=contrast=1.35:brightness=-0.01',
      'noise=alls=12:allf=t+u',
      'unsharp=3:3:1.2:3:3:0.0',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // --- 20. Batman 1989: Flugelheim Museum Gas Attack Purple ---
  batman_flugelheim_museum_gas_purple: {
    id: 'batman_flugelheim_museum_gas_purple',
    name: 'Batman 1989: Joker Flugelheim Gas Smiter Purple',
    category: 'lighting_optics',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Jack Nicholson Joker aesthetic: cartoonish toxic magenta smoke, electric emerald acid and gothic gallery arches',
    filters: [
      'colorbalance=rs=0.22:gs=-0.14:bs=0.28:rm=0.18:gm=-0.08:bm=0.22:rh=0.26:gh=-0.04:bh=0.25',
      'eq=contrast=1.32:saturation=1.40:brightness=0.01',
      'boxblur=luma_radius=1:luma_power=1',
      'vignette=PI/3.1',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // --- 21. Tenet: Opera Siege Tear Gas Blue Phosphor ---
  tenet_opera_siege_tear_gas_blue: {
    id: 'tenet_opera_siege_tear_gas_blue',
    name: 'Tenet: Kiev Opera Siege Phosphor Blue Tear Gas',
    category: 'color_filter',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Velvet opera hall auditorium seats smothered in sleep gas: ice-cold sapphire highlights and pitch-black shadows',
    filters: [
      'colorbalance=rs=-0.20:gs=0.02:bs=0.28:rm=-0.14:gm=0.05:bm=0.22:rh=-0.05:gh=0.08:bh=0.18',
      'eq=contrast=1.36:saturation=0.95:brightness=-0.03',
      'unsharp=5:5:1.2:5:5:0.0',
      'vignette=PI/3.2',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // --- 22. Quentin Tarantino: Django Candyland Gold Leaf Parlor ---
  django_candyland_gold_leaf_parlor: {
    id: 'django_candyland_gold_leaf_parlor',
    name: 'Django Unchained: Candyland Gold Leaf Parlor',
    category: 'color_filter',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Southern decadent plantation interior: deep crimson velvet wallpaper, antique chandelier gold and heavy pipe tobacco smoke',
    filters: [
      'colorbalance=rs=0.24:gs=0.08:bs=-0.16:rm=0.18:gm=0.05:bm=-0.12:rh=0.28:gh=0.14:bh=-0.10',
      'eq=contrast=1.28:saturation=1.25:brightness=0.0',
      'noise=alls=10:allf=t+u',
      'vignette=PI/3.4',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // --- 23. Sicario: Alejandro Border Tunnel Night Strobe ---
  sicario_border_tunnel_night_strobe: {
    id: 'sicario_border_tunnel_night_strobe',
    name: 'Sicario: Smuggling Tunnel Tactical Strobe & Dust',
    category: 'lighting_optics',
    difficulty: 'hard',
    engine: 'ffmpeg',
    description: 'Roger Deakins claustrophobic cartel tunnel: tactical weapon light beam slashing airborne fine dust motes and mud walls',
    filters: [
      'colorbalance=rs=0.05:gs=0.08:bs=-0.08:rm=-0.05:gm=0.02:bm=0.08:rh=0.20:gh=0.20:bh=0.15',
      'eq=contrast=1.45:saturation=0.65:brightness=-0.05',
      'curves=all=0/0 0.2/0.05 0.5/0.45 0.85/0.95 1/1',
      'vignette=PI/2.7',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // --- 24. 2001: Bowman Star Child Golden Embryo Glow ---
  kubrick_star_child_embryo_glow: {
    id: 'kubrick_star_child_embryo_glow',
    name: '2001: The Star Child Cosmic Embryo Glow',
    category: 'lighting_optics',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Translucent cosmic fetus floating in orbit beside Earth: radiant golden aura, stellar reflections and celestial bloom',
    filters: [
      'colorbalance=rs=0.22:gs=0.16:bs=0.04:rm=0.16:gm=0.12:bm=0.02:rh=0.28:gh=0.22:bh=0.08',
      'eq=contrast=1.22:saturation=1.30:brightness=0.04',
      'boxblur=luma_radius=1:luma_power=1',
      'curves=all=0/0 0.5/0.58 1/1',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // --- 25. Apple Spatial: Vision Pro Micro-Lens Flare Rings ---
  apple_spatial_micro_lens_flare_rings: {
    id: 'apple_spatial_micro_lens_flare_rings',
    name: 'Apple Vision Pro: Spatial Micro-Lens Concentric Bloom',
    category: 'lighting_optics',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Precision catadioptric pancake lens optics: subtle concentric halo bloom on ultra-bright floating UI elements',
    filters: [
      'colorbalance=rs=0.04:gs=0.06:bs=0.10:rm=0.02:gm=0.04:bm=0.08:rh=0.08:gh=0.10:bh=0.16',
      'eq=contrast=1.18:saturation=1.15:brightness=0.02',
      'unsharp=3:3:1.1:3:3:0.0',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // --- 26. Cyberpunk: Netwatch ICE Countermeasure Red Wall ---
  cyberpunk_netwatch_ice_red_wall: {
    id: 'cyberpunk_netwatch_ice_red_wall',
    name: 'Cyberpunk: Netwatch Military ICE Intrusion Wall',
    category: 'distortion_glitch',
    difficulty: 'hard',
    engine: 'ffmpeg',
    description: 'Fatal firewall neural shock: blinding crimson cryptographic grid vectors, interlaced scanline displacement and data corruption',
    filters: [
      'colorbalance=rs=0.38:gs=-0.22:bs=-0.20:rm=0.30:gm=-0.16:bm=-0.15:rh=0.45:gh=-0.10:bh=-0.10',
      'eq=contrast=1.50:saturation=1.45:brightness=0.01',
      'unsharp=5:5:1.6:5:5:0.0',
      'vignette=PI/3.1',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // --- 27. Lord of the Rings: Mordor Mount Doom Magma Veins ---
  lotr_mordor_mount_doom_magma_veins: {
    id: 'lotr_mordor_mount_doom_magma_veins',
    name: 'LOTR: Mount Doom Cracks of Doom Magma',
    category: 'color_filter',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Crushed volcanic basalt blackness cleaved open by bubbling orange-crimson magma rivers and suffocating ash clouds',
    filters: [
      'colorbalance=rs=0.32:gs=0.08:bs=-0.28:rm=0.25:gm=0.02:bm=-0.22:rh=0.35:gh=0.12:bh=-0.15',
      'eq=contrast=1.46:saturation=1.38:brightness=-0.04',
      'noise=alls=14:allf=t+u',
      'vignette=PI/2.8',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // --- 28. Miami Vice: Go-Fast Speedboat Ocean Night Spray ---
  miami_vice_gofast_boat_night_ocean: {
    id: 'miami_vice_gofast_boat_night_ocean',
    name: 'Miami Vice: 90-MPH Go-Fast Boat Atlantic Night',
    category: 'color_filter',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Twin-turbine catamaran slamming midnight Atlantic waves: deep indigo ocean, twin red instrument lights and wind blur',
    filters: [
      'colorbalance=rs=-0.15:gs=-0.02:bs=0.26:rm=-0.10:gm=0.02:bm=0.20:rh=0.15:gh=-0.04:bh=0.08',
      'eq=contrast=1.32:saturation=1.12:brightness=-0.03',
      'unsharp=5:5:1.3:5:5:0.0',
      'vignette=PI/3.2',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // --- 29. Akira: Kaneda Bike Laser Cannon Recoil Flash ---
  akira_laser_cannon_recoil_flash: {
    id: 'akira_laser_cannon_recoil_flash',
    name: 'Akira: Experimental Laser Cannon Recoil Discharge',
    category: 'lighting_optics',
    difficulty: 'hard',
    engine: 'ffmpeg',
    description: 'Pure blinding magnesium blue-white beam searing Neo-Tokyo asphalt, vaporizing concrete barriers in anime glory',
    filters: [
      'colorbalance=rs=-0.15:gs=0.12:bs=0.35:rm=-0.10:gm=0.08:bm=0.28:rh=-0.02:gh=0.16:bh=0.36',
      'eq=contrast=1.45:saturation=1.35:brightness=0.04',
      'unsharp=5:5:1.6:5:5:0.0',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // --- 30. Hayao Miyazaki: Spirited Away Bathhouse Lantern River ---
  spirited_away_bathhouse_lantern_river: {
    id: 'spirited_away_bathhouse_lantern_river',
    name: 'Spirited Away: Aburaya Bathhouse Floating Lanterns',
    category: 'color_filter',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Nightfall over the spirit world: vermilion lacquered bridge railings, glowing red river paper lanterns and golden banquet warmth',
    filters: [
      'colorbalance=rs=0.20:gs=0.06:bs=-0.10:rm=0.14:gm=0.04:bm=-0.06:rh=0.22:gh=0.10:bh=0.02',
      'eq=contrast=1.20:saturation=1.35:brightness=0.02',
      'curves=all=0/0 0.5/0.55 1/1',
      'vignette=PI/3.6',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },
};
