# Yonke Law — `/just-happened/surgical-error/` Page Spec

**Workspace:** Yonke Law Website
**Template type:** Tier 2 variant of the `/just-happened/*` pattern. Parent is `just-happened-medical-malpractice.md`. Inherits structure unchanged; calibrated for the consent-form misunderstanding that dominates surgical cases ("but I signed for the risk"), the "never events" framework that distinguishes some surgical errors from others, the post-operative care problem (the same provider often handles follow-up), and the affidavit-of-merit procedural requirement in Missouri.
**Reference docs:** `yonke-homepage-spec.md`, `just-happened-medical-malpractice.md` (parent), `just-happened-medication-error.md` (adjacent — Wave 2), `just-happened-hospital-negligence.md` (adjacent — Wave 2), `just-happened-_template.md`, `Yonke Law — The Standard` (Brand Doctrine & Operating System).
**Pronunciation standard:** Yonke (YONK-ee) Law.
**Sensitivity:** Moderate. Mike's review required before any other reviewer.

---

## 1. Page purpose & intent

This page serves a visitor who recently had surgery and either knows or suspects that something went wrong — wrong site operated on, an instrument or sponge left behind discovered on follow-up imaging, an infection from a likely sterile breach, organ damage that wasn't disclosed as a known surgical risk, nerve damage that wasn't part of the operation, or a complication that the surgeon attributed to "complications" but that the reader doesn't fully accept.

The reader is in an emotionally complex position. They are often still under the care of the same hospital or the same surgeon for follow-up. They have typically signed informed-consent paperwork that listed many risks, including some of the things that may have just happened to them. The most common misunderstanding on this page — and the one the page must address head-on without lecturing — is the assumption that having consented to a known risk forecloses a case.

The page leads with calm acknowledgment, threads in the surgical-error framework where the legal posture is genuinely different from a typical medical malpractice case, and surfaces the practical follow-up-care problem: how to continue medical care while protecting both your health and your legal position.

**Critical constraint:** This is informational content, not legal advice. The page must never claim to provide legal advice or create an attorney-client relationship. Standard disclaimers in footer apply.

---

## 2. URL, meta, and SEO/AEO foundation

- **Canonical URL:** `https://yonke.law/just-happened/surgical-error/`
- **Page title (browser tab):** `What to do after a surgical error in Missouri or Kansas — Yonke Law`
- **Meta description (155 chars target):** `Something went wrong in surgery? Here's what to know, what to preserve, and how Missouri and Kansas medical malpractice rules differ.`
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

**Layout:** Obsidian Graphite background. Centered, max-width 900px. Moderate-tier vertical breathing room — slightly more whitespace than Standard pages.

**Content:**

```
Eyebrow (small caps, Steel Silver):  JUST HAPPENED

Headline (display serif, large):
Something went wrong in surgery. Take a breath.

Subhead (body, lighter):
Whether it was discovered in the recovery room, on a follow-up
scan, or weeks after you went home — this is the clearest path
forward. There is no clock on this page. The hospital's voice and
the surgeon's voice are loud right now. Ours is not.

Primary CTA (Muted Gold or Chrome Highlight):
Read what to know →   (anchor to #what-to-know)

Secondary link (text only, Steel Silver):
Or talk to someone, when you're ready →   (anchor to #consultation)
```

**Optional background treatment:** Restrained low-light photographic image. No imagery of operating rooms, surgical instruments, hospital corridors, patients in beds, or medical staff. If no existing asset fits, leave plain. Moderate-tier sensitivity means erring toward less imagery, not more.

---

### Section 2 — What to know

**Layout:** Charcoal Slate background. Max-width 800px. H2 + H3 hierarchy for schema markup.

**Anchor ID:** `#what-to-know`

**Implementation note:** Wrap this section in `HowTo` schema. Each numbered item gets an `HowToStep` schema entry. Moderate-tier framing — the steps are not 24-hour bound. The timing is yours.

**Content:**

