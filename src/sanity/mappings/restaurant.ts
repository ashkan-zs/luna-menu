import type { Restaurant } from "@/types/restaurant";

import { mapSanityImageToUrl } from "./images";
import type { SanityRestaurantDocument } from "../types";

export function mapSanityRestaurantToRestaurant(
  restaurant: SanityRestaurantDocument | null | undefined,
): Restaurant | null {
  if (!restaurant) {
    return null;
  }

  const slug = restaurant.slug?.current;
  const coverImage = mapSanityImageToUrl(restaurant.coverImage);
  const seoImage = mapSanityImageToUrl(restaurant.seo?.image);
  const location = restaurant.location;

  if (!slug || !coverImage || !location?.address || !location.city || !location.country) {
    return null;
  }

  return {
    id: restaurant._id,
    name: restaurant.name,
    slug,
    ownerId: restaurant.ownerId,
    ownerEmail: restaurant.ownerEmail,
    logo: mapSanityImageToUrl(restaurant.logo),
    themeId: restaurant.themeId,
    tagline: restaurant.tagline,
    description: restaurant.description,
    coverImage,
    location: {
      address: location.address,
      city: location.city,
      country: location.country,
      mapsUrl: location.mapsUrl,
    },
    contact: restaurant.contact ?? {},
    socials: restaurant.socials,
    openingHours:
      restaurant.openingHours
        ?.filter((item) => item.day)
        .map((item) => ({
          day: item.day!,
          open: item.open ?? "",
          close: item.close ?? "",
          closed: item.closed,
        })) ?? [],
    content: restaurant.content,
    seo: restaurant.seo
      ? {
          title: restaurant.seo.title,
          description: restaurant.seo.description,
          image: seoImage,
        }
      : undefined,
    settings: restaurant.settings,
    subscription:
      restaurant.subscription?.plan && restaurant.subscription.status
        ? {
            plan: restaurant.subscription.plan,
            status: restaurant.subscription.status,
          }
        : undefined,
    isPublished: restaurant.isPublished ?? false,
    createdAt: restaurant._createdAt,
    updatedAt: restaurant._updatedAt,
  };
}
