"use client";

import Image from "next/image";
import { Sparkles } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { formatPrice } from "@/lib/formatPrice";
import type { Locale } from "@/types/i18n";
import type { FeaturedMenuThemeProps } from "@/types/theme";

const copy = {
  en: {
    eyebrow: "Oteki Menu",
    title: "Browse slowly with the rhythm of the day.",
    description:
      "A warm table experience from breakfast to coffee pauses, handmade pasta, and shareable pizza.",
  },
  tr: {
    eyebrow: "Oteki Menu",
    title: "Browse slowly with the rhythm of the day.",
    description:
      "A warm table experience from breakfast to coffee pauses, handmade pasta, and shareable pizza.",
  },
} satisfies Record<Locale, { eyebrow: string; title: string; description: string }>;

export default function ArtisanFeaturedSection({
  items,
  onSelect,
}: FeaturedMenuThemeProps) {
  const locale = useLocale() as Locale;
  const t = useTranslations("Menu");

  if (items.length === 0) {
    return null;
  }

  return (
    <section
      className="mx-auto max-w-6xl px-5 py-12 sm:px-8 lg:px-10"
      aria-labelledby="featured-heading"
    >
      <div className="mb-9 max-w-3xl">
        <p className="mb-3 text-xs uppercase text-burgundy">
          {copy[locale].eyebrow}
        </p>
        <h2
          id="featured-heading"
          className="font-heading text-5xl uppercase leading-none text-espresso sm:text-7xl"
        >
          {copy[locale].title}
        </h2>
        <p className="mt-5 text-base leading-8 text-text-secondary">
          {copy[locale].description}
        </p>
      </div>

      {/* <div className="grid gap-4 md:grid-cols-3">
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => onSelect(item)}
            className="group overflow-hidden rounded-3xl border border-theme-accent/14 bg-theme-bg/44 text-left transition duration-300 hover:-translate-y-1 hover:border-theme-accent/35"
          >
            <div className="relative aspect-[1.18/1] overflow-hidden">
              <Image
                src={item.image.src}
                alt={item.image.alt[locale]}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-theme-bg/82 via-transparent to-transparent" />
              <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-theme-bg/70 px-3 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-theme-text backdrop-blur-md">
                <Sparkles className="size-3" aria-hidden="true" />
                {t("featured")}
              </span>
            </div>
            <div className="space-y-3 p-5">
              <h3 className="font-serif text-3xl uppercase leading-none text-theme-text">
                {item.name[locale]}
              </h3>
              <p className="text-sm leading-6 text-theme-text-muted/70">
                {item.description[locale]}
              </p>
              <p className="font-serif text-2xl text-theme-accent">
                {formatPrice(item.price)}
              </p>
            </div>
          </button>
        ))}
      </div> */}
    </section>
  );
}
