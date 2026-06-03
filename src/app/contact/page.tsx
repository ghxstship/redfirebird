import type { Metadata } from "next";
import { ORG } from "@/lib/ghxstship";
import { Breadcrumbs } from "@/components/ghxstship/Breadcrumbs";
import { Schema, breadcrumbSchema } from "@/components/ghxstship/Schemas";

export const dynamic = "force-static";

const url = `${ORG.url}contact`;

export const metadata: Metadata = {
  title: "Contact — Launch Your Project — GHXSTSHIP",
  description:
    "Get in touch with GHXSTSHIP — experiential production, operations, and technology. Miami HQ, with offices in New York, Chicago, and Los Angeles. Tell us where you're headed; we'll chart the course.",
  alternates: { canonical: url },
};

export default function ContactPage() {
  return (
    <>
      <Schema
        data={[
          {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact GHXSTSHIP",
            url,
            mainEntity: {
              "@type": "Organization",
              name: "GHXSTSHIP",
              email: ORG.email,
              url: ORG.url,
            },
          },
          breadcrumbSchema([
            { name: "Home", url: ORG.url },
            { name: "Contact", url },
          ]),
        ]}
      />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
      <main>
        <section className="subhero">
          <div className="wrap">
            <p className="eyebrow">Step 05 · Launch</p>
            <h1>
              Launch Your
              <br />
              <span className="pop">Project.</span>
            </h1>
            <p className="answer">
              Tell us where you're headed and we'll chart the course. We respond inside a business day — engagement model, producer assignment, and a price band on the table.
            </p>
            <form
              className="contact-form"
              action={`mailto:${ORG.email}`}
              method="post"
              encType="text/plain"
              aria-label="Project inquiry form"
            >
              <div>
                <label htmlFor="name">Your name</label>
                <input id="name" name="name" className="gx-input" required autoComplete="name" />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" className="gx-input" required autoComplete="email" />
              </div>
              <div>
                <label htmlFor="company">Company / organization</label>
                <input id="company" name="company" className="gx-input" autoComplete="organization" />
              </div>
              <div>
                <label htmlFor="destination">Destination</label>
                <input
                  id="destination"
                  name="destination"
                  className="gx-input"
                  placeholder="Festival · Tour · Activation · Immersive · Sporting · Broadcast · Other"
                />
              </div>
              <div>
                <label htmlFor="message">Tell us about the voyage</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Scope, scale, when, where, anything else we should know."
                  required
                />
              </div>
              <button type="submit" className="gx-btn gx-btn--lg">
                Send to GHXSTSHIP
              </button>
            </form>
            <p className="lede" style={{ marginTop: 18 }}>
              Or email us directly:{" "}
              <a className="gx-link" href={`mailto:${ORG.email}`}>
                {ORG.email}
              </a>
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
