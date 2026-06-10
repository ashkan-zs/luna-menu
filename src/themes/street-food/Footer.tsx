import { Camera, Map, MessageCircle } from "lucide-react";
import { useTranslations } from "next-intl";

import { getLocalizedValue } from "@/lib/i18n/getLocalizedValue";
import type { MenuFooterThemeProps } from "@/types/theme";

export default function StreetFoodFooter({
  restaurant,
  locale,
}: MenuFooterThemeProps) {
  const t = useTranslations("MenuFooter");
  const year = new Date().getFullYear();
  const statement = restaurant.content?.footer?.statement
    ? getLocalizedValue(restaurant.content.footer.statement, locale)
    : getLocalizedValue(restaurant.tagline, locale);
  const location = [restaurant.location.city, restaurant.location.country]
    .filter(Boolean)
    .join(", ");

  return (
    <footer className="px-5 pb-8 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl rounded-[2rem] bg-paper p-5 shadow-sm sm:p-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.16em] text-theme-accent">
              {restaurant.name}
            </p>
            <p className="mt-2 max-w-md font-heading text-3xl font-black leading-none text-theme-text-strong">
              {statement}
            </p>
            {location ? (
              <p className="mt-3 text-xs font-bold uppercase tracking-[0.12em] text-theme-text-muted/70">
                {location}
              </p>
            ) : null}
          </div>

          <div className="flex flex-wrap gap-2">
            {restaurant.socials?.instagram ? (
              <FooterLink href={restaurant.socials.instagram} label={t("instagram")}>
                <Camera className="size-4" aria-hidden="true" />
              </FooterLink>
            ) : null}
            {restaurant.location.mapsUrl ? (
              <FooterLink href={restaurant.location.mapsUrl} label={t("maps")}>
                <Map className="size-4" aria-hidden="true" />
              </FooterLink>
            ) : null}
            {restaurant.contact.whatsapp ? (
              <FooterLink href={restaurant.contact.whatsapp} label={t("whatsapp")}>
                <MessageCircle className="size-4" aria-hidden="true" />
              </FooterLink>
            ) : null}
          </div>
        </div>

        <div className="mt-6 flex justify-between border-t border-theme-accent/10 pt-4 text-[0.65rem] font-black uppercase tracking-[0.12em] text-theme-text-muted/58">
          <span>
            © {year} {restaurant.name}
          </span>
          <span>{t("product")}</span>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex min-h-11 items-center gap-2 rounded-full border border-theme-accent/12 bg-theme-brand px-4 text-xs font-black uppercase tracking-[0.1em] text-theme-accent transition hover:border-theme-accent/30 hover:bg-theme-accent hover:text-theme-on-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-theme-accent"
    >
      {children}
      {label}
    </a>
  );
}
