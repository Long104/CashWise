# Senzen SOTA Frontend Redesign

## Product

### Goal & scope
Replace the rejected Editorial Ledger v1 landing experience with one deliberate, quiet editorial story for Senzen: hero → product preview → trust strip → numbered chapters → quote/CTA → footer. Recompose the product home and plan surfaces enough to carry the same visual hierarchy without serif fatigue. Preserve existing routes, auth behavior, data fetching, and shadcn primitives.

### Out of scope
- No API, database, auth, route, or business-rule changes.
- No new animation library, generated imagery, shader, gradient, carousel, or decorative background texture.
- Do not retain or rework the rejected “Manage Your Money Smarter” or “Create Your Financial Plan” landing sections; remove their landing imports and dead code only if no other route imports them.

### User stories / acceptance criteria
- As a visitor, I see the product value and a real ledger preview in the first viewport without clipping or dead space.
- As a visitor, I can reach sign-in/sign-up from a stable navbar whose hover/focus state never paints an orange block behind sibling links.
- As a visitor, I encounter one coherent landing narrative; no duplicate feature/plan marketing sections remain.
- As a signed-in user, dashboard and plan detail remain functional while using warm paper surfaces, hairlines, sans UI copy, serif only for display headings, and mono financial figures.
- The final UI passes every applicable DESIGN.md and design-taste checklist item: no purple/neon/mint gradients, no default gray utilities, no `uppercase tracking-*` kickers, no card swoops, no emoji, no giant centered hero without data, no generic body/display font collision, no serif on controls/tables, and one recurring double-hairline exhibit motif on ≥3 surfaces.
- At 375px, 768px, and 1440px there is no horizontal overflow, hero content is fully visible, and primary CTA and nav links are keyboard reachable with visible focus.

## Engineering Handoff

### Architecture / decisions
Keep the existing Next.js + Tailwind + shadcn architecture and existing tokens. Use standard shadcn Button/Card/Separator where applicable; custom editorial composition is limited to hero, chapter timeline, and motif because no existing primitive expresses those layouts. CSS transitions only; no decorative motion. Keep dark mode because the current app supports it and DESIGN.md defines tinted dark tokens; never use pure black.

### Target files
- `frontend/src/app/(landingPage)/page.tsx`: compose only Navbar, redesigned hero, trust strip, TimelineDemo/chapters, one testimonial or CTA block, Footer; remove Try/Try2/InfiniteMovingCards imports unless explicitly used by the retained story.
- `frontend/src/components/example/navbar.tsx`: stable paper header and links; no `NavigationMenuDemo` wrapper if it causes Radix background bleed.
- `frontend/src/components/ui/navbar-menu.tsx`: if retained by another consumer, remove `[&>*]:bg-primary`, use tokenized link-level hover/focus styles, and ensure no shared `layoutId` or parent background paints siblings.
- `frontend/src/components/example/spotlight-demo.tsx`: fix hero geometry; remove clipping-causing absolute overflow, use responsive `minmax(0,1fr)` grid, reserve ledger card space, keep data in first viewport.
- `frontend/src/components/example/timeline-demo.tsx`: reduce to three numbered chapters with one useful chart/card per chapter, consistent hairlines and whitespace.
- `frontend/src/components/example/footer.tsx`: retain dark umber footer and add the exhibit double-rule motif.
- `frontend/src/app/(product)/home/page.tsx`, `frontend/src/app/(product)/plan/[...planId]/page.tsx`, `frontend/src/app/(product)/createPlan/page.tsx`: audit/recompose styling only; preserve handlers, query keys, API calls, and form schema.
- `frontend/src/app/globals.css`: only token/utilities needed to resolve remaining hardcoded/default-gray styles; keep DESIGN.md light/dark token values.
- `frontend/src/app/layout.tsx`: retain Newsreader, Plus Jakarta Sans, JetBrains Mono imports; ensure body/UI does not globally force serif and preserve theme/auth providers.

