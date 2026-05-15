"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { getRestaurantInitials } from "@/lib/getRestaurantInitials";
import LanguageSwitcher from "./LanguageSwitcher";
import { SupportedLanguage } from "@/types/menu";

type MenuNavbarProps = {
  restaurantName?: string;
  restaurantTagline?: string;
  logoSrc?: string;
  language: SupportedLanguage;
  onLanguageChange: () => void;
};

export default function MenuNavbar({
  restaurantName = "Luna Bistro",
  restaurantTagline = "Dining & Cocktails",
  logoSrc,
  language,
  onLanguageChange,
}: MenuNavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const restaurantInitials = getRestaurantInitials(restaurantName);

  useEffect(() => {
    const updateNavbar = () => {
      setIsScrolled(window.scrollY > 24);
    };

    updateNavbar();
    window.addEventListener("scroll", updateNavbar, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateNavbar);
    };
  }, []);

  //   <nav
  //   className={[
  //     "mx-auto flex h-14 max-w-5xl items-center justify-between rounded-2xl border px-3.5 transition-all duration-500 ease-out sm:px-5",
  //     isScrolled
  //       ? "border-menu-brass-muted/15 bg-menu-night/75 shadow-[var(--shadow-menu-navbar-scrolled)] backdrop-blur-2xl"
  //       : "border-white/10 bg-black/20 backdrop-blur-md",
  //   ].join(" ")}
  // ></nav>

  return (
    <header className="sticky inset-x-0 top-0 z-50 h-0 px-3 pt-3 sm:px-5 sm:pt-5">
      <nav
        aria-label="Restaurant navigation"
        className={[
          "mx-auto flex max-w-5xl items-center justify-between rounded-full border px-3.5 transition-all duration-500 ease-out sm:px-5",
          isScrolled
            ? "h-14 border-menu-brass-muted/15 bg-menu-night/75 shadow-(--shadow-menu-navbar-scrolled) backdrop-blur-2xl"
            : "h-19 border-white/10 bg-black/10 shadow-(--shadow-menu-navbar-top) backdrop-blur-md",
        ].join(" ")}
      >
        <a
          href="#top"
          className="group flex min-h-11 min-w-0 items-center gap-3 rounded-full pr-2 outline-none transition focus-visible:ring-2 focus-visible:ring-menu-brass/70"
          aria-label={`${restaurantName} home`}
        >
          <span className="relative grid size-9 shrink-0 place-items-center overflow-hidden rounded-full border border-menu-brass/25 bg-menu-logo-wash/10">
            {logoSrc ? (
              <Image
                src={logoSrc}
                alt=""
                fill
                sizes="40px"
                className="object-cover"
                aria-hidden="true"
              />
            ) : (
              <span className="font-serif text-sm tracking-[0.18em] text-menu-logo-wash">
                {restaurantInitials}
              </span>
            )}
          </span>
          <span className="min-w-0">
            <span className="block truncate font-serif text-base leading-none tracking-wide text-menu-parchment sm:text-lg">
              {restaurantName}
            </span>
            <span className="mt-1 hidden text-[0.64rem] uppercase tracking-[0.32em] text-menu-brass/70 sm:block">
              {restaurantTagline}
            </span>
          </span>
        </a>

        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageSwitcher
            activeLanguage={language}
            onLanguageChange={onLanguageChange}
          />
        </div>
      </nav>
    </header>
  );
}
