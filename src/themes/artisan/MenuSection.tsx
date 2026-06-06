"use client";

import { useTranslations } from "next-intl";
import type { MenuSectionThemeProps } from "@/types/theme";
import ArtisanMenuItemCard from "./MenuItemCard";

export default function ArtisanMenuSection({
  category,
  items,
  locale,
  onSelect,
  showPrices,
  showImages,
}: MenuSectionThemeProps) {
  const t = useTranslations("Menu");
  const headingId = `${category.id}-heading`;

  return (
    <section
      id={category.id}
      aria-labelledby={headingId}
      className="scroll-mt-32 space-y-5"
    >
      <div className="flex items-end justify-between gap-5 border-b border-espresso/10 pb-5">
        <div>
          <h3
            id={headingId}
            className="font-heading text-5xl uppercase leading-none text-espresso sm:text-6xl"
          >
            {category.label[locale]}
          </h3>
          {category.description ? (
            <p className="mt-3 max-w-2xl text-sm leading-7 text-text-secondary">
              {category.description[locale]}
            </p>
          ) : null}
        </div>
        <span className="shrink-0 rounded-full border border-forest-green/15 bg-surface/70 px-3 py-1 text-xs font-semibold text-forest-green">
          {t("items", { count: items.length })}
        </span>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
          <ArtisanMenuItemCard
            key={item.id}
            item={item}
            onSelect={onSelect}
            showPrices={showPrices}
            showImages={showImages}
          />
        ))}
      </div>
    </section>
  );
}
