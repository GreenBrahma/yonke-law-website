# Yonke Law — `/just-happened/sexual-abuse/` Page Spec

**Workspace:** Yonke Law Website
**Template type:** Variant of the `/just-happened/*` pattern. Inherits the shape of `just-happened-car-accident.md` with significant slowing of pace and trauma-informed adaptations.
**Reference docs:** `yonke-homepage-spec.md`, `just-happened-car-accident.md` (pattern-setter), `just-happened-active-shooter.md` (most analogous in pacing and trust-signal handling), `Yonke Law — The Standard` (Brand Doctrine & Operating System).
**Pronunciation standard:** Yonke (YONK-ee) Law.
**Sensitivity:** Highest on the site. Mike's review is required before any other reviewer. Bar-advertising compliance review required before publish.

---

## 1. Page purpose & intent

This page serves an adult survivor of sexual abuse or assault — most often someone who experienced abuse in an institutional context (school, church, sports program, healthcare setting, foster care, group home, workplace, college campus, scouting, or similar) — who is considering, slowly and on their own timeline, whether a civil case is something to learn more about.

The page also serves family members of survivors — parents of children who have disclosed, adult siblings supporting a sibling, spouses of survivors who have begun talking about what happened.

It must serve readers across many different stages: someone who experienced abuse last week, someone who experienced abuse decades ago and is only now beginning to consider their options, someone who has been working with a therapist for years, someone who has never told anyone. The page does not require disclosure of any kind. It does not require the reader to identify themselves as a survivor, even silently. It exists as a resource.

**Critical constraints:**

- This is informational content, not legal advice. The page must never claim to provide legal advice or create an attorney-client relationship.
- The page must be trauma-informed throughout. Voice and pacing are non-negotiable; if a line of copy would feel pressuring, performative, or fear-leveraging when read by a survivor in a difficult moment, it must be rewritten.
- The page must not contain imagery that could be triggering. See Section 5 (Image Asset References) for explicit guidance.
- The page must not require the reader to take action. Reading is a complete interaction.
- Standard disclaimers in footer apply. The full disclaimer block is non-negotiable on this page.

---

## 2. SEO/AEO foundation

### URL

`/just-happened/sexual-abuse/`

### Meta

- **Title:** `Sexual Abuse Civil Cases: What Survivors Should Know | Yonke Law`
- **Description:** `Plain-language guidance for adult survivors of sexual abuse — including childhood abuse and institutional cases involving schools, churches, sports, healthcare, and workplaces in Missouri and Kansas. There is no clock on this page. From Yonke (YONK-ee) Law.`
- **Canonical:** Explicit
- **OG image:** Custom. Restrained. Distance and time. No human figures. No interiors that could read as institutional. See Section 5 below.
- **robots:** `index, follow` — but the OG image must be reviewed for how it appears in social previews and chat-app link unfurls. The image must not be triggering when previewed.

### Structured data (JSON-LD)

Required on this page:
- `Article` schema (author: Michael T. Yonke)
- `FAQPage` schema (for the FAQ section — every Q&A item)
- `HowTo` schema (for the procedural steps in Section 2, with timing descriptions that do not impose urgency)
- `LegalService` reference (links back to the Yonke Law entity)

### Crawler permissions

Allow GPTBot, ClaudeBot, PerplexityBot, Google-Extended, anthropic-ai. Survivors researching their options frequently arrive through LLM-mediated search, and the responsible thing is for those searches to surface accurate, calibrated information rather than billboard-style advertising.

---

## 3. Section-by-section spec

### Section 1 — Hero

**Layout:** Obsidian Graphite background. Centered, max-width 900px. The most generous vertical breathing room on the site.

**Content:**

```
Eyebrow (small caps, Steel Silver):  JUST HAPPENED

Headline (display serif, large):
You've been carrying this. Take a breath.

Subhead (body, lighter):
There is no clock on this page. There is no decision required today.
Whatever the path forward looks like — therapy, family, criminal
reporting, a civil case, or nothing for now — this page exists to
explain what civil cases for sexual abuse and institutional liability
actually are, in Missouri and Kansas, on your timeline.

Primary CTA (Muted Gold or Chrome Highlight):
Read what to know → (anchor to #what-to-know)

Secondary link (text only, Steel Silver):
Or talk to someone, when you're ready → (anchor to #consultation)
```

