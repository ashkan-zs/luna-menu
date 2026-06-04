import { Locale, LocalizedString } from "@/types/i18n";

export function getLocalizedValue(value: LocalizedString, locale: Locale) {
  return value[locale] ?? value.en;
}