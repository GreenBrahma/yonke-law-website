# Yonke Law — `/just-happened/diagnostic-error/` Page Spec

**Workspace:** Yonke Law Website
**Template type:** Tier 2 variant of the `/just-happened/*` pattern. Parent is `just-happened-medical-malpractice.md`. Inherits structure unchanged; calibrated for the diagnostic-error legal posture — which differs fundamentally from surgical error because it concerns something that did not happen (a diagnosis not made or made too late) rather than a discrete event. Discovery rule complexity, the causation challenge, and the MO/KS divergence on the loss-of-chance doctrine are the central differentiators.
**Reference docs:** `yonke-homepage-spec.md`, `just-happened-medical-malpractice.md` (parent), `just-happened-surgical-error.md` (adjacent — Wave 2), `just-happened-medication-error.md` (adjacent — Wave 2), `just-happened-hospital-negligence.md` (adjacent — Wave 2), `just-happened-wrongful-death.md` (result overlay — relevant frequently for this page), `just-happened-_template.md`, `Yonke Law — The Standard` (Brand Doctrine & Operating System).
**Pronunciation standard:** Yonke (YONK-ee) Law.
**Sensitivity:** Moderate. Mike's review required before any other reviewer.

---

## 1. Page purpose & intent

This page serves a visitor whose situation falls into one of two patterns, and the page must work for both without compromising either:

1. **A patient who recently received a serious diagnosis** — cancer, heart disease, stroke, sepsis, autoimmune disorder, neurological condition — and has come to suspect (or been told by another provider) that prior medical encounters should have led to an earlier or correct diagnosis. The patient may now be facing more aggressive treatment, worse prognosis, or permanent disability than they would have faced with earlier diagnosis.

2. **A family member of someone who died** from a condition that was missed, delayed, or misdiagnosed. The diagnostic-error category produces more fatal outcomes than surgical error does, because missed cancers, missed heart attacks, missed strokes, and missed sepsis cases frequently progress to death before correct diagnosis. The wrongful-death framework applies in parallel.

Both readers face the same legal posture: their case is about something a clinician did not do. That posture reshapes the evidentiary picture, the discovery rule, and the causation analysis in ways that diverge from a typical medical malpractice case involving a discrete event.

The page leads with calm acknowledgment that addresses both readers, threads in the legal framework where the diagnostic-error posture is genuinely different from a procedure-based case, and surfaces the MO/KS divergence on the loss-of-chance doctrine prominently because it is often case-determinative.

**Critical constraint:** This is informational content, not legal advice. The page must never claim to provide legal advice or create an attorney-client relationship. Standard disclaimers in footer apply.

---

## 2. URL, meta, and SEO/AEO foundation

- **Canonical URL:** `https://yonke.law/just-happened/diagnostic-error/`
- **Page title (browser tab):** `What to do after a missed or delayed diagnosis in Missouri or Kansas — Yonke Law`
- **Meta description (155 chars target):** `Diagnosis missed, delayed, or wrong? Here's what to know, what to preserve, and how Missouri and Kansas medical malpractice rules differ.`
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
The diagnosis came late — or never. Take a breath.

Subhead (body, lighter):
Whether you've just been told something earlier providers should
have caught, or you're reading this for someone you've lost — this
is the clearest path forward. There is no clock on this page.
The hospital's voice is loud right now. Ours is not.

