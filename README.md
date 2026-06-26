# Luna Menu

Luna Menu is a premium multi-tenant QR menu SaaS platform for restaurants, cafes, cocktail bars, wine bars, boutique hotels, and hospitality brands.

The MVP focuses on public, mobile-first restaurant menu pages powered by Sanity CMS, localized in English and Turkish, rendered through selectable visual themes, and deployed with Next.js on Vercel.

## Features

- Multi-tenant public restaurant menu pages
- Canonical localized routes such as `/en/luna-bistro` and `/tr/luna-bistro`
- Sanity-powered restaurant profiles, branding, categories, menu items, opening hours, and contact details
- English and Turkish localization with `next-intl`
- Theme registry with `luna`, `artisan`, and `street-food` visual themes
- Dynamic SEO metadata, canonical URLs, hreflang alternates, Open Graph data, sitemap, and robots support
- Preview route foundation for protected restaurant-owner review
- Mobile-first, accessible, premium hospitality-focused UI

## Getting Started

Install dependencies:

```bash
pnpm install
```

Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Scripts

```bash
pnpm dev
pnpm build
pnpm start
pnpm lint
pnpm typecheck
pnpm seed:sanity-menu
pnpm upload:sanity-menu-images
```

## Project Structure

```txt
src/
  app/        Next.js routes, metadata, sitemap, robots, and Studio route
  components/ Shared UI and layout components
  features/   Product feature components
  themes/     Theme registry and theme-specific visual components
  lib/        App helpers, metadata, data, mappers, routing, and utilities
  sanity/     Sanity clients, schemas, queries, fetchers, and mappings
  types/      Shared TypeScript domain types
messages/     UI localization messages
public/       Static assets
```

## Environment

Create a `.env.local` file before running Sanity-backed features. Required values include the Sanity project, dataset, API version, and any server-only tokens used by local scripts or preview flows.

## Deploy on Vercel

The app is designed for Vercel deployment. Configure the required environment variables in Vercel, then deploy the Next.js application normally.

## Author

Ashkan Zarifian
