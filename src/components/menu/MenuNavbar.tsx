import Image from "next/image";
import { getRestaurantInitials } from "@/lib/getRestaurantInitials";
import LanguageSwitcher from "./LanguageSwitcher";
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
  onLanguageChange,
}: MenuNavbarProps) {
  const restaurantInitials = getRestaurantInitials(restaurantName);

  return (
    <header className="absolute inset-x-0 top-2 z-50 px-3 sm:top-4 sm:px-5">
      <nav
        aria-label="Restaurant navigation"
        className="mx-auto flex h-15 max-w-5xl items-center justify-between rounded-full border border-menu-brass-muted/12 bg-menu-night/14 px-3 shadow-[0_12px_36px_rgb(0_0_0_/0.12)] backdrop-blur-md transition-all duration-500 ease-out sm:h-16 sm:px-4"
      >
        <a
          href="#top"
          className="group flex min-h-10 min-w-0 items-center gap-2.5 rounded-full pr-2 outline-none transition focus-visible:ring-2 focus-visible:ring-menu-brass/70"
          aria-label={`${restaurantName} home`}
        >
          <span className="relative grid size-8 shrink-0 place-items-center overflow-hidden rounded-full border border-menu-brass/20 bg-menu-logo-wash/8 sm:size-8.5">
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
              <span className="font-serif text-[0.8rem] tracking-[0.16em] text-menu-logo-wash">
                {restaurantInitials}
              </span>
            )}
          </span>
          <span className="min-w-0">
            <span className="block truncate font-serif text-[0.95rem] leading-none tracking-wide text-menu-parchment sm:text-base">
              {restaurantName}
            </span>
            <span className="mt-1 hidden text-[0.6rem] uppercase tracking-[0.28em] text-menu-brass/64 sm:block">
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
