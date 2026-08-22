---
name: Senzen Composer Financial Platform
description: Product-first financial intelligence and automated budgeting platform design system for Senzen, modeled directly on Composer by SoFi (composer.trade). Light cream canvas, crisp typography, restrained green accents, and interactive logic block previews.
colors:
  # Light Canvas & Surfaces
  canvas: "#F6F2EE"
  surface-card: "#FFFFFF"
  surface-lifted: "#ECE8E3"
  surface-subtle: "#E5E2DD"
  border-hairline: "#E5E2DD"
  border-strong: "#D0CCC6"
  
  # Ink & Typography (Charcoal & Muted Slate)
  ink-primary: "#101516"
  ink-body: "#273234"
  ink-muted: "#666666"
  ink-faint: "#8C8C8C"
  
  # Brand Accent (Composer Green)
  brand-green: "#1EC072"
  brand-green-hover: "#049F55"
  brand-green-subtle: "#E5F9FC"
  
  # Financial Semantic
  surplus-green: "#1EC072"
  surplus-subtle: "#EBF9F1"
  deficit-crimson: "#DC2626"
  deficit-subtle: "#FEF2F2"
  discretionary-blue: "#1871DA"
  recurring-slate: "#273234"

typography:
  display-xl:
    fontFamily: "Plus Jakarta Sans, Inter, -apple-system, sans-serif"
    fontSize: "56px"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "-0.035em"
  display-lg:
    fontFamily: "Plus Jakarta Sans, Inter, -apple-system, sans-serif"
    fontSize: "40px"
    fontWeight: 600
    lineHeight: 1.12
    letterSpacing: "-0.03em"
  display-md:
    fontFamily: "Plus Jakarta Sans, Inter, -apple-system, sans-serif"
    fontSize: "28px"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  heading-card:
    fontFamily: "Plus Jakarta Sans, Inter, -apple-system, sans-serif"
    fontSize: "20px"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-0.015em"
  body-lg:
    fontFamily: "Plus Jakarta Sans, Inter, -apple-system, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "-0.01em"
  body-md:
    fontFamily: "Plus Jakarta Sans, Inter, -apple-system, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "0em"
  body-sm:
    fontFamily: "Plus Jakarta Sans, Inter, -apple-system, sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0em"
  caption:
    fontFamily: "Plus Jakarta Sans, Inter, -apple-system, sans-serif"
    fontSize: "12px"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.01em"
  numeric-mono:
    fontFamily: "JetBrains Mono, SF Mono, Menlo, monospace"
    fontSize: "15px"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "-0.02em"
  numeric-hero:
    fontFamily: "JetBrains Mono, SF Mono, Menlo, monospace"
    fontSize: "32px"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.03em"

rounded:
  xs: "3px"
  sm: "6px"
  md: "8px"
  lg: "12px"
  pill: "9999px"

spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
  section: "80px"

components:
  button-primary:
    backgroundColor: "{colors.brand-green}"
    textColor: "{colors.ink-primary}"
    rounded: "{rounded.sm}"
    padding: "10px 20px"
  button-secondary:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink-primary}"
    borderColor: "{colors.border-hairline}"
    rounded: "{rounded.sm}"
    padding: "10px 20px"
  card-composer:
    backgroundColor: "{colors.surface-card}"
    borderColor: "{colors.border-hairline}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
    shadow: "0 1px 3px rgba(16, 21, 22, 0.04), 0 6px 16px rgba(16, 21, 22, 0.02)"
---

## 1. Overview & Graphic Identity Decisions

Senzen is a **Product-First Financial Engine**. It follows the visual DNA of **Composer by SoFi (`composer.trade`)**: light cream canvas, crisp typography, restrained green accents, and transparent live product logic blocks.

### The 7 Identity Decisions
1. **Emotional Register & Reference DNA**: **Calm, Product-First, Technically Confident** — Governed strictly by Composer (`composer.trade`). Real product UI, logic blocks, and visual proof in place of marketing fluff.
2. **Display Font**: **Plus Jakarta Sans / Inter** for Display, H1, H2, and Card Titles. Mono for financial metrics, rates, and logic expressions.
3. **Signature Color Move**: **Cream Canvas (`#F6F2EE`) + Charcoal Ink (`#101516`) + Composer Green Primary (`#1EC072`)**.
4. **Edge Language & Radius**: **6px–8px Crisp**. `--radius: 0.375rem (6px)` for buttons and inputs, `8px` for cards.
5. **Spacing Rhythm & Density**: Clean 64px–80px section rhythms with 16px/24px modular cards and hairlines (`#E5E2DD`).
6. **Data as Design Visual Anchors**: Real interactive logic rules (`IF income > $5,000 -> Allocate 20% to Growth`), metrics rows, and clear progress charts.
7. **Iconographic Voice & Motif**: Lucide outline (`1.5px` stroke). Signature Motif: **Visual logic blocks and product metric nodes**.

