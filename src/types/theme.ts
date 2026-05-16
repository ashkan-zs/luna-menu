export type MenuThemeId =
  | "noir-dining"
  | "amber-bistro"
  | "olive-cafe"
  | "copper-cocktail"
  | "ivory-brasserie"
  | "pearl-daylight";

export type MenuTheme = {
  id: MenuThemeId;
  name: string;
  accentLabel: string;
  swatches: {
    night: string;
    surface: string;
    accent: string;
    parchment: string;
  };
};
