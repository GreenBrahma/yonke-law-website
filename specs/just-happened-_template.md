# Yonke Law — `/just-happened/*` Master Template

**File path:** `just-happened-_template.md`
**Type:** Master template doc. Underscore prefix marks this as a non-deploying reference document.
**Pattern source:** `just-happened-car-accident.md` (the original pattern-setter), calibrated against the 14 variant specs produced for the Tier 1 scenarios.
**Audience:** Anyone — Mike, the Antigravity build agent, future contributors — producing a new `/just-happened/*` scenario page.
**Pronunciation standard:** Yonke (YONK-ee) Law.

---

## How to use this template

This document is the pattern for every `/just-happened/*` page on the Yonke Law site. It captures:

- The 11-section structure that every page follows
- The SEO/AEO foundation (schema, meta, crawler permissions) that makes the page useful to LLMs and search alike
- The voice and tone rules that distinguish a Yonke Law page from a typical PI billboard page
- The sensitivity-tier framework that tells you how much the standard pattern needs to flex for the specific scenario

To produce a new page, you work through it in five passes:

1. **Determine the sensitivity tier** (Section A below) — this controls how much the pattern flexes
2. **Fill in the frontmatter and intent** (Section B below) — purpose, audience, what the page does
3. **Work through the 11 sections** (Section C below) — using the swap guidance for each
4. **Verify against the voice and tone checklist** (Section D below)
5. **Flag the Mike-confirmation items and open questions** (Section E below)

When the new page is done, it should read like a member of the same family as the existing pages — same structure, same voice, calibrated to the specific scenario.

---

## A. Sensitivity tier

Every `/just-happened/*` page sits in one of three sensitivity tiers. The tier determines how much of the standard pattern flexes.

### Standard sensitivity

**Pages in this tier:** car-accident, truck-accident, motorcycle-accident, slip-and-fall, product-recall, workplace-injury, construction-injury, and the future Tier 2 pages built on similar fact patterns (bicycle, pedestrian, rideshare, bus, boating, etc.).

**Characteristics:**
- Section 2 ("What to know") uses time-bound HowTo framing — "the first 24 hours," "the first 48 hours"
- Standard testimonial allowed in Section 6 (with consent, bar-compliance reviewed)
- Standard PDF + digital intake in Section 8
- Hero CTAs are "Read the next 24 hours →" or similar action-oriented phrasing
- Standard voice and tone checklist applies

### Moderate sensitivity

**Pages in this tier:** medical-malpractice, dog-bite, birth-injury, traumatic-brain-injury, nursing-home-abuse, wrongful-death.

**Characteristics:**
- Section 2 framing softened to "in the days and weeks ahead" — not 24-hour bound
- Testimonial section (Section 6) defaults to one of three Mike-input options (testimonial with explicit consent / anonymous outcome reference / signed Mike statement) — recommendation depends on the page
- Section 8 digital intake may branch on circumstance (still in facility / has been moved / has died; newborn / school-age / adult; etc.)
- Hero CTAs replaced with "Read what to know →" and "Or talk to someone, when you're ready →"
- Voice checklist adds: does not pathologize the survivor / family member, does not amplify guilt, acknowledges that not every situation is a case
- Statute-of-limitations sections often heavier because tolling, repose, and discovery rules are complex
- Bar-advertising compliance review recommended

### High sensitivity

**Pages in this tier:** active-shooter, sexual-abuse, and any future page involving mass-casualty events, intimate violence, child harm where the child is the reader's surviving family member, or similar.

**Characteristics:**
- Section 2 may include a visually distinct crisis-resources callout at the top (RAINN, 988, etc.)
- No "first 48 hours" framing — the page works for someone reading days, months, or years out
- Section 6 trust signal defaults to **no testimonial**; replaced with a brief signed statement from Mike
- Section 8 digital intake is fundamentally modified — low-disclosure threshold, partial-save, no required fields beyond name and contact method, no automated follow-up, "stop and leave" button visible on every screen
- Hero CTAs are the slowest on the site
- Section 10 form heading explicitly says disclosure is on the reader's terms
- Voice checklist adds: does not require disclosure to read the page, works for a reader at week one / year ten / year forty
- Bar-advertising compliance review is **required before publish**, not just recommended
- Forbidden imagery list is stricter — no human figures, no institutional interiors

