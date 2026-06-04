"use client";

import Image from "next/image";

import type { MenuItem } from "@/types/menu";
import type { Locale } from "@/types/i18n";
import { formatPrice } from "@/lib/formatPrice";
import {
  AnimatePresence,
  motion,
  PanInfo,
  useDragControls,
} from "motion/react";
import { Star, X } from "lucide-react";
import { MENU_TAGS } from "@/lib/menuTags";
import { useLocale, useTranslations } from "next-intl";

type MenuItemModalProps = {
  item: MenuItem | null;
  onClose: () => void;
};

export default function MenuItemModal({ item, onClose }: MenuItemModalProps) {
  const locale = useLocale() as Locale;
  const t = useTranslations("MenuItemModal");
  const CLOSE_THRESHOLD = 120;
  const dragControls = useDragControls();

  function handleDragEnd(info: PanInfo) {
    if (info.offset.y > CLOSE_THRESHOLD) onClose();
  }

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/70 px-3 backdrop-blur-md sm:items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          onClick={onClose}
        >
          <motion.article
            className="relative max-h-[92vh] w-full max-w-lg overflow-hidden rounded-t-4xl border border-white/10 bg-[#0b0b0c]/95 shadow-2xl shadow-black/50 sm:rounded-4xl"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 269, damping: 30 }}
            drag="y"
            dragControls={dragControls}
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={0.12}
            dragListener={false}
            onDragEnd={(_, info) => handleDragEnd(info)}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 z-10 grid size-11 place-items-center rounded-full bg-black/50 text-white backdrop-blur-xl transition hover:bg-white/10"
              aria-label={t("close")}
            >
              <X size={22} />
            </button>

            <div className="max-h-[92vh] overflow-y-auto overscroll-contain scrollbar-none [-webkit-overflow-scrolling:touch]">
              <div
                className="sticky top-0 z-20 flex touch-none justify-center py-3 sm:hidden"
                onPointerDown={(event) => dragControls.start(event)}
              >
                <div className="h-1.5 w-14 rounded-full bg-white/25" />
              </div>

              <div className="relative h-80 overflow-hidden rounded-t-4xl">
                <Image
                  src={item.image.src}
                  alt={item.image.alt[locale]}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#0b0b0c] via-black/20 to-black/10" />
              </div>

              <div className="space-y-6 px-6 pb-8 pt-2">
                {item.featured && (
                  <div className="inline-flex items-center gap-2 rounded-full border border-[#c8a96b]/30 bg-[#c8a96b]/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-[#c8a96b]">
                    <Star size={14} />
                    {t("chefRecommendation")}
                  </div>
                )}

                <div>
                  <h2 className="font-serif text-4xl leading-tight text-white">
                    {item.name[locale]}
                  </h2>

                  <p className="mt-3 text-2xl font-medium text-[#c8a96b]">
                    {formatPrice(item.price)}
                  </p>

                  <p className="mt-4 text-base leading-7 text-white/65">
                    {item.description[locale]}
                  </p>
                </div>

                {item.tags && (
                  <div
                    className={`grid gap-3 border-y border-white/10 py-4 text-xs uppercase tracking-[0.16em] text-white/60 ${
                      item.tags.length >= 3 ? "grid-cols-3" : "grid-cols-2"
                    }`}
                  >
                    {item.tags.slice(0, 3).map((tagKey) => {
                      const tag = MENU_TAGS[tagKey];
                      const Icon = tag.icon;
                      return (
                        <div key={tagKey} className="flex items-center gap-2">
                          <Icon size={16} className="text-[#c8a96b]" />
                          {tag.label[locale]}
                        </div>
                      );
                    })}
                  </div>
                )}

                {item.ingredients && (
                  <section>
                    <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
                      {t("ingredients")}
                    </h3>
                    <p className="mt-3 leading-7 text-white/55">
                      {item.ingredients[locale]}
                    </p>
                  </section>
                )}

                {item.allergens && (
                  <section>
                    <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
                      {t("allergens")}
                    </h3>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {item.allergens ? (
                        item.allergens.map((allergen) => (
                          <span
                            key={allergen[locale]}
                            className="rounded-full border border-white/10 bg-white/4 px-3 py-1.5 text-sm text-white/60"
                          >
                            {allergen[locale]}
                          </span>
                        ))
                      ) : (
                        <p className="text-sm text-white/50">
                          {t("noListedAllergens")}
                        </p>
                      )}
                    </div>
                  </section>
                )}

                {(item.calories || item.protein || item.carbs || item.fats) && (
                  <div className="grid grid-cols-4 rounded-3xl border border-white/10 bg-white/4 py-5 text-center">
                    <NutritionItem label={t("calories")} value={item.calories} />
                    <NutritionItem
                      label={t("protein")}
                      value={item.protein}
                      suffix="g"
                    />
                    <NutritionItem
                      label={t("carbs")}
                      value={item.carbs}
                      suffix="g"
                    />
                    <NutritionItem
                      label={t("fats")}
                      value={item.fats}
                      suffix="g"
                    />
                  </div>
                )}

                {!item.available && (
                  <p className="rounded-2xl border border-red-400/20 bg-red-400/10 p-4 text-sm text-red-200">
                    {t("unavailable")}
                  </p>
                )}
              </div>
            </div>
          </motion.article>
        </motion.div>
      )}
    </AnimatePresence>
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
    <div className="border-r border-white/10 last:border-r-0">
      <p className="text-lg font-medium text-white">
        {value ? `${value}${suffix}` : "—"}
      </p>
      <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-white/40">
        {label}
      </p>
    </div>
  );
}
