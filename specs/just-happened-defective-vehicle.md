# Yonke Law — `/just-happened/defective-vehicle/` Page Spec

**Workspace:** Yonke Law Website
**Template type:** Tier 2 variant of the `/just-happened/*` pattern. Dual parent — `just-happened-product-recall.md` (for the product-liability framework) and `just-happened-car-accident.md` (for the crash-aftermath procedural posture). Inherits the standard 11-section structure; calibrated for the vehicle-as-evidence preservation problem, EDR/black box analysis, NHTSA recall workflow, and the increasingly relevant automated driving features that complicate causation.
**Reference docs:** `yonke-homepage-spec.md`, `just-happened-product-recall.md` (product-liability parent), `just-happened-car-accident.md` (crash-aftermath parent), `just-happened-truck-accident.md` (adjacent — when commercial vehicle defect is involved), `just-happened-_template.md`, `Yonke Law — The Standard` (Brand Doctrine & Operating System).
**Pronunciation standard:** Yonke (YONK-ee) Law.
**Sensitivity:** Standard.

---

## 1. Page purpose & intent

This page serves a visitor who was just in a vehicle crash and either suspects, has been told, or is starting to wonder whether something about the vehicle itself caused or worsened the crash. The reader may have:

- Felt the brakes fail
- Had the accelerator stick
- Had an airbag fail to deploy, deploy late, or deploy without impact
- Had a tire blow out without warning
- Experienced steering loss
- Had a seat belt latch fail or unlatch on impact
- Had an automated driving feature behave unexpectedly
- Had a fuel system fire after a low-speed impact
- Survived a rollover
- Read a news story about a recall that matches their vehicle's make, model, and year

The page leads with calm acknowledgment and surfaces the central procedural problem immediately: the vehicle itself is the evidence, and the reader's own insurer typically wants to dispose of it within days. Everything else flows from preserving the vehicle. The page also acknowledges that the reader often doesn't know yet whether they have a defect case — they suspect.

**Critical constraint:** This is informational content, not legal advice. The page must never claim to provide legal advice or create an attorney-client relationship. Standard disclaimers in footer apply.

---

## 2. URL, meta, and SEO/AEO foundation

- **Canonical URL:** `https://yonke.law/just-happened/defective-vehicle/`
- **Page title (browser tab):** `What to do after a crash you think your vehicle caused — Yonke Law (Missouri and Kansas)`
- **Meta description (155 chars target):** `Brakes failed? Airbag didn't deploy? Tire blew out? Here's what to do in the first 24 hours, what to preserve, and how Missouri and Kansas rules differ.`
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
Your vehicle failed in the crash. Take a breath.

Subhead (body, lighter):
Whether the brakes didn't catch, the airbag didn't deploy, a tire
blew, or something just didn't feel right — this is the clearest
path forward. The vehicle itself is the evidence, and that evidence
has a short shelf life. We don't operate on insurance company
timelines.

