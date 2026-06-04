import { CATEGORIES, MENU_ITEMS } from "@/data/menu";
import type { Category, MenuItem } from "@/types/menu";
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

export function getRestaurantMenu(
  restaurantSlug: string,
): RestaurantMenu | undefined {
  const menu = createRestaurantMenu(restaurantSlug);

  if (menu.items.length === 0 && menu.categories.length === 0) {
    return undefined;
  }
  return menu;
}
