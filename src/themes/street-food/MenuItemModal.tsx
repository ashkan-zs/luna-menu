"use client";

import { useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { Star, X } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import { getMenuAllergenLabel } from "@/config/allergens";
import { formatPrice } from "@/lib/formatPrice";
import {
  getMenuItemPriceListTitle,
  getMenuItemPriceOptions,
} from "@/lib/menuPrice";
import { MENU_TAGS } from "@/lib/menuTags";
import type { Locale } from "@/types/i18n";
import type { MenuItemModalThemeProps } from "@/types/theme";

export default function StreetFoodMenuItemModal({
  item,
  onClose,
  showPrices,
  showImages,
}: MenuItemModalThemeProps) {
  const locale = useLocale() as Locale;
  const t = useTranslations("MenuItemModal");
  const priceOptions = item ? getMenuItemPriceOptions(item) : [];
  const firstPrice = priceOptions[0];

  useEffect(() => {
    if (!item) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [item, onClose]);

  return (
    <AnimatePresence>
      {item ? (
        <motion.div
          className="fixed inset-0 z-50 flex items-end justify-center bg-theme-text-strong/46 px-3 backdrop-blur-sm sm:items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.article
            role="dialog"
            aria-modal="true"
            aria-labelledby="street-food-menu-item-title"
            className="flex max-h-[94vh] w-full max-w-xl flex-col overflow-hidden rounded-t-4xl bg-theme-bg text-theme-text shadow-[0_-24px_70px_rgb(15_23_42/0.24)] sm:rounded-[2rem]"
            initial={{ y: "100%", scale: 0.98 }}
            animate={{ y: 0, scale: 1 }}
            exit={{ y: "100%", scale: 0.98 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative flex h-14 shrink-0 items-center justify-center bg-theme-bg">
              <div className="h-1.5 w-12 rounded-full bg-theme-text-muted/24 sm:hidden" />
              <button
                type="button"
                onClick={onClose}
                aria-label={t("close")}
                className="absolute right-4 top-3 grid size-10 place-items-center rounded-full bg-paper text-theme-text-strong shadow-sm transition hover:bg-theme-brand focus:outline-none focus-visible:ring-2 focus-visible:ring-theme-accent"
              >
                <X className="size-5" aria-hidden="true" />
              </button>
            </div>

            <div className="overflow-y-auto overscroll-contain pb-6 [-webkit-overflow-scrolling:touch]">
              {showImages && item.image ? (
                <div className="relative mx-4 aspect-4/3 overflow-hidden rounded-[1.75rem] bg-surface shadow-sm sm:mx-5">
                  <Image
                    src={item.image.src}
                    alt={item.image.alt[locale]}
                    fill
                    priority
                    sizes="(min-width: 768px) 560px, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-theme-text-strong/26 via-transparent to-transparent" />
                  {item.featured ? (
                    <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-theme-accent px-3 py-1.5 text-xs font-black text-theme-on-accent shadow-sm">
                      <Star size={13} fill="currentColor" aria-hidden="true" />
                      {t("chefRecommendation")}
                    </span>
                  ) : null}
                </div>
              ) : null}

              <div className="space-y-6 px-5 pt-5">
                <div>
                  {item.available === false ? (
                    <p className="mb-3 inline-flex rounded-full bg-red-500/12 px-3 py-1 text-xs font-black uppercase tracking-[0.12em] text-red-500">
                      {t("unavailable")}
                    </p>
                  ) : null}

                  <div className="flex items-start justify-between gap-5">
                    <h2
                      id="street-food-menu-item-title"
                      className="font-heading text-4xl font-black leading-none text-theme-text-strong sm:text-5xl"
                    >
                      {item.name[locale]}
                    </h2>

                    {showPrices && firstPrice ? (
                      <p className="shrink-0 rounded-2xl bg-theme-accent px-3 py-2 font-heading text-2xl font-black text-theme-on-accent">
                        {formatPrice(firstPrice.price, firstPrice.currency)}
                      </p>
                    ) : null}
                  </div>

                  <p className="mt-4 text-base leading-7 text-theme-text-muted">
                    {item.description[locale]}
                  </p>
                </div>

                {item.tags?.length ? (
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tagKey) => {
                      const tag = MENU_TAGS[tagKey];
                      const Icon = tag.icon;

                      return (
                        <span
                          key={tagKey}
                          className="inline-flex items-center gap-1.5 rounded-full border border-theme-accent/14 bg-paper px-3 py-1.5 text-xs font-black uppercase text-theme-text-muted shadow-sm"
                        >
                          <Icon
                            className="size-3.5 text-theme-accent"
                            strokeWidth={2.2}
                            aria-hidden="true"
                          />
                          {tag.label[locale]}
                        </span>
                      );
                    })}
                  </div>
                ) : null}

                {showPrices && item.priceOptions?.length ? (
                  <DetailBlock title={getMenuItemPriceListTitle(locale)}>
                    <div className="divide-y divide-theme-accent/10 overflow-hidden rounded-[1.25rem] border border-theme-accent/12 bg-paper shadow-sm">
                      {priceOptions.map((option) => (
                        <div
                          key={`${option.label[locale]}-${option.price}`}
                          className="flex items-center justify-between gap-4 px-4 py-3 text-sm"
                        >
                          <span className="font-bold text-theme-text-muted">
                            {option.label[locale]}
                          </span>
                          <span className="font-heading text-lg font-black text-theme-accent">
                            {formatPrice(option.price, option.currency)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </DetailBlock>
                ) : null}

                {item.ingredients ? (
                  <DetailBlock title={t("ingredients")}>
                    <p className="text-sm leading-7 text-theme-text-muted">
                      {item.ingredients[locale]}
                    </p>
                  </DetailBlock>
                ) : null}

                <DetailBlock title={t("allergens")}>
                  {item.allergens?.length ? (
                    <div className="flex flex-wrap gap-2">
                      {item.allergens.map((allergen) => (
                        <span
                          key={allergen}
                          className="rounded-full border border-theme-accent/12 bg-paper px-3 py-1.5 text-sm font-bold text-theme-text-muted"
                        >
                          {getMenuAllergenLabel(allergen, locale)}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm leading-7 text-theme-text-muted">
                      {t("noListedAllergens")}
                    </p>
                  )}
                </DetailBlock>

                {item.nutrition ? (
                  <div className="grid grid-cols-4 overflow-hidden rounded-[1.25rem] border border-theme-accent/12 bg-paper py-4 text-center shadow-sm">
                    <NutritionItem
                      label={t("calories")}
                      value={item.nutrition.calories}
                    />
                    <NutritionItem
                      label={t("protein")}
                      value={item.nutrition.protein}
                      suffix="g"
                    />
                    <NutritionItem
                      label={t("carbs")}
                      value={item.nutrition.carbs}
                      suffix="g"
                    />
                    <NutritionItem
                      label={t("fats")}
                      value={item.nutrition.fats}
                      suffix="g"
                    />
                  </div>
                ) : null}
              </div>
            </div>
          </motion.article>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

function DetailBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h3 className="mb-3 text-xs font-black uppercase tracking-[0.16em] text-theme-accent">
        {title}
      </h3>
      {children}
    </section>
  );
}

function NutritionItem({
  label,
  value,
  suffix = "",
}: {
  label: string;
  value?: number;
  suffix?: string;
}) {
  return (
    <div className="border-r border-theme-accent/10 px-2 last:border-r-0">
      <p className="font-heading text-lg font-black text-theme-text-strong">
        {value ? `${value}${suffix}` : "-"}
      </p>
      <p className="mt-1 text-[0.6rem] font-black uppercase leading-tight text-theme-text-muted/60">
        {label}
      </p>
    </div>
  );
}
