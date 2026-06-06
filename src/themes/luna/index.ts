import MenuHero from "@/components/menu/MenuHero";
import FeaturedMenuSection from "@/components/menu/FeaturedMenuSection";
import MenuItemCard from "@/components/menu/MenuItemCard";
import MenuItemModal from "@/components/menu/MenuItemModal";
import RestaurantInfoSection from "@/components/menu/RestaurantInfoSection";
import MenuFooter from "@/components/menu/MenuFooter";
import type { MenuThemeComponents } from "@/types/theme";
import MenuNavbar from "@/components/menu/MenuNavbar";
import CategoryTabs from "@/components/menu/CategoryTabs";
import MenuSearchFilter from "@/components/menu/MenuSearchFilter";
import MenuSection from "@/components/menu/MenuSection";
import EmptyMenuState from "@/components/menu/EmptyMenuState";

export const lunaThemeComponents = {
  Navbar: MenuNavbar,
  Hero: MenuHero,
  FeaturedSection: FeaturedMenuSection,
  CategoryTabs,
  SearchFilter: MenuSearchFilter,
  MenuSection,
  EmptyState: EmptyMenuState,
  MenuItemCard,
  MenuItemModal,
  RestaurantInfoSection,
  Footer: MenuFooter,
} satisfies MenuThemeComponents;
