# Privé Auto — content map

Draft for review, 2026-11-09. Nothing here is implemented yet.

**Ground rules**
- The design is frozen: same layouts, type, spacing, motion and image ratios.
- Copy must fit the current line lengths.
- Nothing about the business is invented. Copy that depends on unconfirmed
  facts is marked **[confirm]**.
- Where a section would otherwise run on filler, it is marked **REMOVE until
  supplied**.

**Tone for the proposed copy:** *Privé* means private. The copy leans on
discretion, precision and restraint: short declaratives, no superlatives,
no claims we can't back.

Page order: Intro, Header, Hero, Brand strip, Services (Editorial), Build
Brief, Recent Work, Tuned, Beyond Factory, Testimonials, Instagram, Visit Us,
FAQ, Footer. Service pages (`/services/:slug`) are covered at the end.

---

## 0. The blocking question

Almost every section depends on **Privé Auto's confirmed service list**.
The current list (wraps, PPF, ceramic, interiors, starlight, ambient
lighting, screens, tuning, body kits, wheels and suspension) is Mansor's.
Until Privé confirms its own, all service copy below is provisional.

Please get from the client, in one pass:

1. Services offered, with their own names.
2. The logo files (SVG, plus a white version).
3. Instagram handle.
4. Address, or confirmation that they are appointment-only or mobile with no public address.
5. Phone, email and preferred contact method.
6. Booking method.
7. Genuine reviews and where each one is published.
8. Partner or product brands they are authorised to name.
9. Their own photos and video.
10. Where they operate (city or region).

---

## 1. Intro (logo reveal)

| | |
|---|---|
| **Current** | Typeset PRIVÉ / AUTO lockup (placeholder since the duplication), with signature rules |
| **Change** | Swap in the real logo once supplied. If the logo is a mark rather than a wordmark, the letter-by-letter reveal needs a decision: keep the typeset lockup for the intro, or reveal the mark as a single element. |
| **Copy** | None |
| **Media needed** | Official logo: SVG, white on transparent |
| **Verify** | Logo files; the exact spelling and casing ("Privé Auto" vs "PRIVÉ AUTO", whether the accent appears in the logo) |

## 2. Header and mobile menu

| | |
|---|---|
| **Current** | Typeset wordmark; Home / Services / Contact |
| **Change** | Real logo. If Visit Us is removed, Contact should point at the Build Brief (`#build`) instead of `#contact`. |
| **Copy** | Keep: Home · Services · Contact |
| **Media needed** | Logo (as above) |
| **Verify** | Logo |

## 3. Hero

