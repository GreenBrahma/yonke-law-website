/**
 * Client helper: forwards a website form submission to Lead Docket through
 * our own server route (/api/lead-docket). Never throws; returns true when
 * Lead Docket accepted the lead.
 */
export type WebsiteLead = {
  firstName?: string;
  lastName?: string;
  /** Full name, used only when first/last are not collected separately. */
  name?: string;
  phone?: string;
  email?: string;
  caseType?: string;
  message?: string;
  smsConsent: boolean;
  /** Which form/page the lead came from, e.g. "Homepage". */
  source: string;
};

export async function sendToLeadDocket(lead: WebsiteLead): Promise<boolean> {
  try {
    const res = await fetch("/api/lead-docket", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...lead,
        pageUrl: typeof window !== "undefined" ? window.location.href : "",
      }),
      keepalive: true,
    });
    return res.ok;
  } catch {
    return false;
  }
}
