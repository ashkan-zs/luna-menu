# Luna Menu — USER_FLOWS.md

## Document Information

Product: Luna Menu  
Document: User Flows  
Version: 1.0  
Status: MVP  
Owner: Ashkan Zarifian  
Source Documents:

* PROJECT_BRIEF.md
* PRD.md
* DESIGN.md
* ARCHITECTURE.md

---

# 1. Purpose

This document defines Luna Menu's MVP user flows.

It keeps journeys separate from PRD requirements, visual design rules, and technical architecture.

---

# 2. MVP User Types

## 2.1 Restaurant Guest

Goal:

* Access the restaurant menu quickly.
* Browse categories.
* Read menu items comfortably.
* Discover featured items.
* View content in preferred language.
* Find practical restaurant information.

## 2.2 Content Manager

Goal:

* Manage restaurant content in Sanity Studio during MVP.
* Publish restaurant profile, categories, menu items, and branding content.
* Make changes without code edits.

---

# 3. Guest Flow: QR Menu Access

```txt
Guest scans QR code
      ↓
Public restaurant URL opens
      ↓
Locale and restaurant slug are resolved
      ↓
Published restaurant data loads
      ↓
Selected theme renders
      ↓
Guest browses menu
```

Success state:

* Correct restaurant loads.
* Correct locale content appears.
* Menu is readable and usable.

Error states:

* Invalid slug
* Invalid locale
* Unpublished restaurant
* Deleted restaurant
* Failed content loading

Public error copy must remain calm and non-technical.

---

# 4. Guest Flow: Browse Menu

```txt
Guest lands on restaurant page
      ↓
Hero confirms restaurant identity
      ↓
Guest reaches menu content quickly
      ↓
Guest uses category navigation
      ↓
Guest scans menu sections
      ↓
Guest compares item names, prices, descriptions, and tags
```

Success state:

* Guest finds relevant items quickly.

Empty state:

* No menu items available.

Rules:

* Category order follows restaurant content.
* Hidden categories do not appear.
* Missing optional content does not create empty UI gaps.

---

# 5. Guest Flow: Search

```txt
Guest enters search query
      ↓
Results update within active restaurant
      ↓
Results respect current locale
      ↓
Guest clears query or opens item
```

Success state:

* Matching items appear.

Empty state:

* No search results message appears with clear reset path.

Rules:

* Search must not search across restaurants.
* Search must work with active filters.

---

# 6. Guest Flow: Filters

```txt
Guest selects dietary/allergen/tag filter
      ↓
Results update immediately
      ↓
Active filters remain visible
      ↓
Guest clears filters or opens item
```

Success state:

* Matching items appear.

Empty state:

* No filter results message appears with clear reset path.

Rules:

* Filters apply only to active restaurant.
* Filter labels respect locale.
* Active states must not rely on color only.

---

# 7. Guest Flow: View Item Details

```txt
Guest selects menu item card
      ↓
Modal or sheet opens
      ↓
Focus moves into modal
      ↓
Guest reviews details
      ↓
Guest closes modal
      ↓
Focus returns to triggering card
      ↓
Previous scroll position is preserved
```

Modal may show:

* Name
* Image
* Description
* Price
* Ingredients
* Allergens
* Tags
* Dietary labels
* Availability

Rules:

* Escape key closes modal.
* Close button must be accessible.
* Modal must trap focus.
* Critical details must not be hover-only.

---

# 8. Guest Flow: Change Language

```txt
Guest opens language switcher
      ↓
Guest selects target locale
      ↓
URL locale segment changes
      ↓
Restaurant slug is preserved
      ↓
Content and UI labels update
```

Rules:

* MVP locales are English and Turkish.
* Missing translations follow fallback rules.
* Raw CMS keys must never appear.

---

# 9. Guest Flow: Restaurant Information

```txt
Guest scrolls to restaurant information
      ↓
Guest views opening hours, location, contact, social links
      ↓
Guest taps relevant contact or map link
```

Rules:

* Missing fields collapse gracefully.
* Contact links are touch-friendly.
* External links are minimal and useful.

---

# 10. Content Manager Flow: Review Restaurant

Create restaurant
↓
Populate content
↓
Generate preview link
↓
Share with owner
↓
Owner approves
↓
Publish restaurant
↓
Public URL becomes available

---

# 11. Content Manager Flow: Publish Restaurant

```txt
Content manager opens Sanity Studio
      ↓
Creates or edits restaurant profile
      ↓
Adds branding assets
      ↓
Creates categories
      ↓
Creates menu items
      ↓
Sets availability and featured items
      ↓
Selects theme
      ↓
Publishes content
      ↓
Public restaurant page becomes available
```

Success state:

* Published restaurant is visible publicly.

Error state:

* Validation prevents publishing invalid content.

Rules:

* Only published restaurants are public.
* Draft and archived restaurants are not public.
* Content changes should not require code changes.

---

# 12. Out-of-Scope Flows for MVP

The following are future flows, not MVP:

* Restaurant owner authentication
* Custom dashboard management
* Subscription billing
* Payment processing
* Table ordering
* Reservations
* Loyalty system
* Analytics dashboard
* Multi-user accounts
* Role-based access
* Multi-location management

These flows must not be implemented until approved by PRD/product scope.
