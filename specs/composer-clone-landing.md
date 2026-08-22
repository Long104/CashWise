---
name: Senzen Composer-Clone Landing
description: >
  Pixel-accurate structural clone of the composer.trade landing capture
  (/tmp/composer-ref/ref-hero.png) reskinned for Senzen. Same section order,
  same navbar anatomy, same hero composition — only copy, brand marks, and
  metric values differ. Light-theme locked.
reference: /tmp/composer-ref/ref-hero.png (ground truth, 1440px capture)
scope: LANDING PAGE ONLY — /, sign-in, sign-up, pricing untouched this pass
colors:
  canvas: "#EEEEEE"
  ink: "#0A0A0A"
  ink-muted: "#555555"
  card: "#FFFFFF"
  hairline: "#E5E5E5"
  brand-green: "#1EC072"
  brand-green-deep: "#049F55"
  accent-blue: "#0047FF"
  accent-pink: "#FFB8D2"
typography:
  display-hero:
    fontFamily: "'Neue Haas Grotesk Display Pro', 'Plus Jakarta Sans', ui-sans-serif, sans-serif"
    fontSize: "clamp(2.75rem, 7.8vw, 7rem)"
    fontWeight: 800
    lineHeight: 0.9
    letterSpacing: "-0.04em"
  display-section:
    fontFamily: "'Neue Haas Grotesk Display Pro', 'Plus Jakarta Sans', ui-sans-serif, sans-serif"
    fontSize: "clamp(1.75rem, 3vw, 2.5rem)"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  subhead:
    fontFamily: "'Plus Jakarta Sans', ui-sans-serif, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "-0.01em"
  stat-value:
    fontFamily: "'JetBrains Mono', ui-monospace, monospace"
    fontSize: "2rem"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  stat-label:
    fontFamily: "'JetBrains Mono', ui-monospace, monospace"
    fontSize: "0.6875rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.06em"
  body-md:
    fontFamily: "'Plus Jakarta Sans', ui-sans-serif, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.55
  cta-label:
    fontFamily: "'Plus Jakarta Sans', ui-sans-serif, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 600
    lineHeight: 1
rounded:
  pill: "9999px"
  md: "12px"
  lg: "16px"
  xl: "24px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
  hero-pt: "72px"
  hero-pb: "56px"
  section-gap: "96px"
components:
  button-pill-primary:
    backgroundColor: "{colors.ink}"
    textColor: "#FFFFFF"
    rounded: "{rounded.pill}"
    padding: "0 32px"
    height: "48px"
  button-pill-primary-hover:
    backgroundColor: "#000000"
    transform: "scale(1.02)"
  button-pill-navbar:
    backgroundColor: "{colors.ink}"
    textColor: "#FFFFFF"
    rounded: "{rounded.pill}"
    padding: "0 20px"
    height: "40px"
  announcement-bar:
    backgroundColor: "{colors.ink}"
    textColor: "#FFFFFF"
    height: "40px"
  navbar:
    backgroundColor: "transparent on {colors.canvas}"
    height: "64px"
  stat-divider:
    borderColor: "{colors.hairline}"
---

# Senzen — Composer-Clone Landing Spec

Ground truth: `/tmp/composer-ref/ref-hero.png` (real composer.trade capture, 1440w).
Directive: layout mirrors Composer 1:1 — same announcement bar → navbar → hero →
stats proof row → "as seen on" strip → first feature section order, same navbar
anatomy (Login text link + black pill right), same hero composition (massive
800-weight display type sliced by a green dot-matrix block, subhead, single black
pill CTA). Content and brand are Senzen's own.

## 0. Missing-State Finding (reported, not fixed)

**Signed-in users see "Log in / Get started" on the landing page.** Because the
navbar and hero render statically, a returning authenticated user sees consumer
auth CTAs and is funneled to `/sign-up` again instead of `/product/home`. The
repo already has `useAuth` (`src/components/useAuth.tsx`) — implementation pass
should branch navbar CTAs on session state (swap pill label to "Open app",
href → `/home`). Out of scope here; flagged so QA expects it.

