# Yonke Law — Homepage Build Spec

**Workspace:** Yonke Law Website
**Pronunciation standard:** Yonke (YONK-ee) Law — use this form in any voice/AI workflow.
**Source of truth:** Yonke Law - The Standard (Brand Doctrine & Operating System).
**Last updated:** Concierge hero locked; footer disclaimer added; architectural note added.

---

## Architectural decisions (locked)

- **Concierge interface** is built as a **Nucleus Platform feature**, surfaced first on Yonke Law Website. Yonke is the inaugural deployment; future Nucleus tenants inherit it. Backend classification, panel content templates, and the People Portal handoff all live in Nucleus infrastructure.
- **Homepage hero** uses the concierge as the primary interaction. The four quick-pick doors remain as a fallback for users who don't want to type or arrive in a degraded state.
- **Footer disclaimer block** is mandatory on every page (homepage, all sub-pages, all interior pages). Implement as a shared `<Footer />` component.

---

## 1. Build constraints (read first)

- **Doctrine wins.** If a tactic looks modern but undermines clarity, doctrine wins. (§28)
- **Dark, high-contrast, minimal.** No decorative clutter. (§13, §18)
- **Every interior page is a landing page.** Each must carry its own clarity and proof. (§19)
- **Plain language. Direct voice.** No theatrical, chest-thumping, generic-PI-firm copy. (§11)
- **Pronunciation:** Yonke (YONK-ee) Law in every AI media prompt and screen-reader hint.
- **No autonomous publishing.** All Spotlight Corner content requires Mike's approval before going live. (§26)

---

## 2. Design tokens

### Colors (per doctrine §14)

| Token | Hex | Use |
|---|---|---|
| `--obsidian-graphite` | `#1C1C1E` | Primary background, dominant surfaces |
| `--charcoal-slate` | `#2E2F33` | Secondary panels, cards |
| `--steel-silver` | `#C9CCD1` | Logo tone, accents, dividers |
| `--chrome-highlight` | `#F2F4F7` | Contrast text, lifted UI |
| `--deep-forest` | `#1F3D2B` | Positive states, trust moments (Mood: Green) |
| `--muted-gold` | `#B89B5E` | Selective outcome highlights, recognition |
| `--signal-red` | `#7A1C1C` | Alerts, urgent issues (Mood: Red) |
| `--soft-gray` | `#E5E7EB` | Form fields, quiet backgrounds (Mood: Gray) |

### Typography (per doctrine §15)

- **Display / serif authority:** Libre Baskerville or Playfair Display
  - Use for: hero headline, section headers, page titles
  - Weight: 400–700; tracking tight on display sizes
- **Body / UI:** Inter (web-safe default), fallback Helvetica Neue / SF Pro / Aptos
  - Use for: paragraphs, nav, buttons, forms
  - Body line-height: 1.6
- **Avoid trendy fonts entirely.** Headlines feel controlled. Body feels effortless to scan.

### Spacing principles

- Generous whitespace (doctrine §13: "breathing room signals confidence and control").
- Strong vertical rhythm. Sections breathe.
- Mobile-first responsive (single column on narrow viewports; preserve nav clarity).

---

## 3. Section-by-section spec

### Section 1 — Sticky top navigation

**Layout:** Full-width, fixed top, dark background.

**Left:** YL monogram logo (see `YL - Logo 2 Strong Edges - Transparent Background.png`). Click → home.

**Center / right:** Primary nav links in this order:
1. Just Happened?
2. What We Handle
3. How It Works
4. Spotlight Corner
5. Talk to Us

**Far right:** Phone number `816-221-6400` (clickable `tel:` link) + primary CTA button **Talk to Us**.

**Mobile:** Collapse to hamburger; phone + CTA stay visible.

---

### Section 2 — Hero (Concierge interface)

**Layout:** Full-viewport height on desktop. Dark background (`--obsidian-graphite`). Generous vertical breathing room. NO stock photography. Subtle background treatment options: solid graphite, dim photographic background with heavy dark overlay (one of the YL client scene images), or YL silver/chrome textural element.

**Architectural note:** The concierge is built as a feature of **Nucleus Platform** and surfaced on this page. Yonke Law Website is the first deployment; future Nucleus tenants inherit it. See the separate Nucleus Concierge spec for backend architecture.

**Hero content stack (centered, max-width 1100px):**

