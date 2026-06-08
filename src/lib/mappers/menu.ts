import type {
  Category,
  CategorySeed,
  MenuAllergen,
  MenuItem,
  MenuItemSeed,
} from "@/types/menu";
import type { MenuTag } from "@/lib/menuTags";
import { getMenuAllergenFromLabel } from "@/config/allergens";

function uniqueTags(tags: MenuTag[]) {
  return Array.from(new Set(tags));
}

function isMenuAllergen(value: string): value is MenuAllergen {
  return getMenuAllergenFromLabel(value) === value;
}

function mapSeedAllergens(
  allergens: MenuItemSeed["allergens"],
): MenuAllergen[] | undefined {
  if (!allergens?.length) {
    return undefined;
  }

  const mappedAllergens = allergens
    .map((allergen) => {
      if (typeof allergen === "string") {
        return isMenuAllergen(allergen)
          ? allergen
          : getMenuAllergenFromLabel(allergen);
      }

      return getMenuAllergenFromLabel(allergen.en);
    })
    .filter((allergen): allergen is MenuAllergen => Boolean(allergen));

  return Array.from(new Set(mappedAllergens));
}

export function mapCategorySeedToCategory(
  category: CategorySeed,
  index: number,
): Category {
  return {
    id: category.id,
    restaurantId: category.restaurantId,
    slug: category.slug ?? category.id,
    label: category.label,
    description: category.description,
    order: category.order ?? index,
  };
}

export function mapMenuItemSeedToMenuItem(
  item: MenuItemSeed,
  index: number,
): MenuItem {
  const tags = uniqueTags(item.tags ?? []);

  return {
    id: item.id,
    restaurantId: item.restaurantId,
    categoryId: item.category,
    categorySlug: item.category,
    name: item.name,
    description: item.description,
    price: item.price,
    currency: item.currency ?? "TRY",
    priceOptions: item.priceOptions,
    image: item.image
      ? {
          src: item.image,
          alt: item.name,
        }
      : undefined,
    order: item.order ?? index,
    featured: item.featured ?? false,
    available: item.available ?? true,
    ingredients: item.ingredients,
    allergens: mapSeedAllergens(item.allergens),
    nutrition: item.nutrition,
    tags,
  };
}

export function sortByOrder<T extends { order: number }>(items: T[]) {
  return [...items].sort((first, second) => first.order - second.order);
}
