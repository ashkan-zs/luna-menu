import { client, hasSanityPreviewToken, previewClient } from "../lib/client";
import {
  restaurantPreviewBySlugQuery,
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

export function fetchRestaurantPreviewBySlug(slug: string) {
  if (!hasSanityPreviewToken()) {
    return Promise.resolve(null);
  }

  return previewClient.fetch<SanityRestaurantDocument | null>(
    restaurantPreviewBySlugQuery,
    { slug },
    {
      next: {
        tags: [`restaurant-preview:${slug}`],
      },
    }
  );
}

export async function fetchMappedRestaurantPreviewBySlug(slug: string) {
  const restaurant = await fetchRestaurantPreviewBySlug(slug);

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