**Optional background treatment:** Dim photographic image with heavy dark overlay. The visual must signal distance, time, and quiet. Suggested imagery: an open horizon at first light, water at calm with no shoreline visible, a tree-lined path at distance. **Never** a human figure, an interior space that could read as institutional, religious imagery, school imagery, hands, dark hallways, or any composition that could be triggering. If no existing Drive asset matches this brief, commission or license a new image rather than compromising.

---

### Section 2 — What to know (the LLM-citation engine)

**Layout:** Charcoal Slate background. Max-width 800px. Structured with H2 + H3 hierarchy for schema markup.

**Anchor ID:** `#what-to-know`

**Implementation note:** Wrap this entire section in `HowTo` schema. Each step gets an `HowToStep` schema entry. Step descriptions in the rendered text must not use time-pressure language. The section opens with a visually distinct callout box containing crisis-resource information.

**Content:**

```markdown
## What to know

Sexual abuse cases are not built on timing. They are built on the
survivor's readiness, on the evidence that can be reconstructed, and
on the legal framework that applies to the specific situation. The
work, when there is work to do, happens at the pace the survivor sets.

These steps are written for that pace. None of them are required
today. None of them are required at all.

[CALLOUT BOX — visually distinct, set apart from the body of the section]
─────────────────────────────────────────────────────────────────
If you are in crisis or need support right now, the RAINN National
Sexual Assault Hotline is staffed 24/7 by trained advocates:
1-800-656-HOPE (4673), or online chat at online.rainn.org.

If you are in mental health crisis, the 988 Suicide & Crisis Lifeline
is also available by call or text.

These resources are independent of Yonke Law. We do not receive
information from them. We do not refer to them in expectation of
contact in return.
─────────────────────────────────────────────────────────────────

### Before anything else

1. **There is no requirement to disclose what happened to anyone —
   including a lawyer — until you are ready.** Reading this page is
   not a step toward any decision. Visiting a lawyer's website is
   not a step toward any decision. A consultation, if you ever have
   one, is a conversation you control entirely.

2. **If you are in crisis, the legal questions can wait.** Mental
   health support, safety, and immediate well-being come first. A
   civil case can be brought weeks, months, or — in many situations
   — years after the work of taking care of yourself is done.

### In the days, weeks, or years ahead, when you are ready

3. **Work with a trauma-informed therapist, if you can.** This is
   for your wellbeing, not for the case. But the case, if there
   eventually is one, is significantly easier when the survivor
   already has a therapeutic relationship in place. Therapists who
   work with trauma understand the documentation issues that arise.

4. **Preserve what you have — at your own pace.** Any contemporaneous
   records: journals, letters, emails, texts, photos, voicemails.
   The names and contact information of anyone you may have disclosed
   to over the years. Therapy records. Medical records that reflect
   the abuse or its effects. None of this has to be assembled in
   a single sitting.

5. **Do not contact the alleged perpetrator or the institution
   directly to demand answers.** Even if it feels necessary. Direct
   contact can affect the case. It can also be retraumatizing. An
   attorney can investigate without putting the survivor in direct
   communication with the people involved.

6. **Understand what paths exist — and choose intentionally.**
   Criminal reporting is one path. A civil case is another. State
   licensing complaints (against healthcare providers, teachers,
   clergy in some structures, coaches) are another. Internal
   institutional reporting is another. These paths are independent.
   A survivor can pursue some, all, or none of them, in any order.
   Some of them have their own timing pressures, which is itself
   one of the questions worth asking a lawyer in a first conversation.

### Before key decisions

7. **Be careful about disclosures to people connected to the
   institution.** If the abuse happened in a workplace, a school,
   a church, a sports program, or a healthcare setting, the
   institution may have its own response process. Some of those
   processes are genuine. Some are designed to contain liability.
   An attorney can help navigate which is which before the survivor
   commits to a particular institutional channel.

8. **Ask about timing — but do not be rushed by it.** Statutes of
   limitations for sexual abuse cases have changed significantly in
   recent years in many states, including in some respects in
   Missouri and Kansas. Some cases that were time-barred a decade
   ago may not be time-barred now. Some cases that are timely today
   may not be in two years. This is a question to ask a lawyer in
   a first conversation, not something to research alone.

9. **A first conversation with a lawyer can be entirely on your
   terms.** No disclosure of specific details unless you choose. No
   commitment to bringing a case. No pressure to make decisions,
   then or later. The conversation exists to learn what civil cases
   for sexual abuse and institutional liability look like — what
   they require, what they can achieve, what they cost emotionally
   — and to decide whether moving forward makes sense for *you*.
```

