<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Project Overview

Premium QR menu web application for restaurants, cafés, and cocktail bars.

The experience should feel cinematic, elegant, mobile-first, and luxury-focused rather than like a generic SaaS dashboard.

# SaaS Architecture

Luna Menu is a multi-tenant SaaS platform.

Each restaurant has:

- its own public menu URL
- its own branding
- its own menu data
- its own theme selection
- its own CMS-managed content

Examples:

/en/luna-bistro
/tr/luna-bistro

/en/rooftop-bar
/tr/rooftop-bar

All UI components must be designed to support multiple restaurants.
Never hardcode restaurant-specific content inside components.

# Restaurant Routing

Restaurant pages are dynamic.

Route structure:

/[locale]/[restaurantSlug]

Examples:

/en/luna-bistro
/tr/luna-bistro

Restaurant data should be resolved from the slug.

Do not assume a single restaurant exists.

# Theme System

The application supports multiple themes.

A restaurant selects a theme.

Themes control:

- Hero
- FeaturedSection
- MenuItemCard
- MenuItemModal
- RestaurantInfoSection
- Footer

Business logic must remain shared.

Theme components should contain presentation only.

Avoid duplicating business logic across themes.

# Data Architecture

Data should always be accessed through data providers.

Avoid importing static demo data directly into UI components.

Preferred flow:

Page
  → Data Layer
    → Theme Components

Components should receive data via props whenever possible.

Prepare all structures to work with Sanity CMS.

# Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Sanity CMS
- Vercel

# Design Direction

- Dark luxury UI
- Editorial typography
- Warm neutral color palette
- Cinematic food imagery
- Glassmorphism navbar
- Premium hospitality aesthetic
- Minimal but immersive UI
- iOS-quality spacing and interactions

# UX Principles

- Mobile-first
- Thumb-friendly interactions
- Large touch targets
- Smooth scrolling
- Sticky category navigation
- Fast-loading experience
- Avoid clutter
- Avoid dashboard-style layouts

# Animation Rules

- Use subtle Framer Motion animations
- Prefer fade, stagger, blur, and smooth transitions
- Avoid flashy animations
- Avoid bouncing effects
- Keep motion elegant and restrained

# Code Rules

- Use semantic HTML
- Use strict TypeScript
- Prefer reusable components
- Keep components modular
- Avoid unnecessary dependencies
- Use server components by default
- Only use "use client" when required

# Folder Structure

- Shared components → `/components/ui`
- QR menu components → `/components/menu`
- Utility functions → `/lib`
- Types → `/types`
- Static demo data → `/data`

# Styling Rules

- Use Tailwind utility classes
- Maintain consistent spacing
- Use soft shadows and rounded corners
- Avoid overly saturated colors
- Avoid generic template appearance

# SEO

- Use Next.js metadata API
- Use semantic headings
- Optimize images
- Ensure mobile performance is excellent

# State Management

- Prefer local component state first
- Avoid global state libraries unless truly necessary
- URL state should be minimal
- Keep filtering and modal state close to the feature
- Avoid prop drilling deeper than 2–3 levels

# Performance Rules

- Minimize client-side JavaScript
- Avoid unnecessary re-renders
- Prefer static rendering where possible
- Use optimized Next.js Image component
- Lazy load heavy UI sections when appropriate
- Keep animation performance GPU-friendly
- Avoid layout shift

# Image Rules

- Use cinematic landscape imagery
- Optimize all images
- Prefer responsive image sizing
- Use object-cover consistently
- Avoid distorted aspect ratios
- Preserve visual consistency across menu items

# Accessibility

- Maintain sufficient text contrast
- Ensure touch targets are large enough
- Use semantic buttons and sections
- Support keyboard navigation for modals
- Use aria labels where appropriate

# CMS Architecture

- Structure components to work with both static data and CMS data
- Avoid tightly coupling UI to demo data
- Keep data transformation logic inside `/lib`
- Prefer serializable data structures

# CMS Rules

Restaurant content belongs in Sanity CMS.

Examples:

- restaurant information
- menu items
- categories
- pricing
- featured items
- opening hours
- hero content

UI labels belong in next-intl.

Avoid storing restaurant content in translation files.

# Motion Rules

- Respect reduced motion preferences
- Prefer opacity and transform animations
- Avoid animating expensive properties
- Keep animations under 400ms unless cinematic intent requires otherwise

# Component Architecture

- Keep presentational and logic concerns separated
- Avoid massive all-in-one components
- Extract reusable UI primitives
- Prefer composition over deeply nested conditionals

# Visual Philosophy

The UI should feel like a premium restaurant brand experience,
not a software product.

Every screen should prioritize atmosphere, readability,
and emotional presentation over dense functionality.

# Next.js Rules

- Prefer Server Components by default
- Use Client Components only for:
  - animations
  - interactivity
  - browser APIs
  - local state
- Avoid fetching data inside deeply nested client components

# Critical Rule

When generating code:

- Assume multiple restaurants exist.
- Assume multiple themes exist.
- Assume content comes from Sanity CMS.
- Avoid hardcoded restaurant values.
- Avoid single-restaurant architecture.
- Keep business logic separated from theme presentation.