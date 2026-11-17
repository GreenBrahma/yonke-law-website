import Link from "next/link";
import Image from "next/image";

/* -------------------------------------------------------
   Footer — Shared component (every page)
   Per homepage-spec.md Section 11 and AGENTS.md
   
   Includes:
   - Firm address (link columns removed Nov 2026; see note below)
   - Required disclaimer block (verbatim, non-negotiable)
   - Bottom strip (logo, legal links, LLM index and full-text links)
   ------------------------------------------------------- */

const PHONE_NUMBER = "816-221-6400";
const PHONE_TEL = "tel:+18162216400";
const ADDRESS = "700 West 47th Street, Suite 550, Kansas City, MO 64112";

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent("Yonke Law, " + ADDRESS);

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-obsidian-graphite border-t border-steel-silver/20">
      {/* ---- Address + required disclaimer block ----
          Nov 2026 redesign, decided by Geoff: the four link columns were
          removed because that content now lives on its own pages, reached
          from the universal nav. The footer carries the address, the
          required disclaimer, and the legal link row. The address line is
          the first line of the verbatim block, styled up and linked; its
          wording is unchanged. */}
      {/* NOTE: This text is VERBATIM from homepage-spec.md Section 11.
          It is mandatory on every page and must not be paraphrased,
          summarized, or modified. Per bar requirements. */}
      <div>
        <div className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
          <div className="max-w-3xl text-xs leading-relaxed text-steel-silver/50">
            <address className="mb-4 not-italic text-sm leading-relaxed text-steel-silver">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-chrome-highlight transition-colors duration-200"
              >
                Yonke Law LLC, 700W 47th St Suite 550, Kansas City, MO 64112
              </a>
              <br />
              <a
                href={PHONE_TEL}
                className="hover:text-chrome-highlight transition-colors duration-200"
              >
                {PHONE_NUMBER}
              </a>
            </address>
            <p className="mb-3 font-semibold text-steel-silver/60">
              Yonke Law, LLC
            </p>
            <p>
              The choice of a lawyer is an important decision and should not be
              based solely upon advertisements. The use of this website does not
              create an attorney-client relationship. The information you obtain
              on this site is not, nor is it intended to be, legal advice. You
              should consult an attorney for advice regarding your individual
              situation. We invite you to contact us and welcome your calls,
              letters, and electronic mail. Contacting us does not create an
              attorney-client relationship. Please do not send any confidential
              information to us until an attorney-client relationship has been
              established. No attorney-client relationship whatsoever is or may
              be formed by any use of this website or its facilities, including,
              without limitation, through any communications sent through this
              website. The Yonke Law Firm does not perform legal services outside
              of any jurisdiction(s) where our attorneys are properly authorized
              to do so.
            </p>
            <p className="mt-4">
              Copyright © {currentYear} Yonke Law, LLC - All Rights Reserved.
            </p>
          </div>
        </div>
      </div>

      {/* ---- Bottom strip ---- */}
      <div className="border-t border-steel-silver/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-4 sm:flex-row lg:px-8">
          <Image
            src="/yl-logo.png"
            alt="Yonke Law monogram"
            width={28}
            height={28}
            className="rounded-full"
          />

          <a
            href="https://www.bestlawyers.com/lawyers/michael-t-mike-yonke/67207"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
            aria-label="Best Lawyers - Michael T. Yonke profile"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://www.bestlawyers.com/Logos/ListedLawyer/67207/US/32/O/Basic.png"
              alt="Best Lawyers - Lawyer Logo"
              className="h-8 w-auto"
            />
          </a>

          <a
            href="https://www.bestlawyers.com/firms/yonke-law/39523/US"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
            aria-label="Best Lawyers - Yonke Law firm profile"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://www.bestlawyers.com/Logos/ListedFirm/39523/US/32/O/Basic.png"
              alt="Best Lawyers - Firm Logo"
              className="h-8 w-auto"
            />
          </a>

          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-steel-silver/50">
            <Link href="/privacy-policy" className="hover:text-chrome-highlight transition-colors duration-200">
              Privacy
            </Link>
            <span aria-hidden="true">·</span>
            <Link href="/terms-and-conditions" className="hover:text-chrome-highlight transition-colors duration-200">
              Terms of Service
            </Link>
            <span aria-hidden="true">·</span>
            <Link href="/disclaimer" className="hover:text-chrome-highlight transition-colors duration-200">
              Disclaimer
            </Link>
            {/* LLM discoverability files (Nov 2026). Plain <a>, not <Link>:
                these are text files served by route handlers, not pages. */}
            <span aria-hidden="true">·</span>
            <a href="/llms.txt" className="hover:text-chrome-highlight transition-colors duration-200">
              LLM index
            </a>
            <span aria-hidden="true">·</span>
            <a href="/llms-full.txt" className="hover:text-chrome-highlight transition-colors duration-200">
              LLM full text
            </a>
          </div>


        </div>
      </div>
    </footer>
  );
}
