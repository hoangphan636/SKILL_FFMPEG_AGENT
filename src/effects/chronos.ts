import type { EffectDefinition } from './schema.js';

export const CHRONOS_30_EFFECTS: Record<string, EffectDefinition> = {
  // 301. Denis Villeneuve Dune 2 Worm Ride Sand Vortex
  sandworm_ride_vortex_dust: {
    id: 'sandworm_ride_vortex_dust',
    name: 'Dune Part Two Shai-Hulud Sandworm Vortex Blast',
    category: 'lighting_optics',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Blinding desert sand vortex with pulverized amber dust clouds and high-velocity wind blur',
    filters: [
      'colorbalance=rh=0.38:gh=0.18:bh=-0.28:rm=0.22:gm=0.1:bm=-0.18',
      'noise=alls=16:allf=t',
      'eq=contrast=1.35:saturation=1.2',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 302. Christopher Nolan Interstellar Tesseract 5th Dimension Grid
  tesseract_5d_hypercube_lattice: {
    id: 'tesseract_5d_hypercube_lattice',
    name: 'Interstellar Tesseract 5-Dimensional Infinite Bookshelf',
    category: 'layout_composition',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Extruded infinite geometric lattice grid in deep golden amber and celestial blue gravity strings',
    filters: [
      'drawgrid=w=40:h=40:t=1:c=yellow@0.25',
      'colorbalance=rh=0.25:gh=0.15:bh=-0.1:rs=-0.1:gs=0.1:bs=0.25',
      'eq=contrast=1.28',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 303. The Matrix Reloaded Highway Chase Bleach & Green Velocity
  matrix_highway_chase_bleach: {
    id: 'matrix_highway_chase_bleach',
    name: 'Matrix Reloaded Freeway Chase Bleach Bypass & Velocity',
    category: 'color_filter',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Bill Pope high-speed highway aesthetic: silver desaturated concrete with deep olive green shadows and chrome shine',
    filters: [
      'colorbalance=rs=-0.15:gs=0.22:bs=-0.12:rm=-0.08:gm=0.15:bm=-0.08',
      'eq=contrast=1.42:saturation=0.82',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 304. Cyberpunk 2077 Johnny Silverhand Engram Memory Glitch
  silverhand_engram_memory_glitch: {
    id: 'silverhand_engram_memory_glitch',
    name: 'Cyberpunk 2077 Johnny Silverhand Relic Glitch Strobe',
    category: 'distortion_glitch',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Unstable digital persona corruption: sudden cyan-magenta channel tears and cyan memory ghosting',
    filters: [
      'colorchannelmixer=rr=1.2:rg=0:rb=0:gr=0:gg=0.8:gb=0.2:br=0:bg=0.2:bb=1.3',
      'drawgrid=w=iw:h=8:t=1:c=cyan@0.3',
      'eq=contrast=1.32',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 305. Stanley Kubrick A Clockwork Orange Korova Milk Bar High-Key White
  korova_milkbar_highkey_white: {
    id: 'korova_milkbar_highkey_white',
    name: 'A Clockwork Orange Korova Milk Bar High-Key Pop Art',
    category: 'lighting_optics',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'John Alcott clinical pure white studio environment with shocking saturated primary accent colors',
    filters: [
      'eq=contrast=1.25:brightness=0.08:saturation=1.4',
      'unsharp=5:5:1.0:3:3:0.4',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 306. Blade Runner 2049 Sapper Morton Protein Farm Ash Mist
  sapper_morton_farm_ash: {
    id: 'sapper_morton_farm_ash',
    name: 'Blade Runner 2049 Sapper Morton Gray Ash Mist',
    category: 'color_filter',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Cold monochromatic overcast daylight: desaturated slate gray mist with muted ochre soil accents',
    filters: [
      'colorbalance=rs=-0.05:gs=0.02:bs=0.08:rh=-0.02:gh=0.02:bh=0.05',
      'eq=contrast=1.12:saturation=0.6',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 307. Hayao Miyazaki Porco Rosso Adriatic Sea Azure & Crimson Plane
  porco_rosso_adriatic_azure: {
    id: 'porco_rosso_adriatic_azure',
    name: 'Porco Rosso 1920s Adriatic Azure Sea & Crimson Seaplane',
    category: 'color_filter',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Sunlit Mediterranean summer: crystalline deep turquoise water with bold Ferrari crimson accents and fluffy clouds',
    filters: [
      'colorbalance=rh=0.25:gh=-0.05:bh=0.05:rs=-0.1:gs=0.15:bs=0.28:rm=-0.05:gm=0.1:bm=0.2',
      'eq=contrast=1.2:saturation=1.42',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 308. Top Gun Maverick Dogfight Low-Altitude Cockpit Canopy Reflection
  canopy_cockpit_g_force_shadow: {
    id: 'canopy_cockpit_g_force_shadow',
    name: 'Top Gun Maverick Cockpit Canopy G-Force Rim Glow',
    category: 'lighting_optics',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Extreme cockpit canopy glass reflection: intense high-contrast sun flare dancing across pilot flight helmet',
    filters: [
      'colorbalance=rh=0.32:gh=0.15:bh=-0.22:rs=0.05:gs=-0.05:bs=0.12',
      'unsharp=5:5:1.2:3:3:0.5',
      'eq=contrast=1.35:saturation=1.22',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 309. Guillermo del Toro Hellboy II Golden Army Mechanical Clockwork
  golden_army_mechanical_clockwork: {
    id: 'golden_army_mechanical_clockwork',
    name: 'Hellboy II Golden Army Polished Brass & Steam',
    category: 'color_filter',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Guillermo Navarro antique steampunk palette: gleaming polished brass gears and deep oily bronze shadows',
    filters: [
      'colorbalance=rh=0.35:gh=0.2:bh=-0.25:rm=0.2:gm=0.1:bm=-0.18:rs=0.1:gs=0.05:bs=-0.1',
      'eq=contrast=1.3:saturation=1.28',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 310. Robert Eggers The Northman Nordic Blood Eclipse Chieftain
  the_northman_blood_eclipse: {
    id: 'the_northman_blood_eclipse',
    name: 'The Northman Jarin Blaschke Volcanic Ash & Blood Red',
    category: 'color_filter',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Icelandic volcanic fury: desaturated obsidian black basalt fields illuminated by violent crimson fire and blood',
    filters: [
      'colorbalance=rh=0.42:gh=-0.12:bh=-0.18:rs=-0.1:gs=-0.05:bs=0.08',
      'eq=contrast=1.45:brightness=-0.06:saturation=1.1',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 311. 1990s Anime CRT TV VHS Static Artifact Burst
  anime_vhs_static_artifact_burst: {
    id: 'anime_vhs_static_artifact_burst',
    name: '1995 Neon Genesis Evangelion VHS CRT Interference',
    category: 'distortion_glitch',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Phosphor shadow-mask dot grid with analog tape head dropouts and horizontal static spikes',
    filters: [
      'drawgrid=w=iw:h=3:t=1:c=black@0.35',
      'noise=c0s=12:c0f=t',
      'eq=contrast=1.25:saturation=1.3',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 312. David Lynch Twin Peaks The Black Lodge Red Curtains Chevron
  twin_peaks_black_lodge_chevron: {
    id: 'twin_peaks_black_lodge_chevron',
    name: 'Twin Peaks The Black Lodge Velvet Red & Chevron Floor',
    category: 'color_filter',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Surreal nightmare room: deep saturated blood red velvet drapery against stark monochrome floor contrast',
    filters: [
      'colorbalance=rh=0.4:gh=-0.1:bh=-0.1:rs=0.1:gs=-0.05:bs=-0.05',
      'eq=contrast=1.4:saturation=1.45',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 313. Audio: Ludwig Göransson Tenet Inverted Gunshot Temporal Implosion
  audio_tenet_temporal_implosion_gun: {
    id: 'audio_tenet_temporal_implosion_gun',
    name: 'Tenet Inverted Gunshot Bullet Temporal Implosion',
    category: 'audio_voice',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Backwards vacuum whoosh snapping into sudden dry bullet wall collision',
    filters: [
      'lowpass=f=2200,bass=g=10:f=50:w=0.4,aecho=0.8:0.7:80:0.4',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 314. Audio: Hans Zimmer Dune Harvester Sandworm Emergence Sub-Harmonic
  audio_dune_sandworm_emergence: {
    id: 'audio_dune_sandworm_emergence',
    name: 'Dune Sandworm Emergence 20Hz Sub-Audible Floor Shake',
    category: 'audio_voice',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Immense infrasonic seismic rumble vibrating below human hearing threshold at 20-40Hz',
    filters: [
      'bass=g=14:f=28:w=0.4,lowpass=f=12000',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 315. Audio: Daft Punk Tron Legacy End of Line Club Sub-Bass Pumping
  audio_tron_end_of_line_club: {
    id: 'audio_tron_end_of_line_club',
    name: 'Daft Punk End of Line Club 130 BPM Sidechain Heavy Pumper',
    category: 'audio_voice',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Relentless 4-on-the-floor kick ducking with sweeping resonant filter synthesizer leads',
    filters: [
      'tremolo=f=2.17:d=0.75,firequalizer=gain_entry=\'entry(50,8);entry(120,4);entry(300,-3)\'',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 316. Audio: 1970s Abbey Road Pink Floyd Tape Echo Rotary Flange
  audio_abbey_road_binson_echorec: {
    id: 'audio_abbey_road_binson_echorec',
    name: 'Pink Floyd 1971 Binson Echorec Magnetic Drum Delay',
    category: 'audio_voice',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Authentic Italian magnetic metal wire drum delay with warm vacuum tube saturation and multi-head repeats',
    filters: [
      'aecho=0.8:0.8:140|280|420:0.6|0.4|0.2,vibrato=f=3:d=0.2',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 317. Audio: Cyberpunk 2077 V's Kiroshi Audio Glitch Ear Ring
  audio_kiroshi_tinnitus_glitch: {
    id: 'audio_kiroshi_tinnitus_glitch',
    name: 'Cyberpunk 2077 Neural Shock Tinnitus Ear Ring Tone',
    category: 'audio_voice',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'High-frequency 6.5kHz tinnitus ring tone with bandpass muffled ambient world audio',
    filters: [
      'highpass=f=800,lowpass=f=4500,volume=1.4',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 318. Audio: Metro Boomin Dark 808 Minor Scale Trap Glide
  audio_metro_boomin_dark_glide: {
    id: 'audio_metro_boomin_dark_glide',
    name: 'Metro Boomin Dark 808 Trap Sub-Glide 45Hz Saturation',
    category: 'audio_voice',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Heavy saturated 808 bass harmonic drive filling small smartphone speakers and giant subs alike',
    filters: [
      'bass=g=10:f=48:w=0.45,crystalizer=i=2.0',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 319. Wes Anderson Rushmore 1998 Autumn Prep School Flannel
  rushmore_1998_prep_school: {
    id: 'rushmore_1998_prep_school',
    name: 'Rushmore 1998 Autumn Prep School Hunter Green & Maroon',
    category: 'color_filter',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Robert Yeoman nostalgic Texas autumn: rich hunter green velvet blazers and warm amber wooden libraries',
    filters: [
      'colorbalance=rm=0.1:gm=0.12:bm=-0.15:rs=0.08:gs=0.08:bs=-0.1:rh=0.15:gh=0.12:bh=-0.08',
      'eq=contrast=1.16:saturation=1.2',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 320. The Matrix Revolutions Machine City 01 Lightning Skies
  machine_city_01_lightning: {
    id: 'machine_city_01_lightning',
    name: 'The Matrix Revolutions Machine City 01 Searing Lightning',
    category: 'lighting_optics',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Dystopian mechanized horizon: violent electrical arcs cutting through dark industrial smog in pure white & blue',
    filters: [
      'colorbalance=rs=-0.1:gs=-0.05:bs=0.25:rh=0.15:gh=0.1:bh=0.35',
      'eq=contrast=1.52:brightness=-0.04:saturation=1.1',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 321. Christopher Nolan Tenet Tallinn Highway Inversion Ambush
  tenet_tallinn_freeway_ambush: {
    id: 'tenet_tallinn_freeway_ambush',
    name: 'Tenet Tallinn Highway Ambush Overcast Steel Blue',
    category: 'color_filter',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Hoyte van Hoytema overcast Baltic highway: cold steel blues, asphalt gray and forward/reverse vehicular motion',
    filters: [
      'colorbalance=rs=-0.12:gs=0.02:bs=0.22:rh=0.02:gh=0.05:bh=0.15',
      'eq=contrast=1.28:saturation=0.9',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 322. Quentin Tarantino Django Unchained Winter Snow Mountain Blood
  django_winter_snow_blood: {
    id: 'django_winter_snow_blood',
    name: 'Django Unchained Wyoming Snowfield Crimson Blood Splatter',
    category: 'color_filter',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Robert Richardson pristine blinding white powder snow contrasting with shocking crimson arterial blood',
    filters: [
      'colorbalance=rh=0.35:gh=-0.15:bh=-0.15:rs=0.08:gs=0.02:bs=0.12',
      'eq=contrast=1.35:brightness=0.04:saturation=1.25',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 323. Denis Villeneuve Prisoners Rain-Soaked Windshield Wiper
  prisoners_rain_windshield_murk: {
    id: 'prisoners_rain_windshield_murk',
    name: 'Denis Villeneuve Prisoners Wet Winter Dusk & Car Wiper',
    category: 'color_filter',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Roger Deakins desaturated Pennsylvania winter twilight: blurred windshield rain streaks and amber taillights',
    filters: [
      'colorbalance=rs=-0.08:gs=-0.02:bs=0.15:rh=0.18:gh=0.08:bh=-0.12',
      'eq=contrast=1.22:brightness=-0.04:saturation=0.82',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 324. Stanley Kubrick Barry Lyndon Pure Candlelight 50mm f/0.7
  barry_lyndon_candlelight_f07: {
    id: 'barry_lyndon_candlelight_f07',
    name: 'Barry Lyndon Carl Zeiss 50mm f/0.7 Pure Candlelight',
    category: 'lighting_optics',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Iconic NASA lens look: ultra-shallow depth of field with warm 2200K flickering beeswax candlelight illumination',
    filters: [
      'colorbalance=rh=0.45:gh=0.22:bh=-0.38:rm=0.25:gm=0.12:bm=-0.22:rs=0.1:gs=0.05:bs=-0.1',
      'eq=contrast=1.2:saturation=1.3',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 325. Apple Spatial Video Panoramic Horizon Expander
  apple_spatial_panoramic_horizon: {
    id: 'apple_spatial_panoramic_horizon',
    name: 'Apple Vision Pro Spatial Panoramic Horizon Immersion',
    category: 'layout_composition',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Gentle curved vignette border simulating the wide panoramic peripheral horizon of spatial computing',
    filters: [
      'vignette=PI/4',
      'unsharp=5:5:0.8:3:3:0.3',
      'eq=contrast=1.08:saturation=1.12',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 326. Cyberpunk Netrunner Cyberspace Data Ocean Grid
  cyberspace_data_ocean_grid: {
    id: 'cyberspace_data_ocean_grid',
    name: 'Neuromancer Cyberspace Infinite Emerald Data Ocean',
    category: 'lighting_optics',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Endless neon emerald wireframe lattice stretching into pure void with bright glowing data nodes',
    filters: [
      'colorchannelmixer=rr=0:rg=0:rb=0:gr=0:gg=1.45:gb=0:br=0:bg=0:bb=0.3',
      'drawgrid=w=32:h=32:t=1:c=green@0.3',
      'eq=contrast=1.5',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 327. Star Wars Episode IV A New Hope Mos Eisley Twin Sun Heat Haze
  tatooine_twin_sun_heat_haze: {
    id: 'tatooine_twin_sun_heat_haze',
    name: 'Star Wars Tatooine Twin Suns Golden Heat Mirage',
    category: 'lighting_optics',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Gilbert Taylor dual sun glare: blazing yellow-orange mirage wash with bleached desert horizon dunes',
    filters: [
      'colorbalance=rh=0.38:gh=0.2:bh=-0.28:rm=0.18:gm=0.08:bm=-0.15',
      'eq=contrast=1.18:brightness=0.05:saturation=1.28',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 328. Martin Scorsese Goodfellas 1990 Copacabana Steadicam Red Glow
  copacabana_steadicam_red: {
    id: 'copacabana_steadicam_red',
    name: 'Goodfellas 1990 Copacabana Kitchen Steadicam Red',
    category: 'color_filter',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Michael Ballhaus legendary long take: deep ruby red restaurant lighting, warm mahogany bars and smoke swirls',
    filters: [
      'colorbalance=rh=0.35:gh=-0.05:bh=-0.12:rm=0.18:gm=-0.02:bm=-0.08:rs=0.1:gs=0.02:bs=-0.05',
      'eq=contrast=1.28:saturation=1.35',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 329. Guillermo del Toro Crimson Peak Gothic Victorian Crimson & Cyan
  crimson_peak_victorian_cyan: {
    id: 'crimson_peak_victorian_cyan',
    name: 'Crimson Peak Allerdale Hall Red Clay & Ghost Cyan',
    category: 'color_filter',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Gothic supernatural romance: oozing blood red clay foundations contrasting with cold ethereal blue apparition shadows',
    filters: [
      'colorbalance=rh=0.32:gh=-0.08:bh=-0.1:rs=-0.15:gs=0.08:bs=0.28:rm=0.08:gm=-0.02:bm=0.12',
      'eq=contrast=1.38:saturation=1.3',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 330. Studio Ghibli My Neighbor Totoro Raindrop Umbrella Night Bus Stop
  totoro_night_rain_bus_stop: {
    id: 'totoro_night_rain_bus_stop',
    name: 'My Neighbor Totoro Night Rain Forest Bus Stop Lantern',
    category: 'lighting_optics',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Cozy nocturnal magic: lone warm amber streetlamp illuminating heavy diagonal rain in a dark peaceful country forest',
    filters: [
      'colorbalance=rh=0.28:gh=0.15:bh=-0.18:rs=-0.1:gs=0.02:bs=0.18',
      'eq=contrast=1.3:saturation=1.22',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },
};
