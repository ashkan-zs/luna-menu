"use client";

import { useEffect, useState } from "react";
import type { Category, SupportedLanguage } from "@/types/menu";

type CategoryTabsProps = {
  categories?: Category[];
  language?: SupportedLanguage;
  activeCategory?: string;
  onCategoryChange?: (category: Category) => void;
};

const defaultCategories: Category[] = [
  { id: "recommended", label: { en: "Recommended", tr: "Önerilenler" } },
  { id: "breakfast", label: { en: "Breakfast", tr: "Kahvaltı" } },
  { id: "coffee", label: { en: "Coffee", tr: "Kahve" } },
  { id: "cocktails", label: { en: "Cocktails", tr: "Kokteyller" } },
  { id: "desserts", label: { en: "Desserts", tr: "Tatlılar" } },
];

export default function CategoryTabs({
  categories = defaultCategories,
  language = "en",
  activeCategory,
  onCategoryChange,
}: CategoryTabsProps) {
  const isControlled = activeCategory !== undefined;
  const [internalActiveCategory, setInternalActiveCategory] = useState(
    activeCategory ?? categories[0]?.id,
  );
  const selectedCategory = activeCategory ?? internalActiveCategory;

  useEffect(() => {
    const observedSections = categories
      .map((category) => document.getElementById(category.id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (observedSections.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (entryA, entryB) =>
              entryA.boundingClientRect.top - entryB.boundingClientRect.top,
          )[0];

        if (!visibleEntry) {
          return;
        }

        const nextCategory = categories.find(
          (category) => category.id === visibleEntry.target.id,
        );

        if (!nextCategory || selectedCategory === nextCategory.id) {
          return;
        }

        if (!isControlled) {
          setInternalActiveCategory(nextCategory.id);
        }

        onCategoryChange?.(nextCategory);
      },
      {
        rootMargin: "-120px 0px -60% 0px",
        threshold: 0.01,
      },
    );

    for (const section of observedSections) {
      observer.observe(section);
    }

    return () => {
      observer.disconnect();
    };
  }, [categories, isControlled, onCategoryChange, selectedCategory]);

  const handleCategoryClick = (category: Category) => {
    if (!isControlled) {
      setInternalActiveCategory(category.id);
    }

    onCategoryChange?.(category);

    const target = document.getElementById(category.id);

    if (!target) {
      return;
    }

    const stickyOffset = 112;
    const top = target.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: Math.max(top - stickyOffset, 0),
      behavior: "smooth",
    });
  };

  return (
    <nav
      className="sticky top-[4.75rem] z-40 border-y border-white/10 bg-menu-night/78 px-3 py-3 shadow-[0_18px_50px_rgb(0_0_0_/_0.28)] backdrop-blur-2xl sm:top-20 sm:px-5"
      aria-label="Menu categories"
    >
      <div className="mx-auto max-w-7xl">
        <div className="overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex w-max min-w-full items-center gap-2">
            {categories.map((category) => {
              const isActive = selectedCategory === category.id;

              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => handleCategoryClick(category)}
                  aria-pressed={isActive}
                  className={[
                    "min-h-11 shrink-0 rounded-full border px-4 text-xs font-medium uppercase tracking-[0.16em] transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-menu-brass/80 sm:px-5",
                    isActive
                      ? "border-menu-brass/45 bg-menu-brass/16 text-menu-warm-white shadow-[var(--shadow-menu-button-hover)]"
                      : "border-white/10 bg-white/[0.045] text-menu-cream/68 hover:border-menu-brass/28 hover:text-menu-warm-white",
                  ].join(" ")}
                >
                  {category.label[language]}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
