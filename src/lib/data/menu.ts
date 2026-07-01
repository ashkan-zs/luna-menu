import {
  fetchMappedRestaurantMenuBySlug,
  fetchMappedRestaurantPreviewMenuBySlug,
} from "@/sanity/fetchers";
import type { Category, MenuItem } from "@/types/menu";
import type {
  Restaurant,
  RestaurantPublishingStatus,
} from "@/types/restaurant";

export type RestaurantMenu = {
  categories: Category[];
  items: MenuItem[];
  featuredItemIds: string[];
};

export type RestaurantMenuPageData = {
  restaurant: Restaurant;
  menu: RestaurantMenu;
};

function getRestaurantPublishingStatus(
  restaurant: Restaurant,
): RestaurantPublishingStatus {
  return (
    restaurant.publishingStatus ??
    (restaurant.isPublished ? "published" : "draft")
  );
}

export async function getRestaurantMenu(
  restaurantSlug: string,
): Promise<RestaurantMenu | undefined> {
  try {
    const payload = await fetchMappedRestaurantMenuBySlug(restaurantSlug);

    if (
      payload?.restaurant.isPublished &&
      (payload.menu.categories.length || payload.menu.items.length)
    ) {
      return payload.menu;
    }
  } catch {
    // Sanity is the source of truth for public menu data.
  }

  return undefined;
}

export async function getRestaurantMenuPageData(
  restaurantSlug: string,
): Promise<RestaurantMenuPageData | undefined> {
  try {
    const payload = await fetchMappedRestaurantMenuBySlug(restaurantSlug);

    if (
      payload &&
      payload.restaurant.isPublished &&
      (payload.menu.categories.length > 0 || payload.menu.items.length > 0)
    ) {
      return payload;
    }
  } catch {
    // Sanity is the source of truth for public menu data.
  }

  return undefined;
}

export async function getRestaurantPreviewMenuPageData(
  restaurantSlug: string,
): Promise<RestaurantMenuPageData | undefined> {
  try {
    const payload = await fetchMappedRestaurantPreviewMenuBySlug(restaurantSlug);
    const publishingStatus = payload
      ? getRestaurantPublishingStatus(payload.restaurant)
      : undefined;

    if (
      payload &&
      (publishingStatus === "draft" || publishingStatus === "preview") &&
      (payload.menu.categories.length > 0 || payload.menu.items.length > 0)
    ) {
      return payload;
    }
  } catch {
    // Sanity is the source of truth for preview menu data.
  }

  return undefined;
}
