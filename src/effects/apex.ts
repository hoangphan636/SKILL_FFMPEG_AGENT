import type { EffectDefinition } from './schema.js';

export const APEX_20_EFFECTS: Record<string, EffectDefinition> = {
  // 161. Top Gun Maverick Sunset Golden Hour
  topgun_sunset_golden_hour: {
    id: 'topgun_sunset_golden_hour',
    name: 'Top Gun Maverick Mojave Sunset Golden Hour',
    category: 'color_filter',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Blazing 3200K orange sun highlights with deep navy blue cockpit shadow contrast',
    filters: [
      'colorbalance=rh=0.35:gh=0.15:bh=-0.28:rs=0.08:gs=-0.04:bs=0.15',
      'eq=contrast=1.22:saturation=1.35',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 162. Cyberpunk Laser Grid Retrowave Floor
  cyberpunk_laser_grid: {
    id: 'cyberpunk_laser_grid',
    name: '1984 Retrowave Neon Horizon Laser Grid',
    category: 'lighting_optics',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Electric magenta and cyan atmospheric split with retro gridline bloom',
    filters: [
      'colorbalance=rm=0.25:gm=-0.1:bm=0.35:rs=-0.15:gs=0.2:bs=0.25',
      'eq=contrast=1.3:saturation=1.4',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 163. The Batman 2022 Gotham Rainy Crimson & Charcoal
  batman_gotham_crimson_charcoal: {
    id: 'batman_gotham_crimson_charcoal',
    name: 'The Batman 2022 Gotham Deep Charcoal & Flare',
    category: 'color_filter',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Greig Fraser crushed charcoal blacks with selective intense flare and rain gloss',
    filters: [
      'colorbalance=rs=-0.1:gs=-0.1:bs=-0.1:rh=0.25:gh=-0.05:bh=-0.15',
      'eq=contrast=1.45:brightness=-0.08:saturation=0.85',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 164. IMAX 70mm Christopher Nolan Film Perforation & Grain
  imax_70mm_film_perforation: {
    id: 'imax_70mm_film_perforation',
    name: 'IMAX 70mm Large Format Fine Halide Grain',
    category: 'lighting_optics',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'High-acutance micro-contrast with organic Kodak Vision3 250D large format grain',
    filters: [
      'noise=c1s=7:c1f=t+u',
      'unsharp=5:5:0.8:3:3:0.4',
      'eq=contrast=1.12:saturation=1.05',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 165. Alien 1979 Weyland-Yutani Nostromo CRT Console
  alien_nostromo_crt_console: {
    id: 'alien_nostromo_crt_console',
    name: 'Alien 1979 Weyland Nostromo Amber Computer Screen',
    category: 'distortion_glitch',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Curved amber vector CRT monitor glow with green prompt blink',
    filters: [
      'colorchannelmixer=rr=1.3:rg=0.4:rb=0:gr=0.3:gg=0.8:gb=0:br=0:bg=0:bb=0',
      'drawgrid=w=iw:h=4:t=1:c=black@0.4',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 166. Euphoria Glitter Sparkle Starlight Shimmer
  euphoria_glitter_sparkle: {
    id: 'euphoria_glitter_sparkle',
    name: 'Euphoria Glitter Makeup Specular Sparkle',
    category: 'lighting_optics',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Cross-hatch shimmer on highlights with soft pastel pink & cyan diffusion',
    filters: [
      'colorbalance=rh=0.2:gh=-0.05:bh=0.25:rm=0.1:gm=-0.05:bm=0.15',
      'eq=contrast=1.15:saturation=1.25',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 167. Quentin Tarantino 1970s Grindhouse Film Dust & Scratches
  grindhouse_1970s_drivein: {
    id: 'grindhouse_1970s_drivein',
    name: 'Quentin Tarantino 1970s Grindhouse Drive-In',
    category: 'distortion_glitch',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: '35mm projection gate weave, emulsion scratches and dirty splices',
    filters: [
      'noise=alls=18:allf=t',
      'colorbalance=rs=0.12:gs=0.08:bs=-0.1:rh=-0.05:gh=0.08:bh=-0.05',
      'eq=contrast=1.3:saturation=0.8',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 168. La La Land Twilight Magic Hour Royal Blue & Gold
  lalaland_twilight_hour: {
    id: 'lalaland_twilight_hour',
    name: 'La La Land Hollywood Hills Twilight Magic Hour',
    category: 'color_filter',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Deep royal violet twilight sky with incandescent warm streetlamp glows',
    filters: [
      'colorbalance=rs=0.05:gs=-0.05:bs=0.28:rh=0.32:gh=0.18:bh=-0.2',
      'eq=contrast=1.18:saturation=1.4',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 169. Cyberpunk HUD Target Lock-On Overlay
  cyber_hud_target_lock: {
    id: 'cyber_hud_target_lock',
    name: 'Military Sci-Fi HUD Reticle Target Lock',
    category: 'layout_composition',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Crosshair targeting box with telemetry readout brackets in neon cyan',
    filters: [
      'drawbox=x=(iw-280)/2:y=(ih-280)/2:w=280:h=280:color=cyan@0.7:t=2',
      'drawbox=x=(iw-30)/2:y=(ih-30)/2:w=30:h=30:color=red@0.8:t=fill',
      'colorbalance=rm=-0.08:gm=0.12:bm=0.25',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 170. Tokyo Drift Neo-Shinjuku Rain Streaks
  tokyo_drift_rain_reflection: {
    id: 'tokyo_drift_rain_reflection',
    name: 'Tokyo Fast & Furious Neon Asphalt Reflection',
    category: 'color_filter',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Wet asphalt reflection contrast with ultra-vivid green & red neon bleed',
    filters: [
      'colorbalance=rh=0.25:gh=-0.1:bh=0.15:rs=-0.15:gs=0.1:bs=0.22',
      'eq=contrast=1.38:saturation=1.45',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 171. Vintage Kodak Kodachrome 64 Slide Film
  kodachrome_64_classic_slide: {
    id: 'kodachrome_64_classic_slide',
    name: '1970s National Geographic Kodachrome 64',
    category: 'color_filter',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Legendary Paul Simon Kodachrome: rich saturated primary reds and distinct sky blues',
    filters: [
      'colorbalance=rs=0.08:gs=-0.02:bs=-0.06:rh=0.2:gh=0.05:bh=-0.1',
      'eq=contrast=1.28:saturation=1.38',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 172. Audio: Radiohead Paranoid Android Pitch Whammy Shift
  audio_paranoid_whammy_glitch: {
    id: 'audio_paranoid_whammy_glitch',
    name: 'Radiohead Paranoid Android Glitch Pitch Shift',
    category: 'audio_voice',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Chopped bitcrushed pitch shift modulation creating alternative rock dissonance',
    filters: [
      'asetrate=44100*1.15,aresample=44100,chorus=0.7:0.9:55:0.4:0.25:2',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 173. Audio: Vintage 1950s Sun Records Rockabilly Slapback Delay
  audio_sun_records_slapback: {
    id: 'audio_sun_records_slapback',
    name: 'Elvis Sun Records 130ms Tape Slapback Echo',
    category: 'audio_voice',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Authentic 130ms tape slapback delay with single repetition and tape saturation',
    filters: [
      'aecho=0.8:0.7:130:0.4,highpass=f=120,lowpass=f=7500',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 174. Thermal Imaging Predator Vision FLIR Heatseeker
  flir_thermal_heatseeker: {
    id: 'flir_thermal_heatseeker',
    name: 'Predator FLIR Military Heatseeker Vision',
    category: 'distortion_glitch',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Multi-color thermal infrared palette mapping brightness to blue, green, yellow, red',
    filters: [
      'format=gbrp',
      'lutrgb=r=val*1.8:g=val*0.8:b=255-val',
      'eq=contrast=1.4',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 175. Wes Anderson Moonrise Kingdom 16mm Khaki Warmth
  moonrise_kingdom_16mm: {
    id: 'moonrise_kingdom_16mm',
    name: 'Wes Anderson Moonrise Kingdom 16mm Khaki',
    category: 'color_filter',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Camp Ivanhoe olive green, warm khaki yellow and gentle 16mm grain',
    filters: [
      'colorbalance=rm=0.15:gm=0.12:bm=-0.22:rs=0.08:gs=0.08:bs=-0.12',
      'eq=contrast=1.12:saturation=1.15',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 176. Cyber Hologram Scan Line Interlace Glitch
  hologram_interlace_beam: {
    id: 'hologram_interlace_beam',
    name: 'Star Wars Jedi Holocron Blue Transmission',
    category: 'distortion_glitch',
    difficulty: 'medium',
    engine: 'ffmpeg',
    description: 'Flickering translucent cyan hologram with horizontal scan-lines and RF jitter',
    filters: [
      'colorchannelmixer=rr=0:rg=0:rb=0:gr=0:gg=0.6:gb=0:br=0:bg=0:bb=1.2',
      'drawgrid=w=iw:h=6:t=2:c=black@0.5',
      'eq=contrast=1.35',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 177. Audio: Deep Sub-Bass 808 Trap Saturation Tube Distortion
  audio_808_trap_tube_drive: {
    id: 'audio_808_trap_tube_drive',
    name: 'Metro Boomin 808 Heavy Tube Drive Saturation',
    category: 'audio_voice',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Harmonic overtone saturation driving low-end 40-90Hz without muddiness',
    filters: [
      'bass=g=8:f=60:w=0.5,firequalizer=gain_entry=\'entry(40,10);entry(100,6);entry(200,-3)\'',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 178. Christopher Nolan Dark Knight IMAX 35mm Bleed
  dark_knight_imax_chicago: {
    id: 'dark_knight_imax_chicago',
    name: 'The Dark Knight Gotham City Steel & Slate Blue',
    category: 'color_filter',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Wally Pfister cool steel blue shadows with neutral specular city building highlights',
    filters: [
      'colorbalance=rs=-0.12:gs=-0.04:bs=0.22:rm=-0.08:gm=-0.02:bm=0.14',
      'eq=contrast=1.3:saturation=0.9',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 179. Cyber Surveillance Thermal Night Hunter FLIR
  night_hunter_infrared_gen3: {
    id: 'night_hunter_infrared_gen3',
    name: 'Gen-3 Military Phosphor White-Hot Night Vision',
    category: 'lighting_optics',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Ultra-sensitive monochrome white-hot thermal night vision with edge glow',
    filters: [
      'format=gray',
      'unsharp=7:7:1.8:7:7:1.2',
      'noise=alls=14:allf=t',
      'eq=contrast=1.5:brightness=0.08',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },

  // 180. Apple Commercial Clean Studio Pure White Glow
  apple_commercial_clean_luxury: {
    id: 'apple_commercial_clean_luxury',
    name: 'Cupertino Industrial Design Product Commercial',
    category: 'lighting_optics',
    difficulty: 'easy',
    engine: 'ffmpeg',
    description: 'Immaculate aluminum metallic sheen, pristine neutral whites and studio softbox bloom',
    filters: [
      'eq=contrast=1.12:brightness=0.04:saturation=1.08',
      'unsharp=3:3:0.6:3:3:0.2',
    ],
    supportsBatch: true,
    requiresFaceTracking: false,
  },
};
