/**
 * People First portal — email through the firm's Microsoft 365 mailbox.
 * Same mailbox and credentials the website's contact form already uses.
 */
import { getGraphToken } from "@/lib/graph/client";

export const firmEmail = () => process.env.MS365_ATTORNEY_EMAIL || "mike@yonke.law";
const senderEmail = () => process.env.MS365_SENDER_EMAIL || firmEmail();

export async function sendPortalMail(opts: {
  to: string;
  subject: string;
  text: string;
  replyTo?: string;
  important?: boolean;
}): Promise<void> {
  if (process.env.NODE_ENV !== "production" && !process.env.AZURE_CLIENT_ID) {
    // Developer machine without the firm's mail credentials: print instead of sending.
    // This branch cannot run on the live site.
    console.log(`[people-first] (developer machine, not sent) to ${opts.to}: ${opts.subject}\n${opts.text}`);
    return;
  }
  const token = await getGraphToken();
  const res = await fetch(`https://graph.microsoft.com/v1.0/users/${senderEmail()}/sendMail`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      message: {
        subject: opts.subject,
        body: { contentType: "Text", content: opts.text },
        toRecipients: [{ emailAddress: { address: opts.to } }],
        replyTo: [{ emailAddress: { address: opts.replyTo || firmEmail() } }],
        importance: opts.important ? "high" : "normal",
      },
      saveToSentItems: true,
    }),
  });
  if (!res.ok) {
    throw new Error(`Microsoft 365 refused the email (${res.status}).`);
  }
}

/** Tell the firm something happened in the portal. */
export function notifyFirm(subject: string, text: string, replyTo?: string, important = false) {
  return sendPortalMail({ to: firmEmail(), subject: `People First: ${subject}`, text, replyTo, important });
}
