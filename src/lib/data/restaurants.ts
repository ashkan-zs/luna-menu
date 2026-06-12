import { RESTAURANT } from "@/data/restaurant";
import {
  fetchMappedRestaurantBySlug,
  fetchPublishedRestaurantSlugs,
} from "@/sanity/fetchers";

export type PublishedRestaurantSitemapEntry = {
  slug: string;
  updatedAt?: string;
};

function getStaticRestaurantBySlug(slug: string) {
  return RESTAURANT.find((restaurant) => restaurant.slug === slug);
}

export async function getRestaurantBySlug(slug: string) {
  try {
    const restaurant = await fetchMappedRestaurantBySlug(slug);

    return restaurant ?? getStaticRestaurantBySlug(slug);
  } catch {
    return getStaticRestaurantBySlug(slug);
  }
}

export async function getPublishedRestaurantSitemapEntries(): Promise<
  PublishedRestaurantSitemapEntry[]
> {
  try {
    const restaurants = await fetchPublishedRestaurantSlugs();

    if (restaurants.length > 0) {
      return restaurants;
    }
  } catch {
    // Static demo data keeps metadata routes usable while Sanity is empty.
  }

  // Demo restaurants should never be indexed; only published customer
  // restaurants are allowed into sitemap.xml.
  return RESTAURANT.filter((restaurant) => restaurant.isPublished === true).map(
    (restaurant) => ({
      slug: restaurant.slug,
      updatedAt: restaurant.updatedAt,
    }),
  );
}
