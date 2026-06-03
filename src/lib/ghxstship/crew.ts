/**
 * The Skeleton Crew — five core ranks + Join the Crew.
 * Real names TBD; this scaffolds Person schema and per-rank cards.
 */

export type CrewRole = {
  rank: string;
  title: string;
  blurb: string;
  responsibilities: string[];
  activeIn: string[]; // phase slugs
};

export const CREW: CrewRole[] = [
  {
    rank: "Captain",
    title: "Executive Producer",
    blurb: "Owns the vision and the voyage, end to end.",
    responsibilities: [
      "Client relationship and accountability",
      "Project scope, contract, and commercial",
      "Final sign-off on every phase gate",
      "Risk posture and incident response",
    ],
    activeIn: ["discovery", "research-development", "creative-design", "compliance-risk", "production-build", "operations-logistics", "live-activation", "strike-post-production"],
  },
  {
    rank: "First Mate",
    title: "Production Director",
    blurb: "Runs the show floor and the build.",
    responsibilities: [
      "Production timeline and build schedule",
      "Crew and vendor leadership on-site",
      "Daily live-activation client sign-off",
      "Operational decision authority during build and show",
    ],
    activeIn: ["creative-design", "compliance-risk", "production-build", "operations-logistics", "live-activation", "strike-post-production"],
  },
  {
    rank: "Navigator",
    title: "Project Management",
    blurb: "Charts the itinerary, holds the timeline.",
    responsibilities: [
      "Project plan and phase gates in ATLVS",
      "Budget tracking and change orders",
      "Phase-by-phase deliverables and approvals",
      "Phase 08 reconciliation and wrap report",
    ],
    activeIn: ["discovery", "research-development", "creative-design", "compliance-risk", "production-build", "operations-logistics", "strike-post-production"],
  },
  {
    rank: "Quartermaster",
    title: "Logistics & Ops",
    blurb: "Crew, vendors, freight, and load-in.",
    responsibilities: [
      "Crew scheduling and OT compliance in COMPVSS",
      "Vendor coordination and freight",
      "Load-in / load-out sequencing",
      "On-site ops rhythm during show days",
    ],
    activeIn: ["compliance-risk", "production-build", "operations-logistics", "live-activation", "strike-post-production"],
  },
  {
    rank: "Bosun",
    title: "Technical Director",
    blurb: "Audio, lighting, video, rigging, power.",
    responsibilities: [
      "Technical design and integration across departments",
      "Vendor selection and technical advance",
      "Rigging engineering coordination",
      "Live technical execution and incident response",
    ],
    activeIn: ["creative-design", "compliance-risk", "production-build", "operations-logistics", "live-activation"],
  },
];

export const JOIN_CREW = {
  rank: "Now Boarding",
  title: "Join the Crew",
  blurb: "Training the next generation of experiential producers. Learn the ropes ↗",
  href: "/crew/join",
};
