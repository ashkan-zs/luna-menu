# Luna Menu — Product Requirements Document (PRD)

## Document Information

Product: Luna Menu

Version: 1.0

Status: MVP

Last Updated: June 2026

Owner: Ashkan Zarifian

Related Documents:

* PROJECT_BRIEF.md

---

## Product Overview

Luna Menu is a premium multi-tenant QR menu SaaS platform for restaurants, cafés, cocktail bars, wine bars, boutique hotels, and hospitality brands.

The platform enables hospitality businesses to publish mobile-first digital menu experiences accessible through QR codes while preserving restaurant branding, multilingual content, and premium presentation.

The MVP consists of a public restaurant experience powered by Sanity CMS. Future phases introduce restaurant authentication, dashboard management, subscriptions, analytics, and additional operational tools.

---

## Vision

Create the premium hospitality-focused QR menu platform that feels closer to a luxury hospitality website than a traditional QR menu application.

The experience must be:

* Mobile-first
* Fast
* Immersive
* Editorial
* Cinematic
* Multilingual
* Brand-focused

The experience must never feel like:

* A food delivery app
* Generic SaaS software
* A POS system
* A marketplace
* A PDF viewer

---

## Problem Statement

Many hospitality businesses rely on:

* Printed menus
* PDF menus
* Image-based menus
* Instagram menu posts
* Outdated website menus

These approaches create usability, maintenance, and branding problems.

Guest pain points:

* Difficult mobile reading
* Excessive zooming and scrolling
* Poor navigation
* Outdated menu information
* Lack of language support

Owner pain points:

* Expensive reprinting
* Slow menu updates
* Weak brand presentation
* Difficult content management

---

## Target Audience

### Primary Customers

* Fine dining restaurants
* Premium restaurants
* Cocktail bars
* Wine bars
* Boutique hotels

### Secondary Customers

* Specialty coffee shops
* Cafés
* Bakeries
* Dessert shops
* Rooftop lounges

---

## Value Proposition

Luna Menu provides:

* Premium mobile-first menu experiences
* Restaurant-specific branding
* Multi-language content
* Theme-based presentation
* Fast menu updates through CMS
* SEO-friendly restaurant pages
* QR-driven menu access

---

## Business Goals

### Phase 1

* Launch MVP
* Acquire first paying customer
* Deploy first public restaurant

### Phase 2

* Reach 10 active restaurants
* Launch restaurant dashboard

### Phase 3

* Reach 50 active restaurants
* Introduce subscriptions

### Phase 4

* Establish recurring monthly revenue growth

---

## Success Metrics

### Product Metrics

* First Contentful Paint < 2 seconds
* Lighthouse Performance ≥ 90
* Lighthouse SEO ≥ 90
* Lighthouse Accessibility ≥ 90
* Mobile usability score ≥ 90

### Business Metrics

* First paying customer
* First public restaurant launch
* 10 active restaurants
* 50 active restaurants
* Positive monthly recurring revenue

---

## User Personas

### Restaurant Owner

Goals:

* Present menu professionally
* Strengthen brand image
* Update content easily
* Reduce printing costs
* Share menu via QR code

### Restaurant Guest

Goals:

* Access menu instantly
* Browse categories easily
* Read content comfortably
* Discover featured items
* View content in preferred language

---

## User Journeys

See USER_FLOWS.md for detailed flow definitions.

---

## Functional Requirements

### FR-001 Restaurant Routing

Description:
Dynamic restaurant pages.

User Value:
Allows multiple restaurants on one platform.

Requirements:

* Route format: /[locale]/[restaurantSlug]
* Locale required
* Slug required
* Restaurant data loaded by slug
* Unpublished restaurants inaccessible publicly

Business Rules:

* Slug must be unique
* Published status required

Edge Cases:

* Missing slug
* Invalid locale
* Unpublished restaurant
* Deleted restaurant

Acceptance Criteria:

* Correct restaurant renders
* Invalid slug returns 404

---

### FR-002 Restaurant Profile

Requirements:

* Name
* Tagline
* Description
* Cover image
* Logo
* Contact information
* Opening hours
* Location information

Business Rules:

* Name required
* Slug required
* At least one supported locale required

Acceptance Criteria:

* Profile renders correctly across supported locales

---

### FR-003 Menu Categories

Requirements:

* Ordered categories
* Localized names
* Visibility control

Business Rules:

* Category belongs to one restaurant

Edge Cases:

* Empty category

Acceptance Criteria:

* Categories render in defined order

---

### FR-004 Menu Items

Requirements:

* Name
* Description
* Price
* Image
* Availability
* Featured flag
* Ingredients
* Allergens

Business Rules:

* Item belongs to category
* Unavailable items cannot appear as featured

Edge Cases:

* Missing image
* Missing translation

Acceptance Criteria:

* Items render correctly
* Availability state respected

---

### FR-005 Search

Requirements:

* Search by item name
* Search by localized content

Business Rules:

* Search limited to active restaurant

Edge Cases:

* No results

Acceptance Criteria:

* Results update correctly

---

### FR-006 Menu Filters

Requirements:

* Filter by dietary tags
* Filter by allergens
* Filter by restaurant-defined tags
* Multiple active filters supported
* Clear filters action

Support filtering by:

* Vegetarian
* Vegan
* Gluten-Free
* Dairy-Free
* Restaurant-defined dietary tags

Business Rules:

* Filters apply only to the active restaurant
* Filters must respect current locale
* Filters must update results immediately
* Dietary filters are optional
* Restaurants may define available dietary tags
* Filtering must respect localization

Edge Cases:

* No matching items
* Missing tag data
* Empty filter state

Acceptance Criteria:

