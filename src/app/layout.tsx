import type { Metadata, Viewport } from "next";
import { Anton, Bebas_Neue, DM_Sans, Share_Tech_Mono } from "next/font/google";
import { GhxstshipHeader } from "@/components/ghxstship/Header";
import { GhxstshipFooter } from "@/components/ghxstship/Footer";
import "./globals.css";
import "./theme/index.css";

const anton = Anton({ subsets: ["latin"], weight: "400", variable: "--font-anton", display: "swap" });
const bebasNeue = Bebas_Neue({ subsets: ["latin"], weight: "400", variable: "--font-bebas-neue", display: "swap" });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans", display: "swap" });
const shareTechMono = Share_Tech_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-share-tech-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://ghxstship.pro"),
  title: {
    default: "GHXSTSHIP — Experiential Production Company",
    template: "%s — GHXSTSHIP",
  },
  description:
    "GHXSTSHIP is an experiential production company building festivals, immersive experiences, theme parks, theatrical performances, brand activations, and premium hospitality across Miami, New York City, Chicago, and Los Angeles.",
  keywords: [
    "experiential production company",
    "festival production company",
    "theme park production",
    "live event production",
    "immersive experience design",
    "brand activation agency",
    "theatrical production company",
    "premium hospitality production",
  ],
  openGraph: {
    title: "GHXSTSHIP — Experiential Production Company",
    description:
      "Festivals, theme park attractions, theatrical productions, brand activations, and premium hospitality. 114 services, 19 industries, 12 markets.",
    siteName: "GHXSTSHIP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GHXSTSHIP — Experiential Production Company",
    description: "Festivals. Theme parks. Theatre. Built once, run anywhere.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f2ec" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
};

/**
 * Root layout. The marketing surface is theme-locked to bermuda-triangle in
 * always-light mode — paper #f5f2ec, ink #0a0a0a, Anton display, brutal
 * shadows — with the GHXSTSHIP green accent applied via data-platform.
 */
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-theme="bermuda-triangle"
      data-mode="light"
      className={`h-full ${anton.variable} ${bebasNeue.variable} ${dmSans.variable} ${shareTechMono.variable}`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col antialiased">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <div
          data-theme="bermuda-triangle"
          data-platform="ghxstship"
          data-mode="light"
          className="flex min-h-screen flex-col"
          style={{ background: "var(--bg)", color: "var(--text)", fontFamily: "var(--font-body)" }}
        >
          <GhxstshipHeader />
          <main id="main" className="flex-1">
            {children}
          </main>
          <GhxstshipFooter />
        </div>
      </body>
    </html>
  );
}
