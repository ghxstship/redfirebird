import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import {
  SAGAS,
  SAGA_BY_SLUG,
  spotlightsForSaga,
  ISSUES,
  paths,
} from "@/lib/ghxstship";
import type { SagaSlug } from "@/lib/ghxstship/spotlights";
import { GhxstshipJsonLd, breadcrumbSchema } from "@/components/ghxstship/JsonLd";

export const dynamic = "force-static";

export function generateStaticParams() {
  return SAGAS.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const saga = SAGA_BY_SLUG[slug as SagaSlug];
  if (!saga) return {};
  return {
    title: `${saga.name} — GHXSTSHIP`,
    description: saga.arc,
    alternates: { canonical: `https://ghxstship.pro/sagas/${saga.slug}` },
  };
}

export default async function SagaDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const saga = SAGA_BY_SLUG[slug as SagaSlug];
  if (!saga) notFound();

  const spotlights = spotlightsForSaga(saga.slug);
  const issues = ISSUES.filter((i) => i.saga === saga.slug);

  return (
    <>
      <GhxstshipJsonLd
        data={breadcrumbSchema([
          { label: "GHXSTSHIP", href: "/" },
          { label: "Issues", href: "/issues" },
          { label: saga.name, href: paths.sagaDetail(saga.slug) },
        ])}
      />
      <div className="space-y-16 pb-24">
        <section className="mx-auto max-w-6xl px-6 pt-12">
          <nav className="mb-6 text-xs text-[var(--text-muted)]">
            <Link href={paths.issuesRoot()} className="hover:text-[var(--text-primary)]">
              Issues
            </Link>
            <span className="mx-2">/</span>
            <span className="text-[var(--text-primary)]">{saga.name}</span>
          </nav>
          <div className="font-mono text-xs tracking-[0.2em] uppercase" style={{ color: "var(--org-primary)" }}>
            Saga · {saga.yearsActive}
          </div>
          <h1 className="mt-3 text-5xl uppercase sm:text-7xl" style={{ fontFamily: "var(--font-display)" }}>
            {saga.name}
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-[var(--text-secondary)]">{saga.arc}</p>
        </section>

        <section className="mx-auto max-w-6xl px-6">
          <div className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: "var(--org-primary)" }}>
            Spotlights In This Saga
          </div>
          <div className="mt-6 grid gap-px border-[3px] border-[var(--border-color)] bg-[var(--border-color)] sm:grid-cols-2 lg:grid-cols-3">
            {spotlights.map((s) => (
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
                </div>
                <div className="mt-4 text-xl uppercase" style={{ fontFamily: "var(--font-display)" }}>
                  {s.name}
                </div>
                <p className="mt-3 text-sm text-[var(--text-secondary)]">{s.blurb}</p>
                <div className="mt-4 font-mono text-[10px] tracking-[0.18em] uppercase text-[var(--text-muted)]">
                  {s.primary} · {s.accent}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6">
          <div className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: "var(--org-primary)" }}>
            Issues
          </div>
          <h2 className="mt-3 text-3xl uppercase sm:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
            {issues.length} {issues.length === 1 ? "issue" : "issues"} in this saga.
          </h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {issues.map((issue) => (
              <Link
                key={issue.slug}
                href={paths.issueDetail(issue.slug)}
                data-spotlight={issue.spotlight}
                className="surface hover-lift group flex h-full flex-col p-6"
              >
                <div className="flex items-baseline justify-between gap-3">
                  <span className="font-mono text-xs tracking-[0.18em] uppercase" style={{ color: "var(--org-primary)" }}>
                    Issue {issue.number}
                  </span>
                  <span className="font-mono text-[10px] uppercase text-[var(--text-muted)]">{issue.status}</span>
                </div>
                <div className="mt-3 text-lg uppercase" style={{ fontFamily: "var(--font-display)" }}>
                  {issue.title}
                </div>
                <p className="mt-3 line-clamp-3 text-sm text-[var(--text-secondary)]">{issue.thesis}</p>
                <div className="mt-4 flex items-center gap-2 text-[10px] font-semibold tracking-[0.2em] uppercase">
                  <span className="text-[var(--text-muted)]">{issue.market} · {issue.year}</span>
                  <ArrowRight className="ml-auto h-3 w-3 text-[var(--text-muted)] group-hover:text-[var(--org-primary)]" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6">
          <div className="surface-raised p-10">
            <h2 className="text-3xl uppercase sm:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
              Run a {saga.name.replace(" Saga", "").toLowerCase()} engagement.
            </h2>
            <p className="mt-3 max-w-xl text-[var(--text-secondary)]">
              Same playbook the issues above ran on. We&apos;ll scope yours, assign a producer, and reply with a
              price band inside one business day.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Button href={paths.contact()} size="lg">
                Start a Project
              </Button>
              <Button href={paths.issuesRoot()} size="lg" variant="secondary">
                All Issues
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
