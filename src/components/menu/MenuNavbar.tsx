"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { UtensilsCrossed } from "lucide-react";
import { getRestaurantInitials } from "@/lib/getRestaurantInitials";

type MenuNavbarProps = {
  restaurantName?: string;
  restaurantTagline?: string;
  logoSrc?: string;
};

export default function MenuNavbar({
  restaurantName = "Luna Bistro",
  restaurantTagline = "Dining & Cocktails",
  logoSrc,
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

  const scrollToMenu = () => {
    document.getElementById("menu")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <header className="sticky inset-x-0 top-0 z-40 h-0 px-3 pt-3 sm:px-5 sm:pt-5">
      <nav
        aria-label="Restaurant navigation"
        className={[
          "mx-auto flex max-w-5xl items-center justify-between rounded-full border px-3.5 transition-all duration-500 ease-out sm:px-5",
          isScrolled
            ? "h-16 border-menu-brass-muted/20 bg-menu-night/82 shadow-[var(--shadow-menu-navbar-scrolled)] backdrop-blur-2xl"
            : "h-[4.75rem] border-white/10 bg-black/10 shadow-[var(--shadow-menu-navbar-top)] backdrop-blur-md",
        ].join(" ")}
      >
        <a
          href="#top"
          className="group flex min-h-11 min-w-0 items-center gap-3 rounded-full pr-2 outline-none transition focus-visible:ring-2 focus-visible:ring-menu-brass/70"
          aria-label={`${restaurantName} home`}
        >
          <span className="relative grid size-10 shrink-0 place-items-center overflow-hidden rounded-full border border-menu-brass/30 bg-menu-logo-wash/10 shadow-inner shadow-white/10">
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
            <span className="block truncate font-serif text-lg leading-none tracking-wide text-menu-parchment sm:text-xl">
              {restaurantName}
            </span>
            <span className="mt-1 hidden text-[0.64rem] uppercase tracking-[0.32em] text-menu-brass/70 sm:block">
              {restaurantTagline}
            </span>
          </span>
        </a>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={scrollToMenu}
            className="inline-flex items-center gap-2 min-h-11 rounded-full border border-menu-brass/35 bg-menu-brass/12 px-4 text-sm font-medium tracking-wide text-menu-warm-white shadow-[inset_0_1px_0_rgb(255_255_255_/_0.12)] transition duration-300 hover:-translate-y-0.5 hover:border-menu-brass-hover/70 hover:bg-menu-brass/22 hover:text-white hover:shadow-[var(--shadow-menu-button-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-menu-brass/80 active:translate-y-0 sm:px-5"
            aria-label="View menu"
          >
            <UtensilsCrossed size={18} strokeWidth={1.6} />
            <span className="hidden sm:inline" aria-hidden="true">
              Menu
            </span>
          </button>
        </div>
      </nav>
    </header>
  );
}
