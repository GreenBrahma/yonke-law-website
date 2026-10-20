"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
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
    const smsConsent = data.get("sms_consent") === "yes";

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
            <td style="padding: 8px 12px; font-weight: 600; color: #555; vertical-align: top;">SMS consent</td>
            <td style="padding: 8px 12px; color: #1a1a2e;">${smsConsent ? "Yes, opted in to customer care texts" : "No"}</td>
          </tr>
          <tr>
            <td style="padding: 8px 12px; font-weight: 600; color: #555; vertical-align: top;">Category</td>
            <td style="padding: 8px 12px; color: #1a1a2e;">${caseType ? escapeHtml(caseType) : "<em style='color: #999;'>Not selected</em>"}</td>
          </tr>
        </table>
        <div style="background: #f8f8f8; border-left: 3px solid #c9a84c; padding: 16px; margin: 16px 0;">
          <p style="font-weight: 600; color: #555; margin: 0 0 8px 0;">Message</p>
          <p style="color: #1a1a2e; margin: 0; white-space: pre-wrap;">${escapeHtml(message)}</p>
        </div>
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
          subject: `New Inquiry: ${name} — ${caseType || "General"}`,
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

      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="sms_consent"
          name="sms_consent"
          value="yes"
          className="mt-1 h-4 w-4 shrink-0 accent-muted-gold"
        />
        <label
          htmlFor="sms_consent"
          className="text-steel-silver/80 text-xs leading-relaxed"
        >
          By checking the box, you are expressly consenting to receive customer
          care SMS communication from Yonke Law, LLC. Message and data rates may
          apply. Message frequency varies. To opt-out, reply STOP. For help,
          reply HELP. View our{" "}
          <Link href="/privacy-policy" className="text-muted-gold hover:underline">
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link href="/terms-and-conditions" className="text-muted-gold hover:underline">
            Terms of Service
          </Link>
          .
        </label>
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
