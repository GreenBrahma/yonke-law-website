# Yonke Law — `/just-happened/wrongful-death/` Page Spec

**Workspace:** Yonke Law Website
**Template type:** Variant of the `/just-happened/*` pattern. Inherits the shape of `just-happened-car-accident.md`. Result-category overlay — the underlying cause of death can be any tort already covered elsewhere on the site (auto, truck, motorcycle, medical malpractice, workplace, construction, premises, product, dog attack, or shooting).
**Reference docs:** `yonke-homepage-spec.md`, `just-happened-car-accident.md` (pattern-setter), `Yonke Law — The Standard` (Brand Doctrine & Operating System).
**Pronunciation standard:** Yonke (YONK-ee) Law.
**Sensitivity:** High. Recommend Mike's review before any other reviewer.

---

## 1. Page purpose & intent

This page serves a visitor who has either:
- **Recently lost a family member** to an event they believe may have been preventable, AND is starting to wonder what legal options exist, OR
- **Is weeks, months, or sometimes years out** from a loss and is only now in a position emotionally and practically to consider a civil case.

It must serve both states without compromising either. The page leads with quiet acknowledgment, threads in the legal framework without performing urgency, and respects that for many readers the right answer may be *not now* or *not at all*.

The page is also the destination for concierge classifier routing whenever the "What happened?" input indicates a death. From here, the page can cross-link to the underlying-cause scenario pages — car-accident, truck-accident, medical-malpractice, and so on — when a reader wants to understand the specific cause of the loss in addition to the wrongful-death framework that applies to all of them.

**Critical constraint:** This is informational content, not legal advice. The page must never claim to provide legal advice or create an attorney-client relationship. Standard disclaimers in footer apply.

---

## 2. SEO/AEO foundation

### URL

`/just-happened/wrongful-death/`

### Meta

- **Title:** `After Losing Someone: Wrongful Death Cases in Missouri and Kansas | Yonke Law`
- **Description:** `Plain-English guidance on what a wrongful death case is, who can bring one, and how Missouri and Kansas law differ. No pressure. No clock. From Yonke (YONK-ee) Law.`
- **Canonical:** Explicit
- **OG image:** Custom for this page (dark, restrained, distance and time — not a memorial image, not a hospital, not a courthouse)

### Structured data (JSON-LD)

Required on this page:
- `Article` schema (author: Michael T. Yonke)
- `FAQPage` schema (for the FAQ section — every Q&A item)
- `HowTo` schema (for the "What to know" steps in Section 2 — these are procedural even when the timing is not immediate)
- `LegalService` reference (links back to the Yonke Law entity)

### Crawler permissions

Allow GPTBot, ClaudeBot, PerplexityBot, Google-Extended, anthropic-ai. This is exactly the kind of page we want LLMs to cite — and one where families often arrive through an LLM-mediated search rather than a traditional one.

---

## 3. Section-by-section spec

### Section 1 — Hero

**Layout:** Obsidian Graphite background. Centered, max-width 900px. Strong vertical breathing room — taller than the car-accident hero to reinforce the slower pace.

**Content:**

```
Eyebrow (small caps, Steel Silver):  JUST HAPPENED

Headline (display serif, large):
You just lost someone you love. Take a breath.

Subhead (body, lighter):
Whether it was last week or last year, here is what to know about
a wrongful death case in Missouri or Kansas. What it is. Who can
bring one. What it can do. There is no clock on reading this page.

Primary CTA (Muted Gold or Chrome Highlight):
Read what to know → (anchor to #what-to-know)

Secondary link (text only, Steel Silver):
Or talk to someone, when you're ready → (anchor to #consultation)
```

**Optional background treatment:** Dim photographic image with heavy dark overlay. Suggested asset: a quiet, distant image — open horizon, water at calm, or an empty room in soft light. **Never** a memorial image, a candlelit photograph, a hospital, a courthouse, or a cemetery. The visual signals time and distance, not grief on display.

