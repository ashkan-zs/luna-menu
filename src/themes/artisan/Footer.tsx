import { useTranslations } from "next-intl";
import type { MenuFooterThemeProps } from "@/types/theme";
import { getLocalizedValue } from "@/lib/i18n/getLocalizedValue";

export default function ArtisanFooter({
  restaurant,
  locale,
}: MenuFooterThemeProps) {
  const t = useTranslations("MenuFooter");
  const year = new Date().getFullYear();
  const location = [restaurant.location.city, restaurant.location.country].join(
    ", ",
  );
  const statement = restaurant.content?.footer?.statement
    ? getLocalizedValue(restaurant.content.footer.statement, locale)
    : t("footerStatement");

  return (
    <footer className="px-5 pb-8 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-6xl border-t border-theme-accent/14 pt-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-theme-accent">
              {restaurant.name}
            </p>
            <p className="mt-3 max-w-md font-serif text-3xl uppercase text-theme-text">
              {statement}
            </p>
            <p className="mt-2 text-xs uppercase tracking-[0.18em] text-theme-text-muted/45">
              {location}
            </p>
          </div>

          <div className="flex gap-4 text-xs uppercase tracking-[0.18em] text-theme-text-muted/62">
            {restaurant.socials?.instagram ? (
              <a
                href={restaurant.socials.instagram}
                target="_blank"
                rel="noreferrer"
              >
                {t("instagram")}
              </a>
            ) : null}
            {restaurant.location.mapsUrl ? (
              <a
                href={restaurant.location.mapsUrl}
                target="_blank"
                rel="noreferrer"
              >
                {t("maps")}
              </a>
            ) : null}
            {restaurant.contact.whatsapp ? (
              <a
                href={restaurant.contact.whatsapp}
                target="_blank"
                rel="noreferrer"
              >
                {t("whatsapp")}
              </a>
            ) : null}
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
