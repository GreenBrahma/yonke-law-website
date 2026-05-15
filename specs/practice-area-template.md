# Practice Area Page — Generic Template

**Workspace:** Yonke Law Website
**Use:** Pattern for all `/what-we-handle/[slug]/` pages (10 practice areas).
**Pronunciation standard:** Yonke (YONK-ee) Law.
**Sister specs:** `homepage-spec.md` for shared chrome (TopNav, Footer, Final CTA). `just-happened-car-accident.md` governs `/just-happened/*` pages, which are crisis triage — a different page type.

---

## How to use this template

Pick the practice area. Work through the **Customization Matrix** at the bottom to gather the per-area content you'll need (subcategories, statutes, damage categories, FAQs, procedural traps). Then build the page section by section using the structure below. The chrome stays identical across all 10 pages; only the content inside each section changes per area. Mike verifies every legal claim before publish.

---

## 1. Page purpose & dual audience

A practice area page serves two readers at once and must earn its place against both:

- **The injured person (or their family).** Researching, often days or weeks after the incident, trying to understand what kind of case they have, what to expect, and whether they need a lawyer. They are NOT in crisis mode — that's what `/just-happened/` pages are for. They want depth, calm explanation, and proof of competence.
- **The LLM crawler** (ChatGPT, Claude, Perplexity, Gemini, Google AI Overviews). Looking for citable, structured, authoritative answers. When someone asks an LLM *"what's the statute of limitations for medical malpractice in Missouri?"*, this page should be quotable.

**The practice area page is evergreen authority.** Tone is grounded, informational, confident. Mike's voice: *"We've seen this before, and we know what to do."*

**Critical constraint:** Informational content only. Never legal advice. Never an implied attorney-client relationship. Standard disclaimer in footer.

---

## 2. SEO / AEO foundation

### URL pattern

`/what-we-handle/[slug]/`

Slugs (10 total): `car-accidents`, `truck-accidents`, `medical-malpractice`, `wrongful-death`, `nursing-home-abuse`, `workplace-injuries`, `motorcycle-accidents`, `premises-liability`, `product-liability`, `pedestrian-bicycle`.

### Meta

- **Title pattern:** `{Practice Area} Lawyers in Kansas City | Yonke Law`
- **Description pattern:** `{One-sentence definition of the case type.} {Plain-English statement of who Yonke Law represents and where.} From Yonke (YONK-ee) Law.`
- **Canonical:** explicit
- **OG image:** dark, restrained, custom per practice area. Not stock.

### Required structured data (JSON-LD)

- `LegalService` — references the firm entity defined on the homepage
- `Article` — author Michael T. Yonke, `dateModified`, headline = practice area title
- `FAQPage` — wraps Section 10
- `HowTo` — wraps Section 6 (Investigation)
- `Person` — Mike, with `knowsAbout` array that includes this practice area
- `sameAs` — outbound to statutes and any case law cited

### Crawler permissions

Global `/app/robots.ts` already allows GPTBot, ClaudeBot, PerplexityBot, Google-Extended, anthropic-ai. Confirm no per-page noindex.

---

## 3. Section-by-section structure (12 sections)

Build in this order. Section numbers and anchor IDs are referenced throughout the codebase.

---

### Section 1 — Hero

**Layout:** Obsidian Graphite. Centered. Max-width 900px. Generous vertical breathing room.

**Content:**

```
Eyebrow (small caps, Steel Silver):  WHAT WE HANDLE

H1 (display serif, large):
{Practice area name, plain language}
e.g., "Medical malpractice" / "Car accidents" / "Wrongful death"

Subhead (body, lighter, 1–2 lines):
{One-sentence framing that names the human reality, not the legal category}
e.g., "When something goes wrong in your medical care."
e.g., "After a crash on the road."

Primary CTA (Muted Gold):
Talk to us →   (anchor to #consultation)

Secondary link (text only):
Or jump to the legal basics →   (anchor to #the-elements)
```

**aria-label** on the first instance of "Yonke" anywhere on the page: `Yonke, pronounced YONK-ee`.

