export type MenuCategory =
  | "Starters"
  | "Main Courses"
  | "Desserts"
  | "Cocktails"
  | "Coffee"
  | "Wine";

export type MenuItem = {
  id: string;
  category: MenuCategory;
  name: string;
  description: string;
  price: number;
  image: string;
  featured?: boolean;
  spicy?: boolean;
  vegetarian?: boolean;
  available?: boolean;
};