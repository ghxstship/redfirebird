/**
 * GHXSTSHIP — single source of content for the Spaceport home page.
 * "Venture Beyond." Production · Operations · Technology.
 */

export const ORG = {
  name: "GHXSTSHIP",
  spaced: "G H X S T S H I P",
  legal: "G H X S T S H I P Industries LLC",
  slogan: "Venture Beyond",
  email: "hello@ghxstship.tours",
  url: "https://ghxstship.tours/",
  hq: "Miami",
  offices: ["Miami", "New York", "Chicago", "Los Angeles"] as const,
  foundingDate: "2022",
} as const;

export const PRIMARY_NAV = [
  { label: "Destinations", href: "#destinations" },
  { label: "Charters", href: "#engagements" },
  { label: "Itinerary", href: "#itinerary" },
  { label: "Bridge", href: "#instruments" },
  { label: "Crew", href: "#crew" },
  { label: "Logs", href: "#logs" },
  { label: "Archives", href: "#voyages" },
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

export const TRUSTED = ["RED BULL", "HEINEKEN", "FORMULA 1", "INSOMNIAC", "PATRÓN", "POLYMARKET"] as const;

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

export type Destination = {
  code: string;
  icon: string;
  name: string;
  blurb: string;
  href: string;
  final?: boolean;
};

export const DESTINATIONS: Destination[] = [
  { code: "DEST · FST", icon: "ph-music-notes", name: "Festivals", blurb: "Festival production — multi-stage infrastructure and headliner experiences at scale.", href: "#book" },
  { code: "DEST · TUR", icon: "ph-megaphone-simple", name: "Concerts & Tours", blurb: "Concert touring & tours — show production and multi-city routing for live music.", href: "#book" },
  { code: "DEST · ACT", icon: "ph-sparkle", name: "Brand Activations", blurb: "Brand activations — experiential marketing, pop-ups, and environments that convert.", href: "#book" },
  { code: "DEST · IMM", icon: "ph-cube", name: "Immersive Experiences", blurb: "Immersive experiences — narrative installations and worlds audiences step inside.", href: "#book" },
  { code: "DEST · SPT", icon: "ph-trophy", name: "Sporting Events", blurb: "Sporting events — stadium activations, fan experiences, and game-day production.", href: "#book" },
  { code: "DEST · TVF", icon: "ph-television", name: "TV, Film & Broadcast", blurb: "Broadcast, film & TV production — live broadcast, content capture, and on-air activations.", href: "#book" },
  { code: "DEST · WEL", icon: "ph-heartbeat", name: "Health & Wellness", blurb: "Health & wellness experiences — wellness festivals, retreats, and activations.", href: "#book" },
  { code: "DEST · HOS", icon: "ph-wine", name: "Premium Hospitality", blurb: "Premium hospitality experiences — VIP, resort & destination hospitality programming.", href: "#book" },
  { code: "DEST · LUX", icon: "ph-diamond", name: "Luxury Retail", blurb: "Luxury retail activations — flagship launches, pop-ups, and brand environments.", href: "#book" },
  { code: "DEST · WMS", icon: "ph-anchor", name: "Water & Motorsports", blurb: "Water & motorsports production — marine, racing & high-octane fan experiences.", href: "#book" },
  { code: "DEST · ALL", icon: "ph-arrow-up-right", name: "All Destinations", blurb: "Hospitality, corporate & private events too. Tell us where you're headed.", href: "#book", final: true },
];

export const CHARTERS = [
  { id: "Local Service", title: "Full Voyage", tag: "All 8 stops", blurb: "All eight phases, Discovery to Strike — one crew, one charted course, total accountability.", accent: "nebula" as const },
  { id: "Express", title: "By Vertical", tag: "Select stops", blurb: "Charter a single vertical: Production, Operations, or Technology — plug us in where you need us." },
  { id: "Express", title: "À La Carte", tag: "Your stops", blurb: "Select individual lifecycle phases or services. A custom charter for exactly what your voyage requires." },
];

export type ItineraryStop = { n: string; name: string; sub: string; term?: boolean };
export const ITINERARY: ItineraryStop[] = [
  { n: "01", name: "Discovery", sub: "Board · Consult", term: true },
  { n: "02", name: "R&D", sub: "Feasibility" },
  { n: "03", name: "Design", sub: "Direction" },
  { n: "04", name: "Compliance", sub: "Eng · Safety" },
  { n: "05", name: "Build", sub: "Fabrication" },
  { n: "06", name: "Operations", sub: "Logistics" },
  { n: "07", name: "Activation", sub: "Showtime" },
  { n: "08", name: "Strike", sub: "Arrive · Celebrate", term: true },
];

export const DIFFERENCE = [
  { id: "Edge 01", title: "End to End", tag: "One accountable crew", blurb: "We own all eight phases, Discovery to Strike — not just the creative. One crew, one charted course, total accountability." },
  { id: "Edge 02", title: "We Build the Tech", tag: "Proprietary software", blurb: "ATLVS, COMPVSS, and GVTEWAY are built in-house — almost no agency in the category ships its own platforms." },
  { id: "Edge 03", title: "Ops as a Discipline", tag: "Not a line item", blurb: "Logistics, crew, compliance, and analytics are a full vertical — the reliability that scales from one show to fifty." },
];

export const INSTRUMENTS = [
  { id: "The Atlas", title: "ATLVS", tag: "Production & resource mgmt", blurb: "Your maps and charts — projects, resources, and budgets across the whole voyage." },
  { id: "The Compass", title: "COMPVSS", tag: "Workforce & crew", blurb: "Points the crew — scheduling, certifications, and workforce management for every sailing." },
  { id: "The Gateway", title: "GVTEWAY", tag: "Ticketing & fans", blurb: "The gate audiences pass through — ticketing, fan engagement, and community." },
];

export const CREW = [
  { rank: "Captain", title: "Executive Producer", blurb: "Owns the vision and the voyage, end to end." },
  { rank: "First Mate", title: "Production Director", blurb: "Runs the show floor and the build." },
  { rank: "Navigator", title: "Project Management", blurb: "Charts the itinerary, holds the timeline." },
  { rank: "Quartermaster", title: "Logistics & Ops", blurb: "Crew, vendors, freight, and load-in." },
  { rank: "Bosun", title: "Technical Director", blurb: "Audio, lighting, video, rigging, power." },
];

export type Voyage = {
  code: string;
  name: string;
  meta: string;
  year: string;
  status: "ontime" | "departed" | "boarding";
  statusLabel: string;
};

export const VOYAGES: Voyage[] = [
  { code: "RRR 312", name: "Black Coffee at the Race Track", meta: "Concert Experience · Miami Music Week · Club Space", year: "2026", status: "ontime", statusLabel: "Arrived" },
  { code: "RRR 226", name: "Polymarket Grocery Store", meta: "Brand Activation · Miami", year: "2026", status: "ontime", statusLabel: "Arrived" },
  { code: "RRR 052", name: "Salvage City Supper Club", meta: "Immersive Experience · Club Space · Miami", year: "2025", status: "ontime", statusLabel: "Arrived" },
  { code: "RRR 108", name: "PATRÓN Cristalino × Becky G", meta: "Product Launch · Los Angeles", year: "2024", status: "departed", statusLabel: "Logged" },
  { code: "RRR 023", name: "Heineken Turn4 Nightclub", meta: "Motorsports · F1 Las Vegas Grand Prix", year: "2024", status: "departed", statusLabel: "Logged" },
  { code: "RRR 311", name: "Red Bull Unforeseen Motel", meta: "Brand Activation · III Points · Miami", year: "2023", status: "departed", statusLabel: "Logged" },
  { code: "RRR 014", name: "The Vanguard Orlando", meta: "Venue Operations · Orlando", year: "2024", status: "departed", statusLabel: "Logged" },
  { code: "RRR 009", name: "Factory Town", meta: "Venue Operations · Miami", year: "2023", status: "departed", statusLabel: "Logged" },
  { code: "RRR 001", name: "Formula 1 Las Vegas Grand Prix", meta: "Motorsports · Las Vegas", year: "2023", status: "departed", statusLabel: "Logged" },
];

export const HISTORY = [
  { big: "14+", lbl: "Years Experience" },
  { big: "250+", lbl: "Experiences Created" },
  { big: "5M+", lbl: "Memories Made" },
];

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

export const LOGS = [
  { date: "2026 · 05 · 28", cat: "Field Notes", title: "How the 8-phase line keeps a build on course" },
  { date: "2026 · 05 · 12", cat: "Press", title: "GHXSTSHIP charts new immersive work in Miami" },
  { date: "2026 · 04 · 30", cat: "Crew Call", title: "Now boarding — join the Skeleton Crew" },
];

export const FOOTER_NAV = {
  destinations: [
    "Festivals",
    "Concerts & Tours",
    "Brand Activations",
    "Immersive Experiences",
    "Sporting Events",
    "TV, Film & Broadcast",
    "Health & Wellness",
    "Premium Hospitality",
    "Luxury Retail",
    "Water & Motorsports",
  ],
  charters: [
    { label: "Full Voyage", href: "#engagements" },
    { label: "By Vertical", href: "#engagements" },
    { label: "À La Carte", href: "#engagements" },
    { label: "Itinerary", href: "#itinerary" },
    { label: "FAQ", href: "#faq" },
  ],
  company: [
    { label: "The Bridge", href: "#instruments" },
    { label: "The Crew", href: "#crew" },
    { label: "The Logs", href: "#logs" },
    { label: "The Archives", href: "#voyages" },
  ],
  getStarted: [
    { label: "Book Now", href: "#book" },
    { label: "Contact", href: `mailto:${ORG.email}` },
    { label: "Join the Crew", href: "#crew" },
  ],
};
