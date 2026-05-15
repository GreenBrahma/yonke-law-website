# Spotlight Corner — Antigravity Build Prompt

**Workspace:** Yonke Law Website
**Authoring date:** May 14, 2026
**Reference resources (READ FIRST):** `/spotlight-resources/kansas-city-public-source-legal-news-monitoring__1_.md` and `/spotlight-resources/Kansas_City_MO__Public_Intelligence_Hub_for_Legal___News_Monitoring.md` — these are the KC public-source map.
**Sister specs already in workspace:** `homepage-spec.md`, `just-happened-car-accident.md`, `practice-area-template.md`, `yonke-project-state.md`, `AGENTS.md`.

Paste this entire document into Antigravity as the build prompt for the Spotlight Corner system. Do not condense.

---

## Decisions locked from Phase 0

These were resolved with Geoff at the Phase 0 gate. They override any contrary detail elsewhere in this document.

| # | Decision | Value |
|---|---|---|
| 1 | PostgreSQL provider | **Neon** — project `yonke-spotlight`. Connection string in `DATABASE_URL` env var. |
| 2 | GCP project | **`yonke-spotlight-prod`** — new project. Enable Vertex AI API, Knowledge Graph Search API, Gmail API, and Drive API. Workload Identity Federation for auth. |
| 3 | Email sender | **`pulse@yonke.law`** as a Gmail send-as alias on the system identity account (see #4). If alias is not yet configured at Phase 5 launch (requires SPF/DKIM coordination on the yonke.law domain), send temporarily from the system account with display name "Yonke Law Pulse" and switch to the alias once DNS is set up. |
| 4 | System identity Google account | **`yonkelaw@gmail.com`** — this account owns Gmail OAuth (sender) AND Drive folder. Env vars `SPOTLIGHT_GMAIL_OAUTH_*` and `SPOTLIGHT_DRIVE_OAUTH_*` bind to this account. |
| 5 | Admin auth gate | **Simple password middleware** in Next.js — shared password in env var `SPOTLIGHT_ADMIN_PASSWORD`, sets an httpOnly secure session cookie on submission, protects all `/admin/*` routes. No NextAuth, no OAuth, no Clerk. Mike enters the password once per session. |
| 6 | Hosting + cron | **Netlify** (the website is already on Netlify). Use **Netlify Scheduled Functions** for all cron triggers. Use `@netlify/plugin-nextjs` to adapt Next.js API route handlers; configure per-function schedules in `netlify.toml` with cron expressions. No Vercel migration. |

---

## Mission

Build Spotlight Corner — a system that listens to Kansas City public-source feeds, filters them through a personal-injury lens, verifies every claim through multiple independent sources, drafts factual stories grounded in retrieved evidence, and presents them on the live Spotlight Corner page at **https://yonkelawwebsite.netlify.app/spotlight-corner** (canonical: `yonke.law/spotlight-corner`) after Mike approves.

After each day's content has been parsed, verified, drafted, approved, and published, a background function sends Mike a daily digest of what the system did — at `mike@yonke.law` and `mike@yonke-law.com`. Archived copies of published articles are written to a structured Google Drive folder.

The Spotlight Corner page is the primary product. The daily email is a status report on what the pipeline did that day; it does not need to match the website's visual design.

Nothing publishes without Mike's approval. Nothing gets drafted without two independent source confirmations. Nothing in any draft is generated from model recall — only from cited, retrieved source material.

---

## Inviolable rules

These are not preferences. If a rule is violated anywhere in the pipeline, the affected record is halted and logged, not published.

1. **Two-source minimum.** A signal becomes eligible for drafting only after at least two independent sources confirm the same event. Independent means: different origin organizations (e.g., MSHP report + KSHB story, or KCMO 311 + KMBC coverage). Two stories from the same outlet do not count.
2. **No model recall in generated content.** The Drafter (Vertex AI Gemini in RAG mode) may only reference content present in the retrieval context window. Every claim must trace to a specific quoted span from a cited source. If the retrieval context does not contain support for a claim, the claim is omitted.
3. **Every claim cites.** Every factual statement in every draft has an inline citation linking to a primary source URL with a retrieval timestamp. Citations are visible to Mike in the approval UI and survive into published JSON-LD.
4. **No fabricated imagery.** No AI-generated photorealistic images of people, places, vehicles, or incidents. Permitted visuals: licensed/credited source photos (with attribution), Google Maps embeds, chart.js visualizations generated from source data, Yonke-branded data cards, icon-based illustrations.
5. **No legal commentary about specific parties.** Every published piece reads as journalism about an incident or systemic issue — never as a pitch against a specific defendant. The Drafter system prompt enforces this; Mike's approval is the safety net.
6. **Mike's approval is the final gate.** No piece publishes without explicit approval. No piece exits the queue without a logged decision (approved, rejected, or sent back for revision).
7. **Scanner and social signals do not promote alone.** Broadcastify, Reddit, Facebook, Nextdoor, and similar can flag a story for investigation but never advance past INGEST without official-source confirmation. They populate a separate "Investigation Leads" queue, not the main approval queue.
8. **Audit trail is immutable.** Every signal, every score, every verification step, every approval/rejection, every publish event writes to `spotlight_audit_log` and is never deleted.

---

## Architecture — five layers, one direction

```
INGEST → SCORE → VERIFY → DRAFT → APPROVE (Mike) → PUBLISH → DISTRIBUTE
```

Each layer is its own module under `/lib/spotlight/`. Each writes a status to the database before passing control to the next.

### Layer 1 — Ingest

Per-source Netlify Scheduled Functions endpoints under `/app/api/spotlight/listen/[source]/route.ts`. Each polls its source on a defined cadence, normalizes the response into a `Signal` record, and writes to `spotlight_signals` with status `ingested`.

**Sources to implement, in this priority order:**

| Priority | Source | Type | Cadence | Endpoint |
|---|---|---|---|---|
| 1 | NWS Kansas City alerts | JSON API | 15 min | `api.weather.gov/alerts/active?area=MO` |
| 1 | MSHP Crash Reports (MOCARS) | Web scrape (respectful) | 60 min | `mshp.dps.mo.gov/HP68/search.jsp` |
| 1 | KCMO 311 (Socrata) | JSON API | 30 min | `data.kcmo.org/resource/d4px-6rwg.json` |
| 1 | KCPD News Releases | RSS / HTML | 60 min | `kcpolice.org/media/news-releases/` |
| 2 | KSHB Public Safety RSS | RSS | 30 min | `kshb.com/rss/category/news/crime` |
| 2 | KCUR News RSS | RSS | 60 min | `kcur.org/rss` |
| 2 | Dangerous Buildings (Socrata) | JSON API | 24 hr | `data.kcmo.org/resource/rm2v-mbk5.json` |
| 2 | NPD Violations (Socrata) | JSON API | 24 hr | `data.kcmo.org/resource/vq3e-m9ge.json` |
| 2 | Evergy Outage Map | HTML scrape | 30 min | `evergy.com/outages/outage-map` |
| 3 | OSHA Accident Search (MO) | Form scrape | 24 hr | `osha.gov/ords/imis/accidentsearch.search` |
| 3 | r/kansascity | JSON | 60 min | `reddit.com/r/kansascity.json` (flagged as social, never auto-promotes) |

All HTTP requests use User-Agent `YonkeLaw-Pulse/1.0 (contact: dev@yonke.law)`. Honor robots.txt. Cache responses by content hash to avoid re-processing.

### Layer 2 — Score

Single endpoint `/app/api/spotlight/score/route.ts`. Reads signals with status `ingested`, scores against the Yonke case profile, writes back with status `scored` and a numeric relevance score.

**Yonke case profile (controlled vocabulary):**
- car-accidents
- truck-accidents
- medical-malpractice
- wrongful-death
- nursing-home-abuse
- workplace-injuries (sub: trench-collapse, fall, struck-by, electrical, vehicle-related)
- motorcycle-accidents
- premises-liability (sub: pool, parking-lot, slip-fall, dangerous-building, negligent-security)
- product-liability
- pedestrian-bicycle
- civic-accountability (for systemic issues — repeat 311 clusters, repeat OSHA violators, prior-notice patterns)

Scoring inputs: keyword match, severity (fatality > hospitalization > injury > complaint), location (KCMO metro priority), source reliability tier, recency.

Signals scoring below threshold are marked `scored:discarded` with reason logged. Signals scoring above threshold advance to `scored:promoted`.

### Layer 3 — Verify

Endpoint `/app/api/spotlight/verify/route.ts`. For each `scored:promoted` signal, run four checks:

1. **Cross-reference:** find ≥1 additional independent source describing the same event. Match on entity + location + time window (±48 hr for breaking news, ±7 days for systemic). If no second source within 24 hours of first detection, mark `verify:single-source-pending`.
2. **Entity verification (Google Knowledge Graph):** for each named entity in the signal, query Knowledge Graph to confirm the entity exists and matches context. Log results.
3. **Source-tier check:** scanner-only and social-only signals can never advance from this layer to DRAFT. They go to `verify:investigation-lead` and surface in the Investigation Leads queue (not the main approval queue).
4. **Duplicate check:** has this story already been drafted, approved, or rejected previously? If yes, mark `verify:duplicate` and link to the prior record.

Signals passing all four → status `verified`.

### Layer 4 — Draft

Endpoint `/app/api/spotlight/draft/route.ts`. For each `verified` signal:

1. Retrieve all source content for this signal (raw text from all confirming sources, official record snippets, entity context from Knowledge Graph).
2. Call Vertex AI Gemini 2.5 Pro in grounded-RAG mode. The retrieval context is the only allowed source of facts.
3. System prompt enforces: journalism tone, not legal commentary about specific defendants; every claim must cite to a specific span in the retrieval context; if a claim cannot be cited, the claim is omitted; person-first language ("people"/"person", not "client"/"victim"/"plaintiff"); Yonke (YONK-ee) Law brand voice; no chest-thumping.
4. Generate three artifacts per signal:
   - **Spotlight Corner article** — 400–700 words with inline citations, suggested hero visual, list of relevant data points for chart generation
   - **Social post variants** — Facebook 1080×1080, LinkedIn 1200×627, Instagram 1080×1350 (text + suggested visual)
   - **Mike's note** — a one-paragraph summary of why this story qualified and what the legal/civic interest is
5. Write to `spotlight_drafts` with status `drafted`.

### Layer 5 — Approve (Mike)

Web UI at `/admin/spotlight/` (gated by the admin password middleware (see Decisions Locked #5)).

**Three columns:**
- **Pending Review** — verified signals with drafts awaiting Mike's decision
- **Approved Today** — drafts Mike approved in the current calendar day, awaiting auto-publish or scheduled publish
- **Published** — articles live on Spotlight Corner

**Per-draft detail view at `/admin/spotlight/[draftId]`:**
- Left pane: the draft article rendered as it will appear on the site
- Right pane: source documents with the cited spans highlighted, the verification log, the entity Knowledge Graph results, the relevance score
- Buttons: Approve (publishes immediately), Schedule (publishes at chosen time), Edit (opens inline editor before approving), Reject (requires reason), Promote to Feature (publishes with /spotlight-corner/featured/ placement)
- Every action writes to `spotlight_audit_log`

Additionally, an "Investigation Leads" tab shows scanner/social-only signals that did not advance. Mike or staff can manually promote one if independent verification is found, or dismiss it.

### Layer 6 — Publish & Distribute

On approval:
1. Write article markdown + metadata to `/spotlight-corner/[slug]/` (Next.js dynamic route reads from DB; this is database-driven, not file-based)
2. Generate JSON-LD: `Article` + `Person` (Mike) + `sameAs` to all cited sources + `dateModified`
3. Render data visualizations server-side if quantitative data was tagged in the draft
4. Add to RSS feed at `/spotlight-corner/feed.xml`
5. Queue Twilio SMS to Mike if Promote-to-Feature was used
6. Append to today's Legal Pulse compilation
7. Write copy of article to Google Drive (see Drive structure below)

---

## Google API choice — Vertex AI with Gemini, grounded RAG

This is the build of the Drafter layer. Implementation:

- Service: Vertex AI in the same GCP project as the Yonke Law Website
- Model: `gemini-2.5-pro` (large context window for full source corpus per signal)
- Mode: grounded generation with retrieval augmentation
- Retrieval source: the per-signal source corpus assembled in Layer 4 step 1
- Anti-hallucination configuration: temperature 0.2, top_p 0.85, citations required, refusal-to-generate when claim cannot be sourced
- Auth: Workload Identity Federation (no service account keys checked into the repo)
- Audit: every Gemini call logs prompt, retrieval context hash, response, and citations to `spotlight_audit_log`

**Why this API specifically:** because RAG forces grounding in retrieved context rather than generative recall, which is the single most important architectural decision for the no-drift constraint. The Drafter cannot hallucinate facts that aren't in its retrieval window — the architecture itself prevents it. Knowledge Graph is used as an enrichment in Layer 3 but is not the engine.

Future Phase 2 enhancement: add Knowledge Graph `sameAs` outputs into each published article's JSON-LD for AEO benefit.

---

## Data model — Drizzle ORM, PostgreSQL

Create `/db/schema/spotlight.ts` with these tables:

```typescript
spotlight_signals
  id (uuid PK)
  source_id (text)              // 'mshp', 'kcpd', 'nws', 'kcmo311', etc.
  source_url (text)
  source_retrieved_at (timestamp)
  raw_content (text)            // full content as retrieved
  raw_content_hash (text)       // for dedup
  normalized_entities (jsonb)   // {orgs:[], people:[], places:[]}
  location (jsonb)              // {address, lat, lon, neighborhood}
  event_time (timestamp)
  status (enum)                 // ingested, scored, scored:discarded, scored:promoted, verified, verify:single-source-pending, verify:investigation-lead, verify:duplicate, drafted, approved, scheduled, published, rejected, archived
  topic_tags (text[])           // from controlled vocabulary
  severity_tag (enum)           // fatality, hospitalization, multi-victim, single-injury, complaint, systemic
  geography_tags (jsonb)        // {zip, neighborhood, district}
  score (numeric)
  created_at (timestamp)
  updated_at (timestamp)

spotlight_signal_links               // many-to-many for cross-reference confirmations
  signal_id (FK)
  related_signal_id (FK)
  link_type (enum)              // confirms, duplicates, supersedes
  detected_at (timestamp)

spotlight_drafts
  id (uuid PK)
  signal_id (FK)
  article_markdown (text)
  article_citations (jsonb)     // [{claim, source_url, source_span, retrieved_at}, ...]
  social_variants (jsonb)       // {facebook, linkedin, instagram}
  mike_note (text)
  suggested_visuals (jsonb)     // {hero: {...}, charts: [...], map: {...}}
  gemini_prompt_hash (text)
  gemini_response_hash (text)
  status (enum)                 // drafted, in-review, approved, rejected, scheduled, published
  created_at (timestamp)
  approved_by (text)
  approved_at (timestamp)
  rejected_reason (text)

spotlight_publishes
  id (uuid PK)
  draft_id (FK)
  slug (text unique)            // YYYY-MM-DD-topic-shortheadline
  published_at (timestamp)
  json_ld (jsonb)
  rss_pushed_at (timestamp)
  drive_doc_id (text)           // Google Drive file ID of archived copy
  legal_pulse_included_on (date)

spotlight_audit_log
  id (uuid PK)
  event_type (text)             // 'ingest', 'score', 'verify', 'draft', 'approve', 'reject', 'publish'
  signal_id (FK nullable)
  draft_id (FK nullable)
  actor (text)                  // 'system:nws-listener', 'mike@yonke.law', etc.
  details (jsonb)
  occurred_at (timestamp)

spotlight_sources                    // source registry
  id (text PK)                  // 'mshp', 'nws', etc.
  display_name (text)
  tier (int)                    // 1, 2, 3
  type (enum)                   // api, rss, scrape, social
  cadence_minutes (int)
  active (boolean)
  last_successful_pull (timestamp)
  last_error (text)
  last_error_at (timestamp)
```

---

## Directory structure

```
/app/
  /spotlight-corner/
    page.tsx                              # listing page; reads from spotlight_publishes
    [slug]/page.tsx                       # article page; SSR + JSON-LD
    feed.xml/route.ts                     # RSS feed
    featured/page.tsx                     # Promote-to-Feature placement
  /admin/
    /spotlight/
      page.tsx                            # three-column dashboard
      [draftId]/page.tsx                  # draft detail / approval view
      investigation-leads/page.tsx        # scanner/social lead queue
  /api/
    /spotlight/
      /listen/
        nws/route.ts
        mshp/route.ts
        kcmo311/route.ts
        kcpd/route.ts
        kshb/route.ts
        kcur/route.ts
        dangerous-buildings/route.ts
        npd-violations/route.ts
        evergy/route.ts
        osha/route.ts
        reddit/route.ts
      score/route.ts
      verify/route.ts
      draft/route.ts
      publish/route.ts
      legal-pulse/route.ts                # daily Legal Pulse email builder + send
      drive/route.ts                      # Drive folder writer
/lib/
  /spotlight/
    sources.ts                            # source registry helpers
    scorer.ts
    verifier.ts
    knowledge-graph.ts                    # Google Knowledge Graph client
    drafter.ts                            # Vertex AI Gemini client
    cataloger.ts                          # taxonomy, slug generation
    gmail.ts                              # Gmail client for the Legal Pulse email
    drive.ts                              # Drive API client for archival
    audit.ts                              # audit_log writer
/db/
  /schema/
    spotlight.ts                          # Drizzle schemas above
/spotlight-resources/                     # (already populated by Geoff — do not touch)
```

---

## Daily email — background function

**What it is:** A background function that runs after the day's pipeline activity is complete and content has been published. It compiles a status report on what happened in the system that day and emails it to Mike. It is not the product — the website is. This is the rear-view mirror.

**When:** 5:00 AM Central, Mon–Fri (configurable via env var). Runs as a Netlify Scheduled Function at `/app/api/spotlight/legal-pulse/route.ts`.

**Recipients (env var `LEGAL_PULSE_RECIPIENTS`):**
- `mike@yonke.law`
- `mike@yonke-law.com`

Both addresses, every send. No other recipients by default. (Geoff can be added later via the env var if needed.)

**Sender:** `pulse@yonke.law` — configured as a Gmail send-as alias on the system identity account (`yonkelaw@gmail.com`, per Decisions Locked #4). This requires SPF/DKIM coordination on the yonke.law domain, which Geoff handles outside this build. If the alias is not yet active at Phase 5 launch, send temporarily from `yonkelaw@gmail.com` with display name "Yonke Law Pulse" and switch to the alias once DNS is in place.

**Subject:** `Legal Pulse — [Date]`

**Format:** Utilitarian. Plain HTML with minimal structure — section headers, paragraph text, simple link list. Does not need to match the website's design language. Brand colors are not required. Plain-text alternative included. Goal: readable on phone in five seconds.

**Content sections, in order:**

1. **Top story** — the most recent publish OR highest-severity pending item, with one-line summary and link
2. **Awaiting your review** — count of items in Pending Review, link to `/admin/spotlight/`
3. **Published yesterday** — bullet list of titles + links
4. **New signals today** — count by topic tag and severity
5. **Investigation leads** — count of scanner/social-only items in lead queue; one-line preview of any worth a glance
6. **Source health** — list of any sources that errored or returned zero data in last 24 hours

After sending, the function writes a copy of the email body to that day's Drive folder (see Drive structure) so there's a permanent record.

---

## Google Drive structure

Antigravity creates this folder structure on first run, via the Drive API, in the owner-of-record's Drive (configurable):

```
/Yonke Law - Spotlight Corner Archive/
  README.gdoc                                       # explains the structure
  /2026/
    /05-May/
      /14/
        2026-05-14-legal-pulse.gdoc                 # archived copy of the Legal Pulse email
        /Signals/                                   # all signals processed today
          [signal-id]-[slug].gdoc
        /Pending/                                   # drafts awaiting approval, snapshot at 11:59 PM
          [draft-id]-[slug].gdoc
        /Approved/                                  # what Mike approved today
          [draft-id]-[slug].gdoc
        /Published/                                 # what went live today
          [slug].gdoc
        /Rejected/                                  # with reasons
          [draft-id]-[slug].gdoc
  /Monthly Rollups/
    2026-05-spotlight-summary.gdoc
  /Source Health/
    2026-05-source-uptime.gdoc
```

Cataloging applied to every file: front-matter block with `signal_id`, `topic_tags`, `severity`, `location`, `sources` (list of URLs), `status`, `created_at`, `approved_by`, `approved_at`, `published_at`. This makes every archived doc machine-parseable for later analysis or audit.

---

## Spotlight Corner — site presentation

**Listing page `/spotlight-corner/`:**
- Newest first
- Filter by topic tag, geography, date
- Each card: hero visual (map/chart/photo), title, one-sentence dek, date, topic tags
- Pagination, RSS link, "Subscribe to the daily digest" CTA (collects email, signs up to the Legal Pulse list)

**Article page `/spotlight-corner/[slug]/`:**
- Headline + dek + dateline (KC, MO — date)
- Body with inline citations (numbered, linked, hover-revealed)
- Visual block: map embed (if location), chart (if quantitative), licensed image (with attribution)
- "Sources" section at the bottom — every cited URL with retrieval timestamp
- "Related" — other Spotlight Corner pieces by topic tag
- Footer disclaimer

**JSON-LD per article:**
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "...",
  "datePublished": "...",
  "dateModified": "...",
  "author": { "@type": "Person", "name": "Michael T. Yonke", "knowsAbout": [...] },
  "publisher": { "@type": "LegalService", "name": "Yonke Law L.L.C.", "url": "https://yonke.law" },
  "sameAs": [<every cited primary source URL>],
  "about": [{"@type":"Thing","name":"<topic_tag>"}]
}
```

`sameAs` outbound to primary sources is the AEO heavyweight — it tells LLMs and search crawlers this content is grounded in verifiable sources and worth citing.

---

## Build order — five phases with parallel workstreams in Phase 2

This is a large build. Phase 2 fans out into five parallel workstreams. Spin up parallel agents where the work is genuinely independent. Phases 0, 1, 3, and 4 remain sequential — each ends with a STOP gate where you summarize what was built/tested and wait for Geoff's sign-off.

**Inviolable rules for parallel work:**

1. **Contracts before parallel work.** Phase 1 produces `/lib/spotlight/contracts.ts` with TypeScript types and function signatures for every interface between layers — `Signal`, `Score`, `Verification`, `Draft`, `Publish`, `AuditEntry`, plus the source-normalization contract every listener must satisfy. All parallel agents in Phase 2 read from this file. No agent defines their own version of a shared type.
2. **Workstream isolation.** No agent touches another workstream's files. Stream B does not edit `/lib/spotlight/`; Stream A does not edit listener routes; Stream C does not touch the public site. Files belong to one workstream.
3. **Only the foundation phase modifies the database schema.** No parallel agent edits `/db/schema/spotlight.ts`. If a workstream discovers the schema is wrong, it stops and reports — no unilateral patching.
4. **Every workstream stops at its own validation gate** and reports to Geoff. Geoff sees five reports at the end of Phase 2 and decides whether everything is green before Phase 3 integration begins.
5. **If an agent thinks a contract is wrong**, it stops, reports, and waits. Do not patch the contract under another agent's nose.

### Phase 0 — Read and report (sequential, no code)

Read `/spotlight-resources/kansas-city-public-source-legal-news-monitoring__1_.md`, `/spotlight-resources/Kansas_City_MO__Public_Intelligence_Hub_for_Legal___News_Monitoring.md`, `/specs/yonke-project-state.md`, and `/AGENTS.md`. Confirm the current state of `/app/spotlight-corner/` (stub, placeholder, or populated?). Report back: what is in place, what is missing, what you anticipate as conflicts, and your proposed Phase 2 agent allocation across the five workstreams. **STOP. Wait for sign-off.**

### Phase 1 — Foundation (sequential)

Build the foundation that everything else depends on:

- `/db/schema/spotlight.ts` — all tables (signals, signal_links, drafts, publishes, audit_log, sources)
- `drizzle-kit push` against the dev database to materialize the schema
- `/lib/spotlight/contracts.ts` — exhaustive TypeScript types and function signatures for every cross-layer interface listed in rule 1 above
- `/lib/spotlight/audit.ts` — the audit-log writer used by every layer
- Seed `spotlight_sources` registry with all 11 sources from the Layer 1 table, marked inactive

Run `tsc --noEmit` to confirm contracts compile clean. **STOP. Wait for sign-off.**

### Phase 2 — Parallel build (5 workstreams)

After Phase 1 sign-off, spin up five parallel agents. Each owns one workstream end-to-end and stops at its own validation gate. Report independently when done.

#### Workstream A — Pipeline modules

Sequential within the stream, parallel with the rest.

- **Build order within A:** scorer → verifier (cross-ref + Knowledge Graph) → drafter (Vertex AI Gemini in grounded-RAG mode with Workload Identity Federation)
- **Files:** `/lib/spotlight/scorer.ts`, `verifier.ts`, `knowledge-graph.ts`, `drafter.ts`
- **Validation gate:** seeded signal flows through scorer → verifier → drafter; a `spotlight_drafts` row exists with inline citations; Gemini call hash logged in `spotlight_audit_log`; the drafter refuses to generate any claim it cannot cite

#### Workstream B — Listeners

Three parallel sub-batches by source shape. Each sub-batch can be its own sub-agent.

- **B1 — JSON API listeners:** NWS, KCMO 311, Dangerous Buildings, NPD Violations, Reddit
  - Files: `/app/api/spotlight/listen/{nws,kcmo311,dangerous-buildings,npd-violations,reddit}/route.ts`
- **B2 — RSS listeners:** KCPD, KSHB, KCUR
  - Files: `/app/api/spotlight/listen/{kcpd,kshb,kcur}/route.ts`
- **B3 — Respectful scrape listeners:** MSHP, Evergy, OSHA
  - Files: `/app/api/spotlight/listen/{mshp,evergy,osha}/route.ts`
- **Validation gate (per sub-batch):** each listener writes a normalized `Signal` (per `contracts.ts`) to `spotlight_signals`; cadence honored; User-Agent set; robots.txt respected; errors logged to audit, not silently swallowed

#### Workstream C — Admin UI

Three parallel pages.

- **Files:** `/app/admin/spotlight/page.tsx` (three-column dashboard), `/app/admin/spotlight/[draftId]/page.tsx` (detail + approval view), `/app/admin/spotlight/investigation-leads/page.tsx`
- **Reads from:** `spotlight_drafts`, `spotlight_signals`, `spotlight_audit_log`
- **Writes (via the relevant API endpoint, not direct DB):** approval, rejection, edit, schedule, promote-to-feature events into `spotlight_audit_log`
- **Validation gate:** seeded draft is approvable end-to-end through the UI; password middleware gates `/admin/*` correctly; every action lands in audit log

#### Workstream D — Public site

Four parallel pages.

- **Files:** `/app/spotlight-corner/page.tsx` (listing), `[slug]/page.tsx` (article), `feed.xml/route.ts` (RSS), `featured/page.tsx`
- **Reads from:** `spotlight_publishes`
- **Validation gate:** a seeded publish renders at `/spotlight-corner/[slug]/` with valid JSON-LD (Article + Person + sameAs to cited sources); listing page renders; RSS feed validates against an RSS validator

#### Workstream E — Output channels

Two parallel sub-batches.

- **E1 — Legal Pulse email pipeline**
  - Files: `/lib/spotlight/gmail.ts`, `/app/api/spotlight/legal-pulse/route.ts`
  - OAuth: `SPOTLIGHT_GMAIL_OAUTH_*` env vars (Geoff provides)
  - Recipients: `LEGAL_PULSE_RECIPIENTS=mike@yonke.law,mike@yonke-law.com`
  - Validation gate: manual trigger sends email to both addresses; six required sections present; plain HTML + text fallback
- **E2 — Drive archive**
  - Files: `/lib/spotlight/drive.ts`, `/app/api/spotlight/drive/route.ts`
  - OAuth: `SPOTLIGHT_DRIVE_OAUTH_*` env vars (Geoff provides)
  - Validation gate: `/Yonke Law - Spotlight Corner Archive/` folder structure created; seeded publish appears as `.gdoc` in correct path with front-matter cataloging block

**End of Phase 2:** five reports arrive (A, B, C, D, E). Geoff reviews all of them together. Any red light blocks Phase 3 until resolved. **STOP. Wait for sign-off on all five.**

### Phase 3 — Integration (sequential)

Wire all workstreams end-to-end on a single real signal:

- A real NWS alert flows through ingest → score → verify → draft
- The draft appears in the admin dashboard
- Mock approval triggers publish
- The article appears at the live URL with valid schema
- A test trigger of the Legal Pulse endpoint includes the publish in the email
- The Drive folder receives the archived `.gdoc`

**STOP. Wait for sign-off.**

### Phase 4 — Production hardening (sequential)

- Activate all 11 listeners in `spotlight_sources` registry
- Enable Netlify Scheduled Functions schedules per source cadence
- Enable the 5:00 AM Central Legal Pulse cron
- Source health monitoring active (errors surface in next day's email)
- Run global acceptance criteria below; report pass/fail per item

**STOP. Wait for final sign-off.**

---

## Acceptance criteria — global

The system is accepted only when all of the following are true:

- A signal can be ingested from any of the implemented sources and traced end-to-end through the database via `spotlight_audit_log`
- No draft contains a claim that cannot be traced to a quoted source span in the retrieval context
- Mike can approve, reject, or edit drafts from `/admin/spotlight/` and every action is logged
- A published article appears at `/spotlight-corner/[slug]/` with valid JSON-LD including `sameAs` to all cited sources
- The daily email sends to `mike@yonke.law` and `mike@yonke-law.com` at 5:00 AM Central with the six sections specified, in plain HTML, archived to that day's Drive folder
- An archived copy of each published article exists in the correct Drive folder with the front-matter cataloging block
- No source listener is hammering its target — all cadences honored, User-Agent set, errors logged not silently dropped
- Investigation Leads (scanner/social-only) sit in their own queue and never auto-promote

---

## A note on what you should NOT do

- Do not generate placeholder content to "demo" the pipeline. Every visible piece of content must trace to a real source.
- Do not insert AI-generated images anywhere. Use chart.js, Google Maps embeds, licensed source photos with credit, or icon illustrations only.
- Do not allow direct DB writes from anywhere except the Spotlight pipeline endpoints. The site is a reader; the pipeline is the writer.
- Do not bypass the Mike approval gate even for "obvious" stories. Every piece passes through the queue.
- Do not silently swallow source errors. Every failed pull writes to `spotlight_audit_log` and surfaces in the Legal Pulse email's Source Health section.

---

## After Phase 0

Geoff will respond to your Phase 0 report. Wait for his sign-off before any code is written. If anything in this prompt is unclear, ask before assuming.

*End of build prompt.*