---

### Section 2 — What to know (the LLM-citation engine)

**Layout:** Charcoal Slate background. Max-width 800px. Structured with H2 + H3 hierarchy for schema markup.

**Anchor ID:** `#what-to-know`

**Implementation note:** Wrap this entire section in `HowTo` schema. Each step gets an `HowToStep` schema entry. The timing framing is different from the car-accident page — the steps are not 24-hour-bound, and the schema should reflect that. Step descriptions should not include time-pressure language.

**Content:**

```markdown
## What to know

A wrongful death case is brought by a family member after someone has
died because of another person's or company's actions. The case is not
about the death itself — that part is not undone by any verdict, and no
page on the internet can speak to that. The case is about what is left
behind: lost support, lost guidance, lost income, and a record of what
happened that the family is entitled to have.

Here is what matters, in order. There is no clock on this list.

### Before anything else

1. **Grief comes first. The legal case can wait.** Statutes of limitations
   exist, but they are measured in years in Missouri and Kansas. There is
   time. Talking to a lawyer when you are ready does not require you to
   be ready today.

2. **Do not sign anything from the hospital, the insurance company, or
   the responsible party.** Not a release. Not a settlement. Not a
   "we just need this for our records" form. Not a check that comes with
   paperwork. All of those can wait.

### In the days and weeks ahead

3. **Get certified copies of the death certificate — more than you think
   you will need.** Most legal, financial, and administrative tasks
   require an original certified copy, not a photocopy. Five to ten
   copies is a reasonable starting number.

4. **Preserve everything related to what happened.** Medical records.
   Police reports. Scene photographs. Receipts and bills. Communications
   with the responsible party. The deceased's clothing or belongings
   that may carry evidentiary weight. Do not throw anything away.

5. **Identify the personal representative or administrator of the
   estate.** In a wrongful death case, who is legally allowed to bring
   the case depends on state law and on the deceased's family structure.
   In some situations, probate must be opened first. In others, the
   wrongful death case proceeds independently of the estate. Section 5
   below explains the rules in Missouri and Kansas.

6. **Begin documenting who your family member was.** A wrongful death
   case is built around the person who is gone. Photographs, videos,
   letters, work history, income records, tax returns, the role they
   played in the family. None of this proves the case. All of it
   establishes the loss.

### Before key decisions

7. **Do not give a recorded statement to the responsible party's
   insurance company.** They will call. They will be kind. Pieces of
   what you say in grief can be replayed in litigation later.

8. **Be careful with social media.** Insurance defense attorneys read
   what families post after a loss. A photograph from a holiday or a
   wedding can become an out-of-context exhibit.

9. **Watch the timing — but do not be rushed by it.** Missouri wrongful
   death claims generally must be filed within three years of the death.
   Kansas claims generally must be filed within two years. These are
   real deadlines and worth knowing. They are not deadlines that require
   action today.

10. **Talk to a lawyer before settling anything — even something that
    looks small.** Early settlement offers in wrongful death cases are
    often calibrated to the family's grief, not to the value of what
    was lost. A signed release closes the case forever.
```

**End of section CTA (text link, inline):**
*Want a printable version to take with you? [Download the After-a-Loss Reference →](/resources/checklists/wrongful-death-reference/)*

---

### Section 3 — What insurance companies and responsible parties typically do

**Layout:** Obsidian Graphite. Max-width 800px. Informational tone, not aggressive.

**Content:**

