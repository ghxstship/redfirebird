import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CHARTERS, CHARTER_BY_SLUG, ORG } from "@/lib/ghxstship";
import { Breadcrumbs } from "@/components/ghxstship/Breadcrumbs";
import { Schema, breadcrumbSchema, faqSchema, serviceSchema } from "@/components/ghxstship/Schemas";

export const dynamic = "force-static";

export function generateStaticParams() {
  return CHARTERS.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const c = CHARTER_BY_SLUG[slug];
  if (!c) return {};
  const url = `${ORG.url}charters/${c.slug}`;
  return {
    title: c.titleSEO,
    description: c.metaDesc,
    alternates: { canonical: url },
    openGraph: { title: c.titleSEO, description: c.metaDesc, url, type: "website" },
  };
}

export default async function CharterPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = CHARTER_BY_SLUG[slug];
  if (!c) return notFound();
  const url = `${ORG.url}charters/${c.slug}`;

  return (
    <>
      <Schema
        data={[
          serviceSchema({
            name: `${c.title} — GHXSTSHIP Engagement`,
            serviceType: "Experiential production engagement",
            description: c.answer,
            audience: "Brands, producers, creative directors, and production directors",
            url,
          }),
          breadcrumbSchema([
            { name: "Home", url: ORG.url },
            { name: "Charters", url: `${ORG.url}#engagements` },
            { name: c.title, url },
          ]),
          faqSchema(c.faqs),
        ]}
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Charters", href: "/#engagements" },
          { label: c.title },
        ]}
      />
      <main>
        <section className="subhero">
          <div className="wrap">
            <p className="eyebrow">{c.heroEyebrow}</p>
            <h1>
              {c.heroSplit[0]}
              <br />
              <span className="pop">{c.heroSplit[1]}</span>
            </h1>
            <p className="answer">{c.answer}</p>
            <div className="hero-cta" style={{ marginTop: 18 }}>
              <Link className="gx-btn" href="/contact">
                Charter This
              </Link>
              <Link className="gx-btn gx-btn--ghost" href="/#engagements">
                Compare Charters ↗
              </Link>
            </div>
          </div>
        </section>

        <section className="pad alt">
          <div className="wrap">
            <div className="two-up">
              <div>
                <p className="eyebrow">Best For</p>
                <h2 className="sec" style={{ fontSize: "clamp(28px,4vw,46px)" }}>
                  Who Should Charter This.
                </h2>
                <p className="lede">{c.best}</p>
              </div>
              <div className="kvbox">
                <h3>Includes</h3>
                <ul className="bullets">
                  {c.includes.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="pad">
          <div className="wrap">
            <div className="two-up">
              <div className="kvbox">
                <h3>Typical Timeline</h3>
                <p style={{ fontSize: 16, lineHeight: 1.6, color: "var(--fg-on-dark-2)" }}>{c.timeline}</p>
              </div>
              <div className="kvbox">
                <h3>Pricing Approach</h3>
                <p style={{ fontSize: 16, lineHeight: 1.6, color: "var(--fg-on-dark-2)" }}>{c.pricingApproach}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="pad alt faq">
          <div className="wrap">
            <p className="eyebrow">Answers</p>
            <h2 className="sec">{c.title} FAQ.</h2>
            <div className="faq-list">
              {c.faqs.map((f, i) => (
                <details key={f.q} open={i === 0}>
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
              Step 02 · Pick Your Charter
            </p>
            <h2>
              Charter
              <br />
              {c.title}.
            </h2>
            <div className="hero-cta" style={{ justifyContent: "center" }}>
              <Link className="gx-btn gx-btn--lg" href="/contact">
                Launch Your Project
              </Link>
              <Link className="gx-btn gx-btn--ghost gx-btn--lg" href="/#engagements">
                Compare Charters
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
