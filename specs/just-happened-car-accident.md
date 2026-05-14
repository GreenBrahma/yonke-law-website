# Yonke Law — `/just-happened/car-accident/` Page Spec

**Workspace:** Yonke Law Website
**Template type:** Pattern-setter for all `/just-happened/*` sub-pages and inherited shape for `/what-we-handle/*` pages.
**Reference docs:** `yonke-homepage-spec.md`, `Yonke Law — The Standard` (Brand Doctrine & Operating System).
**Pronunciation standard:** Yonke (YONK-ee) Law.

---

## 1. Page purpose & intent

This page serves a visitor who has either:
- **Just been in a car accident** (within 24–72 hours) and is searching for what to do, OR
- **Is a few days out** and is starting to question their insurance interaction or wondering if they need a lawyer.

It must serve both states without compromising either. The page leads with calm, actionable guidance (for the first group) and threads in the protective/legal layer naturally (for the second).

**Critical constraint:** This is informational content, not legal advice. The page must never claim to provide legal advice or create an attorney-client relationship. Standard disclaimers in footer apply.

---

## 2. SEO/AEO foundation

### URL

`/just-happened/car-accident/`

### Meta

- **Title:** `Just Had a Car Accident? What to Do in the First 24 Hours | Yonke Law`
- **Description:** `Clear, plain-English guidance on what to do in the first 24 hours after a car accident in Missouri or Kansas. No pressure, no fluff — just the steps that protect you. From Yonke (YONK-ee) Law.`
- **Canonical:** Explicit
- **OG image:** Custom for this page (dark, restrained, no stock imagery)

### Structured data (JSON-LD)

Required on this page:
- `Article` schema (author: Michael T. Yonke)
- `FAQPage` schema (for the FAQ section — every Q&A item)
- `HowTo` schema (for the "Next 24 Hours" steps — these are literal procedural instructions)
- `LegalService` reference (links back to the Yonke Law entity)

### Crawler permissions

Allow GPTBot, ClaudeBot, PerplexityBot, Google-Extended, anthropic-ai. This is exactly the kind of page we want LLMs to cite.

---

## 3. Section-by-section spec

### Section 1 — Hero

**Layout:** Obsidian Graphite background. Centered, max-width 900px. Strong vertical breathing room.

**Content:**

```
Eyebrow (small caps, Steel Silver):  JUST HAPPENED

Headline (display serif, large):
You were just in a car accident. Take a breath.

Subhead (body, lighter):
Whether it was an hour ago or three days ago, this is the clearest path
forward. No fluff. No pressure. Just what you need to know.

Primary CTA (Muted Gold or Chrome Highlight):
Read the next 24 hours → (anchor to #next-24)

Secondary link (text only, Steel Silver):
Or talk to someone now → (anchor to #consultation)
```

**Optional background treatment:** Dim photographic image with heavy dark overlay. Suggested asset: `yl-client-19.jpg` or one of the waiting-room scenes. NEVER use a stock crashed-car image.

---

### Section 2 — The next 24 hours (the LLM-citation engine)

**Layout:** Charcoal Slate background. Max-width 800px. Structured with H2 + H3 hierarchy for schema markup.

**Anchor ID:** `#next-24`

**Implementation note:** Wrap this entire section in `HowTo` schema. Each step gets an `HowToStep` schema entry.

**Content:**