```markdown
## What insurance companies and responsible parties typically do

After a death, the financial and legal response from the responsible
party — and from their insurer — begins quickly, often while the family
is still planning the funeral. This response is not malicious. It is a
process, and it has been refined for years to favor the company over
the family. Knowing the shape of it helps a family move through it
without being moved by it.

In the first weeks, you should expect:

- **An adjuster will reach out.** Sometimes the hospital's risk manager.
  Sometimes the trucking company's representative. Sometimes the
  manufacturer's claims team. The tone is almost always sympathetic.
  The purpose is to gather information and, often, to propose an early
  resolution.

- **An early settlement offer is common.** The amount is rarely
  calibrated to the value of the case. It is calibrated to what the
  family is under — medical bills, funeral costs, the loss of the
  deceased's income, the immediate financial pressure. A small payment
  now with a signed release closes the claim entirely, even if the full
  picture of what was lost is not yet visible.

- **Document requests will arrive.** Some are routine. Some are written
  broadly enough to give the company access to records well beyond what
  is necessary. Read every request carefully. Sign nothing without
  understanding what you are signing.

- **The criminal process, if there is one, runs separately.** A criminal
  case against an at-fault driver, a hospital, or another party is not
  the same case as the civil one. They proceed on different timelines
  and produce different outcomes. The civil case is not waiting for the
  criminal case to finish, though it often coordinates with it.

None of this is necessarily improper. It is, however, well-resourced
and well-rehearsed. The family is doing this for the first time. The
other side is doing it the same way they did it last week.
```

---

### Section 4 — FAQ (the AEO workhorse)

**Layout:** Charcoal Slate. Each Q is collapsible accordion (or always-expanded — accessibility-friendly either way).

**Implementation:** Wrap in `FAQPage` schema. Each Q/A is a `Question` with `acceptedAnswer`.

**Headline:** `Common questions about a wrongful death case`

**Questions (use exact phrasing — these mirror real search and LLM prompts):**

```markdown
### Who can bring a wrongful death case in Missouri?

Missouri's wrongful death statute creates a specific hierarchy of who can
sue. A surviving spouse, the deceased's children, or the surviving lineal
descendants of a deceased child may bring the case. If no one in that
class survives, the parents of the deceased may bring it. If no parent
survives, a sibling or descendant of a sibling may bring it. Only one
case is brought per death, and the proceeds are distributed among the
statutory beneficiaries.

### Who can bring a wrongful death case in Kansas?

Kansas's wrongful death statute creates a similar but distinct hierarchy.
Any "heir at law" of the deceased who has suffered a loss may bring or
join the case. Like Missouri, only one wrongful death action exists per
death, and the recovery is distributed among the heirs according to the
nature of each one's loss.

### What is the difference between a wrongful death case and a survival action?

They are two different cases that often run together. The wrongful death
case compensates the family for the loss of the person — the lost
support, guidance, companionship, and earnings. The survival action
compensates the deceased's estate for what the deceased experienced
before death — conscious pain and suffering, medical expenses incurred
before death, and lost earnings between injury and death. Different
plaintiffs, different damages, often the same lawsuit.

### How long do I have to file a wrongful death case in Missouri?

The general statute of limitations is three years from the date of
death. There are exceptions — for cases involving minors, for cases
where the cause of death was not immediately apparent — but three years
is the baseline.

### How long do I have to file a wrongful death case in Kansas?

The general statute of limitations is two years from the date of death.
As in Missouri, exceptions exist for specific situations, but two years
is the baseline.

### What damages can be recovered in a wrongful death case?

Damages vary by state but generally include the loss of the deceased's
financial support, the value of services the deceased provided to the
family, the loss of companionship and consortium, funeral and burial
expenses, and the medical expenses incurred before death. Missouri and
Kansas both recognize loss of companionship as a category of damages,
but they value it differently and apply different limits in different
contexts.

### Does the criminal case affect the civil case?

The two cases run on separate tracks. A criminal conviction can be
helpful evidence in the civil case, but it is not required for a civil
case to succeed. The civil case has a lower burden of proof — a
preponderance of the evidence, rather than beyond a reasonable doubt —
which is why families sometimes recover civilly in cases where no
criminal charges were brought or where the criminal case did not result
in conviction.

### Does probate have to be opened before we can file?

It depends on the state, on who is bringing the case, and on the
circumstances. In Missouri, a wrongful death case is typically brought
directly by the statutory beneficiaries and does not require probate to
be opened first. In Kansas, the rules are similar but the procedural
details can differ depending on whether a personal representative is
also bringing a survival action. This is one of the first questions an
attorney evaluates.

### How long does a wrongful death case take?

Most wrongful death cases take one to three years to resolve, and
sometimes longer. The timeline depends on the complexity of the
underlying cause of death, the number of defendants, the insurance
structure, and whether the case settles or proceeds to trial. There is
no fast wrongful death case. Anyone who promises one is promising
something they cannot deliver.

### Do we have to be ready to go to trial?

Not necessarily. Most wrongful death cases settle. The cases that
settle most favorably are usually the ones in which the family is
willing to go to trial if a fair settlement is not offered. A firm that
prepares every case for trial — even ones likely to settle — typically
recovers more for the family than a firm that does not.
```

