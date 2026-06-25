# Luna Menu — COMPONENT_LIBRARY.md

## Document Information

Product: Luna Menu  
Document: Component Library  
Version: 1.0  
Status: MVP  
Owner: Ashkan Zarifian  
Source Documents:

* PROJECT_BRIEF.md
* PRD.md
* DESIGN.md
* ARCHITECTURE.md
* THEME_SYSTEM.md

---

# 1. Purpose

This document defines technical and UX contracts for Luna Menu components.

It does not define product scope, route architecture, or visual theme personality.

Components must support the public mobile-first restaurant menu experience and remain compatible with multiple restaurants and multiple themes.

---

# 2. Component Principles

* Components must not hardcode one restaurant.
* Components must not hardcode one theme unless they are theme-specific implementations.
* Shared components must remain generic.
* Feature components may contain product behavior.
* Theme components may change visual presentation but not behavior.
* Components must support loading, empty, error, and success states where relevant.
* Components must support missing optional content.
* Components must remain accessible and mobile-first.

---

# 3. Component Categories

## 3.1 Shared UI Components

Location:

```txt
components/ui
```

Examples:

* Button
* Modal primitive
* Sheet primitive
* Badge
* Input
* Skeleton
* VisuallyHidden
* IconButton

Rules:

* Must be reusable.
* Must be token-friendly.
* Must not include restaurant-specific logic.
* Must not fetch Sanity data.
* Must not own product workflows.

## 3.2 Layout Components

Location:

```txt
components/layout
```

Examples:

* PublicPageShell
* LocaleLayout
* ThemeProvider
* MainContainer

Rules:

* Own page-level structure.
* Apply theme tokens.
* Avoid business logic beyond structural composition.

## 3.3 Feature Components

Location:

```txt
features/menu
features/search
features/filters
features/category-navigation
features/restaurant
```

Examples:

* MenuPage
* MenuControls
* SearchController
* FilterController
* CategoryScrollController
* MenuItemModalController

Rules:

* Own product behavior.
* Coordinate local UI state.
* Prepare props for theme components.
* Must not contain raw Sanity queries.
* Must not add unapproved features.

## 3.4 Theme Components

Location:

```txt
themes/{themeId}/components
```

Rules:

* Own visual implementation.
* Consume shared props.
* Use theme tokens.
* Do not own routing, CMS fetching, SEO, or tenant isolation.
* Do not alter shared behavior.

---

# 4. Server vs Client Component Rules

Default to Server Components.

Use Client Components only for:

* Search input state
* Filter state
* Modal open/close state
* Selected menu item state
* Category scroll tracking
* Body scroll lock
* Browser APIs
* Focus management
* Framer Motion interactions

Rules:

* Keep client components small.
* Pass serialized domain data to client components.
* Never import Sanity clients into client components.

---

# 5. Props Boundary Rules

Use mapped domain models as props.

Good:

```tsx
<MenuPage restaurant={restaurant} categories={categories} items={items} theme={theme} />
```

Avoid:

```tsx
<MenuPage sanityDocument={rawRestaurantDocument} />
```

Rules:

* Component props must be typed.
* Theme components must use shared prop contracts.
* Raw CMS document shapes must not leak into public UI.

---

# 6. Component Contracts

## 6.1 Navigation

Purpose: preserve orientation, language switching, and quick movement.

Must support:

* Restaurant identity when needed
* Language switcher
* Minimal navigation behavior
* Keyboard access
* Visible focus state

Must not include:

* Dashboard controls
* Admin links
* SaaS marketing clutter
* Unrelated navigation

## 6.2 Hero

Purpose: establish restaurant identity and atmosphere.

Props may include:

* Restaurant name
* Tagline
* Description
* Logo
* Cover image
* Locale

Rules:

* Must render semantic heading.
* Must preserve text contrast.
* Must not block fast menu access.
* Must support missing logo or image.

## 6.3 FeaturedItems

Purpose: highlight curated available items.

Rules:

* Hidden if no valid featured items exist.
* Must not show unavailable featured items.
* Must not replace normal category browsing.
* Carousel, if used, must be keyboard accessible and not aggressive.

## 6.4 Search

Purpose: find known items quickly.

Rules:

* Search applies only to active restaurant.
* Search respects active locale.
* Clear button appears when input has content.
* No-results state is required.
* Input requires accessible label.

## 6.5 Filters

Purpose: refine items by dietary tags, allergens, and restaurant-defined tags.

Rules:

* Multiple active filters may be supported.
* Clear filters action required when active.
* Active state must not rely on color only.
* Labels must respect locale.
* Filter controls must be keyboard accessible.

## 6.6 CategoryNavigation

Purpose: move between ordered menu sections.

Rules:

* Uses restaurant-defined category order.
* Supports horizontal scroll on mobile.
* Active category must be visible and programmatically understandable where possible.
* Smooth scroll must account for sticky offset.
* Long names must remain understandable.

## 6.7 MenuSection

Purpose: group items by category.

Rules:

* Uses semantic section and heading structure.
* Hidden/empty categories should not render publicly unless intentionally allowed.
* Updates safely with search and filter states.

## 6.8 MenuItemCard

Purpose: support fast item comparison and modal entry.

May show:

* Item name
* Description
* Price
* Image
* Dietary tags
* Allergens
* Availability
* Featured state

Rules:

* Item name is primary.
* Price is visible when price display is enabled.
* Missing image must not break layout.
* Unavailable state must be textually clear.
* Interactive cards must be keyboard accessible.
* Focus state must be visible.

## 6.9 MenuItemModal

Purpose: show deeper item detail without losing browsing context.

May show:

* Item name
* Image
* Description
* Price
* Ingredients
* Allergens
* Tags
* Dietary labels
* Availability

Required behavior:

* Accessible dialog semantics
* Labelled title
* Focus trap
* Escape key close
* Close button with accessible label
* Background content not focusable while open
* Focus returns to triggering element after close
* Reduced-motion support
* Scroll position preserved after close

## 6.10 RestaurantInfo

Purpose: show practical restaurant details.

May show:

* Opening hours
* Location
* Contact links
* Social links
* Maps link
* Website link

Rules:

* Missing fields collapse.
* Contact actions are touch-friendly.
* Opening hours are scannable and screen-reader understandable.

## 6.11 Footer

Purpose: provide brand closure.

Rules:

* Minimal.
* Accessible.
* No unrelated marketing navigation.
* Avoid SaaS-heavy promotion.

---

# 7. Shared UI Component Rules

## 7.1 Button

States:

* Default
* Hover
* Focus
* Active
* Disabled
* Loading

Rules:

* Minimum height 44px.
* Clear label.
* Icon-only buttons require accessible label.
* Disabled state must remain understandable.

## 7.2 Input

States:

* Default
* Focus
* Filled
* Error
* Disabled

Rules:

* Placeholder must not replace label.
* Text must be readable.
* Clear action should exist where useful.

## 7.3 Tabs / Chips

States:

* Default
* Active
* Hover
* Focus
* Disabled

Rules:

* Minimum height 44px.
* Active state clear.
* Active state must not rely only on color.
* Must wrap or scroll gracefully.

## 7.4 Modal / Sheet Primitive

States:

* Opening
* Open
* Closing
* Loading
* Error

Rules:

* Accessible dialog behavior.
* Focus management built in.
* Reduced-motion support.
* Background inertness or equivalent.

## 7.5 Skeleton

Rules:

* Match expected final layout.
* Avoid excessive shimmer.
* Preserve layout dimensions.
* Respect reduced-motion.

---

# 8. State Matrix

## 8.1 Publishing State Behavior

| State | Public Page | SEO | Sitemap | Structured Data |
|---------|---------|---------|---------|---------|
| Published | Visible | Indexable | Included | Included |
| Preview | Protected Preview | Noindex | Excluded | Excluded |
| Draft | Not Visible | Noindex | Excluded | Excluded |
| Archived | Not Visible | Noindex | Excluded | Excluded |
| Deleted | Not Found | Noindex | Excluded | Excluded |

## 8.2 Menu Item State Behavior

| State | Card | Modal | Rule |
|---|---|---|---|
| Available | Normal selectable card | Full details | Standard hierarchy |
| Unavailable | Visually quieter and textually marked | Optional detail view | Must show unavailable label |
| Featured | Featured section allowed | Same as available | Must be available |
| Missing image | Image-free or placeholder layout | Hide image or fallback | No broken layout |
| Missing price with prices enabled | Calm fallback or omit area | Same | No fake price |
| Price display disabled | Hide consistently | Hide consistently | No empty price gap |
| Missing translation | Fallback behavior | Fallback behavior | No raw keys |
| Missing allergens | Do not show claims | Do not show claims | Avoid misleading labels |

---

# 9. Accessibility Checklist

Every relevant component must support:

* Semantic HTML
* Keyboard access
* Visible focus
* Accessible names
* Screen-reader clarity
* Color-independent states
* Reduced-motion preference
* Touch targets of at least 44px
* No hover-only critical information
* No raw CMS keys or technical errors

---

# 10. AI Component Rules

AI coding agents must:

* Keep shared UI generic.
* Keep feature behavior separate from theme visuals.
* Do not add product features inside components.
* Do not hardcode one restaurant.
* Do not pass raw Sanity data into components.
* Do not create one-off component variants for individual restaurants.
* Preserve accessibility behavior.
* Use typed props.
* Use tokens instead of scattered hardcoded styles.
* Keep Client Components small and intentional.
