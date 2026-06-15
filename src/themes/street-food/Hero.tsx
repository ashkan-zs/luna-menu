import Image from "next/image";
import { Clock, MessageCircle, Phone } from "lucide-react";
import { useTranslations } from "next-intl";

import { getLocalizedValue } from "@/lib/i18n/getLocalizedValue";
import type { OpeningHourDay, Restaurant } from "@/types/restaurant";
import type { MenuHeroThemeProps } from "@/types/theme";
import LanguageSwitcher from "@/components/menu/LanguageSwitcher";

type OpeningHour = Restaurant["openingHours"][number];

const RESTAURANT_TIME_ZONE = "Europe/Istanbul";

const WEEKDAY_TO_OPENING_DAY: Record<string, OpeningHourDay> = {
  monday: "monday",
  tuesday: "tuesday",
  wednesday: "wednesday",
  thursday: "thursday",
  friday: "friday",
  saturday: "saturday",
  sunday: "sunday",
};

const WEEKDAY_DAYS: OpeningHourDay[] = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
];

function getTodayOpeningHours(openingHours: OpeningHour[]) {
  const weekday = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    timeZone: RESTAURANT_TIME_ZONE,
  })
    .format(new Date())
    .toLowerCase();

  const today = WEEKDAY_TO_OPENING_DAY[weekday];
  const fallbackDay = WEEKDAY_DAYS.includes(today) ? "weekdays" : "weekend";

  return (
    openingHours.find((hours) => hours.day === today) ??
    openingHours.find((hours) => hours.day === fallbackDay)
  );
}

function parseTimeToMinutes(time: string) {
  const [hourValue, minuteValue = "0"] = time.split(":");
  const hour = Number(hourValue);
  const minute = Number(minuteValue);

  if (!Number.isFinite(hour) || !Number.isFinite(minute)) {
    return null;
  }

  return hour * 60 + minute;
}

function getCurrentMinutes() {
  const parts = new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: RESTAURANT_TIME_ZONE,
  }).formatToParts(new Date());

  const hourPart = parts.find((part) => part.type === "hour")?.value;
  const minutePart = parts.find((part) => part.type === "minute")?.value;
  const hour = Number(hourPart);
  const minute = Number(minutePart);

  if (!Number.isFinite(hour) || !Number.isFinite(minute)) {
    return null;
  }

  return (hour === 24 ? 0 : hour) * 60 + minute;
}

function isOpenNow(openingHours?: OpeningHour) {
  if (!openingHours || openingHours.closed) {
    return false;
  }

  const openTime = parseTimeToMinutes(openingHours.open);
  const closeTime = parseTimeToMinutes(openingHours.close);
  const currentTime = getCurrentMinutes();

  if (openTime === null || closeTime === null || currentTime === null) {
    return false;
  }

  if (closeTime <= openTime) {
    return currentTime >= openTime || currentTime < closeTime;
  }

  return currentTime >= openTime && currentTime < closeTime;
}