1. **Pre-headline (eyebrow, small caps):** `YONKE (YONK-ee) LAW` — Steel Silver, letter-spaced.

2. **Headline (display serif, large):**
   > *We represent people hurt by someone else's negligence.*

3. **Sub-headline (body, slightly lighter, max 2 lines):**
   *With clarity. With strategy. Without compromise.*
   *Tell us what happened — we'll help you find your way.*

4. **The concierge input (the primary interaction):**

   A single large text input, framed clearly. Placeholder text rotates between examples to help cold-start users know what to type:

   ```
   [Large text input — full width, rounded, with subtle border ]
   Placeholder examples (rotating every 4–5 seconds):
     • "I was rear-ended on Ward Parkway yesterday..."
     • "My dad fell in a nursing home and broke his hip..."
     • "I got a settlement offer from State Farm and I'm not sure it's fair..."
     • "I'm just researching — not sure if I need a lawyer..."
     • "What happened to me at the hospital was preventable..."

   [Submit button: "Help me understand →"]
   ```

5. **Fallback row — the four quick-pick doors (below the input, smaller):**

   Eyebrow above the row: `Or pick a starting point —`

   Same 4 routing tiles as before, but treated as secondary alternatives, not primary CTAs:

   | Tile | Routes to |
   |---|---|
   | I was just in an accident | `/just-happened/` |
   | Someone I love was hurt | `/just-happened/family-perspective/` |
   | I'm researching my options | `/how-it-works/` |
   | I have an offer I'm not sure about | `/resources/offer-review/` |

   These exist for two reasons: (1) users who don't want to type, and (2) users who land with JavaScript disabled or in a failure state.

**Behavior when the user submits text:**

