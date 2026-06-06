"use client";

import { useTranslations } from "next-intl";
import type { MenuSectionThemeProps } from "@/types/theme";
import MenuItemCard from "./MenuItemCard";

export default function MenuSection({
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
      className="space-y-5 scroll-mt-32"
    >
      <div className="flex items-end justify-between gap-5 border-b border-white/10 pb-4">
        <div>
          <h3
            id={headingId}
            className="mt-2 font-serif text-2xl text-theme-text-soft sm:text-3xl"
          >
            {category.label[locale]}
          </h3>
          {category.description ? (
            <p className="mt-2 max-w-2xl text-sm leading-6 text-theme-text-muted/64">
              {category.description[locale]}
            </p>
          ) : null}
        </div>
        <span className="rounded-full border border-theme-accent/20 bg-theme-accent/10 px-3 py-1 text-xs font-medium text-theme-accent">
          {t("items", { count: items.length })}
        </span>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
          <MenuItemCard
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