**End of section CTA (text link, inline):**
*Want a printable version to take with you? [Download the Survivor Reference →](/resources/checklists/sexual-abuse-survivor-reference/)*

---

### Section 3 — What institutions typically do

**Layout:** Obsidian Graphite. Max-width 800px. Informational tone.

**Content:**

```markdown
## What institutions typically do

When a survivor begins to consider a civil case — or when an
institution learns that a former member or employee has been credibly
accused — the institution responds on a refined playbook. Many large
institutional defendants have been through this many times. The first
time a survivor speaks to the institution, the institution is operating
with the benefit of every prior case it has handled.

You should expect, depending on the institution and the circumstances:

- **An offer of an apology — sometimes paired with conditions.** Some
  apologies are sincere. Some come with confidentiality agreements,
  releases, or non-disclosure paperwork attached. Read every document
  carefully. Sign nothing under emotional pressure.

- **An offer to pay for therapy.** This is sometimes offered as
  pastoral care, sometimes as employee assistance, sometimes as a
  good-faith gesture. It is also sometimes offered in exchange for
  releases or silence. The form of the offer matters more than the
  fact of it.

- **A reference to an internal investigation.** Many institutions
  conduct internal investigations after a credible accusation. The
  reports from those investigations may or may not be made available
  to the survivor. They may or may not have legal protections in
  litigation. An attorney can help understand what the investigation
  did and did not produce.

- **A statute-of-limitations defense.** If the case is older, the
  institution's first legal response is often that the case is
  time-barred. This is a complex question — and one where recent
  legal changes in Missouri and Kansas have meaningfully shifted
  what is and is not possible. It is not a question that can be
  answered without looking at the specific facts.

- **A reference to a bankruptcy or class settlement.** Some large
  institutional defendants — including national religious
  organizations, scouting organizations, and athletic governing
  bodies — have filed for bankruptcy or established class
  settlements that affect what individual claims look like. Whether
  a particular survivor's claim falls inside or outside one of
  those structures is a fact-specific question.

None of this is necessarily improper. It is, however, a coordinated
process. The earlier in the process a survivor understands what is
happening, the better positioned they are to make choices that fit
their situation rather than the institution's.
```

---

### Section 4 — FAQ (the AEO workhorse)

**Layout:** Charcoal Slate. Each Q is collapsible accordion (or always-expanded — accessibility-friendly either way).

**Implementation:** Wrap in `FAQPage` schema. Each Q/A is a `Question` with `acceptedAnswer`.

**Headline:** `Common questions from survivors`

**Questions:**