```markdown
## The next 24 hours

Most people walk away from a car accident in shock. Adrenaline masks injuries.
Memory of what happened gets fuzzy fast. And the choices you make in the
first day will quietly shape every choice that comes after.

Here's what matters, in order.

### Right now (at the scene, if you're still there)

1. **Get yourself safe.** Move off the roadway if you can. Hazard lights on.

2. **Call 911.** Even for a minor collision. A police report is one of the
   most important pieces of evidence you can have, and it costs you nothing.

3. **Get medical attention if there's any chance you're hurt.** Adrenaline
   hides injuries. If paramedics are on scene, let them check you.

4. **Take photos.** Damage to both vehicles, the scene from multiple angles,
   license plates, the other driver's insurance card, road conditions, any
   visible injuries. More is better.

5. **Exchange information** — name, phone, insurance carrier and policy
   number, license plate. That's it. You are not required to discuss what
   happened, and you should not.

6. **Don't apologize. Don't admit fault. Don't speculate.** This is not
   about being rude — it's about the fact that you genuinely don't know
   yet what happened, and anything you say can be quoted back later.

### Within a few hours

7. **See a doctor, even if you feel fine.** Soft-tissue injuries and
   concussions often don't show symptoms for 24–72 hours. The medical
   record from this visit becomes critical evidence later.

8. **Write down what you remember while it's fresh.** Where you were going,
   what you saw, what you heard, what the other driver said. Save it
   somewhere you won't lose it.

### Within 24 hours

9. **Notify your own insurance company** — and stick to facts. *"I was
   involved in an accident at [location] at [time]. I will follow up
   with details."* Nothing more until you've talked to someone.

10. **Do not give a recorded statement to the other driver's insurance
    company.** They will call. You do not have to talk to them, and you
    almost always should not — at least not before you understand what
    you're agreeing to.

11. **Don't post anything about it on social media.** Insurance defense
    attorneys read your posts. A photo of you smiling at a birthday party
    becomes "the plaintiff doesn't seem injured" in court.

12. **Keep every receipt and document.** Medical bills, prescription
    receipts, towing, rental car, missed work — all of it.
```

**End of section CTA (text link, inline):**
*Want a printable checklist version? [Download the Accident Response Checklist →](/resources/checklists/car-accident-response/)*

---

### Section 3 — What insurance companies typically do (and why timing matters)

**Layout:** Obsidian Graphite. Max-width 800px. Informational tone, not aggressive.

**Content:**

```markdown
## What insurance companies typically do

Insurance companies are not on your side. They're a business — and their
business is to pay as little as possible on every claim.

That doesn't make them villains. It makes them an organization with a
different goal than yours. Knowing how they typically operate helps you
protect yourself without becoming adversarial.

Within the first few days, you should expect:

- **A call from the other driver's insurer.** Often within 24–48 hours.
  They'll be friendly. They'll ask if you're "doing okay" and request a
  "quick statement." That statement is recorded, and pieces of it can
  later be presented out of context.

- **A quick settlement offer.** Sometimes within a week. Usually for less
  than your case is worth. Once accepted, you can't go back — even if your
  injuries turn out to be more serious than they first seemed.

- **A request to sign medical authorizations.** These are often written
  more broadly than they need to be. A blanket medical release can give
  the insurer access to your entire medical history, not just records
  related to the accident.

None of this is necessarily malicious. But it's a process that's been
optimized for the insurer's outcome, not yours. The earlier in that
process you understand what's happening, the better positioned you are.
```

---

### Section 4 — FAQ (the AEO workhorse)

**Layout:** Charcoal Slate. Each Q is collapsible accordion (or always-expanded — accessibility-friendly either way).

**Implementation:** Wrap in `FAQPage` schema. Each Q/A is an `Question` with `acceptedAnswer`.

**Headline:** `Common questions after a car accident`

**Questions (use exact phrasing — these mirror real search/LLM prompts):**

