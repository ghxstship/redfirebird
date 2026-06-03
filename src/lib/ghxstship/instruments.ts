/**
 * The Bridge — ATLVS · COMPVSS · GVTEWAY.
 * Each product gets a full /bridge/<slug> page with SoftwareApplication schema.
 */

export type Instrument = {
  slug: string;
  id: string;          // "The Atlas"
  title: string;       // "ATLVS"
  tag: string;         // category short
  shortBlurb: string;  // homepage blurb
  // page content
  titleSEO: string;
  metaDesc: string;
  heroSplit: [string, string];
  eyebrow: string;
  answer: string;
  audience: string;
  features: { icon: string; name: string; blurb: string }[];
  integrations: string[];
  phaseAlignment: string;
  faqs: { q: string; a: string }[];
  primaryKW: string;
  applicationCategory: string;
};

export const INSTRUMENTS: Instrument[] = [
  {
    slug: "atlvs",
    id: "The Atlas",
    title: "ATLVS",
    tag: "Production & resource mgmt",
    shortBlurb: "Your maps and charts — projects, resources, and budgets across the whole voyage.",
    titleSEO: "ATLVS — Event Production Management Software — GHXSTSHIP",
    metaDesc: "ATLVS is GHXSTSHIP's production and resource management platform — projects, budgets, schedules, vendors, scenic and AV inventory, and phase-gated approvals for live event production teams.",
    heroSplit: ["ATLVS", "The Atlas."],
    eyebrow: "The Bridge · Instrument 01",
    answer:
      "ATLVS is GHXSTSHIP's proprietary production and resource management platform for live event and experiential production teams. Projects, budgets, schedules, vendors, scenic and AV inventory, and approvals — every chart you need to steer a voyage, in one connected system.",
    audience: "Executive producers, production directors, and project management leads — internal team facing.",
    features: [
      { icon: "ph-folders", name: "Projects", blurb: "Every voyage, every phase, every deliverable — in a single project record with full audit trail." },
      { icon: "ph-currency-circle-dollar", name: "Budgets & Burn", blurb: "Live budgets, change orders, and burn tracking from Phase 01 through reconciliation." },
      { icon: "ph-cube", name: "Resource Inventory", blurb: "Scenic, AV, rigging, and asset tracking across projects and storage facilities." },
      { icon: "ph-handshake", name: "Vendor Management", blurb: "Vendors, contracts, certs, and performance history in a single graph." },
      { icon: "ph-gate", name: "Phase Gates", blurb: "Approvals tied to lifecycle phase — nothing advances without explicit sign-off." },
      { icon: "ph-chart-line-up", name: "Reporting & Wrap", blurb: "Phase 08 reconciliation and post-event analytics built into the platform." },
    ],
    integrations: ["COMPVSS (crew sync)", "GVTEWAY (event sync)", "Accounting (Sage / QuickBooks)", "Slack", "Google Workspace"],
    phaseAlignment: "Built for the eight-phase lifecycle. Every ATLVS module maps to a lifecycle phase: Discovery → Wrap.",
    faqs: [
      { q: "Is ATLVS for in-house teams or external clients?", a: "ATLVS is internal — the platform your producers, directors, and project managers run their voyages from. Clients see specific views; the production team owns the workspace." },
      { q: "Can ATLVS integrate with our accounting?", a: "Yes — ATLVS integrates with Sage Intacct, QuickBooks Online, and Xero for budget, expense, and reconciliation flow." },
      { q: "How is ATLVS different from a project management tool like Asana or Monday?", a: "ATLVS is built specifically for live event and experiential production teams — phase gates, scenic and AV inventory, vendor performance, and event-specific reporting are first-class objects, not generic tasks." },
    ],
    primaryKW: "event production management software",
    applicationCategory: "BusinessApplication",
  },
  {
    slug: "compvss",
    id: "The Compass",
    title: "COMPVSS",
    tag: "Workforce & crew",
    shortBlurb: "Points the crew — scheduling, certifications, and workforce management for every sailing.",
    titleSEO: "COMPVSS — Event Crew & Workforce Management Software — GHXSTSHIP",
    metaDesc: "COMPVSS is GHXSTSHIP's enterprise crew and workforce management software for live event production — scheduling, certifications, timesheets, and gig marketplace for crew, vendor, and talent teams.",
    heroSplit: ["COMPVSS", "The Compass."],
    eyebrow: "The Bridge · Instrument 02",
    answer:
      "COMPVSS is GHXSTSHIP's proprietary enterprise crew and workforce management software for live event production. Crew scheduling, certifications, timesheets, and a vetted gig marketplace — the compass that points every voyage's crew in the same direction.",
    audience: "Crew, vendors, and talent — and the workforce leads who coordinate them.",
    features: [
      { icon: "ph-users-three", name: "Crew Scheduling", blurb: "Day-of, multi-day, and tour-long crew schedules with conflict resolution." },
      { icon: "ph-certificate", name: "Certifications", blurb: "Rigging, CDL, drone, SafeRig, fall-protection — every credential tracked, every expiration alerted." },
      { icon: "ph-clock", name: "Timesheets", blurb: "Clock-in/out, OT tracking, and accurate payroll exports straight to your provider." },
      { icon: "ph-storefront", name: "Gig Marketplace", blurb: "Post crew calls to vetted professionals; reputation-anchored." },
      { icon: "ph-shield-check", name: "Compliance", blurb: "Labor law, ESG reporting, and union compliance flagged automatically." },
      { icon: "ph-handshake", name: "Vendor & Talent", blurb: "Vendors and talent run on the same backbone as W2 crew." },
    ],
    integrations: ["ATLVS (project sync)", "Payroll providers (Gusto, ADP, Paychex)", "Background-check providers", "Identity & access (SSO)"],
    phaseAlignment: "Most active in Phase 06 Operations & Logistics and Phase 07 Live Activation — but crew planning starts in Phase 01.",
    faqs: [
      { q: "Is COMPVSS only for W2 employees?", a: "No — COMPVSS handles W2 employees, 1099 contractors, vendor staff, and talent on the same workforce backbone." },
      { q: "Does COMPVSS handle union shows?", a: "Yes — union rules, rates, and reporting are configurable per local and per show." },
      { q: "How is COMPVSS different from generic scheduling tools?", a: "COMPVSS is built for live event crew specifically — certifications, OT-aware scheduling, gig marketplace, and union compliance are first-class objects." },
    ],
    primaryKW: "event crew management software",
    applicationCategory: "BusinessApplication",
  },
  {
    slug: "gvteway",
    id: "The Gateway",
    title: "GVTEWAY",
    tag: "Ticketing & fans",
    shortBlurb: "The gate audiences pass through — ticketing, fan engagement, and community.",
    titleSEO: "GVTEWAY — Event Ticketing & Fan Engagement Platform — GHXSTSHIP",
    metaDesc: "GVTEWAY is GHXSTSHIP's event ticketing, fan engagement, and community platform — branded sales, RFID/NFC access, post-event community, and analytics for promoters, festivals, and brands.",
    heroSplit: ["GVTEWAY", "The Gateway."],
    eyebrow: "The Bridge · Instrument 03",
    answer:
      "GVTEWAY is GHXSTSHIP's proprietary event ticketing, fan engagement, and community platform. Branded ticket sales, RFID and NFC access, on-site activation, and post-event community — the gate every guest and client passes through.",
    audience: "Guests and clients — and the promoters, festival operators, and brand teams who run the events guests attend.",
    features: [
      { icon: "ph-ticket", name: "Ticketing", blurb: "Branded ticket sales, tiered access, dynamic pricing, and resale controls." },
      { icon: "ph-credit-card", name: "Access Control", blurb: "RFID and NFC at the gate, with cashless payment and in-venue activation." },
      { icon: "ph-broadcast", name: "Fan Engagement", blurb: "Pre-event activation, on-site experiences, post-event community." },
      { icon: "ph-users", name: "Community", blurb: "Persistent fan profiles that travel from event to event in the GHXSTSHIP network." },
      { icon: "ph-chart-line-up", name: "Analytics", blurb: "Real-time sales, attendance, and engagement analytics, with post-event reporting." },
      { icon: "ph-shield-check", name: "Anti-fraud", blurb: "Bot, scalping, and chargeback protection built in." },
    ],
    integrations: ["ATLVS (event sync)", "Payment processors (Stripe, Adyen)", "CRM (HubSpot, Salesforce)", "Email & SMS providers"],
    phaseAlignment: "Most active in Phase 07 Live Activation and ongoing community — but ticket strategy starts in Phase 01.",
    faqs: [
      { q: "Is GVTEWAY a marketplace or a white-label platform?", a: "Both. Operators can run GVTEWAY as a fully white-labeled, branded ticketing surface — or list events on the GHXSTSHIP network for cross-promotion." },
      { q: "Does GVTEWAY handle RFID and NFC?", a: "Yes — RFID and NFC for access, cashless, and in-venue activation are first-class capabilities." },
      { q: "How is GVTEWAY different from Ticketmaster / Eventbrite?", a: "GVTEWAY is built for experiential operators, not generic event ticket sales. Branded fan flow, on-site activation, and post-event community are first-class — not bolt-ons." },
    ],
    primaryKW: "event ticketing platform",
    applicationCategory: "BusinessApplication",
  },
];

export const INSTRUMENT_BY_SLUG: Record<string, Instrument> =
  Object.fromEntries(INSTRUMENTS.map((i) => [i.slug, i]));
