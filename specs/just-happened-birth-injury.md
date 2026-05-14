# Yonke Law — `/just-happened/birth-injury/` Page Spec

**Workspace:** Yonke Law Website
**Template type:** Variant of the `/just-happened/*` pattern. Inherits the shape of `just-happened-car-accident.md`. Subset of medical malpractice with its own evidence profile and statute-of-limitations framework.
**Reference docs:** `yonke-homepage-spec.md`, `just-happened-car-accident.md` (pattern-setter), `just-happened-medical-malpractice.md` (parent category), `just-happened-wrongful-death.md` (overlay for fatal cases), `Yonke Law — The Standard` (Brand Doctrine & Operating System).
**Pronunciation standard:** Yonke (YONK-ee) Law.
**Sensitivity:** High. Recommend Mike's review before any other reviewer.

---

## 1. Page purpose & intent

This page serves a parent — or a parent and the now-grown adult child themselves — who is starting to wonder whether something at the time of delivery caused an injury, a disability, or a permanent change in their child's life.

The audience spans an unusually wide time range. Some readers are parents of newborns currently in the NICU. Some are parents of toddlers who have just received a cerebral palsy or developmental diagnosis. Some are parents of school-aged or adult children whose disability has been managed for years and whose connection to the delivery has only recently been raised. The page works for all of them.

The page is also a destination for the homepage concierge classifier when the "What happened?" input indicates a birth-related concern.

**Critical constraint:** This is informational content, not legal advice. The page must never claim to provide legal advice or create an attorney-client relationship. Standard disclaimers in footer apply.

---

## 2. SEO/AEO foundation

### URL

`/just-happened/birth-injury/`

### Meta

- **Title:** `Birth Injury Cases: What Parents Should Know | Yonke Law`
- **Description:** `Plain-English guidance for parents who think something may have gone wrong at delivery — including cerebral palsy, HIE, brachial plexus injuries, and other birth-related injuries in Missouri and Kansas. What the records show. What the timing looks like. From Yonke (YONK-ee) Law.`
- **Canonical:** Explicit
- **OG image:** Custom for this page. Restrained — no NICU imagery, no newborns, no medical settings.

### Structured data (JSON-LD)

Required on this page:
- `Article` schema (author: Michael T. Yonke)
- `FAQPage` schema (for the FAQ section — every Q&A item)
- `HowTo` schema (for the procedural steps in Section 2)
- `LegalService` reference (links back to the Yonke Law entity)

### Crawler permissions

Allow GPTBot, ClaudeBot, PerplexityBot, Google-Extended, anthropic-ai. Parents researching their child's diagnosis frequently arrive through LLM-mediated search, often years after the birth.

---

## 3. Section-by-section spec

### Section 1 — Hero

**Layout:** Obsidian Graphite background. Centered, max-width 900px. Strong vertical breathing room.

**Content:**

```
Eyebrow (small caps, Steel Silver):  JUST HAPPENED

Headline (display serif, large):
You think something went wrong at delivery. Take a breath.

Subhead (body, lighter):
Whether your child is a newborn or grown, whether the delivery was
last week or fifteen years ago, here is what to know about birth
injury cases in Missouri and Kansas. What the records show. What
the timing looks like. What an honest evaluation looks like.

Primary CTA (Muted Gold or Chrome Highlight):
Read what to know → (anchor to #what-to-know)

Secondary link (text only, Steel Silver):
Or talk to someone, when you're ready → (anchor to #consultation)
```

**Optional background treatment:** Dim photographic image with heavy dark overlay. Suggested visual: a porch at sunset, a quiet kitchen, a sleeping room with soft natural light, a path through trees. **Never** a NICU, an infant, a hospital corridor, a delivery room, a wheelchair, a stock photo of "concerned parents," or any image that uses the child or the medical setting as visual marketing.

---

### Section 2 — What to know (the LLM-citation engine)

**Layout:** Charcoal Slate background. Max-width 800px. Structured with H2 + H3 hierarchy for schema markup.

**Anchor ID:** `#what-to-know`

**Implementation note:** Wrap this entire section in `HowTo` schema. Each step gets an `HowToStep` schema entry. The timing framing here spans years — the page works for parents within days of a delivery and for parents whose child is now an adult.

**Content:**