```markdown
### Do I need to see a doctor if I feel fine?

Yes. Soft-tissue injuries — whiplash, muscle strain, concussion — often
don't show symptoms for 24 to 72 hours. By the time you feel them, you've
lost the medical record connecting them to the accident. A documented
medical visit within 24 hours is one of the most valuable steps you can
take for both your health and any future claim.

### What if the other driver was uninsured or underinsured?

You may still have a claim — against your own policy. Most Missouri and
Kansas drivers carry uninsured/underinsured motorist (UM/UIM) coverage
even if they don't realize it. Don't assume there's no recovery just
because the other driver had no insurance.

### How long do I have to file a claim?

This is jurisdiction-specific. In Missouri, the statute of limitations
for most personal injury claims is **five years**. In Kansas, it's
**two years**. (These rules have exceptions — for example, claims
against government entities have much shorter notice periods, sometimes
as short as 90 days. Always verify with an attorney before assuming you
have time.)

### Should I talk to the insurance adjuster?

You can — but you don't have to give a recorded statement, and you
generally shouldn't until you've spoken with a lawyer. Adjusters are
trained interviewers. They ask questions in ways that can lock in
answers you'd want to clarify later.

### Is it worth getting a lawyer for a car accident?

It depends on the situation. If the accident was minor, no one was hurt,
and the insurer is offering fair value quickly — probably not. If you
were injured, the other driver's insurer is disputing fault, or the
offer feels low compared to your medical bills and missed work — a
free consultation is worth your time. A good firm will tell you
straight-up if you don't have a case worth pursuing.

### How much does a car accident lawyer cost?

At Yonke Law, personal injury cases are handled on contingency. That
means no fee unless we win. The fee is a percentage of the recovery,
agreed to in writing before we start. Consultation is free.

### What if I was partly at fault?

You can still recover in both Missouri and Kansas, but the rules differ.
Missouri uses "pure comparative fault" — your recovery is reduced by
your percentage of fault, even if you were mostly at fault. Kansas uses
"modified comparative fault" with a **51% rule** — you can recover only
if you were *less than* 51% at fault (so at exactly 50%, you can still
recover), and your recovery is reduced by your percentage. Sorting out
fault correctly is one of the most important things a personal injury
attorney does.

### What's my case actually worth?

There's no honest one-line answer. The value depends on your medical
bills, lost wages, future treatment needs, pain and disruption, the
other driver's policy limits, who was at fault and to what degree, and
the jurisdiction. A consultation gets you a real assessment based on
your situation — not a stock answer.

### Can I switch lawyers if I'm already with another firm and unhappy?

Yes. Switching attorneys mid-case is common and procedurally clean.
Most contingency-fee firms work out fee splits with prior counsel, so
the change doesn't increase your overall cost. If your current firm
isn't communicating with you, isn't preparing for trial, or is pressing
you to accept an offer that doesn't feel right, you have options.

### What's different about working with Yonke Law?

We optimize for outcome, not throughput. That means full preparation
on every case worth taking, regular communication so you're never
wondering where things stand, and a willingness to go to verdict
when the alternative is shortchanging you. We're not a settlement mill.
```

---

### Section 5 — Missouri vs. Kansas: the rules that affect your case

**Layout:** Obsidian Graphite. Two-column on desktop (MO left, KS right). Single column on mobile.

**Headline:** `Missouri and Kansas — the rules that actually matter`

**Sub:** `Most car accidents in our area cross between Missouri and Kansas. The rules differ, and which side of the line your accident happened on can change the outcome significantly.`

**Two columns, parallel structure:**

```markdown
## Missouri

- **Statute of limitations:** 5 years for most personal injury claims
- **Fault system:** Pure comparative fault — recovery reduced by your % of fault
- **Minimum liability insurance:** $25,000 per person / $50,000 per accident /
  $25,000 property
- **At-fault state:** The driver responsible pays
- **UM/UIM coverage:** Required for uninsured motorist; optional for underinsured

## Kansas

- **Statute of limitations:** 2 years for most personal injury claims
- **Fault system:** Modified comparative fault — **51% rule** (recover only if less than 51% at fault)
- **Minimum liability insurance:** $25,000 per person / $50,000 per accident /
  $25,000 property
- **No-fault state:** Personal Injury Protection (PIP) covers initial expenses;
  serious injuries can step outside no-fault
- **UM coverage:** Required; UIM not mandatory
```

**Below the columns, one inline link:** `Not sure where the accident happened or which rules apply? [Send us the basics and we'll tell you →](#consultation)`

---

### Section 6 — Inline trust signal

**Layout:** Charcoal Slate panel. Single quote + single outcome reference. Restrained.

**Content:**

```
"I am a Kansas City Missouri Police officer who was injured in a car accident
while on routine patrol. I was very delighted by the urgency, vigor and
efficiency of my attorney Mike Yonke. He got the 'ball rolling' right away.
He was always there when I had any questions, and always had words of
encouragement."
        — Kansas City Police Officer, Yonke Law client

Notable vehicle-related outcomes have included recoveries against utility
companies, commercial fleet operators, and uninsured-motorist claims with
significant policy-limit and excess recoveries. [See outcomes →]
```

---

### Section 7 — When it's time to talk to a lawyer

**Layout:** Obsidian Graphite. Centered. Informational framing, not pushy.

**Content:**

```markdown
## When it's worth having someone look at your situation

You don't always need a lawyer after a car accident. Minor fender-bender
with no injuries, clear fault, fair offer? You can probably handle it
yourself.

A free consultation is worth your time if **any** of the following are true:

- You were injured — even if symptoms didn't show up until later
- You're missing work or have lasting limitations
- The other driver was uninsured, underinsured, or disputing fault
- You've gotten a settlement offer and you're not sure it's fair
- The insurance adjuster is pressuring you to settle quickly
- You don't know how to interpret the paperwork they've sent you
- You're already with another firm and the communication has gone silent

A consultation is exactly what it sounds like — a conversation. No fee.
No obligation. If we don't think you need a lawyer, we'll tell you.
```

