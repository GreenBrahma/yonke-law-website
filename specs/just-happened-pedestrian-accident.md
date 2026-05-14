# Yonke Law — `/just-happened/pedestrian-accident/` Page Spec

**Workspace:** Yonke Law Website
**Template type:** Tier 2 variant of the `/just-happened/*` pattern. Parent is `just-happened-car-accident.md`. Inherits structure unchanged; calibrated for the pedestrian's specific procedural posture, the "darted into traffic" defense pattern, hit-and-run and uninsured-motorist insurance considerations, and the higher catastrophic-injury rate that pedestrian cases carry.
**Reference docs:** `yonke-homepage-spec.md`, `just-happened-car-accident.md` (parent), `just-happened-bicycle-accident.md` (adjacent — vulnerable road user framework), `just-happened-wrongful-death.md` (result overlay — applies more often than in cyclist cases), `just-happened-_template.md`, `Yonke Law — The Standard` (Brand Doctrine & Operating System).
**Pronunciation standard:** Yonke (YONK-ee) Law.
**Sensitivity:** Standard, with explicit family-member audience note in intent below.

---

## 1. Page purpose & intent

This page serves a visitor whose situation is one of two things, and the page must work for both without compromising either:

1. **The pedestrian themselves**, reading hours to days after being struck by a vehicle. They may be walking from minor injuries or recovering from significant ones.
2. **A family member of the pedestrian** — spouse, adult child, parent — reading because the pedestrian is in the ICU, in surgery, or has died. The catastrophic-injury rate in vehicle-pedestrian collisions is significantly higher than in vehicle-vehicle or vehicle-cyclist crashes, so this reader is more likely on this page than on the car or bicycle pages.

The page leads with calm acknowledgment that addresses both audiences. It threads in the legal framework where the pedestrian's posture is genuinely different from a driver's — particularly around hit-and-run, uninsured-motorist coverage from the pedestrian's own auto policy, and the comparative-fault dynamics that dominate these cases. It surfaces the wrongful-death cross-link prominently in Section 9 for the family-member reader.

**Critical constraint:** This is informational content, not legal advice. The page must never claim to provide legal advice or create an attorney-client relationship. Standard disclaimers in footer apply.

---

## 2. URL, meta, and SEO/AEO foundation

- **Canonical URL:** `https://yonke.law/just-happened/pedestrian-accident/`
- **Page title (browser tab):** `What to do after a pedestrian accident in Missouri or Kansas — Yonke Law`
- **Meta description (155 chars target):** `Hit by a vehicle while walking? Here's what to do in the first 24 hours, what insurers typically do, and how Missouri and Kansas rules differ.`
- **Open Graph image:** Reuse Yonke Law brand card (Obsidian Graphite, name + tagline). No imagery suggesting injury or a struck pedestrian.
- **Schema markup (on-page JSON-LD):**
  - `Article` — author Mike Yonke, publisher Yonke Law L.L.C., dateModified set at build
  - `FAQPage` — wrapping the FAQ section
  - `HowTo` — wrapping "The next 24 hours" procedural section
  - `LegalService` — firm-level info (reused from homepage)
- **Crawler permissions:** `robots.txt` and meta robots permit `GPTBot`, `ClaudeBot`, `PerplexityBot`, `Google-Extended`, `anthropic-ai`. This page is intended to be cited by LLMs.

---

## 3. Section-by-section spec

The page follows the standard 11-section pattern.

### Section 1 — Hero

**Layout:** Obsidian Graphite background. Centered, max-width 900px. Standard vertical breathing room.

**Content:**

```
Eyebrow (small caps, Steel Silver):  JUST HAPPENED

Headline (display serif, large):
You were just hit by a vehicle. Take a breath.

Subhead (body, lighter):
Whether you're reading this from a hospital bed, your couch, or for
someone you love who can't read it yet — this is the clearest path
forward. The street will be loud about who's at fault before anyone
has the facts. We don't operate that way.

Primary CTA (Muted Gold or Chrome Highlight):
Read the next 24 hours →   (anchor to #next-24)

Secondary link (text only, Steel Silver):
Or talk to someone now →   (anchor to #consultation)
```

**Optional background treatment:** Restrained low-light photographic image. No imagery of a struck pedestrian, ambulance, or crash scene. If no existing asset fits, leave plain.

