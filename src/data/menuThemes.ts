import type { MenuThemeMeta } from "@/types/theme";

export const MENU_THEME_META = [
  {
    id: "luna",
    name: "Luna",
    accentLabel: "Luxury Brass",
    swatches: {
      background: "#080705",
      surface: "#14100c",
      accent: "#d8ba7c",
      muted: "#f4ecdf",
    },
  },
  {
    id: "artisan",
    name: "Artisan",
    accentLabel: "Clay",
    swatches: {
      background: "#f3eee7",
      surface: "#e5d8c8",
      accent: "#c98253",
      muted: "#665e57",
    },
  },
  {
    id: "street-food",
    name: "Street Food",
    accentLabel: "Balloon Blue",
    swatches: {
      background: "#f3f4f6",
      surface: "#ffffff",
      accent: "#1e88e5",
      muted: "#475569",
    },
  },
] satisfies MenuThemeMeta[];

export const DEFAULT_MENU_THEME_ID = MENU_THEME_META[0].id;