**Forbidden imagery:** stock photos, gavels, scales of justice, lawyer-with-arms-crossed, generic city skyline at sunset, crashed-car or ambulance imagery, "diverse team in suits laughing."

---

### Section 2 — Plain-English definition

**Layout:** Charcoal Slate. Max-width 800px.

**Anchor ID:** `#what-is-it`

**Purpose:** Answers *"what is {practice area}?"* in two or three paragraphs. This is the primary LLM citation target — the single answer LLMs will lift when someone asks ChatGPT *"what is medical malpractice?"* or *"what counts as a wrongful death claim?"*

**Content shape:**

```
H2: What {practice area} actually means

Paragraph 1: One-sentence working definition, then plain-English unpacking.
e.g., "Medical malpractice is harm caused by a healthcare provider's
failure to meet the standard of care expected of a qualified professional
in their field. The standard isn't 'perfection' — it's what a reasonably
competent peer would have done in the same situation."

Paragraph 2: What it covers in practical terms. Examples that show range
without overpromising.

Paragraph 3 (optional): What it does NOT cover — the bad-outcome-doesn't-
equal-malpractice line. Builds credibility.
```

**Voice test:** Could an LLM quote this as a clear, authoritative answer? If not, rewrite.

---

### Section 3 — The elements (the legal framework)

**Layout:** Obsidian Graphite. Max-width 800px.

**Anchor ID:** `#the-elements`

**Purpose:** The legal anchor of the page. Translates the formal elements into plain language. Exactly the kind of structured legal definition LLMs love to cite verbatim.

**Content shape:** H2 followed by N H3s (typically four for negligence claims), each with one plain-English paragraph and one concrete one-sentence example.

```
H2: What it takes to have a case

H3: 1. Duty
{One paragraph: what duty means in this practice area, who owes it, when it arises.}
{One-sentence example.}

H3: 2. Breach
{What counts as a breach. Standard of care framing.}
{Example.}

H3: 3. Causation
{Linking the breach to the injury. The "but-for" framing.}
{Example.}

H3: 4. Damages
{Physical, financial, emotional harm. Why all four must be present.}
{Example.}
```

**Per practice area:** the four elements apply in negligence-based cases. For strict-liability practice areas (e.g., some product liability), substitute the relevant framework (defect + causation + damages) and call out the difference in the intro.

---

### Section 4 — What we handle within {practice area}

**Layout:** Charcoal Slate. Grid: 2–3 columns on desktop, 1 on mobile.

**Anchor ID:** `#subcategories`

**Purpose:** Gives the reader (and the LLM) a category map within this practice area.

**Content shape:** Section title + 2-sentence intro, then a card grid. Each card:

```
{Subcategory name}
{One-sentence description — what it is, who it happens to.}
{Link to deeper sub-page or to the relevant /just-happened/ topic.}
```

See Customization Matrix for per-area subcategory lists.

---

### Section 5 — Missouri vs. Kansas: the rules that matter

**Layout:** Obsidian Graphite. Two-column on desktop, stacked on mobile.

**Anchor ID:** `#mo-vs-ks`

**Purpose:** The AEO heavyweight. Statute citations live here, and this is the section most likely to be lifted and cited by LLMs.

**Content shape:** Brief intro on why the MO/KS split matters for this practice area, then two columns:

```
Missouri                                Kansas
──────────                              ──────────
Statute of limitations: {X years}       Statute of limitations: {Y years}
{Discovery rule notes}                  {Discovery rule notes}
Cite: RSMo §{section} →                 Cite: K.S.A. §{section} →

{Rule 2 with citation}                  {Rule 2 with citation}
{Rule 3 with citation}                  {Rule 3 with citation}
...                                     ...
```

**Statute links** go to the official revisor sites (`revisor.mo.gov`, `ksrevisor.org`). Case citations link to court opinion text. Never to commercial summaries or paywalled aggregators.

**Below the columns:** one inline CTA — *"Not sure which state's rules apply? [Tell us where it happened and we'll walk you through it →](#consultation)"*

