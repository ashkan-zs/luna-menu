import type { Metadata } from "next";

import { createAbsoluteUrl } from "@/config/app";
import { routing } from "@/i18n/routing";
import { getLocalizedValue } from "@/lib/i18n/getLocalizedValue";
import type { Locale } from "@/types/i18n";
import type { Restaurant } from "@/types/restaurant";

const OG_LOCALES: Record<Locale, string> = {
  en: "en_US",
  tr: "tr_TR",
};

const NON_INDEXABLE_ROBOTS: Metadata["robots"] = {
  index: false,
  follow: false,
  googleBot: {
    index: false,
    follow: false,
  },
};

function getMenuPath(locale: Locale, restaurantSlug: string) {
  return `/${locale}/${restaurantSlug}/menu`;
}

function getLanguageAlternates(restaurantSlug: string) {
  return Object.fromEntries(
    routing.locales.map((locale) => [
      locale,
      getMenuPath(locale as Locale, restaurantSlug),
    ]),
  );
}

function getRestaurantMetadataTitle(restaurant: Restaurant, locale: Locale) {
  const seoTitle = restaurant.seo?.title
    ? getLocalizedValue(restaurant.seo.title, locale)
    : undefined;

  return seoTitle || `${restaurant.name} Menu`;
}

function getRestaurantMetadataDescription(
  restaurant: Restaurant,
  locale: Locale,
) {
  const seoDescription = restaurant.seo?.description
    ? getLocalizedValue(restaurant.seo.description, locale)
    : undefined;

  return (
    seoDescription ||
    getLocalizedValue(restaurant.description, locale) ||
    getLocalizedValue(restaurant.tagline, locale)
  );
}

export function createRestaurantMenuMetadata({
  locale,
  restaurant,
}: {
  locale: Locale;
  restaurant: Restaurant;
}): Metadata {
  const title = getRestaurantMetadataTitle(restaurant, locale);
  const description = getRestaurantMetadataDescription(restaurant, locale);
  const path = getMenuPath(locale, restaurant.slug);
  const image = restaurant.seo?.image || restaurant.coverImage;
  const absoluteImage = createAbsoluteUrl(image);

  if (!restaurant.isPublished) {
    // Demo restaurants should never be indexed. Only real customer
    // restaurants should appear in search engines and sitemap.xml.
    return {
      title,
      description,
      robots: NON_INDEXABLE_ROBOTS,
    };
  }

  return {
    title,
    description,
    alternates: {
      canonical: path,
      languages: getLanguageAlternates(restaurant.slug),
    },
    openGraph: {
      title,
      description,
      url: path,
      siteName: restaurant.name,
      images: [
        {
          url: absoluteImage,
          alt: `${restaurant.name} menu`,
        },
      ],
      locale: OG_LOCALES[locale],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteImage],
    },
  };
}

export function createRestaurantMenuJsonLd({
  locale,
  restaurant,
}: {
  locale: Locale;
  restaurant: Restaurant;
}) {
  if (restaurant.isPublished !== true) {
    return null;
  }

  const path = getMenuPath(locale, restaurant.slug);

  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": createAbsoluteUrl(path),
    name: restaurant.name,
    description: getRestaurantMetadataDescription(restaurant, locale),
    image: createAbsoluteUrl(restaurant.coverImage),
    url: createAbsoluteUrl(path),
    telephone: restaurant.contact.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: restaurant.location.address,
      addressLocality: restaurant.location.city,
      addressCountry: restaurant.location.country,
    },
    sameAs: [
      restaurant.contact.website,
      restaurant.socials?.instagram,
      restaurant.socials?.facebook,
      restaurant.socials?.tiktok,
    ].filter(Boolean),
    hasMenu: createAbsoluteUrl(path),
    servesCuisine: getLocalizedValue(restaurant.tagline, locale),
  };
}
