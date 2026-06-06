import Image from "next/image";
import { ChefHat } from "lucide-react";
import type { KeyboardEvent } from "react";
import type { MenuItem as MenuItemType } from "@/types/menu";
import type { Locale } from "@/types/i18n";
import type { FeaturedMenuThemeProps } from "@/types/theme";
import { MENU_TAGS } from "@/lib/menuTags";
import { formatPrice } from "@/lib/formatPrice";
import { useLocale, useTranslations } from "next-intl";

function getSignatureTags(item: MenuItemType, language: Locale) {
  return (
    item.tags?.slice(0, 2).map((tag) => MENU_TAGS[tag].label[language]) ?? []
  );
}

export default function FeaturedMenuSection({
  restaurant,
  locale,
  items,
  onSelect,
  showPrices,
  showImages,
}: FeaturedMenuThemeProps) {
  const t = useTranslations("Menu");
  const eyebrow = restaurant.content?.featured?.eyebrow
    ? restaurant.content.featured.eyebrow[locale]
    : t("featuredEyebrow");
  const title = restaurant.content?.featured?.title
    ? restaurant.content.featured.title[locale]
    : t("featuredHeading");
  const description = restaurant.content?.featured?.description
    ? restaurant.content.featured.description[locale]
    : t("featuredDescription");

  if (items.length === 0) {
    return null;
  }

  return (
    <section
      className="relative mb-16 overflow-hidden rounded-4xl border border-white/10 bg-[radial-gradient(circle_at_12%_0%,rgb(var(--theme-accent-rgb)/0.16),transparent_34%),linear-gradient(145deg,rgb(255_255_255/0.07),rgb(255_255_255/0.025))] px-4 py-7 shadow-[0_28px_90px_rgb(0_0_0_/0.32)] backdrop-blur-2xl sm:rounded-[2.5rem] sm:px-7 sm:py-9"
      aria-labelledby="featured-heading"
    >
      <div
        className="pointer-events-none absolute -right-16 top-6 size-48 rounded-full bg-theme-accent/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative">
        <div className="flex items-center gap-3">
          <span className="grid size-9 place-items-center rounded-full border border-theme-accent/25 bg-theme-accent/12 text-theme-accent shadow-[0_10px_35px_rgb(var(--theme-accent-rgb)/0.12)]">
            <ChefHat className="size-4" aria-hidden="true" />
          </span>
          <p className="text-[0.68rem] font-medium uppercase tracking-[0.32em] text-theme-accent/82">
            {eyebrow}
          </p>
        </div>
        <div className="mt-5 grid gap-5 border-t border-theme-accent/18 pt-5 lg:grid-cols-[minmax(0,0.8fr)_minmax(28rem,1.2fr)] lg:items-end">
          <div>
            <h2
              id="featured-heading"
              className="font-serif text-4xl leading-[0.96] text-theme-text-strong sm:text-5xl lg:text-6xl"
            >
              {title}
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-theme-text-muted/68 sm:text-base">
              {description}
            </p>
          </div>
          <div className="hidden h-px bg-linear-to-r from-transparent via-theme-accent/45 to-transparent lg:block" />
        </div>
      </div>

      <div className="relative mt-8 -mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-2 scrollbar-none sm:-mx-7 sm:gap-6 sm:px-7 [&::-webkit-scrollbar]:hidden">
        {items.map((item) => (
          <FeaturedDishCard
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

function FeaturedDishCard({
  item,
  onSelect,
  showPrices,
  showImages,
}: {
  item: MenuItemType;
  onSelect: (item: MenuItemType) => void;
  showPrices: boolean;
  showImages: boolean;
}) {
  const locale = useLocale() as Locale;
  const itemName = item.name[locale];
  const itemDescription = item.description[locale];
  const itemImageAlt = item.image?.alt[locale] ?? itemName;
  const tags = getSignatureTags(item, locale);
  const t = useTranslations("Menu");

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onSelect(item);
    }
  };

  return (
    <article
      role="button"
      tabIndex={0}
      aria-label={`${t("featuredCTA")}: ${itemName}`}
      onClick={() => onSelect(item)}
      onKeyDown={handleKeyDown}
      className="group relative min-w-[82vw] max-w-[24rem] snap-center cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-theme-bg/54 shadow-[0_24px_80px_rgb(0_0_0_/0.34)] outline-none backdrop-blur-xl transition duration-300 focus-visible:ring-2 focus-visible:ring-theme-accent/80 sm:min-w-92 sm:hover:-translate-y-1 sm:hover:border-theme-accent/30 sm:hover:shadow-[0_30px_90px_rgb(0_0_0_/0.42)] lg:min-w-100"
    >
      {showImages && item.image ? (
        <div className="relative aspect-[1.18/1] overflow-hidden bg-white/[0.035]">
          <Image
            src={item.image.src}
            alt={itemImageAlt}
            fill
            sizes="(max-width: 640px) 82vw, (max-width: 1024px) 23rem, 25rem"
            className="object-cover transition duration-700 ease-out sm:group-hover:scale-105 mask-b-from-50%"
          />
          <div
            className="absolute inset-0 bg-linear-to-t from-theme-bg/88 via-theme-bg/16 to-black/18"
            aria-hidden="true"
          />
          <div
            className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-theme-bg via-theme-bg/82 to-transparent"
            aria-hidden="true"
          />
          <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-theme-accent/28 bg-theme-bg/48 px-3 py-2 text-[0.64rem] font-medium uppercase tracking-[0.2em] text-theme-text-soft shadow-[0_14px_40px_rgb(0_0_0_/0.24)] backdrop-blur-xl">
            <ChefHat
              className="size-3.5 text-theme-accent"
              aria-hidden="true"
            />
            {t("featured")}
          </div>
        </div>
      ) : null}

      <div className="relative z-10 -mt-8 space-y-5 p-5 pt-0 sm:p-6 sm:pt-0">
        <div className="flex items-start justify-between gap-5">
          <h3 className="font-serif text-2xl leading-7 text-theme-text-strong sm:text-[1.7rem]">
            {itemName}
          </h3>
          {showPrices ? (
            <p className="shrink-0 rounded-full border border-theme-accent/22 bg-theme-accent/10 px-3 py-1.5 text-sm font-semibold text-theme-accent">
              {formatPrice(item.price, item.currency)}
            </p>
          ) : null}
        </div>

        <p className="text-sm leading-6 text-theme-text-muted/68">
          {itemDescription}
        </p>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[0.66rem] font-medium uppercase tracking-[0.14em] text-theme-text-muted/76"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