| | |
|---|---|
| **Current** | Mansor shopfront photo, then the Audi R8 night film. "Experience your car's full potential." Service row: PPF · Wraps · Tuning · Performance · Starlight · Ambient Lighting · Screens. CTA: "Book Appointment" (Coming Soon dialog). |
| **Change** | All media is Mansor's: the photo shows the MANSOR CUSTOMS sign, and the R8 film is Mansor's. The service row must be Privé's confirmed list (2 rows of at most 4 and 3 items, short labels). The CTA must match the real booking method. |
| **Headline** (two lines, about 20 characters per line max) | Option A: "Made private. / Made yours." Option B: "Your car, / reserved for you." Option C: keep "Experience your car's / full potential." (generic, no Mansor ties) |
| **Service row** | **[confirm]** Privé's own services, in their wording |
| **CTA** | "Book a Private Consultation" **[confirm that's how they work]**, else "Book Appointment" |
| **Media needed** | 1) Hero photo: their premises or a signature car, at night or dusk, readable under a dark top-to-bottom scrim, portrait-safe (subject centred; it's cropped hard on phones). 2) Hero film: 10–30s seamless loop, no audio, landscape 1080p+ with the action in the centre third (phones show a 608×1080 centre strip). Slow, low-light, cinematic. |
| **Verify** | Services; booking method; that we may use any footage supplied |

## 4. Brand strip (below the hero)

| | |
|---|---|
| **Current** | "Partner 01–06" placeholders (Mansor's Stage 4, Brillsteel, Akrapovič, XPEL, 3M and PurePPF were removed) |
| **Change** | **REMOVE until supplied.** A placeholder strip reads as fake, and naming brands without permission is a claim. Restore it only with brands Privé confirms in writing it uses or is authorised by, with official logo files. |
| **Copy** | None (logos only; aria label "Brands we work with") |
| **Media needed** | Official logos (SVG preferred) for each confirmed brand |
| **Verify** | Each brand relationship, with a source (dealer page or written confirmation) |

## 5. Services (Editorial): 4 cards, statement, 4 cards

| | |
|---|---|
| **Current** | Wraps · Bespoke Interiors · Starlight · Tuning / statement / Protection & Finish · Body Kits · Wheels & Suspension · Interior Technology. Statement: "The Whole Build." + "Built upon our passion for everything *Automotive*, Privé Auto is a full service boutique…" (Mansor's sentence with the name swapped). |
| **Change** | Cards must be Privé's confirmed services. The layout needs exactly 8 (two groups of 4). If Privé has fewer, either repeat a service with a second photo (not ideal) or the creative director decides on a layout change, which breaks the design freeze, so flag it first. Every card photo is Mansor's. |
| **Statement headline** | Option A: "Privately Built." Option B: "By Appointment." **[confirm appointment-only]** Option C: keep "The Whole Build." |
| **Statement body** (about 30 words, one italic word) | "Every car that comes to Privé Auto is treated as a *private* commission: one owner, one vision, finished to a standard that doesn't need to announce itself." **[confirm full-service positioning]** |
| **Card titles** | **[confirm]** one to three words each, from Privé's own list |
| **Media needed** | 8 portrait photos, one per service, at least 1000×1250; portrait 4:5 or taller, with the subject in the upper two-thirds (titles sit low) |
| **Verify** | Service list and names |

## 6. Build Brief ("Let's Talk Builds.")

| | |
|---|---|
| **Current** | Eyebrow "Ready to collaborate", title "Let's Talk Builds.", line "Tell us what you drive and what you have in mind." Three-step form (vehicle, build, details), Netlify Forms, service options from the service cards, error text "…or message us on Instagram." |
| **Change** | Copy is generic and can stay, with the tone tightened. The service dropdown updates automatically with the cards. The error fallback must name a contact channel Privé actually has. Form submissions currently go to the Netlify site's form inbox; decide who receives them. |
| **Proposed copy** | Eyebrow: "Private enquiries" · Title: "Let's Talk Builds." (keep) · Line: "Tell us what you drive and what you have in mind. We'll take it from there." |
| **Media needed** | None |
| **Verify** | Who receives submissions (email notification); response channel; the Instagram fallback wording |

## 7. Recent Work (collection strip, 8 cards)

| | |
|---|---|
| **Current** | Mansor's builds: McLaren 720S, BMW M3 (×2), Mercedes S-Class (video), G-Class, BMW XM, pink G 63, Porsche 911 Turbo S |
| **Change** | **All Mansor imagery: replace every card.** Several show the MANSOR sign, studio or air freshener. With no Privé work yet, **REMOVE until supplied**; showing another shop's builds as Privé's would be misleading. |
| **Copy** | Title "Recent Work" (keep). Each card is make plus model only (logo top, model vertical). |
| **Media needed** | 4–8 builds; per build 1–3 photos and/or a short muted loop; 3:5 portrait, at least 960px wide; dark or neutral backgrounds; no other shops' branding |
| **Verify** | Exact make and model of each car; the client's permission to show customer cars and plates |

## 8. Tuned. (tuning gallery plus tachometer)

| | |
|---|---|
| **Current** | "Tuned." / "Exhausts, downpipes, and performance tuning." / CTA "Plan a Tuning Build". Cards: black SF90 flames, green Huracán and pink SF90 on the dyno, SF90 Stradale exhaust fit. |
| **Change** | **Only if Privé offers tuning** **[confirm]**; otherwise **REMOVE** the whole section. All four cards are Mansor's workshop and dyno footage. |
| **Proposed copy (if kept)** | "Tuned." (keep) · copy: **[confirm]** the actual scope, e.g. "Exhausts, software and performance, set up for the road." · CTA: "Plan a Tuning Build" |
| **Media needed** | 3–4 cards: dyno or exhaust footage (3:5, muted 5–15s loops) and engine-bay photos |
| **Verify** | Tuning offered? In-house or partner? Which work exactly (software, exhaust, dyno)? |

## 9. Beyond Factory (lights-on supercar)

| | |
|---|---|
| **Current** | "Beyond Factory." / "A different finish. A sharper stance." / "Every build starts with a different vision." / CTA "Start Your Build" (Coming Soon). Burgundy Lamborghini render with the halo ring, as a lights-off/on pair. |
| **Change** | The copy is brand-neutral and can stay. The image is a render supplied for Mansor: **replace it**, unless the client confirms Privé may use it. The CTA should scroll to the Build Brief rather than open "Coming Soon". |
| **Proposed copy** | Headline: "Beyond Factory." (keep) · Lines: "A different finish. A sharper stance." / "Every build starts with a private vision." · CTA: "Start Your Build" → Build Brief |
| **Media needed** | **Two matching frames, identical except for the lights:** the car from above and in front in a dark studio, once with lights off and once with headlights on. A locked-off tripod is essential, since the ignition effect crossfades the two. At least 2016×1260, with room above the car for the arc. |
| **Verify** | Rights to the current render if it's kept |

## 10. Testimonials

| | |
|---|---|
| **Current** | 8 "Placeholder review…" cards tagged Demo |
| **Change** | **REMOVE until supplied.** Never fill with invented reviews. Restore with genuine reviews and their source badge (Google, etc.). At least 3 are needed for the strip to read well. |
| **Copy** | Title "Testimonials" (keep); first name plus initial; review text verbatim |
| **Media needed** | None |
| **Verify** | Each review's source and permission to quote |

## 11. Instagram

| | |
|---|---|
| **Current** | `@handle.tbc`, "Our latest builds on Instagram", View Instagram / Send Message, 3 Mansor Reels (one shows the MANSOR sign; one has "Bergen County" burned in) |
| **Change** | **REMOVE until supplied** (handle plus 3 Reels). Then: handle and links, 3 Privé Reels, and optionally the live API feed (docs/INSTAGRAM.md). Follower count stays hidden unless confirmed. |
| **Copy** | "@handle" · "Our latest builds on Instagram" (keep) |
| **Media needed** | 3 Reels: 9:16, at least 540×960, muted is fine; no other shops' branding |
| **Verify** | Handle; account type (professional) if the live feed is wanted |

## 12. Visit Us (map)

| | |
|---|---|
| **Current** | "Visit Us", "Address to be confirmed", Get Directions, aerial preview **pinned on Mansor's shop**, live Google map on demand |
| **Change** | The aerial must be replaced or regenerated for Privé's address. If Privé is appointment-only or mobile with no public address: **REMOVE**, and repoint the "Contact" nav item to the Build Brief. |
| **Copy** | "Visit Us" (keep), or "Visit By Appointment" **[confirm]** · the address · Get Directions |
| **Media needed** | Aerial or satellite preview of the premises, 1536×1024, with a pin |
| **Verify** | Address as the business uses it; whether the public may visit |

## 13. FAQ

| | |
|---|---|
| **Current** | 4 questions: wrap vs PPF vs ceramic, wheels/suspension/body kit together, interior options, what's needed for a quote |
| **Change** | Keep only the questions about services Privé offers. The quote question is safe for anyone. No prices, turnaround times or warranties without written confirmation. |
| **Proposed copy** | Keep the 4 answers as they are (factual and service-generic); delete any that cover services Privé doesn't offer. The quote answer: drop "Reference photos help too" only if Privé doesn't accept them. |
| **Media needed** | None |
| **Verify** | That each question matches a confirmed service |

## 14. Footer

| | |
|---|---|
| **Current** | Typeset wordmark; two service columns (Wraps, PPF, Ceramic Coating, Bespoke Interiors, Wheels / Interior Upgrades, Ambient Lighting, Screens, Tuning, Body Kits); "© Privé Auto"; Powered by Diablo |
| **Change** | Real logo; service columns rebuilt from the confirmed list (two balanced columns); social links once verified |
| **Copy** | "© Privé Auto" (keep) |
| **Media needed** | Logo |
| **Verify** | Services; social URLs |

## 15. Service pages (`/services/:slug`)

| | |
|---|---|
| **Current** | One "Coming Soon" page per service card, reusing the card photo: "We are preparing this page with the same care we give every build." / Back to Services |
| **Change** | Pages follow the confirmed cards automatically; the photos come from the card replacements. The line is generic and can stay. |
| **Media needed** | None extra |
| **Verify** | Whether Privé wants service pages at all |

## 16. Shell and metadata

| | |
|---|---|
| **Current** | Title "Privé Auto"; description lists Mansor's services; placeholder favicons and share image; URL `prive-auto.example` |
| **Change** | Description: one line naming the confirmed services and the city **[confirm]**. Favicons and the share image are regenerated from the real logo. Set the production domain. |
| **Proposed description** | "Privé Auto: [confirmed services] in [city]." |
| **Verify** | Domain; city; services |

---

## Mansor imagery to replace (complete list)

| Asset | Where | Why |
|---|---|---|
| `images/hero/shopfront-twilight.jpg` | Hero | MANSOR CUSTOMS sign |
| `videos/hero-r8*.mp4` (+ unused `hero*.mp4`, `hero-poster.jpg`, `hero-studio*`) | Hero | Mansor's footage |
| `images/services/*` (8) | Services cards, service pages | Supplied by Mansor |
| `images/projects/*` (all) | Recent Work, Tuning | Mansor builds; sign, studio and air freshener visible |
| `images/tuning/*` | Tuning | Mansor workshop and dyno footage |
| `images/philosophy/supercar-*` | Beyond Factory | Render supplied for Mansor |
| `reels/*` | Instagram | Mansor Reels; MANSOR sign; "Bergen County" text |
| `images/location-aerial.jpg` | Visit Us | Pinned on Mansor's NJ shop |
| `public/og-image.jpg`, favicons, icons | Browser and social | Placeholder typeset logo (not Mansor, but temporary) |

## Recommended removals until real material exists

1. **Brand strip**: no confirmed partners.
2. **Recent Work**: no Privé builds.
3. **Tuned.**: unless tuning is confirmed and has media.
4. **Testimonials**: no genuine reviews.
5. **Instagram**: no handle or Reels.
6. **Visit Us**: if there's no public address.

Removing sections is done by not rendering them (`App.tsx`), so each one comes
back intact when content arrives; no layout code changes. Without them,
the page runs Intro, Hero, Services, Build Brief, Beyond Factory, FAQ, Footer:
short, but entirely truthful.

## Decisions needed from you

1. Pick a hero headline (A, B or C) and a statement headline.
2. Approve the "private" tone, or keep Mansor's original lines.
3. Remove the empty sections now, or keep them with placeholders for the client presentation.
4. If Privé has fewer than 8 services: how to fill the 4 + 4 card grid.
