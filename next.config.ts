import type { NextConfig } from "next";
import { LEGACY_REDIRECTS } from "./lib/legacy-redirects";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        // Prevent aggressive browser caching of HTML pages
        // so users always get the latest deploy without manual refresh
        source: "/((?!_next/static|_next/image|favicon.ico|images|resources).*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=0, must-revalidate",
          },
        ],
      },
    ];
  },
  async redirects() {
    const existing = [
      // Legacy flat practice-area URLs → /what-we-handle/*
      { source: "/car-accidents", destination: "/what-we-handle/car-accidents", permanent: true },
      { source: "/truck-accidents", destination: "/what-we-handle/truck-accidents", permanent: true },
      { source: "/medical-malpractice", destination: "/what-we-handle/medical-malpractice", permanent: true },
      { source: "/wrongful-death", destination: "/what-we-handle/wrongful-death", permanent: true },
      { source: "/nursing-home-abuse", destination: "/what-we-handle/nursing-home-abuse", permanent: true },
      { source: "/workplace-injuries", destination: "/what-we-handle/workplace-injuries", permanent: true },
      { source: "/motorcycle-accidents", destination: "/what-we-handle/motorcycle-accidents", permanent: true },
      { source: "/premises-liability", destination: "/what-we-handle/premises-liability", permanent: true },
      { source: "/product-liability", destination: "/what-we-handle/product-liability", permanent: true },
      { source: "/pedestrian-bicycle", destination: "/what-we-handle/pedestrian-bicycle", permanent: true },
      // Legacy bio URL
      { source: "/michael-t-yonke", destination: "/about", permanent: true },
      // Formerly in netlify.toml (site moved to Cloudflare, Nov 2026)
      { source: "/how-it-works", destination: "/people-first", permanent: true },
      { source: "/how-it-works/:path*", destination: "/people-first/:path*", permanent: true },
      { source: "/people-first/people-portal", destination: "/people-first", permanent: true },
      // People First portal rebuilt Nov 2026: old screens point at the new home
      { source: "/people-first-login/dashboard", destination: "/people-first-login/home", permanent: false },
      { source: "/people-first-login/calendar", destination: "/people-first-login/whats-next", permanent: false },
      { source: "/people-first-login/where-you-are", destination: "/people-first-login/whats-next", permanent: false },
      { source: "/people-first-login/needed", destination: "/people-first-login/whats-next", permanent: false },
      { source: "/people-first-login/help", destination: "/people-first-login/videos", permanent: false },
      // "I Stand For" now lives on the Meet Mike page
      { source: "/about/i-stand-for", destination: "/about#i-stand-for", permanent: true },
      // Legacy testimonials shortcut
      { source: "/testimonials", destination: "/about/testimonials", permanent: true },
    ];

    // Preserve existing shortcuts while restoring both generations of the
    // spreadsheet's migration paths. Next.js permanent redirects use HTTP 308.
    const existingSources = new Set(existing.map(({ source }) => source));
    return [
      ...existing,
      ...LEGACY_REDIRECTS.filter(({ source }) => !existingSources.has(source)),
    ];
  },
};

export default nextConfig;
