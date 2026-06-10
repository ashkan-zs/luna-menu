"use client";

import { Search } from "lucide-react";
import { useTranslations } from "next-intl";

import type { MenuSearchFilterThemeProps } from "@/types/theme";

export default function StreetFoodSearchFilter({
  query,
  resultCount,
  onQueryChange,
}: MenuSearchFilterThemeProps) {
  const t = useTranslations("Menu");

  return (
    <section aria-label={t("searchLabel")} className="relative mb-8">
      <div className="mx-auto max-w-5xl space-y-4">
        <label htmlFor="menu-search" className="block px-1">
          <span className="block text-[0.64rem] font-black uppercase tracking-[0.18em] text-theme-accent">
            {t("searchEyebrow")}
          </span>
          <span className="mt-1 block text-xs font-bold text-theme-text-muted">
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
            className="min-h-13 w-full rounded-[1.35rem] border border-theme-accent/12 bg-paper pl-12 pr-4 text-sm font-bold text-theme-text-strong shadow-sm outline-none transition placeholder:text-theme-text-muted/52 focus:border-theme-accent/42 focus:ring-2 focus:ring-theme-accent/18"
          />
          <Search
            aria-hidden="true"
            className="pointer-events-none absolute left-5 top-1/2 size-4 -translate-y-1/2 text-theme-accent"
            strokeWidth={2.1}
          />
        </div>
      </div>
    </section>
  );
}
