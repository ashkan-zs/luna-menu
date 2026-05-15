# Luna Menu — Project Brief

## Project Overview

**Luna Menu** is a premium QR menu web application designed for restaurants, cafés, cocktail bars, wine bars, and hospitality brands that want a cinematic digital menu experience.

The product should feel like a luxury hospitality brand — not a generic restaurant SaaS dashboard.

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

# Core Product Vision

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

# Target Businesses

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

# Tech Stack

## Frontend

* Next.js (App Router)
* TypeScript
* Tailwind CSS
* Framer Motion

## Deployment

* Vercel

## CMS (Later Phase)

* Sanity CMS

## Possible Future Integrations

* Stripe
* WhatsApp reservations
* Google Maps
* Reservation systems
* Analytics
* Multi-branch support

---

# Design Philosophy

## Visual Direction

### Aesthetic

* Dark luxury
* Cinematic
* Editorial
* Warm minimalism
* Elegant glassmorphism

### Color Palette

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

# UX Principles

## Mobile First

The entire experience is primarily designed for mobile QR scanning.

Desktop is secondary.

### Priorities

* thumb-friendly interactions
* large tap targets
* smooth scrolling
* fast navigation
* minimal friction
* instant readability

---

# User Experience Goals

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

# Interaction Design

## Animation Style

### Use

* fade transitions
* blur reveals
* subtle motion
* smooth easing
* soft hover states
* cinematic scrolling

### Avoid

* bouncing animations
* flashy motion
* excessive parallax
* aggressive transforms
* distracting effects

Framer Motion should enhance the experience, not dominate it.

---

# Core Features

## Current Features

* Premium hero section
* Floating navbar
* Sticky category navigation
* Active category detection
* Smooth scrolling
* Auto-scrolling category tabs
* Search system
* Filter system
* Menu item cards
* Menu item modal
* EN/TR multilingual support

---

# Planned Features

## Near-Term

* Theme customization
* Restaurant branding
* Better search UX
* Animated menu transitions
* Dietary filtering
* Featured items carousel
* Seasonal menu sections

## Mid-Term

* Sanity CMS integration
* Live menu management
* QR generation
* Restaurant settings
* Multiple menus
* Dynamic availability

## Long-Term

* Table ordering
* Reservations
* Payment integration
* Customer analytics
* Loyalty systems
* Multi-location support

---

# Application Architecture

## Folder Structure

```txt
/app
/components
  /ui
  /menu
/hooks
/lib
/types
/data
/styles
```

---

# Component Architecture

## Shared UI Components

Location:

```txt
/components/ui
```

Examples:

* Button
* Modal
* Sheet
* Badge
* Input
* SearchBar
* LanguageSwitcher

These components must:

* be reusable
* stay generic
* avoid business-specific logic

---

## Menu Components

Location:

```txt
/components/menu
```

Examples:

* MenuNavbar
* MenuHero
* CategoryTabs
* MenuItemsSection
* MenuItemCard
* MenuItemModal

These components contain menu/business logic.

---

# TypeScript Standards

## Rules

* Strict TypeScript
* Avoid `any`
* Prefer explicit domain types
* Use discriminated unions when useful
* Keep types modular

---

# Rendering Strategy

## Default

Use Server Components by default.

## Client Components

Only use `"use client"` when necessary:

* animations
* event listeners
* scrolling
* interactive state
* browser APIs

Avoid unnecessary client rendering.

---

# Data Structure

## Menu Item Type

```ts
type MenuItem = {
  id: string;
  category: string;

  name: {
    en: string;
    tr: string;
  };

  description: {
    en: string;
    tr: string;
  };

  price: number;

  image: string;

  featured: boolean;

  available: boolean;

  ingredients: {
    en: string;
    tr: string;
  };

  allergens: {
    en: string;
    tr: string;
  }[];

  calories?: number;
};
```

---

# Performance Principles

## Priorities

* fast first load
* optimized images
* minimal JavaScript
* lazy-loaded modals
* smooth scrolling
* efficient animations

Avoid:

* large dependency chains
* unnecessary libraries
* over-engineered abstractions

---

# Accessibility

## Requirements

* semantic HTML
* keyboard accessibility
* proper contrast ratios
* ARIA labels where needed
* readable text sizing
* screen-reader support

---

# SEO Strategy

Even though QR menus are mostly direct-entry apps:

* pages should remain indexable
* restaurant landing pages should support SEO
* metadata should be dynamic
* Open Graph support should exist

---

# Multilingual Strategy

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

# Future CMS Direction

## Sanity CMS Goals

Restaurant owners should eventually manage:

* menu items
* categories
* pricing
* availability
* featured items
* hero images
* restaurant information

without touching code.

---

# Brand Experience Principles

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

---

# Portfolio Strategy

## Private Repository

The real production/business system remains private.

## Public Demo Repository

Later create:

* polished showcase version
* curated demo data
* simplified architecture
* beautiful README
* premium branding

Purpose:

* freelance visibility
* portfolio credibility
* LinkedIn showcase
* Fiverr/Contra/Upwork proof of quality
