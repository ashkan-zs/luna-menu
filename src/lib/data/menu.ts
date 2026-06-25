import {
  fetchMappedRestaurantMenuBySlug,
  fetchMappedRestaurantPreviewMenuBySlug,
} from "@/sanity/fetchers";
import type { Category, MenuItem } from "@/types/menu";
import type {
  Restaurant,
  RestaurantPublishingStatus,
} from "@/types/restaurant";
import {
  mapCategorySeedToCategory,
  mapMenuItemSeedToMenuItem,
  sortByOrder,
} from "@/lib/mappers/menu";

export type RestaurantMenu = {
  categories: Category[];
  items: MenuItem[];
  featuredItemIds: string[];
};

export type RestaurantMenuPageData = {
  restaurant: Restaurant;
  menu: RestaurantMenu;
};

function canUseStaticDemoData() {
  return (
    process.env.NODE_ENV !== "production" &&
    process.env.LUNA_ENABLE_STATIC_DEMO_DATA === "true"
  );
}

async function createRestaurantMenu(
  restaurantSlug: string,
): Promise<RestaurantMenu> {
  const { CATEGORIES, MENU_ITEMS } = await import("@/data/menu");
  const categories = CATEGORIES.filter(
    (category) => category.restaurantId === restaurantSlug,
  );
  const items = MENU_ITEMS.filter(
    (item) => item.restaurantId === restaurantSlug,
  );
  const mappedItems = sortByOrder(items.map(mapMenuItemSeedToMenuItem));

  return {
    categories: sortByOrder(categories.map(mapCategorySeedToCategory)),
    items: mappedItems,
    featuredItemIds: mappedItems
      .filter(
        (item) =>
          item.featured &&
          item.available &&
          item.restaurantId === restaurantSlug,
      )
      .map((item) => item.id),
  };
}

async function getStaticRestaurantBySlug(slug: string) {
  if (!canUseStaticDemoData()) {
    return undefined;
  }

  const { RESTAURANT } = await import("@/data/restaurant");

  return RESTAURANT.find(
    (restaurant) => restaurant.slug === slug && restaurant.isPublished,
  );
}

function getRestaurantPublishingStatus(
  restaurant: Restaurant,
): RestaurantPublishingStatus {
  return (
    restaurant.publishingStatus ??
    (restaurant.isPublished ? "published" : "draft")
  );
}

async function getStaticPreviewRestaurantBySlug(slug: string) {
  if (!canUseStaticDemoData()) {
    return undefined;
  }

  const { RESTAURANT } = await import("@/data/restaurant");

  return RESTAURANT.find((restaurant) => {
    const publishingStatus = getRestaurantPublishingStatus(restaurant);

    return (
      restaurant.slug === slug &&
      (publishingStatus === "draft" || publishingStatus === "preview")
    );
  });
}

async function getStaticRestaurantMenu(
  restaurantSlug: string,
): Promise<RestaurantMenu | undefined> {
  if (!canUseStaticDemoData()) {
    return undefined;
  }

  const menu = await createRestaurantMenu(restaurantSlug);

  if (menu.items.length === 0 && menu.categories.length === 0) {
    return undefined;
  }
  return menu;
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
    // Static demo data keeps local development usable while Sanity is empty.
  }

  return getStaticRestaurantMenu(restaurantSlug);
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
    // Static demo data keeps local development usable while Sanity is empty.
  }

  const restaurant = await getStaticRestaurantBySlug(restaurantSlug);
  const menu = await getStaticRestaurantMenu(restaurantSlug);

  if (!restaurant || !menu) {
    return undefined;
  }

  return {
    restaurant,
    menu,
  };
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
    // Local seed data is available only when explicitly enabled outside production.
  }

  const restaurant = await getStaticPreviewRestaurantBySlug(restaurantSlug);
  const menu = await getStaticRestaurantMenu(restaurantSlug);

  if (!restaurant || !menu) {
    return undefined;
  }

  return {
    restaurant,
    menu,
  };
}
