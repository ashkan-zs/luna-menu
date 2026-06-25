import type { Metadata } from "next";
import { notFound } from "next/navigation";

import RestaurantMenuPageView from "./RestaurantMenuPageView";
import { getRestaurantMenuPageData } from "@/lib/data/menu";
import { createRestaurantMenuMetadata } from "@/lib/metadata/restaurantMenu";
import type { Locale } from "@/types/i18n";

type PageProps = {
  params: Promise<{
    locale: Locale;
    restaurantSlug: string;
  }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale, restaurantSlug } = await params;
  const pageData = await getRestaurantMenuPageData(restaurantSlug);

  if (!pageData) {
    notFound();
  }

  return createRestaurantMenuMetadata({
    locale,
    restaurant: pageData.restaurant,
  });
}

export default async function RestaurantPage({ params }: PageProps) {
  const { restaurantSlug, locale } = await params;
  const pageData = await getRestaurantMenuPageData(restaurantSlug);

  if (!pageData) {
    notFound();
  }

  return <RestaurantMenuPageView locale={locale} pageData={pageData} />;
}
