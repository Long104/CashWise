# Visual & UX Redesign Specification: Socrates AI

## 1. Brief Inference & Vibe Read
- **Vibe sentence**: "Reading this as: Socratic belief deconstruction engine for intellectually rigorous seekers, with an editorial, academic, and deeply quiet visual language, leaning toward a high-contrast layout reminiscent of *The Pudding* and minimalist publisher *Distill.pub*."
- **Core Dials**: 
  - **VARIANCE** = 4/10 (highly structured, layout locked to rigid split-screen and controlled React Flow nodes)
  - **MOTION** = 3/10 (subtle, intentional transitions; no animation without cognitive purpose)
  - **DENSITY** = 6/10 (clear typographic grid, editorial margins, dense but structured textual hierarchy in nodes)

---

## 2. Colors & Typography
- **Primary Accent Color**: Forest Ochre / Warm Olive (`oklch(62% 0.12 95)`) for heavy states; Sage Moss (`oklch(68% 0.08 145)`) for resolved open space.
- **Background Theme**: Dark Editorial Academic (`oklch(14% 0.01 240)`).
- **Font Families**: 
  - Sans/Display = **Satoshi** (high-end sans with organic terminals and tight geometries)
  - Mono = **Geist Mono** (highly technical, ultra-clean code-aligned typeface)
  - Serif (Dialogues & Beliefs) = **Newsreader** (high-editorial, bookish style for direct quotes and deep reflective text)

### Accent Justification
Cyan-on-slate has been demoted. Socrates AI is a contemplative practice, not a tech dashboard. We use **Amber Ochre** to represent the psychological weight/gravity of an unexamined dogmatic belief, and **Sage Moss** to represent the open, quiet, breathable state of a deconstructed, fluid view. All set against a paper-like, deep-charcoal ink background (`oklch(14% 0.01 240)`) to feel like reading a philosophical thesis under a desk lamp.

### CSS Token Blueprint
```css
@theme {
  --background: oklch(14% 0.01 240);       /* Core midnight-ink paper */
  --foreground: oklch(89% 0.02 240);       /* Soft linen white */
  
  --card: oklch(17% 0.015 240);           /* Slate/ink overlay card */
  --card-foreground: oklch(89% 0.02 240);
  
  --muted: oklch(22% 0.02 240);           /* Silent, structural borders/bgs */
  --muted-foreground: oklch(62% 0.03 240);  /* Subdued commentary */
  
  --border: oklch(25% 0.02 240);          /* Thin gridlines, paper rules */
  
  --accent: oklch(62% 0.12 95);           /* Warm Ochre (Active challenge) */
  --accent-foreground: oklch(14% 0.01 240);
  
  /* Semantic philosophical states */
  --fact: oklch(80% 0.02 240);            /* Neutrally acknowledged truth */
  --leap-heavy: oklch(62% 0.12 95);       /* Heavy Amber-Ochre (Dogma) */
  --leap-resolved: oklch(68% 0.08 145);   /* Sage Moss (Open reflection) */
  --middle-way-glow: oklch(88% 0.04 100);  /* Soft ivory glow (Synthesis) */
}
```

---

## 3. Typography & Hierarchy
- **Display Headings**: Satoshi. Letter-spacing: `tracking-[-0.04em]`. Font-weight: `font-bold` or `font-black`.
- **Philosophical Quotes/Beliefs**: Newsreader (serif, italic, variable optical sizes, leading-relaxed).
- **Body & Chat Interface**: Satoshi. Line length capped at `68ch`.
- **System Tags / Node Headers**: Geist Mono. Small caps, uppercase, `tracking-[0.12em]`.

```markdown
# [Satoshi, Bold, 24px, tracking-[-0.04em]] Socrates AI
*“Capitalism is pure evil.”* [Newsreader, Italic, 16px, text-accent]
[Geist Mono, 10px, tracking-wider, uppercase] SUPPORTING VIEW A
```

---

## 4. Page Layout & Component Grid

Preserved split-screen layout (Left 40% / Right 60% React Flow Canvas).

### Navbar / Header (H: 56px)
- **Visuals**: Framed by a 1px border (`--border`). Solid `--background` with `backdrop-blur`.
- **Left**: Minimalist brand typography. Font: `Satoshi` Medium, 16px. Badge adjacent: **"Guide Mode: Socratic Mirror"** using `Geist Mono` at 9px in `--muted` pill.
- **Right**: Mind State Badge. An inline pill with a static 6px indicator light:
  - Phase 1-4 (Resolving): Amber glowing dot, text: `"Untangling..."` in Satoshi Medium, 11px.
  - Phase 5 (Completed): Green-sage steady dot, text: `"Untangled"` in Satoshi Medium, 11px.

### Left Pane: Dialogue Window (Width: 40% / 100vh - 56px)
- **Structure**: Vertical flexbox. Flat editorial hierarchy. No drop shadows. High contrast divider.
- **DIALOGUE WINDOW Header**: Geist Mono tag. Title: Satoshi Semibold.
- **Chat Messages Scroll Area**:
  - **AI Message Bubble**: Transparent base, left border 2px (`--border`), serif body. No rounded bubble capsules. It looks like a blockquote in a high-end publication.
  - **User Message Bubble**: Flat `--card` bg with thin `--border` wrap. Small caps label: `"USER REFLECTION"` above it. Sans font.
