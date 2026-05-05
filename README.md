# GHXSTSHIP

Experiential production company. Festivals, theme park attractions, immersive
experiences, theatrical productions, brand activations, premium hospitality.

This repo (codename **redfirebird**) is the marketing site at
[ghxstship.pro](https://ghxstship.pro). Theme-locked Bermuda Triangle palette
with a Material green-700/800 accent, sibling to the ATLVS pink-700,
COMPVSS amber-700, and GVTEWAY cyan-800 sub-brand colours of LYTEHAUS
Technologies, the GHXSTSHIP software arm.

## Stack

- Next.js 16 App Router, fully statically generated
- React 19
- Tailwind CSS v4 (no `tailwind.config` — `@theme inline` in `globals.css`)
- TypeScript strict
- Anton + Bebas Neue + DM Sans + Share Tech Mono via `next/font`
- Radix UI primitives (DropdownMenu)
- JSON-LD structured data on every page (Organization, Service, OfferCatalog,
  BreadcrumbList, FAQPage)

## Architecture

The site is data-driven from the locked **XPMS v1.0** schema:

- **114 services** across 10 XTC classes
- **19 industry solutions** with phase / depth / mode / geo emphasis
- **8 production phases** (Discovery → Wrap)
- **6 experience modes** (Social, Digital, Virtual, Physical, Experiential, Theatrical)
- **12 markets** (4 anchors, 8 satellites)
- **5 per-project tiers** plus **4 retainer tiers** plus 10 stackable add-ons

All data lives in `src/lib/ghxstship/`. Routes in `src/app/` are thin views
that query the data layer and emit static HTML at build time.

## Develop

```bash
npm install
npm run dev
```

Site runs at `http://localhost:3000`.

## Build

```bash
npm run build
npm start
```

## Deploy

Designed for Vercel. Static-only — no runtime server, no database, no env vars
required for the marketing surface.
