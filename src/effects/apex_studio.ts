import type { EffectDefinition } from './schema.js';

export const APEX_STUDIO_30_EFFECTS: Record<string, EffectDefinition> = {
  // 271. Dune 2 Paul Atreides Fremen Muad'Dib Spice Blue Eyes
  muaddib_spice_blue_eyes: {
    id: 'muaddib_spice_blue_eyes',
    name: 'Dune Part Two Muad\'Dib Spice Melange Blue Eyes',
    category: 'color_filter',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Arrakis golden sandstone monochrome with electric luminous cobalt eyes',
    filters: [
      'colorbalance=rs=0.25:gs=0.1:bs=-0.22:rm=0.2:gm=0.08:bm=-0.15',
      'eq=contrast=1.3:saturation=1.15',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 272. Oppenheimer J. Robert Oppenheimer 1920s Quantum Mind Dust
  oppenheimer_quantum_thought_dust: {
    id: 'oppenheimer_quantum_thought_dust',
    name: 'Oppenheimer Quantum Particle Swarm & Silver Emulsion',
    category: 'lighting_optics',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Swirling luminous quantum atomic particles drifting through cold monochromatic silver halide',
    filters: [
      'format=gray',
      'unsharp=7:7:1.8:5:5:1.0',
      'noise=alls=14:allf=t',
      'eq=contrast=1.45',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 273. The Matrix Code Rain ASCII Terminal Green Phosphor
  matrix_ascii_terminal_green: {
    id: 'matrix_ascii_terminal_green',
    name: 'Matrix Operator CRT Terminal Matrix Green Scan',
    category: 'distortion_glitch',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Phosphor green CRT curvature with horizontal raster lines and 60Hz cathode tube flutter',
    filters: [
      'colorchannelmixer=rr=0:rg=0:rb=0:gr=0:gg=1.5:gb=0:br=0:bg=0:bb=0.2',
      'drawgrid=w=iw:h=4:t=1:c=black@0.45',
      'eq=contrast=1.55',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 274. Cyberpunk 2077 Night City Neon Rain Acid Smog
  night_city_acid_rain_smog: {
    id: 'night_city_acid_rain_smog',
    name: 'Night City Wet Asphalt Rain Acid Smog & Neon',
    category: 'color_filter',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Dystopian rainy metropolis: toxic sulfur yellow highlights reflecting off oil-slick asphalt',
    filters: [
      'colorbalance=rh=0.3:gh=0.25:bh=-0.25:rs=-0.1:gs=0.05:bs=0.2:rm=-0.05:gm=0.1:bm=0.15',
      'eq=contrast=1.38:saturation=1.4',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 275. Blade Runner 2049 Wallace Earth Vault Golden Honeycomb
  wallace_corp_golden_vault: {
    id: 'wallace_corp_golden_vault',
    name: 'Blade Runner 2049 Wallace Corp Water Caustics Gold',
    category: 'lighting_optics',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Roger Deakins rippling water caustics illuminating brutalist concrete in warm molten amber',
    filters: [
      'colorbalance=rh=0.4:gh=0.25:bh=-0.3:rm=0.22:gm=0.12:bm=-0.2:rs=0.08:gs=0.04:bs=-0.1',
      'eq=contrast=1.28:saturation=1.35',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 276. Stanley Kubrick Eyes Wide Shut Sapphire Blue & Tungsten Red
  eyes_wide_shut_sapphire_tungsten: {
    id: 'eyes_wide_shut_sapphire_tungsten',
    name: 'Eyes Wide Shut Sapphire Blue & Tungsten Lamp Red',
    category: 'color_filter',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Larry Smith push-processed Kodak 5298: deep saturated midnight cobalt against warm amber Christmas lights',
    filters: [
      'colorbalance=rs=-0.15:gs=-0.05:bs=0.35:rh=0.38:gh=0.08:bh=-0.25:rm=0.1:gm=-0.05:bm=0.15',
      'eq=contrast=1.35:saturation=1.45',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 277. Akira Neo-Tokyo 1988 Nuclear Singularity Expansion
  akira_singularity_nuclear_sphere: {
    id: 'akira_singularity_nuclear_sphere',
    name: 'Akira 1988 Neo-Tokyo White Singularity Expansion',
    category: 'lighting_optics',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Absolute white hemispherical void expanding outward with ultra-violet shockwave rings',
    filters: [
      'colorbalance=rh=0.2:gh=0.1:bh=0.35:rm=0.1:bm=0.25',
      'eq=contrast=1.55:brightness=0.08:saturation=1.3',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 278. Interstellar Miller's Planet Massive Ocean Gravity Wave
  millers_planet_tidal_wave: {
    id: 'millers_planet_tidal_wave',
    name: 'Interstellar Miller Planet Titanic Oceanic Wave Horizon',
    category: 'color_filter',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Hoyte van Hoytema cold titanium gray-blue water under an oppressive overcast gravitational haze',
    filters: [
      'colorbalance=rs=-0.1:gs=0.05:bs=0.22:rm=-0.05:gm=0.02:bm=0.15:rh=-0.05:gh=0.02:bh=0.12',
      'eq=contrast=1.28:saturation=0.88',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 279. The Matrix 1999 Subway Fight Slomo Concrete Debris
  matrix_subway_fight_concrete: {
    id: 'matrix_subway_fight_concrete',
    name: 'The Matrix 1999 Subway Tile Squalor & Muzzle Flare',
    category: 'color_filter',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Grungy NYC subterranean subway green: yellowed ceramic tiles, matte gray concrete and muzzle flashes',
    filters: [
      'colorbalance=rs=-0.12:gs=0.22:bs=-0.18:rm=-0.08:gm=0.15:bm=-0.1:rh=0.15:gh=0.18:bh=-0.12',
      'eq=contrast=1.35:saturation=1.05',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 280. Hayao Miyazaki Howl's Moving Castle Cloud Castle Flight
  howls_moving_castle_sky_meadow: {
    id: 'howls_moving_castle_sky_meadow',
    name: 'Howl Moving Castle Alpine Wildflower & Cumulus Meadow',
    category: 'color_filter',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Radiant alpine sunshine: saturated ruby poppies, cobalt mountain lakes and billowing ivory clouds',
    filters: [
      'colorbalance=rh=0.15:gh=0.12:bh=0.05:rm=0.05:gm=0.12:bm=0.08:rs=-0.02:gs=0.05:bs=0.08',
      'eq=contrast=1.12:brightness=0.03:saturation=1.38',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 281. Top Gun Maverick 10G Mach 10 Darkstar Shock Diamond
  darkstar_mach10_shock_diamond: {
    id: 'darkstar_mach10_shock_diamond',
    name: 'Top Gun Maverick Mach 10 Darkstar Scramjet Shock Cone',
    category: 'lighting_optics',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Stratospheric near-black midnight sky with searing white shock diamonds and aerodynamic heat glow',
    filters: [
      'colorbalance=rs=-0.15:gs=-0.08:bs=0.2:rh=0.35:gh=0.15:bh=-0.25',
      'eq=contrast=1.48:saturation=1.25',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 282. Ghost in the Shell 1995 Major Kusanagi Diving Deep Sea Harbor
  kusanagi_deep_dive_harbor: {
    id: 'kusanagi_deep_dive_harbor',
    name: 'Ghost in the Shell 1995 Hong Kong Harbor Ghost Murk',
    category: 'color_filter',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Submerged industrial harbor: murky jade green water filtering ethereal daylight rays onto cybernetic limbs',
    filters: [
      'colorbalance=rs=-0.2:gs=0.2:bs=0.1:rm=-0.15:gm=0.25:bm=0.15:rh=-0.1:gh=0.15:bh=0.05',
      'eq=contrast=1.2:saturation=1.1',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 283. Audio: Ludwig Göransson Oppenheimer Fusion Violin Chaos Accelerando
  audio_oppenheimer_fusion_violin: {
    id: 'audio_oppenheimer_fusion_violin',
    name: 'Oppenheimer Can You Hear The Music Accelerando Violin Swarm',
    category: 'audio_voice',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Rapidly accelerating microtonal violin vibrato with shimmering high-frequency air resonance',
    filters: [
      'vibrato=f=6:d=0.35,highpass=f=200,lowpass=f=16000,volume=1.2',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 284. Audio: Daft Punk Tron Legacy The Son of Flynn Arp Stereo Ping-Pong
  audio_tron_son_of_flynn_arp: {
    id: 'audio_tron_son_of_flynn_arp',
    name: 'Daft Punk The Son of Flynn 16th-Note Analog Ping-Pong',
    category: 'audio_voice',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Ultra-wide stereo panning 16th-note analog synthesizer arpeggio echoing left to right',
    filters: [
      'apulsator=mode=sine:hz=0.5:width=0.9,stereowiden=delay=18:feedback=0.35:crossfeed=0.35:drymix=0.8',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 285. Audio: Cyberpunk 2077 Cyberware Sandevistan Warp Whoosh
  audio_sandevistan_warp_whoosh: {
    id: 'audio_sandevistan_warp_whoosh',
    name: 'Cyberpunk 2077 Sandevistan Relativistic Time-Dilation Whoosh',
    category: 'audio_voice',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Sub-bass vacuum suction dropping into time-stretched doppler whoosh with filtered top-end',
    filters: [
      'lowpass=f=1800,bass=g=8:f=60:w=0.4,aecho=0.8:0.7:120:0.3',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 286. Audio: Hans Zimmer Dune Gom Jabbar Throat Singer Resonance
  audio_dune_gom_jabbar_throat: {
    id: 'audio_dune_gom_jabbar_throat',
    name: 'Hans Zimmer Dune Gom Jabbar Sardaukar Throat Drone',
    category: 'audio_voice',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Sub-harmonic guttural overtone drone with cavernous ancient acoustic stone reflection',
    filters: [
      'bass=g=10:f=55:w=0.5,aecho=0.88:0.9:350|700:0.5|0.3,crystalizer=i=2.5',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 287. Audio: Daft Punk Random Access Memories 1978 Neve Desk EQ
  audio_neve_console_silky_highs: {
    id: 'audio_neve_console_silky_highs',
    name: 'Daft Punk RAM 1978 Neve 8078 Console Silky Air EQ',
    category: 'audio_voice',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Pristine audiophile analog desk coloration: punchy round low-end, sweet 12kHz transformer sheen',
    filters: [
      'treble=g=4:f=12000:w=0.6,bass=g=3:f=100:w=0.5,compand=attacks=0.03:decays=0.15:points=-70/-70|-20/-14|0/0',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 288. Audio: Metro Boomin Heavy 808 Trap Sub-Bass Floor Tremor
  audio_metro_boomin_808_tremor: {
    id: 'audio_metro_boomin_808_tremor',
    name: 'Metro Boomin 808 Trap Sub-Bass 35Hz Earth Shaker',
    category: 'audio_voice',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Monolithic distorted 808 kick driving 35-70Hz club subwoofers with saturated overtones',
    filters: [
      'bass=g=12:f=38:w=0.4,firequalizer=gain_entry=\'entry(35,12);entry(80,8);entry(250,-4)\'',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 289. Wes Anderson Isle of Dogs Megasaki Trash Island Rust & Ash
  isle_of_dogs_rust_ash_palette: {
    id: 'isle_of_dogs_rust_ash_palette',
    name: 'Isle of Dogs Megasaki Trash Island Weathered Rust & Ash',
    category: 'color_filter',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Desaturated industrial wasteland: rusted corrugated iron orange against chalky ash gray',
    filters: [
      'colorbalance=rs=0.15:gs=0.05:bs=-0.1:rh=0.2:gh=0.08:bh=-0.15:rm=0.08:gm=-0.02:bm=-0.08',
      'eq=contrast=1.25:saturation=0.78',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 290. The Dark Knight Rises Bane Sewers Concrete Underbelly
  bane_sewers_concrete_underbelly: {
    id: 'bane_sewers_concrete_underbelly',
    name: 'The Dark Knight Rises Bane Gotham Sewers Murk',
    category: 'color_filter',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Wally Pfister industrial water tunnels: murky olive-tinted darkness with high-gain flashbulb speculars',
    filters: [
      'colorbalance=rs=-0.08:gs=0.12:bs=-0.05:rh=0.1:gh=0.12:bh=-0.08',
      'eq=contrast=1.38:brightness=-0.06:saturation=0.92',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 291. Denis Villeneuve Arrival Heptapod Ink Logogram Atmosphere
  arrival_heptapod_mist_ink: {
    id: 'arrival_heptapod_mist_ink',
    name: 'Arrival Bradford Young Misty Heptapod Glass & Smoke',
    category: 'color_filter',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Atmospheric cold vapor: ethereal gray-white mist chamber illuminated by soft backlight with black ink symbols',
    filters: [
      'colorbalance=rs=-0.08:gs=-0.02:bs=0.14:rh=0.02:gh=0.04:bh=0.1',
      'eq=contrast=1.16:brightness=0.04:saturation=0.75',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 292. Martin Scorsese Casino 1995 Las Vegas Gold Velvet & Champagne
  casino_1995_gold_velvet: {
    id: 'casino_1995_gold_velvet',
    name: 'Martin Scorsese Casino 1995 Tangiers Gold Velvet',
    category: 'color_filter',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Robert Richardson incandescent ceiling lights washing over deep crimson velvet booths and gold chips',
    filters: [
      'colorbalance=rh=0.38:gh=0.18:bh=-0.22:rs=0.12:gs=-0.05:bs=-0.12:rm=0.18:gm=0.06:bm=-0.1',
      'eq=contrast=1.28:saturation=1.35',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 293. Quentin Tarantino Kill Bill Vol. 1 House of Blue Leaves Silhouette
  house_of_blue_leaves_silhouette: {
    id: 'house_of_blue_leaves_silhouette',
    name: 'Kill Bill House of Blue Leaves Paper Screen Silhouette',
    category: 'color_filter',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Robert Richardson shoji screen silhouette: pure royal cobalt blue screen with razor-sharp black sword shadows',
    filters: [
      'colorchannelmixer=rr=0:rg=0:rb=0:gr=0:gg=0.2:gb=0:br=0:bg=0:bb=1.6',
      'eq=contrast=2.2:brightness=-0.1',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 294. 1970s Francis Ford Coppola Apocalypse Now Golden Napalm Dawn
  apocalypse_now_napalm_dawn: {
    id: 'apocalypse_now_napalm_dawn',
    name: 'Apocalypse Now Vittorio Storaro Golden Napalm Dawn',
    category: 'lighting_optics',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Storaro three-color theory: blazing golden napalm fire storm balancing against humid jungle shadows',
    filters: [
      'colorbalance=rh=0.42:gh=0.22:bh=-0.35:rs=0.12:gs=0.08:bs=-0.18:rm=0.22:gm=0.1:bm=-0.15',
      'eq=contrast=1.32:saturation=1.4',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 295. Apple Vision Pro Spatial Video Immersive 3D Spatial Audio Environment
  apple_spatial_audio_3d_environment: {
    id: 'apple_spatial_audio_3d_environment',
    name: 'Apple Vision Pro Spatial Video Immersive Acoustics',
    category: 'audio_voice',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Dynamic binaural head-tracking simulation with natural room impulse and pristine frequency clarity',
    filters: [
      'stereowiden=delay=22:feedback=0.3:crossfeed=0.3:drymix=0.85',
      'crystalizer=i=1.5',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 296. Cyberpunk Netrunner Icebreaker Firewall Breach Shock
  netrunner_icebreaker_firewall_breach: {
    id: 'netrunner_icebreaker_firewall_breach',
    name: 'Cyberpunk Netrunner ICE Breaker Red Firewall Glitch',
    category: 'distortion_glitch',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Sudden crimson neural feedback surge with digital artifact fragmentation and shock scanlines',
    filters: [
      'colorbalance=rh=0.45:gh=-0.2:bh=-0.2:rs=0.2:gs=-0.1:bs=-0.1',
      'drawgrid=w=iw:h=6:t=1:c=red@0.35',
      'eq=contrast=1.5',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 297. Star Wars Episode V The Empire Strikes Back Carbon Freeze Chamber
  carbon_freeze_chamber_orange: {
    id: 'carbon_freeze_chamber_orange',
    name: 'The Empire Strikes Back Bespin Carbon Freezing Orange',
    category: 'lighting_optics',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Peter Suschitzky low-angle floor grate illumination: blazing molten orange steam rising into industrial shadows',
    filters: [
      'colorbalance=rh=0.4:gh=0.15:bh=-0.3:rs=-0.12:gs=-0.05:bs=0.15:rm=0.18:gm=0.05:bm=-0.12',
      'eq=contrast=1.4:saturation=1.35',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 298. James Cameron The Terminator 1984 Blue Neon Tech-Noir
  terminator_1984_blue_technoir: {
    id: 'terminator_1984_blue_technoir',
    name: 'The Terminator 1984 Adam Greenberg Blue Tech-Noir',
    category: 'color_filter',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Gritty 1980s 35mm film: harsh cyan police strobes, cool blue alleyway rim lights and chrome reflections',
    filters: [
      'colorbalance=rs=-0.15:gs=0.08:bs=0.28:rm=-0.08:gm=0.05:bm=0.18:rh=-0.05:gh=0.08:bh=0.22',
      'eq=contrast=1.35:saturation=1.15',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 299. Guillermo del Toro Pacific Rim Jaeger Holographic Cockpit Conn-Pod
  jaeger_connpod_hologram_hud: {
    id: 'jaeger_connpod_hologram_hud',
    name: 'Pacific Rim Gipsy Danger Jaeger Conn-Pod Hologram HUD',
    category: 'layout_composition',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Massive multi-layered mechanical holographic telemetry visor in electric cyan and orange warning beacons',
    filters: [
      'drawbox=x=60:y=60:w=iw-120:h=ih-120:color=cyan@0.4:t=2',
      'drawbox=x=(iw-240)/2:y=ih-140:w=240:h=40:color=orange@0.6:t=fill',
      'colorbalance=rh=0.15:bh=0.2',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 300. Studio Ghibli Castle in the Sky Laputa Floating Aetherium Crystal
  laputa_aetherium_crystal_glow: {
    id: 'laputa_aetherium_crystal_glow',
    name: 'Castle in the Sky Laputa Levitating Aetherium Blue Glow',
    category: 'lighting_optics',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Mystical ancient levitation stone: pure cerulean crystal glow pulsing with soft magical light diffusion',
    filters: [
      'colorbalance=rh=-0.1:gh=0.12:bh=0.38:rm=-0.05:gm=0.08:bm=0.25:rs=-0.08:gs=0.05:bs=0.2',
      'eq=contrast=1.18:brightness=0.04:saturation=1.38',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },
};
