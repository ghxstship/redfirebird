import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Layers, Compass, Clock3, Building2, Hexagon, MapPin, Bookmark } from "lucide-react";
import { Button } from "@/components/ui/Button";
import {
  CATALOG_STATS,
  CLASSES,
  SOLUTIONS,
  ANCHOR_MARKETS,
  paths,
  IN_FLIGHT_ISSUES,
  SHIPPED_ISSUES,
  UPCOMING_ISSUES,
  SAGA_BY_SLUG,
  LIFECYCLE,
} from "@/lib/ghxstship";
import { GhxstshipJsonLd, organizationSchema, serviceSchema, faqSchema } from "@/components/ghxstship/JsonLd";
import { LifecyclePhaseCard } from "@/components/ghxstship/LifecyclePhaseCard";
import { BrandMarkCeremony } from "@/components/ghxstship/BrandMarkCeremony";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "GHXSTSHIP — The Ghost Ship Of Experiential Production",
  description:
    "We run festivals, theme park attractions, fan zones, theatrical productions, and the kind of premium hospitality where the wine cellar gets airlifted in. The XPMS is our operating system. The catalog is the receipt. Brief us Monday; we answer Wednesday.",
  keywords: [
    "experiential production company",
    "festival production company",
    "theme park production",
    "live event production",
    "immersive experience design",
    "brand activation agency",
    "theatrical production company",
    "premium hospitality production",
    "Olympic hospitality production",
    "F1 paddock club production",
    "fan zone production",
    "Miami event production",
    "New York event production",
    "Los Angeles event production",
    "Chicago event production",
    "XPMS",
    "experiential project management system",
  ],
  alternates: { canonical: "https://ghxstship.pro" },
};

const PROOF_STATS = [
  { label: "Services", value: CATALOG_STATS.serviceCount, sub: "Disciplines on one ship" },
  { label: "Industries", value: CATALOG_STATS.solutionCount, sub: "Festivals to fan zones" },
  { label: "Markets", value: CATALOG_STATS.marketCount, sub: "Four anchors. Eight ports." },
  { label: "Production Lifecycle", value: CATALOG_STATS.phaseCount, sub: "Discovery to wrap" },
];

const FEATURED_SOLUTIONS = [
  "concerts-festivals-tours",
  "premium-sporting-experiences-fan-zones",
  "amusement-theme-parks",
  "cruise-lines-maritime",
  "immersive-experiences",
  "premium-experiences-hospitality",
] as const;

const FAQS = [
  {
    q: "What does GHXSTSHIP actually take on?",
    a: "Festivals. Concert tours. Theme park attractions. Immersive walkthroughs. Brand activations. Pop-up retail. Theatrical productions. Museum galas. Olympic Hospitality Houses. F1 Paddock Clubs. Super Bowl fan zones. Cruise-ship onboard entertainment. Yacht-week private dinners with the wine cellar airlifted in. Nineteen industry verticals in total — and if your work doesn't fit one of those nineteen, write us anyway. We've made room before.",
  },
  {
    q: "Where do you sail?",
    a: "Four anchor ports — Miami, New York, Chicago, Los Angeles — with full-time crews and dedicated fabrication. Eight satellite markets we sail to under our own flag: Orlando, Nashville, Austin, Atlanta, Minneapolis, Denver, Las Vegas, Seattle. National and international productions launch from the closest anchor. Wherever the work lives, the ghost ship makes port.",
  },
  {
    q: "What makes GHXSTSHIP different from another agency with a slick deck?",
    a: "The XPMS — the Experiential Project Management System we wrote because nobody had one. Five orthogonal axes (class, phase, level, tier, solution) plus geography, locked at v1.0, append-only forever. Every transactable atom carries a stable identifier you can audit end to end. The same schema that runs internally on our ATLVS software is the schema that publishes this catalog. The brochure isn't a brochure. It's the database.",
  },
  {
    q: "Do you handle production end to end, or just one phase?",
    a: "Both. The Production Lifecycle is eight phases long — Discovery, Concept, Develop, Advance, Build, Show, Strike, Wrap. Engage across all of them or pick a subset. Per-project tiers are scoped to a single brief; retainers run continuously. We've called shows we didn't engineer and engineered shows we didn't call. We work where the work needs us.",
  },
  {
    q: "Who owns the IP and the deliverables when you wrap?",
    a: "You do. Every concept artwork, design file, engineering drawing, and production document transfers to you on final invoice — with a stable Atom Identifier in the file name so the file is the file. Reusable touring scenic and trade-show assets sit in our climate-controlled storage by default, available for redeployment, but ownership rests with the brief that paid for them.",
  },
  {
    q: "What's the fastest you've stood up a real production?",
    a: "Forty-eight hours from brief to doors, twice. We don't recommend it. We can do it.",
  },
];