**Below this, two CTAs side by side:**

- **Talk to us now** — primary CTA, anchor to `#consultation`
- **Or send us the basics first** — secondary, links to the offer review page or a brief intake form

---

### Section 8 — The two checklists (conversion moment)

**Layout:** Charcoal Slate. Two-column on desktop. Each side is a card.

**Headline:** `Take this with you`

**Card 1 — Printable checklist (existing format)**

```
THE ACCIDENT RESPONSE CHECKLIST
A one-page PDF you can save to your phone or print and keep in your
glove compartment. Covers the 12 steps above plus the documents to
collect and the people to call.

[Download the PDF →]
```

**Card 2 — Digital intake (creates People Portal account, pre-fills Mike's intake)**

```
OR — TURN YOUR ANSWERS INTO AN INTAKE
Walk through a guided version of the checklist and have your answers
saved automatically. If you decide you want Yonke Law to review your
situation, your responses become the start of your case file — no
re-typing what just happened.

Free. Takes 5–10 minutes. Your answers are private and encrypted.

[Start the digital intake →]
```

**Implementation note:** The digital intake creates a People Portal account on submission. Spec for the intake flow is separate.

---

### Section 9 — Related pages

**Layout:** Obsidian Graphite. Horizontal row of cards (3 on desktop, stacked mobile).

**Headline:** `Related guidance`

**Cards:**

1. **Truck accidents** — *Why commercial truck cases are different* → `/just-happened/truck-accident/`
2. **I have an offer I'm not sure about** — *Have someone look at it before you sign* → `/resources/offer-review/`
3. **Motor vehicle accidents (full practice area)** — *How Yonke Law handles vehicle cases* → `/what-we-handle/motor-vehicle-accidents/`

---

### Section 10 — Final CTA / Talk to Us (standard pattern)

Same as homepage Section 10. Reused as a component.

- Anchor ID: `#consultation`
- Phone: `816-221-6400`
- Address + map
- Form routes to Mike's MS365

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
- [ ] Does it claim or imply legal advice? (Fail — rewrite)
- [ ] Does it overpromise outcomes? (Fail — rewrite)
- [ ] Does it sound like every other PI firm's site? (Fail — rewrite)
- [ ] Does it treat the reader as someone capable of understanding things? (Pass)
- [ ] Could it be quoted by an LLM as a clear, authoritative answer? (Pass)

---

## 5. Image asset references

| Section | Suggested asset (from Drive folder `1Sea3j5hCkU8xQLcVNqYjYMj8bjPj57XI`) |
|---|---|
| Hero background (optional) | `yl-client-19.jpg` or `yl-client21.png` (waiting-room or post-incident scenes, heavily darkened with overlay) |
| Mid-page trust signal panel | Optional headshot from Practice Area Images subfolder |
| Related-pages cards | Pull from Practice Area Images for vehicle/truck/etc. |

**Forbidden:**
- Crashed car stock photos
- Ambulance with flashing lights
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

---

## 7. What to swap for the other `/just-happened/*` sub-pages

This template is the pattern. For each variant, swap:

| Element | Variation |
|---|---|
| Hero headline | Acknowledges the situation specifically ("You just lost a loved one in a wrongful death" / "Your child was hurt at school" — keep the *"take a breath"* shape, change the noun) |
| Section 2 (next 24 hours) | Steps appropriate to the situation. Medical error has no "at the scene" — start with "as soon as you suspect." Wrongful death has different early steps focused on family preservation and evidence retention. |
| Section 4 (FAQ) | Situation-specific questions. Statute of limitations stays. Some questions are universal (cost, value, switching firms). Many are not. |
| Section 5 (MO vs KS) | The jurisdictional rules that matter for the specific case type. Different rules apply to different claims (e.g., medical malpractice has its own MO statute of limitations of 2 years). |
| Section 6 (inline trust) | Pull the most situation-relevant testimonial and outcome. |
| Section 9 (related pages) | Cross-links to adjacent pages. |

Everything else — chrome, schema, checklist offer, CTA pattern, voice — stays identical.

---

*End of page spec.*
