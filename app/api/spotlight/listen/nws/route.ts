/**
 * Spotlight Corner — NWS Kansas City Alerts Listener
 *
 * Polls the National Weather Service API for active alerts in Missouri.
 * Endpoint: api.weather.gov/alerts/active?area=MO
 *
 * This is the first listener implemented because:
 * - Free, no API key required
 * - Well-documented JSON API
 * - 15-minute cadence (most frequent)
 * - Produces structured data that maps cleanly to the Signal schema
 *
 * Triggered by: Netlify Scheduled Function (15 min cadence)
 * Can also be triggered manually via GET /api/spotlight/listen/nws
 */

import { NextResponse } from "next/server";
import { db } from "@/db/client";
import { spotlightSignals } from "@/db/schema/spotlight";
import { logAudit } from "@/lib/spotlight/audit";
import {
  SPOTLIGHT_USER_AGENT,
  recordSourceSuccess,
  recordSourceError,
} from "@/lib/spotlight/sources";
import { contentHash } from "@/lib/spotlight/contracts";
import { eq } from "drizzle-orm";

// ─── NWS API types ────────────────────────────────────────────────────────────

interface NWSAlert {
  id: string;
  type: string;
  properties: {
    id: string;
    areaDesc: string;
    sent: string;
    effective: string;
    onset: string | null;
    expires: string;
    ends: string | null;
    status: string;
    messageType: string;
    category: string;
    severity: string;
    certainty: string;
    urgency: string;
    event: string;
    sender: string;
    senderName: string;
    headline: string | null;
    description: string;
    instruction: string | null;
    response: string;
    parameters: Record<string, string[]>;
  };
}

interface NWSResponse {
  type: string;
  features: NWSAlert[];
  title: string;
  updated: string;
}

// ─── KC Metro area filter ─────────────────────────────────────────────────────

/**
 * Kansas City metro area counties and independent cities.
 * Used to filter NWS alerts to KC-relevant geography.
 */
const KC_METRO_AREAS = [
  "jackson",
  "clay",
  "platte",
  "cass",
  "ray",
  "lafayette",
  "johnson",    // KS side
  "wyandotte",  // KS side
  "leavenworth",// KS side
  "kansas city",
  "independence",
  "lee's summit",
  "blue springs",
  "liberty",
  "gladstone",
  "raytown",
  "grandview",
  "belton",
  "overland park",
  "olathe",
];

function isKCMetroRelevant(areaDesc: string): boolean {
  const lower = areaDesc.toLowerCase();
  return KC_METRO_AREAS.some((area) => lower.includes(area));
}

// ─── Severity mapping ─────────────────────────────────────────────────────────

type SeverityTag = "fatality" | "hospitalization" | "multi-victim" | "single-injury" | "complaint" | "systemic";

function mapNWSSeverity(
  severity: string,
  event: string
): SeverityTag | undefined {
  const eventLower = event.toLowerCase();

  // Tornado and flash flood warnings are highest severity
  if (
    eventLower.includes("tornado warning") ||
    eventLower.includes("flash flood warning")
  ) {
    return "multi-victim";
  }

  if (severity === "Extreme") return "multi-victim";
  if (severity === "Severe") return "single-injury";
  if (severity === "Moderate") return "complaint";
  return "complaint";
}

// ─── Route handler ────────────────────────────────────────────────────────────

export async function GET() {
  const SOURCE_ID = "nws";
  const ENDPOINT = "https://api.weather.gov/alerts/active?area=MO";

  try {
    // Fetch NWS alerts
    const response = await fetch(ENDPOINT, {
      headers: {
        "User-Agent": SPOTLIGHT_USER_AGENT,
        Accept: "application/geo+json",
      },
      next: { revalidate: 0 }, // no cache
    });

    if (!response.ok) {
      const errorMsg = `NWS API returned ${response.status}: ${response.statusText}`;
      await recordSourceError(SOURCE_ID, errorMsg);
      await logAudit({
        eventType: "source-error",
        actor: `system:${SOURCE_ID}-listener`,
        details: { error: errorMsg, status: response.status },
      });
      return NextResponse.json(
        { error: errorMsg },
        { status: 502 }
      );
    }

    const data: NWSResponse = await response.json();
    const alerts = data.features || [];

    // Filter to KC metro area
    const kcAlerts = alerts.filter((alert) =>
      isKCMetroRelevant(alert.properties.areaDesc)
    );

    let ingested = 0;
    let skippedDuplicate = 0;

    for (const alert of kcAlerts) {
      const props = alert.properties;
      const rawContent = JSON.stringify(props);
      const hash = await contentHash(rawContent);

      // Dedup check — skip if we already have this exact content
      const existing = await db
        .select({ id: spotlightSignals.id })
        .from(spotlightSignals)
        .where(eq(spotlightSignals.rawContentHash, hash))
        .limit(1);

      if (existing.length > 0) {
        skippedDuplicate++;
        continue;
      }

      // Extract entities from the alert
      const normalizedEntities = {
        orgs: [props.senderName].filter(Boolean),
        people: [] as string[],
        places: props.areaDesc.split(";").map((s) => s.trim()),
      };

      // Map to signal and insert
      await db.insert(spotlightSignals).values({
        sourceId: SOURCE_ID,
        sourceUrl: props.id || ENDPOINT,
        sourceRetrievedAt: new Date(),
        rawContent,
        rawContentHash: hash,
        normalizedEntities,
        location: {
          neighborhood: props.areaDesc,
        },
        eventTime: props.onset ? new Date(props.onset) : new Date(props.effective),
        status: "ingested",
        topicTags: [],
        severityTag: mapNWSSeverity(props.severity, props.event),
        geographyTags: {
          neighborhood: props.areaDesc,
        },
      });

      ingested++;
    }

    // Record success and audit
    await recordSourceSuccess(SOURCE_ID);
    await logAudit({
      eventType: "ingest",
      actor: `system:${SOURCE_ID}-listener`,
      details: {
        totalAlerts: alerts.length,
        kcRelevant: kcAlerts.length,
        ingested,
        skippedDuplicate,
      },
    });

    return NextResponse.json({
      source: SOURCE_ID,
      totalAlerts: alerts.length,
      kcRelevant: kcAlerts.length,
      ingested,
      skippedDuplicate,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    const errorMsg =
      error instanceof Error ? error.message : "Unknown error";

    await recordSourceError(SOURCE_ID, errorMsg);
    await logAudit({
      eventType: "source-error",
      actor: `system:${SOURCE_ID}-listener`,
      details: { error: errorMsg },
    });

    return NextResponse.json(
      { error: errorMsg },
      { status: 500 }
    );
  }
}
