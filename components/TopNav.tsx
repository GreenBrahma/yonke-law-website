"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

/* -------------------------------------------------------
   TopNav — Sticky top navigation
   Per homepage-spec.md Section 1 and AGENTS.md
   
   Universal navigation (Nov 2026 redesign, decided by Geoff):
   Left: YL monogram logo → home (the logo IS the Home link)
   Center: 6 nav links, each with a small plain-language sublabel
           on desktop (sublabels are dropped in the mobile menu)
   Far right: phone number, click to call. No other header CTAs.
   Mobile: hamburger; click-to-call number stays visible

   Not in the nav on purpose: /promotion and /spotlight-corner
   (stale content, pages left live but unlinked) and
   /people-first-login (reached from the People First page).
   ------------------------------------------------------- */

const NAV_ITEMS: ReadonlyArray<{
  label: string;
  sublabel?: string;
  href: string;
  ariaLabel: string;
}> = [
  {
    label: "Just Happened To Me",
    sublabel: "What Happened",
    href: "/just-happened",
    ariaLabel: "Just Happened To Me: find your situation",
  },
  {
    label: "What We Handle",
    sublabel: "Practice Areas",
    href: "/what-we-handle",
    ariaLabel: "What We Handle: practice areas",
  },
  {
    label: "Resources",
    sublabel: "Checklists/Forms",
    href: "/resources",
    ariaLabel: "Resources: checklists, forms and video",
  },
  {
    label: "Contact Us",
    href: "/talk-to-us",
    ariaLabel: "Contact Us",
  },
  {
    label: "People First",
    sublabel: "A Portal for You",
    href: "/people-first",
    ariaLabel: "People First: a portal for you",
  },
  {
    label: "Meet Mike",
    href: "/about",
    ariaLabel: "Meet Mike: about Michael T. Yonke",
  },
];

const PHONE_NUMBER = "816-221-6400";
const PHONE_TEL = "tel:+18162216400";

export function TopNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full bg-obsidian-graphite border-b border-steel-silver/20">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8"
        aria-label="Primary navigation"
      >
        {/* ---- Logo ---- */}
        <Link
          href="/"
          aria-label="Yonke, pronounced YONK-ee, Law. Home"
          className="flex items-center shrink-0"
        >
          <Image
            src="/yl-logo.png"
            alt="Yonke Law monogram"
            width={60}
            height={60}
            className="rounded-full"
            style={{ boxShadow: "0 0 10px 2px rgba(255, 255, 255, 0.40), 0 0 20px 4px rgba(255, 255, 255, 0.10)" }}
            priority
          />
        </Link>

        {/* ---- Desktop nav links ---- */}
        <ul className="hidden lg:flex items-start gap-3 xl:gap-7">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-label={item.ariaLabel}
                  aria-current={isActive ? "page" : undefined}
                  className="group flex flex-col items-center text-center whitespace-nowrap"
                >
                  <span
                    className={`text-[13px] xl:text-sm transition-colors duration-200 ${
                      isActive
                        ? "text-white font-semibold"
                        : "text-steel-silver group-hover:text-white font-medium"
                    }`}
                  >
                    {item.label}
                  </span>
                  {item.sublabel && (
                    <span className="mt-0.5 text-[11px] leading-tight text-muted-gold">
                      {item.sublabel}
                    </span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* ---- Right side: click-to-call phone (the only header CTA) ---- */}
        <div className="flex items-center gap-3">
          <a
            href={PHONE_TEL}
            aria-label={`Call Yonke Law at ${PHONE_NUMBER}`}
            className="group flex flex-col items-center text-center whitespace-nowrap"
          >
            <span className="text-sm xl:text-base font-semibold text-chrome-highlight group-hover:text-muted-gold transition-colors duration-200">
              {PHONE_NUMBER}
            </span>
            <span className="mt-0.5 text-[11px] leading-tight text-muted-gold">
              Click to Call
            </span>
          </a>

          {/* ---- Mobile hamburger ---- */}
          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center rounded p-2 text-steel-silver hover:text-chrome-highlight transition-colors duration-200"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* ---- Mobile menu ---- */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-steel-silver/20 bg-obsidian-graphite">
          <ul className="flex flex-col gap-1 px-4 py-4">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-label={item.ariaLabel}
                    aria-current={isActive ? "page" : undefined}
                    className={`block rounded px-3 py-2 text-sm transition-colors duration-200 ${
                      isActive
                        ? "text-white font-semibold bg-charcoal-slate"
                        : "text-steel-silver hover:text-white hover:bg-charcoal-slate"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}
