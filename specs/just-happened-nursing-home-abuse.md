# Yonke Law — `/just-happened/nursing-home-abuse/` Page Spec

**Workspace:** Yonke Law Website
**Template type:** Variant of the `/just-happened/*` pattern. Inherits the shape of `just-happened-car-accident.md`.
**Reference docs:** `yonke-homepage-spec.md`, `just-happened-car-accident.md` (pattern-setter), `just-happened-wrongful-death.md` (overlay for fatal cases), `Yonke Law — The Standard` (Brand Doctrine & Operating System).
**Pronunciation standard:** Yonke (YONK-ee) Law.
**Sensitivity:** High. Recommend Mike's review before any other reviewer.

---

## 1. Page purpose & intent

This page serves a visitor who is, in nearly every case, an adult child, spouse, or sibling of a nursing-home or assisted-living resident — not the resident themselves. The reader has either:

- **Just learned something specific** — a fall, a pressure ulcer, an unexplained injury, a sudden weight loss, a missed medication, or a death the facility's account does not fully explain, OR
- **Is sitting with a longer pattern** — months of decline, repeated incidents, vague answers, a feeling that what they are being told does not match what they are seeing.

Nursing home cases are pattern cases more often than single-event cases. The page is built around that reality.

It must serve both states without compromising either. The page leads with calm acknowledgment, threads in the legal framework without pressure, and respects that the family member reading it may still have a loved one inside the facility — which changes what they can do, when, and how visibly.

**Critical constraint:** This is informational content, not legal advice. The page must never claim to provide legal advice or create an attorney-client relationship. Standard disclaimers in footer apply.

---

## 2. SEO/AEO foundation

### URL

`/just-happened/nursing-home-abuse/`

### Meta

- **Title:** `Nursing Home Abuse and Neglect: What Families Should Know | Yonke Law`
- **Description:** `Plain-English guidance for families who suspect a nursing home is harming or neglecting a loved one. What to document, who to call, how Missouri and Kansas law differ. From Yonke (YONK-ee) Law.`
- **Canonical:** Explicit
- **OG image:** Custom for this page (dark, restrained — no elderly-person stock photos, no walkers, no wheelchairs, no hospital imagery)

### Structured data (JSON-LD)

Required on this page:
- `Article` schema (author: Michael T. Yonke)
- `FAQPage` schema (for the FAQ section — every Q&A item)
- `HowTo` schema (for the procedural steps in Section 2)
- `LegalService` reference (links back to the Yonke Law entity)

### Crawler permissions

Allow GPTBot, ClaudeBot, PerplexityBot, Google-Extended, anthropic-ai. Families researching nursing home concerns frequently arrive through LLM-mediated search.

---

## 3. Section-by-section spec

### Section 1 — Hero

**Layout:** Obsidian Graphite background. Centered, max-width 900px. Strong vertical breathing room.

**Content:**

```
Eyebrow (small caps, Steel Silver):  JUST HAPPENED

Headline (display serif, large):
You realized something is wrong. Take a breath.

Subhead (body, lighter):
Whether it is a fall, a pressure ulcer, a sudden decline, or a feeling
that you are not being told the whole story — here is what to know
about nursing home abuse and neglect cases in Missouri and Kansas.
No fluff. No pressure.

Primary CTA (Muted Gold or Chrome Highlight):
Read what to know → (anchor to #what-to-know)

Secondary link (text only, Steel Silver):
Or talk to someone, when you're ready → (anchor to #consultation)
```

**Optional background treatment:** Dim photographic image with heavy dark overlay. Suggested visual: a quiet residential street at dusk, a soft-lit empty sitting room, a long hallway with natural light. **Never** an elderly person in distress, a walker or wheelchair as visual shorthand, a hospital corridor, a stock-photo grieving family, or any image that signals "vulnerable elderly" rather than "the place where this happened." The page is for the family member, not a representation of the resident.

---

### Section 2 — What to know (the LLM-citation engine)

