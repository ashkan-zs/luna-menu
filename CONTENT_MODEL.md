# Luna Menu — CONTENT_MODEL.md

## Document Information

Product: Luna Menu  
Document: Content Model  
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

This document defines Luna Menu's MVP content structure and how Sanity-managed content maps to the public restaurant menu UI.

It does not define UI styling, component implementation, or technical routing.

---

# 2. Content Model Overview

High-level relationship:

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

Restaurant is the tenant root.

---

# 3. Restaurant

Restaurant fields:

* ID
* Slug
* Name
* Tagline
* Description
* Theme ID
* Logo
* Cover image
* Contact information
* Social links
* Location
* Opening hours
* Settings
* Publishing status
* Created/updated timestamps

Rules:

* Slug is required and unique.
* Restaurant name is required.
* At least one supported locale is required for required localized fields.
* Published status is required for public visibility.
* Restaurant owns its own content, branding, menu, and settings.

---

# 4. Branding

Branding belongs to a restaurant.

Fields may include:

* Logo
* Cover image
* Brand imagery
* Theme selection
* Theme-supported visual configuration

Rules:

* Branding may influence visual presentation.
* Branding must not change product behavior.
* Theme rules remain platform-owned.

---

# 5. Content Sections

MVP public content sections:

* Hero
* Featured items
* Menu sections
* Restaurant information
* Footer

Optional editorial content is not required for MVP. It may render only if supported by approved product scope and content model.

---

# 6. Categories

Category fields:

* ID
* Restaurant reference
* Localized name
* Sort order
* Visibility status

Rules:

* Category belongs to one restaurant.
* Categories render in restaurant-defined order.
* Hidden categories do not render publicly.
* Empty categories should not render unless intentionally allowed.
* Category labels respect active locale.

---

# 7. Menu Items

Menu item fields:

* ID
* Restaurant reference
* Category reference
* Localized name
* Localized description
* Price
* Image
* Availability
* Featured flag
* Ingredients
* Allergens
* Dietary tags
* Restaurant-defined tags
* Sort order

Rules:

* Item belongs to one restaurant/category.
* Unavailable items cannot appear as featured.
* Item content respects active locale.
* Missing optional content collapses gracefully.
* Do not show fake prices.
* Do not show misleading allergen claims.

---

# 8. Localized Fields

Recommended shape:

```ts
type LocalizedString = {
  en?: string;
  tr?: string;
};
```

MVP locales:

* English
* Turkish

Rules:

* Try active locale first.
* Fall back to configured fallback locale.
* If optional content is still missing, omit the field.
* If required content is missing, fail safely or show approved fallback.
* Never show raw CMS keys.
* Never show empty labels.

---

# 9. Publishing States

Supported states:

* Draft
* Preview
* Published
* Archived

Public behavior:

| State | Public Page | SEO | Sitemap |
|---|---|---|---|
| Published | Visible | Indexable | Included |
| Preview | Protected | Noindex | Excluded |
| Draft | Not visible | Noindex | Excluded |
| Archived | Not visible | Noindex | Excluded |
| Deleted | Not found | Noindex | Excluded |

Rules:

* Only published restaurants may be publicly accessible.
* Draft and archived restaurants must not be accessible through public URLs.
* Unpublished restaurants must not be included in sitemap or structured data.

---

# 10. Featured Items

Featured items are restaurant-selected menu items.

Rules:

* Must belong to active restaurant.
* Must be available.
* Section hides when no valid featured items exist.
* Featured status must not create custom data structures per theme.

---

# 11. Availability

Availability controls whether an item is currently available.

Rules:

* Unavailable items must be clearly communicated if rendered.
* Unavailable items must not be featured.
* Availability state must not rely on color alone.

---

# 12. Opening Hours

Opening hours belong to restaurant profile.

Rules:

* Render only available data.
* Day labels come from UI messages.
* Empty rows do not render.
* Structure must be screen-reader understandable.

---

# 13. Restaurant Settings

Settings may include:

* Show prices
* Show images
* Enable search
* Enable category tabs

Rules:

* Settings control approved presentation/feature availability only.
* Settings must not introduce unapproved features.
* If price display is disabled, hide prices consistently.
* If images are disabled or missing, layout must remain stable.

---

# 14. Sanity to Frontend Mapping

Flow:

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

Rules:

* Raw Sanity documents do not enter UI components.
* Mappers normalize missing optional content.
* Mappers enforce localization fallback.
* Mappers filter invalid featured items.
* Mappers protect tenant isolation.

---

# 15. Content Quality Rules

Content must avoid:

* Empty public labels
* Raw CMS keys
* Fake prices
* Misleading allergen claims
* Broken images
* Unavailable featured items
* Cross-restaurant content leakage
* Public technical errors
