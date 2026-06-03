import { ORG, DESTINATIONS, ITINERARY, INSTRUMENTS, VOYAGES, FAQS } from "@/lib/ghxstship";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: ORG.name,
  alternateName: ORG.spaced,
  legalName: ORG.legal,
  url: ORG.url,
  logo: `${ORG.url}logo.svg`,
  description:
    "GHXSTSHIP is a full-service experiential production, operations, and technology company headquartered in Miami, with offices in New York, Chicago, and Los Angeles. We produce festivals, concerts and tours, brand activations, immersive experiences, and sporting events for brands, producers, creative directors, and production directors — through three verticals: Production, Operations, and Technology.",
  audience: {
    "@type": "Audience",
    audienceType:
      "Brands, producers, creative directors, production directors, and project managers in live entertainment, experiential marketing, and arts and culture",
  },
  email: ORG.email,
  foundingDate: ORG.foundingDate,
  slogan: ORG.slogan,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Miami",
    addressRegion: "FL",
    addressCountry: "US",
  },
  location: [
    { "@type": "Place", name: "GHXSTSHIP Miami (Headquarters)", address: { "@type": "PostalAddress", addressLocality: "Miami", addressRegion: "FL", addressCountry: "US" } },
    { "@type": "Place", name: "GHXSTSHIP New York", address: { "@type": "PostalAddress", addressLocality: "New York", addressRegion: "NY", addressCountry: "US" } },
    { "@type": "Place", name: "GHXSTSHIP Chicago", address: { "@type": "PostalAddress", addressLocality: "Chicago", addressRegion: "IL", addressCountry: "US" } },
    { "@type": "Place", name: "GHXSTSHIP Los Angeles", address: { "@type": "PostalAddress", addressLocality: "Los Angeles", addressRegion: "CA", addressCountry: "US" } },
  ],
  areaServed: "Worldwide",
  knowsAbout: [
    "Festival production",
    "Concert and tour production",
    "Brand activations",
    "Immersive experience design",
    "Sporting event production",
    "Broadcast and film production",
    "Health and wellness experiences",
    "Premium hospitality",
    "Luxury retail activations",
    "Water and motorsports production",
    "Event production management",
    "Crew management",
    "Event ticketing",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "GHXSTSHIP Destinations",
    itemListElement: DESTINATIONS.map((d) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: d.name },
    })),
  },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "The GHXSTSHIP Production Lifecycle",
  description:
    "GHXSTSHIP's eight-phase methodology for delivering live experiences, from discovery to strike.",
  step: ITINERARY.map((phase, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: phase.name,
    text: phase.sub,
    url: `${ORG.url}itinerary/${phase.slug}`,
  })),
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@graph": INSTRUMENTS.map((inst) => ({
    "@type": "SoftwareApplication",
    name: inst.title,
    applicationCategory: inst.applicationCategory,
    operatingSystem: "Web",
    description: inst.shortBlurb,
    url: `${ORG.url}bridge/${inst.slug}`,
    publisher: { "@type": "Organization", name: "GHXSTSHIP" },
  })),
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "GHXSTSHIP Selected Work",
  itemListElement: VOYAGES.map((v, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "CreativeWork",
      name: v.name,
      about: v.about,
      datePublished: v.year,
      url: `${ORG.url}voyages/${v.slug}`,
    },
  })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: ORG.name,
  url: ORG.url,
  potentialAction: {
    "@type": "SearchAction",
    target: { "@type": "EntryPoint", urlTemplate: `${ORG.url}voyages?q={search_term_string}` },
    "query-input": "required name=search_term_string",
  },
};

export function JsonLd() {
  const blocks = [organizationSchema, websiteSchema, howToSchema, softwareSchema, itemListSchema, faqSchema];
  return (
    <>
      {blocks.map((b, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(b) }}
        />
      ))}
    </>
  );
}
