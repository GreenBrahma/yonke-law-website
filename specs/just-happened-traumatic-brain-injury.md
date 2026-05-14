# Yonke Law — `/just-happened/traumatic-brain-injury/` Page Spec

**Workspace:** Yonke Law Website
**Template type:** Variant of the `/just-happened/*` pattern. Inherits the shape of `just-happened-car-accident.md`. Result-category overlay — the underlying cause of the brain injury can be any tort already covered elsewhere on the site (auto, truck, motorcycle, fall, workplace, construction, assault, medical event, shooting, or birth-related).
**Reference docs:** `yonke-homepage-spec.md`, `just-happened-car-accident.md` (pattern-setter), `just-happened-wrongful-death.md` (companion result-category page), `just-happened-birth-injury.md` (for anoxic brain injury overlap), `Yonke Law — The Standard` (Brand Doctrine & Operating System).
**Pronunciation standard:** Yonke (YONK-ee) Law.
**Sensitivity:** Moderate-high. Recommend Mike's review before any other reviewer.

---

## 1. Page purpose & intent

This page serves a visitor who is either:
- **Living with the effects of a traumatic brain injury themselves**, often months or years after the event, and trying to understand whether what they are experiencing has a name and a legal path, OR
- **Watching a family member who is not the same person they were before the injury** — and seeing what others around them are not seeing.

It must serve both readers without compromising either. It must also reach a person who has been told the imaging was normal and the recovery is complete — when neither is necessarily true.

The page is also the destination for the homepage concierge classifier when the "What happened?" input indicates a brain injury. From here, the page can cross-link to the underlying-cause scenario pages (car-accident, truck-accident, motorcycle-accident, slip-and-fall, workplace-injury, construction-injury, medical-malpractice, wrongful-death) when a reader wants to understand the specific cause in addition to the TBI framework that applies across all of them.

**Critical constraint:** This is informational content, not legal advice. The page must never claim to provide legal advice or create an attorney-client relationship. Standard disclaimers in footer apply.

---

## 2. SEO/AEO foundation

### URL

`/just-happened/traumatic-brain-injury/`

### Meta

- **Title:** `Traumatic Brain Injury Cases: What Families Should Know | Yonke Law`
- **Description:** `Plain-language guidance on traumatic brain injury cases in Missouri and Kansas — including mild TBI, concussion, post-concussive syndrome, and anoxic brain injury. Why imaging can miss the injury. What the case actually turns on. From Yonke (YONK-ee) Law.`
- **Canonical:** Explicit
- **OG image:** Custom for this page. Restrained — no hospital imagery, no brain scans, no head trauma.

### Structured data (JSON-LD)

Required on this page:
- `Article` schema (author: Michael T. Yonke)
- `FAQPage` schema (for the FAQ section — every Q&A item)
- `HowTo` schema (for the procedural steps in Section 2)
- `LegalService` reference (links back to the Yonke Law entity)

### Crawler permissions

Allow GPTBot, ClaudeBot, PerplexityBot, Google-Extended, anthropic-ai. Families researching TBI symptoms and options frequently arrive through LLM-mediated search, often after a frustrating period of trying to make sense of a loved one's changes.

---

## 3. Section-by-section spec

### Section 1 — Hero

**Layout:** Obsidian Graphite background. Centered, max-width 900px. Strong vertical breathing room.

**Content:**

```
Eyebrow (small caps, Steel Silver):  JUST HAPPENED

Headline (display serif, large):
Brain injuries don't always show. Take a breath.

Subhead (body, lighter):
Whether the imaging came back normal or not, whether the injury was
six weeks ago or six years ago, here is what to know about traumatic
brain injury cases in Missouri and Kansas. What the records show.
What gets missed. What an honest evaluation looks like.

Primary CTA (Muted Gold or Chrome Highlight):
Read what to know → (anchor to #what-to-know)

Secondary link (text only, Steel Silver):
Or talk to someone, when you're ready → (anchor to #consultation)
```

**Optional background treatment:** Dim photographic image with heavy dark overlay. Suggested visual: a quiet domestic interior with soft natural light, an empty chair in a sunlit room, a path through trees. **Never** a hospital scene, a CT or MRI machine, a person in a hospital bed, a brain scan image, a stock photo of "thoughtful family member," or any visual that uses the injured person or the medical setting as marketing.

---

### Section 2 — What to know (the LLM-citation engine)

**Layout:** Charcoal Slate background. Max-width 800px. Structured with H2 + H3 hierarchy for schema markup.

