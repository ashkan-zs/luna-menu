# Luna Menu — ARCHITECTURE.md

## Document Information

Product: Luna Menu  
Document: Technical Architecture  
Version: 1.1  
Status: MVP  
Owner: Ashkan Zarifian  
Source Documents:

* PROJECT_BRIEF.md
* PRD.md
* DESIGN.md

Related Documents:

* THEME_SYSTEM.md
* COMPONENT_LIBRARY.md
* CONTENT_MODEL.md
* USER_FLOWS.md

---

# 1. Architecture Overview

Luna Menu is a premium multi-tenant QR menu SaaS platform. The MVP delivers public, mobile-first restaurant menu pages powered by Sanity CMS, localized by URL locale, rendered through a selected theme, and deployed on Vercel.

The architecture must allow many restaurants to run from one codebase without duplicated frontend logic or one-off custom websites.

## 1.1 Architecture Goals

* Support multiple restaurants from one codebase.
* Support locale-based public routes.
* Support restaurant slug-based data loading.
* Support theme selection from restaurant data.
* Keep CMS access abstracted from UI components.
* Keep themes visually flexible but behaviorally consistent.
* Use Server Components by default.
* Minimize client-side JavaScript.
* Preserve mobile-first performance.
* Support SEO for published restaurant pages.
* Prevent draft, archived, deleted, or unpublished restaurants from becoming public.
* Remain ready for future SaaS expansion without implementing future features in MVP.

## 1.2 Technical Principles

* One product, many tenants.
* Content-driven rendering.
* Theme registry over scattered conditionals.
* Shared UX, theme-specific presentation.
* Server-first rendering.
* Typed boundaries between CMS, domain, and UI.
* Public/private route separation.
* MVP discipline.

---

# 2. Technology Stack

## 2.1 Frontend

* Next.js App Router
* TypeScript
* Tailwind CSS
* Framer Motion for restrained motion only
* next-intl

Why this fits:

* App Router supports dynamic routing, Server Components, metadata, static generation, and revalidation.
* TypeScript protects tenant, theme, locale, and content boundaries.
* Tailwind supports mobile-first implementation and token-based styling.
* Framer Motion supports premium interaction when used carefully.
* next-intl supports locale-based routing and localized UI messages.

## 2.2 CMS

MVP CMS:

* Sanity CMS
* Sanity Studio at `/studio`
* Sanity Image CDN

Rules:

* Sanity is the MVP content source of truth.
* Public UI must not consume raw Sanity documents directly.
* Public routes fetch only published content.
* Draft/preview access, if added later, must be protected.

## 2.3 Hosting

Hosting:

* Vercel
* Vercel CDN
* Sanity CDN / Image CDN

Environment variables:

```txt
NEXT_PUBLIC_SITE_URL=
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=
NEXT_PUBLIC_SANITY_API_VERSION=
SANITY_API_READ_TOKEN=
SANITY_REVALIDATE_SECRET=
```

Rules:

* `NEXT_PUBLIC_` variables may be exposed client-side only when safe.
* Sanity tokens must remain server-only.
* Production and preview environments must define separate values.

---

# 3. System Architecture

```txt
Guest Browser
      ↓
Next.js App Router
      ↓
Data Fetching Layer
      ↓
Sanity CMS
      ↓
Sanity CDN / Image CDN
```

## 3.1 Layer Responsibilities

Guest Browser:

* Renders public mobile-first UI.
* Runs only necessary interaction state.
* Handles search, filters, modals, language switching, and category scrolling where needed.

Next.js App Router:

* Resolves locale and restaurant slug.
* Loads restaurant data server-side.
* Generates tenant-aware metadata.
* Renders selected theme.
* Handles loading, not-found, sitemap, and robots routes.

Data Fetching Layer:

* Fetches restaurant content by slug.
* Enforces published-only public visibility.
* Maps Sanity data into domain types.
* Handles missing content and fallback logic.

Sanity CMS:

* Stores restaurant profile, branding, categories, menu items, localization fields, theme selection, images, and publishing state.

---

# 4. Route Architecture

## 4.1 Canonical Public Route

```txt
/[locale]/[restaurantSlug]
```

Examples:

```txt
/en/luna-bistro
/tr/luna-bistro
/en/mavi-balloon
/tr/mavi-balloon
```

## 4.2 Compatibility Route

```txt
/[locale]/[restaurantSlug]/menu
```

Rules:

* Canonical public route is `/[locale]/[restaurantSlug]`.
* `/menu` may exist only as an alias or redirect for existing demos or QR links.
* Canonical metadata should point to `/[locale]/[restaurantSlug]`.

## 4.3 Preview Route

```txt
/[locale]/preview/[restaurantSlug]
```

Rules:

* Preview routes are intended for restaurant-owner review before publication.
* Preview routes must not be publicly discoverable.
* Preview routes must use noindex.
* Preview routes must not be included in sitemap.xml.
* Preview routes must not generate public structured data.
* Preview routes must not be used as permanent QR code URLs.
* Preview routes may render Draft or Preview restaurants.
* Published restaurants should normally use the canonical public route.
* Preview access must be protected by an approved preview mechanism.
* Preview routes must not expose private tokens client-side.

## 4.4 CMS Route

```txt
/studio
```

Rules:

* Studio is not localized.
* Studio is not a restaurant route.
* Studio is excluded from sitemap and indexing.

## 4.5 Route Behavior

Public route flow:

1. Validate locale.
2. Read restaurant slug.
3. Fetch published restaurant by slug.
4. Fetch categories and menu items for that restaurant.
5. Resolve theme from `restaurant.themeId`.
6. Render the public page.
7. Generate tenant-aware metadata.

Return not-found for invalid locale, invalid slug, missing restaurant, unpublished restaurant, archived restaurant, deleted restaurant, or unsafe required data.

Preview route flow:

1. Validate locale.
2. Validate preview access.
3. Read restaurant slug.
4. Fetch restaurant by slug.
5. Allow restaurants with Preview or Draft publishing status.
6. Resolve theme.
7. Render preview page.
8. Generate noindex metadata.

Preview route must not be included in sitemap or structured data.

Return not-found for:

* Invalid locale
* Invalid slug
* Missing restaurant
* Unauthorized preview access
* Deleted restaurant

---

# 5. Multi-Tenant Architecture

A restaurant is a tenant.

Each tenant owns:

* Restaurant profile
* Slug
* Branding assets
* Theme selection
* Localized content
* Categories
* Menu items
* Featured items
* Opening hours
* Contact information
* Publishing state

Tenant isolation rules:

* Every category belongs to one restaurant.
* Every menu item belongs to one restaurant/category.
* Search and filters operate only within the active restaurant.
* Featured items belong only to the active restaurant.
* SEO uses only active restaurant data.
* Public routes must never leak another restaurant’s content.

One-codebase rendering flow:

```txt
URL restaurantSlug
      ↓
Fetch restaurant tenant
      ↓
Read content and themeId
      ↓
Map CMS content to domain model
      ↓
Resolve theme from registry
      ↓
Render shared page shell with theme components
```

---

# 6. Theme Architecture

The technical theme system is documented in detail in `THEME_SYSTEM.md`.

Architecture rules:

* Theme selection comes from restaurant data.
* Themes are resolved through a typed registry.
* Themes consume shared domain models.
* Themes customize visual implementation only.
* Themes must not change route, locale, search, filter, modal, publishing, or SEO behavior.
* Unknown theme IDs must fail safely.

Example registry shape:

```ts
export const MENU_THEME_REGISTRY = {
  luna: lunaTheme,
  artisan: artisanTheme,
  "street-food": streetFoodTheme,
} satisfies Record<MenuThemeId, MenuThemeDefinition>;
```

Known current theme directions:

* `luna`
* `artisan`
* `street-food`

Assumption: these are demo-ready or current implementation themes. Production support must be confirmed by the official registry.

---

# 7. Content Architecture

Detailed content model is documented in `CONTENT_MODEL.md`.

High-level content relationship:

```txt
Restaurant
  ↓
Branding
  ↓
Content Sections
  ↓
Categories
  ↓
Menu Items
```

Architecture rules:

* Restaurant is the tenant root.
* Restaurant content uses localized fields.
* Categories are ordered and belong to a restaurant.
* Menu items belong to a restaurant/category.
* Featured items must be available.
* Draft and archived content is not public.
* UI components consume mapped domain types, not raw Sanity documents.

