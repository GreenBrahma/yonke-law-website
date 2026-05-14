# Yonke Law — `/just-happened/medication-error/` Page Spec

**Workspace:** Yonke Law Website
**Template type:** Tier 2 variant of the `/just-happened/*` pattern. Parent is `just-happened-medical-malpractice.md`. Inherits structure unchanged; calibrated for the five categories of medication error, the multi-defendant landscape these cases typically involve (prescribing physician, hospital, pharmacy, nursing home, sometimes manufacturer — often more than one at once), the unusually recoverable physical evidence that medication cases produce, and the family-member-of-elderly-patient audience that dominates this page more than other Wave 2 pages.
**Reference docs:** `yonke-homepage-spec.md`, `just-happened-medical-malpractice.md` (parent), `just-happened-nursing-home-abuse.md` (adjacent — Tier 1; elderly medication cases overlap heavily), `just-happened-hospital-negligence.md` (adjacent — Wave 2), `just-happened-surgical-error.md` (adjacent — Wave 2), `just-happened-diagnostic-error.md` (adjacent — Wave 2), `just-happened-_template.md`, `Yonke Law — The Standard` (Brand Doctrine & Operating System).
**Pronunciation standard:** Yonke (YONK-ee) Law.
**Sensitivity:** Moderate. Mike's review required before any other reviewer.

---

## 1. Page purpose & intent

This page serves a visitor whose situation falls into one of several patterns. The page must work for all of them:

1. **A patient or recently discharged patient** who realized something went wrong with the medication they were given — wrong drug at the pharmacy, wrong dose in the hospital, dangerous interaction the prescriber missed, side effects far beyond what was disclosed.
2. **A family member of an elderly patient** in a nursing home, assisted living facility, or at home with home health support, who has noticed sudden cognitive or physical decline that traces to a medication change, a missed dose pattern, or a drug interaction. This is the largest single audience for the page in practice.
3. **A parent or guardian** of a pediatric patient who received the wrong dose, the wrong drug, or had a medication adverse event in a clinical or hospital setting. Pediatric medication errors are disproportionately dose-related and consequences are amplified.
4. **A family member of someone who died** from a medication-related adverse event — hospital, nursing home, or community setting.

The page leads with calm acknowledgment that addresses all four readers, threads in the legal framework where medication-error cases are genuinely different from other medical malpractice cases (broader defendant pool, more recoverable physical evidence, distinct institutional defenses), and surfaces the practical evidence-preservation steps that medication cases uniquely depend on.

**Critical constraint:** This is informational content, not legal advice. The page must never claim to provide legal advice or create an attorney-client relationship. Standard disclaimers in footer apply.

---

## 2. URL, meta, and SEO/AEO foundation

- **Canonical URL:** `https://yonke.law/just-happened/medication-error/`
- **Page title (browser tab):** `What to do after a medication error in Missouri or Kansas — Yonke Law`
- **Meta description (155 chars target):** `Wrong medication, wrong dose, dangerous interaction? Here's what to know, what to preserve, and how Missouri and Kansas rules differ.`
- **Open Graph image:** Reuse Yonke Law brand card (Obsidian Graphite, name + tagline). No imagery suggesting injury or a medical setting.
- **Schema markup (on-page JSON-LD):**
  - `Article` — author Mike Yonke, publisher Yonke Law L.L.C., dateModified set at build
  - `FAQPage` — wrapping the FAQ section
  - `HowTo` — wrapping the procedural section
  - `LegalService` — firm-level info (reused from homepage)
- **Crawler permissions:** `robots.txt` and meta robots permit `GPTBot`, `ClaudeBot`, `PerplexityBot`, `Google-Extended`, `anthropic-ai`. This page is intended to be cited by LLMs.

---

## 3. Section-by-section spec

The page follows the standard 11-section pattern.

### Section 1 — Hero

**Layout:** Obsidian Graphite background. Centered, max-width 900px. Moderate-tier vertical breathing room.

**Content:**