```markdown
### Who can be sued in a sexual abuse case?

The perpetrator can be sued directly. Many sexual abuse cases also
involve a civil claim against an institution — a school, a church or
diocese, a sports organization, a healthcare facility, a foster-care
agency, an employer, or another entity — whose decisions about hiring,
supervision, training, reporting, or response contributed to what
happened. Institutional cases are typically the larger and more
practical path to compensation, because individual perpetrators are
often without assets.

### What is institutional liability?

Institutional liability is a civil claim against an organization for
its own conduct — most often for negligent hiring, negligent
supervision, negligent retention, failure to report, failure to warn,
or failure to investigate prior complaints. It is not about whether
the institution committed the abuse. It is about whether the
institution's decisions made the abuse possible, allowed it to
continue, or prevented it from being discovered.

### How long do I have to file a sexual abuse case in Missouri?

For abuse that occurred when the survivor was a minor, Missouri's
statute generally allows a claim to be brought within 10 years of the
survivor turning 21, or within 3 years of the date the survivor
discovered (or reasonably should have discovered) that an injury was
caused by the abuse — whichever is later. *(MIKE: confirm § 537.046
current text and recent amendments, and confirm framework for adult
sexual assault cases.)* Other framings of the case may have different
timelines. This is one of the most important questions to ask a
lawyer.

### How long do I have to file a sexual abuse case in Kansas?

For abuse that occurred when the survivor was a minor, Kansas
generally allows a claim to be brought within 13 years of the survivor
turning 18, or within 3 years of the date the survivor discovered (or
reasonably should have discovered) that an injury was caused by the
abuse — whichever is later. *(MIKE: confirm K.S.A. 60-523 current
text, and confirm framework for adult sexual assault cases under
K.S.A. 60-514 and related provisions.)*

### Can I bring a civil case if there was no criminal conviction?

Yes. A civil case is independent of a criminal case. A criminal
conviction can be helpful evidence, but it is not required. The
burden of proof in a civil case is lower — a preponderance of the
evidence rather than beyond a reasonable doubt — which is why
survivors sometimes recover civilly in situations where no criminal
charges were ever brought or where a criminal case did not result in
conviction.

### Do I have to use my real name in court filings?

In many jurisdictions, survivors of sexual abuse can file under a
pseudonym (often "Jane Doe" or "John Doe") to protect their identity.
Whether a particular court will allow it depends on the jurisdiction,
the case, and the specific facts. It is one of the questions worth
asking in a first conversation. Confidentiality concerns are taken
seriously and addressed early.

### What if the abuse happened decades ago?

It may still be possible to bring a case. Statute-of-limitations
frameworks for sexual abuse have changed significantly in recent
years, particularly for abuse that occurred during childhood. Whether
a particular older case is timely depends on the survivor's age at
the time, the date of the abuse, the institutional context, the date
the survivor first connected the abuse to its effects, and the
current state of the law in the relevant jurisdiction. None of this
can be answered without looking at the specific facts.

### What if I never told anyone at the time?

Delayed disclosure is the rule, not the exception, in sexual abuse
cases. Decades of research and clinical experience show that most
survivors do not disclose immediately — and often do not disclose for
years or decades, if ever. The law has increasingly recognized this
reality, and the absence of contemporaneous disclosure is not, by
itself, a barrier to bringing a case.

### What does Yonke Law actually need from me to evaluate a case?

A first conversation requires nothing more than the survivor's name
and a way to reach them. The conversation itself can be at whatever
level of detail the survivor is comfortable with. Specific
documentation — therapy records, journals, communications, witness
contacts — is helpful when a case moves forward, but it is not
required to start a conversation. The conversation is to learn what
civil cases look like, not to test the survivor's account.

### Will I have to face the abuser in court?

Most civil cases settle. The majority of sexual abuse cases do not
reach trial, and many do not involve the survivor being in the same
room as the perpetrator at any stage. When trial is necessary, modern
courts often accommodate trauma-informed practices — including video
testimony, separate-room arrangements, and other measures. This is
one of the practical concerns an attorney addresses early.
```

---

### Section 5 — Missouri vs. Kansas: the rules that matter

**Layout:** Obsidian Graphite. Two-column on desktop, stacked on mobile.

**Content:**

```markdown
## Missouri

- **Childhood sexual abuse SOL:** The later of (a) 10 years past the
  survivor's 21st birthday, or (b) 3 years from the date the
  survivor discovered the injury was caused by the abuse (§ 537.046)
  *(MIKE: confirm current text and any recent amendments)*
- **Adult sexual assault SOL:** Variable by framing — general
  personal injury (5 years under § 516.120), specific intentional
  tort (2 years under § 516.140), or under § 537.046 in certain
  contexts. *(MIKE: confirm.)*
- **Institutional liability theories:** Negligent hiring, supervision,
  and retention; failure to warn; failure to report; premises
  liability; vicarious liability in limited circumstances
- **Pseudonym filings:** Permitted by court order in appropriate cases
- **Non-disclosure agreements:** Subject to scrutiny; some are
  unenforceable as against public policy *(MIKE: confirm current
  case-law treatment)*

## Kansas

- **Childhood sexual abuse SOL:** The later of (a) 13 years past
  the survivor's 18th birthday, or (b) 3 years from the date the
  survivor discovered the injury was caused by the abuse
  (K.S.A. 60-523) *(MIKE: confirm current text and any recent
  amendments)*
- **Adult sexual assault SOL:** Variable by framing — general
  personal injury (2 years under K.S.A. 60-513(a)(4)), specific
  intentional tort (1 year under K.S.A. 60-514). *(MIKE: confirm
  current framework for negligence-against-institution claims in
  adult cases.)*
- **Institutional liability theories:** Negligent hiring, supervision,
  and retention; failure to warn; failure to report; premises
  liability; vicarious liability in limited circumstances
- **Pseudonym filings:** Permitted by court order in appropriate cases
- **Non-disclosure agreements:** Subject to scrutiny; some are
  unenforceable as against public policy *(MIKE: confirm current
  case-law treatment)*
```

