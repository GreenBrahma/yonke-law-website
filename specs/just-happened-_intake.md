# Yonke Law — `/just-happened/*` Digital Intake Spec

**File path:** `just-happened-_intake.md`
**Type:** Systematizing document. Underscore prefix marks this as non-deploying reference.
**Pattern source:** Consolidated from intake branching requirements flagged across `just-happened-pedestrian-accident.md`, `just-happened-rideshare-accident.md`, `just-happened-defective-vehicle.md`, `just-happened-surgical-error.md`, `just-happened-diagnostic-error.md`, `just-happened-medication-error.md`, and the latent requirements present in other Moderate-tier specs (`birth-injury`, `nursing-home-abuse`, `traumatic-brain-injury`, `wrongful-death`, `dog-bite`, `medical-malpractice`).
**Scope:** This spec defines the digital intake that serves every `/just-happened/*` page **except** `active-shooter` and `sexual-abuse`, which retain their own High-sensitivity intake specifications inline in those page specs. The High-sensitivity intake has fundamentally different requirements (low-disclosure threshold, stop-and-leave button on every screen, no automated follow-up at all) and should not be merged into this document.
**Pronunciation standard:** Yonke (YONK-ee) Law.
**Last updated:** 2026-05-10

---

## 1. Purpose

Every `/just-happened/*` page presents two paths in Section 8: a printable PDF reference, and a digital intake. This document specifies the digital intake.

The intake is the conversion mechanism for the entire page family. It also creates the bridge from the marketing website to the People Portal — submission produces (or initializes) a People Portal account that the firm uses to begin a client relationship. Both functions need to work without compromising either.

The intake serves four reader types, three timeline positions, and at least four setting contexts. Rather than building a separate intake per page, this spec defines a single flow with conditional branching that activates based on which source page brought the reader in and how they answer the first few questions.

---

## 2. Design principles

Six principles govern every screen, every interaction, every default. If any element of the build violates one of these, that element should be revisited before launch.

**Time belongs to the reader.** The intake should be completable in 10–15 minutes by an unhurried reader. It should also be pauseable, resumable, and skippable on any non-essential field. Some readers will finish in 8 minutes. Some will finish across three sessions over two weeks. Both should produce equally usable submissions.

**No required field besides name and one contact method.** Every other field is optional or has a "I'd rather not say right now" / "I'll come back to this" option. The intake captures whatever the reader is comfortable sharing — and the firm follows up with the rest in the actual conversation.

**Branching is invisible.** The reader sees the screens that apply to their situation. They do not see a "Are you sure you want to skip the medical questions?" prompt because they identified themselves as a pedestrian-crash reader rather than a medical-error reader. The branching architecture serves the reader, not the form designer.

**Voice matches the source page.** The reader arrives at the intake having just read a page calibrated to their situation. The intake should sound like the same voice. Confirmation messages, validation errors, and screen-level instructions all carry the Yonke Law tone — direct, calm, not promotional.

**Confidentiality language is real, not boilerplate.** "Your answers are private and encrypted" appears on the first screen and at submission. It needs to be true at the infrastructure layer (encryption at rest, TLS in transit, no third-party analytics on intake screens, no advertising pixels) before it appears in copy.

**No automated follow-up to abandoned intakes.** A reader who starts the intake and does not finish should not receive an automated email asking them to come back. The intake is a first conversation, not a sales funnel. Abandonment is a valid choice.

---

## 3. The intake flow (screen-by-screen)

The intake is structured as ten screens. Some screens activate conditionally based on prior answers. Reading the flow top to bottom assumes all branches active; an individual reader will see between six and ten screens depending on their situation.

### Screen 1 — Orientation

```
Welcome / heading

These are the questions we'd ask if you sat down with us in our
office. There's no obligation in answering them. If you decide
not to send them when you're done — or part-way through — that's
fine. We won't follow up.

Roughly 10 to 15 minutes. You can stop anytime and come back to
where you left off.

[Save and continue later] (top-right, always visible from here forward)

[Begin →]
```

No data captured. This screen establishes the contract.

### Screen 2 — Who is reading this

```
Heading: Who is reading this?

[Radio options]
○ Me — I'm the affected person
○ A family member, partner, or close friend
○ Someone else helping the affected person

[If "family member" selected, conditional follow-up]
Is the affected person still alive?
○ Yes
○ No — they died
○ I'd rather not answer this right now
```

Captures the **reader-type branch** that activates intake variations on several pages.

### Screen 3 — What happened (open capture)