The sensitivity tier should be declared at the top of every page spec.

---

## B. Frontmatter and intent

Every page spec opens with the same frontmatter block. Fill in the scenario-specific values.

```markdown
# Yonke Law — `/just-happened/<scenario-slug>/` Page Spec

**Workspace:** Yonke Law Website
**Template type:** Variant of the `/just-happened/*` pattern. Inherits the shape of `just-happened-car-accident.md`. [Add specific notes about how this page differs structurally — e.g., result-category overlay, subset of medical malpractice, etc.]
**Reference docs:** `yonke-homepage-spec.md`, `just-happened-car-accident.md` (pattern-setter), `just-happened-_template.md`, [add any companion pages — wrongful-death overlay, medical-malpractice parent, etc.], `Yonke Law — The Standard` (Brand Doctrine & Operating System).
**Pronunciation standard:** Yonke (YONK-ee) Law.
**Sensitivity:** [Standard / Moderate / High]. [If Moderate or High: state that Mike's review is required before any other reviewer.]
```

Then the page purpose & intent block:

```markdown
## 1. Page purpose & intent

This page serves a visitor who [describe the audience in concrete terms — who they are, where in their timeline they are reading, what state they are in].

It must serve [describe the range of readers] without compromising either. The page leads with [calm acknowledgment / actionable guidance / quiet acknowledgment depending on tier] and threads in [the legal framework / the protective layer / the slow path] naturally.

[For result-category overlay pages: explicit note that the page is the destination for the homepage concierge classifier whenever the "What happened?" input indicates this scenario, and cross-links to underlying-cause scenario pages.]

**Critical constraint:** This is informational content, not legal advice. The page must never claim to provide legal advice or create an attorney-client relationship. Standard disclaimers in footer apply.

[For High-sensitivity pages: add additional constraints — trauma-informed voice non-negotiable, no triggering imagery, no required action, intake fundamentally modified.]
```

---

## C. The 11 sections — section-by-section template

Every `/just-happened/*` page has the same 11-section structure. Section count is **non-negotiable** for site consistency. What varies within each section is content, not structure.

### Section 1 — Hero

**Layout:** Obsidian Graphite background. Centered, max-width 900px. Vertical breathing room scales with sensitivity tier — Standard gets standard padding, Moderate gets more, High gets the most.

**Content pattern:**

```
Eyebrow (small caps, Steel Silver):  JUST HAPPENED

Headline (display serif, large):
[Scenario-specific second-person sentence ending in "Take a breath."]

Subhead (body, lighter):
[2–3 sentences. For Standard: "Whether it was an hour ago or three days
ago, this is the clearest path forward. No fluff. No pressure. Just
what you need to know." For Moderate/High: timing range broadened —
"Whether it was last week or last year" or "Whether your child is a
newborn or grown." Includes "There is no clock on this page" for
High-sensitivity pages.]

Primary CTA (Muted Gold or Chrome Highlight):
[Standard: "Read the next 24 hours →"
 Moderate/High: "Read what to know →"]
 (anchor to #next-24 for Standard, #what-to-know for others)

Secondary link (text only, Steel Silver):
[Standard: "Or talk to someone now →"
 Moderate/High: "Or talk to someone, when you're ready →"]
 (anchor to #consultation)
```

**Headline pattern guidance:**

The headline shape is consistent: a short, plainspoken, second-person sentence acknowledging the situation, ending in *"Take a breath."* The noun changes; the shape does not. Examples from existing pages:

- *"You were just in a car accident. Take a breath."* (Standard)
- *"You just lost someone you love. Take a breath."* (Moderate — wrongful death)
- *"You realized something is wrong. Take a breath."* (Moderate — nursing home)
- *"You've been carrying this. Take a breath."* (High — sexual abuse)
- *"Brain injuries don't always show. Take a breath."* (Moderate — TBI)

The headline must pass two tests: (1) it acknowledges the reader's situation specifically without performing emotion, and (2) the "Take a breath" closer must land naturally with whatever precedes it. If it doesn't land naturally, rewrite.

**Optional background treatment:** Dim photographic image with heavy dark overlay. The image must be restrained — see Section F below for the forbidden imagery list, which is non-negotiable.

---

### Section 2 — The procedural section (the LLM-citation engine)

**Layout:** Charcoal Slate background. Max-width 800px. H2 + H3 hierarchy for schema markup.

**Anchor ID:** `#next-24` for Standard pages, `#what-to-know` for Moderate/High pages.

**Implementation note:** Wrap this entire section in `HowTo` schema. Each step gets an `HowToStep` schema entry. This section is the LLM-citation engine — it must be written so that an LLM quoting any single step returns content that is accurate, neutral, and identifiably Yonke Law's voice.

**For High-sensitivity pages only:** Add a visually distinct callout box near the top of this section with appropriate crisis-resources. For active-shooter: RAINN is not appropriate; 988 is. For sexual-abuse: RAINN (1-800-656-HOPE) and 988. Format the callout as a separate styled block, not as a step in the list.

**Structure within the section:**

```markdown
## [The next 24 hours / What to know]

[2–3 sentences of opening prose. Sets up why these steps matter and
acknowledges the emotional state of the reader. For Standard pages,
emphasize urgency without alarm. For Moderate/High pages, explicitly
note that the steps are not 24-hour-bound and the timing is the
reader's to set.]

### [Right now / Before anything else]

1. **[Action heading].** [1–2 sentence explanation in plain language.
   No jargon. No pressure.]

2. **[Action heading].** [Same shape.]

...continue with 4–6 items in this subsection...

### [Within a few hours / In the days and weeks ahead]

[Continue with 3–5 items in this subsection.]

### [Within 24 hours / Before key decisions]

[Continue with 2–4 items in this subsection.]
```

**Item count:** Standard pages typically have 10–12 items. Moderate pages 9–11. High pages 9–10 (slower pace).

**Voice within items:** Each item is a single action with a single explanation. No item should bury an action inside a paragraph of context. The action is bolded; the explanation is plain. If an item needs more than two sentences of explanation, split it.

**End of section CTA (text link, inline):**
```
*Want a printable [checklist / reference] version? [Download the [Page-Specific Reference] →](/resources/checklists/<page-slug>-reference/)*
```

---

### Section 3 — What [the other side] typically does

**Layout:** Obsidian Graphite. Max-width 800px. Informational tone, not aggressive.

**Header pattern:**

- Standard auto/truck/motorcycle: "What insurance companies typically do"
- Workplace/construction: "What the employer is doing right now"
- Medical malpractice/nursing home/birth injury: "What the hospital and [provider type] typically do"
- Product recall: "What the manufacturer is doing right now"
- Premises liability/slip and fall: "What the property owner is doing right now"
- Dog bite: "What the dog owner and their insurer are doing right now"
- Active shooter / sexual abuse: "What institutions typically do"
- Wrongful death: "What insurance companies and responsible parties typically do"
- TBI: "What insurers and defense lawyers typically do"

**Content pattern:** Two or three short paragraphs. Plain description of the institutional response. Tone is informational — "this is what they do, and here is why knowing helps you" — not adversarial. The page does not paint the other side as villainous; it paints them as well-resourced and operating on a refined playbook.

**Sample structural pattern:**

> [Name of the other party] [is doing X within hours/days of the event]. Their response is not malicious. [Brief framing of what motivates it.] Knowing how it typically operates helps you [protect yourself / understand the field / make calibrated decisions].
>
> Within the first [time window], you should expect:
>
> - **[Specific tactic].** [1–2 sentence explanation.]
> - **[Specific tactic].** [Same shape.]
> - **[Specific tactic].** [Same shape.]
>
> None of this is necessarily malicious. But it's a process that's been optimized for [their] outcome, not yours.

---

### Section 4 — FAQ (the AEO workhorse)

**Layout:** Charcoal Slate. Each Q is collapsible accordion (or always-expanded — accessibility-friendly either way).

**Implementation:** Wrap in `FAQPage` schema. Each Q/A is a `Question` with `acceptedAnswer`.

**Headline pattern:** `Common questions [about/after] [scenario]`

**Question selection criteria:**

- Each question must mirror real search and LLM prompts — use phrasing readers actually type
- Include 8–10 questions per page
- Include 2 questions on statute of limitations (one Missouri, one Kansas) — these are the highest-AEO-value questions on every page
- Include 1 question on what the firm does — but phrased neutrally, not as marketing
- Include at least 1 question that addresses a common defense argument or insurance tactic
- For Moderate/High pages, include 1–2 questions that address emotional or practical concerns specific to the scenario

**Answer voice:**

- Each answer is 1–3 sentences, drawn from the corresponding page section
- Answers must be written so that an LLM quoting any one of them returns content that is accurate, neutral, and identifiably Yonke Law's voice
- No marketing language in answers. No "you may be entitled to compensation." No "call us today."
- Statute citations belong in answers when relevant, but cited cleanly (e.g., "under § 537.080" or "K.S.A. 60-513(a)(4)")

---

### Section 5 — Missouri vs. Kansas: the rules that matter

**Layout:** Obsidian Graphite. Two-column on desktop, stacked on mobile.

**Headline:** `How the rules differ depending on where it happened`

**Content pattern:**

```markdown
## Missouri

- **Statute of limitations:** [X years for [type]] ([cite])
- **[Relevant rule type]:** [Description] ([cite])
- **[Relevant rule type]:** [Description] ([cite])
- **[Relevant rule type]:** [Description] ([cite])

## Kansas

- **Statute of limitations:** [X years for [type]] ([cite])
- **[Relevant rule type]:** [Description] ([cite])
- **[Relevant rule type]:** [Description] ([cite])
- **[Relevant rule type]:** [Description] ([cite])
```

**Content guidance:**

- 4–7 bullets per state
- Cite the specific statute or case
- Where the rule has changed or is contested, add `*(MIKE: confirm ...)*` flag inline
- The columns should be parallel — each MO bullet has a KS counterpart where possible
- Where the two states fundamentally differ in approach (strict liability vs. one-bite, no-fault vs. at-fault, etc.), the difference should be obvious from the bullets

**Special case — result-category overlay pages (wrongful death, TBI):** The SOL is cause-dependent. The MO/KS comparison should list the rules *by underlying cause* rather than as a single rule. This makes those pages' Section 5 structurally different from the others, which is correct.

**Below the columns, one inline link:**
```
Not sure which state's rules apply, or how recent legal changes might
affect your situation? [Send us the basics and we'll tell you →](#consultation)
```

---

### Section 6 — Inline trust signal

**Layout:** Charcoal Slate panel. Restrained.

**Sensitivity-aware behavior:**

- **Standard sensitivity:** Standard testimonial + outcome reference. Use a Mike-input quote from a representative case, with the client's consent, reviewed for bar-advertising compliance. See the car-accident page for the canonical example.
- **Moderate sensitivity:** Three options, in order of preference: (1) Mike-input quote with explicit written consent and bar-compliance review, (2) anonymous outcome reference with no quote and no family detail, or (3) no testimonial — replaced with a signed statement from Mike. The recommendation defaults to option 2 or 3 depending on the page; specify per page.
- **High sensitivity:** Default to **no testimonial**. Replace with a brief signed statement from Mike. Option 1 is available only when the client has affirmatively chosen to be publicly identified for their own reasons (typically through advocacy work), has given written informed consent reviewed by independent counsel, and the use has been cleared for bar-advertising compliance.

**Placeholder content (always Mike-input):**

```
[MIKE INPUT REQUIRED — choose appropriate option and provide content.]

[Default Mike-input copy here, calibrated to the page's sensitivity
and the type of cases the firm has handled in this category. Should
not promote specific outcomes. Should not name clients. Should not
reference specific dollar figures unless cleared by Mike.]
```

---

### Section 7 — When it's time to talk to a lawyer

**Layout:** Obsidian Graphite. Centered. Informational framing, not pushy.

**Headline:** `When it's worth having someone look at your situation`

**Content pattern:**

```markdown
## When it's worth having someone look at your situation

[Opening paragraph — 2–3 sentences. Acknowledges that not every
situation requires a lawyer. Sets up the "is a conversation worth
your time" framing.]

A free consultation is worth your time if **any** of the following
are true:

- [Specific situation 1 relevant to the scenario]
- [Specific situation 2]
- [Specific situation 3]
- [Specific situation 4]
- [Specific situation 5]
- [Specific situation 6]
- [Specific situation 7]

A consultation is exactly what it sounds like — a conversation. No
fee. No obligation. [Sensitivity-aware closer — for Moderate/High
pages, add: "No pressure to move forward, then or later. If we do
not think a case can be brought, or if we think a different path is
right for you, we will tell you."]
```

**Content guidance:**

- Include 5–8 bulleted items
- Each item is a single sentence describing a specific situation
- The items should not all be "you have a case" — at least one or two should be "you have a question" or "you want to understand X"
- For Moderate/High pages, explicitly include an item that says "you simply want to understand what these cases look like, without committing to anything"

**Below this, two CTAs side by side:**

- Primary: "Talk to us now" (Standard) or "Talk to us, when you're ready" (Moderate/High) — anchor to `#consultation`
- Secondary: "Or send us the basics first" — links to the offer review page or brief intake form

---

### Section 8 — Two paths forward (conversion moment)

**Layout:** Charcoal Slate. Two-column on desktop. Each side is a card.

**Headline:** `Take this with you` (Standard) or `When you're ready` (Moderate/High)

**Card 1 — Printable reference (always required):**

```
THE [PAGE-SPECIFIC] REFERENCE
[2–4 sentence description of the PDF. What it covers. Why the reader
might want it. Sensitivity-aware language.]

[Download the PDF →]
```

The PDF is a one-page-or-so reference that summarizes the page's procedural section and key facts. It is a standalone artifact the reader can save, print, or share. The PDF spec is separate; each page produces its own.

**Card 2 — Digital intake:**

```
OR — [TURN YOUR ANSWERS INTO AN INTAKE / WHEN YOU'RE READY, WALK
THROUGH WHAT WE'D WANT TO KNOW / SEND A BRIEF MESSAGE]
[2–4 sentence description. Sensitivity-aware framing.]

[Free / Confidential / [Time estimate]]. Your answers are private
and encrypted.

[Start the digital intake → / Send a brief message →]
```

**Sensitivity-aware modifications:**

- **Standard:** Standard intake (5–10 minutes, creates People Portal account, pre-fills Mike's intake)
- **Moderate:** Intake may branch on circumstance (still in facility / has been moved / has died, or newborn / school-age / adult, etc.). Note the branching logic in an Implementation note below the cards.
- **High:** Intake fundamentally modified — lowest possible disclosure threshold, no required fields beyond name and contact method, partial-save capability, no automated follow-up, "stop and leave" button visible on every screen. The intake on a High-sensitivity page is a **different intake** from the standard People Portal intake. Spec for this modified intake is separate and requires its own design review.

**Implementation note** (always include):

```
Implementation note: The digital intake creates a People Portal
account on submission. [Sensitivity-aware notes about branching or
modification.] Spec for the intake flow is separate.
```

---

### Section 9 — Related pages

**Layout:** Obsidian Graphite. Horizontal row of cards (3 on desktop, stacked mobile).

**Headline:** `Related guidance`

**Cards (always 3):**

```
1. **[Card 1 title]** — *[1-line description]* → `[/just-happened/related-page/ or other internal route]`
2. **[Card 2 title]** — *[1-line description]* → `[link]`
3. **[Card 3 title]** — *[1-line description]* → `[link]`
```

**Cross-linking guidance:**

- Each card should cross-link to a genuinely related page on the site, not just other PI pages
- For cause-category pages (car-accident, slip-and-fall, etc.), cross-link to adjacent causes and to relevant result-overlay pages (wrongful-death, TBI)
- For result-category pages (wrongful-death, TBI), cross-link to the most common underlying causes
- One card should typically link to `/resources/offer-review/` or to a practice-area page
- For sensitive pages, cross-links should themselves be sensitivity-appropriate (a sexual-abuse page does not cross-link to slip-and-fall)

---

### Section 10 — Final CTA / Talk to Us (standard pattern, reused)

Same as homepage Section 10. Reused as a component. Page-specific phrasing may flex slightly.

```
- Anchor ID: `#consultation`
- Phone: `816-221-6400`
- Address + map
- Form routes to Mike's MS365
- Form heading: [Standard: default homepage form heading.
  Moderate/High: "Reach out when you're ready. There is no obligation
  in a first conversation." Add for High-sensitivity: "The level of
  detail you share is entirely up to you."]
```

---

### Section 11 — Footer (standard, reused)

Same as homepage. Reused as the shared `<Footer />` component.

**Must include the full disclaimer block** (see homepage spec Section 11 for exact required language). The disclaimer is non-negotiable and appears identically on every page of the site.

---

## D. Voice & tone enforcement checklist

Every line of copy on every page should pass these tests. If a line fails, rewrite.

**Standard checks (every page):**

- [ ] Does it sound like a calm, informed friend explaining the situation? (Pass)
- [ ] Does it sound like a TV ad lawyer? (Fail — rewrite)
- [ ] Does it use fear tactics? (Fail — rewrite)
- [ ] Does it claim or imply legal advice? (Fail — rewrite)
- [ ] Does it overpromise outcomes? (Fail — rewrite)
- [ ] Does it sound like every other PI firm's site? (Fail — rewrite)
- [ ] Does it treat the reader as someone capable of understanding things? (Pass)
- [ ] Could it be quoted by an LLM as a clear, authoritative answer? (Pass)

**Additional checks for Moderate-sensitivity pages:**

- [ ] Does it use grief or suffering as a marketing lever? (Fail — rewrite)
- [ ] Does it pathologize the reader's response? (Fail — rewrite)
- [ ] Does it acknowledge that not every situation is a case? (Pass)

**Additional checks for High-sensitivity pages:**

- [ ] Does it pressure the reader to act today, this week, or at all? (Fail — rewrite)
- [ ] Does it require the reader to disclose anything to read the page? (Fail — rewrite)
- [ ] Does the page work for a reader reading at week one, year ten, and year forty? (Pass)
- [ ] Does it use specific language that pathologizes the survivor's response, including delayed disclosure? (Fail — rewrite)

---

## E. Statutes and facts that need Mike's confirmation

Every page produces its own list, flagged at the bottom of the spec. Pattern for the entries:

```markdown
## 7. Statutes and facts that need Mike's confirmation

Flag each item visually in the build until Mike signs off.

- [Jurisdiction] [topic] — currently stated as [citation]. Confirm
  current text and any recent amendments.
- [Jurisdiction] [topic] — confirm [specific fact].
- [Cross-jurisdictional question] — confirm interaction.
- Bar-advertising compliance review on the entire page, [special
  attention to specific sections if applicable].
- [For Moderate/High pages, add: pre-publish Mike-input items for
  Section 6 trust signal.]
```

**Guidance:**

- Flag every statute reference, not just the ones that have changed
- Flag every claim about industry practice that might be contested
- Flag every reference to a defense argument or insurance tactic
- For High-sensitivity pages, flag any crisis-resource reference for Mike's comfort
- For pages addressing mass-casualty events, sexual abuse, or other high-bar-scrutiny categories, flag bar-advertising compliance review as **required before publish**, not just recommended

---

## F. Image asset references (with forbidden list)

| Section | Suggested asset |
|---|---|
| Hero background (optional) | Restrained, dark, real. From Drive folder `1Sea3j5hCkU8xQLcVNqYjYMj8bjPj57XI`. If no existing asset matches the page's brief, commission or license a new image rather than compromising. |
| Section 6 trust signal panel | Optional — only if Mike opts for a quoted testimonial. No image otherwise. |
| Section 9 Related pages cards | Pull from Practice Area Images for the cross-link page types. |

**Universal forbidden imagery (applies to every page):**

- Crashed car stock photos
- Ambulance with flashing lights
- Gavels, scales of justice
- Lawyer-with-arms-crossed
- Generic Kansas City skyline at sunset
- Hospital corridors, beds, or equipment
- Patients in distress
- Stock-photo grieving families
- Stock photos of "concerned [demographic]" (concerned parent, concerned daughter, concerned wife, etc.)

**Additional forbidden imagery for Moderate-sensitivity pages:**

- Imagery that uses the injured person or the medical setting as visual marketing
- Wheelchairs, mobility aids, or disability shorthand
- Newborns, infants, NICU equipment (for birth injury contexts)
- Walkers, canes, or aging shorthand (for nursing home contexts)
- Stock-photo elderly people looking sad or frail (for nursing home contexts)
- Memorial imagery — candles, framed photographs, folded flags, urns (for wrongful death)

**Additional forbidden imagery for High-sensitivity pages:**

- Human figures of any kind
- Interior spaces that could read as institutional (classrooms, sanctuaries, locker rooms, hospital corridors, courthouses)
- Religious imagery, including crosses, candles, religious clothing
- School imagery — desks, chalkboards, hallways with lockers
- Hands, especially adult hands and children's hands
- Dark hallways, dark stairwells, dark doorways
- Sports imagery — uniforms, equipment, locker rooms
- Any composition that could function as a trigger for a survivor in a difficult moment

---

## G. Accessibility minimums

Every page meets these standards. Additional standards apply for High-sensitivity pages.

**Standard (every page):**

- All numbered steps in Section 2 are reachable by keyboard with logical tab order
- FAQ accordions (if used) have proper `aria-expanded` state
- Heading hierarchy clean (H1 → H2 → H3, no skips)
- Color contrast verified WCAG 2.2 AA against Obsidian Graphite and Charcoal Slate backgrounds
- All inline links have descriptive text (no "click here")
- Pronunciation hint on first instance of "Yonke" via `aria-label="Yonke, pronounced YONK-ee"`

**Additional for Moderate-sensitivity pages:**

- Reduced-motion handling: any subtle animations respect `prefers-reduced-motion: reduce`

**Additional for High-sensitivity pages:**

- Reduced-motion handling is the most important page-level accessibility consideration — any motion that draws attention can be triggering
- For pages with a modified intake, the "stop and leave" button is the first interactive element in tab order from every screen
- Page should pass automated cognitive-load testing — short sentences, clear hierarchy, generous whitespace

---

## H. Open items

Every page ends with a list of open items — decisions Mike still needs to make, image confirmations, future workstream flags, cross-linking decisions, etc. Format:

```markdown
## 8. Open items

- Verify the [N] `(MIKE: confirm …)` flags above before publish.
- Confirm hero image selection from the Drive folder.
- [Tone calibration question if applicable]
- [Future-workstream flag if applicable — e.g., should there be a
  sub-page for X?]
- [Spanish-language parallel question if applicable]
- [Other decisions specific to the page]
- Confirm whether "Related reading" links should be live now (with
  placeholder routes for pages not yet built) or hidden until those
  pages exist.
- [For Moderate/High pages: confirm Section 6 default — option 1, 2,
  or 3.]
```

---

## I. Cross-linking architecture

The `/just-happened/*` pages are not standalone. They cross-reference, and the cross-references matter for both AEO and reader navigation.

**Cause-category pages (most pages):** Cross-link to adjacent causes and to relevant result-overlay pages.

Example for the car-accident page:
- Truck accidents (adjacent cause)
- Motorcycle accidents (adjacent cause)
- Offer review (universal CTA route)
- Wrongful death (result overlay — if the crash was fatal)
- Traumatic brain injury (result overlay — if a TBI occurred)

**Result-category overlay pages (wrongful death, TBI):** Cross-link to the most common underlying causes. Section 9 cards should adapt based on what caused the result.

Example for the TBI page:
- If from a crash → cross-link to the relevant vehicle page
- If from a fall → cross-link to slip-and-fall
- If from a workplace event → cross-link to workplace-injury and construction-injury

**Concierge classifier coordination:** The homepage concierge should be able to route to a *combination* — for a fatal truck case, a reader should land on the truck-accident page with a clearly surfaced cross-link to the wrongful-death framework, or vice versa. This is a homepage/concierge spec coordination point and should be flagged in the Open Items of any result-overlay page.

---

## J. Production checklist for a new page

When producing a new `/just-happened/*` page using this template:

1. [ ] Determine sensitivity tier (Standard / Moderate / High)
2. [ ] Fill in the frontmatter block (Section B above)
3. [ ] Write the page purpose & intent (Section B above)
4. [ ] Complete each of the 11 sections (Section C above) using the section-specific guidance
5. [ ] Apply the voice & tone checklist (Section D above) and rewrite any lines that fail
6. [ ] Specify hero image asset (or flag for commission) using the forbidden-imagery list (Section F)
7. [ ] List all statutes and facts that need Mike's confirmation (Section E)
8. [ ] List all open items (Section H)
9. [ ] Verify cross-linking to adjacent and overlay pages (Section I)
10. [ ] For Moderate/High pages: flag bar-advertising compliance review timing

---

## K. Notes on producing Tier 2 pages

Most remaining pages on the case-types list are Tier 2 — they share the same legal framework as a Tier 1 page but deserve their own URL for AEO and for the specific reader. Examples:

- Rideshare accident (variation of car/truck — Uber/Lyft commercial coverage wrinkle)
- Bicycle accident (variation of car/pedestrian)
- Pedestrian accident (variation of car)
- Bus or public transit accident
- Boating / watercraft accident
- ATV / off-road accident
- Specific medical-device sub-pages under product-recall
- Specific premises sub-types (pool drowning, elevator, parking lot)

**Production approach:**

- Identify the Tier 1 parent page (e.g., bicycle accident → car-accident parent)
- Use this template to produce the new page, inheriting the parent's structure
- Calibrate Section 2 (procedural steps), Section 3 (defendant behavior), Section 5 (MO vs. KS rules), and the FAQ for the specific variation
- The voice, the schema, the visual treatment, the conversion mechanics, the CTA pattern all stay identical
- Tier 2 pages can be produced in batches of 2–3 in a single working session

**What does not change for Tier 2 pages:**

- The 11-section structure
- The voice and tone rules
- The schema (Article, FAQPage, HowTo, LegalService)
- The forbidden-imagery list
- The disclaimer-as-component pattern
- The Mike-confirmation flag pattern

**What changes for Tier 2 pages:**

- Section 2 procedural steps (calibrated to the specific scenario)
- Section 3 defendant-behavior framing (e.g., for rideshare, it's the platform plus the driver plus the rider's own insurer)
- Section 4 FAQ questions (scenario-specific)
- Section 5 MO/KS rules (where the variation introduces specific legal differences, e.g., rideshare commercial coverage)
- Cross-links in Section 9
- Hero copy

---

*End of master template.*
