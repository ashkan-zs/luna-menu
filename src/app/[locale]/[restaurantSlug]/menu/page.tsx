import MenuItemsSection from "@/components/menu/MenuItemsSection";
import { notFound } from "next/navigation";

import { getRestaurantMenu } from "@/lib/data/menu";
import { getRestaurantBySlug } from "@/lib/data/restaurants";
import { Locale } from "@/types/i18n";
import { getMenuTheme } from "@/themes/registry";
import { MenuTheme } from "@/types/theme";

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

  const theme = getMenuTheme(restaurant.themeId);
  const components: MenuTheme["components"] = theme.components;
  const { Navbar, Hero, RestaurantInfoSection, Footer } = components;

  return (
    <main
      id="top"
      data-menu-theme={theme.id}
      className="min-h-screen bg-theme-bg font-sans text-theme-text"
    >
      {Navbar && <Navbar restaurant={restaurant} locale={locale} />}
      <Hero restaurant={restaurant} locale={locale} />
      <MenuItemsSection
        locale={locale}
        themeId={theme.id}
        restaurant={restaurant}
        items={menu.items}
        categories={menu.categories}
        featuredItemIds={menu.featuredItemIds}
        settings={restaurant.settings}
      />
      <RestaurantInfoSection restaurant={restaurant} locale={locale} />
      <Footer restaurant={restaurant} locale={locale} />
    </main>
  );
}
