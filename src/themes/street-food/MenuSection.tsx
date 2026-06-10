"use client";

import { useTranslations } from "next-intl";

import { getMenuCategorySectionId } from "@/lib/menuCategoryAnchors";
import type { MenuSectionThemeProps } from "@/types/theme";
import StreetFoodMenuItemCard from "./MenuItemCard";
import StreetFoodSimpleMenuItemRow from "./SimpleMenuItemRow";

const SIMPLE_LIST_CATEGORY_IDS = new Set(["drinks", "sauces", "extras"]);

export default function StreetFoodMenuSection({
  category,
  items,
  locale,
  restaurantName,
  onSelect,
  showPrices,
  showImages,
}: MenuSectionThemeProps) {
  const t = useTranslations("Menu");
  const sectionId = getMenuCategorySectionId(category);
  const headingId = `${sectionId}-heading`;
  const isSimpleList =
    SIMPLE_LIST_CATEGORY_IDS.has(category.id) ||
    SIMPLE_LIST_CATEGORY_IDS.has(category.slug);

  return (
    <section
      id={sectionId}
      aria-labelledby={headingId}
      className="scroll-mt-32 space-y-4"
    >
      <div className="flex items-end justify-between gap-4">
        <div className="min-w-0">
          <h3
            id={headingId}
            className="font-heading text-3xl font-black leading-none text-theme-text-strong sm:text-4xl"
          >
            {category.label[locale]}
          </h3>
          {category.description ? (
            <p className="mt-2 max-w-2xl text-sm leading-6 text-theme-text-muted">
              {category.description[locale]}
            </p>
          ) : null}
        </div>

        <span className="shrink-0 rounded-full border border-theme-accent/14 bg-paper px-3 py-1 text-xs font-black text-theme-accent shadow-sm">
          {t("items", { count: items.length })}
        </span>
      </div>

      <div
        className={[
          "grid gap-3",
          isSimpleList ? "lg:grid-cols-3" : "lg:grid-cols-2",
        ].join(" ")}
      >
        {items.map((item) =>
          isSimpleList ? (
            <StreetFoodSimpleMenuItemRow
              key={item.id}
              item={item}
              showPrices={showPrices}
            />
          ) : (
            <StreetFoodMenuItemCard
              key={item.id}
              item={item}
              restaurantName={restaurantName}
              onSelect={onSelect}
              showPrices={showPrices}
              showImages={showImages}
            />
          ),
        )}
      </div>
    </section>
  );
}
