import type { MenuItem, SupportedLanguage } from "@/types/menu";

export type MenuItemFilters = {
  query: string;
  featuredOnly: boolean;
  availableOnly: boolean;
  vegetarianOnly: boolean;
  spicyOnly: boolean;
};

function normalizeSearchValue(value: string, language: SupportedLanguage) {
  return value.trim().toLocaleLowerCase(language);
}

export function filterMenuItems(
  items: MenuItem[],
  filters: MenuItemFilters,
  language: SupportedLanguage,
) {
  const query = normalizeSearchValue(filters.query, language);

  return items.filter((item) => {
    if (filters.featuredOnly && !item.featured) {
      return false;
    }

    if (filters.availableOnly && item.available === false) {
      return false;
    }

    if (filters.vegetarianOnly && !item.vegetarian) {
      return false;
    }

    if (filters.spicyOnly && !item.spicy) {
      return false;
    }

    if (!query) {
      return true;
    }

    const searchableText = [
      item.name[language],
      item.description[language],
      item.ingredients?.[language],
      ...(item.allergens?.map((allergen) => allergen[language]) ?? []),
    ]
      .filter(Boolean)
      .join(" ");

    return normalizeSearchValue(searchableText, language).includes(query);
  });
}