1. The page scrolls down slightly (or stays in place with the input becoming sticky).
2. Below the input, **four panels** appear with a brief, dignified animation (gentle fade-in, not theatrical).
3. The panels are populated based on a topic classification of what the user typed.
4. The user's typed input is preserved and shown above the panels: *"Based on what you told us — '[user's typed text]'"*
5. If classification confidence is low or topic is unclear, the system defaults to a general response and surfaces the four quick-pick doors more prominently.

**Important UX detail — empty input handling:**

If the user clicks Submit without typing, gently show the four quick-pick doors with the prompt "*Not sure where to start? Pick a starting point.*" Don't punish them with an error.

---

### Section 2.5 — The Four Panels (concierge response)

**This is what appears after the user submits text in Section 2.**

**Layout:** 2x2 grid on desktop, stacked on mobile. Each panel is a card on `--charcoal-slate` background. Equal visual weight — no panel is more important than the others.

**Each panel has a consistent shape:**
- Eyebrow tag (small caps, Steel Silver) identifying the panel type
- Honest framing line (always shown — this is the doctrine-compliant disclosure)
- Substantive content
- One soft CTA per panel

**Panel 1 — Take a breath** *(universal — same for all topics)*

```
Eyebrow:  FIRST THINGS FIRST

Headline: Take a breath.

Body: What you're feeling right now is real and reasonable. People in your
situation often describe shock, confusion, fear about money, and uncertainty
about who to trust. That's not weakness — that's an honest response to a
hard moment.

You don't have to figure everything out tonight. There's a path forward,
and most of it isn't urgent in the way it feels.

CTA: Read stories from people who've been here →  → /about/testimonials/
```

**Panel 2 — What to do** *(topic-specific)*

```
Eyebrow:  PRACTICAL STEPS

Headline: Here's what's generally useful.

Honest framing:
"I can't give you legal advice about your specific situation — only an
attorney can do that. But here's a checklist that's been helpful to others
in cases like this."

Body: [Topic-specific checklist preview — for car accident, shows the
first 5 items from the Personal Injury Checklist. For nursing home, shows
the nursing home variant. Etc.]

CTAs:
- [ Download the printable checklist (PDF) → ]  → respective PDF
- [ Or walk through it digitally → ]  → /talk-to-us/digital-intake/?topic=[detected_topic]
```

The digital walkthrough is the conversion moment: it pre-fills the People Portal intake with the topic and the user's typed description.

**Panel 3 — What's the process** *(mostly universal, light per-topic flavor)*

```
Eyebrow:  HOW THESE CASES MOVE

Headline: The general path, in plain English.

Honest framing:
"I can't evaluate your case — but here's how cases like this typically
move through the legal process, from start to resolution."

Body: A compressed version of the 7-phase journey from doctrine §6:
  1. Incident & aftermath
  2. Medical treatment & recovery
  3. Investigation & retaining counsel
  4. Valuing the claim
  5. Negotiation
  6. Litigation (if necessary)
  7. Resolution

Each step is one sentence. Per-topic flavor where it matters
(e.g., for medical malpractice, note that the timeline is usually
longer and requires expert review early).

CTA: See the full process →  → /how-it-works/
```

**Panel 4 — Talk to someone** *(universal)*

```
Eyebrow:  IF YOU'D LIKE

Headline: We're here when you're ready.

Body: If you'd like Yonke Law to look at what happened, send us the basics.
Mike or someone on the team will respond — usually the same business day.
Consultations are free. No pressure. If we don't think you need a lawyer,
we'll tell you straight.

Inline preview of mini-form:
  [Field: First name]
  [Field: Phone]
  [Field: Email]
  [Field: What happened — pre-filled with the user's typed input from Section 2]
  [ Submit: "Start the Conversation" ]

Below the form:
  Or call 816-221-6400 — same response either way.
```

---

### Section 2.6 — Classification taxonomy (build reference)

The concierge classifier needs to recognize these topic categories. Each maps to a specific set of panel content variations.

| Topic ID | User language patterns | Panel 2 (What to do) variation | Panel 3 flavor |
|---|---|---|---|
| `car-accident` | car, rear-ended, T-boned, fender bender, totaled, crash | Personal Injury Checklist (car accident variant) | Standard 7-phase |
| `truck-accident` | semi, 18-wheeler, big rig, commercial truck, FedEx, UPS | Personal Injury Checklist (truck variant) | Standard + note on commercial defendants & complexity |
| `medical-error` | hospital, doctor, surgery, misdiagnosis, malpractice, wrong medication | Medical Malpractice checklist | Standard + note on expert review and longer timelines |
| `wrongful-death` | died, killed, passed away, lost my husband/wife/child | Wrongful Death support content | Standard + note on family-perspective process |
| `nursing-home` | nursing home, assisted living, elder, my mom/dad in a facility | Nursing Home checklist | Standard + note on regulatory complaints |
| `slip-and-fall` | fell, slip, store, warehouse, premises, hazard | Premises Liability checklist | Standard |
| `dangerous-drug` | medication, drug, side effect, recalled, pharmacy | Dangerous Drugs reference | Standard + note on multi-district litigation |
| `motorcycle` | motorcycle, bike, helmet | Motorcycle checklist | Standard |
| `construction-workplace` | construction, work, OSHA, job site, on the job, scaffolding | Workplace Injury checklist | Standard + workers' comp 30-day MO rule callout |
| `have-offer` | settlement, offer, check, signed, State Farm, GEICO offered | Offer evaluation content | Skip — replace with "what to look for in an offer" |
| `researching` | researching, looking for, considering, not sure if I need | Skip Panel 1; show educational content | Standard, framed as orientation |
| `general` *(fallback)* | anything else, low confidence, ambiguous | Generic Personal Injury Checklist | Standard |

**Classifier confidence threshold:** If the classifier returns confidence below `0.6` on any specific topic, default to `general` and prominently surface the four quick-pick doors.

**Out of scope (do NOT classify into these — surface a different message):**
- Criminal defense queries
- Family law / divorce
- Bankruptcy
- Anything outside personal injury / wrongful death / medical malpractice

For out-of-scope queries, show a single panel: *"It sounds like you may be looking for a different kind of help. Yonke Law focuses on personal injury, medical malpractice, and wrongful death cases. Here are resources that may be useful..."*  with links to KCMO Bar Association referral service.

---

### Section 3 — The non-mill promise

**Layout:** Charcoal Slate background. Centered, max-width 900px. Strong serif headline + 2–3 short sentences in body.

**Copy direction (per doctrine §29):**

> ## We don't operate like a mill.
>
> Most personal injury firms optimize for speed and settlement. We optimize for outcome.
> That means full preparation on every case worth taking — and the willingness to go to verdict when settling short would shortchange the person.
> No reflexive settlements. No silence between updates. No fee-grab tactics.

**Optional small element below:** A 3-up grid showing the differentiation pairs from doctrine §29:

| Most firms | Yonke Law |
|---|---|
| Optimize for speed | Optimize for rightful outcome |
| Treat silence as normal | Treat communication as part of representation |
| Designs firm-first processes | Designs person-first experiences |

---

### Section 4 — How It Works preview

**Layout:** Horizontal timeline strip showing the 7 phases from doctrine §6. Obsidian Graphite background. Each phase = a card with phase number, name, and one-sentence description.

**Phases:**

1. **Incident & Aftermath** — Scene safety, evidence preservation, early guidance.
2. **Medical Treatment** — Continuity of care, documentation of impact.
3. **Hiring Counsel & Investigation** — Communication shifts to us. You focus on recovery.
4. **Valuing the Claim** — Economic and non-economic damages, fully accounted for.
5. **Pre-Litigation Negotiation** — Demand package, disciplined offer evaluation.
6. **Litigation** — Filings, discovery, depositions — explained clearly at every step.
7. **Resolution** — Settlement, mediation, or trial. Your decision, our preparation.

**CTA below the strip:** `See the full process →` → `/how-it-works/`

---

### Section 5 — "How are you feeling?" (Mood Monitor demo)

**This is the differentiator section. It must work, not just describe.**

**Layout:** Charcoal Slate background. Centered, max-width 800px.

**Section eyebrow:** `THE PEOPLE PORTAL`

**Headline:**
> ## Most law firms never ask how you're actually doing.
> ## We do — and we built a tool for it.

**Body:** *We check in on the people we represent. Not just on the case. Real-time visibility into how you're feeling shapes how your case is handled. Try it — pick a state below and see what happens.*

**Interactive component (the demo):**

Three buttons in a row, each in its doctrine color:
- **Green — I feel informed and steady.** (`--deep-forest`)
- **Gray — I'm processing. Some of this is confusing.** (`--soft-gray` on dark)
- **Red — I'm anxious or frustrated. I need attention.** (`--signal-red`)

When clicked, the area below the buttons reveals (per doctrine §9):

| If clicked | Reveal copy |
|---|---|
| Green | *Good. We continue the normal cadence. Updates stay regular. Your case is in motion.* |
| Gray | *We've flagged this in the system. You'll get an explanatory update within 24 hours — plain-language clarification of what's pending and why.* |
| Red | *Mike is notified directly. A case-team member will reach out within hours, not days. You will not be left waiting.* |

**CTA below the interactive:** `See how the People Portal works →` → `/how-it-works/people-portal/`

---

### Section 6 — What We Handle (Practice Areas)

**Layout:** Obsidian Graphite. Grid: 3 columns on desktop, 2 on tablet, 1 on mobile.

**Section eyebrow:** `WHAT WE HANDLE`
**Section headline:** *Where we focus. Where we know what to do.*

**Practice area tiles** (each = image from Practice Area Images Drive folder + name + 1-line description + link):

1. Personal Injury
2. Medical Malpractice
3. Wrongful Death
4. Motor Vehicle Accidents
5. Truck Accidents
6. Premises Liability
7. Dangerous Drugs
8. Nursing Homes
9. Construction Accidents
10. Motorcycle Accidents

**Inline trust signal (below the grid):**
> Notable verdicts and settlements include a $17M-future-care recovery for a child who suffered a catastrophic brain injury in a hospital, and a $30M-future-care recovery for a hospital nursing failure resulting in catastrophic brain injury. [See more outcomes →]

---

### Section 7 — Spotlight Corner

**Layout:** Charcoal Slate. Three latest pieces in a row (desktop) / stacked (mobile).

**Section eyebrow:** `SPOTLIGHT CORNER`
**Section headline:** *What's happening in Kansas City that matters.*
**Section sub:** *Real-time analysis from our team on local cases, regulation changes, and what they mean for you.*

**Each piece tile:**
- Date
- Category tag (e.g., MO Law, KC Court Watch, Industry Alert)
- Title (serif)
- 2-line excerpt
- "Read more" link

**Content source:** Pulled from Legal Pulse output, approved by Mike via People Portal dashboard. (Spec for that pipeline in separate doc.)

---

### Section 8 — Mike's voice

**Layout:** Obsidian Graphite. Two-column on desktop: image left, copy right. Stacks on mobile.

**Image:** `YONKE-MIKE-PORTRAIT-02` (close portrait, no logo overlay, direct eye contact, navy suit, gold tie, bookcase background — per doctrine asset spec).

**Copy (in Mike's voice, plain):**

> ## Why I do this.
>
> My father, Albert Yonke, built his career standing up for people who got steamrolled by insurance companies, hospitals, and corporations.
> I grew up watching it. I've been doing it since 1994.
>
> Every case at this firm gets prepared as if it's going to verdict — because the only way to negotiate a fair settlement is to be genuinely ready to walk away from a bad one.
>
> If you're hurt and the system is moving against you, that's why we're here.

**CTA:** `Meet Mike →` → `/about/michael-yonke/`

---

### Section 9 — Trust strip

**Layout:** Three small panels in a row (desktop), stacked (mobile). Charcoal Slate.

**Panel 1 — Notable outcomes:**

- Headline: `Notable outcomes`
- Body (rotating or stacked, 2–3 visible):
  - *Catastrophic brain injury to a child in hospital care — recovery covering $17M in future medical treatment.*
  - *Hospital nursing failure resulting in catastrophic brain injury to a child — recovery for $30M+ in future medical care.*
  - *Wrongful death of a construction worker electrocuted on a job site — recovery against the utility company.*
  - *Wrongful death medical malpractice verdict — family practice doctor's failure to diagnose a heart infection.*
- Link: `See more outcomes →` → `/about/outcomes/`

**Panel 2 — Recognition:**

- Headline: `Peer-recognized`
- Logo row (small, restrained): `yl-best-law-firms.png`, `yl-top25-medmal-award.png`
- Caption:
  > *AV Preeminent rated (Martindale-Hubbell — highest peer rating). Listed in Best Lawyers in America. Faculty, Keenan Trial Institute. Million Dollar and Multi-Million Dollar Advocates Forum. Super Lawyers. Lead Counsel Rated. Nation's Top One Percent (NADC).*
- *Implementation note: contain these in a single tasteful strip — do not let recognition sprawl across the section. Doctrine §16 / §29 priority is restraint.*

**Panel 3 — Testimonial (rotating, 1 visible at a time):**

Use these real quotes from the existing site, rotating on page load or on scroll:

1. *"I am a Kansas City Missouri Police officer who was injured in a car accident while on routine patrol. I was very delighted by the urgency, vigor and efficiency of my attorney Mike Yonke. He got the 'ball rolling' right away. He was always there when I had any questions, went to every courtroom with me, and always had words of encouragement."* — KCMO Police Officer
2. *"Your dedication to learning and understanding the very difficult medical information made it hard to know who had more expertise, you or the experts. That along with your knowledge of the law made for confidence that my family needed."* — Family of a medical malpractice client
3. *"Mike stuck my case out for 8 years while I was in and out of multiple surgeries. In the end, I was pleased with my results, and he was also able to help keep my claim open for life so my employer has to cover all medical expenses in the future related to my injury."* — Long-term client
4. *"Mike is one of the best trial attorneys in town. He's handled some of the biggest cases and unfailingly delivers tremendous results for his clients."* — Fellow trial attorney
- Link: `Read more stories →` → `/about/testimonials/`

---

### Section 10 — Final CTA / Talk to Us

**Layout:** Centered. Obsidian Graphite. Large.

**Headline (serif):** *Ready when you are.*

**Body:** *Free consultation. No fee unless we win. We respond fast — usually same business day.*

**Form fields (minimum):**
- First name
- Last name
- Phone
- Email
- Brief description (textarea, optional)
- [Submit button: `Start the Conversation`]

**Below the form:**
- Phone: `816-221-6400` (clickable)
- Address: `700 West 47th Street Suite 550, Kansas City, MO 64112`
- Small map embed
- Hours

**Form submission destination:** Email to Mike Yonke (MS365). Implementation note: use Mike's existing MS365 credentials (held by Geoff) for the inbound routing. Consider also CC'ing Janelle (operations) for visibility.

---

### Section 11 — Footer

**Layout:** Multi-column. Obsidian Graphite, slightly darker than sections above. Implement as a shared `<Footer />` component reused across every page on the site (homepage, all interior pages, every /just-happened/ sub-page, every practice area page).

**Columns:**

1. **About**
   - Michael T. Yonke
   - David Smith
   - Janelle Yonke
   - Outcomes
   - Testimonials
   - Recognition

2. **Practice Areas** (list all 10)

3. **Resources**
   - Just Happened?
   - How It Works
   - The People Portal
   - Checklists
   - FAQ
   - Missouri Law
   - Kansas Law

4. **Connect**
   - Phone: 816-221-6400
   - Address: 700 West 47th Street, Suite 550, Kansas City, MO 64112
   - Talk to Us (form link)
   - Spotlight Corner

**Required disclaimer block (must appear on every page, exactly as written below):**

```
Yonke Law LLC, 700W 47th St Suite 550, Kansas City, MO 64112
816-221-6400

Yonke Law, LLC

The choice of a lawyer is an important decision and should not be based
solely upon advertisements. The use of this website does not create an
attorney-client relationship. The information you obtain on this site is
not, nor is it intended to be, legal advice. You should consult an
attorney for advice regarding your individual situation. We invite you
to contact us and welcome your calls, letters, and electronic mail.
Contacting us does not create an attorney-client relationship. Please do
not send any confidential information to us until an attorney-client
relationship has been established. No attorney-client relationship
whatsoever is or may be formed by any use of this website or its
facilities, including, without limitation, through any communications
sent through this website. The Yonke Law Firm does not perform legal
services outside of any jurisdiction(s) where our attorneys are properly
authorized to do so.

Copyright © 2026 Yonke Law, LLC - All Rights Reserved.
```

**Footer bottom strip (visual, separate from the disclaimer block):**
- YL monogram (small)
- Privacy · Disclaimer · Accessibility (link row)
- Screen-reader pronunciation note: *Yonke is pronounced YONK-ee.*

---

## 4. Legal disclaimer requirements

Required language to appear in footer and legal disclaimer page (per bar requirements):

- "The choice of a lawyer is an important decision and should not be based solely upon advertisements."
- "The use of this website does not create an attorney-client relationship."
- "The information you obtain on this site is not, nor is it intended to be, legal advice."
- "Please do not send any confidential information to us until an attorney-client relationship has been established."
- "Yonke Law, LLC does not perform legal services outside of any jurisdictions where our attorneys are properly authorized to do so."

---

## 5. AEO / LLM-citation requirements

Implement on this homepage and inherit on interior pages:

- **JSON-LD schema:** `LegalService`, `Attorney` (for Mike's section), `Place`, `FAQPage` where applicable.
- **Open Graph + Twitter cards:** every page.
- **Sitemap.xml + robots.txt:** allow LLM crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended).
- **Canonical URLs:** explicit on every page.
- **Author byline:** Mike Yonke on Spotlight Corner posts and practice area pages, with `Person` schema.
- **Clear page titles + meta descriptions:** question-led where possible.
- **Heading hierarchy:** clean H1 → H2 → H3, no skipped levels.

---

## 6. Image asset references

Pull from this Drive folder: `1Sea3j5hCkU8xQLcVNqYjYMj8bjPj57XI`

| Section | Asset filename (Drive) |
|---|---|
| Logo (top nav, footer monogram) | `YL - Logo 2 Strong Edges - Transparent Background.png` |
| Logo (light context, if needed) | `YL - Logo 3 White Knock Out - Transparent Background.png` |
| Wordmark | `Yonke Law - Logo 4 - Name.png` |
| Mike (Section 8) | `YONKE-MIKE-PORTRAIT-02` equivalent (close portrait, no logo) |
| Hero background (optional) | One of `yl-client-*` with heavy dark overlay |
| Practice Area tiles | Practice Area Images subfolder |
| Recognition | `yl-best-law-firms.png`, `yl-top25-medmal-award.png` |

---

## 7. Accessibility minimums

- WCAG 2.2 AA contrast (verified against all dark backgrounds).
- Skip-to-content link.
- Form labels visible (not placeholder-only).
- Keyboard navigation across all interactive elements (including mood demo).
- Alt text on every image (descriptive, not decorative).
- Screen-reader pronunciation note in footer and `aria-label` on first instance of "Yonke" in nav.

---

## 8. Out of scope for the homepage build

Document these as parked, do not build into this page:

- Live Spotlight Corner content (placeholder static content for now; real content flows after Legal Pulse + People Portal dashboard ship).
- Live Mood Monitor backend (the homepage version is a demo only; the real feature lives in the People Portal).
- Account creation / digital intake (separate flow, separate spec).
- Blog / Personal Injury Notes (parked until content strategy is finalized).

---

*End of homepage spec.*