```markdown
## What to know

A birth injury case is built on what the labor and delivery records
show. Not what anyone remembers. Not what anyone was told at the
time. The records — the fetal heart strip, the nursing notes, the
medication record, the operative report — are the case.

These steps are written for the parent doing the work of finding out
what happened. They are not in a 24-hour order. They are in the order
that protects the case as you go.

### Before anything else

1. **Preserve every record you have.** Prenatal records. The labor
   and delivery chart. NICU records. The discharge summary. The
   child's pediatric records. Therapy records. Early intervention
   evaluations. Individualized Education Programs (IEPs). Anything
   that documents the child's diagnoses, developmental milestones,
   and treatment over time. Birth injury cases are built across all
   of these records, not just the ones from the day of delivery.

2. **Request the complete labor and delivery chart from the hospital,
   in writing.** Federal law gives parents the right to a complete
   copy of the chart. Ask for everything — not just the discharge
   summary. That includes nursing notes, medication administration
   records, fetal heart tracings, anesthesia records, vital signs,
   the operative report if there was a C-section, and the
   resuscitation record if one occurred.

### In the days and weeks ahead

3. **The fetal heart strip is often the central document in a birth
   case.** Continuous electronic fetal monitoring produces a strip
   that shows the baby's heart rate throughout labor. Patterns of
   decelerations, non-reassuring tracings, and the timing of provider
   response to those patterns are often what tells the story of what
   happened. The strip can be reread years later by an independent
   maternal-fetal medicine expert. Ask specifically for the
   electronic fetal monitoring tracings as part of the records
   request.

4. **Document the child's developmental timeline.** When the child
   first rolled, sat, walked, made eye contact, said first words.
   When the parents first noticed something was different from peers
   or older siblings. When formal evaluations took place and what
   they showed. When diagnoses were made and by whom. Photographs
   and videos from early childhood, if available, are powerful
   contemporaneous evidence.

5. **Document the child's current needs and the care that has been
   provided.** Therapy schedules. Medical equipment. Medications.
   School services. Home modifications. Care that family members
   provide directly. The child's care picture is one of the central
   pieces of a birth injury case — not because the child is reduced
   to it, but because the case is in part about what was lost and
   what will be needed going forward.

### Before key decisions

6. **Do not sign anything from the hospital, the OB practice, or
   any insurer without legal review.** This includes settlement
   offers, "patient relations" letters, broad medical authorizations,
   and anything that might be characterized as a release. Birth
   injury cases sometimes generate early outreach from the institution
   years after delivery; the framing is often careful and the paperwork
   is often broader than it needs to be.

7. **Be careful with social media.** As in any case involving a
   serious injury, defense lawyers monitor public social presence.
   A photograph from a holiday or a milestone can be used out of
   context to suggest the child is "doing fine."

8. **Understand that statutes of limitations work differently for
   children — but they are not unlimited.** Both Missouri and Kansas
   apply minor-tolling rules in some birth injury contexts, which
   can extend the time available to file. But both states also apply
   statute-of-repose limits that can shorten that window dramatically.
   *(MIKE: confirm MO § 516.105 minor-tolling framework and Kansas
   K.S.A. 60-515 / K.S.A. 60-513(c) four-year repose interaction.)*
   The timing on an older birth case is one of the most important
   questions to ask in a first conversation.

9. **A first conversation is to find out whether the records suggest
   a closer look is warranted.** Most parental inquiries about birth
   outcomes do not result in cases — many bad outcomes happen without
   negligence, and the medical complexity is real. The right firm
   will tell you honestly what they see in the records, and tell you
   when nothing further is worth pursuing.
```

**End of section CTA (text link, inline):**
*Want a printable version to take with you? [Download the Birth Injury Reference →](/resources/checklists/birth-injury-reference/)*

---

### Section 3 — What the hospital and OB practice typically do

**Layout:** Obsidian Graphite. Max-width 800px. Informational tone.

**Content:**

```markdown
## What the hospital and OB practice typically do

A birth injury case rarely begins in the days after delivery. It
typically begins years later, when developmental issues become
visible and someone — a pediatrician, a therapist, a teacher, a
parent's own research — raises the possibility that something at
delivery caused the difference the family has been managing for years.

When the parents begin asking questions, the institutional response
activates. You should expect:

- **A records request takes time to fulfill.** Sometimes longer than
  it should. Hospitals sometimes provide a summary version on the
  first request and only provide the full chart, including the fetal
  heart strip, after follow-up. Ask in writing. Be specific. Be
  patient — and document each request.

- **An internal review may have been conducted at the time.** Many
  hospitals review serious birth outcomes through a quality-improvement
  or peer-review process. Records from those reviews are typically
  privileged in both Missouri and Kansas, but knowing they exist
  matters, and discovery in litigation can sometimes reach related
  records.

- **The OB practice's malpractice carrier may activate.** Particularly
  if a records request reads as a precursor to a claim. The carrier's
  defense work begins before any case is filed.

- **The framing is usually that the bad outcome was unavoidable.**
  Sometimes that is accurate. Many birth injuries occur despite
  appropriate care, and a substantial percentage of cerebral palsy
  cases are not connected to events during labor and delivery.
  Sometimes the framing is not accurate. The work of evaluation is
  to separate the two by reading the records carefully and consulting
  with independent maternal-fetal medicine, neonatology, and
  neurology experts.

None of this is necessarily improper. It is, however, well-resourced
on one side and unfamiliar on the other. The earlier in the process
a family understands what is happening, the better positioned they
are.
```

