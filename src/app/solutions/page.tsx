import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SOLUTIONS, paths, CATALOG_STATS } from "@/lib/ghxstship";
import { GhxstshipJsonLd, breadcrumbSchema, serviceSchema } from "@/components/ghxstship/JsonLd";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Industries — Festival, Theme Park, Cruise, Olympic Hospitality, Theatre | GHXSTSHIP",
  description:
    "Nineteen industry verticals served — concerts and festivals, theme parks, cruise lines, Olympic hospitality and fan zones, immersive experiences, brand activations, premium dining, weddings, theatrical performances, museum galas, and more.",
  keywords: [
    "festival production company",
    "theme park production company",
    "cruise ship production",
    "Olympic hospitality production",
    "immersive experience company",
    "brand activation agency",
    "wedding production",
    "theatre production company",
    "museum gala production",
  ],
  alternates: { canonical: "https://ghxstship.pro/solutions" },
};

export default function SolutionsHub() {
  return (
    <>
      <GhxstshipJsonLd
        data={[
          breadcrumbSchema([
            { label: "GHXSTSHIP", href: "/" },
            { label: "Industries", href: "/solutions" },
          ]),
          serviceSchema({
            name: "Experiential Production by Industry",
            description:
              "Nineteen industry verticals from festivals to fan zones, theme parks to maritime, art galleries to F1 paddock clubs.",
            serviceType: "Experiential Production",
            offers: SOLUTIONS.map((s) => ({ name: s.name })),
          }),
        ]}
      />

      <div className="space-y-20 pb-24">
        <section className="mx-auto max-w-6xl px-6 pt-16">
          <div className="text-xs font-semibold tracking-[0.25em] uppercase" style={{ color: "var(--org-primary)" }}>
            Industries
          </div>
          <h1 className="mt-4 text-5xl uppercase sm:text-7xl" style={{ fontFamily: "var(--font-display)" }}>
            Festivals. Fan Zones.
            <br />
            Theme Parks. Theatres.
          </h1>
          <div className="mt-4 font-mono text-xs tracking-[0.2em] uppercase text-[var(--text-muted)]">
            {CATALOG_STATS.solutionCount} industries · one studio · one playbook
          </div>
          <p className="mt-6 max-w-2xl text-lg text-[var(--text-secondary)]">
            A theme park ride launch and a museum gala both touch scenic fabrication, but the compliance posture,
            the audience, the union jurisdiction, and the run-of-show share almost nothing. We don&apos;t pretend
            otherwise. Each industry page below lists every service anchored in that vertical — plus the phase
            emphasis, the depth of detail, the experience mediums, and where the work tends to land geographically.
            Pick yours and the producer behind it answers email.
          </p>
        </section>

        <section className="mx-auto max-w-6xl px-6">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SOLUTIONS.map((s) => (
              <Link
                key={s.slug}
                href={paths.solutionDetail(s.slug)}
                className="surface hover-lift group flex h-full flex-col p-6"
              >
                <div className="text-xl uppercase" style={{ fontFamily: "var(--font-display)" }}>
                  {s.name}
                </div>
                <p className="mt-3 line-clamp-3 text-sm text-[var(--text-secondary)]">{s.definition}</p>
                <div className="mt-4 flex items-center gap-2 text-[10px] font-semibold tracking-[0.2em] uppercase">
                  <span className="text-[var(--text-muted)]">{s.anchoredServices.length} anchored services</span>
                  <ArrowRight className="ml-auto h-3 w-3 text-[var(--text-muted)] group-hover:text-[var(--org-primary)]" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
