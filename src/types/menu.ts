import type { MenuTag } from "@/lib/menuTags";
import { LocalizedString } from "./i18n";

export type MenuCategory = string;

export type MenuImage = {
  src: string;
  alt: LocalizedString;
};

export type Currency = "TRY" | "USD" | "EUR";

export type MenuPriceOption = {
  label: LocalizedString;
  price: number;
  currency?: Currency;
  isDefault?: boolean;
};

export type MenuNutrition = {
  calories?: number;
  protein?: number;
  carbs?: number;
  fats?: number;
};

export type MenuAllergen =
  | "gluten"
  | "dairy"
  | "egg"
  | "nuts"
  | "peanuts"
  | "soy"
  | "fish"
  | "seafood"
  | "sesame";

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
  price?: number;
  currency: Currency;
  priceOptions?: MenuPriceOption[];
  image?: MenuImage;
  order: number;
  featured: boolean;
  available: boolean;
  ingredients?: LocalizedString;
  allergens?: MenuAllergen[];
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
  | "priceOptions"
  | "featured"
  | "available"
  | "allergens"
  | "tags"
> & {
  category: MenuCategory;
  currency?: Currency;
  price?: number;
  priceOptions?: MenuPriceOption[];
  image?: string;
  order?: number;
  featured?: boolean;
  available?: boolean;
  allergens?: MenuAllergen[] | LocalizedString[];
  tags?: MenuTag[];
};
