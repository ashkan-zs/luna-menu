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
    coverImage: "/images/luna-bistro/hero/luna-bistro-hero.jpg",
    location: {
      address: "Nisantasi, Tesvikiye Cd. No:18",
      city: "Istanbul",
      country: "Turkey",
      mapsUrl:
        "https://maps.google.com/?q=Luna%20Bistro%20Nisantasi%20Istanbul",
    },
    contact: {
      phone: "+90 212 555 18 18",
      whatsapp: "https://wa.me/902125551818",
      email: "hello@lunabistro.example",
      website: "https://lunabistro.example",
    },
    socials: {
      instagram: "https://instagram.com/lunabistro",
    },
    openingHours: [
      {
        day: "weekdays",
        open: "12:00",
        close: "23:00",
      },
      {
        day: "friday",
        open: "12:00",
        close: "00:30",
      },
      {
        day: "saturday",
        open: "12:00",
        close: "00:30",
      },
      {
        day: "sunday",
        open: "12:00",
        close: "22:00",
      },
    ],
    content: {
      hero: {
        eyebrow: {
          en: "Welcome to",
          tr: "Hoş geldiniz",
        },
      },
      featured: {
        eyebrow: {
          en: "Chef's Recommendations",
          tr: "Tüm Gün Lezzetleri",
        },
        title: {
          en: "Signature Dishes",
          tr: "İmza Seçkisi",
        },
        description: {
          en: "Crafted with seasonal ingredients and modern culinary techniques.",
          tr: "Mevsimsel malzemeler ve modern mutfak teknikleriyle hazırlandı.",
        },
      },
      story: {
        eyebrow: {
          en: "Luna at Night",
          tr: "Luna'da Gece",
        },
        title: {
          en: "A quieter kind of luxury.",
          tr: "Daha sakin bir lüks.",
        },
        body: {
          en: "Luna Bistro is designed for slow evenings, polished plates, and the kind of hospitality that feels personal without asking for attention. Seasonal Mediterranean cooking meets a candlelit room, measured service, and a bar program built for lingering.",
          tr: "Luna Bistro, yavaş akan akşamlar, rafine tabaklar ve kendini gösterişsiz hissettiren kişisel bir misafirperverlik için tasarlandı. Mevsimsel Akdeniz mutfağı; loş ışıklı bir salon, ölçülü servis ve uzun sohbetlere eşlik eden bir bar programıyla buluşur.",
        },
        quote: {
          en: "Our menu follows the season, but the mood stays constant: warm light, generous tables, and a little ceremony in every detail.",
          tr: "Menümüz mevsimi takip eder; atmosferimiz ise aynı kalır: sıcak ışık, cömert masalar ve her detayda küçük bir tören hissi.",
        },
        quoteBy: {
          en: "Chef's note",
          tr: "Şefin notu",
        },
        atmosphere: {
          en: "Dining & Cocktails",
          tr: "Yemek & Kokteyl",
        },
      },
      footer: {
        statement: {
          en: "Crafted for slow evenings.",
          tr: "Yavaş akşamlar için hazırlandı.",
        },
      },
    },
    settings: {
      showPrices: true,
      showImages: true,
      enableSearch: true,
      enableCategoryTabs: true,
    },
    isPublished: true,
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
    coverImage:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1800&q=82",
    location: {
      address: "Atasehir",
      city: "Istanbul",
      country: "Turkey",
      mapsUrl: "https://maps.google.com/?q=Atasehir%20Istanbul",
    },
    contact: {
      phone: "+90 212 555 18 18",
      whatsapp: "https://wa.me/902125551818",
    },
    socials: {
      instagram: "https://instagram.com/oteki",
    },
    openingHours: [
      {
        day: "weekdays",
        open: "09:00",
        close: "23:00",
      },
      {
        day: "weekend",
        open: "09:00",
        close: "00:00",
      },
    ],
    content: {
      hero: {
        eyebrow: {
          en: "Oteki Menu",
          tr: "Öteki Menü",
        },
      },
      featured: {
        eyebrow: {
          en: "Oteki Menu",
          tr: "Öteki Menü",
        },
        title: {
          en: "Browse slowly with the rhythm of the day.",
          tr: "Günün ritmine uyarak yavaşça keşfedin.",
        },
        description: {
          en: "A warm table experience from breakfast to coffee pauses, handmade pasta, and shareable pizza.",
          tr: "Kahvaltıdan kahve molalarına, el yapımı makarnadan paylaşımlık pizzaya uzanan sıcak bir sofra deneyimi.",
        },
      },
      story: {
        eyebrow: {
          en: "At Oteki",
          tr: "Öteki'de",
        },
        title: {
          en: "A warm table for every hour.",
          tr: "Her saate sıcak bir sofra.",
        },
        body: {
          en: "Oteki brings together slow breakfasts, freshly roasted coffee, handmade pasta, and sourdough pizza in a relaxed neighborhood rhythm.",
          tr: "Öteki; yavaş kahvaltıları, taze kavrulmuş kahveyi, el yapımı makarnayı ve ekşi mayalı pizzayı mahallenin rahat ritminde buluşturur.",
        },
        atmosphere: {
          en: "Breakfast, Pasta & Coffee",
          tr: "Kahvaltı, Makarna & Kahve",
        },
      },
      footer: {
        statement: {
          en: "Fresh coffee, handmade pasta, and easygoing tables.",
          tr: "Taze kahve, el yapımı makarna ve rahat sofralar.",
        },
      },
    },
    settings: {
      showPrices: true,
      showImages: true,
      enableSearch: true,
      enableCategoryTabs: true,
    },
    isPublished: true,
  },
];
