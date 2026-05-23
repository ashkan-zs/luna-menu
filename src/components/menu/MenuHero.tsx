"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { BookOpenText, UtensilsCrossed } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { RESTAURANT } from "@/data/restaurant";
import { SupportedLanguage } from "@/types/menu";

export default function MenuHero() {
  const [isVisible, setIsVisible] = useState(false);
  const t = useTranslations("Menu");
  const locale = useLocale() as SupportedLanguage;

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setIsVisible(true);
    });

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, []);

  const scrollToMenu = () => {
    document.getElementById("menu")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const scrollToStory = () => {
    document.getElementById("restaurant-info")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section
      className="relative flex min-h-[94svh] items-center overflow-hidden px-5 pb-14 pt-40 sm:px-8 lg:px-12"
      aria-labelledby="menu-hero-heading"
    >
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <Image
          src={RESTAURANT.backgroundImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className="scale-105 object-cover motion-safe:duration-4200 motion-safe:ease-out sm:scale-110"
        />
      </div>
      <div className="menu-hero-glow absolute inset-0" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-linear-to-b from-black/44 via-menu-night/48 to-menu-night"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-0 h-36 bg-linear-to-t from-menu-night to-transparent"
        aria-hidden="true"
      />

      <div
        className={[
          "relative mx-auto flex w-full max-w-4xl flex-col items-center text-center transition duration-1000 motion-reduce:transition-none",
          isVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-4 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100",
        ].join(" ")}
      >
        <p className="mb-5 text-xs font-medium uppercase tracking-[0.42em] text-menu-brass">
          {t("welcome")}
        </p>
        <h1
          id="menu-hero-heading"
          className="max-w-3xl font-serif text-6xl leading-[0.88] tracking-wide text-menu-ivory sm:text-8xl"
        >
          {RESTAURANT.name}
        </h1>
        <div
          className="mt-6 h-px w-20 bg-linear-to-r from-transparent via-menu-brass/80 to-transparent"
          aria-hidden="true"
        />
        <p className="mt-6 text-xs font-medium uppercase tracking-[0.32em] text-menu-brass/78">
          {RESTAURANT.tagline[locale]}
        </p>
        <p className="mt-4 max-w-xl text-base leading-7 text-menu-cream/78 sm:text-lg">
          {RESTAURANT.description[locale]}
        </p>

        <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
          <button
            type="button"
            onClick={scrollToMenu}
            className="flex items-center gap-2 cursor-pointer min-h-12 rounded-full border border-menu-brass/45 bg-menu-brass/16 px-7 text-sm font-medium tracking-wide text-menu-warm-white hover:shadow-(--shadow-menu-button-hover) transition duration-300 hover:-translate-y-0.5 hover:border-menu-brass-hover/80 hover:bg-menu-brass/24 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-menu-brass/80 active:translate-y-0"
          >
            <UtensilsCrossed size={18} strokeWidth={1.6} />
            {t("exploreMenu")}
          </button>

          <button
            type="button"
            onClick={scrollToStory}
            className="flex min-h-12 cursor-pointer items-center gap-2 rounded-full border border-white/12 bg-white/4.5 px-7 text-sm font-medium tracking-wide text-menu-cream/76 transition duration-300 hover:-translate-y-0.5 hover:border-menu-brass/35 hover:text-menu-warm-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-menu-brass/70 active:translate-y-0"
          >
            <BookOpenText size={18} strokeWidth={1.6} />
            {t("story")}
          </button>
        </div>
      </div>
    </section>
  );
}
