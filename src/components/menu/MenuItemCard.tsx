import Image from "next/image";
import type { KeyboardEvent } from "react";
import type { MenuItem as MenuItemType, SupportedLanguage } from "@/types/menu";
import { formatPrice } from "@/lib/formatPrice";
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
} satisfies Record<SupportedLanguage, Record<string, string>>;

function getItemTags(
  item: MenuItemType,
  language: SupportedLanguage,
): ItemTag[] {
  const labels = copy[language];
  const tags: ItemTag[] = [];

  if (item.featured) {
    tags.push({
      label: labels.featured,
      className:
        "border-menu-brass/40 bg-menu-brass/14 text-menu-warm-white",
    });
  }

  if (item.vegetarian) {
    tags.push({
      label: labels.vegetarian,
      className:
        "border-menu-vegetarian/25 bg-menu-vegetarian/10 text-menu-vegetarian-text",
    });
  }

  if (item.spicy) {
    tags.push({
      label: labels.spicy,
      className: "border-menu-spicy/25 bg-menu-spicy/10 text-menu-spicy-text",
    });
  }

  return tags;
}

export default function MenuItemCard({
  item,
  onSelect,
}: {
  item: MenuItemType;
  onSelect?: (item: MenuItemType) => void;
}) {
  const locale = useLocale() as SupportedLanguage;
  const t = useTranslations("Menu");
  const isAvailable = item.available !== false;
  const itemName = item.name[locale];
  const itemDescription = item.description[locale];

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
        "group cursor-pointer overflow-hidden rounded-[1.75rem] border bg-white/4.5 shadow-(--shadow-menu-card) backdrop-blur-xl transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-menu-brass/80 sm:hover:-translate-y-1 sm:hover:border-menu-brass/28 sm:hover:bg-white/6.5",
        isAvailable ? "border-white/10" : "border-white/5 opacity-62 grayscale",
      ].join(" ")}
    >
      <div className="relative isolate aspect-4/3 overflow-hidden bg-white/[0.035]">
        <div className="absolute -inset-px z-0 transition duration-700 sm:group-hover:scale-105">
          <Image
            src={item.image}
            alt={`${itemName} from ${item.category}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-linear-to-t from-menu-night/78 via-menu-night/12 to-transparent"
            aria-hidden="true"
          />
        </div>
        {!isAvailable ? (
          <div className="absolute inset-x-4 top-4 z-20 rounded-full border border-white/12 bg-menu-night/76 px-3 py-2 text-center text-xs font-medium uppercase tracking-[0.22em] text-menu-cream backdrop-blur-md">
            {t("unavailable")}
          </div>
        ) : null}
      </div>

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
          <h4 className="font-serif text-xl leading-7 text-menu-ivory">
            {itemName}
          </h4>
          <p className="shrink-0 pt-1 text-sm font-semibold text-menu-brass">
            {formatPrice(item.price)}
          </p>
        </div>

        <p className="text-sm leading-6 text-menu-cream/66">
          {itemDescription}
        </p>
      </div>
    </article>
  );
}
