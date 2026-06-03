import type { Metadata } from "next";
import Link from "next/link";
import { ORG } from "@/lib/ghxstship";
import { Breadcrumbs } from "@/components/ghxstship/Breadcrumbs";
import { Schema, breadcrumbSchema } from "@/components/ghxstship/Schemas";

export const dynamic = "force-static";

const url = `${ORG.url}crew/join`;

export const metadata: Metadata = {
  title: "Join the Crew — Careers — GHXSTSHIP",
  description:
    "Now boarding: GHXSTSHIP is hiring producers, directors, technicians, and logistics leads. Apply to the Skeleton Crew — and apprenticeship paths for the next generation of experiential producers.",
  alternates: { canonical: url },
};

export default function JoinCrew() {
  return (
    <>
      <Schema
        data={[
          breadcrumbSchema([
            { name: "Home", url: ORG.url },
            { name: "Crew", url: `${ORG.url}crew` },
            { name: "Join the Crew", url },
          ]),
        ]}
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Crew", href: "/crew" },
          { label: "Join the Crew" },
        ]}
      />
      <main>
        <section className="subhero">
          <div className="wrap">
            <p className="eyebrow">Now Boarding · Crew Call</p>
            <h1>
              Join the
              <br />
              <span className="pop">Skeleton Crew.</span>
            </h1>
            <p className="answer">
              GHXSTSHIP hires senior producers, directors, technicians, and logistics leads when a voyage requires it — and trains the next generation of experiential producers through apprenticeship. This is a working crew, small by design.
            </p>
          </div>
        </section>

        <section className="pad alt">
          <div className="wrap">
            <div className="two-up">
              <div className="kvbox">
                <h3>What We Hire</h3>
                <ul className="bullets">
                  <li>Executive Producers · Captains of the voyage</li>
                  <li>Production Directors · First Mates on the show floor</li>
                  <li>Project Management · Navigators on the timeline</li>
                  <li>Logistics & Operations Leads · Quartermasters</li>
                  <li>Technical Directors · Bosuns across audio, lighting, video, rigging</li>
                  <li>Hospitality Leads · VIP and guest program operators</li>
                  <li>ATLVS · COMPVSS · GVTEWAY engineers and designers</li>
                </ul>
              </div>
              <div className="kvbox">
                <h3>What We Look For</h3>
                <ul className="bullets">
                  <li>Craft — what you've shipped and what it taught you</li>
                  <li>Judgment — what you did when the plan changed</li>
                  <li>Reliability — what your last three clients say about you</li>
                  <li>The next-gen path — apprenticeship if you're early career</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="pad">
          <div className="wrap">
            <p className="eyebrow">How to Apply</p>
            <h2 className="sec">Tell Us What You've Shipped.</h2>
            <p className="lede">
              Email the Navigator with what you've shipped, what you want to ship next, and three references we can call. We respond inside a business week.
            </p>
            <div className="hero-cta" style={{ marginTop: 22 }}>
              <a className="gx-btn" href={`mailto:${ORG.email}?subject=Crew%20Call%20%E2%80%94%20Application`}>
                Email the Navigator
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
