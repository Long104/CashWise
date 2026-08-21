---
name: Senzen Editorial Personal Finance
description: Editorial financial ledger design system for Senzen. Rooted in warm tactile paper tones, editorial serif typography for headings, terracotta/bronze voltage accents, and monospace precision for numeric ledgers.
colors:
  # Light Canvas & Paper
  canvas: "#FBF9F5"
  surface-card: "#FFFFFF"
  surface-lifted: "#F4EFEA"
  surface-subtle: "#EFE8E1"
  border-hairline: "#E6DED5"
  border-strong: "#D8CDC2"
  
  # Ink & Typography (Warm Espresso / Charcoal)
  ink-primary: "#1C1917"
  ink-body: "#44403C"
  ink-muted: "#78716C"
  ink-faint: "#A8A29E"
  
  # Brand Voltage (Terracotta / Warm Bronze)
  terracotta: "#C85A32"
  terracotta-hover: "#B34D28"
  terracotta-subtle: "#FAECE7"
  bronze: "#9A6B38"
  bronze-hover: "#855B2E"
  bronze-subtle: "#F6EFE6"
  
  # Functional / Financial Semantic
  surplus-olive: "#2D6A4F"
  surplus-subtle: "#EBF4EF"
  deficit-crimson: "#B91C1C"
  deficit-subtle: "#FDF2F2"
  discretionary-amber: "#B45309"
  recurring-slate: "#475569"
  
  # Dark Mode Tinted Ledger Surfaces (Dark Warm Umber Slate)
  dark-canvas: "#131211"
  dark-surface-card: "#1C1A18"
  dark-surface-lifted: "#262320"
  dark-border: "#38332E"
  dark-ink-primary: "#F7F4EF"
  dark-ink-body: "#D6CFC7"
  dark-ink-muted: "#9E968D"
  dark-terracotta: "#E06D44"
  dark-terracotta-subtle: "#2C1C16"

typography:
  display-xl:
    fontFamily: "Newsreader, Playfair Display, Georgia, serif"
    fontSize: "56px"
    fontWeight: 500
    lineHeight: 1.08
    letterSpacing: "-0.035em"
  display-lg:
    fontFamily: "Newsreader, Playfair Display, Georgia, serif"
    fontSize: "40px"
    fontWeight: 500
    lineHeight: 1.12
    letterSpacing: "-0.03em"
  display-md:
    fontFamily: "Newsreader, Playfair Display, Georgia, serif"
    fontSize: "28px"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  heading-card:
    fontFamily: "Newsreader, Georgia, serif"
    fontSize: "20px"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-0.015em"
  body-lg:
    fontFamily: "Plus Jakarta Sans, -apple-system, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "-0.01em"
  body-md:
    fontFamily: "Plus Jakarta Sans, -apple-system, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "0em"
  body-sm:
    fontFamily: "Plus Jakarta Sans, -apple-system, sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0em"
  caption:
    fontFamily: "Plus Jakarta Sans, -apple-system, sans-serif"
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
    backgroundColor: "{colors.terracotta}"
    textColor: "#FFFFFF"
    rounded: "{rounded.sm}"
    padding: "10px 20px"
  button-secondary:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink-primary}"
    borderColor: "{colors.border-hairline}"
    rounded: "{rounded.sm}"
    padding: "10px 20px"
  card-ledger:
    backgroundColor: "{colors.surface-card}"
    borderColor: "{colors.border-hairline}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
    shadow: "0 1px 3px rgba(28, 25, 23, 0.04), 0 6px 16px rgba(28, 25, 23, 0.02)"
---

## 1. Overview & Graphic Identity Decisions

Senzen is an **Editorial Personal Finance Ledger**. It rejects cold, generic fintech templates, washed-out mint backgrounds, disconnected black buttons, and unstyled type. Instead, it establishes an atmosphere of quiet clarity, tactile warmth, and thoughtful intentionality reminiscent of the *Financial Times* weekend magazine and *Instatic Craft*.

