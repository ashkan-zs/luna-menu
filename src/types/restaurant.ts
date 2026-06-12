import { LocalizedString } from "./i18n";
import type { MenuThemeId } from "./theme";

type RestaurantContact = {
  phone?: string;
  whatsapp?: string;
  email?: string;
  website?: string;
};

type RestaurantSocials = {
  instagram?: string;
  facebook?: string;
  tiktok?: string;
};

type RestaurantLocation = {
  address: string;
  city: string;
  country: string;
  mapsUrl?: string;
};

export type OpeningHourDay =
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday"
  | "sunday"
  | "weekdays"
  | "weekend";

type RestaurantOpeningHour = {
  day: OpeningHourDay;
  open: string;
  close: string;
  closed?: boolean;
};

type RestaurantContent = {
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

type RestaurantSeo = {
  title?: LocalizedString;
  description?: LocalizedString;
  image?: string;
};

export type RestaurantSettings = {
  showPrices: boolean;
  showImages: boolean;
  enableSearch: boolean;
  enableCategoryTabs: boolean;
};

export type Restaurant = {
  id: string;
  name: string;
  slug: string;
  ownerId?: string;
  ownerEmail?: string;
  logo?: string;
  themeId: MenuThemeId;
  tagline: LocalizedString;
  description: LocalizedString;
  coverImage: string;
  location: RestaurantLocation;
  contact: RestaurantContact;
  socials?: RestaurantSocials;
  openingHours: RestaurantOpeningHour[];
  content?: RestaurantContent;
  seo?: RestaurantSeo;
  settings?: RestaurantSettings;
  subscription?: {
    plan: "free" | "starter" | "pro";
    status: "active" | "inactive" | "trial";
  };
  isPublished: boolean;
  createdAt?: string;
  updatedAt?: string;
};
