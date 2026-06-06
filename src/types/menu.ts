import type { MenuTag } from "@/lib/menuTags";
import { LocalizedString } from "./i18n";

export type MenuCategory = string;

export type MenuImage = {
  src: string;
  alt: LocalizedString;
};

export type Currency = "TRY" | "USD" | "EUR";

export type MenuNutrition = {
  calories?: number;
  protein?: number;
  carbs?: number;
  fats?: number;
};

export type Category = {
  id: string;
  restaurantId: string;
  slug: string;
  label: LocalizedString;
  description?: LocalizedString;
  order: number;
};

export type MenuItem = {
  id: string;
  restaurantId: string;
  categoryId: string;
  categorySlug: string;
  name: LocalizedString;
  description: LocalizedString;
  price: number;
  currency: Currency;
  image?: MenuImage;
  order: number;
  featured: boolean;
  available: boolean;
  ingredients?: LocalizedString;
  allergens?: LocalizedString[];
  nutrition?: MenuNutrition;
  tags?: MenuTag[];
};

export type CategorySeed = {
  id: MenuCategory;
  restaurantId: string;
  slug?: string;
  label: LocalizedString;
  description?: LocalizedString;
  order?: number;
};

export type MenuItemSeed = Omit<
  MenuItem,
  | "categoryId"
  | "categorySlug"
  | "image"
  | "order"
  | "currency"
  | "featured"
  | "available"
  | "tags"
> & {
  category: MenuCategory;
  currency?: Currency;
  image?: string;
  order?: number;
  featured?: boolean;
  available?: boolean;
  tags?: MenuTag[];
};
