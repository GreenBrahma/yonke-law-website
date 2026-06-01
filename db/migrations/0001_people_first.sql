-- People First — Database Migration
-- Run this against the production PostgreSQL database.
-- Spotlight tables already exist; this adds only pf_* tables.
-- Generated from db/schema/people-first.ts via drizzle-kit.

-- Enums
CREATE TYPE "public"."pf_message_sender" AS ENUM('person', 'firm');
CREATE TYPE "public"."pf_pulse_state" AS ENUM('Good', 'Doing OK', 'Confused', 'Sad', 'Angry');
CREATE TYPE "public"."pf_step_key" AS ENUM('intake', 'consultation', 'retained', 'investigation', 'demand', 'call_preparation', 'medical_treatment', 'negotiation', 'litigation', 'discovery', 'deposition', 'trial_prep', 'trial', 'settlement', 'testimonial');

-- Users (Auth.js)
CREATE TABLE "pf_users" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text,
	"email" text,
	"email_verified" timestamp,
	"image" text,
	"phone" text,
	"incident_type" text,
	"incident_date" text,
	"created_at" timestamp DEFAULT now(),
	CONSTRAINT "pf_users_email_unique" UNIQUE("email")
);

-- Accounts (Auth.js OAuth)
CREATE TABLE "pf_accounts" (
	"user_id" text NOT NULL,
	"type" text NOT NULL,
	"provider" text NOT NULL,
	"provider_account_id" text NOT NULL,
	"refresh_token" text,
	"access_token" text,
	"expires_at" integer,
	"token_type" text,
	"scope" text,
	"id_token" text,
	"session_state" text,
	CONSTRAINT "pf_accounts_provider_provider_account_id_pk" PRIMARY KEY("provider","provider_account_id")
);

-- Sessions (Auth.js)
CREATE TABLE "pf_sessions" (
	"session_token" text PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"expires" timestamp NOT NULL
);

-- Verification Tokens (Auth.js email)
CREATE TABLE "pf_verification_tokens" (
	"identifier" text NOT NULL,
	"token" text NOT NULL,
	"expires" timestamp NOT NULL,
	CONSTRAINT "pf_verification_tokens_identifier_token_pk" PRIMARY KEY("identifier","token")
);

-- Cases
CREATE TABLE "pf_cases" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" text NOT NULL,
	"current_step" "pf_step_key" DEFAULT 'intake' NOT NULL,
	"incident_summary" text,
	"action_needed" boolean DEFAULT false,
	"action_title" text,
	"action_body" text,
	"has_unread" boolean DEFAULT false,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);

-- Messages (person ↔ Mike only)
CREATE TABLE "pf_messages" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"case_id" uuid NOT NULL,
	"sender" "pf_message_sender" NOT NULL,
	"body" text NOT NULL,
	"graph_message_id" text,
	"created_at" timestamp DEFAULT now()
);

-- Files
CREATE TABLE "pf_files" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"case_id" uuid NOT NULL,
	"file_name" text NOT NULL,
	"file_size" integer,
	"mime_type" text,
	"graph_drive_item_id" text,
	"uploaded_by" "pf_message_sender" DEFAULT 'person' NOT NULL,
	"created_at" timestamp DEFAULT now()
);

-- Pulse Responses
CREATE TABLE "pf_pulse_responses" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"case_id" uuid NOT NULL,
	"state" "pf_pulse_state" NOT NULL,
	"follow_up_action" text,
	"notified_mike" boolean DEFAULT false,
	"created_at" timestamp DEFAULT now()
);

-- Foreign Keys
ALTER TABLE "pf_accounts" ADD CONSTRAINT "pf_accounts_user_id_pf_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."pf_users"("id") ON DELETE cascade ON UPDATE no action;
ALTER TABLE "pf_sessions" ADD CONSTRAINT "pf_sessions_user_id_pf_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."pf_users"("id") ON DELETE cascade ON UPDATE no action;
ALTER TABLE "pf_cases" ADD CONSTRAINT "pf_cases_user_id_pf_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."pf_users"("id") ON DELETE cascade ON UPDATE no action;
ALTER TABLE "pf_messages" ADD CONSTRAINT "pf_messages_case_id_pf_cases_id_fk" FOREIGN KEY ("case_id") REFERENCES "public"."pf_cases"("id") ON DELETE cascade ON UPDATE no action;
ALTER TABLE "pf_files" ADD CONSTRAINT "pf_files_case_id_pf_cases_id_fk" FOREIGN KEY ("case_id") REFERENCES "public"."pf_cases"("id") ON DELETE cascade ON UPDATE no action;
ALTER TABLE "pf_pulse_responses" ADD CONSTRAINT "pf_pulse_responses_case_id_pf_cases_id_fk" FOREIGN KEY ("case_id") REFERENCES "public"."pf_cases"("id") ON DELETE cascade ON UPDATE no action;
