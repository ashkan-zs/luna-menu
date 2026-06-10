import { MENU_THEME_META } from "@/data/menuThemes";
import type {
  MenuItemsThemeComponents,
  MenuTheme,
  MenuThemeId,
} from "@/types/theme";
import { artisanThemeComponents } from "./artisan";
import { lunaThemeComponents } from "./luna";
import { streetFoodThemeComponents } from "./street-food";

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
