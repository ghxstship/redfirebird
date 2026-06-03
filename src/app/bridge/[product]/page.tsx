import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { INSTRUMENTS, INSTRUMENT_BY_SLUG, ORG } from "@/lib/ghxstship";
import { Breadcrumbs } from "@/components/ghxstship/Breadcrumbs";
import {
  Schema,
  breadcrumbSchema,
  faqSchema,
  softwareApplicationSchema,
} from "@/components/ghxstship/Schemas";

export const dynamic = "force-static";

export function generateStaticParams() {
  return INSTRUMENTS.map((i) => ({ product: i.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ product: string }> }): Promise<Metadata> {
  const { product } = await params;
  const i = INSTRUMENT_BY_SLUG[product];
  if (!i) return {};
  const url = `${ORG.url}bridge/${i.slug}`;
  return {
    title: i.titleSEO,
    description: i.metaDesc,
    keywords: [i.primaryKW, i.title, "experiential production software"],
    alternates: { canonical: url },
    openGraph: { title: i.titleSEO, description: i.metaDesc, url, type: "website" },
  };
}

export default async function InstrumentPage({ params }: { params: Promise<{ product: string }> }) {
  const { product } = await params;
  const i = INSTRUMENT_BY_SLUG[product];
  if (!i) return notFound();
  const url = `${ORG.url}bridge/${i.slug}`;

  return (
    <>
      <Schema
        data={[
          softwareApplicationSchema({
            name: i.title,
            description: i.metaDesc,
            url,
            applicationCategory: i.applicationCategory,
          }),
          breadcrumbSchema([
            { name: "Home", url: ORG.url },
            { name: "The Bridge", url: `${ORG.url}#instruments` },
            { name: i.title, url },
          ]),
          faqSchema(i.faqs),
        ]}
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "The Bridge", href: "/#instruments" },
          { label: i.title },
        ]}
      />
      <main>
        <section className="subhero">
          <div className="wrap">
            <p className="eyebrow">{i.eyebrow}</p>
            <h1>
              {i.heroSplit[0]}
              <br />
              <span className="pop">{i.heroSplit[1]}</span>
            </h1>
            <p className="answer">{i.answer}</p>
            <div className="voymeta" style={{ marginTop: 22 }}>
              <span>
                Category <b>{i.tag}</b>
              </span>
              <span>
                Audience <b>{i.audience}</b>
              </span>
            </div>
            <div className="hero-cta" style={{ marginTop: 18 }}>
              <Link className="gx-btn" href="/contact">
                Request a Tour
              </Link>
              <Link className="gx-btn gx-btn--ghost" href="/#instruments">
                All Instruments ↗
              </Link>
            </div>
          </div>
        </section>

        <section className="pad alt">
          <div className="wrap">
            <p className="eyebrow">What {i.title} Does</p>
            <h2 className="sec">Features.</h2>
            <div className="dest-grid" style={{ marginTop: 30 }}>
              {i.features.map((f) => (
                <div key={f.name} className="dcard" style={{ pointerEvents: "none" }}>
                  <i className={`ph-bold ${f.icon} ic`} aria-hidden="true" />
                  <h3>{f.name}</h3>
                  <p>{f.blurb}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pad">
          <div className="wrap">
            <div className="two-up">
              <div>
                <p className="eyebrow">Phase Alignment</p>
                <h2 className="sec" style={{ fontSize: "clamp(28px,4vw,46px)" }}>
                  Built for the Lifecycle.
                </h2>
                <p className="lede">{i.phaseAlignment}</p>
                <Link className="gx-link" href="/#itinerary" style={{ display: "inline-block", marginTop: 16 }}>
                  See the 8-phase itinerary →
                </Link>
              </div>
              <div className="kvbox">
                <h3>Integrations</h3>
                <ul className="bullets">
                  {i.integrations.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="pad alt faq">
          <div className="wrap">
            <p className="eyebrow">Answers</p>
            <h2 className="sec">{i.title} FAQ.</h2>
            <div className="faq-list">
              {i.faqs.map((f, idx) => (
                <details key={f.q} open={idx === 0}>
                  <summary>
                    {f.q}
                    <span className="ic">+</span>
                  </summary>
                  <p className="a">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="cta">
          <div className="wrap">
            <p className="eyebrow" style={{ justifyContent: "center" }}>
              The Bridge
            </p>
            <h2>
              Steer the
              <br />
              Voyage.
            </h2>
            <div className="hero-cta" style={{ justifyContent: "center" }}>
              <Link className="gx-btn gx-btn--lg" href="/contact">
                Request a Tour
              </Link>
              <Link className="gx-btn gx-btn--ghost gx-btn--lg" href="/#instruments">
                Compare Instruments
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
