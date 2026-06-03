/**
 * Destinations — the 10 experience types we produce.
 * Each entity drives its own page at /destinations/<slug>.
 * Copy ported verbatim from the design kit for the 6 reference pages;
 * 4 net-new destinations follow the same template.
 */

export type DestinationCap = { icon: string; label: string };
export type DestinationAudience = string;
export type DestinationFaq = { q: string; a: string };
export type DestinationArchiveRef = { code: string; name: string; meta: string };

export type Destination = {
  slug: string;
  code: string;          // FIDS-style label (DEST · FST)
  icon: string;          // Phosphor class for the card icon
  name: string;
  shortName?: string;    // override on the dest grid card
  blurb: string;         // 1-line card blurb
  // Page content
  titleSEO: string;      // <title>
  metaDesc: string;      // meta description
  heroEyebrow: string;
  heroSplit: [string, string]; // brass-pop split in the H1, e.g. ["Festival", "Production"]
  answer: string;        // citable answer paragraph (the GEO extractable line)
  capsHeading: string;   // "Everything a Festival Needs."
  caps: DestinationCap[];
  itineraryNote: string; // overrides phase subs if needed
  audienceHeading: string;
  audienceLine: string;
  audience: DestinationAudience[];
  archiveHeading: string;
  archive: DestinationArchiveRef[]; // slugs of voyages
  faqs: DestinationFaq[];
  ctaHeading: [string, string]; // "Chart Your" / "Festival."
  // Schema
  serviceType: string;
  serviceDescription: string;
  audienceSchema: string;
  keywords: string[];
  final?: boolean;       // brass "All Destinations" card (homepage only)
};

const DIFF_FAQ = {
  q: "How is GHXSTSHIP different from a traditional agency?",
  a: "Three ways: we own the full eight-phase production lifecycle end to end (not just creative), we build our own technology (ATLVS, COMPVSS, GVTEWAY), and Operations — logistics, crew, compliance, and analytics — is a dedicated vertical, not an afterthought.",
};