```
Eyebrow (small caps, Steel Silver):  JUST HAPPENED

Headline (display serif, large):
The medication was wrong — or wrong for you. Take a breath.

Subhead (body, lighter):
Whether it was a wrong fill at the pharmacy, a hospital dose
mistake, a dangerous interaction nobody caught, or a parent
declining in a nursing home after a medication change — this is
the clearest path forward. There is no clock on this page. The
institution's voice is loud right now. Ours is not.

Primary CTA (Muted Gold or Chrome Highlight):
Read what to know →   (anchor to #what-to-know)

Secondary link (text only, Steel Silver):
Or talk to someone, when you're ready →   (anchor to #consultation)
```

**Optional background treatment:** Restrained low-light photographic image. No imagery of pill bottles, pharmacy counters, hospital settings, or medical staff. If no existing asset fits, leave plain.

---

### Section 2 — What to know

**Layout:** Charcoal Slate background. Max-width 800px. H2 + H3 hierarchy for schema markup.

**Anchor ID:** `#what-to-know`

**Implementation note:** Wrap this section in `HowTo` schema. Each numbered item gets an `HowToStep` schema entry. Moderate-tier framing — the steps are not 24-hour bound. Medication-error cases reward fast physical-evidence preservation, but the timeline for other steps can extend weeks.

**Content:**

```markdown
## What to know in the days and weeks ahead

Medication-error cases turn on physical evidence to a degree that
other medical malpractice cases often do not. The actual bottle,
vial, label, infusion bag, or syringe — and the records showing
what was ordered, what was dispensed, and what was given — are
recoverable in ways that many other medical cases' evidence is
not. The steps below center on preserving that record fast.

### Before anything else

1. **Address the immediate medical situation.** If a medication
   error is ongoing — wrong drug currently being administered, a
   prescription that hasn't been corrected, side effects requiring
   urgent attention — stop the medication if it's safe to do so,
   call the prescribing clinician or pharmacy immediately, and
   get to an emergency department if symptoms warrant. Legal
   considerations come second to medical safety.

2. **Do not throw out the medication, the bottle, the vial, the
   blister pack, or the label.** This is the single most
   important physical-evidence step in a medication-error case.
   The actual drug, the actual container, and the actual label
   are recoverable evidence. If the medication is still in
   pharmacy packaging, keep it intact. If it's in a hospital-
   prepared syringe or IV bag, ask hospital staff not to dispose
   of it — and if they already have, note what was disposed and
   when.

3. **Photograph everything.** The bottle from every angle including
   the label. The pills themselves — color, shape, imprint code.
   The pharmacy receipt. The discharge instructions. The
   prescription itself if you have it. Any paperwork the
   pharmacy or hospital gave you. Photograph the medication list
   shown in the patient portal or hospital chart if you can
   access it.

### In the days that follow

4. **Request the complete medication record from every involved
   provider.** This includes:

    - The prescribing clinician's order — what was prescribed,
      to whom, in what dose, with what instructions
    - The pharmacy dispensing record — what the pharmacy filled,
      when, and with what label
    - For hospital errors, the Medication Administration Record
      (MAR) — the institutional record of what was given to the
      patient, when, by whom
    - For nursing home or long-term care errors, the medication
      log and any electronic MAR (eMAR) records
    - For any setting where barcode scanning is used, the scan
      audit trail

   Request in writing. Keep copies of your requests. Medication
   records have audit trails that institutional staff cannot
   alter after the fact, which is precisely why preserving them
   in their original form matters.

5. **Build the medication timeline.** Write down every medication
   the patient was taking in the relevant period — prescribed,
   over-the-counter, supplements, anything. Dates of each change.
   Who prescribed each medication. What pharmacy filled it. Any
   medication reconciliation event (hospital admission, hospital
   transfer, hospital discharge, nursing home admission). The
   medication timeline is what transforms a vague sense that
   something went wrong into a structured case.

6. **Preserve every communication from the pharmacy, the
   prescriber, the hospital, or the long-term care facility.**
   Patient portal messages. Pharmacy automated calls and texts.
   Discharge instructions. Patient education materials. Hospital
   patient-relations correspondence. Take screenshots and save
   copies of digital communications; portals sometimes archive or
   remove messages on rolling windows.

### Before signing anything

7. **Do not sign release forms, settlement offers, or "incident
   review" paperwork from any provider without reading them
   carefully.** Some healthcare systems and pharmacy chains
   approach patients after a serious medication-related event
   with paperwork that, in the moment, can look routine — an
   apology letter, an acknowledgment form, a "goodwill" payment.
   Take any of these to a lawyer before signing.

### When you're ready

8. **Talk to someone before you go further down any path that
   forecloses options.** Switching providers permanently,
   accepting a hospital's or pharmacy's settlement offer, filing a
   complaint with the state board of pharmacy or medical board,
   signing any document presented by risk management — these can
   all affect what options remain. A free consultation costs you
   nothing and does not commit you to anything.
```

