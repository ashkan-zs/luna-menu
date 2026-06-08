import type { MenuTag } from "@/lib/menuTags";
import type { LocalizedString } from "@/types/i18n";
import type {
  Currency,
  MenuAllergen,
  MenuNutrition,
  MenuPriceOption,
} from "@/types/menu";
import type {
  OpeningHourDay,
  RestaurantSettings,
} from "@/types/restaurant";
import type { MenuThemeId } from "@/types/theme";

export type SanityDocumentMeta = {
  _id: string;
  _createdAt: string;
  _updatedAt: string;
};

export type SanitySlug = {
  current?: string;
};

export type SanityImageWithAlt = {
  _type: "image";
  asset?: {
    _ref: string;
    _type: "reference";
  };
  crop?: unknown;
  hotspot?: unknown;
  alt?: LocalizedString;
};

export type SanityRestaurantDocument = SanityDocumentMeta & {
  _type: "restaurant";
  name: string;
  slug?: SanitySlug;
  ownerId?: string;
  ownerEmail?: string;
  logo?: SanityImageWithAlt;
  themeId: MenuThemeId;
  tagline: LocalizedString;
  description: LocalizedString;
  coverImage?: SanityImageWithAlt;
  location?: {
    address?: string;
    city?: string;
    country?: string;
    mapsUrl?: string;
  };
  contact?: {
    phone?: string;
    whatsapp?: string;
    email?: string;
    website?: string;
  };
  socials?: {
    instagram?: string;
    facebook?: string;
    tiktok?: string;
  };
  openingHours?: {
    day?: OpeningHourDay;
    open?: string;
    close?: string;
    closed?: boolean;
  }[];
  content?: {
    hero?: {
      eyebrow?: LocalizedString;
      title?: LocalizedString;
      description?: LocalizedString;
    };
    featured?: {
      eyebrow?: LocalizedString;
      title?: LocalizedString;
      description?: LocalizedString;
    };
    story?: {
      eyebrow?: LocalizedString;
      title?: LocalizedString;
      body?: LocalizedString;
      quote?: LocalizedString;
      quoteBy?: LocalizedString;
      atmosphere?: LocalizedString;
    };
    footer?: {
      statement?: LocalizedString;
    };
  };
  settings?: RestaurantSettings;
  subscription?: {
    plan?: "free" | "starter" | "pro";
    status?: "active" | "inactive" | "trial";
  };
  isPublished?: boolean;
  seo?: {
    title?: LocalizedString;
    description?: LocalizedString;
    image?: SanityImageWithAlt;
  };
};

export type SanityMenuCategoryDocument = SanityDocumentMeta & {
  _type: "menuCategory";
  restaurant?: {
    _ref: string;
    _type: "reference";
  };
  label: LocalizedString;
  slug?: SanitySlug;
  description?: LocalizedString;
  order: number;
};

export type SanityMenuItemDocument = SanityDocumentMeta & {
  _type: "menuItem";
  restaurant?: {
    _ref: string;
    _type: "reference";
  };
  category?: SanityMenuCategoryDocument;
  name: LocalizedString;
  description: LocalizedString;
  price?: number;
  currency: Currency;
  priceOptions?: MenuPriceOption[];
  image?: SanityImageWithAlt;
  order: number;
  featured: boolean;
  available: boolean;
  ingredients?: LocalizedString;
  allergens?: MenuAllergen[];
  nutrition?: MenuNutrition;
  tags?: MenuTag[];
};

export type SanityRestaurantMenuPayload = {
  restaurant: SanityRestaurantDocument | null;
  categories: SanityMenuCategoryDocument[];
  items: SanityMenuItemDocument[];
};