```markdown
## What to know in the days and weeks ahead

Surgical error cases don't run on the same clock as a car crash.
Some errors are discovered immediately. Some surface weeks or months
later on a follow-up scan, a second opinion, or a complication that
doesn't resolve. The steps below apply whether the error was
discovered yesterday or last summer. The order matters less than
that they happen.

### Before anything else

1. **Continue medical care for the immediate problem, but consider
   where.** If the error involved your current surgeon or hospital,
   you do not have to use them for follow-up. You can seek care at
   a different facility, get a second opinion, or transfer your
   care entirely. Your right to receive treatment elsewhere is not
   conditional on telling the original provider why.

2. **Request a complete copy of your medical records — all of them.**
   Under HIPAA, you have the right to a complete copy of your own
   medical records. For a surgical error case, "complete" includes
   the operative report, the anesthesia record, all pre-operative
   and post-operative notes, all imaging (with the actual image
   files, not just radiology reports), the discharge summary,
   medication administration records, nursing notes, and any
   incident reports the facility is willing to release. Request in
   writing and keep a copy of the request itself.

3. **Get a second opinion from a different hospital system.** Not a
   different doctor in the same group. Not a colleague of your
   surgeon. A separate hospital system, ideally a different city if
   your case is in a metro where the surgical specialty community
   is small. The second opinion is for your medical care first; the
   independent documentation it creates is also evidence.

### In the days that follow

4. **Document your complications carefully.** Pain levels day by
   day, what activities you can and cannot do, sleep quality,
   medication effects, the specific symptoms that emerged after
   surgery, the date each new symptom appeared. A handwritten or
   typed journal — dated and consistent — is powerful evidence. So
   are photographs of the surgical site if there are visible
   problems.

5. **Preserve every communication from the surgeon, the hospital,
   and any follow-up provider.** Texts. Emails. Voicemails. Patient
   portal messages. Take screenshots and save copies. Hospital
   patient portals sometimes archive or remove messages on rolling
   windows; download them while you can.

6. **Get the names of every member of the surgical team.** The
   surgeon. The assisting surgeon. The anesthesiologist. The CRNA.
   The circulating nurse. The scrub tech. These may or may not all
   appear in your medical record. They may all be relevant to the
   case — or just one of them.

### Before signing anything

7. **Do not sign release forms, settlement offers, or "incident
   review" paperwork from the hospital without reading them
   carefully.** Some hospitals approach patients after a serious
   adverse event with paperwork that, in the moment, can look
   routine — an apology letter requiring a signature, an
   "acknowledgment" form, a settlement offer presented as a
   gesture of goodwill. Take any of these to a lawyer before
   signing.

8. **Do not assume the consent form forecloses your case.** This
   is the most common misunderstanding on this page. Consenting to
   the *risk* of a complication is not consenting to *substandard
   care* that caused the complication. The consent form lists risks
   that can occur even when the surgery is performed competently —
   it does not authorize the surgical team to fall below the
   standard of care.

### When you're ready

9. **Talk to someone before you go further down any path that
   forecloses options.** Switching providers permanently, accepting
   a hospital's settlement offer, signing any document presented
   by the hospital risk-management team — these can all affect what
   options remain. A free consultation costs you nothing and does
   not commit you to anything.
```

End of section CTA (text link, inline):

> *Want a printable version to keep, share, or hand to a family member?* [*Download the Surgical Error Reference →*](/resources/checklists/surgical-error-reference/)

---

### Section 3 — What the hospital and surgical team typically do

**Layout:** Obsidian Graphite. Max-width 800px. Informational, not adversarial.

**Content:**

