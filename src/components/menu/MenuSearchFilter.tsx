import type { ComponentType, SVGProps } from "react";
import { CheckCircle2, Flame, Leaf, Search, Sparkles } from "lucide-react";
import { useTranslations } from "next-intl";

type MenuSearchFilterProps = {
  query: string;
  featuredOnly: boolean;
  availableOnly: boolean;
  vegetarianOnly: boolean;
  spicyOnly: boolean;
  resultCount: number;
  onQueryChange: (query: string) => void;
  onFeaturedOnlyChange: (featuredOnly: boolean) => void;
  onAvailableOnlyChange: (availableOnly: boolean) => void;
  onVegetarianOnlyChange: (vegetarianOnly: boolean) => void;
  onSpicyOnlyChange: (spicyOnly: boolean) => void;
};

type FilterChipProps = {
  label: string;
  active: boolean;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  onClick: () => void;
};

export default function MenuSearchFilter({
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
}: MenuSearchFilterProps) {
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
      <div className="relative mx-auto max-w-4xl space-y-4">
        <div className="flex items-end justify-between gap-5 px-1">
          <label htmlFor="menu-search" className="block">
            <span className="block text-[0.64rem] font-medium uppercase tracking-[0.32em] text-theme-accent/70">
              {t("searchEyebrow")}
            </span>
            <span className="mt-1 block text-xs text-theme-text-muted/30">
              {t("results", { count: resultCount })}
            </span>
          </label>
        </div>

        <div className="relative">
          <input
            id="menu-search"
            type="search"
            value={query}
            onChange={(event) => onQueryChange(event.target.value)}
            placeholder={t("searchPlaceholder")}
            className="min-h-13 w-full rounded-full border border-white/10 bg-white/5.5 pl-12 pr-12 text-sm text-theme-text shadow-[0_16px_55px_rgb(0_0_0_/0.18)] outline-none backdrop-blur-xl transition duration-300 placeholder:text-theme-text-muted/38 focus:border-theme-accent/38 focus:bg-theme-bg/46 focus:ring-2 focus:ring-theme-accent/18"
          />
          <Search
            aria-hidden="true"
            className="pointer-events-none absolute left-5 top-1/2 size-4 -translate-y-1/2 text-theme-accent/68"
            strokeWidth={1.7}
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
        "cursor-pointer inline-flex min-h-15 shrink-0 items-center justify-center gap-2 rounded-full border px-3.5 text-[0.66rem] font-medium uppercase tracking-[0.15em] transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-theme-accent/70 sm:min-h-9",
        active
          ? "border-theme-accent/32 bg-theme-accent/12 text-theme-accent"
          : "border-background/8 bg-background/[0.035] text-theme-text-muted/56 hover:border-theme-accent/22 hover:text-theme-text-muted/78",
      ].join(" ")}
    >
      <Icon className="size-3.5" aria-hidden="true" strokeWidth={1.7} />
      {label}
    </button>
  );
}
