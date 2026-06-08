import { formatPrice } from "@/lib/formatPrice";
import type { Locale } from "@/types/i18n";
import type { Currency, MenuItem, MenuPriceOption } from "@/types/menu";

const copy = {
  en: {
    from: "From",
    prices: "Prices",
  },
  tr: {
    from: "Başlangıç",
    prices: "Fiyatlar",
  },
} satisfies Record<Locale, Record<"from" | "prices", string>>;

export type NormalizedMenuPriceOption = Required<
  Pick<MenuPriceOption, "label" | "price">
> & {
  currency: Currency;
  isDefault?: boolean;
};

export function getMenuItemPriceOptions(
  item: MenuItem,
): NormalizedMenuPriceOption[] {
  if (item.priceOptions?.length) {
    return item.priceOptions.map((option) => ({
      label: option.label,
      price: option.price,
      currency: option.currency ?? item.currency,
      isDefault: option.isDefault,
    }));
  }

  if (typeof item.price === "number") {
    return [
      {
        label: item.name,
        price: item.price,
        currency: item.currency,
      },
    ];
  }

  return [];
}

export function getMenuItemStartingPrice(item: MenuItem) {
  const priceOptions = getMenuItemPriceOptions(item);

  return priceOptions.reduce<NormalizedMenuPriceOption | undefined>(
    (lowestPriceOption, priceOption) => {
      if (!lowestPriceOption || priceOption.price < lowestPriceOption.price) {
        return priceOption;
      }

      return lowestPriceOption;
    },
    undefined,
  );
}

export function formatMenuItemPrice(item: MenuItem, locale: Locale) {
  const startingPrice = getMenuItemStartingPrice(item);

  if (!startingPrice) {
    return "";
  }

  const formattedPrice = formatPrice(startingPrice.price, startingPrice.currency);

  return item.priceOptions?.length
    ? `${copy[locale].from} ${formattedPrice}`
    : formattedPrice;
}

export function getMenuItemPriceListTitle(locale: Locale) {
  return copy[locale].prices;
}
