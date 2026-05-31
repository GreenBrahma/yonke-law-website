"use client";

import { useState, type FormEvent, type ChangeEvent } from "react";

type FormState = "idle" | "sending" | "sent" | "error";

const STAR_LABELS = ["Poor", "Fair", "Good", "Great", "Excellent"];

export function TestimonialForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [stars, setStars] = useState(0);
  const [hoverStar, setHoverStar] = useState(0);
  const [thumbs, setThumbs] = useState<"up" | "down" | null>(null);
  const [fileName, setFileName] = useState("");
  const [consent, setConsent] = useState(false);

  function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    setFileName(file ? file.name : "");
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);

    const name = (data.get("testimonial_name") as string) || "Anonymous";
    const email = data.get("testimonial_email") as string;
    const note = data.get("testimonial_note") as string;

    const htmlBody = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px;">
        <h2 style="color: #1a1a2e; border-bottom: 2px solid #c9a84c; padding-bottom: 8px;">
          New Testimonial / Recommendation
        </h2>
        <table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
          <tr>
            <td style="padding: 8px 12px; font-weight: 600; color: #555; width: 140px;">Name</td>
            <td style="padding: 8px 12px; color: #1a1a2e;">${name}</td>
          </tr>
          <tr style="background: #f8f8f8;">
            <td style="padding: 8px 12px; font-weight: 600; color: #555;">Google Stars</td>
            <td style="padding: 8px 12px; color: #1a1a2e;">${stars > 0 ? "★".repeat(stars) + " (" + stars + "/5)" : "Not rated"}</td>
          </tr>
          <tr>
            <td style="padding: 8px 12px; font-weight: 600; color: #555;">Facebook</td>
            <td style="padding: 8px 12px; color: #1a1a2e;">${thumbs === "up" ? "👍 Recommends" : thumbs === "down" ? "👎 Does not recommend" : "Not selected"}</td>
          </tr>
          <tr style="background: #f8f8f8;">
            <td style="padding: 8px 12px; font-weight: 600; color: #555;">Consent</td>
            <td style="padding: 8px 12px; color: #1a1a2e;">${consent ? "✅ Approved for social & promo use" : "❌ Not approved"}</td>
          </tr>
        </table>
        <div style="background: #f8f8f8; border-left: 3px solid #c9a84c; padding: 16px; margin: 16px 0;">
          <p style="font-weight: 600; color: #555; margin: 0 0 8px 0;">Testimonial</p>
          <p style="color: #1a1a2e; margin: 0; white-space: pre-wrap;">${note || "No note provided."}</p>
        </div>
        <p style="font-size: 12px; color: #999; margin-top: 24px;">
          Reply email: ${email}<br/>
          <em>Per privacy policy: this email address is single-use for notification only and will be deleted after delivery.</em>
        </p>
      </div>
    `;

    try {
      const res = await fetch("/api/send-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: ["mike@yonke.law", "myonke@yonke-law.com", "geoff@yonke.law"],
          subject: `New Testimonial: ${name} — ${stars > 0 ? stars + " Stars" : "Review"}`,
          body: htmlBody,
        }),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.detail || "Failed to send");
      }

      setState("sent");
      form.reset();
      setStars(0);
      setThumbs(null);
      setFileName("");
      setConsent(false);
    } catch (err) {
      setState("error");
      setErrorMsg(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please call 816-221-6400."
      );
    }
  }

  if (state === "sent") {
    return (
      <div className="bg-deep-forest/10 border border-deep-forest/30 rounded-lg p-8 text-center">
        <div className="text-4xl mb-4">🎉</div>
        <h3 className="font-display text-xl text-chrome-highlight mb-2">
          Thank you for your testimonial.
        </h3>
        <p className="text-steel-silver leading-relaxed mb-6">
          We&apos;ll notify you at the email you provided once your feedback is
          live. That email is then deleted — we don&apos;t keep it.
        </p>
        <button
          onClick={() => setState("idle")}
          className="text-muted-gold hover:text-chrome-highlight transition-colors text-sm"
        >
          Submit another →
        </button>
      </div>
    );
  }

  const inputClass =
    "w-full bg-obsidian-graphite border border-steel-silver/20 rounded-lg px-4 py-3 text-chrome-highlight placeholder:text-steel-silver/40 focus:outline-none focus:border-muted-gold/50 transition-colors";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Star rating — Google */}
      <div>
        <p className="text-sm text-steel-silver mb-2">
          Rate your experience{" "}
          <span className="text-steel-silver/50">(Google)</span>
        </p>
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => setStars(n)}
              onMouseEnter={() => setHoverStar(n)}
              onMouseLeave={() => setHoverStar(0)}
              className="text-3xl transition-transform hover:scale-110 focus:outline-none"
              aria-label={`${n} star — ${STAR_LABELS[n - 1]}`}
            >
              <span
                className={
                  n <= (hoverStar || stars)
                    ? "text-muted-gold"
                    : "text-steel-silver/30"
                }
              >
                ★
              </span>
            </button>
          ))}
          {stars > 0 && (
            <span className="text-sm text-muted-gold ml-2">
              {STAR_LABELS[stars - 1]}
            </span>
          )}
        </div>
      </div>

      {/* Thumbs — Facebook */}
      <div>
        <p className="text-sm text-steel-silver mb-2">
          Do you recommend Yonke Law?{" "}
          <span className="text-steel-silver/50">(Facebook)</span>
        </p>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => setThumbs(thumbs === "up" ? null : "up")}
            className={`flex items-center gap-2 px-5 py-3 rounded-lg border transition-colors ${
              thumbs === "up"
                ? "border-muted-gold bg-muted-gold/10 text-muted-gold"
                : "border-steel-silver/20 text-steel-silver hover:border-muted-gold/50"
            }`}
          >
            <span className="text-xl">👍</span> Yes
          </button>
          <button
            type="button"
            onClick={() => setThumbs(thumbs === "down" ? null : "down")}
            className={`flex items-center gap-2 px-5 py-3 rounded-lg border transition-colors ${
              thumbs === "down"
                ? "border-signal-red bg-signal-red/10 text-signal-red"
                : "border-steel-silver/20 text-steel-silver hover:border-steel-silver/40"
            }`}
          >
            <span className="text-xl">👎</span> No
          </button>
        </div>
      </div>

      {/* Name (optional) */}
      <div>
        <label htmlFor="testimonial_name" className="block text-sm text-steel-silver mb-2">
          Your name <span className="text-steel-silver/50">(optional)</span>
        </label>
        <input
          type="text"
          id="testimonial_name"
          name="testimonial_name"
          className={inputClass}
          placeholder="First and last name"
        />
      </div>

      {/* Testimonial note */}
      <div>
        <label htmlFor="testimonial_note" className="block text-sm text-steel-silver mb-2">
          Your experience
        </label>
        <textarea
          id="testimonial_note"
          name="testimonial_note"
          rows={5}
          className={`${inputClass} resize-y`}
          placeholder="Tell us about your experience working with Yonke Law..."
        />
      </div>

      {/* File upload */}
      <div>
        <label htmlFor="testimonial_file" className="block text-sm text-steel-silver mb-2">
          Upload a photo or video{" "}
          <span className="text-steel-silver/50">(optional — PDF, image, or video)</span>
        </label>
        <div className="relative">
          <input
            type="file"
            id="testimonial_file"
            name="testimonial_file"
            accept=".pdf,.jpg,.jpeg,.png,.gif,.mp4,.mov,.avi,.webm"
            onChange={handleFileChange}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
          <div className="bg-obsidian-graphite border border-dashed border-steel-silver/30 rounded-lg px-4 py-4 text-sm text-steel-silver flex items-center gap-3 hover:border-muted-gold/50 transition-colors">
            <span className="text-xl">📎</span>
            {fileName || "Click to choose a file"}
          </div>
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="testimonial_email" className="block text-sm text-steel-silver mb-2">
          Email address
        </label>
        <input
          type="email"
          id="testimonial_email"
          name="testimonial_email"
          required
          className={inputClass}
          placeholder="you@example.com"
        />
        <p className="text-steel-silver/40 text-xs mt-1.5 leading-relaxed">
          One-time use only — we alert you when your feedback is live. Once the
          email is delivered, this address is deleted and the file is erased.
        </p>
      </div>

      {/* Consent checkbox */}
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="testimonial_consent"
          name="testimonial_consent"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-1 accent-muted-gold"
        />
        <label
          htmlFor="testimonial_consent"
          className="text-steel-silver/60 text-xs leading-relaxed"
        >
          I approve the use of my testimonial on Yonke Law social media
          accounts and promotional material. This content will only be used for
          Yonke Law promotional purposes.
        </label>
      </div>

      {state === "error" && errorMsg && (
        <div className="bg-signal-red/10 border border-signal-red/30 rounded-lg p-4">
          <p className="text-signal-red text-sm">{errorMsg}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={state === "sending"}
        className="bg-muted-gold text-obsidian-graphite font-semibold px-8 py-4 rounded hover:bg-muted-gold/90 transition-colors w-full sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {state === "sending" ? "Sending…" : "Submit Testimonial"}
      </button>
    </form>
  );
}
