"use client";

import { useState } from "react";
import { CATEGORIES, MENU_ITEMS } from "@/data/menu";
import type {
  MenuItem as MenuItemType,
  SupportedLanguage,
} from "@/types/menu";
import MenuItemCard from "./MenuItemCard";
import MenuItemModal from "./MenuItemModal";

export default function MenuItemsSection({
  restaurantName = "Luna Bistro",
  language = "en",
}: {
  restaurantName?: string;
  language?: SupportedLanguage;
}) {
  const [selectedItem, setSelectedItem] = useState<MenuItemType | null>(null);

  return (
    <section
      id="menu"
      className="scroll-mt-28 px-5 py-14 sm:px-8 lg:px-12"
      aria-labelledby="menu-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.32em] text-menu-brass/80">
            Signature Selection
          </p>
          <h2
            id="menu-heading"
            className="mt-3 font-serif text-3xl text-menu-ivory sm:text-4xl"
          >
            Tonight&apos;s Menu
          </h2>
          <p className="mt-4 text-sm leading-6 text-menu-cream/64 sm:text-base">
            Seasonal plates, polished cocktails, and café favorites arranged for
            a quiet, cinematic dining experience.
          </p>
        </div>

        <div className="space-y-14">
          {CATEGORIES.map((category) => {
            const headingId = `${category.id}-heading`;
            const items = MENU_ITEMS.filter(
              (item) => item.category === category.id,
            );

            return (
              <section
                id={category.id}
                key={category.id}
                aria-labelledby={headingId}
                className="space-y-5"
              >
                <div className="flex items-end justify-between border-b border-white/10 pb-4">
                  <div>
                    <p className="text-[0.68rem] font-medium uppercase tracking-[0.28em] text-menu-brass/70">
                      {restaurantName}
                    </p>
                    <h3
                      id={headingId}
                      className="mt-2 font-serif text-2xl text-menu-warm-white sm:text-3xl"
                    >
                      {category.label[language]}
                    </h3>
                  </div>
                  <span className="rounded-full border border-menu-brass/20 bg-menu-brass/10 px-3 py-1 text-xs font-medium text-menu-brass">
                    {items.length} {items.length === 1 ? "item" : "items"}
                  </span>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {items.map((item) => (
                    <MenuItemCard
                      key={item.id}
                      item={item}
                      language={language}
                      onSelect={setSelectedItem}
                    />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>

      <MenuItemModal
        item={selectedItem}
        language={language}
        onClose={() => setSelectedItem(null)}
      />
    </section>
  );
}
