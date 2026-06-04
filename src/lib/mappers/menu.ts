import type {
  Category,
  CategorySeed,
  MenuItem,
  MenuItemSeed,
} from "@/types/menu";
import type { MenuTag } from "@/lib/menuTags";

function uniqueTags(tags: MenuTag[]) {
  return Array.from(new Set(tags));
}

export function mapCategorySeedToCategory(
  category: CategorySeed,
  index: number,
): Category {
  return {
    id: category.id,
    restaurantSlug: category.restaurantSlug,
    slug: category.slug ?? category.id,
    label: category.label,
    order: category.order ?? index,
  };
}

export function mapMenuItemSeedToMenuItem(
  item: MenuItemSeed,
  index: number,
): MenuItem {
  const tags = uniqueTags([
    ...(item.tags ?? []),
    ...(item.spicy ? (["spicy"] as const) : []),
    ...(item.vegetarian ? (["vegetarian"] as const) : []),
  ]);

  return {
    id: item.id,
    restaurantSlug: item.restaurantSlug,
    categoryId: item.category,
    categorySlug: item.category,
    name: item.name,
    description: item.description,
    price: item.price,
    image: {
      src: item.image,
      alt: item.name,
    },
    order: item.order ?? index,
    featured: item.featured,
    available: item.available,
    ingredients: item.ingredients,
    allergens: item.allergens,
    calories: item.calories,
    protein: item.protein,
    carbs: item.carbs,
    fats: item.fats,
    tags,
  };
}

export function sortByOrder<T extends { order: number }>(items: T[]) {
  return [...items].sort((first, second) => first.order - second.order);
}
