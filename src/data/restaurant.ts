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
  backgroundImage:
    "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1800&q=80",
} satisfies {
  name: string;
  tagline: LocalizedText;
  description: LocalizedText;
  backgroundImage: string;
};
