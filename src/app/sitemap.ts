import type { MetadataRoute } from "next";
import { ORG, DESTINATIONS, VOYAGES, LOCATIONS, CHARTERS, PHASES, INSTRUMENTS, POSTS } from "@/lib/ghxstship";

const ROOT = ORG.url.replace(/\/$/, "");

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [
    { url: `${ROOT}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${ROOT}/voyages`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${ROOT}/crew`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${ROOT}/crew/join`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${ROOT}/logs`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${ROOT}/locations`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${ROOT}/resources/glossary`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${ROOT}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${ROOT}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${ROOT}/press`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${ROOT}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${ROOT}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${ROOT}/confidentiality`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  for (const d of DESTINATIONS) {
    entries.push({ url: `${ROOT}/destinations/${d.slug}`, lastModified: now, changeFrequency: "monthly", priority: 0.8 });
  }
  for (const v of VOYAGES) {
    entries.push({ url: `${ROOT}/voyages/${v.slug}`, lastModified: now, changeFrequency: "yearly", priority: 0.6 });
  }
  for (const l of LOCATIONS) {
    entries.push({ url: `${ROOT}/locations/${l.slug}`, lastModified: now, changeFrequency: "monthly", priority: 0.7 });
  }
  for (const c of CHARTERS) {
    entries.push({ url: `${ROOT}/charters/${c.slug}`, lastModified: now, changeFrequency: "monthly", priority: 0.7 });
  }
  for (const p of PHASES) {
    entries.push({ url: `${ROOT}/itinerary/${p.slug}`, lastModified: now, changeFrequency: "monthly", priority: 0.6 });
  }
  for (const i of INSTRUMENTS) {
    entries.push({ url: `${ROOT}/bridge/${i.slug}`, lastModified: now, changeFrequency: "monthly", priority: 0.8 });
  }
  for (const post of POSTS) {
    entries.push({ url: `${ROOT}/logs/${post.slug}`, lastModified: new Date(post.iso), changeFrequency: "yearly", priority: 0.5 });
  }
  return entries;
}
