"use client";

import type { ComponentType, SVGProps } from "react";
import { CheckCircle2, Flame, Leaf, Search, Sparkles } from "lucide-react";
import { useTranslations } from "next-intl";
import type { MenuSearchFilterThemeProps } from "@/types/theme";

type FilterChipProps = {
  label: string;
  active: boolean;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  onClick: () => void;
};

export default function ArtisanSearchFilter({
  query,
  featuredOnly,
  availableOnly,
  vegetarianOnly,
  spicyOnly,
  resultCount,
  onQueryChange,
  onFeaturedOnlyChange,
  onAvailableOnlyChange,
  onVegetarianOnlyChange,
  onSpicyOnlyChange,
}: MenuSearchFilterThemeProps) {
  const t = useTranslations("Menu");
  const filters = [
    {
      label: t("featured"),
      active: featuredOnly,
      icon: Sparkles,
      onClick: () => onFeaturedOnlyChange(!featuredOnly),
    },
    {
      label: t("available"),
      active: availableOnly,
      icon: CheckCircle2,
      onClick: () => onAvailableOnlyChange(!availableOnly),
    },
    {
      label: t("vegetarian"),
      active: vegetarianOnly,
      icon: Leaf,
      onClick: () => onVegetarianOnlyChange(!vegetarianOnly),
    },
    {
      label: t("spicy"),
      active: spicyOnly,
      icon: Flame,
      onClick: () => onSpicyOnlyChange(!spicyOnly),
    },
  ];

  return (
    <section aria-label={t("searchLabel")} className="relative mb-12">
      <div className="mx-auto max-w-4xl space-y-4">
        <label htmlFor="menu-search" className="block px-1">
          <span className="block text-[0.64rem] font-semibold uppercase tracking-[0.22em] text-forest-green/80">
            {t("searchEyebrow")}
          </span>
          <span className="mt-1 block text-xs text-text-secondary">
            {t("results", { count: resultCount })}
          </span>
        </label>

        <div className="relative">
          <input
            id="menu-search"
            type="search"
            value={query}
            onChange={(event) => onQueryChange(event.target.value)}
            placeholder={t("searchPlaceholder")}
            className="min-h-13 w-full rounded-full border border-espresso/10 bg-paper pl-12 pr-12 text-sm text-text-primary shadow-[0_14px_40px_rgb(59_42_36/0.08)] outline-none transition placeholder:text-text-secondary/55 focus:border-forest-green/40 focus:ring-2 focus:ring-forest-green/15"
          />
          <Search
            aria-hidden="true"
            className="pointer-events-none absolute left-5 top-1/2 size-4 -translate-y-1/2 text-forest-green/70"
            strokeWidth={1.8}
          />
        </div>

        <div className="-mx-5 overflow-x-auto px-5 pb-1 [-ms-overflow-style:none] scrollbar-none sm:mx-0 sm:px-1 [&::-webkit-scrollbar]:hidden">
          <div className="flex w-max items-center gap-2.5">
            {filters.map((filter) => (
              <FilterChip
                key={filter.label}
                label={filter.label}
                active={filter.active}
                icon={filter.icon}
                onClick={filter.onClick}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FilterChip({ label, active, icon: Icon, onClick }: FilterChipProps) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={[
        "inline-flex min-h-11 shrink-0 cursor-pointer items-center justify-center gap-2 rounded-full border px-4 text-[0.66rem] font-semibold uppercase tracking-[0.12em] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-green/50",
        active
          ? "border-forest-green bg-forest-green text-paper"
          : "border-espresso/10 bg-surface/60 text-text-secondary hover:border-forest-green/30 hover:text-forest-green",
      ].join(" ")}
    >
      <Icon className="size-3.5" aria-hidden="true" strokeWidth={1.8} />
      {label}
    </button>
  );
}
