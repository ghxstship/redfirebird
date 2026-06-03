/**
 * JSON-LD schema builders for the GHXSTSHIP surface.
 * Drop one or more <Schema data={...}/> into a page <head/> region or anywhere
 * inside the rendered tree; Next/React handles script injection.
 */

import { ORG } from "@/lib/ghxstship/content";

export function Schema({ data }: { data: object | object[] }) {
  const blocks = Array.isArray(data) ? data : [data];
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

const root = ORG.url.replace(/\/$/, "");

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function serviceSchema(params: {
  name: string;
  serviceType: string;
  description: string;
  audience: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: params.name,
    serviceType: params.serviceType,
    description: params.description,
    provider: { "@type": "Organization", name: "GHXSTSHIP", url: root + "/" },
    areaServed: "Worldwide",
    audience: { "@type": "Audience", audienceType: params.audience },
    url: params.url,
  };
}

export function localBusinessSchema(params: {
  name: string;
  url: string;
  locality: string;
  region: string;
  country: string;
  areaServed: string;
  isHQ: boolean;
  email?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: params.name,
    url: params.url,
    parentOrganization: { "@type": "Organization", name: "GHXSTSHIP", url: root + "/" },
    address: {
      "@type": "PostalAddress",
      addressLocality: params.locality,
      addressRegion: params.region,
      addressCountry: params.country,
    },
    areaServed: params.areaServed,
    ...(params.email ? { email: params.email } : {}),
    additionalType: params.isHQ ? "https://schema.org/Headquarters" : undefined,
  };
}

export function softwareApplicationSchema(params: {
  name: string;
  description: string;
  url: string;
  applicationCategory: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: params.name,
    applicationCategory: params.applicationCategory,
    operatingSystem: "Web",
    description: params.description,
    url: params.url,
    publisher: { "@type": "Organization", name: "GHXSTSHIP", url: root + "/" },
  };
}

export function creativeWorkSchema(params: {
  name: string;
  about: string;
  description: string;
  locationCreated?: string;
  datePublished?: string;
  url: string;
  keywords?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: params.name,
    creator: { "@type": "Organization", name: "GHXSTSHIP", url: root + "/" },
    about: params.about,
    description: params.description,
    ...(params.locationCreated ? { locationCreated: { "@type": "Place", name: params.locationCreated } } : {}),
    ...(params.datePublished ? { datePublished: params.datePublished } : {}),
    ...(params.keywords ? { keywords: params.keywords.join(", ") } : {}),
    url: params.url,
  };
}

export function definedTermSetSchema(params: {
  name: string;
  url: string;
  terms: { name: string; description: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name: params.name,
    url: params.url,
    hasDefinedTerm: params.terms.map((t) => ({
      "@type": "DefinedTerm",
      name: t.name,
      description: t.description,
    })),
  };
}

export function blogPostingSchema(params: {
  url: string;
  headline: string;
  description: string;
  datePublished: string;
  authorName: string;
  articleSection: string;
  keywords?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: params.headline,
    description: params.description,
    datePublished: params.datePublished,
    author: { "@type": "Person", name: params.authorName },
    publisher: { "@type": "Organization", name: "GHXSTSHIP", url: root + "/" },
    articleSection: params.articleSection,
    ...(params.keywords ? { keywords: params.keywords.join(", ") } : {}),
    url: params.url,
    mainEntityOfPage: params.url,
  };
}

export function personSchema(params: {
  name: string;
  jobTitle: string;
  worksFor: string;
  url: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: params.name,
    jobTitle: params.jobTitle,
    worksFor: { "@type": "Organization", name: params.worksFor, url: root + "/" },
    url: params.url,
    description: params.description,
  };
}

export function articleSchema(params: {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  authorName: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: params.headline,
    description: params.description,
    url: params.url,
    mainEntityOfPage: params.url,
    datePublished: params.datePublished,
    author: { "@type": "Person", name: params.authorName },
    publisher: { "@type": "Organization", name: "GHXSTSHIP", url: root + "/" },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: ORG.name,
    url: root + "/",
    potentialAction: {
      "@type": "SearchAction",
      target: { "@type": "EntryPoint", urlTemplate: `${root}/voyages?q={search_term_string}` },
      "query-input": "required name=search_term_string",
    },
  };
}
