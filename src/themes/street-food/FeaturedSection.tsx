"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { useTranslations } from "next-intl";

import { getLocalizedValue } from "@/lib/i18n/getLocalizedValue";
import { formatMenuItemPrice } from "@/lib/menuPrice";
import type { FeaturedMenuThemeProps } from "@/types/theme";

export default function StreetFoodFeaturedSection({
  restaurant,
  locale,
  items,
  onSelect,
  showPrices,
  showImages,
}: FeaturedMenuThemeProps) {
  const t = useTranslations("Menu");
  const eyebrow = restaurant.content?.featured?.eyebrow
    ? getLocalizedValue(restaurant.content.featured.eyebrow, locale)
    : t("featuredEyebrow");
  const title = restaurant.content?.featured?.title
    ? getLocalizedValue(restaurant.content.featured.title, locale)
    : t("featuredHeading");
  const description = restaurant.content?.featured?.description
    ? getLocalizedValue(restaurant.content.featured.description, locale)
    : t("featuredDescription");

  if (!items.length) {
    return null;
  }

  return (
    <section
      className="mx-auto max-w-7xl py-8 sm:px-6 lg:px-10"
      aria-labelledby="featured-heading"
    >
      <div className="rounded-4xl bg-paper p-4 shadow-[0_18px_48px_rgb(15_23_42/0.08)] sm:p-5">
        <div className="mb-5 flex items-end justify-between gap-5">
          <div className="min-w-0">
            <p className="mb-2 inline-flex rounded-full bg-theme-brand px-3 py-1 text-xs font-black uppercase tracking-[0.12em] text-theme-accent">
              {eyebrow}
            </p>
            <h2
              id="featured-heading"
              className="font-heading text-3xl font-black leading-none text-theme-text-strong sm:text-4xl"
            >
              {title}
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-theme-text-muted">
              {description}
            </p>
          </div>
        </div>

        <div className="-mx-1 flex snap-x gap-3 overflow-x-auto px-4 pb-1 [-ms-overflow-style:none] scrollbar-none sm:mx-0 sm:grid sm:grid-cols-3 sm:p-4 [&::-webkit-scrollbar]:hidden">
          {items.slice(0, 3).map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => onSelect(item)}
              className="group flex h-full min-w-[78vw] snap-start flex-col overflow-hidden rounded-3xl border border-theme-accent/10 bg-theme-bg text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-theme-accent sm:min-w-0"
            >
              {showImages ? (
                <div className="relative h-44 shrink-0 overflow-hidden bg-surface sm:h-48 lg:h-52">
                  {item.image ? (
                    <Image
                      src={item.image.src}
                      alt={item.image.alt[locale]}
                      fill
                      sizes="(min-width: 1024px) 28vw, (min-width: 640px) 30vw, 78vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-surface px-5 text-center text-xs font-black uppercase tracking-[0.14em] text-theme-text-muted/70">
                      {restaurant.name}
                    </div>
                  )}
                  <div className="absolute inset-0 bg-linear-to-t from-theme-text-strong/24 via-transparent to-transparent" />
                </div>
              ) : null}

              <div className="flex flex-1 flex-col space-y-3 p-4">
                <span className="inline-flex w-fit items-center gap-1 rounded-full bg-theme-accent px-3 py-1 text-xs font-black text-theme-on-accent">
                  <Star size={12} fill="currentColor" aria-hidden="true" />
                  {t("featured")}
                </span>
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-heading text-2xl font-black leading-none text-theme-text-strong">
                    {item.name[locale]}
                  </h3>
                  {showPrices ? (
                    <p className="shrink-0 font-heading text-xl font-black text-theme-accent">
                      {formatMenuItemPrice(item, locale)}
                    </p>
                  ) : null}
                </div>
                <p className="line-clamp-2 text-sm leading-6 text-theme-text-muted">
                  {item.description[locale]}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
