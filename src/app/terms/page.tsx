import type { Metadata } from "next";
import { ORG } from "@/lib/ghxstship";
import { Breadcrumbs } from "@/components/ghxstship/Breadcrumbs";
import { Schema, breadcrumbSchema } from "@/components/ghxstship/Schemas";

export const dynamic = "force-static";

const url = `${ORG.url}terms`;

export const metadata: Metadata = {
  title: "Terms of Use — GHXSTSHIP",
  description: "GHXSTSHIP terms of use — the working terms that govern your visit to ghxstship.xyz.",
  alternates: { canonical: url },
};

export default function Terms() {
  return (
    <>
      <Schema
        data={[
          breadcrumbSchema([
            { name: "Home", url: ORG.url },
            { name: "Terms", url },
          ]),
        ]}
      />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Terms" }]} />
      <main>
        <section className="subhero">
          <div className="wrap">
            <p className="eyebrow">Legal · Terms of Use</p>
            <h1>
              Terms
              <br />
              <span className="pop">of Use.</span>
            </h1>
            <p className="lede">
              The working terms that govern your visit to ghxstship.xyz. Engagement-specific terms — contracts, statements of work, master services agreements — are issued separately during the Charter phase.
            </p>
          </div>
        </section>
        <section className="pad">
          <div className="wrap" style={{ maxWidth: 880 }}>
            <div className="post-body">
              <h2>Acceptable use</h2>
              <p>This site exists to describe what GHXSTSHIP does and how to engage us. Don't scrape it for resale. Don't repurpose the brand mark or wordmark without written permission.</p>
              <h2>Trademarks</h2>
              <p>GHXSTSHIP, Venture Beyond, ATLVS, COMPVSS, and GVTEWAY are trademarks of GHXSTSHIP Industries LLC. Use of those marks requires our written permission.</p>
              <h2>Project terms</h2>
              <p>Anything you sign with us during the Charter phase — Statement of Work, Master Services Agreement, NDA, individual project contract — governs that engagement and supersedes any conflicting language on this page.</p>
              <h2>Questions</h2>
              <p>Email <a className="gx-link" href={`mailto:${ORG.email}`}>{ORG.email}</a> with the subject line "Terms."</p>
              <h2>Counsel-reviewed version</h2>
              <p><strong>This is a working summary, not the final terms.</strong> A counsel-reviewed version is available on request.</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
