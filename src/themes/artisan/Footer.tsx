import { useTranslations } from "next-intl";
import { getLocalizedValue } from "@/lib/i18n/getLocalizedValue";
import type { MenuFooterThemeProps } from "@/types/theme";

export default function ArtisanFooter({
  restaurant,
  locale,
}: MenuFooterThemeProps) {
  const t = useTranslations("MenuFooter");
  const year = new Date().getFullYear();
  const location = getLocalizedValue(restaurant.location, locale);

  return (
    <footer className="px-5 pb-8 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-6xl border-t border-theme-accent/14 pt-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-theme-accent">
              {restaurant.name}
            </p>
            <p className="mt-3 max-w-md font-serif text-3xl uppercase text-theme-text">
              {t("footerStatement")}
            </p>
            <p className="mt-2 text-xs uppercase tracking-[0.18em] text-theme-text-muted/45">
              {location}
            </p>
          </div>

          <div className="flex gap-4 text-xs uppercase tracking-[0.18em] text-theme-text-muted/62">
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

        <div className="mt-8 flex justify-between border-t border-theme-accent/12 pt-5 text-[0.65rem] uppercase tracking-[0.18em] text-theme-text-muted/38">
          <span>
            © {year} {restaurant.name}
          </span>
          <span>{t("product")}</span>
        </div>
      </div>
    </footer>
  );
}
