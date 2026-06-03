import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  LOCATIONS,
  LOCATION_BY_SLUG,
  ORG,
  DESTINATION_BY_SLUG,
  VOYAGE_BY_SLUG,
  voyagesByCity,
} from "@/lib/ghxstship";
import { Breadcrumbs } from "@/components/ghxstship/Breadcrumbs";
import { Schema, breadcrumbSchema, localBusinessSchema } from "@/components/ghxstship/Schemas";

export const dynamic = "force-static";

export function generateStaticParams() {
  return LOCATIONS.map((l) => ({ city: l.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city } = await params;
  const l = LOCATION_BY_SLUG[city];
  if (!l) return {};
  const url = `${ORG.url}locations/${l.slug}`;
  return {
    title: l.titleSEO,
    description: l.metaDesc,
    alternates: { canonical: url },
  };
}

export default async function LocationDetail({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const l = LOCATION_BY_SLUG[city];
  if (!l) return notFound();
  const url = `${ORG.url}locations/${l.slug}`;
  const cityVoyages = [
    ...voyagesByCity(l.city),
    ...l.keyVoyageSlugs.map((s) => VOYAGE_BY_SLUG[s]).filter(Boolean),
  ].filter((v, i, arr) => arr.findIndex((x) => x?.slug === v?.slug) === i);

  return (
    <>
      <Schema
        data={[
          localBusinessSchema({
            name: `GHXSTSHIP ${l.city}${l.isHQ ? " (Headquarters)" : ""}`,
            url,
            locality: l.city,
            region: l.region,
            country: l.country,
            areaServed: l.areaServed,
            isHQ: l.isHQ,
            email: l.isHQ ? ORG.email : undefined,
          }),
          breadcrumbSchema([
            { name: "Home", url: ORG.url },
            { name: "Locations", url: `${ORG.url}locations` },
            { name: l.city, url },
          ]),
        ]}
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Locations", href: "/locations" },
          { label: l.city },
        ]}
      />
      <main>
        <section className="subhero">
          <div className="wrap">
            <p className="eyebrow">{l.eyebrow}</p>
            <h1>
              {l.heroSplit[0]}
              <br />
              <span className="pop">{l.heroSplit[1]}</span>
            </h1>
            <p className="answer">{l.answer}</p>
            <div className="voymeta" style={{ marginTop: 26 }}>
              <span>
                Rank <b>{l.rankName}</b>
              </span>
              <span>
                Area Served <b>{l.areaServed}</b>
              </span>
              {l.isHQ && (
                <span>
                  Contact <b>{ORG.email}</b>
                </span>
              )}
            </div>
          </div>
        </section>

        <section className="pad alt">
          <div className="wrap">
            <p className="eyebrow">What We Ship From This Port</p>
            <h2 className="sec">Destinations Led from {l.city}.</h2>
            <div className="dest-grid" style={{ marginTop: 30 }}>
              {l.leadsDestinations.map((dslug) => {
                const d = DESTINATION_BY_SLUG[dslug];
                if (!d) return null;
                return (
                  <Link key={d.slug} className="dcard" href={`/destinations/${d.slug}`}>
                    <span className="code">{d.code}</span>
                    <i className={`ph-bold ${d.icon} ic`} aria-hidden="true" />
                    <h3>{d.name}</h3>
                    <p>{d.blurb}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {cityVoyages.length > 0 && (
          <section className="pad">
            <div className="wrap">
              <p className="eyebrow">The Archives · {l.city}</p>
              <h2 className="sec">Voyages From {l.city}.</h2>
              <div className="mu-grid">
                {cityVoyages.slice(0, 6).map((v) => (
                  <Link key={v.slug} className="mu" href={`/voyages/${v.slug}`}>
                    <div className="media" style={{ background: "repeating-linear-gradient(45deg,#161C3D 0 14px,#0A0E27 14px 28px)" }}>
                      <span className="gx-chip-pixel px">{v.code}</span>
                    </div>
                    <div className="body">
                      <h3>{v.name}</h3>
                      <p className="meta">
                        {v.meta} · {v.year}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="cta">
          <div className="wrap">
            <p className="eyebrow" style={{ justifyContent: "center" }}>
              Hail the Port
            </p>
            <h2>
              Set Sail
              <br />
              from {l.city}.
            </h2>
            <div className="hero-cta" style={{ justifyContent: "center" }}>
              <Link className="gx-btn gx-btn--lg" href="/contact">
                Launch Your Project
              </Link>
              <Link className="gx-btn gx-btn--ghost gx-btn--lg" href="/locations">
                All Locations
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
