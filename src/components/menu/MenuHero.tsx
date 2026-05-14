"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Camera, MapPin } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import { SupportedLanguage } from "@/types/menu";

type MenuHeroProps = {
  restaurantName?: string;
  tagline?: string;
  description?: string;
  backgroundImage?: string;
  logoSrc?: string;
  language: SupportedLanguage;
  onLanguageSwitch: () => void;
};

const copy = {
  en: {
    exploreMenu: "Explore Menu",
    quickLinks: "Restaurant quick links",
    location: "Location",
  },
  tr: {
    exploreMenu: "Menüyü İncele",
    quickLinks: "Restoran hızlı bağlantıları",
    location: "Konum",
  },
} satisfies Record<SupportedLanguage, Record<string, string>>;

function getRestaurantInitials(name: string) {
  const words = name.trim().split(/\s+/).filter(Boolean);

  if (words.length === 0) {
    return "R";
  }

  if (words.length === 1) {
    return words[0].slice(0, 2).toUpperCase();
  }

  return words
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

export default function MenuHero({
  restaurantName = "Luna Bistro",
  tagline = "Modern Mediterranean Dining",
  description = "Seasonal dishes, crafted cocktails, and warm hospitality.",
  backgroundImage = "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1800&q=80",
  logoSrc,
  language = "en",
  onLanguageSwitch,
}: MenuHeroProps) {
  const [isVisible, setIsVisible] = useState(false);
  const restaurantInitials = getRestaurantInitials(restaurantName);
  const labels = copy[language];

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

  return (
    <section
      className="relative flex min-h-[94svh] items-center overflow-hidden px-5 pb-14 pt-32 sm:px-8 lg:px-12"
      aria-labelledby="menu-hero-heading"
    >
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <Image
          src={backgroundImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className="scale-105 object-cover motion-safe:duration-[4200ms] motion-safe:ease-out sm:scale-110"
        />
      </div>
      <div className="menu-hero-glow absolute inset-0" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/44 via-menu-night/48 to-menu-night"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-menu-night to-transparent"
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
        <div className="relative mb-7 grid size-20 place-items-center overflow-hidden rounded-full border border-menu-brass/35 bg-menu-night/38 shadow-[0_18px_60px_rgb(0_0_0_/_0.36)] backdrop-blur-xl">
          {logoSrc ? (
            <Image
              src={logoSrc}
              alt={`${restaurantName} logo`}
              fill
              sizes="80px"
              className="object-cover"
            />
          ) : (
            <span className="font-serif text-xl tracking-[0.2em] text-menu-logo-wash">
              {restaurantInitials}
            </span>
          )}
        </div>

        <p className="mb-4 text-xs font-medium uppercase tracking-[0.38em] text-menu-brass">
          {tagline}
        </p>
        <h1
          id="menu-hero-heading"
          className="max-w-3xl font-serif text-5xl leading-[0.92] tracking-wide text-menu-ivory sm:text-7xl"
        >
          {restaurantName}
        </h1>
        <p className="mt-6 max-w-xl text-base leading-7 text-menu-cream/78 sm:text-lg">
          {description}
        </p>

        <div className="mt-9 flex flex-col items-center gap-5">
          <button
            type="button"
            onClick={scrollToMenu}
            className="min-h-12 rounded-full border border-menu-brass/45 bg-menu-brass/16 px-7 text-sm font-medium tracking-wide text-menu-warm-white shadow-[var(--shadow-menu-button-hover)] transition duration-300 hover:-translate-y-0.5 hover:border-menu-brass-hover/80 hover:bg-menu-brass/24 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-menu-brass/80 active:translate-y-0"
          >
            {labels.exploreMenu}
          </button>

          <ul
            className="flex flex-wrap items-center justify-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-menu-cream/70"
            aria-label={labels.quickLinks}
          >
            <li>
              <a
                href="https://maps.google.com/?q=Luna%20Bistro"
                className="flex min-h-10 items-center gap-2 rounded-full border border-white/10 bg-white/[0.045] px-3 transition hover:border-menu-brass/35 hover:text-menu-warm-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-menu-brass/70"
                target="_blank"
                rel="noreferrer"
              >
                <MapPin size={14} aria-hidden="true" />
                {labels.location}
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                className="flex min-h-10 items-center gap-2 rounded-full border border-white/10 bg-white/[0.045] px-3 transition hover:border-menu-brass/35 hover:text-menu-warm-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-menu-brass/70"
                target="_blank"
                rel="noreferrer"
              >
                <Camera size={14} aria-hidden="true" />
                Instagram
              </a>
            </li>
            <li>
              <LanguageSwitcher
                activeLanguage={language}
                onLanguageChange={onLanguageSwitch}
              />
              {/* <span className="flex min-h-10 items-center gap-2 rounded-full border border-white/10 bg-white/[0.045] px-3">
                <Languages size={14} aria-hidden="true" />
                EN
              </span> */}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
