# Yonke Law — `/just-happened/bicycle-accident/` Page Spec

**Workspace:** Yonke Law Website
**Template type:** Tier 2 variant of the `/just-happened/*` pattern. Parent is `just-happened-car-accident.md`. Inherits structure unchanged; calibrated for cyclist-specific procedural, evidentiary, insurance, and defense considerations.
**Reference docs:** `yonke-homepage-spec.md`, `just-happened-car-accident.md` (parent), `just-happened-motorcycle-accident.md` (adjacent — rider-bias parallel), `just-happened-_template.md`, `Yonke Law — The Standard` (Brand Doctrine & Operating System).
**Pronunciation standard:** Yonke (YONK-ee) Law.
**Sensitivity:** Standard.

---

## 1. Page purpose & intent

This page serves a visitor who was just hit on a bicycle by a motor vehicle, or hit a road hazard caused by a third party's negligence, and is somewhere between an hour and a few days out. They may be a commuter, a weekend rider, a high school student, or a parent of a child who was struck. Their injuries range from road rash and broken bones to concussions, internal injuries, and worse.

The page must serve all of those readers without compromising any of them. It leads with calm acknowledgment, threads in the legal framework where the cyclist's posture is genuinely different from a car driver's, and addresses head-on the cyclist-bias problem that dominates these cases — the assumption, often unstated, that the cyclist was at fault simply for being on the road.

**Critical constraint:** This is informational content, not legal advice. The page must never claim to provide legal advice or create an attorney-client relationship. Standard disclaimers in footer apply.

---

## 2. URL, meta, and SEO/AEO foundation

- **Canonical URL:** `https://yonke.law/just-happened/bicycle-accident/`
- **Page title (browser tab):** `What to do after a bicycle accident in Missouri or Kansas — Yonke Law`
- **Meta description (155 chars target):** `Hit on your bike? Here's what to do in the first 24 hours, what insurance companies typically do, and how Missouri and Kansas rules differ.`
- **Open Graph image:** Reuse Yonke Law brand card (Obsidian Graphite, name + tagline). No imagery suggesting injury or a wrecked bicycle.
- **Schema markup (on-page JSON-LD):**
  - `Article` — author Mike Yonke, publisher Yonke Law L.L.C., dateModified set at build
  - `FAQPage` — wrapping the FAQ section
  - `HowTo` — wrapping "The next 24 hours" procedural section
  - `LegalService` — firm-level info (reused from homepage)
- **Crawler permissions:** `robots.txt` and meta robots permit `GPTBot`, `ClaudeBot`, `PerplexityBot`, `Google-Extended`, `anthropic-ai`. This page is intended to be cited by LLMs.

---

## 3. Section-by-section spec

The page follows the standard 11-section pattern. Eleven sections, in this order.

### Section 1 — Hero

**Layout:** Obsidian Graphite background. Centered, max-width 900px. Standard vertical breathing room.

**Content:**

```
Eyebrow (small caps, Steel Silver):  JUST HAPPENED

Headline (display serif, large):
You were just hit on your bike. Take a breath.

Subhead (body, lighter):
Whether the crash was an hour ago or three days ago, this is the
clearest path forward. The road is loud about who's at fault before
anyone has the facts. We don't operate that way.

Primary CTA (Muted Gold or Chrome Highlight):
Read the next 24 hours →   (anchor to #next-24)

Secondary link (text only, Steel Silver):
Or talk to someone now →   (anchor to #consultation)
```

**Optional background treatment:** Restrained low-light photographic image. No wrecked bicycle. No road imagery with visible blood, body, or crash debris. If no existing asset fits, leave the background plain.

---

### Section 2 — The next 24 hours

**Layout:** Charcoal Slate background. Max-width 800px. H2 + H3 hierarchy for schema markup.

**Anchor ID:** `#next-24`

**Implementation note:** Wrap this section in `HowTo` schema. Each numbered item gets an `HowToStep` schema entry.

**Content:**

