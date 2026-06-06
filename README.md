# G H X S T S H I P

> **Venture Beyond.**
> Experiential production, operations, and technology — Miami, New York, Chicago, Los Angeles.

The marketing site for **GHXSTSHIP** — a full-service experiential production, operations,
and technology company that produces festivals, concerts & tours, brand activations,
immersive experiences, and sporting events for brands, producers, and creative and
production directors, across three verticals:

- **Production** — _We build the show._
- **Operations** — _We run the machine._
- **Technology** — _We build the tools._ (ATLVS · COMPVSS · GVTEWAY)

Live at [ghxstship.xyz](https://ghxstship.xyz).

## Stack

- **Next.js 16** App Router, fully statically generated (48 prerendered routes)
- **React 19**
- **Tailwind CSS v4** — `@theme inline` directly in `globals.css`, no `tailwind.config`
- **TypeScript** strict
- **Big Shoulders + Space Grotesk + Space Mono + Silkscreen** via `next/font/google`
- Phosphor Icons via CDN
- **JSON-LD on every route**: `Organization`, `WebSite + SearchAction`, `HowTo` (8-phase
  lifecycle), `Service` per destination, `LocalBusiness` per home port, `SoftwareApplication`
  for ATLVS / COMPVSS / GVTEWAY, `DefinedTermSet` (glossary), `CreativeWork` per voyage,
  `BlogPosting` per Captain's Log entry, `BreadcrumbList` per sub-page, `FAQPage` everywhere

## The Spaceport metaphor

The site is structured as **the GHXSTSHIP Spaceport** — a transit terminal where solar
galleons dock before "boarding" an experience. The vocabulary is locked:

| Marketing surface | Means exactly |
|---|---|
| **Destinations** | The experience types we produce (Festivals · Concerts & Tours · Brand Activations · Immersive · Sporting · TV / Film / Broadcast · Health & Wellness · Premium Hospitality · Luxury Retail · Water & Motorsports) |
| **Charters** | How a client buys (Full Voyage · By Vertical · À La Carte) |
| **Itinerary** | The 8-Phase Production Lifecycle (Discovery → Strike) |
| **The Bridge** | ATLVS · COMPVSS · GVTEWAY — the proprietary software |
| **The Skeleton Crew** | The team (Captain · First Mate · Navigator · Quartermaster · Bosun) |
| **The Archives** | Past voyages — real projects only, RRR-prefixed codes |
| **Captain's Log** | Dispatches / blog |
| **Home Ports** | The offices — Miami (HQ) · New York · Chicago · Los Angeles |

## Routes

- `/` — Spaceport home (booking journey: Destinations → Charters → Itinerary → Crew → Launch)
- `/destinations/[slug]` × 10
- `/charters/[slug]` × 3 (full-voyage, by-vertical, a-la-carte)
- `/itinerary/[slug]` × 8 phase pages
- `/bridge/[product]` × 3 (atlvs, compvss, gvteway)
- `/voyages` + `/voyages/[slug]` × 9 (the Archives)
- `/locations` + `/locations/[city]` × 4 (Miami HQ + NY, Chicago, LA)
- `/crew` + `/crew/join`
- `/logs` + `/logs/[slug]` × 6
- `/resources/glossary`
- `/about` · `/contact` · `/press`
- `/privacy` · `/terms` · `/confidentiality`
- `/sitemap.xml` · `/robots.txt` · `/opengraph-image` · `/twitter-image` · `/icon`

## Data layer

All content lives in `src/lib/ghxstship/`, split per entity:

- `destinations.ts` — 10 experience types with capabilities, audience, FAQs
- `voyages.ts` — 9 case studies with full narrative
- `locations.ts` — 4 home ports with `LocalBusiness` data
- `glossary.ts` — 27 industry terms (`DefinedTermSet`)
- `charters.ts` — 3 engagement models
- `phases.ts` — 8 lifecycle phases with deliverables / crew / risks per phase
- `instruments.ts` — ATLVS / COMPVSS / GVTEWAY with features and FAQs
- `posts.ts` — 6 Captain's Log entries
- `crew.ts` — 5 ranks plus Join the Crew
- `content.ts` — homepage assembly, nav, footer, testimonials, press, history

## Develop

```bash
npm install
npm run dev          # http://localhost:3000
npm run typecheck    # tsc --noEmit
npm run build        # production build
npm start            # serve built output
```

## Deploy

Designed for Vercel. Static-only — no runtime server, no database, no environment variables
required for the marketing surface.