Primary CTA (Muted Gold or Chrome Highlight):
Read what to know →   (anchor to #what-to-know)

Secondary link (text only, Steel Silver):
Or talk to someone, when you're ready →   (anchor to #consultation)
```

**Optional background treatment:** Restrained low-light photographic image. No imagery of medical settings, imaging rooms, or healthcare environments. If no existing asset fits, leave plain.

---

### Section 2 — What to know

**Layout:** Charcoal Slate background. Max-width 800px. H2 + H3 hierarchy for schema markup.

**Anchor ID:** `#what-to-know`

**Implementation note:** Wrap this section in `HowTo` schema. Each numbered item gets an `HowToStep` schema entry. Moderate-tier framing — the steps are not 24-hour bound.

**Content:**

```markdown
## What to know in the days and weeks ahead

Diagnostic error cases don't run on a single clock. The harm
sometimes traces back months or years before it was identified.
The steps below apply whether the missed or delayed diagnosis was
confirmed yesterday or you're piecing the timeline together now.
The order matters less than that the work gets done.

### Before anything else

1. **Continue or begin medical care for the diagnosed condition.**
   Whatever legal questions exist about the prior diagnostic
   workup, your current medical situation comes first. If the
   condition is being treated by the same system that may have
   missed it, you have the right to seek treatment elsewhere, get
   a specialist consultation at a different facility, or transfer
   your care entirely. Your right to do so is not conditional on
   telling the original providers why.

2. **Request a complete copy of your medical records — going back
   to before the missed diagnosis.** Under HIPAA, you have the
   right to a complete copy of your own medical records. For a
   diagnostic error case, "complete" includes records from the
   earlier visits where the diagnosis should have been considered:
   all clinic notes, all imaging (image files, not just radiology
   reports), all lab results, all pathology slides if applicable,
   all referral notes, all patient portal messages, and any
   "incident review" documentation the facility is willing to
   release. Request in writing and keep a copy of the request
   itself.

3. **Get the original imaging and pathology, not just the reports.**
   For cancer, neurological, and cardiovascular diagnostic-error
   cases, the actual images and slides — not the reports
   summarizing them — are often the central evidence. A radiologist
   reviewing the same images later may identify findings that the
   original reading missed. Request image files on CD, DVD, or
   secure transfer. Pathology slides can sometimes be released for
   independent review. Hospital retention policies for imaging
   archives and pathology can affect what is recoverable later.

### In the days that follow

4. **Build the timeline.** This is the most important investigative
   step in a diagnostic error case. Write down every medical visit
   relevant to the symptoms — primary care, specialists, urgent
   care, ER visits. Dates. Who you saw. What you reported. What was
   done. What you were told. What followed. The timeline is what
   transforms a vague sense that something went wrong into a
   structured case.

5. **Document the symptoms you reported, and when.** Diagnostic
   error cases frequently turn on what the patient told the
   clinician about their symptoms — and on what made it into the
   medical record. Sometimes the recorded history is incomplete or
   incorrect. A written record of what you actually said, when, and
   to whom is powerful evidence even if it contradicts the chart.

6. **Preserve every communication from any provider involved.**
   Patient portal messages. Emails. Voicemails. After-visit
   summaries. Texts where applicable. Patient portals sometimes
   archive or remove messages on rolling windows; download them
   while you can.

### Before signing anything

7. **Do not sign release forms, settlement offers, or "incident
   review" paperwork from any hospital or provider without reading
   them carefully.** Some healthcare systems approach patients
   after a serious adverse outcome with paperwork that, in the
   moment, can look routine — an apology letter requiring a
   signature, an acknowledgment form, a settlement offer paired
   with a goodwill gesture. Take any of these to a lawyer before
   signing.

### When you're ready

8. **Talk to someone before you go further down any path that
   forecloses options.** Switching providers permanently,
   accepting a hospital's settlement offer, filing a complaint
   with the state medical board, signing any document presented
   by hospital risk management — these can all affect what options
   remain. A free consultation costs you nothing and does not
   commit you to anything.

9. **Understand that the statute of limitations is more complicated
   here than in most other cases.** Diagnostic error cases turn on
   when the injury was — or reasonably should have been —
   discovered, not always when the missed diagnosis occurred.
   Missouri and Kansas handle this differently, and both states
   have a statute of repose that ultimately caps how far back a
   claim can reach. (See Section 5 below.) Talking to someone
   sooner rather than later, even if you are not ready to act,
   gives you the time to evaluate options.
```

End of section CTA (text link, inline):

> *Want a printable version to keep, share, or hand to a family member?* [*Download the Diagnostic Error Reference →*](/resources/checklists/diagnostic-error-reference/)

---

### Section 3 — What hospitals and providers typically do

**Layout:** Obsidian Graphite. Max-width 800px. Informational, not adversarial.

**Content:**

```markdown
## What hospitals and providers typically do

Hospitals and provider groups have developed protocols for what
happens when a serious diagnostic-error outcome is identified
internally. The protocols are not malicious. But they are designed
to protect the institution as much as the patient.

In the days and weeks after a recognized diagnostic miss, you
should expect:

- **A reframing as "symptoms were atypical."** The most common
  defense framing in diagnostic error cases is that the patient's
  presentation did not match textbook descriptions of the missed
  condition. This framing has real medical content — atypical
  presentations do occur, particularly in women, in younger
  patients, and in patients with multiple comorbidities. It is
  also often used to obscure failures to consider conditions that
  should have been on the differential diagnosis given the
  symptoms reported.

- **A focus on patient follow-up rather than provider workup.**
  Expect questions about whether you returned for follow-up
  appointments, whether you took recommended medications, whether
  you reported new symptoms when they emerged. The implication is
  that any gap in diagnosis traces to the patient's own conduct,
  not to a clinician's failure to consider the right possibilities
  at the right time.

- **A causation argument that the outcome would have been the same
  anyway.** This is the most important defense argument in
  diagnostic error cases, and it is the central legal challenge.
  Even where the diagnosis was clearly missed, the defendant will
  argue that the patient's actual outcome would have been the
  same regardless. The legal response depends significantly on
  state law — Missouri and Kansas handle this question quite
  differently, as Section 5 explains.

- **A request to sign forms.** Releases, acknowledgments,
  settlement offers, communications consent. None are routine
  after a serious adverse outcome. All deserve careful reading.

- **Slow record release.** Complete records — particularly
  earlier-visit records from before the diagnosis was eventually
  made — sometimes take weeks to produce. Hospitals are required
  to provide them under HIPAA but often respond slowly.

None of this is necessarily malicious. But it's a process that's
been optimized for the institution's outcome, not yours. Knowing
how it operates helps you avoid the most expensive mistakes.
```

---

### Section 4 — FAQ

**Layout:** Charcoal Slate. Each Q is collapsible accordion (or always-expanded — accessibility-friendly either way).

**Implementation:** Wrap in `FAQPage` schema.

**Content:**

```markdown
## Common questions after a missed or delayed diagnosis

### How long do I have to file a diagnostic error claim in Missouri?

In Missouri, the statute of limitations for medical malpractice
is **two years** from the date of the alleged act of malpractice,
under RSMo § 516.105 *(MIKE: confirm current text)*. For
diagnostic error specifically, the two-year clock may not start
from the original missed-diagnosis encounter — Missouri's discovery
rule can extend the deadline where the harm was not reasonably
knowable until later. Missouri also has a **ten-year statute of
repose** that caps the outside limit regardless of discovery
*(MIKE: confirm current text)*.

### How long do I have to file in Kansas?

In Kansas, the statute of limitations for medical malpractice is
**two years from the date the injury becomes reasonably
ascertainable**, under K.S.A. 60-513(a)(7) and (c) *(MIKE:
confirm)*. Kansas's **four-year statute of repose** under
K.S.A. 60-513(c) ultimately caps how far back a claim can reach.

For both states, the interaction between the discovery rule and
the statute of repose is complex and case-specific. A diagnosis
missed long ago, discovered only recently, may or may not still
be within reach depending on the specific facts.

### How do I know if my diagnosis was actually missed?

You may not, on your own. The legal standard is whether a
reasonably competent provider in the same circumstances would
have considered, tested for, or diagnosed the condition based on
the information available at the time. Determining this typically
requires review of the medical record by an expert in the
relevant specialty. The reader's role at this stage is to
preserve the record and the timeline — not to prove the case.

### What if the doctor says my symptoms were "atypical"?

This is the most common defense framing in diagnostic error cases.
Atypical presentations do occur, and a clinician's failure to
diagnose an atypically-presenting condition is not automatically
malpractice. But the framing has two layers: whether the
presentation actually was atypical given the patient's reported
symptoms, and whether the differential diagnosis the clinician
considered was reasonable given what was reported. Expert review
of the medical record is what answers both questions.

### What if the diagnosis was eventually made — just late?

Late diagnosis can still support a case if the delay caused
additional harm — disease progression, increased treatment burden,
worse prognosis, permanent disability, or shortened life
expectancy. The legal question is whether earlier diagnosis would
more likely than not have produced a better outcome, and this is
where Missouri and Kansas diverge significantly.

### What is a "loss of chance" case, and does Missouri or Kansas recognize it?

A loss-of-chance case is one where the patient cannot prove that
earlier diagnosis would more likely than not have produced a
better outcome, but can prove that earlier diagnosis would have
*increased the chance* of a better outcome.

**Missouri does not recognize loss of chance as a separate cause
of action.** Under *Wollen v. DePaul Health Center* (1992), a
diagnostic error plaintiff in Missouri must prove that earlier
diagnosis more likely than not would have produced a better
outcome — typically meaning a greater than 50 percent chance of
better outcome with earlier diagnosis. *(MIKE: confirm current
case law — this doctrine may have been refined.)*

**Kansas recognizes loss of chance to a limited degree.** Under
*Delaney v. Cade* (1994), Kansas permits recovery where the
provider's negligence substantially reduced the patient's chance
of survival, even where survival was not more likely than not
to begin with. *(MIKE: confirm current scope and case law.)*

The same diagnostic error, with the same patient outcome, can
produce a viable case in Kansas and no viable case in Missouri.
This is one of the most consequential differences between the
two states for diagnostic error cases.

### What about the earlier doctors who didn't catch it?

A diagnostic error case can involve multiple defendants — the
primary care provider who attributed the symptoms to something
benign, the specialist who didn't order the appropriate workup,
the radiologist who didn't see the finding on imaging, the
emergency department that discharged the patient without
admission. Identifying which providers in which encounters
contributed to the missed or delayed diagnosis is part of what
the case develops.

### Can I bring a case if my family member died from a missed diagnosis?

Yes. Wrongful-death claims after a missed or delayed diagnosis
have a different statute of limitations and a different set of
rules about who can bring them. In Missouri, the wrongful-death
window is three years from the death (RSMo § 537.100). In Kansas,
two years from the death (K.S.A. 60-1903). The persons entitled
to bring a claim — spouse, children, parents — are defined by
statute, and the order matters. The framework is covered in
detail on the [wrongful death guide](/just-happened/wrongful-death/),
which is built to be read alongside this page.

### What does Yonke Law do in diagnostic error cases?

We handle diagnostic error cases the same way we handle any
serious medical malpractice case: full review of the medical
timeline (including the earlier encounters where the diagnosis
should have been considered), retention of qualified medical
experts in the relevant specialties, evaluation of the causation
question under the applicable state's loss-of-chance doctrine,
preparation of the affidavit of merit where Missouri law requires
it, and litigation when the hospital's response does not match
what the case warrants. *(MIKE: confirm or replace.)*
```

---

### Section 5 — Missouri vs. Kansas: the rules that matter

**Layout:** Obsidian Graphite. Two-column on desktop, stacked on mobile.

**Headline:** `How the rules differ depending on where it happened`

**Content:**

```markdown
## Missouri

- **Statute of limitations:** Two years for medical malpractice
  (RSMo § 516.105) *(MIKE: confirm)*
- **Discovery rule:** Available in diagnostic error cases — the
  two-year clock may start from when the injury was, or
  reasonably should have been, discovered rather than from the
  missed-diagnosis encounter *(MIKE: confirm current case law on
  diagnostic-error discovery rule scope)*
- **Statute of repose:** Ten-year outside limit regardless of
  discovery *(MIKE: confirm § 516.105 current text)*
- **Loss of chance:** **Not recognized as a separate cause of
  action.** *Wollen v. DePaul Health Center* (1992) requires
  plaintiff to prove earlier diagnosis would more likely than
  not have produced a better outcome — generally meaning a
  greater than 50 percent chance. *(MIKE: confirm current
  doctrine.)*
- **Affidavit of merit:** Required within 90 days of complaint,
  signed by a legally qualified health care provider
  (RSMo § 538.225) *(MIKE: confirm)*
- **Damages cap on non-economic damages:** Missouri caps
  non-economic damages in medical malpractice cases *(MIKE:
  confirm § 538.210 current cap amount — periodically adjusted)*
- **Comparative fault:** Pure comparative for the underlying
  injury claim, though damages cap applies independently
  *(MIKE: confirm)*

## Kansas

- **Statute of limitations:** Two years from the date the injury
  becomes reasonably ascertainable (K.S.A. 60-513(a)(7) and (c))
  *(MIKE: confirm)*
- **Statute of repose:** Four-year outside limit under K.S.A.
  60-513(c) *(MIKE: confirm)*
- **Loss of chance:** **Recognized to a limited degree.** *Delaney
  v. Cade* (1994) permits recovery where the provider's
  negligence substantially reduced the patient's chance of
  survival, even where survival was not more likely than not.
  *(MIKE: confirm current scope.)*
- **Expert requirement:** Expert testimony required for medical
  malpractice claims (K.S.A. 60-3412 and related) *(MIKE: confirm)*
- **Damages cap on non-economic damages:** **Status uncertain
  after *Hilburn v. Enerpipe* (2019). MIKE: critical to confirm
  current status for medical malpractice specifically.**
- **Health Care Stabilization Fund:** Kansas providers participate
  in the HCSF as secondary coverage *(MIKE: confirm structure)*
- **Comparative fault:** Modified — barred if 50% or more at
  fault (K.S.A. 60-258a) *(MIKE: confirm)*
- **Minor tolling vs. statute of repose:** K.S.A. 60-515 minor
  tolling interacts with the four-year statute of repose under
  60-513(c) *(MIKE: critical recurring confirmation)*
```

Below the columns, one inline link:

> *Not sure how the discovery rule, the statute of repose, or loss-of-chance doctrine applies to your situation?* [*Send us the basics and we'll tell you →*](#consultation)

---

### Section 6 — Inline trust signal

**Layout:** Charcoal Slate panel. Restrained.

**Sensitivity-aware behavior:** Moderate sensitivity. Three options in order of preference:

1. Mike-input quote from a representative case with explicit written consent and bar-compliance review
2. Anonymous outcome reference with no quote and no patient detail
3. No testimonial — replaced with a signed statement from Mike on the firm's approach to diagnostic error cases

**Recommendation for this page: Option 3.** Diagnostic error cases frequently involve cancer, death, and disability outcomes that do not lend themselves to testimonial framing without reading as marketing on tragedy. A signed Mike statement on the firm's investigative approach (medical timeline reconstruction, expert review in relevant specialties, evaluation of the causation question under the applicable loss-of-chance doctrine) sits more naturally with the page's tone.

**Placeholder content (always Mike-input):**

```
[MIKE INPUT REQUIRED — recommend option 3.]

[Signed statement from Mike on the firm's approach to diagnostic
error cases. Should describe the investigative process —
reconstruction of the medical timeline, retention of qualified
medical experts in the relevant specialty (oncology, cardiology,
neurology, infectious disease, etc.), evaluation of the causation
question under Missouri's stricter or Kansas's more permissive
loss-of-chance framework, affidavit of merit preparation in
Missouri cases — without making outcome claims. Length: 100–150
words.]
```

---

### Section 7 — When it's time to talk to a lawyer

**Layout:** Obsidian Graphite. Centered.

**Content:**

```markdown
## When it's worth having someone look at your situation

Not every late or missed diagnosis is a case. Atypical presentations
occur. Reasonable workups sometimes miss diagnoses that only
become apparent later. But the moment any of the following are
true, a free consultation is worth your time:

- You were recently diagnosed with cancer that earlier visits or
  imaging might have caught
- You suffered a heart attack, stroke, or pulmonary embolism that
  was initially attributed to a different cause
- You or a family member experienced sepsis that was discharged
  from an ER as a less serious infection or virus
- An emergency department discharged you with symptoms that
  turned out to be a serious condition requiring admission
- A test result, imaging finding, or pathology result was not
  acted on, was misread, or was never communicated to you
- A specialist referral that should have been made was not made,
  or was significantly delayed
- A family member died from a condition you now believe was
  identifiable earlier
- You have been told by a second-opinion provider that the
  earlier workup should have led to a different conclusion
- You simply want to understand whether what happened qualifies
  as malpractice given the symptoms you reported and the workup
  that was done

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
THE DIAGNOSTIC ERROR REFERENCE
A one-page printable summary of what to know, how to request
complete medical records (including imaging and pathology), how
to build the timeline, and how Missouri and Kansas rules differ
on the discovery rule and loss-of-chance doctrine. Designed to be
saved, shared with a family member, or read in your own time.

[Download the PDF →]
```

**Card 2 — Digital intake:**

```
OR — WHEN YOU'RE READY, WALK THROUGH WHAT WE'D WANT TO KNOW
The questions we'd ask in a first conversation, organized so you
can answer at your own pace. Roughly 10–15 minutes. There's a
place to indicate whether you're the patient or filling out for
someone who has died, and where you are in the timeline (recently
diagnosed, mid-treatment, post-loss).

Free, confidential, no obligation. Your answers are private and
encrypted. You can save partway through and finish later.

[Start the digital intake →]
```

**Implementation note:** The digital intake should branch on (a) whether the reader is the patient or filling out for a deceased family member, and (b) where in the timeline they are (recent diagnosis / mid-treatment / post-loss). The follow-up questions differ meaningfully for each. Branch logic spec lives with the intake spec. Note: Moderate-tier intake should also support partial-save and resume.

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
2. **Wrongful death** — *If a family member died from a missed
   or delayed diagnosis, the wrongful-death framework applies in
   parallel. Different statute of limitations, different rules
   about who can bring a claim.*
   → `/just-happened/wrongful-death/`
3. **Surgical errors** — *If a missed diagnosis led to an
   inappropriate surgery or a surgical complication, the
   surgical-error framework may also apply.*
   → `/just-happened/surgical-error/`
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

- [ ] Does the page use the patient's diagnosis or outcome as a marketing lever? (Fail — rewrite.)
- [ ] Does the page pathologize the patient's response — frame trust in prior providers, delayed concern, or uncertainty about whether what happened was an error as weakness? (Fail — rewrite.)
- [ ] Does the page acknowledge that not every late diagnosis is a case? (Pass.)

Three diagnostic-error-specific checks:

- [ ] Does the page suggest the reader can determine on their own whether their symptoms should have led to an earlier diagnosis? (Fail — rewrite.) The page should consistently reinforce that this is what expert review is for, not a determination the reader is expected to make.

- [ ] Does the page treat the MO/KS loss-of-chance divergence as a footnote? (Fail — rewrite.) The doctrine is case-determinative in many diagnostic error cases. Section 5 and the FAQ both make it concrete enough that a reader without legal background understands why the same fact pattern can yield different outcomes across State Line Road.

- [ ] Does the page name specific medical conditions or specialties in a way that could be read as marketing the firm as specializing in particular diagnoses? (Fail — rewrite.) The page mentions general categories (cancer, heart attack, stroke, sepsis) but should not name specific cancers, specific hospitals, or specific specialist groups.

---

## 5. Image asset references

| Section | Suggested asset |
|---|---|
| Hero background (optional) | Restrained, dark photographic image. Drive folder `1Sea3j5hCkU8xQLcVNqYjYMj8bjPj57XI` — pick from existing if available. No imagery of medical settings, imaging rooms, lab work, or healthcare staff. If no existing asset fits, leave plain. |
| Section 6 trust signal panel | None — Moderate-tier default, option 3 recommended. |
| Section 9 Related pages cards | Use existing card assets from the cross-link page types. |

**Forbidden imagery (universal list applies):** Crashed cars, ambulances, gavels, scales of justice, lawyer-with-arms-crossed, generic KC skyline.

**Additional forbidden for Moderate-tier and this page specifically:**

- Medical settings, imaging suites, exam rooms, lab work
- Doctors, nurses, healthcare staff
- Patients in beds, on imaging tables, in hospital settings
- Imaging films or pathology slides
- Stock imagery of grief, candles, framed photographs (for the bereaved-family reader)
- Imagery that uses the patient's diagnosis or outcome as visual marketing
- Stock photos of "concerned family member" or "patient looking distressed"

---

## 6. Accessibility minimums

Standard checklist from template Section G plus Moderate-tier addition:

- Reduced-motion handling: any subtle animations respect `prefers-reduced-motion: reduce`. The page is likely to be read by patients in physical distress and by family members in grief; motion can intensify both.

---

## 7. Statutes and facts that need Mike's confirmation

Flag each item visually in the build until Mike signs off.

- Missouri medical malpractice SOL — RSMo § 516.105, two years. Confirm current text including ten-year statute of repose.
- Missouri discovery rule scope in diagnostic error cases — confirm current case law on when the rule extends the SOL beyond the encounter date.
- Missouri loss-of-chance doctrine — *Wollen v. DePaul Health Center* (1992) cited as rejecting loss of chance. **Critical to confirm** whether the doctrine has been refined or modified by subsequent case law.
- Missouri affidavit of merit — RSMo § 538.225, 90-day window. Confirm.
- Missouri non-economic damages cap — RSMo § 538.210. Confirm current cap amount and scope.
- Kansas medical malpractice SOL — K.S.A. 60-513(a)(7) and (c). Confirm.
- Kansas statute of repose — K.S.A. 60-513(c), four years. Confirm.
- Kansas loss-of-chance doctrine — *Delaney v. Cade* (1994) cited as recognizing limited loss-of-chance recovery. **Critical to confirm** current scope and any case-law refinements.
- Kansas non-economic damages cap status — *Hilburn v. Enerpipe* (2019). **Critical recurring confirmation** for medical malpractice specifically.
- Kansas expert requirement — K.S.A. 60-3412 and related. Confirm.
- Kansas Health Care Stabilization Fund structure — confirm current coverage limits.
- Kansas minor tolling vs. statute of repose interaction — K.S.A. 60-515 vs. 60-513(c). Critical recurring confirmation.
- Missouri wrongful-death SOL — RSMo § 537.100, three years. Confirm.
- Kansas wrongful-death SOL — K.S.A. 60-1903, two years. Confirm.
- Bar-advertising compliance review on the entire page, particularly Section 6 content and any factual claim about Yonke Law's diagnostic error experience.

---

## 8. Open items

- Verify the fourteen `(MIKE: confirm …)` flags above before publish. **The MO/KS loss-of-chance doctrine confirmations are the most consequential** because misstating either could materially mislead readers about case viability.
- Confirm hero image selection from the Drive folder, or commission a new restrained image. Diagnostic error has effectively no appropriate existing imagery — medical settings are forbidden, and grief imagery is forbidden under Moderate-tier rules.
- Confirm Section 6 trust signal selection — recommendation defaults to option 3 (signed Mike statement) for this page.
- Confirm whether the FAQ should include a specific question on missed pediatric diagnoses, which carry their own emotional weight and statute-of-limitations complexity (minor tolling vs. statute of repose). Recommendation: address in consultation only; not on the page in this pass.
- Confirm whether the FAQ should distinguish between misdiagnosis cases (told you have condition A when you have condition B) and missed-diagnosis cases (told you have nothing when you have condition A). The doctrines are largely the same but the procedural and evidentiary posture differs. Recommendation: address in consultation only; the page treats them under one umbrella.
- Concierge classifier coordination: a diagnostic-error case resulting in death should route to either this page (with wrongful-death cross-link surfaced) or directly to wrongful-death (with diagnostic-error as the underlying cause). Same coordination point as on other pages.
- Intake branching for Moderate-tier pages — partial-save, resume, and reader-type branching now flagged on three Moderate-tier pages (surgical-error, this page, and TBI). Warrants a single Moderate-tier intake spec.
- Confirm whether "Related reading" links should be live with placeholder routes for not-yet-built pages.
- Spanish-language parallel page question — defer per homepage spec.

---

*End of diagnostic-error spec.*
