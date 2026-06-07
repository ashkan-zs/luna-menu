import type { Locale } from "@/types/i18n";
import type { OpeningHourDay } from "@/types/restaurant";

export const OPENING_HOUR_DAYS = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
  "weekdays",
  "weekend",
] as const satisfies readonly OpeningHourDay[];

export const OPENING_HOUR_DAY_LABELS = {
  en: {
    monday: "Monday",
    tuesday: "Tuesday",
    wednesday: "Wednesday",
    thursday: "Thursday",
    friday: "Friday",
    saturday: "Saturday",
    sunday: "Sunday",
    weekdays: "Weekdays",
    weekend: "Weekend",
  },
  tr: {
    monday: "Pazartesi",
    tuesday: "Salı",
    wednesday: "Çarşamba",
    thursday: "Perşembe",
    friday: "Cuma",
    saturday: "Cumartesi",
    sunday: "Pazar",
    weekdays: "Hafta içi",
    weekend: "Hafta sonu",
  },
} satisfies Record<Locale, Record<OpeningHourDay, string>>;

export const OPENING_HOUR_DAY_SCHEMA_OPTIONS = OPENING_HOUR_DAYS.map((day) => ({
  title: OPENING_HOUR_DAY_LABELS.en[day],
  value: day,
}));