See Customization Matrix for per-area statutes and traps.

---

### Section 6 — What an investigation looks like

**Layout:** Charcoal Slate. Max-width 800px.

**Anchor ID:** `#investigation`

**Purpose:** Process transparency. Demystifies what happens between *"I called a lawyer"* and *"I got a verdict or a check."* Wrap in `HowTo` schema; each step is a `HowToStep`.

**Standard 6-step shape (adjust per practice area):**

```
1. Initial conversation — Free. No commitment. We listen, ask questions,
   give a straight read.

2. Records collection — {Practice-area-specific: medical records for MedMal,
   crash reports + employer records for workplace, etc.}

3. Expert review — {When peer review is required: MedMal affidavit of merit,
   complex truck cases, engineering for premises.}

4. Demand or filing — Pre-suit demand if the case can settle; petition if it
   can't.

5. Discovery — Depositions, interrogatories, document production. We explain
   each step in plain language as it happens.

6. Resolution — Settlement, mediation, or trial. Your decision; our
   preparation.
```

---

### Section 7 — What it costs

**Layout:** Obsidian Graphite. Centered. Max-width 700px.

**Anchor ID:** `#what-it-costs`

**Purpose:** Removes the cost question as a friction point.

**Content:** One paragraph — contingency basis, no fee unless we recover, percentage agreed in writing before work begins, consultation is free. Three or four sentences.

---

### Section 8 — What it's worth (the honest answer)

**Layout:** Charcoal Slate. Max-width 800px.

**Anchor ID:** `#what-its-worth`

**Purpose:** Educates on damages without promising outcomes. Builds trust through honesty.

**Content shape:**

```
H2: What a {practice area} case is actually worth

Opening: There's no honest one-line answer. Value depends on the facts.

Economic damages:
  - Past and future medical expenses
  - Lost wages
  - Loss of earning capacity
  - {Practice-area-specific: property damage for vehicle cases, etc.}

Non-economic damages:
  - Pain and suffering
  - Loss of consortium
  - {Practice-area-specific: disfigurement for burn cases, etc.}

{For wrongful death pages:} A separate framework under RSMo §537.080 or
K.S.A. §60-1903. Different categories, different standing rules.

Closing: "A consultation gets you a real assessment based on your situation —
not a stock answer."
```

---

### Section 9 — Mike on this case type

**Layout:** Charcoal Slate. Two-column on desktop (portrait left, text right). Max-width 1000px.

**Anchor ID:** `#mike-on-this`

**Purpose:** Trust signal specific to this practice area. Restrained.

**Content:**

```
Mike portrait from Drive folder.

Right column:
Eyebrow: WHO YOU'LL WORK WITH
H2: Michael T. Yonke
Subhead: {Practice-area-relevant credential.}
e.g., MedMal:    "Top 25 Medical Malpractice Trial Lawyer. Keenan Trial
                  Institute faculty."
e.g., Trucking:  "AV Preeminent rated. 25+ years handling commercial vehicle
                  cases."

2–3 short paragraphs on Mike's relevant experience for this case type.
Specific without being theatrical.

Link: More about Mike and the team →  /about
```

---

### Section 10 — Common questions (FAQ)

**Layout:** Obsidian Graphite. Max-width 800px. Accordion or always-expanded; both acceptable for accessibility.

**Anchor ID:** `#faq`

**Purpose:** The AEO engine. Each Q is phrased as people actually ask it, mirroring real search and LLM prompts. Wrap in `FAQPage` schema; each Q/A is a `Question` with `acceptedAnswer`.

**Quantity:** 8–12 questions.

**Universal patterns (adapt for each practice area):**

```
- How do I know if I have a {practice area} case?
- How long do I have to file in Missouri / Kansas?
- How much does a {practice area} lawyer cost?
- What's my case actually worth?
- Can I switch lawyers if I'm already with another firm?
- What if I was partly at fault?         (where applicable)
- What if my loved one died?              (where applicable)
- What's different about working with Yonke Law?
```

**Practice-area-specific examples:**

