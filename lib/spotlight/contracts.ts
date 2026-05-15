/**
 * Spotlight Corner — Pipeline Contracts
 *
 * Shared TypeScript types used across all pipeline modules.
 * These types define the shape of data flowing between layers:
 *   INGEST → SCORE → VERIFY → DRAFT → APPROVE → PUBLISH
 */

// ─── Controlled Vocabulary ────────────────────────────────────────────────────

/**
 * Yonke case profile — topic tags from the controlled vocabulary.
 * Every signal is tagged against these categories during scoring.
 */
export const TOPIC_TAGS = [
  "car-accidents",
  "truck-accidents",
  "medical-malpractice",
  "wrongful-death",
  "nursing-home-abuse",
  "workplace-injuries",
  "motorcycle-accidents",
  "premises-liability",
  "product-liability",
  "pedestrian-bicycle",
  "civic-accountability",
] as const;

export type TopicTag = (typeof TOPIC_TAGS)[number];

/**
 * Workplace injury subtypes.
 */
export const WORKPLACE_SUBTYPES = [
  "trench-collapse",
  "fall",
  "struck-by",
  "electrical",
  "vehicle-related",
] as const;

/**
 * Premises liability subtypes.
 */
export const PREMISES_SUBTYPES = [
  "pool",
  "parking-lot",
  "slip-fall",
  "dangerous-building",
  "negligent-security",
] as const;

// ─── Signal Types ─────────────────────────────────────────────────────────────

export type SignalStatus =
  | "ingested"
  | "scored"
  | "scored:discarded"
  | "scored:promoted"
  | "verified"
  | "verify:single-source-pending"
  | "verify:investigation-lead"
  | "verify:duplicate"
  | "drafted"
  | "approved"
  | "scheduled"
  | "published"
  | "rejected"
  | "archived";

export type SeverityTag =
  | "fatality"
  | "hospitalization"
  | "multi-victim"
  | "single-injury"
  | "complaint"
  | "systemic";

export interface NormalizedEntities {
  orgs: string[];
  people: string[];
  places: string[];
}

export interface SignalLocation {
  address?: string;
  lat?: number;
  lon?: number;
  neighborhood?: string;
}

export interface GeographyTags {
  zip?: string;
  neighborhood?: string;
  district?: string;
}

/**
 * A Signal represents one raw piece of information ingested from a source.
 * This is the unit that flows through the pipeline.
 */
export interface Signal {
  id: string;
  sourceId: string;
  sourceUrl: string;
  sourceRetrievedAt: Date;
  rawContent: string;
  rawContentHash: string;
  normalizedEntities?: NormalizedEntities;
  location?: SignalLocation;
  eventTime?: Date;
  status: SignalStatus;
  topicTags?: TopicTag[];
  severityTag?: SeverityTag;
  geographyTags?: GeographyTags;
  score?: number;
  createdAt: Date;
  updatedAt: Date;
}

// ─── Draft Types ──────────────────────────────────────────────────────────────

export type DraftStatus =
  | "drafted"
  | "in-review"
  | "approved"
  | "rejected"
  | "scheduled"
  | "published";

export interface ArticleCitation {
  claim: string;
  sourceUrl: string;
  sourceSpan: string;
  retrievedAt: string;
}

export interface SocialVariants {
  facebook?: string;
  linkedin?: string;
  instagram?: string;
}

export interface SuggestedVisuals {
  hero?: Record<string, unknown>;
  charts?: Array<Record<string, unknown>>;
  map?: Record<string, unknown>;
}

// ─── Scoring Types ────────────────────────────────────────────────────────────

/** Result from the scorer. */
export interface ScoreResult {
  score: number;
  topicTags: TopicTag[];
  severityTag?: SeverityTag;
  promoted: boolean;
  discardReason?: string;
}

/** Threshold below which signals are discarded. */
export const SCORE_THRESHOLD = 0.3;

// ─── Verification Types ───────────────────────────────────────────────────────

export interface VerificationResult {
  crossReferenceFound: boolean;
  relatedSignalIds: string[];
  entityVerification: EntityVerificationResult[];
  sourceTierCheck: "official" | "social-only";
  isDuplicate: boolean;
  duplicateOfSignalId?: string;
  passed: boolean;
  status: SignalStatus;
}

export interface EntityVerificationResult {
  entity: string;
  entityType: "person" | "organization" | "place";
  found: boolean;
  knowledgeGraphId?: string;
  confidence?: number;
}

// ─── Content Hash ─────────────────────────────────────────────────────────────

/**
 * Generate a SHA-256 hash of content for deduplication.
 * Used to detect re-processed identical content from source feeds.
 */
export async function contentHash(content: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(content);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}
