"use client";

import Image from "next/image";
import type { KeyboardEvent } from "react";
import { useLocale, useTranslations } from "next-intl";
import { formatPrice } from "@/lib/formatPrice";
import { MENU_TAGS } from "@/lib/menuTags";
import type { Locale } from "@/types/i18n";
import type { MenuItemCardThemeProps } from "@/types/theme";

export default function ArtisanMenuItemCard({
  item,
  onSelect,
  showPrices,
  showImages,
}: MenuItemCardThemeProps) {
  const locale = useLocale() as Locale;
  const t = useTranslations("Menu");
  const isAvailable = item.available !== false;
  const itemName = item.name[locale];

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onSelect?.(item);
    }
  };

  return (
    <article
      role="button"
      tabIndex={0}
      onClick={() => onSelect?.(item)}
      onKeyDown={handleKeyDown}
      aria-label={`View details for ${itemName}`}
      className={[
        "group overflow-hidden rounded-[1.75rem] border border-espresso/12 bg-paper/82 shadow-[0_18px_56px_rgb(59_42_36/0.10)] transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-theme-accent hover:-translate-y-1 hover:shadow-[0_22px_70px_rgb(59_42_36/0.14)]",
        isAvailable ? "border-theme-accent/14" : "border-white/5 opacity-60",
      ].join(" ")}
    >
      {showImages ? (
        <div className="relative aspect-4/3 overflow-hidden bg-surface">
          {item.image ? (
            <Image
              src={item.image.src}
              alt={item.image.alt[locale]}
              fill
              sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 100vw"
              className={[
                "object-cover transition duration-700 group-hover:scale-[1.035]",
                isAvailable ? "" : "grayscale",
              ].join(" ")}
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-surface text-sm uppercase text-text-secondary">
              restaurant name
            </div>
          )}
          <div className="absolute inset-0 bg-linear-to-t from-matte-black/42 via-transparent to-transparent" />
          {!isAvailable ? (
            <span className="absolute left-4 top-4 rounded-full bg-matte-black/78 px-3 py-2 text-xs font-semibold uppercase text-paper">
              {t("unavailable")}
            </span>
          ) : null}
        </div>
      ) : null}

      <div className="space-y-5 p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-heading text-4xl uppercase leading-none text-espresso">
            {itemName}
          </h3>
        </div>
        {showPrices ? (
          <p className="pt-1 font-heading text-3xl text-burgundy">
            {formatPrice(item.price, item.currency)}
          </p>
        ) : null}
        <p className="text-sm leading-7 text-text-secondary">
          {item.description[locale]}
        </p>
        {item.tags?.length ? (
          <div className="flex flex-wrap gap-2">
            {item.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-espresso/10 bg-surface/60 px-3 py-1 text-[0.68rem] font-semibold uppercase text-text-secondary"
              >
                {MENU_TAGS[tag].label[locale]}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
}
