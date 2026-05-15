/**
 * Spotlight Corner — Audit Logger
 *
 * Immutable audit trail for every pipeline action.
 * Every signal, score, verification, draft, approval, rejection,
 * and publish event is logged here and NEVER deleted.
 *
 * Usage:
 *   import { logAudit } from "@/lib/spotlight/audit";
 *   await logAudit({
 *     eventType: "ingest",
 *     signalId: signal.id,
 *     actor: "system:nws-listener",
 *     details: { source: "nws", alertCount: 3 },
 *   });
 */

import { db } from "@/db/client";
import { spotlightAuditLog } from "@/db/schema/spotlight";

export type AuditEventType =
  | "ingest"
  | "score"
  | "verify"
  | "draft"
  | "approve"
  | "reject"
  | "publish"
  | "schedule"
  | "promote"
  | "source-error"
  | "source-pull";

export interface AuditEntry {
  eventType: AuditEventType;
  signalId?: string;
  draftId?: string;
  actor: string;
  details?: Record<string, unknown>;
}

/**
 * Write an immutable audit log entry.
 * Never throws — swallows errors and logs to console to avoid
 * breaking the pipeline over an audit write failure.
 */
export async function logAudit(entry: AuditEntry): Promise<void> {
  try {
    await db.insert(spotlightAuditLog).values({
      eventType: entry.eventType,
      signalId: entry.signalId ?? null,
      draftId: entry.draftId ?? null,
      actor: entry.actor,
      details: entry.details ?? null,
    });
  } catch (error) {
    // Audit failures must not break the pipeline, but they must be visible.
    console.error("[spotlight:audit] Failed to write audit log:", error);
    console.error("[spotlight:audit] Entry that failed:", JSON.stringify(entry));
  }
}