Mapping flow:

```txt
Raw Sanity document
      ↓
Sanity query result type
      ↓
Mapper
      ↓
Domain model
      ↓
Theme component props
      ↓
Rendered UI
```

---

# 8. Data Fetching Architecture

Public pages fetch data server-side.

Rules:

* Fetch restaurant data in Server Components or server-side data functions.
* Do not fetch primary restaurant content from the browser in MVP.
* Do not expose private tokens client-side.
* Use Sanity CDN for published content when appropriate.
* Public routes fetch only published content.

Recommended strategy:

* Generate published restaurant routes statically where possible.
* Use ISR/revalidation for content freshness.
* Use Sanity webhooks with a protected revalidation secret.

Responsibilities:

* Queries own GROQ and CMS-specific access.
* Mappers own transformation into domain models.
* Types separate raw CMS results, domain models, props, theme contracts, and locale types.

---

# 9. Internationalization Architecture

MVP locales:

```ts
export const SUPPORTED_LOCALES = ["en", "tr"] as const;
```

URL strategy:

```txt
/[locale]/[restaurantSlug]
```

Rules:

* Locale segment is required.
* Language switcher changes only the locale segment.
* Restaurant slug is preserved.
* UI messages come from `messages/`.
* Restaurant content comes from localized Sanity fields.
* Missing translations follow fallback helpers.
* Raw translation keys must never render publicly.

---

# 10. SEO Architecture

Each published restaurant page must generate tenant-aware SEO.

Required:

* Dynamic metadata
* Canonical URLs
* hreflang alternates
* Open Graph metadata
* Twitter card metadata
* Restaurant JSON-LD when sufficient data exists
* sitemap.xml
* robots.txt

Rules:

* Only published restaurants are indexable.
* Draft, archived, unpublished, deleted, and invalid restaurants are excluded.
* Canonical URLs use `/[locale]/[restaurantSlug]`.
* `/menu` aliases canonicalize to the canonical route.
* Studio and future dashboard routes are excluded from sitemap and indexing.

---

# 11. Media Architecture

Images are stored in Sanity and rendered through Sanity Image CDN or Next.js image optimization.

Image types:

* Restaurant logo
* Restaurant cover image
* Menu item image
* Approved editorial/brand images

Rules:

* Do not serve original oversized images directly to mobile.
* Use responsive image sizes and `sizes` attributes.
* Reserve image dimensions or stable aspect ratios.
* Lazy-load below-the-fold images.
* Avoid loading modal images upfront when possible.
* Missing images must not cause broken layouts.

---

# 12. Component Architecture

Detailed component contracts live in `COMPONENT_LIBRARY.md`.

Component categories:

* Shared UI components
* Layout components
* Feature components
* Theme components
* Sanity/Studio components when needed

Rules:

* Server Components by default.
* Client Components only for interaction state, browser APIs, focus management, scroll tracking, and animation.
* Shared UI must remain generic.
* Feature components own behavior.
* Theme components own visual implementation.
* Sanity logic must not enter client components.
* Raw Sanity documents must not be passed to UI.

---

# 13. State Management Architecture

MVP should not require global client state.

Use local React state for:

* Search input value
* Active filters
* Modal open/close
* Selected menu item
* Active category indicator
* Mobile sheet state

Server state:

* Restaurant profile
* Categories
* Menu items
* Theme selection
* Opening hours
* SEO data

URL state is optional and should only be added if it improves guest experience.

---

# 14. Performance Architecture

Targets:

* First Contentful Paint under 2 seconds
* Lighthouse Performance ≥ 90
* Lighthouse SEO ≥ 90
* Lighthouse Accessibility ≥ 90
* Mobile usability score ≥ 90

Rules:

* Use Server Components by default.
* Keep client components small.
* Optimize images.
* Lazy-load non-critical media and UI.
* Avoid heavy dependencies.
* Limit Framer Motion usage.
* Reserve layout space to prevent CLS.
* Protect LCP, CLS, INP, and FCP.

---

# 15. Accessibility Architecture

Technical accessibility requirements:

* Semantic HTML
* Correct heading order
* Keyboard navigation
* Visible focus states
* Accessible modal semantics
* Focus trapping and focus return
* Escape key modal close
* Reduced-motion support
* Accessible names for icon-only controls
* `aria-current` or equivalent for active category where appropriate

ARIA rule:

* Prefer semantic HTML first. Use ARIA only when semantics are insufficient.

Detailed component accessibility behavior lives in `COMPONENT_LIBRARY.md`.

---

# 16. Security Architecture

Rules:

* Public pages access only published public content.
* Public browser must not receive private tokens.
* Public browser must not access draft content.
* Sanity read and preview tokens must be server-only.
* Secrets must be stored in environment variables.
* Studio route must not be indexed.
* Draft preview, if implemented later, must be protected and noindex.

Future dashboard security must include authentication, authorization, tenant membership checks, role-based access, and server-side permission enforcement. This is not MVP implementation scope.

---

# 17. Deployment Architecture

Local development should support:

```txt
pnpm dev
pnpm lint
pnpm typecheck
pnpm build
```

Preview deployments:

* Use Vercel preview deployments for pull requests and QA.
* Preview URLs should not be used as permanent QR code URLs.

Production:

* Hosted on Vercel.
* Uses production Sanity dataset.
* Must pass build, lint, and type checks.
* Includes sitemap and robots routes.

Rollback:

* Use Vercel deployment history.
* Use Sanity document history for content rollback where available.

---

# 18. Folder Structure

```txt
src/
  app/
    [locale]/
      [restaurantSlug]/
        page.tsx
        loading.tsx
        not-found.tsx
      [restaurantSlug]/menu/
        page.tsx
    studio/
      [[...tool]]/
        page.tsx
    sitemap.ts
    robots.ts

  components/
    ui/
    layout/
    seo/

  features/
    menu/
    restaurant/
    search/
    filters/
    category-navigation/

  themes/
    registry.ts
    types.ts
    luna/
    artisan/
    street-food/

  lib/
    env/
    i18n/
    seo/
    routing/
    restaurant/
    theme/
    utils/

  sanity/
    client.ts
    queries/
    schemas/
    mappers/
    image.ts
    validators/

  types/
    restaurant.ts
    menu.ts
    theme.ts
    locale.ts
    seo.ts

  hooks/
  constants/
  messages/
  styles/
```

Ownership rules:

* `app/` owns routes, layouts, metadata, loading, not-found, sitemap, and robots.
* `components/` owns shared reusable primitives.
* `features/` owns product behavior.
* `themes/` owns theme registry, tokens, and theme-specific visual components.
* `lib/` owns helpers, repositories, and framework-independent utilities.
* `sanity/` owns CMS integration.
* `types/` owns shared domain types.
* `messages/` owns UI translation messages.

---

# 19. Scalability Strategy

## 19.1 MVP Architecture

Includes:

* Public restaurant pages
* Dynamic locale and restaurant slug routing
* Sanity CMS content management
* Multi-restaurant data model
* Multi-theme registry
* Search and filters
* Featured items
* Restaurant information
* Dynamic SEO
* Sitemap and robots
* Mobile-first performance

Excludes:

* Authentication
* Dashboard
* Billing
* Subscriptions
* Analytics dashboard
* Reservations
* Ordering
* Payments
* Multi-user accounts
* Role-based access
* Custom domains

## 19.2 Future SaaS Architecture

Future items may include:

* Restaurant dashboard
* Authentication
* Billing
* Subscriptions
* Analytics
* Multi-user accounts
* Role-based access
* Custom domains
* Multi-location support

These are future items, not MVP.

Architecture preparation:

* Keep content access abstracted.
* Keep tenant concepts explicit.
* Keep public routes separate from future dashboard routes.
* Keep theme registry reusable.
* Keep domain types CMS-independent where possible.

---

# 20. Architecture Decision Records

## ADR-001: Next.js App Router

Decision: Use Next.js App Router.

Reason: Supports dynamic routing, Server Components, metadata, static generation, revalidation, and Vercel-native deployment.

Tradeoff: Requires careful Server/Client Component boundaries.

## ADR-002: Sanity CMS

Decision: Use Sanity CMS as MVP content source of truth.