**Layout:** Charcoal Slate background. Max-width 800px. Structured with H2 + H3 hierarchy for schema markup.

**Anchor ID:** `#what-to-know`

**Implementation note:** Wrap this entire section in `HowTo` schema. Each step gets an `HowToStep` schema entry. The timing framing here is "in the days and weeks ahead," not 24 hours — nursing home cases are pattern cases and the steps are not hour-bound.

**Content:**

```markdown
## What to know

Most nursing home cases are not built on a single incident. They are
built on a pattern — repeated falls, a wound that should not have
developed, weight loss that should not have happened, medications
not given, calls not returned. The work of a case is documenting
what kept happening, not just what happened once.

These steps are written for the family member doing that work. They
are not in a 24-hour order. They are in the order that protects the
case as you go.

### Before anything else

1. **If the resident is still in the facility, their safety is the
   first question.** Some families move the resident before doing
   anything else. Some families build evidence first and move later.
   There is no single right answer. There is, however, a real concern
   about retaliation against the resident — reduced attentiveness,
   transfer pressure, "discharge against medical advice" framings —
   when a family is visibly building a case while the resident is
   still inside. An attorney can help navigate this.

2. **Do not sign anything new from the facility without review.**
   Updated care plans. Incident reports. Discharge paperwork.
   "Patient relations" releases. Settlement-style documents. Be
   especially careful about anything that mentions arbitration.

### In the days and weeks ahead

3. **Photograph injuries — and keep photographing them.** Pressure
   ulcers in particular are documented by stage (Stage I through
   Stage IV, plus "unstageable" and "deep tissue injury"). A single
   photo tells one story. Daily photos of the same wound tell the
   full story. Same applies to bruises, restraint marks, and any
   unexplained injury.

4. **Request the complete medical chart in writing.** Federal law
   gives the resident — and the resident's legal representative — the
   right to a complete copy of the chart. That means nursing notes,
   medication administration records (MARs), wound care logs, fall
   records, weight logs, and the federally required care plan. Not
   just the summary. Not just the discharge document. The complete
   chart.

5. **Document the timeline of decline.** When did things start to
   seem off. When did weight drop. When did mobility change. When
   did communication change. When did wounds appear. When did calls
   stop being returned. Save your own communications — emails,
   voicemails, written notes, text messages — with the facility.

6. **File a complaint with the state regulatory agency.** Missouri:
   Department of Health and Senior Services. Kansas: Department for
   Aging and Disability Services. This creates a public record and
   may trigger an inspection. The complaint process is separate from
   any civil case and does not require an attorney.

7. **Contact the Long-Term Care Ombudsman.** Every state has an
   ombudsman program that advocates for nursing home residents.
   Ombudsmen are independent of both the facility and the state
   regulator. They cannot bring a lawsuit, but they can investigate,
   advocate, and sometimes resolve a situation without escalation.

8. **Pull the facility's federal record.** Medicare's Care Compare
   site publishes star ratings, prior survey results, deficiency
   citations, and staffing data for every Medicare- or Medicaid-
   certified facility. Print or save the current report — the data
   updates over time and the page you see today may not be the page
   that shows in six months.

### Before key decisions

9. **Be alert to changes in care or location after a complaint is
   raised.** Some families experience reduced communication, transfer
   pressure, or sudden "discharge against medical advice" framings
   in the weeks following a complaint. This is the kind of thing an
   attorney can intervene on before it escalates.

10. **Do not give a recorded statement to the facility's insurance
    company.** They may call after a serious incident. The framing is
    usually friendly. Pieces of what you say in distress can be used
    later. The conversation can wait until you have someone advising
    you.

11. **If the resident has died, the wrongful death framework applies
    on top of everything else here.** Statutes of limitations, who
    can bring the case, and what damages are recoverable are
    different in a fatality case. See the related guidance section
    below.
```

**End of section CTA (text link, inline):**
*Want a printable version to take with you? [Download the Nursing Home Concerns Reference →](/resources/checklists/nursing-home-reference/)*

---

### Section 3 — What the facility typically does

