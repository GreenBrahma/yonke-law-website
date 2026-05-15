import type { MetadataRoute } from "next";

/* -------------------------------------------------------
   sitemap.xml — Stub
   TODO: Expand with all static and dynamic routes,
   lastModified dates, and changeFrequency values
   as pages are built out.
   ------------------------------------------------------- */

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://yonke.law";

  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/just-happened`, lastModified: new Date() },
    { url: `${baseUrl}/what-we-handle`, lastModified: new Date() },
    { url: `${baseUrl}/people-first`, lastModified: new Date() },
    { url: `${baseUrl}/spotlight-corner`, lastModified: new Date() },
    { url: `${baseUrl}/talk-to-us`, lastModified: new Date() },
    { url: `${baseUrl}/resources`, lastModified: new Date() },
    { url: `${baseUrl}/resources/offer-review`, lastModified: new Date() },
    { url: `${baseUrl}/about`, lastModified: new Date() },
  ];
}
