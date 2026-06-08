import Image from "next/image";
import type { KeyboardEvent } from "react";
import type { MenuItem as MenuItemType } from "@/types/menu";
import type { Locale } from "@/types/i18n";
import { formatMenuItemPrice } from "@/lib/menuPrice";
import { hasMenuTag } from "@/lib/menuTags";
import { useLocale, useTranslations } from "next-intl";

type ItemTag = {
  label: string;
  className: string;
};

const copy = {
  en: {
    featured: "Featured",
    spicy: "Spicy",
    vegetarian: "Vegetarian",
    unavailable: "Unavailable",
  },
  tr: {
    featured: "Öne çıkan",
    spicy: "Acılı",
    vegetarian: "Vejetaryen",
    unavailable: "Mevcut değil",
  },
} satisfies Record<Locale, Record<string, string>>;

function getItemTags(item: MenuItemType, language: Locale): ItemTag[] {
  const labels = copy[language];
  const tags: ItemTag[] = [];

  if (item.featured) {
    tags.push({
      label: labels.featured,
      className: "border-theme-accent/40 bg-theme-accent/14 text-theme-text-soft",
    });
  }

  if (hasMenuTag(item, "vegetarian")) {
    tags.push({
      label: labels.vegetarian,
      className:
        "border-menu-vegetarian/25 bg-menu-vegetarian/10 text-menu-vegetarian-text",
    });
  }

  if (hasMenuTag(item, "spicy")) {
    tags.push({
      label: labels.spicy,
      className: "border-menu-spicy/25 bg-menu-spicy/10 text-menu-spicy-text",
    });
  }

  return tags;
}

export default function MenuItemCard({
  item,
  restaurantName,
  onSelect,
  showPrices,
  showImages,
}: {
  item: MenuItemType;
  restaurantName?: string;
  onSelect?: (item: MenuItemType) => void;
  showPrices: boolean;
  showImages: boolean;
}) {
  const locale = useLocale() as Locale;
  const t = useTranslations("Menu");
  const isAvailable = item.available !== false;
  const itemName = item.name[locale];
  const itemDescription = item.description[locale];
  const itemImageAlt = item.image?.alt[locale] ?? itemName;

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
      aria-label={`View details for ${itemName}`}
      onClick={() => onSelect?.(item)}
      onKeyDown={handleKeyDown}
      className={[
        "group cursor-pointer overflow-hidden rounded-[1.75rem] border bg-white/4.5 shadow-(--shadow-theme-card) backdrop-blur-xl transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-theme-accent/80 sm:hover:-translate-y-1 sm:hover:border-theme-accent/28 sm:hover:bg-white/6.5",
        isAvailable ? "border-white/10" : "border-white/5 opacity-62 grayscale",
      ].join(" ")}
    >
      {showImages ? (
        <div className="relative isolate aspect-4/3 overflow-hidden bg-white/[0.035]">
          {item.image ? (
            <div className="absolute -inset-px z-0 transition duration-700 sm:group-hover:scale-105">
              <Image
                src={item.image.src}
                alt={itemImageAlt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                className="object-cover"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-linear-to-t from-theme-bg/78 via-theme-bg/12 to-transparent"
                aria-hidden="true"
              />
            </div>
          ) : (
            <div className="flex h-full items-center justify-center bg-white/[0.035] px-5 text-center text-xs uppercase tracking-[0.18em] text-theme-text-muted/62">
              {restaurantName}
            </div>
          )}
          {!isAvailable ? (
            <div className="absolute inset-x-4 top-4 z-20 rounded-full border border-white/12 bg-theme-bg/76 px-3 py-2 text-center text-xs font-medium uppercase tracking-[0.22em] text-theme-text-muted backdrop-blur-md">
              {t("unavailable")}
            </div>
          ) : null}
        </div>
      ) : null}

      <div className="space-y-4 p-5">
        <div className="flex flex-wrap gap-2">
          {getItemTags(item, locale).map((tag) => (
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
          <h4 className="font-serif text-xl leading-7 text-theme-text-strong">
            {itemName}
          </h4>
          {showPrices ? (
            <p className="shrink-0 pt-1 text-sm font-semibold text-theme-accent">
              {formatMenuItemPrice(item, locale)}
            </p>
          ) : null}
        </div>

        <p className="text-sm leading-6 text-theme-text-muted/66">
          {itemDescription}
        </p>
      </div>
    </article>
  );
}
