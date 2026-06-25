import type { MetadataRoute } from "next";

import { createAbsoluteUrl } from "@/config/app";
import { routing } from "@/i18n/routing";
import { getPublishedRestaurantSitemapEntries } from "@/lib/data/restaurants";
import type { Locale } from "@/types/i18n";

function getRestaurantPath(locale: Locale, restaurantSlug: string) {
  return `/${locale}/${restaurantSlug}`;
}

function getLanguageAlternates(restaurantSlug: string) {
  return Object.fromEntries(
    routing.locales.map((locale) => [
      locale,
      createAbsoluteUrl(getRestaurantPath(locale as Locale, restaurantSlug)),
    ]),
  );
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Only real customer restaurants should appear in search engines and
  // sitemap.xml; demo restaurants remain reachable by direct URL only.
  const restaurants = await getPublishedRestaurantSitemapEntries();

  return restaurants.flatMap((restaurant) =>
    routing.locales.map((locale) => ({
      url: createAbsoluteUrl(
        getRestaurantPath(locale as Locale, restaurant.slug),
      ),
      lastModified: restaurant.updatedAt
        ? new Date(restaurant.updatedAt)
        : undefined,
      changeFrequency: "weekly" as const,
      priority: 0.8,
      alternates: {
        languages: getLanguageAlternates(restaurant.slug),
      },
    })),
  );
}
