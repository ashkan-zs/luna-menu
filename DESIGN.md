# Luna Menu — DESIGN.md

## Document Information

Product: Luna Menu  
Document: Design Specification  
Version: 1.1  
Status: MVP  
Last Updated: June 2026  
Owner: Ashkan Zarifian  
Source Documents:

* PROJECT_BRIEF.md
* PRD.md

Related Documents:

* ARCHITECTURE.md
* THEME_SYSTEM.md
* COMPONENT_LIBRARY.md
* CONTENT_MODEL.md
* USER_FLOWS.md

---

# 1. Purpose

This document defines the public guest-facing design direction for Luna Menu.

Luna Menu must feel like a premium hospitality experience, not like a generic QR menu, SaaS dashboard, POS system, food delivery app, marketplace, or PDF viewer.

This document owns:

* UX philosophy
* Shared design principles
* Mobile-first behavior
* Visual foundation
* Public page information architecture
* Shared interaction rules
* Design quality standards

Detailed theme rules live in `THEME_SYSTEM.md`.

Detailed component contracts live in `COMPONENT_LIBRARY.md`.

Detailed content structure lives in `CONTENT_MODEL.md`.

Detailed technical implementation lives in `ARCHITECTURE.md`.

---

# 2. Source Alignment

Hierarchy of truth:

1. PROJECT_BRIEF.md
2. PRD.md
3. DESIGN.md
4. Supporting design/technical documents

If a conflict exists:

* PROJECT_BRIEF.md wins for product vision and business direction.
* PRD.md wins for functional requirements and MVP scope.
* DESIGN.md wins for guest-facing UX and visual direction.
* ARCHITECTURE.md wins for technical implementation.

---

# 3. Product Design Goal

Luna Menu must provide a premium multi-tenant QR menu experience for restaurants, cafés, cocktail bars, wine bars, boutique hotels, and hospitality brands.

The public menu should feel:

* Premium
* Calm
* Cinematic
* Editorial
* Brand-led
* Mobile-first
* Fast
* Readable
* Guest-friendly
* Easy to browse

The public menu must never feel like:

* A dashboard
* A POS system
* A food delivery app
* A marketplace
* A PDF viewer
* A generic SaaS template

---

# 4. Design Philosophy

## 4.1 Hospitality First

Luna Menu is part of the restaurant guest experience. The interface must support comfort, clarity, trust, brand perception, and decision-making.

Every public restaurant page should answer:

> Does this feel like a premium hospitality experience?

If the answer is no, the design direction is wrong.

## 4.2 Content Before Decoration

The menu content is the product. Design must prioritize:

* Restaurant identity
* Categories
* Menu item names
* Prices
* Descriptions
* Availability
* Dietary tags
* Allergens
* Featured items
* Opening hours
* Location
* Contact links

Decorative elements must never reduce clarity or speed.

## 4.3 Premium Restraint

Luxury comes from restraint, not visual noise.

Use:

* Strong typography
* Calm spacing
* Warm contrast
* Elegant surfaces
* Subtle motion
* High-quality imagery
* Clear hierarchy

Avoid:

* Excessive animation
* Heavy shadows
* Neon colors
* Crowded cards
* Decorative clutter
* Dashboard-style panels
* Food-delivery-style grids

## 4.4 Consistency Across Themes

Themes may look different, but guests should not need to relearn the product.

All themes must preserve:

* Same guest journey
* Same route model
* Same content structure
* Same category behavior
* Same search behavior
* Same filter behavior
* Same modal accessibility behavior
* Same state requirements
* Same accessibility standards
* Same performance expectations

Themes customize personality, not product behavior.

---

# 5. UX Priorities

Priority order:

1. Fast access after scanning a QR code
2. Immediate confirmation of the correct restaurant
3. Readable restaurant identity
4. Easy category navigation
5. Fast item discovery
6. Clear item comparison
7. Search and filter support
8. Comfortable item detail review
9. Language switching
10. Restaurant information discovery
11. Premium visual atmosphere

