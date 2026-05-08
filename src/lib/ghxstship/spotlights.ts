/**
 * Saga + Spotlight system — the "Marvel-Studios-dynamic" layer above the
 * locked GHXSTSHIP master frame. Each spotlight is a stable token slug
 * with primary / secondary / accent values that overlay onto the base
 * green palette via `[data-spotlight="<slug>"]` in theme/index.css.
 *
 * Sagas group spotlights into multi-year arcs. Each delivered Issue
 * carries both a spotlight (visual identity) and a saga affiliation
 * (narrative arc).
 *
 * Convention: every spotlight token must pass WCAG AA against white text
 * for the primary, and against black text for the accent. Variant shades
 * live in the same hue family so overlays read as "different season,
 * same studio" — never "different brand."
 */

export type SagaSlug = "carnival" | "festival" | "stadium" | "theatre" | "park" | "house";
export type SpotlightSlug =
  | "ghxstship"
  | "carnival-mmw"
  | "carnival-ultra"
  | "festival-edc"
  | "festival-acl"
  | "festival-sxsw"
  | "stadium-superbowl"
  | "stadium-f1-miami"
  | "stadium-worldcup"
  | "theatre-broadway"
  | "park-disney"
  | "park-universal"
  | "house-olympic"
  | "house-paddockclub";

export interface Saga {
  slug: SagaSlug;
  name: string;
  arc: string;
  yearsActive: string;
  spotlights: SpotlightSlug[];
}

export interface Spotlight {
  slug: SpotlightSlug;
  saga: SagaSlug | null;
  /** Display name shown in case-study chrome and the brand page. */
  name: string;
  /** One-line positioning. */
  blurb: string;
  /** Hex tokens — overlay onto the GHXSTSHIP base palette. */
  primary: string;
  secondary: string;
  accent: string;
  /** Computed contrast hint — white text on primary should pass AA. */
  onPrimary: "white" | "ink";
}

/**
 * SAGAS — the multi-year arcs. Carnival is Miami / Caribbean spectacle,
 * Festival is the EDM / lifestyle festival circuit, Stadium is mega
 * sports, etc. Every issue eventually slots into one.
 */
export const SAGAS: Saga[] = [
  {
    slug: "carnival",
    name: "Carnival Saga",
    arc: "Miami spectacle, Caribbean rhythm. Late-winter and spring activations centred on Art Basel, Miami Music Week, Ultra, and the Caribbean cruise corridor.",
    yearsActive: "2024 →",
    spotlights: ["carnival-mmw", "carnival-ultra"],
  },
  {
    slug: "festival",
    name: "Festival Saga",
    arc: "The North-American festival circuit. Multi-stage builds, touring scenic systems, RFID credentialing, sustainability-reported.",
    yearsActive: "2024 →",
    spotlights: ["festival-edc", "festival-acl", "festival-sxsw"],
  },
  {
    slug: "stadium",
    name: "Stadium Saga",
    arc: "Mega sporting hospitality. Federation accreditation, clean-zone enforcement, multi-week build inside controlled-access perimeters.",
    yearsActive: "2025 →",
    spotlights: ["stadium-superbowl", "stadium-f1-miami", "stadium-worldcup"],
  },
  {
    slug: "theatre",
    name: "Theatre Saga",
    arc: "Theatrical and dance production. Tech-week rigour, calling-the-show discipline, fly-system integration.",
    yearsActive: "2025 →",
    spotlights: ["theatre-broadway"],
  },
  {
    slug: "park",
    name: "Park Saga",
    arc: "Theme park attractions and immersive worlds. Animatronic integration, ride show control, themed pyrotechnics.",
    yearsActive: "2026 →",
    spotlights: ["park-disney", "park-universal"],
  },
  {
    slug: "house",
    name: "House Saga",
    arc: "Premium hospitality houses adjacent to mega events. Olympic Hospitality Houses, F1 Paddock Club, Masters Hospitality Village.",
    yearsActive: "2026 →",
    spotlights: ["house-olympic", "house-paddockclub"],
  },
];

/**
 * SPOTLIGHTS — the visual identities. The first entry, `ghxstship`, is
 * the master frame (Material green-700/800/500). Every other entry is a
 * variant in the same hue family that overlays the base for a single
 * issue, page, or saga showcase.
 */
