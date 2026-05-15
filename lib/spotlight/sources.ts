/**
 * Spotlight Corner — Source Registry
 *
 * Static registry of all monitored sources with their configurations.
 * This data seeds the `spotlight_sources` table on first run.
 * Also provides helper functions for source lookup and health updates.
 *
 * All HTTP requests use User-Agent: YonkeLaw-Pulse/1.0 (contact: dev@yonke.law)
 */

import { db } from "@/db/client";
import { spotlightSources } from "@/db/schema/spotlight";
import { eq } from "drizzle-orm";

// ─── Constants ────────────────────────────────────────────────────────────────

export const SPOTLIGHT_USER_AGENT = "YonkeLaw-Pulse/1.0 (contact: dev@yonke.law)";

// ─── Source Registry ──────────────────────────────────────────────────────────

export interface SourceConfig {
  id: string;
  displayName: string;
  tier: 1 | 2 | 3;
  type: "api" | "rss" | "scrape" | "social";
  cadenceMinutes: number;
  endpoint: string;
  /** If true, signals from this source can never auto-promote past INGEST without official-source confirmation. */
  socialOnly: boolean;
}

/**
 * All sources in the spec, in priority order.
 * This is the single source of truth for source configuration.
 */
export const SOURCE_REGISTRY: SourceConfig[] = [
  // ── Priority 1 ──────────────────────────────────────────────────────────
  {
    id: "nws",
    displayName: "NWS Kansas City Alerts",
    tier: 1,
    type: "api",
    cadenceMinutes: 15,
    endpoint: "https://api.weather.gov/alerts/active?area=MO",
    socialOnly: false,
  },
  {
    id: "mshp",
    displayName: "MSHP Crash Reports (MOCARS)",
    tier: 1,
    type: "scrape",
    cadenceMinutes: 60,
    endpoint: "https://mshp.dps.mo.gov/HP68/search.jsp",
    socialOnly: false,
  },
  {
    id: "kcmo311",
    displayName: "KCMO 311 (Socrata)",
    tier: 1,
    type: "api",
    cadenceMinutes: 30,
    endpoint: "https://data.kcmo.org/resource/d4px-6rwg.json",
    socialOnly: false,
  },
  {
    id: "kcpd",
    displayName: "KCPD News Releases",
    tier: 1,
    type: "rss",
    cadenceMinutes: 60,
    endpoint: "https://kcpolice.org/media/news-releases/",
    socialOnly: false,
  },

  // ── Priority 2 ──────────────────────────────────────────────────────────
  {
    id: "kshb",
    displayName: "KSHB Public Safety RSS",
    tier: 2,
    type: "rss",
    cadenceMinutes: 30,
    endpoint: "https://kshb.com/rss/category/news/crime",
    socialOnly: false,
  },
  {
    id: "kcur",
    displayName: "KCUR News RSS",
    tier: 2,
    type: "rss",
    cadenceMinutes: 60,
    endpoint: "https://kcur.org/rss",
    socialOnly: false,
  },
  {
    id: "dangerous-buildings",
    displayName: "Dangerous Buildings (Socrata)",
    tier: 2,
    type: "api",
    cadenceMinutes: 1440, // 24 hours
    endpoint: "https://data.kcmo.org/resource/rm2v-mbk5.json",
    socialOnly: false,
  },
  {
    id: "npd-violations",
    displayName: "NPD Violations (Socrata)",
    tier: 2,
    type: "api",
    cadenceMinutes: 1440, // 24 hours
    endpoint: "https://data.kcmo.org/resource/vq3e-m9ge.json",
    socialOnly: false,
  },
  {
    id: "evergy",
    displayName: "Evergy Outage Map",
    tier: 2,
    type: "scrape",
    cadenceMinutes: 30,
    endpoint: "https://evergy.com/outages/outage-map",
    socialOnly: false,
  },

  // ── Priority 3 ──────────────────────────────────────────────────────────
  {
    id: "osha",
    displayName: "OSHA Accident Search (MO)",
    tier: 3,
    type: "scrape",
    cadenceMinutes: 1440, // 24 hours
    endpoint: "https://www.osha.gov/ords/imis/accidentsearch.search",
    socialOnly: false,
  },
  {
    id: "reddit",
    displayName: "r/kansascity",
    tier: 3,
    type: "social",
    cadenceMinutes: 60,
    endpoint: "https://www.reddit.com/r/kansascity.json",
    socialOnly: true, // never auto-promotes past INGEST without official-source confirmation
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

/** Get a source config by ID. */
export function getSourceConfig(sourceId: string): SourceConfig | undefined {
  return SOURCE_REGISTRY.find((s) => s.id === sourceId);
}

/** Seed the spotlight_sources table with all registered sources. Upserts — safe to call multiple times. */
export async function seedSources(): Promise<void> {
  for (const source of SOURCE_REGISTRY) {
    await db
      .insert(spotlightSources)
      .values({
        id: source.id,
        displayName: source.displayName,
        tier: source.tier,
        type: source.type,
        cadenceMinutes: source.cadenceMinutes,
        active: true,
      })
      .onConflictDoNothing();
  }
}

/** Record a successful pull for a source. */
export async function recordSourceSuccess(sourceId: string): Promise<void> {
  await db
    .update(spotlightSources)
    .set({ lastSuccessfulPull: new Date() })
    .where(eq(spotlightSources.id, sourceId));
}

/** Record a source error. */
export async function recordSourceError(
  sourceId: string,
  error: string
): Promise<void> {
  await db
    .update(spotlightSources)
    .set({
      lastError: error,
      lastErrorAt: new Date(),
    })
    .where(eq(spotlightSources.id, sourceId));
}