**Anchor ID:** `#what-to-know`

**Implementation note:** Wrap this entire section in `HowTo` schema. Each step gets an `HowToStep` schema entry. The timing framing here spans years — the page works for families weeks after the injury and for families a decade out.

**Content:**

```markdown
## What to know

A traumatic brain injury case is built across many records, not one.
The imaging is one piece. The hospital course is another. The
neuropsychological testing — typically administered months after the
injury — is a third. The pre-injury baseline is often half the case.
And the family member who has been watching the change is, in many
cases, the most reliable witness in the file.

These steps are written for the work of building that picture. They
are not in a 24-hour order. They are in the order that protects the
case as you go.

### Before anything else

1. **Get the complete medical records — including the imaging films
   themselves, not just the radiologist's reports.** ER records,
   hospital course, neurology notes, ICU records if applicable. The
   actual CT and MRI files can be reread by an independent
   neuroradiologist. A negative read at the time of injury does not
   always mean the imaging is, in fact, normal.

2. **Do not sign anything from the insurer or the responsible party
   without legal review.** Recorded statements. Settlement offers.
   Broad medical authorizations. Brain injury insurers often push
   early settlement before symptoms have fully developed — a closed
   case forecloses recovery for changes that appear months later.

### In the weeks and months ahead

3. **Establish the pre-injury baseline.** This is half the case.
   School transcripts. Employment records. Performance reviews.
   Military service records. Letters and writing samples. Photographs
   and videos from before. Family communications. Medical records
   from before. The case is in part about proving who the person was
   — because the value of what was lost depends on the gap between
   before and now.

4. **Document changes — at the time and over time.** What the family
   noticed. When mood shifted. When cognitive issues appeared. When
   the injured person stopped doing things they used to do. When
   they had to give something up. When sleep changed. When patience
   thinned. When small tasks became hard. Family journal-style
   observations, dated and saved, become evidence.

5. **Get neuropsychological testing — typically three to six months
   after injury.** Done too early, the testing can underestimate
   persistent deficits because the brain is still acutely recovering.
   Done at the right time, it provides objective, standardized
   measurement of cognitive function across attention, memory,
   executive function, language, and processing speed. The testing
   often documents what imaging misses.

6. **Document the full treatment course.** Physical therapy,
   occupational therapy, speech therapy, cognitive rehabilitation,
   vestibular therapy, mental health treatment, vocational
   rehabilitation. Every appointment. Every therapist's note. Every
   medication change. Every accommodation requested at work or
   school.

### Before key decisions

7. **Be careful with social media.** TBI is particularly vulnerable
   to social-media weaponization because the deficits often are not
   visible. A photograph at a family event becomes "the plaintiff
   appears fine" in litigation. Even a smile in a vacation photo can
   become an exhibit. This is not about hiding life; it is about
   knowing how a photograph can be used out of context.

8. **Identify witnesses to the change.** A spouse. A parent. An
   adult child. An employer. A teacher. A coach. A coworker. A
   therapist. A close friend. People who knew the injured person
   before and after can speak to the change in ways the person often
   cannot speak about themselves — and the inability to recognize
   one's own deficits, known as anosognosia, is itself a common
   feature of brain injury.

9. **Understand that recovery does not end at a fixed date.** The
   defense playbook in TBI cases often claims recovery is complete
   at six months, twelve months, or twenty-four months. The medical
   literature is more complicated than that — recovery curves vary
   widely by injury type, severity, age, pre-injury health, and
   access to rehabilitation. A "plateau" claim is a defense position,
   not a medical fact.

10. **A first conversation with a lawyer is to understand whether
    the records and the timeline support a case.** Not every brain
    injury is the basis for a civil case — the case requires an
    underlying tort (someone else's negligence, intentional act, or
    product defect) that caused the injury. Honest evaluation matters
    here: many TBI inquiries do not result in cases because the
    underlying tort is not there, even when the injury is very real.
```

**End of section CTA (text link, inline):**
*Want a printable version to take with you? [Download the TBI Family Reference →](/resources/checklists/tbi-family-reference/)*

---

### Section 3 — What insurers and defense lawyers typically do

**Layout:** Obsidian Graphite. Max-width 800px. Informational tone.

**Content:**

