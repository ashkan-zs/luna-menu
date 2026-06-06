import { LocalizedString } from "./i18n";
import type { MenuThemeId } from "./theme";

type RestaurantContact = {
      address: string,
      phone: string,
      instagramUrl: string,
      whatsappUrl: string,
      googleMapsUrl: string,
    };

export type Restaurant = {
    id: string,
    slug: string,
    themeId: MenuThemeId,
    name: string,
    tagline: LocalizedString,
    description: LocalizedString,
    backgroundImage: string,
    location: LocalizedString,
    contact: RestaurantContact,
  };
