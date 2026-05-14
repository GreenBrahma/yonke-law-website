import type { MetadataRoute } from "next";

/* -------------------------------------------------------
   robots.txt — SEO/AEO configuration
   Per AGENTS.md: Allow GPTBot, ClaudeBot, PerplexityBot,
   Google-Extended, anthropic-ai
   ------------------------------------------------------- */

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: "GPTBot",
        allow: "/",
      },
      {
        userAgent: "ClaudeBot",
        allow: "/",
      },
      {
        userAgent: "PerplexityBot",
        allow: "/",
      },
      {
        userAgent: "Google-Extended",
        allow: "/",
      },
      {
        userAgent: "anthropic-ai",
        allow: "/",
      },
    ],
    sitemap: "https://yonke.law/sitemap.xml",
  };
}
