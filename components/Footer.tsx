import Link from "next/link";
import Image from "next/image";

/* -------------------------------------------------------
   Footer — Shared component (every page)
   Per homepage-spec.md Section 11 and AGENTS.md
   
   Includes:
   - 4-column link grid (About, Practice Areas, Resources, Connect)
   - Required disclaimer block (verbatim, non-negotiable)
   - Bottom strip (logo, legal links, pronunciation note)
   ------------------------------------------------------- */

const PHONE_NUMBER = "816-221-6400";
const PHONE_TEL = "tel:+18162216400";
const ADDRESS = "700 West 47th Street, Suite 550, Kansas City, MO 64112";

const FOOTER_COLUMNS = {
  about: {
    heading: "About",
    links: [
      { label: "Michael T. Yonke", href: "/about" },
      { label: "I Stand For", href: "/about/i-stand-for" },
      { label: "Testimonials", href: "/about/testimonials" },
      { label: "Recognition", href: "/about/recognition" },
    ],
  },
  practiceAreas: {
    heading: "Practice Areas",
    links: [
      { label: "Car Accidents", href: "/what-we-handle/car-accidents" },
      { label: "Truck Accidents", href: "/what-we-handle/truck-accidents" },
      { label: "Medical Malpractice", href: "/what-we-handle/medical-malpractice" },
      { label: "Wrongful Death", href: "/what-we-handle/wrongful-death" },
      { label: "Nursing Home Abuse", href: "/what-we-handle/nursing-home-abuse" },
      { label: "Workplace Injuries", href: "/what-we-handle/workplace-injuries" },
      { label: "Motorcycle Accidents", href: "/what-we-handle/motorcycle-accidents" },
      { label: "Premises Liability", href: "/what-we-handle/premises-liability" },
      { label: "Product Liability", href: "/what-we-handle/product-liability" },
      { label: "Pedestrian & Bicycle", href: "/what-we-handle/pedestrian-bicycle" },
    ],
  },
  resources: {
    heading: "Resources",
    links: [
      { label: "Just Happened?", href: "/just-happened" },
      { label: "People First", href: "/people-first" },
      { label: "How to Prepare for a Deposition", href: "/how-to-prepare-for-a-deposition" },
      { label: "Checklists", href: "/resources" },
      { label: "FAQ", href: "/resources" },
      { label: "Missouri Law", href: "/resources" },
      { label: "Kansas Law", href: "/resources" },
    ],
  },
  connect: {
    heading: "Connect",
    links: [
      { label: PHONE_NUMBER, href: PHONE_TEL, external: true },
      { label: ADDRESS, href: "#" },
      { label: "Talk to Us", href: "/talk-to-us" },
      { label: "Spotlight Corner", href: "/spotlight-corner" },
    ],
  },
} as const;

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-obsidian-graphite border-t border-steel-silver/20">
      {/* ---- Link columns ---- */}
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {Object.values(FOOTER_COLUMNS).map((column) => (
            <div key={column.heading}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-steel-silver">
                {column.heading}
              </h3>
              <ul className="mt-4 space-y-2">
                {column.links.map((link) => (
                  <li key={link.label}>
                    {"external" in link && link.external ? (
                      <a
                        href={link.href}
                        className="text-sm text-steel-silver/70 hover:text-chrome-highlight transition-colors duration-200"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-steel-silver/70 hover:text-chrome-highlight transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ---- Required disclaimer block ---- */}
      {/* NOTE: This text is VERBATIM from homepage-spec.md Section 11.
          It is mandatory on every page and must not be paraphrased,
          summarized, or modified. Per bar requirements. */}
      <div className="border-t border-steel-silver/10">
        <div className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
          <div className="max-w-3xl text-xs leading-relaxed text-steel-silver/50">
            <p className="mb-3">
              Yonke Law LLC, 700W 47th St Suite 550, Kansas City, MO 64112
              <br />
              {PHONE_NUMBER}
            </p>
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

          <div className="flex items-center gap-4 text-xs text-steel-silver/50">
            <Link href="/privacy-policy" className="hover:text-chrome-highlight transition-colors duration-200">
              Privacy
            </Link>
            <span aria-hidden="true">·</span>
            <Link href="/disclaimer" className="hover:text-chrome-highlight transition-colors duration-200">
              Disclaimer
            </Link>
            <span aria-hidden="true">·</span>
            <Link href="#" className="hover:text-chrome-highlight transition-colors duration-200">
              Accessibility
            </Link>
          </div>


        </div>
      </div>
    </footer>
  );
}
