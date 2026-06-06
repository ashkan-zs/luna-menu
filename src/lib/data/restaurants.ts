import { RESTAURANT } from "@/data/restaurant";

export function getRestaurantBySlug(slug: string) {
  return RESTAURANT.find(
    (restaurant) => restaurant.slug === slug && restaurant.isPublished,
  );
}
