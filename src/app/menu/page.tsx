import MenuHero from "@/components/menu/MenuHero";
import MenuNavbar from "@/components/menu/MenuNavbar";
import MenuItemsSection from "@/components/menu/MenuItemsSection";

import { RESTAURANT } from "@/data/restaurant";

export default function MenuPage() {
  return (
    <main
      id="top"
      className="min-h-screen bg-menu-night font-sans text-menu-parchment"
    >
      <MenuNavbar restaurantName={RESTAURANT.name} />

      <MenuHero
        restaurantName={RESTAURANT.name}
        tagline={RESTAURANT.tagline}
        description={RESTAURANT.description}
        backgroundImage={RESTAURANT.backgroundImage}
      />

      <MenuItemsSection />
    </main>
  );
}