```
Heading: Tell us briefly what happened, in your own words

[Large text area — no character limit, no required minimum]

(Optional below the text area, in lighter styling)
When did this happen?         [Date picker — approximate is fine]
                              [Or: "I'm not sure / it happened over time"]
Where did it happen?          [City, State]
                              [Facility or location name, if applicable]
```

The open-capture text area is the most important field on the entire intake. It tells the firm what the reader actually wants to talk about, in their own framing. Everything else is structured supplement.

### Screen 4 — Setting context (conditional)

This screen appears only when the source page is in the medical, nursing-home, or product-related family. Skipped for vehicle pages, slip-and-fall pages, dog-bite, and pages where setting is implicit.

```
Heading: Where did this happen?

(Select all that apply)
☐ Hospital
☐ Pharmacy
☐ Nursing home or assisted living facility
☐ Doctor's office or outpatient clinic
☐ Home
☐ Multiple settings — it happened across more than one
☐ I'd rather describe this in conversation
```

Captures the **setting-type branch** flagged on medication-error and (latently) on hospital-negligence, nursing-home-abuse, and birth-injury.

### Screen 5 — Timeline

```
Heading: When did you become aware that something was wrong?

○ Today, or in the past few days
○ Within the past two weeks
○ Within the past month
○ Within the past year
○ More than a year ago
○ I'm still putting the timeline together
```

Captures the **timeline branch**. Note: this question is distinct from "When did it happen?" on Screen 3. The gap between event and awareness is itself important information, particularly for diagnostic-error and product-defect cases.

### Screen 6 — Vehicle preservation (conditional)

This screen appears only when the source page is `defective-vehicle` or when prior answers indicate a vehicle was involved.

```
Heading: Where is the vehicle now?

○ I still have it — it has not been repaired or disposed of
○ It's been repaired
○ My insurance company has it
○ It's been totaled and sent to salvage
○ I don't know
○ Other [text field]
```

Captures the **preservation-status branch** that drives investigative urgency for product-defect cases.

### Screen 7 — Branch-specific follow-up

This screen's content varies based on the source page and prior answers. It is the workhorse of the conditional logic.

The branch-specific questions are not exhaustive of what the firm needs to know. They are the few questions that meaningfully narrow follow-up direction. Examples by source-page family:

**Medical family** (medical-malpractice, surgical-error, diagnostic-error, medication-error, hospital-negligence, birth-injury, nursing-home-abuse):

```
What medications are or were involved? (Optional)
[Text area]

Who were the providers involved, if you'd like to share names?
[Text area — labeled as optional]

Has a diagnosis been made for the underlying condition or what
happened? (Optional)
[Text area]
```

**Vehicle family** (car-accident, truck-accident, motorcycle, bicycle, pedestrian, rideshare, defective-vehicle):

```
Were there other vehicles, drivers, or people involved?
[Text area — optional]

Were any commercial vehicles, rideshare drivers, or delivery
drivers part of what happened?
○ Yes  ○ No  ○ Not sure
```

**Result-overlay pages** (TBI, wrongful-death):

```
What caused the injury / death? (Optional — describe in your
own words)
[Text area]

Were any of these involved? (Select all that apply)
☐ A vehicle crash
☐ A workplace incident
☐ A medical event
☐ A fall or premises issue
☐ A violent or criminal act
☐ Other / I'm not sure
```

The complete branch-question matrix is in Section 11 below.

### Screen 8 — What you've already done

```
Heading: Have you already taken any of these steps?

(Select all that apply — none required)
☐ Requested medical records
☐ Got a second opinion or another professional's review
☐ Spoken with the provider, facility, or other party about what
   happened
☐ Filed a complaint with a state board or agency
☐ Signed any paperwork from the provider, facility, insurer, or
   other party
☐ Spoken with another lawyer
☐ Received an offer to settle, an apology with paperwork attached,
   or a "goodwill" payment
☐ None of these yet
```

This screen captures critical procedural posture that affects investigation urgency and tactical strategy. The "signed any paperwork" and "received an offer to settle" answers are the highest-value flags.

### Screen 9 — What you're hoping for

```
Heading: Why are you reaching out?

(Open text area — labeled as optional)

Many people are reaching out because they want to understand
what happened to them. Some are looking for a case to bring.
Some are trying to figure out their options. Some are reading
this for a family member who can't read it yet. Whatever brings
you here is the right thing to share.
```