Visual style must never reduce usability.

---

# 6. Mobile-First Strategy

Luna Menu is primarily used after a guest scans a QR code on a phone.

Primary design surface:

* Mobile phones, especially 320px–430px widths

Secondary surfaces:

* Tablet
* Desktop

Mobile design must prioritize:

* Single-column layout
* Thumb-friendly controls
* Large tap targets
* Readable typography
* Fast category browsing
* Smooth native scrolling
* Minimal visual noise
* Comfortable one-handed use
* Fast menu access after hero

Desktop may provide a wider editorial layout, but it must not introduce desktop-only workflows or dashboard-like density.

---

# 7. Public Page Information Architecture

A public restaurant page may include these MVP content areas:

1. Navigation
2. Hero
3. Featured Items
4. Search and Filters
5. Category Navigation
6. Menu Sections
7. Menu Item Modal
8. Restaurant Information
9. Footer

The visual order may vary by theme, but the guest journey must remain clear.

Themes may change presentation but may not remove access to core menu browsing, language switching, restaurant information, or item details.

---

# 8. Core UX Patterns

## 8.1 Navigation

Navigation helps guests confirm restaurant identity, switch language, and move through the page.

Rules:

* Keep navigation minimal.
* Language switcher must be available.
* Navigation must not block menu content.
* Do not include dashboard controls in public navigation.
* All controls must be keyboard accessible.

## 8.2 Hero

The hero establishes restaurant identity and atmosphere.

Rules:

* Restaurant name must be readable.
* Hero must not delay access to the menu.
* Text over imagery requires overlay protection.
* Avoid generic landing-page behavior.
* Motion must be subtle and reduced-motion aware.

## 8.3 Featured Items

Featured items guide discovery.

Rules:

* Show only available featured items.
* Hide section if no valid featured items exist.
* Featured content must not replace normal category browsing.
* Featured cards must remain accessible.

## 8.4 Search

Search helps guests find known items quickly.

Rules:

* Search applies only to the active restaurant.
* Search uses the active locale.
* Search works with filters.
* Empty results require a calm no-results state.
* Search input needs an accessible label and clear action.

## 8.5 Filters

Filters help guests discover items by dietary preferences, allergens, and restaurant-defined tags.

Rules:

* Filters apply only to the active restaurant.
* Multiple active filters may be supported.
* Clear filters action must exist when filters are active.
* Active state must not rely on color alone.
* All labels must respect locale.

## 8.6 Category Navigation

Category navigation helps guests move through the menu.

Rules:

* Categories follow restaurant-defined order.
* Mobile tabs may scroll horizontally.
* Active category must be visually clear.
* Long names must remain understandable.
* Hidden or empty categories should not appear publicly unless intentionally allowed.

## 8.7 Menu Cards

Menu cards support fast comparison and selection.

Rules:

* Item name is primary.
* Price must be easy to compare.
* Description should be readable.
* Missing images must not break layout.
* Unavailable items must be visually and textually clear.
* Cards that open modals must be keyboard accessible.

## 8.8 Menu Item Modal

The modal provides deeper item detail without losing browsing context.

Rules:

* Modal must have accessible dialog behavior.
* Focus must move into the modal.
* Focus must return to the trigger after close.
* Escape key closes modal.
* Mobile may use sheet-like behavior.
* Previous scroll position must be preserved.

## 8.9 Restaurant Information

Restaurant information provides practical details.

Rules:

* Opening hours must be scannable.
* Contact links must be touch-friendly.
* Missing fields collapse gracefully.
* External links should be minimal and useful.

## 8.10 Footer

Footer provides brand closure.

Rules:

* Keep footer minimal.
* Avoid SaaS-heavy promotion.
* Do not add unrelated marketing navigation.
* Footer must remain accessible.

---

# 9. Design Foundation

