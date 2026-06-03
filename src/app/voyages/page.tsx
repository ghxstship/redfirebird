import type { Metadata } from "next";
import Link from "next/link";
import { VOYAGES, ORG } from "@/lib/ghxstship";
import { Breadcrumbs } from "@/components/ghxstship/Breadcrumbs";
import { Schema, breadcrumbSchema } from "@/components/ghxstship/Schemas";

export const dynamic = "force-static";

const url = `${ORG.url}voyages`;

export const metadata: Metadata = {
  title: "The Archives — Past Voyages — GHXSTSHIP",
  description:
    "Past voyages from GHXSTSHIP — festivals, brand activations, immersive experiences, sporting events, and motorsports productions. Every voyage logged, every destination reached.",
  alternates: { canonical: url },
};

export default function VoyagesIndex() {
  return (
    <>
      <Schema
        data={[
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "GHXSTSHIP Selected Work",
            url,
            itemListElement: VOYAGES.map((v, i) => ({
              "@type": "ListItem",
              position: i + 1,
              item: {
                "@type": "CreativeWork",
                name: v.name,
                about: v.about,
                ...(v.venue ? { locationCreated: { "@type": "Place", name: v.venue } } : {}),
                ...(v.date ? { datePublished: v.date } : {}),
                url: `${ORG.url}voyages/${v.slug}`,
              },
            })),
          },
          breadcrumbSchema([
            { name: "Home", url: ORG.url },
            { name: "Archives", url },
          ]),
        ]}
      />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Archives" }]} />
      <main>
        <section className="subhero">
          <div className="wrap">
            <p className="eyebrow">The Archives · Past Voyages</p>
            <h1>
              Past
              <br />
              <span className="pop">Voyages.</span>
            </h1>
            <p className="lede">
              Every voyage we've chartered — festivals, activations, immersive experiences, sporting events — logged with a destination, a venue, and a year. Browse the archives.
            </p>
          </div>
        </section>
        <section className="pad">
          <div className="wrap">
            <div className="gx-fids">
              <div className="gx-fids__head">
                <div className="ttl">
                  <i className="ph-fill ph-monitor" aria-hidden="true" />
                  Arrivals
                </div>
                <div className="clock">All Voyages</div>
              </div>
              <div className="gx-fids__row gx-fids__row--head">
                <span>Voyage</span>
                <span>Destination</span>
                <span>Year</span>
                <span>Status</span>
              </div>
              {VOYAGES.map((v) => (
                <Link
                  className="gx-fids__row"
                  key={v.slug}
                  href={`/voyages/${v.slug}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <span className="gx-flap">{v.code}</span>
                  <div className="gx-fids__dest">
                    {v.name}
                    <small>{v.meta}</small>
                  </div>
                  <span className="gx-fids__meta">{v.year}</span>
                  <span className={`gx-status gx-status--${v.status}`}>{v.statusLabel}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
        <section className="cta">
          <div className="wrap">
            <p className="eyebrow" style={{ justifyContent: "center" }}>
              Want to be the Next Voyage?
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
              <Link className="gx-btn gx-btn--ghost gx-btn--lg" href="/#destinations">
                Explore Destinations
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