This question surfaces reader intent. Some readers want a case. Some want information. Some want validation. The firm responds differently to each, and asking explicitly avoids the assumption that everyone who fills out the intake is looking to retain counsel.

### Screen 10 — How to reach you and submit

```
Heading: How should we reach you?

Your name                                    [Text — required]
Your email                                   [Email — required if no phone]
Your phone                                   [Phone — required if no email]

Best way to reach you
○ Email
○ Phone call
○ Text message
○ Any of these is fine

When is good to reach you? (Optional)
○ Morning
○ Afternoon
○ Evening
○ Anytime

[If reader-type is "family member" or "someone else helping"]
Would you like us to also have a way to reach the affected person?
○ Yes — here's their info
○ No — please contact only me
○ Not yet — we can decide that in our first conversation

[Final review and submit area]

What happens when you submit:
We'll review what you've shared within one business day. We'll
reach out by your preferred method to set up a first conversation.
There's no fee. No obligation. If we don't think we're the right
fit, we'll tell you that and suggest where you might look next.

[Submit →]
[Save and finish later]
```

---

## 4. Branching logic — decision flow

The intake's branching activates from two sources: the **source page** that brought the reader in, and the **reader's answers** within the intake itself.

**Source-page-driven branches** (set on entry):

| Source page family | Screen 4 (setting) | Screen 6 (vehicle preservation) | Screen 7 branch |
|---|---|---|---|
| Vehicle family (car, truck, motorcycle, bicycle, pedestrian, rideshare, bus, boating, ATV) | Skip | Conditional on prior answer | Vehicle branch |
| Defective-vehicle | Skip | **Required** | Vehicle branch |
| Slip-and-fall family (slip-and-fall, falls-from-heights, pool-drowning, elevator) | Skip | Skip | Premises branch |
| Workplace family (workplace-injury, construction-injury, machinery, industrial-explosion) | Skip | Skip | Workplace branch |
| Medical family (medical-malpractice, surgical-error, diagnostic-error, medication-error, hospital-negligence, birth-injury, nursing-home-abuse) | **Required** | Skip | Medical branch |
| Product family (product-recall, defective-medical-device, dangerous-pharmaceutical) | Conditional on product type | Skip | Product branch |
| Dog-bite | Skip | Skip | Premises + animal branch |
| Result overlays (TBI, wrongful-death) | Skip — handled in Screen 7 | Conditional on Screen 7 answer | Result-overlay branch (asks about underlying cause) |
| Negligent security | Skip | Skip | Premises + security branch |

**Answer-driven branches** (activate within the flow):

- Screen 2 "family member" + "they died" → Screen 9 framing softens further; Screen 10 family-contact question activates
- Screen 5 "more than a year ago" → Screen 7 may add a question on what prompted the reader to revisit now
- Screen 6 vehicle preservation answer "totaled" or "I don't know" → Screen 9 framing emphasizes that limited evidence does not always foreclose a case
- Screen 8 "received an offer to settle" → priority flag on submission notification to Mike

---

## 5. Data model — what gets captured

Each completed intake submission produces a structured record. Field naming follows the convention `category_field_name` for downstream parsing.

```
identity_reader_type          enum: self, family_living, family_deceased, other
identity_name                 string (required)
identity_email                string (required if no phone)
identity_phone                string (required if no email)
identity_preferred_contact    enum: email, phone, text, any
identity_preferred_time       enum: morning, afternoon, evening, anytime, null

source_page                   string (URL slug of originating /just-happened/* page)
source_referrer               string (URL of immediate previous page if available)

event_description             text (open from Screen 3)
event_date_approximate        date or date_range or null
event_location_city           string or null
event_location_state          string or null
event_location_facility       string or null

awareness_timeline            enum: today, within_two_weeks, within_month,
                                    within_year, over_year, still_constructing

setting                       multi-enum: hospital, pharmacy, nursing_home,
                                          clinic, home, multiple, prefer_conversation
                              (only populated if Screen 4 activated)

vehicle_status                enum: still_have, repaired, with_insurer, totaled,
                                    unknown, other
                              (only populated if Screen 6 activated)

branch_specific_answers       JSON object keyed by branch
                              (medical, vehicle, premises, workplace,
                               result_overlay, etc.)

procedural_posture            multi-enum: requested_records, got_second_opinion,
                                          spoke_with_party, filed_complaint,
                                          signed_paperwork, spoke_with_lawyer,
                                          received_offer, none_yet

intent                        text (open from Screen 9)

family_contact_preference     enum: contact_me_only, also_contact_affected,
                                    decide_in_conversation
                              (only populated for family_living or family_deceased
                               reader types)

submission_timestamp          datetime
submission_complete           boolean
session_id                    UUID (tied to saved-state)

flags                         array of strings; auto-set when high-priority
                              answers detected:
                              - "settlement_offer_received" — Screen 8 flag
                              - "preservation_at_risk" — vehicle totaled/unknown
                              - "deceased_subject" — reader_type = family_deceased
                              - "paperwork_signed" — Screen 8 flag
                              - "another_lawyer_spoken" — Screen 8 flag
```