---

### Section 4 — FAQ (the AEO workhorse)

**Layout:** Charcoal Slate. Each Q is collapsible accordion (or always-expanded — accessibility-friendly either way).

**Implementation:** Wrap in `FAQPage` schema. Each Q/A is a `Question` with `acceptedAnswer`.

**Headline:** `Common questions about birth injury cases`

**Questions:**

```markdown
### What is a birth injury case?

A birth injury case is a civil claim brought on behalf of a child
who was injured during the prenatal period, labor, delivery, or
immediately after birth — and where the injury resulted from medical
care that fell below the accepted standard. The case is typically
brought against the obstetric provider, the delivering hospital, or
both. Some cases also involve nursing staff, anesthesia providers,
neonatologists, or the hospital's quality-of-care policies.

### What is the difference between cerebral palsy and a birth injury?

Cerebral palsy is a condition. A birth injury is a cause. Some
cerebral palsy is caused by events during labor and delivery —
particularly hypoxic-ischemic events where the baby's oxygen supply
was compromised. Some cerebral palsy is not caused by birth events
— it can result from prenatal infections, genetic factors, or
postnatal events. Whether a particular child's cerebral palsy is
connected to birth events is a clinical question, evaluated by
reading the labor and delivery records alongside imaging and the
child's clinical course.

### How do I know if my child's injury was preventable?

You usually do not — and you are not expected to. That is what the
records evaluation is for. The question is whether the obstetric
team responded appropriately to what the records show was happening
during labor. Common scenarios where records reveal preventable
injury include non-reassuring fetal heart tracings that were not
acted on, shoulder dystocia managed with excessive traction, delays
in performing an indicated C-section, and failure to recognize and
respond to maternal conditions that affected the baby.

### What is the fetal heart strip, and why does it matter?

The fetal heart strip is the printed or electronic record of the
baby's heart rate throughout labor, captured by continuous electronic
fetal monitoring. Patterns of decelerations, late decelerations, loss
of variability, and the timing of changes can indicate whether the
baby was in distress and how the obstetric team responded. The strip
is one of the most important documents in a birth injury case, and
it can be reread years later by an independent expert.

### How long do I have to file a birth injury case in Missouri?

Missouri's medical malpractice statute of limitations is generally
two years from the date of the negligent act or from discovery
*(MIKE: confirm § 516.105 framework)*. For minors, Missouri applies
tolling rules that can extend the window. The interaction between
tolling, the statute of repose, and the affidavit-of-merit requirement
under § 538.225 is complex and case-specific, and is one of the
first questions an attorney evaluates.

### How long do I have to file a birth injury case in Kansas?

Kansas's medical malpractice statute of limitations is generally
two years from injury, with a four-year statute of repose
(K.S.A. 60-513(c)). For minor children, Kansas's tolling rule
(K.S.A. 60-515) interacts with the four-year repose in ways that
have been heavily litigated. The Kansas timing on older birth cases
is one of the most consequential legal questions in any evaluation.

### Can I still bring a case if my child is older now?

Sometimes, yes. The minor-tolling and statute-of-repose frameworks
in Missouri and Kansas are different, and they apply to different
fact patterns in different ways. Many older birth injury cases are
time-barred. Some are not. The only way to know is to look at the
specific facts and the current state of the law in the relevant
jurisdiction.

### Who would the case be against?

The most common defendants in birth injury cases are the delivering
obstetrician, the delivering hospital, and sometimes the OB practice.
Other potential defendants include nursing staff (typically through
the hospital), anesthesia providers, neonatologists, and in rare
cases the medical device manufacturer if a device failure contributed.
Who the appropriate defendants are depends on what the records show.

### What is life care planning?

Life care planning is the process of projecting a child's medical,
therapeutic, educational, and supportive needs across the child's
expected lifespan. A certified life care planner — typically a nurse
or rehabilitation professional with specialized training — works with
the child's treating providers to develop a written plan that
identifies the care the child will need year by year. In a birth
injury case, the life care plan becomes a central piece of evidence
on damages. It is also useful to families outside of litigation as
a framework for understanding what care will be needed.

### How does Yonke Law evaluate a birth injury case?

We start by reading the records ourselves. Before engaging experts
— and before sending any demand letter — we want to see whether the
timeline in the chart tells a story that warrants closer examination.
When it does, we work with maternal-fetal medicine, neonatology, and
neurology experts in the relevant subspecialties to evaluate whether
the standard of care was met. We do not bring a case unless an
independent expert believes the standard was breached and the breach
contributed to the child's injury. We also tell parents honestly when
the records do not support a case — which, in birth injury inquiries,
is the more common outcome.
```

