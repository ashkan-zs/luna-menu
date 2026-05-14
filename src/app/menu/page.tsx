"use client";

import CategoryTabs from "@/components/menu/CategoryTabs";
import MenuHero from "@/components/menu/MenuHero";
import MenuNavbar from "@/components/menu/MenuNavbar";
import MenuItemsSection from "@/components/menu/MenuItemsSection";

import { CATEGORIES } from "@/data/menu";
import { RESTAURANT } from "@/data/restaurant";
import { useState } from "react";
import { SupportedLanguage } from "@/types/menu";

export default function MenuPage() {
  const [language, setLanguage] = useState<SupportedLanguage>("en");

  const handelLanguageSwitch = () => {
    setLanguage((currentLang) => (currentLang === "en" ? "tr" : "en"));
  };

  return (
    <main
      id="top"
      className="min-h-screen bg-menu-night font-sans text-menu-parchment"
    >
      <div className="relative">
        <MenuNavbar restaurantName={RESTAURANT.name} />

        <MenuHero
          restaurantName={RESTAURANT.name}
          tagline={RESTAURANT.tagline[language]}
          description={RESTAURANT.description[language]}
          backgroundImage={RESTAURANT.backgroundImage}
          language={language}
          onLanguageSwitch={handelLanguageSwitch}
        />
      </div>

      <CategoryTabs categories={CATEGORIES} language={language} />

      <MenuItemsSection language={language} />
    </main>
  );
}