### Required implementation details
1. Start from current components and remove duplication rather than create a parallel landing system. Keep one `Navbar` and one hero entry point.
2. Hero must use a responsive 12-column or equivalent grid with `minmax(0,1fr)`, `items-center`, bounded vertical padding, and no negative-positioned required content. H1 is Newsreader; supporting copy, nav, buttons, and labels are Jakarta; money and exhibit stamps are JetBrains Mono with tabular numerals.
3. Use one terracotta action and one outline action. Button radius 6px; card radius 8px; nested surface radius follows outer minus inset spacing. No pill CTA.
4. The motif is the DESIGN.md “double hairline rule + exhibit stamp”; implement it in hero, chapter/timeline divider, and footer/CTA. It must be static and tokenized.
5. Navbar links must own their hover/focus background (prefer transparent → `bg-secondary` or underline/rule), with no parent `bg-primary`; active state is text/rule only. Verify desktop and mobile menu behavior.
6. Delete unused marketing content after import audit. Do not delete components shared by product routes without checking references.
7. Product pages: use serif only for page/card display titles; use Jakarta for labels/actions/forms; use mono for amounts/date/category stamps. Replace any `gray-*`, hardcoded neon/green/purple/black, or gradient utilities in touched UI with semantic tokens. Do not invent additional accent hues.
8. Preserve accessible semantic headings, button/link behavior, focus-visible rings, alt text, and reduced-motion behavior. No `select-none` added to interactive content.

### States and edge cases
- Landing: default, keyboard focus, narrow viewport, dark theme, reduced motion.
- Product home: loading, empty plans, populated plans, delete-menu error; no API contract change.
- Plan detail: loading, missing/invalid plan, empty expenses, populated ledger, negative/positive values; keep existing error handling.
- Large data: 10k ledger rows must remain scrollable/virtualization behavior unchanged; do not add mount animations or count-up work.
- Offline/API timeout: existing error state remains visible and readable; styling changes must not swallow errors.

### Test matrix / executable contracts
- Unit/static (`frontend`): assert landing module no longer imports `try-landing`, `try2-landing`, or redundant moving-card sections; assert `navbar-menu.tsx` contains no `[&>*]:bg-primary` and touched UI contains no `gray-*` or `uppercase tracking-*`.
- Type/build: `npm run typecheck` (or package-equivalent), `npm run build`.
- Existing tests: `npm test` (or package-equivalent) passes without auth/API changes.
- Browser QA: at 375×812, 768×1024, 1440×900, landing loads with hero H1 + ledger preview visible, no horizontal scrollbar, no console errors, CTA links resolve; product home loads and primary create-plan path remains clickable.
- Accessibility: keyboard Tab reaches nav links and both hero CTAs; focus ring is visible; automated axe/Lighthouse reports no new serious/critical violations.
- Visual: screenshots of landing and one product page show warm canvas, coherent hierarchy, fully visible hero, tokenized surfaces, and exhibit motif on three surfaces.

### Vertical slices
1. Landing composition + navbar: remove redundant sections, fix nav, make hero viewport-safe; build/typecheck.
2. Chapters/trust/CTA/footer: retain only purposeful content, apply motif and delete decorative excess; build/typecheck.
3. Product styling pass: normalize typography/tokens without behavior changes; build/typecheck/tests.
4. Browser verification at viewport matrix and product primary flow; fix only evidence-backed defects.

### Verification Exit Criteria
- [ ] `git diff --check` exits 0.
- [ ] `npm run typecheck` (or documented package equivalent) exits 0.
- [ ] `npm run build` exits 0.
- [ ] `npm test` (or documented package equivalent) exits 0.
- [ ] `rg "uppercase tracking|gray-[0-9]|bg-purple|from-purple|to-purple|bg-emerald|bg-green|\[&>\*\]:bg-primary" frontend/src` returns no new/touched violations.
- [ ] Landing source contains no imports of removed redundant marketing sections and renders exactly one hero story; verified by source audit and browser screenshot.
- [ ] Browser screenshots exist for landing and one product page at 375×812, 768×1024, and 1440×900; hero H1 and ledger preview are fully visible with no horizontal overflow.
- [ ] Browser primary flow reaches `/sign-up` or `/sign-in` from landing and product home remains interactive; console has zero errors.
- [ ] Reviewer confirms all applicable DESIGN.md/design-taste checklist items pass, including serif discipline, 3–5-color token use, no card swoops, motif on ≥3 surfaces, and WCAG AA text contrast.

### Domain invariant / open edge constraint
The user did not specify whether the marketing navbar’s “Create Plan” should be public or require authentication. If it remains linked directly to `/createPlan`, unauthenticated visitors may hit a protected product route and experience a dead-end; Engineer must preserve current intended auth redirect behavior or flag the exact route behavior in the handoff rather than silently changing auth.
