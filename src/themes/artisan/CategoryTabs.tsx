"use client";

import { useEffect, useRef } from "react";
import { CategoryTabsProps } from "@/types/theme";
import { useLocale } from "next-intl";
import { Locale } from "@/types/i18n";

export default function ArtisanCategoryTabs({
  categories,
  activeCategoryId,
  onCategoryClick,
}: CategoryTabsProps) {
  const locale = useLocale() as Locale;
  const buttonRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const tabsRef = useRef<HTMLDivElement | null>(null);

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
      className="sticky top-0 z-30 border-y border-theme-accent/10 bg-theme-bg/88 px-5 py-3 shadow-[0_14px_34px_rgb(0_0_0/0.12)] backdrop-blur-md sm:px-8 lg:px-12"
      aria-label="Menu categories"
    >
      <div
        ref={tabsRef}
        className="mx-auto flex max-w-7xl snap-x gap-2 overflow-x-auto [-ms-overflow-style:none] scrollbar-none [&::-webkit-scrollbar]:hidden"
      >
        {categories.map((category) => {
          const isActive = category.id === activeCategoryId;

          return (
            <button
              key={category.id}
              ref={(node) => {
                buttonRefs.current[category.id] = node;
              }}
              type="button"
              aria-current={isActive}
              onClick={() => onCategoryClick(category.id)}
              className={[
                "min-h-11 snap-start whitespace-nowrap rounded-full border px-4 text-sm font-semibold transition",
                isActive
                  ? "border-theme-accent bg-theme-accent text-theme-bg"
                  : "border-theme-accent/12 bg-theme-text/5 text-theme-text-muted/66 hover:border-theme-accent/35 hover:text-theme-accent",
              ].join(" ")}
            >
              {category.label[locale]}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