export const DESTINATIONS: Destination[] = [
  {
    slug: "festival-production",
    code: "DEST · FST",
    icon: "ph-music-notes",
    name: "Festivals",
    blurb: "Festival production — multi-stage infrastructure and headliner experiences at scale.",
    titleSEO: "Festival Production — GHXSTSHIP",
    metaDesc: "GHXSTSHIP is a Miami festival production company (NY, Chicago, LA) for promoters, brands & production directors — multi-stage staging, technical production & headliner experiences through our 8-phase lifecycle.",
    heroEyebrow: "Destination · Festivals",
    heroSplit: ["Festival", "Production"],
    answer: "GHXSTSHIP is a full-service festival production company headquartered in Miami, with offices in New York, Chicago, and Los Angeles. We deliver multi-stage festival infrastructure, staging, technical production, and headliner experiences at scale — for promoters, brands, and production directors — through our eight-phase production lifecycle.",
    capsHeading: "Everything a Festival Needs.",
    caps: [
      { icon: "ph-blueprint", label: "Site design & infrastructure" },
      { icon: "ph-cube", label: "Multi-stage design & scenic build" },
      { icon: "ph-waveform", label: "Audio, lighting, video & rigging" },
      { icon: "ph-lightning", label: "Power & distribution" },
      { icon: "ph-star", label: "Headliner & talent experiences" },
      { icon: "ph-shield-check", label: "Permits, safety & compliance" },
    ],
    itineraryNote: "Every festival sails the same proven course — from first consultation to load-out and analytics.",
    audienceHeading: "Built for the People Who Build Festivals.",
    audienceLine: "Festival production at GHXSTSHIP is built for the producers and partners accountable for the show.",
    audience: ["Festival Promoters", "Brands & Sponsors", "Talent Buyers", "Production Directors", "Venue & City Partners"],
    archiveHeading: "Festivals We've Charted.",
    archive: [
      { code: "RRR 312", name: "Black Coffee at the Race Track", meta: "Concert Experience · Miami Music Week · Club Space · 2026" },
    ],
    faqs: [
      DIFF_FAQ,
      { q: "What does GHXSTSHIP do for festivals?", a: "End-to-end festival production: site and infrastructure, multi-stage design and build, technical production (audio, lighting, video, rigging, power), and headliner experiences — managed through our eight-phase production lifecycle." },
      { q: "Who is festival production for?", a: "Festival promoters, brands, talent buyers, and production directors who need one accountable partner from first consultation to load-out." },
      { q: "What size festivals can you produce?", a: "From boutique single-stage events to 50,000-plus-capacity multi-stage festivals, with full infrastructure and logistics." },
    ],
    ctaHeading: ["Chart Your", "Festival."],
    serviceType: "Festival production",
    serviceDescription: "Multi-stage festival production, infrastructure, staging, technical production, and headliner experiences at scale, delivered through the GHXSTSHIP eight-phase production lifecycle.",
    audienceSchema: "Festival promoters, brands, and production directors",
    keywords: ["festival production company", "multi-stage staging", "festival ticketing", "headliner experiences", "Miami festival production"],
  },
  {
    slug: "concert-tour-production",
    code: "DEST · TUR",
    icon: "ph-megaphone-simple",
    name: "Concerts & Tours",
    blurb: "Concert touring & tours — show production and multi-city routing for live music.",
    titleSEO: "Concert & Tour Production — GHXSTSHIP",
    metaDesc: "GHXSTSHIP is a Miami concert and tour production company (NY, Chicago, LA) for artists, tour managers & promoters — show design, technical production, routing & advancing through our 8-phase lifecycle.",
    heroEyebrow: "Destination · Concerts & Tours",
    heroSplit: ["Concerts", "& Tours"],
    answer: "GHXSTSHIP is a full-service concert and tour production company headquartered in Miami, with offices in New York, Chicago, and Los Angeles. We deliver show design, technical production, and multi-city routing for live music — for artists, tour managers, and promoters — through our eight-phase production lifecycle.",
    capsHeading: "Everything a Tour Needs.",
    caps: [
      { icon: "ph-cube", label: "Show design & staging" },
      { icon: "ph-path", label: "Routing & advancing" },
      { icon: "ph-waveform", label: "Audio, lighting, video & rigging" },
      { icon: "ph-truck", label: "Trucking & backline" },
      { icon: "ph-users-three", label: "Crew & tour management" },
      { icon: "ph-currency-circle-dollar", label: "Budgets & settlements" },
    ],
    itineraryNote: "Every tour sails the same proven course — from first consultation to load-out and analytics.",
    audienceHeading: "Built for the People Behind the Tour.",
    audienceLine: "Tour production at GHXSTSHIP is built for the partners accountable for the run.",
    audience: ["Artists & Management", "Tour Managers", "Promoters", "Record Labels", "Venues"],
    archiveHeading: "Tours, Charted.",
    archive: [
      { code: "RRR 312", name: "Black Coffee at the Race Track", meta: "Concert Experience · Miami Music Week · Club Space · 2026" },
    ],
    faqs: [
      DIFF_FAQ,
      { q: "What does GHXSTSHIP do for tours?", a: "End-to-end concert and tour production: show design and staging, technical production, routing, advancing, trucking, backline, and tour management — on our eight-phase lifecycle." },
      { q: "Who is tour production for?", a: "Artists and management, tour managers, promoters, and labels who need one accountable production partner across every city." },
      { q: "How many cities can you route?", a: "From single-market runs to multi-continent routings, with full logistics, advancing, and settlements." },
    ],
    ctaHeading: ["Chart Your", "Tour."],
    serviceType: "Concert touring production",
    serviceDescription: "Concert touring, show production, and multi-city routing for live music — design through settlement — delivered through the GHXSTSHIP eight-phase production lifecycle.",
    audienceSchema: "Artists, tour managers, and promoters",
    keywords: ["concert tour production", "tour routing", "show production", "concert touring company"],
  },
  {
    slug: "brand-activations",
    code: "DEST · ACT",
    icon: "ph-sparkle",
    name: "Brand Activations",
    blurb: "Brand activations — experiential marketing, pop-ups, and environments that convert.",
    titleSEO: "Brand Activations — GHXSTSHIP",
    metaDesc: "GHXSTSHIP is a Miami brand activation agency (NY, Chicago, LA) for brands, agencies & creative directors — experiential marketing, pop-ups, environments & measurement through our 8-phase lifecycle.",
    heroEyebrow: "Destination · Brand Activations",
    heroSplit: ["Brand", "Activations"],
    answer: "GHXSTSHIP is a full-service brand activation agency headquartered in Miami, with offices in New York, Chicago, and Los Angeles. We design and build experiential marketing, pop-ups, and brand environments that convert attention — for brands, agencies, and creative directors — through our eight-phase production lifecycle.",
    capsHeading: "Activations That Convert.",
    caps: [
      { icon: "ph-sparkle", label: "Concept & creative direction" },
      { icon: "ph-cube", label: "Fabrication & scenic" },
      { icon: "ph-blueprint", label: "Footprint & spatial design" },
      { icon: "ph-cursor-click", label: "Technical & interactive" },
      { icon: "ph-truck", label: "Permitting & logistics" },
      { icon: "ph-chart-line-up", label: "Measurement & reporting" },
    ],
    itineraryNote: "Every activation sails the same proven course — from first consultation to load-out and analytics.",
    audienceHeading: "Built for Brands & Their Agencies.",
    audienceLine: "Activations at GHXSTSHIP are built for the marketers and creatives accountable for the result.",
    audience: ["Brands", "Agencies", "CMOs", "Creative Directors", "Experiential Leads"],
    archiveHeading: "Activations, Charted.",
    archive: [
      { code: "RRR 226", name: "Polymarket Grocery Store", meta: "Brand Activation · Miami · 2026" },
      { code: "RRR 311", name: "Red Bull Unforeseen Motel", meta: "Brand Activation · III Points · Miami · 2023" },
    ],
    faqs: [
      DIFF_FAQ,
      { q: "What does GHXSTSHIP do for brand activations?", a: "End-to-end experiential marketing: concept and creative, fabrication and scenic, spatial design, interactive technology, permitting, and measurement — on our eight-phase lifecycle." },
      { q: "Who are activations for?", a: "Brands, agencies, CMOs, and creative directors who need a partner from concept through reporting." },
      { q: "Can you measure activation impact?", a: "Yes — we build in measurement and reporting so the activation ties back to business outcomes." },
    ],
    ctaHeading: ["Chart Your", "Activation."],
    serviceType: "Brand activation & experiential marketing",
    serviceDescription: "Experiential marketing, pop-ups, and brand environments that convert attention — concept through measurement — delivered through the GHXSTSHIP eight-phase production lifecycle.",
    audienceSchema: "Brands, agencies, and creative directors",
    keywords: ["brand activation agency", "experiential marketing", "pop-up production", "brand environments"],
  },
  {
    slug: "immersive-experiences",
    code: "DEST · IMM",
    icon: "ph-cube",
    name: "Immersive Experiences",
    blurb: "Immersive experiences — narrative installations and worlds audiences step inside.",
    titleSEO: "Immersive Experience Design — GHXSTSHIP",
    metaDesc: "GHXSTSHIP is a Miami immersive experience design studio (NY, Chicago, LA) for brands, museums & cultural institutions — narrative installations and worlds audiences step inside, on our 8-phase lifecycle.",
    heroEyebrow: "Destination · Immersive",
    heroSplit: ["Immersive", "Experiences"],
    answer: "GHXSTSHIP is a full-service immersive experience design studio headquartered in Miami, with offices in New York, Chicago, and Los Angeles. We build narrative installations and immersive worlds audiences step inside — for brands, museums, and cultural institutions — through our eight-phase production lifecycle.",
    capsHeading: "Worlds Audiences Step Inside.",
    caps: [
      { icon: "ph-book-open", label: "Narrative & world-building" },
      { icon: "ph-cube", label: "Spatial & set design" },
      { icon: "ph-cursor-click", label: "Interactive technology" },
      { icon: "ph-projector-screen", label: "Projection, audio & lighting" },
      { icon: "ph-wrench", label: "Fabrication & install" },
      { icon: "ph-path", label: "Operations & run-of-show" },
    ],
    itineraryNote: "Every world sails the same proven course — from first consultation to strike and analytics.",
    audienceHeading: "Built for Storytellers & Institutions.",
    audienceLine: "Immersive work at GHXSTSHIP is built for the teams shaping culture and brand worlds.",
    audience: ["Brands", "Museums", "Cultural Institutions", "Attractions", "Agencies"],
    archiveHeading: "Worlds, Charted.",
    archive: [
      { code: "RRR 052", name: "Salvage City Supper Club", meta: "Immersive Experience · Club Space · Miami · 2025" },
    ],
    faqs: [
      DIFF_FAQ,
      { q: "What does GHXSTSHIP do for immersive experiences?", a: "End-to-end immersive design: narrative and world-building, spatial and set design, interactive technology, projection and lighting, fabrication, and run-of-show — on our eight-phase lifecycle." },
      { q: "Who are immersive experiences for?", a: "Brands, museums, cultural institutions, and attractions that want audiences to step inside a story." },
      { q: "Do you handle the technology and the build?", a: "Yes — creative, technology, fabrication, install, and daily operations are all in-house." },
    ],
    ctaHeading: ["Chart Your", "World."],
    serviceType: "Immersive experience design",
    serviceDescription: "Narrative installations and immersive worlds audiences step inside — design, fabrication, technology, and run-of-show — delivered through the GHXSTSHIP eight-phase production lifecycle.",
    audienceSchema: "Brands, museums, and cultural institutions",
    keywords: ["immersive experience design", "immersive installations", "narrative environments", "experiential studio"],
  },
  {
    slug: "sporting-events",
    code: "DEST · SPT",
    icon: "ph-trophy",
    name: "Sporting Events",
    blurb: "Sporting events — stadium activations, fan experiences, and game-day production.",
    titleSEO: "Sporting Event Production — GHXSTSHIP",
    metaDesc: "GHXSTSHIP is a Miami sporting event production company (NY, Chicago, LA) for leagues, teams & sponsors — stadium activations, fan experiences & broadcast-ready staging on our 8-phase lifecycle.",
    heroEyebrow: "Destination · Sporting Events",
    heroSplit: ["Sporting", "Events"],
    answer: "GHXSTSHIP is a full-service sporting event production company headquartered in Miami, with offices in New York, Chicago, and Los Angeles. We deliver stadium activations, fan experiences, and game-day production — for leagues, teams, brands, and venues — through our eight-phase production lifecycle.",
    capsHeading: "Game-Day, Handled.",
    caps: [
      { icon: "ph-star", label: "Fan experience design" },
      { icon: "ph-flag-banner", label: "Field & stadium activations" },
      { icon: "ph-video-camera", label: "Broadcast-ready staging" },
      { icon: "ph-waveform", label: "Audio, lighting & video" },
      { icon: "ph-handshake", label: "Sponsorship integration" },
      { icon: "ph-shield-check", label: "Safety & crowd ops" },
    ],
    itineraryNote: "Every game day sails the same proven course — from first consultation to load-out and analytics.",
    audienceHeading: "Built for Leagues, Teams & Venues.",
    audienceLine: "Sporting production at GHXSTSHIP is built for the partners accountable for game day.",
    audience: ["Leagues", "Teams", "Venues", "Brands & Sponsors", "Federations"],
    archiveHeading: "Game Days, Charted.",
    archive: [
      { code: "RRR 001", name: "Formula 1 Las Vegas Grand Prix", meta: "Motorsports · Las Vegas · 2023" },
      { code: "RRR 023", name: "Heineken Turn4 Nightclub", meta: "Motorsports · F1 Las Vegas Grand Prix · 2024" },
    ],
    faqs: [
      DIFF_FAQ,
      { q: "What does GHXSTSHIP do for sporting events?", a: "End-to-end sporting event production: fan experience design, field and stadium activations, broadcast-ready staging, technical production, sponsorship integration, and crowd operations — on our eight-phase lifecycle." },
      { q: "Who is sporting production for?", a: "Leagues, teams, venues, federations, and brand sponsors who need a single accountable production partner." },
      { q: "Can you produce broadcast-ready moments?", a: "Yes — staging and technical are built to broadcast standards for in-venue and on-air." },
    ],
    ctaHeading: ["Chart Your", "Game Day."],
    serviceType: "Sporting event production",
    serviceDescription: "Stadium activations, fan experiences, and game-day production for leagues, teams, brands, and venues — delivered through the GHXSTSHIP eight-phase production lifecycle.",
    audienceSchema: "Leagues, teams, brands, and venues",
    keywords: ["sporting event production", "stadium activations", "fan zone production", "game-day production"],
  },
  {
    slug: "tv-film-broadcast",
    code: "DEST · TVF",
    icon: "ph-television",
    name: "TV, Film & Broadcast",
    blurb: "Broadcast, film & TV production — live broadcast, content capture, and on-air activations.",
    titleSEO: "TV, Film & Broadcast Production — GHXSTSHIP",
    metaDesc: "GHXSTSHIP is a Miami broadcast and film production company (NY, Chicago, LA) for networks, studios & streamers — live broadcast, content capture & on-air activations on our 8-phase lifecycle.",
    heroEyebrow: "Destination · TV · Film · Broadcast",
    heroSplit: ["TV, Film", "& Broadcast"],
    answer: "GHXSTSHIP is a full-service broadcast, film, and television production company headquartered in Miami, with offices in New York, Chicago, and Los Angeles. We deliver live broadcast, content capture, and on-air activations — for networks, studios, streamers, and brands — through our eight-phase production lifecycle.",
    capsHeading: "On Air, On Time.",
    caps: [
      { icon: "ph-broadcast", label: "Live broadcast production" },
      { icon: "ph-cube", label: "Set design & scenic" },
      { icon: "ph-video-camera", label: "Camera, audio & lighting" },
      { icon: "ph-film-slate", label: "Content capture & post" },
      { icon: "ph-megaphone-simple", label: "On-air activations" },
      { icon: "ph-shield-check", label: "Compliance & insurance" },
    ],
    itineraryNote: "Every broadcast sails the same proven course — from first consultation to wrap and analytics.",
    audienceHeading: "Built for Networks, Studios & Streamers.",
    audienceLine: "Broadcast work at GHXSTSHIP is built for the teams accountable for what airs.",
    audience: ["Networks", "Studios", "Streamers", "Brands", "Producers"],
    archiveHeading: "Broadcasts, Charted.",
    archive: [],
    faqs: [
      DIFF_FAQ,
      { q: "What does GHXSTSHIP do for TV, film and broadcast?", a: "End-to-end broadcast production: live broadcast, set design and scenic, camera/audio/lighting, content capture and post, on-air activations, and compliance — on our eight-phase lifecycle." },
      { q: "Who is broadcast production for?", a: "Networks, studios, streamers, and brands that need a production partner from set build to air." },
      { q: "Do you handle live and captured content?", a: "Yes — live broadcast and captured/post content, plus on-air brand activations." },
    ],
    ctaHeading: ["Chart Your", "Broadcast."],
    serviceType: "Broadcast, film and television production",
    serviceDescription: "Live broadcast, film and TV content capture, and on-air activations — set design through air — delivered through the GHXSTSHIP eight-phase production lifecycle.",
    audienceSchema: "Networks, studios, streamers, and brands",
    keywords: ["broadcast and film production", "live broadcast production", "on-air activations"],
  },
  {
    slug: "health-wellness",
    code: "DEST · WEL",
    icon: "ph-heartbeat",
    name: "Health & Wellness",
    blurb: "Health & wellness experiences — wellness festivals, retreats, and activations.",
    titleSEO: "Health & Wellness Experience Production — GHXSTSHIP",
    metaDesc: "GHXSTSHIP is a Miami health and wellness experience production company (NY, Chicago, LA) for wellness brands, retreats & festivals — design through measurement, on our 8-phase lifecycle.",
    heroEyebrow: "Destination · Health & Wellness",
    heroSplit: ["Health", "& Wellness"],
    answer: "GHXSTSHIP is a full-service health and wellness experience production company headquartered in Miami, with offices in New York, Chicago, and Los Angeles. We produce wellness festivals, retreats, and brand activations — for wellness brands, hospitality groups, and creative directors — through our eight-phase production lifecycle.",
    capsHeading: "Experiences That Restore.",
    caps: [
      { icon: "ph-heartbeat", label: "Wellness programming" },
      { icon: "ph-leaf", label: "Site & venue design" },
      { icon: "ph-cube", label: "Scenic & spatial design" },
      { icon: "ph-users-three", label: "Practitioner & talent management" },
      { icon: "ph-shield-check", label: "Safety, permits & insurance" },
      { icon: "ph-chart-line-up", label: "Measurement & reporting" },
    ],
    itineraryNote: "Every wellness voyage sails the same proven course — from first consultation to load-out and analytics.",
    audienceHeading: "Built for Wellness Brands & Operators.",
    audienceLine: "Wellness work at GHXSTSHIP is built for the brands and operators accountable for the guest's transformation.",
    audience: ["Wellness Brands", "Retreats & Resorts", "Hospitality Groups", "Health Brands", "Practitioners"],
    archiveHeading: "Wellness Voyages, Charted.",
    archive: [],
    faqs: [
      DIFF_FAQ,
      { q: "What does GHXSTSHIP do for health and wellness experiences?", a: "End-to-end production: wellness programming, site and venue design, scenic and spatial design, practitioner and talent management, safety and permits, and measurement — on our eight-phase lifecycle." },
      { q: "Who is wellness production for?", a: "Wellness brands, retreat and resort operators, hospitality groups, health brands, and practitioners building physical experiences for their guests." },
      { q: "Can you operate retreats end to end?", a: "Yes — site design, programming, practitioner management, on-site operations, and post-event analytics are all in-house." },
    ],
    ctaHeading: ["Chart Your", "Wellness Voyage."],
    serviceType: "Health and wellness experience production",
    serviceDescription: "Wellness festivals, retreats, and brand activations — programming through measurement — delivered through the GHXSTSHIP eight-phase production lifecycle.",
    audienceSchema: "Wellness brands, retreat operators, and hospitality groups",
    keywords: ["health and wellness experience production", "wellness festival production", "retreat production", "wellness activation"],
  },
  {
    slug: "premium-hospitality",
    code: "DEST · HOS",
    icon: "ph-wine",
    name: "Premium Hospitality",
    blurb: "Premium hospitality experiences — VIP, resort & destination hospitality programming.",
    titleSEO: "Premium Hospitality Experience Production — GHXSTSHIP",
    metaDesc: "GHXSTSHIP is a Miami premium hospitality production company (NY, Chicago, LA) for hospitality groups, luxury brands & private clients — VIP, resort & destination programming on our 8-phase lifecycle.",
    heroEyebrow: "Destination · Premium Hospitality",
    heroSplit: ["Premium", "Hospitality"],
    answer: "GHXSTSHIP is a full-service premium hospitality experience production company headquartered in Miami, with offices in New York, Chicago, and Los Angeles. We produce VIP programming, resort and destination hospitality, and private client experiences — for hospitality groups, luxury brands, and private clients — through our eight-phase production lifecycle.",
    capsHeading: "Hospitality That Performs.",
    caps: [
      { icon: "ph-wine", label: "VIP & F&B programming" },
      { icon: "ph-cube", label: "Scenic & atmosphere design" },
      { icon: "ph-users-three", label: "Hospitality staffing" },
      { icon: "ph-handshake", label: "Talent & guest relations" },
      { icon: "ph-shield-check", label: "Discretion, safety & compliance" },
      { icon: "ph-chart-line-up", label: "Measurement & reporting" },
    ],
    itineraryNote: "Every hospitality program sails the same proven course — from first consultation to wrap and analytics.",
    audienceHeading: "Built for the Luxury & Hospitality Trade.",
    audienceLine: "Hospitality production at GHXSTSHIP is built for the operators and brands accountable for the guest experience.",
    audience: ["Hospitality Groups", "Luxury Brands", "Private Clients", "Resort Operators", "Destination Marketing Organizations"],
    archiveHeading: "Hospitality, Charted.",
    archive: [],
    faqs: [
      DIFF_FAQ,
      { q: "What does GHXSTSHIP do for premium hospitality?", a: "End-to-end production: VIP and F&B programming, scenic and atmosphere design, hospitality staffing, talent and guest relations, discretion and compliance, and measurement — on our eight-phase lifecycle." },
      { q: "Who is premium hospitality for?", a: "Hospitality groups, luxury brands, resort operators, destination marketing organizations, and private clients running guest-experience programming at scale." },
      { q: "Can you operate at a resort or estate?", a: "Yes — we work inside operating venues, on resort grounds, and at private estates with full crew and compliance posture." },
    ],
    ctaHeading: ["Chart Your", "Hospitality Program."],
    serviceType: "Premium hospitality experience production",
    serviceDescription: "VIP, resort, and destination hospitality programming — design through measurement — delivered through the GHXSTSHIP eight-phase production lifecycle.",
    audienceSchema: "Hospitality groups, luxury brands, and private clients",
    keywords: ["premium hospitality experiences", "VIP hospitality production", "resort programming", "destination hospitality"],
  },
  {
    slug: "luxury-retail",
    code: "DEST · LUX",
    icon: "ph-diamond",
    name: "Luxury Retail",
    blurb: "Luxury retail activations — flagship launches, pop-ups, and brand environments.",
    titleSEO: "Luxury Retail Activation Production — GHXSTSHIP",
    metaDesc: "GHXSTSHIP is a Miami luxury retail activation production company (NY, Chicago, LA) for fashion, beauty & luxury houses — flagship launches, pop-ups & brand environments on our 8-phase lifecycle.",
    heroEyebrow: "Destination · Luxury Retail",
    heroSplit: ["Luxury", "Retail"],
    answer: "GHXSTSHIP is a full-service luxury retail activation production company headquartered in Miami, with offices in New York, Chicago, and Los Angeles. We produce flagship launches, pop-ups, and brand environments — for fashion, beauty, and luxury houses — through our eight-phase production lifecycle.",
    capsHeading: "Retail That Performs.",
    caps: [
      { icon: "ph-diamond", label: "Flagship launch production" },
      { icon: "ph-storefront", label: "Pop-up & retail environments" },
      { icon: "ph-cube", label: "Scenic & VM build" },
      { icon: "ph-cursor-click", label: "Interactive technology" },
      { icon: "ph-shield-check", label: "Permitting & compliance" },
      { icon: "ph-chart-line-up", label: "Footfall & sell-through reporting" },
    ],
    itineraryNote: "Every retail voyage sails the same proven course — from first consultation to load-out and analytics.",
    audienceHeading: "Built for Luxury Houses & Their Agencies.",
    audienceLine: "Retail activations at GHXSTSHIP are built for the brand teams accountable for sell-through and brand equity at once.",
    audience: ["Luxury Houses", "Fashion Brands", "Beauty Brands", "Retail Concept Agencies", "Visual Merchandising Leads"],
    archiveHeading: "Retail, Charted.",
    archive: [
      { code: "RRR 108", name: "PATRÓN Cristalino × Becky G", meta: "Product Launch · Los Angeles · 2024" },
    ],
    faqs: [
      DIFF_FAQ,
      { q: "What does GHXSTSHIP do for luxury retail?", a: "End-to-end production: flagship launch programming, pop-up and retail environments, scenic and VM build, interactive technology, permitting, and footfall and sell-through reporting — on our eight-phase lifecycle." },
      { q: "Who is luxury retail production for?", a: "Luxury houses, fashion and beauty brands, retail concept agencies, and visual merchandising leads who need an accountable production partner." },
      { q: "Can you produce in operating retail environments?", a: "Yes — we work inside operating stores, in temporary footprints, and at brand-owned destinations with full safety and discretion posture." },
    ],
    ctaHeading: ["Chart Your", "Retail Activation."],
    serviceType: "Luxury retail activation",
    serviceDescription: "Flagship launches, pop-ups, and brand environments for fashion, beauty, and luxury houses — design through measurement — delivered through the GHXSTSHIP eight-phase production lifecycle.",
    audienceSchema: "Fashion, beauty, and luxury houses",
    keywords: ["luxury retail activations", "flagship launches", "retail pop-up production", "brand environments"],
  },
  {
    slug: "water-motorsports",
    code: "DEST · WMS",
    icon: "ph-anchor",
    name: "Water & Motorsports",
    blurb: "Water & motorsports production — marine, racing & high-octane fan experiences.",
    titleSEO: "Water & Motorsports Production — GHXSTSHIP",
    metaDesc: "GHXSTSHIP is a Miami water and motorsports production company (NY, Chicago, LA) for racing series, marine events & yacht week — fan experience design, hospitality & broadcast on our 8-phase lifecycle.",
    heroEyebrow: "Destination · Water & Motorsports",
    heroSplit: ["Water", "& Motorsports"],
    answer: "GHXSTSHIP is a full-service water and motorsports production company headquartered in Miami, with offices in New York, Chicago, and Los Angeles. We produce marine events, racing series fan experiences, and high-octane hospitality programming — for racing series, marine event organizers, and luxury brand sponsors — through our eight-phase production lifecycle.",
    capsHeading: "High-Octane, Handled.",
    caps: [
      { icon: "ph-anchor", label: "Marine event production" },
      { icon: "ph-flag-checkered", label: "Racing series activations" },
      { icon: "ph-wine", label: "Hospitality programming" },
      { icon: "ph-broadcast", label: "Broadcast-ready staging" },
      { icon: "ph-handshake", label: "Sponsorship integration" },
      { icon: "ph-shield-check", label: "Safety, permits & marine compliance" },
    ],
    itineraryNote: "Every water and motorsports voyage sails the same proven course — from first consultation to load-out and analytics.",
    audienceHeading: "Built for Racing & Marine.",
    audienceLine: "Water and motorsports production at GHXSTSHIP is built for the operators and brands accountable for race day and yacht week.",
    audience: ["Racing Series", "Marine Events", "Sponsors", "Hospitality Operators", "Federations"],
    archiveHeading: "Race & Marine, Charted.",
    archive: [
      { code: "RRR 001", name: "Formula 1 Las Vegas Grand Prix", meta: "Motorsports · Las Vegas · 2023" },
      { code: "RRR 023", name: "Heineken Turn4 Nightclub", meta: "Motorsports · F1 Las Vegas Grand Prix · 2024" },
    ],
    faqs: [
      DIFF_FAQ,
      { q: "What does GHXSTSHIP do for water and motorsports?", a: "End-to-end production: marine event production, racing series activations, hospitality programming, broadcast-ready staging, sponsorship integration, and safety and marine compliance — on our eight-phase lifecycle." },
      { q: "Who is water and motorsports production for?", a: "Racing series, marine event organizers, federations, sponsors, and hospitality operators producing race day, yacht week, or marine programming." },
      { q: "Can you produce at sea or trackside?", a: "Yes — we work in marine footprints, at trackside, in paddock and pit lane, and in operating hospitality venues, with full safety and compliance posture." },
    ],
    ctaHeading: ["Chart Your", "Marine or Race Day."],
    serviceType: "Water and motorsports production",
    serviceDescription: "Marine event production, racing series fan experiences, and high-octane hospitality programming — design through measurement — delivered through the GHXSTSHIP eight-phase production lifecycle.",
    audienceSchema: "Racing series, marine event organizers, and luxury brand sponsors",
    keywords: ["water and motorsports production", "marine event production", "racing series activation", "yacht week production"],
  },
];

export const DESTINATION_BY_SLUG: Record<string, Destination> =
  Object.fromEntries(DESTINATIONS.map((d) => [d.slug, d]));

// Homepage card list — same data plus the brass "All Destinations" trailer card.
export type DestinationCard = {
  slug: string;
  code: string;
  icon: string;
  name: string;
  blurb: string;
  href: string;
  final?: boolean;
};

export const DESTINATION_CARDS: DestinationCard[] = [
  ...DESTINATIONS.map((d) => ({
    slug: d.slug,
    code: d.code,
    icon: d.icon,
    name: d.name,
    blurb: d.blurb,
    href: `/destinations/${d.slug}`,
  })),
  {
    slug: "all",
    code: "DEST · ALL",
    icon: "ph-arrow-up-right",
    name: "All Destinations",
    blurb: "Hospitality, corporate & private events too. Tell us where you're headed.",
    href: "/contact",
    final: true,
  },
];