---

### Section 2 — The next 24 hours

**Layout:** Charcoal Slate background. Max-width 800px. H2 + H3 hierarchy for schema markup.

**Anchor ID:** `#next-24`

**Implementation note:** Wrap this section in `HowTo` schema. Each numbered item gets an `HowToStep` schema entry.

**Content:**

```markdown
## The next 24 hours

The decisions made in the first day or two shape what's possible
later — sometimes by a lot. None of this is urgent in the panicked
sense. But some of it is time-sensitive, and the order matters.
If you're reading this for someone else who can't act yet, the same
guidance applies — a family member or close friend can do most of it.

### Right now

1. **Get full medical attention, including imaging.** Pedestrian
   impacts produce injuries that ER triage misses on first pass —
   internal bleeding, mild TBI, slow-developing brain bleeds, spinal
   damage, hidden fractures. If you walked away from the scene, that
   does not mean you're uninjured. Adrenaline masks injury for hours
   and sometimes days. A clean medical record from the day of the
   crash is also the single most important piece of evidence in your
   case.

2. **Call 911 from the scene if anyone is still there.** If you have
   already left the scene, call the local police non-emergency
   number and report the incident as soon as you can. A report
   filed hours later is still a report, but one filed days later
   becomes difficult to reconcile.

3. **Get the driver's information directly — don't rely on the
   officer's report.** Name, license, plate, insurance card photo
   if they'll let you. Officers sometimes get details wrong, and
   reports can take days or weeks to surface.

4. **Photograph everything.** The vehicle. The location of impact.
   Where you ended up. The road, the crosswalk markings (or lack of
   them), traffic signals, signage, weather, lighting. Your
   injuries. Anything that looks like it might matter — photograph
   it anyway. If you can't, ask someone else to.

5. **Get witness names and phone numbers before anyone leaves.**
   Pedestrian cases are won and lost on witness testimony more than
   almost any other vehicle case. Physical evidence of where you
   were standing or walking at the moment of impact is often
   limited. A phone number on the back of a receipt is worth more
   than the police report in many cases.

6. **Preserve your clothing, shoes, and anything you were
   carrying.** Do not wash blood off them. Do not throw out a
   shoe that came off. Do not discard the bag, phone, umbrella,
   stroller, walker, or anything else you had with you. Impact
   marks on clothing and shoes are evidence. Bag everything and
   store it dry.

### Within a few hours

7. **Write down what you remember while it's fresh.** Where you were
   walking, which direction, what you saw the driver do, what was
   said at the scene, weather, lighting, whether you had right of
   way, how fast you think the vehicle was going. Memory degrades
   within hours. A handwritten or typed account dated and
   timestamped is powerful evidence.

8. **Don't post about the incident on social media.** Not the
   photos. Not the rant. Not the "I'm OK!" update. Insurance defense
   lawyers subpoena social media, and a single optimistic post can
   become the centerpiece of a defense argument.

9. **Do not give a recorded statement to the driver's insurer.** You
   are not required to. Anything you say can and will be used to
   reduce or deny your claim. "I stepped off the curb a little
   early" said to be honest at the scene becomes "claimant admitted
   she entered the roadway prematurely" in a claim file.

### Within 24 to 72 hours

10. **Request a copy of the police report.** Pedestrian-vehicle
    reports often contain errors — wrong point of impact, wrong
    direction of travel, omitted witness statements, vehicle-driver
    statements taken as fact. Read it carefully. Errors can be
    corrected through a supplemental report if caught early.

11. **Notify your own auto insurer, even though you were on foot.**
    Your own auto policy's uninsured/underinsured motorist coverage
    and medical payments coverage typically apply when you are
    struck by a vehicle, regardless of whether you were driving,
    walking, or cycling. This becomes critical if the driver fled,
    was uninsured, or carried only minimum-limits coverage. You
    do not have to give your own insurer a recorded statement either.

12. **Preserve your phone — and consider that the driver's matters.**
    Your own phone records, if requested, may be used to argue you
    were distracted. The driver's phone records may show the driver
    was. Distracted-driving subpoenas are often case-determinative
    in pedestrian cases, but they require fast action — providers
    purge data on rolling windows.
```

End of section CTA (text link, inline):

