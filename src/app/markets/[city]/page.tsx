import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { MARKETS, MARKET_BY_SLUG, SOLUTIONS, paths } from "@/lib/ghxstship";
import type { CitySlug } from "@/lib/ghxstship/types";
import { GhxstshipJsonLd, breadcrumbSchema, serviceSchema } from "@/components/ghxstship/JsonLd";
import { ActivationGrid, type ActivationSite } from "@/components/ghxstship/ActivationGrid";

export const dynamic = "force-static";

export function generateStaticParams() {
  return MARKETS.map((m) => ({ city: m.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city } = await params;
  const m = MARKET_BY_SLUG[city as CitySlug];
  if (!m) return {};
  return {
    title: `${m.name} Production Company — Festivals, Events, Activations | GHXSTSHIP`,
    description: `${m.blurb} ${m.type === "anchor" ? "Full local team and fabrication capacity." : "Serviced from our nearest anchor market."}`,
    alternates: { canonical: `https://ghxstship.pro/markets/${m.slug}` },
  };
}

export default async function MarketDetail({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const m = MARKET_BY_SLUG[city as CitySlug];
  if (!m) notFound();

  const relevantSolutions = SOLUTIONS.filter((s) => s.geoStrongholds.toLowerCase().includes(m.name.toLowerCase()));

  return (
    <>
      <GhxstshipJsonLd
        data={[
          breadcrumbSchema([
            { label: "GHXSTSHIP", href: "/" },
            { label: "Markets", href: "/markets" },
            { label: m.name, href: paths.marketDetail(m.slug) },
          ]),
          serviceSchema({
            name: `${m.name} Experiential Production`,
            description: m.blurb,
            serviceType: "Experiential Production",
            areaServed: [m.name],
            offers: relevantSolutions.map((s) => ({ name: s.name })),
          }),
        ]}
      />
      <div className="space-y-16 pb-24">
        <section className="mx-auto max-w-6xl px-6 pt-12">
          <nav className="mb-6 text-xs text-[var(--text-muted)]">
            <Link href={paths.marketsRoot()} className="hover:text-[var(--text-primary)]">
              Markets
            </Link>
            <span className="mx-2">/</span>
            <span className="text-[var(--text-primary)]">{m.name}</span>
          </nav>
          <div className="font-mono text-[10px] tracking-[0.2em] text-[var(--text-muted)] uppercase">
            {m.type === "anchor" ? "Anchor Market" : "Satellite Market"}
            {m.servicedFrom && (
              <>
                {" "}
                · serviced from{" "}
                <Link href={paths.marketDetail(m.servicedFrom)} className="underline hover:text-[var(--text-primary)]">
                  {MARKET_BY_SLUG[m.servicedFrom].name}
                </Link>
              </>
            )}
          </div>
          <h1 className="mt-3 text-5xl uppercase sm:text-7xl" style={{ fontFamily: "var(--font-display)" }}>
            {m.name}
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-[var(--text-secondary)]">{m.blurb}</p>
        </section>

        <section className="mx-auto max-w-6xl px-6">
          <div className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: "var(--org-primary)" }}>
            Where Every Element Lands
          </div>
          <h2 className="mt-3 text-3xl uppercase sm:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
            {m.name} venues + activation sites.
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-[var(--text-secondary)]">
            Every named venue here is a real address with a real permit posture. We know the load-in restrictions,
            the union jurisdictions, the noise-variance windows, and the fixers who unlock the doors.
          </p>
          <div className="mt-8">
            <ActivationGrid sites={anchorsToSites(m.anchors)} />
          </div>
        </section>

        {relevantSolutions.length > 0 && (
          <section className="mx-auto max-w-6xl px-6">
            <div className="text-xs font-semibold tracking-[0.2em] text-[var(--text-muted)] uppercase">
              Industries where {m.name} is a stronghold
            </div>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {relevantSolutions.map((s) => (
                <li key={s.slug}>
                  <Link href={paths.solutionDetail(s.slug)} className="surface hover-lift block p-4 text-sm">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="mx-auto max-w-6xl px-6">
          <div className="surface-raised p-10">
            <h2 className="text-3xl uppercase sm:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
              Run something in {m.name}.
            </h2>
            <p className="mt-3 max-w-xl text-[var(--text-secondary)]">
              We know the venues, the unions, the permit windows, and the fixers. Brief us with your dates and the local
              posture.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Button href={paths.contact()} size="lg">
                Start a Project
              </Button>
              <Button href={paths.solutionsRoot()} size="lg" variant="secondary">
                Browse Industries
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

/**
 * Convert the simple anchor list on the Market record into ActivationSite
 * cards. Tag is a numeric prefix, name is the venue, and the body line is
 * synthesized from a small heuristic on the venue type.
 */
function anchorsToSites(anchors: string[]): ActivationSite[] {
  return anchors.map((anchor, i) => ({
    tag: String(i + 1).padStart(2, "0"),
    name: anchor,
    body: synthesizeCapability(anchor),
  }));
}

function synthesizeCapability(anchor: string): string {
  const lower = anchor.toLowerCase();
  if (lower.includes("stadium")) {
    return "Stadium-scale activation footprint — full-day load-in windows, broadcast-grade rigging points, suite-level hospitality, paddock-club adjacencies, federation-cleared brand rights.";
  }
  if (lower.includes("arena") || lower.includes("center")) {
    return "Arena / convention-scale build envelope — IATSE-jurisdiction labor, multi-day ingress, full F&B kitchen access, broadcast tie-ins, full ADA validation pathway.";
  }
  if (lower.includes("theatre") || lower.includes("opera") || lower.includes("hall") || lower.includes("ryman")) {
    return "Theatrical-spec venue — fly-system rigging, calling-the-show discipline, theatre-grade finish work, traveler curtains, house-lighting interface.";
  }
  if (lower.includes("museum") || lower.includes("art institute") || lower.includes("lacma") || lower.includes("hammer") || lower.includes("getty") || lower.includes("moma") || lower.includes("met")) {
    return "Cultural-institution build — registrar coordination, art-handler staffing, conservation-grade install, donor-cultivation programming, gala-tier hospitality.";
  }
  if (lower.includes("port") || lower.includes("cruise") || lower.includes("marine")) {
    return "Maritime activation — USCG / IMO compliance, vessel-spec power and weight constraints, port-day shore-side programming, dry-dock build windows.";
  }
  if (lower.includes("park") || lower.includes("disney") || lower.includes("universal") || lower.includes("seaworld")) {
    return "Theme-park integration — ride show control, animatronic interfaces, themed pyrotechnics, ASTM F24 ride-safety compliance, park-day operations.";
  }
  if (lower.includes("circuit") || lower.includes("speedway") || lower.includes("paddock") || lower.includes("f1")) {
    return "Motorsport activation — paddock-club hospitality, race-week clean-zone enforcement, sanctioning-body coordination, broadcast tie-ins, grid-walk access.";
  }
  if (lower.includes("festival") || lower.includes("zilker") || lower.includes("ultra") || lower.includes("edc") || lower.includes("acl") || lower.includes("sxsw")) {
    return "Festival site master plan — multi-stage circulation, vendor village, RFID credentialing, sustainability-reported, weather-contingency-gated.";
  }
  if (lower.includes("sphere") || lower.includes("area15") || lower.includes("immersive")) {
    return "Immersive-environment integration — projection mapping, AR / VR layers, narrative scenic, sensor-driven content triggers, walkthrough programming.";
  }
  if (lower.includes("club") || lower.includes("hakkasan") || lower.includes("marquee") || lower.includes("omnia") || lower.includes("liv") || lower.includes("nightlife")) {
    return "Nightlife activation — bottle service program, resident-DJ booking, table-side programming, late-night liquor compliance, brand-takeover overlays.";
  }
  if (lower.includes("aspen") || lower.includes("vail") || lower.includes("uhnw") || lower.includes("hampton")) {
    return "Ultra-premium private — discretion as a core requirement, NDA framework, household-staff coordination, bespoke programming.";
  }
  return "Capability-rich venue — site survey on file, vendor relationships in place, permit posture mapped. Brief us with your dates and we'll land the engagement.";
}
