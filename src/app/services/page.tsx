import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { CLASSES, SERVICES, servicesByClass, paths, CATALOG_STATS } from "@/lib/ghxstship";
import { GhxstshipJsonLd, breadcrumbSchema, serviceSchema } from "@/components/ghxstship/JsonLd";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Services Catalog — Production, Build, Hospitality, Technology | GHXSTSHIP",
  description:
    "The full GHXSTSHIP services catalog — 114 production services across 10 disciplines: Executive, Creative, Talent, Marketing, Build, Production, Operations, Experience, Hospitality, Technology.",
  keywords: [
    "production services catalog",
    "event production services",
    "festival production services",
    "scenic fabrication services",
    "live event technical services",
    "production hospitality services",
  ],
  alternates: { canonical: "https://ghxstship.pro/services" },
};

export default function ServicesHub() {
  return (
    <>
      <GhxstshipJsonLd
        data={[
          breadcrumbSchema([
            { label: "GHXSTSHIP", href: "/" },
            { label: "Services", href: "/services" },
          ]),
          serviceSchema({
            name: "GHXSTSHIP Services Catalog",
            description:
              "Full production services catalog covering every discipline from creative direction through wrap reporting.",
            serviceType: "Experiential Production Services",
            offers: SERVICES.slice(0, 60).map((s) => ({
              name: s.name,
              identifier: `${s.primaryClass}-${String(s.number).padStart(3, "0")}`,
            })),
          }),
        ]}
      />

      <div className="space-y-20 pb-24">
        <section className="mx-auto max-w-6xl px-6 pt-16">
          <div className="text-xs font-semibold tracking-[0.25em] uppercase" style={{ color: "var(--org-primary)" }}>
            Services Catalog
          </div>
          <h1 className="mt-4 text-5xl uppercase sm:text-7xl" style={{ fontFamily: "var(--font-display)" }}>
            Drawn. Built.
            <br />
            Printed. Installed.
          </h1>
          <div className="mt-4 font-mono text-xs tracking-[0.2em] uppercase text-[var(--text-muted)]">
            {CATALOG_STATS.serviceCount} services · {CATALOG_STATS.classCount} disciplines · real producers behind
            every line
          </div>
          <p className="mt-6 max-w-2xl text-lg text-[var(--text-secondary)]">
            Every line below is a real, scoped, priceable unit of work — not a buzzword cluster from a deck. The
            full catalog is the XPMS taxonomy, indexed by class code and addressable down to the L6 atom. Browse by
            discipline, or skip ahead to your industry. Every detail page tells you what the service is, when in
            the project you need it, what you receive when it lands, and where it operates. No marketing layer.
          </p>
        </section>

        <section className="mx-auto max-w-6xl px-6">
          <div className="space-y-8">
            {CLASSES.map((c) => {
              const items = servicesByClass(c.code);
              return (
                <div key={c.code} className="surface overflow-hidden">
                  <div className="flex flex-wrap items-end justify-between gap-4 bg-[var(--bg-secondary)] p-6">
                    <div>
                      <div className="font-mono text-[10px] tracking-[0.18em] text-[var(--text-muted)]">
                        Class {c.code}
                      </div>
                      <h2 className="mt-1 text-3xl uppercase sm:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
                        {c.shortName}
                      </h2>
                      <p className="mt-2 max-w-2xl text-sm text-[var(--text-secondary)]">{c.definition}</p>
                    </div>
                    <Link href={paths.classDetail(c.slug)} className="btn btn-secondary btn-sm">
                      {items.length} services <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                  <ul className="grid gap-px bg-[var(--border-color)] sm:grid-cols-2 lg:grid-cols-3">
                    {items.map((s) => (
                      <li key={s.number}>
                        <Link
                          href={paths.serviceDetail(c.slug, s.slug)}
                          className="nav-item flex h-full items-start gap-3 bg-[var(--background)] p-4"
                        >
                          <span className="font-mono text-[10px] tracking-wider text-[var(--text-muted)]">
                            {String(s.number).padStart(3, "0")}
                          </span>
                          <span className="text-sm text-[var(--text-primary)]">{s.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6">
          <div className="surface-raised p-10">
            <div className="grid gap-8 md:grid-cols-2 md:items-end">
              <div>
                <h2 className="text-3xl uppercase sm:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
                  Can&apos;t find the right word?
                </h2>
                <p className="mt-3 max-w-xl text-[var(--text-secondary)]">
                  Brief us in plain English — or in the deepest operator vernacular you&apos;ve got. We resolve it
                  against the XPMS catalog and come back inside one business day with the atom set, the engagement
                  model, and the producer who&apos;ll own it. The catalog is comprehensive but it isn&apos;t a
                  prison; if your work doesn&apos;t fit, we&apos;ll add the row.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <Button href={paths.contact()} size="lg">
                  Hail The Studio
                </Button>
                <Button href={paths.solutionsRoot()} size="lg" variant="secondary">
                  Browse By Industry
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