**Below the columns, one inline link:** `Not sure which state's rules apply, or how recent legal changes might affect your situation? [Send us the basics and we'll tell you →](#consultation)`

---

### Section 6 — Inline trust signal (Mike input required)

**Layout:** Charcoal Slate panel. The most restrained trust-signal section on the site.

**Implementation note:** A quoted testimonial from a survivor of sexual abuse is appropriate only in extraordinary circumstances and only with the survivor's explicit, written, fully informed consent — typically only when the survivor has chosen to be publicly identified for their own reasons. The default for this page is **no testimonial**. Three options, in order of preference:

1. **No quoted testimonial** — replace the section with a brief, signed statement from Mike about how the firm handles sexual abuse and institutional liability cases. Recommended default.
2. **Anonymous outcome reference** — a plain, restrained reference to recoveries in institutional cases, with no quote, no survivor detail, and no specific dollar figure. No identifying details about any specific case.
3. **Survivor-consented quoted testimonial** — only when the survivor has explicitly chosen to be public about their case, has given written informed consent reviewed by an independent attorney, and the use has been cleared for bar-advertising compliance.

**Placeholder content (Mike to replace — recommended default is Option 1):**

```
[MIKE INPUT REQUIRED — choose option 1, 2, or 3 above.]

A note from Mike Yonke:
Cases like these are handled at the survivor's pace. We do not
solicit details. We do not pressure for decisions. We do not promote
specific cases or specific outcomes — the survivors who have trusted
us with their stories did so on the understanding that their privacy
would be honored. If you are reading this and wondering whether to
reach out, know that the conversation is on your terms, fully and
without exception.
```

---

### Section 7 — When it's time to talk to a lawyer

**Layout:** Obsidian Graphite. Centered. Informational framing.

**Content:**

```markdown
## When it's worth having someone look at your situation

Not every survivor needs a lawyer. For some, the right path is a
therapist and time. For some, it is a criminal report. For some, it
is the protection of their own privacy and nothing more. The question
is whether having a conversation makes sense for *this* survivor, in
*this* situation, at *this* moment — and the only person who can
answer that is the survivor.

A free, confidential consultation is worth your time if **any** of
the following are true:

- You experienced sexual abuse or assault — recently or long ago —
  and want to understand what civil cases actually look like
- The abuse happened in an institutional setting (a school, a
  church, a sports program, a healthcare setting, a workplace, a
  foster-care or group-home setting, or a similar context)
- An institution has reached out to you with an apology, a
  settlement offer, a request to sign paperwork, or a "patient
  relations" or "pastoral care" framing
- You have heard about other survivors of the same perpetrator or
  the same institution
- A criminal case is pending, has concluded, or will not be brought
  — and you are wondering whether civil action is also possible
- You have read about a statute-of-limitations change, a revival
  window, or a bankruptcy settlement, and you are not sure how it
  applies to you
- You simply want to understand what you don't currently know,
  without committing to anything

A consultation is exactly what it sounds like — a conversation. No
fee. No obligation. No pressure to move forward, then or later. The
disclosure level is entirely yours to set. If we do not think a case
can be brought, or if we think a different path is right for you, we
will tell you.
```

**Below this, two CTAs side by side:**

- **Talk to us, when you're ready** — primary CTA, anchor to `#consultation`
- **Or send us a brief message** — secondary, links to a low-disclosure intake form

---

### Section 8 — Two paths forward (conversion moment)

**Layout:** Charcoal Slate. Two-column on desktop. Each side is a card.

**Headline:** `When you're ready`

**Card 1 — Printable reference**

```
THE SURVIVOR REFERENCE
A short PDF that walks through what we just covered — what to know,
what not to sign, how Missouri and Kansas law differ, and the
questions worth asking when you decide it is time to talk. Save it.
Print it. Read it as many times as you need.

[Download the PDF →]
```

**Card 2 — Brief message (modified from standard digital intake)**

```
OR — SEND A BRIEF MESSAGE
The intake on this page is intentionally short. You decide what to
share. A first name, a way to reach you, and a few words about what
you'd like to talk through is enough to start a conversation. You
can pause partway, return later, or never return. There is no
follow-up unless you ask for one.

Free. Confidential. Your information is private and encrypted, and
is not shared with anyone outside Yonke Law.

[Send a brief message →]
```

**Implementation note:** The intake on this page should be **fundamentally different** from the standard People Portal intake used elsewhere on the site. Specifically:

- Start with the lowest possible disclosure threshold (name, email, one open text field)
- No required fields beyond name and contact method
- No questions about specific abuse, perpetrator, or institution unless the user chooses to enter them
- Save partial completions and allow the user to return without re-entering
- No automated follow-up emails — outreach only happens if the user explicitly requests it
- Clear language on every screen about who sees the submitted information and what happens to it
- A "stop and leave" button visible on every screen

Spec for this modified intake flow is separate and warrants its own design review.

---

### Section 9 — Related pages

**Layout:** Obsidian Graphite. Horizontal row of cards (3 on desktop, stacked mobile).

**Headline:** `Related guidance`

**Cards:**

1. **If the institution failed in other ways** — *Negligent security and institutional liability after violent harm* → `/just-happened/active-shooter/`
2. **If the abuse occurred in a workplace** — *Workplace harassment, assault, and third-party claims* → `/just-happened/workplace-injury/`
3. **If the survivor has died** — *Wrongful death and survivor's loss* → `/just-happened/wrongful-death/` *(Mike: confirm whether this cross-link is appropriate or should be omitted as too sensitive)*

---

### Section 10 — Final CTA / Talk to Us (standard pattern, modified)

Same as homepage Section 10. Reused as a component, with significantly modified language for this page.

- Anchor ID: `#consultation`
- Phone: `816-221-6400`
- Address + map
- Form routes to Mike's MS365
- Form heading: *"Reach out when you're ready. The level of detail you share is entirely up to you. There is no obligation in a first conversation."*

---

### Section 11 — Footer (standard, reused)

Same as homepage. Reused as the shared `<Footer />` component.

**Must include the full disclaimer block** (see homepage spec Section 11 for exact required language). The disclaimer is non-negotiable and appears identically on every page of the site.

---

## 4. Voice & tone enforcement checklist

Every line of copy on this page should pass these tests. If a line fails, rewrite. The bar is higher on this page than anywhere else on the site.

- [ ] Does it sound like a calm, informed friend explaining the situation? (Pass)
- [ ] Does it sound like a TV ad lawyer? (Fail — rewrite)
- [ ] Does it use fear tactics? (Fail — rewrite)
- [ ] Does it use survivor pain as a marketing lever? (Fail — rewrite)
- [ ] Does it claim or imply legal advice? (Fail — rewrite)
- [ ] Does it overpromise outcomes? (Fail — rewrite)
- [ ] Does it pressure the reader to act today, or this week, or at all? (Fail — rewrite)
- [ ] Does it use language that pathologizes the survivor's response, including delayed disclosure or contradictory feelings? (Fail — rewrite)
- [ ] Does it require the reader to disclose anything to read the page? (Fail — rewrite)
- [ ] Does it treat the reader as someone capable of understanding things? (Pass)
- [ ] Could it be quoted by an LLM as a clear, authoritative answer that survivors would find reassuring rather than performative? (Pass)
- [ ] Does the page work for a survivor reading at week one, year ten, and year forty? (Pass)

---

## 5. Image asset references

| Section | Suggested asset (from Drive folder `1Sea3j5hCkU8xQLcVNqYjYMj8bjPj57XI`) |
|---|---|
| Hero background (optional) | An open horizon at first light, water at calm with no shoreline visible, or a tree-lined path at distance. Heavily darkened with overlay. If no existing asset matches the brief, commission or license a new image rather than compromising. |
| Mid-page Section 6 trust signal panel | No image — recommendation is for no trust-signal imagery on this page at all. |
| Related-pages cards | Pull restrained imagery from Practice Area Images for the cross-link pages. Same trauma-informed selection criteria. |

