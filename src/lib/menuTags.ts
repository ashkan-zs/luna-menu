import {
  ChefHat,
  Fish,
  Flame,
  Leaf,
  MilkOff,
  Sparkles,
  Sprout,
  Star,
  WheatOff,
} from "lucide-react";
import type { MenuItem } from "@/types/menu";

export const MENU_TAGS = {
  signature: {
    label: { en: "Signature", tr: "İmza" },
    icon: Star,
  },
  chef_choice: {
    label: { en: "Chef's Choice", tr: "Şefin Seçimi" },
    icon: ChefHat,
  },
  spicy: {
    label: { en: "Spicy", tr: "Acılı" },
    icon: Flame,
  },
  vegetarian: {
    label: { en: "Vegetarian", tr: "Vejetaryen" },
    icon: Leaf,
  },
  vegan: {
    label: { en: "Vegan", tr: "Vegan" },
    icon: Sprout,
  },
  gluten_free: {
    label: { en: "Gluten Free", tr: "Glutensiz" },
    icon: WheatOff,
  },
  dairy_free: {
    label: { en: "Dairy Free", tr: "Süt Ürünsüz" },
    icon: MilkOff,
  },
  seasonal: {
    label: { en: "Seasonal", tr: "Mevsimsel" },
    icon: Sparkles,
  },
  seafood: {
    label: { en: "Seafood", tr: "Deniz Ürünleri" },
    icon: Fish,
  },
} as const;

export type MenuTag = keyof typeof MENU_TAGS;

export function hasMenuTag(item: Pick<MenuItem, "tags">, tag: MenuTag) {
  return item.tags?.includes(tag) ?? false;
}
