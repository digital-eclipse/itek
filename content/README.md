# Service page copy

Copy for each service page lives in its own file under **`content/services/`**, so you never have one huge file.

## Structure

- **`content/types.ts`**: TypeScript types for the full page (hero, problem, comparison, use cases, CTA). Update when you add or change sections.
- **`content/services/index.ts`**: Exports **`getServiceCopy(href)`** and registers each service file. Add new services here when you create a new file.
- **`content/services/<slug>.ts`**: One file per service (e.g. `managed-support.ts`, `cloud-solutions.ts`). Each exports:
  - **`href`**: the route (e.g. `"/managed-support"`)
  - **`copy`**: the full `ServicePageCopy` for that page

## Adding a new service

1. Create **`content/services/<slug>.ts`** (e.g. `cloud-solutions.ts`).
2. Copy **`managed-support.ts`** as a template: export `href` and `copy` with the same shape (hero, problem, comparison, useCases, cta).
3. In **`content/services/index.ts`**, import your new module and add it to `SERVICE_COPY`:
   ```ts
   import { copy as cloudCopy, href as cloudHref } from "./cloud-solutions";
   const SERVICE_COPY: Record<string, ServicePageCopy> = {
     [managedSupportHref]: managedSupportCopy,
     [cloudHref]: cloudCopy,
     // ...
   };
   ```
4. In **`app/<slug>/page.tsx`**, use `getServiceCopy(href)` and pass the result into the section components (same pattern as managed-support).

Pages still import **`getServiceCopy`** from **`@/content/services`**; the folder’s `index.ts` is the single entry point.
