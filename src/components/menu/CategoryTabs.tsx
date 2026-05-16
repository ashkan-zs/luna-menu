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
      className="sticky top-20 z-30 border-y border-white/10 bg-menu-night/80 px-4 py-3 shadow-[0_18px_50px_rgb(0_0_0_/0.28)] backdrop-blur-xl sm:top-21 sm:px-5"
      aria-label="Menu Categories"
    >
      <div
        ref={tabsRef}
        className="flex items-center gap-2 overflow-x-auto scroll-smooth [-ms-overflow-style:none] scrollbar-none [&::-webkit-scrollbar]:hidden"
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
                "shrink-0 rounded-full border px-4 py-2 font-medium text-[0.68rem] uppercase tracking-[0.22em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-menu-brass/80 sm:px-5",
                isActive
                  ? "border-menu-brass/40 bg-menu-brass/10 text-menu-brass shadow-(--shadow-menu-button-hover)"
                  : "border-white/10 bg-white/4.5 text-menu-cream/68 hover:border-menu-brass/28 hover:text-menu-warm-white",
              ].join(" ")}
            >
              {category.label[language]}
            </button>
          );
        })}
      </div>
    </nav>
  );
}