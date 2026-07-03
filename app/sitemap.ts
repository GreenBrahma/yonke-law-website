import type { MetadataRoute } from "next";

/* ───────────────────────────────────────────────────────────────
   sitemap.xml — Full site map for yonke.law
   Convention: no trailing slash (matches trailingSlash: false).
   ─────────────────────────────────────────────────────────────── */

const BASE = "https://yonke.law";

/* Practice-area slugs — keep in sync with practiceAreaData*.ts
   TODO: extract a shared ROUTE_MANIFEST consumed by both the
   sitemap and per-page canonical helpers so they can't drift. */
const PRACTICE_AREA_SLUGS = [
  "car-accidents",
  "truck-accidents",
  "medical-malpractice",
  "wrongful-death",
  "nursing-home-abuse",
  "workplace-injuries",
  "motorcycle-accidents",
  "premises-liability",
  "product-liability",
  "pedestrian-bicycle",
  "rideshare-accidents",
  "surgical-error",
  "diagnostic-error",
  "medication-error",
  "birth-injury",
  "dog-bite",
  "construction-injury",
  "sexual-abuse",
  "active-shooter",
  "family-perspective",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // ── Core pages ──────────────────────────────────────────────
  const core: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/what-we-handle`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/about/testimonials`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/about/recognition`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/about/outcomes`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/talk-to-us`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/talk-to-us/message`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/talk-to-us/recommendation`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/just-happened`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/people-first`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/promotion`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/spotlight-corner`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE}/resources`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/resources/offer-review`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/privacy-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${BASE}/disclaimer`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];

  // ── Practice areas (high priority — these are SEO landing pages) ──
  const practiceAreas: MetadataRoute.Sitemap = PRACTICE_AREA_SLUGS.map(
    (slug) => ({
      url: `${BASE}/what-we-handle/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })
  );

  // Auth-gated routes (/people-first-login/*) are intentionally excluded.
  // Spotlight article URLs are dynamic and would require a DB query;
  // they'll be added when the Spotlight pipeline is fully operational.

  return [...core, ...practiceAreas];
}
