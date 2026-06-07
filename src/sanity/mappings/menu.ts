import type { MenuTag } from "@/lib/menuTags";
import type { Category, MenuItem } from "@/types/menu";

import { mapSanityImageToUrl } from "./images";
import type {
  SanityMenuCategoryDocument,
  SanityMenuItemDocument,
  SanityRestaurantMenuPayload,
} from "../types";
import { mapSanityRestaurantToRestaurant } from "./restaurant";

export type MappedRestaurantMenuPayload = {
  restaurant: NonNullable<ReturnType<typeof mapSanityRestaurantToRestaurant>>;
  menu: {
    categories: Category[];
    items: MenuItem[];
    featuredItemIds: string[];
  };
};

export function mapSanityMenuCategoryToCategory(
  category: SanityMenuCategoryDocument | null | undefined,
): Category | null {
  const restaurantId = category?.restaurant?._ref;
  const slug = category?.slug?.current;

  if (!category || !restaurantId || !slug) {
    return null;
  }

  return {
    id: category._id,
    restaurantId,
    slug,
    label: category.label,
    description: category.description,
    order: category.order,
  };
}

export function mapSanityMenuItemToMenuItem(
  item: SanityMenuItemDocument | null | undefined,
): MenuItem | null {
  const restaurantId = item?.restaurant?._ref;
  const category = mapSanityMenuCategoryToCategory(item?.category);

  if (!item || !restaurantId || !category) {
    return null;
  }

  const imageUrl = mapSanityImageToUrl(item.image);

  return {
    id: item._id,
    restaurantId,
    categoryId: category.id,
    categorySlug: category.slug,
    name: item.name,
    description: item.description,
    price: item.price,
    currency: item.currency,
    image: imageUrl
      ? {
          src: imageUrl,
          alt: item.image?.alt ?? item.name,
        }
      : undefined,
    order: item.order,
    featured: item.featured,
    available: item.available,
    ingredients: item.ingredients,
    allergens: item.allergens,
    nutrition: item.nutrition,
    tags: item.tags ? Array.from(new Set(item.tags)) as MenuTag[] : undefined,
  };
}

export function mapSanityRestaurantMenuPayload(
  payload: SanityRestaurantMenuPayload | null | undefined,
): MappedRestaurantMenuPayload | null {
  const restaurant = mapSanityRestaurantToRestaurant(payload?.restaurant);

  if (!payload || !restaurant) {
    return null;
  }

  const categories = payload.categories
    .map(mapSanityMenuCategoryToCategory)
    .filter((category): category is Category => category !== null);
  const items = payload.items
    .map(mapSanityMenuItemToMenuItem)
    .filter((item): item is MenuItem => item !== null);

  return {
    restaurant,
    menu: {
      categories,
      items,
      featuredItemIds: items
        .filter((item) => item.featured)
        .map((item) => item.id),
    },
  };
}