> *Want a printable version to keep, share, or hand to a family member?* [*Download the Pedestrian Crash Reference →*](/resources/checklists/pedestrian-crash-reference/)

---

### Section 3 — What insurance companies typically do

**Layout:** Obsidian Graphite. Max-width 800px. Informational, not adversarial.

**Content:**

```markdown
## What insurance companies typically do

The driver's insurer is working a different playbook for a
pedestrian crash than for a two-car crash. The reason is simple:
juries, adjusters, and police officers all carry a quiet assumption
that the pedestrian did something wrong — stepped off the curb,
crossed mid-block, wasn't paying attention, wasn't visible. The
insurer's job is to reinforce that assumption.

Within the first few days, you should expect:

- **A fast, friendly call.** An adjuster reaches out, sounds
  sympathetic, asks how you're doing, and asks for a "quick recorded
  statement, just so we can close out the file." In pedestrian
  cases, this call often comes within 24 hours — earlier than in
  vehicle-vehicle cases. Decline politely.

- **A pre-diagnosis settlement offer.** Pedestrian injuries are
  often understated in the first ER visit. Concussions, internal
  injuries, spinal damage, and slow-developing brain bleeds may not
  appear for days. Insurers know this. An early offer — "we'll pay
  for your urgent care visit, just sign here" — closes out the
  claim before the real injuries are diagnosed.

- **The "darted into traffic" frame.** The driver's statement,
  almost always, will be some version of "the pedestrian came out
  of nowhere" or "I didn't see her until it was too late." This is
  positioned as honest. Functionally it shifts responsibility for
  visibility from the driver to the pedestrian — even though the
  legal duty runs the other way. Missouri law requires drivers to
  exercise the highest degree of care to avoid collisions with
  pedestrians on the roadway. Kansas law imposes substantially the
  same duty.

- **The clothing and visibility question.** Expect questions about
  what you were wearing, whether you had reflective clothing,
  whether it was light or dark, whether you were carrying anything
  visible. These questions are not casual — they are building a
  comparative-fault number.

- **The phone question.** Were you on your phone? Looking at it?
  Wearing headphones? Listening to music? Even where the driver was
  also on a phone, insurers ask first about the pedestrian's. The
  goal is the same — establish distraction as comparative fault.

- **Surveillance.** In any case where injuries are significant,
  assume video surveillance of your day-to-day life is occurring.
  Adjusters and defense investigators routinely film claimants
  walking, lifting, getting in and out of cars. A two-second clip
  of you reaching for groceries becomes "claimant has full range
  of motion" in deposition exhibits.

None of this is necessarily malicious. But it's a process that's
been optimized for *their* outcome, not yours. Knowing how it
operates helps you avoid the most expensive mistakes.
```

---

### Section 4 — FAQ

**Layout:** Charcoal Slate. Each Q is collapsible accordion (or always-expanded — accessibility-friendly either way).

**Implementation:** Wrap in `FAQPage` schema.

**Content:**

