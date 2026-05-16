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
  location: {
    en: "Nisantasi, Istanbul",
    tr: "Nişantaşı, İstanbul",
  },
  footerStatement: {
    en: "Crafted for slow evenings.",
    tr: "Yavaş akşamlar için hazırlandı.",
  },
  contact: {
    phone: "+90 212 555 18 18",
    instagramUrl: "https://instagram.com/lunabistro",
    whatsappUrl: "https://wa.me/902125551818",
    googleMapsUrl:
      "https://maps.google.com/?q=Luna%20Bistro%20Nisantasi%20Istanbul",
  },
} satisfies {
  name: string;
  tagline: LocalizedText;
  description: LocalizedText;
  backgroundImage: string;
  location: LocalizedText;
  footerStatement: LocalizedText;
  contact: {
    phone: string;
    instagramUrl: string;
    whatsappUrl: string;
    googleMapsUrl: string;
  };
};