**Forbidden:**
- Human figures of any kind, especially children
- Interior spaces that could read as institutional (classrooms, sanctuaries, locker rooms, hospital corridors, courthouses, judge's chambers)
- Religious imagery, including crosses, candles, religious clothing — even for clergy-abuse contexts, where it would be triggering
- School imagery — desks, chalkboards, hallways with lockers
- Hands, especially adult hands and children's hands
- Dark hallways, dark stairwells, dark doorways
- Sports imagery — uniforms, equipment, locker rooms
- Stock photos of "concerned women" or "thoughtful survivors"
- Courtroom imagery
- Gavels, scales of justice
- Lawyer-with-arms-crossed
- Generic Kansas City skyline at sunset
- Anything that could function as a trigger for a survivor in a difficult moment

---

## 6. Accessibility minimums

- All numbered steps in Section 2 are reachable by keyboard with logical tab order
- FAQ accordions (if used) have proper `aria-expanded` state
- Heading hierarchy clean (H1 → H2 → H3, no skips)
- Color contrast verified WCAG 2.2 AA against Obsidian Graphite and Charcoal Slate backgrounds
- All inline links have descriptive text (no "click here")
- Pronunciation hint on first instance of "Yonke" via `aria-label="Yonke, pronounced YONK-ee"`
- Reduced-motion handling: any subtle animations respect `prefers-reduced-motion: reduce`. This is the most important page on the site for this — any motion that draws attention can be triggering.
- The "stop and leave" button in the Section 8 intake is reachable by keyboard from every screen and is the first interactive element in tab order.

---

## 7. Statutes and facts that need Mike's confirmation

Flag each item visually in the build until Mike signs off. This page has the most consequential statute-confirmation requirements on the site, because the law has been changing rapidly.

- Missouri § 537.046 — childhood sexual abuse statute of limitations. Confirm current text, current age-of-discovery framework, and any recent legislative amendments.
- Missouri adult sexual assault — confirm applicable framework under § 516.120 (5-year PI), § 516.140 (2-year intentional tort), § 537.046 (where applicable), and any other provisions.
- Missouri institutional liability theories — confirm current case-law treatment of negligent hiring/supervision/retention claims against schools, churches, and other institutions in sexual abuse contexts. Confirm any qualified-immunity issues for public institutions.
- Missouri pseudonym filings — confirm current procedural rules and case-law treatment.
- Missouri NDA/release enforceability in sexual abuse contexts — confirm current case-law and any statutory limits.
- Kansas K.S.A. 60-523 — childhood sexual abuse statute of limitations. Confirm current text and any recent amendments.
- Kansas adult sexual assault — confirm applicable framework under K.S.A. 60-513(a)(4) (2-year PI), K.S.A. 60-514 (1-year intentional tort), and any other provisions.
- Kansas institutional liability theories — confirm current case-law treatment.
- Kansas pseudonym filings — confirm current procedural rules.
- Kansas NDA/release enforceability in sexual abuse contexts — confirm.
- Federal Title IX / Title VII overlay — confirm whether and how the page should reference these frameworks for education and employment contexts.
- Federal bankruptcy contexts — confirm whether the page should reference specific institutional bankruptcies (Boy Scouts, Catholic dioceses, USA Gymnastics, etc.) generally or by name. Recommendation: reference generally; do not name specific institutions.
- RAINN and 988 references in Section 2 — confirm Mike is comfortable with the inclusion. Recommendation: include both.
- Bar-advertising compliance review on the entire page. Required before publish.

---

## 8. Open items

- Confirm Mike's review of the entire page before any other reviewer. This is the single most sensitive page on the site.
- Confirm hero image selection. The "open horizon / calm water / tree-lined path at distance" brief is intentional. If no existing Drive asset matches, this page warrants a commissioned or licensed new image — and the selection should be reviewed by someone with trauma-informed design experience if at all possible.
- Confirm Section 6 default — recommendation is Option 1 (no testimonial, replaced with Mike's signed statement).
- Confirm the modified intake design (Section 8 Card 2). The intake on this page must be fundamentally different from the standard People Portal intake. The "stop and leave" button is a non-trivial design element. This is a separate workstream.
- Confirm the Section 9 cross-link to `/just-happened/wrongful-death/` is appropriate. The recommendation is yes, but with sensitivity — some survivors are also grieving a fellow survivor who has died, and the cross-link should be visible without being prominent.
- Decide whether separate sub-pages should be built for specific institutional contexts (clergy abuse, school abuse, sports/coaching abuse, healthcare abuse, foster care, college campus). These would be Tier 2 pages following the template, but each requires its own trauma-informed pacing and its own evidence/legal-framework calibration. Flag as a future workstream.
- Decide whether to add a Spanish-language parallel. Recommendation: yes, but only with a translator who has experience with trauma-informed content. This is not a "translate everything literally" workstream.
- Decide whether to add a footer reference linking to additional survivor resources (state coalitions against sexual assault, RAINN, 988, local victim services). Recommendation: include a short, plain-text reference at the bottom of the page, separate from the firm footer.
- Confirm whether "Related reading" links should be live now (with placeholder routes for pages not yet built) or hidden until those pages exist.

---

*End of page spec.*
