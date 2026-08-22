# Composer-Inspired Full App Redesign Spec

## Section 1 — Product

### Goal & Scope
Redesign Senzen using **Composer by SoFi (`https://www.composer.trade/`)** as the single reference DNA. Transition the entire product away from the rejected Editorial Ledger/terracotta/serif aesthetic to a clean, product-first, light-canvas trading/budgeting tool feel. The interface will feature crisp typography, restrained green accents (`#1ec072` / `#049f55`), live interactive product logic/data blocks in the hero, clear stats rows, clean authentication surfaces, and an intuitive dashboard/ledger layout.

### Out of Scope
- No changes to API routes, database models, auth backend, or core financial calculation logic.
- No inclusion of multiple brand DNAs (no Robinhood/Stripe hybrids).
- No editorial exhibit stamps, Roman numeral labels, or decorative warm-beige/terracotta washes.
- No heavy decorative animations, spinning meshes, or parallax headers.

### User Stories / Acceptance Criteria
1. **Public Marketing Landing**: Visitors see a high-clarity hero with real product logic blocks, a concise stats row, interactive strategy/plan builders, crisp transparent pricing, and clear CTAs into `/sign-up`.
2. **Authentication Pages**: `/sign-in` and `/sign-up` feature crisp Composer-like split/centered containers with `#101516` buttons and `#1ec072` focus accents.
3. **Authenticated Dashboard (`/home`)**: Users view clean financial plan cards with structured stats, real-time balance metrics, and intuitive "+ Create Plan" flows.
4. **Plan Creation & Detail (`/createPlan`, `/plan/[...planId]`, `/viewPlan`)**: Form and ledger displays use crisp clean cards, structured data tables, and cohesive green-tinted financial charts without serif headers.

---

## Section 2 — Engineering Handoff

### 1. Evidence-Backed Design Tokens (Extracted from `composer.trade`)
- **Canvas / Background**: `#f6f2ee` (HSL `38 22% 95%`)
- **Card / Surface**: `#ffffff`
- **Primary Ink (Headings & Body)**: `#101516` (HSL `190 16% 8%`)
- **Muted Ink / Secondary**: `#273234` / `#666666` (HSL `190 14% 18%`)
- **Brand Primary Accent (Green)**: `#1ec072` (HSL `151 73% 44%`) / Dark hover `#049f55`
- **Border / Hairlines**: `#e5e2dd` (subtle cream-tinted hairline)
- **Border Radius**: Base `6px` (`0.375rem`), Card `8px` (`0.5rem`), Button `6px` (`0.375rem`)
- **Typography**: Display & Body: `neue-haas-grotesk-display, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`. Numbers: Monospace `JetBrains Mono` / `SFMono-Regular` with `tnum`.

### 2. 3 Genuinely Different Landing Layouts Evaluated
- **Layout A: Full-Bleed Product Canvas (Recommended — Composer DNA)**
  - *Hero*: Bold H1 ("Build your money engine without code") + subtitle + dual CTA ("Get Started Free" & "Explore Strategies") + Real live logic builder / interactive strategy flow block directly beneath.
  - *Proof*: 4-up metric stats row (`$0 Commission`, `100% Automated`, `5-Min Setup`, `Bank-Grade Security`).
  - *Feature Bento*: 3-column split showing logic rule triggers, auto-rebalancing preview, and multi-account asset tracking.
  - *Interactive Demo*: Step-by-step logic block selector mimicking Composer's visual strategy builder.
  - *Pricing*: Clean 2-tier transparent card grid.
  - *Footer*: Clean dark charcoal `#101516` footer with structured directory links.
- **Layout B: Asymmetric Split Hero & Vertical Workflow**
  - Left column copy and registration form input; right column live interactive simulator.
- **Layout C: Metric-Dense Dashboard Strip**
  - Top full-width live market/ledger chart strip followed by modular feature tabs.

**Selected Layout**: **Layout A (Full-Bleed Product Canvas)** for maximum parity with Composer's product-first credibility.

### 3. Target Files & Key Modifications
- `frontend/src/app/globals.css`: Update `:root` variables to Composer color tokens (`--background: 38 22% 95%`, `--primary: 151 73% 44%`, `--foreground: 190 16% 8%`, etc.).
- `frontend/src/app/layout.tsx`: Update font styling to modern sans hierarchy (`neue-haas-grotesk` / `Plus Jakarta Sans` / `Inter`), removing Newsreader serif.
- `frontend/src/components/example/navbar.tsx`: Rebuild top navigation bar with clean `#f6f2ee` backdrop blur, crisp links, and green CTA button.
- `frontend/src/components/example/spotlight-demo.tsx` & `frontend/src/app/(landingPage)/page.tsx`: Replace old hero and timeline with Composer-styled hero logic blocks, stats strip, visual logic tree, and transparent pricing.
- `frontend/src/components/example/footer.tsx`: Rebuild footer in `#101516` ink tone with crisp directory structure.
- `frontend/src/app/(landingPage)/sign-in/page.tsx` & `sign-up/page.tsx`: Polish auth forms to match Composer surface tokens.
- `frontend/src/app/(product)/home/page.tsx` & `createPlan/page.tsx` & `plan/[...planId]/page.tsx`: Refresh product view layouts, remove serif headers, ensure chart colors use Composer green and crisp neutral palettes.

### 4. Test Matrix & Verification Exit Criteria
- [ ] `npm run build` passes with 0 errors in `frontend`.
- [ ] `npm run lint` passes without fatal errors.
- [ ] Visual verification of landing page, navbar, stats row, and interactive builder.
- [ ] Verify WCAG AA contrast for text on `#f6f2ee` canvas and green CTA buttons.
- [ ] Confirm no editorial labels, Roman numeral stamps, or terracotta elements remain.