---

## 6. Submission handling

On submission, the following happens in order:

1. **Validation.** Required fields (name + at least one contact method) verified. Other field validation is permissive — date formats accept ranges, text fields accept any length, no field rejects a submission for reasons other than missing required identity fields.

2. **People Portal account initialization.** A pre-account record is created in the People Portal with the submission data. The reader receives a confirmation email with a link to claim the account (verify email and set a password) or continue with a "magic link" sign-in. The reader does not need to claim the account before the firm reaches out — the firm has the submission regardless. *(Open question: confirm with Mike whether the People Portal account is fully created on submission or only initialized in a pre-account state pending email verification.)*

3. **Notification to Mike's MS365.** The firm's intake distribution list receives an email with a structured summary. Submissions tagged with priority flags (settlement_offer_received, preservation_at_risk, deceased_subject, paperwork_signed) are routed to a separate priority queue and include a header indicating which flag fired.

4. **Confirmation page to the reader.** Renders within the same browser session. Confirms what was submitted, what happens next, and how to expect contact. Includes the printable PDF reference for the source-page topic as a "while you wait" download. Does not include any tracking pixels, analytics calls, or third-party services.

5. **Confirmation email to the reader.** Sent within minutes. Contains a summary of what was submitted, a link to the People Portal to claim the account or save the submission, the firm's direct contact info, and a clear statement that the reader can reply to the email at any time.

6. **Audit log.** Submission, with full request payload, written to an audit log accessible only to the firm. Logs retain for the period required by record-keeping policy.

---

## 7. People Portal integration

The intake is the entry point to the People Portal for most readers. The relationship between the intake submission and the People Portal account is:

- **One submission = one People Portal account.** A reader who submits multiple intakes (e.g., for two different events, or because they came back later) creates linked records under the same account when identity-matched on email or phone.

- **Account state before claim.** A pre-account record exists in the People Portal from the moment of submission. The reader has not yet authenticated. Firm-side users can see the submission, mark it for follow-up, and prepare for the first conversation. The reader cannot yet log in.

- **Account claim.** The reader claims the account by clicking the link in the confirmation email and verifying their email (or by responding to firm outreach, in which case the firm can manually associate the inbound communication with the pre-account record). On claim, the account becomes a full People Portal account and the reader can log in.

- **Pre-account-to-full-account transition.** All data submitted in the intake is preserved through the transition. No data is lost or duplicated.

- **What the reader sees on first login.** A simplified dashboard reflecting their stage (typically "Application" or "Attorney Review" depending on firm-side action). The intake submission shows in their record.

The detailed People Portal architecture is specified separately in the People Portal product spec; this intake spec only defines the bridge between intake submission and Portal account.

---

## 8. Accessibility and sensitivity-aware design

Every screen in the intake meets WCAG 2.2 AA. Specific requirements that go beyond AA baseline:

- **Reduced-motion respected.** Any transition between screens uses `prefers-reduced-motion: reduce` where set. Motion can intensify physical and emotional discomfort for readers who are reading from a hospital bed, a recovery room, or a grieving home.

- **Minimum 16px body type.** Sized for readers with age-related vision changes, readers in poor lighting, and readers on mobile devices held at uncomfortable distances.

- **Keyboard accessibility for every input.** Submit button reachable by keyboard from every form field. Tab order matches reading order.

- **Screen reader compatibility.** Every form field has an associated label. Validation errors are announced. Required-field markers are read aloud.

- **Color contrast minimum 4.5:1 for body text, 3:1 for large text.** Against the Obsidian Graphite and Charcoal Slate backgrounds the marketing site uses.

- **Single-column layout on every screen.** Multi-column form layouts increase cognitive load. Mobile and desktop alike use single-column.

- **Save state visible on every screen.** "Saved a moment ago" indicator appears after each field-level save. The reader should never wonder whether their progress is being kept.

- **"Back" preserves data.** Returning to a previous screen displays what was previously entered, not a blank form.

