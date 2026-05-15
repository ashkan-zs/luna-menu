"use client";

import { useEffect, useId, useRef, useState } from "react";
import Image from "next/image";

import type { MenuItem, SupportedLanguage } from "@/types/menu";
import { formatPrice } from "@/lib/formatPrice";

type MenuItemModalProps = {
  item: MenuItem | null;
  language: SupportedLanguage;
  onClose: () => void;
};

type ModalTag = {
  label: string;
  className: string;
};

const copy = {
  en: {
    close: "Close menu item details",
    featured: "Featured",
    spicy: "Spicy",
    vegetarian: "Vegetarian",
    unavailable: "Unavailable",
    ingredients: "Ingredients",
    allergens: "Allergens",
    calories: "cal",
  },
  tr: {
    close: "Ürün detaylarını kapat",
    featured: "Öne çıkan",
    spicy: "Acılı",
    vegetarian: "Vejetaryen",
    unavailable: "Mevcut değil",
    ingredients: "İçindekiler",
    allergens: "Alerjenler",
    calories: "kal",
  },
} satisfies Record<SupportedLanguage, Record<string, string>>;

function getModalTags(item: MenuItem, language: SupportedLanguage): ModalTag[] {
  const labels = copy[language];
  const tags: ModalTag[] = [];

  if (item.featured) {
    tags.push({
      label: labels.featured,
      className: "border-menu-brass/40 bg-menu-brass/14 text-menu-warm-white",
    });
  }

  if (item.vegetarian) {
    tags.push({
      label: labels.vegetarian,
      className: "border-emerald-200/20 bg-emerald-300/10 text-emerald-100",
    });
  }

  if (item.spicy) {
    tags.push({
      label: labels.spicy,
      className: "border-red-300/25 bg-red-400/10 text-red-100",
    });
  }

  if (item.available === false) {
    tags.push({
      label: labels.unavailable,
      className: "border-white/16 bg-white/[0.06] text-menu-cream",
    });
  }

  return tags;
}

export default function MenuItemModal({
  item,
  language,
  onClose,
}: MenuItemModalProps) {
  const titleId = useId();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!item) {
      return;
    }

    const frame = window.requestAnimationFrame(() => {
      setIsVisible(true);
      closeButtonRef.current?.focus();
    });

    return () => {
      window.cancelAnimationFrame(frame);
      setIsVisible(false);
    };
  }, [item]);

  useEffect(() => {
    if (!item) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) {
    return null;
  }

  const labels = copy[language];
  const itemName = item.name[language];
  const itemDescription = item.description[language];
  const tags = getModalTags(item, language);

  return (
    <div
      className={[
        "fixed inset-0 z-[80] flex items-center justify-center bg-black/72 px-3 backdrop-blur-md transition duration-300",
        isVisible ? "opacity-100" : "opacity-0",
      ].join(" ")}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <article
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className={[
          "max-h-[88svh] w-full max-w-3xl overflow-hidden rounded-[2rem] border border-white/12 bg-menu-night/92 text-menu-parchment shadow-[0_28px_100px_rgb(0_0_0_/_0.56)] backdrop-blur-2xl transition duration-300 motion-reduce:transition-none",
          isVisible
            ? "translate-y-0 scale-100 opacity-100"
            : "translate-y-4 scale-[0.98] opacity-0 motion-reduce:translate-y-0 motion-reduce:scale-100",
        ].join(" ")}
      >
        <div className="max-h-[88svh] overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="relative aspect-[5/4] overflow-hidden bg-white/[0.035] sm:aspect-[16/9]">
            <Image
              src={item.image}
              alt={itemName}
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-menu-night via-menu-night/24 to-transparent"
              aria-hidden="true"
            />
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              aria-label={labels.close}
              className="absolute right-4 top-4 grid size-11 place-items-center rounded-full border border-white/12 bg-menu-night/62 text-menu-cream backdrop-blur-xl transition hover:border-menu-brass/45 hover:text-menu-warm-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-menu-brass/80"
            >
              <span aria-hidden="true" className="text-2xl leading-none">
                ×
              </span>
            </button>
          </div>

          <div className="space-y-6 p-5 sm:p-7">
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag.label}
                  className={[
                    "rounded-full border px-2.5 py-1 text-[0.68rem] font-medium uppercase tracking-[0.14em]",
                    tag.className,
                  ].join(" ")}
                >
                  {tag.label}
                </span>
              ))}
            </div>

            <div className="flex items-start justify-between gap-5">
              <div>
                <h2
                  id={titleId}
                  className="font-serif text-3xl leading-tight text-menu-ivory sm:text-4xl"
                >
                  {itemName}
                </h2>
                {item.calories ? (
                  <p className="mt-2 text-xs font-medium uppercase tracking-[0.18em] text-menu-brass/75">
                    {item.calories} {labels.calories}
                  </p>
                ) : null}
              </div>
              <p className="shrink-0 pt-1 text-lg font-semibold text-menu-brass">
                {formatPrice(item.price)}
              </p>
            </div>

            <p className="text-base leading-7 text-menu-cream/76">
              {itemDescription}
            </p>

            {item.ingredients ? (
              <section aria-labelledby={`${titleId}-ingredients`}>
                <h3
                  id={`${titleId}-ingredients`}
                  className="font-serif text-xl text-menu-warm-white"
                >
                  {labels.ingredients}
                </h3>
                <p className="mt-3 text-sm leading-6 text-menu-cream/68">
                  {item.ingredients[language]}
                </p>
              </section>
            ) : null}

            {item.allergens?.length ? (
              <section aria-labelledby={`${titleId}-allergens`}>
                <h3
                  id={`${titleId}-allergens`}
                  className="font-serif text-xl text-menu-warm-white"
                >
                  {labels.allergens}
                </h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {item.allergens.map((allergen) => (
                    <li
                      key={allergen[language]}
                      className="rounded-full border border-white/10 bg-white/[0.045] px-3 py-1 text-sm text-menu-cream/72"
                    >
                      {allergen[language]}
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}
          </div>
        </div>
      </article>
    </div>
  );
}