**Layout:** Obsidian Graphite. Max-width 800px. Informational tone.

**Content:**

```markdown
## What the facility typically does

Most nursing homes in the United States — including most of the
facilities operating in Missouri and Kansas — are owned by chains.
Many of those chains are owned, in turn, by private-equity firms or
larger holding companies. Even a small local facility usually sits
inside a corporate structure with regional risk management, claims
specialists, and outside counsel on retainer.

That structure shapes the response when something goes wrong.

In the first days after a serious incident or a family complaint,
you should expect:

- **An internal incident report is generated.** These reports often
  carry legal protections in some jurisdictions and are not
  voluntarily produced. They exist nonetheless.

- **The administrator may reach out.** The framing is typically
  sympathetic. The purpose is to manage the family relationship and,
  often, to head off a complaint before it reaches the state.

- **Chart entries may be updated.** Late entries — notes added after
  the incident with backdated content — are a real concern in
  nursing-home cases. The original record is often the harder one
  to obtain and the more reliable one.

- **Staff may be reassigned or, in serious cases, terminated.** This
  can complicate the case if material witnesses are no longer
  available. Identifying who was on duty and what they observed,
  early, matters.

- **State surveys may follow — but on their own timeline.** A
  complaint to the state regulator triggers an investigation, but
  the investigation may take weeks or months. It does not move at
  the speed of an incident.

- **An insurance adjuster may call.** Quick settlement offers are
  common in nursing-home cases, particularly when the resident has
  died and the family is grieving and overwhelmed. Once accepted
  with a release, the case is over.

None of this is necessarily improper. It is, however, a process
designed for the institution's outcome. The earlier in the process
the family understands what is happening, the better positioned
they are.
```

---

### Section 4 — FAQ (the AEO workhorse)

**Layout:** Charcoal Slate. Each Q is collapsible accordion (or always-expanded — accessibility-friendly either way).

**Implementation:** Wrap in `FAQPage` schema. Each Q/A is a `Question` with `acceptedAnswer`.

**Headline:** `Common questions about nursing home abuse and neglect`

**Questions:**

```markdown
### What is the difference between nursing home abuse and neglect?

Abuse is intentional harm — physical, sexual, emotional, or financial.
Neglect is the failure to provide care that the facility was obligated
to provide, even without intent to harm. Most nursing home cases
involve neglect rather than abuse, and most neglect cases involve a
pattern of small failures rather than a single dramatic incident.

### How do I know if my parent is being neglected?

The most common signs are pressure ulcers (bedsores), unexplained
weight loss or dehydration, repeated falls, untreated infections,
sudden mental status changes, missed medications, poor hygiene, and a
facility that becomes less communicative when questions are asked.
None of these signs alone proves neglect. Several of them together,
or one of them combined with vague explanations from the facility,
deserves a closer look.

### What is a pressure ulcer and why is it a sign of neglect?

Pressure ulcers — also called bedsores or decubitus ulcers — develop
when a person sits or lies in the same position too long without
being repositioned. They are graded in stages from I (skin
discoloration) to IV (deep tissue damage exposing muscle or bone).
Most pressure ulcers in nursing-home residents are preventable with
proper repositioning, hydration, and skin care. When they develop or
worsen in a facility, the question is whether the facility provided
the care that would have prevented or treated them. That is a
clinical and legal question, evaluated case by case.

### Can I move my parent out of the nursing home?

In most cases, yes — and in most cases, the resident or the resident's
legal representative does not need the facility's permission. There
are practical considerations: where the resident will go, what care
they need, whether transfer is medically advisable, and how the
documentation of any concerns will be handled. There can also be
retaliation concerns if a complaint is raised while the resident is
still inside. These are questions an attorney can help navigate
quickly.

### Should I file a complaint with the state?

If you have a concern about care, yes. The complaint process is
separate from any civil case. It is free, it does not require an
attorney, and it creates a public record. In Missouri, complaints go
to the Department of Health and Senior Services. In Kansas, to the
Department for Aging and Disability Services. Both also have
Long-Term Care Ombudsman programs that can investigate and advocate.

### How long do I have to file a nursing home case in Missouri?

It depends on the nature of the claim. Many nursing home neglect
cases are governed by Missouri's general personal injury statute of
limitations (5 years). Cases that are framed as medical malpractice
have a shorter window (2 years from discovery). If the resident has
died, the wrongful death statute applies (3 years). The right
framework for a specific case is one of the first things an attorney
evaluates.

### How long do I have to file a nursing home case in Kansas?

Most nursing home claims in Kansas are governed by a 2-year statute
of limitations from the date of injury — whether framed as personal
injury, medical malpractice, or wrongful death. Tolling and
discovery-rule provisions may apply in some circumstances, but the
2-year baseline is the planning assumption.

### What if we signed an arbitration agreement when the resident was admitted?

Many nursing home admission packets include binding arbitration
clauses. These clauses send any dispute to private arbitration rather
than a courtroom. Their enforceability has been heavily litigated and
varies by state, by the specific language used, and by who signed
(particularly when the resident lacked capacity to sign for
themselves). An attorney can evaluate whether a particular agreement
is likely to be enforced before any case strategy is set.

### What if my parent already passed away — is it too late?

It is not automatically too late. A wrongful death case can be
brought by the deceased's family within the applicable statute of
limitations (3 years in Missouri, 2 years in Kansas), and a survival
action — for the deceased's pain and suffering before death — can
sometimes be brought through the estate. The right path depends on
the circumstances.

### What does Yonke Law need from us to evaluate a case?

A general timeline of what happened. The names of the facility, the
administrator, and the corporate parent if known. The resident's
medical records, if you have been able to obtain them. Photographs
of any injuries. Any complaints filed and the facility's responses.
A first conversation does not require all of this — but the more
that is available, the more substantive the conversation can be.
```

