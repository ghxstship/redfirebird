import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { CATALOG_STATS, paths } from "@/lib/ghxstship";
import { GhxstshipJsonLd, breadcrumbSchema, organizationSchema } from "@/components/ghxstship/JsonLd";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "About — The Ghost Ship Of Experiential Production",
  description:
    "GHXSTSHIP runs festivals, theme park attractions, fan zones, theatrical productions, brand activations, and premium hospitality. Anchored in Miami, New York, Chicago, LA. We wrote the XPMS — the schema nobody else had — and run every engagement on it.",
  alternates: { canonical: "https://ghxstship.pro/about" },
};

const PRINCIPLES = [
  {
    eyebrow: "I",
    title: "We wrote the schema.",
    body: "The XPMS — Experiential Project Management System, v1.0 locked, append-only — is our operating system. Five orthogonal axes plus geography. Vendors, deliverables, compliance, budgets, schedules, COIs, talent riders — every transactable atom carries a stable identifier you can audit end to end. The same schema runs internally on ATLVS, the software arm. The same schema publishes the catalog you're reading. The brochure isn't a brochure. It's the database.",
  },
  {
    eyebrow: "II",
    title: "Receipts, not promises.",
    body: "Stamped engineering with the PE seal that matters in your jurisdiction. Signed COIs to every named party. Executed MSAs with phase-gated payment terms. Fire-marshal sign-offs. ESG reports sponsor-ready by Wrap. Photo-and-video assets with the Atom Identifier in the file name. We don't pitch the case study. We send it.",
  },
  {
    eyebrow: "III",
    title: "Operator vernacular. No apologies.",
    body: "Load-in. Advance. Run-of-show. RFI. Paddock. Dry-dock. Clean zone. Front-of-house. IATSE jurisdiction. NFPA 701. ASTM F24. SOLAS. If you know what those words mean, welcome aboard. If you don't, we translate. We will not water it down so it sounds friendlier in a deck. Production is a craft, not a vibe.",
  },
  {
    eyebrow: "IV",
    title: "Anchored, not headquartered.",
    body: "Full-time crews and dedicated fabrication in Miami, New York, Chicago, Los Angeles. Eight satellite ports — Orlando, Nashville, Austin, Atlanta, Minneapolis, Denver, Las Vegas, Seattle. Wherever the work lives, the ghost ship makes port. The producer who answers your email is the producer on site at load-in. We do not subcontract the show.",
  },
];

export default function AboutPage() {
  return (
    <>
      <GhxstshipJsonLd
        data={[
          breadcrumbSchema([
            { label: "GHXSTSHIP", href: "/" },
            { label: "About", href: "/about" },
          ]),
          organizationSchema(),
        ]}
      />
      <div className="space-y-20 pb-24">
        <section className="mx-auto max-w-6xl px-6 pt-16">
          <div className="text-xs font-semibold tracking-[0.25em] uppercase" style={{ color: "var(--org-primary)" }}>
            About
          </div>
          <h1 className="mt-4 text-5xl uppercase sm:text-7xl" style={{ fontFamily: "var(--font-display)" }}>
            The studio
            <br />
            with its own
            <br />
            operating system.
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-[var(--text-secondary)]">
            We&apos;re GHXSTSHIP. We run festivals, theme park attractions, immersive walkthroughs, theatrical
            productions, fan zones, brand activations, F1 paddock clubs, Olympic hospitality houses, museum galas,
            and the kind of premium private dinners where the wine cellar gets airlifted in. We span{" "}
            {CATALOG_STATS.serviceCount} services across {CATALOG_STATS.classCount} disciplines and{" "}
            {CATALOG_STATS.solutionCount} industries, anchored in Miami, New York, Chicago, and Los Angeles, with
            satellite ports across the country and international reach from any anchor. The XPMS — the framework
            we wrote — is what lets us hold all of it inside one company without dropping the through-line.
          </p>
        </section>

        <section className="mx-auto max-w-6xl px-6">
          <div className="grid gap-5 sm:grid-cols-2">
            {PRINCIPLES.map((p) => (
              <div key={p.eyebrow} className="surface hover-lift p-8">
                <div
                  className="text-xs font-semibold tracking-[0.25em] uppercase"
                  style={{ color: "var(--org-primary)" }}
                >
                  {p.eyebrow}
                </div>
                <h2 className="mt-3 text-2xl uppercase sm:text-3xl" style={{ fontFamily: "var(--font-display)" }}>
                  {p.title}
                </h2>
                <p className="mt-3 text-[var(--text-secondary)]">{p.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-3xl uppercase sm:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
                The lineage.
              </h2>
              <div className="mt-6 space-y-4 text-sm text-[var(--text-secondary)]">
                <p>
                  GHXSTSHIP Industries is the parent — the experiential production studio. LYTEHAUS Technologies is
                  the software arm we built because we couldn&apos;t find a tool we trusted to run our own work.
                  ATLVS, GVTEWAY, and COMPVSS are LYTEHAUS&apos;s three operating brands.
                </p>
                <p>
                  ATLVS is the producer&apos;s console. GVTEWAY is the stakeholder portal. COMPVSS is the
                  offline-first field app the crew lives in once load-in starts. The same XPMS schema powers all
                  three. The same schema publishes this catalog. Same vendor records. Same compliance framework.
                  Same deliverable definitions on every surface.
                </p>
                <p>
                  When we tell a client we&apos;re running their engagement on the same system that publishes the
                  catalog they read before they hired us, we mean it literally. Pull the file; the file is the file.
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl uppercase sm:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
                The crew.
              </h2>
              <div className="mt-6 space-y-4 text-sm text-[var(--text-secondary)]">
                <p>
                  Producers. Project managers. Account managers. A1s, L1s, V1s. Riggers. Engineers — PE-stamped
                  where it matters. Hospitality leads. Federation liaisons who&apos;ve worked Olympic, F1, FIFA,
                  and NCAA accreditations. Fixers. Conservators. Art handlers with museum-grade documentation
                  habits. Stage managers calling the show. Broadcast directors. Brand ambassadors.
                </p>
                <p>
                  In the four anchor ports — full-time on payroll. In satellite markets and the international tier
                  — deep bench under master agreement, vetted, credentialed, and on call. Every named role is a row
                  in the catalog. Every row is a real human with an availability calendar, a credentialing posture,
                  and a published rate.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6">
          <div className="surface-raised p-10">
            <h2 className="text-3xl uppercase sm:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
              Hail the studio.
            </h2>
            <p className="mt-3 max-w-xl text-[var(--text-secondary)]">
              A paragraph in plain English is fine. A six-hundred-line RFP is fine. A voice memo recorded at 2am
              that becomes a festival is, frankly, our favorite. We answer all three. Inside one business day.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Button href={paths.contact()} size="lg">
                Hail The Studio
              </Button>
              <Button href={paths.pricing()} size="lg" variant="secondary">
                Read The Articles
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
