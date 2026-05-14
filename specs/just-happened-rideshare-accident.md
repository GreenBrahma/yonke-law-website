# Yonke Law — `/just-happened/rideshare-accident/` Page Spec

**Workspace:** Yonke Law Website
**Template type:** Tier 2 variant of the `/just-happened/*` pattern. Parent is `just-happened-car-accident.md`. Inherits structure unchanged; calibrated for the commercial-coverage-tier structure that defines rideshare cases (Period 0/1/2/3), the multiple reader types the page must serve (passenger, rideshare driver, other driver, struck cyclist or pedestrian), and the arbitration-clause complication that sits in every Uber and Lyft terms of service.
**Reference docs:** `yonke-homepage-spec.md`, `just-happened-car-accident.md` (parent), `just-happened-bicycle-accident.md` (adjacent — when cyclist hit by rideshare driver), `just-happened-pedestrian-accident.md` (adjacent — when pedestrian hit by rideshare driver), `just-happened-_template.md`, `Yonke Law — The Standard` (Brand Doctrine & Operating System).
**Pronunciation standard:** Yonke (YONK-ee) Law.
**Sensitivity:** Standard.

---

## 1. Page purpose & intent

This page serves a visitor whose situation falls into one of four reader types, and the page must work for all four:

1. **A rideshare passenger**, reading hours to days after a crash. The cleanest legal posture — no comparative fault, clear injuries, question is just which policy applies and at what limits. The highest-volume reader.
2. **A rideshare driver**, who was working when the crash happened. Their situation is complex because their personal auto policy may have a livery exclusion that denies coverage, leaving them dependent on the platform's coverage tier and their own UM/UIM.
3. **Another driver** who was hit by a rideshare driver. The key question for them is whether the rideshare driver was actually engaged with the app at the moment of impact, and which coverage tier applied.
4. **A cyclist or pedestrian** struck by a rideshare driver. Same coverage-tier analysis as reader type 3, with the procedural posture of the bicycle or pedestrian page.

The page leads with calm acknowledgment that addresses all four readers. It threads in the legal framework where rideshare crashes are genuinely different from ordinary vehicle crashes — particularly around the four coverage periods, the app data that has to be preserved fast, and the arbitration clauses buried in every Uber and Lyft account.

**Critical constraint:** This is informational content, not legal advice. The page must never claim to provide legal advice or create an attorney-client relationship. Standard disclaimers in footer apply.

---

## 2. URL, meta, and SEO/AEO foundation

- **Canonical URL:** `https://yonke.law/just-happened/rideshare-accident/`
- **Page title (browser tab):** `What to do after an Uber, Lyft, or rideshare accident in Missouri or Kansas — Yonke Law`
- **Meta description (155 chars target):** `In an Uber, Lyft, or rideshare crash? Here's what to do in the first 24 hours, which insurance applies, and how Missouri and Kansas rules differ.`
- **Open Graph image:** Reuse Yonke Law brand card (Obsidian Graphite, name + tagline).
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
You were just in a rideshare crash. Take a breath.

Subhead (body, lighter):
Whether you were the passenger, the rideshare driver, or someone
hit by one — this is the clearest path forward. The insurance map
for these cases is different from a normal car crash, and it
changes by the minute the app was in.

