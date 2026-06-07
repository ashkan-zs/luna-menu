import { client } from "../lib/client";
import {
  restaurantByIdQuery,
  restaurantBySlugQuery,
  restaurantsSlugsQuery,
} from "../queries";
import type { SanityRestaurantDocument } from "../types";
import { mapSanityRestaurantToRestaurant } from "../mappings";

type RestaurantSlugResult = {
  slug: string;
};

export function fetchPublishedRestaurantSlugs() {
  return client.fetch<RestaurantSlugResult[]>(restaurantsSlugsQuery, {});
}

export function fetchPublishedRestaurantBySlug(slug: string) {
  return client.fetch<SanityRestaurantDocument | null>(
    restaurantBySlugQuery,
    { slug },
    {
      next: {
        tags: [`restaurant:${slug}`],
      },
    }
  );
}

export async function fetchMappedPublishedRestaurantBySlug(slug: string) {
  const restaurant = await fetchPublishedRestaurantBySlug(slug);

  return mapSanityRestaurantToRestaurant(restaurant);
}

export function fetchPublishedRestaurantById(restaurantId: string) {
  return client.fetch<SanityRestaurantDocument | null>(
    restaurantByIdQuery,
    { restaurantId },
    {
      next: {
        tags: [`restaurant:${restaurantId}`],
      },
    }
  );
}

export async function fetchMappedPublishedRestaurantById(restaurantId: string) {
  const restaurant = await fetchPublishedRestaurantById(restaurantId);

  return mapSanityRestaurantToRestaurant(restaurant);
}
