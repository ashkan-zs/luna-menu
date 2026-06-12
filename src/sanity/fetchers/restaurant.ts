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
  updatedAt?: string;
};

export function fetchPublishedRestaurantSlugs() {
  return client.fetch<RestaurantSlugResult[]>(restaurantsSlugsQuery, {});
}

export function fetchRestaurantBySlug(slug: string) {
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

export async function fetchMappedRestaurantBySlug(slug: string) {
  const restaurant = await fetchRestaurantBySlug(slug);

  return mapSanityRestaurantToRestaurant(restaurant);
}

export function fetchRestaurantById(restaurantId: string) {
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

export async function fetchMappedRestaurantById(restaurantId: string) {
  const restaurant = await fetchRestaurantById(restaurantId);

  return mapSanityRestaurantToRestaurant(restaurant);
}
