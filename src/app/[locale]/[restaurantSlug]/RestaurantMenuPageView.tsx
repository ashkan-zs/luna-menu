import MenuItemsSection from "@/components/menu/MenuItemsSection";
import { createRestaurantMenuJsonLd } from "@/lib/metadata/restaurantMenu";
import type { RestaurantMenuPageData } from "@/lib/data/menu";
import { getMenuTheme } from "@/themes/registry";
import type { Locale } from "@/types/i18n";
import type { MenuTheme } from "@/types/theme";

type RestaurantMenuPageViewProps = {
  locale: Locale;
  pageData: RestaurantMenuPageData;
  includeStructuredData?: boolean;
};

export default function RestaurantMenuPageView({
  locale,
  pageData,
  includeStructuredData = true,
}: RestaurantMenuPageViewProps) {
  const { restaurant, menu } = pageData;
  const theme = getMenuTheme(restaurant.themeId);
  const components: MenuTheme["components"] = theme.components;
  const { Navbar, Hero, RestaurantInfoSection, Footer } = components;
  const jsonLd = includeStructuredData
    ? createRestaurantMenuJsonLd({ locale, restaurant })
    : null;

  return (
    <main
      id="top"
      data-menu-theme={theme.id}
      className="min-h-screen bg-theme-bg font-sans text-theme-text"
    >
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
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
