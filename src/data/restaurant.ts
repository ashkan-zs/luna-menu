import { Restaurant } from "@/types/restaurant";

export const RESTAURANT: Restaurant[] = [
  {
    id: "luna-bistro",
    slug: "luna-bistro",
    themeId: "luna",
    name: "Luna Bistro",
    tagline: {
      en: "Modern Mediterranean Dining",
      tr: "Modern Akdeniz Mutfağı",
    },
    description: {
      en: "Seasonal dishes, crafted cocktails, and warm hospitality.",
      tr: "Mevsimsel tabaklar, özenle hazırlanmış kokteyller ve sıcak misafirperverlik.",
    },
    backgroundImage: "/images/luna-bistro/hero/luna-bistro-hero.jpg",
    location: {
      en: "Nisantasi, Istanbul",
      tr: "Nişantaşı, İstanbul",
    },
    contact: {
      address: "Nisantasi, Tesvikiye Cd. No:18, Istanbul",
      phone: "+90 212 555 18 18",
      instagramUrl: "https://instagram.com/lunabistro",
      whatsappUrl: "https://wa.me/902125551818",
      googleMapsUrl:
        "https://maps.google.com/?q=Luna%20Bistro%20Nisantasi%20Istanbul",
    },
  },
  {
    id: "oteki-restaurant",
    slug: "oteki-restaurant",
    themeId: "artisan",
    name: "Öteki",
    tagline: {
      en: "Italian Kitchen",
      tr: "İtalyan Mutfağı",
    },
    description: {
      en: "Seasonal dishes, crafted cocktails, and warm hospitality.",
      tr: "Öteki’nin kahvaltıları, taze kahveleri ve keyifli sofraları için sade bir menü deneyimi.",
    },
    backgroundImage:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1800&q=82",
    location: {
      en: "Ataşehir, Istanbul",
      tr: "Ataşehir, İstanbul",
    },
    contact: {
      address: "Nisantasi, Tesvikiye Cd. No:18, Istanbul",
      phone: "+90 212 555 18 18",
      instagramUrl: "https://instagram.com/lunabistro",
      whatsappUrl: "https://wa.me/902125551818",
      googleMapsUrl:
        "https://maps.google.com/?q=Luna%20Bistro%20Nisantasi%20Istanbul",
    },
  },
];