```markdown
## The next 24 hours

The decisions you make in the first day or two shape what's possible
later — sometimes by a lot. None of this is urgent in the panicked
sense. But some of it is time-sensitive, and the order matters.

### Right now

1. **Get medical attention, even if you think you're fine.** Adrenaline
   masks injury. Concussions, internal injuries, and spinal damage
   often don't announce themselves at the scene. A clean medical
   record from the day of the crash is also the single most important
   piece of evidence in your case.

2. **Stay where you are if you can do so safely. Call 911.** Do not
   move your bike, your helmet, or anything you were carrying unless
   you must to be safe. Crash position and debris pattern matter.

3. **Get the driver's information directly — don't rely on the
   officer's report.** Name, license, plate, insurance card photo
   if they'll let you. Officers sometimes get details wrong, and
   reports can take days or weeks to surface.

4. **Photograph everything.** Your bike from multiple angles.
   Your helmet. The car. The intersection or roadway. Skid marks.
   Traffic controls. Your injuries. The driver's vehicle damage.
   Anything that looks like it might matter — photograph it anyway.

5. **Get witness names and phone numbers before anyone leaves.**
   This is the step most riders skip and most regret. Witness pools
   for cyclist crashes thin out fast. A phone number on the back of
   a receipt is worth more than the police report in many cases.

6. **Preserve your bike, helmet, and gear exactly as they are.** Do
   not have your bike repaired. Do not throw out a damaged helmet —
   the impact pattern on the helmet often reveals what happened.
   Do not wash blood off your gear. Bag everything and store it dry.

### Within a few hours

7. **Write down what you remember while it's fresh.** Speed, direction
   of travel, what you saw the driver do, what was said at the scene,
   weather, lighting. Memory degrades within hours. A handwritten or
   typed account dated and timestamped is powerful evidence.

8. **Don't post about the crash on social media.** Not the photos.
   Not the rant. Not the rest-easy update. Insurance defense lawyers
   subpoena social media, and a single "I'm OK!" post can become
   the centerpiece of a defense argument.

9. **Do not give a recorded statement to the driver's insurer.** You
   are not required to. Anything you say can and will be used to
   reduce or deny your claim. "I came out of nowhere" said to be
   modest at the scene becomes "claimant admitted she came out of
   nowhere" in a claim file.

### Within 24 to 72 hours

10. **Request a copy of the police report.** Reports for vehicle-
    cyclist crashes often contain errors — wrong direction of travel,
    wrong location of impact, omitted witness statements. Read it
    carefully. Errors can be corrected through a supplemental report
    if caught early.

11. **Notify your own auto insurer, even though you were on a bike.**
    Your own auto policy may pay medical bills (medical payments
    coverage) and protect you against an uninsured or underinsured
    driver. You do not have to give them a recorded statement either.

12. **Talk to someone before you talk to the insurer's adjuster
    again.** A free consultation costs you nothing. Talking to
    the adjuster before you understand what you're sitting on can
    cost you everything.
```

End of section CTA (text link, inline):

> *Want a printable version to keep, share, or hand to a family member?* [*Download the Bicycle Crash Reference →*](/resources/checklists/bicycle-crash-reference/)

---

### Section 3 — What insurance companies typically do

**Layout:** Obsidian Graphite. Max-width 800px. Informational, not adversarial.

**Content:**

