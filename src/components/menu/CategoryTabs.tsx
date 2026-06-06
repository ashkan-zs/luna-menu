"use client";

import { useEffect, useRef } from "react";
import type { Locale } from "@/types/i18n";
import { useLocale } from "next-intl";
import { CategoryTabsProps } from "@/types/theme";

export default function CategoryTabs({
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
      className="sticky top-0 z-30 border-b border-theme-accent/10 bg-theme-bg/36 px-5 py-2 shadow-[0_10px_28px_rgb(0_0_0_/0.12)] backdrop-blur-md sm:px-8 lg:px-12"
      aria-label="Menu Categories"
    >
      <div
        className="pointer-events-none absolute inset-x-0 -top-8 h-8 bg-linear-to-b from-transparent to-theme-bg/36"
        aria-hidden="true"
      />
      <div
        ref={tabsRef}
        className="mx-auto flex max-w-7xl items-center gap-5 overflow-x-auto scroll-smooth [-ms-overflow-style:none] scrollbar-none [&::-webkit-scrollbar]:hidden"
      >
        {categories.map((category) => {
          const isActive = activeCategoryId === category.id;

          return (
            <button
              key={category.id}
              ref={(element) => {
                buttonRefs.current[category.id] = element;
              }}
              type="button"
              onClick={() => onCategoryClick(category.id)}
              aria-pressed={isActive}
              className={[
                "relative min-h-9 shrink-0 px-0.5 py-2 text-[0.66rem] font-medium uppercase tracking-[0.24em] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-theme-accent/70",
                isActive
                  ? "text-theme-text-soft"
                  : "text-theme-text-muted/52 hover:text-theme-text-muted/78",
              ].join(" ")}
            >
              {category.label[locale]}
              <span
                className={[
                  "absolute inset-x-0 bottom-0 mx-auto h-px rounded-full bg-theme-accent transition-all duration-300",
                  isActive
                    ? "w-full opacity-80 shadow-[0_0_14px_rgb(var(--theme-accent-rgb)/0.2)]"
                    : "w-0 opacity-0",
                ].join(" ")}
                aria-hidden="true"
              />
            </button>
          );
        })}
      </div>
    </nav>
  );
}
