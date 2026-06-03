import type { Metadata } from "next";
import Link from "next/link";
import { LOCATIONS, ORG } from "@/lib/ghxstship";
import { Breadcrumbs } from "@/components/ghxstship/Breadcrumbs";
import { Schema, breadcrumbSchema, localBusinessSchema } from "@/components/ghxstship/Schemas";

export const dynamic = "force-static";

const url = `${ORG.url}locations`;

export const metadata: Metadata = {
  title: "Locations — Miami · New York · Chicago · Los Angeles — GHXSTSHIP",
  description:
    "GHXSTSHIP is an experiential production company with offices in Miami (HQ), New York, Chicago, and Los Angeles — producing festivals, brand activations, and immersive experiences nationwide.",
  alternates: { canonical: url },
};

export default function LocationsIndex() {
  return (
    <>
      <Schema
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "GHXSTSHIP",
            url: ORG.url,
            department: LOCATIONS.map((l) =>
              localBusinessSchema({
                name: `GHXSTSHIP ${l.city}${l.isHQ ? " (Headquarters)" : ""}`,
                url: `${ORG.url}locations/${l.slug}`,
                locality: l.city,
                region: l.region,
                country: l.country,
                areaServed: l.areaServed,
                isHQ: l.isHQ,
                email: l.isHQ ? ORG.email : undefined,
              })
            ),
          },
          breadcrumbSchema([
            { name: "Home", url: ORG.url },
            { name: "Locations", url },
          ]),
        ]}
      />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Locations" }]} />
      <main>
        <section className="subhero">
          <div className="wrap">
            <p className="eyebrow">Home Ports · Coast to Coast</p>
            <h1>
              Four Cities.
              <br />
              <span className="pop">One Crew.</span>
            </h1>
            <p className="lede">
              GHXSTSHIP produces experiential events nationwide from four home ports — headquartered in Miami, with crews in New York, Chicago, and Los Angeles. Local presence, national reach, one accountable standard.
            </p>
          </div>
        </section>
        <section>
          <div className="wrap">
            <div className="loc-grid">
              {LOCATIONS.map((l) => (
                <Link key={l.slug} href={`/locations/${l.slug}`} className="loc">
                  <span className="tag">{l.tag}</span>
                  <h2>{l.city}</h2>
                  <p>{l.programmingNote}</p>
                  <p className="area">Serving {l.areaServed}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