---

### Section 5 — Missouri vs. Kansas: the rules that matter

**Layout:** Obsidian Graphite. Two-column on desktop, stacked on mobile.

**Content:**

```markdown
## Missouri

- **Statute of limitations (general personal injury):** 5 years
  (§ 516.120)
- **Statute of limitations (medical malpractice framing):** 2 years
  from discovery (§ 516.105) *(MIKE: confirm current applicability to
  nursing home cases)*
- **Statute of limitations (wrongful death):** 3 years (§ 537.100)
- **Governing statute:** Omnibus Nursing Home Act, § 198 et seq.
- **Mandatory reporting of suspected abuse:** § 198.070
- **State regulator:** Department of Health and Senior Services (DHSS)
- **Long-Term Care Ombudsman:** Statewide program with regional offices

## Kansas

- **Statute of limitations (most claims):** 2 years (K.S.A. 60-513(a)(4))
- **Statute of limitations (wrongful death):** 2 years
  (K.S.A. 60-513(a)(5))
- **Governing statute:** Adult Care Home Licensure Act,
  K.S.A. 39-923 et seq.
- **Mandatory reporting of suspected abuse:** K.S.A. 39-1402
- **State regulator:** Department for Aging and Disability Services
  (KDADS)
- **Long-Term Care Ombudsman:** Statewide program with regional offices
- **Non-economic damages cap:** Confirm current status post-*Hilburn
  v. Enerpipe* (2019) and any subsequent legislative response
```

**Below the columns, one inline link:** `Not sure which state's rules apply, or what framework fits your loved one's situation? [Send us the basics and we'll tell you →](#consultation)`

---

### Section 6 — Inline trust signal (Mike input required)

**Layout:** Charcoal Slate panel. Restrained.

**Implementation note:** Same caution as on the wrongful death page. A quoted testimonial from a family member of a deceased or harmed resident is exploitative if not handled with extraordinary care. Three options, in order of preference:

