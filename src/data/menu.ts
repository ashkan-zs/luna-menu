import type { Category, MenuItem } from "@/types/menu";

export const CATEGORIES: Category[] = [
  {
    id: "breakfast",
    label: {
      en: "Breakfast",
      tr: "Kahvaltı",
    },
  },
  {
    id: "brunch",
    label: {
      en: "Brunch",
      tr: "Brunch",
    },
  },
  {
    id: "starters",
    label: {
      en: "Small Plates",
      tr: "Başlangıçlar",
    },
  },
  {
    id: "salads",
    label: {
      en: "Salads",
      tr: "Salatalar",
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
    id: "sides",
    label: {
      en: "Sides",
      tr: "Yancılar",
    },
  },
  {
    id: "desserts",
    label: {
      en: "Sweets & Desserts",
      tr: "Tatlılar",
    },
  },
  {
    id: "bakery",
    label: {
      en: "Bakery & Pastry",
      tr: "Unlu Mamüller",
    },
  },
  {
    id: "coffee",
    label: {
      en: "Specialty Coffee",
      tr: "Nitelikli Kahveler",
    },
  },
  {
    id: "tea",
    label: {
      en: "Tea & Infusions",
      tr: "Bitki Çayları & Demlemeler",
    },
  },
  {
    id: "mocktails",
    label: {
      en: "Zero-Proof Mocktails",
      tr: "Alkolsuz Kokteyller",
    },
  },
  {
    id: "cocktails",
    label: {
      en: "Craft Cocktails",
      tr: "İmza Kokteyller",
    },
  },
  {
    id: "spirits",
    label: {
      en: "Spirits",
      tr: "Yüksek Alkollü İçkiler",
    },
  },
  {
    id: "beer",
    label: {
      en: "Craft Beer",
      tr: "Biralar",
    },
  },
  {
    id: "wine",
    label: {
      en: "Wine Selection",
      tr: "Şaraplar",
    },
  },
  {
    id: "soft-drinks",
    label: {
      en: "Refreshments",
      tr: "Soğuk İçecekler",
    },
  },
];

export const MENU_ITEMS: MenuItem[] = [
  // --- BREAKFAST & BRUNCH ---
  {
    id: "br-1",
    category: "breakfast",
    name: {
      en: "Avocado Sourdough Toast",
      tr: "Avokadolu Ekşi Mayalı Tost",
    },
    description: {
      en: "Crushed avocado, poached organic eggs, feta cheese, and chili flakes on artisanal sourdough bread.",
      tr: "Ekşi mayalı ekmek üzerinde ezilmiş avokado, poşe organik yumurta, beyaz peynir ve pul biber.",
    },
    price: 240,
    image: "/images/menu/avocado-toast.jpg",
    featured: true,
    available: true,
    ingredients: {
      en: "Sourdough bread, avocado, organic eggs, feta cheese, chili flakes, olive oil, sea salt.",
      tr: "Ekşi mayalı ekmek, avokado, organik yumurta, beyaz peynir, pul biber, zeytinyağı, deniz tuzu.",
    },
    allergens: [
      {
        en: "Gluten",
        tr: "Gluten",
      },
      {
        en: "Eggs",
        tr: "Yumurta",
      },
      {
        en: "Dairy",
        tr: "Süt Ürünleri",
      },
    ],
    calories: 520,
    protein: 22,
    carbs: 38,
    fats: 31,
    tags: ["vegetarian", "chef_choice"],
  },
  {
    id: "br-2",
    category: "brunch",
    name: {
      en: "Eggs Benedict with Salmon",
      tr: "Somonlu Eggs Benedict",
    },
    description: {
      en: "Poached organic eggs and smoked salmon on toasted brioche, finished with velvety house-made hollandaise sauce and fresh chives.",
      tr: "Kızarmış brioche ekmeği üzerinde poşe organik yumurta ve tütsülenmiş somon, kadifemsi ev yapımı holandez sos ve taze frenk soğanı ile servis edilir.",
    },
    price: 320,
    image: "/images/menu/eggs-benedict.jpg",
    featured: true,
    available: true,
    ingredients: {
      en: "Brioche bread, smoked salmon, organic eggs, hollandaise sauce, butter, lemon, chives, black pepper.",
      tr: "Brioche ekmeği, tütsülenmiş somon, organik yumurta, holandez sos, tereyağı, limon, frenk soğanı, karabiber.",
    },
    allergens: [
      {
        en: "Eggs",
        tr: "Yumurta",
      },
      {
        en: "Gluten",
        tr: "Gluten",
      },
      {
        en: "Dairy",
        tr: "Süt Ürünleri",
      },
      {
        en: "Fish",
        tr: "Balık",
      },
    ],
    calories: 640,
    protein: 34,
    carbs: 36,
    fats: 41,
    tags: ["chef_choice"],
  },

  // --- STARTERS & SALADS ---
  {
    id: "st-1",
    category: "starters",
    name: {
      en: "Truffle Parmesan Fries",
      tr: "Trüflü Parmesanlı Patates",
    },
    description: {
      en: "Crispy hand-cut potatoes finished with white truffle oil, aged parmesan, rosemary, and flaky sea salt.",
      tr: "Beyaz trüf yağı, olgun parmesan, taze biberiye ve deniz tuzu ile tamamlanan çıtır el kesimi patates.",
    },
    price: 210,
    image: "/images/menu/truffle-fries.jpg",
    featured: true,
    available: true,
    ingredients: {
      en: "Hand-cut potatoes, white truffle oil, parmesan cheese, rosemary, olive oil, sea salt, black pepper.",
      tr: "El kesimi patates, beyaz trüf yağı, parmesan peyniri, biberiye, zeytinyağı, deniz tuzu, karabiber.",
    },
    allergens: [
      {
        en: "Dairy",
        tr: "Süt Ürünleri",
      },
    ],
    calories: 540,
    protein: 12,
    carbs: 58,
    fats: 29,
    tags: ["vegetarian", "signature"],
  },
  {
    id: "st-2",
    category: "starters",
    name: {
      en: "Crispy Calamari",
      tr: "Çıtır Kalamar",
    },
    description: {
      en: "Lightly battered baby calamari served with house tartar sauce, charred lemon, and sea salt flakes.",
      tr: "Ev yapımı tartar sos, közlenmiş limon ve deniz tuzu eşliğinde servis edilen hafif pane bebek kalamar.",
    },
    price: 340,
    image: "/images/menu/crispy-calamari.jpg",
    featured: false,
    available: true,
    ingredients: {
      en: "Baby calamari, flour coating, tartar sauce, lemon, parsley, sea salt, black pepper.",
      tr: "Bebek kalamar, un kaplama, tartar sos, limon, maydanoz, deniz tuzu, karabiber.",
    },
    allergens: [
      { en: "Seafood", tr: "Deniz Ürünleri" },
      { en: "Gluten", tr: "Gluten" },
      { en: "Eggs", tr: "Yumurta" },
    ],
    calories: 480,
    protein: 28,
    carbs: 32,
    fats: 26,
    tags: ["seafood"],
  },
  {
    id: "sl-1",
    category: "salads",
    name: {
      en: "Goat Cheese & Fig Salad",
      tr: "Keçi Peynirli İncir Salatası",
    },
    description: {
      en: "Warm crusted goat cheese, dried figs, candied walnuts, and seasonal greens finished with aged balsamic glaze.",
      tr: "Olgun balzamik sos ile tamamlanan ılık keçi peyniri, kuru incir, karamelize ceviz ve mevsim yeşillikleri.",
    },
    price: 260,
    image: "/images/menu/goat-cheese-salad.jpg",
    featured: true,
    available: true,
    ingredients: {
      en: "Goat cheese, dried figs, mixed greens, candied walnuts, balsamic glaze, olive oil.",
      tr: "Keçi peyniri, kuru incir, Akdeniz yeşillikleri, karamelize ceviz, balzamik sos, zeytinyağı.",
    },
    allergens: [
      { en: "Dairy", tr: "Süt Ürünleri" },
      { en: "Nuts", tr: "Kuruyemiş" },
    ],
    calories: 420,
    protein: 14,
    carbs: 28,
    fats: 26,
    tags: ["vegetarian", "signature", "seasonal"],
  },

  // --- MAIN COURSES & SIDES ---
  {
    id: "mc-1",
    category: "main-courses",
    name: {
      en: "Slow-Cooked Rib Eye",
      tr: "Ağır Ateşte Pişmiş Antrikot",
    },
    description: {
      en: "Tender slow-cooked rib eye served with wild mushroom ragout, parsnip purée, and red wine reduction.",
      tr: "Yaban mantarı ragu, yaban havucu püresi ve kırmızı şarap sosu eşliğinde ağır ateşte pişmiş dana antrikot.",
    },
    price: 680,
    image: "/images/menu/rib-eye.jpg",
    featured: true,
    available: true,
    ingredients: {
      en: "Beef rib eye, wild mushrooms, parsnip purée, butter, rosemary, red wine sauce.",
      tr: "Dana antrikot, yaban mantarı, yaban havucu püresi, tereyağı, biberiye, kırmızı şarap sosu.",
    },
    allergens: [{ en: "Dairy", tr: "Süt Ürünleri" }],
    calories: 920,
    protein: 62,
    carbs: 18,
    fats: 64,
    tags: ["chef_choice", "signature"],
  },
  {
    id: "mc-2",
    category: "main-courses",
    name: {
      en: "Pan-Seared Sea Bass",
      tr: "Izgara Deniz Levreği",
    },
    description: {
      en: "Crispy-skinned sea bass served over sautéed baby spinach with a velvety lemon butter sauce.",
      tr: "Sote bebek ıspanak yatağında, limonlu tereyağı sos ile servis edilen çıtır derili deniz levreği.",
    },
    price: 540,
    image: "/images/menu/sea-bass.jpg",
    featured: false,
    available: true,
    ingredients: {
      en: "Sea bass fillet, baby spinach, lemon butter sauce, olive oil, garlic, herbs.",
      tr: "Deniz levreği fileto, bebek ıspanak, limonlu tereyağı sos, zeytinyağı, sarımsak, otlar.",
    },
    allergens: [
      { en: "Fish", tr: "Balık" },
      { en: "Dairy", tr: "Süt Ürünleri" },
    ],
    calories: 610,
    protein: 44,
    carbs: 10,
    fats: 39,
    tags: ["seafood", "seasonal"],
  },
  {
    id: "mc-3",
    category: "main-courses",
    name: {
      en: "Spicy Rigatoni Arrabbiata",
      tr: "Acılı Rigatoni Arrabbiata",
    },
    description: {
      en: "Rigatoni pasta tossed in a fiery tomato, garlic, and chili sauce finished with fresh basil.",
      tr: "Taze fesleğen ile tamamlanan domates, sarımsak ve acı biber soslu rigatoni makarna.",
    },
    price: 310,
    image: "/images/menu/rigatoni.jpg",
    featured: false,
    available: true,
    ingredients: {
      en: "Rigatoni pasta, tomato sauce, garlic, chili peppers, basil, olive oil, parmesan.",
      tr: "Rigatoni makarna, domates sosu, sarımsak, acı biber, fesleğen, zeytinyağı, parmesan.",
    },
    allergens: [
      { en: "Gluten", tr: "Gluten" },
      { en: "Dairy", tr: "Süt Ürünleri" },
    ],
    calories: 690,
    protein: 20,
    carbs: 92,
    fats: 24,
    tags: ["spicy", "vegetarian"],
  },
  {
    id: "sd-1",
    category: "sides",
    name: {
      en: "Charred Broccolini",
      tr: "Izgara Brokoli",
    },
    description: {
      en: "Tender broccolini grilled with garlic oil and finished with toasted almond flakes.",
      tr: "Sarımsak yağı ile ızgara edilmiş ve kavrulmuş badem dilimleriyle tamamlanan taze brokoli.",
    },
    price: 120,
    image: "/images/menu/broccolini.jpg",
    featured: false,
    available: true,
    ingredients: {
      en: "Broccolini, garlic oil, toasted almonds, olive oil, sea salt.",
      tr: "Brokoli, sarımsak yağı, kavrulmuş badem, zeytinyağı, deniz tuzu.",
    },
    allergens: [{ en: "Nuts", tr: "Kuruyemiş" }],
    calories: 180,
    protein: 6,
    carbs: 12,
    fats: 11,
    tags: ["vegetarian"],
  },

  // --- BAKERY & DESSERTS ---
  {
    id: "bk-1",
    category: "bakery",
    name: { en: "Almond Croissant", tr: "Bademli Kruvasan" },
    description: {
      en: "Twice-baked butter croissant filled with rich almond frangipane and topped with flaked almonds.",
      tr: "Bademli krema dolgulu ve badem dilimleri ile süslenmiş, fırınlanmış tereyağlı kruvasan.",
    },
    price: 155,
    image: "/images/menu/almond-croissant.jpg",
    vegetarian: true,
    available: true,
  },
  {
    id: "ds-1",
    category: "desserts",
    name: { en: "San Sebastian Cheesecake", tr: "San Sebastian Cheesecake" },
    description: {
      en: "Crustless baked cheesecake with a deeply caramelized top and a rich, creamy core.",
      tr: "Karamelize üst yüzey ve içi yoğun kıvamlı, tabansız fırınlanmış cheesecake.",
    },
    price: 190,
    image: "/images/menu/san-sebastian.jpg",
    vegetarian: true,
    available: true,
  },
  {
    id: "ds-2",
    category: "desserts",
    name: { en: "Vegan Chocolate Tart", tr: "Vegan Çikolatalı Tart" },
    description: {
      en: "Dark chocolate ganache set in an almond-avocado crust, lightly dusted with sea salt flakes.",
      tr: "Badem ve avokadolu taban üzerinde bitter çikolatalı ganaj, hafif deniz tuzu taneleri ile.",
    },
    price: 210,
    image: "/images/menu/chocolate-tart.jpg",
    vegetarian: true,
    available: true,
  },

  // --- COFFEE & TEA ---
  {
    id: "cf-1",
    category: "coffee",
    name: { en: "Single-Origin Pour Over", tr: "Nitelikli Filtre Kahve (V60)" },
    description: {
      en: "Hand-brewed single-origin beans with distinct notes of citrus and jasmine.",
      tr: "Narenciye ve yasemin notalarına sahip, el ile demlenmiş nitelikli tek köken kahve.",
    },
    price: 140,
    image: "/images/menu/pour-over.jpg",
    available: true,
  },
  {
    id: "cf-2",
    category: "coffee",
    name: { en: "Iced Flat White", tr: "Buzlu Flat White" },
    description: {
      en: "Double shot of espresso over cold milk and ice, finished with a smooth microfoam.",
      tr: "Soğuk süt ve buz üzerine çift shot espresso, pürüzsüz süt köpüğü ile.",
    },
    price: 130,
    image: "/images/menu/iced-flat-white.jpg",
    available: true,
  },
  {
    id: "cf-3",
    category: "coffee",
    name: { en: "Nitro Cold Brew", tr: "Nitro Cold Brew" },
    description: {
      en: "In-house cold brew infused with nitrogen for a rich, creamy, stout-like texture.",
      tr: "Kremsi bir doku ve yoğun bir lezzet için azot gazıyla servis edilen ev yapımı soğuk demlenmiş kahve.",
    },
    price: 150,
    image: "/images/menu/nitro-cold-brew.jpg",
    available: true,
  },
  {
    id: "te-1",
    category: "tea",
    name: { en: "Ceremonial Matcha Latte", tr: "Matcha Latte" },
    description: {
      en: "Pure Japanese ceremonial grade matcha whisked with steamed oat milk.",
      tr: "Buharda ısıtılmış yulaf sütü ile çırpılmış saf Japon seremoniyel matcha çayı.",
    },
    price: 160,
    image: "/images/menu/matcha-latte.jpg",
    available: true,
  },

  // --- ALCOHOLIC DRINKS ---
  {
    id: "ck-1",
    category: "cocktails",
    name: { en: "Smoked Bourbon Sour", tr: "İsli Bourbon Sour" },
    description: {
      en: "Premium bourbon, fresh lemon juice, organic agave, and bitters, maple-wood smoked.",
      tr: "Premium bourbon viski, taze limon suyu, organik agav ve bitter; akçaağaç isiyle.",
    },
    price: 420,
    image: "/images/menu/whiskey-sour.jpg",
    featured: true,
    tags: ["signature"],
    available: true,
  },
  {
    id: "ck-2",
    category: "cocktails",
    name: { en: "Botanical Gin Tonic", tr: "Botanik Cin Tonik" },
    description: {
      en: "Artisanal gin infused with cucumber and rosemary, topped with premium tonic water.",
      tr: "Salatalık ve biberiye ile demlenmiş zanaatkar cini, premium tonik eşliğinde.",
    },
    price: 390,
    image: "/images/menu/gin-tonic.jpg",
    available: true,
  },
  {
    id: "wn-1",
    category: "wine",
    name: { en: "Öküzgözü Boğazkere Blend", tr: "Öküzgözü Boğazkere Kupajı" },
    description: {
      en: "A robust local Turkish red wine with balanced tannins, dark fruit notes, and a spicy finish.",
      tr: "Dengeli tanenleri, koyu meyve notaları ve baharatlı bitişiyle gövdeli yerel kırmızı şarap.",
    },
    price: 360,
    image: "/images/menu/red-wine.jpg",
    available: true,
  },
  {
    id: "br-3",
    category: "beer",
    name: { en: "Local Craft IPA", tr: "Yerel Craft IPA" },
    description: {
      en: "A hoppy, amber-hued local craft beer with high citrus and floral aromas.",
      tr: "Yüksek narenciye ve çiçeksi aromalara sahip, yoğun şerbetçiotlu yerel zanaat birası.",
    },
    price: 220,
    image: "/images/menu/craft-beer.jpg",
    available: true,
  },

  // --- NON-ALCOHOLIC REFRESHMENTS ---
  {
    id: "mk-1",
    category: "mocktails",
    name: { en: "Cucumber Basil Cooler", tr: "Salatalıklı Fesleğenli Cooler" },
    description: {
      en: "Fresh cucumber juice, muddled basil leaves, lime, and club soda over crushed ice.",
      tr: "Kırık buz üzerinde taze salatalık suyu, ezilmiş fesleğen yaprakları, misket limonu ve soda.",
    },
    price: 180,
    image: "/images/menu/cucumber-cooler.jpg",
    available: true,
  },
  {
    id: "sf-1",
    category: "soft-drinks",
    name: {
      en: "Homemade Ginger Lemonade",
      tr: "Ev Yapımı Zencefilli Limonata",
    },
    description: {
      en: "Freshly squeezed lemons infused with organic ginger juice and fresh mint.",
      tr: "Taze sıkılmış limon suyu, organik zencefil özü ve taze nane yaprakları ile.",
    },
    price: 130,
    image: "/images/menu/lemonade.jpg",
    available: true,
  },
];
