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
      phone: "+90 555 000 00 00",
      whatsapp: "https://wa.me/#",
      email: "hello@lunabistro.example",
      website: "https://luna-menu.vercel.app/tr/luna-bistro",
    },
    socials: {
      instagram: "https://instagram.com/thelunamenu",
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
    // Demo restaurants should never be indexed. Set this to true only for
    // real customer restaurants that are ready to appear in search engines.
    publishingStatus: "published",
    isPublished: true,
  },
  {
    id: "mavi-balloon",
    name: "Mavi Balloon",
    slug: "mavi-balloon",
    themeId: "street-food",

    tagline: {
      en: "Antakya Döner & Signature Burgers",
      tr: "Antakya Döner ve Özel Burgerler",
    },

    description: {
      en: "Street food favorites, signature burgers, Antakya-style döner, sides and cold drinks.",
      tr: "Sokak lezzetleri, özel burgerler, Antakya usulü döner, aperatifler ve soğuk içecekler.",
    },

    logo: "/images/mavi-balloon/logo.png",
    coverImage: "/images/mavi-balloon/cover.jpg",

    location: {
      address: "Caferağa, Neşet Ömer Sk. No:16 B Kadıköy",
      city: "Istanbul",
      country: "Turkey",
    },

    contact: {
      phone: "+905513473134",
      whatsapp: "https://wa.me/+905513473134",
    },

    socials: {
      instagram: "https://www.instagram.com/maviballoonfood/",
    },

    openingHours: [
      {
        day: "monday",
        open: "",
        close: "",
        closed: true,
      },
      {
        day: "tuesday",
        open: "11:00",
        close: "23:30",
      },
      {
        day: "wednesday",
        open: "11:00",
        close: "23:30",
      },
      {
        day: "thursday",
        open: "11:00",
        close: "23:30",
      },
      {
        day: "friday",
        open: "11:00",
        close: "01:30",
      },
      {
        day: "saturday",
        open: "11:00",
        close: "01:30",
      },
      {
        day: "sunday",
        open: "12:00",
        close: "23:00",
      },
    ],

    content: {
      hero: {
        eyebrow: {
          en: "Antakya flavor",
          tr: "Antakya lezzeti",
        },
        title: {
          en: "Döner & Burgers",
          tr: "Döner & Burger",
        },
        description: {
          en: "Fresh. Hot. Legendary.",
          tr: "Taze. Sıcak. Efsane.",
        },
      },
      story: {
        eyebrow: {
          en: "Mavi Balloon",
          tr: "Mavi Balloon",
        },
        title: {
          en: "Antakya street food, served fast and full of flavor.",
          tr: "Antakya sokak lezzeti, hızlı ve bol aromalı.",
        },
        body: {
          en: "Mavi Balloon brings together Antakya-style döner, juicy burgers, crispy sides, and cold drinks in a bright, easygoing menu experience made for quick lunches, late cravings, and casual tables.",
          tr: "Mavi Balloon; Antakya usulü döneri, bol soslu burgerleri, çıtır atıştırmalıkları ve soğuk içecekleri hızlı öğle yemekleri, gece lezzet kaçamakları ve rahat sofralar için canlı bir menü deneyiminde buluşturur.",
        },
        atmosphere: {
          en: "Döner, Burgers & Street Bites",
          tr: "Döner, Burger & Sokak Lezzetleri",
        },
      },
    },

    settings: {
      showPrices: true,
      showImages: true,
      enableSearch: true,
      enableCategoryTabs: true,
    },

    publishingStatus: "published",
    isPublished: true,
  },
];
