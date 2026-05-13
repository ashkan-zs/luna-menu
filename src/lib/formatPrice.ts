type Currency = "USD" | "TRY" | "EUR";

export function formatPrice(price: number, currency: Currency = "USD", locale = "en-US") {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(price);
}
