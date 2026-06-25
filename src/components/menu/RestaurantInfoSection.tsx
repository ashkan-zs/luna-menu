"use client";

import Image from "next/image";
import {
  AtSign,
  Clock,
  MapPin,
  Navigation,
  Phone,
  Quote,
  Sparkles,
} from "lucide-react";

import type { ReactNode } from "react";
import { motion, HTMLMotionProps, useReducedMotion } from "motion/react";
import { useTranslations } from "next-intl";
import { Restaurant } from "@/types/restaurant";
import { Locale } from "@/types/i18n";
import { getLocalizedValue } from "@/lib/i18n/getLocalizedValue";
import { OPENING_HOUR_DAY_LABELS } from "@/config/openingHours";

type InfoSectionProps = { restaurant: Restaurant; locale: Locale };

const closedLabel = {
  en: "Closed",
  tr: "Kapalı",
} satisfies Record<Locale, string>;

export default function RestaurantInfoSection({
  restaurant,
  locale,
}: InfoSectionProps) {
  const t = useTranslations("RestaurantInfo");
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
  const quote = storyContent?.quote
    ? getLocalizedValue(storyContent.quote, locale)
    : t("quote");
  const quoteBy = storyContent?.quoteBy
    ? getLocalizedValue(storyContent.quoteBy, locale)
    : t("quoteBy");
  const atmosphere = storyContent?.atmosphere
    ? getLocalizedValue(storyContent.atmosphere, locale)
    : t("atmosphere");
  const shouldReduceMotion = useReducedMotion();
  const motionProps: HTMLMotionProps<"section"> = shouldReduceMotion
    ? { initial: false }
    : {
        initial: { opacity: 0, y: 28 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-12% 0px" },
        transition: { duration: 0.55, ease: "easeOut" },
      };
  const hours = restaurant.openingHours.map((item) => ({
    days: OPENING_HOUR_DAY_LABELS[locale][item.day],
    time: item.closed ? closedLabel[locale] : `${item.open} - ${item.close}`,
  }));

  return (
    <motion.section
      id="restaurant-info"
      aria-labelledby="restaurant-info-heading"
      className="relative isolate overflow-hidden px-5 pb-16 pt-4 sm:px-8 sm:pb-20 lg:px-12"
      {...motionProps}
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-10 -z-10 h-80 bg-[radial-gradient(circle_at_18%_30%,rgb(var(--theme-accent-rgb)/0.14),transparent_34%),radial-gradient(circle_at_82%_10%,rgb(255_255_255/0.07),transparent_28%)]"
        aria-hidden="true"
      />

      <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[minmax(0,1.08fr)_minmax(22rem,0.92fr)] lg:items-stretch">
        <div className="relative min-h-136 overflow-hidden rounded-[2.25rem] border border-white/10 bg-theme-bg/55 shadow-[0_30px_100px_rgb(0_0_0_/0.38)] sm:rounded-[2.5rem]">
          <Image
            src={restaurant.coverImage}
            alt={`${restaurant.name} dining room atmosphere`}
            fill
            sizes="(max-width: 1024px) 100vw, 58vw"
            className="scale-105 object-cover opacity-72 transition duration-700 ease-out motion-safe:hover:scale-110"
          />
          <div
            className="absolute inset-0 bg-linear-to-t from-theme-bg via-theme-bg/62 to-black/24"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgb(var(--theme-accent-rgb)/0.2),transparent_28%),linear-gradient(120deg,rgb(0_0_0/0.1),rgb(0_0_0/0.46))]"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "18px 18px",
            }}
            aria-hidden="true"
          />

          <div className="relative flex min-h-136 flex-col justify-end p-6 sm:p-8 lg:p-10">
            <div className="mb-8 inline-flex w-fit items-center gap-3 rounded-full border border-theme-accent/24 bg-theme-bg/44 px-4 py-2 text-[0.66rem] font-medium uppercase tracking-[0.24em] text-theme-accent backdrop-blur-xl">
              <Sparkles className="size-3.5" aria-hidden="true" />
              {eyebrow}
            </div>

            <p className="text-sm uppercase tracking-[0.34em] text-theme-text-muted/60">
              {restaurant.name}
            </p>
            <h2
              id="restaurant-info-heading"
              className="mt-3 max-w-2xl font-serif text-4xl leading-[0.98] text-theme-text-strong sm:text-5xl lg:text-6xl"
            >
              {heading}
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-theme-text-muted/76 sm:text-lg">
              {story}
            </p>

            {quote ? (
              <figure className="mt-8 max-w-xl rounded-3xl border border-white/10 bg-white/5.5 p-5 shadow-[0_20px_70px_rgb(0_0_0_/0.28)] backdrop-blur-xl">
                <Quote
                  className="size-5 text-theme-accent"
                  aria-hidden="true"
                />
                <blockquote className="mt-4 font-serif text-xl leading-8 text-theme-text-soft">
                  {quote}
                </blockquote>
                <figcaption className="mt-4 text-[0.68rem] font-medium uppercase tracking-[0.24em] text-theme-accent/78">
                  {quoteBy}
                </figcaption>
              </figure>
            ) : null}
          </div>
        </div>

        <aside className="relative lg:-ml-10 lg:py-10">
          <div className="overflow-hidden rounded-4xl border border-white/10 bg-white/5.5 p-5 shadow-[0_24px_90px_rgb(0_0_0_/0.32)] backdrop-blur-2xl sm:rounded-[2.25rem] sm:p-6 lg:p-7">
            <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-5">
              <div>
                <p className="text-[0.66rem] font-medium uppercase tracking-[0.24em] text-theme-accent/78">
                  {atmosphere}
                </p>
                <h3 className="mt-2 font-serif text-2xl text-theme-text-strong">
                  {t("hoursTitle")}
                </h3>
              </div>
              <span className="grid size-12 shrink-0 place-items-center rounded-full border border-theme-accent/24 bg-theme-accent/10 text-theme-accent">
                <Clock className="size-5" aria-hidden="true" />
              </span>
            </div>

            <div className="divide-y divide-white/10">
              {hours.map((item) => (
                <div
                  key={item.days}
                  className="flex items-center justify-between gap-4 py-4"
                >
                  <span className="text-sm text-theme-text-muted/66">
                    {item.days}
                  </span>
                  <span className="font-serif text-lg text-theme-text-soft">
                    {item.time}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-3xl border border-theme-accent/16 bg-theme-bg/42 p-5">
              <h3 className="font-serif text-2xl text-theme-text-strong">
                {t("contactTitle")}
              </h3>

              <address className="mt-5 space-y-4 not-italic">
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

              <div className="mt-6 grid gap-3">
                {phoneHref ? (
                  <a
                    href={phoneHref}
                    className="inline-flex min-h-13 items-center justify-center gap-3 rounded-full border border-theme-accent/36 bg-theme-accent/18 px-5 text-sm font-medium uppercase tracking-[0.16em] text-theme-on-accent shadow-(--shadow-theme-button-hover) transition duration-300 hover:-translate-y-0.5 hover:border-theme-accent-hover/70 hover:bg-theme-accent/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-theme-accent/80"
                  >
                    <Phone className="size-4" aria-hidden="true" />
                    {t("callRestaurant")}
                  </a>
                ) : null}
                <div className="grid grid-cols-2 gap-3">
                  {restaurant.location.mapsUrl ? (
                    <a
                      href={restaurant.location.mapsUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5.5 px-4 text-xs font-medium uppercase tracking-[0.14em] text-theme-text-muted/76 transition duration-300 hover:border-theme-accent/34 hover:text-theme-text-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-theme-accent/80"
                    >
                      <Navigation className="size-4" aria-hidden="true" />
                      {t("maps")}
                    </a>
                  ) : null}
                  {restaurant.socials?.instagram ? (
                    <a
                      href={restaurant.socials.instagram}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5.5 px-4 text-xs font-medium uppercase tracking-[0.14em] text-theme-text-muted/76 transition duration-300 hover:border-theme-accent/34 hover:text-theme-text-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-theme-accent/80"
                    >
                      <AtSign className="size-4" aria-hidden="true" />
                      {t("instagram")}
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </motion.section>
  );
}

function InfoLine({
  icon,
  label,
  value,
  href,
}: {
  icon: ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <>
      <span className="grid size-10 shrink-0 place-items-center rounded-full border border-theme-accent/18 bg-theme-accent/10 text-theme-accent">
        {icon}
      </span>
      <span className="min-w-0">
        <span className="block text-[0.64rem] font-medium uppercase tracking-[0.22em] text-theme-accent/70">
          {label}
        </span>
        <span className="mt-1 block text-sm leading-6 text-theme-text-muted/76">
          {value}
        </span>
      </span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className="flex min-h-12 items-center gap-3 rounded-2xl transition duration-300 hover:text-theme-text-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-theme-accent/80"
      >
        {content}
      </a>
    );
  }

  return <div className="flex min-h-12 items-center gap-3">{content}</div>;
}
