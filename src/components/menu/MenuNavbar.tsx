"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { getRestaurantInitials } from "@/lib/getRestaurantInitials";
import LanguageSwitcher from "./LanguageSwitcher";
import MenuThemeSwitcher from "./MenuThemeSwitcher";
import { SupportedLanguage } from "@/types/menu";
import type { MenuTheme, MenuThemeId } from "@/types/theme";

type MenuNavbarProps = {
  restaurantName?: string;
  restaurantTagline?: string;
  logoSrc?: string;
  language: SupportedLanguage;
  themes: MenuTheme[];
  activeThemeId: MenuThemeId;
  onLanguageChange: () => void;
  onThemeChange: (themeId: MenuThemeId) => void;
};

export default function MenuNavbar({
  restaurantName = "Luna Bistro",
  restaurantTagline = "Dining & Cocktails",
  logoSrc,
  language,
  themes,
  activeThemeId,
  onLanguageChange,
  onThemeChange,
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

  return (
    <header className="sticky inset-x-0 top-3 z-50 h-0 px-3 sm:px-5 sm:top-5">
      <nav
        aria-label="Restaurant navigation"
        className={[
          "mx-auto flex max-w-5xl items-center justify-between rounded-full border px-3.5 transition-all duration-500 ease-out sm:px-5",
          isScrolled
            ? "h-14 border-menu-brass-muted/15 bg-menu-night/75 shadow-(--shadow-menu-navbar-scrolled) backdrop-blur-2xl"
            : "h-19 border-menu-brass-muted/15 bg-menu-night/12 shadow-(--shadow-menu-navbar-top) backdrop-blur-md",
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
          {/* <MenuThemeSwitcher
            themes={themes}
            activeThemeId={activeThemeId}
            onThemeChange={onThemeChange}
          /> */}
          <LanguageSwitcher
            activeLanguage={language}
            onLanguageChange={onLanguageChange}
          />
        </div>
      </nav>
    </header>
  );
}