## 1. Section-by-Section Structure Map (matches ref-hero.png top-to-bottom)

Viewport basis: 1440×900. Container: `max-w-7xl mx-auto px-6` (1280 content box)
unless noted. All sections sit on `{colors.canvas}` — no alternating background
bands above the fold (matches ref: uniform light concrete from bar through
feature card edge).

### S0 — Announcement Bar (ref y: 0–40)
| Property | Value |
|---|---|
| Height | 40px, full-width |
| Background | `{colors.ink}` #0A0A0A |
| Content | centered flex row, gap-8px: Lucide `Star` filled 14px #FFFFFF → message 13px/500 #FFFFFF → underlined link 13px/600 #FFFFFF, `underline-offset-4` |
| Link affordance | trailing ArrowRight 14px, translates x 2px on hover |

### S1 — Navbar (ref y: 40–104)
| Property | Value |
|---|---|
| Height | 64px, sticky top-0, `bg-[var(--canvas)]/85 backdrop-blur-md`; bottom hairline appears only after scroll (>8px) — `data-scrolled` attr toggles `border-b border-[var(--hairline)]` |
| Anatomy (left→right) | Logo lockup → inline nav links (gap-32px, ml-48px) → spacer → "Log in" text link → black pill |
| Logo lockup | Green dot-matrix square 28×28px (radius 8px, dot grid per §3 motif) + "Senzen" wordmark 18px/800 tracking `-0.02em` ink |
| Nav links | "Features · Pricing · Changelog · Docs" — 14px/500, `{colors.ink}` at 70%, hover 100%; hidden below `md` (Sheet hamburger) |
| Auth cluster | "Log in" 14px/600 ink text link (h-40px tap area, px-12px); pill: h-40px px-20px rounded-full bg ink, white 14px/600 label "Get started" |
| Touch targets | all interactive ≥40px tall (desktop floor 32px, mobile 44px via py bump) |

### S2 — Hero (ref y: 104–~640)
Center-stacked column, text-align center, `pt-[var(--hero-pt)] pb-[var(--hero-pb)]`.
NO eyebrow/kicker (ref has none — do not add one).

| Layer | Spec |
|---|---|
| H1 | `display-hero` token. Max 3 rendered lines at 1440w (2 preferred): line-break control via `<br>` after first phrase. Color ink. z-10 relative. |
| Dot-matrix slab | Absolute, z-0 (BEHIND type): 320×184px, radius 16px, green dot grid (§3), positioned `left-1/2 top-[34%] -translate-x-[8%]`. Slices through H1 line 2 glyphs exactly as ref. Add one solid `{colors.brand-green}` corner tab 56×16px radius-b-lg at slab's bottom-left. |
| Subhead | mt-24px, `subhead` token, color `{colors.ink-muted}`, `max-w-[34rem] mx-auto` |
| CTA row | mt-32px, single `button-pill-primary` "Get started free" + trailing ArrowRight 16px. Optional secondary: "See how it works ↓" 15px/600 ink-muted text link, ml-24px, scrolls to S5. |
| Motion | entrance fade+rise 300ms ease-out once (IntersectionObserver, respects `prefers-reduced-motion`); no parallax, no scroll listeners |

Slab responsive: `<md` → 46vw × 27vw, `top-[30%]`, dot size 1.5px/10px grid.

### S3 — Stats Proof Row (ref y: ~640–760)
Pattern parity: Composer's `$ trading volume / orders executed / rebalances`
triplet → Senzen's budget triplet. Same anatomy: value over label, hairline
dividers.

| Property | Value |
|---|---|
| Layout | `grid grid-cols-1 sm:grid-cols-3`, `divide-y sm:divide-y-0 sm:divide-x divide-[var(--hairline)]`, max-w-4xl mx-auto, mt-[var(--section-gap)] minus 32px (=64px below CTA zone) |
| Cell padding | `py-24px sm:py-0 sm:px-32px`, first cell `sm:pl-0`, last `sm:pr-0`, centered text |
| Value | `stat-value` token, `tabular-nums`, ink. Loading state: skeleton pulse block 96×32px radius 6px. |
| Label | `stat-label` token, uppercase, `{colors.ink-muted}` (mono data-label exemption — not an eyebrow) |
| Values | `[METRIC-PLACEHOLDER]` — wire from real product analytics before ship; never ship invented numbers (see §2) |