---

## 9. Saved-state handling

Partial completion is a first-class feature.

**Save triggers:**

- Every field blur (after editing a field and moving away from it)
- Every screen transition
- Every "Save and continue later" click

**Storage approach:**

- Session token issued on Screen 1 entry, stored as an httpOnly cookie with a 90-day expiration
- Server-side store keyed by session token retains all in-progress submission data
- Saved sessions can be resumed by the original browser within 90 days
- "Email me my progress link" option allows resume on a different device (one-time-use magic link)

**Privacy on saved state:**

- Encrypted at rest
- No third-party access
- Cleared from server after either (a) submission, (b) 90-day expiration, or (c) reader request via the magic link

**Submitted-but-unverified state:**

If a reader submits but does not claim their People Portal account, their data remains in the firm-side record (the firm can still reach out). On the reader side, the magic link works for 30 days; after that, claiming requires firm assistance.

---

## 10. Open items for Mike's input

- **People Portal account creation timing.** Spec currently states the account is initialized in a pre-account state on submission and fully created on email verification. Confirm whether this matches the desired People Portal flow.
- **First-contact SLA.** Spec currently states "We'll review what you've shared within one business day." Confirm this matches the firm's actual practice and capacity.
- **Priority flag routing.** The five priority flags (settlement_offer_received, preservation_at_risk, deceased_subject, paperwork_signed, another_lawyer_spoken) currently route to a separate priority queue. Confirm Mike wants these flagged this way, and whether the routing should email Mike directly or go to a staff intake distribution.
- **Bar-advertising compliance review.** Submission confirmation email language and the confirmation page copy both need bar-advertising review before launch.
- **Data retention period for audit logs.** Confirm the retention period that matches record-keeping policy.
- **Spanish-language parallel intake.** Flagged across multiple page specs. Decision deferred. When activated, the intake will need full Spanish translation including the branch-specific questions; the data model stays the same.
- **High-sensitivity intake.** This spec does not cover active-shooter and sexual-abuse intakes, which retain inline specifications in those page specs. Confirm whether at any point those should be consolidated into a separate `_intake-high.md` document or remain inline.

---

## 11. Per-page configuration matrix

The matrix below shows which branches activate for which source pages. Use this to configure each page's Section 8 intake link with the appropriate URL parameters or context payload.

| Source page | Reader-type | Setting (Screen 4) | Vehicle preservation (Screen 6) | Screen 7 branch |
|---|---|---|---|---|
| `car-accident` | Active | Skip | Conditional | Vehicle |
| `truck-accident` | Active | Skip | Conditional | Vehicle |
| `motorcycle-accident` | Active | Skip | Conditional | Vehicle |
| `bicycle-accident` | Active | Skip | Conditional | Vehicle |
| `pedestrian-accident` | Active | Skip | Conditional | Vehicle |
| `rideshare-accident` | Active | Skip | Skip | Vehicle (rideshare-specific) |
| `defective-vehicle` | Active | Skip | **Required** | Vehicle + product |
| `slip-and-fall` | Active | Skip | Skip | Premises |
| `workplace-injury` | Active | Skip | Skip | Workplace |
| `construction-injury` | Active | Skip | Skip | Workplace |
| `product-recall` | Active | Conditional | Skip | Product |
| `medical-malpractice` | Active | **Required** | Skip | Medical |
| `surgical-error` | Active | **Required** (default: hospital) | Skip | Medical |
| `diagnostic-error` | Active | **Required** | Skip | Medical |
| `medication-error` | Active | **Required** | Skip | Medical |
| `hospital-negligence` | Active | **Required** (default: hospital) | Skip | Medical |
| `birth-injury` | Active | **Required** (default: hospital) | Skip | Medical (pediatric) |
| `nursing-home-abuse` | Active | **Required** (default: nursing_home) | Skip | Medical (LTC) |
| `dog-bite` | Active | Skip | Skip | Premises + animal |
| `traumatic-brain-injury` | Active | Skip | Skip | Result-overlay |
| `wrongful-death` | Active | Skip | Skip | Result-overlay |
| `active-shooter` | N/A — uses High-sensitivity inline intake | — | — | — |
| `sexual-abuse` | N/A — uses High-sensitivity inline intake | — | — | — |

**Default values for Screen 4 (setting):** Where a page has a clear default setting (surgical-error → hospital, nursing-home-abuse → nursing home), the corresponding option is pre-selected. The reader can change it.

---

*End of intake spec.*
