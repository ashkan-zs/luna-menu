import Image from "next/image";
import { Clock, MapPin, Navigation, Phone } from "lucide-react";
import { useTranslations } from "next-intl";
import type { RestaurantInfoThemeProps } from "@/types/theme";
import type { Locale } from "@/types/i18n";
import { getLocalizedValue } from "@/lib/i18n/getLocalizedValue";

const closedLabel = {
  en: "Closed",
  tr: "Kapalı",
} satisfies Record<Locale, string>;

export default function ArtisanRestaurantInfoSection({
  restaurant,
  locale,
}: RestaurantInfoThemeProps) {
  const t = useTranslations("RestaurantInfo");
  const hours = restaurant.openingHours.map((item) => ({
    days: getLocalizedValue(item.day, locale),
    time: item.closed ? closedLabel[locale] : `${item.open} - ${item.close}`,
  }));
  const phoneHref = restaurant.contact.phone
    ? `tel:${restaurant.contact.phone.replaceAll(" ", "")}`
    : undefined;
  const address = [
    restaurant.location.address,
    restaurant.location.city,
    restaurant.location.country,
  ].join(", ");
  const storyContent = restaurant.content?.story;
  const eyebrow = storyContent?.eyebrow
    ? getLocalizedValue(storyContent.eyebrow, locale)
    : t("eyebrow");
  const heading = storyContent?.title
    ? getLocalizedValue(storyContent.title, locale)
    : t("heading");
  const story = storyContent?.body
    ? getLocalizedValue(storyContent.body, locale)
    : t("story");
  const atmosphere = storyContent?.atmosphere
    ? getLocalizedValue(storyContent.atmosphere, locale)
    : t("atmosphere");

  return (
    <section
      id="restaurant-info"
      aria-labelledby="restaurant-info-heading"
      className="px-5 pb-16 pt-8 sm:px-8 lg:px-10"
    >
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative min-h-120 overflow-hidden rounded-4xl border border-theme-accent/14">
          <Image
            src={restaurant.coverImage}
            alt={`${restaurant.name} atmosphere`}
            fill
            sizes="(max-width: 1024px) 100vw, 52vw"
            className="object-cover opacity-76"
          />
          <div className="absolute inset-0 bg-matte-black/70" />
          <div className="relative flex min-h-120 flex-col justify-end p-6 sm:p-8">
            <p className="mb-3 text-xs uppercase tracking-[0.22em] text-wood">
              {eyebrow}
            </p>
            <h2
              id="restaurant-info-heading"
              className="max-w-2xl font-serif text-5xl uppercase leading-none text-paper sm:text-6xl"
            >
              {heading}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-surface/75">
              {story}
            </p>
          </div>
        </div>

        <aside className="rounded-4xl border border-theme-accent/14 bg-theme-text/4 p-5 shadow-[0_24px_80px_rgb(0_0_0/0.2)] sm:p-7">
          <div className="flex items-center justify-between gap-4 border-b border-theme-accent/14 pb-5">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-theme-accent">
                {atmosphere}
              </p>
              <h3 className="mt-2 font-serif text-3xl uppercase text-theme-text">
                {t("hoursTitle")}
              </h3>
            </div>
            <Clock className="size-5 text-theme-accent" aria-hidden="true" />
          </div>

          <div className="divide-y divide-theme-accent/12">
            {hours.map((item) => (
              <div
                key={item.days}
                className="flex items-center justify-between gap-4 py-4"
              >
                <span className="text-sm text-theme-text-muted/68">{item.days}</span>
                <span className="font-serif text-lg text-theme-text">
                  {item.time}
                </span>
              </div>
            ))}
          </div>

          <address className="mt-6 space-y-4 not-italic">
            <InfoLine
              icon={<MapPin className="size-4" aria-hidden="true" />}
              label={t("addressLabel")}
              value={address}
            />
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
              className="mt-7 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-theme-accent/30 bg-theme-accent/14 px-5 text-xs font-semibold uppercase tracking-[0.16em] text-theme-text transition hover:bg-theme-accent/22"
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
      <span className="text-theme-accent">{icon}</span>
      <span>
        <span className="block text-[0.66rem] uppercase tracking-[0.18em] text-theme-accent/80">
          {label}
        </span>
        <span className="mt-1 block text-sm leading-6 text-theme-text-muted/72">
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
