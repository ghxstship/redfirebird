import type { Metadata } from "next";
import Link from "next/link";
import { POSTS, ORG } from "@/lib/ghxstship";
import { Breadcrumbs } from "@/components/ghxstship/Breadcrumbs";
import { Schema, breadcrumbSchema } from "@/components/ghxstship/Schemas";

export const dynamic = "force-static";

const url = `${ORG.url}logs`;

export const metadata: Metadata = {
  title: "Captain's Log — Dispatches from GHXSTSHIP",
  description:
    "Field notes, press, and crew calls from GHXSTSHIP — the experiential production company. Dispatches on the 8-phase lifecycle, festival production, immersive experiences, and the next generation of experiential producers.",
  alternates: { canonical: url },
};

export default function LogsIndex() {
  return (
    <>
      <Schema
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "Captain's Log",
            url,
            publisher: { "@type": "Organization", name: "GHXSTSHIP", url: ORG.url },
            blogPost: POSTS.map((p) => ({
              "@type": "BlogPosting",
              headline: p.title,
              datePublished: p.iso,
              url: `${ORG.url}logs/${p.slug}`,
            })),
          },
          breadcrumbSchema([
            { name: "Home", url: ORG.url },
            { name: "Logs", url },
          ]),
        ]}
      />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Logs" }]} />
      <main>
        <section className="subhero">
          <div className="wrap">
            <p className="eyebrow">Captain's Log · Dispatches</p>
            <h1>
              From the
              <br />
              <span className="pop">Log.</span>
            </h1>
            <p className="lede">Field notes, press, and crew calls from the voyage.</p>
          </div>
        </section>
        <section className="pad">
          <div className="wrap">
            <div className="log-list">
              {POSTS.map((p) => (
                <Link className="log" href={`/logs/${p.slug}`} key={p.slug}>
                  <span className="log__date">{p.date}</span>
                  <span className="log__cat">{p.cat}</span>
                  <span className="log__t">{p.title}</span>
                  <span className="log__go">↗</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
        <section className="cta">
          <div className="wrap">
            <p className="eyebrow" style={{ justifyContent: "center" }}>
              The Voyage Continues
            </p>
            <h2>
              Chart
              <br />
              Your Project.
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
