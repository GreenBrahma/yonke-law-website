"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/* -------------------------------------------------------
   Breadcrumb — Auto-generated from URL path
   Renders in app/layout.tsx, below TopNav, above page content.
   Hidden on the home page ("/").

   Spec requirements:
   - Overrides map for slug → human-readable label
   - Mobile collapse: >3 segments → Home / … / Last
   - JSON-LD BreadcrumbList structured data
   - aria-current="page" on last item
   - Screen-reader-only "You are here:" label
   ------------------------------------------------------- */

/** Override map: slug → display label for special cases */
const LABEL_OVERRIDES: Record<string, string> = {
  "just-happened": "Just Happened?",
  "what-we-handle": "What We Handle",
  "people-first": "People First",
  "talk-to-us": "Talk to Us",
  "spotlight-corner": "Spotlight Corner",
  "how-it-works": "How It Works",
  faq: "FAQ",
  "offer-review": "Offer Review",
  "people-portal": "People First",
};

/** Convert a URL slug to a human-readable label */
function slugToLabel(slug: string): string {
  if (LABEL_OVERRIDES[slug]) return LABEL_OVERRIDES[slug];
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

interface CrumbData {
  label: string;
  href: string;
}

export default function Breadcrumb() {
  const pathname = usePathname();

  // Hide on home page
  if (pathname === "/") return null;

  // Build crumbs from URL segments
  const segments = pathname.split("/").filter(Boolean);
  const crumbs: CrumbData[] = segments.map((seg, i) => ({
    label: slugToLabel(seg),
    href: "/" + segments.slice(0, i + 1).join("/"),
  }));

  // JSON-LD BreadcrumbList
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://yonke.law/",
      },
      ...crumbs.map((crumb, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: crumb.label,
        item: `https://yonke.law${crumb.href}`,
      })),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav
        aria-label="Breadcrumb"
        className="bg-obsidian-graphite border-b border-steel-silver/10 px-4 lg:px-8 py-2 sm:py-3"
      >
        <ol className="mx-auto max-w-7xl flex items-center gap-2 text-sm text-steel-silver">
          {/* Screen-reader-only label */}
          <li className="sr-only">You are here:</li>

          {/* Home link */}
          <li>
            <Link
              href="/"
              className="text-steel-silver hover:text-chrome-highlight transition-colors"
            >
              Home
            </Link>
          </li>

          {/* Desktop: all segments visible */}
          {/* Mobile (<640px): if >3 segments, collapse middle to "…" */}
          {crumbs.map((crumb, i) => {
            const isLast = i === crumbs.length - 1;
            const isMiddle = i > 0 && i < crumbs.length - 1;
            const totalSegments = crumbs.length; // +1 for Home = totalSegments + 1 items total

            return (
              <li
                key={crumb.href}
                className={`flex items-center gap-2${
                  // On mobile, hide middle segments when total > 3
                  isMiddle && totalSegments > 2 ? " hidden sm:flex" : ""
                }`}
              >
                <span aria-hidden="true" className="text-muted-gold">
                  /
                </span>
                {isLast ? (
                  <span
                    className="text-white font-semibold"
                    aria-current="page"
                  >
                    {crumb.label}
                  </span>
                ) : (
                  <Link
                    href={crumb.href}
                    className="text-steel-silver hover:text-chrome-highlight transition-colors"
                  >
                    {crumb.label}
                  </Link>
                )}
              </li>
            );
          })}

          {/* Mobile ellipsis — shown only when middle segments are collapsed */}
          {crumbs.length > 2 && (
            <li
              className="flex items-center gap-2 sm:hidden"
              aria-hidden="true"
              style={{ order: 1 }}
            >
              <span className="text-muted-gold">/</span>
              <span className="text-steel-silver/50">…</span>
            </li>
          )}
        </ol>
      </nav>
    </>
  );
}
