"use client";

import { useMemo, useState } from "react";
import type { Category, MenuItem as MenuItemType } from "@/types/menu";
import type { MenuThemeId } from "@/types/theme";
import { filterMenuItems } from "@/lib/filterMenuItems";
import { useActiveCategory } from "@/hooks/useActiveCategory";
import { Locale } from "@/types/i18n";
import { getMenuItemsThemeComponents } from "@/themes/registry";

type MenuItemsSectionProps = {
  locale: Locale;
  themeId: MenuThemeId;
  items: MenuItemType[];
  categories: Category[];
  featuredItemIds?: string[];
};

export default function MenuItemsSection({
  locale,
  themeId,
  items,
  categories,
  featuredItemIds = [],
}: MenuItemsSectionProps) {
  const {
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

  const filteredItems = useMemo(
    () =>
      filterMenuItems(
        items,
        {
          query,
          featuredOnly,
          availableOnly,
          vegetarianOnly,
          spicyOnly,
        },
        locale,
      ),
    [
      availableOnly,
      featuredOnly,
      items,
      locale,
      query,
      spicyOnly,
      vegetarianOnly,
    ],
  );

  const categoryIds = useMemo(
    () => filteredItems.map((item) => item.categoryId),
    [filteredItems],
  );

  const visibleCategories = useMemo(() => {
    const categoryIdsWithItem = new Set(
      filteredItems.map((item) => item.categoryId),
    );
    return categories.filter((item) => categoryIdsWithItem.has(item.id));
  }, [categories, filteredItems]);

  const activeCategory = useActiveCategory(categoryIds);
  const featuredItems = useMemo(
    () =>
      featuredItemIds
        .map((id) => items.find((item) => item.id === id))
        .filter((item): item is MenuItemType => Boolean(item)),
    [featuredItemIds, items],
  );

  function scrollToCategory(categoryId: string) {
    document.getElementById(categoryId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <section
      id="menu"
      className="scroll-mt-16 pt-0"
      aria-labelledby="featured-heading"
    >
      <CategoryTabs
        categories={visibleCategories}
        activeCategoryId={activeCategory}
        onCategoryClick={scrollToCategory}
      />
      <div className="px-5 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl mt-4">
          <FeaturedSection items={featuredItems} onSelect={setSelectedItem} />

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
                  onSelect={setSelectedItem}
                />
              );
            })}
          </div>

          {filteredItems.length === 0 ? <EmptyState locale={locale} /> : null}
        </div>

        <ThemedMenuItemModal
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      </div>
    </section>
  );
}