### The 7 Identity Decisions
1. **Emotional Register & Reference DNA**: **Calm & Elevated** — Governed by Instatic Craft / Mastercard Editorial DNA. Financial management should feel steady, private, and deliberate.
2. **Display Font**: **Newsreader (Google Fonts)** / Cormorant Garamond fallback for all Display, H1, H2, and Card Titles. Paired with **Plus Jakarta Sans** for UI body copy and **JetBrains Mono** with `tnum` (tabular numbers) for financial metrics, rates, and date stamps.
3. **Signature Color Move**: **Warm Alabaster Canvas (`#FBF9F5`) + Espresso Ink (`#1C1917`) + Terracotta Rust Primary (`#C85A32`)**. Balanced by Warm Bronze (`#9A6B38`) secondary accents. No generic emerald mint, no neon blues, no purple gradients.
4. **Edge Language & Radius**: **6px–8px Architectural Crisp**. `--radius: 0.5rem (8px)` for cards/sheets, `6px` for buttons/inputs, `3px` for badges/pills. Concentric nesting: inner child radius = outer - padding.
5. **Spacing Rhythm & Density**: **Editorial Breath**. Generous 80px section rhythms on marketing, structured 16px/24px ledger grid on in-app surfaces with 1px tactile hairlines (`#E6DED5`) instead of stacked heavy card shadows.
6. **Data as Design Visual Anchors**: Live ledger summaries, stamped receipt-style metric lines (`FIG. 01 — MONTHLY SURPLUS`), and clear progress rules that treat financial figures as visual anchors.
7. **Iconographic Voice & Motif**: **Hairline Ledger & Stamp Rule**. Iconography strictly via Lucide outline (`1.5px` stroke). Signature Motif: **Double hairline rule with small roman/numeric exhibit stamp** (e.g. `[ EXHIBIT A • LEDGER 2026 ]`) placed in the hero, timeline milestones, plan summary sheets, and footer divider.

---

## 2. Full Token Sheet (Light & Dark Theme)

### Light Mode Variables (`:root`)
```css
:root {
  --background: 38 25% 97%;          /* #FBF9F5 Warm Alabaster Paper */
  --foreground: 24 10% 10%;          /* #1C1917 Warm Espresso */

  --card: 0 0% 100%;                 /* #FFFFFF Crisp Paper Card */
  --card-foreground: 24 10% 10%;     /* #1C1917 */
  --popover: 0 0% 100%;              /* #FFFFFF */
  --popover-foreground: 24 10% 10%;

  /* Brand Primary: Terracotta */
  --primary: 16 60% 49%;             /* #C85A32 Terracotta */
  --primary-foreground: 38 25% 98%;  /* #FDFBF7 */

  /* Neutral Secondary & Muted */
  --secondary: 33 20% 93%;           /* #F4EFEA Lifted Surface */
  --secondary-foreground: 24 10% 10%;
  --muted: 33 16% 91%;              /* #EFE8E1 Subtle Surface */
  --muted-foreground: 25 5% 45%;     /* #78716C Warm Stone Gray */
  --accent: 32 45% 41%;              /* #9A6B38 Warm Bronze */
  --accent-foreground: 38 25% 98%;

  /* Status & Financial Semantics */
  --destructive: 0 72% 42%;          /* #B91C1C Deficit Crimson */
  --destructive-foreground: 0 0% 100%;

  /* Hairlines & Focus */
  --border: 33 18% 87%;              /* #E6DED5 Tactile Hairline */
  --input: 33 18% 87%;               /* #E6DED5 */
  --ring: 16 60% 49%;                /* Focus ring matches Terracotta */
  --radius: 0.5rem;                  /* 8px */

  /* Recharts Color Palette */
  --chart-1: 16 60% 49%;             /* Terracotta (Primary Series) */
  --chart-2: 32 45% 41%;             /* Bronze (Secondary Series) */
  --chart-3: 152 40% 30%;            /* Olive Surplus */
  --chart-4: 215 19% 35%;            /* Slate Fixed */
  --chart-5: 38 80% 38%;             /* Amber Discretionary */

  /* Sidebar */
  --sidebar-background: 38 25% 97%;
  --sidebar-foreground: 24 10% 10%;
  --sidebar-primary: 16 60% 49%;
  --sidebar-primary-foreground: 38 25% 98%;
  --sidebar-accent: 33 20% 93%;
  --sidebar-accent-foreground: 24 10% 10%;
  --sidebar-border: 33 18% 87%;
  --sidebar-ring: 16 60% 49%;
}
```

