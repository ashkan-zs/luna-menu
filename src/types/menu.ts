export type SupportedLanguage = "en" | "tr";

export type LocalizedText = Record<SupportedLanguage, string>;

export type MenuCategory =
  | "recommended"
  | "breakfast"
  | "starters"
  | "main-courses"
  | "desserts"
  | "cocktails"
  | "coffee"
  | "wine";

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
};