export default function GhxstshipHome() {
  return (
    <>
      <GhxstshipJsonLd
        data={[
          organizationSchema(),
          serviceSchema({
            name: "Experiential Production",
            description:
              "Experiential production company building festivals, immersive experiences, theme park attractions, theatrical performances, brand activations, and premium hospitality.",
            serviceType: "Experiential Production",
            category: "Live Event Production",
            areaServed: [
              "Miami",
              "New York City",
              "Chicago",
              "Los Angeles",
              "Orlando",
              "Las Vegas",
              "Austin",
              "Nashville",
              "Atlanta",
              "Minneapolis",
              "Denver",
              "Seattle",
              "United States",
            ],
            offers: SOLUTIONS.map((s) => ({ name: s.name })),
          }),
          faqSchema(FAQS),
        ]}
      />

      <BrandMarkCeremony />
      <div className="space-y-24 pb-24">
        {/* HERO */}
        <section className="mx-auto max-w-6xl px-6 pt-20 pb-12">
          <div className="text-xs font-semibold tracking-[0.25em] uppercase">
            <span style={{ color: "var(--org-primary)" }}>GHXSTSHIP Industries</span>
            <span className="ml-3 text-[var(--text-muted)]">All hands · Miami · New York · Chicago · Los Angeles</span>
          </div>
          <h1
            className="mt-6 text-5xl leading-[0.95] font-semibold tracking-tight uppercase sm:text-7xl lg:text-[8rem]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Experience
            <br />
            <span style={{ color: "var(--org-primary)" }}>at scale.</span>
            <br />
            Show called
            <br />
            on time.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-[var(--text-secondary)]">
            We are GHXSTSHIP. We sail under our own flag — running festivals, theme park attractions, fan zones, F1
            paddock clubs, Olympic hospitality houses, theatrical productions, and the kind of premium dinners
            where the wine cellar gets airlifted in. The XPMS — the Experiential Project Management System we
            wrote because nobody had one — is our operating system. The catalog you&apos;re reading is the database.
            Brief us Monday; we name the producer, the price band, and the schedule by Wednesday. The work goes up
            regardless.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Button href={paths.contact()} size="lg">
              Hail The Studio
            </Button>
            <Button href={paths.servicesRoot()} size="lg" variant="secondary">
              Read The Catalog
            </Button>
            <Link href={paths.pricing()} className="btn btn-ghost btn-lg">
              Pricing →
            </Link>
          </div>
        </section>

        {/* PROOF STRIP */}
        <section className="mx-auto max-w-6xl px-6">
          <div className="surface-raised grid grid-cols-2 gap-px overflow-hidden md:grid-cols-4">
            {PROOF_STATS.map((stat) => (
              <div key={stat.label} className="bg-[var(--background)] p-6">
                <div
                  className="text-5xl font-semibold tracking-tight"
                  style={{ fontFamily: "var(--font-display)", color: "var(--org-primary)" }}
                >
                  {stat.value}
                </div>
                <div className="mt-2 text-xs font-semibold tracking-[0.18em] uppercase">{stat.label}</div>
                <div className="mt-1 text-xs text-[var(--text-muted)]">{stat.sub}</div>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECT OVERVIEW PAIR — proposal-shape Identity + Engagement */}
        <section className="mx-auto max-w-6xl px-6">
          <div className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: "var(--org-primary)" }}>
            Who&apos;s On The Bridge. What&apos;s In The Hold.
          </div>
          <h2 className="mt-3 text-4xl uppercase sm:text-5xl" style={{ fontFamily: "var(--font-display)" }}>
            We have a system.
            <br />
            We have a fleet.
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="surface-raised p-8">
              <div className="text-[11px] font-semibold tracking-[0.18em] uppercase" style={{ color: "var(--org-primary)" }}>
                The Studio
              </div>
              <h3 className="mt-3 text-2xl uppercase sm:text-3xl" style={{ fontFamily: "var(--font-display)" }}>
                GHXSTSHIP Industries.
              </h3>
              <p className="mt-3 text-sm text-[var(--text-secondary)]">
                We&apos;re the studio that hated spreadsheets enough to write our own software. The team that briefs
                you is the team that builds it — we don&apos;t subcontract the show. Anchored in Miami, New York,
                Chicago, Los Angeles. Eight satellite ports. Wherever the work lives, the ghost ship makes port.
              </p>
              <ul className="mt-4 space-y-1.5 text-xs">
                <li className="flex items-start gap-2 text-[var(--text-secondary)]">
                  <span className="mt-1 inline-block h-1 w-1" style={{ background: "var(--org-accent)" }} />
                  <span>Producers, A1s, L1s, V1s, riggers, hospitality leads, federation liaisons — full-time on payroll.</span>
                </li>
                <li className="flex items-start gap-2 text-[var(--text-secondary)]">
                  <span className="mt-1 inline-block h-1 w-1" style={{ background: "var(--org-accent)" }} />
                  <span>PE-stamped engineering. NFPA 701, IATSE, USCG, IMO posture in-house. We bring our own stamp.</span>
                </li>
                <li className="flex items-start gap-2 text-[var(--text-secondary)]">
                  <span className="mt-1 inline-block h-1 w-1" style={{ background: "var(--org-accent)" }} />
                  <span>Sustainability and ESG measurement baked into every engagement. Sponsor-ready by Wrap.</span>
                </li>
              </ul>
            </div>
            <div className="surface-raised p-8">
              <div className="text-[11px] font-semibold tracking-[0.18em] uppercase" style={{ color: "var(--org-primary)" }}>
                The Engagement
              </div>
              <h3 className="mt-3 text-2xl uppercase sm:text-3xl" style={{ fontFamily: "var(--font-display)" }}>
                Two contracts. One ship.
              </h3>
              <p className="mt-3 text-sm text-[var(--text-secondary)]">
                Per-Project for a single brief — five tiers, one-night activation up to mega-event. Retainer for
                ongoing programs — four team-composition bundles. Add-ons stack either way. The numbers are clean,
                the framework is yours to inspect, and the producer who answers your email is on site at load-in.
              </p>
              <ul className="mt-4 space-y-1.5 text-xs">
                <li className="flex items-start gap-2 text-[var(--text-secondary)]">
                  <span className="mt-1 inline-block h-1 w-1" style={{ background: "var(--org-accent)" }} />
                  <span>Sixty on signature. Forty on load-in. Phase-gated SOW. Change-orders that actually mean something.</span>
                </li>
                <li className="flex items-start gap-2 text-[var(--text-secondary)]">
                  <span className="mt-1 inline-block h-1 w-1" style={{ background: "var(--org-accent)" }} />
                  <span>One business day to respond. Engagement model, producer assignment, price band. Or we owe you a coffee.</span>
                </li>
                <li className="flex items-start gap-2 text-[var(--text-secondary)]">
                  <span className="mt-1 inline-block h-1 w-1" style={{ background: "var(--org-accent)" }} />
                  <span>Same XPMS spine across proposal, console, field app, wrap report. The file is the file.</span>
                </li>
              </ul>
              <div className="mt-5 flex flex-wrap items-center gap-2">
                <Link href={paths.pricing()} className="btn btn-secondary btn-sm">
                  Read The Articles
                </Link>
                <Link href={paths.contact()} className="btn btn-primary btn-sm">
                  Hail The Studio
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURED ISSUE — saga-affiliated, spotlight-overlaid */}
        {(IN_FLIGHT_ISSUES[0] || SHIPPED_ISSUES[0]) && (() => {
          const featured = IN_FLIGHT_ISSUES[0] ?? SHIPPED_ISSUES[0];
          const upcoming = UPCOMING_ISSUES[0];
          return (
            <section className="mx-auto max-w-6xl px-6">
              <div className="flex flex-wrap items-end justify-between gap-3">
                <div>
                  <div
                    className="text-xs font-semibold tracking-[0.2em] uppercase"
                    style={{ color: "var(--org-primary)" }}
                  >
                    The Log Book Is The Pitch.
                  </div>
                  <h2 className="mt-3 text-4xl uppercase sm:text-5xl" style={{ fontFamily: "var(--font-display)" }}>
                    Issues. Sagas.
                    <br />
                    Receipts in ink.
                  </h2>
                </div>
                <Link
                  href={paths.issuesRoot()}
                  className="text-sm font-semibold tracking-wide uppercase hover:text-[var(--org-primary)]"
                >
                  Open the log →
                </Link>
              </div>
              <div className="mt-8 grid gap-5 lg:grid-cols-3">
                <Link
                  href={paths.issueDetail(featured.slug)}
                  data-spotlight={featured.spotlight}
                  className="surface hover-lift group flex h-full flex-col p-8 lg:col-span-2"
                >
                  <div className="flex items-baseline justify-between gap-3">
                    <span
                      className="font-mono text-xs tracking-[0.18em] uppercase"
                      style={{ color: "var(--org-primary)" }}
                    >
                      Issue {featured.number} · {SAGA_BY_SLUG[featured.saga].name}
                    </span>
                    <span className="font-mono text-[10px] uppercase text-[var(--text-muted)]">
                      {featured.year} · {featured.market}
                    </span>
                  </div>
                  <h3
                    className="mt-3 text-3xl uppercase sm:text-4xl"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {featured.title}
                  </h3>
                  <p className="mt-4 text-base text-[var(--text-secondary)]">{featured.thesis}</p>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold tracking-wide uppercase">
                    Read the issue
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  </div>
                </Link>
                {upcoming && (
                  <div data-spotlight={upcoming.spotlight} className="surface flex h-full flex-col p-6">
                    <div className="flex items-center gap-2">
                      <Bookmark className="h-3.5 w-3.5" style={{ color: "var(--org-primary)" }} />
                      <span
                        className="font-mono text-[10px] tracking-[0.2em] uppercase"
                        style={{ color: "var(--org-primary)" }}
                      >
                        On The Slate
                      </span>
                    </div>
                    <div className="mt-4 font-mono text-xs tracking-[0.18em] uppercase text-[var(--text-muted)]">
                      Issue {upcoming.number} · {upcoming.year}
                    </div>
                    <h3 className="mt-2 text-xl uppercase" style={{ fontFamily: "var(--font-display)" }}>
                      {upcoming.title}
                    </h3>
                    <p className="mt-3 line-clamp-4 text-xs text-[var(--text-secondary)]">{upcoming.thesis}</p>
                    <Link
                      href={paths.issueDetail(upcoming.slug)}
                      className="mt-auto pt-4 text-xs font-semibold tracking-wide uppercase hover:text-[var(--org-primary)]"
                    >
                      Tease →
                    </Link>
                  </div>
                )}
              </div>
            </section>
          );
        })()}

        {/* LIFECYCLE PREVIEW — proposal-shape phase cards */}
        <section className="mx-auto max-w-6xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <div className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: "var(--org-primary)" }}>
                Discovery. Concept. Develop. Show.
              </div>
              <h2 className="mt-3 text-4xl uppercase sm:text-5xl" style={{ fontFamily: "var(--font-display)" }}>
                Eight phases.
                <br />
                Every engagement.
                <br />
                Every time.
              </h2>
            </div>
            <Link
              href={paths.phasesRoot()}
              className="text-sm font-semibold tracking-wide uppercase hover:text-[var(--org-primary)]"
            >
              The full Lifecycle →
            </Link>
          </div>
          <p className="mt-4 max-w-2xl text-sm text-[var(--text-secondary)]">
            The Production Lifecycle is eight phases long — Discovery through Wrap — and it&apos;s the temporal
            spine of every engagement we run. Each phase carries milestones, deliverables, and an approval gate
            that has to close before we move. The cards below assume a 12-week per-project engagement; the
            artifact lands at the top of every signed proposal.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {LIFECYCLE.slice(0, 4).map((phase) => (
              <LifecyclePhaseCard key={phase.slug} phase={phase} />
            ))}
          </div>
        </section>

        {/* WHAT WE DO */}
        <section className="mx-auto max-w-6xl px-6">
          <div className="grid items-end gap-6 md:grid-cols-2">
            <div>
              <div className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: "var(--org-primary)" }}>
                Search. Browse. Brief.
              </div>
              <h2 className="mt-3 text-4xl uppercase sm:text-5xl" style={{ fontFamily: "var(--font-display)" }}>
                Six axes.
                <br />
                One catalog.
                <br />
                Pick a thread.
              </h2>
            </div>
            <p className="text-[var(--text-secondary)]">
              The XPMS indexes every transactable atom along five orthogonal axes — class, phase, level of detail,
              experience medium, industry — plus geography. Pull any thread and you land on a real producer with a
              real portfolio. There&apos;s no marketing layer between you and the work.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <AxisCard
              icon={<Layers className="h-5 w-5" />}
              count={CATALOG_STATS.classCount}
              title="Disciplines"
              blurb="Ten classes, append-only, locked at v1.0 — the XTC Codebook. Production, build, hospitality, ops, executive. Every line of work has a class code that never changes."
              href={paths.servicesRoot()}
            />
            <AxisCard
              icon={<Clock3 className="h-5 w-5" />}
              count={CATALOG_STATS.phaseCount}
              title="Production Lifecycle"
              blurb="Discovery, Concept, Develop, Advance, Build, Show, Strike, Wrap. Eight phases — engage end to end or just the phase you need lifted."
              href={paths.phasesRoot()}
            />
            <AxisCard
              icon={<Building2 className="h-5 w-5" />}
              count={6}
              title="Detail Depth"
              blurb="The APS hierarchy — six levels from L1 Project down to L6 Item. We work at the level the brief lives at. Mega-event or a single welded archway."
              href={paths.servicesRoot()}
            />
            <AxisCard
              icon={<Hexagon className="h-5 w-5" />}
              count={CATALOG_STATS.tierCount}
              title="Experience Mediums"
              blurb="Social, Digital, Virtual, Physical, Experiential, Theatrical. The Six Mediums — most engagements span two or three. Some span all six."
              href={paths.tiersRoot()}
            />
            <AxisCard
              icon={<Compass className="h-5 w-5" />}
              count={CATALOG_STATS.solutionCount}
              title="Industries"
              blurb="Festivals to fan zones. Theme parks to maritime. Art galleries to F1 paddock clubs. Nineteen verticals, every one with its own compliance posture."
              href={paths.solutionsRoot()}
            />
            <AxisCard
              icon={<MapPin className="h-5 w-5" />}
              count={CATALOG_STATS.marketCount}
              title="Markets"
              blurb="Four anchor ports — Miami, New York, Chicago, LA. Eight satellites. National and international from the closest anchor. The ghost ship sails wide."
              href={paths.marketsRoot()}
            />
          </div>
        </section>

        {/* DISCIPLINE GRID */}
        <section className="mx-auto max-w-6xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: "var(--org-primary)" }}>
                Drawn. Built. Printed. Installed.
              </div>
              <h2 className="mt-3 text-4xl uppercase sm:text-5xl" style={{ fontFamily: "var(--font-display)" }}>
                Ten disciplines.
                <br />
                One studio.
              </h2>
            </div>
            <Link
              href={paths.servicesRoot()}
              className="text-sm font-semibold tracking-wide uppercase hover:text-[var(--org-primary)]"
            >
              Full services catalog →
            </Link>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {CLASSES.map((c) => (
              <Link
                key={c.code}
                href={paths.classDetail(c.slug)}
                className="surface hover-lift group flex items-start justify-between gap-4 p-6"
              >
                <div>
                  <div className="font-mono text-[10px] tracking-[0.18em] text-[var(--text-muted)]">CLASS {c.code}</div>
                  <div className="mt-2 text-2xl uppercase" style={{ fontFamily: "var(--font-display)" }}>
                    {c.shortName}
                  </div>
                  <div className="mt-2 line-clamp-2 text-sm text-[var(--text-secondary)]">{c.definition}</div>
                </div>
                <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-[var(--text-muted)] transition group-hover:text-[var(--org-primary)]" />
              </Link>
            ))}
          </div>
        </section>

        {/* INDUSTRIES GRID */}
        <section className="mx-auto max-w-6xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: "var(--org-primary)" }}>
                Festivals. Fan Zones. Theme Parks. Theatres.
              </div>
              <h2 className="mt-3 text-4xl uppercase sm:text-5xl" style={{ fontFamily: "var(--font-display)" }}>
                Where the
                <br />
                work lives.
              </h2>
            </div>
            <Link
              href={paths.solutionsRoot()}
              className="text-sm font-semibold tracking-wide uppercase hover:text-[var(--org-primary)]"
            >
              All 19 industries →
            </Link>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURED_SOLUTIONS.map((slug) => {
              const s = SOLUTIONS.find((x) => x.slug === slug);
              if (!s) return null;
              return (
                <Link key={s.slug} href={paths.solutionDetail(s.slug)} className="surface hover-lift group block p-6">
                  <div className="text-xl uppercase" style={{ fontFamily: "var(--font-display)" }}>
                    {s.name}
                  </div>
                  <p className="mt-3 line-clamp-3 text-sm text-[var(--text-secondary)]">{s.definition}</p>
                  <div className="mt-4 text-xs font-semibold tracking-wide text-[var(--text-muted)] uppercase transition group-hover:text-[var(--org-primary)]">
                    Read more →
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* PRICING TEASE */}
        <section className="mx-auto max-w-6xl px-6">
          <div className="surface-raised relative overflow-hidden p-10">
            <div
              className="absolute inset-x-0 top-0 h-1"
              style={{ background: "linear-gradient(90deg, var(--org-primary), var(--org-accent))" }}
            />
            <div className="grid gap-8 md:grid-cols-2 md:items-end">
              <div>
                <div
                  className="text-xs font-semibold tracking-[0.2em] uppercase"
                  style={{ color: "var(--org-primary)" }}
                >
                  Articles Of Engagement
                </div>
                <h2 className="mt-3 text-4xl uppercase sm:text-5xl" style={{ fontFamily: "var(--font-display)" }}>
                  Per project.
                  <br />
                  Or on retainer.
                </h2>
              </div>
              <p className="text-[var(--text-secondary)]">
                <strong className="text-[var(--text-primary)]">Per Project</strong> — five tiers, one-night
                activation up to mega-event. <strong className="text-[var(--text-primary)]">Retainer</strong> — four
                team-composition bundles, from a coordinator pair through a 24/7 senior crew. Add-ons stack on
                either path. The numbers are clean, the pass-through is at cost, and the captain answers the email.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button href={paths.pricing()} size="lg">
                Read The Articles
              </Button>
              <Button href={paths.contact()} size="lg" variant="secondary">
                Hail The Studio
              </Button>
            </div>
          </div>
        </section>

        {/* MARKETS STRIP */}
        <section className="mx-auto max-w-6xl px-6">
          <div className="text-xs font-semibold tracking-[0.2em] text-[var(--text-muted)] uppercase">
            Where We Make Port
          </div>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {ANCHOR_MARKETS.map((m) => (
              <Link key={m.slug} href={paths.marketDetail(m.slug)} className="surface hover-lift block p-6">
                <div className="text-2xl uppercase" style={{ fontFamily: "var(--font-display)" }}>
                  {m.name}
                </div>
                <div className="mt-3 line-clamp-3 text-xs text-[var(--text-secondary)]">{m.blurb}</div>
              </Link>
            ))}
          </div>
          <div className="mt-6">
            <Link
              href={paths.marketsRoot()}
              className="text-sm font-semibold tracking-wide uppercase hover:text-[var(--org-primary)]"
            >
              All twelve ports, including satellites →
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-6xl px-6">
          <div className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: "var(--org-primary)" }}>
            Questions That Show Up A Lot.
          </div>
          <h2 className="mt-3 text-4xl uppercase sm:text-5xl" style={{ fontFamily: "var(--font-display)" }}>
            Plain answers.
            <br />
            No marketing voice.
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {FAQS.map((faq) => (
              <details key={faq.q} className="surface group p-6 [&[open]>summary>span:last-child]:rotate-45">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                  <span className="text-base font-semibold">{faq.q}</span>
                  <span className="mt-1 inline-block text-2xl leading-none transition-transform">+</span>
                </summary>
                <p className="mt-3 text-sm text-[var(--text-secondary)]">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

function AxisCard({
  icon,
  count,
  title,
  blurb,
  href,
}: {
  icon: React.ReactNode;
  count: number;
  title: string;
  blurb: string;
  href: string;
}) {
  return (
    <Link href={href} className="surface hover-lift group block p-6">
      <div className="flex items-center gap-3">
        <span
          className="inline-flex h-8 w-8 items-center justify-center"
          style={{ background: "var(--org-accent)", color: "var(--accent-contrast)" }}
        >
          {icon}
        </span>
        <span className="ml-auto font-mono text-xs text-[var(--text-muted)]">{count}</span>
      </div>
      <div className="mt-4 text-xl uppercase" style={{ fontFamily: "var(--font-display)" }}>
        {title}
      </div>
      <p className="mt-2 text-sm text-[var(--text-secondary)]">{blurb}</p>
      <div className="mt-4 text-xs font-semibold tracking-wide text-[var(--text-muted)] uppercase transition group-hover:text-[var(--org-primary)]">
        Open →
      </div>
    </Link>
  );
}
