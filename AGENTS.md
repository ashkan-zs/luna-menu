<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This project may use a Next.js version with breaking changes. Before writing or modifying code, read the relevant guide in `node_modules/next/dist/docs/`. Do not rely only on older Next.js assumptions. Follow current project conventions and heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Luna Menu — AGENTS.md

## Document Information

Product: Luna Menu  
Document: AI Development Agent Rules  
Version: 1.1  
Status: MVP  
Owner: Ashkan Zarifian  
Source Documents:

* PROJECT_BRIEF.md
* PRD.md
* DESIGN.md
* ARCHITECTURE.md
* CONTENT_MODEL.md
* USER_FLOWS.md
* COMPONENT_LIBRARY.md

---

# 1. Purpose

This file defines the operating rules for AI coding agents working on Luna Menu.

AI agents must use this file as the quick execution guide, but PROJECT_BRIEF.md, PRD.md, DESIGN.md, ARCHITECTURE.md, CONTENT_MODEL.md, USER_FLOWS.md, and COMPONENT_LIBRARY.md remain the source documents.

This file must not introduce new product scope.

---

# 2. Source Hierarchy

When documents conflict, follow this order:

1. PROJECT_BRIEF.md — product vision, positioning, business direction
2. PRD.md — requirements, MVP scope, business rules, acceptance criteria
3. DESIGN.md — public guest-facing UX and visual rules
4. ARCHITECTURE.md — technical implementation, routing, folder structure, CMS integration, deployment
5. CONTENT_MODEL.md — content entities, publishing states, Sanity-to-domain mapping
6. USER_FLOWS.md — guest and MVP content-manager flows
7. COMPONENT_LIBRARY.md — component contracts and accessibility behavior
8. AGENTS.md — execution rules for AI coding agents

If unsure, preserve MVP scope and do not invent features.

---

# 3. Product Summary

Luna Menu is a premium multi-tenant QR menu SaaS platform for restaurants, cafés, cocktail bars, wine bars, boutique hotels, and hospitality brands.

The MVP delivers public, mobile-first restaurant menu pages powered by Sanity CMS, localized by URL locale, rendered through a selected theme, and deployed on Vercel.

The public experience must feel like a premium hospitality brand experience, not a dashboard, POS system, marketplace, food delivery app, PDF viewer, or generic SaaS template.

---

# 4. MVP Scope

## 4.1 Included in MVP

* Multi-tenant public restaurant pages
* Canonical public route: `/[locale]/[restaurantSlug]`
* Optional compatibility route or redirect: `/[locale]/[restaurantSlug]/menu`
* Turkish and English localization
* Sanity CMS as MVP content source of truth
* Restaurant profile
* Branding assets
* Categories
* Menu items
* Availability
* Featured items
* Search
* Filters
* Opening hours
* Contact and location information
* Theme selection per restaurant
* Theme registry
* Dynamic SEO metadata
* Canonical URLs
* hreflang alternates
* Open Graph metadata
* Twitter metadata
* Restaurant JSON-LD where valid
* Sitemap and robots support

## 4.2 Excluded from MVP

Do not implement these unless the PRD is explicitly updated:

* Authentication
* Restaurant dashboard
* Billing
* Subscriptions
* Ordering
* Reservations
* Payments
* Loyalty systems
* Customer accounts
* Analytics dashboard
* Multi-user accounts
* Role-based access
* Multi-location management
* Custom domains
* Marketplace functionality
* POS functionality
* Food delivery functionality

Future-readiness is allowed. Premature implementation is not.

---

# 5. Routing Rules

Canonical public route:

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

Compatibility route:

```txt
/[locale]/[restaurantSlug]/menu
```

Preview route:

```txt
/[locale]/preview/[restaurantSlug]
```

Rules:

* Preserve `/[locale]/[restaurantSlug]` as the canonical public route.
* Treat `/[locale]/[restaurantSlug]/menu` only as an alias or redirect unless product scope changes.
* Preview routes are intended for restaurant-owner review before publication.
* Preview routes require protected access.
* Preview routes must use noindex metadata.
* Preview routes must be excluded from sitemap.xml.
* Preview routes must not generate public structured data.
* Preview routes must not be used as permanent public URLs.
* Canonical metadata must point to `/[locale]/[restaurantSlug]`.
* `/studio` is the non-localized Sanity Studio route.
* Do not place Studio under locale routes.
* Do not invent additional public routes.
* Do not create dashboard routes unless dashboard scope is approved.

---

# 6. Multi-Tenant Rules

A restaurant is a tenant.

Every restaurant owns its own:

* Slug
* Profile
* Branding
* Theme selection
* Localized content
* Categories
* Menu items
* Featured items
* Opening hours
* Contact information
* Location information
* Publishing state

AI agents must:

* Always fetch restaurant data by slug.
* Never assume a single restaurant exists.
* Never hardcode one restaurant into shared components.
* Never leak categories, menu items, featured items, SEO, search results, filters, or content across restaurants.
* Keep tenant boundaries explicit in queries, mappers, domain models, and UI props.

---

# 7. Content and CMS Rules

Sanity CMS is the MVP source of truth for restaurant content.

Managed content includes:

* Restaurant profile
* Branding assets
* Categories
* Menu items
* Prices
* Availability
* Featured items
* Opening hours
* Contact links
* Location information
* Localization content
* Theme selection

Rules:

* Public routes fetch only published content.
* Draft, archived, unpublished, deleted, invalid, or unsafe content must not render publicly.
* Draft and archived restaurants must not be indexable or included in sitemap or structured data.
* Raw Sanity documents must not be passed directly into public UI components.
* Use query result types, mappers, domain models, and typed component props.
* Keep CMS access abstracted from UI components.
* Never expose Sanity tokens to the browser.
* UI labels belong in next-intl messages, not in restaurant content documents.
* Restaurant content belongs in Sanity, not in translation files.
* Preview restaurants may render only through protected preview routes.
* Preview restaurants must not be included in sitemap.
* Preview restaurants must not generate structured data.
* Preview restaurants must use noindex metadata.
* Preview routes must not expose private tokens client-side.

Preferred mapping flow:

```txt
Raw Sanity document
      ↓
Sanity query result type
      ↓
Mapper
      ↓
Domain model
      ↓
Component props
      ↓
Rendered UI
```

---

# 8. Localization Rules

MVP locales:

```ts
["en", "tr"]
```

Rules:

* Locale segment is required in public routes.
* Language switcher changes only the locale segment.
* Restaurant slug must be preserved when switching language.
* UI messages come from `messages/`.
* Restaurant content comes from localized Sanity fields.
* Missing translations must use approved fallback helpers.
* Never render raw translation keys or raw CMS keys.
* Future languages are not MVP unless PRD scope changes.

---

# 9. Theme Rules

Themes control visual presentation only.

Current known theme IDs:

* `luna`
* `artisan`
* `street-food`

Rules:

* Theme selection comes from restaurant data.
* Themes must be resolved through the official typed registry.
* Theme components consume shared domain models and shared prop contracts.
* Themes may customize color, typography mood, hero styling, card styling, image treatment, section styling, surface treatment, radius, and restrained motion.
* Themes must not change routing, locale behavior, search behavior, filter behavior, category behavior, modal accessibility, publishing visibility, SEO behavior, data structure, or business rules.
* Do not create unapproved themes.
* Unknown theme IDs must fail safely.
* Do not create one-off component variants for individual restaurants.

---

# 10. Component Rules

Follow COMPONENT_LIBRARY.md for component contracts.

Component categories:

```txt
components/ui
components/layout
features/menu
features/search
features/filters
features/category-navigation
features/restaurant
themes/{themeId}/components
```

Rules:

* Server Components by default.
* Client Components only when required for interaction, browser APIs, focus management, scroll tracking, body scroll lock, or motion.
* Keep Client Components small.
* Shared UI components must remain generic and token-friendly.
* Feature components own product behavior and local UI state.
* Theme components own visual implementation only.
* Components must support loading, empty, error, and success states where relevant.
* Components must support missing optional content.
* Component props must be typed.
* Do not import Sanity clients into Client Components.
* Do not pass raw CMS document shapes into public UI.

Use this prop direction:

```tsx
<MenuPage restaurant={restaurant} categories={categories} items={items} theme={theme} />
```

Avoid:

```tsx
<MenuPage sanityDocument={rawRestaurantDocument} />
```

---

# 11. Folder Structure Rules

Use the architecture folder structure as the source of truth:

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

Rules:

* `app/` owns routes, layouts, metadata, loading, not-found, sitemap, and robots.
* `components/` owns reusable primitives and structural layout components.
* `features/` owns product behavior.
* `themes/` owns theme registry, tokens, and theme-specific visual components.
* `lib/` owns helpers, repositories, routing, SEO, theme utilities, and domain services.
* `sanity/` owns CMS integration, queries, schemas, mappers, image helpers, and validators.
* `types/` owns shared domain types.
* `messages/` owns UI translation messages.
* Do not use outdated `/components/menu` or `/data` architecture for production implementation.

---

# 12. UX and Design Rules

The public menu experience must be:

* Mobile-first
* Premium
* Calm
* Cinematic
* Editorial
* Brand-led
* Fast
* Readable
* Accessible
* Guest-friendly

Rules:

* Prioritize menu clarity over decoration.
* Keep navigation minimal.
* Language switcher must remain available.
* Restaurant identity must be clear.
* Hero must not delay access to menu content.
* Category navigation must be easy on mobile.
* Search and filters must be clear, localized, and scoped to the active restaurant.
* Modal or sheet behavior must preserve browsing context.
* Missing optional content must collapse gracefully.
* Public errors must be calm and non-technical.
* Do not add dashboard controls, SaaS marketing clutter, or admin links to public navigation.

Avoid:

* Dashboard aesthetics
* Corporate SaaS styling
* Generic templates
* Food-delivery-style grids
* Excessive animation
* Neon or overly saturated palettes
* Cluttered cards
* Tiny unreadable text

---

# 13. Accessibility Rules

All public UI must support:

* Semantic HTML
* Logical heading order
* Keyboard access
* Visible focus states
* Accessible names for controls
* Screen-reader clarity
* Sufficient contrast
* Touch targets of at least 44px
* Reduced-motion preference
* Color-independent state communication
* Accessible modal semantics
* Focus trap for modals
* Escape key close for modals
* Focus return after modal close

Rules:

* Icon-only buttons require accessible labels.
* Availability must be textually communicated.
* Allergens must be text-readable.
* Active filters must not rely on color only.
* Public errors must not expose Sanity, GROQ, internal IDs, raw CMS keys, or implementation details.

---

# 14. SEO Rules

Published restaurant pages must support:

* Dynamic metadata
* Dynamic title and description
* Canonical URLs
* hreflang alternates
* Open Graph metadata
* Twitter card metadata
* Restaurant JSON-LD when sufficient data exists
* sitemap.xml inclusion
* robots.txt behavior

Rules:

* Only published restaurants are indexable.
* Preview routes are excluded from sitemap, indexing, and structured data.
* Draft, archived, unpublished, deleted, invalid, and unsafe restaurants are noindex or not found.
* `/studio` is excluded from sitemap and indexing.
* Future dashboard routes must be excluded from sitemap and indexing.
* Compatibility `/menu` routes must canonicalize to `/[locale]/[restaurantSlug]`.

---

# 15. Performance Rules

Targets:

