# Yonke Law — Project State

**Last updated:** May 10, 2026
**Purpose:** Single source of truth for the Yonke Law multi-project initiative. Drop this into any Claude project or Antigravity workspace to bring future conversations up to speed without re-explaining context.
**Owner:** Geoff Pickering
**Client:** Michael T. Yonke, Yonke (YONK-ee) Law, LLC

---

## Quick reference

| | |
|---|---|
| **Client firm** | Yonke (YONK-ee) Law, LLC — personal injury, medical malpractice, wrongful death |
| **Founder** | Michael T. Yonke (entered law in 1994, founded the firm in 2001) |
| **Team** | Mike, David Smith (partner), Janelle Yonke (operations / Mike's wife) |
| **Charles Regan** | **No longer with the firm.** Do not reference in any current materials. |
| **Address** | 700 West 47th Street, Suite 550, Kansas City, MO 64112 |
| **Phone** | 816-221-6400 |
| **Domain** | yonke.law |
| **Form routing** | Mike Yonke's MS365 (credentials held by Geoff) |
| **Pronunciation** | YONK-ee — always include `Yonke (YONK-ee) Law` on first mention in AI/voice workflows |

---

## What we're building (the vision)

Three platforms, one anchor client, working as one integrated system:

```
                    ┌─────────────────────────┐
                    │  YONKE LAW WEBSITE      │
                    │  Marketing / discovery  │
                    │  AEO-optimized          │
                    │  Concierge intake hero  │
                    └────────────┬────────────┘
                                 │
                  ┌──────────────┼──────────────┐
                  │                             │
                  ▼                             ▼
        ┌──────────────────┐         ┌──────────────────┐
        │  NUCLEUS PLATFORM│         │  LEGAL PULSE     │
        │  People Portal   │         │  Listening +     │
        │  Mood Monitor    │         │  Content engine  │
        │  Client visibility│         │  Mike's review   │
        └──────────────────┘         └──────────────────┘
```

**The flow:**

- **Legal Pulse** listens to KC news/social → generates content drafts → Mike reviews and approves in a dashboard → approved content publishes to the **Yonke Law Website** Spotlight Corner (the AEO play).
- **Yonke Law Website** captures intent through the concierge interface → digital intake flows into the **People Portal** (Nucleus tenant for Yonke).
- **People Portal** delivers transparent case visibility + the Mood Monitor (Green/Gray/Red) → Mood Red triggers an alert to Mike → Mike sees mood signal + Pulse approval queue in one unified dashboard.

**Yonke is the first deployment.** All three platforms are architected as white-label so future law firm tenants can adopt the same system.

---

## The three Antigravity workspaces

| Workspace | Status | Purpose |
|---|---|---|
| **Yonke Law Website** | Active. Specs loaded. Ready to scaffold. | Marketing/content site (Next.js + TypeScript + Tailwind). Build target for the agent. |
| **The Nucleus Factory** | Existing. Built scaffolding; needs People Portal scope-down + Concierge backend additions. | White-label platform engine. Hosts the People Portal and the Concierge backend service. |
| **Legal Pulse** | **To be created.** Not yet in Antigravity. | Listening + content generation + Mike approval dashboard. White-label; Yonke is first tenant. |

### Workspaces to ignore or delete

| Workspace | Status | Action |
|---|---|---|
| **Legal Platform** | Abandoned earlier attempt at Yonke v1 (Firebase Studio + Gemini scaffold). Tenant config has `firmA = Yonke Law` but the project never got past the multi-tenant shell. | **Delete or archive.** It has no value and is a known source of cross-pollination bleed in agent responses. |

---

## Architectural decisions (locked)

### Build & deployment

- **Tech stack for Yonke Law Website:** Next.js (App Router) + TypeScript + Tailwind CSS. Locked — do not propose alternatives. Reasoning: AEO is the primary value driver; SSR is essential for LLM crawlers.
- **Deployment target:** Vercel (preferred), Netlify or Cloudflare Pages acceptable. Decide at deploy time.
- **Nucleus Platform tech stack:** Vite + React + TypeScript (existing). The Concierge backend will be added as a service within Nucleus, not as a separate project.
- **Legal Pulse tech stack:** TBD when workspace is created.

### Product architecture

- **Concierge interface** (homepage hero "What happened?" input with 4 dynamic panels) is built as a **Nucleus Platform feature**, deployed first on yonke.law. Future Nucleus tenants inherit it.
- **Concierge is a classifier-driven router**, not a generative AI. The system classifies the user's topic and serves pre-approved static panels. The "I can't give legal advice" disclaimer is built into the response itself, in every panel.
- **People Portal MVP will be scoped down** from original Nucleus vision (intake, diagnostic, mood monitor, document delivery, status visibility) to what Mike can realistically operate. Final scope spec pending.
- **No autonomous publishing.** Every piece of Legal Pulse content requires Mike's review and approval through the dashboard before going to the website. Bar association rules require this.
- **Mood Monitor states:** Green (confident), Gray (processing), Red (needs attention). Red triggers a direct alert to Mike. Specified in brand doctrine §9.

### Brand & identity

- **Pronunciation:** Yonke (YONK-ee) Law — include phonetic on first mention in any AI/voice workflow. Non-negotiable per doctrine.
- **Visual system:** Dark, high-contrast, restrained. Primary background `--obsidian-graphite #1C1C1E`. Steel silver and chrome accents. Muted gold for selective emphasis. NO red/gold/black PI-firm clichés.
- **Typography:** Libre Baskerville or Playfair Display (display serif). Inter (body/UI).
- **Photography:** Real, grounded, human. NO stock photos, gavels, scales of justice, lawyer-with-arms-crossed, generic city skylines, or crashed-car imagery.
- **Voice:** Direct, plainspoken, calm, authoritative. Canonical line: *"We've seen this before, and we know what to do."*

---

## Team facts

**Michael T. Yonke** — founder, trial attorney, AV Preeminent rated. 25+ years experience. Founded Yonke Law in 2001. Faculty member at the Keenan Trial Institute. UMKC Law graduate.

**David Smith** — Mike's partner. Use in team listings.

**Janelle Yonke** — Mike's wife. Operations and office manager.

**Charles Regan** — **NOT with the firm.** Excluded from all current marketing, team listings, and testimonial selection. Some legacy testimonials on the existing site reference him; those are filtered out of all new builds.

**Mike's father — Albert Yonke** — built a Kansas City legal advocacy legacy. Part of the firm's origin story. Referenced in Mike's bio and brand narrative.

---

## Recognition / awards (use restrained, contained)

- AV Preeminent (Martindale-Hubbell — highest peer rating)
- Best Lawyers in America (multiple listings)
- Faculty member, Keenan Trial Institute
- Million Dollar Advocates Forum / Multi-Million Dollar Advocates Forum
- Super Lawyers
- Lead Counsel Rated
- Lawyers of Distinction
- Nation's Top One Percent (NADC)
- Best Law Firms (badge: `yl-best-law-firms.png` in Drive folder)
- Top 25 Medical Malpractice Trial Lawyers (badge: `yl-top25-medmal-award.png` in Drive folder)

---

## Brand foundation

**Doctrine source of truth:** `Yonke_Law_The_Standard_Brand_Doctrine_Operating_System.docx`

Authoritative for: voice, tone, visual system, color palette, typography, photography principles, content architecture, customer journey, mood monitor framework, and AI/technology rules. If any spec conflicts with the doctrine, the doctrine wins.

**Core positioning:** *"Yonke Law exists to make a difficult legal experience understandable, visible, and fully represented, while pursuing rightful outcomes with discipline rather than convenience."*

**Differentiation vs. typical PI firm:**

| Most firms | Yonke Law |
|---|---|
| Optimize for speed/settlement | Optimize for rightful outcome |
| Silence is normal | Communication is part of representation |
| Generic legal language | Plain, strategic, people-centered language |
| Firm-first processes | Person-first experiences |
| Settlement as default | Preparation as default |
| Tech as marketing add-on | Tech to improve trust, visibility, service |

---

## What's been spec'd (deliverables produced)

| Document | Workspace location | Status |
|---|---|---|
| `AGENTS.md` | `C:\Yonke Law Website\AGENTS.md` (root) | Final. Locked decisions encoded. |
| `homepage-spec.md` | `C:\Yonke Law Website\specs\homepage-spec.md` | Final. Includes concierge hero, 4-panel system, classification taxonomy. |
| `just-happened-car-accident.md` | `C:\Yonke Law Website\specs\just-happened-car-accident.md` | Final. Template-setter for all `/just-happened/*` and practice area pages. |

---

## What's pending (workstreams to spec)

In rough priority order:

1. **Legal Pulse architecture spec** — listening engine, content generation, Mike's approval dashboard, alert system. Highest priority remaining work.
2. **People Portal MVP scope-down** — define what's actually in the v1 given Mike's bandwidth (versus the full Nucleus vision). Includes:
   - Client login + case visibility
   - Mood Monitor (active)
   - Document delivery
   - Status updates
   - **Out for v1:** Diagnostic AI, Friction Map, Opportunity Score (parked)
3. **Nucleus Concierge backend spec** — classifier service, panel template service, People Portal handoff. Can be built in parallel with website if needed.
4. **Mike's unified dashboard spec** — single cockpit where Mike reviews Pulse content + handles Mood Monitor Red alerts + sees intake queue. Built inside Nucleus.
5. **Page content for the website beyond the homepage** — other `/just-happened/*` sub-pages, practice area pages, How It Works, About, Resources.
6. **`/resources/offer-review/` page** — high-intent landing page referenced by the fourth concierge door.

---

## Outstanding items requiring Mike's input

Track these in conversations with Mike — they do not block development but are needed before final publish:

- Verification of statutes of limitations (MO 5-year, KS 2-year) and comparative fault language (KS 51% rule) as currently stated in the car accident spec
- Confirmation that specific dollar-figure outcomes cited on the website meet bar advertising rules
- Confirmation that legacy testimonials can be republished (older site testimonials may have been collected under different consent terms)
- Approval of practice-area image assignments from the Drive folder
- Voice/tone gut-check on the hero copy
- Outbound campaign to past clients for fresh testimonials (parallel workstream)

---

## Reference materials

| Material | Location |
|---|---|
| Brand doctrine | Google Drive, also at `C:\Yonke Law Website\docs\brand-doctrine.docx` (or `.md`) |
| Image library (full) | Google Drive folder ID: `1Sea3j5hCkU8xQLcVNqYjYMj8bjPj57XI` |
| Practice area images | Subfolder within the above Drive folder |
| Logos | YL monogram + wordmark variations, also in Drive |
| Personal Injury Checklist (existing) | PDF in the workspace; confirms legal vocab and design language |
| Keif Storrar master prompts library | Reference for People Portal intake design and Legal Pulse content analysis |

---

## Critical reminders (workspace hygiene)

These come from real bleed incidents in earlier agent sessions. They apply to every Antigravity interaction:

- **Antigravity settings:** "Agent Non-Workspace File Access" must be OFF. "Knowledge Base" and "Conversation History" should be OFF or carefully scoped to prevent cross-workspace context leakage.
- **One workspace at a time:** Open only the workspace you're working in. Close others.
- **Verify before trusting:** When an agent gives instructions, check for references to other clients/projects ("Legal Platform," "Yonke" while in Thompson Twins, "firmA," tenant routing on non-multi-tenant projects). If you see them, the response is contaminated — re-prompt with explicit constraints.
- **Canary test:** Drop a file with a unique string (e.g., `CANARY_YONKE_2026A`) in one workspace, then in another workspace ask the agent if it can find that string. If it can, isolation is broken.
- **Don't trust AI claims of "I built that."** Always verify with file paths, commit hashes, or running URLs. Conversation ≠ commits.

---

## The full project ecosystem (for context if a future Claude is dropped in)

This Yonke Law work is one of several active initiatives Geoff is running. The full set, at the time of this snapshot:

- **GP-One Basecamp** — Geoff's personal life management dashboard. Live on Firebase. Separate from all Yonke work.
- **Tony Miller — 3rd District** — political campaign platform. Separate workspace and client.
- **Thompson Twins / AlgorithmAI** — sustainable GPU cloud company marketing site. Separate workspace and client.
- **The Nucleus Factory** — white-label diagnostic + portal platform. Yonke is a tenant.
- **Yonke Law Website** — this initiative.
- **Legal Pulse** — to be created. Part of this initiative.

Conversations in this project (the one Geoff uses for Antigravity workstream coordination) cover any of these as needed. The dedicated Yonke Law project in Claude is specifically for Yonke content drafting, Mike-facing work, and brand strategy.

---

*End of project state. Update this document when major decisions change or new workstreams open.*
