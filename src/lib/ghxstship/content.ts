/**
 * GHXSTSHIP — single source of content for the Spaceport home page.
 * "Venture Beyond." Production · Operations · Technology.
 */

import { DESTINATION_CARDS } from "./destinations";

export const ORG = {
  name: "GHXSTSHIP",
  spaced: "G H X S T S H I P",
  legal: "G H X S T S H I P Industries LLC",
  slogan: "Venture Beyond",
  email: "hello@ghxstship.xyz",
  url: "https://ghxstship.xyz/",
  hq: "Miami",
  offices: ["Miami", "New York", "Chicago", "Los Angeles"] as const,
  foundingDate: "2022",
} as const;

export const PRIMARY_NAV = [
  { label: "Destinations", href: "/#destinations" },
  { label: "Charters", href: "/#engagements" },
  { label: "Itinerary", href: "/#itinerary" },
  { label: "Bridge", href: "/#instruments" },
  { label: "Crew", href: "/crew" },
  { label: "Logs", href: "/logs" },
  { label: "Archives", href: "/voyages" },
] as const;

export type BookingStep = {
  n: string;
  label: string;
  title: string;
  href: string;
  cta?: boolean;
};
export const BOOKING_STEPS: BookingStep[] = [
  { n: "01", label: "Step One", title: "Choose Destination", href: "#destinations" },
  { n: "02", label: "Step Two", title: "Pick Your Charter", href: "#engagements" },
  { n: "03", label: "Step Three", title: "Chart Itinerary", href: "#itinerary" },
  { n: "04", label: "Step Four", title: "Meet the Crew", href: "#crew" },
  { n: "05", label: "Step Five", title: "Launch", href: "#book", cta: true },
];

// Trust bar — each brand now links to a representative voyage where applicable
export type TrustedBrand = { label: string; href: string };
export const TRUSTED: TrustedBrand[] = [
  { label: "RED BULL", href: "/voyages/red-bull-unforeseen-motel" },
  { label: "HEINEKEN", href: "/voyages/heineken-turn-4-nightclub" },
  { label: "FORMULA 1", href: "/voyages/formula-1-las-vegas" },
  { label: "POLYMARKET", href: "/voyages/polymarket-grocery-store" },
  { label: "PATRÓN", href: "/voyages/patron-cristalino-becky-g" },
  { label: "INSOMNIAC", href: "/voyages/salvage-city-supper-club" },
] as const;

export const MARQUEE = [
  "FESTIVALS",
  "CONCERTS & TOURS",
  "BRAND ACTIVATIONS",
  "IMMERSIVE EXPERIENCES",
  "SPORTING EVENTS",
  "TV · FILM · BROADCAST",
  "HEALTH & WELLNESS",
  "PREMIUM HOSPITALITY",
  "LUXURY RETAIL",
  "WATER & MOTORSPORTS",
] as const;

// Re-export destination cards (the home grid)
export { DESTINATION_CARDS };
export type { Destination, DestinationCard } from "./destinations";
export { DESTINATIONS, DESTINATION_BY_SLUG } from "./destinations";

export const CHARTERS_HOME = [
  { id: "Local Service", title: "Full Voyage", tag: "All 8 stops", blurb: "All eight phases, Discovery to Strike — one crew, one charted course, total accountability.", accent: "nebula" as const, href: "/charters/full-voyage" },
  { id: "Express", title: "By Vertical", tag: "Select stops", blurb: "Charter a single vertical: Production, Operations, or Technology — plug us in where you need us.", href: "/charters/by-vertical" },
  { id: "Express", title: "À La Carte", tag: "Your stops", blurb: "Select individual lifecycle phases or services. A custom charter for exactly what your voyage requires.", href: "/charters/a-la-carte" },
];

export type ItineraryStop = { n: string; name: string; sub: string; term?: boolean; slug: string };
export const ITINERARY: ItineraryStop[] = [
  { n: "01", name: "Discovery", sub: "Board · Consult", term: true, slug: "discovery" },
  { n: "02", name: "R&D", sub: "Feasibility", slug: "research-development" },
  { n: "03", name: "Design", sub: "Direction", slug: "creative-design" },
  { n: "04", name: "Compliance", sub: "Eng · Safety", slug: "compliance-risk" },
  { n: "05", name: "Build", sub: "Fabrication", slug: "production-build" },
  { n: "06", name: "Operations", sub: "Logistics", slug: "operations-logistics" },
  { n: "07", name: "Activation", sub: "Showtime", slug: "live-activation" },
  { n: "08", name: "Strike", sub: "Arrive · Celebrate", term: true, slug: "strike-post-production" },
];

