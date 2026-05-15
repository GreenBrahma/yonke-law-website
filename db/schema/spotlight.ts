/**
 * Spotlight Corner — Database Schema
 *
 * Drizzle ORM schema for the Spotlight pipeline.
 * Provider: Neon PostgreSQL (project: yonke-spotlight)
 * Connection: DATABASE_URL env var
 *
 * Tables:
 *   spotlight_signals       — raw ingested signals from all sources
 *   spotlight_signal_links  — many-to-many cross-reference confirmations
 *   spotlight_drafts        — AI-generated drafts pending approval
 *   spotlight_publishes     — published articles on the live site
 *   spotlight_audit_log     — immutable audit trail (never deleted)
 *   spotlight_sources       — source registry with health tracking
 */

import {
  pgTable,
  uuid,
  text,
  timestamp,
  jsonb,
  numeric,
  integer,
  boolean,
  date,
  pgEnum,
} from "drizzle-orm/pg-core";

// ─── Enums ────────────────────────────────────────────────────────────────────

export const signalStatusEnum = pgEnum("signal_status", [
  "ingested",
  "scored",
  "scored:discarded",
  "scored:promoted",
  "verified",
  "verify:single-source-pending",
  "verify:investigation-lead",
  "verify:duplicate",
  "drafted",
  "approved",
  "scheduled",
  "published",
  "rejected",
  "archived",
]);

export const severityEnum = pgEnum("severity_tag", [
  "fatality",
  "hospitalization",
  "multi-victim",
  "single-injury",
  "complaint",
  "systemic",
]);

export const draftStatusEnum = pgEnum("draft_status", [
  "drafted",
  "in-review",
  "approved",
  "rejected",
  "scheduled",
  "published",
]);

export const linkTypeEnum = pgEnum("link_type", [
  "confirms",
  "duplicates",
  "supersedes",
]);

export const sourceTypeEnum = pgEnum("source_type", [
  "api",
  "rss",
  "scrape",
  "social",
]);

// ─── Tables ───────────────────────────────────────────────────────────────────

/**
 * spotlight_signals — every raw signal ingested from any source.
 * Status tracks position in the pipeline: ingested → scored → verified → drafted → approved → published.
 */
export const spotlightSignals = pgTable("spotlight_signals", {
  id: uuid("id").defaultRandom().primaryKey(),
  sourceId: text("source_id").notNull(),
  sourceUrl: text("source_url").notNull(),
  sourceRetrievedAt: timestamp("source_retrieved_at", { withTimezone: true }).notNull(),
  rawContent: text("raw_content").notNull(),
  rawContentHash: text("raw_content_hash").notNull(),
  normalizedEntities: jsonb("normalized_entities").$type<{
    orgs: string[];
    people: string[];
    places: string[];
  }>(),
  location: jsonb("location").$type<{
    address?: string;
    lat?: number;
    lon?: number;
    neighborhood?: string;
  }>(),
  eventTime: timestamp("event_time", { withTimezone: true }),
  status: signalStatusEnum("status").notNull().default("ingested"),
  topicTags: text("topic_tags").array(),
  severityTag: severityEnum("severity_tag"),
  geographyTags: jsonb("geography_tags").$type<{
    zip?: string;
    neighborhood?: string;
    district?: string;
  }>(),
  score: numeric("score"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
});

/**
 * spotlight_signal_links — many-to-many cross-reference table.
 * Links signals that confirm, duplicate, or supersede each other.
 */
export const spotlightSignalLinks = pgTable("spotlight_signal_links", {
  signalId: uuid("signal_id")
    .notNull()
    .references(() => spotlightSignals.id),
  relatedSignalId: uuid("related_signal_id")
    .notNull()
    .references(() => spotlightSignals.id),
  linkType: linkTypeEnum("link_type").notNull(),
  detectedAt: timestamp("detected_at", { withTimezone: true }).defaultNow().notNull(),
});

/**
 * spotlight_drafts — AI-generated article drafts awaiting Mike's approval.
 * Each draft maps to one signal. Contains the article, citations, social variants, and Mike's note.
 */
export const spotlightDrafts = pgTable("spotlight_drafts", {
  id: uuid("id").defaultRandom().primaryKey(),
  signalId: uuid("signal_id")
    .notNull()
    .references(() => spotlightSignals.id),
  articleMarkdown: text("article_markdown").notNull(),
  articleCitations: jsonb("article_citations")
    .notNull()
    .$type<
      Array<{
        claim: string;
        sourceUrl: string;
        sourceSpan: string;
        retrievedAt: string;
      }>
    >(),
  socialVariants: jsonb("social_variants").$type<{
    facebook?: string;
    linkedin?: string;
    instagram?: string;
  }>(),
  mikeNote: text("mike_note").notNull(),
  suggestedVisuals: jsonb("suggested_visuals").$type<{
    hero?: Record<string, unknown>;
    charts?: Array<Record<string, unknown>>;
    map?: Record<string, unknown>;
  }>(),
  geminiPromptHash: text("gemini_prompt_hash"),
  geminiResponseHash: text("gemini_response_hash"),
  status: draftStatusEnum("status").notNull().default("drafted"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  approvedBy: text("approved_by"),
  approvedAt: timestamp("approved_at", { withTimezone: true }),
  rejectedReason: text("rejected_reason"),
});

/**
 * spotlight_publishes — published articles live on Spotlight Corner.
 * Each publish maps to one draft. Contains the slug, JSON-LD, and distribution tracking.
 */
export const spotlightPublishes = pgTable("spotlight_publishes", {
  id: uuid("id").defaultRandom().primaryKey(),
  draftId: uuid("draft_id")
    .notNull()
    .references(() => spotlightDrafts.id),
  slug: text("slug").notNull().unique(),
  publishedAt: timestamp("published_at", { withTimezone: true }).defaultNow().notNull(),
  jsonLd: jsonb("json_ld").notNull(),
  rssPushedAt: timestamp("rss_pushed_at", { withTimezone: true }),
  driveDocId: text("drive_doc_id"),
  legalPulseIncludedOn: date("legal_pulse_included_on"),
});

/**
 * spotlight_audit_log — immutable audit trail.
 * Every pipeline action, every approval/rejection, every publish event is logged here.
 * Records are NEVER deleted.
 */
export const spotlightAuditLog = pgTable("spotlight_audit_log", {
  id: uuid("id").defaultRandom().primaryKey(),
  eventType: text("event_type").notNull(),
  signalId: uuid("signal_id").references(() => spotlightSignals.id),
  draftId: uuid("draft_id").references(() => spotlightDrafts.id),
  actor: text("actor").notNull(),
  details: jsonb("details"),
  occurredAt: timestamp("occurred_at", { withTimezone: true }).defaultNow().notNull(),
});

/**
 * spotlight_sources — source registry with health tracking.
 * Each source has a tier, type, cadence, and health status.
 */
export const spotlightSources = pgTable("spotlight_sources", {
  id: text("id").primaryKey(),
  displayName: text("display_name").notNull(),
  tier: integer("tier").notNull(),
  type: sourceTypeEnum("type").notNull(),
  cadenceMinutes: integer("cadence_minutes").notNull(),
  active: boolean("active").notNull().default(true),
  lastSuccessfulPull: timestamp("last_successful_pull", { withTimezone: true }),
  lastError: text("last_error"),
  lastErrorAt: timestamp("last_error_at", { withTimezone: true }),
});
