import Link from "next/link";
import Image from "next/image";
import { ORG, FOOTER_NAV } from "@/lib/ghxstship";

export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <Link
              className="brand"
              href="/"
              style={{ marginBottom: 14 }}
              aria-label="GHXSTSHIP home"
            >
              <Image
                src="/assets/skull-bone.svg"
                alt="GHXSTSHIP ghost-ship logo"
                width={40}
                height={40}
                style={{ imageRendering: "pixelated" }}
              />
              <b>G H X S T S H I P</b>
            </Link>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: 22,
                textTransform: "uppercase",
                color: "var(--brass)",
                margin: 0,
              }}
            >
              {ORG.slogan}.
            </p>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 12,
                color: "var(--fg-on-dark-3)",
                letterSpacing: "0.08em",
                marginTop: 10,
              }}
            >
              Miami Headquarters
              <br />
              New York &nbsp;·&nbsp; Chicago &nbsp;·&nbsp; Los Angeles
            </p>
            <div className="foot-contact" style={{ marginTop: 14 }}>
              <a href={`mailto:${ORG.email}`}>
                <i className="ph-bold ph-envelope-simple" style={{ color: "var(--brass)" }} />
                {ORG.email}
              </a>
            </div>
            <div className="foot-social">
              <a href="https://instagram.com/ghxstship" aria-label="Instagram" rel="noopener noreferrer" target="_blank">
                <i className="ph-bold ph-instagram-logo" />
              </a>
              <a href="https://linkedin.com/company/ghxstship" aria-label="LinkedIn" rel="noopener noreferrer" target="_blank">
                <i className="ph-bold ph-linkedin-logo" />
              </a>
              <a href="https://youtube.com/@ghxstship" aria-label="YouTube" rel="noopener noreferrer" target="_blank">
                <i className="ph-bold ph-youtube-logo" />
              </a>
              <a href="https://tiktok.com/@ghxstship" aria-label="TikTok" rel="noopener noreferrer" target="_blank">
                <i className="ph-bold ph-tiktok-logo" />
              </a>
            </div>
          </div>
          <nav aria-label="Destinations">
            <h5>Destinations</h5>
            {FOOTER_NAV.destinations.map((l) => (
              <Link key={l.label} href={l.href}>
                {l.label}
              </Link>
            ))}
          </nav>
          <nav aria-label="Charters">
            <h5>Charters</h5>
            {FOOTER_NAV.charters.map((l) => (
              <Link key={l.label} href={l.href}>
                {l.label}
              </Link>
            ))}
          </nav>
          <nav aria-label="Company">
            <h5>Company</h5>
            {FOOTER_NAV.company.map((l) => (
              <Link key={l.label} href={l.href}>
                {l.label}
              </Link>
            ))}
          </nav>
          <nav aria-label="Get Started">
            <h5>Get Started</h5>
            {FOOTER_NAV.getStarted.map((l) => (
              <Link key={l.label} href={l.href}>
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="foot-bot">
          <span>© 2026 G H X S T S H I P INDUSTRIES LLC. ALL RIGHTS RESERVED.</span>
          <span className="foot-legal">
            {FOOTER_NAV.legal.map((l) => (
              <Link key={l.label} href={l.href}>
                {l.label}
              </Link>
            ))}
            <a className="foot-totop" href="#main">Back to top ↑</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
