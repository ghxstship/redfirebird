import type { Metadata } from "next";
import Link from "next/link";
import { ANCHOR_MARKETS, SATELLITE_MARKETS, paths } from "@/lib/ghxstship";
import { GhxstshipJsonLd, breadcrumbSchema } from "@/components/ghxstship/JsonLd";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Markets — Miami, New York, Chicago, Los Angeles + 8 Satellites | GHXSTSHIP",
  description:
    "Anchor markets in Miami, New York City, Chicago, and Los Angeles with full local teams and dedicated fabrication. Eight satellite markets serviced from anchors: Orlando, Nashville, Austin, Atlanta, Minneapolis, Denver, Las Vegas, Seattle.",
  keywords: [
    "Miami event production company",
    "New York event production",
    "Chicago event production",
    "Los Angeles event production",
    "Las Vegas event production",
    "Orlando theme park production",
    "Atlanta event production",
    "Austin event production",
    "Nashville event production",
    "Denver event production",
    "Minneapolis event production",
    "Seattle event production",
  ],
  alternates: { canonical: "https://ghxstship.pro/markets" },
};

export default function MarketsHub() {
  return (
    <>
      <GhxstshipJsonLd
        data={breadcrumbSchema([
          { label: "GHXSTSHIP", href: "/" },
          { label: "Markets", href: "/markets" },
        ])}
      />
      <div className="space-y-16 pb-24">
        <section className="mx-auto max-w-6xl px-6 pt-16">
          <div className="text-xs font-semibold tracking-[0.25em] uppercase" style={{ color: "var(--org-primary)" }}>
            Where The Ghost Ship Makes Port
          </div>
          <h1 className="mt-4 text-5xl uppercase sm:text-7xl" style={{ fontFamily: "var(--font-display)" }}>
            Four anchors.
            <br />
            Eight satellites.
            <br />
            One flag.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-[var(--text-secondary)]">
            Anchor ports — Miami, New York, Chicago, Los Angeles — carry full local crews, dedicated fabrication,
            permanent vendor relationships, and the kind of permit-window memory that comes from running shows
            there for years. Satellites get sailed to under the same flag, vetted fixers in place, deep venue
            familiarity. National and international productions launch from the closest anchor. Wherever the work
            lives, we make port.
          </p>
        </section>

        <section className="mx-auto max-w-6xl px-6">
          <div className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: "var(--org-primary)" }}>
            Anchor Markets
          </div>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {ANCHOR_MARKETS.map((m) => (
              <Link
                key={m.slug}
                href={paths.marketDetail(m.slug)}
                className="surface hover-lift flex h-full flex-col p-6"
              >
                <div className="text-xl uppercase" style={{ fontFamily: "var(--font-display)" }}>
                  {m.name}
                </div>
                <p className="mt-3 line-clamp-4 text-sm text-[var(--text-secondary)]">{m.blurb}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6">
          <div className="text-xs font-semibold tracking-[0.2em] text-[var(--text-muted)] uppercase">
            Satellite Markets
          </div>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SATELLITE_MARKETS.map((m) => (
              <Link
                key={m.slug}
                href={paths.marketDetail(m.slug)}
                className="surface hover-lift flex h-full flex-col p-6"
              >
                <div className="text-lg uppercase" style={{ fontFamily: "var(--font-display)" }}>
                  {m.name}
                </div>
                <p className="mt-3 line-clamp-4 text-xs text-[var(--text-secondary)]">{m.blurb}</p>
                {m.servicedFrom && (
                  <div className="mt-3 text-[10px] tracking-wide text-[var(--text-muted)] uppercase">
                    Serviced from {m.servicedFrom.replace("-", " ")}
                  </div>
                )}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
