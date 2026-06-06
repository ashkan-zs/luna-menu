import type { Currency } from "@/types/menu";

const localeByCurrency: Record<Currency, string> = {
  USD: "en-us",
  TRY: "tr-TR",
  EUR: "de-DE",
};

export function formatPrice(price: number, currency: Currency = "TRY") {
  return new Intl.NumberFormat(localeByCurrency[currency], {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(price);
}
