import Link from "next/link";
import { requirePortalUser } from "@/lib/portal/session";
import { getCaseFor, upcomingDates } from "@/lib/portal/source";
import { clock, dayName, dayNumber, daysAway, monthShort, shortDate } from "@/lib/portal/format";
import { Badge, Card, PortalPage } from "@/components/portal/PortalPage";

export default async function WhatsNext() {
  const user = await requirePortalUser();
  const portalCase = await getCaseFor(user.email);
  const dates = upcomingDates(portalCase.keyDates);
  const toSign = portalCase.legalDocuments.filter((d) => d.signature === "not_signed");
  const signed = portalCase.legalDocuments.filter((d) => d.signature === "signed");

  return (
    <PortalPage title="What's Next?" lead={portalCase.whereThingsStand}>
      <section aria-labelledby="needs-you">
        <h2 id="needs-you" className="font-display text-xl text-white mb-3">
          Documents that need you
        </h2>
        {toSign.length === 0 ? (
          <Card>
            <p className="text-white/85">Nothing is waiting for your signature.</p>
          </Card>
        ) : (
          <ul className="space-y-3">
            {toSign.map((d) => (
              <li key={d.id}>
                <Card className="border-muted-gold/60">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="text-white font-semibold">{d.title}</h3>
                      <p className="mt-1 text-sm text-white/80">{d.summary}</p>
                      {d.signBy && <p className="mt-2 text-sm text-white">Please sign by {shortDate(d.signBy)}.</p>}
                      <p className="mt-1 text-sm text-white/75">
                        Your signing link comes to you by email. If you cannot find it, call us at 816-221-6400.
                      </p>
                    </div>
                    <Badge tone="gold">Not signed yet</Badge>
                  </div>
                  <a
                    href={`/api/portal/legal-documents/${d.id}`}
                    target="_blank"
                    rel="noopener"
                    className="mt-3 inline-block text-sm text-muted-gold underline underline-offset-4"
                  >
                    Read the document
                  </a>
                </Card>
              </li>
            ))}
          </ul>
        )}
        {signed.length > 0 && (
          <p className="mt-3 text-sm text-white/75">
            Already signed: {signed.map((d) => d.title).join(", ")}.{" "}
            <Link href="/people-first-login/legal-documents" className="text-muted-gold underline underline-offset-4">
              See all legal documents
            </Link>
          </p>
        )}
      </section>

      <section aria-labelledby="coming-up" className="mt-9">
        <h2 id="coming-up" className="font-display text-xl text-white mb-3">
          Important dates
        </h2>
        {dates.length === 0 ? (
          <Card>
            <p className="text-white/85">Nothing is scheduled right now. We will post dates here as soon as they are set.</p>
          </Card>
        ) : (
          <ol className="space-y-3">
            {dates.map((d, i) => (
              <li key={d.id}>
                <Card className={i === 0 ? "border-muted-gold/60" : ""}>
                  <div className="flex gap-4">
                    <div className="shrink-0 w-16 text-center rounded-xl bg-[#1C1C1E] border border-white/10 py-2">
                      <div className="text-xs uppercase tracking-wider text-muted-gold">{monthShort(d.when)}</div>
                      <div className="font-display text-2xl text-white leading-tight">{dayNumber(d.when)}</div>
                    </div>
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                        <h3 className="text-white font-semibold">{d.title}</h3>
                        <Badge tone={i === 0 ? "gold" : "quiet"}>{daysAway(d.when)}</Badge>
                      </div>
                      <p className="mt-1 text-sm text-white">
                        {dayName(d.when)} at {clock(d.when)}
                      </p>
                      <p className="mt-1 text-sm text-white/80">{d.where}</p>
                      <p className="mt-2 text-sm text-white/85">{d.note}</p>
                      {d.prepVideoId && (
                        <Link
                          href={`/people-first-login/videos#${d.prepVideoId}`}
                          className="mt-2 inline-block text-sm text-muted-gold underline underline-offset-4"
                        >
                          Watch the preparation video
                        </Link>
                      )}
                    </div>
                  </div>
                </Card>
              </li>
            ))}
          </ol>
        )}
      </section>
    </PortalPage>
  );
}