End of section CTA (text link, inline):

> *Want a printable version to keep, share, or hand to a family member?* [*Download the Medication Error Reference →*](/resources/checklists/medication-error-reference/)

---

### Section 3 — What hospitals, pharmacies, and providers typically do

**Layout:** Obsidian Graphite. Max-width 800px. Informational, not adversarial.

**Content:**

```markdown
## What hospitals, pharmacies, and providers typically do

Medication-error cases involve a wider set of institutional actors
than most medical malpractice cases — and each operates on a
different playbook. The prescribing clinician, the pharmacy, the
hospital, the nursing home, and in some cases the manufacturer
all have their own claims processes, their own defense framings,
and their own incentives.

In the days and weeks after a recognized medication error, you
should expect:

- **A reframing as "individual error within a working system."**
  The most common institutional defense framing in medication-error
  cases is that the institution has systems in place — barcode
  scanning, pharmacy double-checks, electronic prescribing,
  reconciliation protocols — and that the failure was an
  individual deviation within a system that generally works. The
  framing has surface plausibility. It also misses the legal
  point: those systems exist because the institution knows
  medication errors cause harm, and bypassing or failing to use
  them is itself the failure.

- **A focus on patient-disclosed history.** Expect questions about
  whether the patient or family disclosed every medication being
  taken, including over-the-counter drugs and supplements, at
  every relevant point in the timeline. The framing positions any
  gap in disclosure as the patient's responsibility, even where
  the institution's own reconciliation process should have caught
  the omission.

- **A focus on adverse effect disclosure.** Drug labels and
  pharmacy patient information sheets disclose long lists of
  possible side effects. Expect the defense to point to the
  paperwork as evidence the patient was warned. As with surgical
  consent forms, this argument confuses *disclosure of risk* with
  *delivery of competent care* — and the two are not the same.

- **A causation argument that the underlying condition caused the
  harm.** Patients who experience medication errors often have
  serious underlying medical conditions that the medication was
  prescribed to treat. The defense will argue that the patient's
  decline traces to the underlying disease, not the medication
  error.

- **A request to sign forms.** Releases, acknowledgments,
  settlement offers, communications consent. None are routine
  after a serious adverse event. All deserve careful reading.

- **Slow record release.** Hospital MAR records, pharmacy
  dispensing logs, barcode-scanning audit trails, and eMAR data
  may take weeks to produce — and may be released in formats that
  are difficult to interpret without expert review. Hospitals,
  pharmacy chains, and long-term care facilities are required to
  produce them, but sustained, written requests are often
  needed.

None of this is necessarily malicious. But it's a process that's
been optimized for institutional outcomes, not yours.
```

---

### Section 4 — FAQ

**Layout:** Charcoal Slate. Each Q is collapsible accordion (or always-expanded — accessibility-friendly either way).

**Implementation:** Wrap in `FAQPage` schema.

**Content:**

