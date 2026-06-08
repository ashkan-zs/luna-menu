"use client";

import { useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { formatPrice } from "@/lib/formatPrice";
import {
  getMenuItemPriceListTitle,
  getMenuItemPriceOptions,
} from "@/lib/menuPrice";
import { MENU_TAGS } from "@/lib/menuTags";
import { getMenuAllergenLabel } from "@/config/allergens";
import type { Locale } from "@/types/i18n";
import type { MenuItemModalThemeProps } from "@/types/theme";

export default function ArtisanMenuItemModal({
  item,
  onClose,
  showPrices,
  showImages,
}: MenuItemModalThemeProps) {
  const locale = useLocale() as Locale;
  const t = useTranslations("MenuItemModal");
  const priceOptions = item ? getMenuItemPriceOptions(item) : [];

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
          className="fixed inset-0 z-50 bg-theme-bg/70 backdrop-blur-sm flex items-end justify-center px-3 sm:items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.article
            role="dialog"
            aria-modal="true"
            aria-labelledby="menu-item-modal-title"
            className="
              fixed inset-x-0 bottom-0
              flex max-h-[96vh] w-full flex-col overflow-hidden
              rounded-t-4xl bg-theme-bg text-theme-text
              shadow-[0_-28px_80px_rgb(0_0_0/0.28)]
              sm:left-1/2 sm:top-1/2 sm:bottom-auto sm:right-auto
              sm:w-[min(920px,92vw)] sm:max-h-[90vh]
              sm:-translate-x-1/2 sm:-translate-y-1/2
              sm:rounded-4xl
            "
            initial={{ y: "100%", scale: 0.98 }}
            animate={{ y: 0, scale: 1 }}
            exit={{ y: "100%", scale: 0.98 }}
            transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
            onClick={(event) => event.stopPropagation()}
          >
            <motion.div
              className="relative z-20 flex h-15 shrink-0 touch-none items-center justify-center"
              drag="y"
              dragConstraints={{ top: 0, bottom: 0 }}
              dragElastic={0.12}
              onDragEnd={(_, info) => {
                if (info.offset.y > 120 || info.velocity.y > 650) {
                  onClose();
                }
              }}
            >
              <div className="h-1.5 w-12 rounded-full bg-theme-text/25" />
              <button
                type="button"
                onClick={onClose}
                className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-theme-text/92 text-theme-bg shadow-[0_12px_32px_rgb(0_0_0/0.16)] transition hover:bg-theme-text-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-theme-accent"
                aria-label={t("close")}
              >
                <X aria-hidden="true" className="h-5 w-5" />
              </button>
            </motion.div>

            <div className="-mt-15 overflow-y-auto overscroll-contain [-webkit-overflow-scrolling:touch]">
              {showImages && item.image ? (
                <div className="relative aspect-4/3 overflow-hidden bg-theme-text/4 sm:aspect-video">
                  <Image
                    src={item.image.src}
                    alt={item.image.alt[locale]}
                    fill
                    sizes="(min-width: 768px) 860px, 100vw"
                    className="object-cover"
                  />
                </div>
              ) : null}

              <div className="space-y-8 px-5 py-7 sm:px-9 sm:py-9">
                <div>
                  {item.available === false ? (
                    <p className="mb-3 inline-flex rounded-full bg-red-500/16 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-red-100">
                      {t("unavailable")}
                    </p>
                  ) : null}
                  <div className="flex items-center justify-between gap-5">
                    <h2
                      id="menu-item-modal-title"
                      className="font-serif text-6xl uppercase leading-none text-theme-text sm:text-7xl"
                    >
                      {item.name[locale]}
                    </h2>
                    {showPrices ? (
                      <p className="font-serif text-4xl text-theme-accent">
                        {priceOptions[0]
                          ? formatPrice(
                              priceOptions[0].price,
                              priceOptions[0].currency,
                            )
                          : null}
                      </p>
                    ) : null}
                  </div>
                  <p className="mt-5 text-base leading-8 text-theme-text-muted/72">
                    {item.description[locale]}
                  </p>
                </div>

                {item.ingredients ? (
                  <DetailBlock title={t("ingredients")}>
                    <p className="text-sm leading-7 text-theme-text-muted/72">
                      {item.ingredients[locale]}
                    </p>
                  </DetailBlock>
                ) : null}

                {showPrices && item.priceOptions?.length ? (
                  <DetailBlock title={getMenuItemPriceListTitle(locale)}>
                    <div className="divide-y divide-theme-accent/12 rounded-3xl border border-theme-accent/14 bg-theme-text/4">
                      {priceOptions.map((option) => (
                        <div
                          key={`${option.label[locale]}-${option.price}`}
                          className="flex items-center justify-between gap-4 px-4 py-3 text-sm"
                        >
                          <span className="text-theme-text-muted/72">
                            {option.label[locale]}
                          </span>
                          <span className="font-serif text-lg text-theme-accent">
                            {formatPrice(option.price, option.currency)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </DetailBlock>
                ) : null}

                {item.tags?.length ? (
                  <DetailBlock title="Notes">
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-theme-accent/20 bg-theme-text/[0.04] px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-theme-accent"
                        >
                          {MENU_TAGS[tag].label[locale]}
                        </span>
                      ))}
                    </div>
                  </DetailBlock>
                ) : null}

                <DetailBlock title={t("allergens")}>
                  <p className="text-sm leading-7 text-theme-text-muted/72">
                    {item.allergens?.length
                      ? item.allergens
                          .map((allergen) =>
                            getMenuAllergenLabel(allergen, locale),
                          )
                          .join(", ")
                      : t("noListedAllergens")}
                  </p>
                </DetailBlock>

                {item.nutrition?.calories ? (
                  <DetailBlock title={t("calories")}>
                    <p className="text-sm text-theme-text-muted/72">
                      {item.nutrition.calories} kcal
                    </p>
                  </DetailBlock>
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
      <h3 className="mb-3 font-serif text-3xl uppercase text-theme-text">
        {title}
      </h3>
      {children}
    </section>
  );
}
