import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import {
  SPOTLIGHTS,
  SPOTLIGHT_BY_SLUG,
  SAGAS,
  spotlightsForSaga,
  LIFECYCLE,
  paths,
} from "@/lib/ghxstship";
import { GhxstshipJsonLd, breadcrumbSchema } from "@/components/ghxstship/JsonLd";
import { LifecyclePhaseCard } from "@/components/ghxstship/LifecyclePhaseCard";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Brand Book — GHXSTSHIP",
  description:
    "The GHXSTSHIP brand book. Identity, manifesto, logo system, color palette, typography, spotlight overlay system, saga register, voice rules, application examples, and don'ts. Rendered live from the design tokens that paint every page.",
  alternates: { canonical: "https://ghxstship.pro/brand" },
};

/* ─── DATA ───────────────────────────────────────────────────────────── */

interface PaletteSwatch {
  name: string;
  hex: string;
  rgb: string;
  pms: string;
  use: string;
  textOn: "ink" | "paper";
}

const MASTER_PALETTE: PaletteSwatch[] = [
  {
    name: "Primary",
    hex: "#2E7D32",
    rgb: "46 / 125 / 50",
    pms: "356 C",
    use: "Buttons, links, focus rings, brand mark accent dot, primary CTA fills.",
    textOn: "paper",
  },
  {
    name: "Secondary",
    hex: "#1B5E20",
    rgb: "27 / 94 / 32",
    pms: "357 C",
    use: "Hover-deepen on primary CTAs. Body emphasis text. Saga sub-arcs.",
    textOn: "paper",
  },
  {
    name: "Accent",
    hex: "#4CAF50",
    rgb: "76 / 175 / 80",
    pms: "354 C",
    use: "Vivid pop. Selection highlights. Eyebrows. Chart strokes. Bullet markers.",
    textOn: "ink",
  },
];

const NEUTRAL_PALETTE: PaletteSwatch[] = [
  {
    name: "Paper",
    hex: "#F5F2EC",
    rgb: "245 / 242 / 236",
    pms: "Warm Gray 1 C",
    use: "Page background. Card surfaces. Brand mark field.",
    textOn: "ink",
  },
  {
    name: "Ink",
    hex: "#0A0A0A",
    rgb: "10 / 10 / 10",
    pms: "Black 6 C",
    use: "Borders. Display type. Brand mark. Brutal shadow.",
    textOn: "paper",
  },
  {
    name: "Inset",
    hex: "#EBE7DD",
    rgb: "235 / 231 / 221",
    pms: "Warm Gray 2 C",
    use: "Recessed surfaces. Tabular row stripes. Inset callouts.",
    textOn: "ink",
  },
  {
    name: "Muted",
    hex: "#4A4A48",
    rgb: "74 / 74 / 72",
    pms: "Warm Gray 11 C",
    use: "Caption text. Eyebrow ranges. Mono labels. Footer copy.",
    textOn: "paper",
  },
];

interface TypeSpecimen {
  family: string;
  fallback: string;
  cssVar: string;
  role: string;
  use: string;
  weights: string;
  sample: string;
  sampleSize: string;
}

const TYPE_SPECIMENS: TypeSpecimen[] = [
  {
    family: "Anton",
    fallback: "Roboto Slab 800 / Alfa Slab One",
    cssVar: "var(--font-display)",
    role: "Display",
    use: "All caps. h1 / h2 / h3, hero numerals, brand mark. Designed for caps. Use exclusively at scale.",
    weights: "400 (one weight, by design)",
    sample: "EXPERIENCE AT SCALE",
    sampleSize: "3.5rem",
  },
  {
    family: "Bebas Neue",
    fallback: "Zilla Slab",
    cssVar: "var(--font-subdisplay)",
    role: "Subdisplay",
    use: "Eyebrow lines. Section labels. Navigation hover states. The secondary uppercase signal under Anton.",
    weights: "400",
    sample: "ALL HANDS · MIAMI · NEW YORK",
    sampleSize: "1.25rem",
  },
  {
    family: "DM Sans",
    fallback: "Inter / system-ui",
    cssVar: "var(--font-body)",
    role: "Body",
    use: "Paragraphs. Captions. FAQ answers. Form inputs. Sentence case, never all caps.",
    weights: "400 / 500 / 600 / 700",
    sample: "Brief us Monday. We answer Wednesday.",
    sampleSize: "1.125rem",
  },
  {
    family: "Share Tech Mono",
    fallback: "JetBrains Mono / ui-monospace",
    cssVar: "var(--font-mono)",
    role: "Mono",
    use: "Atom Identifiers. Class codes. Dates. Mono callouts in proposals + marketing. Tabular figures.",
    weights: "400",
    sample: "ATOM 042 · CARNIVAL · 2026",
    sampleSize: "0.9rem",
  },
];

