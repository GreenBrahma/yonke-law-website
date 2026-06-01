/**
 * People First — Database Schema
 *
 * Drizzle ORM schema for the People First portal.
 * Provider: PostgreSQL (same DATABASE_URL as Spotlight)
 *
 * Tables:
 *   pf_users          — authenticated users (from Auth.js)
 *   pf_accounts       — OAuth accounts (Auth.js adapter)
 *   pf_sessions       — active sessions (Auth.js adapter)
 *   pf_verification_tokens — email verification (Auth.js adapter)
 *   pf_cases          — case status + current step
 *   pf_messages       — message history (person ↔ Mike)
 *   pf_files          — uploaded file records
 *   pf_pulse_responses — emotional pulse check-ins
 */

import {
  pgTable,
  text,
  timestamp,
  integer,
  boolean,
  pgEnum,
  uuid,
  primaryKey,
} from "drizzle-orm/pg-core";

// ── Auth.js required tables ──────────────────────────────────

export const pfUsers = pgTable("pf_users", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  name: text("name"),
  email: text("email").unique(),
  emailVerified: timestamp("email_verified", { mode: "date" }),
  image: text("image"),
  // People First specific
  phone: text("phone"),
  incidentType: text("incident_type"),
  incidentDate: text("incident_date"),
  createdAt: timestamp("created_at", { mode: "date" }).defaultNow(),
});

export const pfAccounts = pgTable(
  "pf_accounts",
  {
    userId: text("user_id")
      .notNull()
      .references(() => pfUsers.id, { onDelete: "cascade" }),
    type: text("type").notNull(),
    provider: text("provider").notNull(),
    providerAccountId: text("provider_account_id").notNull(),
    refresh_token: text("refresh_token"),
    access_token: text("access_token"),
    expires_at: integer("expires_at"),
    token_type: text("token_type"),
    scope: text("scope"),
    id_token: text("id_token"),
    session_state: text("session_state"),
  },
  (account) => [
    primaryKey({ columns: [account.provider, account.providerAccountId] }),
  ]
);

export const pfSessions = pgTable("pf_sessions", {
  sessionToken: text("session_token").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => pfUsers.id, { onDelete: "cascade" }),
  expires: timestamp("expires", { mode: "date" }).notNull(),
});

export const pfVerificationTokens = pgTable(
  "pf_verification_tokens",
  {
    identifier: text("identifier").notNull(),
    token: text("token").notNull(),
    expires: timestamp("expires", { mode: "date" }).notNull(),
  },
  (vt) => [primaryKey({ columns: [vt.identifier, vt.token] })]
);

// ── Case tracking ────────────────────────────────────────────

export const pfStepKey = pgEnum("pf_step_key", [
  "intake",
  "consultation",
  "retained",
  "investigation",
  "demand",
  "call_preparation",
  "medical_treatment",
  "negotiation",
  "litigation",
  "discovery",
  "deposition",
  "trial_prep",
  "trial",
  "settlement",
  "testimonial",
]);

export const pfCases = pgTable("pf_cases", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: text("user_id")
    .notNull()
    .references(() => pfUsers.id, { onDelete: "cascade" }),
  currentStep: pfStepKey("current_step").notNull().default("intake"),
  incidentSummary: text("incident_summary"),
  // Panel 2 — action needed
  actionNeeded: boolean("action_needed").default(false),
  actionTitle: text("action_title"),
  actionBody: text("action_body"),
  // Calendar
  hasUnread: boolean("has_unread").default(false),
  createdAt: timestamp("created_at", { mode: "date" }).defaultNow(),
  updatedAt: timestamp("updated_at", { mode: "date" }).defaultNow(),
});

// ── Messages (person ↔ Mike only) ────────────────────────────

export const pfMessageSender = pgEnum("pf_message_sender", [
  "person",
  "firm",
]);

export const pfMessages = pgTable("pf_messages", {
  id: uuid("id").primaryKey().defaultRandom(),
  caseId: uuid("case_id")
    .notNull()
    .references(() => pfCases.id, { onDelete: "cascade" }),
  from: pfMessageSender("sender").notNull(),
  body: text("body").notNull(),
  graphMessageId: text("graph_message_id"), // MS365 email ID
  createdAt: timestamp("created_at", { mode: "date" }).defaultNow(),
});

// ── Files ────────────────────────────────────────────────────

export const pfFiles = pgTable("pf_files", {
  id: uuid("id").primaryKey().defaultRandom(),
  caseId: uuid("case_id")
    .notNull()
    .references(() => pfCases.id, { onDelete: "cascade" }),
  fileName: text("file_name").notNull(),
  fileSize: integer("file_size"), // bytes
  mimeType: text("mime_type"),
  graphDriveItemId: text("graph_drive_item_id"), // OneDrive item ID
  uploadedBy: pfMessageSender("uploaded_by").notNull().default("person"),
  createdAt: timestamp("created_at", { mode: "date" }).defaultNow(),
});

// ── Pulse responses ──────────────────────────────────────────

export const pfPulseState = pgEnum("pf_pulse_state", [
  "Good",
  "Doing OK",
  "Confused",
  "Sad",
  "Angry",
]);

export const pfPulseResponses = pgTable("pf_pulse_responses", {
  id: uuid("id").primaryKey().defaultRandom(),
  caseId: uuid("case_id")
    .notNull()
    .references(() => pfCases.id, { onDelete: "cascade" }),
  state: pfPulseState("state").notNull(),
  followUpAction: text("follow_up_action"), // "call_requested", "help_requested", null
  notifiedMike: boolean("notified_mike").default(false),
  createdAt: timestamp("created_at", { mode: "date" }).defaultNow(),
});