export const DIFFERENCE = [
  { id: "Edge 01", title: "End to End", tag: "One accountable crew", blurb: "We own all eight phases, Discovery to Strike — not just the creative. One crew, one charted course, total accountability." },
  { id: "Edge 02", title: "We Build the Tech", tag: "Proprietary software", blurb: "ATLVS, COMPVSS, and GVTEWAY are built in-house — almost no agency in the category ships its own platforms." },
  { id: "Edge 03", title: "Ops as a Discipline", tag: "Not a line item", blurb: "Logistics, crew, compliance, and analytics are a full vertical — the reliability that scales from one show to fifty." },
];

export const INSTRUMENTS_HOME = [
  { id: "The Atlas", title: "ATLVS", tag: "Production & resource mgmt", blurb: "Your maps and charts — projects, resources, and budgets across the whole voyage.", href: "/bridge/atlvs" },
  { id: "The Compass", title: "COMPVSS", tag: "Workforce & crew", blurb: "Points the crew — scheduling, certifications, and workforce management for every sailing.", href: "/bridge/compvss" },
  { id: "The Gateway", title: "GVTEWAY", tag: "Ticketing & fans", blurb: "The gate audiences pass through — ticketing, fan engagement, and community.", href: "/bridge/gvteway" },
];

export const CREW_HOME = [
  { rank: "Captain", title: "Executive Producer", blurb: "Owns the vision and the voyage, end to end." },
  { rank: "First Mate", title: "Production Director", blurb: "Runs the show floor and the build." },
  { rank: "Navigator", title: "Project Management", blurb: "Charts the itinerary, holds the timeline." },
  { rank: "Quartermaster", title: "Logistics & Ops", blurb: "Crew, vendors, freight, and load-in." },
  { rank: "Bosun", title: "Technical Director", blurb: "Audio, lighting, video, rigging, power." },
];

export type VoyageHomeRow = {
  code: string;
  name: string;
  meta: string;
  year: string;
  status: "ontime" | "departed" | "boarding";
  statusLabel: string;
  href: string;
};

// Re-export voyages for any caller; the home FIDS uses the simplified row type
export { VOYAGES, VOYAGE_BY_SLUG } from "./voyages";
export type { Voyage, VoyageStatus } from "./voyages";

import { VOYAGES as ALL_VOYAGES } from "./voyages";
export const VOYAGES_HOME: VoyageHomeRow[] = ALL_VOYAGES.map((v) => ({
  code: v.code,
  name: v.name,
  meta: v.meta,
  year: v.year,
  status: v.status,
  statusLabel: v.statusLabel,
  href: `/voyages/${v.slug}`,
}));

export const HISTORY = [
  { big: "14+", lbl: "Years Experience", caveat: "Cumulative across the GHXSTSHIP founding team's careers, anchoring the practice since 2022." },
  { big: "250+", lbl: "Experiences Created", caveat: "Total voyages and engagements across the team's collective production history." },
  { big: "5M+", lbl: "Memories Made", caveat: "Estimated audience attendance across produced voyages — measured at the gate." },
];

// Compass Bearings — illustrative testimonials. Replace with real client quotes.
export type Bearing = { quote: string; person: string; role: string; org: string };
export const BEARINGS: Bearing[] = [
  { quote: "One accountable crew from concept through reconciliation. We saw the wrap report before the marketing team saw the recap.", person: "—", role: "Brand Marketing Director", org: "Fortune 500 beverage brand" },
  { quote: "GHXSTSHIP runs a tighter eight-phase line than most agencies run a single brief. The phase gates are the product.", person: "—", role: "Tour Manager", org: "International touring act" },
  { quote: "We charter Operations and we sleep through load-in. That's the value.", person: "—", role: "Festival Promoter", org: "US festival series" },
];

// Press strip — illustrative. Add real placements as they come in.
export const PRESS: string[] = ["Billboard", "Mixmag", "Forbes", "Adweek", "DJ Mag"];

