import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PHASES, PHASE_BY_SLUG, ORG } from "@/lib/ghxstship";
import { Breadcrumbs } from "@/components/ghxstship/Breadcrumbs";
import { Schema, articleSchema, breadcrumbSchema } from "@/components/ghxstship/Schemas";

export const dynamic = "force-static";

export function generateStaticParams() {
  return PHASES.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = PHASE_BY_SLUG[slug];
  if (!p) return {};
  const url = `${ORG.url}itinerary/${p.slug}`;
  return {
    title: p.titleSEO,
    description: p.metaDesc,
    keywords: p.keywords,
    alternates: { canonical: url },
    openGraph: { title: p.titleSEO, description: p.metaDesc, url, type: "article" },
  };
}

export default async function PhasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = PHASE_BY_SLUG[slug];
  if (!p) return notFound();
  const url = `${ORG.url}itinerary/${p.slug}`;
  const next = p.connectsTo ? PHASE_BY_SLUG[p.connectsTo] : null;
  const idx = PHASES.findIndex((x) => x.slug === p.slug);
  const prev = idx > 0 ? PHASES[idx - 1] : null;

  return (
    <>
      <Schema
        data={[
          articleSchema({
            headline: `Phase ${p.n} — ${p.alias} — GHXSTSHIP Lifecycle`,
            description: p.answer,
            url,
            datePublished: "2026-01-01",
            authorName: "GHXSTSHIP",
          }),
          breadcrumbSchema([
            { name: "Home", url: ORG.url },
            { name: "Itinerary", url: `${ORG.url}#itinerary` },
            { name: p.alias, url },
          ]),
        ]}
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Itinerary", href: "/#itinerary" },
          { label: p.alias },
        ]}
      />
      <main>
        <section className="subhero">
          <div className="wrap">
            <p className="eyebrow">{p.eyebrow}</p>
            <h1>
              {p.heroSplit[0]}
              <br />
              <span className="pop">{p.heroSplit[1]}</span>
            </h1>
            <p className="answer">{p.answer}</p>
          </div>
        </section>

        <section className="pad alt">
          <div className="wrap">
            <div className="two-up">
              <div className="kvbox">
                <h3>Deliverables</h3>
                <ul className="bullets">
                  {p.deliverables.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>
              <div className="kvbox">
                <h3>Crew Active</h3>
                <ul className="bullets">
                  {p.crew.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="two-up">
              <div className="kvbox">
                <h3>Risks</h3>
                <ul className="bullets">
                  {p.risks.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>
              <div className="kvbox">
                <h3>Client Sign-Off</h3>
                <p style={{ fontSize: 16, lineHeight: 1.6, color: "var(--fg-on-dark-2)", margin: 0 }}>{p.clientSignoff}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="pad">
          <div className="wrap">
            <div className="two-up">
              {prev && (
                <Link href={`/itinerary/${prev.slug}`} className="kvbox" style={{ textDecoration: "none", color: "inherit" }}>
                  <h3 style={{ color: "var(--brass)" }}>← Previous Phase</h3>
                  <p style={{ margin: 0, fontFamily: "var(--font-display)", fontSize: 22, textTransform: "uppercase", color: "var(--bone)" }}>
                    Phase {prev.n} · {prev.alias}
                  </p>
                </Link>
              )}
              {next && (
                <Link href={`/itinerary/${next.slug}`} className="kvbox" style={{ textDecoration: "none", color: "inherit" }}>
                  <h3 style={{ color: "var(--brass)" }}>Next Phase →</h3>
                  <p style={{ margin: 0, fontFamily: "var(--font-display)", fontSize: 22, textTransform: "uppercase", color: "var(--bone)" }}>
                    Phase {next.n} · {next.alias}
                  </p>
                </Link>
              )}
            </div>
          </div>
        </section>

        <section className="cta">
          <div className="wrap">
            <p className="eyebrow" style={{ justifyContent: "center" }}>
              Step 03 · Chart Your Itinerary
            </p>
            <h2>
              Chart
              <br />
              Your Voyage.
            </h2>
            <div className="hero-cta" style={{ justifyContent: "center" }}>
              <Link className="gx-btn gx-btn--lg" href="/contact">
                Launch Your Project
              </Link>
              <Link className="gx-btn gx-btn--ghost gx-btn--lg" href="/#itinerary">
                See All 8 Phases
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