```markdown
## Common questions after a medication error

### How long do I have to file a medication error claim in Missouri?

In Missouri, the statute of limitations for medical malpractice,
which includes medication errors against physicians, hospitals,
and most healthcare providers, is **two years** from the date of
the alleged act of malpractice, under RSMo § 516.105 *(MIKE:
confirm)*. Missouri's discovery rule can extend the deadline in
limited circumstances. Missouri also has a ten-year statute of
repose that caps the outside limit regardless of discovery.

For claims against a pharmacy specifically, the applicable SOL
may differ — Missouri pharmacy negligence claims may fall under
the general personal-injury SOL (five years under § 516.120) or
the medical malpractice SOL (two years under § 516.105) depending
on the specific theory and the nature of the pharmacy's conduct.
*(MIKE: confirm current case law on the medical-malpractice/general-
negligence boundary for pharmacy claims.)*

### How long do I have to file in Kansas?

In Kansas, the statute of limitations for medical malpractice is
**two years from the date the injury becomes reasonably
ascertainable**, under K.S.A. 60-513(a)(7) and (c) *(MIKE:
confirm)*. Pharmacy negligence claims in Kansas follow a similar
two-year SOL under K.S.A. 60-513(a)(4). A four-year statute of
repose under K.S.A. 60-513(c) caps the outside limit.

### What are the kinds of medication errors that can be cases?

Medication errors generally fall into five categories. Any of
them can support a case if they caused harm:

- **Prescribing errors** — the prescriber ordered the wrong drug,
  the wrong dose, the wrong route, the wrong duration, a drug
  contraindicated for the patient's condition, or a drug that
  dangerously interacts with the patient's other medications.
- **Pharmacy or dispensing errors** — the pharmacy filled the
  wrong drug, the wrong strength, gave the wrong instructions on
  the label, or dispensed to the wrong patient.
- **Administration errors** — in a hospital, nursing home, or
  clinical setting, the wrong drug was given, the wrong dose, the
  wrong route (IV instead of oral, for example), the wrong rate
  of infusion, or to the wrong patient.
- **Monitoring failures** — for medications that require ongoing
  monitoring (anticoagulants, lithium, immunosuppressants, many
  others), the required drug levels, lab values, or symptom
  checks were not performed, or were performed and not acted on.
- **Reconciliation failures** — at admission, transfer, or
  discharge, the patient's medication list was lost, duplicated,
  altered, or not communicated to the next provider.

### Can I sue the pharmacy if they filled the wrong prescription?

Yes. Retail pharmacy errors — wrong drug, wrong dose, wrong
patient — are actionable claims against the pharmacy. Depending
on the specifics, individual pharmacists may also be named.
Pharmacy chains' corporate policies, staffing levels, quota
pressures, and double-check protocols are typically discoverable
in litigation, and they are often central to how the case
develops.

### What if the medication error happened in a nursing home?

Nursing-home medication errors are one of the most common patterns
in this category. Polypharmacy — patients on many medications at
once — combined with high staff-to-patient ratios, frequent staff
turnover, and complex monitoring requirements creates the
conditions where errors compound. Nursing homes are subject to
both medical malpractice analysis and to the additional regulatory
framework that governs long-term care facilities. The
nursing-home-specific framework is covered in detail on the
[nursing home abuse guide](/just-happened/nursing-home-abuse/),
which is built to be read alongside this page when both apply.

### What about pediatric medication errors?

Pediatric medication errors are disproportionately dosing errors,
because most pediatric dosing is calculated based on the child's
weight. A misplaced decimal or a confused unit conversion can
deliver ten times the intended dose. Pediatric cases also raise
distinct statute-of-limitations questions because minor tolling
generally extends the SOL until the child reaches majority — but
the interaction with the statute of repose is complex and
state-specific. *(MIKE: confirm — both Missouri's medical-
malpractice tolling rules under § 516.105 and the Kansas
60-515/60-513(c) interaction are relevant here.)*

### Multiple doctors prescribed conflicting medications. Whose fault is it?

Any of them — and the case can name multiple defendants. When
patients see multiple specialists who do not coordinate medication
choices, the responsibility for catching dangerous interactions
falls on each prescriber, on the pharmacy filling the
prescriptions, and on any healthcare system that purports to
maintain a unified patient medication record. The case develops
by reconstructing who knew what, who was responsible for catching
the interaction, and which failure caused the harm.

### The hospital says it was a "near miss" that didn't actually harm me.

A near miss — where the error was caught before causing harm —
typically does not support a damages claim, because there is no
injury. But "no harm" is not always what it appears. Some
medication-related injuries are subtle or delayed, and a hospital's
assessment that no harm occurred deserves independent medical
review. If the medication actually was given, even briefly, the
analysis is different from a true near miss where the error was
caught before administration.

### Can I bring a case if my family member died after a medication error?

Yes. Wrongful-death claims after a medication-error event have a
different statute of limitations and a different set of rules
about who can bring them. In Missouri, the wrongful-death window
is three years from the death. In Kansas, two years from the
death. The persons entitled to bring a claim are defined by
statute. The framework is covered in detail on the
[wrongful death guide](/just-happened/wrongful-death/).

### What does Yonke Law do in medication error cases?

We handle medication-error cases the same way we handle any
serious medical malpractice case: full review of the medication
timeline across all involved providers and facilities, retention
of qualified clinical pharmacy and medical experts, preservation
of physical evidence (the bottle, the vial, the label, the MAR
records), preparation of the affidavit of merit where Missouri law
requires it, and litigation when the institution's response does
not match what the case warrants. Because medication-error cases
typically involve more than one defendant, the coordination among
prescriber, pharmacy, hospital, and long-term care facility claims
is part of what the firm handles. *(MIKE: confirm or replace.)*
```