### Dark Mode Variables (`.dark`)
```css
.dark {
  --background: 24 6% 7%;            /* #131211 Deep Umber Slate */
  --foreground: 38 20% 95%;          /* #F7F4EF Pale Parchment */

  --card: 24 8% 10%;                 /* #1C1A18 Dark Paper Surface */
  --card-foreground: 38 20% 95%;
  --popover: 24 8% 10%;
  --popover-foreground: 38 20% 95%;

  /* Brand Primary */
  --primary: 16 72% 57%;             /* #E06D44 Warm Terracotta Amber */
  --primary-foreground: 24 10% 6%;   /* #141210 */

  /* Neutral Secondary & Muted */
  --secondary: 24 6% 14%;            /* #262320 Elevated Dark Surface */
  --secondary-foreground: 38 20% 95%;
  --muted: 24 6% 14%;
  --muted-foreground: 33 8% 59%;     /* #9E968D */
  --accent: 32 45% 50%;              /* #B8854D Soft Bronze */
  --accent-foreground: 38 20% 95%;

  /* Status */
  --destructive: 0 68% 55%;          /* #EF4444 Crimson */
  --destructive-foreground: 0 0% 100%;

  /* Hairlines & Focus */
  --border: 24 6% 20%;               /* #38332E Hairline Dark */
  --input: 24 6% 20%;
  --ring: 16 72% 57%;

  /* Recharts Dark Palette */
  --chart-1: 16 72% 57%;             /* Warm Terracotta */
  --chart-2: 32 45% 50%;             /* Soft Bronze */
  --chart-3: 152 45% 45%;            /* Sage Olive */
  --chart-4: 215 16% 60%;            /* Slate */
  --chart-5: 38 75% 55%;             /* Warm Ochre */

  /* Sidebar */
  --sidebar-background: 24 6% 7%;
  --sidebar-foreground: 38 20% 95%;
  --sidebar-primary: 16 72% 57%;
  --sidebar-primary-foreground: 24 10% 6%;
  --sidebar-accent: 24 6% 14%;
  --sidebar-accent-foreground: 38 20% 95%;
  --sidebar-border: 24 6% 20%;
  --sidebar-ring: 16 72% 57%;
}
```

---

## 3. Section & Page Specifications

### A. Marketing Landing Page (`/(landingPage)/page.tsx`)
- **Navigation (`/components/example/navbar.tsx`)**: Replaces full-bleed primary bar with a floating, clean alabaster header (`bg-background/90 backdrop-blur-sm border-b border-border`). Brand logo accompanied by `font-serif text-xl tracking-tight font-medium`. Navigation links use `body-sm` with a crisp terracotta CTA button ("Start Planning").
- **Hero Section (`SpotlightPreview` / Hero)**: Removes neon green mesh and black shimmer button. Replaces with an asymmetrical editorial layout: left-column serif display H1 ("Master your cashflow with quiet clarity"), quiet subheadline, dual action buttons (Solid Terracotta `Button` + Outlined Hairline `Button`), and right-column live ledger card mockup showcasing weekly budget surplus in JetBrains Mono.
- **How-it-Works Timeline (`TimelineDemo`)**: Eliminates the sparse empty vertical strip. Treats milestones as numbered ledger chapters (`01 / AUDIT`, `02 / PLAN`, `03 / PRESERVE`). Embeds week/month comparison charts inside styled paper cards with 1px border rules and clear caption notes.
- **Features & Social Proof (`Try`, `Try2`, `InfiniteMovingCardsDemo`)**: Replaces generic Lucide color pills with monochrome 1.5px outlined icons, editorial typography, and quote blocks formatted like verified personal ledger testimonials.
- **Footer (`footer.tsx`)**: Dark warm umber footer (`bg-[#181715] text-[#D6CFC7]`), 4-column structured directory, subtle hairline dividers, and copyright/compliance disclosure text.

### B. Authentication Pages (`/sign-in`, `/sign-up`)
- Centered 440px paper card on alabaster background.
- Clean serif card title (`font-serif text-2xl font-medium`).
- Form inputs styled with warm border hairlines (`border-border`), crisp focus rings (`focus-visible:ring-primary`), and single solid terracotta submit button.
- OAuth buttons (Google, GitHub) use standard SVG brand glyphs with neutral paper background and 1px border.