```markdown
## What insurance companies typically do

The driver's insurer is working a different playbook for a cyclist
crash than they would for a two-car crash. The reason is simple:
juries, adjusters, and police officers all carry a quiet assumption
that the cyclist did something wrong. The insurer's job is to
reinforce that assumption.

Within the first few days, you should expect:

- **A friendly call.** An adjuster reaches out, sounds sympathetic,
  asks how you're feeling, and asks if you'd be willing to give a
  "quick recorded statement, just so we can close out the file."
  Decline politely.

- **A pre-MRI settlement offer.** Cyclist injuries are often missed
  in the first ER visit. A fractured wrist, mild TBI, or torn
  rotator cuff may not show up for days. Insurers know this. An
  early offer — "we'll pay for your bike and your urgent care
  visit, just sign here" — closes out the claim before the real
  injuries are diagnosed.

- **The "I didn't see him" frame.** The driver's statement, almost
  always, will be some version of "the cyclist came out of nowhere"
  or "I didn't see him." This is positioned as honest. Functionally
  it shifts the responsibility for visibility from the driver to the
  rider — even though the legal duty runs the other way.

- **The helmet question.** Whether or not you were wearing a helmet,
  expect it to come up. Whether or not the law required one. Whether
  or not the head injury would have been prevented by one. The
  insurer's goal is to plant a comparative-fault number even before
  the medical record is complete.

- **Surveillance.** In any case where injuries are significant,
  assume video surveillance of your day-to-day life is occurring.
  Adjusters and defense investigators routinely film claimants
  walking, lifting, getting in and out of cars. A two-second clip
  of you reaching for groceries becomes "claimant has full range
  of motion in deposition exhibits."

None of this is necessarily malicious. But it's a process that's been
optimized for *their* outcome, not yours. Knowing how it operates
helps you avoid the most expensive mistakes.
```

---

### Section 4 — FAQ

**Layout:** Charcoal Slate. Each Q is collapsible accordion (or always-expanded — accessibility-friendly either way).

**Implementation:** Wrap in `FAQPage` schema. Each Q/A is a `Question` with `acceptedAnswer`.

**Content:**

```markdown
## Common questions after a bicycle accident

### How long do I have to file a bicycle accident claim in Missouri?

In Missouri, the statute of limitations for personal injury,
including bicycle-vehicle crashes, is **five years** from the date
of the crash *(MIKE: confirm current text of § 516.120)*. That's
longer than most people assume, but it does not mean waiting is a
good idea. Evidence — witnesses, video, your bike, your helmet —
degrades fast.

### How long do I have to file in Kansas?

In Kansas, the statute of limitations for personal injury is
**two years** from the date of the crash, under K.S.A. 60-513(a)(4)
*(MIKE: confirm current text)*. Significantly shorter than Missouri.
If your crash happened on the Kansas side, two years is the window —
and that window includes the time it takes to investigate, gather
records, and prepare a case for filing.

### I wasn't wearing a helmet. Does that hurt my case?

In both Missouri and Kansas, adult cyclists are not required by
state law to wear helmets. *(MIKE: confirm — some Missouri and
Kansas municipalities have helmet ordinances for minors and in
limited cases for adults. Local ordinance review required per crash
location.)* The legal status of not wearing a helmet as a defense
varies. Courts have generally not allowed non-use of a helmet to
establish comparative fault for the crash itself, but insurers
routinely argue it as mitigation for head injuries specifically.
The argument can often be challenged. Having a lawyer involved
before that argument hardens matters.

### The driver said I "came out of nowhere." Does that hurt my case?

It hurts the insurance company's settlement posture. It does not
necessarily hurt your case. A driver's statement that they "didn't
see" a cyclist who had the legal right of way is, in most
jurisdictions, evidence of the driver's inattention — not the
cyclist's fault. Drivers have an affirmative duty to look for
vulnerable road users. "I didn't see him" is often the admission,
not the defense.

### What if I was riding on the sidewalk?

It depends entirely on the local ordinance where the crash
happened. *(MIKE: confirm — sidewalk-riding rules vary across
Kansas City Missouri, Kansas City Kansas, Overland Park, Lee's
Summit, Independence, and others. Some allow it everywhere, some
allow it outside business districts, some prohibit it.)* Even where
sidewalk riding is technically prohibited, the driver's duty to
yield in a crosswalk or driveway entry can still apply.

### What if I crossed against the light, or wasn't in the bike lane?

Comparative fault matters here, and it is the single most case-
determinative issue between Missouri and Kansas. In Missouri,
you can still recover damages even if a jury finds you partially
at fault — your damages are reduced by your percentage of fault,
but there is no cutoff. In Kansas, if a jury finds you **50% or
more** at fault, you recover **nothing**. The same crash facts can
produce dramatically different outcomes depending on which side of
State Line Road they happened on.

### Can I use my own auto insurance even though I was on a bike?

In most cases, yes. Your own auto policy's medical payments
coverage and uninsured/underinsured motorist coverage typically
apply when you are struck by a vehicle, regardless of whether you
were driving, walking, or riding a bike. This is one of the most
commonly missed sources of recovery in cyclist cases. Insurers
will not volunteer this — you have to know it's there.

### What if the driver was a delivery driver, rideshare driver, or
on the job?

That changes the insurance map significantly. If the driver was
operating a commercial vehicle, was on a rideshare or food
delivery app, or was running an errand for their employer, an
employer's policy may provide coverage well above the driver's
personal limits. Establishing this requires fast investigation —
employment records, app data, vehicle telematics — before they
become harder to obtain.

### What does Yonke Law do in bicycle accident cases?

We handle bicycle-vehicle crashes the same way we handle any
serious vehicle case: full investigation including accident
reconstruction where it matters, recovery of all available
insurance layers including the rider's own policy, and litigation
when the insurer's number doesn't match the case. Bicycle cases
benefit from a firm that doesn't carry the same cyclist-bias
assumption insurers count on. *(MIKE: confirm or replace.)*
```

