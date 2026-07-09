# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # Start dev server (Next.js)
pnpm build        # Production build
pnpm start        # Start production server
pnpm lint         # Run ESLint
```

No test suite is configured.

## Architecture

This is a **Next.js 16 (App Router)** marketing site for ITEK Solutions / Metallic IT, an MSP (managed services provider). Stack: React 19, TypeScript, Tailwind CSS v4, shadcn/ui (Radix), Framer Motion, react-hook-form + Zod.

### Content / Copy layer (`content/`)

All page copy lives in `content/` — never hardcoded inside components.

- **`content/types.ts`** — `ServicePageCopy` shape (hero, problem, comparison, useCases, cta) and `ServiceHref` union type.
- **`content/services/<slug>.ts`** — one file per service, exports `href` and `copy`.
- **`content/services/index.ts`** — single entry point; exports `getServiceCopy(href)`. Register new services here.
- **`content/about.ts`** — About page copy and `leadership[]` array.

### Service pages (`app/<slug>/page.tsx`)

All service pages follow the same pattern:
1. Call `getServiceByHref(href)` (from `@/components/landing/ServicesOverview`) for nav/metadata.
2. Call `getServiceCopy(href)` (from `@/content/services`) for page copy.
3. Render the standard section sequence using `@/components/solutions` exports.

**Adding a new service page:**
1. Create `content/services/<slug>.ts` — copy `managed-support.ts` as template.
2. Register it in `content/services/index.ts`.
3. Add the service to the `services` array in `components/landing/ServicesOverview.tsx`.
4. Create `app/<slug>/page.tsx` using the same section component pattern.

### Solution section components (`components/solutions/`)

Re-usable section blocks for service pages, all exported from `components/solutions/index.ts`:
- `ServicePageHero` / `ServicePageHeroCta` — hero section with CTA
- `ServicePageProblemSplit` — 3-item problem breakdown
- `ServicePageComparisonTable` — "with us vs. without us" table
- `ServicePageUseCases` — use case cards
- `ServicePageFeaturesGrid` — feature grid
- `ServicePageFinalCta` — bottom CTA banner
- Layout primitives: `ServiceSection`, `ServiceProse`, `ServiceEyebrow`, `ServiceH2`, `ServiceH3`

### Design system (`lib/theme.ts`)

Typed design tokens (colors, spacing, typography, shadows, motion) used for consistency. Primary brand color: `#072446`. Fonts: Montserrat (headings/brand) + Inter (body), loaded via `next/font`.

Tailwind shorthands for common patterns are in `lib/theme.ts` under `tw.*` (e.g. `tw.containerPadding`, `tw.sectionLabel`).

### Global layout (`app/layout.tsx`)

`BookACallDialogProvider` wraps the entire app, providing the "Book a call" dialog accessible from anywhere via context. `Header` and `Footer` are always rendered.

### UI primitives (`components/ui/`)

shadcn/ui components. Do not modify these directly — regenerate via the shadcn CLI if updates are needed.