Primary CTA (Muted Gold or Chrome Highlight):
Read the next 24 hours →   (anchor to #next-24)

Secondary link (text only, Steel Silver):
Or talk to someone now →   (anchor to #consultation)
```

**Optional background treatment:** Restrained low-light photographic image. No imagery of crashed vehicles, mechanical components, or branded vehicle elements. If no existing asset fits, leave plain.

---

### Section 2 — The next 24 hours

**Layout:** Charcoal Slate background. Max-width 800px. H2 + H3 hierarchy for schema markup.

**Anchor ID:** `#next-24`

**Implementation note:** Wrap this section in `HowTo` schema. Each numbered item gets an `HowToStep` schema entry.

**Content:**

```markdown
## The next 24 hours

The decisions made in the first day or two shape what's possible
later — sometimes by a lot. Vehicle defect cases have one extra
problem: the evidence rolls away on a flatbed. Once your insurer
takes the vehicle, totals it, and disposes of it for salvage, the
core of any product liability case can disappear. Order matters.

### Right now

1. **Get medical attention, even if you think you're fine.**
   Adrenaline masks injury. Concussions, internal injuries, and
   spinal damage often don't announce themselves at the scene.
   A clean medical record from the day of the crash is also the
   single most important piece of evidence in your case.

2. **Tell the responding officer what you experienced about the
   vehicle.** Brakes that didn't catch. The pedal that stayed
   down. The steering that didn't respond. The airbag that didn't
   deploy — or deployed without impact. Even if you can't explain
   it in mechanical terms, get it into the report. "Driver reports
   the vehicle did not respond to brake input" is a critical line
   in a police report.

3. **Photograph the vehicle from every angle, inside and out.**
   Engine bay if accessible. Tires. Wheels. Inside the cabin —
   airbag deployment status, seat positions, dashboard warning
   lights still illuminated, the steering wheel, anything that
   looks unusual. Photograph the components, not just the damage.

4. **Get the other driver's information if there was one.**

5. **Get witness names and phone numbers before anyone leaves.**

6. **Do not let the vehicle be towed without a destination you
   approve.** This is the most important step on this page. If
   the tow truck is taking it to an insurance-controlled salvage
   yard, ask for the location, write it down, and assume you have
   a short window — sometimes as little as 7 to 14 days — before
   the vehicle is auctioned, parted out, or crushed.

### Within 24 to 48 hours

7. **Look up your vehicle's recall history at the NHTSA website
   using your VIN.** The site is `nhtsa.gov/recalls`. Enter your
   VIN, and you'll see every open recall for your specific
   vehicle. Screenshot the page. If your crash involves a component
   that matches an open recall, that significantly changes the
   evidentiary picture.

8. **Pull your vehicle's service history.** Recent service that
   touched the failed component — brakes, steering, tires,
   suspension, airbag system — is critical evidence whether the
   case turns on a manufacturer defect, a maintenance failure, or
   both. Most dealers and chain service centers retain records you
   can request.

9. **Do not authorize repairs.** Not the dealer. Not a body shop.
   Not a friend with a wrench. Once the failed component is
   repaired, the evidence is gone. If your insurer is pushing for
   a repair authorization, push back — politely if possible — and
   ask for time.

10. **Do not give a recorded statement to anyone — your insurer,
    the other driver's insurer, the manufacturer's claims line.**
    What you describe about how the vehicle behaved is evidence,
    and how it gets recorded matters.

### Within 48 to 72 hours

11. **Write down what you remember about the vehicle's behavior
    while it's fresh.** Order of events. What you felt. What you
    heard. What warning lights came on, and when. Whether the
    failure happened all at once or built over miles. Specific
    sensory details — burning smell, vibration, sound — are
    powerful evidence and they fade from memory faster than the
    crash itself.

12. **Send a preservation letter to the manufacturer, dealer, and
    your insurer.** This is the second most important step on this
    page. A preservation letter is a formal notice instructing the
    recipient to retain the vehicle, all components, all service
    records, and any related data (including event data recorder
    output and any telemetry uploaded to the manufacturer's
    systems) for litigation. A lawyer can send these on your
    behalf, and they go out within days — not weeks.

13. **Talk to someone before you sign anything from your insurer.**
    Settlement, release, subrogation authorization — any of these
    can affect your ability to pursue the manufacturer later. A
    free consultation costs you nothing.
```

End of section CTA (text link, inline):

> *Want a printable version to keep, share, or hand to a family member?* [*Download the Vehicle Defect Reference →*](/resources/checklists/defective-vehicle-reference/)

---

### Section 3 — What insurance companies and manufacturers typically do

**Layout:** Obsidian Graphite. Max-width 800px. Informational, not adversarial.

**Content:**

```markdown
## What insurance companies and manufacturers typically do

Vehicle defect cases run two parallel insurance dynamics, and
neither operates the way you might expect.

**Your own insurer** generally wants two things, and they often
conflict with what you need. They want to pay the property-damage
claim quickly, total the vehicle, and dispose of it. They also
want to subrogate against the manufacturer — that is, sue the
manufacturer to recover what they paid you. The subrogation goal
is good for you in principle. The disposal goal is bad for you in
practice, because once the vehicle is gone, the case the insurer
wants to bring (and your separate personal injury case against the
manufacturer) both lose their best evidence.

**The other driver's insurer** has a different game. If the crash
looks like it might have been caused by a vehicle defect rather
than driver error, that's potentially their defense — "our driver
didn't cause this, the vehicle did." Expect them to push toward
that framing if the facts are ambiguous, especially if you were
the other driver.

**The manufacturer's claims team** does not exist in the way an
auto insurer's adjuster does. The manufacturer has lawyers and
investigators on retainer who get involved when a serious crash
or injury claim is reported. They are sophisticated, well-funded,
and well-coordinated with NHTSA. They will not call you to
introduce themselves. They will, however, be reviewing the
vehicle, the service records, and the telematics data the moment
they have access — which is one more reason vehicle preservation
matters.

Within the first few days, expect:

- **An aggressive total-loss valuation from your own insurer.** A
  fast settlement on the property-damage claim that closes out
  the vehicle disposition before the personal injury case has
  developed.

- **A subrogation authorization request.** Buried in property
  damage paperwork, this gives your insurer the right to pursue
  the manufacturer on your behalf — but may also affect what
  control you retain over the litigation strategy. Read carefully.

- **The "driver error" frame** from the other side. Especially
  in cases involving acceleration, braking, or steering anomalies,
  expect the other driver's insurer to argue the failure was a
  driver-input mistake, not a defect.

- **Quiet acquisition of the vehicle by the manufacturer or its
  agents** in cases involving serious injury or fatality. If the
  vehicle is taken from a salvage yard or repair facility without
  your knowledge, that's a sign the manufacturer's team has
  already begun its own investigation.

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
## Common questions after a crash involving a defective vehicle

### How long do I have to file a vehicle defect claim in Missouri?

In Missouri, the statute of limitations for personal injury,
including injuries caused by defective products, is **five years**
from the date of the crash *(MIKE: confirm current text of
§ 516.120)*. Missouri also has a separate **statute of repose**
that may bar claims based on how long ago the vehicle was
manufactured or sold — see the question below on the statute of
repose.

### How long do I have to file in Kansas?

In Kansas, the statute of limitations for personal injury is
**two years** from the date of the crash, under K.S.A. 60-513(a)(4)
*(MIKE: confirm)*. Kansas also has a statute of repose under the
Kansas Product Liability Act that may bar claims based on the age
of the vehicle. See the question below.

### Does the statute of repose apply to my vehicle?

Possibly. A statute of repose is different from a statute of
limitations — it cuts off liability based on how long ago the
product was manufactured or first sold, regardless of when the
injury happened.

In Missouri, RSMo § 516.097 *(MIKE: confirm)* provides a statute
of repose for product liability claims with specific time windows
and exceptions. In Kansas, K.S.A. 60-3303 *(MIKE: confirm)*
provides for a ten-year statute of repose from the date the
product was first sold or first used by its initial user, with
specific exceptions for cases involving warranty, fraud,
concealment, or other circumstances.

The interaction between the statute of limitations and the
statute of repose is fact-intensive. For older vehicles, this can
be decisive. For newer vehicles, generally not an issue.

### How do I know if my crash was caused by a defect?

You don't have to know. You suspect, based on what you experienced.
Establishing that a defect actually caused or contributed to the
crash is what investigation, accident reconstruction, and component
inspection are for. The reader's job at this stage is not to prove
the defect — it's to preserve the evidence that lets someone else
figure it out.

### What if my vehicle has been recalled?

That changes the evidentiary picture significantly. An open recall
for the component that failed is evidence that the manufacturer
already knew there was a problem. The case still requires proof
that this defect caused this crash, but the recall makes that
proof much easier to develop.

You can look up open recalls for your specific vehicle by VIN at
`nhtsa.gov/recalls`. Screenshot the page when you find an
applicable recall — recall databases update, and the precise text
in effect on the day of your crash may matter later.

### What if the recall hasn't been issued yet?

Many defect cases involve components that have not yet been
recalled. NHTSA's investigation process can run for years before a
recall is mandated. The absence of a recall is not evidence that
the vehicle is safe — it's only evidence that NHTSA has not yet
acted. Many vehicle defect cases are brought against manufacturers
on components that are recalled only later, sometimes years later.

### What happens to my vehicle? Can I get it repaired?

You need to keep the vehicle preserved exactly as it was after
the crash, with no repairs to the components in question, until
the question of whether a defect contributed is resolved. This
is often weeks or months, sometimes longer for complex cases.

If your insurer is pushing for a repair authorization or a total-
loss settlement, you can usually negotiate time — but you should
not sign anything that releases the vehicle, releases the
manufacturer, or authorizes repair until you've talked to someone
who can read the documents.

### What if my insurance company already paid out and released the vehicle?

The case is harder but not always lost. Other evidence may still
exist: event data recorder output (if downloaded before disposal),
photographs taken at the scene, the police report, your service
records, the vehicle identification information, and any
manufacturer telematics data that was uploaded automatically.
Whether enough evidence remains is a fact-specific question.

### What about Tesla Autopilot, GM Super Cruise, or other automated
driving features?

Cases involving automated driving features are increasingly common
and they're legally distinct from traditional component-defect
cases. The questions become: Was the system engaged? Did it
behave as the manufacturer represented it would? Did the driver
have a reasonable opportunity to override? Was there a known
limitation that should have prevented the system from operating in
the conditions where it did?

*(MIKE: confirm current Missouri and Kansas case law on automated
driving feature claims — this is a rapidly evolving area, and the
factual posture varies significantly by manufacturer and feature.)*
Vehicle telemetry data, system logs, and dashcam footage from
within the vehicle are critical evidence. Preservation steps are
the same; the analysis is different.

### What does Yonke Law do in vehicle defect cases?

We handle vehicle defect cases the same way we handle any serious
crash case: full investigation including component preservation,
event data recorder analysis, recall history review, NHTSA
complaint database searches, service-history review, and where
appropriate, expert mechanical and engineering review. We
coordinate with the personal-injury side of the crash separately
from the product liability side, because the manufacturer's
defense team is different from an ordinary auto insurer and
requires a different approach. *(MIKE: confirm or replace.)*
```

---

### Section 5 — Missouri vs. Kansas: the rules that matter

**Layout:** Obsidian Graphite. Two-column on desktop, stacked on mobile.

**Headline:** `How the rules differ depending on where it happened`

**Content:**

```markdown
## Missouri

- **Statute of limitations:** Five years for personal injury,
  including product liability (RSMo § 516.120) *(MIKE: confirm)*
- **Statute of repose:** RSMo § 516.097 *(MIKE: confirm current
  text, periods, and exceptions)* — bars certain product liability
  claims based on the age of the product at the time of injury.
- **Comparative fault:** Pure comparative — recovery available
  even if partially at fault, with damages reduced by your share.
  No cutoff. (MO § 537.765) *(MIKE: confirm)*
- **Strict liability:** Missouri recognizes strict liability in
  product cases (RSMo § 537.760 et seq.) *(MIKE: confirm)* —
  meaning the manufacturer can be liable for a defective product
  without proof of negligence, on a showing that the product was
  defective and unreasonably dangerous.
- **Discovery rule:** May extend the SOL for latent defects where
  the cause was not reasonably knowable at the time of injury.
  Fact-specific. *(MIKE: confirm.)*

## Kansas

- **Statute of limitations:** Two years for personal injury,
  including product liability (K.S.A. 60-513(a)(4)) *(MIKE: confirm)*
- **Statute of repose:** K.S.A. 60-3303 — ten-year repose period
  from initial use, with exceptions *(MIKE: confirm current text
  and exceptions)*
- **Comparative fault:** Modified — barred from recovery if 50%
  or more at fault (K.S.A. 60-258a) *(MIKE: confirm)*
- **Kansas Product Liability Act:** K.S.A. 60-3301 et seq.
  *(MIKE: confirm current text)* — provides the framework for
  product liability claims including strict liability, design
  defect, manufacturing defect, and failure to warn.
- **Useful safe life:** Kansas allows manufacturers to argue that
  the product had exceeded its "useful safe life" at the time of
  injury, which can bar recovery in older-vehicle cases.
  *(MIKE: confirm.)*
```

Below the columns, one inline link:

> *Not sure whether the statute of repose applies to your vehicle, or how the discovery rule might affect timing?* [*Send us the basics and we'll tell you →*](#consultation)

---

### Section 6 — Inline trust signal

**Layout:** Charcoal Slate panel. Restrained.

**Sensitivity-aware behavior:** Standard sensitivity. Standard testimonial + outcome reference pattern, with the client's consent and bar-compliance review.

**Placeholder content (always Mike-input):**

```
[MIKE INPUT REQUIRED.]

[Default Mike-input copy here — a representative vehicle defect
case description (anonymized or with consent), with a quote or
short outcome reference. Should not reference specific dollar
figures unless cleared by Mike. Should not promote outcomes.
Pattern follows car-accident page Section 6. If Yonke Law has not
yet handled a vehicle defect case to resolution, recommend
replacing this with a signed Mike statement on the firm's approach
to product cases generally, including coordination with national
counsel on MDL matters where appropriate.]
```

---

### Section 7 — When it's time to talk to a lawyer

**Layout:** Obsidian Graphite. Centered.

**Content:**

```markdown
## When it's worth having someone look at your situation

Not every crash involves a defect, and not every defect produces a
viable case. But the moment any of the following are true, a free
consultation is worth your time:

- The brakes, steering, accelerator, or another vehicle system
  did not respond the way you expected at the moment of the crash
- The airbag did not deploy, deployed late, deployed without
  impact, or caused injury beyond what would be expected
- A tire blew out without warning, especially on a relatively
  new tire or a tire involved in a prior recall
- A seat belt failed to restrain you or unlatched on impact
- The vehicle caught fire after a low-speed impact
- You survived a rollover crash, or someone you love did not
- You were using or relying on an automated driving feature
  (Tesla Autopilot, GM Super Cruise, Ford BlueCruise, others)
  when the crash happened
- Your vehicle has an open or pending recall for the component
  that may have contributed to the crash
- A mechanic, insurance adjuster, or news report has suggested
  to you that the vehicle may have been defective
- Your insurer is pressing you to authorize repair or accept a
  total-loss settlement before you've had time to think about it
- You simply want to understand whether a case can be brought and
  what it would involve

A consultation is exactly what it sounds like — a conversation.
No fee. No obligation. If we don't think a case can be brought, we
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
THE VEHICLE DEFECT REFERENCE
A one-page printable summary of what to do, what to preserve, how
to look up recalls by VIN, and how Missouri and Kansas product
liability rules differ. Designed to be saved, shared, or kept
where you can find it before the tow truck arrives.

[Download the PDF →]
```

**Card 2 — Digital intake:**

```
OR — TURN YOUR ANSWERS INTO AN INTAKE
Walk through the same questions we'd ask in a first conversation,
including the specific details of how the vehicle behaved that
help us assess whether a defect case may exist. Roughly 5–10
minutes. At the end, you'll have a clear summary of your situation
and we'll have everything we need to follow up.

Free, confidential, no obligation. Your answers are private and
encrypted.

[Start the digital intake →]
```

**Implementation note:** The digital intake should branch on whether the vehicle still exists / has been preserved, because the preservation status determines the urgency of follow-up and the kind of investigation that's possible. Branch logic spec lives with the intake spec.

---

### Section 9 — Related pages

**Layout:** Obsidian Graphite. Horizontal row of cards (3 on desktop, stacked mobile).

**Headline:** `Related guidance`

**Cards:**

```
1. **Car accidents** — *The general crash-aftermath guide if your
   situation may not involve a vehicle defect, or if you're
   reading for the driver-side and crash-side of your case.*
   → `/just-happened/car-accident/`
2. **Product recalls** — *The broader product liability framework
   if your case may also involve a recalled component beyond a
   vehicle defect (tires, child car seats, replacement parts).*
   → `/just-happened/product-recall/`
3. **Truck accidents** — *If the defect involved a commercial
   vehicle — semi truck, delivery truck, bus, or commercial fleet
   vehicle — the commercial regulatory framework changes the
   analysis.* → `/just-happened/truck-accident/`
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

Two defective-vehicle-specific checks:

- [ ] Does the page name specific manufacturers, models, or recalls in a way that could be read as promoting Yonke Law as having a particular position against any manufacturer? (Fail — rewrite.) The page should describe component categories (brakes, airbags, tires, automated driving features) without naming specific lawsuits, manufacturers, or known recall events. Where examples are necessary, use generic component descriptions.

- [ ] Does the page suggest that the reader can or should determine on their own whether their crash was caused by a defect? (Fail — rewrite.) The reader's job is to preserve evidence and seek guidance, not to diagnose mechanical causation. The page should consistently reinforce that the investigation is what determines whether a defect contributed, not the reader's intuition.

---

## 5. Image asset references

| Section | Suggested asset |
|---|---|
| Hero background (optional) | Restrained, dark photographic image. Drive folder `1Sea3j5hCkU8xQLcVNqYjYMj8bjPj57XI` — pick from existing if available. Avoid imagery of crashed vehicles, exposed mechanical components, or branded vehicle elements. If no existing asset fits, leave plain. |
| Section 6 trust signal panel | Optional — only if Mike opts for a quoted testimonial. |
| Section 9 Related pages cards | Use existing card assets from the cross-link page types. |

**Forbidden imagery (universal list applies):** Crashed cars, ambulances with flashing lights, gavels, scales of justice, lawyer-with-arms-crossed, generic KC skyline.

**Additional forbidden for this page:**

- Branded vehicles or manufacturer logos of any kind
- Exposed mechanical components — engine bays, brake systems, airbag deployment images
- Crash test footage or crash test dummies
- Imagery suggesting Yonke Law has a particular position against any specific manufacturer
- Stock photos of "concerned driver inspecting damage" or similar

---

## 6. Accessibility minimums

Standard checklist from template Section G. No moderate/high-sensitivity additions apply.

One defective-vehicle-specific consideration:

- The Section 4 FAQ is dense with statutory references. Verify that the formatting makes statute citations distinguishable from body text without relying solely on italics — important for screen readers.

---

## 7. Statutes and facts that need Mike's confirmation

Flag each item visually in the build until Mike signs off.

- Missouri statute of limitations for personal injury — RSMo § 516.120, five years. Confirm.
- Kansas statute of limitations for personal injury — K.S.A. 60-513(a)(4), two years. Confirm.
- Missouri statute of repose — RSMo § 516.097. Confirm current text, time periods, and exceptions. **This is a critical recurring complexity across the product-recall and defective-vehicle pages.**
- Kansas statute of repose — K.S.A. 60-3303, ten years from initial use. Confirm current text and exceptions.
- Missouri comparative fault — pure comparative under MO § 537.765. Confirm.
- Kansas comparative fault — modified 50% bar under K.S.A. 60-258a. Confirm.
- Missouri strict liability framework — RSMo § 537.760 et seq. Confirm current text.
- Kansas Product Liability Act — K.S.A. 60-3301 et seq. Confirm current text.
- Kansas "useful safe life" doctrine — confirm whether and how Kansas allows this argument, and what evidentiary burden applies to the manufacturer raising it.
- Missouri discovery rule application to latent product defects — confirm current case law on when it extends the SOL and the limits of the doctrine.
- Automated driving feature case law in Missouri and Kansas — rapidly evolving area. Confirm current landscape on Tesla Autopilot, GM Super Cruise, Ford BlueCruise, and similar features. Mike-level review essential before publish.
- NHTSA recall lookup URL — currently stated as `nhtsa.gov/recalls`. Confirm this is the current live URL.
- Bar-advertising compliance review on the entire page, particularly any factual claim about Yonke Law's product liability experience and capacity to handle MDL or class action coordination.

---

## 8. Open items

- Verify the twelve `(MIKE: confirm …)` flags above before publish. **The statute of repose confirmation in both states is the most consequential** because misstating it could materially mislead readers about whether their case is viable.
- Confirm hero image selection from the Drive folder, or commission a new restrained image. The defective-vehicle scenario has almost no appropriate existing assets — most stock imagery for vehicle defects is overtly product-shaming or crash-pornographic.
- Confirm Section 6 trust signal — if Yonke Law has not yet handled a vehicle defect case to resolution, recommend replacing testimonial with signed Mike statement on the firm's approach to product cases generally, including how the firm coordinates with national counsel on MDL matters where appropriate.
- Confirm whether the FAQ should include a question on Yonke Law's relationship with national product liability counsel. Most regional firms partner with national product liability firms on serious vehicle defect cases because of the resource demands of taking on a major manufacturer. The page does not currently address this. Recommendation: add the question in a follow-up pass, with Mike-input copy on how the firm handles these cases.
- Concierge classifier coordination: a vehicle defect case may also be a wrongful-death case or a TBI case. Routing should surface both the defective-vehicle framework and the result overlay framework when the reader's input suggests both are present.
- Confirm whether "Related reading" links should be live with placeholder routes for not-yet-built pages, or hidden until pages exist. (Car-accident, product-recall, and truck-accident all exist.)
- Spanish-language parallel page question — defer per homepage spec.

---

*End of defective-vehicle spec.*
