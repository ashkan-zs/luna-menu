"use client";

import { CheckCircle2, Flame, Leaf, Search, Sparkles } from "lucide-react";
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
    eyebrow: "Find your table favorite",
    searchLabel: "Search menu",
    searchPlaceholder: "Search dishes, ingredients, allergens...",
    featured: "Featured",
    available: "Available",
    vegetarian: "Vegetarian",
    spicy: "Spicy",
    result: "item",
    results: "items",
  },
  tr: {
    eyebrow: "Masadaki favorini bul",
    searchLabel: "Menüde ara",
    searchPlaceholder: "Yemek, içerik, alerjen ara...",
    featured: "Öne çıkan",
    available: "Mevcut",
    vegetarian: "Vejetaryen",
    spicy: "Acılı",
    result: "ürün",
    results: "ürün",
  },
} satisfies Record<SupportedLanguage, Record<string, string>>;

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

  return (
    <section
      aria-label={labels.searchLabel}
      className="mb-10 rounded-[1.75rem] border border-white/10 bg-white/5.5 p-3 shadow-[0_24px_70px_rgb(0_0_0_/0.26)] backdrop-blur-2xl sm:p-4"
    >
      <div className="grid gap-3 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
        <div className="relative">
          <label
            htmlFor="menu-search"
            className="mb-2 ps-4 block text-[0.66rem] font-medium uppercase tracking-[0.26em] text-menu-brass/75"
          >
            {labels.eyebrow}
          </label>
          <div className="relative">
            <Search
              aria-hidden="true"
              className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-menu-brass/72"
              strokeWidth={1.8}
            />
            <input
              id="menu-search"
              type="search"
              value={query}
              onChange={(event) => onQueryChange(event.target.value)}
              placeholder={labels.searchPlaceholder}
              className="min-h-11 w-full rounded-full border border-white/10 bg-menu-night/44 pl-11 pr-4 text-sm text-menu-ivory outline-none transition placeholder:text-menu-cream/42 focus:border-menu-brass/45 focus:bg-menu-night/62 focus:ring-2 focus:ring-menu-brass/25"
            />
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-end">
          <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:justify-end">
            <button
              type="button"
              aria-pressed={featuredOnly}
              onClick={() => onFeaturedOnlyChange(!featuredOnly)}
              className={[
                "inline-flex min-h-11 items-center justify-center gap-2 rounded-full border px-4 text-xs font-medium uppercase tracking-[0.14em] transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-menu-brass/80",
                featuredOnly
                  ? "border-menu-brass/45 bg-menu-brass/18 text-menu-warm-white shadow-(--shadow-menu-button-hover)"
                  : "border-white/10 bg-white/4.5 text-menu-cream/68 hover:border-menu-brass/30 hover:text-menu-warm-white",
              ].join(" ")}
            >
              <Sparkles size={15} aria-hidden="true" strokeWidth={1.7} />
              {labels.featured}
            </button>
            <button
              type="button"
              aria-pressed={availableOnly}
              onClick={() => onAvailableOnlyChange(!availableOnly)}
              className={[
                "inline-flex min-h-11 items-center justify-center gap-2 rounded-full border px-4 text-xs font-medium uppercase tracking-[0.14em] transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-menu-brass/80",
                availableOnly
                  ? "border-emerald-200/25 bg-emerald-300/12 text-emerald-100"
                  : "border-white/10 bg-white/4.5 text-menu-cream/68 hover:border-menu-brass/30 hover:text-menu-warm-white",
              ].join(" ")}
            >
              <CheckCircle2 size={15} aria-hidden="true" strokeWidth={1.7} />
              {labels.available}
            </button>
            <button
              type="button"
              aria-pressed={vegetarianOnly}
              onClick={() => onVegetarianOnlyChange(!vegetarianOnly)}
              className={[
                "inline-flex min-h-11 items-center justify-center gap-2 rounded-full border px-4 text-xs font-medium uppercase tracking-[0.14em] transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-menu-brass/80",
                vegetarianOnly
                  ? "border-emerald-200/25 bg-emerald-300/12 text-emerald-100"
                  : "border-white/10 bg-white/4.5 text-menu-cream/68 hover:border-menu-brass/30 hover:text-menu-warm-white",
              ].join(" ")}
            >
              <Leaf size={15} aria-hidden="true" strokeWidth={1.7} />
              {labels.vegetarian}
            </button>
            <button
              type="button"
              aria-pressed={spicyOnly}
              onClick={() => onSpicyOnlyChange(!spicyOnly)}
              className={[
                "inline-flex min-h-11 items-center justify-center gap-2 rounded-full border px-4 text-xs font-medium uppercase tracking-[0.14em] transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-menu-brass/80",
                spicyOnly
                  ? "border-red-300/25 bg-red-400/12 text-red-100"
                  : "border-white/10 bg-white/4.5 text-menu-cream/68 hover:border-menu-brass/30 hover:text-menu-warm-white",
              ].join(" ")}
            >
              <Flame size={15} aria-hidden="true" strokeWidth={1.7} />
              {labels.spicy}
            </button>
          </div>

          <p className="rounded-full border border-white/10 bg-black/10 px-3 py-2 text-center text-xs font-medium text-menu-cream/64 sm:min-w-24">
            {resultCount} {resultLabel}
          </p>
        </div>
      </div>
    </section>
  );
}
