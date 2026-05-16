import type { MenuTheme } from "@/types/theme";

export const MENU_THEMES: MenuTheme[] = [
  {
    id: "noir-dining",
    name: "Noir Dining",
    accentLabel: "Brass",
    swatches: {
      night: "#080705",
      surface: "#14100c",
      accent: "#d8ba7c",
      parchment: "#f4ecdf",
    },
  },
  {
    id: "amber-bistro",
    name: "Amber Bistro",
    accentLabel: "Honey",
    swatches: {
      night: "#100b08",
      surface: "#1e1510",
      accent: "#e4ad61",
      parchment: "#f6ead8",
    },
  },
  {
    id: "olive-cafe",
    name: "Olive Cafe",
    accentLabel: "Sage",
    swatches: {
      night: "#080c08",
      surface: "#121910",
      accent: "#b8c58a",
      parchment: "#eff1df",
    },
  },
  {
    id: "copper-cocktail",
    name: "Copper Cocktail",
    accentLabel: "Copper",
    swatches: {
      night: "#0d0707",
      surface: "#1c0f0d",
      accent: "#d68a63",
      parchment: "#f5e5da",
    },
  },
  {
    id: "ivory-brasserie",
    name: "Ivory Brasserie",
    accentLabel: "Champagne",
    swatches: {
      night: "#0d0b09",
      surface: "#1a1712",
      accent: "#d9c78e",
      parchment: "#fff5e5",
    },
  },
  {
    id: "pearl-daylight",
    name: "Pearl Daylight",
    accentLabel: "Walnut",
    swatches: {
      night: "#f7f1e7",
      surface: "#fffaf2",
      accent: "#8a6439",
      parchment: "#1f1913",
    },
  },
];

export const DEFAULT_MENU_THEME_ID = MENU_THEMES[0].id;