### S4 — "As seen on" Strip (ref y: ~760–850)
| Property | Value |
|---|---|
| Label | "AS SEEN ON" `stat-label` token centered, mb-24px |
| Logo row | flex wrap justify-center items-center gap-x-48px gap-y-16px; logos as monochrome SVG (`https://cdn.simpleicons.org/{slug}/0A0A0A`), h-24px w-auto, opacity-60 hover:opacity-100 transition-150ms |
| Slugs (verify at build) | `producthunt`, `ycombinator`, `techcrunch`, `forbes` — run slug check; ANY miss → drop that logo (never substitute a fake/text wordmark; better 3 logos than 1 broken) |
| Trademark rule | logos link nowhere (decorative), `aria-hidden` images + sr-only list semantics |

### S5 — Feature Section 01 (ref y: ~850+, first feature card)
Layout family: **split card** (hero was center-stack — alternation satisfied;
later sections must NOT repeat split-card twice consecutively).

| Property | Value |
|---|---|
| Container | mt-[var(--section-gap)], white card `bg-white border border-[var(--hairline)] rounded-[var(--xl)] overflow-hidden`, `grid lg:grid-cols-2`, min-h 480px |
| Left cell | p-40px/48px, vertically centered: H2 `display-section` "Rules that run themselves" → body-md paragraph ink-muted mt-16px max-w-sm → text link 15px/600 ink with green underline-offset hover "Explore the builder →" mt-24px |
| Right cell | Product mock (static, no async): envelope allocation panel built ONLY from existing shadcn Card/Input/Button + plain divs — header row (mono 11px "LIVE ALLOCATION" + pulsing 6px green dot), 3 envelope rows (name 14px/600, target % mono, progress track h-6px radius-full bg hairline, fill `{colors.brand-green}` at 62/84/37%), footer hairline + "+ New rule" ghost button. Accent chips may use accent-pink/accent-blue at 12% fills for category tags (graphic use only). |

## 2. Exact Copy Blocks (Senzen voice — zero Composer strings)

| Slot | Copy |
|---|---|
| S0 message | "Auto-rebalance rules are live" |
| S0 link | "Read the changelog" → `/changelog` (stub ok) |
| S1 logo | "Senzen" |
| S1 links | Features · Pricing · Changelog · Docs |
| S1 auth | "Log in" / "Get started" |
| S2 H1 | "Budgeting that runs\nitself." *(dot-matrix slab slices through "itself")* |
| S2 subhead | "Senzen turns your paycheck into a plan — automated envelopes, smart reallocation, and not a spreadsheet in sight." |
| S2 CTA | "Get started free" |
| S2 secondary | "See how it works" |
| S3 stat 1 | `$4.2M+` / "ROUTED EVERY MONTH" |
| S3 stat 2 | `31,400` / "RULES EXECUTED" |
| S3 stat 3 | `98,200` / "AUTO-TRANSFERS MADE" |
| S4 label | "AS SEEN ON" |
| S5 H2 | "Rules that run themselves" |
| S5 body | "Set a target once. When income lands, Senzen splits it across your envelopes, tops up what fell behind, and tells you why — in plain language." |
| S5 link | "Explore the builder" |
| S5 mock rows | Rent · 30% · 62% filled / Savings · 20% · 84% filled / Fun money · 10% · 37% filled |

⚠️ S3 values are `[METRIC-PLACEHOLDER]`: replace with real (or honestly
labeled beta) figures during implementation. Do not ship the sample digits.

## 3. Token Sheet (CSS vars) + Tailwind Cheat-Sheet

