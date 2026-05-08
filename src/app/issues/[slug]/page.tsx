import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import {
  ISSUES,
  ISSUE_BY_SLUG,
  SPOTLIGHT_BY_SLUG,
  SAGA_BY_SLUG,
  CLASS_BY_CODE,
  resolveServices,
  paths,
} from "@/lib/ghxstship";
import { GhxstshipJsonLd, breadcrumbSchema, serviceSchema } from "@/components/ghxstship/JsonLd";

export const dynamic = "force-static";

export function generateStaticParams() {
  return ISSUES.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const issue = ISSUE_BY_SLUG[slug];
  if (!issue) return {};
  return {
    title: `Issue ${issue.number} — ${issue.title} | GHXSTSHIP`,
    description: issue.thesis,
    alternates: { canonical: `https://ghxstship.pro/issues/${issue.slug}` },
  };
}

export default async function IssueDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const issue = ISSUE_BY_SLUG[slug];
  if (!issue) notFound();
  const spotlight = SPOTLIGHT_BY_SLUG[issue.spotlight];
  const saga = SAGA_BY_SLUG[issue.saga];
  const services = resolveServices(issue.anchoredServices);

  return (
    // The data-spotlight overlay swaps --org-* and --accent tokens for
    // this entire page. Master frame (typography, shadow, paper) stays.
    <div data-spotlight={issue.spotlight}>
      <GhxstshipJsonLd
        data={[
          breadcrumbSchema([
            { label: "GHXSTSHIP", href: "/" },
            { label: "Issues", href: "/issues" },
            { label: `Issue ${issue.number}`, href: paths.issueDetail(issue.slug) },
          ]),
          serviceSchema({
            name: `${issue.title} — Issue ${issue.number}`,
            description: issue.thesis,
            serviceType: saga.name,
            identifier: `ISSUE-${issue.number}`,
            areaServed: [issue.market],
            offers: services.map((s) => ({
              name: s.name,
              identifier: `${s.primaryClass}-${String(s.number).padStart(3, "0")}`,
            })),
          }),
        ]}
      />
      <div className="space-y-16 pb-24">
        <section className="mx-auto max-w-6xl px-6 pt-12">
          <nav className="mb-6 text-xs text-[var(--text-muted)]">
            <Link href={paths.issuesRoot()} className="hover:text-[var(--text-primary)]">
              Issues
            </Link>
            <span className="mx-2">/</span>
            <span className="text-[var(--text-primary)]">Issue {issue.number}</span>
          </nav>
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <div className="font-mono text-xs tracking-[0.2em] uppercase" style={{ color: "var(--org-primary)" }}>
              Issue {issue.number} · {saga.name} · {issue.year}
            </div>
            <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-[var(--text-muted)]">
              {issue.market}
            </div>
          </div>
          <h1 className="mt-3 text-5xl uppercase sm:text-7xl" style={{ fontFamily: "var(--font-display)" }}>
            {issue.title}
          </h1>
          <div className="mt-2 text-lg text-[var(--text-secondary)]">{issue.subtitle}</div>
        </section>

        <section className="mx-auto max-w-6xl px-6">
          <div className="surface-raised relative overflow-hidden p-8">
            <div
              className="absolute inset-x-0 top-0 h-1"
              style={{ background: "linear-gradient(90deg, var(--org-primary), var(--org-accent))" }}
            />
            <p className="text-xl text-[var(--text-primary)]" style={{ fontFamily: "var(--font-body)" }}>
              {issue.thesis}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {issue.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[10px] tracking-[0.2em] uppercase"
                  style={{
                    background: "var(--bg-secondary)",
                    color: "var(--org-primary)",
                    padding: "0.25rem 0.5rem",
                    border: "2px solid var(--border-color)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6">
          <div className="grid gap-5 md:grid-cols-3">
            <FactCard label="Saga">
              <Link href={paths.sagaDetail(saga.slug)} className="text-base font-semibold uppercase">
                {saga.name}
              </Link>
              <p className="mt-2 text-xs text-[var(--text-muted)]">{saga.arc}</p>
            </FactCard>
            <FactCard label="Spotlight">
              <div className="text-base font-semibold uppercase">{spotlight.name}</div>
              <p className="mt-2 text-xs text-[var(--text-muted)]">{spotlight.blurb}</p>
              <div className="mt-3 flex gap-1.5">
                <SpotlightSwatch hex={spotlight.primary} label="Primary" />
                <SpotlightSwatch hex={spotlight.secondary} label="Secondary" />
                <SpotlightSwatch hex={spotlight.accent} label="Accent" />
              </div>
            </FactCard>
            <FactCard label="Status">
              <div className="text-base font-semibold uppercase">{issue.status.replace("-", " ")}</div>
              <p className="mt-2 text-xs text-[var(--text-muted)]">
                {issue.status === "shipped" && "Delivered. Available for portfolio reference."}
                {issue.status === "in-flight" && "Currently building. Not yet available for circulation."}
                {issue.status === "upcoming" && "On the slate. Roster and SOW being finalized."}
              </p>
            </FactCard>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6">
          <div className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: "var(--org-primary)" }}>
            Anchored Services
          </div>
          <h2 className="mt-3 text-3xl uppercase sm:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
            {services.length} services on this engagement.
          </h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => {
              const c = CLASS_BY_CODE[s.primaryClass];
              return (
                <li key={s.number}>
                  <Link
                    href={paths.serviceDetail(c.slug, s.slug)}
                    className="surface hover-lift flex h-full items-start gap-3 p-4"
                  >
                    <span className="font-mono text-[10px] tracking-wider text-[var(--text-muted)]">
                      {String(s.number).padStart(3, "0")}
                    </span>
                    <div>
                      <div className="text-sm">{s.name}</div>
                      <div className="text-[10px] uppercase text-[var(--text-muted)]">{c.shortName}</div>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>

        <section className="mx-auto max-w-6xl px-6">
          <div className="surface-raised p-10">
            <h2 className="text-3xl uppercase sm:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
              Run a similar engagement.
            </h2>
            <p className="mt-3 max-w-xl text-[var(--text-secondary)]">
              Brief us with your dates and the local posture. We&apos;ll resolve your scope against the
              {` ${services.length} `}services anchored here and reply with the engagement model.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Button href={paths.contact()} size="lg">
                Hail The Studio
              </Button>
              <Button href={paths.issuesRoot()} size="lg" variant="secondary">
                Read More Of The Log
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function FactCard({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="surface p-5">
      <div className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[var(--text-muted)]">{label}</div>
      <div className="mt-3 text-sm">{children}</div>
    </div>
  );
}

function SpotlightSwatch({ hex, label }: { hex: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <span
        className="inline-block h-6 w-6 border-2 border-[var(--border-color)]"
        style={{ background: hex }}
        title={`${label}: ${hex}`}
        aria-label={`${label}: ${hex}`}
      />
      <span className="font-mono text-[8px] tracking-wider text-[var(--text-muted)]">{hex}</span>
    </div>
  );
}