* First Contentful Paint under 2 seconds
* Lighthouse Performance ≥ 90
* Lighthouse SEO ≥ 90
* Lighthouse Accessibility ≥ 90
* Mobile usability score ≥ 90

Rules:

* Use Server Components by default.
* Minimize client-side JavaScript.
* Keep Client Components small and intentional.
* Optimize images.
* Use responsive image sizes and stable aspect ratios.
* Lazy-load below-the-fold media.
* Avoid unnecessary dependencies.
* Limit Framer Motion usage.
* Respect reduced motion.
* Avoid layout shift.
* Protect LCP, CLS, INP, and FCP.

---

# 16. Image Rules

Image sources:

* Sanity Image CDN
* Next.js image optimization where appropriate

Image types:

* Restaurant logo
* Restaurant cover image
* Menu item image
* Approved editorial or brand imagery

Rules:

* Do not serve oversized original images directly to mobile.
* Use `sizes` and responsive image dimensions.
* Reserve layout space for images.
* Missing images must not break layouts.
* Hero images with text require overlay, scrim, gradient, or solid contrast protection.
* Meaningful images need useful alt text.
* Decorative images should be hidden from screen readers.

---

# 17. State Rules

Every relevant feature must support:

* Loading state
* Empty state
* Error state
* Success state

Publishing behavior:

* Published: visible, indexable, sitemap-included, structured-data eligible
* Draft: not public, noindex, excluded from sitemap and structured data
* Archived: not public, noindex, excluded from sitemap and structured data
* Unpublished: not public, noindex, excluded from sitemap and structured data
* Deleted or invalid slug: not found, noindex

Menu item behavior:

* Unavailable items must be clearly marked if rendered.
* Unavailable items must not be featured.
* Missing image must use image-free or fallback layout.
* Missing price must not create fake price content.
* Disabled price display must hide prices consistently.
* Missing allergens must not create misleading claims.

---

# 18. Code Quality Rules

AI agents must:

* Use strict TypeScript.
* Preserve typed boundaries between CMS, domain, props, theme contracts, locale types, and SEO types.
* Prefer composition over deeply nested conditionals.
* Keep business logic separate from theme presentation.
* Keep data fetching out of deeply nested Client Components.
* Avoid unnecessary dependencies.
* Avoid global state unless truly necessary.
* Prefer local state for search, filters, modal state, selected item, and active category.
* Keep URL state optional and only use it when it improves the guest experience.
* Run or preserve project quality checks when available: `pnpm lint`, `pnpm typecheck`, `pnpm build`.

---

# 19. Prohibited Agent Behavior

Do not:

* Invent product features.
* Change product scope.
* Add dashboard features without approval.
* Add authentication, billing, analytics, ordering, reservations, loyalty, payments, POS, or marketplace features without approval.
* Create unapproved routes.
* Create unapproved themes.
* Hardcode restaurant-specific content in shared components.
* Import static demo data into production UI components.
* Pass raw Sanity documents into public UI.
* Expose private tokens client-side.
* Store restaurant content in translation files.
* Store UI labels in restaurant CMS content.
* Let themes change business behavior.
* Create one-off restaurant-specific components when shared/themed components are appropriate.
* Render raw CMS keys, translation keys, internal errors, GROQ errors, or technical IDs publicly.

---

# 20. Implementation Checklist Before Completing Work

Before finishing any code task, verify:

* The change respects PROJECT_BRIEF.md and PRD.md.
* MVP scope was not expanded.
* Public route behavior remains correct.
* Restaurant data is scoped by active slug.
* Locale behavior remains correct.
* Sanity data is mapped before reaching UI.
* Theme behavior remains visual-only.
* Shared components remain generic.
* Missing content is handled safely.
* Draft, archived, unpublished, deleted, or invalid content is not public.
* Accessibility rules are preserved.
* SEO rules are preserved when relevant.
* Mobile performance is protected.
* Folder placement follows ARCHITECTURE.md.
