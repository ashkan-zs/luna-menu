import type { CategorySeed, MenuItemSeed } from "@/types/menu";

const LUNA_BISTRO_SLUG = "luna-bistro";
const OTEKI_RESTAURANT_SLUG = "oteki-restaurant";

const LUNA_BISTRO_CATEGORIES: Omit<CategorySeed, "restaurantId">[] = [
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

const OTEKI_RESTAURANT_CATEGORIES: Omit<CategorySeed, "restaurantId">[] = [
  {
    id: "breakfast",
    label: { tr: "Kahvaltı", en: "Breakfast" },
    description: {
      tr: "Kahvaltı tabaklarının yanında Americano veya filtre kahve ikramdır.\nHafta içi 13.00 - Hafta sonu 16.00",
      en: "All breakfast plates are served with a complimentary Americano or filter coffee.\nWeekdays until 1 PM - Weekends until 4 PM",
    },
  },
  {
    id: "toast-and-sandwich",
    label: { tr: "Tost & Sandviç", en: "Toast & Sandwich" },
    description: {
      tr: "Fırından sıcak, doyurucu ve rahat tabaklar.",
      en: "Warm from the oven, generous, and easygoing plates.",
    },
  },
  {
    id: "pizza",
    label: { tr: "Pizza", en: "Pizza" },
    description: {
      tr: "Özel ekşi mayamızla yapılan pizza hamurlarımız minimum 3-5 gün dinlenmektedir.",
      en: "Our pizzas are made with a special sourdough starter and a dough rested for at least 3-5 days.",
    },
  },
  {
    id: "pasta",
    label: { tr: "Makarna", en: "Pasta" },
    description: {
      tr: "Ev yapımı makarnalarımız taze yapılmaktadır.\nMakarnaların yapımında %100 semolina un kullanılmaktadır.",
      en: "Our handmade pastas are freshly made daily.\nAll of our pasta doughs are prepared using 100% semolina flour.",
    },
  },
  {
    id: "burgers-and-wraps",
    label: { tr: "Burger & Wrap", en: "Burger & Wrap" },
    description: {
      tr: "Patates, sos ve bol malzemeli rahat favoriler.",
      en: "Relaxed favorites with fries, sauces, and generous fillings.",
    },
  },
  {
    id: "salads",
    label: { tr: "Salatalar", en: "Salads" },
    description: {
      tr: "Yeşillikler, proteinler ve ferah tabaklar.",
      en: "Greens, proteins, and fresh plates.",
    },
  },
  {
    id: "coffee",
    label: { tr: "Kahve", en: "Coffee" },
    description: {
      tr: "Taze kavrulmuş kahve.",
      en: "Freshly roasted coffee beans.",
    },
  },
  {
    id: "signature-coffee",
    label: { tr: "İmza Kahveler", en: "Signature Coffee" },
    description: {
      tr: "Taze kavrulmuş kahve.",
      en: "Freshly roasted coffee beans.",
    },
  },
  {
    id: "drinks",
    label: { tr: "İçecekler", en: "Drinks" },
    description: {
      tr: "Çay, Türk kahvesi ve ferahlatıcı soğuk içecekler.",
      en: "Tea, Turkish coffee, and refreshing cold drinks.",
    },
  },
];

export const CATEGORIES: CategorySeed[] = [
  ...LUNA_BISTRO_CATEGORIES.map((category) => ({
    ...category,
    restaurantId: LUNA_BISTRO_SLUG,
  })),
  ...OTEKI_RESTAURANT_CATEGORIES.map((category) => ({
    ...category,
    restaurantId: OTEKI_RESTAURANT_SLUG,
  })),
];

const LUNA_BISTRO_MENU_ITEMS: Omit<MenuItemSeed, "restaurantId">[] = [
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
    image: "/images/luna-bistro/menu/avocado-toast.jpg",
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
    nutrition: {
      calories: 520,
      protein: 22,
      carbs: 38,
      fats: 31,
    },
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
    image: "/images/luna-bistro/menu/eggs-benedict.jpg",
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
    nutrition: {
      calories: 640,
      protein: 34,
      carbs: 36,
      fats: 41,
    },
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
    image: "/images/luna-bistro/menu/truffle-fries.jpg",
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
    nutrition: {
      calories: 540,
      protein: 12,
      carbs: 58,
      fats: 29,
    },
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
    image: "/images/luna-bistro/menu/crispy-calamari.jpg",
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
    nutrition: {
      calories: 480,
      protein: 28,
      carbs: 32,
      fats: 26,
    },
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
    image: "/images/luna-bistro/menu/goat-cheese-salad.jpg",
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
    nutrition: {
      calories: 420,
      protein: 14,
      carbs: 28,
      fats: 26,
    },
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
    image: "/images/luna-bistro/menu/rib-eye.jpg",
    featured: true,
    available: true,
    ingredients: {
      en: "Beef rib eye, wild mushrooms, parsnip purée, butter, rosemary, red wine sauce.",
      tr: "Dana antrikot, yaban mantarı, yaban havucu püresi, tereyağı, biberiye, kırmızı şarap sosu.",
    },
    allergens: [{ en: "Dairy", tr: "Süt Ürünleri" }],
    nutrition: {
      calories: 920,
      protein: 62,
      carbs: 18,
      fats: 64,
    },
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
    image: "/images/luna-bistro/menu/sea-bass.jpg",
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
    nutrition: {
      calories: 610,
      protein: 44,
      carbs: 10,
      fats: 39,
    },
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
    image: "/images/luna-bistro/menu/rigatoni.jpg",
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
    nutrition: {
      calories: 690,
      protein: 20,
      carbs: 92,
      fats: 24,
    },
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
    image: "/images/luna-bistro/menu/broccolini.jpg",
    featured: false,
    available: true,
    ingredients: {
      en: "Broccolini, garlic oil, toasted almonds, olive oil, sea salt.",
      tr: "Brokoli, sarımsak yağı, kavrulmuş badem, zeytinyağı, deniz tuzu.",
    },
    allergens: [{ en: "Nuts", tr: "Kuruyemiş" }],
    nutrition: {
      calories: 180,
      protein: 6,
      carbs: 12,
      fats: 11,
    },
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
    image: "/images/luna-bistro/menu/almond-croissant.jpg",
    available: true,
    tags: ["vegetarian"],
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
    image: "/images/luna-bistro/menu/san-sebastian.jpg",
    available: true,
    tags: ["vegetarian"],
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
    image: "/images/luna-bistro/menu/chocolate-tart.jpg",
    available: true,
    tags: ["vegetarian"],
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
    image: "/images/luna-bistro/menu/pour-over.jpg",
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
    image: "/images/luna-bistro/menu/iced-flat-white.jpg",
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
    image: "/images/luna-bistro/menu/nitro-cold-brew.jpg",
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
    image: "/images/luna-bistro/menu/matcha-latte.jpg",
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
    image: "/images/luna-bistro/menu/whiskey-sour.jpg",
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
    image: "/images/luna-bistro/menu/gin-tonic.jpg",
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
    image: "/images/luna-bistro/menu/red-wine.jpg",
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
    image: "/images/luna-bistro/menu/craft-beer.jpg",
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
    image: "/images/luna-bistro/menu/cucumber-cooler.jpg",
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
    image: "/images/luna-bistro/menu/lemonade.jpg",
    available: true,
  },
];