export const SPOTLIGHTS: Spotlight[] = [
  {
    slug: "ghxstship",
    saga: null,
    name: "GHXSTSHIP Master",
    blurb: "The locked master frame. Material green-700/800/500. Cream paper, ink line, brutal shadow.",
    primary: "#2e7d32",
    secondary: "#1b5e20",
    accent: "#4caf50",
    onPrimary: "white",
  },
  {
    slug: "carnival-mmw",
    saga: "carnival",
    name: "Miami Music Week",
    blurb: "Hot-pink Caribbean spectacle. Salsa-fluorescent dance-floor energy.",
    primary: "#c2185b",
    secondary: "#880e4f",
    accent: "#ec407a",
    onPrimary: "white",
  },
  {
    slug: "carnival-ultra",
    saga: "carnival",
    name: "Ultra Music Festival",
    blurb: "Bayfront-blue late-night hour. Cool, electric, downtown.",
    primary: "#1565c0",
    secondary: "#0d47a1",
    accent: "#42a5f5",
    onPrimary: "white",
  },
  {
    slug: "festival-edc",
    saga: "festival",
    name: "EDC Las Vegas",
    blurb: "Desert-orange dawn. Mojave horizon, neon dust, open sky.",
    primary: "#e65100",
    secondary: "#bf360c",
    accent: "#ff9800",
    onPrimary: "white",
  },
  {
    slug: "festival-acl",
    saga: "festival",
    name: "Austin City Limits",
    blurb: "Hill-country gold. Live oak, slow afternoon, Texas sundown.",
    primary: "#b8860b",
    secondary: "#8b6914",
    accent: "#daa520",
    onPrimary: "white",
  },
  {
    slug: "festival-sxsw",
    saga: "festival",
    name: "SXSW",
    blurb: "Indie-purple keynote. Convention floors and creek-side showcases.",
    primary: "#6a1b9a",
    secondary: "#4a148c",
    accent: "#ab47bc",
    onPrimary: "white",
  },
  {
    slug: "stadium-superbowl",
    saga: "stadium",
    name: "Super Bowl",
    blurb: "Vince-Lombardi chrome. Half-time scale, broadcast-grade everything.",
    primary: "#37474f",
    secondary: "#263238",
    accent: "#78909c",
    onPrimary: "white",
  },
  {
    slug: "stadium-f1-miami",
    saga: "stadium",
    name: "F1 Miami GP",
    blurb: "Hard-Rock crimson. Paddock-club hospitality, race-week velocity.",
    primary: "#b71c1c",
    secondary: "#7f0000",
    accent: "#e53935",
    onPrimary: "white",
  },
  {
    slug: "stadium-worldcup",
    saga: "stadium",
    name: "FIFA World Cup",
    blurb: "Global-tournament emerald. Eleven host cities, one rights-holder posture.",
    primary: "#00695c",
    secondary: "#004d40",
    accent: "#26a69a",
    onPrimary: "white",
  },
  {
    slug: "theatre-broadway",
    saga: "theatre",
    name: "Broadway",
    blurb: "Theatre-district burgundy. Fly-system rigging, calling-the-show discipline.",
    primary: "#6d1b1b",
    secondary: "#4a0e0e",
    accent: "#a83232",
    onPrimary: "white",
  },
  {
    slug: "park-disney",
    saga: "park",
    name: "Disney Parks",
    blurb: "Imagineering teal. Animatronic integration, themed pyrotechnics, park-day cadence.",
    primary: "#00838f",
    secondary: "#005662",
    accent: "#26c6da",
    onPrimary: "white",
  },
  {
    slug: "park-universal",
    saga: "park",
    name: "Universal Parks",
    blurb: "Fan-IP cobalt. Ride show control, walkthrough environments, themed retail.",
    primary: "#1a237e",
    secondary: "#0d1257",
    accent: "#5c6bc0",
    onPrimary: "white",
  },
  {
    slug: "house-olympic",
    saga: "house",
    name: "Olympic Hospitality House",
    blurb: "Federation-bronze. Multi-week build inside clean-zone perimeter, NOC-tier service.",
    primary: "#8d6e63",
    secondary: "#5d4037",
    accent: "#bcaaa4",
    onPrimary: "white",
  },
  {
    slug: "house-paddockclub",
    saga: "house",
    name: "F1 Paddock Club",
    blurb: "Chrome-graphite race-weekend luxury. Grid-walk access, Mosaic-tier hospitality.",
    primary: "#424242",
    secondary: "#212121",
    accent: "#9e9e9e",
    onPrimary: "white",
  },
];

export const SAGA_BY_SLUG = Object.fromEntries(SAGAS.map((s) => [s.slug, s])) as Record<SagaSlug, Saga>;
export const SPOTLIGHT_BY_SLUG = Object.fromEntries(SPOTLIGHTS.map((s) => [s.slug, s])) as Record<
  SpotlightSlug,
  Spotlight
>;

export function spotlightsForSaga(saga: SagaSlug): Spotlight[] {
  return SPOTLIGHTS.filter((s) => s.saga === saga);
}
