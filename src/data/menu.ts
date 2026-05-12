import type { Category, MenuItem } from "@/types/menu";

export const CATEGORIES: Category[] = [
  {
    id: "starters",
    label: {
      en: "Starters",
      tr: "Başlangıçlar",
    },
  },
  {
    id: "main-courses",
    label: {
      en: "Main Courses",
      tr: "Ana Yemekler",
    },
  },
  {
    id: "desserts",
    label: {
      en: "Desserts",
      tr: "Tatlılar",
    },
  },
  {
    id: "coffee",
    label: {
      en: "Coffee",
      tr: "Kahve",
    },
  },
  {
    id: "cocktails",
    label: {
      en: "Cocktails",
      tr: "Kokteyller",
    },
  },
  {
    id: "wine",
    label: {
      en: "Wine",
      tr: "Şarap",
    },
  },
];

export const MENU_ITEMS: MenuItem[] = [
  // Starters
  {
    id: "starter-1",
    category: "starters",
    name: {
      en: "Charred Octopus",
      tr: "Izgara Ahtapot",
    },
    description: {
      en: "Smoked paprika, lemon oil, ember-roasted potatoes, sea salt.",
      tr: "Füme paprika, limon yağı, közlenmiş patates, deniz tuzu.",
    },
    price: 28,
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop",
    featured: true,
    available: true,
  },
  {
    id: "starter-2",
    category: "starters",
    name: {
      en: "Burrata & Heirloom Tomatoes",
      tr: "Burrata ve Domates",
    },
    description: {
      en: "Creamy burrata, basil oil, cherry tomatoes, aged balsamic.",
      tr: "Kremamsı burrata, fesleğen yağı, cherry domates, yıllanmış balzamik.",
    },
    price: 18,
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1200&auto=format&fit=crop",
    vegetarian: true,
    available: true,
  },
  {
    id: "starter-3",
    category: "starters",
    name: {
      en: "Truffle Fries",
      tr: "Trüflü Patates",
    },
    description: {
      en: "Crispy fries, parmesan, parsley, black truffle aioli.",
      tr: "Çıtır patates, parmesan, maydanoz, siyah trüflü aioli.",
    },
    price: 14,
    image:
      "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=1200&auto=format&fit=crop",
    vegetarian: true,
    available: true,
  },

  // Main Courses
  {
    id: "main-1",
    category: "main-courses",
    name: {
      en: "Wagyu Burger",
      tr: "Wagyu Burger",
    },
    description: {
      en: "Aged cheddar, caramelized onions, brioche bun, truffle mayo.",
      tr: "Yıllanmış cheddar, karamelize soğan, brioche ekmeği, trüflü mayonez.",
    },
    price: 34,
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200&auto=format&fit=crop",
    featured: true,
    available: true,
  },
  {
    id: "main-2",
    category: "main-courses",
    name: {
      en: "Truffle Tagliatelle",
      tr: "Trüflü Tagliatelle",
    },
    description: {
      en: "Fresh pasta, brown butter, aged parmesan, black truffle.",
      tr: "Taze makarna, kahverengi tereyağı, yıllanmış parmesan, siyah trüf.",
    },
    price: 32,
    image:
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=1200&auto=format&fit=crop",
    vegetarian: true,
    available: false,
  },
  {
    id: "main-3",
    category: "main-courses",
    name: {
      en: "Spicy Grilled Salmon",
      tr: "Acılı Izgara Somon",
    },
    description: {
      en: "Chili glaze, asparagus, roasted garlic puree, lemon zest.",
      tr: "Acı biber glaze, kuşkonmaz, köz sarımsak püresi, limon kabuğu.",
    },
    price: 36,
    image:
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=1200&auto=format&fit=crop",
    spicy: true,
    available: true,
  },

  // Desserts
  {
    id: "dessert-1",
    category: "desserts",
    name: {
      en: "Basque Cheesecake",
      tr: "San Sebastian Cheesecake",
    },
    description: {
      en: "Creamy cheesecake with vanilla bean and berry compote.",
      tr: "Vanilya çekirdeği ve orman meyvesi kompostosu ile kremamsı cheesecake.",
    },
    price: 14,
    image:
      "https://images.unsplash.com/photo-1567171466295-4afa63d45416?q=80&w=1200&auto=format&fit=crop",
    featured: true,
    vegetarian: true,
    available: true,
  },
  {
    id: "dessert-2",
    category: "desserts",
    name: {
      en: "Chocolate Lava Cake",
      tr: "Akışkan Çikolatalı Kek",
    },
    description: {
      en: "Warm molten chocolate cake with vanilla ice cream.",
      tr: "Vanilyalı dondurma ile sıcak akışkan çikolatalı kek.",
    },
    price: 16,
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=1200&auto=format&fit=crop",
    vegetarian: true,
    available: true,
  },

  // Cocktails
  {
    id: "cocktail-1",
    category: "cocktails",
    name: {
      en: "Midnight Negroni",
      tr: "Midnight Negroni",
    },
    description: {
      en: "Gin, cacao vermouth, orange bitters, smoked orange peel.",
      tr: "Cin, kakao vermut, portakal bitters, isli portakal kabuğu.",
    },
    price: 18,
    image:
      "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1200&auto=format&fit=crop",
    featured: true,
    available: true,
  },
  {
    id: "cocktail-2",
    category: "cocktails",
    name: {
      en: "Espresso Martini",
      tr: "Espresso Martini",
    },
    description: {
      en: "Vodka, espresso, coffee liqueur, dark chocolate dust.",
      tr: "Votka, espresso, kahve likörü, bitter çikolata tozu.",
    },
    price: 17,
    image:
      "https://images.unsplash.com/photo-1575650772417-e6b418b0d06d?q=80&w=1200&auto=format&fit=crop",
    available: true,
  },
  {
    id: "cocktail-3",
    category: "cocktails",
    name: {
      en: "Smoked Old Fashioned",
      tr: "İsli Old Fashioned",
    },
    description: {
      en: "Bourbon, bitters, smoked oak aroma, brown sugar syrup.",
      tr: "Bourbon, bitters, isli meşe aroması, esmer şeker şurubu.",
    },
    price: 19,
    image:
      "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=1200&auto=format&fit=crop",
    available: true,
  },

  // Coffee
  {
    id: "coffee-1",
    category: "coffee",
    name: {
      en: "Flat White",
      tr: "Flat White",
    },
    description: {
      en: "Double ristretto with silky microfoam milk.",
      tr: "İpeksi mikro köpüklü süt ile double ristretto.",
    },
    price: 6,
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop",
    available: true,
  },
  {
    id: "coffee-2",
    category: "coffee",
    name: {
      en: "Spanish Latte",
      tr: "Spanish Latte",
    },
    description: {
      en: "Espresso, steamed milk, condensed milk, cinnamon.",
      tr: "Espresso, buharla ısıtılmış süt, yoğunlaştırılmış süt, tarçın.",
    },
    price: 7,
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1200&auto=format&fit=crop",
    available: true,
  },

  // Wine
  {
    id: "wine-1",
    category: "wine",
    name: {
      en: "Cabernet Sauvignon",
      tr: "Cabernet Sauvignon",
    },
    description: {
      en: "Full-bodied red wine with dark berry and oak notes.",
      tr: "Koyu orman meyveleri ve meşe notaları taşıyan gövdeli kırmızı şarap.",
    },
    price: 15,
    image:
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=1200&auto=format&fit=crop",
    available: true,
  },
  {
    id: "wine-2",
    category: "wine",
    name: {
      en: "Chardonnay Reserve",
      tr: "Chardonnay Reserve",
    },
    description: {
      en: "Rich white wine with citrus, vanilla, and buttery finish.",
      tr: "Narenciye, vanilya ve tereyağımsı bitişe sahip zengin beyaz şarap.",
    },
    price: 14,
    image:
      "https://images.unsplash.com/photo-1569919659476-f0852f6834b7?q=80&w=1200&auto=format&fit=crop",
    available: true,
  },
];
