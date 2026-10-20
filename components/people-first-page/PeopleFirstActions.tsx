"use client";

import { useState, type FormEvent } from "react";
import { SmsConsent } from "@/components/SmsConsent";
import { sendToLeadDocket } from "@/lib/lead-docket";

type FormState = "idle" | "sending" | "sent" | "error";
type ActiveForm = "none" | "contact" | "schedule";

/**
 * People First Portal — Contact & Schedule Section
 *
 * Replaces the "Walk Through It" placeholder with:
 * 1. Quick contact form → /api/send-mail (mike@ + jyonke@ + michelle@)
 * 2. Schedule consultation form → /api/calendar/create-event + /api/send-mail
 */
export function PeopleFirstActions() {
  const [activeForm, setActiveForm] = useState<ActiveForm>("none");
  const [contactState, setContactState] = useState<FormState>("idle");
  const [scheduleState, setScheduleState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  // ── Contact form submit ─────────────────────────────────────────────────

  async function handleContactSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setContactState("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const phone = data.get("phone") as string;
    const message = data.get("message") as string;
    const smsConsent = data.get("sms_consent") === "yes";

    const htmlBody = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px;">
        <h2 style="color: #1a1a2e; border-bottom: 2px solid #c9a84c; padding-bottom: 8px;">
          People First Portal — New Contact Request
        </h2>
        <table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
          <tr>
            <td style="padding: 8px 12px; font-weight: 600; color: #555; width: 120px;">Name</td>
            <td style="padding: 8px 12px; color: #1a1a2e;">${escapeHtml(name)}</td>
          </tr>
          <tr style="background: #f8f8f8;">
            <td style="padding: 8px 12px; font-weight: 600; color: #555;">Email</td>
            <td style="padding: 8px 12px;"><a href="mailto:${escapeHtml(email)}" style="color: #c9a84c;">${escapeHtml(email)}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 12px; font-weight: 600; color: #555;">Phone</td>
            <td style="padding: 8px 12px;">${phone ? escapeHtml(phone) : "<em style='color: #999;'>Not provided</em>"}</td>
          </tr>
          <tr style="background: #f8f8f8;">
            <td style="padding: 8px 12px; font-weight: 600; color: #555;">SMS consent</td>
            <td style="padding: 8px 12px;">${smsConsent ? "Yes, opted in to customer care texts" : "No"}</td>
          </tr>
        </table>
        <div style="background: #f8f8f8; border-left: 3px solid #c9a84c; padding: 16px; margin: 16px 0;">
          <p style="font-weight: 600; color: #555; margin: 0 0 8px 0;">Message</p>
          <p style="color: #1a1a2e; margin: 0; white-space: pre-wrap;">${escapeHtml(message)}</p>
        </div>
        <p style="font-size: 12px; color: #999;">Submitted via People First Portal page.</p>
      </div>
    `;

    const leadDocket = sendToLeadDocket({
      name,
      phone,
      email,
      message,
      smsConsent,
      source: "People First: contact form",
    });

    try {
      const res = await fetch("/api/send-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: ["mike@yonke.law", "jyonke@yonke.law", "michelle@yonke.law"],
          subject: `People First Inquiry: ${name}`,
          body: htmlBody,
        }),
      });

      if (!res.ok && !(await leadDocket)) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.detail || "Failed to send");
      }

      setContactState("sent");
      form.reset();
    } catch (err) {
      setContactState("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  // ── Schedule form submit ────────────────────────────────────────────────

  async function handleScheduleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setScheduleState("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const phone = data.get("phone") as string;
    const date = data.get("date") as string;
    const time = data.get("time") as string;
    const notes = data.get("notes") as string;
    const smsConsent = data.get("sms_consent") === "yes";

    // Build start/end in Central Time
    const startISO = `${date}T${time}:00-05:00`;
    const startDate = new Date(startISO);
    const endDate = new Date(startDate.getTime() + 30 * 60 * 1000); // 30 min default

    sendToLeadDocket({
      name,
      phone,
      email,
      message: `Requested consultation: ${date} at ${time} CT.${notes ? ` Notes: ${notes}` : ""}`,
      smsConsent,
      source: "People First: schedule consultation",
    });

    try {
      // Create calendar event
      const calRes = await fetch("/api/calendar/create-event", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          subject: `People First Consultation — ${name}`,
          start: startDate.toISOString(),
          end: endDate.toISOString(),
          attendees: [email],
          body: `<p><strong>Name:</strong> ${escapeHtml(name)}</p><p><strong>Phone:</strong> ${phone ? escapeHtml(phone) : "Not provided"}</p><p><strong>Notes:</strong> ${notes ? escapeHtml(notes) : "None"}</p>`,
        }),
      });

      if (!calRes.ok) {
        const err = await calRes.json();
        throw new Error(err.detail || "Failed to create calendar event");
      }

      // Send notification email
      const formattedDate = new Date(startISO).toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
      });

      await fetch("/api/send-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: ["mike@yonke.law", "jyonke@yonke.law", "michelle@yonke.law"],
          subject: `Consultation Scheduled: ${name} — ${formattedDate} at ${time}`,
          body: `
            <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px;">
              <h2 style="color: #1a1a2e; border-bottom: 2px solid #c9a84c; padding-bottom: 8px;">
                People First — Consultation Scheduled
              </h2>
              <table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
                <tr><td style="padding: 8px 12px; font-weight: 600; color: #555; width: 120px;">Name</td><td style="padding: 8px 12px;">${escapeHtml(name)}</td></tr>
                <tr style="background: #f8f8f8;"><td style="padding: 8px 12px; font-weight: 600; color: #555;">Email</td><td style="padding: 8px 12px;"><a href="mailto:${escapeHtml(email)}" style="color: #c9a84c;">${escapeHtml(email)}</a></td></tr>
                <tr><td style="padding: 8px 12px; font-weight: 600; color: #555;">Phone</td><td style="padding: 8px 12px;">${phone ? escapeHtml(phone) : "Not provided"}</td></tr>
                <tr style="background: #f8f8f8;"><td style="padding: 8px 12px; font-weight: 600; color: #555;">SMS consent</td><td style="padding: 8px 12px;">${smsConsent ? "Yes, opted in to customer care texts" : "No"}</td></tr>
                <tr style="background: #f8f8f8;"><td style="padding: 8px 12px; font-weight: 600; color: #555;">Date</td><td style="padding: 8px 12px;">${formattedDate}</td></tr>
                <tr><td style="padding: 8px 12px; font-weight: 600; color: #555;">Time</td><td style="padding: 8px 12px;">${time} CT</td></tr>
              </table>
              ${notes ? `<div style="background: #f8f8f8; border-left: 3px solid #c9a84c; padding: 16px; margin: 16px 0;"><p style="font-weight: 600; color: #555; margin: 0 0 8px;">Notes</p><p style="color: #1a1a2e; margin: 0;">${escapeHtml(notes)}</p></div>` : ""}
              <p style="font-size: 12px; color: #999;">Calendar event created automatically. Submitted via People First Portal.</p>
            </div>
          `,
        }),
      });

      setScheduleState("sent");
      form.reset();
    } catch (err) {
      setScheduleState("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  // ── Render ──────────────────────────────────────────────────────────────

  return (
    <section
      id="people-first-actions"
      className="bg-obsidian-graphite py-20 px-4 lg:px-8 border-y border-steel-silver/10"
    >
      <div className="mx-auto max-w-4xl">
        <h2 className="font-display text-2xl md:text-3xl text-chrome-highlight text-center mb-4">
          Get Started with People First
        </h2>
        <p className="text-lg text-steel-silver text-center mb-12 max-w-2xl mx-auto leading-relaxed">
          Reach out directly or schedule a free consultation. Mike or Janell
          will respond — usually the same business day.
        </p>

        {/* Action cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <button
            onClick={() => {
              setActiveForm(activeForm === "contact" ? "none" : "contact");
              setContactState("idle");
              setErrorMsg("");
            }}
            className={`text-left bg-charcoal-slate border rounded-lg p-6 transition-all duration-200 hover:border-muted-gold ${
              activeForm === "contact"
                ? "border-muted-gold"
                : "border-steel-silver/15"
            }`}
          >
            <div className="text-2xl mb-3">✉</div>
            <h3 className="font-display text-lg text-chrome-highlight mb-2">
              Send a Message
            </h3>
            <p className="text-steel-silver text-sm leading-relaxed">
              Tell us what happened. All information is confidential.
            </p>
          </button>

          <button
            onClick={() => {
              setActiveForm(activeForm === "schedule" ? "none" : "schedule");
              setScheduleState("idle");
              setErrorMsg("");
            }}
            className={`text-left bg-charcoal-slate border rounded-lg p-6 transition-all duration-200 hover:border-muted-gold ${
              activeForm === "schedule"
                ? "border-muted-gold"
                : "border-steel-silver/15"
            }`}
          >
            <div className="text-2xl mb-3">📅</div>
            <h3 className="font-display text-lg text-chrome-highlight mb-2">
              Schedule a Consultation
            </h3>
            <p className="text-steel-silver text-sm leading-relaxed">
              Pick a time. We&apos;ll add it to Mike&apos;s calendar and
              confirm.
            </p>
          </button>
        </div>

        {/* Contact Form */}
        {activeForm === "contact" && (
          <div className="bg-charcoal-slate border border-steel-silver/15 rounded-lg p-8 animate-in fade-in duration-300">
            {contactState === "sent" ? (
              <div className="text-center py-8">
                <div className="text-4xl mb-4">✓</div>
                <h3 className="font-display text-xl text-chrome-highlight mb-2">
                  Message sent.
                </h3>
                <p className="text-steel-silver leading-relaxed mb-4">
                  Mike or Janell will review your message — usually the same
                  business day.
                </p>
                <button
                  onClick={() => setContactState("idle")}
                  className="text-muted-gold hover:text-chrome-highlight transition-colors text-sm"
                >
                  Send another message →
                </button>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="pf-name"
                      className="block text-sm text-steel-silver mb-1.5"
                    >
                      Your name
                    </label>
                    <input
                      type="text"
                      id="pf-name"
                      name="name"
                      required
                      className="w-full bg-obsidian-graphite border border-steel-silver/20 rounded-lg px-4 py-3 text-chrome-highlight placeholder:text-steel-silver/40 focus:outline-none focus:border-muted-gold/50 transition-colors"
                      placeholder="First and last name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="pf-phone"
                      className="block text-sm text-steel-silver mb-1.5"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="pf-phone"
                      name="phone"
                      className="w-full bg-obsidian-graphite border border-steel-silver/20 rounded-lg px-4 py-3 text-chrome-highlight placeholder:text-steel-silver/40 focus:outline-none focus:border-muted-gold/50 transition-colors"
                      placeholder="(xxx) xxx-xxxx"
                    />
                  </div>
                </div>
                <SmsConsent id="pf-phone-sms" />
                <div>
                  <label
                    htmlFor="pf-email"
                    className="block text-sm text-steel-silver mb-1.5"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="pf-email"
                    name="email"
                    required
                    className="w-full bg-obsidian-graphite border border-steel-silver/20 rounded-lg px-4 py-3 text-chrome-highlight placeholder:text-steel-silver/40 focus:outline-none focus:border-muted-gold/50 transition-colors"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="pf-message"
                    className="block text-sm text-steel-silver mb-1.5"
                  >
                    What happened?
                  </label>
                  <textarea
                    id="pf-message"
                    name="message"
                    rows={4}
                    required
                    className="w-full bg-obsidian-graphite border border-steel-silver/20 rounded-lg px-4 py-3 text-chrome-highlight placeholder:text-steel-silver/40 focus:outline-none focus:border-muted-gold/50 transition-colors resize-y"
                    placeholder="Share as much as you're comfortable with. Everything is confidential."
                  />
                </div>

                {contactState === "error" && errorMsg && (
                  <p className="text-signal-red text-sm">{errorMsg}</p>
                )}

                <button
                  type="submit"
                  disabled={contactState === "sending"}
                  className="bg-muted-gold text-obsidian-graphite font-semibold px-8 py-3 rounded hover:bg-muted-gold/90 transition-colors disabled:opacity-60"
                >
                  {contactState === "sending" ? "Sending…" : "Send Message"}
                </button>
              </form>
            )}
          </div>
        )}

        {/* Schedule Form */}
        {activeForm === "schedule" && (
          <div className="bg-charcoal-slate border border-steel-silver/15 rounded-lg p-8 animate-in fade-in duration-300">
            {scheduleState === "sent" ? (
              <div className="text-center py-8">
                <div className="text-4xl mb-4">📅</div>
                <h3 className="font-display text-xl text-chrome-highlight mb-2">
                  Consultation scheduled.
                </h3>
                <p className="text-steel-silver leading-relaxed mb-4">
                  A calendar invite has been sent. Mike or Janell will confirm
                  before your scheduled time.
                </p>
                <button
                  onClick={() => setScheduleState("idle")}
                  className="text-muted-gold hover:text-chrome-highlight transition-colors text-sm"
                >
                  Schedule another →
                </button>
              </div>
            ) : (
              <form onSubmit={handleScheduleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="sch-name"
                      className="block text-sm text-steel-silver mb-1.5"
                    >
                      Your name
                    </label>
                    <input
                      type="text"
                      id="sch-name"
                      name="name"
                      required
                      className="w-full bg-obsidian-graphite border border-steel-silver/20 rounded-lg px-4 py-3 text-chrome-highlight placeholder:text-steel-silver/40 focus:outline-none focus:border-muted-gold/50 transition-colors"
                      placeholder="First and last name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="sch-phone"
                      className="block text-sm text-steel-silver mb-1.5"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="sch-phone"
                      name="phone"
                      className="w-full bg-obsidian-graphite border border-steel-silver/20 rounded-lg px-4 py-3 text-chrome-highlight placeholder:text-steel-silver/40 focus:outline-none focus:border-muted-gold/50 transition-colors"
                      placeholder="(xxx) xxx-xxxx"
                    />
                  </div>
                </div>
                <SmsConsent id="sch-phone-sms" />
                <div>
                  <label
                    htmlFor="sch-email"
                    className="block text-sm text-steel-silver mb-1.5"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="sch-email"
                    name="email"
                    required
                    className="w-full bg-obsidian-graphite border border-steel-silver/20 rounded-lg px-4 py-3 text-chrome-highlight placeholder:text-steel-silver/40 focus:outline-none focus:border-muted-gold/50 transition-colors"
                    placeholder="you@example.com"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="sch-date"
                      className="block text-sm text-steel-silver mb-1.5"
                    >
                      Preferred date
                    </label>
                    <input
                      type="date"
                      id="sch-date"
                      name="date"
                      required
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full bg-obsidian-graphite border border-steel-silver/20 rounded-lg px-4 py-3 text-chrome-highlight focus:outline-none focus:border-muted-gold/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="sch-time"
                      className="block text-sm text-steel-silver mb-1.5"
                    >
                      Preferred time (Central)
                    </label>
                    <select
                      id="sch-time"
                      name="time"
                      required
                      className="w-full bg-obsidian-graphite border border-steel-silver/20 rounded-lg px-4 py-3 text-chrome-highlight focus:outline-none focus:border-muted-gold/50 transition-colors"
                    >
                      <option value="">Select a time</option>
                      <option value="08:00">8:00 AM</option>
                      <option value="08:30">8:30 AM</option>
                      <option value="09:00">9:00 AM</option>
                      <option value="09:30">9:30 AM</option>
                      <option value="10:00">10:00 AM</option>
                      <option value="10:30">10:30 AM</option>
                      <option value="11:00">11:00 AM</option>
                      <option value="11:30">11:30 AM</option>
                      <option value="12:00">12:00 PM</option>
                      <option value="12:30">12:30 PM</option>
                      <option value="13:00">1:00 PM</option>
                      <option value="13:30">1:30 PM</option>
                      <option value="14:00">2:00 PM</option>
                      <option value="14:30">2:30 PM</option>
                      <option value="15:00">3:00 PM</option>
                      <option value="15:30">3:30 PM</option>
                      <option value="16:00">4:00 PM</option>
                      <option value="16:30">4:30 PM</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="sch-notes"
                    className="block text-sm text-steel-silver mb-1.5"
                  >
                    Anything you want us to know beforehand?{" "}
                    <span className="text-steel-silver/60">(optional)</span>
                  </label>
                  <textarea
                    id="sch-notes"
                    name="notes"
                    rows={3}
                    className="w-full bg-obsidian-graphite border border-steel-silver/20 rounded-lg px-4 py-3 text-chrome-highlight placeholder:text-steel-silver/40 focus:outline-none focus:border-muted-gold/50 transition-colors resize-y"
                    placeholder="Brief description, questions, or special requests."
                  />
                </div>

                {scheduleState === "error" && errorMsg && (
                  <p className="text-signal-red text-sm">{errorMsg}</p>
                )}

                <button
                  type="submit"
                  disabled={scheduleState === "sending"}
                  className="bg-muted-gold text-obsidian-graphite font-semibold px-8 py-3 rounded hover:bg-muted-gold/90 transition-colors disabled:opacity-60"
                >
                  {scheduleState === "sending"
                    ? "Scheduling…"
                    : "Schedule Consultation"}
                </button>

                <p className="text-steel-silver/60 text-xs leading-relaxed">
                  Free consultation. No commitment. All requested times are
                  subject to availability — we&apos;ll confirm before your
                  appointment.
                </p>
              </form>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
