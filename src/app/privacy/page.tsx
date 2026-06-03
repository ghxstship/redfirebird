import type { Metadata } from "next";
import { ORG } from "@/lib/ghxstship";
import { Breadcrumbs } from "@/components/ghxstship/Breadcrumbs";
import { Schema, breadcrumbSchema } from "@/components/ghxstship/Schemas";

export const dynamic = "force-static";

const url = `${ORG.url}privacy`;

export const metadata: Metadata = {
  title: "Privacy Policy — GHXSTSHIP",
  description: "GHXSTSHIP privacy policy — how we collect, use, and protect data submitted through our marketing surface.",
  alternates: { canonical: url },
};

export default function Privacy() {
  return (
    <>
      <Schema
        data={[
          breadcrumbSchema([
            { name: "Home", url: ORG.url },
            { name: "Privacy", url },
          ]),
        ]}
      />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Privacy" }]} />
      <main>
        <section className="subhero">
          <div className="wrap">
            <p className="eyebrow">Legal · Privacy</p>
            <h1>
              Privacy
              <br />
              <span className="pop">Policy.</span>
            </h1>
            <p className="lede">
              GHXSTSHIP Industries LLC takes the privacy of the people who contact us seriously. This page summarizes what we collect, why, and how to reach us about it. The full counsel-reviewed policy is available on request.
            </p>
          </div>
        </section>
        <section className="pad">
          <div className="wrap" style={{ maxWidth: 880 }}>
            <div className="post-body">
              <h2>What we collect</h2>
              <p>When you contact us through this site we collect your name, your email, the company you represent, and the project you're describing. We do not run advertising trackers across this surface.</p>
              <h2>What we do with it</h2>
              <p>We use what you submit to respond to your inquiry. We don't sell it. We don't share it with anyone outside the GHXSTSHIP Skeleton Crew without your explicit permission.</p>
              <h2>How long we keep it</h2>
              <p>We retain inquiry records for the duration of any resulting engagement plus a reasonable archival period. Send us an email if you want us to delete yours sooner.</p>
              <h2>Questions</h2>
              <p>Email <a className="gx-link" href={`mailto:${ORG.email}`}>{ORG.email}</a> with the subject line "Privacy" and we'll respond inside a business week.</p>
              <h2>Counsel-reviewed version</h2>
              <p><strong>This is a working summary, not the final policy.</strong> A counsel-reviewed version is available on request.</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
