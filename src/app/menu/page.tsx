"use client";

import MenuHero from "@/components/menu/MenuHero";
import MenuNavbar from "@/components/menu/MenuNavbar";
import MenuItemsSection from "@/components/menu/MenuItemsSection";

import { RESTAURANT } from "@/data/restaurant";
import { DEFAULT_MENU_THEME_ID, MENU_THEMES } from "@/data/menuThemes";
import { useState } from "react";
import { SupportedLanguage } from "@/types/menu";
import type { MenuThemeId } from "@/types/theme";

export default function MenuPage() {
  const [language, setLanguage] = useState<SupportedLanguage>("en");
  const [themeId, setThemeId] = useState<MenuThemeId>(DEFAULT_MENU_THEME_ID);

  const handelLanguageChange = () => {
    setLanguage((currentLang) => (currentLang === "en" ? "tr" : "en"));
  };

  return (
    <main
      id="top"
      data-menu-theme={themeId}
      className="min-h-screen bg-menu-night font-sans text-menu-parchment"
    >
      <MenuNavbar
        restaurantName={RESTAURANT.name}
        language={language}
        themes={MENU_THEMES}
        activeThemeId={themeId}
        onLanguageChange={handelLanguageChange}
        onThemeChange={setThemeId}
      />

      <MenuHero
        restaurantName={RESTAURANT.name}
        tagline={RESTAURANT.tagline[language]}
        description={RESTAURANT.description[language]}
        backgroundImage={RESTAURANT.backgroundImage}
        language={language}
      />

      <MenuItemsSection language={language} />
    </main>
  );
}
