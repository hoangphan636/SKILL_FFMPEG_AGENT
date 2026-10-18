import type { EffectDefinition } from './schema.js';

export const VALKYRIE_30_EFFECTS: Record<string, EffectDefinition> = {
  // 331. Dune 2 Paul Atreides Nuclear Silo Radiation Glow
  paul_nuclear_silo_radiation: {
    id: 'paul_nuclear_silo_radiation',
    name: 'Dune Part Two Family Atomics Nuclear Silo Blue Glow',
    category: 'lighting_optics',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Cherenkov radiation blue luminescence glowing from subterranean stone atomic silos',
    filters: [
      'colorbalance=rh=-0.1:gh=0.15:bh=0.4:rm=-0.05:gm=0.1:bm=0.25:rs=-0.1:gs=0.08:bs=0.22',
      'eq=contrast=1.35:saturation=1.28',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 332. The Batman 2022 Batmobile Jet Afterburner Ignite
  batmobile_jet_afterburner_ignite: {
    id: 'batmobile_jet_afterburner_ignite',
    name: 'The Batman 2022 Batmobile Jet Afterburner Blue Flame',
    category: 'lighting_optics',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Greig Fraser crushed charcoal black night pierced by violent cyan-blue turbine flames and tire smoke',
    filters: [
      'colorbalance=rh=-0.05:gh=0.1:bh=0.35:rs=-0.12:gs=-0.08:bs=0.15',
      'eq=contrast=1.5:brightness=-0.08:saturation=1.2',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 333. Cyberpunk 2077 Lizzie's Bar Neon Violet & Cyan Seduction
  lizzies_bar_neon_seduction: {
    id: 'lizzies_bar_neon_seduction',
    name: 'Cyberpunk Lizzie Bar Neon Hot Pink & Electric Violet',
    category: 'color_filter',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Sensual Mox gang haven: saturated hot magenta neon cutting through smoke-filled violet shadows',
    filters: [
      'colorbalance=rh=0.4:gh=-0.1:bh=0.35:rs=0.1:gs=-0.08:bs=0.22:rm=0.2:gm=-0.05:bm=0.25',
      'eq=contrast=1.3:saturation=1.45',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 334. Blade Runner 1982 Tyrell Pyramid Sunrise Golden Smog
  tyrell_pyramid_sunrise_smog: {
    id: 'tyrell_pyramid_sunrise_smog',
    name: 'Blade Runner 1982 Tyrell Corp Sunrise Golden Industrial Smog',
    category: 'lighting_optics',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Jordan Cronenweth majestic golden dawn rays cutting through heavy futuristic industrial haze',
    filters: [
      'colorbalance=rh=0.42:gh=0.22:bh=-0.3:rm=0.2:gm=0.1:bm=-0.18:rs=0.08:gs=0.05:bs=-0.1',
      'eq=contrast=1.25:brightness=0.03:saturation=1.32',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 335. Christopher Nolan Inception Folding Paris Cityscape Mirror
  inception_folding_paris_mirror: {
    id: 'inception_folding_paris_mirror',
    name: 'Inception Paris Gravity Fold Architectural Symmetry',
    category: 'layout_composition',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Dream architecture bending 90 degrees overhead in crisp neutral daylight slate tones',
    filters: [
      'colorbalance=rs=-0.05:gs=0.02:bs=0.12:rh=0.02:gh=0.05:bh=0.08',
      'eq=contrast=1.22:saturation=1.05',
      'unsharp=5:5:0.8:3:3:0.3',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 336. Matrix 1999 Nebuchadnezzar EMP Blast Discharge
  nebuchadnezzar_emp_blast: {
    id: 'nebuchadnezzar_emp_blast',
    name: 'The Matrix Nebuchadnezzar Electromagnetic Pulse Wave',
    category: 'lighting_optics',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Blinding white electromagnetic pulse shockwave decaying into cold metallic cathode blue',
    filters: [
      'colorbalance=rh=0.15:gh=0.2:bh=0.4:rm=-0.05:bm=0.25',
      'eq=contrast=1.55:brightness=0.06:saturation=0.9',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 337. Hayao Miyazaki Nausicaa Toxic Jungle Spore Bioluminescence
  nausicaa_toxic_jungle_spores: {
    id: 'nausicaa_toxic_jungle_spores',
    name: 'Nausicaä Sea of Decay Toxic Spore Golden Phosphor',
    category: 'lighting_optics',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Ethereal fungal forest: glowing golden-green spores drifting across petrified ancient flora',
    filters: [
      'colorbalance=rm=0.1:gm=0.25:bm=-0.1:rh=0.2:gh=0.22:bh=-0.05:rs=-0.05:gs=0.15:bs=0.05',
      'eq=contrast=1.14:saturation=1.35',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 338. Top Gun Maverick Canyon Low-Level Supersonic Flyby
  canyon_supersonic_flyby_haze: {
    id: 'canyon_supersonic_flyby_haze',
    name: 'Top Gun Maverick Canyon Radar Pop-Up Dust & Afterburner',
    category: 'color_filter',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Claudio Miranda razor-sharp granite canyon walls with blistering orange scramjet afterburners',
    filters: [
      'colorbalance=rh=0.35:gh=0.12:bh=-0.25:rs=0.08:gs=-0.02:bs=0.1',
      'eq=contrast=1.38:saturation=1.28',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 339. Guillermo del Toro Blade II Vampire Reapers Blood Red Strobe
  blade_2_reaper_blood_strobe: {
    id: 'blade_2_reaper_blood_strobe',
    name: 'Blade II Prague Underground Blood Neon & Shadow',
    category: 'color_filter',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Prague subterranean rave: saturated ultraviolet strobes and glistening vampire blood speculars',
    filters: [
      'colorbalance=rh=0.45:gh=-0.2:bh=0.2:rs=0.15:gs=-0.1:bs=0.15',
      'eq=contrast=1.45:saturation=1.4',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 340. Denis Villeneuve Enemy Yellow Spider Haze Toronto
  enemy_toronto_yellow_spider_haze: {
    id: 'enemy_toronto_yellow_spider_haze',
    name: 'Denis Villeneuve Enemy Sickly Mustard Yellow Toronto',
    category: 'color_filter',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Nicolas Bolduc psychological yellow monochrome: oppressive warm sulfur tint washing over concrete skyscrapers',
    filters: [
      'colorbalance=rh=0.38:gh=0.28:bh=-0.35:rm=0.28:gm=0.22:bm=-0.28:rs=0.15:gs=0.12:bs=-0.2',
      'eq=contrast=1.18:saturation=1.1',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 341. 1980s Retro Arcade Vector Space Wars Phosphor HUD
  arcade_space_wars_vector_hud: {
    id: 'arcade_space_wars_vector_hud',
    name: '1980 Atari Battlezone Green Vector Phosphor Display',
    category: 'distortion_glitch',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Pure black CRT vector scope with glowing green wireframe polygons and crosshair reticle',
    filters: [
      'edgedetect=low=0.1:high=0.35:mode=wires',
      'colorchannelmixer=rr=0:rg=0:rb=0:gr=0:gg=1.5:gb=0:br=0:bg=0:bb=0.2',
      'eq=contrast=1.65',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 342. David Fincher Zodiac 1969 San Francisco Chronicle Desk
  zodiac_1969_chronicle_desk: {
    id: 'zodiac_1969_chronicle_desk',
    name: 'Zodiac 1969 Newsroom Fluorescent Tobacco & Paper',
    category: 'color_filter',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Harris Savides early digital Viper camera look: desaturated fluorescent tobacco green with warm incandescent desk lamps',
    filters: [
      'colorbalance=rm=0.08:gm=0.15:bm=-0.12:rs=0.05:gs=0.08:bs=-0.08:rh=0.12:gh=0.1:bh=-0.05',
      'eq=contrast=1.22:saturation=0.88',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 343. Audio: Ludwig Göransson The Mandalorian Beskar Spear Resonance
  audio_beskar_spear_resonance: {
    id: 'audio_beskar_spear_resonance',
    name: 'The Mandalorian Beskar Metal Metallic Ping & Shimmer',
    category: 'audio_voice',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Resonant pure metallic bell impact with crystalline high-frequency ringing overtone tail',
    filters: [
      'highpass=f=250,crystalizer=i=2.8,aecho=0.85:0.8:180|360:0.5|0.3',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 344. Audio: Hans Zimmer Dune Ornithopter Dragonfly Blade Flutter
  audio_dune_ornithopter_wings: {
    id: 'audio_dune_ornithopter_wings',
    name: 'Dune Ornithopter High-Speed Mechanical Wing Whir',
    category: 'audio_voice',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Hyper-fast mechanical flapping flutter with fluttering stereophonic panning displacement',
    filters: [
      'tremolo=f=18:d=0.65,apulsator=mode=sine:hz=1.2:width=0.7',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 345. Audio: Daft Punk Tron Legacy Solar Sailor Ambient Glide
  audio_tron_solar_sailor_ambient: {
    id: 'audio_tron_solar_sailor_ambient',
    name: 'Daft Punk Solar Sailor Ethereal Ambient Synth Swell',
    category: 'audio_voice',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Slow oceanic analog synthesizer swells with infinite stereo width and tape decay',
    filters: [
      'stereowiden=delay=24:feedback=0.4:crossfeed=0.4:drymix=0.7,aecho=0.9:0.9:320|640:0.6|0.4',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 346. Audio: 1980s Roland RE-201 Space Echo Spring Reverb Splash
  audio_roland_re201_space_echo: {
    id: 'audio_roland_re201_space_echo',
    name: '1974 Roland RE-201 Space Echo & Spring Reverb Tank',
    category: 'audio_voice',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Legendary multi-head tape delay with physical spring reverb splash and dark warm repeats',
    filters: [
      'aecho=0.82:0.78:160|320|480:0.55|0.35|0.2,lowpass=f=5500,volume=1.2',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 347. Audio: Cyberpunk 2077 Cyberdeck Quickhack Upload Beep
  audio_quickhack_upload_datastream: {
    id: 'audio_quickhack_upload_datastream',
    name: 'Cyberpunk Quickhack RAM Decryption Telemetry Burst',
    category: 'audio_voice',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Rapid electronic telemetry chirps with digital bitcrushed feedback sweep',
    filters: [
      'acrusher=bits=10:mode=log:aa=1:samples=2,highpass=f=1200,volume=1.3',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 348. Audio: Southside 808 Mafia Siren & Brass Trap Horn Stabs
  audio_808_mafia_siren_horn: {
    id: 'audio_808_mafia_siren_horn',
    name: '808 Mafia Dark Trap Kill Bill Siren & Low-End Hit',
    category: 'audio_voice',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Iconic screaming high-register synth siren with floor-shaking distorted 808 sub impact',
    filters: [
      'bass=g=11:f=42:w=0.4,treble=g=5:f=4000:w=0.5',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 349. Wes Anderson The Grand Budapest Hotel 1930s 1.37:1 Academy Warmth
  grand_budapest_1930s_academy: {
    id: 'grand_budapest_1930s_academy',
    name: 'The Grand Budapest Hotel 1930s Candy Pink & Lilac',
    category: 'color_filter',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Whimsical storybook confectionery: soft candy pink icing, lilac skies and warm brass chandeliers',
    filters: [
      'colorbalance=rh=0.22:gh=0.08:bh=0.18:rm=0.12:gm=0.05:bm=0.1:rs=0.04:gs=0.02:bs=-0.02',
      'eq=contrast=1.12:saturation=1.28',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 350. The Dark Knight Hong Kong Skyhook Night Extraction
  skyhook_extraction_hong_kong: {
    id: 'skyhook_extraction_hong_kong',
    name: 'The Dark Knight Hong Kong IFC Skyhook Extraction Night',
    category: 'color_filter',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Wally Pfister 70mm IMAX night skyline: pure deep harbor blacks with glistening skyscraper office windows',
    filters: [
      'colorbalance=rs=-0.15:gs=-0.05:bs=0.2:rm=-0.08:gm=0.02:bm=0.12:rh=0.05:gh=0.08:bh=0.15',
      'eq=contrast=1.35:saturation=1.08',
      'unsharp=5:5:0.8:3:3:0.4',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 351. Christopher Nolan Tenet Starks 12 Hypocenter Blast Dust
  starks_12_hypocenter_dust: {
    id: 'starks_12_hypocenter_dust',
    name: 'Tenet Starks 12 Hypocenter Soviet Concrete & Dust',
    category: 'color_filter',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Desaturated Soviet subterranean bunker: cracked gray concrete, chalky dust plumes and forward/reverse explosions',
    filters: [
      'colorbalance=rs=0.05:gs=0.02:bs=0.08:rh=-0.05:gh=0.02:bh=0.08',
      'eq=contrast=1.26:saturation=0.7',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 352. Quentin Tarantino Once Upon a Time in Hollywood 1969 Kodachrome
  hollywood_1969_sunset_strip: {
    id: 'hollywood_1969_sunset_strip',
    name: '1969 Sunset Strip Golden Hollywood Boulevard Kodachrome',
    category: 'color_filter',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Robert Richardson Kodak 5219 pushed: warm golden California smog, neon diner signs and vintage chrome cars',
    filters: [
      'colorbalance=rh=0.32:gh=0.15:bh=-0.22:rm=0.18:gm=0.08:bm=-0.12:rs=0.06:gs=0.02:bs=-0.05',
      'eq=contrast=1.24:saturation=1.35',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 353. Denis Villeneuve Sicario Night Vision Thermal Blue-Green Gen-2
  sicario_night_vision_gen2: {
    id: 'sicario_night_vision_gen2',
    name: 'Sicario Border Tunnel Gen-2 Green Phosphor NVG',
    category: 'lighting_optics',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Tactical helmet night vision goggles: intense green phosphor glow with circular peripheral vignette and sensor noise',
    filters: [
      'format=gray',
      'colorchannelmixer=rr=0:rg=0:rb=0:gr=0:gg=1.45:gb=0:br=0:bg=0:bb=0.2',
      'noise=alls=16:allf=t',
      'vignette=PI/3',
      'eq=contrast=1.4',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 354. Stanley Kubrick 2001 Hal 9000 Fisheye Terminal Eye
  hal_9000_fisheye_terminal_eye: {
    id: 'hal_9000_fisheye_terminal_eye',
    name: '2001 A Space Odyssey HAL 9000 Glowing Red Fisheye',
    category: 'lighting_optics',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Convex hemispherical fisheye lens distortion with unblinking glowing scarlet red artificial intelligence pupil',
    filters: [
      'lenscorrection=cx=0.5:cy=0.5:k1=-0.22:k2=0.1',
      'colorbalance=rh=0.38:gh=-0.1:bh=-0.1:rm=0.15:bm=-0.05',
      'drawbox=x=(iw-140)/2:y=(ih-140)/2:w=140:h=140:color=red@0.6:t=2',
      'eq=contrast=1.35',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 355. Apple Vision Pro Spatial Video Immersive Ambient Glow Border
  apple_spatial_ambient_glow_border: {
    id: 'apple_spatial_ambient_glow_border',
    name: 'Apple Vision Pro Spatial Floating Window Dynamic Glow',
    category: 'layout_composition',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Translucent frosted glass window frame casting subtle dynamic ambient backlight onto spatial computing dark room',
    filters: [
      'drawbox=x=24:y=24:w=iw-48:h=ih-48:color=white@0.2:t=2',
      'unsharp=5:5:0.6:3:3:0.2',
      'eq=contrast=1.06:saturation=1.08',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 356. Cyberpunk Netrunner Blackwall Searing Red Anomaly
  blackwall_searing_red_anomaly: {
    id: 'blackwall_searing_red_anomaly',
    name: 'Cyberpunk 2077 Phantom Liberty Blackwall Rogue AI Fire',
    category: 'lighting_optics',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Beyond the Blackwall: apocalyptic crimson lightning filaments fracturing reality across digital corruption tears',
    filters: [
      'colorbalance=rh=0.5:gh=-0.25:bh=-0.25:rm=0.3:gm=-0.15:bm=-0.15',
      'eq=contrast=1.65:brightness=-0.02',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 357. Star Wars Return of the Jedi Endor Moon Redwood Sunbeams
  endor_redwood_forest_sunbeams: {
    id: 'endor_redwood_forest_sunbeams',
    name: 'Return of the Jedi Endor Giant Redwood Canopy Sunbeams',
    category: 'lighting_optics',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Towering prehistoric California redwood trees with golden morning volumetric sun god-rays piercing morning mist',
    filters: [
      'colorbalance=rh=0.32:gh=0.22:bh=-0.2:rm=0.15:gm=0.12:bm=-0.1:rs=-0.02:gs=0.08:bs=0.04',
      'eq=contrast=1.2:saturation=1.25',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 358. Martin Scorsese The Wolf of Wall Street 1990s Yacht Azure Luxury
  wolf_of_wall_street_yacht_azure: {
    id: 'wolf_of_wall_street_yacht_azure',
    name: 'The Wolf of Wall Street Mediterranean Yacht Azure Sun',
    category: 'color_filter',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Rodrigo Prieto high-life luxury: sparkling crystal blue sea reflections, pristine yacht whites and bronze suntans',
    filters: [
      'colorbalance=rh=0.2:gh=0.08:bh=-0.1:rs=-0.08:gs=0.12:bs=0.28:rm=-0.02:gm=0.05:bm=0.18',
      'eq=contrast=1.22:brightness=0.02:saturation=1.35',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 359. Guillermo del Toro Nightmare Alley 1940s Carny Amber Shadow
  nightmare_alley_carny_amber: {
    id: 'nightmare_alley_carny_amber',
    name: 'Nightmare Alley 1940s Carnival Tent Amber & Shadow',
    category: 'color_filter',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Dan Laustsen psychological carnival noir: dusty amber circus light bulbs, rain-soaked canvas and deep black shadows',
    filters: [
      'colorbalance=rh=0.35:gh=0.18:bh=-0.25:rs=0.08:gs=0.02:bs=-0.12:rm=0.15:gm=0.05:bm=-0.1',
      'eq=contrast=1.36:saturation=1.22',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 360. Studio Ghibli Kiki's Delivery Service Coastal Clock Tower Morning
  kiki_delivery_coastal_morning: {
    id: 'kiki_delivery_coastal_morning',
    name: 'Kiki Delivery Service Koriko European Clocktower Breeze',
    category: 'color_filter',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Charming European coastal village: terracotta roof tile reds, sparkling harbor blues and fresh morning sea breeze',
    filters: [
      'colorbalance=rh=0.18:gh=0.12:bh=0.02:rs=-0.05:gs=0.08:bs=0.18:rm=0.05:gm=0.08:bm=0.1',
      'eq=contrast=1.14:saturation=1.32',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },
};
