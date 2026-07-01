import {
  fetchMappedRestaurantBySlug,
  fetchPublishedRestaurantSlugs,
} from "@/sanity/fetchers";

export type PublishedRestaurantSitemapEntry = {
  slug: string;
  updatedAt?: string;
};

export async function getRestaurantBySlug(slug: string) {
  try {
    const restaurant = await fetchMappedRestaurantBySlug(slug);

    return restaurant?.isPublished ? restaurant : undefined;
  } catch {
    return undefined;
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
    // Sanity is the source of truth for sitemap data.
  }

  return [];
}