---

### Section 5 — Missouri vs. Kansas: the rules that matter

**Layout:** Obsidian Graphite. Two-column on desktop, stacked on mobile.

**Headline:** `How the rules differ depending on where it happened`

**Content:**

```markdown
## Missouri

- **Statute of limitations:** Five years for personal injury
  (RSMo § 516.120) *(MIKE: confirm)*
- **Comparative fault:** Pure comparative — you can recover even if
  partially at fault, with damages reduced by your share. No cutoff.
  (MO § 537.765) *(MIKE: confirm)*
- **Cyclist rights and duties:** Cyclists have substantially the
  same rights and duties as drivers on the roadway (RSMo § 307.180
  et seq.) *(MIKE: confirm current text)*
- **Helmet law:** No statewide adult helmet requirement. *(MIKE:
  confirm — local ordinance review required per crash location.)*
- **Sidewalk riding:** Governed by local ordinance. In Kansas City
  MO, sidewalk riding is generally permitted outside business
  districts (KCMO Code § 70-672) *(MIKE: confirm current text)*
- **Dooring:** Motorist has the duty not to open a vehicle door
  into traffic *(MIKE: confirm statute — believed RSMo § 304.019 or
  related)*

## Kansas

- **Statute of limitations:** Two years for personal injury
  (K.S.A. 60-513(a)(4)) *(MIKE: confirm)*
- **Comparative fault:** Modified — barred from recovery if 50% or
  more at fault (K.S.A. 60-258a) *(MIKE: confirm)*. This is the
  single most case-determinative rule difference from Missouri.
- **Cyclist rights and duties:** Cyclists have the same rights and
  duties as drivers (K.S.A. 8-1587 et seq.) *(MIKE: confirm)*
- **Helmet law:** No statewide adult helmet requirement. *(MIKE:
  confirm — local ordinance review required.)*
- **Sidewalk riding:** Governed by local ordinance. Rules differ
  across Kansas City KS, Overland Park, Lawrence, Lenexa, and
  others. *(MIKE: confirm specific KC-area ordinances.)*
- **PIP coverage:** Personal Injury Protection under Kansas no-fault
  law applies to cyclists struck by motor vehicles, regardless of
  fault (K.S.A. 40-3107) *(MIKE: confirm)*
```

Below the columns, one inline link:

> *Not sure which state's rules apply, or how local ordinances at your crash location affect things?* [*Send us the basics and we'll tell you →*](#consultation)

---

### Section 6 — Inline trust signal

**Layout:** Charcoal Slate panel. Restrained.

**Sensitivity-aware behavior:** Standard sensitivity. Standard testimonial + outcome reference pattern, with the client's consent and bar-compliance review.

**Placeholder content (always Mike-input):**

```
[MIKE INPUT REQUIRED.]

[Default Mike-input copy here — a representative bicycle-vehicle
case description (anonymized or with consent), with a quote or
short outcome reference. Should not reference specific dollar
figures unless cleared by Mike. Should not promote outcomes. Pattern
follows car-accident page Section 6.]
```

---

### Section 7 — When it's time to talk to a lawyer

**Layout:** Obsidian Graphite. Centered.

**Content:**

```markdown
## When it's worth having someone look at your situation

Not every bicycle-vehicle crash needs a lawyer. A scrape, a bruised
ego, and a bent wheel may not justify the conversation. But the
moment any of the following are true, a free consultation is worth
your time:

- You were hit by a car, truck, or commercial vehicle while on
  your bike
- The driver left the scene, or you don't have their full information
- The driver was on the job, making a delivery, or driving for a
  rideshare or app
- Your injuries needed more than a single ER visit — anything
  involving fractures, concussion, sustained pain, or follow-up
- The driver's insurer has reached out to you directly
- Anyone — driver, officer, insurer, witness — has suggested the
  crash was your fault
- You're a cyclist who was hit on a sidewalk, in a crosswalk, in a
  bike lane, or at an intersection and the driver is blaming you
- You simply want to understand whether a case can be brought and
  what it would involve

A consultation is exactly what it sounds like — a conversation. No
fee. No obligation. If we don't think a case can be brought, we
will tell you.
```

Below this, two CTAs side by side:

- Primary: `Talk to us now` → anchor `#consultation`
- Secondary: `Or send us the basics first` → links to a brief intake form

---

### Section 8 — Two paths forward

**Layout:** Charcoal Slate. Two-column on desktop. Each side is a card.

**Headline:** `Take this with you`

**Card 1 — Printable reference:**

```
THE BICYCLE CRASH REFERENCE
A one-page printable summary of what to do, what to preserve,
what to say (and not say) to insurers, and how Missouri and Kansas
rules differ. Designed to be saved, shared, or handed to a family
member or friend.

[Download the PDF →]
```

**Card 2 — Digital intake:**

```
OR — TURN YOUR ANSWERS INTO AN INTAKE
Walk through the same questions we'd ask in a first conversation.
Roughly 5–10 minutes. At the end, you'll have a clear summary of
your situation and we'll have everything we need to follow up.

Free, confidential, no obligation. Your answers are private and
encrypted.

[Start the digital intake →]
```

**Implementation note:** The digital intake creates a People Portal account on submission. Spec for the intake flow is separate. Standard intake applies — no branching modifications required for this page.

---

### Section 9 — Related pages

**Layout:** Obsidian Graphite. Horizontal row of cards (3 on desktop, stacked mobile).

**Headline:** `Related guidance`

**Cards:**

```
1. **Pedestrian accidents** — *Same vulnerable-road-user framework,
   different facts.* → `/just-happened/pedestrian-accident/`
2. **Car accidents** — *The parent guide if your crash also involved
   another driver, a passenger, or a multi-vehicle collision.*
   → `/just-happened/car-accident/`
3. **Traumatic brain injury** — *If a head injury is part of your
   situation, the diagnostic and evidentiary picture is different.*
   → `/just-happened/traumatic-brain-injury/`
```

---

### Section 10 — Final CTA / Talk to Us

Same as homepage Section 10. Reused as a component. Standard phrasing.

- Anchor ID: `#consultation`
- Phone: `816-221-6400`
- Address + map
- Form routes to Mike's MS365
- Form heading: default homepage form heading

---

### Section 11 — Footer

Same as homepage. Reused as the shared `<Footer />` component. Includes full disclaimer block per homepage spec Section 11.

---

## 4. Voice & tone enforcement checklist

Run the standard checklist (template Section D, standard checks). No moderate/high-sensitivity additions apply.

One bicycle-specific check:

- [ ] Does the page reinforce the cyclist-bias frame ("if only you had been more visible / worn a helmet / been in the bike lane")? (Fail — rewrite.) The page should consistently center the motorist's duty to look for and yield to vulnerable road users, without lecturing or appearing combative.

---

## 5. Image asset references

| Section | Suggested asset |
|---|---|
| Hero background (optional) | Restrained, dark photographic image. Drive folder `1Sea3j5hCkU8xQLcVNqYjYMj8bjPj57XI` — pick from existing if available. Avoid imagery showing a wrecked bike, blood, or visible crash debris. If no existing asset fits, leave plain. |
| Section 6 trust signal panel | Optional — only if Mike opts for a quoted testimonial. |
| Section 9 Related pages cards | Use existing card assets from the cross-link page types. |

**Forbidden imagery (universal list applies):** Crashed cars, ambulances with flashing lights, gavels, scales of justice, lawyer-with-arms-crossed, generic KC skyline.

**Additional forbidden for this page:**

- Wrecked bicycles, twisted wheels, blood on pavement
- Cyclist-down imagery
- Stock photos of cyclists looking determined or athletic (the page is not selling cycling)
- Memorial bike or "ghost bike" imagery — wrong tone for this page

---

## 6. Accessibility minimums

Standard checklist from template Section G. No moderate/high-sensitivity additions apply.

---

## 7. Statutes and facts that need Mike's confirmation

Flag each item visually in the build until Mike signs off.

- Missouri statute of limitations for personal injury — currently stated as RSMo § 516.120, five years. Confirm.
- Kansas statute of limitations for personal injury — currently stated as K.S.A. 60-513(a)(4), two years. Confirm.
- Missouri comparative fault — currently stated as pure comparative under MO § 537.765. Confirm.
- Kansas comparative fault — currently stated as modified 50% bar under K.S.A. 60-258a. Confirm.
- Missouri cyclist rights and duties — RSMo § 307.180 et seq. Confirm current text.
- Kansas cyclist rights and duties — K.S.A. 8-1587 et seq. Confirm current text.
- Helmet law status in both states — confirm no statewide adult requirement. Confirm major local ordinances for KCMO, KCK, Overland Park, Lawrence, Lenexa, Independence, Lee's Summit.
- Sidewalk-riding ordinances by KC-area municipality — pattern stated but specific ordinance numbers and current text need confirmation, particularly KCMO Code § 70-672.
- Missouri dooring statute — flagged as RSMo § 304.019 or related. Confirm correct statute.
- Kansas PIP coverage for cyclists — currently stated as K.S.A. 40-3107. Confirm cyclist eligibility under no-fault.
- Bar-advertising compliance review on the entire page, particularly the Section 6 trust signal once Mike provides content.

---

## 8. Open items

- Verify the eleven `(MIKE: confirm …)` flags above before publish.
- Confirm hero image selection from the Drive folder, or commission a new restrained image. The bicycle scenario has fewer existing assets than the auto/truck pages.
- Confirm whether the FAQ should include a question on the rider's bicycle insurance specifically — homeowner's policies sometimes cover the bike as personal property, which is occasionally relevant in property-damage disputes. Not added on first pass.
- Confirm whether Section 9's third card should be `traumatic-brain-injury` (current) or `wrongful-death` (for the catastrophic-outcome reader). Recommendation: keep TBI; wrongful-death traffic is better handled through the concierge classifier.
- Concierge classifier coordination: a fatal cyclist case should route to either this page (with wrongful-death cross-link surfaced) or to wrongful-death (with bicycle-accident cross-link surfaced). Spec for the routing logic sits in the homepage/concierge workstream.
- Confirm whether "Related reading" links should be live with placeholder routes for not-yet-built pages (pedestrian-accident is Wave 1 alongside this; TBI exists), or hidden until those pages exist.
- Spanish-language parallel page question — defer per homepage spec.

---

*End of bicycle-accident spec.*
