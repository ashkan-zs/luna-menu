"use client";

import MenuHero from "@/components/menu/MenuHero";
import MenuNavbar from "@/components/menu/MenuNavbar";
import MenuItemsSection from "@/components/menu/MenuItemsSection";
import RestaurantInfoSection from "@/components/menu/RestaurantInfoSection";
import MenuFooter from "@/components/menu/MenuFooter";

import { DEFAULT_MENU_THEME_ID, MENU_THEMES } from "@/data/menuThemes";
import { useState } from "react";
import type { MenuThemeId } from "@/types/theme";

export default function MenuPage() {
  const [themeId, setThemeId] = useState<MenuThemeId>(DEFAULT_MENU_THEME_ID);

  return (
    <main
      id="top"
      data-menu-theme={themeId}
      className="min-h-screen bg-menu-night font-sans text-menu-parchment"
    >
      <MenuNavbar
        themes={MENU_THEMES}
        activeThemeId={themeId}
        onThemeChange={setThemeId}
      />
      <MenuHero />
      <MenuItemsSection />
      <RestaurantInfoSection />
      <MenuFooter />
    </main>
  );
}
