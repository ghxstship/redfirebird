/**
 * The 8-Phase Production Lifecycle — the Itinerary.
 * Each phase has its own /itinerary/<slug> page with Article + HowToStep schema.
 */

export type Phase = {
  slug: string;
  n: string;              // "01"–"08"
  name: string;
  alias: string;          // formal name on the page
  sub: string;            // subway-map subtitle
  term?: boolean;         // first / last stop
  // page content
  titleSEO: string;
  metaDesc: string;
  heroSplit: [string, string];
  eyebrow: string;
  answer: string;
  deliverables: string[];
  crew: string[];         // ranks active
  risks: string[];
  clientSignoff: string;
  connectsTo?: string;    // next phase slug
  keywords: string[];
};

export const PHASES: Phase[] = [
  {
    slug: "discovery",
    n: "01",
    name: "Discovery",
    alias: "Project Discovery",
    sub: "Board · Consult",
    term: true,
    titleSEO: "Phase 01 — Project Discovery — GHXSTSHIP Lifecycle",
    metaDesc: "Phase 01 of the GHXSTSHIP eight-phase production lifecycle — Project Discovery. The consultation that sets the route: goals, scope, audience, and feasibility.",
    heroSplit: ["Project", "Discovery."],
    eyebrow: "The Itinerary · Stop 01 of 08",
    answer:
      "Phase 01 — Project Discovery — is the consultation leg of the GHXSTSHIP production lifecycle, where goals, scope, audience, budget envelope, and success criteria get defined. It is the first formal engagement between client and crew, and it sets the route for every subsequent phase.",
    deliverables: ["Project brief & scope of work", "Audience & success criteria", "Budget envelope", "Initial timeline", "Phase 02 R&D charter"],
    crew: ["Captain · Executive Producer", "Navigator · Project Management"],
    risks: ["Scope drift if Discovery closes without explicit success criteria", "Hidden constraints surfaced late (venue, talent, sponsor)"],
    clientSignoff: "Signed scope-of-work and approved Phase 02 R&D charter.",
    connectsTo: "research-development",
    keywords: ["production discovery", "event project scoping", "experiential brief", "production consultation"],
  },
  {
    slug: "research-development",
    n: "02",
    name: "R&D",
    alias: "Research & Development",
    sub: "Feasibility",
    titleSEO: "Phase 02 — Research & Development — GHXSTSHIP Lifecycle",
    metaDesc: "Phase 02 of the GHXSTSHIP eight-phase production lifecycle — Research & Development. Feasibility studies, concepts, and partner exploration.",
    heroSplit: ["Research &", "Development."],
    eyebrow: "The Itinerary · Stop 02 of 08",
    answer:
      "Phase 02 — Research & Development — is the feasibility leg of the GHXSTSHIP production lifecycle. The crew validates concepts against venues, technology, partners, and budget reality before committing the project to creative.",
    deliverables: ["Feasibility report", "Concept exploration", "Venue & partner shortlist", "Technology recommendations", "Refined budget"],
    crew: ["Captain · Executive Producer", "Navigator · Project Management", "Production Designer (advisory)"],
    risks: ["Falling in love with infeasible concepts", "Vendor or venue lock-in before R&D closes"],
    clientSignoff: "Approved feasibility report and creative concept direction.",
    connectsTo: "creative-design",
    keywords: ["event feasibility", "production R&D", "experience concept development"],
  },
  {
    slug: "creative-design",
    n: "03",
    name: "Design",
    alias: "Creative Design",
    sub: "Direction",
    titleSEO: "Phase 03 — Creative Design — GHXSTSHIP Lifecycle",
    metaDesc: "Phase 03 of the GHXSTSHIP eight-phase production lifecycle — Creative Design. Direction, scenic design, technical design, and experiential storytelling.",
    heroSplit: ["Creative", "Design."],
    eyebrow: "The Itinerary · Stop 03 of 08",
    answer:
      "Phase 03 — Creative Design — is the direction leg of the GHXSTSHIP production lifecycle. Creative direction, scenic and technical design, and experiential storytelling get committed before the build begins.",
    deliverables: ["Creative direction document", "Scenic design package (drawings, materials, finishes)", "Technical design package (audio, lighting, video, rigging)", "Run-of-show framework", "Approved renders & walkthroughs"],
    crew: ["Production Designer", "Technical Director · Bosun", "First Mate · Production Director"],
    risks: ["Design unbuildable inside budget envelope (caught early via R&D)", "Late creative changes after Phase 04 close"],
    clientSignoff: "Approved creative direction, scenic package, and technical design.",
    connectsTo: "compliance-risk",
    keywords: ["experiential creative design", "scenic design", "event creative direction"],
  },
  {
    slug: "compliance-risk",
    n: "04",
    name: "Compliance",
    alias: "Compliance & Risk Management",
    sub: "Eng · Safety",
    titleSEO: "Phase 04 — Compliance & Risk Management — GHXSTSHIP Lifecycle",
    metaDesc: "Phase 04 of the GHXSTSHIP eight-phase production lifecycle — Compliance & Risk Management. Engineering, permits, fire safety, insurance, and risk planning.",
    heroSplit: ["Compliance", "& Risk."],
    eyebrow: "The Itinerary · Stop 04 of 08",
    answer:
      "Phase 04 — Compliance & Risk Management — is the engineering and safety leg of the GHXSTSHIP production lifecycle. Stamped engineering, permits, fire-marshal sign-off, insurance, and operational risk planning all clear before the build begins.",
    deliverables: ["PE-stamped engineering for scenic and rigging", "Permits & municipal approvals", "Fire-marshal sign-off", "Insurance certificates", "Health & safety plan", "Incident response plan"],
    crew: ["First Mate · Production Director", "Technical Director · Bosun", "Quartermaster · Logistics & Ops"],
    risks: ["Permit delays pushing load-in", "Engineering rework after fabrication", "Inadequate insurance posture for talent or venue"],
    clientSignoff: "Approved compliance package — engineering, permits, insurance.",
    connectsTo: "production-build",
    keywords: ["event compliance", "production risk management", "NFPA 701 compliance", "event permits"],
  },
  {
    slug: "production-build",
    n: "05",
    name: "Build",
    alias: "Production & Build",
    sub: "Fabrication",
    titleSEO: "Phase 05 — Production & Build — GHXSTSHIP Lifecycle",
    metaDesc: "Phase 05 of the GHXSTSHIP eight-phase production lifecycle — Production & Build. Fabrication, staging, technical pre-build, and on-site preparation.",
    heroSplit: ["Production", "& Build."],
    eyebrow: "The Itinerary · Stop 05 of 08",
    answer:
      "Phase 05 — Production & Build — is the fabrication leg of the GHXSTSHIP production lifecycle. Scenic gets built, technical systems get pre-rigged and tested, and the entire production package gets prepared for transport to site.",
    deliverables: ["Fabricated scenic package", "Pre-rigged technical systems (audio, lighting, video)", "Tested control systems", "Crated, manifested transport package", "Build documentation for site team"],
    crew: ["First Mate · Production Director", "Technical Director · Bosun", "Quartermaster · Logistics & Ops"],
    risks: ["Build overruns affecting load-in window", "Quality issues caught at install instead of in shop"],
    clientSignoff: "Approved build review or shop visit before transport.",
    connectsTo: "operations-logistics",
    keywords: ["scenic fabrication", "production build", "technical pre-rig", "event staging"],
  },
  {
    slug: "operations-logistics",
    n: "06",
    name: "Operations",
    alias: "Operations & Logistics",
    sub: "Logistics",
    titleSEO: "Phase 06 — Operations & Logistics — GHXSTSHIP Lifecycle",
    metaDesc: "Phase 06 of the GHXSTSHIP eight-phase production lifecycle — Operations & Logistics. Logistics, crew, vendors, scheduling, and load-in.",
    heroSplit: ["Operations", "& Logistics."],
    eyebrow: "The Itinerary · Stop 06 of 08",
    answer:
      "Phase 06 — Operations & Logistics — is the leg of the GHXSTSHIP production lifecycle where logistics, crew, vendors, scheduling, and load-in converge. It runs in the days and weeks immediately before Live Activation, and turns the plan into a deployable production.",
    deliverables: ["Crew calls & schedules", "Vendor coordination & freight", "Load-in & install schedule", "Site map & crew briefing", "Daily on-site operations rhythm"],
    crew: ["Quartermaster · Logistics & Ops", "First Mate · Production Director", "Bosun · Technical Director"],
    risks: ["Freight delays at load-in", "Crew shortages on peak labor days", "Vendor underperformance on-site"],
    clientSignoff: "Final crew, vendor, and load-in schedule.",
    connectsTo: "live-activation",
    keywords: ["event logistics", "event load-in", "production crew scheduling", "site operations"],
  },
  {
    slug: "live-activation",
    n: "07",
    name: "Activation",
    alias: "Live Activation",
    sub: "Showtime",
    titleSEO: "Phase 07 — Live Activation — GHXSTSHIP Lifecycle",
    metaDesc: "Phase 07 of the GHXSTSHIP eight-phase production lifecycle — Live Activation. Show calling and live execution — the experience itself.",
    heroSplit: ["Live", "Activation."],
    eyebrow: "The Itinerary · Stop 07 of 08",
    answer:
      "Phase 07 — Live Activation — is the showtime leg of the GHXSTSHIP production lifecycle. The show caller runs the room from the run of show, every department executes against its cue sheet, and the experience the client paid for happens.",
    deliverables: ["Show calling", "Live technical execution", "On-site hospitality program delivery", "Incident response", "Live capture (broadcast / content)"],
    crew: ["Captain · Executive Producer (oversight)", "First Mate · Production Director (floor)", "Bosun · Technical Director (technical)", "Show Caller"],
    risks: ["Talent variance", "Weather / venue / external incident", "Technical failure (caught by Phase 05 / Phase 06 redundancy)"],
    clientSignoff: "Daily on-site sign-off with the client lead.",
    connectsTo: "strike-post-production",
    keywords: ["show calling", "live event execution", "live activation", "event production day"],
  },
  {
    slug: "strike-post-production",
    n: "08",
    name: "Strike",
    alias: "Strike & Post-Production",
    sub: "Arrive · Celebrate",
    term: true,
    titleSEO: "Phase 08 — Strike & Post-Production — GHXSTSHIP Lifecycle",
    metaDesc: "Phase 08 of the GHXSTSHIP eight-phase production lifecycle — Strike & Post-Production. Load-out, reconciliation, analytics, and the debrief.",
    heroSplit: ["Strike &", "Post-Production."],
    eyebrow: "The Itinerary · Stop 08 of 08",
    answer:
      "Phase 08 — Strike & Post-Production — is the closing leg of the GHXSTSHIP production lifecycle. The site gets returned clean, every cost gets reconciled, every metric gets reported, and the voyage logs into the Archives.",
    deliverables: ["Controlled strike & load-out", "Site restoration & venue sign-off", "Financial reconciliation", "Post-event analytics report", "Wrap document & lessons-learned"],
    crew: ["Quartermaster · Logistics & Ops", "First Mate · Production Director", "Navigator · Project Management (reconciliation)"],
    risks: ["Damage charges from venue", "Open vendor invoices", "Missing data for analytics report"],
    clientSignoff: "Approved wrap report and financial reconciliation.",
    keywords: ["event strike", "load-out", "event reconciliation", "post-event analytics"],
  },
];

export const PHASE_BY_SLUG: Record<string, Phase> =
  Object.fromEntries(PHASES.map((p) => [p.slug, p]));