### 3a. `globals.css` `:root` patch (shadcn HSL format, landing-scoped safe)
```css
:root {
  /* Composer-clone landing tokens (pixel-extracted from ref-hero.png) */
  --canvas: 0 0% 93%;            /* #EEEEEE light concrete  */
  --ink: 0 0% 4%;                /* #0A0A0A                 */
  --ink-muted: 0 0% 33%;         /* #555555                 */
  --card-solid: 0 0% 100%;       /* #FFFFFF                 */
  --hairline: 0 0% 90%;          /* #E5E5E5                 */
  --brand-green: 158 69% 44%;    /* #1EC072 — graphics/fills only */
  --brand-green-deep: 152 95% 32%;/* #049F55 — large-text-safe green */
  --accent-blue: 225 100% 50%;   /* #0047FF                 */
  --accent-pink: 336 100% 85%;   /* #FFB8D2 — fills/tags only     */

  /* remap shadcn semantic layer for the landing route */
  --background: 0 0% 93%;
  --foreground: 0 0% 4%;
  --primary: 0 0% 4%;            /* BLACK PILL is now primary (was green) */
  --primary-foreground: 0 0% 100%;
  --secondary: 0 0% 90%;
  --secondary-foreground: 0 0% 4%;
  --muted: 0 0% 90%;
  --muted-foreground: 0 0% 33%;
  --border: 0 0% 90%;
  --input: 0 0% 90%;
  --ring: 225 100% 50%;          /* focus ring = electric blue */
}
```
Role audit: neutrals = cool-neutral concrete ramp (not warm beige, not Tailwind
gray defaults); hues = green + blue + pink-accent (≤3 brand hues ✓). Ratio on
landing ≈ canvas 60 / ink-type+white-card 30 / green·blue·pink accents 10 ✓.

Contrast ledger: #FFF on #0A0A0A ≈ 19.8:1 ✓ · #0A0A0A on #EEEEEE ≈ 17.9:1 ✓ ·
#555 on #EEEEEE ≈ 6.6:1 ✓ (body AA) · #0047FF on #EEEEEE ≈ 7.3:1 ✓ ·
#1EC072 TEXT BANNED on canvas/white (≈2.1:1) — green is graphics/fill/large-
display-decoration only; any textual green uses #049F55 at ≥24px bold (3.1:1,
large-text AA) or pairs with ink.

### 3b. Signature motif — green dot-matrix (≥3 placements)
Utility (define once in globals.css):
```css
.dot-matrix {
  background-image: radial-gradient(circle, hsl(var(--brand-green)) 2px, transparent 2px);
  background-size: 12px 12px;
}
```
Placements: (1) hero slab, (2) navbar logo square, (3) S5 card corner tab /
footer divider band. Static CSS only — no shader, no animation.

