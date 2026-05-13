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
      en: "Tender octopus finished over flame with bright coastal flavor and a smoky Mediterranean edge.",
      tr: "Ateşte mühürlenmiş yumuşacık ahtapot; ferah, isli ve Akdeniz dokunuşlu.",
    },
    price: 28,
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop",
    featured: true,
    available: true,
    ingredients: {
      en: "Octopus, smoked paprika, lemon oil, potatoes, sea salt",
      tr: "Ahtapot, füme paprika, limon yağı, patates, deniz tuzu",
    },
    allergens: [
      {
        en: "Seafood",
        tr: "Deniz ürünü",
      },
    ],
    calories: 420,
  },
  {
    id: "starter-2",
    category: "starters",
    name: {
      en: "Burrata & Heirloom Tomatoes",
      tr: "Burrata ve Domates",
    },
    description: {
      en: "A fresh, creamy starter that balances garden sweetness with a silky, indulgent finish.",
      tr: "Bahçe tazeliğini kremamsı ve zarif bir bitişle buluşturan hafif bir başlangıç.",
    },
    price: 18,
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1200&auto=format&fit=crop",
    vegetarian: true,
    available: true,
    ingredients: {
      en: "Burrata, heirloom tomatoes, basil oil, aged balsamic",
      tr: "Burrata, domates, fesleğen yağı, yıllanmış balzamik",
    },
    allergens: [
      {
        en: "Dairy",
        tr: "Süt ürünü",
      },
    ],
    calories: 360,
  },
  {
    id: "starter-3",
    category: "starters",
    name: {
      en: "Truffle Fries",
      tr: "Trüflü Patates",
    },
    description: {
      en: "Golden and crisp with a deep truffle aroma, made for sharing with the table.",
      tr: "Altın rengi, çıtır ve yoğun trüf aromalı; masada paylaşmak için ideal.",
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
      en: "A rich bistro burger with layered umami, soft sweetness, and a polished truffle finish.",
      tr: "Katmanlı umami, hafif tatlılık ve şık trüf dokunuşuyla zengin bir bistro burger.",
    },
    price: 34,
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200&auto=format&fit=crop",
    featured: true,
    available: true,
    ingredients: {
      en: "Wagyu beef, cheddar, caramelized onion, brioche, truffle mayo",
      tr: "Wagyu eti, cheddar, karamelize soğan, brioche, trüflü mayonez",
    },
    allergens: [
      {
        en: "Gluten",
        tr: "Gluten",
      },
      {
        en: "Dairy",
        tr: "Süt ürünü",
      },
    ],
    calories: 820,
  },
  {
    id: "main-2",
    category: "main-courses",
    name: {
      en: "Truffle Tagliatelle",
      tr: "Trüflü Tagliatelle",
    },
    description: {
      en: "Silky handmade pasta with a luxurious aroma and a comforting, buttery depth.",
      tr: "Lüks aromalı, tereyağlı derinliği olan ipeksi dokuda el yapımı makarna.",
    },
    price: 32,
    image:
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=1200&auto=format&fit=crop",
    vegetarian: true,
    available: false,
    ingredients: {
      en: "Fresh pasta, brown butter, parmesan, black truffle",
      tr: "Taze makarna, kahverengi tereyağı, parmesan, siyah trüf",
    },
    allergens: [
      {
        en: "Gluten",
        tr: "Gluten",
      },
      {
        en: "Dairy",
        tr: "Süt ürünü",
      },
    ],
    calories: 610,
  },
  {
    id: "main-3",
    category: "main-courses",
    name: {
      en: "Spicy Grilled Salmon",
      tr: "Acılı Izgara Somon",
    },
    description: {
      en: "Bright, gently spicy salmon with a clean finish and a refined roasted warmth.",
      tr: "Ferah, hafif acılı ve zarif köz aromasıyla dengeli bir somon tabağı.",
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
      en: "Burnished, creamy, and deeply comforting with a delicate sweet-tart contrast.",
      tr: "Yanık üst dokusu, kremamsı içi ve hafif mayhoş dengesiyle rafine bir tatlı.",
    },
    price: 14,
    image:
      "https://images.unsplash.com/photo-1567171466295-4afa63d45416?q=80&w=1200&auto=format&fit=crop",
    featured: true,
    vegetarian: true,
    available: true,
    ingredients: {
      en: "Cream cheese, vanilla bean, eggs, berry compote",
      tr: "Krem peynir, vanilya çekirdeği, yumurta, orman meyvesi kompostosu",
    },
    allergens: [
      {
        en: "Dairy",
        tr: "Süt ürünü",
      },
      {
        en: "Eggs",
        tr: "Yumurta",
      },
    ],
    calories: 470,
  },
  {
    id: "dessert-2",
    category: "desserts",
    name: {
      en: "Chocolate Lava Cake",
      tr: "Akışkan Çikolatalı Kek",
    },
    description: {
      en: "A warm, indulgent chocolate dessert with a molten center and a cool vanilla finish.",
      tr: "Akışkan çikolata kalbi ve serin vanilya bitişiyle yoğun, sıcak bir tatlı.",
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
      en: "A darker, more aromatic Negroni with bittersweet depth and a smoky citrus lift.",
      tr: "Tatlı-acı derinliği ve isli narenciye ferahlığıyla daha koyu, aromatik bir Negroni.",
    },
    price: 18,
    image:
      "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1200&auto=format&fit=crop",
    featured: true,
    available: true,
    ingredients: {
      en: "Gin, cacao vermouth, orange bitters, smoked orange peel",
      tr: "Cin, kakao vermut, portakal bitters, isli portakal kabuğu",
    },
    allergens: [
      {
        en: "Alcohol",
        tr: "Alkol",
      },
    ],
    calories: 210,
  },
  {
    id: "cocktail-2",
    category: "cocktails",
    name: {
      en: "Espresso Martini",
      tr: "Espresso Martini",
    },
    description: {
      en: "Velvety, energetic, and after-dinner ready with a bold espresso character.",
      tr: "Kadifemsi, canlı ve güçlü espresso karakteriyle yemek sonrası için ideal.",
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
      en: "A slow-sipping classic with warm oak smoke and a smooth, rounded sweetness.",
      tr: "Sıcak meşe isi ve yuvarlak tatlılığıyla yavaş içimli klasik bir kokteyl.",
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
      en: "Smooth, balanced, and velvety with a concentrated espresso backbone.",
      tr: "Yoğun espresso karakteriyle dengeli, pürüzsüz ve kadifemsi.",
    },
    price: 6,
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop",
    available: true,
    ingredients: {
      en: "Double ristretto, steamed milk",
      tr: "Double ristretto, buharla ısıtılmış süt",
    },
    allergens: [
      {
        en: "Dairy",
        tr: "Süt ürünü",
      },
    ],
    calories: 120,
  },
  {
    id: "coffee-2",
    category: "coffee",
    name: {
      en: "Spanish Latte",
      tr: "Spanish Latte",
    },
    description: {
      en: "Creamy and gently sweet, with warm spice and a soft café-style finish.",
      tr: "Kremamsı, hafif tatlı; sıcak baharat dokunuşu ve yumuşak kahve bitişiyle.",
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
      en: "A bold, structured red with dark fruit depth and a polished oak finish.",
      tr: "Koyu meyve derinliği ve rafine meşe bitişiyle güçlü, yapılı bir kırmızı.",
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
      en: "Elegant and rounded, with bright freshness and a softly luxurious finish.",
      tr: "Ferah canlılığı ve yumuşak lüks bitişiyle zarif, yuvarlak bir beyaz.",
    },
    price: 14,
    image:
      "https://images.unsplash.com/photo-1569919659476-f0852f6834b7?q=80&w=1200&auto=format&fit=crop",
    available: true,
  },
];
