import type { MenuTag } from "@/lib/menuTags";
import { LocalizedString } from "./i18n";

export type MenuCategory = string;

export type MenuImage = {
  src: string;
  alt: LocalizedString;
};

export type Category = {
  id: string;
  restaurantSlug: string;
  slug: string;
  label: LocalizedString;
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
  image: MenuImage;
  order: number;
  featured?: boolean;
  available?: boolean;
  ingredients?: LocalizedString;
  allergens?: LocalizedString[];
  calories?: number;
  protein?: number;
  carbs?: number;
  fats?: number;
  tags?: MenuTag[];
};

export type CategorySeed = {
  id: MenuCategory;
  restaurantId: string;
  slug?: string;
  label: LocalizedString;
  order?: number;
};

export type MenuItemSeed = Omit<
  MenuItem,
  "categoryId" | "categorySlug" | "image" | "order" | "tags"
> & {
  category: MenuCategory;
  image: string;
  order?: number;
  spicy?: boolean;
  vegetarian?: boolean;
  tags?: MenuTag[];
};
