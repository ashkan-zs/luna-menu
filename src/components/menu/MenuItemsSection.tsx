"use client";

import { useMemo, useState } from "react";
import type { Category, MenuItem as MenuItemType } from "@/types/menu";
import type { MenuThemeId } from "@/types/theme";
import type { Restaurant, RestaurantSettings } from "@/types/restaurant";
import { filterMenuItems } from "@/lib/filterMenuItems";
import { getMenuCategorySectionId } from "@/lib/menuCategoryAnchors";
import { useActiveCategory } from "@/hooks/useActiveCategory";
import { Locale } from "@/types/i18n";
import { getMenuItemsThemeComponents } from "@/themes/registry";

type MenuItemsSectionProps = {
  locale: Locale;
  themeId: MenuThemeId;
  restaurant: Restaurant;
  items: MenuItemType[];
  categories: Category[];
  featuredItemIds?: string[];
  settings?: RestaurantSettings;
};

export default function MenuItemsSection({
  locale,
  themeId,
  restaurant,
  items,
  categories,
  featuredItemIds = [],
  settings,
}: MenuItemsSectionProps) {
  const {
    controlsOrder = "categories-first",
    FeaturedSection,
    CategoryTabs,
    SearchFilter,
    MenuSection,
    EmptyState,
    MenuItemModal: ThemedMenuItemModal,
  } = getMenuItemsThemeComponents(themeId);
  const [selectedItem, setSelectedItem] = useState<MenuItemType | null>(null);
  const [query, setQuery] = useState("");
  const [featuredOnly, setFeaturedOnly] = useState(false);
  const [availableOnly, setAvailableOnly] = useState(false);
  const [vegetarianOnly, setVegetarianOnly] = useState(false);
  const [spicyOnly, setSpicyOnly] = useState(false);
  const menuSettings = useMemo(
    () => ({
      showPrices: settings?.showPrices ?? true,
      showImages: settings?.showImages ?? true,
      enableSearch: settings?.enableSearch ?? true,
      enableCategoryTabs: settings?.enableCategoryTabs ?? true,
    }),
    [settings],
  );

  const filteredItems = useMemo(
    () =>
      filterMenuItems(
        items,
        {
          query: menuSettings.enableSearch ? query : "",
          featuredOnly: menuSettings.enableSearch ? featuredOnly : false,
          availableOnly: menuSettings.enableSearch ? availableOnly : false,
          vegetarianOnly: menuSettings.enableSearch ? vegetarianOnly : false,
          spicyOnly: menuSettings.enableSearch ? spicyOnly : false,
        },
        locale,
      ),
    [
      availableOnly,
      featuredOnly,
      items,
      locale,
      menuSettings.enableSearch,
      query,
      spicyOnly,
      vegetarianOnly,
    ],
  );

  const visibleCategories = useMemo(() => {
    const categoryIdsWithItem = new Set(
      filteredItems.map((item) => item.categoryId),
    );
    return categories.filter((item) => categoryIdsWithItem.has(item.id));
  }, [categories, filteredItems]);

  const categorySectionIds = useMemo(
    () => visibleCategories.map(getMenuCategorySectionId),
    [visibleCategories],
  );
  const activeCategorySectionId = useActiveCategory(categorySectionIds);
  const activeCategory =
    visibleCategories.find(
      (category) =>
        getMenuCategorySectionId(category) === activeCategorySectionId,
    )?.id ?? "";
  const featuredItems = useMemo(
    () =>
      featuredItemIds
        .map((id) => items.find((item) => item.id === id))
        .filter((item): item is MenuItemType => Boolean(item)),
    [featuredItemIds, items],
  );

  function scrollToCategory(categoryId: string) {
    const category = categories.find((item) => item.id === categoryId);

    if (!category) {
      return;
    }

    document.getElementById(getMenuCategorySectionId(category))?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  const categoryTabs = menuSettings.enableCategoryTabs ? (
    <CategoryTabs
      categories={visibleCategories}
      activeCategoryId={activeCategory}
      onCategoryClick={scrollToCategory}
    />
  ) : null;

  const searchFilter = menuSettings.enableSearch ? (
    <SearchFilter
      query={query}
      featuredOnly={featuredOnly}
      availableOnly={availableOnly}
      vegetarianOnly={vegetarianOnly}
      spicyOnly={spicyOnly}
      resultCount={filteredItems.length}
      onQueryChange={setQuery}
      onFeaturedOnlyChange={setFeaturedOnly}
      onAvailableOnlyChange={setAvailableOnly}
      onVegetarianOnlyChange={setVegetarianOnly}
      onSpicyOnlyChange={setSpicyOnly}
    />
  ) : null;

  return (
    <section
      id="menu"
      className="scroll-mt-16 pt-0"
      aria-labelledby="featured-heading"
    >
      {controlsOrder === "categories-first" ? categoryTabs : null}
      <div className="px-5 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl mt-4">
          <FeaturedSection
            restaurant={restaurant}
            locale={locale}
            items={featuredItems}
            onSelect={setSelectedItem}
            showPrices={menuSettings.showPrices}
            showImages={menuSettings.showImages}
          />

          {controlsOrder === "search-first" ? (
            <>
              {searchFilter}
              {categoryTabs}
            </>
          ) : (
            searchFilter
          )}

          <div className="space-y-14">
            {visibleCategories.map((category) => {
              const categoryItems = filteredItems.filter(
                (item) => item.categoryId === category.id,
              );

              if (categoryItems.length === 0) {
                return null;
              }

              return (
                <MenuSection
                  key={category.id}
                  category={category}
                  items={categoryItems}
                  locale={locale}
                  restaurantName={restaurant.name}
                  onSelect={setSelectedItem}
                  showPrices={menuSettings.showPrices}
                  showImages={menuSettings.showImages}
                />
              );
            })}
          </div>

          {filteredItems.length === 0 ? <EmptyState locale={locale} /> : null}
        </div>

        <ThemedMenuItemModal
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
          showPrices={menuSettings.showPrices}
          showImages={menuSettings.showImages}
        />
      </div>
    </section>
  );
}