* Filtered results update correctly
* Multiple filters work together
* No-result state displayed when appropriate
* Guests can discover items matching dietary preferences
* Dietary filters update results instantly

---

### FR-007 Featured Items

Requirements:

* Restaurant-defined featured items

Business Rules:

* Featured item must be available

Acceptance Criteria:

* Featured section renders correctly

---

### FR-008 Language Switching

Requirements:

* Turkish
* English

Business Rules:

* Locale reflected in URL

Edge Cases:

* Missing translation

Acceptance Criteria:

* Content switches correctly

---

### FR-009 Theme System

Requirements:

Each theme provides:

* Hero
* Category navigation
* Featured section
* Menu card
* Modal
* Restaurant information
* Footer

Business Rules:

* Theme selected per restaurant
* Shared data model across themes

Acceptance Criteria:

* Theme renders without custom data structures

---

### FR-010 SEO

Requirements:

* Dynamic metadata
* Canonical URLs
* Open Graph
* Twitter metadata
* Structured data
* Sitemap inclusion

Business Rules:

* Only published restaurants indexable

Acceptance Criteria:

* Metadata generated dynamically

---

## MVP Scope

### Included

* Multi-tenant architecture
* Dynamic restaurant routing
* Restaurant profile
* Theme system
* Menu categories
* Menu items
* Featured items
* Search
* Language switcher
* Restaurant information
* Sanity CMS integration
* Dynamic SEO
* Structured data
* Sitemap support

### Excluded

* Authentication
* Billing
* Subscriptions
* Reservations
* Payments
* Ordering
* Loyalty systems
* Analytics dashboard
* Multi-location support

---

## Phase 2 Scope

* Restaurant authentication
* Dashboard
* QR generation
* Restaurant onboarding
* Theme preview mode
* Advanced content management

---

## Future Vision

* Subscriptions
* Analytics
* Multi-location support
* Reservations
* Table ordering
* Payment processing
* Loyalty systems

---

## UX Requirements

### Mobile First

Primary platform: mobile devices.

Requirements:

* Thumb-friendly controls
* Large touch targets
* Smooth scrolling
* Fast navigation

### States

Every feature must define:

* Loading state
* Empty state
* Error state
* Success state

### Modal Requirements

* Keyboard accessible
* Focus trapping
* Escape key close
* Touch-friendly dismissal

---

## SEO Requirements

* Dynamic title
* Dynamic description
* Open Graph metadata
* Twitter metadata
* Canonical URLs
* Restaurant structured data
* XML sitemap

Indexing Rules:

* Published restaurants: index
* Unpublished restaurants: noindex

---

## Accessibility Requirements

* Semantic HTML
* Keyboard navigation
* Visible focus states
* ARIA labels where required
* Accessible modals
* Screen-reader compatibility
* Sufficient contrast ratios

---

## Internationalization Requirements

Supported:

* Turkish
* English

Future:

* Arabic
* Persian
* French
* German

Requirements:

* Locale-based routing
* Localized content fields
* Translation fallbacks

---

## Analytics Requirements

MVP:

* None

Future:

* Page views
* Menu views
* Search interactions
* QR scan tracking

---

## Content Management Requirements

The platform must provide a centralized content management system for managing restaurant content.

Managed Content:

* Restaurant profile
* Branding assets
* Categories
* Menu items
* Availability
* Featured items
* Opening hours
* Localization content
* Theme selection

Publishing States:

* Draft
* Preview
* Published
* Archived

Preview Rules:

* Preview restaurants are accessible only through protected preview URLs.
* Preview restaurants must not be publicly discoverable.
* Preview restaurants must not appear in sitemap.xml.
* Preview restaurants must not generate indexable metadata.
* Preview restaurants are intended for restaurant-owner review before publication.

Business Rules:

* Only published restaurants may be publicly accessible.
* Draft restaurants must not be accessible through public URLs.
* Archived restaurants must not be accessible through public URLs.
* Unpublished restaurants must not be included in search engine indexing, sitemap generation, or structured data output.
* All content changes must be reflected on public restaurant pages without requiring code changes.

Architecture Requirements:

* The content management layer must support future introduction of a custom restaurant dashboard.
* The public application must not depend directly on a specific CMS implementation.
* Content access should be abstracted through repositories, services, or equivalent domain-layer patterns.
* The architecture must allow future replacement or extension of the underlying CMS without requiring major frontend refactoring.

MVP Implementation:

For the MVP, Sanity CMS will be used as the primary content management system and source of truth for restaurant content.

---

## Non-Functional Requirements

Performance:

* Lighthouse ≥ 90

Security:

* Public content read-only

Reliability:

* Graceful degradation for missing content

Scalability:

* Support multiple restaurants without code duplication

Maintainability:

* Shared components
* Shared domain models

---

## Risks & Assumptions

Risks:

* Theme complexity growth
* CMS dependency
* Inconsistent restaurant content quality

Assumptions:

* Restaurants maintain content accuracy
* QR code usage remains primary acquisition channel

---

## Acceptance Criteria

The MVP is complete when:

* Restaurants managed through Sanity CMS
* Dynamic restaurant routing operational
* Theme system operational
* Localization operational
* SEO operational
* Public restaurant pages operational
* Mobile experience meets performance targets
* Published restaurants shareable through URLs

---

## Out of Scope

* POS functionality
* Food delivery
* Marketplace functionality
* Reservation platform
* Website builder
* Customer accounts
* Loyalty systems
* Subscription billing
* Payment processing

---

## Open Questions

* Which analytics provider will be used in Phase 3?
* Will future dashboard replace or extend Sanity?
* Which subscription model will be adopted?
* Will theme marketplace functionality ever be introduced?
