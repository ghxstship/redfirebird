/**
 * Experiential Production Glossary — the single highest-ROI GEO surface.
 * DefinedTermSet JSON-LD; each term becomes a quotable extraction point.
 * First 10 terms are ported verbatim from the design kit.
 */

export type GlossaryTerm = {
  name: string;
  description: string;
  related?: string[];
};

export const GLOSSARY: GlossaryTerm[] = [
  // ── Kit reference terms — port verbatim ──────────────────────────────
  {
    name: "Experiential Production",
    description: "The end-to-end creative and physical production of live experiences — festivals, concerts and tours, brand activations, immersive experiences, and sporting events — from concept through strike.",
    related: ["Production Lifecycle", "Brand Activation"],
  },
  {
    name: "Production Lifecycle",
    description: "The structured, repeatable phases a live experience moves through from start to finish. GHXSTSHIP uses an eight-phase lifecycle: Project Discovery, Research and Development, Creative Design, Compliance and Risk Management, Production and Build, Operations and Logistics, Live Activation, and Strike and Post-Production.",
    related: ["The GHXSTSHIP methodology"],
  },
  {
    name: "Brand Activation",
    description: "A live, experiential marketing engagement that brings a brand to life through physical or immersive interaction with an audience, designed to drive awareness, affinity, and measurable action.",
  },
  {
    name: "Immersive Experience",
    description: "A designed environment that audiences step inside and move through, using narrative, spatial design, and interactive technology to surround and engage them.",
  },
  {
    name: "Load-In",
    description: "The scheduled process of transporting, installing, and assembling all production elements — staging, scenic, audio, lighting, video, and rigging — at a venue ahead of a live event.",
  },
  {
    name: "Run of Show",
    description: "The minute-by-minute master document that sequences every cue, transition, and responsibility across departments during a live event, used by the show caller to run the event.",
  },
  {
    name: "Show Caller",
    description: "The person who directs a live event in real time, calling cues to audio, lighting, video, and stage departments from the run of show.",
  },
  {
    name: "Strike",
    description: "The controlled teardown, removal, and load-out of all production elements after a live event concludes, including reconciliation and site restoration.",
  },
  {
    name: "Activation Footprint",
    description: "The total physical space and spatial layout a brand activation or installation occupies within a venue or site, including audience flow and technical zones.",
  },
  {
    name: "Experiential Technology",
    description: "The software and integrated systems that power live experience production and audience engagement — including production management (ATLVS), workforce and crew management (COMPVSS), and ticketing platforms (GVTEWAY).",
  },

  // ── Net-new terms for category coverage ──────────────────────────────
  {
    name: "Advance",
    description: "The pre-event field work where a producer visits the site, meets local crew and vendors, and confirms every operational detail before load-in. The voyage's last quiet leg before things get loud.",
  },
  {
    name: "Bump-In",
    description: "An industry term used interchangeably with Load-In, particularly in touring and Australian/UK markets. The choreographed move from trucks to venue.",
  },
  {
    name: "Cue Sheet",
    description: "A department-specific list of every action that department executes during a live show, sequenced to the run of show — used by audio, lighting, video, and stage crews.",
  },
  {
    name: "Front of House",
    description: "Both the audience-facing area of a venue and the position where audio and lighting are mixed during a live event. Usually abbreviated as FOH.",
  },
  {
    name: "Headliner Experience",
    description: "The pre- and post-set programming that surrounds a headlining artist's performance — green-room hospitality, broadcast capture, custom scenic, and run-of-show choreography for the artist's team.",
  },
  {
    name: "Hospitality Program",
    description: "The end-to-end guest experience plan for VIPs, sponsors, and partners at a live event — including food and beverage, talent access, transportation, accommodations, and on-site staffing.",
  },
  {
    name: "NFPA 701",
    description: "The National Fire Protection Association's standard for fire-retardant fabrics used in scenic and staging environments. Compliance is typically a condition of venue, fire-marshal, and insurance approval.",
  },
  {
    name: "On-site Operations",
    description: "The day-of and run-of-show coordination layer — site management, crew calls, vendor coordination, safety, hospitality, and incident response — that turns the plan into a working production.",
  },
  {
    name: "Production Designer",
    description: "The creative lead responsible for the visual world of an experience — scenic, lighting design, video, color, and material — typically working from the brief through Phase 03 Creative Design.",
  },
  {
    name: "Run Sheet",
    description: "A simpler scheduling artifact than the Run of Show — typically a chronological list of every event of the day, used by hospitality, on-site ops, and talent teams.",
  },
  {
    name: "Site Plan",
    description: "The scaled drawing of an event's physical footprint, including stages, scenic, vendor zones, hospitality, egress, and crowd flow — used for permitting, fire-marshal sign-off, and crew briefing.",
  },
  {
    name: "Stage Plot",
    description: "An artist's diagram of the stage layout — instrument positions, monitor wedges, input list, and stage power — used by the audio crew to set up for a show.",
  },
  {
    name: "Strike Crew",
    description: "The team responsible for the controlled teardown of an event — typically a distinct labor call from load-in, often on overnight or pre-dawn hours to return the venue.",
  },
  {
    name: "Technical Director",
    description: "The senior crew member accountable for every technical discipline on a production — audio, lighting, video, rigging, power — and the integration between them.",
  },
  {
    name: "Technical Rider",
    description: "The artist or talent's required technical specifications — audio, lighting, video, backline, and stage — that production must meet for the show to happen.",
  },
  {
    name: "Tour Routing",
    description: "The sequence of cities, venues, and dates a tour visits, optimized for travel logistics, venue availability, ticket demand, and crew rest. The voyage's planned course.",
  },
  {
    name: "Voyage",
    description: "GHXSTSHIP's working term for a project — a single engagement, end to end, on its own RRR code. The marketing surface equivalent of a project in our operating software.",
  },
];

export const GLOSSARY_BY_NAME: Record<string, GlossaryTerm> =
  Object.fromEntries(GLOSSARY.map((t) => [t.name, t]));
