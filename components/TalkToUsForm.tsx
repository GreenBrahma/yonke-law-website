"use client";

import { useState, type FormEvent } from "react";
import { TalkToUsFileInput } from "@/components/TalkToUsFileInput";

type FormState = "idle" | "sending" | "sent" | "error";

/**
 * Client-side Talk to Us form.
 * Submits via /api/send-mail (Microsoft Graph) to
 * mike@yonke.law, jyonke@yonke.law, and michelle@yonke.law.
 */
export function TalkToUsForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);

    const name = data.get("name") as string;
    const phone = data.get("phone") as string;
    const email = data.get("email") as string;
    const caseType = data.get("case_type") as string;
    const message = data.get("message") as string;
    const smsConsent = data.get("sms_consent") === "on";

    // A text-message consent with no number to text is incoherent — stop here.
    if (smsConsent && !phone.trim()) {
      setState("error");
      setErrorMsg(
        "Add a phone number, or uncheck the text-message box. We need a number to text you."
      );
      return;
    }

    const consentText =
      "I agree to receive text messages from Yonke Law about my inquiry and my case. Message frequency varies. Message and data rates may apply. Reply STOP to opt out or HELP for help.";
    const consentVersion = "2026-08-30-v1";
    const consentTimestamp = new Date().toISOString();

    // Build a professional HTML email body
    const htmlBody = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px;">
        <h2 style="color: #1a1a2e; border-bottom: 2px solid #c9a84c; padding-bottom: 8px;">
          New Inquiry from yonke.law
        </h2>
        <table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
          <tr>
            <td style="padding: 8px 12px; font-weight: 600; color: #555; width: 120px; vertical-align: top;">Name</td>
            <td style="padding: 8px 12px; color: #1a1a2e;">${escapeHtml(name)}</td>
          </tr>
          <tr style="background: #f8f8f8;">
            <td style="padding: 8px 12px; font-weight: 600; color: #555; vertical-align: top;">Email</td>
            <td style="padding: 8px 12px; color: #1a1a2e;">
              <a href="mailto:${escapeHtml(email)}" style="color: #c9a84c;">${escapeHtml(email)}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 8px 12px; font-weight: 600; color: #555; vertical-align: top;">Phone</td>
            <td style="padding: 8px 12px; color: #1a1a2e;">${phone ? escapeHtml(phone) : "<em style='color: #999;'>Not provided</em>"}</td>
          </tr>
          <tr style="background: #f8f8f8;">
            <td style="padding: 8px 12px; font-weight: 600; color: #555; vertical-align: top;">Category</td>
            <td style="padding: 8px 12px; color: #1a1a2e;">${caseType ? escapeHtml(caseType) : "<em style='color: #999;'>Not selected</em>"}</td>
          </tr>
        </table>
        <div style="background: #f8f8f8; border-left: 3px solid #c9a84c; padding: 16px; margin: 16px 0;">
          <p style="font-weight: 600; color: #555; margin: 0 0 8px 0;">Message</p>
          <p style="color: #1a1a2e; margin: 0; white-space: pre-wrap;">${escapeHtml(message)}</p>
        </div>
        ${
          smsConsent
            ? `<div style="border: 1px solid #2c6448; background: #f2f8f4; padding: 16px; margin: 16px 0;">
          <p style="font-weight: 600; color: #2c6448; margin: 0 0 8px 0;">SMS consent granted — retain this record</p>
          <table style="width: 100%; border-collapse: collapse; font-size: 13px; color: #1a1a2e;">
            <tr><td style="padding: 3px 0; font-weight: 600; width: 130px;">Number</td><td style="padding: 3px 0;">${escapeHtml(phone)}</td></tr>
            <tr><td style="padding: 3px 0; font-weight: 600;">Timestamp (UTC)</td><td style="padding: 3px 0;">${consentTimestamp}</td></tr>
            <tr><td style="padding: 3px 0; font-weight: 600;">Wording version</td><td style="padding: 3px 0;">${consentVersion}</td></tr>
            <tr><td style="padding: 3px 0; font-weight: 600; vertical-align: top;">Agreed to</td><td style="padding: 3px 0;">${escapeHtml(consentText)}</td></tr>
            <tr><td style="padding: 3px 0; font-weight: 600;">Source</td><td style="padding: 3px 0;">https://yonke.law/talk-to-us</td></tr>
          </table>
          <p style="font-size: 11px; color: #555; margin: 10px 0 0 0;">Log this against the matter in Filevine. Carriers can demand proof of consent for a specific number.</p>
        </div>`
            : `<div style="border: 1px solid #c9a84c; background: #fdfaf1; padding: 12px; margin: 16px 0;">
          <p style="font-size: 13px; color: #1a1a2e; margin: 0;"><strong>No SMS consent.</strong> Do not text this person. Phone and email only.</p>
        </div>`
        }
        <p style="font-size: 12px; color: #999; margin-top: 24px;">
          Submitted via yonke.law Talk to Us form. Reply goes to the person who submitted.
        </p>
      </div>
    `;

    try {
      const res = await fetch("/api/send-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: ["mike@yonke.law", "jyonke@yonke.law", "michelle@yonke.law"],
          subject: `New Inquiry: ${name} — ${caseType || "General"}${smsConsent ? " [SMS OK]" : ""}`,
          body: htmlBody,
        }),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.detail || "Failed to send message");
      }

      setState("sent");
      form.reset();
    } catch (err) {
      setState("error");
      setErrorMsg(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please call 816-221-6400 instead."
      );
    }
  }

  // ── Success state ──────────────────────────────────────────────────────────

  if (state === "sent") {
    return (
      <div className="bg-deep-forest/10 border border-deep-forest/30 rounded-lg p-8 text-center">
        <div className="text-4xl mb-4">✓</div>
        <h3 className="font-display text-xl text-chrome-highlight mb-2">
          Message sent.
        </h3>
        <p className="text-steel-silver leading-relaxed mb-6">
          Mike or Janell will review your inquiry — usually the same business
          day. If it&apos;s urgent, call{" "}
          <a
            href="tel:+18162216400"
            className="text-muted-gold hover:underline"
          >
            816-221-6400
          </a>{" "}
          directly.
        </p>
        <button
          onClick={() => setState("idle")}
          className="text-muted-gold hover:text-chrome-highlight transition-colors text-sm"
        >
          Send another message →
        </button>
      </div>
    );
  }

  // ── Form state ─────────────────────────────────────────────────────────────

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm text-steel-silver mb-2"
          >
            Your name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full bg-obsidian-graphite border border-steel-silver/20 rounded-lg px-4 py-3 text-chrome-highlight placeholder:text-steel-silver/40 focus:outline-none focus:border-muted-gold/50 transition-colors"
            placeholder="First and last name"
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm text-steel-silver mb-2"
          >
            Phone number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full bg-obsidian-graphite border border-steel-silver/20 rounded-lg px-4 py-3 text-chrome-highlight placeholder:text-steel-silver/40 focus:outline-none focus:border-muted-gold/50 transition-colors"
            placeholder="(xxx) xxx-xxxx"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm text-steel-silver mb-2"
        >
          Email address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full bg-obsidian-graphite border border-steel-silver/20 rounded-lg px-4 py-3 text-chrome-highlight placeholder:text-steel-silver/40 focus:outline-none focus:border-muted-gold/50 transition-colors"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label
          htmlFor="case-type"
          className="block text-sm text-steel-silver mb-2"
        >
          What happened?
        </label>
        <select
          id="case-type"
          name="case_type"
          className="w-full bg-obsidian-graphite border border-steel-silver/20 rounded-lg px-4 py-3 text-chrome-highlight focus:outline-none focus:border-muted-gold/50 transition-colors"
        >
          <option value="">Select a category</option>
          <option value="Car Accident">Car Accident</option>
          <option value="Truck Accident">Truck Accident</option>
          <option value="Motorcycle Accident">Motorcycle Accident</option>
          <option value="Medical Malpractice">Medical Malpractice</option>
          <option value="Wrongful Death">Wrongful Death</option>
          <option value="Nursing Home Abuse/Neglect">Nursing Home Abuse/Neglect</option>
          <option value="Workplace Injury">Workplace Injury</option>
          <option value="Slip and Fall / Premises">Slip and Fall / Premises</option>
          <option value="Defective Product">Defective Product</option>
          <option value="Pedestrian / Bicycle">Pedestrian / Bicycle</option>
          <option value="Other / Not sure">Other / Not sure</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm text-steel-silver mb-2"
        >
          Tell us what happened
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full bg-obsidian-graphite border border-steel-silver/20 rounded-lg px-4 py-3 text-chrome-highlight placeholder:text-steel-silver/40 focus:outline-none focus:border-muted-gold/50 transition-colors resize-y"
          placeholder="Share as much or as little as you're comfortable with. Everything is confidential."
        />
      </div>

      <TalkToUsFileInput />

      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="sms-consent"
          name="sms_consent"
          className="mt-1 h-4 w-4 flex-none rounded-sm border border-steel-silver/40 bg-obsidian-graphite accent-muted-gold focus:outline-none focus:ring-2 focus:ring-muted-gold/50"
        />
        <label
          htmlFor="sms-consent"
          className="text-steel-silver/80 text-xs leading-relaxed"
        >
          I agree to receive text messages from Yonke Law about my inquiry and my
          case. Message frequency varies. Message and data rates may apply. Reply
          STOP to opt out or HELP for help. See our{" "}
          <a
            href="/privacy-policy"
            className="text-muted-gold hover:text-chrome-highlight transition-colors underline"
          >
            Privacy Policy
          </a>
          . Optional — you can send this form without agreeing.
        </label>
      </div>

      {state === "error" && errorMsg && (
        <div className="bg-signal-red/10 border border-signal-red/30 rounded-lg p-4">
          <p className="text-signal-red text-sm">
            {errorMsg}
          </p>
          <p className="text-steel-silver/60 text-xs mt-2">
            You can also call us directly at{" "}
            <a href="tel:+18162216400" className="text-muted-gold">
              816-221-6400
            </a>
          </p>
        </div>
      )}

      <button
        type="submit"
        disabled={state === "sending"}
        className="bg-muted-gold text-obsidian-graphite font-semibold px-8 py-4 rounded hover:bg-muted-gold/90 transition-colors w-full sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {state === "sending" ? "Sending…" : "Send Message"}
      </button>

      <p className="text-steel-silver/60 text-xs leading-relaxed">
        By submitting this form, you are not establishing an attorney-client
        relationship. All information is kept confidential and used only to
        evaluate your inquiry.
      </p>
    </form>
  );
}

/** Escape HTML to prevent XSS in email body */
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