const VOICE_RULES = [
  {
    title: "Title Case for non-body text.",
    body: "Headings, eyebrows, labels, buttons, tags. Sentence case in paragraphs. Mono for identifiers.",
  },
  {
    title: "Triadic-period h2 cadence.",
    body: '"Drawn. Built. Printed. Installed." Used sparingly. Used deliberately. Three beats, three full stops.',
  },
  {
    title: "Operator vernacular, no apologies.",
    body: "Load-in. Advance. ROS. RFI. Paddock. Dry-dock. Clean zone. We don't translate down so it sounds friendlier in a deck.",
  },
  {
    title: "XPMS is the framework, not jargon.",
    body: "Lean into it as a thought-leader anchor. The catalog is the database. The XTC Codebook is the grammar. Don't bury it.",
  },
  {
    title: "Receipts over promises.",
    body: "We send the case study, we don't pitch it. We point at the numbered Issue, the stamped engineering, the signed COI.",
  },
  {
    title: "Wit with weight.",
    body: "Sparrow swagger. Stark dryness. Avengers operatic stakes. Earned through receipts, not branding workshops.",
  },
  {
    title: "Never compare to competitors.",
    body: "The ghost ship sails alone. We don't punch sideways. We don't pitch in the same paragraph as another agency's name.",
  },
];

interface DontRule {
  rule: string;
  reason: string;
}

const DONTS: DontRule[] = [
  {
    rule: "Don't pinch the brand mark.",
    reason: "The wordmark is set with literal spaces — G H X S T S H I P. Never collapse it; it's named that way.",
  },
  {
    rule: "Don't recolor the brand mark below 4.5:1.",
    reason: "Ink-on-paper or paper-on-ink only. The accent dot is the only place green appears in the mark.",
  },
  {
    rule: "Don't soften the corners.",
    reason: "Sharp corners are the canon. `--radius-md: 0`. Rounded buttons and pills break the visual contract.",
  },
  {
    rule: "Don't stack drop shadows.",
    reason: "Brutal offset shadow is reserved for surface-raised. Soft / blurred / multi-layer shadows are off-canon.",
  },
  {
    rule: "Don't use Anton for body copy.",
    reason: "Anton was designed for caps display. Use DM Sans for paragraphs. Always.",
  },
  {
    rule: "Don't compare the brand to competitors.",
    reason: "We don't punch sideways. Marketing copy never names another agency. The ghost ship sails alone.",
  },
  {
    rule: "Don't water down operator vernacular.",
    reason: "If the brief uses load-in, ROS, RFI, paddock, clean zone — we use those words too. We translate up, not down.",
  },
  {
    rule: "Don't bury the XPMS.",
    reason: "It's the differentiator. Lead with it as field framework, not internal acronym.",
  },
];

interface CoBrand {
  name: string;
  role: string;
  primary: string;
  blurb: string;
}

