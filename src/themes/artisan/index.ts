import ArtisanHero from "./Hero";
import ArtisanFeaturedSection from "./FeaturedSection";
import ArtisanMenuItemCard from "./MenuItemCard";
import ArtisanMenuItemModal from "./MenuItemModal";
import ArtisanCategoryTabs from "./CategoryTabs";
import ArtisanSearchFilter from "./SearchFilter";
import ArtisanMenuSection from "./MenuSection";
import ArtisanEmptyState from "./EmptyState";
import ArtisanRestaurantInfoSection from "./RestaurantInfoSection";
import ArtisanFooter from "./Footer";
import type { MenuThemeComponents } from "@/types/theme";

export const artisanThemeComponents = {
  Hero: ArtisanHero,
  FeaturedSection: ArtisanFeaturedSection,
  CategoryTabs: ArtisanCategoryTabs,
  SearchFilter: ArtisanSearchFilter,
  MenuSection: ArtisanMenuSection,
  EmptyState: ArtisanEmptyState,
  MenuItemCard: ArtisanMenuItemCard,
  MenuItemModal: ArtisanMenuItemModal,
  RestaurantInfoSection: ArtisanRestaurantInfoSection,
  Footer: ArtisanFooter,
} satisfies MenuThemeComponents;
