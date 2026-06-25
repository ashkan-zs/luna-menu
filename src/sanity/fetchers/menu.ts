import { client, hasSanityPreviewToken, previewClient } from "../lib/client";
import {
  menuCategoriesByRestaurantIdQuery,
  menuItemsByRestaurantIdQuery,
  restaurantPreviewMenuBySlugQuery,
  restaurantMenuBySlugQuery,
} from "../queries";
import type {
  SanityMenuCategoryDocument,
  SanityMenuItemDocument,
  SanityRestaurantMenuPayload,
} from "../types";
import {
  mapSanityMenuCategoryToCategory,
  mapSanityMenuItemToMenuItem,
  mapSanityRestaurantMenuPayload,
} from "../mappings";

export function fetchMenuCategoriesByRestaurantId(restaurantId: string) {
  return client.fetch<SanityMenuCategoryDocument[]>(
    menuCategoriesByRestaurantIdQuery,
    { restaurantId },
    {
      next: {
        tags: [`menu-categories:${restaurantId}`],
      },
    }
  );
}

export async function fetchMappedMenuCategoriesByRestaurantId(
  restaurantId: string,
) {
  const categories = await fetchMenuCategoriesByRestaurantId(restaurantId);

  return categories
    .map(mapSanityMenuCategoryToCategory)
    .filter((category) => category !== null);
}

export function fetchMenuItemsByRestaurantId(restaurantId: string) {
  return client.fetch<SanityMenuItemDocument[]>(
    menuItemsByRestaurantIdQuery,
    { restaurantId },
    {
      next: {
        tags: [`menu-items:${restaurantId}`],
      },
    }
  );
}

export async function fetchMappedMenuItemsByRestaurantId(restaurantId: string) {
  const items = await fetchMenuItemsByRestaurantId(restaurantId);

  return items
    .map(mapSanityMenuItemToMenuItem)
    .filter((item) => item !== null);
}

export function fetchRestaurantMenuBySlug(slug: string) {
  return client.fetch<SanityRestaurantMenuPayload | null>(
    restaurantMenuBySlugQuery,
    { slug },
    {
      next: {
        tags: [`restaurant:${slug}`, `restaurant-menu:${slug}`],
      },
    }
  );
}

export async function fetchMappedRestaurantMenuBySlug(slug: string) {
  const payload = await fetchRestaurantMenuBySlug(slug);

  return mapSanityRestaurantMenuPayload(payload);
}

export function fetchRestaurantPreviewMenuBySlug(slug: string) {
  if (!hasSanityPreviewToken()) {
    return Promise.resolve(null);
  }

  return previewClient.fetch<SanityRestaurantMenuPayload | null>(
    restaurantPreviewMenuBySlugQuery,
    { slug },
    {
      next: {
        tags: [`restaurant-preview:${slug}`, `restaurant-preview-menu:${slug}`],
      },
    }
  );
}

export async function fetchMappedRestaurantPreviewMenuBySlug(slug: string) {
  const payload = await fetchRestaurantPreviewMenuBySlug(slug);

  return mapSanityRestaurantMenuPayload(payload);
}
