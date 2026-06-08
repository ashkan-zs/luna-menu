import type { ComponentType } from "react";
import type { Locale } from "./i18n";
import type { Category, MenuItem } from "./menu";
import type { Restaurant } from "./restaurant";

export type MenuThemeId = "luna" | "artisan";

export type MenuThemeMeta = {
  id: MenuThemeId;
  name: string;
  accentLabel: string;
  swatches: {
    background: string;
    surface: string;
    accent: string;
    muted: string;
  };
};

type RestaurantLocaleProps = {
  restaurant: Restaurant;
  locale: Locale;
};

export type MenuNavbarProps = RestaurantLocaleProps;

export type MenuHeroThemeProps = RestaurantLocaleProps;

export type CategoryTabsProps = {
  categories: Category[];
  activeCategoryId: string;
  onCategoryClick: (categoryId: string) => void;
};

export type FeaturedMenuThemeProps = {
  restaurant: Restaurant;
  locale: Locale;
  items: MenuItem[];
  onSelect: (item: MenuItem) => void;
  showPrices: boolean;
  showImages: boolean;
};

export type MenuSearchFilterThemeProps = {
  query: string;
  featuredOnly: boolean;
  availableOnly: boolean;
  vegetarianOnly: boolean;
  spicyOnly: boolean;
  resultCount: number;
  onQueryChange: (query: string) => void;
  onFeaturedOnlyChange: (featuredOnly: boolean) => void;
  onAvailableOnlyChange: (availableOnly: boolean) => void;
  onVegetarianOnlyChange: (vegetarianOnly: boolean) => void;
  onSpicyOnlyChange: (spicyOnly: boolean) => void;
};

export type MenuSectionThemeProps = {
  category: Category;
  items: MenuItem[];
  locale: Locale;
  restaurantName: string;
  onSelect: (item: MenuItem) => void;
  showPrices: boolean;
  showImages: boolean;
};

export type EmptyMenuThemeProps = {
  locale: Locale;
};

export type MenuItemCardThemeProps = {
  item: MenuItem;
  restaurantName?: string;
  onSelect?: (item: MenuItem) => void;
  showPrices: boolean;
  showImages: boolean;
};

export type MenuItemModalThemeProps = {
  item: MenuItem | null;
  onClose: () => void;
  showPrices: boolean;
  showImages: boolean;
};

export type RestaurantInfoThemeProps = RestaurantLocaleProps;

export type MenuFooterThemeProps = RestaurantLocaleProps;

export type MenuItemsThemeComponents = {
  CategoryTabs: ComponentType<CategoryTabsProps>;
  FeaturedSection: ComponentType<FeaturedMenuThemeProps>;
  SearchFilter: ComponentType<MenuSearchFilterThemeProps>;
  MenuSection: ComponentType<MenuSectionThemeProps>;
  EmptyState: ComponentType<EmptyMenuThemeProps>;
  MenuItemCard: ComponentType<MenuItemCardThemeProps>;
  MenuItemModal: ComponentType<MenuItemModalThemeProps>;
};

export type MenuThemeComponents = MenuItemsThemeComponents & {
  Navbar?: ComponentType<MenuNavbarProps>;
  Hero: ComponentType<MenuHeroThemeProps>;
  RestaurantInfoSection: ComponentType<RestaurantInfoThemeProps>;
  Footer: ComponentType<MenuFooterThemeProps>;
};

export type MenuTheme = MenuThemeMeta & {
  components: MenuThemeComponents;
};