```markdown
## What the hospital and surgical team typically do

Hospitals have well-developed protocols for what happens when a
serious adverse surgical event is identified. The protocols are
not malicious. But they are designed to protect the institution as
much as the patient.

In the hours and days after a recognized error, you should expect:

- **An institutional apology, sometimes scripted.** Many hospitals
  now train physicians and risk-management staff in "disclosure
  conversations" — meeting with the patient or family after an
  adverse event to express empathy, explain what happened, and
  in some cases offer a goodwill gesture (often a partial bill
  forgiveness or a small payment). These conversations vary in
  candor. Some are genuinely informative. Others are designed
  to preempt a legal claim by establishing rapport before the
  patient has had time to understand the legal landscape.

- **A framing of the event as a "known complication" rather than
  an error.** The boundary between a complication that occurs
  despite competent surgery and an error that caused harm is
  often subtle. Hospitals consistently frame events as
  complications. The actual question — whether the surgical team
  fell below the standard of care — usually requires expert review
  of the operative record.

- **Continued care offered at the same facility.** Hospitals often
  offer to handle the patient's follow-up, including any
  corrective procedures, at no additional cost. This can be
  appropriate for the patient's medical needs. It can also have
  legal implications, particularly if it is paired with paperwork
  that the patient does not fully understand. Each piece deserves
  separate consideration.

- **A request to sign forms — sometimes many forms.** Releases,
  acknowledgments, settlement offers, communications consent.
  None of these are routine paperwork after a serious adverse
  event. All deserve to be read carefully before signing, and any
  meaningful one deserves a lawyer's read.

- **Slow record release.** Complete medical records, particularly
  operative reports and incident reports, sometimes take weeks
  to produce. Hospitals are required to provide them under HIPAA
  but often respond slowly. Sustained requests, including written
  follow-up, may be needed.

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
## Common questions after a surgical error

### How long do I have to file a surgical error claim in Missouri?

In Missouri, the statute of limitations for medical malpractice
is **two years** from the date of the alleged act of malpractice,
under RSMo § 516.105 *(MIKE: confirm)*. Missouri's discovery rule
can extend that deadline in some circumstances — for example,
where a retained foreign object is not found until later, or where
the connection between the surgery and the injury was not
reasonably knowable at the time. Missouri also has a **statute of
repose** that caps the outside limit regardless of discovery
*(MIKE: confirm current text of § 516.105 and ten-year repose)*.

### How long do I have to file in Kansas?

In Kansas, the statute of limitations for medical malpractice is
**two years** from the date the injury becomes reasonably
ascertainable, under K.S.A. 60-513(a)(7) and (c) *(MIKE: confirm)*.
Kansas's four-year statute of repose can cap claims regardless of
when discovery occurred. The interaction between discovery and
repose is complex and case-specific.

### I signed a consent form before the surgery. Does that hurt my case?

This is the most common misunderstanding about surgical error
cases. Signing a consent form acknowledges that you understood
the *risks* of competently performed surgery — risks like
infection, nerve injury near the surgical site, complications
known to occur even when everything is done correctly. It does
not authorize the surgical team to fall below the standard of
care. If the surgical team failed to do what a competent surgeon
would do, the consent form does not foreclose your case.

### What if the hospital says it was a "known complication"?

The boundary between a complication and an error is exactly what
a medical malpractice case investigates. Some adverse events occur
even when the surgery is performed competently — those may not be
actionable. Others occur because the surgical team fell below the
standard of care, even when the event itself is described in the
consent form as a "known risk." Determining which category a
specific event falls into requires expert medical review of the
operative report and surrounding records. The hospital's
characterization is not the final word.

### What is a "never event"?

A "never event" is a serious medical error that should not occur
in a properly functioning healthcare system. The Agency for
Healthcare Research and Quality and the National Quality Forum
have identified categories of surgical never events that include
operating on the wrong site, performing the wrong procedure,
operating on the wrong patient, and leaving foreign objects
(sponges, instruments, gauze) inside a patient after surgery.

Never events are legally significant because they typically have
no defensible medical justification. Medicare does not pay for
them. Many hospitals are required to report them to state
regulators. The "standard of care" defense that protects
hospitals in most malpractice cases generally does not apply to
never events.

### Should I keep seeing the same surgeon for follow-up?

That is a medical decision first, but a legal one second. You are
not required to continue care with the same provider. You have
the right to seek follow-up care at any other facility, get
second opinions, and transfer your care entirely without
explaining why. Many patients in surgical error cases switch
providers for follow-up, both for their own medical comfort and
to create an independent medical record.

### Should I file a complaint with the hospital or the state?

Filing a complaint with the hospital's patient advocate or with
the state medical board is your right, and it does not affect a
potential civil case. But the procedural posture matters.
Complaints filed without legal guidance sometimes contain
statements that get used against the patient later, particularly
if the patient describes events with imprecise language. If you
are considering filing a complaint, doing so with a lawyer's
guidance is safer.

### What's an affidavit of merit, and do I need one?

In Missouri, every medical malpractice case requires a separate
sworn statement (an "affidavit of merit") from a legally qualified
health care provider, filed within 90 days of the complaint, that
attests there is reasonable basis to bring the claim
(RSMo § 538.225) *(MIKE: confirm)*. This is a procedural
requirement; without it, the case is subject to dismissal. Kansas
does not impose the same statutory affidavit requirement but does
require expert support for medical malpractice claims under K.S.A.
60-3412 and related provisions *(MIKE: confirm)*. This is one of
the reasons surgical error cases generally require a lawyer's
involvement earlier than other personal injury cases.

### What does Yonke Law do in surgical error cases?

We handle surgical error cases the same way we handle any serious
medical malpractice case: full review of the operative record and
the surrounding medical record, retention of qualified medical
experts to evaluate the standard of care, preparation of the
affidavit of merit where required, and litigation when the
hospital's response does not match what the case warrants. *(MIKE:
confirm or replace.)*
```

