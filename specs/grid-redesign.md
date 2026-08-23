# Senzen — Grid Redesign (Composer-inspired, better than a copy)

Status: ACTIVE SPEC (supersedes composer-clone-landing.md below-the-fold sections)
Canvas: #EEEEEE light-locked · Ink: #0A0A0A · Brand green: #1EC072 · Neutral text: #333333 / #555555
Motif: **Dot-Matrix Ledger Grid** — radial-gradient dot pattern as CSS background, ≥3 placements
Rule: grid blocks sit BEHIND type (z-0 under z-10 text), never obscuring. WCAG AA on all text.

## 1. Hero v3 — `spotlight-demo.tsx`
- Keep: "Meet" (3xl-6xl) over "Senzen" (12rem, extrabold, tracking-tighter, left-aligned), light canvas, black pill CTA.
- Green block: SOLID #1EC072 rectangle, dot texture `radial-gradient(circle, rgba(10,10,10,0.12) 2.5px, transparent 2.5px)` / 14px grid, positioned behind the LOWER-RIGHT quadrant of "Senzen" (`z-0`, text `z-10`). Cap: must never cover >30% of any glyph.
- DELETE floating blue circle + pink pill (clash). Replace with ONE anchored accent: thin #0A0A0A rule (2px, 8rem wide) under the headline baseline — editorial, not decorative.
- Subhead + CTA below, clean, no graphic overlap. Subhead color #333333 (never mint).

## 2. Page map — ONE continuous flow — `page.tsx`
Delete: CTA boxed-card section AND pricing card section (both card walls — Composer has none on home).
Order: HeroComposer → StatsProofRow → TimelineDemo (reworked, §3) → Footer.
Pricing lives at /pricing only.

## 3. Feature section rework — `timeline-demo.tsx`
- No card walls. Editorial alternating split: left = ink headline + #333 body + text link; right = **Plan-Logic Block** (Senzen's ownable touch #1): white surface, 1px #E5E5E5 border, 8px radius, showing a real money rule as logic rows (IF income > X → allocate 20% savings / ELSE → hold) with mono type + green state dots. Static, CSS only.
- Two sections max: "Rules that run themselves", "See every week clearly".
- Dot-matrix divider between sections: 3rem tall strip, dots rgba(10,10,10,0.08), full-width (motif placement #2).

## 4. Stats row — `spotlight-demo.tsx` StatsProofRow
- Keep 3-stat layout. Numbers ink #0A0A0A (not green). Labels #555555. Add thin green 3px underline accent under each number (ownable touch #2: ledger underline).

## 5. Footer — `footer.tsx`
- Ink #0A0A0A background, light text #EEEEEE (AA contrast), dot-matrix strip at very top edge (motif placement #3), minimal 3-column: Product / Company / Legal + mono wordmark.

## 6. Token/contrast rules
- Mint/light-green text on light bg: BANNED. Green only as: fills, dots, underline accents ≥3px, pill buttons with ink text.
- Fonts stay (sans + mono). No new deps. No logic changes. shadcn primitives only.

## 7. Acceptance
QA screenshots: hero grid behind type (no glyph obscured >30%), zero mint-on-light text, no card walls on landing, dot-matrix visible in hero + divider + footer, one continuous page, build green.
