/**
 * Content Review — GET /command/api/content, POST /command/api/content
 *
 * Lives under /command so Cloudflare Access (email-code login) guards it.
 * The daily content plan itself is the static file /command/content-plan.json.
 * This route stores only what the reviewers change: edited wording, notes and
 * each entry's review status, with who set it and when. Everything is kept in
 * one small record in the YL_ACTIVITY KV namespace.
 *
 * Editing the wording of an approved entry returns it to "Not reviewed", so an
 * approval always refers to the text that was approved.
 */

import { NextRequest, NextResponse } from "next/server";
import { getCloudflareContext } from "@opennextjs/cloudflare";

export const dynamic = "force-dynamic";

type KV = {
  get(key: string): Promise<string | null>;
  put(key: string, value: string): Promise<void>;
};

const KEY = "content:review:v1";
const APPROVALS = ["Not reviewed", "Approved", "Needs change", "Skip"] as const;
type Approval = (typeof APPROVALS)[number];

type EntryState = {
  topic?: string;
  execution?: string;
  note?: string;
  approval?: Approval;
  by?: string; // who set the current status
  at?: string; // when the current status was set
  editedBy?: string;
  editedAt?: string;
};
type State = Record<string, EntryState>;

function kv(): KV {
  const { env } = getCloudflareContext();
  return (env as unknown as { YL_ACTIVITY: KV }).YL_ACTIVITY;
}

async function load(store: KV): Promise<State> {
  const raw = await store.get(KEY);
  if (!raw) return {};
  try {
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" ? (parsed as State) : {};
  } catch {
    return {};
  }
}

const DATE = /^20\d\d-\d\d-\d\d$/;
const text = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : undefined);

export async function GET(req: NextRequest) {
  const state = await load(kv());
  const me = req.headers.get("cf-access-authenticated-user-email") || "";
  return NextResponse.json({ ok: true, state, me });
}

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }
  const changes = Array.isArray(body.changes) ? body.changes.slice(0, 500) : [];
  if (!changes.length) return NextResponse.json({ ok: false, error: "Nothing to save." }, { status: 400 });

  const who = req.headers.get("cf-access-authenticated-user-email") || "unknown";
  const now = new Date().toISOString();
  const store = kv();
  const state = await load(store);
  const saved: State = {};

  for (const raw of changes) {
    if (!raw || typeof raw !== "object") continue;
    const c = raw as Record<string, unknown>;
    const date = typeof c.date === "string" && DATE.test(c.date) ? c.date : "";
    if (!date) continue;
    const cur: EntryState = { ...(state[date] || {}) };
    let wordingChanged = false;

    // An empty string puts the planned wording back.
    for (const field of ["topic", "execution"] as const) {
      const v = text(c[field], field === "topic" ? 300 : 1500);
      if (v === undefined) continue;
      if ((cur[field] || "") !== v) wordingChanged = true;
      if (v) cur[field] = v;
      else delete cur[field];
    }
    const note = text(c.note, 1000);
    if (note !== undefined) {
      if (note) cur.note = note;
      else delete cur.note;
    }
    if (wordingChanged) {
      cur.editedBy = who;
      cur.editedAt = now;
    }

    const approval = APPROVALS.find((a) => a === c.approval);
    if (approval) {
      cur.approval = approval;
      cur.by = who;
      cur.at = now;
    } else if (wordingChanged && cur.approval === "Approved") {
      cur.approval = "Not reviewed";
      cur.by = who;
      cur.at = now;
    }

    state[date] = cur;
    saved[date] = cur;
  }

  await store.put(KEY, JSON.stringify(state));
  return NextResponse.json({ ok: true, saved, me: who });
}