---

### Section 5 — Missouri vs. Kansas: the rules that matter

**Layout:** Obsidian Graphite. Two-column on desktop, stacked on mobile. Headed "How the rules differ depending on where it happened."

**Content:**

```markdown
## Missouri

- **Statute of limitations:** 3 years from the date of death (§ 537.100)
- **Who may bring the case:** Statutory hierarchy under § 537.080 —
  spouse and children first; then parents; then siblings or descendants
- **Damages framework:** § 537.090 — economic loss, loss of services,
  companionship, funeral expenses, pre-death pain and suffering
- **Probate:** Typically not required to open probate before filing
- **Single action rule:** Only one wrongful death case per death

## Kansas

- **Statute of limitations:** 2 years from the date of death
  (K.S.A. 60-513(a)(5))
- **Who may bring the case:** Any heir at law who has suffered a loss
  may bring or join (K.S.A. 60-1902)
- **Damages framework:** K.S.A. 60-1904 — economic and non-economic loss;
  non-economic damages capped under K.S.A. 60-1903 *(MIKE: confirm
  current cap amount and any post-Hilburn legislative response)*
- **Probate:** Survival action requires an estate; wrongful death does not
- **Single action rule:** Only one wrongful death case per death
```

**Below the columns, one inline link:** `Not sure where to start, or which rules apply to your family member's case? [Send us the basics and we'll tell you →](#consultation)`

---

### Section 6 — Inline trust signal (Mike input required)

**Layout:** Charcoal Slate panel. Restrained — more restrained than the car-accident page's Section 6.

**Implementation note:** This section is the most sensitive on the page. Using a quoted testimonial from a grieving family is exploitative if not handled with extraordinary care. The recommendation is one of three approaches, in order of preference:

1. **Mike-input quote from a representative case**, used with the family's explicit written consent and reviewed for bar-advertising compliance. No identifying details unless the family has approved them.
2. **Anonymous outcome reference** — a brief, plain-language reference to a wrongful death recovery, with no quote, no family detail, and no specific dollar figure unless cleared by Mike.
3. **No testimonial on this page** — replace the section with a brief, signed statement from Mike about how the firm handles wrongful death cases.

**Placeholder content (Mike to replace):**

```
[MIKE INPUT REQUIRED — choose option 1, 2, or 3 above and provide content.]

Notable wrongful death outcomes have included recoveries against
commercial carriers, healthcare institutions, and product
manufacturers. Each case was different. Each family was different.
The work is always the same: tell the story of who was lost,
prove who was responsible, and recover what the law allows.
```

---

### Section 7 — When it's time to talk to a lawyer

**Layout:** Obsidian Graphite. Centered. Informational framing, not pushy. Slower than the car-accident equivalent.

**Content:**