```markdown
## What insurers and defense lawyers typically do

Traumatic brain injury cases have a well-developed defense playbook
in both Missouri and Kansas. Insurance carriers have handled these
cases many times. Defense lawyers know exactly which arguments to
prepare. The first time a family encounters this playbook is usually
the first time they have ever needed to know it exists.

You should expect, depending on the carrier and the circumstances:

- **An early focus on negative imaging.** If the CT or MRI at the
  time of injury showed no acute bleeding or structural damage, the
  defense position is often that there is no brain injury at all.
  The medical reality is that mild and even moderate TBI frequently
  produces normal acute imaging. Microscopic axonal damage — the
  hallmark of many TBIs — does not show on standard scans. This is
  a point the case needs to be prepared to make.

- **Reference to pre-existing conditions.** Headaches before the
  injury. A prior concussion. Anxiety or depression in the medical
  history. A learning difference noted in school. Defense lawyers
  often build a story in which any current symptom is just a
  continuation of something that existed before. The pre-injury
  baseline records are the response to this argument.

- **Suggestions of "symptom magnification" or malingering.** Some
  insurance-retained experts specialize in arguing that a plaintiff's
  symptoms are exaggerated or produced by the case itself. This
  framework — sometimes called "litigation symptoms" — is contested
  in the medical literature, but it appears reliably in TBI defense.

- **Claims of complete recovery at a fixed date.** Six months. Twelve
  months. Two years. The defense will often cite a particular
  treatment record where a provider noted that the patient was
  "doing well" and characterize it as the moment of full recovery.

- **Early settlement offers.** Calibrated to the pressure of medical
  bills, missed work, and family stress — not to the long-term value
  of the injury. A signed release at month four can foreclose
  recovery for symptoms that emerge at month nine.

None of this is unique to TBI cases — but the combination, and the
particular weight given to "the scan was normal," is. The earlier
in the process a family understands the playbook, the better
positioned they are to build the case the records will actually
support.
```

---

### Section 4 — FAQ (the AEO workhorse)

**Layout:** Charcoal Slate. Each Q is collapsible accordion (or always-expanded — accessibility-friendly either way).

**Implementation:** Wrap in `FAQPage` schema. Each Q/A is a `Question` with `acceptedAnswer`.

**Headline:** `Common questions about traumatic brain injury cases`

**Questions:**

```markdown
### What is a traumatic brain injury?

A traumatic brain injury is damage to the brain caused by an external
force — a blow, a jolt, a penetrating injury, or a violent shaking.
TBIs range from mild (concussion) to severe (extended loss of
consciousness, persistent vegetative state). Anoxic brain injury,
caused by oxygen deprivation rather than impact, is medically
distinct from TBI but is often handled under the same legal framework
because the case-building work is similar.

### If the CT scan was normal, do I have a brain injury?

You can. Standard CT and MRI scans done at the time of injury are
designed primarily to identify acute bleeding, fractures, and
structural damage that may require immediate intervention. They are
often normal in mild and even moderate TBI. The injury that produces
many TBI symptoms — diffuse axonal injury at the microscopic level —
does not show on those scans. Specialized imaging like diffusion
tensor imaging (DTI), functional MRI, and neuropsychological testing
often documents what standard scans miss.

### What is the difference between mild, moderate, and severe TBI?

The categories are typically defined by initial measures of
consciousness, the length of any loss of consciousness, the length
of any period of post-traumatic amnesia, and findings on initial
imaging. "Mild" in this context is a clinical term and is not the
same as "minor." Mild TBI (including concussion) can produce
significant and persistent symptoms in a substantial percentage of
cases.

### What is post-concussive syndrome?

Post-concussive syndrome refers to a cluster of symptoms — headaches,
dizziness, sleep disturbance, mood changes, cognitive issues — that
persist beyond the typical recovery window after a concussion. The
estimated percentage of concussions that develop into prolonged
post-concussive symptoms varies in the literature but is substantial.
The defense position is often that post-concussive symptoms are
psychological rather than physical. The medical literature is more
nuanced.

### What is neuropsychological testing?

Neuropsychological testing is a standardized assessment of cognitive
function across multiple domains — attention, memory, executive
function, language, processing speed, mood. It is administered by a
licensed neuropsychologist, typically takes several hours, and
produces objective, normative data that can document deficits that
imaging missed and that casual conversation cannot reveal. It is
often the central piece of evidence in mild and moderate TBI cases.

### How long does TBI recovery take?

It varies widely. Most mild TBIs resolve within weeks to a few months,
but a meaningful percentage produce persistent symptoms that can last
years or be permanent. Moderate and severe TBIs have longer recovery
arcs. The defense often argues that recovery is "complete" at a
specific date; the medical reality is that the recovery curve is
specific to the individual, the injury, the treatment received, and
factors that are not fully understood.

### How long do I have to file a TBI case in Missouri?

It depends on the underlying cause. A TBI from a car crash is
governed by Missouri's 5-year personal injury statute of limitations
(§ 516.120). A TBI from a medical event is governed by the 2-year
medical malpractice framework (§ 516.105). A TBI from a fall on
someone's property is governed by the 5-year personal injury rule.
And so on. The TBI itself does not have its own statute — the
underlying tort does.

### How long do I have to file a TBI case in Kansas?

Similarly fact-dependent. Most underlying torts in Kansas are
governed by a 2-year statute of limitations from the date of injury
(K.S.A. 60-513(a)(4)). Medical events are governed by the same
2-year window plus a 4-year statute of repose. Wrongful death from
TBI is governed by the wrongful death framework. As in Missouri, the
TBI itself does not have its own clock — the underlying cause does.

### What if the brain injury happened at work?

A workplace TBI typically triggers a workers' compensation claim
against the employer. It may also support a separate third-party
personal injury claim against another party — an equipment
manufacturer, a contractor on a multi-employer site, the driver of
another vehicle if the injury occurred while driving for work.
Workplace TBI cases often run on both tracks at once. The interaction
between comp and the third-party case is fact-specific.

### How does Yonke Law evaluate a TBI case?

We start by reading the medical records. We look at the mechanism of
injury, the acute course, the imaging, the symptom trajectory, and
the pre-injury baseline. When the records suggest closer evaluation
is warranted, we engage neuropsychologists, neurologists, life care
planners, and other specialists. We tell families honestly when the
records do not support a case — and we tell them honestly when they
do. The goal of a first conversation is not to take a case; it is to
understand whether one exists.
```