## 9.1 Color

Themes define their own palettes, but all themes must support:

* Main background
* Secondary background
* Surface
* Elevated surface
* Primary text
* Secondary text
* Muted text
* Accent
* Border
* Overlay
* Focus
* Success/warning/danger states
* Skeleton loading states

Rules:

* Body text must meet WCAG AA contrast.
* State must not rely on color alone.
* Text over images requires overlays, scrims, gradients, or solid surfaces.
* Public pages must avoid neon, saturated, and corporate color systems unless explicitly approved by theme direction.

## 9.2 Typography

Typography should feel editorial, premium, readable, calm, and mobile-friendly.

Rules:

* Use a maximum of two font families per theme.
* Body text must be readable and at least 16px on mobile.
* Decorative fonts must not be used for body text, prices, ingredients, allergens, or controls.
* Font pairings must support Turkish and English.
* Avoid tiny uppercase text for critical information.

## 9.3 Spacing

Use spacing to create calmness and readability.

Rules:

* Use a 4px spacing foundation.
* Mobile horizontal padding should usually be 16–20px.
* Touch controls must be at least 44px high.
* Do not compress cards below readability.
* Do not over-space lists so heavily that browsing becomes slow.

## 9.4 Radius and Elevation

Rules:

* Radius may support theme personality but must remain consistent.
* Use subtle depth.
* Avoid harsh shadows and dashboard-style floating panels.
* Modals must clearly separate from the page.
* Sticky UI must appear above content without feeling heavy.

## 9.5 Motion

Motion should feel calm, smooth, tactile, premium, and purposeful.

Use motion for:

* Modal transitions
* Section reveals
* Tab active states
* Button and focus states
* Image reveal
* Search/filter result changes

Avoid:

* Bouncing motion
* Flashy effects
* Heavy parallax
* Looping decorative animation
* Animations that delay readability

Reduced-motion preferences must be respected.

---

# 10. Accessibility Design Rules

All public pages must support:

* Semantic HTML
* Logical heading order
* Keyboard navigation
* Visible focus states
* Accessible modal behavior
* Screen-reader-compatible labels
* Sufficient contrast
* Reduced motion
* Touch targets of at least 44px by 44px

Specific rules:

* Icon-only controls require accessible names.
* Availability must be textually communicated.
* Allergens must be text-readable.
* Active filters must not rely on color alone.
* Search and filter result changes should not disorient screen reader users.
* Missing translations must not expose raw CMS keys.

Detailed component-level accessibility contracts live in `COMPONENT_LIBRARY.md`.

---

# 11. Internationalization Design Rules

MVP supported languages:

* Turkish
* English

Future-ready languages may include Arabic, Persian, French, and German, but they are not MVP scope.

Rules:

* Locale must be reflected in the URL.
* Language switcher must preserve restaurant context.
* UI labels must match selected locale.
* Missing translations must use fallback rules.
* Optional empty fields should collapse.
* Raw CMS keys must never appear publicly.

---

# 12. Content Presentation Rules

## 12.1 Restaurant Identity

Restaurant name must be prominent. Tagline and description should support atmosphere without blocking menu access.

## 12.2 Menu Content

Rules:

* Item names must be easy to compare.
* Prices must be visible when enabled.
* Descriptions should support decision-making.
* Long descriptions may be truncated on cards and expanded in modals.
* Critical allergens, prices, and availability must not be hidden.

## 12.3 Images

Rules:

* Images should support appetite appeal and atmosphere.
* Missing images must use an image-free layout or restrained placeholder.
* Hero images require contrast protection when text appears over them.
* Meaningful images require useful alt text.
* Decorative images should be hidden from screen readers.

## 12.4 Availability

Rules:

* Unavailable items must be clear visually and textually.
* Unavailable items must not appear as featured.
* Availability state must not rely on color alone.

## 12.5 Empty Content

Rules:

* Missing optional content collapses gracefully.
* Missing featured items hides featured section.
* No menu items requires a calm empty state.
* Do not expose CMS implementation details.

---

# 13. State Design Rules

Every feature must define:

* Loading state
* Empty state
* Error state
* Success state

States must feel calm, premium, and non-technical.

Public errors must not expose Sanity, GROQ, internal IDs, draft state labels, or implementation details.

Use guest-friendly language such as:

* “This menu is not available.”
* “We could not find this restaurant menu.”
* “Please check the link or ask the restaurant team.”

---

# 14. Theme Design Boundary

Themes may customize:

* Color palette
* Typography mood
* Hero styling
* Card visual style
* Image treatment
* Section styling
* Surface treatment
* Radius mood
* Motion intensity within approved limits
* Photography direction
* Editorial tone

Themes may not customize:

* User flow
* Route structure
* Locale behavior
* Search behavior
* Filter behavior
* Category navigation behavior
* Modal accessibility behavior
* Data structure
* Required states
* Accessibility standards
* Performance standards
* Publishing visibility rules
* SEO visibility rules

Full theme documentation lives in `THEME_SYSTEM.md`.

---

# 15. Design Decision Records

## DDR-001: Mobile-First Design

Decision: Luna Menu is designed mobile-first.

Reason: Guests primarily access the menu through QR scans on phones.

Tradeoff: Desktop complexity is limited, but the primary guest journey improves.

## DDR-002: Shared UX Across Themes

Decision: All themes share the same UX foundation.

Reason: Guests should not relearn the product for each restaurant, and development stays scalable.

Tradeoff: Theme differentiation is limited to visual personality.

## DDR-003: Theme-Based Visual Personality

Decision: Themes customize visual personality, not behavior.

Reason: Luna Menu must support different restaurant brands without fragmenting the product.

Tradeoff: Extreme restaurant-specific customization is restricted.

## DDR-004: Public Experience Separate From Admin Experience

Decision: Guest-facing menu design remains separate from future admin/dashboard UI.

Reason: Public pages must feel like hospitality, not software.

Tradeoff: Future admin and public surfaces need separate design standards.

---

# 16. MVP Design Coverage Checklist

The MVP public design is complete only when the following are covered:

* Dynamic restaurant public page state
* Invalid slug state
* Invalid locale state
* Draft/unpublished/archived hidden state
* Published restaurant visible state
* Restaurant profile
* Ordered categories
* Category navigation
* Menu sections
* Menu item cards
* Menu item modal
* Featured items
* Search
* Filters
* Turkish and English language switcher
* Missing translation fallback
* Dynamic SEO preview quality rules
* Accessibility rules
* Performance-safe image and motion behavior

---

# 17. Assumptions

1. DESIGN.md defines the public customer-facing MVP menu experience.
2. Full future admin/dashboard design is out of scope for this document.
3. Sanity CMS is the MVP content source of truth, but public UI must not expose CMS implementation details.
4. Exact production theme availability must be confirmed by the official theme registry.
5. PROJECT_BRIEF example themes are design directions, not automatically required MVP production themes.
6. Exact production font families are not finalized.
7. Analytics UI is out of scope for MVP.
8. QR generation UI is out of scope for MVP public menu design.
9. Optional editorial content must not be implemented unless supported by approved product scope and content model.

---

# 18. Final Design Standard

Luna Menu design is successful when:

* A guest can scan, browse, understand, and decide quickly.
* The restaurant feels more premium because of the menu experience.
* The UI never feels like a dashboard, POS system, marketplace, or PDF viewer.
* Themes feel visually distinct but behaviorally familiar.
* Components remain accessible, performant, and mobile-first.
* Public pages support multiple restaurants without duplicated frontend logic.
* Theme personality never changes core UX behavior.
* Draft, archived, unpublished, or invalid restaurants are not publicly exposed.
* Published restaurant pages are SEO-ready and share-preview ready.
