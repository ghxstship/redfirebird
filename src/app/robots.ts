import type { MetadataRoute } from "next";
import { ORG } from "@/lib/ghxstship";

const ROOT = ORG.url.replace(/\/$/, "");

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "CCBot", allow: "/" },
      { userAgent: "anthropic-ai", allow: "/" },
    ],
    sitemap: `${ROOT}/sitemap.xml`,
  };
}