```markdown
## Common questions after a pedestrian accident

### How long do I have to file a pedestrian accident claim in Missouri?

In Missouri, the statute of limitations for personal injury,
including pedestrian-vehicle crashes, is **five years** from the
date of the crash *(MIKE: confirm current text of § 516.120)*.
That's longer than most people assume, but it does not mean waiting
is a good idea. Witnesses move, video footage gets overwritten,
and phone records age out.

### How long do I have to file in Kansas?

In Kansas, the statute of limitations for personal injury is
**two years** from the date of the crash, under K.S.A. 60-513(a)(4)
*(MIKE: confirm current text)*. Significantly shorter than
Missouri. If the crash happened on the Kansas side, two years is
the window — and that window includes the time it takes to
investigate, gather records, and prepare a case for filing.

### What if my family member died from the crash?

Wrongful-death claims have different statutes of limitations and a
different set of rules about who can bring them. In Missouri, the
wrongful-death window is three years from the death. In Kansas,
two years. The persons entitled to bring a claim — spouse,
children, parents — are defined by statute and the order matters.
The framework is covered in detail on the [wrongful death
guide](/just-happened/wrongful-death/), which is built to be read
alongside this page.

### I was crossing mid-block, not in a crosswalk. Does that hurt my case?

Possibly, but not the way the driver's insurer will frame it.
Drivers have an affirmative duty to look for and avoid pedestrians,
even outside crosswalks. Pedestrians outside crosswalks generally
must yield to vehicles, but the driver's duty does not disappear.
The case becomes a comparative-fault analysis — and this is where
Missouri and Kansas diverge sharply. (See the next two questions.)

### What if a jury thinks I was partly at fault?

In Missouri, you can still recover damages even if a jury finds
you partially at fault. Your damages are reduced by your percentage
of fault, but there is no cutoff — pure comparative fault.
*(MIKE: confirm MO § 537.765 current text.)*

In Kansas, if a jury finds you **50% or more at fault**, you
recover **nothing**. This is modified comparative fault under
K.S.A. 60-258a *(MIKE: confirm)*. The same crash facts can produce
dramatically different outcomes depending on which side of State
Line Road they happened on.

### I was on my phone when it happened. Does that hurt my case?

It can be argued as comparative fault, but it is not automatically
case-killing. The driver's own attention and conduct matter at
least as much, and the driver's phone records can often be
obtained in discovery. Many pedestrian cases involve distracted
parties on both sides — and the legal duty to look out for
pedestrians remains on the driver regardless of what the pedestrian
was doing.

### What if it was a hit-and-run?

Two things matter immediately. First, report it to police as soon
as possible — the gap between the incident and the report is
sometimes used to attack credibility, so the sooner the better.
Second, your own auto insurance policy's uninsured-motorist
coverage typically applies in hit-and-run cases. This is one of
the most commonly missed sources of recovery in pedestrian cases,
because pedestrians don't always realize their auto policy applies
when they were on foot.

### What if my child was hit?

The statute of limitations is generally tolled — the clock does not
start running — until the child turns 18. *(MIKE: confirm — Missouri
RSMo § 516.170 and Kansas K.S.A. 60-515 minor tolling provisions
apply, though Kansas has a separate 4-year statute of repose under
60-513(c) that can override tolling. Specific application varies
and Mike review required.)* That said, evidence does not wait for
the statute. Investigation should begin promptly even though
filing can wait.

### What does Yonke Law do in pedestrian accident cases?

We handle vehicle-pedestrian crashes the same way we handle any
serious vehicle case: full investigation including scene
reconstruction where it matters, recovery of all available
insurance layers including the pedestrian's own auto policy,
distracted-driving discovery where the facts support it, and
litigation when the insurer's number doesn't match the case.
Pedestrian cases benefit from a firm that doesn't accept the
"darted into traffic" frame insurers count on. *(MIKE: confirm or
replace.)*
```

---

### Section 5 — Missouri vs. Kansas: the rules that matter

**Layout:** Obsidian Graphite. Two-column on desktop, stacked on mobile.

**Headline:** `How the rules differ depending on where it happened`

**Content:**

```markdown
## Missouri

- **Statute of limitations:** Five years for personal injury
  (RSMo § 516.120). Three years for wrongful death (§ 537.100).
  *(MIKE: confirm)*
- **Comparative fault:** Pure comparative — you can recover even if
  partially at fault, with damages reduced by your share. No cutoff.
  (MO § 537.765) *(MIKE: confirm)*
- **Driver's duty:** Drivers must exercise the highest degree of
  care to avoid collisions with pedestrians on the roadway.
  *(MIKE: confirm — believed RSMo § 300.405 et seq. and related
  common law.)*
- **Crosswalk rules:** Vehicles must yield to pedestrians within a
  marked or unmarked crosswalk at an intersection. Pedestrians
  crossing outside crosswalks must yield to vehicles, but this
  does not eliminate the driver's duty of care.
- **Minor tolling:** Statute of limitations tolled until age 18
  (RSMo § 516.170) *(MIKE: confirm)*

## Kansas

- **Statute of limitations:** Two years for personal injury
  (K.S.A. 60-513(a)(4)). Two years for wrongful death
  (K.S.A. 60-1903). *(MIKE: confirm)*
- **Comparative fault:** Modified — barred from recovery if 50% or
  more at fault (K.S.A. 60-258a) *(MIKE: confirm)*. This is the
  single most case-determinative rule difference from Missouri.
- **Driver's duty:** Drivers must exercise due care to avoid
  collisions with pedestrians and must give warning when necessary
  (K.S.A. 8-1533 et seq.) *(MIKE: confirm current text)*
- **Crosswalk rules:** Vehicles must yield to pedestrians in
  crosswalks at intersections. Pedestrians outside crosswalks must
  yield, but the driver's duty of care remains.
- **PIP coverage:** Personal Injury Protection under Kansas
  no-fault law applies to pedestrians struck by motor vehicles,
  regardless of fault (K.S.A. 40-3107) *(MIKE: confirm)*
- **Minor tolling vs. statute of repose:** K.S.A. 60-515 generally
  tolls the SOL for minors, but K.S.A. 60-513(c) imposes a
  four-year statute of repose that can override tolling.
  *(MIKE: critical to confirm — this is a recurring complexity
  flagged on multiple Tier 1 pages.)*
```

