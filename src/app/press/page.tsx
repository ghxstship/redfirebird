import type { Metadata } from "next";
import Link from "next/link";
import { ORG, PRESS } from "@/lib/ghxstship";
import { Breadcrumbs } from "@/components/ghxstship/Breadcrumbs";
import { Schema, breadcrumbSchema } from "@/components/ghxstship/Schemas";

export const dynamic = "force-static";

const url = `${ORG.url}press`;

export const metadata: Metadata = {
  title: "Press & Media — GHXSTSHIP",
  description:
    "GHXSTSHIP press and media resources — recent coverage, downloadable brand kit, and contact for press inquiries.",
  alternates: { canonical: url },
};

export default function PressPage() {
  return (
    <>
      <Schema
        data={[
          breadcrumbSchema([
            { name: "Home", url: ORG.url },
            { name: "Press", url },
          ]),
        ]}
      />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Press" }]} />
      <main>
        <section className="subhero">
          <div className="wrap">
            <p className="eyebrow">Press · Media · Brand Kit</p>
            <h1>
              From the
              <br />
              <span className="pop">Captain's Log.</span>
            </h1>
            <p className="lede">
              Press inquiries, recent coverage, and the GHXSTSHIP brand kit. For press, please email{" "}
              <a className="gx-link" href={`mailto:${ORG.email}`}>{ORG.email}</a>.
            </p>
          </div>
        </section>

        <section className="pad alt">
          <div className="wrap">
            <p className="eyebrow">As Seen In</p>
            <h2 className="sec">Press Coverage.</h2>
            <div className="press-strip" style={{ marginTop: 26 }}>
              {PRESS.map((p) => (
                <span key={p}>{p}</span>
              ))}
            </div>
            <p className="lede" style={{ marginTop: 18, textAlign: "center" }}>
              Coverage list is illustrative — recent placements added as they land. Email for the full press kit.
            </p>
          </div>
        </section>

        <section className="pad">
          <div className="wrap">
            <p className="eyebrow">Brand Kit</p>
            <h2 className="sec">For Editors & Designers.</h2>
            <p className="lede">
              The GHXSTSHIP brand kit — logo, wordmark spacing, color palette, and approved imagery. Email <a className="gx-link" href={`mailto:${ORG.email}`}>{ORG.email}</a> to request the file package.
            </p>
            <div className="hero-cta" style={{ marginTop: 22 }}>
              <a className="gx-btn" href={`mailto:${ORG.email}?subject=Press%20Kit%20Request`}>
                Request the Brand Kit
              </a>
              <Link className="gx-btn gx-btn--ghost" href="/about">
                About GHXSTSHIP
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
