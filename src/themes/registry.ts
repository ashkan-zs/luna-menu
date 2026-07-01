import type {
  MenuItemsThemeComponents,
  MenuTheme,
  MenuThemeId,
  MenuThemeMeta,
} from "@/types/theme";
import { artisanThemeComponents } from "./artisan";
import { lunaThemeComponents } from "./luna";
import { streetFoodThemeComponents } from "./street-food";

const MENU_THEME_META = [
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

const THEME_COMPONENTS = {
  luna: lunaThemeComponents,
  artisan: artisanThemeComponents,
  "street-food": streetFoodThemeComponents,
} satisfies Record<MenuThemeId, MenuTheme["components"]>;

export const MENU_THEMES = MENU_THEME_META.map((theme) => ({
  ...theme,
  components: THEME_COMPONENTS[theme.id],
})) satisfies MenuTheme[];

export function getMenuTheme(themeId: MenuThemeId) {
  return (
    MENU_THEMES.find((theme) => theme.id === themeId) ??
    MENU_THEMES.find((theme) => theme.id === "luna")!
  );
}

export function getMenuItemsThemeComponents(
  themeId: MenuThemeId,
): MenuItemsThemeComponents {
  return THEME_COMPONENTS[themeId] ?? THEME_COMPONENTS.luna;
}
