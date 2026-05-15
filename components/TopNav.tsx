"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

/* -------------------------------------------------------
   TopNav — Sticky top navigation
   Per homepage-spec.md Section 1 and AGENTS.md
   
   Layout: Full-width, fixed top, dark background
   Left: YL monogram logo → home
   Center/right: 5 nav links
   Far right: Phone (tel: link) + Talk to Us CTA
   Mobile: Hamburger; phone + CTA stay visible
   ------------------------------------------------------- */

const NAV_ITEMS = [
  { label: "Just Happened?", href: "/just-happened" },
  { label: "People First", href: "/people-first" },
  { label: "Spotlight Corner", href: "/spotlight-corner" },
  { label: "What We Handle", href: "/what-we-handle" },
  { label: "Talk to Us", href: "/talk-to-us" },
] as const;

const PHONE_NUMBER = "816-221-6400";
const PHONE_TEL = "tel:+18162216400";

export function TopNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#383839] border-b border-steel-silver/20">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8"
        aria-label="Primary navigation"
      >
        {/* ---- Logo ---- */}
        <Link
          href="/"
          aria-label="Yonke Law — Home"
          className="flex items-center shrink-0"
        >
          <Image
            src="/yl-logo.png"
            alt="Yonke Law monogram"
            width={40}
            height={40}
            className="rounded-full"
            priority
          />
        </Link>

        {/* ---- Desktop nav links ---- */}
        <ul className="hidden lg:flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-sm text-steel-silver hover:text-chrome-highlight font-medium transition-colors duration-200"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* ---- Right side: phone + CTA ---- */}
        <div className="flex items-center gap-4">
          <a
            href={PHONE_TEL}
            className="hidden sm:inline-flex text-sm text-steel-silver hover:text-chrome-highlight font-medium transition-colors duration-200"
          >
            {PHONE_NUMBER}
          </a>

          <Link
            href="/talk-to-us"
            className="rounded bg-muted-gold px-4 py-2 text-sm font-semibold text-obsidian-graphite hover:bg-muted-gold/90 transition-colors duration-200"
          >
            Talk to Us
          </Link>

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
        <div className="lg:hidden border-t border-steel-silver/20 bg-[#383839]">
          <ul className="flex flex-col gap-1 px-4 py-4">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded px-3 py-2 text-sm text-steel-silver hover:text-chrome-highlight hover:bg-[#444446] transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-2 border-t border-steel-silver/20">
              <a
                href={PHONE_TEL}
                className="block px-3 py-2 text-sm text-steel-silver hover:text-chrome-highlight"
              >
                Call {PHONE_NUMBER}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