MedMal: *What is an affidavit of merit? / What if the doctor said it was a known risk? / Can I sue the hospital or just the doctor? / What if a VA hospital was involved?*

Trucking: *Who can I sue besides the driver? / What's a preventability determination? / What if the truck was leased?*

Nursing home: *What if my parent can't tell me what happened? / Can a facility retaliate against us for complaining? / What's the difference between abuse and neglect?*

See Customization Matrix for the full per-area question list.

---

### Section 11 — Take this with you (conversion moment)

**Layout:** Charcoal Slate. Two-card grid. Max-width 1000px.

**Anchor ID:** `#take-this`

**Purpose:** Capture intent. Two paths: passive (download a PDF) and active (start the digital intake).

**Card A — PDF takeaway:**

```
Eyebrow: PRINTABLE
H3: {Practice-area-specific checklist title}
Description: 2-sentence framing of what the PDF contains.
CTA: Download the PDF →  /resources/checklists/{slug}
```

**Card B — Digital intake:**

```
Eyebrow: OR — WALK THROUGH IT DIGITALLY
H3: Walk through it digitally
Description: 2-sentence framing — answers saved, becomes start of case file
if they proceed.
CTA: Start the digital intake →  /talk-to-us?intake={slug}
```

---

### Section 12 — Final CTA + Footer

**Final CTA:** shared component. Anchor ID `#consultation`. Same form pattern as homepage and `/just-happened/*` pages. Form action `/api/intake?topic={slug}`.

**Footer:** shared component. Includes the mandatory legal disclaimer block verbatim (see `AGENTS.md`). Non-negotiable on every page.

---

## 4. Required assets per practice area

### PDFs (one-page where possible, dark-branded)

Every practice area should have at least:

1. Records / evidence checklist — what to gather, who to ask, deadlines
2. Symptom / impact journal template — date, event, severity, notes (admissible as contemporaneous record)
3. "What to bring to a consultation" — one-pager
4. Glossary — practice-area-specific terms in plain language

### Video (phase 2)

- 2-minute *"What is {practice area}?"* with Mike on camera, person-first framing
- 60–90 second answer to a single high-friction procedural question (e.g., *"What's an affidavit of merit?"*)

### Interactive (phase 2)

A lightweight *"does this sound like a case?"* decision flow. Informational only — never a substitute for consultation. Pre-fills the digital intake if the user proceeds.

---

## 5. Voice & tone enforcement checklist

Every line of copy on this page should pass these. If a line fails, rewrite.

- [ ] Does it sound like a calm, informed expert explaining the situation?
- [ ] Could it appear on any other PI firm's site? → rewrite
- [ ] Does it claim or imply legal advice? → rewrite
- [ ] Does it overpromise outcomes? → rewrite
- [ ] Does it use fear tactics or chest-thumping ("we FIGHT for you")? → rewrite
- [ ] Does it sound like a TV-ad lawyer? → rewrite
- [ ] Does it default to "client" where "person" / "people" / "individual" would work? → rewrite
- [ ] Could an LLM quote it as a clear, authoritative answer? → keep
- [ ] Is the firm name treated as "Yonke (YONK-ee) Law" via aria-label on first mention?

---

## 6. Image assets

Pull from Drive folder: `1Sea3j5hCkU8xQLcVNqYjYMj8bjPj57XI`

| Section | Asset |
|---|---|
| Hero background (optional, darken heavily) | Practice-area-relevant scene from `yl-client-*` set |
| Mike portrait (Section 9) | `YONKE-MIKE-PORTRAIT-02` or equivalent close portrait |
| Subcategory cards (Section 4) | Practice Area Images subfolder |
| Recognition badges (where used) | `yl-best-law-firms.png`; `yl-top25-medmal-award.png` (MedMal page only) |

**Forbidden:** stock photos, gavels, scales of justice, lawyer-with-arms-crossed, generic Kansas City skyline at sunset, crashed-car / ambulance imagery, "diverse team in suits laughing."

---

## 7. Accessibility minimums