1. **Mike-input quote from a representative case**, used with the family's explicit written consent and reviewed for bar-advertising compliance. No identifying details unless the family has approved them.
2. **Anonymous outcome reference** — a brief, plain-language reference to a nursing-home recovery, with no quote, no family detail, and no specific dollar figure unless cleared by Mike.
3. **No testimonial on this page** — replace the section with a brief, signed statement from Mike about how the firm handles nursing-home cases.

**Placeholder content (Mike to replace):**

```
[MIKE INPUT REQUIRED — choose option 1, 2, or 3 above and provide content.]

Notable nursing-home outcomes have included recoveries against
chain-operated facilities for pressure-ulcer cases, fall cases with
documented staffing failures, and medication-error cases. Each
family was different. Each facility was different. The work was the
same: get the chart, find the pattern, document the standard of
care that was owed, and prove what was not done.
```

---

### Section 7 — When it's time to talk to a lawyer

**Layout:** Obsidian Graphite. Centered. Informational framing.

**Content:**

```markdown
## When it's worth having someone look at your situation

Not every concern about a nursing home becomes a civil case. Some
situations are addressed entirely through the state regulator and
the ombudsman. Some result in the resident being moved to a better
facility without litigation. Some are real but legally limited.
The question is whether having a conversation makes sense for *this*
family, *this* facility, *this* moment.

A free consultation is worth your time if **any** of the following
are true:

- A loved one in a nursing home or assisted-living facility has been
  injured, has developed pressure ulcers, has lost significant
  weight, has had an unexplained change in mental status, or has
  died unexpectedly
- The facility has not been forthcoming about what happened
- You have requested medical records and have not received them, or
  have received only a partial version
- You signed admission paperwork that you now realize includes an
  arbitration clause
- The facility is pushing for a quick discharge or transfer after an
  incident
- A state inspection has found deficiencies you did not previously
  know about
- You feel that you have not been told the whole story

A consultation is exactly what it sounds like — a conversation. No
fee. No obligation. No pressure to move forward, then or later. If
we do not think a case can be brought, or if we think the right next
step is the ombudsman rather than a lawsuit, we will tell you.
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
THE NURSING HOME CONCERNS REFERENCE
A short PDF that walks through what we just covered — what to
document, who to call, the timing in Missouri and Kansas, and the
questions worth asking when you decide it is time to talk. Save it.
Print it. Share it with the sibling who is helping you handle this.

[Download the PDF →]
```

**Card 2 — Digital intake**

```
OR — WHEN YOU'RE READY, WALK THROUGH WHAT WE'D WANT TO KNOW
A guided version of the questions we would ask in a first
conversation with a family. Your answers are saved automatically.
If you decide later that you want Yonke Law to review your
situation, your responses become the start of the case file — no
re-typing what happened, no making the family say it again.

Free. Confidential. There is no time limit on completing it. Your
answers are private and encrypted.

[Start the digital intake →]
```

**Implementation note:** The digital intake creates a People Portal account on submission. Nursing-home intakes should branch on whether the resident is still in the facility, has been moved, or has died — the early questions and the urgency of follow-up differ in each case.

---

### Section 9 — Related pages

**Layout:** Obsidian Graphite. Horizontal row of cards (3 on desktop, stacked mobile).

**Headline:** `Related guidance`

**Cards:**

1. **If your loved one has died** — *Wrongful death cases in Missouri and Kansas* → `/just-happened/wrongful-death/`
2. **If it was a medical decision that caused the harm** — *Medical malpractice and how it overlaps with nursing-home cases* → `/just-happened/medical-malpractice/`
3. **If it was a fall** — *What a fall case turns on, in a facility or out of it* → `/just-happened/slip-and-fall/`

---

### Section 10 — Final CTA / Talk to Us (standard pattern)

Same as homepage Section 10. Reused as a component, with slightly modified language for this page.

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
- [ ] Does it use fear tactics about elder safety? (Fail — rewrite)
- [ ] Does it use guilt as a marketing lever? (Fail — rewrite)
- [ ] Does it claim or imply legal advice? (Fail — rewrite)
- [ ] Does it overpromise outcomes? (Fail — rewrite)
- [ ] Does it position the family member as the resident's only line of defense in a way that amplifies their distress? (Fail — rewrite)
- [ ] Does it treat the reader as someone capable of understanding things? (Pass)
- [ ] Does it acknowledge that the right next step is sometimes the ombudsman, not a lawsuit? (Pass)
- [ ] Could it be quoted by an LLM as a clear, authoritative answer? (Pass)

