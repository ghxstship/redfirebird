/**
 * Voyages — the Archives. Real projects, RRR codes, case study detail per slug.
 * Every voyage gets its own page at /voyages/<slug> with CreativeWork JSON-LD.
 */

import type { Destination } from "./destinations";

export type VoyageStatus = "ontime" | "departed" | "boarding";

export type Voyage = {
  slug: string;
  code: string;              // RRR 312
  name: string;              // Black Coffee at the Race Track
  meta: string;              // Concert Experience · Miami Music Week · Club Space
  year: string;
  date?: string;             // ISO month for schema (e.g. "2026-03")
  status: VoyageStatus;
  statusLabel: string;
  destinationSlug: string;   // links to a Destination
  client?: string;           // Insomniac
  venue?: string;            // Club Space, Miami
  city: string;
  region?: string;           // FL, NY, CA, NV
  scope: string;             // Full Voyage · 8 Phases
  about: string;             // schema "about"
  // Detail page content
  heroSplit: [string, string];
  answer: string;            // citable summary paragraph
  challenge?: string;
  approach?: string;
  result?: string;
  pull?: string;             // pull-quote
  results?: { v: string; k: string }[]; // 4 KPI tiles
  keywords?: string[];
};

export const VOYAGES: Voyage[] = [
  {
    slug: "black-coffee-race-track",
    code: "RRR 312",
    name: "Black Coffee at the Race Track",
    meta: "Concert Experience · Miami Music Week · Club Space",
    year: "2026",
    date: "2026-03",
    status: "ontime",
    statusLabel: "Arrived",
    destinationSlug: "concert-tour-production",
    client: "Black Coffee",
    venue: "Club Space",
    city: "Miami",
    region: "FL",
    scope: "Full Voyage · 8 Phases",
    about: "Concert experience production",
    heroSplit: ["Black Coffee", "at the Race Track"],
    answer:
      "Black Coffee at the Race Track was a Miami Music Week concert experience produced by GHXSTSHIP at Club Space, Miami in March 2026 — a single-night activation built around a marathon DJ set, custom scenic, and a full technical production package.",
    challenge:
      "A single-night Miami Music Week activation inside an already-operating club venue, on a tight technical and creative window. The brief was a fully-realized live show that felt like a destination, with broadcast-quality production for the headline set and zero overrun on the venue's nightly programming.",
    approach:
      "GHXSTSHIP ran the full eight-phase lifecycle compressed against the Music Week clock. Discovery and R&D pinned the venue's technical envelope; Creative Design landed a scenic language that matched the artist's world. Compliance and Risk cleared the build to venue and city requirements; Production and Build pre-fabricated the package for a same-day install. Operations sequenced load-in around the venue's calendar; Live Activation ran the night with broadcast-grade audio, lighting, and video; Strike returned the room clean by sunrise.",
    result:
      "Sell-through capacity, broadcast-quality capture for the artist team, and a Music Week activation that proved the venue could host a destination concert experience without disrupting its base programming.",
    pull: "A single-night activation that read as a tour stop, not a guest spot.",
    keywords: ["concert experience", "Miami Music Week", "Club Space", "Black Coffee"],
  },
  {
    slug: "polymarket-grocery-store",
    code: "RRR 226",
    name: "Polymarket Grocery Store",
    meta: "Brand Activation · Miami",
    year: "2026",
    date: "2026-02",
    status: "ontime",
    statusLabel: "Arrived",
    destinationSlug: "brand-activations",
    client: "Polymarket",
    city: "Miami",
    region: "FL",
    scope: "Full Voyage · 8 Phases",
    about: "Brand activation",
    heroSplit: ["Polymarket", "Grocery Store"],
    answer:
      "The Polymarket Grocery Store was a brand activation produced by GHXSTSHIP in Miami in February 2026 — a fully-built retail-style environment that turned prediction-market mechanics into a physical, shop-able experience.",
    challenge:
      "Polymarket needed a Miami activation that translated an online prediction-market product into a physical environment guests could walk through, browse, and remember — credible to a finance-curious audience and shareable enough to earn social.",
    approach:
      "GHXSTSHIP ran the full eight-phase lifecycle. Discovery defined the metaphor (groceries as predictions); Creative Design built a complete retail visual system with shelving, signage, and packaging. Production and Build fabricated the scenic package; Operations sequenced staffing and stock; Live Activation ran the floor; Strike returned the space.",
    result:
      "A high-share-volume brand moment that turned a financial product into a physical destination — and gave Polymarket a repeatable activation format.",
    pull: "Turn a prediction market into a place you can walk through.",
    keywords: ["brand activation", "experiential marketing", "Polymarket", "Miami"],
  },
  {
    slug: "salvage-city-supper-club",
    code: "RRR 052",
    name: "Salvage City Supper Club",
    meta: "Immersive Experience · Club Space · Miami",
    year: "2025",
    date: "2025-05",
    status: "ontime",
    statusLabel: "Arrived",
    destinationSlug: "immersive-experiences",
    client: "Insomniac",
    venue: "Club Space",
    city: "Miami",
    region: "FL",
    scope: "Full Voyage · 8 Phases",
    about: "Immersive experience production",
    heroSplit: ["Salvage City", "Supper Club"],
    answer:
      "Salvage City Supper Club was a multi-week immersive supper-club experience produced by GHXSTSHIP at Club Space, Miami across 2025 — a narrative environment built around themed dinner nights, full theatrical scenic, custom soundscape, and a senior production crew.",
    challenge:
      "Insomniac needed an immersive supper-club experience that could live inside Club Space, Miami — a venue with its own identity, technical constraints, and an audience that has seen everything. The brief: a fully-realized world that felt discovered, not built, and that could be installed, run, and struck without disrupting the venue's ongoing programming.",
    approach:
      "GHXSTSHIP ran the full eight-phase production lifecycle. Discovery and R&D defined the narrative world and tested it against the venue. Creative Design delivered the scenic language; Compliance & Risk cleared the build against venue and fire-code requirements. Production & Build fabricated a modular scenic package designed for the load-in window. Operations & Logistics sequenced crew and freight around the venue's calendar. Live Activation ran the room nightly; Strike returned the space clean — with a full reconciliation and analytics report.",
    result:
      "Salvage City is now a repeatable GHXSTSHIP format — proof that an immersive world can be delivered to a working venue without compromise.",
    pull: "A world that felt discovered, not built — installed, run, and struck on the venue's clock.",
    keywords: ["immersive experience", "supper club", "Club Space", "Miami", "experiential production"],
  },
  {
    slug: "patron-cristalino-becky-g",
    code: "RRR 108",
    name: "PATRÓN Cristalino × Becky G",
    meta: "Product Launch · Los Angeles",
    year: "2024",
    date: "2024-09",
    status: "departed",
    statusLabel: "Logged",
    destinationSlug: "brand-activations",
    client: "PATRÓN",
    city: "Los Angeles",
    region: "CA",
    scope: "Full Voyage · 8 Phases",
    about: "Product launch · brand activation",
    heroSplit: ["PATRÓN Cristalino", "× Becky G"],
    answer:
      "The PATRÓN Cristalino × Becky G product launch was a brand activation produced by GHXSTSHIP in Los Angeles in September 2024 — a celebrity-anchored launch environment built to translate a premium tequila product into a physical, broadcast-ready cultural moment.",
    challenge:
      "PATRÓN needed a Los Angeles product launch that introduced Cristalino through a culturally credible artist partnership, with broadcast-quality capture and a guest experience that felt like a destination — all on the launch window.",
    approach:
      "Full eight-phase voyage. Creative Design landed the visual language around the partnership; Production & Build delivered the scenic and bar program; Operations ran a tight talent and guest-relations operation; Live Activation ran the night with broadcast-grade capture.",
    result:
      "A celebrity launch moment that read as cultural, not transactional — and a capture package the brand redeployed across paid and earned channels.",
    keywords: ["product launch", "celebrity partnership", "PATRÓN", "Becky G", "Los Angeles"],
  },
  {
    slug: "heineken-turn-4-nightclub",
    code: "RRR 023",
    name: "Heineken Turn 4 Nightclub",
    meta: "Motorsports · F1 Las Vegas Grand Prix",
    year: "2024",
    date: "2024-11",
    status: "departed",
    statusLabel: "Logged",
    destinationSlug: "sporting-events",
    client: "Heineken",
    venue: "F1 Las Vegas Grand Prix",
    city: "Las Vegas",
    region: "NV",
    scope: "Full Voyage · 8 Phases",
    about: "Motorsports brand activation",
    heroSplit: ["Heineken", "Turn 4 Nightclub"],
    answer:
      "Heineken Turn 4 Nightclub was a motorsports activation produced by GHXSTSHIP at the F1 Las Vegas Grand Prix in November 2024 — a fully-built trackside nightclub-style hospitality environment integrated with the race weekend.",
    challenge:
      "Heineken needed a Las Vegas Grand Prix activation that turned a single corner of the circuit into a destination hospitality experience — broadcast-credible, premium, and operational across the race weekend.",
    approach:
      "Full eight-phase voyage. Creative Design landed the nightclub language; Compliance & Risk cleared the trackside build with the circuit; Production fabricated the scenic and bar program; Operations ran hospitality and staffing across the weekend; Live Activation handled show calling and guest flow.",
    result:
      "A trackside hospitality program that became one of the race weekend's most-shared moments — and a repeatable format for the next series of grand-prix activations.",
    keywords: ["F1 Las Vegas", "Heineken", "motorsports activation", "trackside hospitality"],
  },
  {
    slug: "red-bull-unforeseen-motel",
    code: "RRR 311",
    name: "Red Bull Unforeseen Motel",
    meta: "Brand Activation · III Points · Miami",
    year: "2023",
    date: "2023-10",
    status: "departed",
    statusLabel: "Logged",
    destinationSlug: "brand-activations",
    client: "Red Bull",
    venue: "III Points",
    city: "Miami",
    region: "FL",
    scope: "Full Voyage · 8 Phases",
    about: "Brand activation",
    heroSplit: ["Red Bull", "Unforeseen Motel"],
    answer:
      "Red Bull Unforeseen Motel was a brand activation produced by GHXSTSHIP at III Points festival in Miami in October 2023 — a multi-room scenic environment that turned a festival footprint into a fully-realized motel destination.",
    challenge:
      "Red Bull needed a III Points activation that read as a destination inside the festival footprint — not a brand booth, but a place worth navigating to and through.",
    approach:
      "Eight-phase voyage compressed against the festival schedule. Creative Design built the multi-room motel language; Production fabricated the scenic on a festival timeline; Operations ran staffing, guest flow, and on-site brand integration; Strike returned the footprint clean.",
    result:
      "A multi-room festival activation that earned share-of-voice across the weekend — and proved Red Bull could anchor a destination inside a third-party festival.",
    keywords: ["Red Bull", "III Points", "Miami festival", "brand activation"],
  },
  {
    slug: "the-vanguard-orlando",
    code: "RRR 014",
    name: "The Vanguard Orlando",
    meta: "Venue Operations · Orlando",
    year: "2024",
    date: "2024-01",
    status: "departed",
    statusLabel: "Logged",
    destinationSlug: "concert-tour-production",
    venue: "The Vanguard",
    city: "Orlando",
    region: "FL",
    scope: "Operations Charter",
    about: "Venue operations",
    heroSplit: ["The Vanguard", "Orlando"],
    answer:
      "The Vanguard Orlando is a live-music venue operated under a GHXSTSHIP operations charter — covering programming, technical production, hospitality, and front-of-house operations through 2024.",
    challenge:
      "A live-music venue needed a single accountable production and operations partner across booking, technical, hospitality, and FOH — without rebuilding its in-house team.",
    approach:
      "Operations vertical engagement. Phase 06 (Operations & Logistics) and Phase 07 (Live Activation) ran continuously; ATLVS managed scheduling, COMPVSS managed crew and certifications, GVTEWAY ran ticketing.",
    result:
      "A working live-music venue under a single operator's accountability, with the data and analytics layer to make booking and programming decisions on real numbers.",
    keywords: ["venue operations", "Orlando", "live music venue", "operations charter"],
  },
  {
    slug: "factory-town",
    code: "RRR 009",
    name: "Factory Town",
    meta: "Venue Operations · Miami",
    year: "2023",
    date: "2023-06",
    status: "departed",
    statusLabel: "Logged",
    destinationSlug: "concert-tour-production",
    venue: "Factory Town",
    city: "Miami",
    region: "FL",
    scope: "Operations Charter",
    about: "Venue operations",
    heroSplit: ["Factory", "Town"],
    answer:
      "Factory Town Miami is a multi-stage live-music and event venue operated under a GHXSTSHIP operations charter — covering programming, technical production, hospitality, and venue operations through 2023.",
    challenge:
      "A multi-stage Miami venue needed a single accountable production and operations partner across booking, technical, hospitality, and FOH operations.",
    approach:
      "Operations vertical engagement. Phase 06 and Phase 07 ran continuously across multiple stages; full crew, vendor, and compliance posture on a Miami operating cadence.",
    result:
      "A working multi-stage Miami venue under a single operator's accountability — and one of the city's defining live-music destinations.",
    keywords: ["venue operations", "Miami music", "Factory Town", "operations charter"],
  },
  {
    slug: "formula-1-las-vegas",
    code: "RRR 001",
    name: "Formula 1 Las Vegas Grand Prix",
    meta: "Motorsports · Las Vegas",
    year: "2023",
    date: "2023-11",
    status: "departed",
    statusLabel: "Logged",
    destinationSlug: "sporting-events",
    venue: "Las Vegas Strip Circuit",
    city: "Las Vegas",
    region: "NV",
    scope: "Multi-vertical",
    about: "Motorsports production",
    heroSplit: ["Formula 1", "Las Vegas Grand Prix"],
    answer:
      "The Formula 1 Las Vegas Grand Prix was a motorsports production engagement led by GHXSTSHIP at the inaugural 2023 race weekend — covering trackside activations, hospitality programming, and broadcast-ready staging across the circuit.",
    challenge:
      "An inaugural F1 weekend on the Las Vegas Strip needed activation, hospitality, and broadcast-ready production at multiple footprints simultaneously — on a circuit that didn't exist the week before.",
    approach:
      "Multi-vertical engagement. Production built trackside and paddock activations; Operations ran logistics across multiple sites; Technology powered crew scheduling, vendor coordination, and live operations across the weekend.",
    result:
      "A defining weekend for the F1 Las Vegas franchise — and the engagement that opened GHXSTSHIP's motorsports practice.",
    keywords: ["Formula 1", "Las Vegas Grand Prix", "motorsports production", "trackside activation"],
  },
];

export const VOYAGE_BY_SLUG: Record<string, Voyage> =
  Object.fromEntries(VOYAGES.map((v) => [v.slug, v]));

// Map RRR code → voyage slug (for the FIDS to resolve href quickly)
export const VOYAGE_BY_CODE: Record<string, Voyage> =
  Object.fromEntries(VOYAGES.map((v) => [v.code, v]));

export function voyagesByDestination(slug: string): Voyage[] {
  return VOYAGES.filter((v) => v.destinationSlug === slug);
}

export function voyagesByCity(city: string): Voyage[] {
  return VOYAGES.filter((v) => v.city.toLowerCase() === city.toLowerCase());
}