const OTEKI_RESTAURANT_MENU_ITEMS: Omit<MenuItemSeed, "restaurantId">[] = [
  {
    id: "kruvasan-benedict",
    category: "breakfast",
    name: { tr: "Kruvasan Benedict", en: "Croissant Benedict" },
    description: {
      tr: "Kruvasan, avokado sos, hindi füme, poşe yumurta, pesto, hollandaise sos ve salata",
      en: "Croissant, avocado sauce, smoked turkey, poached egg, pesto, hollandaise sauce, and salad",
    },
    price: 435,
    image: "/images/oteki-restaurant/menu/kruvasan-benedict.avif",
    featured: true,
    tags: ["signature"],
    allergens: [
      { en: "Gluten", tr: "Gluten" },
      { en: "Eggs", tr: "Yumurta" },
      { en: "Dairy", tr: "Süt Ürünleri" },
    ],
  },
  {
    id: "pancake",
    category: "breakfast",
    name: { tr: "Pancake", en: "Pancake" },
    description: {
      tr: "Bal, çikolata, çilek, muz, badem, pudra şekeri",
      en: "Honey, chocolate, strawberry, banana, almond, powdered sugar",
    },
    price: 430,
    image: "/images/oteki-restaurant/menu/pancake.avif",
    allergens: [
      { en: "Gluten", tr: "Gluten" },
      { en: "Eggs", tr: "Yumurta" },
      { en: "Dairy", tr: "Süt Ürünleri" },
      { en: "Nuts", tr: "Kuruyemiş" },
    ],
  },
  {
    id: "kahvalti-tabagi",
    category: "breakfast",
    name: { tr: "Kahvaltı Tabağı", en: "Breakfast Plate" },
    description: {
      tr: "Ezine peyniri, hellim peyniri, kaşar peyniri, sucuk, hindi füme, siyah zeytin (çekirdekli), kayısı reçeli, çilek reçeli, çikolata kreması, ekşi mayalı ekmek ve mini salata",
      en: "Ezine cheese, halloumi cheese, cheddar cheese, sausage, smoked turkey, black olives, apricot jam, strawberry jam, chocolate cream, sourdough bread, and mini salad",
    },
    price: 440,
    image: "/images/oteki-restaurant/menu/kahvalti-tabagi.avif",
    tags: ["chef_choice"],
    allergens: [
      { en: "Gluten", tr: "Gluten" },
      { en: "Dairy", tr: "Süt Ürünleri" },
    ],
  },
  {
    id: "truflu-ricottali-scrambled-eggs",
    category: "breakfast",
    name: {
      tr: "Trüflü Ricottalı Scrambled Eggs",
      en: "Truffle Ricotta Scrambled Eggs",
    },
    description: {
      tr: "Ekşi mayalı ekmek üzerine trüflü ricotta peyniri, domates, yeşil zeytin, 3 yumurta, rende beyaz peynir, maydanoz, kapari turşusu ve sotelenmiş mantar ile biber",
      en: "Sourdough bread topped with truffle ricotta cheese, tomato, green olives, 3 eggs, grated white cheese, parsley, pickled capers, sautéed mushrooms, and peppers",
    },
    price: 435,
    image: "/images/oteki-restaurant/menu/truffle-ricotta-scrambled-eggs.avif",
    tags: ["vegetarian"],
    allergens: [
      { en: "Gluten", tr: "Gluten" },
      { en: "Eggs", tr: "Yumurta" },
      { en: "Dairy", tr: "Süt Ürünleri" },
    ],
  },
  {
    id: "avakadolu-scrambled-eggs",
    category: "breakfast",
    name: { tr: "Avakadolu Scrambled Eggs", en: "Avocado Scrambled Eggs" },
    description: {
      tr: "Ekşi mayalı ekmek üzerine avokado sos (guacamole), dilim domates, adet çırpılmış yumurta, rende beyaz peynir, maydanoz, file badem yanında kinoa ve çeri domates salatası",
      en: "Sourdough bread with avocado sauce (guacamole), sliced tomato, scrambled eggs, grated white cheese, parsley, sliced almonds, quinoa, and cherry tomato salad",
    },
    price: 435,
    image: "/images/oteki-restaurant/menu/avocado-scrambled-eggs.avif",
    tags: ["seasonal", "vegetarian"],
    allergens: [
      { en: "Gluten", tr: "Gluten" },
      { en: "Eggs", tr: "Yumurta" },
      { en: "Dairy", tr: "Süt Ürünleri" },
      { en: "Nuts", tr: "Kuruyemiş" },
    ],
  },
  {
    id: "french-tost",
    category: "breakfast",
    name: { tr: "French Tost", en: "French Toast" },
    description: {
      tr: "Brioche ekmek, yumurta, kuru kayısı, çilek, karamel sos, pudra şekeri, badem",
      en: "Brioche bread, egg, dried apricot, strawberry, caramel sauce, powdered sugar, almond",
    },
    price: 415,
    image: "/images/oteki-restaurant/menu/french-toast.avif",
    allergens: [
      { en: "Gluten", tr: "Gluten" },
      { en: "Eggs", tr: "Yumurta" },
      { en: "Dairy", tr: "Süt Ürünleri" },
      { en: "Nuts", tr: "Kuruyemiş" },
    ],
  },
  {
    id: "oteki-menemen",
    category: "breakfast",
    name: { tr: "Öteki Menemen", en: "Oteki Menemen" },
    description: {
      tr: "Domates salçası, biber, domates, tereyağı, yumurta (2 adet), kaşar, ekmek",
      en: "Tomato paste, pepper, tomato, butter, 2 eggs, cheddar cheese, bread",
    },
    price: 330,
    image: "/images/oteki-restaurant/menu/oteki-menemen.avif",
    tags: ["signature"],
    allergens: [
      { en: "Gluten", tr: "Gluten" },
      { en: "Eggs", tr: "Yumurta" },
      { en: "Dairy", tr: "Süt Ürünleri" },
    ],
  },
  {
    id: "koy-omleti",
    category: "breakfast",
    name: { tr: "Köy Omleti", en: "Village Omelette" },
    description: {
      tr: "Mantar, keçi peyniri, charleston biberli omlet, çeri domates ve rokalı mini salata yanında labne",
      en: "Omelette with mushrooms, goat cheese, charleston peppers, cherry tomatoes, arugula salad and labneh",
    },
    price: 375,
    image: "/images/oteki-restaurant/menu/koy-omleti.avif",
    tags: ["vegetarian"],
    allergens: [
      { en: "Eggs", tr: "Yumurta" },
      { en: "Dairy", tr: "Süt Ürünleri" },
    ],
  },
  {
    id: "pisi-sepet",
    category: "breakfast",
    name: { tr: "Pişi Sepet", en: "Fried Dough Basket" },
    description: {
      tr: "3 adet Öteki usulü pişi",
      en: "3 pieces of Oteki-style fried dough",
    },
    price: 220,
    image: "/images/oteki-restaurant/menu/pisi-sepet.avif",
    tags: ["signature"],
    allergens: [
      { en: "Gluten", tr: "Gluten" },
      { en: "Dairy", tr: "Süt Ürünleri" },
    ],
  },
  {
    id: "firinda-cheddar-soslu-panzarotti",
    category: "toast-and-sandwich",
    name: {
      tr: "Fırında Cheddar Soslu Panzarotti",
      en: "Baked Cheddar Sauce Panzarotti",
    },
    description: {
      tr: "Domates sos, mozzarella, sucuk, mantar, kibrit patates, yeşillik, cheddar sos ile",
      en: "Tomato sauce, mozzarella, sausage, mushroom, fries, greens with cheddar sauce",
    },
    price: 410,
    image: "/images/oteki-restaurant/menu/cheddar-panzarotti.avif",
    tags: ["chef_choice"],
    allergens: [
      { en: "Gluten", tr: "Gluten" },
      { en: "Dairy", tr: "Süt Ürünleri" },
    ],
  },
  {
    id: "firinda-alaturka-acik-tost",
    category: "toast-and-sandwich",
    name: { tr: "Fırında Alaturka Açık Tost", en: "Alaturka Open Toast" },
    description: {
      tr: "Ekşi mayalı ekmek üzerine domates sos, mozzarella peyniri, sucuk, zeytin ve mantar roka ile",
      en: "Sourdough bread with tomato sauce, mozzarella, sausage, olives, mushrooms and arugula",
    },
    price: 310,
    image: "/images/oteki-restaurant/menu/alaturka-acik-tost.avif",
    tags: ["chef_choice"],
    allergens: [
      { en: "Gluten", tr: "Gluten" },
      { en: "Dairy", tr: "Süt Ürünleri" },
    ],
  },
  {
    id: "firinda-labneli-acik-tost",
    category: "toast-and-sandwich",
    name: { tr: "Fırında Labneli Açık Tost", en: "Labneh Open Toast" },
    description: {
      tr: "Ekşi mayalı ekmek üzerine domates sos, mozzarella peyniri, labne, çeri domates roka ile",
      en: "Sourdough bread with tomato sauce, mozzarella, labneh, cherry tomato and arugula",
    },
    price: 310,
    image: "/images/oteki-restaurant/menu/labneli-acik-tost.avif",
    tags: ["vegetarian", "seasonal"],
    allergens: [
      { en: "Gluten", tr: "Gluten" },
      { en: "Dairy", tr: "Süt Ürünleri" },
    ],
  },
  {
    id: "crispy-club-sandvic",
    category: "toast-and-sandwich",
    name: { tr: "Crispy Club Sandviç", en: "Crispy Club Sandwich" },
    description: {
      tr: "Ekşi mayalı ekmek, sour cream hellim peyniri, şinitzel, cheddar, coleslaw, marul, chili garlic sos",
      en: "Sourdough bread, sour cream halloumi, schnitzel, cheddar, coleslaw, lettuce, chili garlic sauce",
    },
    price: 430,
    image: "/images/oteki-restaurant/menu/crispy-club.avif",
    tags: ["chef_choice", "spicy"],
    allergens: [
      { en: "Gluten", tr: "Gluten" },
      { en: "Dairy", tr: "Süt Ürünleri" },
      { en: "Eggs", tr: "Yumurta" },
    ],
  },
  {
    id: "firinda-pesto-tavuk-panzarotti",
    category: "toast-and-sandwich",
    name: {
      tr: "Fırında Pesto Tavuk Panzarotti",
      en: "Baked Pesto Chicken Panzarotti",
    },
    description: {
      tr: "Domates sos, mozzarella, tavuk, mantar, dilim zeytin, kibrit patates, yeşillik, pesto sos",
      en: "Tomato sauce, mozzarella, chicken, mushroom, sliced olives, fries, greens, pesto sauce",
    },
    price: 410,
    image: "/images/oteki-restaurant/menu/pesto-tavuk-panzarotti.avif",
    tags: ["seasonal"],
    allergens: [
      { en: "Gluten", tr: "Gluten" },
      { en: "Dairy", tr: "Süt Ürünleri" },
    ],
  },
  {
    id: "margarita",
    category: "pizza",
    name: { tr: "Margarita", en: "Margherita" },
    description: {
      tr: "Domates sos, mozzarella, pesto sos",
      en: "Tomato sauce, mozzarella, pesto sauce",
    },
    price: 420,
    image: "/images/oteki-restaurant/menu/margarita.avif",
    tags: ["vegetarian", "chef_choice"],
    allergens: [
      { en: "Gluten", tr: "Gluten" },
      { en: "Dairy", tr: "Süt Ürünleri" },
    ],
  },
  {
    id: "positano",
    category: "pizza",
    name: { tr: "Positano", en: "Positano" },
    description: {
      tr: "Domates sos, mozzarella, keçi peyniri, dana sucuk, siyah zeytin, çeri domates, pesto sos, mantar, kuru domates",
      en: "Tomato sauce, mozzarella, goat cheese, beef sausage, black olives, cherry tomato, pesto sauce, mushroom, dried tomato",
    },
    price: 485,
    image: "/images/oteki-restaurant/menu/positano.avif",
    tags: ["signature", "chef_choice"],
    allergens: [
      { en: "Gluten", tr: "Gluten" },
      { en: "Dairy", tr: "Süt Ürünleri" },
    ],
  },
  {
    id: "benjamin-pizza",
    category: "pizza",
    name: { tr: "Benjamin", en: "Benjamin" },
    description: {
      tr: "Domates sos, mozzarella, çeri domates, labne peyniri, parmesan peyniri, roka",
      en: "Tomato sauce, mozzarella, cherry tomatoes, labneh, parmesan, arugula",
    },
    price: 440,
    image: "/images/oteki-restaurant/menu/benjamin-pizza.avif",
    tags: ["vegetarian", "seasonal"],
    allergens: [
      { en: "Gluten", tr: "Gluten" },
      { en: "Dairy", tr: "Süt Ürünleri" },
    ],
  },
  {
    id: "bbq-tavuk",
    category: "pizza",
    name: { tr: "BBQ Tavuk", en: "BBQ Chicken" },
    description: {
      tr: "Domates sos, mozzarella, çarliston biber, tavuk parçaları, karamelize soğan, bbq sos",
      en: "Tomato sauce, mozzarella, peppers, chicken pieces, caramelized onion, BBQ sauce",
    },
    price: 475,
    image: "/images/oteki-restaurant/menu/bbq-tavuk.avif",
    tags: ["chef_choice"],
    allergens: [
      { en: "Gluten", tr: "Gluten" },
      { en: "Dairy", tr: "Süt Ürünleri" },
    ],
  },
  {
    id: "mantarli",
    category: "pizza",
    name: { tr: "Mantarlı", en: "Mushroom Pizza" },
    description: {
      tr: "Mozzarella peyniri, ricottalı trüf mantar sosu, mantar",
      en: "Mozzarella cheese, ricotta truffle mushroom sauce, mushroom",
    },
    price: 440,
    image: "/images/oteki-restaurant/menu/mantarli.avif",
    tags: ["vegetarian", "signature"],
    allergens: [
      { en: "Gluten", tr: "Gluten" },
      { en: "Dairy", tr: "Süt Ürünleri" },
    ],
  },
  {
    id: "dort-peynirli",
    category: "pizza",
    name: { tr: "Dört Peynirli", en: "Four Cheese" },
    description: {
      tr: "Mozzarella, parmesan, keçi peyniri, rokfor peyniri",
      en: "Mozzarella, parmesan, goat cheese, roquefort cheese",
    },
    price: 475,
    image: "/images/oteki-restaurant/menu/dort-peynirli.avif",
    tags: ["vegetarian"],
    allergens: [
      { en: "Gluten", tr: "Gluten" },
      { en: "Dairy", tr: "Süt Ürünleri" },
    ],
  },
  {
    id: "akdeniz",
    category: "pizza",
    name: { tr: "Akdeniz", en: "Mediterranean" },
    description: {
      tr: "Domates sos, mozzarella, çeri domates, çarliston biber, siyah zeytin, mısır",
      en: "Tomato sauce, mozzarella, cherry tomato, peppers, black olives, corn",
    },
    price: 430,
    image: "/images/oteki-restaurant/menu/akdeniz.avif",
    tags: ["vegetarian", "seasonal"],
    allergens: [
      { en: "Gluten", tr: "Gluten" },
      { en: "Dairy", tr: "Süt Ürünleri" },
    ],
  },
  {
    id: "alaturka-pizza",
    category: "pizza",
    name: { tr: "Alaturka", en: "Alaturka Pizza" },
    description: {
      tr: "Domates sos, mozzarella, dana sucuk, mantar, siyah zeytin, kekik",
      en: "Tomato sauce, mozzarella, beef sausage, mushroom, black olives, thyme",
    },
    price: 475,
    image: "/images/oteki-restaurant/menu/alaturka-pizza.avif",
    tags: ["chef_choice"],
    allergens: [
      { en: "Gluten", tr: "Gluten" },
      { en: "Dairy", tr: "Süt Ürünleri" },
    ],
  },
  {
    id: "palermo",
    category: "pizza",
    name: { tr: "Palermo", en: "Palermo" },
    description: {
      tr: "Domates sos, mozzarella, sucuk, karamelize soğan, cheddar",
      en: "Tomato sauce, mozzarella, sausage, caramelized onions, cheddar",
    },
    price: 475,
    image: "/images/oteki-restaurant/menu/palermo.avif",
    tags: ["chef_choice"],
    allergens: [
      { en: "Gluten", tr: "Gluten" },
      { en: "Dairy", tr: "Süt Ürünleri" },
    ],
  },
  {
    id: "oteki-pizza",
    category: "pizza",
    name: { tr: "Öteki", en: "Oteki" },
    description: {
      tr: "Domates sos, mozzarella, dana sosis, dana sucuk, zeytin, mantar, jalapeño",
      en: "Tomato sauce, mozzarella, beef sausage, beef sucuk, olives, mushrooms, jalapeño",
    },
    price: 475,
    image: "/images/oteki-restaurant/menu/oteki-pizza.avif",
    featured: true,
    tags: ["signature", "spicy"],
    allergens: [
      { en: "Gluten", tr: "Gluten" },
      { en: "Dairy", tr: "Süt Ürünleri" },
    ],
  },
  {
    id: "hawaiian",
    category: "pizza",
    name: { tr: "Hawaiian", en: "Hawaiian" },
    description: {
      tr: "Domates sos, mozzarella, ananas, dana salam",
      en: "Tomato sauce, mozzarella, pineapple, beef salami",
    },
    price: 490,
    image: "/images/oteki-restaurant/menu/hawaiian.avif",
    tags: ["chef_choice"],
    allergens: [
      { en: "Gluten", tr: "Gluten" },
      { en: "Dairy", tr: "Süt Ürünleri" },
    ],
  },
  {
    id: "vegan-pizza",
    category: "pizza",
    name: { tr: "Vegan", en: "Vegan" },
    description: {
      tr: "Domates sos, kabak dilimleri, köz patlıcan, mantar, California biber, zeytin, çeri domates",
      en: "Tomato sauce, zucchini slices, roasted eggplant, mushrooms, California peppers, olives, cherry tomatoes",
    },
    price: 430,
    image: "/images/oteki-restaurant/menu/vegan-pizza.avif",
    tags: ["vegan", "seasonal"],
    allergens: [{ en: "Gluten", tr: "Gluten" }],
  },
  {
    id: "vegetarian-pizza",
    category: "pizza",
    name: { tr: "Vegetarian", en: "Vegetarian" },
    description: {
      tr: "Domates sos, mozzarella, köz biber, köz patlıcan, mantar",
      en: "Tomato sauce, mozzarella, roasted peppers, roasted eggplant, mushrooms",
    },
    price: 430,
    image: "/images/oteki-restaurant/menu/vegetarian-pizza.avif",
    tags: ["vegetarian", "seasonal"],
    allergens: [
      { en: "Gluten", tr: "Gluten" },
      { en: "Dairy", tr: "Süt Ürünleri" },
    ],
  },
  {
    id: "meat-lovers",
    category: "pizza",
    name: { tr: "Meat Lovers", en: "Meat Lovers" },
    description: {
      tr: "Domates sos, mozzarella, dana salam, dana sucuk, dana sosis, mantar",
      en: "Tomato sauce, mozzarella, beef salami, beef sucuk, beef sausage, mushrooms",
    },
    price: 490,
    image: "/images/oteki-restaurant/menu/meat-lovers.avif",
    tags: ["chef_choice"],
    allergens: [
      { en: "Gluten", tr: "Gluten" },
      { en: "Dairy", tr: "Süt Ürünleri" },
    ],
  },
  {
    id: "campus",
    category: "pizza",
    name: { tr: "Campus", en: "Campus" },
    description: {
      tr: "Domates sos, mozzarella, dana sosis, mantar, zeytin, mısır, çarliston biber",
      en: "Tomato sauce, mozzarella, beef sausage, mushrooms, olives, corn, charleston pepper",
    },
    price: 475,
    image: "/images/oteki-restaurant/menu/campus.avif",
    tags: ["chef_choice"],
    allergens: [
      { en: "Gluten", tr: "Gluten" },
      { en: "Dairy", tr: "Süt Ürünleri" },
    ],
  },
  {
    id: "siena",
    category: "pizza",
    name: { tr: "Siena", en: "Siena" },
    description: {
      tr: "Domates sos, mozzarella, dana salam, dana sucuk, yeşil biber, çeri domates, kekik, karabiber, chili flakes",
      en: "Tomato sauce, mozzarella, beef salami, beef sucuk, green pepper, cherry tomatoes, oregano, black pepper, chili flakes",
    },
    price: 490,
    image: "/images/oteki-restaurant/menu/siena.avif",
    tags: ["spicy", "chef_choice"],
    allergens: [
      { en: "Gluten", tr: "Gluten" },
      { en: "Dairy", tr: "Süt Ürünleri" },
    ],
  },
  {
    id: "koz-biber-soslu-fettuccine",
    category: "pasta",
    name: { tr: "Köz Biber Soslu Fettuccine", en: "Roasted Pepper Fettuccine" },
    description: {
      tr: "Köz biber püresi, krema, tavuk, evde yapılmış parmesan, maydanoz",
      en: "Roasted pepper puree, cream, chicken, homemade parmesan, parsley",
    },
    price: 395,
    image: "/images/oteki-restaurant/menu/koz-biber-fettuccine.avif",
    tags: ["signature"],
    allergens: [
      { en: "Gluten", tr: "Gluten" },
      { en: "Dairy", tr: "Süt Ürünleri" },
    ],
  },
  {
    id: "spaghetti-ragu-bolognese",
    category: "pasta",
    name: { tr: "Spaghetti Ragu Bolognese", en: "Spaghetti Ragu Bolognese" },
    description: {
      tr: "Kıymalı domates soslu makarna, maydanoz, parmesan peyniri",
      en: "Pasta with minced meat tomato sauce, parsley, parmesan cheese",
    },
    price: 455,
    image: "/images/oteki-restaurant/menu/spaghetti-ragu.avif",
    tags: ["signature", "chef_choice"],
    allergens: [
      { en: "Gluten", tr: "Gluten" },
      { en: "Dairy", tr: "Süt Ürünleri" },
    ],
  },
  {
    id: "pesto-soslu-fettuccine",
    category: "pasta",
    name: { tr: "Pesto Soslu Fettuccine", en: "Pesto Fettuccine" },
    description: {
      tr: "Kültür mantarı, ızgara tavuk parçaları, krema, pesto sos, panko, parmesan",
      en: "Mushrooms, grilled chicken pieces, cream, pesto sauce, panko, parmesan",
    },
    price: 395,
    image: "/images/oteki-restaurant/menu/pesto-fettuccine.avif",
    tags: ["seasonal"],
    allergens: [
      { en: "Gluten", tr: "Gluten" },
      { en: "Dairy", tr: "Süt Ürünleri" },
    ],
  },
  {
    id: "gnocchi",
    category: "pasta",
    name: { tr: "Gnocchi", en: "Gnocchi" },
    description: {
      tr: "Sorrentina usulü patatesli gnocchi, fesleğen, sarımsak, zeytinyağı, mozzarella, domates sos",
      en: "Sorrentina-style potato gnocchi with basil, garlic, olive oil, mozzarella and tomato sauce",
    },
    price: 375,
    image: "/images/oteki-restaurant/menu/gnocchi.avif",
    tags: ["vegetarian"],
    allergens: [
      { en: "Gluten", tr: "Gluten" },
      { en: "Dairy", tr: "Süt Ürünleri" },
    ],
  },
  {
    id: "rigatoni-arrabbiatta",
    category: "pasta",
    name: { tr: "Rigatoni Arrabbiatta", en: "Rigatoni Arrabbiata" },
    description: {
      tr: "Domates sos, fesleğen, acı biber, sarımsak, parmesan",
      en: "Tomato sauce, basil, chili pepper, garlic, parmesan",
    },
    price: 335,
    image: "/images/oteki-restaurant/menu/rigatoni-arrabbiata.avif",
    tags: ["spicy", "vegetarian"],
    allergens: [
      { en: "Gluten", tr: "Gluten" },
      { en: "Dairy", tr: "Süt Ürünleri" },
    ],
  },
  {
    id: "fettuccine-roasted-pepper-for-two",
    category: "pasta",
    name: {
      tr: "Köz Biber Soslu Fettuccine - İki Kişilik",
      en: "Fettuccine with Roasted Pepper Sauce - For Two",
    },
    description: {
      tr: "Köz biber püresi, krema, tavuk, ceviz, parmesan ve maydanoz ile iki kişilik paylaşım porsiyonu",
      en: "A sharing portion for two with roasted red pepper puree, cream, chicken, walnuts, parmesan, and parsley",
    },
    price: 725,
    image: "/images/oteki-restaurant/menu/koz-biber-fettuccine.avif",
    tags: ["signature", "chef_choice"],
    allergens: [
      { en: "Gluten", tr: "Gluten" },
      { en: "Dairy", tr: "Süt Ürünleri" },
      { en: "Nuts", tr: "Kuruyemiş" },
    ],
  },
  {
    id: "fettuccine-pesto-for-two",
    category: "pasta",
    name: {
      tr: "Pesto Soslu Fettuccine - İki Kişilik",
      en: "Fettuccine with Pesto Sauce - For Two",
    },
    description: {
      tr: "Mantar, ızgara tavuk, krema, pesto sos, panko ve parmesan ile iki kişilik paylaşım porsiyonu",
      en: "A sharing portion for two with mushrooms, grilled chicken, cream, pesto sauce, panko, and parmesan",
    },
    price: 725,
    image: "/images/oteki-restaurant/menu/pesto-fettuccine.avif",
    tags: ["seasonal", "chef_choice"],
    allergens: [
      { en: "Gluten", tr: "Gluten" },
      { en: "Dairy", tr: "Süt Ürünleri" },
    ],
  },
  {
    id: "spaghetti-ragu-for-two",
    category: "pasta",
    name: {
      tr: "Spaghetti Ragu Bolognese - İki Kişilik",
      en: "Spaghetti Ragu Bolognese - For Two",
    },
    description: {
      tr: "Kıymalı domates sos, maydanoz ve parmesan ile iki kişilik paylaşım porsiyonu",
      en: "A sharing portion for two with minced beef tomato sauce, parsley, and parmesan",
    },
    price: 835,
    image: "/images/oteki-restaurant/menu/spaghetti-ragu.avif",
    featured: true,
    tags: ["signature", "chef_choice"],
    allergens: [
      { en: "Gluten", tr: "Gluten" },
      { en: "Dairy", tr: "Süt Ürünleri" },
    ],
  },
  {
    id: "ravioli-di-zucca",
    category: "pasta",
    name: { tr: "Ravioli di Zucca", en: "Ravioli di Zucca" },
    description: {
      tr: "Köz balkabağı, ev yapımı elma hardalı, parmesan, amaretti, adaçayı, tereyağı",
      en: "Roasted pumpkin, homemade apple mustard, parmesan, amaretti, sage, butter",
    },
    price: 430,
    image: "/images/oteki-restaurant/menu/ravioli-di-zucca.avif",
    tags: ["signature", "vegetarian"],
    allergens: [
      { en: "Gluten", tr: "Gluten" },
      { en: "Dairy", tr: "Süt Ürünleri" },
      { en: "Eggs", tr: "Yumurta" },
      { en: "Nuts", tr: "Kuruyemiş" },
    ],
  },
  {
    id: "ravioli-di-carne",
    category: "pasta",
    name: { tr: "Ravioli di Carne", en: "Ravioli di Carne" },
    description: {
      tr: "Dana brisket, jambon, parmesan, maydanoz, tereyağı, pesto, domates sos, yoğurt",
      en: "Beef brisket, ham, parmesan, parsley, butter, pesto, tomato sauce, yogurt",
    },
    price: 530,
    image: "/images/oteki-restaurant/menu/ravioli-di-carne.avif",
    tags: ["signature"],
    allergens: [
      { en: "Gluten", tr: "Gluten" },
      { en: "Dairy", tr: "Süt Ürünleri" },
      { en: "Eggs", tr: "Yumurta" },
    ],
  },
  {
    id: "benjamin-burger-et",
    category: "burgers-and-wraps",
    name: { tr: "Benjamin Burger Et", en: "Benjamin Beef Burger" },
    description: {
      tr: "Burger köftesi (90 gr.) cheddar peyniri, karamelize soğan, sour cream sos, turşu, kibrit patates, barbekü sos",
      en: "90g beef patty, cheddar cheese, caramelized onion, sour cream sauce, pickles, fries, BBQ sauce",
    },
    price: 515,
    image: "/images/oteki-restaurant/menu/benjamin-burger.avif",
    featured: true,
    tags: ["signature", "chef_choice"],
    allergens: [
      { en: "Gluten", tr: "Gluten" },
      { en: "Dairy", tr: "Süt Ürünleri" },
      { en: "Eggs", tr: "Yumurta" },
    ],
  },
  {
    id: "magic-mushroom-tavuk",
    category: "burgers-and-wraps",
    name: { tr: "Magic Mushroom Tavuk", en: "Magic Mushroom Chicken Burger" },
    description: {
      tr: "Tavuk göğsü, cheddar, turşu, kırmızı soğan turşusu, ızgara mantar, kekikli trüflü mayonez",
      en: "Chicken breast, cheddar, pickles, pickled red onion, grilled mushroom, truffle thyme mayo",
    },
    price: 435,
    image: "/images/oteki-restaurant/menu/magic-mushroom.avif",
    tags: ["signature"],
    allergens: [
      { en: "Gluten", tr: "Gluten" },
      { en: "Dairy", tr: "Süt Ürünleri" },
      { en: "Eggs", tr: "Yumurta" },
    ],
  },
  {
    id: "balli-hardal-soslu-tavuk-burger",
    category: "burgers-and-wraps",
    name: {
      tr: "Ballı Hardal Soslu Tavuk Burger",
      en: "Honey Mustard Chicken Burger",
    },
    description: {
      tr: "Tavuk, ballı hardal, coleslaw salatası, turşu, patates kızartması",
      en: "Chicken, honey mustard, coleslaw, pickles, fries",
    },
    price: 430,
    image: "/images/oteki-restaurant/menu/balli-hardal-burger.avif",
    tags: ["chef_choice"],
    allergens: [
      { en: "Gluten", tr: "Gluten" },
      { en: "Eggs", tr: "Yumurta" },
    ],
  },
  {
    id: "pollo-original-wrap",
    category: "burgers-and-wraps",
    name: { tr: "Pollo Original Wrap", en: "Pollo Original Wrap" },
    description: {
      tr: "Marine tavuk, avokado sos, sour cream, pico de gallo, mozzarella, patates, tortilla cipsi",
      en: "Marinated chicken, avocado sauce, sour cream, pico de gallo, mozzarella, fries, tortilla crisps",
    },
    price: 385,
    image: "/images/oteki-restaurant/menu/pollo-original-wrap.avif",
    tags: ["seasonal", "chef_choice"],
    allergens: [
      { en: "Gluten", tr: "Gluten" },
      { en: "Dairy", tr: "Süt Ürünleri" },
    ],
  },
  {
    id: "falafel-wrap",
    category: "burgers-and-wraps",
    name: { tr: "Falafel Wrap", en: "Falafel Wrap" },
    description: {
      tr: "Falafel topları, tahinli yoğurt sos, kırmızı soğan turşusu, domates, marul, nane",
      en: "Falafel balls, tahini yogurt sauce, red onion pickle, tomato, lettuce, mint",
    },
    price: 355,
    image: "/images/oteki-restaurant/menu/falafel-wrap.avif",
    tags: ["vegetarian", "seasonal"],
    allergens: [
      { en: "Gluten", tr: "Gluten" },
      { en: "Dairy", tr: "Süt Ürünleri" },
      { en: "Sesame", tr: "Susam" },
    ],
  },
  {
    id: "chicken-caesar-wrap",
    category: "burgers-and-wraps",
    name: { tr: "Chicken Caesar Wrap", en: "Chicken Caesar Wrap" },
    description: {
      tr: "Izgara tavuk, marul, mozzarella, domates, kruton, Sezar sos",
      en: "Grilled chicken, lettuce, mozzarella, tomato, croutons, Caesar dressing",
    },
    price: 375,
    image: "/images/oteki-restaurant/menu/chicken-caesar-wrap.avif",
    tags: ["seasonal"],
    allergens: [
      { en: "Gluten", tr: "Gluten" },
      { en: "Dairy", tr: "Süt Ürünleri" },
      { en: "Eggs", tr: "Yumurta" },
    ],
  },
  {
    id: "balli-hardalli-tavuk-salata",
    category: "salads",
    name: {
      tr: "Ballı Hardallı Tavuk Salata",
      en: "Honey Mustard Chicken Salad",
    },
    description: {
      tr: "Akdeniz yeşillikleri, çitir tavuk, havuç, parmesan, çeri domates, ballı sos",
      en: "Mediterranean greens, crispy chicken, carrot, parmesan, cherry tomato, honey sauce",
    },
    price: 410,
    image: "/images/oteki-restaurant/menu/balli-hardal-salata.avif",
    tags: ["seasonal", "chef_choice"],
    allergens: [
      { en: "Gluten", tr: "Gluten" },
      { en: "Dairy", tr: "Süt Ürünleri" },
      { en: "Eggs", tr: "Yumurta" },
    ],
  },
  {
    id: "ton-balikli-makarna-salatasi",
    category: "salads",
    name: { tr: "Ton Balıklı Makarna Salatası", en: "Tuna Pasta Salad" },
    description: {
      tr: "Taze fusilli makarna, ton balığı, zeytin, mısır, çeri domates, marul",
      en: "Fresh fusilli pasta, tuna, olives, corn, cherry tomatoes, lettuce",
    },
    price: 440,
    image: "/images/oteki-restaurant/menu/ton-balikli-makarna.avif",
    tags: ["seasonal"],
    allergens: [
      { en: "Gluten", tr: "Gluten" },
      { en: "Seafood", tr: "Deniz Ürünleri" },
    ],
  },
  {
    id: "sezar-salata",
    category: "salads",
    name: { tr: "Sezar Salata", en: "Caesar Salad" },
    description: {
      tr: "Tavuk parçaları, parmesan peyniri, marul, kruton ekmek, sezar sos",
      en: "Chicken pieces, parmesan cheese, lettuce, croutons, caesar sauce",
    },
    price: 400,
    image: "/images/oteki-restaurant/menu/sezar.avif",
    tags: ["chef_choice"],
    allergens: [
      { en: "Gluten", tr: "Gluten" },
      { en: "Dairy", tr: "Süt Ürünleri" },
      { en: "Eggs", tr: "Yumurta" },
    ],
  },
  {
    id: "pesto-pasta-salad",
    category: "salads",
    name: { tr: "Pesto Makarna Salatası", en: "Pesto Pasta Salad" },
    description: {
      tr: "Fusilli, marul, salatalık, çeri domates, parmesan, pesto sos",
      en: "Fusilli, lettuce, cucumber, cherry tomatoes, parmesan, pesto sauce",
    },
    price: 365,
    image: "/images/oteki-restaurant/menu/pesto-pasta-salad.avif",
    tags: ["seasonal", "vegetarian"],
    allergens: [
      { en: "Gluten", tr: "Gluten" },
      { en: "Dairy", tr: "Süt Ürünleri" },
    ],
  },
];

export const MENU_ITEMS: MenuItemSeed[] = [
  ...LUNA_BISTRO_MENU_ITEMS.map((item) => ({
    ...item,
    restaurantId: LUNA_BISTRO_SLUG,
  })),
  ...OTEKI_RESTAURANT_MENU_ITEMS.map((item) => ({
    ...item,
    restaurantId: OTEKI_RESTAURANT_SLUG,
  })),
];
