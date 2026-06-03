import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  DESTINATIONS,
  DESTINATION_BY_SLUG,
  ORG,
  ITINERARY,
  voyagesByDestination,
} from "@/lib/ghxstship";
import { Breadcrumbs } from "@/components/ghxstship/Breadcrumbs";
import { Schema, breadcrumbSchema, faqSchema, serviceSchema } from "@/components/ghxstship/Schemas";

export const dynamic = "force-static";

export function generateStaticParams() {
  return DESTINATIONS.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const d = DESTINATION_BY_SLUG[slug];
  if (!d) return {};
  const url = `${ORG.url}destinations/${d.slug}`;
  return {
    title: d.titleSEO,
    description: d.metaDesc,
    keywords: d.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: d.titleSEO,
      description: d.metaDesc,
      url,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: d.titleSEO,
      description: d.metaDesc,
    },
  };
}

export default async function DestinationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const d = DESTINATION_BY_SLUG[slug];
  if (!d) return notFound();
  const url = `${ORG.url}destinations/${d.slug}`;
  const voyages = voyagesByDestination(d.slug);

  return (
    <>
      <Schema
        data={[
          serviceSchema({
            name: d.name,
            serviceType: d.serviceType,
            description: d.serviceDescription,
            audience: d.audienceSchema,
            url,
          }),
          breadcrumbSchema([
            { name: "Home", url: ORG.url },
            { name: "Destinations", url: `${ORG.url}#destinations` },
            { name: d.name, url },
          ]),
          faqSchema(d.faqs),
        ]}
      />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Destinations", href: "/#destinations" },
          { label: d.name },
        ]}
      />

      <main>
        {/* HERO */}
        <section className="subhero">
          <div className="wrap">
            <p className="eyebrow">{d.heroEyebrow}</p>
            <h1>
              {d.heroSplit[0]}
              <br />
              <span className="pop">{d.heroSplit[1]}</span>
            </h1>
            <p className="answer" dangerouslySetInnerHTML={{ __html: d.answer.replace(d.serviceType, `<strong>${d.serviceType}</strong>`) }} />
            <div className="hero-cta">
              <Link className="gx-btn" href="/contact">
                Launch Your Project
              </Link>
              <Link className="gx-btn gx-btn--ghost" href="/#destinations">
                All Destinations ↗
              </Link>
            </div>
          </div>
        </section>

        {/* WHAT'S ABOARD */}
        <section className="pad alt">
          <div className="wrap">
            <p className="eyebrow">What's Aboard</p>
            <h2 className="sec">{d.capsHeading}</h2>
            <div className="caps">
              {d.caps.map((c) => (
                <div className="cap" key={c.label}>
                  <i className={`ph-bold ${c.icon}`} aria-hidden="true" />
                  {c.label}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ITINERARY */}
        <section className="pad">
          <div className="wrap">
            <p className="eyebrow">The Itinerary · Applied</p>
            <h2 className="sec">{d.name}, Eight Phases.</h2>
            <p className="lede">{d.itineraryNote}</p>
            <div className="gx-smap" style={{ marginTop: 40 }}>
              <div className="gx-smap__line">
                {ITINERARY.map((p) => (
                  <Link
                    href={`/itinerary/${p.slug}`}
                    key={p.slug}
                    className={`gx-smap__stop${p.term ? " is-terminus" : ""}`}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <div className="gx-smap__dot">{p.n}</div>
                    <div className="gx-smap__name">{p.name}</div>
                    <div className="gx-smap__sub">{p.sub}</div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* AUDIENCE */}
        <section className="pad alt">
          <div className="wrap">
            <p className="eyebrow">Who It's For</p>
            <h2 className="sec">{d.audienceHeading}</h2>
            <p className="answer">{d.audienceLine}</p>
            <div className="aud">
              {d.audience.map((a) => (
                <span className="gx-tag" key={a}>
                  {a}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ARCHIVES */}
        <section className="pad">
          <div className="wrap">
            <p className="eyebrow">The Archives · {d.name}</p>
            <h2 className="sec">{d.archiveHeading}</h2>
            {voyages.length > 0 ? (
              <div className="mu-grid">
                {voyages.map((v) => (
                  <Link className="mu" key={v.slug} href={`/voyages/${v.slug}`}>
                    <div
                      className="media"
                      style={{
                        background:
                          v.status === "ontime"
                            ? "radial-gradient(var(--nebula) 16%,transparent 17%) 0 0/18px 18px,var(--ink)"
                            : "repeating-linear-gradient(45deg,#161C3D 0 14px,#0A0E27 14px 28px)",
                      }}
                    >
                      <span className="gx-chip-pixel px">{v.code}</span>
                      <i className={`ph-bold ${d.icon}`} style={{ fontSize: 44, color: "var(--brass)" }} />
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
            ) : (
              <div className="mu-grid">
                <article className="mu" style={{ gridColumn: "1/-1" }}>
                  <div className="body" style={{ textAlign: "center", padding: 40 }}>
                    <h3>Now Charting</h3>
                    <p className="meta" style={{ marginTop: 8 }}>
                      New {d.name.toLowerCase()} work is on the board. Want to be the first case study? Launch your project.
                    </p>
                    <Link className="gx-btn gx-btn--sm" style={{ marginTop: 18 }} href="/contact">
                      Launch Your Project
                    </Link>
                  </div>
                </article>
              </div>
            )}
          </div>
        </section>

        {/* THE DIFFERENCE */}
        <section className="pad" id="difference" aria-labelledby="diff-h">
          <div className="wrap">
            <p className="eyebrow">Why GHXSTSHIP</p>
            <h2 className="sec" id="diff-h">
              The Difference.
            </h2>
            <p className="answer">
              Most experiential and brand-activation agencies stop at creative and hand you to a chain of vendors. GHXSTSHIP owns the entire voyage — and builds the technology that powers it.
            </p>
            <div className="caps" style={{ marginTop: 34 }}>
              <div className="cap">
                <i className="ph-bold ph-path" aria-hidden="true" />
                <span>
                  <b>End to end</b> — all 8 phases, one accountable crew, not just creative.
                </span>
              </div>
              <div className="cap">
                <i className="ph-bold ph-compass-tool" aria-hidden="true" />
                <span>
                  <b>We build the tech</b> — ATLVS, COMPVSS & GVTEWAY, in-house.
                </span>
              </div>
              <div className="cap">
                <i className="ph-bold ph-shield-check" aria-hidden="true" />
                <span>
                  <b>Ops as a discipline</b> — logistics, crew & compliance, a full vertical.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="pad alt faq">
          <div className="wrap">
            <p className="eyebrow">Answers</p>
            <h2 className="sec">{d.name} FAQ.</h2>
            <div className="faq-list">
              {d.faqs.map((f, i) => (
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

        {/* CTA */}
        <section className="cta">
          <div className="wrap">
            <p className="eyebrow" style={{ justifyContent: "center" }}>
              Step 05 · Launch Your Project
            </p>
            <h2>
              {d.ctaHeading[0]}
              <br />
              {d.ctaHeading[1]}
            </h2>
            <div className="hero-cta" style={{ justifyContent: "center" }}>
              <Link className="gx-btn gx-btn--lg" href="/contact">
                Launch Your Project
              </Link>
              <Link className="gx-btn gx-btn--ghost gx-btn--lg" href="/voyages">
                Browse the Archives
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