### 3c. Tailwind cheat-sheet per element
| Element | Classes |
|---|---|
| Announcement bar | `flex h-10 items-center justify-center gap-2 bg-[hsl(var(--ink))] text-white` |
| ↳ star | `<Star className="h-3.5 w-3.5 fill-current" />` |
| ↳ link | `text-[13px] font-semibold underline underline-offset-4 hover:opacity-80` |
| Navbar shell | `sticky top-0 z-40 h-16 backdrop-blur-md bg-[hsl(var(--background))]/85 data-[scrolled=true]:border-b data-[scrolled=true]:border-[hsl(var(--border))]` |
| ↳ logo square | `h-7 w-7 rounded-lg dot-matrix` |
| ↳ wordmark | `text-lg font-extrabold tracking-[-0.02em] text-[hsl(var(--foreground))]` |
| ↳ nav link | `text-sm font-medium text-[hsl(var(--foreground))]/70 hover:text-[hsl(var(--foreground))] transition-colors` |
| ↳ login link | `inline-flex h-10 items-center px-3 text-sm font-semibold text-[hsl(var(--foreground))]` |
| ↳ navbar pill | `h-10 rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground hover:bg-black transition-transform hover:scale-[1.02] active:scale-100` |
| Hero section | `relative pt-[72px] pb-[56px] text-center` |
| ↳ H1 | `relative z-10 mx-auto font-display text-[clamp(2.75rem,7.8vw,7rem)] font-extrabold leading-[0.9] tracking-[-0.04em]` (`font-display` = NHG-Pro→PJS stack via tailwind config fontFamily.display) |
| ↳ slab | `absolute z-0 left-1/2 top-[34%] h-[184px] w-[320px] -translate-x-[8%] rounded-2xl dot-matrix max-md:h-[27vw] max-md:w-[46vw] max-md:top-[30%]` |
| ↳ slab tab | `absolute bottom-0 left-0 h-4 w-14 rounded-bl-2xl rounded-tr-lg bg-[hsl(var(--brand-green))]` |
| ↳ subhead | `mx-auto mt-6 max-w-[34rem] text-xl leading-normal tracking-[-0.01em] text-[hsl(var(--muted-foreground))]` |
| ↳ CTA pill | `mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-primary px-8 text-[15px] font-semibold text-primary-foreground hover:bg-black hover:scale-[1.02] active:scale-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] focus-visible:ring-offset-2 disabled:opacity-50` |
| Stats row | `mx-auto mt-16 grid max-w-4xl grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[hsl(var(--border))]` |
| ↳ value | `font-mono text-[2rem] font-semibold leading-tight tracking-[-0.02em] tabular-nums text-[hsl(var(--foreground))]` |
| ↳ label | `mt-1 font-mono text-[11px] font-medium uppercase tracking-[0.06em] text-[hsl(var(--muted-foreground))]` |
| Seen-on label | `mb-6 text-center font-mono text-[11px] font-medium uppercase tracking-[0.06em] text-[hsl(var(--muted-foreground))]` |
| ↳ logo img | `h-6 w-auto opacity-60 transition-opacity hover:opacity-100` |
| Feature card | `mx-auto mt-24 grid max-w-7xl overflow-hidden rounded-[24px] border border-[hsl(var(--border))] bg-white lg:grid-cols-2` |
| ↳ copy cell | `flex flex-col justify-center p-10 lg:p-12` |
| ↳ H2 | `text-[clamp(1.75rem,3vw,2.5rem)] font-extrabold leading-[1.05] tracking-[-0.03em]` |
| ↳ progress fill | `h-1.5 rounded-full bg-[hsl(var(--brand-green))]` inside `h-1.5 rounded-full bg-[hsl(var(--border))]` track |

## 4. Implementation Notes

### Files to replace/create
1. **`src/components/example/navbar.tsx`** → rebuild to S1 anatomy. Delete green
   "Get Started" button + `rounded-[6px]` styling; auth cluster becomes text
   "Log in" + black pill. Add `data-scrolled` listener via passive scroll check
   in a `useEffect` rAF-throttle (≤1 per frame, no React-state scroll spam —
   toggle a dataset attr, not state).
2. **`src/components/example/spotlight-demo.tsx`** → REPLACE ENTIRELY with
   `hero-composer.tsx` (new file, same folder): S2+S3 composition (hero column +
   stats row exported as one section or siblings). The current two-column
   spotlight card, `01 / COMPOSER` mono kicker, and green primary buttons are
   all non-ref artifacts — none survive.
3. **`src/app/(landingPage)/page.tsx`** → composition becomes:
   `<AnnouncementBar/>` (new, S0 — render INSIDE page above layout navbar OR
   move navbar+bar together into this layout; pick one home for both, no dup)
   → `<HeroComposer/>` (S2) → `<StatsProofRow/>` (S3) → `<SeenOnStrip/>` (S4)
   → `<FeatureBuilder/>` (S5) → existing `<Footer/>` unchanged.
4. **Keep but restyle later (out of scope):** `timeline-demo.tsx`, `footer.tsx`,
   pricing sections — untouched this pass.