---

## Decisions

- **Reference DNA: Composer by SoFi (`composer.trade`)** — single reference; do not blend other brands. Evidence captured 2026-08-22 from live HTML/CSS: `#f6f2ee` canvas, `#101516` ink, `#273234` secondary ink, restrained green accents including `#1ec072`/`#049f55`, and `neue-haas-grotesk-display` served by Adobe Typekit.
- **Emotional register: calm, product-first, technically confident** — crisp copy and visible product proof, not editorial storytelling or concept-site theater.
- **Display/body font: Neue Haas Grotesk Display for display and UI/body** — preserve local fallback stack where licensing prevents self-hosting; financial figures may use the existing mono face. No serif display treatment.
- **Neutrals: cool-tinted blue-charcoal and warm cream** — migrate away from warm espresso/terracotta ledger neutrals toward Composer's cream canvas and blue-charcoal ink; no default Tailwind gray ramp.
- **Signature motif: live product proof blocks with thin rules and compact data visualizations** — recurring in hero, feature sections, and authenticated overview; no exhibit stamps, editorial labels, or decorative ledger rules.
- **Dark mode: not used for the marketing redesign; authenticated surfaces retain existing dark-theme capability only where current app behavior requires it, with Composer-like light as the default.**

## 2. Full Token Sheet

### Light Mode Variables (`:root`)
```css
:root {
  --background: 38 22% 95%;          /* #F6F2EE Composer Cream */
  --foreground: 190 16% 8%;          /* #101516 Charcoal Ink */

  --card: 0 0% 100%;                 /* #FFFFFF Card Surface */
  --card-foreground: 190 16% 8%;
  --popover: 0 0% 100%;
  --popover-foreground: 190 16% 8%;

  /* Brand Primary: Composer Green */
  --primary: 151 73% 44%;            /* #1EC072 Green */
  --primary-foreground: 190 16% 8%;  /* #101516 Dark Ink for WCAG AA */

  /* Neutral Secondary & Muted */
  --secondary: 38 12% 91%;           /* #ECE8E3 Lifted Surface */
  --secondary-foreground: 190 16% 8%;
  --muted: 38 10% 88%;               /* #E5E2DD Subtle Surface */
  --muted-foreground: 0 0% 40%;      /* #666666 Muted Charcoal */
  --accent: 151 73% 44%;             /* #1EC072 */
  --accent-foreground: 190 16% 8%;

  /* Status & Financial Semantics */
  --destructive: 0 84% 60%;          /* #EF4444 Deficit Crimson */
  --destructive-foreground: 0 0% 100%;

  /* Hairlines & Focus */
  --border: 38 10% 88%;              /* #E5E2DD Hairline */
  --input: 38 10% 88%;
  --ring: 151 73% 44%;
  --radius: 0.375rem;

  /* Recharts Color Palette */
  --chart-1: 151 73% 44%;            /* Composer Green */
  --chart-2: 215 80% 48%;            /* Blue */
  --chart-3: 190 16% 8%;             /* Ink Dark */
  --chart-4: 38 90% 50%;             /* Amber */
  --chart-5: 0 84% 60%;              /* Red */
}
```


## 5. Implementation Notes

### Files to Touch
1. `frontend/src/app/globals.css`: Update `:root` and `.dark` variables with the Composer cream canvas (`#F6F2EE`), charcoal ink (`#101516`), and green accent (`#1EC072`) token palette.
2. `frontend/src/app/layout.tsx`: Configure Next.js font imports for `Plus Jakarta Sans` (sans body and display) and `JetBrains Mono` (numbers/metrics).
3. `frontend/tailwind.config.ts`: Extend `fontFamily` with `sans: ["var(--font-sans)"]`, `mono: ["var(--font-mono)"]`.
4. `frontend/src/components/example/navbar.tsx`: Refactor to clean, light floating navbar with Composer brand styling.
5. `frontend/src/components/example/spotlight-demo.tsx`: Clean product-first hero with live logic block preview.
6. `frontend/src/components/example/timeline-demo.tsx`: Style timeline into structured feature milestones.
7. `frontend/src/components/example/chart-*.tsx`: Bind chart fills to CSS variables `var(--chart-1)` through `var(--chart-5)`.

### Font Loading in Next.js (`src/app/layout.tsx`)
```tsx
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});
```

### Verification
After writing, verify with `wc -l DESIGN.md`.
