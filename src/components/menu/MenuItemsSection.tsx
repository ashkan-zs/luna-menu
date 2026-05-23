"use client";

import { useMemo, useState } from "react";
import { CATEGORIES, MENU_ITEMS } from "@/data/menu";
import type {
  MenuItem as MenuItemType,
  SupportedLanguage,
} from "@/types/menu";
import { filterMenuItems } from "@/lib/filterMenuItems";
import MenuItemCard from "./MenuItemCard";
import MenuItemModal from "./MenuItemModal";
import MenuSearchFilter from "./MenuSearchFilter";
import CategoryTabs from "./CategoryTabs";
import FeaturedMenuSection from "./FeaturedMenuSection";
import { useActiveCategory } from "@/hooks/useActiveCategory";
import { useLocale, useTranslations } from "next-intl";

const SIGNATURE_ITEM_IDS = ["mc-1", "st-1", "mc-2"] as const;

export default function MenuItemsSection() {
  const [selectedItem, setSelectedItem] = useState<MenuItemType | null>(null);
  const [query, setQuery] = useState("");
  const [featuredOnly, setFeaturedOnly] = useState(false);
  const [availableOnly, setAvailableOnly] = useState(false);
  const [vegetarianOnly, setVegetarianOnly] = useState(false);
  const [spicyOnly, setSpicyOnly] = useState(false);
  const locale = useLocale() as SupportedLanguage;
  const t = useTranslations("Menu");

  const filteredItems = useMemo(
    () =>
      filterMenuItems(
        MENU_ITEMS,
        {
          query,
          featuredOnly,
          availableOnly,
          vegetarianOnly,
          spicyOnly,
        },
        locale,
      ),
    [availableOnly, featuredOnly, locale, query, spicyOnly, vegetarianOnly],
  );

  const categoryIds = useMemo(
    () => filteredItems.map((item) => item.category),
    [filteredItems],
  );

  const visibleCategories = useMemo(() => {
    const categoryIdsWithItem = new Set(
      filteredItems.map((item) => item.category),
    );
    return CATEGORIES.filter((item) => categoryIdsWithItem.has(item.id));
  }, [filteredItems]);

  const activeCategory = useActiveCategory(categoryIds);
  const featuredItems = useMemo(
    () =>
      SIGNATURE_ITEM_IDS.map((id) =>
        MENU_ITEMS.find((item) => item.id === id),
      ).filter((item): item is MenuItemType => Boolean(item)),
    [],
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
        activeCategory={activeCategory}
        onCategoryClick={scrollToCategory}
      />
      <div className="px-5 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl mt-4">
          <FeaturedMenuSection
            items={featuredItems}
            onSelect={setSelectedItem}
          />

          <MenuSearchFilter
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
              const headingId = `${category.id}-heading`;
              const items = filteredItems.filter(
                (item) => item.category === category.id,
              );

              if (items.length === 0) {
                return null;
              }

              return (
                <section
                  id={category.id}
                  key={category.id}
                  aria-labelledby={headingId}
                  className="space-y-5 scroll-mt-32"
                >
                  <div className="flex items-end justify-between border-b border-white/10 pb-4">
                    <div>
                      {/* <p className="text-[0.68rem] font-medium uppercase tracking-[0.28em] text-menu-brass/70">
                        {restaurantName}
                      </p> */}
                      <h3
                        id={headingId}
                        className="mt-2 font-serif text-2xl text-menu-warm-white sm:text-3xl"
                      >
                        {category.label[locale]}
                      </h3>
                    </div>
                    <span className="rounded-full border border-menu-brass/20 bg-menu-brass/10 px-3 py-1 text-xs font-medium text-menu-brass">
                      {t("items", { count: items.length })}
                    </span>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                    {items.map((item) => (
                      <MenuItemCard
                        key={item.id}
                        item={item}
                        onSelect={setSelectedItem}
                      />
                    ))}
                  </div>
                </section>
              );
            })}
          </div>

          {filteredItems.length === 0 ? (
            <div className="rounded-[1.75rem] border border-white/10 bg-white/4.5 px-5 py-12 text-center shadow-[0_18px_60px_rgb(0_0_0_/0.2)] backdrop-blur-xl">
              <h3 className="font-serif text-2xl text-menu-ivory">
                {t("emptyHeading")}
              </h3>
              <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-menu-cream/64">
                {t("emptyDescription")}
              </p>
            </div>
          ) : null}
        </div>

        <MenuItemModal
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      </div>
    </section>
  );
}
