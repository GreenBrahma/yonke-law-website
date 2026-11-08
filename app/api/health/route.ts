import { NextResponse } from "next/server";
import { sql } from "drizzle-orm";
import { db } from "@/db/client";

/* Health check for hosting monitors. Reports only ok/fail, never data. */
export const dynamic = "force-dynamic";

export async function GET() {
  const started = Date.now();
  try {
    await db.execute(sql`select 1`);
    return NextResponse.json({ site: "ok", database: "ok", ms: Date.now() - started });
  } catch {
    return NextResponse.json({ site: "ok", database: "unreachable" }, { status: 503 });
  }
}