---

### Section 5 — Missouri vs. Kansas: the rules that matter

**Layout:** Obsidian Graphite. Two-column on desktop, stacked on mobile.

**Content:**

```markdown
## Missouri

- **Statute of limitations (medical malpractice):** 2 years from
  negligent act or from discovery (§ 516.105)
- **Minor tolling:** Tolling rules apply for children, with statutory
  exceptions. *(MIKE: confirm current framework — § 516.105
  interactions with minor tolling, and any specific birth-injury
  case-law.)*
- **Statute of repose:** Generally 10 years from negligent act, with
  exceptions for fraud and continuing care
- **Affidavit of merit:** Required under § 538.225 within 90 days
  of filing
- **Non-economic damages cap:** § 538.210 — confirm current cap
  amount and any post-amendment adjustments
- **Survival actions for deceased infants:** Apply under § 537.020

## Kansas

- **Statute of limitations (medical malpractice):** 2 years from
  injury (K.S.A. 60-513(a)(7) / (c))
- **Minor tolling:** K.S.A. 60-515 provides tolling for minors,
  but its interaction with the statute of repose is fact-specific.
  *(MIKE: confirm current case-law treatment, particularly for
  birth-injury cases.)*
- **Statute of repose:** 4 years from the negligent act
  (K.S.A. 60-513(c)) — this is the most consequential limit for
  older birth cases in Kansas
- **Expert testimony:** Required at trial; no separate affidavit-
  of-merit requirement comparable to Missouri's
- **Non-economic damages cap:** Confirm current status post-*Hilburn
  v. Enerpipe* (2019)
- **Survival actions for deceased infants:** Apply under
  K.S.A. 60-1801
```

**Below the columns, one inline link:** `Not sure which state's rules apply, or whether your child's case is still within the timing? [Send us the basics and we'll tell you →](#consultation)`

---

### Section 6 — Inline trust signal (Mike input required)

**Layout:** Charcoal Slate panel. Restrained.

**Implementation note:** Same caution as on the wrongful death and nursing home pages. A quoted testimonial from a family of a child with a permanent disability is exploitative if not handled with extraordinary care. Three options, in order of preference:

1. **Mike-input quote from a representative case**, used only with the family's explicit written consent and reviewed for bar-advertising compliance. No identifying details unless the family has explicitly approved them. The child's identity is paramount.
2. **Anonymous outcome reference** — a brief, plain reference to recoveries in birth injury cases, with no quote, no family detail, and no specific dollar figure unless cleared by Mike.
3. **No testimonial on this page** — replace the section with a brief, signed statement from Mike about how the firm handles birth injury cases.

**Placeholder content (Mike to replace):**

```
[MIKE INPUT REQUIRED — choose option 1, 2, or 3 above and provide content.]

Notable birth injury outcomes have included recoveries for children
with cerebral palsy related to intrapartum hypoxia, brachial plexus
injuries from shoulder dystocia, and delays in indicated C-sections.
Each family was different. Each child was different. The work was
the same: get the records, find what the strip and the chart actually
show, consult with independent specialists, and tell the family
honestly what the evaluation found.
```

---

### Section 7 — When it's time to talk to a lawyer

**Layout:** Obsidian Graphite. Centered. Informational framing.

**Content:**

