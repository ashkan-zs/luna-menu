import type { Locale } from "@/types/i18n";
import type { MenuAllergen } from "@/types/menu";

export const MENU_ALLERGENS = {
  gluten: {
    label: { en: "Gluten", tr: "Gluten" },
  },
  dairy: {
    label: { en: "Dairy", tr: "Süt ürünleri" },
  },
  egg: {
    label: { en: "Egg", tr: "Yumurta" },
  },
  nuts: {
    label: { en: "Nuts", tr: "Kuruyemiş" },
  },
  peanuts: {
    label: { en: "Peanuts", tr: "Yer fıstığı" },
  },
  soy: {
    label: { en: "Soy", tr: "Soya" },
  },
  fish: {
    label: { en: "Fish", tr: "Balık" },
  },
  seafood: {
    label: { en: "Seafood", tr: "Deniz ürünleri" },
  },
  sesame: {
    label: { en: "Sesame", tr: "Susam" },
  },
} satisfies Record<MenuAllergen, { label: Record<Locale, string> }>;

export const MENU_ALLERGEN_OPTIONS = Object.entries(MENU_ALLERGENS).map(
  ([value, allergen]) => ({
    title: allergen.label.en,
    value,
  }),
);

export function getMenuAllergenLabel(
  allergen: MenuAllergen,
  locale: Locale,
) {
  return MENU_ALLERGENS[allergen].label[locale];
}

export function getMenuAllergenFromLabel(
  label: string,
): MenuAllergen | undefined {
  const normalizedLabel = label.trim().toLowerCase();

  switch (normalizedLabel) {
    case "gluten":
      return "gluten";
    case "dairy":
    case "süt ürünleri":
      return "dairy";
    case "egg":
    case "eggs":
    case "yumurta":
      return "egg";
    case "nuts":
    case "kuruyemiş":
      return "nuts";
    case "peanuts":
    case "yer fıstığı":
      return "peanuts";
    case "soy":
    case "soya":
      return "soy";
    case "fish":
    case "balık":
      return "fish";
    case "seafood":
    case "deniz ürünleri":
      return "seafood";
    case "sesame":
    case "susam":
      return "sesame";
    default:
      return undefined;
  }
}
