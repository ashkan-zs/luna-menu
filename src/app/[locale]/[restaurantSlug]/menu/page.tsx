import MenuItemsSection from "@/components/menu/MenuItemsSection";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getRestaurantMenuPageData } from "@/lib/data/menu";
import {
  createRestaurantMenuJsonLd,
  createRestaurantMenuMetadata,
} from "@/lib/metadata/restaurantMenu";
import { Locale } from "@/types/i18n";
import { getMenuTheme } from "@/themes/registry";
import { MenuTheme } from "@/types/theme";

type PageProps = {
  params: Promise<{
    locale: Locale;
    restaurantSlug: string;
  }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { restaurantSlug, locale } = await params;
  const pageData = await getRestaurantMenuPageData(restaurantSlug);

  if (!pageData) {
    notFound();
  }

  return createRestaurantMenuMetadata({
    locale,
    restaurant: pageData.restaurant,
  });
}

export default async function MenuPage({ params }: PageProps) {
  const { restaurantSlug, locale } = await params;
  const pageData = await getRestaurantMenuPageData(restaurantSlug);

  if (!pageData) {
    notFound();
  }

  const { restaurant, menu } = pageData;
  const theme = getMenuTheme(restaurant.themeId);
  const components: MenuTheme["components"] = theme.components;
  const { Navbar, Hero, RestaurantInfoSection, Footer } = components;
  const jsonLd = createRestaurantMenuJsonLd({ locale, restaurant });

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
