import Image from "next/image";
import { Clock, MapPin, Navigation, Phone } from "lucide-react";
import { useTranslations } from "next-intl";

import { OPENING_HOUR_DAY_LABELS } from "@/config/openingHours";
import { getLocalizedValue } from "@/lib/i18n/getLocalizedValue";
import type { RestaurantInfoThemeProps } from "@/types/theme";

export default function StreetFoodRestaurantInfoSection({
  restaurant,
  locale,
}: RestaurantInfoThemeProps) {
  const t = useTranslations("RestaurantInfo");
  const storyContent = restaurant.content?.story;
  const eyebrow = storyContent?.eyebrow
    ? getLocalizedValue(storyContent.eyebrow, locale)
    : t("eyebrow");
  const heading = storyContent?.title
    ? getLocalizedValue(storyContent.title, locale)
    : restaurant.name;
  const story = storyContent?.body
    ? getLocalizedValue(storyContent.body, locale)
    : getLocalizedValue(restaurant.description, locale);
  const atmosphere = storyContent?.atmosphere
    ? getLocalizedValue(storyContent.atmosphere, locale)
    : getLocalizedValue(restaurant.tagline, locale);
  const hours = restaurant.openingHours.map((item) => ({
    days: OPENING_HOUR_DAY_LABELS[locale][item.day],
    time: item.closed ? t("closed") : `${item.open} - ${item.close}`,
  }));
  const address = [
    restaurant.location.address,
    restaurant.location.city,
    restaurant.location.country,
  ]
    .filter(Boolean)
    .join(", ");
  const phoneHref = restaurant.contact.phone
    ? `tel:${restaurant.contact.phone.replaceAll(" ", "")}`
    : undefined;

  return (
    <section
      id="restaurant-info"
      aria-labelledby="restaurant-info-heading"
      className="px-5 pb-14 pt-6 sm:px-8 lg:px-12"
    >
      <div className="mx-auto grid max-w-7xl gap-4 lg:grid-cols-[1fr_0.86fr]">
        <div className="relative min-h-96 overflow-hidden rounded-4xl bg-paper shadow-sm">
          <Image
            src={restaurant.coverImage}
            alt={`${restaurant.name} atmosphere`}
            fill
            sizes="(max-width: 1024px) 100vw, 56vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-theme-text-strong/72" />
          <div className="relative flex min-h-96 flex-col justify-end p-5 sm:p-7">
            <p className="mb-3 inline-flex w-fit rounded-full bg-theme-accent px-3 py-1 text-xs font-black uppercase tracking-[0.12em] text-theme-on-accent">
              {eyebrow}
            </p>
            <h2
              id="restaurant-info-heading"
              className="max-w-2xl font-heading text-4xl font-black leading-none text-white sm:text-5xl"
            >
              {heading}
            </h2>
            <p className="mt-4 max-w-2xl text-sm font-medium leading-7 text-white/82 sm:text-base">
              {story}
            </p>
          </div>
        </div>

        <aside className="rounded-4xl border border-theme-accent/12 bg-paper p-5 shadow-sm sm:p-6">
          <div className="flex items-start justify-between gap-4 border-b border-theme-accent/12 pb-5">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.14em] text-theme-accent">
                {atmosphere}
              </p>
              <h3 className="mt-2 font-heading text-3xl font-black text-theme-text-strong">
                {t("hoursTitle")}
              </h3>
            </div>
            <span className="grid size-11 shrink-0 place-items-center rounded-full bg-theme-brand text-theme-accent">
              <Clock className="size-5" aria-hidden="true" />
            </span>
          </div>

          <div className="divide-y divide-theme-accent/10">
            {hours.map((item) => (
              <div
                key={item.days}
                className="flex items-center justify-between gap-4 py-3"
              >
                <span className="text-sm font-bold text-theme-text-muted">
                  {item.days}
                </span>
                <span className="font-heading text-lg font-black text-theme-text-strong">
                  {item.time}
                </span>
              </div>
            ))}
          </div>

          <address className="mt-5 space-y-3 not-italic">
            {address ? (
              <InfoLine
                icon={<MapPin className="size-4" aria-hidden="true" />}
                label={t("addressLabel")}
                value={address}
              />
            ) : null}
            {restaurant.contact.phone ? (
              <InfoLine
                icon={<Phone className="size-4" aria-hidden="true" />}
                label={t("phoneLabel")}
                value={restaurant.contact.phone}
                href={phoneHref}
              />
            ) : null}
          </address>

          {restaurant.location.mapsUrl ? (
            <a
              href={restaurant.location.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-[1.25rem] bg-theme-accent px-5 text-sm font-black text-theme-on-accent transition hover:bg-theme-accent-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-theme-accent"
            >
              <Navigation className="size-4" aria-hidden="true" />
              {t("maps")}
            </a>
          ) : null}
        </aside>
      </div>
    </section>
  );
}

function InfoLine({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <>
      <span className="grid size-9 shrink-0 place-items-center rounded-full bg-theme-brand text-theme-accent">
        {icon}
      </span>
      <span>
        <span className="block text-[0.64rem] font-black uppercase tracking-[0.14em] text-theme-accent">
          {label}
        </span>
        <span className="mt-1 block text-sm font-bold leading-6 text-theme-text-muted">
          {value}
        </span>
      </span>
    </>
  );

  if (href) {
    return (
      <a href={href} className="flex gap-3">
        {content}
      </a>
    );
  }

  return <div className="flex gap-3">{content}</div>;
}
