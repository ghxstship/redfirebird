import type { SagaSlug, SpotlightSlug } from "./spotlights";

/**
 * Issues — numbered case studies. Each delivered project becomes an
 * Issue, MCU-style: stable issue number, saga affiliation, spotlight
 * (visual identity overlay), year, and a one-paragraph thesis.
 *
 * Issue numbering is monotonic and append-only. Issues that haven't
 * shipped yet appear with a `status: "upcoming"` flag — visible on the
 * hub as "Coming Late 2026" teasers, MCU phase-roadmap style.
 */

export type IssueStatus = "shipped" | "upcoming" | "in-flight";

export interface Issue {
  /** Padded display number — 001, 014, 042. Stable identifier. */
  number: string;
  slug: string;
  title: string;
  /** Subtitle / project city / one-line scope. */
  subtitle: string;
  saga: SagaSlug;
  spotlight: SpotlightSlug;
  /** Calendar year of show date. */
  year: number;
  status: IssueStatus;
  /** Short thesis — one paragraph, marketing voice. */
  thesis: string;
  /** Service catalog numbers anchored in this engagement. */
  anchoredServices: number[];
  /** Tags for the issue card. */
  tags: string[];
  /** City / market the work happened in. */
  market: string;
}

export const ISSUES: Issue[] = [
  {
    number: "001",
    slug: "001-mmw26-hialeah",
    title: "MMW26 Hialeah",
    subtitle: "Miami Music Week × Hialeah Carnival",
    saga: "carnival",
    spotlight: "carnival-mmw",
    year: 2026,
    status: "shipped",
    thesis:
      "Two-day Carnival activation at Hialeah Park during Miami Music Week. Custom scenic build, RFID credentialing, full hospitality programming, sustainability-reported. Three thousand guests, two stages, a paddock-tier VIP lounge, and a federation-cleared press junket.",
    anchoredServices: [1, 16, 17, 22, 23, 28, 51, 56, 65, 70, 80],
    tags: ["Carnival", "Miami Music Week", "Hialeah", "RFID", "Two-day"],
    market: "Miami",
  },
  {
    number: "002",
    slug: "002-edclv26-salvage-city",
    title: "EDCLV26 Salvage City",
    subtitle: "Electric Daisy Carnival Las Vegas",
    saga: "festival",
    spotlight: "festival-edc",
    year: 2026,
    status: "in-flight",
    thesis:
      "Twelve-acre festival environment at Las Vegas Motor Speedway. Salvage City themed walkthrough, eight integrated activations, full RFID, sustainability-reported, three-night production with weather-contingency gates at every cue. Roster owned end to end.",
    anchoredServices: [2, 17, 51, 56, 65, 70, 71, 75, 96],
    tags: ["Festival", "EDC", "Las Vegas", "Themed Environment", "Three-night"],
    market: "Las Vegas",
  },
  {
    number: "003",
    slug: "003-f1miami26-paddock",
    title: "F1 Miami GP 2026 — Paddock Club",
    subtitle: "Hard Rock Stadium · Race Weekend",
    saga: "stadium",
    spotlight: "stadium-f1-miami",
    year: 2026,
    status: "in-flight",
    thesis:
      "Three-day F1 Paddock Club operations at Hard Rock Stadium for Miami Grand Prix 2026. Multi-day F&B program, talent-appearance schedule, athlete meet-and-greet ops, federation-cleared brand-rights compliance. Lead host staffing across the entire paddock-club footprint.",
    anchoredServices: [16, 19, 22, 23, 24, 76, 78, 100, 101, 112, 114],
    tags: ["F1", "Stadium", "Paddock Club", "Hard Rock", "Three-day"],
    market: "Miami",
  },
  {
    number: "004",
    slug: "004-sxsw26-keynote",
    title: "SXSW 2026 — Keynote Activation",
    subtitle: "Austin Convention Center · Conference Week",
    saga: "festival",
    spotlight: "festival-sxsw",
    year: 2026,
    status: "shipped",
    thesis:
      "Five-day brand-keynote activation at Austin Convention Center plus three creek-side showcases. Custom AV build, livestream encoding, brand ambassador staffing, post-event commerce extension. Convention floor and downtown footprint operating as one schedule.",
    anchoredServices: [8, 9, 10, 13, 17, 28, 30, 47, 75, 85],
    tags: ["SXSW", "Austin", "Conference", "Brand Activation", "Five-day"],
    market: "Austin",
  },
  {
    number: "005",
    slug: "005-broadway-tech-week",
    title: "Broadway Production — Tech Week",
    subtitle: "Manhattan Theatre · Limited Run",
    saga: "theatre",
    spotlight: "theatre-broadway",
    year: 2026,
    status: "shipped",
    thesis:
      "Theatrical-spec set construction with traveler rigging, fly-system integration, and theatre-grade finish work for a four-week limited Broadway run. Full theatrical lighting plot, sound design, calling-the-show stage management, and load-out.",
    anchoredServices: [9, 14, 20, 27, 43, 48, 49, 50, 56, 73, 91, 95],
    tags: ["Broadway", "Theatre", "Tech Week", "Four-week Run"],
    market: "New York City",
  },
  {
    number: "014",
    slug: "014-superbowl-experience",
    title: "Super Bowl Experience",
    subtitle: "Host City · Game Week",
    saga: "stadium",
    spotlight: "stadium-superbowl",
    year: 2027,
    status: "upcoming",
    thesis:
      "Sponsor-activation village adjacent to Super Bowl LXI. Multi-week build inside the host-city clean zone, federation-cleared brand-rights compliance, fan-zone programming, and broadcast-grade hospitality across NFL-tier sponsor footprints.",
    anchoredServices: [1, 6, 17, 21, 22, 27, 47, 49, 51, 60, 100, 112, 113],
    tags: ["Super Bowl", "Stadium", "Fan Zone", "Sponsor Village"],
    market: "TBD",
  },
  {
    number: "021",
    slug: "021-fifa-wc-2026",
    title: "FIFA WC 2026 — Multi-Host",
    subtitle: "Eleven Host Cities · Tournament Window",
    saga: "stadium",
    spotlight: "stadium-worldcup",
    year: 2026,
    status: "upcoming",
    thesis:
      "Multi-host FIFA accreditation, fan-zone operations, sponsor-house activation, and clean-zone enforcement across eleven host cities during the tournament window. Federation liaison from accreditation through wrap.",
    anchoredServices: [17, 22, 27, 39, 49, 60, 99, 100, 101, 112, 113, 114],
    tags: ["FIFA", "World Cup", "Multi-City", "Federation"],
    market: "Multi-city",
  },
  {
    number: "042",
    slug: "042-olympic-house-la28",
    title: "Olympic Hospitality House — LA28",
    subtitle: "Los Angeles · Tournament Window",
    saga: "house",
    spotlight: "house-olympic",
    year: 2028,
    status: "upcoming",
    thesis:
      "Hospitality house adjacent to LA28 Olympics. Multi-week build inside the IOC clean zone, NOC-tier hospitality programming, athlete meet-and-greet ops, federation accreditation. Full XPMS deployment with embedded GHXSTSHIP producers.",
    anchoredServices: [16, 17, 22, 23, 27, 30, 76, 99, 100, 101, 112, 113, 114],
    tags: ["Olympics", "LA28", "Hospitality House", "Federation"],
    market: "Los Angeles",
  },
];

export const ISSUE_BY_SLUG = Object.fromEntries(ISSUES.map((i) => [i.slug, i])) as Record<string, Issue>;
export const SHIPPED_ISSUES = ISSUES.filter((i) => i.status === "shipped");
export const UPCOMING_ISSUES = ISSUES.filter((i) => i.status === "upcoming");
export const IN_FLIGHT_ISSUES = ISSUES.filter((i) => i.status === "in-flight");

export function issuesBySaga(saga: string): Issue[] {
  return ISSUES.filter((i) => i.saga === saga);
}
