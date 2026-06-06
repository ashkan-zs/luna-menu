import Image from "next/image";
import { getRestaurantInitials } from "@/lib/getRestaurantInitials";
import LanguageSwitcher from "./LanguageSwitcher";

import { Restaurant } from "@/types/restaurant";
import { getLocalizedValue } from "@/lib/i18n/getLocalizedValue";
import { Locale } from "@/types/i18n";

type MenuNavbarProps = {
  restaurant: Restaurant;
  locale: Locale;
  logoSrc?: string;
  // themes: MenuTheme[];
  // activeThemeId: MenuThemeId;
  // onThemeChange: (themeId: MenuThemeId) => void;
};

export default function MenuNavbar({
  restaurant,
  locale,
  logoSrc,
}: MenuNavbarProps) {
  const restaurantInitials = getRestaurantInitials(restaurant.name);
  const tagline = getLocalizedValue(restaurant.tagline, locale);

  return (
    <header className="absolute inset-x-0 top-2 z-50 px-3 sm:top-4 sm:px-5">
      <nav
        aria-label="Restaurant navigation"
        className="mx-auto flex h-15 max-w-5xl items-center justify-between sm:rounded-full sm:border sm:border-theme-accent-muted/12 sm:bg-theme-bg/14 px-3 sm:shadow-[0_12px_36px_rgb(0_0_0_/0.12)] sm:backdrop-blur-md transition-all duration-500 ease-out sm:h-16 sm:px-4"
      >
        <a
          href="#top"
          className="group flex min-h-10 min-w-0 items-center gap-2.5 rounded-full pr-2 outline-none transition focus-visible:ring-2 focus-visible:ring-theme-accent/70"
          aria-label={`${restaurant.name} home`}
        >
          <span className="relative grid size-8 shrink-0 place-items-center overflow-hidden rounded-full border border-theme-accent/20 bg-theme-brand/8 sm:size-8.5">
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
              <span className="font-serif text-[0.8rem] tracking-[0.16em] text-theme-brand">
                {restaurantInitials}
              </span>
            )}
          </span>
          <span className="min-w-0">
            <span className="block truncate font-serif text-[0.95rem] leading-none tracking-wide text-theme-text sm:text-base">
              {restaurant.name}
            </span>
            <span className="mt-1 hidden text-[0.6rem] uppercase tracking-[0.28em] text-theme-accent/64 sm:block">
              {tagline}
            </span>
          </span>
        </a>

        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageSwitcher />
        </div>
      </nav>
    </header>
  );
}
