"use client";

import { useLocale } from "next-intl";

import { formatMenuItemPrice } from "@/lib/menuPrice";
import type { Locale } from "@/types/i18n";
import type { MenuItem } from "@/types/menu";

type StreetFoodSimpleMenuItemRowProps = {
  item: MenuItem;
  showPrices: boolean;
};

export default function StreetFoodSimpleMenuItemRow({
  item,
  showPrices,
}: StreetFoodSimpleMenuItemRowProps) {
  const locale = useLocale() as Locale;
  const formattedPrice = formatMenuItemPrice(item, locale);
  const isAvailable = item.available !== false;

  return (
    <div
      className={[
        "rounded-[1.15rem] border border-theme-accent/10 bg-paper px-4 py-3 shadow-sm",
        isAvailable ? "" : "opacity-55",
      ].join(" ")}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h4 className="font-heading text-xl font-black leading-none text-theme-text-strong">
            {item.name[locale]}
          </h4>
          <p className="mt-1 line-clamp-2 text-xs font-medium leading-5 text-theme-text-muted">
            {item.description[locale]}
          </p>
        </div>

        {showPrices && formattedPrice ? (
          <p className="shrink-0 font-heading text-lg font-black leading-none text-theme-accent">
            {formattedPrice}
          </p>
        ) : null}
      </div>
    </div>
  );
}
