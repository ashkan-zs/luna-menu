# Luna Menu — Project Brief

## Project Overview

**Luna Menu** is a premium QR menu SaaS web application designed for restaurants, cafés, cocktail bars, wine bars, and hospitality brands that want a cinematic digital menu experience.

The product should allow each restaurant to have its own public menu page, branded dining experience, menu list, restaurant information, and selected visual theme.

The public customer-facing experience should feel like a luxury hospitality brand — not a generic restaurant SaaS dashboard or food delivery app.

The SaaS/admin side is a future direction, not MVP scope.

The experience focuses on:

* immersive presentation
* elegant typography
* smooth interactions
* mobile-first usability
* premium visual storytelling
* fast and frictionless menu browsing

The interface should evoke the feeling of:

* luxury restaurant brands
* editorial food magazines
* boutique hotel experiences
* cinematic dining atmospheres

---

## Core Product Vision

The QR menu should feel:

* refined
* immersive
* tactile
* calm
* minimal
* premium
* emotionally designed

Avoid:

* dashboard aesthetics
* corporate SaaS styling
* overly colorful UI
* excessive animations
* clutter
* technical-looking interfaces

The user should feel like they are browsing a curated dining experience.

---

## Target Businesses

* Premium restaurants
* Fine dining venues
* Cocktail bars
* Wine bars
* Cafés
* Boutique hotels
* Rooftop lounges
* Specialty coffee shops
* Modern hospitality brands

---

## SaaS Product Direction

Luna Menu should function as a multi-tenant QR menu SaaS platform.

Each restaurant should be able to have:

* its own public URL
* its own restaurant profile
* its own menu categories
* its own menu items
* its own branding assets
* its own selected visual theme
* its own language/content configuration
* its own QR code pointing to its menu page

Example public URLs:

```txt
/en/luna-bistro
/tr/luna-bistro
/en/mavi-balloon
/tr/mavi-balloon
```

The platform should support multiple restaurants without duplicating frontend code.

The system should separate:

* restaurant content
* restaurant settings
* menu data
* theme configuration
* frontend presentation

This allows new restaurants to be added through data/CMS/admin configuration instead of creating a separate custom website for each one.

---

## Restaurant Page Model

Each restaurant should have its own customer-facing page.

A restaurant page should include:

* hero section
* restaurant name
* tagline
* description
* location
* opening hours
* contact links
* menu categories
* menu item list
* featured items
* dietary/tag filters
* language switcher
* selected theme styling
* footer/brand signature

The page should be generated dynamically from the restaurant slug.

Example route:

```txt
/[locale]/[restaurantSlug]
```

Example:

```txt
/en/luna-bistro
/tr/luna-bistro
```

The restaurant slug should be used to fetch the correct restaurant data.

---

## Theme Selection System

Restaurants should be able to choose from existing themes.

Each theme should control the guest-facing visual presentation while using the same shared restaurant/menu data.

Themes may include different versions of:

* hero layout
* category navigation
* menu item cards
* featured section
* menu item modal
* restaurant info section
* footer

**Current Themes:**

* Luna
* Artisan
* Street Food

**Future Theme Ideas:**

* Cocktail
* Fine Dining
* Café
* Bistro

Theme choice should be stored as restaurant configuration.

---

## SaaS/Admin Direction

The guest-facing QR menu should stay cinematic and premium.

The future admin area can be practical and clean, but it should be visually separate from the public dining experience.

Restaurant owners should eventually be able to:

* create/edit restaurant profile
* upload logo and hero images
* manage menu categories
* create/edit menu items
* set prices
* mark items as unavailable
* choose featured items
* manage tags/allergens
* choose a theme
* preview the menu
* generate/download QR code

Admin routes can be separated from public menu routes.

The first version does not need a full dashboard, but the architecture should not block it.

---

## Design Philosophy

### Visual Direction

#### Aesthetic

* Dark luxury
* Cinematic
* Editorial
* Warm minimalism
* Elegant glassmorphism

#### Color Palette

Primary tones:

* charcoal
* deep black
* espresso brown
* warm gray
* champagne gold
* muted ivory

Avoid:

* saturated colors
* bright gradients
* neon aesthetics

### Typography

Typography should feel editorial and premium.

Possible combinations:

* DM Sans
* Inter
* Bricolage Grotesque
* Cormorant Garamond
* Playfair Display

Use:

* strong hierarchy
* generous spacing
* readable mobile sizing

Avoid:

* tiny text
* crowded layouts
* excessive font combinations

---

### UX Principles

#### Mobile First

The entire experience is primarily designed for mobile QR scanning.

Desktop is secondary.

**Priorities:**

* thumb-friendly interactions
* large tap targets
* smooth scrolling
* fast navigation
* minimal friction
* instant readability

---

## User Experience Goals

The menu should:

* load quickly
* feel native on iPhone
* feel polished on Android
* avoid visual noise
* maintain immersion

The experience should feel:

* fluid
* tactile
* premium
* responsive
* intentional

---

## Interaction Design

### Animation Style

**Use:**

* fade transitions
* blur reveals
* subtle motion
* smooth easing
* soft hover states
* cinematic scrolling

**Avoid:**

* bouncing animations
* flashy motion
* excessive parallax
* aggressive transforms
* distracting effects

Framer Motion should enhance the experience, not dominate it.

---

## Accessibility

**Requirements:**

* semantic HTML
* keyboard accessibility
* proper contrast ratios
* ARIA labels where needed
* readable text sizing
* screen-reader support

---

## SEO Strategy

Even though QR menus are mostly direct-entry apps:

* pages should remain indexable
* restaurant landing pages should support SEO
* metadata should be dynamic
* Open Graph support should exist

---

## Multilingual Strategy

Initial languages:

* English
* Turkish

Future support:

* Arabic
* French
* German
* Persian

Architecture should remain scalable for localization.

---

## Future CMS Direction

### Sanity CMS Goals

Restaurant owners should eventually manage:

* restaurant profile
* menu items
* categories
* pricing
* availability
* featured items
* hero images
* restaurant information
* opening hours
* contact links
* branding assets
* selected theme
* QR menu links

without touching code.

---

## Brand Experience Principles

Every screen should answer:

> “Does this feel like a premium hospitality experience?”

If it feels like:

* admin software
* a dashboard
* a food delivery app
* a template marketplace

then the direction is wrong.

The product should feel:

* cinematic
* luxurious
* calm
* immersive
* intentional
* beautifully restrained