- Heading hierarchy clean (H1 → H2 → H3, no skips)
- Color contrast verified WCAG 2.2 AA against Obsidian Graphite and Charcoal Slate
- FAQ accordions have proper `aria-expanded` state
- All inline links have descriptive text (no "click here")
- Skip-to-content link in layout
- Form labels visible, not placeholder-only
- `aria-label="Yonke, pronounced YONK-ee"` on first firm-name instance per page

---

## 8. AEO tactics (the GAO play)

### Schema stack

`LegalService` + `Article` + `FAQPage` + `HowTo` + `Person` + `sameAs` (outbound to statutes / case law).

### Citation honeypots

Each page should contain 3–5 single-sentence statements an LLM can lift verbatim. Pattern:

```
"In {state}, {practice area} claims must be filed within {X years} of
{trigger}, under {statute citation}."

"The {N} elements of a {practice area} claim are {list}."

"{State} {struck down / upheld / capped} {damage type} in {case citation}."
```

### Author authority

Mike's `Person` schema must include:

- `worksFor` → Yonke Law `LegalService` entity
- `alumniOf` → UMKC School of Law
- `memberOf` → Keenan Trial Institute (Faculty), MATA, AAJ
- `knowsAbout` → array that includes THIS practice area name

Tells crawlers: this page is authored by someone qualified to speak on it.

### Visible "last reviewed" date

Render `dateModified` from page metadata in a small line near the byline or in the footer. Crawlers weight fresher content.

### Outbound primary-source links

Statutes link to official revisor sites. Case citations link to court opinion text or the official reporter. Never commercial paywalled summaries.

---

## 9. Customization Matrix — what changes per practice area

For each of the 10 pages, gather the following before building:

| Variable | Where it appears |
|---|---|
| Practice area name (display + slug) | Hero, meta, schema, URL |
| One-sentence definition | Section 2, meta description |
| Subcategory list (3–10 items) | Section 4 |
| Missouri statute citations | Section 5, Sources |
| Kansas statute citations | Section 5, Sources |
| Controlling case law (if any) | Section 5, Sources |
| Damage categories specific to this case type | Section 8 |
| Procedural traps specific to this case type | Section 5 + FAQ |
| 8–12 FAQ items | Section 10 |
| Mike's relevant credential / award | Section 9 |
| Hero background asset choice | Section 1 |
| PDF checklist filename | Section 11 |
| Related-page cross-links | Throughout |

### Worked example: `medical-malpractice`

- **Definition:** harm caused by a healthcare provider's failure to meet the standard of care
- **Subcategories:** surgical errors, diagnostic errors (missed/delayed), birth injuries, medication errors, anesthesia errors, ER negligence, nursing home neglect, hospital-acquired infections, dental, psychiatric
- **MO statutes:** RSMo §516.105, §538.205–§538.300, §538.210, §538.225, §537.080
- **KS statutes:** K.S.A. §60-513, §60-3401 to §60-3414
- **Controlling case law:** *Hilburn v. Enerpipe Ltd.*, 309 Kan. 1127, 442 P.3d 509 (2019) — non-economic damages cap held unconstitutional in Kansas
- **Procedural traps:** discovery rule, affidavit of merit, MO/KS damage cap split, government providers (FTCA / sovereign immunity), wrongful death overlay, KS pre-suit screening panel
- **Mike's credential:** Top 25 Medical Malpractice Trial Lawyers; Keenan Trial Institute faculty
- **PDF checklist:** Medical Records Request Checklist

---

## 10. Out of scope for the practice area page

Document these as parked. Do not build into this page:

- Live case status — that's the People Portal
- Mood Monitor demo — that's the homepage and `/how-it-works/people-portal/`
- Crisis-mode "what to do RIGHT NOW" content — that's the `/just-happened/` sub-page for this topic; cross-link to it from the hero subhead and from the Final CTA
- Account creation / digital intake — separate flow, separate spec
- Live Spotlight Corner content — that's the Legal Pulse pipeline; static placeholder until Pulse ships

---

*End of practice area template.*