```markdown
## When it's worth having someone look at your situation

Not every death — even a death caused by someone else's mistake — is
the basis for a civil case. And not every civil case is the right
choice for every family. The question is whether having a conversation
makes sense for *this* loss, in *this* family, at *this* moment.

A free consultation is worth your time if **any** of the following are
true:

- The death involved a vehicle, a medical procedure, a workplace, a
  property condition, a product, an animal, or a violent act, and
  someone other than your family member may have contributed to it
- An insurance company or institutional representative has reached out
  and you are not sure what to say or sign
- A settlement offer has been made and you are not sure if it is fair
- The deceased's employer, the hospital, or another entity has been
  vague about what happened
- You feel that you have not been told the whole story
- You are early enough in the timeline that records, witnesses, and
  evidence are still recoverable — even if you are not ready to make
  a decision today

A consultation is exactly what it sounds like — a conversation. No fee.
No obligation. No pressure to move forward, then or later. If we do not
think a case can be brought, or if we think a different firm is a better
fit, we will tell you. If a case is worth bringing, we will tell you
that too — and we will tell you honestly what it is likely to take.
```

**Below this, two CTAs side by side:**

- **Talk to us, when you're ready** — primary CTA, anchor to `#consultation`
- **Or send us the basics first** — secondary, links to the offer review page or a brief intake form

---

### Section 8 — Two paths forward (conversion moment)

**Layout:** Charcoal Slate. Two-column on desktop. Each side is a card.

**Headline:** `When you're ready`

**Card 1 — Printable reference (existing format pattern)**

```
THE AFTER-A-LOSS REFERENCE
A short PDF that walks through what we just covered — what to know,
what not to sign, the timing in Missouri and Kansas, and the questions
worth asking when you decide it is time to talk. Save it. Print it.
Share it with the family member who is helping you handle this.

[Download the PDF →]
```