---

## 5. Image asset references

| Section | Suggested asset (from Drive folder `1Sea3j5hCkU8xQLcVNqYjYMj8bjPj57XI`) |
|---|---|
| Hero background (optional) | A quiet, distant image — residential street at dusk, soft-lit sitting room, long hallway with natural light. Heavily darkened with overlay. If no existing asset matches the brief, commission or license a new image rather than compromising. |
| Mid-page Section 6 trust signal panel | Optional — only if Mike opts for a quoted testimonial. No image otherwise. |
| Related-pages cards | Pull from Practice Area Images for the cross-link page types. |

**Forbidden:**
- Stock photos of elderly people looking sad, frail, or distressed
- Walkers, wheelchairs, or canes as visual shorthand
- Hospital corridors or beds
- Care-worker-with-elderly-patient stock imagery
- Stock-photo grieving families
- Stock-photo "concerned daughter on phone"
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

Flag each item visually in the build until Mike signs off.

- Missouri Omnibus Nursing Home Act — § 198 et seq. Confirm current statutory framework and any recent amendments.
- Missouri mandatory-reporting framework — § 198.070. Confirm reporter categories and reporting obligations.
- Missouri statute of limitations — confirm whether nursing-home neglect cases proceed under the general PI 5-year window (§ 516.120) or the med-mal 2-year window (§ 516.105). The case-law treatment of this distinction matters.
- Missouri non-economic damages caps in nursing-home cases — confirm current statutory framework and case-law treatment.
- Kansas Adult Care Home Licensure Act — K.S.A. 39-923 et seq. Confirm.
- Kansas mandatory-reporting framework — K.S.A. 39-1402. Confirm.
- Kansas statute of limitations for nursing-home cases — confirm 2-year baseline under K.S.A. 60-513(a)(4) and any tolling or discovery-rule application.
- Kansas non-economic damages cap — confirm current status post-*Hilburn v. Enerpipe* (2019) in nursing-home contexts specifically.
- Federal framework — 42 CFR Part 483. Confirm current applicability to MO/KS facilities and whether the page should reference federal residents' rights directly.
- Arbitration-clause enforceability — confirm current MO and KS case-law treatment of binding arbitration in nursing-home admission agreements, including capacity-to-sign issues.
- Survival action frameworks for deceased residents — confirm MO § 537.020 and KS K.S.A. 60-1801.
- Bar-advertising compliance review on the entire page, with particular attention to Section 6 (trust signal) and Section 7 (when to talk to a lawyer).

---

## 8. Open items

- Confirm hero image selection. The "quiet residential street at dusk / soft-lit sitting room / long hallway" brief is intentional. If no existing Drive asset matches, this page warrants a commissioned or selected new image.
- Decide whether the page should include a separate callout for assisted-living facilities versus skilled-nursing facilities. The regulatory framework and standard of care differ. Recommendation: keep this page general for now, add a separate `/just-happened/assisted-living-injury` page if it becomes a workstream priority.
- Decide whether the page should explicitly address financial exploitation cases (theft, manipulated wills, drained accounts). These are real and increasingly common, but they sit at the edge of personal injury and may belong on a different page entirely. Recommendation: flag as out-of-scope for v1 of this page; revisit.
- Decide whether to surface the federal Nursing Home Care Compare site by URL on the page itself. Recommendation: yes, in Section 2 step 8 — it is a public resource and helps the family.
- Confirm the relationship between this page and a future `/just-happened/elder-financial-abuse/` page if Mike wants to pursue that area.
- Confirm whether the "Related pages" links should be live now (with placeholder routes for pages not yet built) or hidden until those pages exist.

---

*End of page spec.*
