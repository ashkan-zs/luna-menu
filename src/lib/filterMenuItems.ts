import { Locale } from "@/types/i18n";
import { hasMenuTag } from "@/lib/menuTags";
import type { MenuItem } from "@/types/menu";
import { getMenuAllergenLabel } from "@/config/allergens";

export type MenuItemFilters = {
  query: string;
  featuredOnly: boolean;
  availableOnly: boolean;
  vegetarianOnly: boolean;
  spicyOnly: boolean;
};

function normalizeSearchValue(value: string, language: Locale) {
  return value.trim().toLocaleLowerCase(language);
}

export function filterMenuItems(
  items: MenuItem[],
  filters: MenuItemFilters,
  language: Locale,
) {
  const query = normalizeSearchValue(filters.query, language);

  return items.filter((item) => {
    if (filters.featuredOnly && !item.featured) {
      return false;
    }

    if (filters.availableOnly && item.available === false) {
      return false;
    }

    if (filters.vegetarianOnly && !hasMenuTag(item, "vegetarian")) {
      return false;
    }

    if (filters.spicyOnly && !hasMenuTag(item, "spicy")) {
      return false;
    }

    if (!query) {
      return true;
    }

    const searchableText = [
      item.name[language],
      item.description[language],
      item.ingredients?.[language],
      ...(item.allergens?.map((allergen) =>
        getMenuAllergenLabel(allergen, language),
      ) ?? []),
    ]
      .filter(Boolean)
      .join(" ");

    return normalizeSearchValue(searchableText, language).includes(query);
  });
}
