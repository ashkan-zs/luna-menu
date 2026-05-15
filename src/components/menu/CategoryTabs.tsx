"use client";

import { useEffect, useRef } from "react";
import type { Category, SupportedLanguage } from "@/types/menu";

type CategoryTabsProps = {
  categories: Category[];
  activeCategory: string;
  language: SupportedLanguage;
  onCategoryClick: (categoryId: string) => void;
};

// export default function CategoryTabs({
//   categories,
//   language = "en",
//   activeCategory,
//   onCategoryChange,
// }: CategoryTabsProps) {
//   const isControlled = activeCategory !== undefined;
//   const [internalActiveCategory, setInternalActiveCategory] = useState(
//     activeCategory ?? categories[0]?.id,
//   );
//   const selectedCategory = activeCategory ?? internalActiveCategory;

//   useEffect(() => {
//     const observedSections = categories
//       .map((category) => document.getElementById(category.id))
//       .filter((section): section is HTMLElement => Boolean(section));

//     if (observedSections.length === 0) {
//       return;
//     }

//     const observer = new IntersectionObserver(
//       (entries) => {
//         const visibleEntry = entries
//           .filter((entry) => entry.isIntersecting)
//           .sort(
//             (entryA, entryB) =>
//               entryA.boundingClientRect.top - entryB.boundingClientRect.top,
//           )[0];

//         if (!visibleEntry) {
//           return;
//         }

//         const nextCategory = categories.find(
//           (category) => category.id === visibleEntry.target.id,
//         );

//         if (!nextCategory || selectedCategory === nextCategory.id) {
//           return;
//         }

//         if (!isControlled) {
//           setInternalActiveCategory(nextCategory.id);
//         }

//         onCategoryChange?.(nextCategory);
//       },
//       {
//         rootMargin: "-120px 0px -60% 0px",
//         threshold: 0.01,
//       },
//     );

//     for (const section of observedSections) {
//       observer.observe(section);
//     }

//     return () => {
//       observer.disconnect();
//     };
//   }, [categories, isControlled, onCategoryChange, selectedCategory]);

//   const handleCategoryClick = (category: Category) => {
//     if (!isControlled) {
//       setInternalActiveCategory(category.id);
//     }

//     onCategoryChange?.(category);

//     const target = document.getElementById(category.id);

//     if (!target) {
//       return;
//     }

//     const stickyOffset = 125;
//     const top = target.getBoundingClientRect().top + window.scrollY;

//     window.scrollTo({
//       top: Math.max(top - stickyOffset, 0),
//       behavior: "smooth",
//     });
//   };

//   return (
//
//   );
// }

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