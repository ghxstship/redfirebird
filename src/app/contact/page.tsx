import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SOLUTIONS, paths } from "@/lib/ghxstship";
import { GhxstshipJsonLd, breadcrumbSchema } from "@/components/ghxstship/JsonLd";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Hail The Studio — Brief GHXSTSHIP",
  description:
    "Send a brief. A paragraph in plain English. A 600-line RFP. A voice memo from a 2am idea that won't quit. We answer all three within one business day with engagement model, producer assignment, and price band.",
  alternates: { canonical: "https://ghxstship.pro/contact" },
};

const ROUTES = [
  {
    label: "Hail The Studio",
    body: "New engagement, RFP, scoping conversation. We answer with engagement model, producer assignment, price band — inside one business day. Or we owe you a coffee.",
    href: "mailto:studio@ghxstship.pro",
    line: "studio@ghxstship.pro",
  },
  {
    label: "Federation & Mega-Event",
    body: "Olympic, FIFA, F1, Super Bowl, World Cup, NCAA, OCOG-tier. Accreditation, host-city liaison, clean-zone enforcement, brand-rights compliance. Direct line to the federation desk.",
    href: "mailto:federation@ghxstship.pro",
    line: "federation@ghxstship.pro",
  },
  {
    label: "Press & Partnerships",
    body: "Media. Sponsorship inbound. Brand collaborations. Podcast asks. Speaking engagements. We answer everything; we say yes to less.",
    href: "mailto:press@ghxstship.pro",
    line: "press@ghxstship.pro",
  },
  {
    label: "Crew Manifest",
    body: "Producers, technicians, riggers, hospitality leads, fixers — looking to sail. Send the portfolio, the city, the gear list. We onboard quarterly, tides willing.",
    href: "mailto:roster@ghxstship.pro",
    line: "roster@ghxstship.pro",
  },
];

export default function ContactPage() {
  return (
    <>
      <GhxstshipJsonLd
        data={breadcrumbSchema([
          { label: "GHXSTSHIP", href: "/" },
          { label: "Contact", href: "/contact" },
        ])}
      />
      <div className="space-y-20 pb-24">
        <section className="mx-auto max-w-6xl px-6 pt-16">
          <div className="text-xs font-semibold tracking-[0.25em] uppercase" style={{ color: "var(--org-primary)" }}>
            Hail The Studio
          </div>
          <h1 className="mt-4 text-5xl uppercase sm:text-7xl" style={{ fontFamily: "var(--font-display)" }}>
            Send the brief.
            <br />
            We answer
            <br />
            in a day.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-[var(--text-secondary)]">
            Tell us the brief, the date band, the venue or city, and the rough scope. One business day later
            you&apos;ll have the engagement model, the producer assigned, and a price band — or a short list of
            what we&apos;d need to scope it cleanly. We answer plain-English emails, six-hundred-line RFPs, and
            2am voice memos with equal care. (We have favorites. We&apos;ll never tell.)
          </p>
        </section>

        <section className="mx-auto max-w-6xl px-6">
          <div className="grid gap-5 sm:grid-cols-2">
            {ROUTES.map((r) => (
              <a key={r.href} href={r.href} className="surface hover-lift group flex h-full flex-col p-6">
                <div className="text-xl uppercase" style={{ fontFamily: "var(--font-display)" }}>
                  {r.label}
                </div>
                <p className="mt-3 text-sm text-[var(--text-secondary)]">{r.body}</p>
                <div
                  className="mt-4 inline-flex items-center gap-2 font-mono text-sm tracking-wide"
                  style={{ color: "var(--org-primary)" }}
                >
                  {r.line}
                  <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6">
          <div className="surface-raised p-8">
            <h2 className="text-2xl uppercase sm:text-3xl" style={{ fontFamily: "var(--font-display)" }}>
              The six things to put in the email.
            </h2>
            <ul className="mt-6 grid gap-3 text-sm text-[var(--text-secondary)] sm:grid-cols-2">
              <li className="flex items-start gap-3">
                <span
                  className="mt-0.5 inline-block h-1.5 w-1.5 shrink-0"
                  style={{ background: "var(--org-accent)" }}
                />
                <span>
                  <strong className="text-[var(--text-primary)]">Brief.</strong> One paragraph is enough. We&apos;ll ask
                  the right follow-ups.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span
                  className="mt-0.5 inline-block h-1.5 w-1.5 shrink-0"
                  style={{ background: "var(--org-accent)" }}
                />
                <span>
                  <strong className="text-[var(--text-primary)]">Dates or window.</strong> Hard date or rolling window —
                  both are fine.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span
                  className="mt-0.5 inline-block h-1.5 w-1.5 shrink-0"
                  style={{ background: "var(--org-accent)" }}
                />
                <span>
                  <strong className="text-[var(--text-primary)]">Venue or geography.</strong> Specific address if
                  locked, market name if not.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span
                  className="mt-0.5 inline-block h-1.5 w-1.5 shrink-0"
                  style={{ background: "var(--org-accent)" }}
                />
                <span>
                  <strong className="text-[var(--text-primary)]">Audience size.</strong> Total guest count or daily
                  attendance.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span
                  className="mt-0.5 inline-block h-1.5 w-1.5 shrink-0"
                  style={{ background: "var(--org-accent)" }}
                />
                <span>
                  <strong className="text-[var(--text-primary)]">Budget envelope.</strong> Even a band — it sharpens the
                  engagement model fast.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span
                  className="mt-0.5 inline-block h-1.5 w-1.5 shrink-0"
                  style={{ background: "var(--org-accent)" }}
                />
                <span>
                  <strong className="text-[var(--text-primary)]">Constraints.</strong> Federation, union, host-city,
                  clean zone, brand-rights, NDA — flag them up front.
                </span>
              </li>
            </ul>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6">
          <div className="text-xs font-semibold tracking-[0.2em] text-[var(--text-muted)] uppercase">
            Or start by browsing
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {SOLUTIONS.slice(0, 9).map((s) => (
              <Link key={s.slug} href={paths.solutionDetail(s.slug)} className="surface hover-lift block p-4 text-sm">
                {s.name}
              </Link>
            ))}
          </div>
          <div className="mt-6">
            <Link
              href={paths.solutionsRoot()}
              className="text-sm font-semibold tracking-wide uppercase hover:text-[var(--org-primary)]"
            >
              All 19 industries →
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
