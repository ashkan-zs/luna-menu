import { RESTAURANT } from "@/data/restaurant";
import { fetchMappedPublishedRestaurantBySlug } from "@/sanity/fetchers";

function getStaticRestaurantBySlug(slug: string) {
  return RESTAURANT.find(
    (restaurant) => restaurant.slug === slug && restaurant.isPublished,
  );
}

export async function getRestaurantBySlug(slug: string) {
  try {
    const restaurant = await fetchMappedPublishedRestaurantBySlug(slug);

    return restaurant ?? getStaticRestaurantBySlug(slug);
  } catch {
    return getStaticRestaurantBySlug(slug);
  }
}
