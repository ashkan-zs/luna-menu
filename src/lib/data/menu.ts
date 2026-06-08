import { CATEGORIES, MENU_ITEMS } from "@/data/menu";
import { RESTAURANT } from "@/data/restaurant";
import { fetchMappedRestaurantMenuBySlug } from "@/sanity/fetchers";
import type { Category, MenuItem } from "@/types/menu";
import type { Restaurant } from "@/types/restaurant";
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

function createRestaurantMenu(restaurantSlug: string): RestaurantMenu {
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
      .filter((item) => item.featured)
      .map((item) => item.id),
  };
}

function getStaticRestaurantBySlug(slug: string) {
  return RESTAURANT.find(
    (restaurant) => restaurant.slug === slug && restaurant.isPublished,
  );
}

function getStaticRestaurantMenu(
  restaurantSlug: string,
): RestaurantMenu | undefined {
  const menu = createRestaurantMenu(restaurantSlug);

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

    if (payload?.menu.categories.length || payload?.menu.items.length) {
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
      (payload.menu.categories.length > 0 || payload.menu.items.length > 0)
    ) {
      return payload;
    }
  } catch {
    // Static demo data keeps local development usable while Sanity is empty.
  }

  const restaurant = getStaticRestaurantBySlug(restaurantSlug);
  const menu = getStaticRestaurantMenu(restaurantSlug);

  if (!restaurant || !menu) {
    return undefined;
  }

  return {
    restaurant,
    menu,
  };
}
