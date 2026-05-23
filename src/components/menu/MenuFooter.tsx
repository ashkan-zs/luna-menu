import { useLocale, useTranslations } from "next-intl";
import { RESTAURANT } from "../../data/restaurant";
import { SupportedLanguage } from "@/types/menu";

export default function MenuFooter() {
  const t = useTranslations("MenuFooter");
  const locale = useLocale() as SupportedLanguage;
  const year = new Date().getFullYear();

  return (
    <footer className="px-5 pb-8 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl border-t border-white/10 pt-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[0.65rem] uppercase tracking-[0.35em] text-menu-brass/70">
              {RESTAURANT.name}
            </p>
            <p className="mt-3 max-w-md font-serif text-2xl text-menu-ivory">
              {RESTAURANT.footerStatement[locale]}
            </p>
            <p className="mt-2 text-xs uppercase tracking-[0.22em] text-menu-cream/40">
              {RESTAURANT.location[locale]}
            </p>
          </div>

          <div className="flex gap-4 text-xs uppercase tracking-[0.22em] text-menu-cream/60">
            <a
              href={RESTAURANT.contact.instagramUrl}
              target="_blank"
              rel="noreferrer"
            >
              {t("instagram")}
            </a>
            <a
              href={RESTAURANT.contact.googleMapsUrl}
              target="_blank"
              rel="noreferrer"
            >
              {t("maps")}
            </a>
            <a
              href={RESTAURANT.contact.whatsappUrl}
              target="_blank"
              rel="noreferrer"
            >
              {t("whatsapp")}
            </a>
          </div>
        </div>

        <div className="mt-8 flex justify-between border-t border-white/10 pt-5 text-[0.65rem] uppercase tracking-[0.22em] text-menu-cream/35">
          <span>
            © {year} {RESTAURANT.name}
          </span>
          <span>{t("product")}</span>
        </div>
      </div>
    </footer>
  );
}