---

### Section 5 — Missouri vs. Kansas: the rules that matter

**Layout:** Obsidian Graphite. Two-column on desktop, stacked on mobile.

**Headline:** `How the rules differ depending on where it happened`

**Content:**

```markdown
## Missouri

- **Statute of limitations:** Two years for medical malpractice
  (RSMo § 516.105) *(MIKE: confirm)*; potentially five years for
  pharmacy negligence under general personal-injury SOL
  (§ 516.120) *(MIKE: confirm boundary)*
- **Discovery rule:** Available in limited circumstances for
  medication errors where harm was not reasonably knowable
  *(MIKE: confirm scope)*
- **Statute of repose:** Ten-year outside limit for medical
  malpractice *(MIKE: confirm § 516.105 current text)*
- **Affidavit of merit:** Required for medical malpractice claims
  within 90 days of complaint (RSMo § 538.225) *(MIKE: confirm
  whether the requirement applies to pharmacy-only claims)*
- **Damages cap on non-economic damages:** Missouri caps
  non-economic damages in medical malpractice cases *(MIKE:
  confirm § 538.210 current cap amount and applicability to
  pharmacy claims)*
- **Comparative fault:** Pure comparative for the underlying
  claim *(MIKE: confirm)*
- **Minor tolling:** RSMo § 516.170 generally tolls SOL until age
  18 but interacts with § 516.105 for med-mal-specific cases
  *(MIKE: confirm)*

## Kansas

- **Statute of limitations:** Two years from when injury becomes
  reasonably ascertainable for medical malpractice
  (K.S.A. 60-513(a)(7) and (c)) *(MIKE: confirm)*; two years for
  pharmacy negligence under personal-injury SOL (K.S.A.
  60-513(a)(4)) *(MIKE: confirm)*
- **Statute of repose:** Four-year outside limit under K.S.A.
  60-513(c) *(MIKE: confirm)*
- **Expert requirement:** Expert testimony required for medical
  malpractice claims (K.S.A. 60-3412 and related) *(MIKE: confirm
  application to pharmacy negligence)*
- **Damages cap on non-economic damages:** **Status uncertain
  after *Hilburn v. Enerpipe* (2019). MIKE: critical to confirm
  current status for medical malpractice specifically.**
- **Health Care Stabilization Fund:** Kansas physicians and most
  healthcare providers participate in the HCSF as secondary
  coverage; pharmacies and pharmacists may participate
  separately *(MIKE: confirm pharmacy inclusion)*
- **Comparative fault:** Modified — barred if 50% or more at fault
  (K.S.A. 60-258a) *(MIKE: confirm)*
- **Minor tolling vs. statute of repose:** K.S.A. 60-515 minor
  tolling vs. 60-513(c) repose *(MIKE: critical recurring
  confirmation)*
```

