import type { PhaseSlug } from "./types";

/**
 * 8-Phase Production Lifecycle — proposal-shape data for each phase.
 * Mirrors the canonical structure used in client proposals (see
 * reference_proposal_template.md): every phase carries a deadline
 * window, milestones, deliverables, and an approval gate that must
 * close before the next phase can begin.
 *
 * Sample data here represents a typical 12-week per-project engagement.
 * Real engagements bind real dates; this is the marketing-surface
 * placeholder that lets visitors see the shape of the work.
 */

export interface LifecyclePhase {
  slug: PhaseSlug;
  number: string;
  name: string;
  /** Sample window for a 12-week engagement. */
  sampleWindow: string;
  /** What gets done. */
  milestones: string[];
  /** What you receive at the end of the phase. */
  deliverables: string[];
  /** What must close before the next phase can begin. */
  approvalGate: string;
}

export const LIFECYCLE: LifecyclePhase[] = [
  {
    slug: "discovery",
    number: "01",
    name: "Discovery",
    sampleWindow: "Weeks 1 – 2",
    milestones: [
      "Brief intake + scope alignment",
      "Site selection and venue sourcing",
      "Feasibility assessment + budget envelope",
      "Insurance binding + permit posture review",
    ],
    deliverables: [
      "Three-to-seven venue shortlist with comparison matrix",
      "Feasibility brief + budget range",
      "Bound insurance policies + initial COIs",
      "Signed master service agreement",
    ],
    approvalGate: "Client signs MSA and approves the venue selection.",
  },
  {
    slug: "concept",
    number: "02",
    name: "Concept",
    sampleWindow: "Weeks 2 – 4",
    milestones: [
      "Creative direction + scenic design",
      "Technical design — audio, lighting, video systems",
      "F&B menu architecture + sourcing matrix",
      "Programming run-sheet draft",
    ],
    deliverables: [
      "Concept renderings + material boards",
      "System designs with predictions and equipment lists",
      "Menu architecture with cost breakdown",
      "Run-of-show v1",
    ],
    approvalGate: "Client signs off on creative concept + technical envelope.",
  },
  {
    slug: "develop",
    number: "03",
    name: "Develop",
    sampleWindow: "Weeks 4 – 6",
    milestones: [
      "Stamped engineering + structural calcs",
      "Bill of materials finalization",
      "Crowd flow modeling + MOT plan",
      "Vendor onboarding + compliance matrix",
    ],
    deliverables: [
      "Stamped or unstamped engineering package",
      "Complete BOM + shop drawings",
      "Stamped MOT and crowd-flow certification",
      "Vendor MSA + COI repository",
    ],
    approvalGate: "Engineering stamped, vendors onboarded, permits filed.",
  },
  {
    slug: "advance",
    number: "04",
    name: "Advance",
    sampleWindow: "Weeks 6 – 9",
    milestones: [
      "Talent and crew travel booking",
      "Hotel block + ground transport contracted",
      "Supply chain advance ship",
      "Per diem distribution + catering spin-up",
    ],
    deliverables: [
      "Talent itineraries + accommodation schedule",
      "Ground transportation plan with dispatch",
      "Advance ship manifest + on-site delivery schedule",
      "Per diem schedule + catering contracts",
    ],
    approvalGate: "All travel locked, vendors confirmed, advance arrived on site.",
  },
  {
    slug: "build",
    number: "05",
    name: "Build",
    sampleWindow: "Weeks 9 – 11",
    milestones: [
      "Custom fabrication delivered to site",
      "Set construction + scenic install",
      "AV deployment + power tie-in",
      "Crew load-in across all departments",
    ],
    deliverables: [
      "Built scenic with QC documentation + crating",
      "AV systems commissioned + signal-flow verified",
      "Power distro live + fuel logistics in place",
      "Daily call sheets + time tracking",
    ],
    approvalGate: "Fire marshal sign-off, ADA validation, full system tech rehearsal complete.",
  },
  {
    slug: "show",
    number: "06",
    name: "Show",
    sampleWindow: "Show Days",
    milestones: [
      "Show-call execution",
      "Hospitality + F&B service",
      "Real-time risk monitoring",
      "Broadcast transmission (where briefed)",
    ],
    deliverables: [
      "Live show ops with redundant comms",
      "Service delivery to brand standards",
      "Daily incident reports + decision logs",
      "Recorded show + content cutdowns (where briefed)",
    ],
    approvalGate: "Show closes without unresolved incident; client signs daily wrap.",
  },
  {
    slug: "strike",
    number: "07",
    name: "Strike",
    sampleWindow: "Strike + 1 Week",
    milestones: [
      "De-rig + load-out",
      "Asset return to storage or client",
      "Crew demobilization",
      "Fixer release + final venue walkthrough",
    ],
    deliverables: [
      "Venue cleared per contract conditions",
      "Asset condition reports + storage receipts",
      "Crew time reconciliation",
      "Punch list of any remaining items",
    ],
    approvalGate: "Venue release signed by client + venue ops; assets booked into storage.",
  },
  {
    slug: "wrap",
    number: "08",
    name: "Wrap",
    sampleWindow: "Wrap + 4 Weeks",
    milestones: [
      "Vendor invoice reconciliation",
      "Change-order closeout",
      "Sustainability + ESG measurement",
      "Asset cataloging + portfolio production",
    ],
    deliverables: [
      "Final P&L + reconciliation package",
      "Sustainability report ready for sponsor circulation",
      "Photo / video library + case study draft",
      "Archive document set transferred to client",
    ],
    approvalGate: "Final invoice paid; case study approved for portfolio use.",
  },
];

export const LIFECYCLE_BY_SLUG = Object.fromEntries(LIFECYCLE.map((p) => [p.slug, p])) as Record<
  PhaseSlug,
  LifecyclePhase
>;
