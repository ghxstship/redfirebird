import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  ISSUES,
  SAGAS,
  SAGA_BY_SLUG,
  paths,
  SHIPPED_ISSUES,
  IN_FLIGHT_ISSUES,
  UPCOMING_ISSUES,
} from "@/lib/ghxstship";
import { GhxstshipJsonLd, breadcrumbSchema } from "@/components/ghxstship/JsonLd";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Issues — Numbered Case Studies | GHXSTSHIP",
  description:
    "Numbered case studies of GHXSTSHIP-produced experiences — festivals, theme parks, fan zones, theatrical productions, brand activations. Issued sequentially. Saga-affiliated.",
  alternates: { canonical: "https://ghxstship.pro/issues" },
};

export default function IssuesHub() {
  return (
    <>
      <GhxstshipJsonLd
        data={breadcrumbSchema([
          { label: "GHXSTSHIP", href: "/" },
          { label: "Issues", href: "/issues" },
        ])}
      />
      <div className="space-y-20 pb-24">
        <section className="mx-auto max-w-6xl px-6 pt-16">
          <div className="text-xs font-semibold tracking-[0.25em] uppercase" style={{ color: "var(--org-primary)" }}>
            Issues
          </div>
          <h1 className="mt-4 text-5xl uppercase sm:text-7xl" style={{ fontFamily: "var(--font-display)" }}>
            Numbered.
            <br />
            Saga-affiliated.
            <br />
            Append-only.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-[var(--text-secondary)]">
            Every delivered engagement gets an issue number. Numbers are stable for life — they appear in proposal
            footers, in case-study URLs, and in the saga register. New issues land monotonically. Upcoming issues
            tease the slate before they ship.
          </p>
        </section>

        {IN_FLIGHT_ISSUES.length > 0 && (
          <IssueRow heading="In Flight" issues={IN_FLIGHT_ISSUES} eyebrow="Currently building" />
        )}
        <IssueRow heading="Shipped" issues={SHIPPED_ISSUES} eyebrow="Delivered, archived, available for reference" />
        {UPCOMING_ISSUES.length > 0 && (
          <IssueRow heading="Upcoming" issues={UPCOMING_ISSUES} eyebrow="On the slate" muted />
        )}

        <section className="mx-auto max-w-6xl px-6">
          <div className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: "var(--org-primary)" }}>
            Sagas
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
                <div className="mt-2 text-2xl uppercase" style={{ fontFamily: "var(--font-display)" }}>
                  {saga.name}
                </div>
                <p className="mt-3 line-clamp-3 text-sm text-[var(--text-secondary)]">{saga.arc}</p>
                <div className="mt-4 flex items-center gap-2 text-[10px] font-semibold tracking-[0.2em] uppercase">
                  <span className="text-[var(--text-muted)]">{saga.spotlights.length} spotlights</span>
                  <ArrowRight className="ml-auto h-3 w-3 text-[var(--text-muted)] group-hover:text-[var(--org-primary)]" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

function IssueRow({
  heading,
  eyebrow,
  issues,
  muted = false,
}: {
  heading: string;
  eyebrow: string;
  issues: typeof ISSUES;
  muted?: boolean;
}) {
  return (
    <section className="mx-auto max-w-6xl px-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <div className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: "var(--org-primary)" }}>
            {heading}
          </div>
          <h2 className="mt-2 text-2xl uppercase sm:text-3xl" style={{ fontFamily: "var(--font-display)" }}>
            {eyebrow}
          </h2>
        </div>
      </div>
      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {issues.map((issue) => (
          <Link
            key={issue.slug}
            href={paths.issueDetail(issue.slug)}
            data-spotlight={issue.spotlight}
            className={`surface hover-lift group flex h-full flex-col p-6 ${muted ? "opacity-80" : ""}`}
          >
            <div className="flex items-baseline justify-between gap-3">
              <span className="font-mono text-xs tracking-[0.18em] uppercase" style={{ color: "var(--org-primary)" }}>
                Issue {issue.number}
              </span>
              <span className="font-mono text-[10px] tracking-wide text-[var(--text-muted)]">
                {issue.year} · {issue.market}
              </span>
            </div>
            <div className="mt-3 text-xl uppercase" style={{ fontFamily: "var(--font-display)" }}>
              {issue.title}
            </div>
            <div className="mt-1 text-sm text-[var(--text-muted)]">{issue.subtitle}</div>
            <p className="mt-3 line-clamp-3 text-sm text-[var(--text-secondary)]">{issue.thesis}</p>
            <div className="mt-4 inline-flex items-baseline gap-2 text-[10px] font-semibold tracking-[0.2em] uppercase">
              <span style={{ color: "var(--org-primary)" }}>{SAGA_BY_SLUG[issue.saga].name}</span>
              <ArrowRight className="ml-auto h-3 w-3 text-[var(--text-muted)] group-hover:text-[var(--org-primary)]" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
