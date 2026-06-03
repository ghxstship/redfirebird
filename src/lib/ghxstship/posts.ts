/**
 * Captain's Log — the blog. BlogPosting JSON-LD per entry.
 */

export type Post = {
  slug: string;
  date: string;          // "2026 · 05 · 28"
  iso: string;           // ISO date for schema
  cat: string;           // Field Notes / Press / Crew Call / Dispatches
  title: string;
  excerpt: string;
  body: string;          // markdown-lite — we render to <p>/<h2>/<ul>
  primaryKeyword: string;
  authorRank: string;    // "Captain" etc.
  authorName?: string;   // optional; placeholder if absent
};

export const POSTS: Post[] = [
  {
    slug: "eight-phase-lifecycle",
    date: "2026 · 05 · 28",
    iso: "2026-05-28",
    cat: "Field Notes",
    title: "How the 8-Phase Production Lifecycle Keeps a Build on Course",
    excerpt:
      "Eight phases. One charted course. Why GHXSTSHIP runs every voyage on the same lifecycle — and what each leg actually delivers.",
    primaryKeyword: "production lifecycle",
    authorRank: "Captain",
    body: `
The GHXSTSHIP production lifecycle is eight phases long: Project Discovery, Research and Development, Creative Design, Compliance and Risk Management, Production and Build, Operations and Logistics, Live Activation, and Strike and Post-Production. Every voyage we charter runs the same eight phases in the same order. This is the methodology spec.

## Why eight phases

Most production breaks down in two places: between creative and compliance, and between build and operations. The eight-phase lifecycle exists to put a phase gate at each of those handoffs — and to make every other handoff in the production explicit, signed off, and auditable.

Discovery (Phase 01) sets the route — goals, scope, audience, budget envelope. R&D (Phase 02) tests the route against reality. Creative Design (Phase 03) commits the visual and experiential world. Compliance and Risk (Phase 04) clears the legal and engineering posture before a single board gets cut. Production and Build (Phase 05) fabricates. Operations and Logistics (Phase 06) sequences crew, vendor, and freight. Live Activation (Phase 07) runs the room. Strike and Post-Production (Phase 08) reconciles every cost, returns the site, and writes the wrap.

## What each phase guarantees

Phase gates aren't ceremony. Each one has explicit client sign-off, an artifact, and a green-light on the next phase's charter. Discovery closes with a signed scope of work. R&D closes with a feasibility report. Creative Design closes with approved direction and a buildable package. Compliance closes with PE-stamped engineering, permits, fire-marshal sign-off, and insurance. Build closes with a shop review. Operations closes with a final crew, vendor, and load-in schedule. Activation closes daily — every show day signs off with the client lead. Strike closes with a wrap report and financial reconciliation.

When a project goes sideways, it's usually because someone shortcut a phase gate. The lifecycle exists so that nobody — client or crew — has to remember to ask.

## Where it came from

The eight-phase lifecycle replaces the older 7-D methodology that GHXSTSHIP and its sister practices ran for years. We restructured it to put Compliance and Risk Management explicitly between Creative Design and Production and Build — too many projects were closing creative without the engineering and permitting cleared, then carrying that risk into the fabrication shop. The new Phase 04 fixes that.

The full lifecycle spec is mirrored in ATLVS, COMPVSS, and GVTEWAY — the platforms run the same phase gates the producers run. There's no parallel system. The lifecycle is the methodology, and the technology runs it.

If you're scoping a voyage and want to walk the line: see the Itinerary subway map on the homepage, or open any of the phase pages in the Itinerary section. Every voyage runs all eight stops.
    `.trim(),
  },
  {
    slug: "festival-production-field-manual",
    date: "2026 · 05 · 21",
    iso: "2026-05-21",
    cat: "Field Notes",
    title: "From Site Survey to Strike: A Festival Producer's Field Manual",
    excerpt:
      "The leg-by-leg playbook for festival production — what we check, what we sign, and what we never let slip.",
    primaryKeyword: "festival production process",
    authorRank: "First Mate",
    body: `
Festival production is a logistics problem dressed up as a creative problem. The creative usually closes early; the logistics make or break the show. This is the GHXSTSHIP field manual for festival production — what we check at each phase, what we sign, and what we never let slip.

## Phase 01 — Discovery

Pin the success criteria. "More social impressions than last year" is not a success criteria. "Sell-through capacity by Friday, three-day average dwell over six hours, zero major incidents" is. Pin the envelope.

## Phase 02 — R&D

Walk the site. Drive the roads. Talk to the venue's house crew before the venue's GM. The venue tells you what's allowed; the house crew tells you what works. Both are necessary, neither is sufficient.

## Phase 03 — Creative Design

Lock the headliner experience first, then the multi-stage architecture around it. The headliner's technical rider sets the rigging, audio, lighting, and stage envelope. Design backward from there.

## Phase 04 — Compliance & Risk

Permits, fire-marshal sign-off, insurance, structural engineering. None of these are optional. None of them happen on the fabrication clock. They happen before Phase 05 opens.

## Phase 05 — Build

Build modular. A festival scenic package that can be installed in 48 hours and struck in 24 is a different package than one that takes a week. Design for the load-in window, not the design book.

## Phase 06 — Operations & Logistics

Crew, vendor, and freight all hit the site within the same 72-hour window. Sequence load-in by department, not by truck arrival. The audio crew needs the rig before the video crew needs the rig before the headliner's tech needs the rig.

## Phase 07 — Live Activation

Show calling. Every cue, every transition, every department — from one room, off one document. Hospitality runs in parallel; broadcast runs in parallel; security runs in parallel; but the show runs from one call.

## Phase 08 — Strike

The site has to come back. Site restoration is not a Phase 08 task — it's a Phase 04 condition. Plan it before you build.

The field manual is incomplete by design. Every voyage adds to it. If you're scoping a festival, open a conversation — we'll walk you through the lifecycle as it applies to your specific footprint.
    `.trim(),
  },
  {
    slug: "load-in-checklist",
    date: "2026 · 05 · 14",
    iso: "2026-05-14",
    cat: "Field Notes",
    title: "Load-In Without the Panic: A Show Caller's Checklist",
    excerpt:
      "A show caller's pre-load-in checklist — what you read, what you confirm, what you sign, and what you do not assume.",
    primaryKeyword: "event load-in checklist",
    authorRank: "Bosun",
    body: `
The show caller's first responsibility is not the show. It's the load-in. Get load-in right and the show runs itself. Get load-in wrong and you spend three days catching up. Here is the pre-load-in checklist.

## What you read before the truck arrives

Read the site plan. Twice. Once for the footprint, once for the egress. The site plan is the only document that tells you where every department's gear physically belongs. If you cannot point to where audio's amp racks live, you are not ready for load-in.

Read the technical rider. Twice. Once for the input list, once for the rigging and power requirements. The rider is the artist's contract; production has to meet it.

Read the run of show. Once. The run of show tells you what each department needs operational, by when. Load-in sequencing flows backward from the run of show.

## What you confirm before the truck arrives

Confirm power. The venue's distro plan and your distro plan have to match. Power is the most common reason a load-in stalls. If you're not confident in the venue's power, walk the breakers with the house electrician.

Confirm rigging. Confirm the rigging plot has been signed by venue and engineer. Confirm the rigger has a copy. Confirm the rigger has the right rigging.

Confirm crew. Confirm the call. Confirm the calls before and after. Confirm OT thresholds. Confirm the meal break.

## What you sign

Sign the venue's load-in waiver. Sign the vendor delivery manifest. Sign the rigging engineer's inspection. Sign the venue's tech inspection. Do not start load-in without the signatures.

## What you do not assume

Do not assume the truck is on time. Do not assume the vendor knows the venue. Do not assume the venue's crew read the brief. Do not assume the artist's tech is reachable. Do not assume.

The checklist is not exhaustive. The checklist is the floor.
    `.trim(),
  },
  {
    slug: "new-immersive-work-miami",
    date: "2026 · 05 · 07",
    iso: "2026-05-07",
    cat: "Press",
    title: "GHXSTSHIP Charts New Immersive Work in Miami",
    excerpt:
      "A note on the next leg of the GHXSTSHIP immersive practice — built on Salvage City, headed somewhere new.",
    primaryKeyword: "immersive experience Miami",
    authorRank: "Captain",
    body: `
Salvage City Supper Club proved that an immersive world can be installed inside a working venue without compromising the venue or the world. Two years on, that thesis holds — and the next immersive voyage is in R&D.

We're not naming the project yet. We are naming the thesis: immersive experiences should live in spaces that already have an identity, not in white-box rentals. The audience in Miami doesn't want a black box. The audience in Miami wants a place they know, rebuilt from the inside out, with the technology and the narrative arc to surround them.

Watch the Archives. The next voyage is logging soon.
    `.trim(),
  },
  {
    slug: "now-boarding-skeleton-crew",
    date: "2026 · 04 · 30",
    iso: "2026-04-30",
    cat: "Crew Call",
    title: "Now Boarding — How We Hire the Skeleton Crew",
    excerpt:
      "How GHXSTSHIP hires producers, technicians, and logistics leads — and how to put your name on the board.",
    primaryKeyword: "experiential production careers",
    authorRank: "Navigator",
    body: `
The Skeleton Crew is small by design. We hire when a voyage requires it, we hire senior, and we hire for the long haul.

## What we hire for

Production directors. Producers. Project managers. Technical directors. Logistics and operations leads. Hospitality leads. ATLVS, COMPVSS, and GVTEWAY engineers and designers.

We hire for craft, judgment, and reliability — in that order. Craft is what you've shipped; judgment is what you did when the plan changed; reliability is what your last three clients say about you. We will read your portfolio. We will call your references. We will ask you what went wrong on your last project and what you learned.

## What we expect

Show up. Know the gear. Read the brief. Sign the waiver. Call the crew. Keep the room. Strike clean. Wrap honest.

The next generation of experiential producers is who we're training. If you're early career, the Crew Call is for you too — apprenticeship framing, mentor not recruiter.

## How to apply

Email the Navigator. Tell us what you've shipped. Tell us what you want to ship next. We'll respond inside a business week.

Now boarding.
    `.trim(),
  },
  {
    slug: "why-we-built-our-own-software",
    date: "2026 · 04 · 16",
    iso: "2026-04-16",
    cat: "Dispatches",
    title: "The Atlas, the Compass, the Gateway: Why We Built Our Own Software",
    excerpt:
      "ATLVS, COMPVSS, and GVTEWAY weren't a product strategy. They were a survival mechanism that turned into a product strategy.",
    primaryKeyword: "event production software",
    authorRank: "Captain",
    body: `
We started building ATLVS because the spreadsheet broke. We started building COMPVSS because the scheduling tool didn't understand certifications. We started building GVTEWAY because the ticketing platforms wanted a cut of the relationship with our audience.

## ATLVS — the Atlas

Project management software for live event production didn't exist as a category. Generic PM tools — Asana, Monday, Notion — treat every project as a task list. A live event is not a task list. It's a phase-gated commitment with budget burn, vendor and venue dependencies, scenic and AV inventory, and a hard deadline. ATLVS treats those as first-class objects.

## COMPVSS — the Compass

Scheduling tools for the gig economy didn't understand that a rigger without a current SafeRig certification cannot legally rig — and that the venue's insurance is conditional on it. COMPVSS was built around credentials, OT-aware scheduling, and labor compliance from the first commit.

## GVTEWAY — the Gateway

Ticketing platforms had built their business on owning the relationship with the audience and selling it back to the operator. We wanted operators to own that relationship — branded ticket flow, RFID at the gate, post-event community in the operator's surface, not the platform's.

## Why this matters

Three platforms, one operating system. Every project in ATLVS pulls crew from COMPVSS and routes guests through GVTEWAY. The lifecycle the producers run is the lifecycle the technology runs. There's no parallel system, no integration gap, no Tuesday-morning surprise.

We didn't intend to be a software company. We are now, because the only way to run experiential at scale is to own the stack.
    `.trim(),
  },
];

export const POST_BY_SLUG: Record<string, Post> =
  Object.fromEntries(POSTS.map((p) => [p.slug, p]));