Reason: Supports structured content, draft/published workflow, images, localized fields, and flexible schemas.

Tradeoff: Creates CMS dependency, reduced by repositories and mappers.

## ADR-003: Vercel Hosting

Decision: Deploy on Vercel.

Reason: Optimized for Next.js, preview deployments, CDN delivery, environment variables, ISR, and rollbacks.

Tradeoff: Platform dependency, but reduced operational complexity.

## ADR-004: next-intl

Decision: Use next-intl.

Reason: Supports locale routing, server-side translations, and future locale expansion.

Tradeoff: Adds framework-specific i18n patterns.

## ADR-005: Shared UX With Theme-Specific UI

Decision: Shared behavior, theme-specific presentation.

Reason: Supports multiple restaurant brands without fragmented UX.

Tradeoff: Limits extreme customization.

## ADR-006: Mobile-First Public Pages

Decision: Optimize public pages mobile-first.

Reason: Guests primarily use QR scans on phones.

Tradeoff: Desktop complexity is limited.

---

# 21. Technical Risks & Mitigations

| Risk | Impact | Mitigation |
|---|---|---|
| CMS content inconsistency | Public pages may look broken | Sanity validation, mappers, fallback rules, QA before publishing |
| Theme complexity | Behavior may diverge | Typed registry, shared feature logic, theme contract |
| SEO mistakes | Demo/private content may index | Published-only metadata, sitemap filtering, robots rules |
| Performance issues | Poor mobile experience | Server Components, image optimization, small client bundles |
| Dashboard scope creep | MVP slows down | Keep future features marked future and out of MVP |
| CMS lock-in | Future migration harder | Repositories, mappers, CMS-agnostic domain models |
| Locale fallback confusion | Mixed-language or empty UI | Centralized fallback helpers and validation |

---

# 22. AI Development Rules

* Do not invent routes.
* Do not create unapproved themes.
* Do not add dashboard features unless approved.
* Do not add authentication, billing, analytics, ordering, reservations, loyalty, payments, POS, or marketplace features unless approved.
* Preserve `/[locale]/[restaurantSlug]`.
* Treat `/[locale]/[restaurantSlug]/menu` only as alias/compatibility route unless scope changes.
* Preserve `/studio` as non-localized CMS route.
* Always fetch restaurant by slug.
* Scope categories, items, search, filters, and featured items to active restaurant.
* Use the official theme registry.
* Keep theme behavior isolated and visual-only.
* Use typed data mappers.
* Do not pass raw Sanity documents into UI components.
* Do not expose private tokens client-side.
* Use next-intl for UI messages.
* Exclude unpublished restaurants from sitemap and structured data.
* Use Server Components by default.
* Keep shared UI generic.
* Keep feature behavior separate from theme visuals.
* Follow folder boundaries.
* Keep technical architecture out of DESIGN.md.

---

# 23. Assumptions

1. Canonical public route is `/[locale]/[restaurantSlug]`.
2. `/[locale]/[restaurantSlug]/menu` may exist only as compatibility alias or redirect.
3. Sanity CMS is the MVP source of truth.
4. Public UI remains CMS-agnostic through repositories and mappers.
5. Current implementation may include Luna, Artisan, and Street Food demo themes.
6. Turkish and English are MVP locales.
7. Future languages are not MVP scope.
8. Authentication, billing, dashboard, analytics, reservations, ordering, payments, loyalty, customer accounts, and multi-location support are future features.
9. Framer Motion is approved only for restrained, performance-safe, accessibility-aware motion.
10. Vercel is the production hosting platform.

---

# 24. Final Architecture Standard

Luna Menu architecture is production-ready when:

* Public pages render from dynamic locale and restaurant slug routes.
* Restaurant data is fetched by slug and scoped to one tenant.
* Sanity content is mapped into typed domain models.
* Theme selection comes from restaurant data.
* Themes are resolved through the official registry.
* Shared UX behavior remains consistent across themes.
* Public pages are mobile-first, accessible, performant, and SEO-ready.
* Draft, archived, unpublished, deleted, or invalid restaurants are not publicly exposed.
* Public UI does not depend directly on raw CMS shapes.
* Future SaaS expansion is supported without implementing future features prematurely.
