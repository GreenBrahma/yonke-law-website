# AGENTS.md — Yonke Law Website

**This file is the entry point for any agent working in this workspace. Read it first, every time.**

---

## What this workspace is

This is the **Yonke Law Website** — a marketing/client-acquisition site for Yonke (YONK-ee) Law, LLC, a personal injury, medical malpractice, and wrongful death law firm in Kansas City, Missouri, founded by Michael T. Yonke.

This workspace builds the public-facing website only. It is **not**:

- The People Portal (lives in The Nucleus Factory)
- The Legal Pulse content engine (lives in Legal Pulse workspace)
- The Nucleus Concierge backend (lives in The Nucleus Factory)

If a task involves any of those, **stop and clarify with the user before proceeding**.

---

## Pronunciation standard (CRITICAL)

The firm name is pronounced **YONK-ee** (rhymes with "donkey"). Whenever you generate:

- Voice/AI narration prompts
- Video scripts
- Voiceover briefs
- Screen reader hints (`aria-label`)
- Any text-to-speech instruction

…use the form `Yonke (YONK-ee) Law` on first mention. This is non-negotiable per brand doctrine.

---

## Source of truth (read in this order)

1. **Brand doctrine** — `Yonke_Law_The_Standard_Brand_Doctrine_Operating_System.docx`
   This is the authoritative reference for voice, visual system, color, typography, doctrine principles, and content architecture. It lives in Geoff's Google Drive. If any spec in this workspace conflicts with the doctrine, the doctrine wins.

2. **Build specs** (in `./specs/`)
   - `homepage-spec.md` — full spec for the homepage including concierge interface
   - `just-happened-car-accident.md` — template-setter for all `/just-happened/*` sub-pages and inherited shape for practice area pages
   - (more specs land here as workstreams open)

3. **Image assets**
   Google Drive folder ID: `1Sea3j5hCkU8xQLcVNqYjYMj8bjPj57XI`
   Includes Mike portraits, client scene photography, practice area imagery, award badges (`yl-best-law-firms.png`, `yl-top25-medmal-award.png`), and YL logo variations.
   **Never use stock photography that isn't in this folder.**

4. **Existing reference content**
   - The current live site at https://yonke.law/ — anything on it can be used (testimonials, outcomes, copy patterns)
   - The Personal Injury Checklist PDF — confirms vocabulary (MMI, Demand Letter, Discovery, Pain Journal), legal stats, and design language

---

## Tech stack (locked)

**Next.js (App Router) + TypeScript + Tailwind CSS.**

This is the locked stack. Do not propose alternatives. Reasoning: this site's primary value driver is **AEO (Answer Engine Optimization)** — being cited by Claude, ChatGPT, Perplexity, and Google AI Overviews. Server-side rendering is essential for LLM crawlers to see fully-rendered HTML with structured data. Client-side rendered alternatives (Vite/React) serve empty HTML shells to crawlers and undermine the entire value proposition of this build.

Specific framework conventions:
- Use App Router (not Pages Router)
- TypeScript strict mode
- Tailwind for styling, with CSS variables defined in `globals.css` matching the design tokens below
- Use Next.js Image component for all images (built-in optimization)
- Use Next.js Metadata API for `<head>` tags, OpenGraph, and JSON-LD
- Deployment target: Vercel (simplest), Netlify (acceptable), Cloudflare Pages (acceptable). Choose based on Geoff's hosting decision; do not assume.

---

## Architectural constraints

### Routing & page structure

Follow the sitemap in `homepage-spec.md` Section 1 nav:

```
/                              Home (with concierge hero)
/just-happened/                Hub (crisis triage)
/just-happened/[topic]/        Sub-pages (car-accident, truck, medical-error, etc.)
/what-we-handle/               Practice areas hub
/what-we-handle/[area]/        Individual practice area pages
/how-it-works/                 Process transparency + People Portal preview
/how-it-works/people-portal/   Portal preview + Mood Monitor demo
/spotlight-corner/             Legal Pulse output (placeholder until Pulse ships)
/talk-to-us/                   Contact + digital intake
/resources/                    Checklists, FAQ, jurisdiction reference
/resources/offer-review/       High-intent insurance offer evaluation page
/about/                        Mike, team, outcomes, testimonials, recognition
```

### External dependencies

| Dependency | Status | What it provides |
|---|---|---|
| Nucleus Concierge backend | Not yet built | The classifier + panel template service for the homepage hero. Until built, the homepage launches with the 4-door fallback active and the concierge text input hidden or in a "coming soon" state. |
| People Portal account creation | Not yet built | Digital intake form on Yonke website submits to People Portal. Until built, intake form submissions route to Mike's MS365 via standard email. |
| Legal Pulse | Not yet built | Source of content for `/spotlight-corner/`. Until built, this page uses static placeholder content. |
| Mike's MS365 email | Live | Form submissions route here. Credentials held by Geoff. |

When building features that depend on something not-yet-built, **build the page with a graceful fallback and clearly mark the integration point in code comments** so it can be wired up later.

---

## Doctrine principles to enforce (non-negotiable)

These come from `The Standard` and govern every decision:

1. **Dark, high-contrast, minimal.** No decorative clutter. Restraint signals confidence.
2. **Every interior page is a landing page.** Each must carry its own clarity and proof — never rely on the homepage to do the work.
3. **Person-first language.** Use "people," "individuals," "the person" before defaulting to "client."
4. **Plain language.** Translate legal jargon. Specific over clever. Direct over polished.
5. **No autonomous publishing.** Anything that touches Legal Pulse-style dynamic content requires human review before going live.
6. **Information, not advice.** This site provides educational/informational content only. Never present anything as legal advice. Never imply an attorney-client relationship.

---

## Voice & tone

**Use this voice:**
- Direct, clear, confident
- Specific, plainspoken
- Calm, controlled
- Human, respectful
- Certain where facts allow, honest where uncertainty exists

**Avoid this voice:**
- Vague, padded, overly polished
- Dense legal jargon without translation
- Theatrical, aggressive, chest-thumping ("We FIGHT for you!")
- Robotic corporate cliché ("At Yonke Law, we are committed to...")
- Overpromising, hedging, manipulative fear tactics

**Canonical voice line:** *"We've seen this before, and we know what to do."*

**Quick test on any line of copy you generate:**
- Could it appear on any other PI firm's site? → rewrite
- Does it claim or imply legal advice? → rewrite
- Does it use fear tactics? → rewrite
- Could it be quoted by an LLM as a clear, authoritative answer? → keep

---

## Visual system

Full details in brand doctrine §13–§18. Quick reference:

**Colors:**
- `--obsidian-graphite: #1C1C1E` (primary background)
- `--charcoal-slate: #2E2F33` (secondary panels)
- `--steel-silver: #C9CCD1` (accents, dividers)
- `--chrome-highlight: #F2F4F7` (lifted UI, contrast text)
- `--deep-forest: #1F3D2B` (positive states, Mood Monitor green)
- `--muted-gold: #B89B5E` (selective outcome highlights)
- `--signal-red: #7A1C1C` (alerts, Mood Monitor red)
- `--soft-gray: #E5E7EB` (neutral backgrounds, Mood Monitor gray)

**Typography:**
- Display/serif: Libre Baskerville or Playfair Display
- Body/UI: Inter (web-safe default), fallback Helvetica Neue / SF Pro / Aptos
- **No trendy fonts. No script fonts. No decorative display fonts.**

**Photography:**
- Real, grounded imagery from the Drive folder
- Show human tension moving toward calm resolution
- **Forbidden:** stock photos, gavels, scales of justice, lawyer-with-arms-crossed, generic KC skyline at sunset, crashed-car stock, ambulance lights, "diverse team in suits laughing" stock

---

## Required shared components

These appear on every page. Build once, reuse everywhere:

1. **`<Footer />`** — Includes the full legal disclaimer block (see `homepage-spec.md` Section 11 for exact required language). This disclaimer is mandatory and verbatim. Do not paraphrase, summarize, or modify it.
2. **`<TopNav />`** — Sticky header with logo, 5 nav items, phone + Talk to Us CTA
3. **Standard "Final CTA / Talk to Us" section** — Reused at the bottom of most content pages
4. **Image asset loader** — Pulls from the Drive folder; standardizes alt-text format

---

## SEO/AEO requirements (every page)

- JSON-LD schema as appropriate (`LegalService`, `Attorney`, `Article`, `FAQPage`, `HowTo`, `Person`, `Place`)
- Open Graph + Twitter cards
- Canonical URL explicit
- Allow these crawlers in `robots.txt`: GPTBot, ClaudeBot, PerplexityBot, Google-Extended, anthropic-ai
- Clean H1 → H2 → H3 hierarchy (no skips)
- Author byline with `Person` schema on content pages (Mike Yonke)
- `aria-label="Yonke, pronounced YONK-ee"` on first instance of the firm name per page

---

## Compliance constraints (Mike must sign off before publish)

- Specific dollar figures in outcomes/results require Mike's verification
- Testimonials require Mike's confirmation that consent terms cover web use
- Jurisdiction-specific legal claims (statutes of limitations, fault rules, insurance minimums) need Mike's accuracy check
- Any auto-generated content (eventual Legal Pulse output) requires Mike's approval through the Pulse dashboard — **never publish dynamic content directly to the live site**

---

## What to do before any major action

When working in this workspace, before taking a significant action (writing copy, building a component, generating images, choosing a library), verify:

1. ☐ Have I read the relevant spec in `./specs/` for what I'm about to build?
2. ☐ Does this align with the brand doctrine (especially voice, visual system, "no cleverness")?
3. ☐ Am I about to use any cliché imagery, color, or copy patterns? If so, stop and reconsider.
4. ☐ Is this content informational, not advisory?
5. ☐ Have I included the required disclaimer in any footer/page treatment?
6. ☐ For voice/AI generation: have I used "Yonke (YONK-ee) Law" on first mention?

If you're not sure, **ask the user** rather than guessing.

---

## What this workspace is NOT for

To prevent cross-workspace bleed (a known issue in prior agent sessions):

- **Do not read or reference files from `C:\Legal Platform\`** — that's an abandoned earlier attempt at a Yonke-adjacent project. It is not a source of truth for anything in this workspace.
- **Do not assume tenant configurations from The Nucleus Factory** — Yonke's tenant data, when it exists, will be configured separately and pointed to by this workspace, not duplicated here.
- **Do not generate code that integrates with non-existent services as if they're live.** If a feature depends on Nucleus Concierge or Legal Pulse, build the fallback path and leave a clearly-marked integration TODO.

---

*End of AGENTS.md. Keep this file lean. When in doubt, ask the user.*
