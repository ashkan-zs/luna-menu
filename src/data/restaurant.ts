import type { LocalizedText } from "@/types/menu";

export const RESTAURANT = {
  name: "Luna Bistro",
  tagline: {
    en: "Modern Mediterranean Dining",
    tr: "Modern Akdeniz Mutfağı",
  },
  description: {
    en: "Seasonal dishes, crafted cocktails, and warm hospitality.",
    tr: "Mevsimsel tabaklar, özenle hazırlanmış kokteyller ve sıcak misafirperverlik.",
  },
  backgroundImage: "/images/hero/luna-bistro-hero.jpg",
} satisfies {
  name: string;
  tagline: LocalizedText;
  description: LocalizedText;
  backgroundImage: string;
};
