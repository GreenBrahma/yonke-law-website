import { requirePortalUser } from "@/lib/portal/session";
import { getCaseFor } from "@/lib/portal/source";
import { shortDate } from "@/lib/portal/format";
import { Badge, Card, PortalPage } from "@/components/portal/PortalPage";

export default async function LegalDocuments() {
  const user = await requirePortalUser();
  const portalCase = await getCaseFor(user.email);
  const order = { not_signed: 0, not_required: 1, signed: 2 } as const;
  const docs = [...portalCase.legalDocuments].sort(
    (a, b) => order[a.signature] - order[b.signature] || b.sharedOn.localeCompare(a.sharedOn)
  );

  return (
    <PortalPage title="Legal Documents" lead="Documents Yonke Law has shared with you. Each one shows whether it is signed.">
      {docs.length === 0 ? (
        <Card>
          <p className="text-white/85">We have not shared any documents yet.</p>
        </Card>
      ) : (
        <ul className="space-y-3">
          {docs.map((d) => (
            <li key={d.id}>
              <Card>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h2 className="text-white font-semibold">{d.title}</h2>
                    <p className="mt-1 text-sm text-white/80">{d.summary}</p>
                    <p className="mt-2 text-xs text-white/70">
                      Shared {shortDate(d.sharedOn)}
                      {d.signature === "signed" && d.signedOn ? ` · Signed ${shortDate(d.signedOn)}` : ""}
                      {d.signature === "not_signed" && d.signBy ? ` · Please sign by ${shortDate(d.signBy)}` : ""}
                    </p>
                  </div>
                  {d.signature === "signed" && <Badge tone="green">Signed</Badge>}
                  {d.signature === "not_signed" && <Badge tone="gold">Not signed yet</Badge>}
                  {d.signature === "not_required" && <Badge tone="quiet">No signature needed</Badge>}
                </div>
                <a
                  href={`/api/portal/legal-documents/${d.id}`}
                  target="_blank"
                  rel="noopener"
                  className="mt-3 inline-block text-sm text-muted-gold underline underline-offset-4"
                >
                  Open document
                </a>
              </Card>
            </li>
          ))}
        </ul>
      )}
    </PortalPage>
  );
}