```markdown
## When it's worth having someone look at your situation

Not every adverse birth outcome is the basis for a civil case. Many
are tragic but legally limited. The question is whether the records
suggest the standard of care was met — and that is a question that
requires reading the chart, not guessing from the outcome.

A free, confidential consultation is worth your time if **any** of
the following are true:

- Your child has been diagnosed with cerebral palsy, hypoxic-ischemic
  encephalopathy (HIE), Erb's palsy or another brachial plexus
  injury, a seizure disorder of perinatal onset, or another
  significant impairment that may relate to delivery
- Something at the delivery has stayed with you — a long labor, a
  delayed C-section, a NICU admission you were not expecting, a
  resuscitation, a quiet handoff that did not feel right
- You have requested records and have not received them, or have
  received only a partial version
- A hospital or OB practice has reached out to you years after the
  delivery in a way that feels like an invitation to settle or sign
  something
- You are aware of a statute-of-limitations issue and want to
  understand whether your case is still within the timing
- You want to understand what life care planning is, regardless of
  whether you ultimately bring a case

A consultation is exactly what it sounds like — a conversation. No
fee. No obligation. No pressure to move forward. If the records do
not support a case, we will tell you. If they do, we will tell you
that too — and we will tell you honestly what the case is likely to
take.
```

**Below this, two CTAs side by side:**

- **Talk to us, when you're ready** — primary CTA, anchor to `#consultation`
- **Or send us the basics first** — secondary, links to the offer review page or a brief intake form

---

### Section 8 — Two paths forward (conversion moment)

**Layout:** Charcoal Slate. Two-column on desktop. Each side is a card.

**Headline:** `When you're ready`

**Card 1 — Printable reference**

```
THE BIRTH INJURY REFERENCE
A short PDF that walks through what we just covered — what records
to request, what the fetal heart strip is, the timing in Missouri
and Kansas, and the questions worth asking when you decide it is
time to talk.

[Download the PDF →]
```

**Card 2 — Digital intake**

```
OR — WHEN YOU'RE READY, WALK THROUGH WHAT WE'D WANT TO KNOW
A guided version of the questions we would ask in a first
conversation with a family. The intake includes a section for the
child's diagnosis, the delivering provider and hospital, and any
records you have been able to obtain — but you can complete only
the parts you have, save the rest for later, and return when more
information is available.

Free. Confidential. There is no time limit on completing it. Your
answers are private and encrypted.

[Start the digital intake →]
```

**Implementation note:** The digital intake for birth injury cases needs to branch based on the child's current age — newborn (still in NICU or recently discharged), young child (under 5), school-aged child, adolescent, or adult. The relevant records, the timing concerns, and the immediate next steps differ in each case. Spec for the intake flow is separate.

---

### Section 9 — Related pages

**Layout:** Obsidian Graphite. Horizontal row of cards (3 on desktop, stacked mobile).

**Headline:** `Related guidance`

**Cards:**

1. **Medical malpractice — the parent category** — *How medical cases work generally, and the rules that overlap with birth injury cases* → `/just-happened/medical-malpractice/`
2. **If your child suffered a brain injury** — *Traumatic brain injury, anoxic brain injury, and the long arc of these cases* → `/just-happened/traumatic-brain-injury/`
3. **If you lost a child** — *Wrongful death cases involving infants and children* → `/just-happened/wrongful-death/`

---

### Section 10 — Final CTA / Talk to Us (standard pattern)

Same as homepage Section 10. Reused as a component.

- Anchor ID: `#consultation`
- Phone: `816-221-6400`
- Address + map
- Form routes to Mike's MS365
- Form heading: *"Reach out when you're ready. There is no obligation in a first conversation."*

---

### Section 11 — Footer (standard, reused)

Same as homepage. Reused as the shared `<Footer />` component.

**Must include the full disclaimer block** (see homepage spec Section 11 for exact required language). The disclaimer is non-negotiable and appears identically on every page of the site.

---

## 4. Voice & tone enforcement checklist

Every line of copy on this page should pass these tests. If a line fails, rewrite.

- [ ] Does it sound like a calm, informed friend explaining the situation? (Pass)
- [ ] Does it sound like a TV ad lawyer? (Fail — rewrite)
- [ ] Does it use fear tactics? (Fail — rewrite)
- [ ] Does it use the child's disability as a marketing lever? (Fail — rewrite)
- [ ] Does it claim or imply legal advice? (Fail — rewrite)
- [ ] Does it overpromise outcomes? (Fail — rewrite)
- [ ] Does it position the parent as having "missed" something or having failed to act sooner? (Fail — rewrite)
- [ ] Does it acknowledge that many bad outcomes occur without negligence? (Pass)
- [ ] Does it treat the reader as someone capable of understanding things? (Pass)
- [ ] Does the page work for a parent within days of a delivery *and* for a parent of an adult child whose disability has been managed for thirty years? (Pass)
- [ ] Could it be quoted by an LLM as a clear, authoritative answer? (Pass)