export default function StreetFoodHero({
  restaurant,
  locale,
}: MenuHeroThemeProps) {
  const menuT = useTranslations("Menu");
  const footerT = useTranslations("MenuFooter");
  const heroContent = restaurant.content?.hero;
  const todayHours = getTodayOpeningHours(restaurant.openingHours);
  const openNow = isOpenNow(todayHours);
  const phoneHref = restaurant.contact?.phone
    ? `tel:${restaurant.contact.phone.replace(/\s/g, "")}`
    : null;

  const eyebrow = heroContent?.eyebrow
    ? getLocalizedValue(heroContent.eyebrow, locale)
    : getLocalizedValue(restaurant.tagline, locale);

  const title = heroContent?.title
    ? getLocalizedValue(heroContent.title, locale)
    : restaurant.name;

  const description = heroContent?.description
    ? getLocalizedValue(heroContent.description, locale)
    : getLocalizedValue(restaurant.description, locale);

  const todayHoursLabel = todayHours?.closed
    ? menuT("closedToday")
    : todayHours
      ? `${todayHours.open} - ${todayHours.close}`
      : null;

  return (
    <section className="relative isolate overflow-hidden rounded-b-4xl bg-theme-bg text-theme-text shadow-[0_22px_60px_rgb(var(--theme-accent-rgb)/0.18)]">
      <LanguageSwitcher
        position="bottom-right"
        variant="circle"
        color="light"
      />
      {restaurant.coverImage ? (
        <div className="absolute inset-0">
          <Image
            src={restaurant.coverImage}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center md:object-right"
          />
        </div>
      ) : null}

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgb(255_255_255/0.92)_0%,rgb(255_255_255/0.9)_42%,rgb(255_255_255/0.2)_76%),linear-gradient(180deg,rgb(255_255_255/0.28)_0%,rgb(var(--theme-bg-rgb)/0.82)_100%)]" />

      <div className="relative z-10 mx-auto grid min-h-136 max-w-7xl content-end px-5 pb-8 pt-8 sm:px-8 md:min-h-152 lg:min-h-168 lg:grid-cols-[0.46fr_0.54fr] lg:content-center lg:px-12 lg:py-14">
        <div className="max-w-xl">
          <div className="mb-9 flex items-center justify-between gap-3">
            {restaurant.logo ? (
              <div className="relative h-24 w-40 shrink-0">
                <Image
                  src={restaurant.logo}
                  alt={restaurant.name}
                  fill
                  sizes="160px"
                  className="object-contain object-left"
                />
              </div>
            ) : (
              <div className="min-w-0">
                <p className="text-3xl font-black uppercase leading-none tracking-tight text-theme-accent sm:text-4xl">
                  {restaurant.name}
                </p>
                <p className="mt-1 text-[0.68rem] font-black uppercase tracking-[0.16em] text-theme-text-muted">
                  {getLocalizedValue(restaurant.tagline, locale)}
                </p>
              </div>
            )}
          </div>

          <p className="text-3xl font-light italic leading-none text-theme-accent">
            {eyebrow}
          </p>

          <h1 className="mt-4 max-w-[11ch] text-[clamp(3.7rem,16vw,7rem)] font-black uppercase leading-[0.84] tracking-normal text-theme-text-strong">
            {title}
          </h1>

          <p className="mt-5 text-2xl font-black leading-tight text-theme-text-strong sm:text-3xl">
            {description}
          </p>

          {todayHoursLabel ? (
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <span className="inline-flex min-h-11 items-center gap-2 rounded-2xl bg-white/88 px-4 text-sm font-black uppercase text-theme-text-strong shadow-sm backdrop-blur">
                <span
                  className={`size-3 rounded-full ${
                    openNow ? "bg-emerald-500" : "bg-theme-text-muted"
                  }`}
                />
                {openNow ? menuT("openNow") : menuT("closedToday")}
              </span>

              <span className="inline-flex min-h-11 items-center gap-2 rounded-2xl bg-white/88 px-4 text-sm font-bold text-theme-text shadow-sm backdrop-blur">
                <Clock className="size-5 text-theme-text-strong" aria-hidden />
                {todayHoursLabel}
              </span>
            </div>
          ) : null}

          <div className="mt-8 flex flex-wrap gap-3">
            {restaurant.contact?.whatsapp ? (
              <a
                href={restaurant.contact.whatsapp}
                className="inline-flex min-h-14 flex-1 items-center justify-center gap-3 rounded-2xl bg-theme-accent px-5 text-base font-black text-theme-on-accent shadow-lg shadow-theme-accent/25 transition hover:bg-theme-accent-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-theme-accent sm:flex-none sm:px-9"
              >
                <MessageCircle className="size-5" aria-hidden />
                {footerT("whatsapp")}
              </a>
            ) : null}

            {phoneHref ? (
              <a
                href={phoneHref}
                className="inline-flex min-h-14 flex-1 items-center justify-center gap-3 rounded-2xl border border-(--border-blue) bg-white/82 px-5 text-base font-black text-theme-accent shadow-sm backdrop-blur transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-theme-accent sm:flex-none sm:px-9"
              >
                <Phone className="size-5" aria-hidden />
                {menuT("call")}
              </a>
            ) : null}

            {!restaurant.contact?.whatsapp && !phoneHref ? (
              <a
                href="#menu"
                className="inline-flex min-h-14 flex-1 items-center justify-center rounded-2xl bg-theme-accent px-5 text-base font-black text-theme-on-accent shadow-lg shadow-theme-accent/25 transition hover:bg-theme-accent-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-theme-accent sm:flex-none sm:px-9"
              >
                {menuT("exploreMenu")}
              </a>
            ) : null}
          </div>
        </div>

        <div className="hidden lg:block" />
      </div>

      <div className="absolute inset-x-0 bottom-0 h-20 rounded-t-[2rem] bg-linear-to-b from-transparent to-theme-bg/80" />
    </section>
  );
}
