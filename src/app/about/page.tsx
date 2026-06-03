import type { Metadata } from "next";
import Link from "next/link";
import { ORG } from "@/lib/ghxstship";
import { Breadcrumbs } from "@/components/ghxstship/Breadcrumbs";
import { Schema, breadcrumbSchema } from "@/components/ghxstship/Schemas";

export const dynamic = "force-static";

const url = `${ORG.url}about`;

export const metadata: Metadata = {
  title: "About — GHXSTSHIP — Venture Beyond",
  description:
    "GHXSTSHIP is a full-service experiential production, operations, and technology company headquartered in Miami, with offices in New York, Chicago, and Los Angeles. Founded 2022. Venture Beyond.",
  alternates: { canonical: url },
};

export default function AboutPage() {
  return (
    <>
      <Schema
        data={[
          {
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "About GHXSTSHIP",
            url,
            mainEntity: { "@type": "Organization", name: "GHXSTSHIP", url: ORG.url },
          },
          breadcrumbSchema([
            { name: "Home", url: ORG.url },
            { name: "About", url },
          ]),
        ]}
      />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About" }]} />
      <main>
        <section className="subhero">
          <div className="wrap">
            <p className="eyebrow">Story · Why GHXSTSHIP Exists</p>
            <h1>
              Venture
              <br />
              <span className="pop">Beyond.</span>
            </h1>
            <p className="answer">
              GHXSTSHIP is a full-service experiential production, operations, and technology company headquartered in Miami, with offices in New York, Chicago, and Los Angeles. We produce festivals, concerts and tours, brand activations, immersive experiences, and sporting events — for brands, producers, creative directors, and production directors — across three verticals: Production, Operations, and Technology.
            </p>
          </div>
        </section>

        <section className="pad alt">
          <div className="wrap">
            <p className="eyebrow">The Thesis</p>
            <h2 className="sec">Three Verticals. One Ship.</h2>
            <div className="vgrid">
              <article className="vcard">
                <span className="gateid">Production</span>
                <h3>We Build the Show.</h3>
                <span className="tag">End-to-end creative + physical</span>
                <p>Festivals, concerts and tours, activations, scenic, staging, technical production, show calling. The work the audience sees.</p>
              </article>
              <article className="vcard">
                <span className="gateid">Operations</span>
                <h3>We Run the Machine.</h3>
                <span className="tag">Management + delivery</span>
                <p>Logistics, crew and workforce, budgets, compliance, analytics. The eight-phase production lifecycle lives here.</p>
              </article>
              <article className="vcard">
                <span className="gateid">Technology</span>
                <h3>We Build the Tools.</h3>
                <span className="tag">Proprietary software</span>
                <p>ATLVS (production), COMPVSS (workforce), GVTEWAY (ticketing). Almost no agency in the category ships its own platforms.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="pad">
          <div className="wrap">
            <p className="eyebrow">Founding</p>
            <h2 className="sec">Why We Started.</h2>
            <p className="answer">
              We started GHXSTSHIP in 2022 because experiential agencies were stopping at creative and handing clients to a chain of vendors. We wanted to own the full eight-phase lifecycle — Discovery through Strike — and run it on technology we built ourselves. Three years on, the thesis holds. The Skeleton Crew is small by design, legendary by reputation; the Archives prove it.
            </p>
          </div>
        </section>

        <section className="pad alt">
          <div className="wrap">
            <p className="eyebrow">Home Ports</p>
            <h2 className="sec">Where We Sail From.</h2>
            <p className="answer">
              Miami headquarters; offices in New York, Chicago, and Los Angeles. Local presence, national reach, one accountable standard.
            </p>
            <div className="hero-cta" style={{ marginTop: 22 }}>
              <Link className="gx-btn" href="/locations">
                Visit the Locations
              </Link>
              <Link className="gx-btn gx-btn--ghost" href="/crew">
                Meet the Crew
              </Link>
            </div>
          </div>
        </section>

        <section className="cta">
          <div className="wrap">
            <p className="eyebrow" style={{ justifyContent: "center" }}>
              Hail the Studio
            </p>
            <h2>
              Set
              <br />
              Sail.
            </h2>
            <div className="hero-cta" style={{ justifyContent: "center" }}>
              <Link className="gx-btn gx-btn--lg" href="/contact">
                Launch Your Project
              </Link>
              <Link className="gx-btn gx-btn--ghost gx-btn--lg" href="/voyages">
                Past Voyages
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