5. **DO NOT REUSE (editorial-ledger / demo remnants):** `try-landing.tsx`,
   `try2-landing.tsx`, `container-scroll-animation-demo.tsx`,
   `infinite-moving-cards-demo.tsx` + `infinite-moving-cards.tsx`, and every
   `font-mono … uppercase tracking-wider` kicker pattern ("AUTOMATED •
   REAL-TIME • ENCRYPTED", "GET STARTED", "TRANSPARENT PRICING" eyebrows) —
   banned by craft floor (uppercase-tracking kickers) and absent from ref.
   Old stat card ("ACCOUNT MINIMUM / AES-256") is replaced by S3 anatomy.

### forceLight theme handling
Root `layout.tsx` already pins `defaultTheme="light" enableSystem={false}` —
KEEP. Belt-and-braces for the collision bug: in
`src/app/(landingPage)/layout.tsx` wrap children in
`<div className="contents light">` and add to globals.css:
```css
.light { color-scheme: light; }
```
Remove any `mode-toggle` from landing components. Landing must render
identically regardless of stored theme key.

### Breakpoints & platform floors
- Base (390px): hamburger (shadcn Sheet, right slide, 44px rows), H1 clamp floor 44px/0.92, slab 46vw, stats stack with `divide-y`, feature card single column (copy cell first), CTA pills full-width `w-full sm:w-auto`.
- `sm` 640: stats go 3-col.
- `lg` 1024: feature card splits 2-col; navbar links visible.
- Keyboard: skip-link to `#main`; all pills/links visible `focus-visible` blue ring (token above); Sheet traps focus (shadcn default).
- Reduced motion: entrance fades collapse to opacity 1 / no translate; pulse dots become static.
- CWV: hero text is LCP — no blocking assets, slab is pure CSS; logos `loading="lazy"` `width/height` set (CLS).

### Component/state matrix (minimum QA surface)
| Component | default | hover | active | focus-visible | loading | empty | error |
|---|---|---|---|---|---|---|---|
| Pills (nav/hero) | ink bg | bg-black + scale 1.02 | scale 1.0 | blue ring offset | opacity-50 + spinner (hero submit path only) | n/a | n/a |
| Nav links / Login | 70% ink | 100% ink | — | ring-inset 2px | n/a | n/a | n/a |
| Stats values | numeric | — | — | — | skeleton pulse 96×32 | hide row if no metrics flag | fall back to qualitative labels ("Real-time sync") — never zeros |
| Seen-on logos | 60% | 100% | — | — | lazy fade-in | omit strip | onError → remove img node (no alt-text box) |
| Mobile Sheet | closed | row bg hairline | — | focus trap | n/a | links always ≥1 | n/a |
| S5 mock | static render | ghost btn bg-lift | — | ring | n/a | n/a | static — no runtime failure mode |

## 5. Acceptance — Side-by-Side vs ref-hero.png

Protocol: build → capture `/` at 1440×900 (and 390×844 mobile sanity) → place
side-by-side with `/tmp/composer-ref/ref-hero.png`.

PASS requires ALL of:
1. Section order identical: black announcement bar → navbar → massive hero →
   3-stat hairline row → logo strip → first feature card, no extra/missing
   sections above the feature fold.
2. Vertical rhythm within ±8% of ref: bar 40px, navbar 64px, hero block ends
   ~72% viewport, stats row and strip positions align when overlays matched.
3. Navbar anatomy match: left logo+links cluster, right [text login][black
   pill]; pill fully rounded; no green button anywhere in chrome.
4. Hero signature match: ≥96px optical cap-height display type, ≤3 centered
   lines, leading ≤0.95, tracking visibly tight; green dot-matrix slab
   intersects headline glyphs (behind text) at ref-equivalent position; ONE
   black pill CTA below subhead.
5. Only content differs: all copy reads as Senzen (zero Composer strings),
   stats show Senzen metrics (or labeled placeholders), logos swapped per S4.
6. Theme lock: landing renders light under `localStorage.theme=dark`
   (hard-refresh check); zero `.dark` leakage.
7. Console clean; no horizontal scrollbar at 1440 or 390; Lighthouse perf ≥ 90
   on `/`.

Any layout-position mismatch beyond tolerance = REJECTED with annotated
overlay; copy/brand deltas alone never block approval.
