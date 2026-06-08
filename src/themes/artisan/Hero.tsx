"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useTranslations } from "next-intl";
import { getLocalizedValue } from "@/lib/i18n/getLocalizedValue";
import type { MenuHeroThemeProps } from "@/types/theme";

export default function ArtisanHero({
  restaurant,
  locale,
}: MenuHeroThemeProps) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 120]);
  const t = useTranslations("Menu");
  const tagline = getLocalizedValue(restaurant.tagline, locale);
  const heroContent = restaurant.content?.hero;

  const eyebrow = heroContent?.eyebrow
    ? getLocalizedValue(heroContent.eyebrow, locale)
    : restaurant.name;

  const title = heroContent?.title
    ? getLocalizedValue(heroContent.title, locale)
    : restaurant.name;

  const description = heroContent?.description
    ? getLocalizedValue(heroContent.description, locale)
    : getLocalizedValue(restaurant.description, locale);

  return (
    <section className="relative min-h-svh overflow-hidden bg-matte-black text-paper">
      <motion.div style={{ y }} className="absolute inset-0">
        <Image
          src={restaurant.coverImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-70"
        />
      </motion.div>

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(22_20_18/0.25)_0%,rgb(22_20_18/0.54)_52%,rgb(22_20_18/0.88)_100%)]" />

      <div className="relative mx-auto flex min-h-[92svh] w-full max-w-6xl flex-col justify-between px-5 py-7 sm:px-8 lg:px-10">
        <header className="flex items-center justify-between gap-4">
          <div className="font-heading text-3xl uppercase">
            {restaurant.name}
          </div>
          <p className="max-w-32 text-right text-[0.68rem] uppercase leading-4 text-paper/80 sm:max-w-none">
            {tagline}
          </p>
        </header>

        <div className="pb-10 pt-28 sm:pb-16">
          <p className="mb-4 text-xs uppercase text-paper/75">{eyebrow}</p>
          <h1 className="max-w-3xl font-heading text-[clamp(4.5rem,20vw,8rem)] uppercase leading-[1.1] text-paper">
            {title}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-paper/82 sm:text-lg">
            {description} menu
          </p>
          <a
            href="#menu"
            className="mt-9 inline-flex min-h-12 items-center rounded-full border border-paper/45 bg-paper px-6 text-sm font-semibold uppercase text-forest-green shadow-[0_18px_50px_rgb(0_0_0/0.24)] transition hover:bg-surface focus:outline-none focus-visible:ring-2 focus-visible:ring-paper"
          >
            {t("exploreMenu")}
          </a>
        </div>
      </div>
    </section>
  );
}
