/**
 * Charters — the three engagement models clients buy.
 * Drives the home stepper and the /charters/<slug> pages.
 */

export type Charter = {
  slug: string;
  id: string;          // "Local Service" / "Express"
  title: string;       // "Full Voyage"
  tag: string;         // "All 8 stops"
  blurb: string;
  accent?: "nebula";
  // detail page
  heroSplit: [string, string];
  heroEyebrow: string;
  answer: string;
  best: string;        // who it's best for
  includes: string[];
  timeline: string;
  pricingApproach: string;
  faqs: { q: string; a: string }[];
  titleSEO: string;
  metaDesc: string;
};

export const CHARTERS: Charter[] = [
  {
    slug: "full-voyage",
    id: "Local Service",
    title: "Full Voyage",
    tag: "All 8 stops",
    blurb: "All eight phases, Discovery to Strike — one crew, one charted course, total accountability.",
    accent: "nebula",
    heroSplit: ["The Full", "Voyage."],
    heroEyebrow: "Charter · All Eight Stops",
    answer:
      "The Full Voyage is GHXSTSHIP's end-to-end production engagement — all eight phases of the production lifecycle (Discovery through Strike), one accountable crew, one charted course. Best for clients who want a single partner from first consultation to final celebration.",
    best:
      "Clients running a complex experience for the first time, or partners who want a single accountable line of authority from creative through reconciliation.",
    includes: [
      "Phase 01 Discovery — strategy + scoping consultation",
      "Phase 02 R&D — feasibility, partner & venue exploration",
      "Phase 03 Creative Design — direction, scenic, story",
      "Phase 04 Compliance & Risk — engineering, permits, safety, insurance",
      "Phase 05 Production & Build — fabrication, staging, technical pre-build",
      "Phase 06 Operations & Logistics — crew, vendor, freight, load-in",
      "Phase 07 Live Activation — show calling and live execution",
      "Phase 08 Strike & Post-Production — load-out, reconciliation, analytics",
    ],
    timeline:
      "Typically 12 to 52 weeks. Discovery and R&D set the timeline; phase gates govern the cadence.",
    pricingApproach:
      "Custom, scoped against project tier. Sixty percent on signature, forty percent on load-in. Phase-gated SOW; change orders mean something.",
    faqs: [
      { q: "What's included in the Full Voyage?", a: "All eight phases of the production lifecycle, one accountable crew (Captain · First Mate · Navigator · Quartermaster · Bosun), and the ATLVS / COMPVSS / GVTEWAY technology stack — from Discovery through Strike and post-production analytics." },
      { q: "Who is the Full Voyage best for?", a: "Clients running complex experiences who want a single partner end to end — not a chain of vendors. Festival promoters, brands launching a flagship activation, immersive experience operators, sporting series." },
      { q: "Can I drop a phase?", a: "Yes — switch to By Vertical or À La Carte. The Full Voyage means we own the full lifecycle; if you only need part, charter accordingly." },
    ],
    titleSEO: "Full Voyage Engagement — GHXSTSHIP",
    metaDesc: "The Full Voyage is GHXSTSHIP's end-to-end production engagement — all eight phases of the production lifecycle, one accountable crew, one charted course.",
  },
  {
    slug: "by-vertical",
    id: "Express",
    title: "By Vertical",
    tag: "Select stops",
    blurb: "Charter a single vertical: Production, Operations, or Technology — plug us in where you need us.",
    heroSplit: ["By", "Vertical."],
    heroEyebrow: "Charter · Production · Operations · Technology",
    answer:
      "By Vertical is a GHXSTSHIP engagement scoped to a single vertical: Production (we build the show), Operations (we run the machine), or Technology (we build the tools). Plug us in where you need us — alongside your existing team — without taking on the full eight-phase lifecycle.",
    best:
      "Teams with strong in-house capability in one or two areas who need a senior partner for the rest — and clients who want to start with a vertical and graduate to a Full Voyage.",
    includes: [
      "Production — creative direction · scenic & fabrication · technical · show calling",
      "Operations — logistics · crew · vendors · compliance · on-site ops · analytics",
      "Technology — ATLVS deploy · COMPVSS deploy · GVTEWAY deploy · integration support",
    ],
    timeline:
      "Tied to the chosen vertical's scope. Production engagements run on the show clock; Operations engagements often span multi-event programs; Technology engagements are typically multi-month deployments plus support.",
    pricingApproach:
      "Vertical-specific. Production scopes are usually project-based; Operations scopes are typically retainer; Technology scopes are SaaS plus implementation.",
    faqs: [
      { q: "Can I charter more than one vertical?", a: "Yes — many engagements combine two verticals (for example: Production + Operations). Combining all three is functionally a Full Voyage." },
      { q: "How is By Vertical different from Full Voyage?", a: "Full Voyage means GHXSTSHIP owns all eight lifecycle phases. By Vertical means we own one vertical's worth of those phases — your team or another partner owns the rest." },
      { q: "Is the Technology vertical only software?", a: "ATLVS, COMPVSS, and GVTEWAY are the products — but the engagement includes implementation, integration, and ongoing support, not just a license." },
    ],
    titleSEO: "By Vertical Engagement — Production / Operations / Technology — GHXSTSHIP",
    metaDesc: "Charter a single GHXSTSHIP vertical: Production (we build the show), Operations (we run the machine), or Technology (we build the tools). Plug us in where you need us.",
  },
  {
    slug: "a-la-carte",
    id: "Express",
    title: "À La Carte",
    tag: "Your stops",
    blurb: "Select individual lifecycle phases or services. A custom charter for exactly what your voyage requires.",
    heroSplit: ["À La", "Carte."],
    heroEyebrow: "Charter · Your Stops",
    answer:
      "À La Carte is a GHXSTSHIP engagement scoped to individual lifecycle phases or specific services — a custom charter for clients who need exactly one or two legs of the voyage, not a full vertical or a full lifecycle.",
    best:
      "Producers who have most of the production wired but need senior support on a single phase — typically Compliance & Risk, Live Activation show calling, or Strike & analytics.",
    includes: [
      "Single-phase engagements (Phase 04 Compliance, Phase 07 Live Activation, etc.)",
      "Specific-service engagements (show calling, scenic build, crew supply, technical advance)",
      "Advisory engagements (production strategy, technology selection, ATLVS / COMPVSS / GVTEWAY consulting)",
    ],
    timeline:
      "From a single show date through multi-month phase engagements. Scoped to the work.",
    pricingApproach:
      "Project-based or day-rate, depending on the work. Most À La Carte engagements price by phase or by deliverable.",
    faqs: [
      { q: "Can I start À La Carte and add more?", a: "Yes — many À La Carte engagements graduate to By Vertical or Full Voyage as scope expands." },
      { q: "What's the minimum engagement?", a: "We've taken single show calls. We've also taken a single Phase 04 Compliance review. If it's well-scoped, we'll charter it." },
      { q: "Can you advise without producing?", a: "Yes — advisory engagements (production strategy, technology selection, vendor selection) are common À La Carte scopes." },
    ],
    titleSEO: "À La Carte Engagement — Per-Phase Production Services — GHXSTSHIP",
    metaDesc: "À La Carte is a GHXSTSHIP engagement scoped to individual lifecycle phases or specific services — a custom charter for exactly the legs your voyage requires.",
  },
];

export const CHARTER_BY_SLUG: Record<string, Charter> =
  Object.fromEntries(CHARTERS.map((c) => [c.slug, c]));
