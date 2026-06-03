import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ORG,
  BOOKING_STEPS,
  TRUSTED,
  MARQUEE,
  DESTINATION_CARDS,
  CHARTERS_HOME,
  ITINERARY,
  DIFFERENCE,
  INSTRUMENTS_HOME,
  CREW_HOME,
  VOYAGES_HOME,
  HISTORY,
  FAQS,
  LOGS_HOME,
  BEARINGS,
  PRESS,
} from "@/lib/ghxstship";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Experiential Production, Operations & Technology — GHXSTSHIP",
  description:
    "GHXSTSHIP is a Miami experiential production & technology company (NY, Chicago, LA) for brands, producers, and creative & production directors. We produce festivals, concerts & tours, brand activations, immersive experiences, and sporting events via an 8-phase production lifecycle.",
  keywords: [
    "experiential production",
    "festival production",
    "concert touring production",
    "brand activation agency",
    "immersive experience design",
    "sporting event production",
    "broadcast and film production",
    "event production management",
    "crew management software",
    "event ticketing platform",
    "Miami",
  ],
  alternates: { canonical: ORG.url },
  openGraph: {
    title: "GHXSTSHIP — Experiential Production, Operations & Technology",
    description:
      "Venture Beyond. Book your voyage: festivals, tours, activations, immersive & sporting events through an 8-phase production lifecycle — and the tech that powers it (ATLVS · COMPVSS · GVTEWAY).",
    url: ORG.url,
    siteName: "GHXSTSHIP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GHXSTSHIP — Experiential Production, Operations & Technology",
    description: "Book your voyage. Festivals · Tours · Activations · Immersive · Sporting Events.",
  },
};

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero" aria-labelledby="hero-h">
        <div className="wrap">
          <p className="boardingstrip">
            <span className="now">Now Departing</span>
            <span className="ticker">
              <span>
                Miami · New York · Chicago · Los Angeles · On time · Gate <span id="gate">G26</span> · Boarding all rows
              </span>
            </span>
          </p>
          <div className="hero-grid">
            <div>
              <p className="eyebrow no-dot" style={{ marginBottom: 18 }}>
                Production · Operations · Technology
              </p>
              <h1 id="hero-h">
                <span className="pop">B</span>eyond
                <br />
                <span className="pop">T</span>he
                <br />
                <span className="pop">S</span>cene
              </h1>
              <p className="sub">
                GHXSTSHIP is a full-service experiential production, operations, and technology company headquartered in Miami. We produce festivals, concerts & tours, brand activations, immersive experiences, and beyond — and build the technology that powers them. Pick your destination; we'll chart the course.
              </p>
              <div className="hero-cta">
                <Link className="gx-btn" href="/contact">
                  Book Your Voyage
                </Link>
                <a className="gx-btn gx-btn--ghost" href="#destinations">
                  Explore Destinations ↗
                </a>
              </div>
            </div>
            <div className="hero-art">
              <div className="hero-skull">
                <Image
                  src="/assets/skull-bone.svg"
                  alt="GHXSTSHIP pixel ghost-ship skull mark"
                  width={210}
                  height={210}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="trustbar">
        <div className="wrap">
          <p className="trust-lbl">Trusted by the brands behind the moments</p>
          <div className="trust-logos">
            {TRUSTED.map((b) => (
              <Link key={b.label} href={b.href}>
                <span>{b.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* MARQUEE */}
      <div className="marquee" aria-hidden="true">
        <div className="track">
          {[...MARQUEE, ...MARQUEE].map((m, i) => (
            <span key={`${m}-${i}`}>{m}</span>
          ))}
        </div>
      </div>

      {/* BOOKING STEPPER */}
      <nav className="stepper" aria-label="How booking works">
        <div className="wrap row">
          {BOOKING_STEPS.map((s) => (
            <a key={s.n} className={`bstep${s.cta ? " is-cta" : ""}`} href={s.href}>
              <span className="bn">{s.n}</span>
              <span>
                <span className="bl">{s.label}</span>
                <span className="bt">{s.title}</span>
              </span>
            </a>
          ))}
        </div>
      </nav>

      {/* STEP 01 · DESTINATIONS */}
      <section className="pad" id="destinations" aria-labelledby="dst-h">
        <div className="wrap">
          <p className="eyebrow">Step 01 · Choose Your Destination</p>
          <h2 className="sec" id="dst-h">
            Where To?
          </h2>
          <p className="answer">
            Start with where you're headed. Each destination is a kind of experience we produce — pick yours, and we'll chart the course. Your destination is the unforgettable; getting you there is the voyage.
          </p>
          <div className="dest-grid">
            {DESTINATION_CARDS.map((d) => (
              <Link key={d.code} className={`dcard${d.final ? " is-final" : ""}`} href={d.href}>
                <span className="code">{d.code}</span>
                <i className={`ph-bold ${d.icon} ic`} aria-hidden="true" />
                <h3>{d.name}</h3>
                <p>{d.blurb}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* STEP 02 · CHARTERS */}
      <section className="pad alt" id="engagements" aria-labelledby="eng-h">
        <div className="wrap">
          <p className="eyebrow">Step 02 · Choose Your Charter</p>
          <h2 className="sec" id="eng-h">
            Charter Your Way.
          </h2>
          <p className="answer">
            Sail with us as far as you like — charter the full voyage end to end, take a single vertical, or pick exactly the services you need.
          </p>
          <div className="vgrid">
            {CHARTERS_HOME.map((c, i) => (
              <Link className="vcard" href={c.href} key={c.title} style={{ textDecoration: "none", color: "inherit" }}>
                <span className="gateid" style={c.accent === "nebula" ? { color: "var(--nebula)" } : undefined}>
                  {i === 0 ? "● Local Service" : "◆ Express"}
                </span>
                <h3>{c.title}</h3>
                <span className="tag">{c.tag}</span>
                <p>{c.blurb}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* STEP 03 · ITINERARY */}
      <section className="pad" id="itinerary" aria-labelledby="fp-h">
        <div className="wrap">
          <p className="eyebrow">Step 03 · Chart Your Itinerary</p>
          <h2 className="sec" id="fp-h">
            Your Itinerary.
          </h2>
          <p className="answer">
            Every GHXSTSHIP voyage follows the same proven course — our eight-phase production lifecycle, from first consultation to final celebration. Here's every leg of the journey you'll take with us.
          </p>
          <div className="fp-wrap">
            <div className="smap">
              <div className="smap__line">
                {ITINERARY.map((p) => (
                  <Link
                    key={p.n}
                    href={`/itinerary/${p.slug}`}
                    className={`smap__stop${p.term ? " term" : ""}`}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <div className="smap__dot">{p.n}</div>
                    <div className="smap__name">{p.name}</div>
                    <div className="smap__sub">{p.sub}</div>
                  </Link>
                ))}
              </div>
            </div>
            <p className="itin-note">
              The GHXSTSHIP Line — every voyage runs all eight stops, Discovery to Strike. One crew, one charted course.
            </p>
          </div>
        </div>
      </section>

      {/* THE DIFFERENCE */}
      <section className="pad alt" id="difference" aria-labelledby="diff-h">
        <div className="wrap">
          <p className="eyebrow">Why GHXSTSHIP</p>
          <h2 className="sec" id="diff-h">
            The Difference.
          </h2>
          <p className="answer">
            Most experiential and brand-activation agencies stop at creative and hand you to a chain of vendors. GHXSTSHIP owns the entire voyage — and builds the technology that powers it.
          </p>
          <div className="vgrid">
            {DIFFERENCE.map((d) => (
              <article className="vcard" key={d.id}>
                <span className="gateid">{d.id}</span>
                <h3>{d.title}</h3>
                <span className="tag">{d.tag}</span>
                <p>{d.blurb}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* THE BRIDGE (ATLVS / COMPVSS / GVTEWAY) */}
      <section className="pad" id="instruments" aria-labelledby="inst-h">
        <div className="wrap">
          <p className="eyebrow">Aboard Every Ship</p>
          <h2 className="sec" id="inst-h">
            The Bridge.
          </h2>
          <p className="answer">
            The bridge is where every voyage is steered — our proprietary software, built in-house. Three instruments, one connected system that powers experiential production at scale.
          </p>
          <div className="vgrid">
            {INSTRUMENTS_HOME.map((i) => (
              <Link className="vcard" href={i.href} key={i.title} style={{ textDecoration: "none", color: "inherit" }}>
                <span className="gateid">{i.id}</span>
                <h3>{i.title}</h3>
                <span className="tag">{i.tag}</span>
                <p>{i.blurb}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* STEP 04 · CREW */}
      <section className="pad alt" id="crew" aria-labelledby="crew-h">
        <div className="wrap">
          <p className="eyebrow">Step 04 · Meet the Skeleton Crew</p>
          <h2 className="sec" id="crew-h">
            The Skeleton Crew.
          </h2>
          <p className="answer">
            Every voyage is manned by the Skeleton Crew — a senior team of producers, directors, and technicians who stay with you from consultation to celebration. Small by design, legendary by reputation.
          </p>
          <div className="crew-grid">
            {CREW_HOME.map((c) => (
              <article className="ccard" key={c.title}>
                <div className="av">
                  <Image src="/assets/skull-bone.svg" alt="" width={40} height={40} style={{ imageRendering: "pixelated" }} />
                </div>
                <div>
                  <div className="rank">{c.rank}</div>
                  <h3>{c.title}</h3>
                  <p>{c.blurb}</p>
                </div>
              </article>
            ))}
            <Link className="ccard join" href="/crew/join">
              <div className="av">
                <Image src="/assets/logo-ghostship-skull.svg" alt="" width={40} height={40} style={{ imageRendering: "pixelated" }} />
              </div>
              <div>
                <div className="rank">Now Boarding</div>
                <h3>Join the Crew</h3>
                <p>Training the next generation of experiential producers. Learn the ropes ↗</p>
              </div>
            </Link>
          </div>
          <p className="lede" style={{ marginTop: 28, textAlign: "center" }}>
            <Link className="gx-link" href="/crew">
              Meet the full Skeleton Crew →
            </Link>
          </p>
        </div>
      </section>

      {/* ARCHIVES (FIDS) */}
      <section className="pad" id="voyages" aria-labelledby="dep-h">
        <div className="wrap">
          <div className="dep-head">
            <div>
              <p className="eyebrow">The Archives · Case Studies</p>
              <h2 className="sec" id="dep-h">
                Past Voyages.
              </h2>
            </div>
            <p className="lede" style={{ maxWidth: 420 }}>
              Before you book, browse the archives — a selection of voyages we've charted. Every one a destination reached.
            </p>
          </div>
          <div className="gx-fids">
            <div className="gx-fids__head">
              <div className="ttl">
                <i className="ph-fill ph-monitor" aria-hidden="true" />
                Arrivals
              </div>
              <div className="clock" id="clk">
                22:47 EST
              </div>
            </div>
            <div className="gx-fids__row gx-fids__row--head">
              <span>Voyage</span>
              <span>Destination</span>
              <span>Year</span>
              <span>Status</span>
            </div>
            {VOYAGES_HOME.map((v) => (
              <Link
                className="gx-fids__row"
                key={v.code}
                href={v.href}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className="gx-flap" data-flap>
                  {v.code}
                </span>
                <div className="gx-fids__dest">
                  {v.name}
                  <small>{v.meta}</small>
                </div>
                <span className="gx-fids__meta">{v.year}</span>
                <span className={`gx-status gx-status--${v.status}`}>{v.statusLabel}</span>
              </Link>
            ))}
          </div>
          <p className="lede" style={{ marginTop: 24, textAlign: "right" }}>
            <Link className="gx-link" href="/voyages">
              Open the full Archives →
            </Link>
          </p>
        </div>
      </section>

      {/* COMPASS BEARINGS — testimonials */}
      <section className="pad alt" aria-labelledby="bearings-h">
        <div className="wrap">
          <p className="eyebrow">Compass Bearings · Voices Aboard</p>
          <h2 className="sec" id="bearings-h">
            What They Say.
          </h2>
          <p className="lede">Selected quotes from clients, partners, and crew across the voyages.</p>
          <div className="vgrid" style={{ marginTop: 30 }}>
            {BEARINGS.map((b, i) => (
              <article className="bearing" key={i}>
                <p className="q">"{b.quote}"</p>
                <p className="meta">
                  <b>{b.person}</b> · {b.role} · {b.org}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* HISTORY */}
      <section className="pad" aria-label="Company history">
        <div className="wrap">
          <div className="hist-inner">
            {HISTORY.map((s) => (
              <div className="stat" key={s.lbl}>
                <div className="big">{s.big}</div>
                <div className="lbl">{s.lbl}</div>
                <span className="cap-note">{s.caveat}</span>
              </div>
            ))}
          </div>
          <div className="press-strip" aria-label="Press coverage">
            {PRESS.map((p) => (
              <span key={p}>{p}</span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="pad alt faq" id="faq" aria-labelledby="faq-h">
        <div className="wrap">
          <p className="eyebrow">Answers</p>
          <h2 className="sec" id="faq-h">
            Frequently
            <br />
            Asked.
          </h2>
          <div className="faq-list">
            {FAQS.map((f, i) => (
              <details key={f.q} open={i === 0}>
                <summary>
                  {f.q}
                  <span className="ic">+</span>
                </summary>
                <p className="a">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CAPTAIN'S LOG */}
      <section className="pad faq" id="logs" aria-labelledby="log-h">
        <div className="wrap">
          <p className="eyebrow">Captain's Log · Dispatches</p>
          <h2 className="sec" id="log-h">
            From the Log.
          </h2>
          <p className="lede">Field notes, press, and crew calls from the voyage.</p>
          <div className="log-list">
            {LOGS_HOME.map((l) => (
              <Link className="log" href={`/logs/${l.slug}`} key={l.slug}>
                <span className="log__date">{l.date}</span>
                <span className="log__cat">{l.cat}</span>
                <span className="log__t">{l.title}</span>
                <span className="log__go">↗</span>
              </Link>
            ))}
          </div>
          <p className="lede" style={{ marginTop: 24, textAlign: "right" }}>
            <Link className="gx-link" href="/logs">
              All dispatches →
            </Link>
          </p>
        </div>
      </section>

      {/* STEP 05 · BOOK */}
      <section className="cta" id="book" aria-labelledby="cta-h">
        <div className="wrap">
          <p className="eyebrow" style={{ justifyContent: "center" }}>
            Step 05 · Launch
          </p>
          <h2 id="cta-h">
            Launch Your
            <br />
            Project.
          </h2>
          <p className="sub gx-body-l">
            Destination chosen, course charted, crew assembled. All that's left is to come aboard — consultation to celebration, one crew, zero compromises.
          </p>
          <div className="hero-cta" style={{ justifyContent: "center" }}>
            <Link className="gx-btn gx-btn--lg" href="/contact">
              Book Your Voyage
            </Link>
            <Link className="gx-btn gx-btn--ghost gx-btn--lg" href="/voyages">
              Browse the Archives
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
