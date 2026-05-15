"use client";

import { useEffect, useState } from "react";

export function useActiveCategory(categoryIds: string[]) {
  const [activeCategory, setActiveCategory] = useState("");

  useEffect(() => {
    if (categoryIds.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        const mostVisibleEntry = visibleEntries[0];

        if (mostVisibleEntry) {
          setActiveCategory((current) =>
            current === mostVisibleEntry.target.id
              ? current
              : mostVisibleEntry.target.id,
          );
        }
      },
      {
        rootMargin: "-30% 0px -55% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    categoryIds.forEach((id) => {
      const element = document.getElementById(id);

      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [categoryIds]);

  return activeCategory;
}