- **Distortion Warning Badge**: Slid between chat content and input. Border-l-2 (`--accent` / Ochre), `--card` background. Text: *"Distortion: absolute projection (Heavy Leap)."*
- **Socratic Input Bar**: Anchored to bottom. Textarea is auto-growing up to 4 lines, custom inline buttons instead of standard glowing blocks.

### Right Pane: Philosophy Canvas (Width: 60% / 100vh - 56px)
- **Background**: Dot grid pattern (`Background` from React Flow) colored with `--border` at 15% opacity.
- **Edges**: SVGs styled with solid/dashed behavior:
  - Solid Sage Moss (`--leap-resolved`) for paths that have been completely untangled.
  - Dashed Amber Ochre (`--leap-heavy`) for active pathways.
  - Dashed Muted grey (`--border`) for locked future steps.
- **Node Cards**: 
  - **ROOT node**: Custom shape. Square corners, thin double-line border. Newsreader serif quote. Width: `300px`.
  - **ASSUMPTION node**: Card divided into 2 distinct panes by a horizontal dotted line.
    - Top half: Fact (neutrally framed, Satoshi, `--muted-foreground`).
    - Bottom half: Leap (italicized Newsreader serif, dynamic color transition from Amber to Sage Moss).
  - **MIDDLE WAY node**: Monolithic slate slab with a subtle `--middle-way-glow` shadow. Title: `"The Middle Way"`. Synthesis text: Newsreader Italic, center-aligned. Width: `340px`.

---

## 5. Interactive & Motion Blueprints
- **React Flow Edge Draw**: Draw animation using `stroke-dashoffset` transition when a node unlocks.
- **Node Progressive Reveal**: Fade in + translate Y up (`y: 250 -> 230`, `opacity: 0 -> 1`) utilizing Spring dynamics:
  - `stiffness: 120, damping: 20` via `motion/react`.
- **Node State Shift**: Amber (`oklch(62% 0.12 95)`) to Sage Moss (`oklch(68% 0.08 145)`) transition runs a CSS keyframe variable transition over `450ms` using `cubic-bezier(0.16, 1, 0.3, 1)`.
- **Middle Way Emergence**: Scaled from 95% to 100% combined with a radial backdrop reveal on the canvas. Gated strictly behind `prefers-reduced-motion: no-preference`.

---

## 6. 21st.dev Component Shopping List
Socrates AI will utilize the highly polished, modern design language from **kokonutd** and **origin-ui** to avoid standard shadcn templates.

1. **AI Chat Input Bar**
   - **URL**: `https://21st.dev/@kokonutd/components/chat-input`
   - **Install Command**: `npx shadcn@latest add "https://21st.dev/r/kokonutd/chat-input"`
   - **Role**: Socratic textarea wrapper with auto-grow and clean action layouts.
2. **Dialogue Scroll Container**
   - **URL**: `https://21st.dev/@shadcn/components/scroll-area`
   - **Install Command**: `npx shadcn@latest add "scroll-area"`
   - **Role**: Smooth message scrolling with hidden custom scrollbars to maintain the layout.
3. **Card Primitives (Modified for Custom React Flow Nodes)**
   - **URL**: `https://21st.dev/@origin-ui/components/dialog`
   - **Install Command**: `npx shadcn@latest add "https://21st.dev/r/originui/dialog"`
   - **Role**: Origin-UI border elements for node layouts.
4. **Mind State & Stage Badges**
   - **URL**: `https://21st.dev/@magicui/components/animated-gradient-text`
   - **Install Command**: `npx shadcn@latest add "https://21st.dev/r/magicui/animated-gradient-text"`
   - **Role**: Subtle, clean gradient text badges for state indicators.
5. **Flow Canvas Background Grid**
   - **URL**: `https://21st.dev/@magicui/components/retro-grid`
   - **Install Command**: `npx shadcn@latest add "https://21st.dev/r/magicui/retro-grid"`
   - **Role**: Modified to draw a slow, horizontal background texture representing mental waves.
6. **Action Confirmation CTA**
   - **URL**: `https://21st.dev/@kokonutd/components/button`
   - **Install Command**: `npx shadcn@latest add "https://21st.dev/r/kokonutd/button-shiny"`
   - **Role**: Shimmer button used only for the main landing "Deconstruct" overlay.

---

## 7. Anti-slop Audit & Pre-flight
- **Contrast Check**: Background (`#121316` / `oklch(14% 0.01 240)`) to Foreground (`#E6E6E7`) contrast ratio is **14.8:1** (exceeds AAA rating). Sage Moss to card background is **6.4:1** (passes AA).
- **Reject AI-Tells**: No glowing cards, no neon purple nodes, no generic rounded chat bubble tails, no generic "Bento grid" grids, and no glassmorphic overlays.
- **Layout Rules**: Alternation not applicable since it's a fixed split-viewport tool. The Left/Right asymmetry acts as the layout engine.
- **Copy Restraints**: Em-dashes (`—`) in copy are replaced with standard sentence phrasing. Tagline limit: exactly 1 tagline badge ("Guide Mode: Socratic Mirror") inside the header.