Primary CTA (Muted Gold or Chrome Highlight):
Read the next 24 hours →   (anchor to #next-24)

Secondary link (text only, Steel Silver):
Or talk to someone now →   (anchor to #consultation)
```

**Optional background treatment:** Restrained low-light photographic image. No imagery of vehicles, ambulances, or branded rideshare elements. If no existing asset fits, leave plain.

---

### Section 2 — The next 24 hours

**Layout:** Charcoal Slate background. Max-width 800px. H2 + H3 hierarchy for schema markup.

**Anchor ID:** `#next-24`

**Implementation note:** Wrap this section in `HowTo` schema. Each numbered item gets an `HowToStep` schema entry.

**Content:**

```markdown
## The next 24 hours

The decisions made in the first day or two shape what's possible
later — sometimes by a lot. Rideshare cases have one extra wrinkle:
critical evidence sits on a company server, and rideshare platforms
purge data on rolling windows. The order matters.

### Right now

1. **Get medical attention, even if you think you're fine.**
   Adrenaline masks injury. Concussions, internal injuries, and
   spinal damage often don't announce themselves at the scene. A
   clean medical record from the day of the crash is also the
   single most important piece of evidence in your case.

2. **Stay where you are if you can do so safely. Call 911.** A
   police report is critical in rideshare cases — without it,
   reconstructing what app status the driver was in becomes much
   harder later.

3. **Screenshot everything in the rideshare app — now.** Open
   Uber or Lyft, navigate to the trip history, and screenshot the
   trip in question. Include the timestamps for ride request,
   acceptance, pickup, dropoff. Screenshot the driver's profile.
   If the trip is in progress, screenshot the active screen. **Do
   not delete the trip from your history. Do not delete the app.**

4. **Get the driver's information directly.** Name, license, plate,
   personal insurance card, and the rideshare company they were
   driving for at that moment. Note: a driver may be logged into
   multiple platforms (Uber, Lyft, DoorDash) at once. Find out
   which app was active for this trip.

5. **Get the other driver's information if there was one.** Same
   detail: name, license, plate, insurance. If you were the
   rideshare driver or a passenger, the other driver's policy may
   matter as much as the rideshare platform's.

6. **Photograph everything.** Vehicles. Damage. The location.
   Traffic controls. Weather. Your injuries. The driver's
   rideshare placard or sticker if visible. Anything that looks
   like it might matter — photograph it anyway.

7. **Get witness names and phone numbers before anyone leaves.**

### Within a few hours

8. **Report the crash through the app's in-app accident reporting
   flow.** Both Uber and Lyft require this for any platform
   coverage to potentially apply. Use the in-app process, not a
   phone call. Keep the reporting flow within the app.

9. **Do not discuss the crash with Uber or Lyft beyond the in-app
   report.** Their in-house claims team will follow up. Treat that
   contact the same as you would the other driver's insurance —
   you are not required to give a recorded statement.

10. **Write down what you remember while it's fresh.** Where you
    were, where the trip started, where it was supposed to end,
    what you saw the driver doing (phone, navigation, anything
    that might be a distraction), what was said at the scene.

11. **Don't post about the crash on social media.** Including your
    rideshare app's review screen.

### Within 24 to 72 hours

12. **Send a preservation letter — or have a lawyer send one — to
    the rideshare platform.** This is the step most riders and
    drivers skip and most regret. Uber and Lyft retain trip data,
    driver location records, app status logs, and dashcam footage
    (where dashcams are used) on rolling windows. A formal
    preservation letter sent in the first days locks down data
    that gets purged within weeks otherwise.

13. **Request a copy of the police report.**

14. **Notify your own auto insurer.** Your own auto policy's
    uninsured/underinsured motorist coverage and medical payments
    coverage may apply, depending on the facts and which coverage
    tier the rideshare platform was in.

15. **Talk to someone before you accept anything from the
    rideshare platform.** Both Uber and Lyft maintain in-house
    claims teams that move fast on low offers. A free consultation
    costs you nothing.
```

End of section CTA (text link, inline):

> *Want a printable version to keep, share, or hand to a family member?* [*Download the Rideshare Crash Reference →*](/resources/checklists/rideshare-crash-reference/)

---

### Section 3 — What the rideshare platform's insurance typically does

**Layout:** Obsidian Graphite. Max-width 800px. Informational, not adversarial.

**Special structure:** This section opens with the four-tier coverage explanation because it's case-determinative. The standard "what insurance companies typically do" content follows it.

**Content:**

```markdown
## What rideshare insurance actually covers (the four periods)

Every Uber, Lyft, or rideshare crash case turns on one question
before anything else: what was the app doing at the exact moment of
the collision?

Both Uber and Lyft (and most other rideshare platforms) operate
under a four-period coverage structure. *(MIKE: confirm current
limits — these change with platform policy and state minimums.)*

**Period 0 — App off.** The driver is not logged in. Personal auto
insurance applies. Most personal auto policies have a "livery" or
"for-hire" exclusion, but if the app is off, the exclusion typically
doesn't trigger.

**Period 1 — App on, waiting for a ride request.** The driver is
available but has not been matched. Uber and Lyft typically provide
**contingent liability coverage** at lower limits — commonly
$50,000 per person / $100,000 per crash for bodily injury and
$25,000 for property damage. The driver's personal policy is
primary in some cases, but most personal policies refuse coverage
under the livery exclusion, leaving the contingent platform
coverage as the operative layer.

**Period 2 — Driver accepted a ride, en route to pick up.** Full
commercial coverage from the platform applies — typically **$1
million in liability coverage**, plus uninsured/underinsured
motorist coverage at varying limits depending on the state.

**Period 3 — Passenger in vehicle.** Same as Period 2. **$1 million
in coverage applies** while the passenger is in the vehicle through
dropoff.

The reason this matters: the same crash, with the same injuries
and the same fault picture, has dramatically different available
coverage depending on which period the app was in. Establishing
the correct period — and proving it with app data, GPS records,
and platform logs — is often the central evidentiary question in
these cases.

## What the platform's claims team typically does

Within the first few days, you should expect:

- **A fast outreach.** The platform's in-house claims team or its
  insurance adjuster reaches out, sounds helpful, and asks for a
  recorded statement.

- **Period-shifting.** The platform's strong incentive is to
  establish a lower-coverage period if the facts allow. Expect
  questions designed to suggest the app was off or in Period 1
  rather than Period 2 or 3. App data preservation matters because
  it is the only thing that conclusively settles this.

- **A pre-MRI settlement offer.** Same pattern as ordinary vehicle
  crashes — an early offer designed to close out the claim before
  the full injury picture is documented.

- **The driver-as-contractor frame.** Both Uber and Lyft aggressively
  maintain that their drivers are independent contractors, not
  employees. For purposes of accessing the platform's tier
  coverage, this distinction usually does not block recovery —
  but it shapes the strategy.

- **Surveillance.** In any case where injuries are significant,
  assume video surveillance of your day-to-day life is occurring.

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
## Common questions after a rideshare accident

### How long do I have to file a rideshare accident claim in Missouri?

In Missouri, the statute of limitations for personal injury,
including rideshare crashes, is **five years** from the date of
the crash *(MIKE: confirm current text of § 516.120)*. That said,
the data preservation problem is more urgent than the SOL —
rideshare platforms purge trip data, app status logs, and dashcam
footage on rolling windows that are often shorter than a year.
Waiting to file is one thing; waiting to preserve evidence is
another.

### How long do I have to file in Kansas?

In Kansas, the statute of limitations for personal injury is
**two years** from the date of the crash, under K.S.A. 60-513(a)(4)
*(MIKE: confirm current text)*. Same data-preservation note applies.

### I was a passenger — whose insurance applies?

If the driver was actively on a ride with you (Period 3), the
rideshare platform's $1 million coverage policy applies. *(MIKE:
confirm current Uber and Lyft policy limits.)* You may also have
recovery through your own auto policy's uninsured/underinsured
motorist coverage and medical payments coverage, depending on the
facts of the crash and whether the at-fault party was the rideshare
driver or another driver.

### Was the driver actually working when the crash happened?

This is the central question in most rideshare cases. The answer
turns on app data — specifically, what status the app was in at
the exact moment of impact. The platform's records are decisive
here. Preserving them fast (through a formal preservation letter)
is critical because rideshare platforms purge data on rolling
windows.

### What if the rideshare driver wasn't at fault?

The other driver's auto policy is the primary source of recovery,
the same as in any vehicle crash. The rideshare platform's
uninsured/underinsured motorist coverage may also apply if the
other driver was uninsured, underinsured, or fled the scene. The
rideshare platform's coverage period at the moment of impact still
matters because it determines whether the rideshare driver — and
any passenger they had — has access to the platform's UM/UIM.

### Why is this different from a regular car accident?

Three reasons. First, the coverage map is more complex — there are
typically more available insurance layers than in a typical vehicle
crash. Second, critical evidence sits on a platform server and gets
purged fast unless preserved. Third, almost every rideshare user
has signed terms of service that include a mandatory arbitration
clause. The interaction between all three of these is why rideshare
cases often need lawyer involvement earlier than ordinary vehicle
cases.

### What about the arbitration agreement I signed when I made my account?

Most rideshare users have agreed, at signup, to terms of service
that include a mandatory arbitration clause. Whether that clause
applies to a personal injury claim from a crash is a fact-specific
question. *(MIKE: confirm current enforcement landscape — recent
court decisions have been mixed, particularly on whether injury
claims fall within the scope of arbitration clauses, and whether
state law in Missouri or Kansas provides any basis for challenging
them.)* This is one of the most important pieces of analysis in
any rideshare case. Do not assume you have to arbitrate. Do not
assume you have to wait. Talk to someone who can read the specific
terms in effect at the time of your trip.

### What if the driver was driving for DoorDash, Uber Eats, or a
different delivery app?

Most food and grocery delivery platforms (DoorDash, Uber Eats,
Grubhub, Instacart) operate on similar coverage tier structures,
though the limits and the specific period definitions differ.
*(MIKE: confirm current coverage limits and structures for major
delivery platforms.)* The same general principles apply: app data
preservation, coverage tier analysis, arbitration clause review.
The specific limits and procedural quirks differ by platform.

### Can I still recover if I was a passenger and the rideshare driver
was uninsured or fled?

Yes, in most cases. The rideshare platform's uninsured/underinsured
motorist coverage applies during Periods 2 and 3 — meaning passengers
have UM/UIM protection through the platform even if the rideshare
driver themselves was uninsured at a personal level. Your own auto
policy's UM/UIM may also stack on top, depending on the facts and
on Missouri or Kansas stacking rules.

### What does Yonke Law do in rideshare cases?

We handle rideshare cases the same way we handle any serious
vehicle case: full investigation including app data preservation,
recovery of all available insurance layers across the platform and
personal policies, arbitration clause analysis where applicable,
and litigation when the platform's number doesn't match the case.
Rideshare cases benefit from a firm that understands the coverage
tier structure and knows how to preserve the evidence that proves
which period the app was in. *(MIKE: confirm or replace.)*
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
- **Comparative fault:** Pure comparative — recovery available
  even if partially at fault, with damages reduced by your share.
  No cutoff. (MO § 537.765) *(MIKE: confirm)*
- **Transportation Network Company regulation:** Missouri regulates
  rideshare companies under state law. Required minimum coverage
  by period roughly tracks the Uber/Lyft tier structure. *(MIKE:
  confirm specific statute — believed RSMo Chapter 387 or related
  TNC provisions.)*
- **Uninsured motorist stacking:** Generally permitted, but
  policy-specific exclusions apply. *(MIKE: confirm.)*
- **Arbitration:** State courts generally enforce arbitration
  clauses under the Federal Arbitration Act, but unconscionability
  challenges remain available. *(MIKE: confirm current Missouri
  case law on rideshare-specific arbitration enforcement.)*

## Kansas

- **Statute of limitations:** Two years for personal injury
  (K.S.A. 60-513(a)(4)) *(MIKE: confirm)*
- **Comparative fault:** Modified — barred from recovery if 50% or
  more at fault (K.S.A. 60-258a) *(MIKE: confirm)*
- **Transportation Network Company regulation:** Kansas regulates
  rideshare companies under the Transportation Network Company
  Services Act (K.S.A. 8-2701 et seq.) *(MIKE: confirm current
  text)*. Required minimum coverage by period tracks the
  Uber/Lyft tier structure.
- **PIP coverage:** Kansas no-fault PIP applies to vehicle
  occupants generally (K.S.A. 40-3107) *(MIKE: confirm
  application to rideshare passengers specifically.)*
- **Arbitration:** Kansas courts generally enforce arbitration
  clauses, with unconscionability available as a challenge.
  *(MIKE: confirm current Kansas case law on rideshare arbitration.)*
```

Below the columns, one inline link:

> *Not sure which state's rules apply, or whether the arbitration clause in your account will hold up?* [*Send us the basics and we'll tell you →*](#consultation)

---

### Section 6 — Inline trust signal

**Layout:** Charcoal Slate panel. Restrained.

**Sensitivity-aware behavior:** Standard sensitivity. Standard testimonial + outcome reference pattern, with the client's consent and bar-compliance review.

**Placeholder content (always Mike-input):**

```
[MIKE INPUT REQUIRED.]

[Default Mike-input copy here — a representative rideshare case
description (anonymized or with consent), with a quote or short
outcome reference. Should not reference specific dollar figures
unless cleared by Mike. Should not promote outcomes. Pattern
follows car-accident page Section 6. If Yonke Law has not yet
handled a rideshare case to resolution, consider replacing this
with a signed Mike statement on the firm's approach to rideshare
cases generally.]
```

---

### Section 7 — When it's time to talk to a lawyer

**Layout:** Obsidian Graphite. Centered.

**Content:**

```markdown
## When it's worth having someone look at your situation

Not every rideshare-related incident needs a lawyer. A bumped
shoulder from a sudden stop in stop-and-go traffic, no injury
beyond that, no insurer involvement — that's not a case. But the
moment any of the following are true, a free consultation is worth
your time:

- You were a passenger in an Uber, Lyft, or rideshare vehicle that
  was in a crash
- You were a rideshare driver who was on the app when a crash
  happened
- You were hit by a driver who was on a rideshare or delivery app
- Your injuries needed more than a single ER visit — fractures,
  concussion, sustained pain, head injury, or follow-up
- The rideshare platform's claims team has reached out to you
  directly
- The other driver was uninsured, underinsured, or fled the scene
- You're not sure what coverage period the app was in
- Your personal auto insurer is denying coverage because of a
  livery or for-hire exclusion (this affects rideshare drivers
  most often)
- You want to understand whether the arbitration clause in your
  rideshare account will affect your case
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
THE RIDESHARE CRASH REFERENCE
A one-page printable summary of what to do, what to preserve, how
the four coverage periods work, and how Missouri and Kansas rules
differ. Designed to be saved, shared, or kept somewhere
accessible.

[Download the PDF →]
```

**Card 2 — Digital intake:**

```
OR — TURN YOUR ANSWERS INTO AN INTAKE
Walk through the same questions we'd ask in a first conversation.
Roughly 5–10 minutes. At the end, you'll have a clear summary of
your situation and we'll have everything we need to follow up.

Free, confidential, no obligation. Your answers are private and
encrypted. There's a place to note your reader type (passenger,
rideshare driver, struck by rideshare driver) so we ask the right
follow-up questions.

[Start the digital intake →]
```

**Implementation note:** The digital intake should branch on reader type — passenger, rideshare driver, or person hit by rideshare driver. The follow-up questions differ meaningfully for each. Branch logic spec lives with the intake spec.

---

### Section 9 — Related pages

**Layout:** Obsidian Graphite. Horizontal row of cards (3 on desktop, stacked mobile).

**Headline:** `Related guidance`

**Cards:**

```
1. **Car accidents** — *The parent guide if your situation involves
   other drivers, multi-vehicle dynamics, or you weren't using a
   rideshare or delivery app.* → `/just-happened/car-accident/`
2. **Pedestrian accidents** — *If you were struck by a rideshare
   driver while on foot, the procedural and evidentiary picture
   from the pedestrian side applies alongside the rideshare
   coverage analysis here.* → `/just-happened/pedestrian-accident/`
3. **Bicycle accidents** — *If you were struck by a rideshare
   driver while on a bicycle, same combined analysis.*
   → `/just-happened/bicycle-accident/`
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

Two rideshare-specific checks:

- [ ] Does the page treat the four coverage periods as a technicality readers can skim past? (Fail — rewrite.) The coverage period is the case. Section 3 must make this concrete enough that a reader without legal background understands which period probably applied to their situation and why it matters.

- [ ] Does the page reinforce platform-positive framing ("Uber and Lyft provide great coverage" / "rideshare is generally safer than driving") that benefits the platform rather than the reader? (Fail — rewrite.) The page is informational, not promotional for either Uber/Lyft or for ground transportation generally.

---

## 5. Image asset references

| Section | Suggested asset |
|---|---|
| Hero background (optional) | Restrained, dark photographic image. Drive folder `1Sea3j5hCkU8xQLcVNqYjYMj8bjPj57XI` — pick from existing if available. Avoid imagery of branded vehicles, app interfaces, or ride pickup scenes. If no existing asset fits, leave plain. |
| Section 6 trust signal panel | Optional — only if Mike opts for a quoted testimonial. |
| Section 9 Related pages cards | Use existing card assets from the cross-link page types. |

**Forbidden imagery (universal list applies):** Crashed cars, ambulances with flashing lights, gavels, scales of justice, lawyer-with-arms-crossed, generic KC skyline.

**Additional forbidden for this page:**

- Uber, Lyft, or any rideshare platform branding, logos, or trade dress
- Phone screens displaying rideshare app interfaces
- Pickup or dropoff scenes with visible rideshare signage
- Stock photos of "concerned passenger" or "stressed rideshare driver"
- Imagery suggesting that Yonke Law is affiliated with or endorsed by any rideshare platform

---

## 6. Accessibility minimums

Standard checklist from template Section G. No moderate/high-sensitivity additions apply.

One rideshare-specific consideration:

- The four-period coverage explanation in Section 3 is dense and visually demanding. Verify that headings, line length, and spacing make it scannable for readers who may be reading on a phone in a high-stress moment (hospital, ride home from ER, family member's living room).

---

## 7. Statutes and facts that need Mike's confirmation

Flag each item visually in the build until Mike signs off.

- Missouri statute of limitations for personal injury — RSMo § 516.120, five years. Confirm.
- Kansas statute of limitations for personal injury — K.S.A. 60-513(a)(4), two years. Confirm.
- Missouri comparative fault — pure comparative under MO § 537.765. Confirm.
- Kansas comparative fault — modified 50% bar under K.S.A. 60-258a. Confirm.
- Missouri Transportation Network Company regulations — believed RSMo Chapter 387 or related. Confirm specific statute, current text, and minimum coverage requirements by period.
- Kansas Transportation Network Company Services Act — K.S.A. 8-2701 et seq. Confirm current text and minimum coverage requirements by period.
- Uber and Lyft current coverage limits by period — these change with platform policy and state minimums. Section 3 cites $50K/$100K for Period 1 and $1M for Periods 2 and 3 — confirm these are still accurate.
- Major delivery platform coverage structures (DoorDash, Uber Eats, Grubhub, Instacart) — confirm current limits and tier definitions for each.
- Kansas PIP coverage application to rideshare passengers specifically — K.S.A. 40-3107. Confirm.
- Missouri case law on rideshare-specific arbitration enforcement — confirm current landscape.
- Kansas case law on rideshare-specific arbitration enforcement — confirm current landscape.
- Federal Arbitration Act preemption questions in rideshare PI cases — confirm current SCOTUS and federal circuit landscape.
- Personal auto policy livery/for-hire exclusion treatment in Missouri and Kansas — confirm whether either state regulates the scope or wording of these exclusions.
- Bar-advertising compliance review on the entire page, particularly Section 6 and any factual claim about Yonke Law's rideshare experience.

---

## 8. Open items

- Verify the fifteen `(MIKE: confirm …)` flags above before publish. **The arbitration-clause confirmation is the most consequential** because misstating the current landscape could materially mislead readers and create bar-advertising compliance issues. This page should not be published until the arbitration analysis is signed off.
- Confirm hero image selection from the Drive folder, or commission a new restrained image.
- Confirm whether food delivery (DoorDash, Uber Eats, Grubhub, Instacart) warrants its own dedicated Tier 2 page rather than being addressed within this page's FAQ. The framework is essentially the same; the differentiators are coverage limits and specific platform ToS terms. Recommendation: FAQ treatment is sufficient on first pass; revisit if food-delivery case volume justifies a dedicated page.
- Confirm Section 6 trust signal — if Yonke Law has not yet handled a rideshare case to resolution, recommend replacing testimonial with signed Mike statement on the firm's approach to rideshare matters generally.
- Confirm whether the digital intake branch on reader type (passenger / rideshare driver / person hit by rideshare driver) should be a feature of every Tier 2 intake or specific to this page. Recommendation: rideshare-specific.
- Concierge classifier coordination: a rideshare crash involving fatal injuries should route to either this page (with wrongful-death cross-link surfaced) or directly to wrongful-death (with rideshare-accident cross-link). Same coordination point as on pedestrian and bicycle pages.
- Confirm whether "Related reading" links should be live with placeholder routes for not-yet-built pages, or hidden until pages exist. (Car-accident, pedestrian-accident, and bicycle-accident all exist or are alongside in Wave 1.)
- Spanish-language parallel page question — defer per homepage spec.

---

*End of rideshare-accident spec.*
