import { getLocalizedValue } from "@/lib/i18n/getLocalizedValue";
import { Locale } from "@/types/i18n";
import { Restaurant } from "@/types/restaurant";
import { useTranslations } from "next-intl";

type MenuFooterProps = {
  restaurant: Restaurant;
  locale: Locale;
};

export default function MenuFooter({ restaurant, locale }: MenuFooterProps) {
  const t = useTranslations("MenuFooter");
  const year = new Date().getFullYear();
  const location = getLocalizedValue(restaurant.location, locale);

  return (
    <footer className="px-5 pb-8 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl border-t border-white/10 pt-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[0.65rem] uppercase tracking-[0.35em] text-theme-accent/70">
              {restaurant.name}
            </p>
            <p className="mt-3 max-w-md font-serif text-2xl text-theme-text-strong">
              {t("footerStatement")}
            </p>
            <p className="mt-2 text-xs uppercase tracking-[0.22em] text-theme-text-muted/40">
              {location}
            </p>
          </div>

          <div className="flex gap-4 text-xs uppercase tracking-[0.22em] text-theme-text-muted/60">
            <a
              href={restaurant.contact.instagramUrl}
              target="_blank"
              rel="noreferrer"
            >
              {t("instagram")}
            </a>
            <a
              href={restaurant.contact.googleMapsUrl}
              target="_blank"
              rel="noreferrer"
            >
              {t("maps")}
            </a>
            <a
              href={restaurant.contact.whatsappUrl}
              target="_blank"
              rel="noreferrer"
            >
              {t("whatsapp")}
            </a>
          </div>
        </div>

        <div className="mt-8 flex justify-between border-t border-white/10 pt-5 text-[0.65rem] uppercase tracking-[0.22em] text-theme-text-muted/35">
          <span>
            © {year} {restaurant.name}
          </span>
          <span>{t("product")}</span>
        </div>
      </div>
    </footer>
  );
}
