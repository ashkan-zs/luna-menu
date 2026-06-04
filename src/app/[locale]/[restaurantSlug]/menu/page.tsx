
import MenuHero from "@/components/menu/MenuHero";
import MenuNavbar from "@/components/menu/MenuNavbar";
import MenuItemsSection from "@/components/menu/MenuItemsSection";
import RestaurantInfoSection from "@/components/menu/RestaurantInfoSection";
import MenuFooter from "@/components/menu/MenuFooter";
import { notFound } from "next/navigation";

import { getRestaurantMenu } from "@/lib/data/menu";
import { getRestaurantBySlug } from "@/lib/data/restaurants";
import { Locale } from "@/types/i18n";

type PageProps = {
  params: Promise<{
    locale: Locale;
    restaurantSlug: string;
  }>;
};

export default async function MenuPage({ params }: PageProps) {
  const { restaurantSlug, locale } = await params;
  const restaurant = getRestaurantBySlug(restaurantSlug);
  const menu = getRestaurantMenu(restaurantSlug);

  if (!restaurant || !menu) {
    notFound();
  }

  // const [themeId, setThemeId] = useState<MenuThemeId>(DEFAULT_MENU_THEME_ID);

  return (
    <main
      id="top"
      // data-menu-theme={themeId}
      className="min-h-screen bg-menu-night font-sans text-menu-parchment"
    >
      <MenuNavbar
        restaurant={restaurant}
        locale={locale}
        // themes={MENU_THEMES}
        // activeThemeId={themeId}
        // onThemeChange={setThemeId}
      />
      <MenuHero restaurant={restaurant} locale={locale} />
      <MenuItemsSection
        locale={locale}
        items={menu.items}
        categories={menu.categories}
        featuredItemIds={menu.featuredItemIds}
      />
      <RestaurantInfoSection restaurant={restaurant} />
      <MenuFooter restaurant={restaurant} locale={locale} />
    </main>
  );
}
