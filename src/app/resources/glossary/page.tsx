import type { Metadata } from "next";
import Link from "next/link";
import { GLOSSARY, ORG } from "@/lib/ghxstship";
import { Breadcrumbs } from "@/components/ghxstship/Breadcrumbs";
import { Schema, breadcrumbSchema, definedTermSetSchema } from "@/components/ghxstship/Schemas";

export const dynamic = "force-static";

const url = `${ORG.url}resources/glossary`;

export const metadata: Metadata = {
  title: "Experiential Production Glossary — GHXSTSHIP",
  description:
    "The definitive glossary of experiential production, operations, and event technology terms — by GHXSTSHIP. Plain-language definitions of festival production, the production lifecycle, load-in, run of show, and more.",
  alternates: { canonical: url },
  openGraph: {
    title: "Experiential Production Glossary — GHXSTSHIP",
    description: "Plain-language definitions of the experiential production industry — the terms, defined by the people who produce it.",
    url,
    type: "website",
  },
};

export default function GlossaryPage() {
  return (
    <>
      <Schema
        data={[
          definedTermSetSchema({
            name: "GHXSTSHIP Experiential Production Glossary",
            url,
            terms: GLOSSARY.map((t) => ({ name: t.name, description: t.description })),
          }),
          breadcrumbSchema([
            { name: "Home", url: ORG.url },
            { name: "Resources", url: `${ORG.url}resources/glossary` },
            { name: "Glossary", url },
          ]),
        ]}
      />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources" }, { label: "Glossary" }]} />
      <main>
        <section className="subhero" style={{ borderBottom: "2px solid var(--ink-3)" }}>
          <div className="wrap">
            <p className="eyebrow">Resources · The Field Guide</p>
            <h1>
              The Experiential
              <br />
              <span className="pop">Production Glossary.</span>
            </h1>
            <p className="lede">
              The industry's terms, defined plainly by the people who produce it. A reference for producers, brands, and the next generation learning the craft — part of the GHXSTSHIP commitment to training experiential producers.
            </p>
          </div>
        </section>
        <section className="terms">
          <div className="wrap">
            {GLOSSARY.map((t) => (
              <article className="term" key={t.name}>
                <h2>{t.name}</h2>
                <p>{t.description}</p>
                {t.related && t.related.length > 0 && (
                  <span className="x">Related: {t.related.join(" · ")}</span>
                )}
              </article>
            ))}
          </div>
        </section>
        <section className="cta">
          <div className="wrap">
            <p className="eyebrow" style={{ justifyContent: "center" }}>
              Apprentice the Craft
            </p>
            <h2>Learn the Ropes.</h2>
            <div className="hero-cta" style={{ justifyContent: "center" }}>
              <Link className="gx-btn gx-btn--lg" href="/crew/join">
                Join the Crew
              </Link>
              <Link className="gx-btn gx-btn--ghost gx-btn--lg" href="/logs">
                Read the Logs
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
