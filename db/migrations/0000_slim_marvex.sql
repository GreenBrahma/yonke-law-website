CREATE TYPE "public"."draft_status" AS ENUM('drafted', 'in-review', 'approved', 'rejected', 'scheduled', 'published');--> statement-breakpoint
CREATE TYPE "public"."link_type" AS ENUM('confirms', 'duplicates', 'supersedes');--> statement-breakpoint
CREATE TYPE "public"."severity_tag" AS ENUM('fatality', 'hospitalization', 'multi-victim', 'single-injury', 'complaint', 'systemic');--> statement-breakpoint
CREATE TYPE "public"."signal_status" AS ENUM('ingested', 'scored', 'scored:discarded', 'scored:promoted', 'verified', 'verify:single-source-pending', 'verify:investigation-lead', 'verify:duplicate', 'drafted', 'approved', 'scheduled', 'published', 'rejected', 'archived');--> statement-breakpoint
CREATE TYPE "public"."source_type" AS ENUM('api', 'rss', 'scrape', 'social');--> statement-breakpoint
CREATE TYPE "public"."pf_message_sender" AS ENUM('person', 'firm');--> statement-breakpoint
CREATE TYPE "public"."pf_pulse_state" AS ENUM('Good', 'Doing OK', 'Confused', 'Sad', 'Angry');--> statement-breakpoint
CREATE TYPE "public"."pf_step_key" AS ENUM('intake', 'consultation', 'retained', 'investigation', 'demand', 'call_preparation', 'medical_treatment', 'negotiation', 'litigation', 'discovery', 'deposition', 'trial_prep', 'trial', 'settlement', 'testimonial');--> statement-breakpoint
CREATE TABLE "spotlight_audit_log" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"event_type" text NOT NULL,
	"signal_id" uuid,
	"draft_id" uuid,
	"actor" text NOT NULL,
	"details" jsonb,
	"occurred_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "spotlight_drafts" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"signal_id" uuid NOT NULL,
	"article_markdown" text NOT NULL,
	"article_citations" jsonb NOT NULL,
	"social_variants" jsonb,
	"mike_note" text NOT NULL,
	"suggested_visuals" jsonb,
	"gemini_prompt_hash" text,
	"gemini_response_hash" text,
	"status" "draft_status" DEFAULT 'drafted' NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"approved_by" text,
	"approved_at" timestamp with time zone,
	"rejected_reason" text
);
--> statement-breakpoint
CREATE TABLE "spotlight_publishes" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"draft_id" uuid NOT NULL,
	"slug" text NOT NULL,
	"published_at" timestamp with time zone DEFAULT now() NOT NULL,
	"json_ld" jsonb NOT NULL,
	"rss_pushed_at" timestamp with time zone,
	"drive_doc_id" text,
	"legal_pulse_included_on" date,
	CONSTRAINT "spotlight_publishes_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "spotlight_signal_links" (
	"signal_id" uuid NOT NULL,
	"related_signal_id" uuid NOT NULL,
	"link_type" "link_type" NOT NULL,
	"detected_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "spotlight_signals" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"source_id" text NOT NULL,
	"source_url" text NOT NULL,
	"source_retrieved_at" timestamp with time zone NOT NULL,
	"raw_content" text NOT NULL,
	"raw_content_hash" text NOT NULL,
	"normalized_entities" jsonb,
	"location" jsonb,
	"event_time" timestamp with time zone,
	"status" "signal_status" DEFAULT 'ingested' NOT NULL,
	"topic_tags" text[],
	"severity_tag" "severity_tag",
	"geography_tags" jsonb,
	"score" numeric,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "spotlight_sources" (
	"id" text PRIMARY KEY NOT NULL,
	"display_name" text NOT NULL,
	"tier" integer NOT NULL,
	"type" "source_type" NOT NULL,
	"cadence_minutes" integer NOT NULL,
	"active" boolean DEFAULT true NOT NULL,
	"last_successful_pull" timestamp with time zone,
	"last_error" text,
	"last_error_at" timestamp with time zone
);
--> statement-breakpoint
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
--> statement-breakpoint
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
--> statement-breakpoint
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
--> statement-breakpoint
CREATE TABLE "pf_messages" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"case_id" uuid NOT NULL,
	"sender" "pf_message_sender" NOT NULL,
	"body" text NOT NULL,
	"graph_message_id" text,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "pf_pulse_responses" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"case_id" uuid NOT NULL,
	"state" "pf_pulse_state" NOT NULL,
	"follow_up_action" text,
	"notified_mike" boolean DEFAULT false,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "pf_sessions" (
	"session_token" text PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"expires" timestamp NOT NULL
);
--> statement-breakpoint
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
--> statement-breakpoint
CREATE TABLE "pf_verification_tokens" (
	"identifier" text NOT NULL,
	"token" text NOT NULL,
	"expires" timestamp NOT NULL,
	CONSTRAINT "pf_verification_tokens_identifier_token_pk" PRIMARY KEY("identifier","token")
);
--> statement-breakpoint
ALTER TABLE "spotlight_audit_log" ADD CONSTRAINT "spotlight_audit_log_signal_id_spotlight_signals_id_fk" FOREIGN KEY ("signal_id") REFERENCES "public"."spotlight_signals"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "spotlight_audit_log" ADD CONSTRAINT "spotlight_audit_log_draft_id_spotlight_drafts_id_fk" FOREIGN KEY ("draft_id") REFERENCES "public"."spotlight_drafts"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "spotlight_drafts" ADD CONSTRAINT "spotlight_drafts_signal_id_spotlight_signals_id_fk" FOREIGN KEY ("signal_id") REFERENCES "public"."spotlight_signals"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "spotlight_publishes" ADD CONSTRAINT "spotlight_publishes_draft_id_spotlight_drafts_id_fk" FOREIGN KEY ("draft_id") REFERENCES "public"."spotlight_drafts"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "spotlight_signal_links" ADD CONSTRAINT "spotlight_signal_links_signal_id_spotlight_signals_id_fk" FOREIGN KEY ("signal_id") REFERENCES "public"."spotlight_signals"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "spotlight_signal_links" ADD CONSTRAINT "spotlight_signal_links_related_signal_id_spotlight_signals_id_fk" FOREIGN KEY ("related_signal_id") REFERENCES "public"."spotlight_signals"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "pf_accounts" ADD CONSTRAINT "pf_accounts_user_id_pf_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."pf_users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "pf_cases" ADD CONSTRAINT "pf_cases_user_id_pf_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."pf_users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "pf_files" ADD CONSTRAINT "pf_files_case_id_pf_cases_id_fk" FOREIGN KEY ("case_id") REFERENCES "public"."pf_cases"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "pf_messages" ADD CONSTRAINT "pf_messages_case_id_pf_cases_id_fk" FOREIGN KEY ("case_id") REFERENCES "public"."pf_cases"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "pf_pulse_responses" ADD CONSTRAINT "pf_pulse_responses_case_id_pf_cases_id_fk" FOREIGN KEY ("case_id") REFERENCES "public"."pf_cases"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "pf_sessions" ADD CONSTRAINT "pf_sessions_user_id_pf_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."pf_users"("id") ON DELETE cascade ON UPDATE no action;