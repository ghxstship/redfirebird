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
  title: "Brand — Living Guide | GHXSTSHIP",
  description:
    "GHXSTSHIP brand guide. Master frame, spotlight overlay system, saga register, typography, lifecycle artifact. Rendered live from the same tokens that paint every page.",
  alternates: { canonical: "https://ghxstship.pro/brand" },
};

const TYPE_RULES = [
  {
    label: "Display",
    family: "Anton",
    use: "h1, h2, h3, hero numerals — all caps, structural.",
    sample: "EXPERIENTIAL PRODUCTION",
    fontVar: "var(--font-display)",
  },
  {
    label: "Subdisplay",
    family: "Bebas Neue",
    use: "Eyebrow lines, navigation labels, secondary uppercase signal.",
    sample: "THE STUDIO BEHIND THE STUDIO",
    fontVar: "var(--font-subdisplay)",
  },
  {
    label: "Body",
    family: "DM Sans",
    use: "Paragraphs, captions, FAQ — sentence case, readable.",
    sample: "Brief us with what you have. We resolve every brief against the same catalog.",
    fontVar: "var(--font-body)",
  },
  {
    label: "Mono",
    family: "Share Tech Mono",
    use: "Identifiers, codes, dates, font-mono callouts in proposals + marketing.",
    sample: "ATOM 042 · CARNIVAL · 2026",
    fontVar: "var(--font-mono)",
  },
];

const VOICE_RULES = [
  "Title Case for non-body text — headings, eyebrows, labels, buttons. Sentence case in paragraphs.",
  "Triadic-period h2 cadence. \"Drawn. Built. Printed. Installed.\" Used sparingly. Used deliberately.",
  "Operator vernacular, no apologies. Load-in, advance, ROS, RFI, paddock, dry-dock. We don't translate down.",
  "XPMS is the framework, not jargon. Lean into it as a thought-leader anchor; don't bury it.",
  "Receipts over promises. We send the case study; we don't pitch it.",
  "Wit with weight. Sparrow swagger, Stark dryness, Avengers operatic stakes — earned through receipts, not branding.",
  "Never compare to competitors. The ghost ship sails alone.",
];

