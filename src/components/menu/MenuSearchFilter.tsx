import type { ComponentType, SVGProps } from "react";
import {
  CheckCircle2,
  Flame,
  Leaf,
  Search,
  SlidersHorizontal,
  Sparkles,
} from "lucide-react";
import type { SupportedLanguage } from "@/types/menu";

type MenuSearchFilterProps = {
  query: string;
  featuredOnly: boolean;
  availableOnly: boolean;
  vegetarianOnly: boolean;
  spicyOnly: boolean;
  resultCount: number;
  language: SupportedLanguage;
  onQueryChange: (query: string) => void;
  onFeaturedOnlyChange: (featuredOnly: boolean) => void;
  onAvailableOnlyChange: (availableOnly: boolean) => void;
  onVegetarianOnlyChange: (vegetarianOnly: boolean) => void;
  onSpicyOnlyChange: (spicyOnly: boolean) => void;
};

const copy = {
  en: {
    eyebrow: "Menu Discovery",
    searchLabel: "Search menu",
    searchPlaceholder: "Search dishes, ingredients, notes...",
    featured: "Signature",
    available: "Available",
    vegetarian: "Vegetarian",
    spicy: "Spicy",
    result: "dish available",
    results: "dishes available",
  },
  tr: {
    eyebrow: "Menü Keşfi",
    searchLabel: "Menüde ara",
    searchPlaceholder: "Yemek, içerik, not ara...",
    featured: "İmza",
    available: "Mevcut",
    vegetarian: "Vejetaryen",
    spicy: "Acılı",
    result: "ürün mevcut",
    results: "ürün mevcut",
  },
} satisfies Record<SupportedLanguage, Record<string, string>>;

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
  language,
  onQueryChange,
  onFeaturedOnlyChange,
  onAvailableOnlyChange,
  onVegetarianOnlyChange,
  onSpicyOnlyChange,
}: MenuSearchFilterProps) {
  const labels = copy[language];
  const resultLabel = resultCount === 1 ? labels.result : labels.results;
  const filters = [
    {
      label: labels.featured,
      active: featuredOnly,
      icon: Sparkles,
      onClick: () => onFeaturedOnlyChange(!featuredOnly),
    },
    {
      label: labels.available,
      active: availableOnly,
      icon: CheckCircle2,
      onClick: () => onAvailableOnlyChange(!availableOnly),
    },
    {
      label: labels.vegetarian,
      active: vegetarianOnly,
      icon: Leaf,
      onClick: () => onVegetarianOnlyChange(!vegetarianOnly),
    },
    {
      label: labels.spicy,
      active: spicyOnly,
      icon: Flame,
      onClick: () => onSpicyOnlyChange(!spicyOnly),
    },
  ];

  return (
    <section
      aria-label={labels.searchLabel}
      className="relative mb-12"
    >
      <div
        className="pointer-events-none absolute inset-x-8 -top-8 h-24 bg-[radial-gradient(circle_at_50%_0%,rgb(var(--menu-brass-rgb)/0.12),transparent_62%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-4xl space-y-4">
        <div className="flex items-end justify-between gap-5 px-1">
          <label htmlFor="menu-search" className="block">
            <span className="block text-[0.64rem] font-medium uppercase tracking-[0.32em] text-menu-brass/70">
              {labels.eyebrow}
            </span>
            <span className="mt-1 block text-xs text-menu-cream/44">
              {resultCount} {resultLabel}
            </span>
          </label>
        </div>

        <div className="relative">
          <Search
            aria-hidden="true"
            className="pointer-events-none absolute left-5 top-1/2 size-4 -translate-y-1/2 text-menu-brass/68"
            strokeWidth={1.7}
          />
          <input
            id="menu-search"
            type="search"
            value={query}
            onChange={(event) => onQueryChange(event.target.value)}
            placeholder={labels.searchPlaceholder}
            className="min-h-13 w-full rounded-full border border-white/10 bg-white/[0.055] pl-12 pr-12 text-sm text-menu-ivory shadow-[0_16px_55px_rgb(0_0_0_/0.18)] outline-none backdrop-blur-xl transition duration-300 placeholder:text-menu-cream/38 focus:border-menu-brass/38 focus:bg-menu-night/46 focus:ring-2 focus:ring-menu-brass/18"
          />
          <SlidersHorizontal
            aria-hidden="true"
            className="pointer-events-none absolute right-5 top-1/2 size-4 -translate-y-1/2 text-menu-cream/38"
            strokeWidth={1.6}
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
        "inline-flex min-h-10 shrink-0 items-center justify-center gap-2 rounded-full border px-3.5 text-[0.66rem] font-medium uppercase tracking-[0.15em] transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-menu-brass/70 sm:min-h-9",
        active
          ? "border-menu-brass/32 bg-menu-brass/12 text-menu-brass shadow-[0_10px_30px_rgb(var(--menu-brass-rgb)/0.12)]"
          : "border-white/8 bg-white/[0.035] text-menu-cream/56 hover:border-menu-brass/22 hover:text-menu-cream/78",
      ].join(" ")}
    >
      <Icon className="size-3.5" aria-hidden="true" strokeWidth={1.7} />
      {label}
    </button>
  );
}
