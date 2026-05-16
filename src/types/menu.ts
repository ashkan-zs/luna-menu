import type { MenuTag } from "@/data/tags";

export type SupportedLanguage = "en" | "tr";

export type LocalizedText = Record<SupportedLanguage, string>;

export type MenuCategory =
  | "breakfast"
  | "brunch"
  | "starters"
  | "salads"
  | "main-courses"
  | "sides"
  | "desserts"
  | "bakery"
  | "coffee"
  | "tea"
  | "mocktails"
  | "cocktails"
  | "spirits"
  | "beer"
  | "wine"
  | "soft-drinks";

export type Category = {
  id: MenuCategory;
  label: LocalizedText;
};

export type MenuItem = {
  id: string;
  category: MenuCategory;
  name: LocalizedText;
  description: LocalizedText;
  price: number;
  image: string;
  featured?: boolean;
  spicy?: boolean;
  vegetarian?: boolean;
  available?: boolean;
  ingredients?: LocalizedText;
  allergens?: LocalizedText[];
  calories?: number;
  protein?: number;
  carbs?: number;
  fats?: number;
  tags?: MenuTag[];
};