export default function BrandPage() {
  const masterFrame = SPOTLIGHT_BY_SLUG.ghxstship;

  return (
    <>
      <GhxstshipJsonLd
        data={breadcrumbSchema([
          { label: "GHXSTSHIP", href: "/" },
          { label: "Brand", href: "/brand" },
        ])}
      />
      <div className="space-y-20 pb-24">
        {/* HERO */}
        <section className="mx-auto max-w-6xl px-6 pt-16">
          <div className="text-xs font-semibold tracking-[0.25em] uppercase" style={{ color: "var(--org-primary)" }}>
            The Brand Book
          </div>
          <h1 className="mt-4 text-5xl uppercase sm:text-7xl" style={{ fontFamily: "var(--font-display)" }}>
            Live tokens.
            <br />
            No PDF.
            <br />
            Always shipping.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-[var(--text-secondary)]">
            This page renders straight from the design tokens that paint every other page on the site. Master
            palette shifts — this page shifts. New saga lands — this page lists it. Spotlight retires — this page
            reflects it. The brand guide isn&apos;t a PDF in a shared drive going stale. The brand guide is the
            production system. If it&apos;s on this page, it&apos;s shipping in production.
          </p>
        </section>

        {/* MASTER FRAME */}
        <section className="mx-auto max-w-6xl px-6">
          <div className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: "var(--org-primary)" }}>
            Master Frame
          </div>
          <h2 className="mt-3 text-3xl uppercase sm:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
            Locked. Sibling to ATLVS, COMPVSS, GVTEWAY.
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-[var(--text-secondary)]">
            Material green-700/800/500. Sits in the same row as ATLVS pink-700, COMPVSS amber-700, and GVTEWAY
            cyan-800. Cream paper, ink line, brutal 8px offset shadow, sharp corners.
          </p>

          <div className="mt-8 grid gap-px border-[3px] border-[var(--border-color)] bg-[var(--border-color)] sm:grid-cols-3">
            <PaletteCell label="Primary" value={masterFrame.primary} sub="WCAG AA on white" />
            <PaletteCell label="Secondary" value={masterFrame.secondary} sub="Hover-deepen" />
            <PaletteCell label="Accent" value={masterFrame.accent} sub="Vivid pop" />
          </div>

          <div className="mt-8 grid gap-px border-[3px] border-[var(--border-color)] bg-[var(--border-color)] sm:grid-cols-2 lg:grid-cols-4">
            <PaletteCell label="Paper" value="#f5f2ec" sub="Background" textOnLight />
            <PaletteCell label="Ink" value="#0a0a0a" sub="Borders + display" />
            <PaletteCell label="Inset" value="#ebe7dd" sub="Bg-secondary" textOnLight />
            <PaletteCell label="Muted" value="#4a4a48" sub="Caption text" />
          </div>
        </section>

        {/* TYPOGRAPHY */}
        <section className="mx-auto max-w-6xl px-6">
          <div className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: "var(--org-primary)" }}>
            Typography
          </div>
          <h2 className="mt-3 text-3xl uppercase sm:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
            Four families. One stack.
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {TYPE_RULES.map((rule) => (
              <div key={rule.label} className="surface hover-lift p-6">
                <div className="flex items-baseline justify-between gap-3">
                  <span
                    className="text-[10px] font-semibold tracking-[0.2em] uppercase"
                    style={{ color: "var(--org-primary)" }}
                  >
                    {rule.label}
                  </span>
                  <span className="font-mono text-[10px] tracking-wide text-[var(--text-muted)]">{rule.family}</span>
                </div>
                <div
                  className="mt-4 text-2xl text-[var(--text-primary)]"
                  style={{ fontFamily: rule.fontVar }}
                >
                  {rule.sample}
                </div>
                <p className="mt-3 text-sm text-[var(--text-secondary)]">{rule.use}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SPOTLIGHT SYSTEM */}
        <section className="mx-auto max-w-6xl px-6">
          <div className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: "var(--org-primary)" }}>
            Spotlight System
          </div>
          <h2 className="mt-3 text-3xl uppercase sm:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
            One frame. Many seasons.
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-[var(--text-secondary)]">
            Each issue, saga, or showcase carries a stable spotlight slug. The slug overlays an alternate palette
            onto the master frame via{" "}
            <code className="font-mono text-xs" style={{ color: "var(--org-primary)" }}>
              [data-spotlight=&quot;&lt;slug&gt;&quot;]
            </code>
            . Typography, shadow, paper — all stay locked. Only the org and accent tokens swap.
          </p>

          <div className="mt-8 grid gap-px border-[3px] border-[var(--border-color)] bg-[var(--border-color)] sm:grid-cols-2 lg:grid-cols-3">
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

        {/* SAGA REGISTER */}
        <section className="mx-auto max-w-6xl px-6">
          <div className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: "var(--org-primary)" }}>
            Saga Register
          </div>
          <h2 className="mt-3 text-3xl uppercase sm:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
            The arcs that group the issues.
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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

        {/* LIFECYCLE */}
        <section className="mx-auto max-w-6xl px-6">
          <div className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: "var(--org-primary)" }}>
            Lifecycle Artifact
          </div>
          <h2 className="mt-3 text-3xl uppercase sm:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
            One component. Two surfaces.
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-[var(--text-secondary)]">
            The same lifecycle phase card lands on the marketing site and inside every signed proposal. The visitor
            who reads <Link href={paths.phasesRoot()} className="underline hover:text-[var(--org-primary)]">/phases</Link>{" "}
            and later opens a proposal sees the same artifact, populated with real dates.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {LIFECYCLE.slice(0, 4).map((phase) => (
              <LifecyclePhaseCard key={phase.slug} phase={phase} />
            ))}
          </div>
        </section>

        {/* VOICE */}
        <section className="mx-auto max-w-6xl px-6">
          <div className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: "var(--org-primary)" }}>
            Voice
          </div>
          <h2 className="mt-3 text-3xl uppercase sm:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
            The rules that hold.
          </h2>
          <ol className="mt-6 grid gap-3 sm:grid-cols-2">
            {VOICE_RULES.map((rule, i) => (
              <li key={rule} className="surface p-5">
                <div
                  className="font-mono text-xs tracking-[0.18em]"
                  style={{ color: "var(--org-primary)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <p className="mt-2 text-sm text-[var(--text-primary)]">{rule}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-6xl px-6">
          <div className="surface-raised p-10">
            <h2 className="text-3xl uppercase sm:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
              Use the system.
            </h2>
            <p className="mt-3 max-w-xl text-[var(--text-secondary)]">
              Building something with GHXSTSHIP and want the proposal-to-marketing alignment locked? Brief us;
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

function PaletteCell({
  label,
  value,
  sub,
  textOnLight = false,
}: {
  label: string;
  value: string;
  sub?: string;
  textOnLight?: boolean;
}) {
  return (
    <div className="bg-[var(--background)] p-6">
      <div
        className="aspect-[5/2] w-full border-2 border-[var(--border-color)]"
        style={{ background: value }}
      />
      <div className="mt-4 flex items-baseline justify-between gap-2">
        <span className="text-xs font-semibold tracking-[0.18em] uppercase">{label}</span>
        <span
          className="font-mono text-[11px] tracking-wider"
          style={{ color: textOnLight ? "var(--text-muted)" : "var(--text-primary)" }}
        >
          {value}
        </span>
      </div>
      {sub && <div className="mt-1 text-[11px] text-[var(--text-muted)]">{sub}</div>}
    </div>
  );
}