---

### Section 5 — Missouri vs. Kansas: the rules that matter

**Layout:** Obsidian Graphite. Two-column on desktop, stacked on mobile.

**Important framing note for this section:** Because TBI is a result category and the statute of limitations follows the underlying cause, this section explains how the rules work *based on what caused the injury*. It is the only `/just-happened/*` page where the MO vs. KS framework is fundamentally cause-dependent rather than category-specific.

**Content:**

```markdown
## Missouri

**The TBI itself does not have its own statute of limitations.** The
applicable rule depends on what caused the brain injury.

- **TBI from a motor vehicle crash, fall, or other ordinary negligence:**
  5 years from injury (§ 516.120)
- **TBI from a medical event or surgical anoxia:** 2 years from
  injury or discovery (§ 516.105)
- **TBI from an assault or intentional act:** Generally 2 years
  (§ 516.140) — confirm specific framing
- **TBI from a workplace event:** Workers' compensation claim under
  § 287; third-party claims follow the applicable PI rule
- **TBI resulting in death:** Wrongful death framework — 3 years
  (§ 537.100)
- **Tolling for minors and incapacitated persons:** Apply in some
  contexts. *(MIKE: confirm § 516.170 and case-law application to
  TBI plaintiffs who are themselves cognitively impaired.)*

## Kansas

**The TBI itself does not have its own statute of limitations.** The
applicable rule depends on what caused the brain injury.

- **TBI from a motor vehicle crash, fall, or other ordinary negligence:**
  2 years from injury (K.S.A. 60-513(a)(4))
- **TBI from a medical event or surgical anoxia:** 2 years from
  injury, with a 4-year statute of repose (K.S.A. 60-513(c))
- **TBI from an assault or intentional act:** Generally 1 year
  (K.S.A. 60-514) — confirm specific framing
- **TBI from a workplace event:** Workers' compensation claim under
  K.S.A. 44; third-party claims follow the applicable PI rule
- **TBI resulting in death:** Wrongful death framework — 2 years
  (K.S.A. 60-513(a)(5))
- **Tolling for minors and incapacitated persons:** K.S.A. 60-515.
  *(MIKE: confirm interaction with the statute of repose for TBI
  plaintiffs who are themselves cognitively impaired.)*
```

**Below the columns, one inline link:** `Not sure how the rules apply to your situation? [Send us the basics and we'll tell you →](#consultation)`

---

### Section 6 — Inline trust signal (Mike input required)

**Layout:** Charcoal Slate panel. Restrained.

**Implementation note:** Same caution as on other sensitive pages. Three options, in order of preference:

1. **Mike-input quote from a representative case**, used only with the family's explicit written consent and reviewed for bar-advertising compliance. No identifying details unless the family has explicitly approved them.
2. **Anonymous outcome reference** — a brief, plain reference to recoveries in TBI cases, with no quote, no family detail, and no specific dollar figure unless cleared by Mike.
3. **No testimonial on this page** — replace with a brief, signed statement from Mike about how the firm handles TBI cases.

**Placeholder content (Mike to replace):**

```
[MIKE INPUT REQUIRED — choose option 1, 2, or 3 above and provide content.]

Notable brain injury outcomes have included recoveries for clients
with mild TBI and negative imaging, post-concussive syndrome that
extended well beyond initial recovery estimates, and anoxic brain
injuries from medical events. Each client was different. Each
family was different. The work was the same: get the records,
build the baseline, document the change, engage the specialists
the case needs, and prepare the case for trial whether or not it
ultimately settles.
```

---

### Section 7 — When it's time to talk to a lawyer

**Layout:** Obsidian Graphite. Centered. Informational framing.

**Content:**

```markdown
## When it's worth having someone look at your situation

Not every brain injury is the basis for a civil case. A case requires
an underlying tort — someone else's negligence, intentional act, or
defective product — that caused the injury. Brain injuries from
self-inflicted accidents, unwitnessed falls without a clear cause,
or events where no other party was responsible may be devastating
but legally limited.

A free, confidential consultation is worth your time if **any** of
the following are true:

- A family member had a head injury and is not the same person they
  were before
- The imaging came back normal but the symptoms are clearly real
- An insurer is telling you the case is small, the recovery is
  complete, or the symptoms are not from the injury
- You are seeing changes in your loved one that others around them
  are not seeing
- An early settlement offer is on the table and you are not sure
  whether to accept
- The injured person had a brain injury at work, and you are not
  sure whether workers' comp is the only path
- Someone in your family died from a brain injury and you are
  considering what comes next
- You simply want to understand what TBI cases look like, regardless
  of whether you ultimately bring one

A consultation is exactly what it sounds like — a conversation. No
fee. No obligation. If we do not think a case can be brought, we
will tell you. If we think a different specialist firm is a better
fit, we will tell you that. And if a case is worth building, we will
tell you honestly what that will take.
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
THE TBI FAMILY REFERENCE
A short PDF that walks through what we just covered — what records
to gather, what neuropsychological testing is and when it should
happen, the timing in Missouri and Kansas based on the cause of the
injury, and the questions worth asking when you decide it is time
to talk. Save it. Print it. Share it with the family member who
helps coordinate the loved one's care.

[Download the PDF →]
```

**Card 2 — Digital intake**

```
OR — WHEN YOU'RE READY, WALK THROUGH WHAT WE'D WANT TO KNOW
A guided version of the questions we would ask in a first
conversation. The intake branches based on how the brain injury
happened (crash, fall, workplace, medical event, assault, other),
because the case framework depends on the cause. You can complete
only the parts you have, save the rest for later, and return when
more information is available.

Free. Confidential. There is no time limit on completing it. Your
answers are private and encrypted.

[Start the digital intake →]
```

**Implementation note:** The digital intake for TBI cases should branch on the cause and then collect the cause-specific intake fields. A TBI from a car crash should pull the same questions as the standard car-accident intake plus TBI-specific questions; a TBI from a workplace event should pull the workplace intake; and so on. Spec for the branching logic is separate.

---

### Section 9 — Related pages

**Layout:** Obsidian Graphite. Horizontal row of cards (3 on desktop, stacked mobile).

**Headline:** `Related guidance`

**Cards (adapt based on what caused the injury):**

1. **If it was a vehicle crash** — *Car, motorcycle, truck, or pedestrian causes of brain injury* → `/just-happened/car-accident/` (or relevant variant)
2. **If it was a fall** — *Slip, trip, and fall cases — and the brain injuries that often go undocumented at the scene* → `/just-happened/slip-and-fall/`
3. **If it was a workplace event** — *Construction, industrial, and on-the-job brain injuries* → `/just-happened/workplace-injury/` and `/just-happened/construction-injury/`

For TBI cases involving assault, medical events, or shootings, the cards should adapt to surface those scenario pages instead. Concierge classifier should support routing into TBI from any of the underlying-cause pages and back out again.

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
- [ ] Does it use the injured person's condition as a marketing lever? (Fail — rewrite)
- [ ] Does it claim or imply legal advice? (Fail — rewrite)
- [ ] Does it overpromise outcomes? (Fail — rewrite)
- [ ] Does it dismiss the validity of mild TBI or "invisible" symptoms? (Fail — rewrite)
- [ ] Does it pathologize the injured person? (Fail — rewrite)
- [ ] Does it acknowledge that not every TBI is a case? (Pass)
- [ ] Does it validate the family member's role as observer of changes the injured person may not see themselves? (Pass)
- [ ] Does it treat the reader as someone capable of understanding things? (Pass)
- [ ] Could it be quoted by an LLM as a clear, authoritative answer? (Pass)

