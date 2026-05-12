import { MenuItem } from "@/types/menu";


export const MENU_ITEMS: MenuItem[] = [
  // Starters
  {
    id: "starter-1",
    category: "Starters",
    name: "Charred Octopus",
    description:
      "Smoked paprika, lemon oil, ember-roasted potatoes, sea salt.",
    price: 28,
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop",
    featured: true,
    available: true,
  },
  {
    id: "starter-2",
    category: "Starters",
    name: "Burrata & Heirloom Tomatoes",
    description:
      "Creamy burrata, basil oil, cherry tomatoes, aged balsamic.",
    price: 18,
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1200&auto=format&fit=crop",
    vegetarian: true,
    available: true,
  },
  {
    id: "starter-3",
    category: "Starters",
    name: "Truffle Fries",
    description:
      "Crispy fries, parmesan, parsley, black truffle aioli.",
    price: 14,
    image:
      "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=1200&auto=format&fit=crop",
    vegetarian: true,
    available: true,
  },

  // Main Courses
  {
    id: "main-1",
    category: "Main Courses",
    name: "Wagyu Burger",
    description:
      "Aged cheddar, caramelized onions, brioche bun, truffle mayo.",
    price: 34,
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200&auto=format&fit=crop",
    featured: true,
    available: true,
  },
  {
    id: "main-2",
    category: "Main Courses",
    name: "Truffle Tagliatelle",
    description:
      "Fresh pasta, brown butter, aged parmesan, black truffle.",
    price: 32,
    image:
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=1200&auto=format&fit=crop",
    vegetarian: true,
    available: false,
  },
  {
    id: "main-3",
    category: "Main Courses",
    name: "Spicy Grilled Salmon",
    description:
      "Chili glaze, asparagus, roasted garlic puree, lemon zest.",
    price: 36,
    image:
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=1200&auto=format&fit=crop",
    spicy: true,
    available: true,
  },

  // Desserts
  {
    id: "dessert-1",
    category: "Desserts",
    name: "Basque Cheesecake",
    description:
      "Creamy cheesecake with vanilla bean and berry compote.",
    price: 14,
    image:
      "https://images.unsplash.com/photo-1567171466295-4afa63d45416?q=80&w=1200&auto=format&fit=crop",
    featured: true,
    vegetarian: true,
    available: true,
  },
  {
    id: "dessert-2",
    category: "Desserts",
    name: "Chocolate Lava Cake",
    description:
      "Warm molten chocolate cake with vanilla ice cream.",
    price: 16,
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=1200&auto=format&fit=crop",
    vegetarian: true,
    available: true,
  },

  // Cocktails
  {
    id: "cocktail-1",
    category: "Cocktails",
    name: "Midnight Negroni",
    description:
      "Gin, cacao vermouth, orange bitters, smoked orange peel.",
    price: 18,
    image:
      "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1200&auto=format&fit=crop",
    featured: true,
    available: true,
  },
  {
    id: "cocktail-2",
    category: "Cocktails",
    name: "Espresso Martini",
    description:
      "Vodka, espresso, coffee liqueur, dark chocolate dust.",
    price: 17,
    image:
      "https://images.unsplash.com/photo-1575650772417-e6b418b0d06d?q=80&w=1200&auto=format&fit=crop",
    available: true,
  },
  {
    id: "cocktail-3",
    category: "Cocktails",
    name: "Smoked Old Fashioned",
    description:
      "Bourbon, bitters, smoked oak aroma, brown sugar syrup.",
    price: 19,
    image:
      "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=1200&auto=format&fit=crop",
    available: true,
  },

  // Coffee
  {
    id: "coffee-1",
    category: "Coffee",
    name: "Flat White",
    description:
      "Double ristretto with silky microfoam milk.",
    price: 6,
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop",
    available: true,
  },
  {
    id: "coffee-2",
    category: "Coffee",
    name: "Spanish Latte",
    description:
      "Espresso, steamed milk, condensed milk, cinnamon.",
    price: 7,
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1200&auto=format&fit=crop",
    available: true,
  },

  // Wine
  {
    id: "wine-1",
    category: "Wine",
    name: "Cabernet Sauvignon",
    description:
      "Full-bodied red wine with dark berry and oak notes.",
    price: 15,
    image:
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=1200&auto=format&fit=crop",
    available: true,
  },
  {
    id: "wine-2",
    category: "Wine",
    name: "Chardonnay Reserve",
    description:
      "Rich white wine with citrus, vanilla, and buttery finish.",
    price: 14,
    image:
      "https://images.unsplash.com/photo-1569919659476-f0852f6834b7?q=80&w=1200&auto=format&fit=crop",
    available: true,
  },
];