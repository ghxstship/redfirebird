import type { Metadata } from "next";
import { ORG } from "@/lib/ghxstship";
import { Breadcrumbs } from "@/components/ghxstship/Breadcrumbs";
import { Schema, breadcrumbSchema } from "@/components/ghxstship/Schemas";

export const dynamic = "force-static";

const url = `${ORG.url}confidentiality`;

export const metadata: Metadata = {
  title: "Confidentiality — GHXSTSHIP",
  description: "GHXSTSHIP confidentiality policy — how we treat client information, projects in flight, and sensitive material across our work.",
  alternates: { canonical: url },
};

export default function Confidentiality() {
  return (
    <>
      <Schema
        data={[
          breadcrumbSchema([
            { name: "Home", url: ORG.url },
            { name: "Confidentiality", url },
          ]),
        ]}
      />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Confidentiality" }]} />
      <main>
        <section className="subhero">
          <div className="wrap">
            <p className="eyebrow">Legal · Confidentiality</p>
            <h1>
              The
              <br />
              <span className="pop">Sealed Manifest.</span>
            </h1>
            <p className="lede">
              How GHXSTSHIP treats client information, projects in flight, and sensitive material across our work. The bridge between brand voice and counsel posture.
            </p>
          </div>
        </section>
        <section className="pad">
          <div className="wrap" style={{ maxWidth: 880 }}>
            <div className="post-body">
              <h2>What is confidential</h2>
              <p>Client identities prior to public announcement; project budgets, scopes, and proposals; talent and vendor relationships; technical riders; venue arrangements; security and incident detail; financial reconciliations; and anything explicitly marked confidential in a contract.</p>
              <h2>Who holds it</h2>
              <p>The Skeleton Crew assigned to the voyage. Other GHXSTSHIP crew on a need-to-know basis. Vendors and partners only after an NDA is in place.</p>
              <h2>How long</h2>
              <p>Until the client authorizes disclosure (typically post-event for case studies), or in perpetuity for material the client deems trade secret.</p>
              <h2>Press and case studies</h2>
              <p>We never publish a voyage to the Archives without explicit client sign-off on the case-study text, imagery, and metrics. Default posture is: nothing public until you say so.</p>
              <h2>Counsel-reviewed version</h2>
              <p><strong>This is a working summary, not the final confidentiality framework.</strong> A counsel-reviewed version is available on request — and engagement-specific NDAs are standard in the Charter phase.</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