Below the columns, one inline link:

> *Not sure which state's rules apply, or whether minor tolling will help if your child was the one hit?* [*Send us the basics and we'll tell you →*](#consultation)

---

### Section 6 — Inline trust signal

**Layout:** Charcoal Slate panel. Restrained.

**Sensitivity-aware behavior:** Standard sensitivity. Standard testimonial + outcome reference pattern, with the client's consent and bar-compliance review.

**Placeholder content (always Mike-input):**

```
[MIKE INPUT REQUIRED.]

[Default Mike-input copy here — a representative pedestrian-vehicle
case description (anonymized or with consent), with a quote or
short outcome reference. Should not reference specific dollar
figures unless cleared by Mike. Should not promote outcomes.
Pattern follows car-accident page Section 6.]
```

---

### Section 7 — When it's time to talk to a lawyer

**Layout:** Obsidian Graphite. Centered.

**Content:**

```markdown
## When it's worth having someone look at your situation

Not every pedestrian-vehicle incident needs a lawyer. A bumped knee
in a parking lot at 2 mph may not justify the conversation. But the
moment any of the following are true, a free consultation is worth
your time:

- You were hit by a car, truck, or commercial vehicle while walking,
  jogging, or standing
- The driver left the scene, or you don't have their full information
- The driver was on the job, making a delivery, or driving for a
  rideshare or app
- Your injuries needed more than a single ER visit — anything
  involving fractures, concussion, sustained pain, head injury, or
  follow-up
- The driver's insurer has reached out to you directly
- Anyone — driver, officer, insurer, witness — has suggested the
  incident was your fault
- The pedestrian was a child or an elderly family member
- The pedestrian died or remains in critical condition
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
THE PEDESTRIAN CRASH REFERENCE
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
encrypted. If you're filling this out for someone else — a parent,
spouse, or adult child — there's a place to note that.

[Start the digital intake →]
```

**Implementation note:** The digital intake creates a People Portal account on submission. The intake should have a "filling this out for someone else" branch — this is more common in pedestrian cases than in any other Tier 1 or Tier 2 page because the pedestrian themselves is often hospitalized or has died. Branch logic spec lives with the intake spec.

---

### Section 9 — Related pages

**Layout:** Obsidian Graphite. Horizontal row of cards (3 on desktop, stacked mobile).

**Headline:** `Related guidance`

**Cards:**

```
1. **Bicycle accidents** — *Same vulnerable-road-user framework,
   different facts.* → `/just-happened/bicycle-accident/`
2. **Car accidents** — *The parent guide if a vehicle-occupant was
   also involved or if you're processing a multi-victim collision.*
   → `/just-happened/car-accident/`
3. **Wrongful death** — *If the pedestrian died from the crash, this
   covers the legal framework, who can bring a claim, and the
   different statute of limitations that applies.*
   → `/just-happened/wrongful-death/`
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

Run the standard checklist (template Section D, standard checks).

Two pedestrian-specific checks:

- [ ] Does the page reinforce the "pedestrian-blame" frame ("if only you had been more visible / been in the crosswalk / been more careful")? (Fail — rewrite.) The page should consistently center the driver's affirmative duty to look for and avoid pedestrians, without lecturing.

- [ ] Does the page acknowledge that the reader may be reading for someone who can't read it yet — a hospitalized family member, a deceased loved one — without performing emotion or making the page about the family member rather than the situation? (Pass.)

---

## 5. Image asset references

| Section | Suggested asset |
|---|---|
| Hero background (optional) | Restrained, dark photographic image. Drive folder `1Sea3j5hCkU8xQLcVNqYjYMj8bjPj57XI` — pick from existing if available. Avoid imagery of struck pedestrians, ambulances, or visible crash scenes. If no existing asset fits, leave plain. |
| Section 6 trust signal panel | Optional — only if Mike opts for a quoted testimonial. |
| Section 9 Related pages cards | Use existing card assets from the cross-link page types. |

**Forbidden imagery (universal list applies):** Crashed cars, ambulances with flashing lights, gavels, scales of justice, lawyer-with-arms-crossed, generic KC skyline.

**Additional forbidden for this page:**

- Struck pedestrians, bodies on pavement, blood at scene
- Crosswalks with chalk outlines or police tape
- Stock photos of pedestrians looking concerned at intersections
- Memorial pedestrian imagery — flowers at a roadside, "ghost statues," shoes left at a scene
- Stock photos of "concerned daughter" or "concerned spouse" — these read as marketing about the family member's grief rather than information for them

---

## 6. Accessibility minimums

Standard checklist from template Section G.

One pedestrian-specific consideration:

- The page is likely to be read by family members in stressful contexts (hospital waiting rooms, late at night) — line length, contrast, and reduced-motion handling are particularly important. Verify reduced-motion compliance even though sensitivity tier is Standard.

---

## 7. Statutes and facts that need Mike's confirmation

Flag each item visually in the build until Mike signs off.

- Missouri statute of limitations for personal injury — RSMo § 516.120, five years. Confirm.
- Kansas statute of limitations for personal injury — K.S.A. 60-513(a)(4), two years. Confirm.
- Missouri wrongful-death SOL — RSMo § 537.100, three years. Confirm.
- Kansas wrongful-death SOL — K.S.A. 60-1903, two years. Confirm.
- Missouri comparative fault — pure comparative under MO § 537.765. Confirm.
- Kansas comparative fault — modified 50% bar under K.S.A. 60-258a. Confirm.
- Missouri driver's duty toward pedestrians — currently stated as "highest degree of care" derived from RSMo § 300.405 et seq. and common law. Confirm specific statute and case law citations.
- Kansas driver's duty toward pedestrians — K.S.A. 8-1533 et seq. Confirm current text.
- Missouri crosswalk rules — confirm current statute and any recent amendments.
- Kansas crosswalk rules — confirm current statute.
- Kansas PIP coverage for pedestrians — K.S.A. 40-3107. Confirm pedestrian eligibility under no-fault.
- Missouri minor tolling — RSMo § 516.170. Confirm.
- Kansas minor tolling vs. statute of repose interaction — K.S.A. 60-515 vs. 60-513(c). **Critical confirmation needed** — this is a recurring complexity that affects pedestrian, birth-injury, and other cases involving minors.
- Bar-advertising compliance review on the entire page, particularly the Section 6 trust signal once Mike provides content.

---

## 8. Open items

- Verify the thirteen `(MIKE: confirm …)` flags above before publish.
- Confirm hero image selection from the Drive folder, or commission a new restrained image. The pedestrian scenario has even fewer appropriate existing assets than the bicycle scenario.
- Confirm whether the FAQ should include a question on intoxication — the page does not currently address it because it cuts in both directions (driver intoxication is a major aggravating factor; pedestrian intoxication is a defense frame). Recommendation: add a Mike-confirmation question on driver intoxication in a future pass, leave pedestrian intoxication off the page.
- Confirm whether the intake should have a "filling this out for someone else" branch — this is recommended in the implementation note above because pedestrian cases more often involve hospitalized or deceased subjects than other Tier 1 / Tier 2 pages. Spec for the branch sits in the intake workstream.
- Concierge classifier coordination: a fatal pedestrian case should route to either this page (with wrongful-death cross-link surfaced) or directly to wrongful-death (with pedestrian-accident as the underlying cause). The classifier should be capable of routing to both with appropriate cross-link prominence depending on reader intent.
- Confirm whether "Related reading" links should be live with placeholder routes for not-yet-built pages (bicycle is alongside this in Wave 1; wrongful-death and car-accident exist).
- Spanish-language parallel page question — defer per homepage spec, but flag that pedestrian cases in Kansas City carry significant Spanish-speaking case volume. If the firm is ever going to commission a Spanish parallel page, pedestrian and car-accident are likely the highest-priority candidates.

---

*End of pedestrian-accident spec.*