Below the columns, one inline link:

> *Not sure how the medical-malpractice and general-negligence boundaries apply when the error involved a pharmacy, or how minor tolling interacts with the statute of repose?* [*Send us the basics and we'll tell you →*](#consultation)

---

### Section 6 — Inline trust signal

**Layout:** Charcoal Slate panel. Restrained.

**Sensitivity-aware behavior:** Moderate sensitivity. Three options in order of preference:

1. Mike-input quote from a representative case with explicit written consent and bar-compliance review
2. Anonymous outcome reference with no quote and no patient detail
3. No testimonial — replaced with a signed statement from Mike on the firm's approach to medication-error cases

**Recommendation for this page: Option 3.** Medication-error cases frequently involve elderly patients, pediatric patients, or deceased patients — circumstances where testimonial framing is uncomfortable regardless of consent. A signed Mike statement on the firm's investigative approach (medication timeline reconstruction, multi-defendant coordination, clinical pharmacy expert review, physical evidence preservation) sits more naturally with the page's tone.

**Placeholder content (always Mike-input):**

```
[MIKE INPUT REQUIRED — recommend option 3.]

[Signed statement from Mike on the firm's approach to medication-
error cases. Should describe the investigative process —
reconstruction of the medication timeline across all involved
providers, preservation of physical evidence including drug
containers and institutional records, retention of clinical
pharmacy and medical experts, coordination of claims across
multiple defendants (prescriber, pharmacy, hospital, long-term
care facility as applicable), affidavit of merit preparation in
Missouri cases — without making outcome claims. Length: 100–150
words.]
```

---

### Section 7 — When it's time to talk to a lawyer

**Layout:** Obsidian Graphite. Centered.

**Content:**

```markdown
## When it's worth having someone look at your situation

Not every medication problem is a case. Side effects within
disclosed risk profiles, an allergic reaction that was promptly
treated, a near-miss caught before harm — these may not justify
the conversation. But the moment any of the following are true,
a free consultation is worth your time:

- You or someone you love was given or dispensed the wrong
  medication, the wrong dose, or the wrong patient's prescription
- A medication caused serious harm — bleeding, organ damage,
  cognitive change, allergic reaction requiring hospitalization,
  death
- An elderly family member in a nursing home or assisted living
  facility experienced sudden decline that traces to a
  medication change
- A child received a dose that was wrong for their weight, age,
  or condition
- A medication interaction occurred that one or more providers
  should have caught
- A medication was not monitored — drug levels, lab values, or
  symptom checks were not performed when they should have been
- A medication reconciliation event (hospital admission, transfer,
  discharge, nursing-home admission) lost, duplicated, or
  altered the medication list
- A pharmacy has acknowledged a fill error or contacted you about
  a possible error
- A hospital has approached you with an apology paired with
  paperwork to sign
- You simply want to understand whether what happened qualifies
  as a medication error case

A consultation is exactly what it sounds like — a conversation.
No fee. No obligation. If we do not think a case can be brought,
or if we think a different path is right for you, we will tell
you.
```

Below this, two CTAs side by side:

- Primary: `Talk to us, when you're ready` → anchor `#consultation`
- Secondary: `Or send us the basics first` → links to a brief intake form

---

### Section 8 — Two paths forward

**Layout:** Charcoal Slate. Two-column on desktop. Each side is a card.

**Headline:** `When you're ready`

**Card 1 — Printable reference:**

```
THE MEDICATION ERROR REFERENCE
A one-page printable summary of what to know, what to preserve
physically (the bottle, the vial, the label), what records to
request, and how Missouri and Kansas rules differ. Designed to
be saved, shared with a family member, or read in your own time.

[Download the PDF →]
```

**Card 2 — Digital intake:**

```
OR — WHEN YOU'RE READY, WALK THROUGH WHAT WE'D WANT TO KNOW
The questions we'd ask in a first conversation, organized so you
can answer at your own pace. Roughly 10–15 minutes. There's a
place to indicate whether the medication error occurred in a
hospital, pharmacy, nursing home, or community setting, and
whether you're the patient or filling out for a family member.

Free, confidential, no obligation. Your answers are private and
encrypted. You can save partway through and finish later.

[Start the digital intake →]
```

**Implementation note:** The digital intake should branch on (a) setting (hospital / pharmacy / nursing home / community / multiple), (b) reader type (patient / family member of living patient / family member of deceased patient), and (c) whether physical evidence (the bottle, vial, label) has been preserved. The follow-up questions differ meaningfully for each. Branch logic spec lives with the intake spec. Note: Moderate-tier intake should also support partial-save and resume.

---

### Section 9 — Related pages

**Layout:** Obsidian Graphite. Horizontal row of cards (3 on desktop, stacked mobile).

**Headline:** `Related guidance`

**Cards:**

```
1. **Medical malpractice** — *The parent guide covering the
   broader medical negligence framework — the standard of care,
   expert requirements, and how malpractice cases differ from
   other personal injury cases.*
   → `/just-happened/medical-malpractice/`
2. **Nursing home abuse** — *If the medication error happened in
   a nursing home, assisted living facility, or to a long-term-
   care resident, the additional regulatory framework that
   governs long-term care applies alongside medical malpractice.*
   → `/just-happened/nursing-home-abuse/`
3. **Hospital negligence** — *If the medication error was part of
   a broader hospital system failure — falls, infections,
   monitoring gaps, transfer-of-care problems — this covers that
   framework.* → `/just-happened/hospital-negligence/`
```

---

### Section 10 — Final CTA / Talk to Us

Same as homepage Section 10. Reused as a component.

- Anchor ID: `#consultation`
- Phone: `816-221-6400`
- Address + map
- Form routes to Mike's MS365
- Form heading: "Reach out when you're ready. There is no obligation in a first conversation." (Moderate-tier modification.)

---

### Section 11 — Footer

Same as homepage. Reused as the shared `<Footer />` component. Includes full disclaimer block per homepage spec Section 11.

---

## 4. Voice & tone enforcement checklist

Run the standard checklist (template Section D) plus the Moderate-sensitivity additions:

- [ ] Does the page use the patient's adverse outcome as a marketing lever? (Fail — rewrite.)
- [ ] Does the page pathologize the patient's or family's response — frame trust in providers, slow recognition of the problem, or hesitation to act as weakness? (Fail — rewrite.)
- [ ] Does the page acknowledge that not every adverse drug event is a case? (Pass.)

Three medication-error-specific checks:

- [ ] Does the page name specific pharmacy chains, hospital systems, or pharmaceutical manufacturers in a way that could be read as targeting any specific institution? (Fail — rewrite.) The page should describe institutional categories (retail pharmacy, hospital, nursing home, manufacturer) without naming specific entities.

- [ ] Does the page suggest the reader can determine on their own whether what happened was a medication error or a within-known-risk side effect? (Fail — rewrite.) The page should consistently reinforce that this is what expert review is for, not a determination the reader is expected to make.

- [ ] Does the page treat physical evidence preservation as a recommendation when it should be treated as urgent? (Fail — rewrite.) Drug containers, labels, and pharmacy paperwork get thrown out by default — Section 2 step 2 needs to land as the single most important physical-evidence step, not as a passing suggestion.

---

## 5. Image asset references

| Section | Suggested asset |
|---|---|
| Hero background (optional) | Restrained, dark photographic image. Drive folder `1Sea3j5hCkU8xQLcVNqYjYMj8bjPj57XI` — pick from existing if available. No imagery of pill bottles, pharmacies, hospital settings, IV bags, or syringes. If no existing asset fits, leave plain. |
| Section 6 trust signal panel | None — Moderate-tier default, option 3 recommended. |
| Section 9 Related pages cards | Use existing card assets from the cross-link page types. |

**Forbidden imagery (universal list applies):** Crashed cars, ambulances, gavels, scales of justice, lawyer-with-arms-crossed, generic KC skyline.

**Additional forbidden for Moderate-tier and this page specifically:**

- Pill bottles, blister packs, individual pills, capsules
- Pharmacy counters, pharmacy interiors, pharmacist stock imagery
- Hospital settings, beds, IV poles, infusion bags, syringes
- Medical staff in scrubs or white coats
- Patients in hospital settings
- Pharmaceutical manufacturer branding of any kind
- Stock photos of "concerned daughter at parent's bedside" or "worried family member"
- Imagery suggesting Yonke Law has a particular position against any specific pharmacy chain or pharmaceutical manufacturer

---

## 6. Accessibility minimums

Standard checklist from template Section G plus Moderate-tier addition:

- Reduced-motion handling: any subtle animations respect `prefers-reduced-motion: reduce`. Pages likely to be read by elderly patients themselves or by family members in stressful contexts; motion can intensify physical and emotional discomfort.

---

## 7. Statutes and facts that need Mike's confirmation

Flag each item visually in the build until Mike signs off.

- Missouri medical malpractice SOL — RSMo § 516.105, two years. Confirm current text including ten-year statute of repose.
- Missouri general personal-injury SOL — RSMo § 516.120, five years. Confirm applicability to pharmacy negligence claims and the medical-malpractice-vs.-general-negligence boundary.
- Missouri discovery rule scope in medication-error cases — confirm.
- Missouri affidavit of merit applicability to pharmacy-only claims — confirm whether RSMo § 538.225 reaches claims that are pharmacy negligence rather than medical malpractice.
- Missouri non-economic damages cap — RSMo § 538.210. Confirm current cap amount and applicability to pharmacy claims.
- Missouri minor tolling interaction with med-mal SOL — RSMo § 516.170 vs. § 516.105. Confirm.
- Kansas medical malpractice SOL — K.S.A. 60-513(a)(7) and (c). Confirm.
- Kansas personal-injury SOL for pharmacy negligence — K.S.A. 60-513(a)(4). Confirm.
- Kansas statute of repose — K.S.A. 60-513(c), four years. Confirm.
- Kansas expert requirement applicability to pharmacy negligence — K.S.A. 60-3412. Confirm.
- Kansas non-economic damages cap status post-*Hilburn v. Enerpipe* (2019). **Critical recurring confirmation.**
- Kansas Health Care Stabilization Fund inclusion of pharmacies and pharmacists — confirm.
- Kansas minor tolling vs. statute of repose interaction — K.S.A. 60-515 vs. 60-513(c). **Critical recurring confirmation.**
- Bar-advertising compliance review on the entire page, particularly Section 6 content and any factual claim about Yonke Law's medication-error experience.

---

## 8. Open items

- Verify the thirteen `(MIKE: confirm …)` flags above before publish. **The medical-malpractice/general-negligence boundary for pharmacy claims** is the most novel question on this page compared to the surgical-error and diagnostic-error pages, and warrants a clean Mike answer because it affects the applicable SOL, the affidavit-of-merit requirement, and the damages-cap analysis.
- Confirm hero image selection from the Drive folder, or commission a new restrained image. The forbidden imagery list for this page is broad — pharmacy imagery, hospital imagery, pill imagery, and pharmaceutical branding are all excluded — and existing assets are unlikely to fit.
- Confirm Section 6 trust signal selection — recommendation defaults to option 3 (signed Mike statement) for this page.
- Confirm whether the FAQ should include a question on adverse drug reaction reporting to FDA's MedWatch system. Recommendation: not on the page. MedWatch is voluntary and not legally significant in most cases; addressing it could confuse readers.
- Concierge classifier coordination: a medication-error case resulting in death, particularly in a nursing-home setting, should route across this page, nursing-home-abuse, and wrongful-death with appropriate cross-link surfacing. Three-way coordination is more complex than the two-way patterns on most other pages.
- Intake branching for Moderate-tier pages — partial-save, resume, reader-type branching, and setting-type branching now flagged across surgical-error, diagnostic-error, this page, and (likely) hospital-negligence. The Moderate-tier intake spec should consolidate.
- Confirm whether "Related reading" links should be live with placeholder routes for not-yet-built pages.
- Spanish-language parallel page question — defer per homepage spec.

---

*End of medication-error spec.*