---

### Section 5 — Missouri vs. Kansas: the rules that matter

**Layout:** Obsidian Graphite. Two-column on desktop, stacked on mobile.

**Headline:** `How the rules differ depending on where it happened`

**Content:**

```markdown
## Missouri

- **Statute of limitations:** Two years for medical malpractice
  from the date of the act (RSMo § 516.105) *(MIKE: confirm)*
- **Discovery rule:** Available for cases involving retained
  foreign objects and certain other circumstances where the injury
  was not reasonably knowable at the time *(MIKE: confirm current
  scope)*
- **Statute of repose:** Ten years outside limit regardless of
  discovery *(MIKE: confirm § 516.105 current text)*
- **Affidavit of merit:** Required within 90 days of complaint,
  signed by a legally qualified health care provider
  (RSMo § 538.225) *(MIKE: confirm)*
- **Damages cap on non-economic damages:** Missouri caps
  non-economic damages in medical malpractice cases *(MIKE:
  confirm § 538.210 current cap amount and scope — periodically
  adjusted)*
- **Comparative fault:** Pure comparative for the underlying
  injury claim, though damages cap applies independently
  *(MIKE: confirm)*
- **Minor tolling:** Statute of limitations tolled for minors
  (RSMo § 516.170, with limitations under § 516.105 for med mal
  specifically) *(MIKE: confirm interaction)*

## Kansas

- **Statute of limitations:** Two years from the date the injury
  becomes reasonably ascertainable (K.S.A. 60-513(a)(7) and (c))
  *(MIKE: confirm)*
- **Statute of repose:** Four-year outside limit under K.S.A.
  60-513(c) *(MIKE: confirm)*
- **Expert requirement:** Expert testimony required for medical
  malpractice claims (K.S.A. 60-3412 and related) *(MIKE: confirm)*
- **Damages cap on non-economic damages:** **Status uncertain after
  *Hilburn v. Enerpipe* (2019), which struck down the cap on
  non-economic damages in personal injury cases generally. MIKE:
  critical to confirm current status for medical malpractice
  specifically — this has been the subject of ongoing legislative
  and judicial activity.**
- **Health Care Stabilization Fund:** Kansas physicians and
  healthcare providers participate in the HCSF, which provides
  secondary coverage above primary malpractice insurance limits
  *(MIKE: confirm current structure)*
- **Comparative fault:** Modified — barred from recovery if 50%
  or more at fault (K.S.A. 60-258a) *(MIKE: confirm)*
- **Minor tolling vs. statute of repose:** K.S.A. 60-515 minor
  tolling interacts with the four-year statute of repose under
  60-513(c) *(MIKE: critical to confirm — this is a recurring
  complexity flagged across multiple pages)*
```

Below the columns, one inline link:

> *Not sure how the discovery rule or the statute of repose applies to your situation?* [*Send us the basics and we'll tell you →*](#consultation)

---

### Section 6 — Inline trust signal

**Layout:** Charcoal Slate panel. Restrained.

**Sensitivity-aware behavior:** Moderate sensitivity. Three options in order of preference:

1. Mike-input quote from a representative case with explicit written consent and bar-compliance review
2. Anonymous outcome reference with no quote and no patient detail
3. No testimonial — replaced with a signed statement from Mike on the firm's approach to surgical error cases

**Recommendation for this page: Option 2 or 3.** Surgical error testimonials, even with consent, are emotionally heavy and risk reading as marketing on outcomes that the firm cannot reliably reproduce. A signed Mike statement on the firm's investigative approach (expert review, operative-record analysis, coordination with medical specialists) sits more naturally with the page's tone.

**Placeholder content (always Mike-input):**

```
[MIKE INPUT REQUIRED — choose option 2 or 3.]

[If option 2: brief anonymous outcome reference. Pattern: "In a
representative surgical error case the firm handled, [generic
case posture without identifying detail], the resolution
addressed [generic outcome category]." No dollar figures unless
cleared.]

[If option 3: signed statement from Mike on the firm's approach
to surgical error cases. Should describe the investigative
process — expert review of operative records, retention of
appropriately specialized medical experts, affidavit of merit
preparation, coordination with the patient's ongoing medical
care — without making outcome claims.]
```

---

### Section 7 — When it's time to talk to a lawyer

**Layout:** Obsidian Graphite. Centered.

**Content:**

```markdown
## When it's worth having someone look at your situation

Not every adverse surgical outcome is a case. Some complications
occur even when surgery is performed competently — and those may
not be actionable. But the moment any of the following are true,
a free consultation is worth your time:

- The surgery was performed on the wrong site, the wrong side, or
  the wrong patient
- A surgical instrument, sponge, or other foreign object was
  found inside you after surgery
- You experienced organ damage, nerve damage, or a structural
  injury that the surgeon attributed to a "complication" without
  satisfying explanation
- The surgical site became seriously infected and the infection
  pattern suggests a sterile-technique breach
- An anesthesia event occurred during or after surgery — awareness
  during anesthesia, oxygen deprivation, allergic reaction not
  managed appropriately
- A device, implant, or hardware was placed incorrectly or was
  the wrong size, type, or model
- The hospital has approached you with an apology paired with
  paperwork to sign
- The hospital has offered to provide follow-up care at no
  charge, paired with paperwork
- The hospital has offered a settlement, payment, or "goodwill
  gesture"
- You feel the surgeon or hospital is not telling you the full
  story about what happened
- You simply want to understand whether what happened to you
  qualifies as malpractice or a known complication

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
THE SURGICAL ERROR REFERENCE
A one-page printable summary of what to know, what to preserve,
how to request your complete medical records, and how Missouri
and Kansas medical malpractice rules differ. Designed to be
saved, shared with a family member, or read in your own time.

[Download the PDF →]
```

**Card 2 — Digital intake:**

```
OR — WHEN YOU'RE READY, WALK THROUGH WHAT WE'D WANT TO KNOW
The questions we'd ask in a first conversation, organized so you
can answer at your own pace. Roughly 10–15 minutes. There's a
place to indicate where in the timeline you are — still in
recovery, weeks out, months out — so we ask appropriate follow-up
questions.

Free, confidential, no obligation. Your answers are private and
encrypted. You can save partway through and finish later.

[Start the digital intake →]
```

**Implementation note:** The digital intake should branch on (a) where the reader is in the post-surgical timeline (immediate post-op / weeks out / months or years out), and (b) whether they have already obtained their medical records. Both branches change which follow-up questions are most useful. Branch logic spec lives with the intake spec. Note: Moderate-tier intake should also support partial-save and resume.

---

### Section 9 — Related pages

**Layout:** Obsidian Graphite. Horizontal row of cards (3 on desktop, stacked mobile).

**Headline:** `Related guidance`

**Cards:**

```
1. **Medical malpractice** — *The parent guide covering the broader
   medical negligence framework — the standard of care, expert
   requirements, and how malpractice cases differ from other
   personal injury cases.* → `/just-happened/medical-malpractice/`
2. **Medication errors** — *If a medication error during or after
   surgery contributed to what happened, this covers the
   pharmacy, hospital, and prescribing-related issues that
   medication cases turn on.* → `/just-happened/medication-error/`
3. **Hospital negligence** — *If the issue was a hospital
   system-level failure — a fall, an infection, monitoring gaps —
   more than a specific surgical event, this covers that
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

- [ ] Does the page use the patient's complications as a marketing lever? (Fail — rewrite.)
- [ ] Does the page pathologize the patient's response — frame trust in the surgeon, hope for recovery, or uncertainty about whether what happened was an error as weakness? (Fail — rewrite.)
- [ ] Does the page acknowledge that not every surgical complication is a case? (Pass.)

Three surgical-error-specific checks:

- [ ] Does the page suggest the reader can determine on their own whether what happened was malpractice or a known complication? (Fail — rewrite.) The page should consistently reinforce that this is what expert review is for, not a determination the reader is expected to make.

- [ ] Does the page lecture the reader about consent forms in a way that suggests they should have read more carefully? (Fail — rewrite.) The consent-form misunderstanding deserves clear explanation, but the page should not imply the reader was naive for signing.

- [ ] Does the page name specific hospitals, surgical groups, or known cases in a way that could be read as targeting any provider? (Fail — rewrite.)

---

## 5. Image asset references

| Section | Suggested asset |
|---|---|
| Hero background (optional) | Restrained, dark photographic image. Drive folder `1Sea3j5hCkU8xQLcVNqYjYMj8bjPj57XI` — pick from existing if available. No imagery of medical settings, instruments, surgical sites, patients, or healthcare staff. If no existing asset fits, leave plain. |
| Section 6 trust signal panel | None — Moderate-tier default. |
| Section 9 Related pages cards | Use existing card assets from the cross-link page types. |

**Forbidden imagery (universal list applies):** Crashed cars, ambulances, gavels, scales of justice, lawyer-with-arms-crossed, generic KC skyline.

**Additional forbidden for Moderate-tier and this page specifically:**

- Operating rooms, surgical instruments, surgical sites
- Hospital corridors, beds, or equipment
- Patients in beds, on gurneys, in recovery
- Medical staff in scrubs, masks, or surgical gear
- Imagery that uses the patient's injury or distress as visual marketing
- Wheelchairs, mobility aids, or disability shorthand
- Stock photos of "concerned daughter" or "concerned spouse" — read as marketing about the family's grief rather than information for them

---

## 6. Accessibility minimums

Standard checklist from template Section G plus Moderate-tier addition:

- Reduced-motion handling: any subtle animations respect `prefers-reduced-motion: reduce`. The page is likely to be read by patients in physical discomfort and by family members in stressful contexts; motion can intensify both.

---

## 7. Statutes and facts that need Mike's confirmation

Flag each item visually in the build until Mike signs off.

- Missouri medical malpractice SOL — RSMo § 516.105, two years. Confirm current text including ten-year statute of repose.
- Missouri discovery rule scope — confirm current case law on when the rule extends the SOL.
- Missouri affidavit of merit — RSMo § 538.225, 90-day window. Confirm current text and any recent amendments.
- Missouri non-economic damages cap — RSMo § 538.210. **Confirm current cap amount and scope** — the cap is periodically adjusted and has been the subject of ongoing legal challenge.
- Missouri minor tolling interaction with med mal SOL — RSMo § 516.170 vs § 516.105. Confirm current scope and exceptions.
- Kansas medical malpractice SOL — K.S.A. 60-513(a)(7) and (c). Confirm.
- Kansas statute of repose — K.S.A. 60-513(c), four years. Confirm.
- Kansas non-economic damages cap status — *Hilburn v. Enerpipe* (2019) struck down the cap on non-economic damages in personal injury cases. **Critical confirmation needed** on current status for medical malpractice specifically, including any legislative response.
- Kansas expert requirement — K.S.A. 60-3412 and related. Confirm.
- Kansas Health Care Stabilization Fund structure — confirm current coverage limits and operation.
- Kansas minor tolling vs. statute of repose interaction — K.S.A. 60-515 vs. 60-513(c). **Critical recurring confirmation** across Tier 1/Tier 2 pages involving minors.
- "Never events" framework — verify current AHRQ/NQF classifications and any Missouri or Kansas reporting requirements.
- Bar-advertising compliance review on the entire page, particularly Section 6 trust signal content and any factual claim about Yonke Law's medical malpractice experience.

---

## 8. Open items

- Verify the twelve `(MIKE: confirm …)` flags above before publish. **The Kansas non-economic damages cap status post-*Hilburn* is the most consequential** because misstating it could materially mislead readers about case viability.
- Confirm hero image selection from the Drive folder, or commission a new restrained image. Surgical error has very few appropriate existing assets — most stock imagery either uses medical settings or memorializes grief, both of which are forbidden.
- Confirm Section 6 trust signal selection — options 2 (anonymous outcome reference) or 3 (signed Mike statement). Recommendation defaults to option 3 for this page.
- Confirm the FAQ should not include a question on "how do I find a medical expert" — this comes up but the page intentionally leaves expert retention as part of what the firm does rather than as a reader task. Recommendation: keep off the page; address only in consultation.
- Concierge classifier coordination: a surgical error case that resulted in death should route to either this page (with wrongful-death cross-link surfaced) or directly to wrongful-death (with surgical-error as the underlying cause). Same coordination point as on multiple Tier 1 pages.
- Intake branching for Moderate-tier pages — partial-save and resume should be available, and the reader should be able to indicate they are filling out for someone else. These features may now warrant a single Moderate-tier intake spec rather than per-page branch logic. Flag for intake workstream.
- Confirm whether "Related reading" links should be live with placeholder routes for not-yet-built pages (medication-error and hospital-negligence are Wave 2 alongside this; medical-malpractice exists).
- Spanish-language parallel page question — defer per homepage spec, but note that medical malpractice cases in Kansas City may carry significant Spanish-speaking case volume; flag for future consideration.

---

*End of surgical-error spec.*
