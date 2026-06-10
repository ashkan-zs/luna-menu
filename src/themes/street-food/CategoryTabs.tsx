"use client";

import type { ComponentType, SVGProps } from "react";
import { useEffect, useRef } from "react";
import {
  BadgePercent,
  CupSoda,
  Hamburger,
  Plus,
  Popcorn,
  Salad,
  Sandwich,
  Utensils,
} from "lucide-react";
import { useLocale } from "next-intl";

import type { Locale } from "@/types/i18n";
import type { CategoryTabsProps } from "@/types/theme";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

const CATEGORY_ICONS: Record<string, IconComponent> = {
  burgers: Hamburger,
  "burger-sides": Popcorn,
  doners: Sandwich,
  "doner-menus": Utensils,
  "economic-menus": BadgePercent,
  appetizers: Salad,
  drinks: CupSoda,
  sauces: Plus,
  extras: Plus,
};

export default function StreetFoodCategoryTabs({
  categories,
  activeCategoryId,
  onCategoryClick,
}: CategoryTabsProps) {
  const locale = useLocale() as Locale;
  const tabsRef = useRef<HTMLDivElement | null>(null);
  const buttonRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  useEffect(() => {
    const activeButton = buttonRefs.current[activeCategoryId];
    const scroller = tabsRef.current;

    if (!activeButton || !scroller) {
      return;
    }

    const targetLeft =
      activeButton.offsetLeft -
      scroller.clientWidth / 2 +
      activeButton.clientWidth / 2;

    scroller.scrollTo({
      left: Math.max(0, targetLeft),
      behavior: "smooth",
    });
  }, [activeCategoryId]);

  return (
    <nav
      aria-label="Menu categories"
      className="sticky top-0 z-30 mb-7 border-b rounded-3xl border-theme-accent/10 bg-theme-bg/92 px-4 py-3 shadow-[0_14px_34px_rgb(15_23_42/0.08)] backdrop-blur-xl sm:px-8 lg:px-12"
    >
      <div
        ref={tabsRef}
        className="mx-auto flex max-w-7xl items-start gap-2.5 overflow-x-auto scroll-smooth py-1 [-ms-overflow-style:none] scrollbar-none [&::-webkit-scrollbar]:hidden"
      >
        {categories.map((category) => {
          const isActive = category.id === activeCategoryId;
          const Icon = CATEGORY_ICONS[category.id] ?? Utensils;

          return (
            <button
              key={category.id}
              ref={(node) => {
                buttonRefs.current[category.id] = node;
              }}
              type="button"
              aria-pressed={isActive}
              onClick={() => onCategoryClick(category.id)}
              className={[
                "group grid min-h-21 w-18 shrink-0 grid-rows-[2.75rem_1fr] place-items-center gap-1 rounded-[1.35rem] border px-2 py-2 text-center transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-theme-accent sm:w-22 lg:flex lg:min-h-12 lg:w-auto lg:min-w-max lg:grid-rows-none lg:justify-start lg:gap-2.5 lg:rounded-full lg:px-4 lg:py-1.5 lg:text-left",
                isActive
                  ? "border-theme-accent bg-theme-accent text-theme-on-accent shadow-[inset_0_0_0_1px_rgb(255_255_255/0.22)]"
                  : "border-theme-accent/10 bg-paper text-theme-text-muted hover:border-theme-accent/24 hover:bg-theme-brand hover:text-theme-text-strong",
              ].join(" ")}
            >
              <span
                className={[
                  "grid size-11 place-items-center rounded-full transition duration-200 lg:size-8",
                  isActive
                    ? "bg-white/18"
                    : "bg-theme-brand text-theme-accent group-hover:bg-white",
                ].join(" ")}
                aria-hidden="true"
              >
                <Icon className="size-5 lg:size-4" strokeWidth={2.1} />
              </span>

              <span className="flex max-w-full items-center justify-center text-[0.66rem] font-black leading-[0.95] tracking-0 lg:text-sm lg:leading-none">
                <span className="line-clamp-2 break-words lg:line-clamp-1 lg:whitespace-nowrap">
                  {category.label[locale]}
                </span>
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