export const FAQS = [
  { q: "What does GHXSTSHIP do?", a: "GHXSTSHIP is a full-service experiential production, operations, and technology company headquartered in Miami, with offices in New York, Chicago, and Los Angeles. We produce festivals, concerts and tours, brand activations, immersive experiences, and sporting events through three verticals: Production, Operations, and Technology." },
  { q: "How do I work with GHXSTSHIP?", a: "Booking an experience is a five-step voyage: choose your destination, pick your engagement, chart your itinerary, meet your crew, and set sail. It starts with a consultation — Step 01." },
  { q: "How can I engage GHXSTSHIP?", a: "Three ways: a Full Voyage (all eight phases end to end), By Vertical (Production, Operations, or Technology), or À La Carte (pick individual lifecycle phases or services)." },
  { q: "What is the GHXSTSHIP production lifecycle?", a: "An eight-phase methodology — your itinerary: Project Discovery (Consultation), Research & Development, Creative Design, Compliance & Risk Management, Production & Build, Operations & Logistics, Live Activation, and Strike & Post-Production." },
  { q: "Who produces my experience?", a: "Your experience is delivered by the GHXSTSHIP Skeleton Crew — a senior team of producers, directors, technicians, and logistics specialists who stay with you from consultation to celebration." },
  { q: "What software does GHXSTSHIP build?", a: "Three platforms: ATLVS for production and resource management, COMPVSS for workforce and crew management, and GVTEWAY for ticketing, fan engagement, and community." },
  { q: "Who does GHXSTSHIP work with?", a: "We partner with brands, producers, creative directors, production directors, and project managers across live entertainment, experiential marketing, and arts and culture — and we train the next generation of experiential producers." },
  { q: "Does GHXSTSHIP produce festivals and concert tours?", a: "Yes — festival production and concert & tour production are core destinations, alongside brand activations, immersive experiences, and sporting events." },
  { q: "How is GHXSTSHIP different from a traditional agency?", a: "Three ways: we own the full eight-phase production lifecycle end to end (not just creative), we build our own technology (ATLVS, COMPVSS, GVTEWAY), and Operations — logistics, crew, compliance, and analytics — is a dedicated vertical, not an afterthought." },
  { q: "Where is GHXSTSHIP based?", a: "GHXSTSHIP is headquartered in Miami, Florida, with offices in New York, Chicago, and Los Angeles — producing experiences worldwide since 2022." },
];

export const LOGS_HOME = [
  { date: "2026 · 05 · 28", cat: "Field Notes", title: "How the 8-phase line keeps a build on course", slug: "eight-phase-lifecycle" },
  { date: "2026 · 05 · 12", cat: "Press", title: "GHXSTSHIP charts new immersive work in Miami", slug: "new-immersive-work-miami" },
  { date: "2026 · 04 · 30", cat: "Crew Call", title: "Now boarding — join the Skeleton Crew", slug: "now-boarding-skeleton-crew" },
];

export const FOOTER_NAV = {
  destinations: [
    { label: "Festivals", href: "/destinations/festival-production" },
    { label: "Concerts & Tours", href: "/destinations/concert-tour-production" },
    { label: "Brand Activations", href: "/destinations/brand-activations" },
    { label: "Immersive Experiences", href: "/destinations/immersive-experiences" },
    { label: "Sporting Events", href: "/destinations/sporting-events" },
    { label: "TV, Film & Broadcast", href: "/destinations/tv-film-broadcast" },
    { label: "Health & Wellness", href: "/destinations/health-wellness" },
    { label: "Premium Hospitality", href: "/destinations/premium-hospitality" },
    { label: "Luxury Retail", href: "/destinations/luxury-retail" },
    { label: "Water & Motorsports", href: "/destinations/water-motorsports" },
  ],
  charters: [
    { label: "Full Voyage", href: "/charters/full-voyage" },
    { label: "By Vertical", href: "/charters/by-vertical" },
    { label: "À La Carte", href: "/charters/a-la-carte" },
    { label: "Itinerary", href: "/#itinerary" },
    { label: "FAQ", href: "/#faq" },
  ],
  company: [
    { label: "The Bridge", href: "/#instruments" },
    { label: "The Crew", href: "/crew" },
    { label: "The Logs", href: "/logs" },
    { label: "The Archives", href: "/voyages" },
    { label: "Locations", href: "/locations" },
    { label: "Glossary", href: "/resources/glossary" },
    { label: "About", href: "/about" },
    { label: "Press", href: "/press" },
  ],
  getStarted: [
    { label: "Book Now", href: "/contact" },
    { label: "Contact", href: "/contact" },
    { label: "Join the Crew", href: "/crew/join" },
  ],
  legal: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
    { label: "Confidentiality", href: "/confidentiality" },
  ],
};

// Aliases kept for backward compatibility (previously exported)
export { LOGS_HOME as LOGS };
