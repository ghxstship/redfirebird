import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CREW, ORG, JOIN_CREW } from "@/lib/ghxstship";
import { Breadcrumbs } from "@/components/ghxstship/Breadcrumbs";
import { Schema, breadcrumbSchema } from "@/components/ghxstship/Schemas";

export const dynamic = "force-static";

const url = `${ORG.url}crew`;

export const metadata: Metadata = {
  title: "The Skeleton Crew — GHXSTSHIP",
  description:
    "The GHXSTSHIP Skeleton Crew — Captain, First Mate, Navigator, Quartermaster, Bosun — a senior team of producers, directors, and technicians who stay with you from consultation to celebration.",
  alternates: { canonical: url },
};

export default function CrewIndex() {
  return (
    <>
      <Schema
        data={[
          breadcrumbSchema([
            { name: "Home", url: ORG.url },
            { name: "Crew", url },
          ]),
        ]}
      />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Crew" }]} />
      <main>
        <section className="subhero">
          <div className="wrap">
            <p className="eyebrow">Step 04 · Meet the Skeleton Crew</p>
            <h1>
              The Skeleton
              <br />
              <span className="pop">Crew.</span>
            </h1>
            <p className="answer">
              Every voyage is manned by the Skeleton Crew — a senior team of producers, directors, and technicians who stay with you from consultation to celebration. Small by design, legendary by reputation.
            </p>
          </div>
        </section>

        <section className="pad alt">
          <div className="wrap">
            <p className="eyebrow">The Ranks</p>
            <h2 className="sec">Who's on the Bridge.</h2>
            <div className="crew-grid">
              {CREW.map((c) => (
                <article className="ccard" key={c.title}>
                  <div className="av">
                    <Image src="/assets/skull-bone.svg" alt="" width={40} height={40} style={{ imageRendering: "pixelated" }} />
                  </div>
                  <div>
                    <div className="rank">{c.rank}</div>
                    <h3>{c.title}</h3>
                    <p>{c.blurb}</p>
                  </div>
                </article>
              ))}
              <Link className="ccard join" href="/crew/join">
                <div className="av">
                  <Image src="/assets/logo-ghostship-skull.svg" alt="" width={40} height={40} style={{ imageRendering: "pixelated" }} />
                </div>
                <div>
                  <div className="rank">{JOIN_CREW.rank}</div>
                  <h3>{JOIN_CREW.title}</h3>
                  <p>{JOIN_CREW.blurb}</p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        <section className="pad">
          <div className="wrap">
            <p className="eyebrow">Responsibilities</p>
            <h2 className="sec">What Each Rank Owns.</h2>
            <div className="two-up" style={{ marginTop: 36 }}>
              {CREW.slice(0, 2).map((c) => (
                <div className="kvbox" key={c.title}>
                  <h3>
                    {c.rank} · {c.title}
                  </h3>
                  <ul className="bullets">
                    {c.responsibilities.map((r) => (
                      <li key={r}>{r}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="two-up">
              {CREW.slice(2, 4).map((c) => (
                <div className="kvbox" key={c.title}>
                  <h3>
                    {c.rank} · {c.title}
                  </h3>
                  <ul className="bullets">
                    {c.responsibilities.map((r) => (
                      <li key={r}>{r}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="two-up">
              {CREW.slice(4).map((c) => (
                <div className="kvbox" key={c.title}>
                  <h3>
                    {c.rank} · {c.title}
                  </h3>
                  <ul className="bullets">
                    {c.responsibilities.map((r) => (
                      <li key={r}>{r}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="cta">
          <div className="wrap">
            <p className="eyebrow" style={{ justifyContent: "center" }}>
              Now Boarding
            </p>
            <h2>
              Join the
              <br />
              Crew.
            </h2>
            <div className="hero-cta" style={{ justifyContent: "center" }}>
              <Link className="gx-btn gx-btn--lg" href="/crew/join">
                Apply to the Crew
              </Link>
              <Link className="gx-btn gx-btn--ghost gx-btn--lg" href="/about">
                About GHXSTSHIP
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