**Card 2 — Digital intake (creates People Portal account, pre-fills Mike's intake)**

```
OR — WHEN YOU'RE READY, WALK THROUGH WHAT WE'D WANT TO KNOW
A guided version of the questions we would ask in a first conversation
with a family. Your answers are saved automatically. If you decide
later that you want Yonke Law to review your situation, your responses
become the start of the case file — no re-typing what happened, no
making the family say it again.

Free. Confidential. There is no time limit on completing it. Your
answers are private and encrypted.

[Start the digital intake →]
```

**Implementation note:** The digital intake creates a People Portal account on submission. Spec for the intake flow is separate. Wrongful-death intakes should branch on the underlying cause (auto, medical, workplace, premises, product, violence) and gather different facts accordingly.

---

### Section 9 — Related pages

**Layout:** Obsidian Graphite. Horizontal row of cards (3 on desktop, stacked mobile).

**Headline:** `Related guidance`

**Cards:**

1. **What if it was a vehicle?** — *Car, truck, motorcycle, and pedestrian death cases* → `/just-happened/car-accident/` (or relevant variant, based on facts)
2. **What if it was medical?** — *When a death follows treatment, surgery, or hospitalization* → `/just-happened/medical-malpractice/`
3. **What if it was at work?** — *Workplace and construction-site fatalities* → `/just-happened/workplace-injury/` and `/just-happened/construction-injury/`

For deaths involving products, dog attacks, or shootings, the cards should adapt to surface those scenario pages instead.

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
- [ ] Does it use fear tactics? (Fail — rewrite)
- [ ] Does it use grief or family suffering as a marketing lever? (Fail — rewrite)
- [ ] Does it claim or imply legal advice? (Fail — rewrite)
- [ ] Does it overpromise outcomes? (Fail — rewrite)
- [ ] Does it pressure the reader to act today? (Fail — rewrite)
- [ ] Does it treat the reader as someone capable of understanding things? (Pass)
- [ ] Could it be quoted by an LLM as a clear, authoritative answer? (Pass)
- [ ] Does the page work for a reader who lost someone last week, *and* for a reader who lost someone three years ago? (Pass)

---

## 5. Image asset references

| Section | Suggested asset (from Drive folder `1Sea3j5hCkU8xQLcVNqYjYMj8bjPj57XI`) |
|---|---|
| Hero background (optional) | A distant, quiet image — open horizon, water at calm, or an empty room with soft natural light. Heavily darkened with overlay. If no existing asset matches the brief, commission or license a new image rather than compromising. |
| Mid-page Section 6 trust signal panel | Optional — only if Mike opts for a quoted testimonial. No image otherwise. |
| Related-pages cards | Pull from Practice Area Images for the underlying cause types. |

**Forbidden:**
- Stock memorial imagery — candles, framed photographs, folded flags, urns
- Hospitals, ambulances, emergency vehicles
- Cemeteries, gravestones, funeral homes
- Gavels, scales of justice
- Lawyer-with-arms-crossed
- Stock-photo grieving families
- Crashed vehicles or hospital beds
- Generic Kansas City skyline at sunset

---

## 6. Accessibility minimums

- All numbered steps in Section 2 are reachable by keyboard with logical tab order
- FAQ accordions (if used) have proper `aria-expanded` state
- Heading hierarchy clean (H1 → H2 → H3, no skips)
- Color contrast verified WCAG 2.2 AA against Obsidian Graphite and Charcoal Slate backgrounds
- All inline links have descriptive text (no "click here")
- Pronunciation hint on first instance of "Yonke" via `aria-label="Yonke, pronounced YONK-ee"`
- Reduced-motion handling: any subtle animations on this page must respect `prefers-reduced-motion: reduce` — this is the most likely page on the site to be read by someone who needs that

---

## 7. Statutes and facts that need Mike's confirmation

Flag each item visually in the build until Mike signs off.

- Missouri wrongful death statute of limitations — 3 years under § 537.100. Confirm.
- Missouri wrongful death beneficiary hierarchy — § 537.080. Confirm current statutory language and case-law interpretations of the hierarchy.
- Missouri wrongful death damages framework — § 537.090. Confirm.
- Kansas wrongful death statute of limitations — 2 years under K.S.A. 60-513(a)(5). Confirm.
- Kansas wrongful death heir-at-law framework — K.S.A. 60-1902. Confirm.
- Kansas wrongful death damages framework — K.S.A. 60-1904.
- Kansas non-economic damages cap in wrongful death — K.S.A. 60-1903. Confirm current cap amount and current status in light of *Hilburn v. Enerpipe* (2019) and any subsequent legislative or judicial developments.
- Survival action frameworks — confirm MO § 537.020 and KS K.S.A. 60-1801 frameworks for the deceased's pre-death claims and how they interact with the wrongful death case.
- Tolling provisions for minor heirs in both states.
- Bar-advertising compliance review on the entire page, with particular attention to Section 6 (trust signal) and Section 7 (when to talk to a lawyer).

---

## 8. What changes for related pages

This page is itself a result-category overlay — the cause of death sits in another `/just-happened/*` page. The relationship between this page and the underlying-cause pages should be:

- **Wrongful death page** explains the wrongful death framework — who can bring a case, the damages, the timing, the rules in MO and KS.
- **Underlying-cause page** (`/just-happened/car-accident/`, `/just-happened/medical-malpractice/`, etc.) explains the specific scenario — what to do, what evidence matters, how the case is investigated, what's distinctive about that fact pattern.
- **Both pages cross-link to each other.** A reader who lands on the wrongful death page after a fatal car crash should be guided to the car-accident page for the specific scenario. A reader who lands on the car-accident page and indicates a death occurred should be surfaced the wrongful death page.

Implementation note: the concierge classifier on the homepage should be capable of routing to a *combination* — for a fatal truck case, the reader should land on the truck-accident page with a clearly surfaced cross-link to the wrongful death framework, or vice versa. This is a homepage/concierge spec question, flagged here for coordination.

---

*End of page spec.*
