import type { MenuThemeComponents } from "@/types/theme";
import StreetFoodCategoryTabs from "./CategoryTabs";
import StreetFoodEmptyState from "./EmptyState";
import StreetFoodFeaturedSection from "./FeaturedSection";
import StreetFoodFooter from "./Footer";
import StreetFoodHero from "./Hero";
import StreetFoodMenuItemCard from "./MenuItemCard";
import StreetFoodMenuItemModal from "./MenuItemModal";
import StreetFoodMenuSection from "./MenuSection";
import StreetFoodRestaurantInfoSection from "./RestaurantInfoSection";
import StreetFoodSearchFilter from "./SearchFilter";

export const streetFoodThemeComponents = {
  controlsOrder: "search-first",
  Hero: StreetFoodHero,
  FeaturedSection: StreetFoodFeaturedSection,
  CategoryTabs: StreetFoodCategoryTabs,
  SearchFilter: StreetFoodSearchFilter,
  MenuSection: StreetFoodMenuSection,
  EmptyState: StreetFoodEmptyState,
  MenuItemCard: StreetFoodMenuItemCard,
  MenuItemModal: StreetFoodMenuItemModal,
  RestaurantInfoSection: StreetFoodRestaurantInfoSection,
  Footer: StreetFoodFooter,
} satisfies MenuThemeComponents;
