/**
 * Lead Docket webhook — POST /api/lead-docket
 *
 * Receives a website form submission from our own forms and forwards it to
 * Lead Docket's JSON form endpoint (integration "formjson/2") as a POST.
 * Runs server-side so the Lead Docket URL is called without browser CORS
 * limits and the consent record is stamped with server time and IP.
 *
 * Field names sent to Lead Docket (each must exist as a Form Field with
 * Accept Data = Yes on the Lead Docket integration's Definitions page):
 *   first_name, last_name, phone, email, case_type, summary,
 *   sms_consent, sms_consent_language, sms_consent_timestamp,
 *   source_page, page_url, ip_address
 *
 * Optional env var: LEAD_DOCKET_URL (overrides the default endpoint).
 */

import { NextRequest, NextResponse } from "next/server";
import { SMS_CONSENT_TEXT } from "@/lib/sms-consent";

const DEFAULT_URL = "https://yonke-law.leaddocket.com/opportunities/formjson/2";

function clean(v: unknown, max = 5000): string {
  return typeof v === "string" ? v.trim().slice(0, max) : "";
}

function splitName(full: string): { first: string; last: string } {
  const parts = full.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return { first: "", last: "" };
  if (parts.length === 1) return { first: parts[0], last: "" };
  return { first: parts.slice(0, -1).join(" "), last: parts[parts.length - 1] };
}

export async function POST(request: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  let first = clean(body.firstName, 100);
  let last = clean(body.lastName, 100);
  if (!first && !last) {
    const split = splitName(clean(body.name, 200));
    first = split.first;
    last = split.last;
  }
  const email = clean(body.email, 200);
  const phone = clean(body.phone, 40);

  if (!first || (!email && !phone)) {
    return NextResponse.json(
      { error: "Invalid lead", detail: "Name and an email or phone are required." },
      { status: 400 }
    );
  }

  const smsConsent = body.smsConsent === true;
  const ip =
    request.headers.get("x-nf-client-connection-ip") ||
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
    "";

  const payload = {
    first_name: first,
    last_name: last,
    phone,
    email,
    case_type: clean(body.caseType, 100),
    summary: clean(body.message),
    sms_consent: smsConsent ? "Yes" : "No",
    sms_consent_language: smsConsent ? SMS_CONSENT_TEXT : "",
    sms_consent_timestamp: smsConsent ? new Date().toISOString() : "",
    source_page: clean(body.source, 120),
    page_url: clean(body.pageUrl, 500),
    ip_address: ip,
  };

  try {
    const res = await fetch(process.env.LEAD_DOCKET_URL || DEFAULT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      const text = await res.text().catch(() => "");
      console.error("[lead-docket] rejected", res.status, text.slice(0, 500));
      return NextResponse.json(
        { error: "Lead Docket rejected the submission", status: res.status },
        { status: 502 }
      );
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[lead-docket] request failed", err);
    return NextResponse.json({ error: "Lead Docket unreachable" }, { status: 502 });
  }
}
