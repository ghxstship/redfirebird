/**
 * Home Ports — the four GHXSTSHIP offices.
 * Each gets a /locations/<slug> page with LocalBusiness schema.
 */

export type Location = {
  slug: string;
  city: string;
  region: string;       // FL, NY, IL, CA
  country: string;
  isHQ: boolean;
  tag: string;          // "Headquarters" | "Office"
  rankName: string;     // Flagship / North Atlantic / Midwest / Pacific
  areaServed: string;
  heroSplit: [string, string];
  eyebrow: string;
  answer: string;       // the citable line for the city
  programmingNote: string;
  leadsDestinations: string[]; // slugs
  keyVoyageSlugs: string[];
  titleSEO: string;
  metaDesc: string;
};

export const LOCATIONS: Location[] = [
  {
    slug: "miami",
    city: "Miami",
    region: "FL",
    country: "US",
    isHQ: true,
    tag: "Headquarters",
    rankName: "Flagship Home Port",
    areaServed: "Southeast US, Latin America & Caribbean",
    heroSplit: ["Miami", "Headquarters"],
    eyebrow: "Home Port · Flagship",
    answer:
      "GHXSTSHIP's Miami headquarters is the flagship home port for festival production, brand activations, and immersive experiences across the Southeast US, Latin America, and the Caribbean. Miami leads our work in Miami Music Week, Art Basel, Formula 1, and the Latin entertainment industry.",
    programmingNote:
      "Our flagship home port. The base for experiential production across the Southeast, Latin America, and the Caribbean — and home to festivals, immersive experiences, and brand activations in one of the world's fastest-growing event markets.",
    leadsDestinations: ["festival-production", "immersive-experiences", "brand-activations", "premium-hospitality", "water-motorsports"],
    keyVoyageSlugs: ["salvage-city-supper-club", "polymarket-grocery-store", "red-bull-unforeseen-motel", "factory-town", "black-coffee-race-track"],
    titleSEO: "Miami Experiential Production — GHXSTSHIP Headquarters",
    metaDesc: "GHXSTSHIP's Miami headquarters produces festivals, brand activations, immersive experiences, and motorsports production across Florida, Latin America, and the Caribbean. Venture Beyond.",
  },
  {
    slug: "new-york",
    city: "New York",
    region: "NY",
    country: "US",
    isHQ: false,
    tag: "Office",
    rankName: "North Atlantic Port",
    areaServed: "Northeast US",
    heroSplit: ["New York", "Office"],
    eyebrow: "Home Port · North Atlantic",
    answer:
      "GHXSTSHIP's New York office is our Northeast home port — producing brand activations, launches, immersive experiences, and concert and tour production across the country's most demanding event market.",
    programmingNote:
      "Our Northeast crew — producing brand activations, launches, and immersive experiences across the country's most demanding event market.",
    leadsDestinations: ["brand-activations", "luxury-retail", "immersive-experiences", "concert-tour-production"],
    keyVoyageSlugs: [],
    titleSEO: "New York Experiential Production — GHXSTSHIP",
    metaDesc: "GHXSTSHIP's New York office produces brand activations, luxury retail, immersive experiences, and concerts and tours across the Northeast US. Venture Beyond.",
  },
  {
    slug: "chicago",
    city: "Chicago",
    region: "IL",
    country: "US",
    isHQ: false,
    tag: "Office",
    rankName: "Midwest Port",
    areaServed: "Midwest US",
    heroSplit: ["Chicago", "Office"],
    eyebrow: "Home Port · Midwest",
    answer:
      "GHXSTSHIP's Chicago office is our Midwest home port — producing festivals, corporate experiences, live-music production, and brand activations across the central US.",
    programmingNote:
      "Our Midwest base — festival, corporate, and live-music production across the central US.",
    leadsDestinations: ["festival-production", "concert-tour-production", "brand-activations"],
    keyVoyageSlugs: [],
    titleSEO: "Chicago Experiential Production — GHXSTSHIP",
    metaDesc: "GHXSTSHIP's Chicago office produces festivals, concerts and tours, and brand activations across the Midwest US. Venture Beyond.",
  },
  {
    slug: "los-angeles",
    city: "Los Angeles",
    region: "CA",
    country: "US",
    isHQ: false,
    tag: "Office",
    rankName: "Pacific Port",
    areaServed: "West Coast US",
    heroSplit: ["Los Angeles", "Office"],
    eyebrow: "Home Port · Pacific",
    answer:
      "GHXSTSHIP's Los Angeles office is our West Coast home port — producing entertainment, product launches, TV/film and broadcast, and motorsports production across the Pacific region.",
    programmingNote:
      "Our West Coast crew — entertainment, product launches, TV/film & broadcast, and motorsports production.",
    leadsDestinations: ["tv-film-broadcast", "brand-activations", "luxury-retail", "water-motorsports", "concert-tour-production"],
    keyVoyageSlugs: ["patron-cristalino-becky-g"],
    titleSEO: "Los Angeles Experiential Production — GHXSTSHIP",
    metaDesc: "GHXSTSHIP's Los Angeles office produces TV, film and broadcast, brand activations, luxury retail launches, and motorsports production across the West Coast US. Venture Beyond.",
  },
];

export const LOCATION_BY_SLUG: Record<string, Location> =
  Object.fromEntries(LOCATIONS.map((l) => [l.slug, l]));