---

## 5. Image asset references

| Section | Suggested asset (from Drive folder `1Sea3j5hCkU8xQLcVNqYjYMj8bjPj57XI`) |
|---|---|
| Hero background (optional) | A quiet domestic or natural image — sunlit room with empty chair, soft window light, path through trees. Heavily darkened with overlay. If no existing asset matches, commission or license a new image rather than compromising. |
| Mid-page Section 6 trust signal panel | Optional — only if Mike opts for a quoted testimonial. No image otherwise. |
| Related-pages cards | Pull from Practice Area Images for the cross-link page types. |

**Forbidden:**
- Brain scan imagery (CT or MRI images)
- Hospital corridors, beds, or equipment
- Patients with bandages or in distress
- Stock photos of "thoughtful family member"
- Wheelchairs or mobility aids
- Helmets — bicycle, motorcycle, football — as visual shorthand
- Football, hockey, or other contact-sport imagery (unless Mike specifically pursues a sports-concussion sub-page)
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
- Reduced-motion handling: any subtle animations respect `prefers-reduced-motion: reduce` — particularly important on this page because some TBI symptoms include motion sensitivity and vestibular dysfunction
- The page should pass automated cognitive-load testing — short sentences, clear hierarchy, generous whitespace. The audience often includes the injured person reading themselves.

---

## 7. Statutes and facts that need Mike's confirmation

Flag each item visually in the build until Mike signs off. Because TBI is a result-category overlay, most of the statutes referenced here are confirmed on the underlying-cause pages, but the interaction matters.

- Missouri personal injury, medical malpractice, and intentional tort SOL frameworks — confirm current text and case-law application to TBI plaintiffs.
- Missouri tolling for cognitively impaired plaintiffs — § 516.170 framework and any TBI-specific case law on capacity-to-toll.
- Missouri non-economic damages caps — confirm current application across the various underlying-cause categories.
- Missouri vicarious liability framework — confirm current treatment for hospital and corporate-employer cases involving TBI.
- Kansas personal injury, medical malpractice, and intentional tort SOL frameworks — confirm current text and case-law application.
- Kansas K.S.A. 60-515 tolling for incapacitated persons — interaction with the statute of repose. The interaction is fact-specific and matters for TBI plaintiffs whose own capacity is in question.
- Kansas non-economic damages caps — current status post-*Hilburn v. Enerpipe* (2019) across the relevant categories.
- Federal-context overlay — confirm whether the page should reference VA disability frameworks for military TBI (typically out of scope for PI practice).
- Bar-advertising compliance review on the entire page, especially section 7 and the recovery-curve claims in sections 2 and 3.

---

## 8. Open items

- Confirm hero image selection from the Drive folder. The "sunlit room with empty chair / soft window light / path through trees" brief is intentional — TBI cases should not be marketed with brain scans, hospital imagery, or stock-photo "concerned family."
- Confirm whether the page should add a sports-concussion sub-section, callout, or separate page (`/just-happened/sports-concussion/`). Sports concussion is a high-search-volume term and has its own evidence pattern (return-to-play protocols, baseline ImPACT testing, second-impact syndrome). Recommendation: add a separate Tier 2 page in a future workstream rather than expanding this page.
- Confirm whether the page should address military TBI explicitly. Recommendation: no — military TBI cases generally proceed through the VA disability system rather than tort litigation, and the page would lose focus by trying to cover both.
- Confirm whether the digital intake branching logic (Section 8) should be a separate spec or rolled into the main People Portal intake spec. Recommendation: separate, because the cause-based branching is meaningful enough to warrant its own design pass.
- Confirm cross-link from `/just-happened/car-accident/`, `/just-happened/motorcycle-accident/`, `/just-happened/slip-and-fall/`, `/just-happened/workplace-injury/`, `/just-happened/construction-injury/`, `/just-happened/medical-malpractice/`, and `/just-happened/wrongful-death/` Related Reading sections back to this page. TBI is the most-cross-linked result-category page on the site.
- Confirm whether "Related reading" links should be live now (with placeholder routes for pages not yet built) or hidden until those pages exist.

---

*End of page spec.*
