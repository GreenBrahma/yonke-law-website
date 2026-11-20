import Image from "next/image";
import Link from "next/link";
import { requirePortalUser } from "@/lib/portal/session";
import { getCaseFor, upcomingDates } from "@/lib/portal/source";
import { readProfile } from "@/lib/portal/profile";
import { daysAway, longDate } from "@/lib/portal/format";
import { Card } from "@/components/portal/PortalPage";
import { CheckIn } from "@/components/portal/CheckIn";

const tile =
  "block rounded-2xl bg-[#2E2F33] border border-white/10 px-6 py-5 hover:border-muted-gold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-muted-gold";

export default async function PortalHome() {
  const user = await requirePortalUser();
  const [portalCase, profile] = await Promise.all([getCaseFor(user.email), readProfile(user.id)]);

  const next = upcomingDates(portalCase.keyDates)[0];
  const toSign = portalCase.legalDocuments.filter((d) => d.signature === "not_signed").length;
  const name = profile.preferredName || portalCase.person.preferredName;

  return (
    <div>
      <h1 className="font-display text-2xl md:text-3xl text-white text-center">
        Welcome to the People First Portal{name ? `, ${name}` : ""}
      </h1>
      <p className="mt-2 text-center text-white/80">{portalCase.matterName}</p>

      <div className="mt-8 grid gap-6 md:grid-cols-[260px_1fr]">
        {/* Right on desktop, first on a phone: the things people come here to do */}
        <nav aria-label="People First" className="md:order-2 space-y-3">
          <Link href="/people-first-login/whats-next" className={tile} data-testid="tile-whats-next">
            <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
              <span className="font-display text-xl text-white">What&rsquo;s Next?</span>
              {toSign > 0 && (
                <span className="rounded-full bg-muted-gold text-[#1C1C1E] text-xs font-semibold px-3 py-1">
                  {toSign} to sign
                </span>
              )}
            </div>
            <p className="mt-1.5 text-sm text-white/80">
              {next ? (
                <>
                  Next: {next.title}, {longDate(next.when)} ({daysAway(next.when).toLowerCase()})
                </>
              ) : (
                "Nothing is scheduled right now."
              )}
            </p>
          </Link>

          <Link href="/people-first-login/my-documents" className={tile} data-testid="tile-my-documents">
            <span className="font-display text-xl text-white">My Documents</span>
            <p className="mt-1.5 text-sm text-white/80">A private place for your own documents and photos.</p>
          </Link>

          <Link href="/people-first-login/legal-documents" className={tile} data-testid="tile-legal-documents">
            <span className="font-display text-xl text-white">Legal Documents</span>
            <p className="mt-1.5 text-sm text-white/80">What we have shared with you, and whether it is signed.</p>
          </Link>

          <Link href="/people-first-login/videos" className={tile} data-testid="tile-videos">
            <span className="font-display text-xl text-white">Preparation Videos</span>
            <p className="mt-1.5 text-sm text-white/80">Short videos to watch before the big moments.</p>
          </Link>

          <div className="rounded-2xl bg-[#2E2F33] border border-white/10 px-6 py-5 flex flex-wrap items-center gap-x-5 gap-y-3">
            <span className="font-display text-xl text-white">Schedule a:</span>
            <div className="flex gap-3">
              <Link
                href="/people-first-login/schedule?type=call"
                className="rounded-xl border border-muted-gold text-white px-5 py-2.5 text-sm font-semibold hover:bg-muted-gold hover:text-[#1C1C1E] transition-colors"
              >
                Call
              </Link>
              <Link
                href="/people-first-login/schedule?type=meeting"
                className="rounded-xl border border-muted-gold text-white px-5 py-2.5 text-sm font-semibold hover:bg-muted-gold hover:text-[#1C1C1E] transition-colors"
              >
                Meeting
              </Link>
            </div>
          </div>
        </nav>

        {/* Left on desktop: you, and Mike */}
        <div className="md:order-1 grid grid-cols-2 md:grid-cols-1 gap-3 content-start">
          <Link href="/people-first-login/about-you" className={`${tile} text-center`} data-testid="tile-about-you">
            <svg viewBox="0 0 64 64" className="mx-auto h-16 w-16 text-muted-gold" fill="currentColor" aria-hidden="true">
              <circle cx="32" cy="22" r="12" />
              <path d="M8 58c0-13 11-22 24-22s24 9 24 22z" />
            </svg>
            <span className="mt-3 block font-display text-base text-white">Tell Us About You</span>
            <span className="mt-1 block text-xs text-white/75">How you like to be reached</span>
          </Link>

          <Link href="/about" className={`${tile} text-center`} data-testid="tile-about-mike">
            <Image
              src="/images/Mike Yonke - Headshot Clean.jpg"
              alt="Mike Yonke"
              width={160}
              height={160}
              className="mx-auto h-20 w-20 md:h-28 md:w-28 rounded-full object-cover object-top"
            />
            <span className="mt-3 block font-display text-base text-white">Learn About Mike</span>
            <span className="mt-1 block text-xs text-white/75">Who is in your corner</span>
          </Link>
        </div>
      </div>

      <Card className="mt-6">
        <CheckIn />
      </Card>

      <p className="mt-6 text-center text-sm text-white/75">
        Need us now? Call{" "}
        <a href="tel:+18162216400" className="text-muted-gold underline underline-offset-4">
          816-221-6400
        </a>
        .
      </p>
    </div>
  );
}
