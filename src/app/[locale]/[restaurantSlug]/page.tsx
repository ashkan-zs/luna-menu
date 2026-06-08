import { notFound, redirect } from "next/navigation";
import { getRestaurantBySlug } from "@/lib/data/restaurants";
import type { Locale } from "@/types/i18n";

type PageProps = {
  params: Promise<{
    locale: Locale;
    restaurantSlug: string;
  }>;
};

export default async function RestaurantPage({ params }: PageProps) {
  const { locale, restaurantSlug } = await params;

  const restaurant = await getRestaurantBySlug(restaurantSlug);

  if (!restaurant) {
    notFound();
  }

  redirect(`/${locale}/${restaurant.slug}/menu`);
}
