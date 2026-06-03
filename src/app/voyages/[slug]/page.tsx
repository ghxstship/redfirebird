import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { VOYAGES, VOYAGE_BY_SLUG, ORG, DESTINATION_BY_SLUG } from "@/lib/ghxstship";
import { Breadcrumbs } from "@/components/ghxstship/Breadcrumbs";
import { Schema, breadcrumbSchema, creativeWorkSchema } from "@/components/ghxstship/Schemas";

export const dynamic = "force-static";

export function generateStaticParams() {
  return VOYAGES.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const v = VOYAGE_BY_SLUG[slug];
  if (!v) return {};
  const url = `${ORG.url}voyages/${v.slug}`;
  const dest = DESTINATION_BY_SLUG[v.destinationSlug];
  return {
    title: `${v.name} — ${dest?.name ?? "Case Study"} — GHXSTSHIP`,
    description: v.answer,
    alternates: { canonical: url },
    openGraph: {
      title: `${v.name} — Case Study — GHXSTSHIP`,
      description: v.answer,
      url,
      type: "article",
    },
  };
}

export default async function VoyagePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const v = VOYAGE_BY_SLUG[slug];
  if (!v) return notFound();
  const url = `${ORG.url}voyages/${v.slug}`;
  const dest = DESTINATION_BY_SLUG[v.destinationSlug];

  return (
    <>
      <Schema
        data={[
          creativeWorkSchema({
            name: v.name,
            about: v.about,
            description: v.answer,
            locationCreated: v.venue ? `${v.venue}, ${v.city}` : v.city,
            datePublished: v.date,
            url,
            keywords: v.keywords,
          }),
          breadcrumbSchema([
            { name: "Home", url: ORG.url },
            { name: "Archives", url: `${ORG.url}voyages` },
            { name: v.name, url },
          ]),
        ]}
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Archives", href: "/voyages" },
          { label: v.name },
        ]}
      />
      <main>
        <section className="subhero">
          <div className="wrap">
            <p className="eyebrow">
              Case Study · {v.code} · {dest?.name ?? v.about}
            </p>
            <h1>
              {v.heroSplit[0]}
              <br />
              <span className="pop">{v.heroSplit[1]}</span>
            </h1>
            <div className="voymeta">
              {v.client && (
                <span>
                  Client <b>{v.client}</b>
                </span>
              )}
              {v.venue && (
                <span>
                  Venue <b>{v.venue}</b>
                </span>
              )}
              <span>
                City <b>{v.city}</b>
              </span>
              <span>
                Year <b>{v.year}</b>
              </span>
              <span>
                Scope <b>{v.scope}</b>
              </span>
            </div>
            <div className="cover">
              <i className={`ph-fill ${dest?.icon ?? "ph-confetti"}`} aria-hidden="true" />
              <span className="ph">[ Hero image — production photography pending ]</span>
            </div>
          </div>
        </section>

        <div className="wrap">
          {v.results && (
            <div className="results">
              {v.results.map((r) => (
                <div className="res" key={r.k}>
                  <div className="v">{r.v}</div>
                  <div className="k">{r.k}</div>
                </div>
              ))}
            </div>
          )}

          {v.challenge && (
            <div className="block">
              <h2>The Challenge</h2>
              <p>{v.challenge}</p>
            </div>
          )}

          {v.approach && (
            <div className="block">
              <h2>The Approach</h2>
              <p>{v.approach}</p>
              {v.pull && <p className="pull">"{v.pull}"</p>}
            </div>
          )}

          {v.result && (
            <div className="block">
              <h2>The Result</h2>
              <p>{v.result}</p>
            </div>
          )}
        </div>

        <section className="cta">
          <div className="wrap">
            <p className="eyebrow" style={{ justifyContent: "center" }}>
              Chart Your Voyage
            </p>
            <h2>
              Launch Your
              <br />
              Project.
            </h2>
            <div className="hero-cta" style={{ justifyContent: "center" }}>
              <Link className="gx-btn gx-btn--lg" href="/contact">
                Launch Your Project
              </Link>
              <Link className="gx-btn gx-btn--ghost gx-btn--lg" href="/voyages">
                More Archives
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