---

## 5. Image asset references

| Section | Suggested asset (from Drive folder `1Sea3j5hCkU8xQLcVNqYjYMj8bjPj57XI`) |
|---|---|
| Hero background (optional) | A quiet domestic or natural image — porch at sunset, soft-lit kitchen, path through trees, a window with morning light. Heavily darkened with overlay. If no existing asset matches, commission or license a new image rather than compromising. |
| Mid-page Section 6 trust signal panel | Optional — only if Mike opts for a quoted testimonial. No image otherwise. |
| Related-pages cards | Pull from Practice Area Images for the cross-link page types. |

**Forbidden:**
- NICU imagery — incubators, monitors, isolettes
- Newborns or infants
- Delivery rooms or labor and delivery units
- Hospital corridors, beds, or equipment
- Pregnant women in distress
- Wheelchairs, mobility aids, or disability shorthand
- Children in distress or struggling visibly
- Stock photos of "concerned parents"
- Gavels, scales of justice
- Lawyer-with-arms-crossed
- Generic Kansas City skyline at sunset

---

## 6. Accessibility minimums

- All numbered steps in Section 2 are reachable by keyboard with logical tab order
- FAQ accordions (if used) have proper `aria-expanded` state
- Heading hierarchy clean (H1 → H2 → H3, no skips)
- Color contrast verified WCAG 2.2 AA against Obsidian Graphite and Charcoal Slate backgrounds
- All inline links have descriptive text (no "click here")
- Pronunciation hint on first instance of "Yonke" via `aria-label="Yonke, pronounced YONK-ee"`
- Reduced-motion handling: any subtle animations respect `prefers-reduced-motion: reduce`

---

## 7. Statutes and facts that need Mike's confirmation

Flag each item visually in the build until Mike signs off. Birth injury timing in both states is one of the most heavily litigated areas in PI law and Mike's current read is essential.

- Missouri medical malpractice statute of limitations — § 516.105 current text and discovery-rule application in birth injury cases.
- Missouri minor-tolling framework — interaction with the medical malpractice SOL and statute of repose.
- Missouri statute of repose for medical malpractice — current outer limits and any case-law exceptions.
- Missouri affidavit-of-merit requirement — § 538.225 current text, 90-day filing window, qualified-provider definition.
- Missouri non-economic damages cap in medical malpractice — § 538.210. Confirm current cap and any post-amendment adjustments.
- Missouri vicarious liability framework for hospitals — confirm current treatment of independent-contractor obstetricians.
- Kansas medical malpractice statute of limitations — K.S.A. 60-513(a)(7) and (c) current framework.
- Kansas K.S.A. 60-515 minor-tolling provision — interaction with the four-year statute of repose. This is the most consequential timing question for Kansas birth injury cases.
- Kansas expert testimony framework — confirm current trial requirements.
- Kansas non-economic damages cap — current status post-*Hilburn v. Enerpipe* (2019).
- Kansas vicarious liability framework for hospitals — confirm current treatment.
- Survival action frameworks for deceased infants in both states.
- Bar-advertising compliance review on the entire page, especially section 7.

---

## 8. Open items

- Confirm hero image selection from the Drive folder. The "porch at sunset / quiet kitchen / soft-lit interior" brief is intentional — birth injury cases should not be marketed with imagery of NICUs or disabled children.
- Confirm whether the page should address birth injuries to the mother (postpartum hemorrhage, retained materials, surgical injuries during C-section). The current draft is focused on injuries to the child. Maternal birth injuries may warrant their own page if Mike sees the case volume to justify it.
- Confirm whether a separate `/just-happened/cerebral-palsy/` sub-page should branch off from this one for AEO purposes. Cerebral palsy is the highest-volume search term in this category. Recommendation: this page covers cerebral palsy and the cross-link is bidirectional, but a dedicated sub-page may be a Tier 2 candidate.
- Decide whether the page should reference specific OB practice patterns (failure to recognize fetal distress, shoulder dystocia, delayed C-section, vacuum or forceps misuse) in more detail. Recommendation: keep the page general and put the specifics in supporting `/what-we-handle/` content.
- Confirm whether "Related reading" links should be live now (with placeholder routes for pages not yet built) or hidden until those pages exist.
- Confirm cross-link from `/just-happened/medical-malpractice/` Related Reading section to this page.

---

*End of page spec.*
