"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import { formatMenuItemPrice } from "@/lib/menuPrice";
import { MENU_TAGS } from "@/lib/menuTags";
import type { Locale } from "@/types/i18n";
import type { MenuItemCardThemeProps } from "@/types/theme";

export default function StreetFoodMenuItemCard({
  item,
  restaurantName,
  onSelect,
  showPrices,
  showImages,
}: MenuItemCardThemeProps) {
  const locale = useLocale() as Locale;
  const t = useTranslations("Menu");
  const isAvailable = item.available !== false;
  const name = item.name[locale];
  const description = item.description[locale];
  const formattedPrice = formatMenuItemPrice(item, locale);

  return (
    <button
      type="button"
      onClick={() => onSelect?.(item)}
      aria-label={`View details for ${name}`}
      className={[
        "group flex min-h-30 w-full cursor-pointer items-stretch overflow-hidden rounded-[1.35rem] border bg-paper text-left shadow-sm ring-1 ring-black/5 transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-theme-accent",
        isAvailable
          ? "border-theme-accent/12 hover:-translate-y-0.5 hover:shadow-md"
          : "border-black/5 opacity-60",
      ].join(" ")}
    >
      {showImages ? (
        <div className="relative m-2 h-26 w-26 shrink-0 overflow-hidden rounded-[1.1rem] bg-surface sm:h-28 sm:w-28">
          {item.image ? (
            <Image
              src={item.image.src}
              alt={item.image.alt[locale]}
              fill
              sizes="112px"
              className={[
                "object-cover transition duration-500 group-hover:scale-105",
                isAvailable ? "" : "grayscale",
              ].join(" ")}
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-surface px-3 text-center text-[0.62rem] font-black uppercase leading-3 text-theme-text-muted/70">
              {restaurantName}
            </div>
          )}

          <div className="absolute inset-0 bg-linear-to-t from-theme-text-strong/30 via-transparent to-transparent" />

          {item.featured ? (
            <span className="absolute left-2 top-2 grid size-7 place-items-center rounded-full bg-theme-accent text-theme-on-accent shadow-sm">
              <Star size={12} fill="currentColor" aria-hidden="true" />
            </span>
          ) : null}

          {!isAvailable ? (
            <span className="absolute inset-x-2 bottom-2 rounded-full bg-theme-text-strong/78 px-2 py-1 text-center text-[0.58rem] font-black uppercase text-theme-on-accent">
              {t("unavailable")}
            </span>
          ) : null}
        </div>
      ) : null}

      <div className="flex min-w-0 flex-1 flex-col justify-between gap-2 px-2 py-3 pr-3 sm:py-4">
        <div className="min-w-0 space-y-1.5">
          <h3 className="line-clamp-1 font-heading text-xl font-black leading-none text-theme-text-strong sm:text-2xl">
            {name}
          </h3>

          <p className="line-clamp-2 text-xs font-medium leading-5 text-theme-text-muted sm:text-sm">
            {description}
          </p>

          {item.tags?.length ? (
            <div className="flex gap-1.5 overflow-hidden">
              {item.tags.slice(0, 1).map((tag) => (
                <span
                  key={tag}
                  className="max-w-full truncate rounded-full border border-theme-accent/12 bg-theme-brand px-2 py-0.5 text-[0.58rem] font-black uppercase tracking-[0.08em] text-theme-text-muted"
                >
                  {MENU_TAGS[tag].label[locale]}
                </span>
              ))}
            </div>
          ) : null}
        </div>

        <div className="flex items-end justify-between gap-3">
          {showPrices && formattedPrice ? (
            <p className="font-heading text-xl font-black leading-none text-theme-accent sm:text-2xl">
              {formattedPrice}
            </p>
          ) : null}
        </div>
      </div>
    </button>
  );
}
