import type { Metadata, Viewport } from "next";
import { Big_Shoulders, Space_Grotesk, Space_Mono, Silkscreen } from "next/font/google";
import { Header } from "@/components/ghxstship/Header";
import { Footer } from "@/components/ghxstship/Footer";
import { JsonLd } from "@/components/ghxstship/JsonLd";
import { ClientEnhancements } from "@/components/ghxstship/ClientEnhancements";
import { ORG } from "@/lib/ghxstship";
import "./globals.css";

const display = Big_Shoulders({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-display-loaded",
  display: "swap",
});
const body = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body-loaded",
  display: "swap",
});
const mono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono-loaded",
  display: "swap",
});
const pixel = Silkscreen({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-pixel-loaded",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(ORG.url),
  title: {
    default: "GHXSTSHIP — Experiential Production, Operations & Technology",
    template: "%s — GHXSTSHIP",
  },
  description:
    "GHXSTSHIP is a Miami experiential production & technology company (NY, Chicago, LA) for brands, producers, and creative & production directors. We produce festivals, concerts & tours, brand activations, immersive experiences, and sporting events.",
  authors: [{ name: ORG.legal }],
  openGraph: {
    title: "GHXSTSHIP — Experiential Production, Operations & Technology",
    description:
      "Venture Beyond. Book your voyage: festivals, tours, activations, immersive & sporting events through an 8-phase production lifecycle.",
    siteName: "GHXSTSHIP",
    url: ORG.url,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GHXSTSHIP — Experiential Production, Operations & Technology",
    description: "Book your voyage. Festivals · Tours · Activations · Immersive · Sporting Events.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#060815",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable} ${pixel.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://unpkg.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/@phosphor-icons/web@2.1.1/src/bold/style.css"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/@phosphor-icons/web@2.1.1/src/fill/style.css"
        />
        <JsonLd />
      </head>
      <body>
        <a className="skip" href="#main">
          Skip to main content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <ClientEnhancements />
      </body>
    </html>
  );
}