### C. Financial Plans Overview Dashboard (`/(product)/home`)
- **Header**: `font-serif text-3xl font-normal tracking-tight text-foreground` + subtext in `text-muted-foreground`.
- **Plan Cards Grid**: 3-column responsive grid. Cards styled with `bg-card border border-border hover:border-primary/40 transition-colors`.
- **Card Header**: Plan name in serif `heading-card` with an unobtrusive subtle menu/delete trigger; category & timestamp badge in JetBrains Mono.
- **Card Body**: Summary key metrics (Budget, Duration, Auto-save status) formatted as ledger rows.
- **Empty State**: Centered warm paper card with a book/ledger illustration, clear explanatory copy ("No active plans found"), and a primary CTA "Create Your First Plan".

### D. Plan Creation Flow (`/(product)/createPlan`)
- Max-width 768px form card structured like a financial brief.
- Form fields grouped into logical sections: *01. Plan Identity*, *02. Budget Allocation*, *03. Automation & Rules*.
- Radio cards for Plan Type ("Conservative", "Balanced", "Aggressive") with subtle terracotta border highlights when selected.

### E. Individual Plan Ledger & Detail (`/(product)/plan/[...planId]` & `viewPlan`)
- **Master-Detail KPI Cards**: 4-up metric cards displaying *Total Balance*, *Income*, *Expenses*, *Net Savings* with `numeric-hero` monospace numbers and small muted labels.
- **Ledger Table**: 1px crisp horizontal hairline rows (`divide-y divide-border`), right-aligned monospace amounts with green/red indicator dots instead of loud solid badges.
- **Recharts Integration**: Bar and area charts customized with terracotta (`--chart-1`) and bronze (`--chart-2`) fills, neutral grid lines (`rgba(0,0,0,0.06)`), and custom styled tooltips.

---

## 4. Anti-Slop Checklist & Guardrails

| Pattern | Status | Rule & Replacement |
|---|---|---|
| **Purple/Neon Gradients** | **BANNED** | Strictly forbidden. Canvas uses solid warm alabaster (`#FBF9F5`). |
| **Washed-out Mint Backgrounds** | **BANNED** | No pale emerald washes. Primary accent is warm Terracotta (`#C85A32`). |
| **Glassmorphism Stacking** | **BANNED** | No multi-layer backdrop blurs. Maximum 1 subtle header blur surface. |
| **Generic Inter/Geist for Display** | **BANNED** | All display headers must use Newsreader serif. Inter/Geist strictly body only. |
| **All-caps Tracked Kickers** | **BANNED** | No loud `uppercase tracking-widest` marketing tags. Use numeric chapter labels (`01 /`). |
| **Card Top-Border 2px Swoops** | **BANNED** | No decorative gradient border strips. Borders are uniform 1px tactile hairlines. |
| **Loud Emoji Icons** | **BANNED** | All UI icons must be uniform Lucide SVG line icons with 1.5px stroke. |
| **Giant Centered Hero without Data** | **BANNED** | Hero must feature live ledger/dashboard data cards on the first viewport. |

---

## 5. Implementation Notes

### Files to Touch
1. `frontend/src/app/globals.css`: Update `:root` and `.dark` variables with the warm alabaster, espresso ink, terracotta, and bronze token palette.
2. `frontend/src/app/layout.tsx`: Configure Next.js font imports for `Newsreader` (serif display), `Plus Jakarta Sans` (sans body), and `JetBrains Mono` (numbers).
3. `frontend/tailwind.config.ts`: Extend `fontFamily` with `serif: ["var(--font-newsreader)", "serif"]`, `sans: ["var(--font-sans)"]`, `mono: ["var(--font-mono)"]`.
4. `frontend/src/components/example/navbar.tsx`: Refactor from green navbar to clean floating paper navbar with proper contrast.
5. `frontend/src/components/example/spotlight-demo.tsx`: Replace neon hero styling with editorial headline and ledger preview.
6. `frontend/src/components/example/timeline-demo.tsx`: Style timeline into structured numbered ledger milestones.
7. `frontend/src/components/example/chart-*.tsx`: Bind chart fills to CSS variables `var(--chart-1)` through `var(--chart-5)`.

### Font Loading in Next.js (`src/app/layout.tsx`)
```tsx
import { Newsreader, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
});

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