const COBRAND: CoBrand[] = [
  {
    name: "ATLVS",
    role: "The producer's console",
    primary: "#C2185B",
    blurb: "Pink-700. The internal operating system — projects, tickets, advancing, finance, AI assistant. The console.",
  },
  {
    name: "GVTEWAY",
    role: "The stakeholder portal",
    primary: "#00838F",
    blurb: "Cyan-800. The external surface — proposals, offers, guest portals, event guides, payments. The gateway.",
  },
  {
    name: "COMPVSS",
    role: "The field PWA",
    primary: "#B45309",
    blurb: "Amber-700. The offline-first field app — credentials, scans, advance check-ins, on-site ops. The compass.",
  },
];

/* ─── PAGE ───────────────────────────────────────────────────────────── */

export default function BrandPage() {
  const masterFrame = SPOTLIGHT_BY_SLUG.ghxstship;

  return (
    <>
      <GhxstshipJsonLd
        data={breadcrumbSchema([
          { label: "GHXSTSHIP", href: "/" },
          { label: "Brand Book", href: "/brand" },
        ])}
      />
      <div className="space-y-24 pb-24">
        {/* ─── 01 · COVER + MANIFESTO ──────────────────────────────────────── */}
        <section className="mx-auto max-w-6xl px-6 pt-16">
          <div className="font-mono text-xs tracking-[0.2em] uppercase" style={{ color: "var(--org-primary)" }}>
            Brand Book · v1.0 · Live · {new Date().getFullYear()}
          </div>
          <h1
            className="mt-4 text-5xl uppercase sm:text-7xl lg:text-[7rem]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            The Ghost Ship
            <br />
            sails under
            <br />
            its own flag.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-[var(--text-secondary)]">
            This is the GHXSTSHIP brand book. It&apos;s rendered live from the same design tokens that paint every
            other page on the site. When the master palette shifts, this page shifts. When a new saga lands, this
            page lists it. When a spotlight retires, this page reflects it. The brand book isn&apos;t a PDF in a
            shared drive going stale. The brand book is the production system. If it&apos;s on this page,
            it&apos;s shipping.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-2 text-xs">
            <a href="#manifesto" className="btn btn-secondary btn-sm">01 Manifesto</a>
            <a href="#mark" className="btn btn-secondary btn-sm">02 Brand Mark</a>
            <a href="#palette" className="btn btn-secondary btn-sm">03 Palette</a>
            <a href="#type" className="btn btn-secondary btn-sm">04 Typography</a>
            <a href="#spotlight" className="btn btn-secondary btn-sm">05 Spotlight</a>
            <a href="#saga" className="btn btn-secondary btn-sm">06 Saga Register</a>
            <a href="#voice" className="btn btn-secondary btn-sm">07 Voice</a>
            <a href="#lifecycle" className="btn btn-secondary btn-sm">08 Lifecycle</a>
            <a href="#application" className="btn btn-secondary btn-sm">09 Application</a>
            <a href="#cobrand" className="btn btn-secondary btn-sm">10 Co-Branding</a>
            <a href="#donts" className="btn btn-secondary btn-sm">11 Don&apos;ts</a>
          </div>
        </section>

        {/* ─── 02 · MANIFESTO ──────────────────────────────────────────── */}
        <section id="manifesto" className="mx-auto max-w-6xl scroll-mt-24 px-6">
          <SectionHeader number="01" eyebrow="Manifesto" title="Who We Are. What We Promise." />
          <div className="surface-raised relative overflow-hidden p-10">
            <div
              className="absolute inset-x-0 top-0 h-1"
              style={{ background: "linear-gradient(90deg, var(--org-primary), var(--org-accent))" }}
            />
            <p
              className="text-2xl text-[var(--text-primary)] sm:text-3xl"
              style={{ fontFamily: "var(--font-body)", lineHeight: 1.4 }}
            >
              We are GHXSTSHIP. We sail under our own flag — running festivals, theme park attractions, fan zones,
              theatrical productions, brand activations, and premium hospitality at scale. The XPMS — the
              Experiential Project Management System we wrote because nobody had one — is our operating system.
              The catalog you read on this site is the database. The receipts are real. The producer who answers
              your email is the producer on site at load-in. We don&apos;t subcontract the show.
            </p>
          </div>
        </section>

        {/* ─── 03 · BRAND MARK ─────────────────────────────────────────── */}
        <section id="mark" className="mx-auto max-w-6xl scroll-mt-24 px-6">
          <SectionHeader number="02" eyebrow="Brand Mark" title="One Wordmark. One Spaced Treatment." />
          <div className="grid gap-5 lg:grid-cols-3">
            <div className="surface-raised flex h-64 items-center justify-center p-8 lg:col-span-2">
              <div className="flex items-center gap-3">
                <span
                  aria-hidden
                  className="inline-block h-3 w-3 sm:h-4 sm:w-4"
                  style={{ background: "var(--org-accent)" }}
                />
                <span
                  className="text-2xl font-semibold tracking-[0.18em] uppercase sm:text-4xl lg:text-5xl"
                  style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
                >
                  G H X S T S H I P
                </span>
              </div>
            </div>
            <div className="surface flex flex-col gap-4 p-6">
              <div className="text-[11px] font-semibold tracking-[0.2em] uppercase" style={{ color: "var(--org-primary)" }}>
                Construction
              </div>
              <ul className="space-y-2.5 text-xs text-[var(--text-secondary)]">
                <li>
                  <strong className="text-[var(--text-primary)]">Letters set with literal spaces</strong> —
                  G&nbsp;H&nbsp;X&nbsp;S&nbsp;T&nbsp;S&nbsp;H&nbsp;I&nbsp;P. Never collapsed.
                </li>
                <li>
                  <strong className="text-[var(--text-primary)]">Tracking</strong> — 0.18em. Anton display. All caps.
                </li>
                <li>
                  <strong className="text-[var(--text-primary)]">Accent dot</strong> — square, master-frame green
                  (<code className="font-mono">{masterFrame.accent}</code>). Sized 12–16% of cap height.
                </li>
                <li>
                  <strong className="text-[var(--text-primary)]">Aria-label</strong> — &ldquo;GHXSTSHIP Industries —
                  home&rdquo;. Screen readers don&apos;t spell it.
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <RuleCard label="Minimum Size" value="14px cap height" sub="Below this the spaces collapse visually." />
            <RuleCard label="Clear Space" value="1× cap height" sub="On all sides. Honor the negative space." />
            <RuleCard label="Contrast" value="≥ 4.5:1 against field" sub="Ink on paper, paper on ink. Never both faded." />
          </div>
        </section>

        {/* ─── 04 · COLOR PALETTE ──────────────────────────────────────── */}
        <section id="palette" className="mx-auto max-w-6xl scroll-mt-24 px-6">
          <SectionHeader number="03" eyebrow="Color" title="Master Palette. Sibling To ATLVS, COMPVSS, GVTEWAY." />
          <p className="mb-8 max-w-2xl text-sm text-[var(--text-secondary)]">
            Material green-700 / 800 / 500 — the same Material 700/800 family that ATLVS pink, COMPVSS amber, and
            GVTEWAY cyan ship in. Sibling palette discipline so the four brands sit in a row without breaking the
            family resemblance.
          </p>

          <div className="text-[11px] font-semibold tracking-[0.2em] uppercase" style={{ color: "var(--org-primary)" }}>
            Primary Palette
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {MASTER_PALETTE.map((s) => (
              <PaletteCard key={s.name} swatch={s} />
            ))}
          </div>

          <div className="mt-12 text-[11px] font-semibold tracking-[0.2em] uppercase text-[var(--text-muted)]">
            Neutrals
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {NEUTRAL_PALETTE.map((s) => (
              <PaletteCard key={s.name} swatch={s} compact />
            ))}
          </div>
        </section>

        {/* ─── 05 · TYPOGRAPHY ─────────────────────────────────────────── */}
        <section id="type" className="mx-auto max-w-6xl scroll-mt-24 px-6">
          <SectionHeader number="04" eyebrow="Typography" title="Four Families. One Stack." />
          <div className="grid gap-5 md:grid-cols-2">
            {TYPE_SPECIMENS.map((spec) => (
              <article key={spec.role} className="surface-raised p-8">
                <div className="flex items-baseline justify-between gap-3">
                  <span
                    className="text-[11px] font-semibold tracking-[0.2em] uppercase"
                    style={{ color: "var(--org-primary)" }}
                  >
                    {spec.role}
                  </span>
                  <span className="font-mono text-[10px] tracking-wide text-[var(--text-muted)]">{spec.family}</span>
                </div>
                <div
                  className="mt-6 text-[var(--text-primary)]"
                  style={{ fontFamily: spec.cssVar, fontSize: spec.sampleSize, lineHeight: 1.05 }}
                >
                  {spec.sample}
                </div>
                <dl className="mt-6 grid gap-3 border-t border-[var(--border-color)] pt-5 text-xs">
                  <SpecRow label="Brand font" value={spec.family} />
                  <SpecRow label="Fallback stack" value={spec.fallback} />
                  <SpecRow label="Weights" value={spec.weights} />
                  <SpecRow label="CSS variable" value={spec.cssVar} mono />
                </dl>
                <p className="mt-4 text-sm text-[var(--text-secondary)]">{spec.use}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ─── 06 · SPOTLIGHT SYSTEM ───────────────────────────────────── */}
        <section id="spotlight" className="mx-auto max-w-6xl scroll-mt-24 px-6">
          <SectionHeader number="05" eyebrow="Spotlight System" title="One Frame. Many Seasons." />
          <p className="mb-8 max-w-2xl text-sm text-[var(--text-secondary)]">
            Each issue, saga, or showcase carries a stable spotlight slug. The slug overlays an alternate palette
            onto the master frame via{" "}
            <code className="font-mono text-xs" style={{ color: "var(--org-primary)" }}>
              [data-spotlight=&quot;&lt;slug&gt;&quot;]
            </code>
            . Typography, shadow, paper — all stay locked. Only the org and accent tokens swap. Sibling-discipline
            applies: every spotlight stays within the brand frame.
          </p>
          <div className="grid gap-px border-[3px] border-[var(--border-color)] bg-[var(--border-color)] sm:grid-cols-2 lg:grid-cols-3">
            {SPOTLIGHTS.map((s) => (
              <article key={s.slug} data-spotlight={s.slug} className="bg-[var(--background)] p-6">
                <div className="flex items-center gap-2">
                  <span
                    className="inline-block h-5 w-5 border-2 border-[var(--border-color)]"
                    style={{ background: s.primary }}
                  />
                  <span
                    className="inline-block h-5 w-5 border-2 border-[var(--border-color)]"
                    style={{ background: s.accent }}
                  />
                  <span className="ml-auto font-mono text-[10px] tracking-wider text-[var(--text-muted)]">
                    {s.slug}
                  </span>
                </div>
                <div className="mt-4 text-lg uppercase" style={{ fontFamily: "var(--font-display)" }}>
                  {s.name}
                </div>
                <p className="mt-2 text-xs text-[var(--text-secondary)]">{s.blurb}</p>
                <div className="mt-3 font-mono text-[10px] tracking-[0.18em] uppercase text-[var(--text-muted)]">
                  {s.primary} · {s.accent}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ─── 07 · SAGA REGISTER ──────────────────────────────────────── */}
        <section id="saga" className="mx-auto max-w-6xl scroll-mt-24 px-6">
          <SectionHeader number="06" eyebrow="Saga Register" title="Multi-Year Arcs. Above The Issues." />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SAGAS.map((saga) => (
              <Link
                key={saga.slug}
                href={paths.sagaDetail(saga.slug)}
                className="surface hover-lift group flex h-full flex-col p-6"
              >
                <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-[var(--text-muted)]">
                  {saga.yearsActive}
                </div>
                <div className="mt-2 text-xl uppercase" style={{ fontFamily: "var(--font-display)" }}>
                  {saga.name}
                </div>
                <p className="mt-3 line-clamp-3 text-sm text-[var(--text-secondary)]">{saga.arc}</p>
                <div className="mt-4 flex gap-1.5">
                  {spotlightsForSaga(saga.slug).map((s) => (
                    <span
                      key={s.slug}
                      className="inline-block h-3 w-3 border border-[var(--border-color)]"
                      style={{ background: s.primary }}
                      title={s.name}
                    />
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ─── 08 · VOICE ──────────────────────────────────────────────── */}
        <section id="voice" className="mx-auto max-w-6xl scroll-mt-24 px-6">
          <SectionHeader number="07" eyebrow="Voice" title="Sparrow Swagger. Stark Wit. Avengers Stakes." />
          <div className="grid gap-4 md:grid-cols-2">
            {VOICE_RULES.map((rule, i) => (
              <article key={rule.title} className="surface p-6">
                <div
                  className="font-mono text-xs tracking-[0.18em]"
                  style={{ color: "var(--org-primary)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-2 text-lg uppercase" style={{ fontFamily: "var(--font-display)" }}>
                  {rule.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--text-secondary)]">{rule.body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ─── 09 · LIFECYCLE ARTIFACT ─────────────────────────────────── */}
        <section id="lifecycle" className="mx-auto max-w-6xl scroll-mt-24 px-6">
          <SectionHeader number="08" eyebrow="Lifecycle Artifact" title="One Component. Two Surfaces." />
          <p className="mb-8 max-w-2xl text-sm text-[var(--text-secondary)]">
            The same Production-Lifecycle phase card lands on the marketing site and inside every signed proposal.
            A visitor who reads{" "}
            <Link href={paths.phasesRoot()} className="underline hover:text-[var(--org-primary)]">
              /production-lifecycle
            </Link>{" "}
            and later opens a proposal sees the same artifact, populated with real dates instead of sample windows.
          </p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {LIFECYCLE.slice(0, 4).map((phase) => (
              <LifecyclePhaseCard key={phase.slug} phase={phase} />
            ))}
          </div>
        </section>

        {/* ─── 10 · APPLICATION ────────────────────────────────────────── */}
        <section id="application" className="mx-auto max-w-6xl scroll-mt-24 px-6">
          <SectionHeader number="09" eyebrow="Application" title="The System In Use." />
          <div className="grid gap-5 md:grid-cols-2">
            <article className="surface-raised p-6">
              <div className="text-[11px] font-semibold tracking-[0.2em] uppercase" style={{ color: "var(--org-primary)" }}>
                Buttons
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <button className="btn btn-primary btn-lg" type="button">
                  Hail The Studio
                </button>
                <button className="btn btn-secondary btn-lg" type="button">
                  Read The Articles
                </button>
                <button className="btn btn-ghost btn-lg" type="button">
                  Pricing →
                </button>
              </div>
              <p className="mt-4 text-xs text-[var(--text-secondary)]">
                Primary: filled green-800 with white text and 10% brightness lift on hover. Secondary: ink-on-paper
                outline that fills on hover. Ghost: text-only, surface fills on hover.
              </p>
            </article>
            <article className="surface-raised p-6">
              <div className="text-[11px] font-semibold tracking-[0.2em] uppercase" style={{ color: "var(--org-primary)" }}>
                Surfaces
              </div>
              <div className="mt-4 grid gap-3">
                <div className="surface p-4 text-xs">
                  <code className="font-mono">.surface</code> — content card. Bg + radius, no border.
                </div>
                <div className="surface-raised p-4 text-xs">
                  <code className="font-mono">.surface-raised</code> — 3px ink border, brutal 8px shadow.
                </div>
                <div className="surface-inset p-4 text-xs">
                  <code className="font-mono">.surface-inset</code> — recessed callout. 1px chrome border.
                </div>
              </div>
            </article>
            <article className="surface-raised p-6">
              <div className="text-[11px] font-semibold tracking-[0.2em] uppercase" style={{ color: "var(--org-primary)" }}>
                Hierarchy
              </div>
              <div className="mt-4 space-y-3">
                <div className="text-4xl uppercase" style={{ fontFamily: "var(--font-display)" }}>
                  Anton h1
                </div>
                <div className="text-2xl uppercase" style={{ fontFamily: "var(--font-display)" }}>
                  Anton h2
                </div>
                <div className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: "var(--org-primary)" }}>
                  Eyebrow Bebas Neue
                </div>
                <p className="text-sm text-[var(--text-secondary)]">
                  Body copy in DM Sans. Sentence case. The paragraph form lives here, where ideas need room to
                  breathe.
                </p>
                <div className="font-mono text-xs text-[var(--text-muted)]">ATOM 042 · CARNIVAL · 2026</div>
              </div>
            </article>
            <article className="surface-raised p-6">
              <div className="text-[11px] font-semibold tracking-[0.2em] uppercase" style={{ color: "var(--org-primary)" }}>
                Spotlight Overlay (Live)
              </div>
              <div data-spotlight="carnival-mmw" className="mt-4 surface p-5">
                <div className="font-mono text-[10px] tracking-[0.18em] uppercase" style={{ color: "var(--org-primary)" }}>
                  Carnival · MMW
                </div>
                <div className="mt-2 text-lg uppercase" style={{ fontFamily: "var(--font-display)" }}>
                  Hot pink overlay
                </div>
                <button
                  className="btn btn-primary btn-sm mt-4"
                  style={{ backgroundColor: "var(--org-primary)", borderColor: "var(--org-primary)" }}
                  type="button"
                >
                  CTA In Spotlight
                </button>
              </div>
              <p className="mt-3 text-xs text-[var(--text-muted)]">
                Same component shape, alternate palette. Master frame holds.
              </p>
            </article>
          </div>
        </section>

        {/* ─── 11 · CO-BRANDING ────────────────────────────────────────── */}
        <section id="cobrand" className="mx-auto max-w-6xl scroll-mt-24 px-6">
          <SectionHeader
            number="10"
            eyebrow="Co-Branding"
            title="GHXSTSHIP Industries × LYTEHAUS Technologies."
          />
          <p className="mb-8 max-w-2xl text-sm text-[var(--text-secondary)]">
            GHXSTSHIP Industries is the parent — the experiential production studio. LYTEHAUS Technologies is the
            software arm we built to run our own production. ATLVS, GVTEWAY, and COMPVSS are the three operating
            brands inside LYTEHAUS. Each carries a sibling palette in the same Material 700/800 family as the
            GHXSTSHIP master green.
          </p>
          <div className="grid gap-5 md:grid-cols-3">
            {COBRAND.map((c) => (
              <article key={c.name} className="surface-raised p-6">
                <div
                  className="aspect-[5/2] w-full border-2 border-[var(--border-color)]"
                  style={{ background: c.primary }}
                />
                <div className="mt-4 flex items-baseline justify-between gap-2">
                  <span className="text-xl uppercase" style={{ fontFamily: "var(--font-display)" }}>
                    {c.name}
                  </span>
                  <span className="font-mono text-[10px] uppercase text-[var(--text-muted)]">{c.primary}</span>
                </div>
                <div className="mt-1 text-[11px] font-semibold tracking-[0.18em] uppercase" style={{ color: "var(--org-primary)" }}>
                  {c.role}
                </div>
                <p className="mt-3 text-sm text-[var(--text-secondary)]">{c.blurb}</p>
              </article>
            ))}
          </div>
          <p className="mt-6 max-w-2xl text-xs text-[var(--text-muted)]">
            <strong>Lockup rule.</strong> When GHXSTSHIP appears next to LYTEHAUS or one of its operating brands,
            the GHXSTSHIP mark sits first or above. The hierarchy is &ldquo;parent — software arm — operating
            brand.&rdquo;
          </p>
        </section>

        {/* ─── 12 · DON'TS ─────────────────────────────────────────────── */}
        <section id="donts" className="mx-auto max-w-6xl scroll-mt-24 px-6">
          <SectionHeader number="11" eyebrow="Don'ts" title="What Not To Do." />
          <div className="grid gap-4 md:grid-cols-2">
            {DONTS.map((d, i) => (
              <article key={d.rule} className="surface flex h-full flex-col p-6">
                <div className="flex items-baseline gap-3">
                  <span
                    className="font-mono text-xs tracking-[0.18em]"
                    style={{ color: "var(--org-primary)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-base font-semibold">{d.rule}</span>
                </div>
                <p className="mt-3 text-sm text-[var(--text-secondary)]">{d.reason}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ─── 13 · CTA ────────────────────────────────────────────────── */}
        <section className="mx-auto max-w-6xl px-6">
          <div className="surface-raised p-10">
            <h2 className="text-3xl uppercase sm:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
              Use the system. Don&apos;t fight it.
            </h2>
            <p className="mt-3 max-w-xl text-[var(--text-secondary)]">
              Building something with GHXSTSHIP and want the marketing-to-proposal alignment locked? Brief us;
              we&apos;ll route the right spotlight, the right saga, and the right producer.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Button href={paths.contact()} size="lg">
                Hail The Studio
              </Button>
              <Button href={paths.issuesRoot()} size="lg" variant="secondary">
                Browse Issues
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

/* ─── HELPERS ────────────────────────────────────────────────────────── */

function SectionHeader({ number, eyebrow, title }: { number: string; eyebrow: string; title: string }) {
  return (
    <header className="mb-8">
      <div className="flex items-baseline gap-3">
        <span className="font-mono text-xs tracking-[0.2em] text-[var(--text-muted)]">§{number}</span>
        <span
          className="text-xs font-semibold tracking-[0.2em] uppercase"
          style={{ color: "var(--org-primary)" }}
        >
          {eyebrow}
        </span>
      </div>
      <h2 className="mt-3 text-3xl uppercase sm:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
        {title}
      </h2>
    </header>
  );
}

function PaletteCard({ swatch, compact = false }: { swatch: PaletteSwatch; compact?: boolean }) {
  return (
    <article className={`surface ${compact ? "p-5" : "p-6"} flex h-full flex-col`}>
      <div
        className={`${compact ? "aspect-[5/2]" : "aspect-[5/3]"} w-full border-2 border-[var(--border-color)]`}
        style={{ background: swatch.hex }}
      />
      <div className="mt-4 flex items-baseline justify-between gap-2">
        <span className="text-base font-semibold uppercase">{swatch.name}</span>
        <span className="font-mono text-[11px] tracking-wider text-[var(--text-muted)]">{swatch.hex}</span>
      </div>
      <dl className="mt-3 grid gap-1.5 border-t border-[var(--border-color)] pt-3 text-[11px]">
        <SpecRow label="HEX" value={swatch.hex} mono />
        <SpecRow label="RGB" value={swatch.rgb} mono />
        <SpecRow label="PMS" value={swatch.pms} mono />
      </dl>
      {!compact && <p className="mt-3 text-xs text-[var(--text-secondary)]">{swatch.use}</p>}
    </article>
  );
}

function SpecRow({ label, value, mono = false }: { label: string; value: string; mono?: boolean }) {
  return (
    <div className="flex items-baseline justify-between gap-3">
      <dt className="font-semibold tracking-[0.18em] uppercase text-[var(--text-muted)]">{label}</dt>
      <dd className={`text-[var(--text-primary)] ${mono ? "font-mono" : ""}`}>{value}</dd>
    </div>
  );
}

function RuleCard({ label, value, sub }: { label: string; value: string; sub: string }) {
  return (
    <div className="surface p-5">
      <div className="text-[11px] font-semibold tracking-[0.2em] uppercase" style={{ color: "var(--org-primary)" }}>
        {label}
      </div>
      <div className="mt-2 text-lg font-semibold">{value}</div>
      <p className="mt-1 text-xs text-[var(--text-muted)]">{sub}</p>
    </div>
  );
}
