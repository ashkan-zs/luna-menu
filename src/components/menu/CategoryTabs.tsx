"use client";

import { useEffect, useRef } from "react";
import type { Category, SupportedLanguage } from "@/types/menu";

type CategoryTabsProps = {
  categories: Category[];
  activeCategory: string;
  language: SupportedLanguage;
  onCategoryClick: (categoryId: string) => void;
};

export default function CategoryTabs({
  categories,
  activeCategory,
  language,
  onCategoryClick,
}: CategoryTabsProps) {
  const tabsRef = useRef<HTMLDivElement | null>(null);
  const buttonRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  useEffect(() => {
    const activeButton = buttonRefs.current[activeCategory];

    if (!activeButton) return;

    activeButton.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [activeCategory]);

  return (
    <nav
      className="sticky top-0 z-30 border-b border-menu-brass/10 bg-menu-night/36 px-5 py-2 shadow-[0_10px_28px_rgb(0_0_0_/0.12)] backdrop-blur-md sm:px-8 lg:px-12"
      aria-label="Menu Categories"
    >
      <div
        className="pointer-events-none absolute inset-x-0 -top-8 h-8 bg-linear-to-b from-transparent to-menu-night/36"
        aria-hidden="true"
      />
      <div
        ref={tabsRef}
        className="mx-auto flex max-w-7xl items-center gap-5 overflow-x-auto scroll-smooth [-ms-overflow-style:none] scrollbar-none [&::-webkit-scrollbar]:hidden"
      >
        {categories.map((category) => {
          const isActive = activeCategory === category.id;

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
                "relative min-h-9 shrink-0 px-0.5 py-2 text-[0.66rem] font-medium uppercase tracking-[0.24em] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-menu-brass/70",
                isActive
                  ? "text-menu-warm-white"
                  : "text-menu-cream/52 hover:text-menu-cream/78",
              ].join(" ")}
            >
              {category.label[language]}
              <span
                className={[
                  "absolute inset-x-0 bottom-0 mx-auto h-px rounded-full bg-menu-brass transition-all duration-300",
                  isActive
                    ? "w-full opacity-80 shadow-[0_0_14px_rgb(var(--menu-brass-rgb)/0.2)]"
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
