import type { SupportedLanguage } from "@/types/menu";

type MenuFooterProps = {
  language: SupportedLanguage;
  restaurantName: string;
  statement: string;
  location: string;
  contact: {
    instagramUrl: string;
    googleMapsUrl: string;
    whatsappUrl: string;
    phone: string;
  };
};

const copy = {
  en: {
    instagram: "Instagram",
    maps: "Maps",
    whatsapp: "WhatsApp",
    product: "Luna Menu",
  },
  tr: {
    instagram: "Instagram",
    maps: "Harita",
    whatsapp: "WhatsApp",
    product: "Luna Menu",
  },
} satisfies Record<
  SupportedLanguage,
  {
    instagram: string;
    maps: string;
    whatsapp: string;
    product: string;
  }
>;

export default function MenuFooter({
  language,
  restaurantName,
  statement,
  location,
  contact,
}: MenuFooterProps) {
  const labels = copy[language];
  const year = new Date().getFullYear();

  return (
    <footer className="px-5 pb-8 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl border-t border-white/10 pt-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[0.65rem] uppercase tracking-[0.35em] text-menu-brass/70">
              {restaurantName}
            </p>
            <p className="mt-3 max-w-md font-serif text-2xl text-menu-ivory">
              {statement}
            </p>
            <p className="mt-2 text-xs uppercase tracking-[0.22em] text-menu-cream/40">
              {location}
            </p>
          </div>

          <div className="flex gap-4 text-xs uppercase tracking-[0.22em] text-menu-cream/60">
            <a href={contact.instagramUrl} target="_blank" rel="noreferrer">
              {labels.instagram}
            </a>
            <a href={contact.googleMapsUrl} target="_blank" rel="noreferrer">
              {labels.maps}
            </a>
            <a href={contact.whatsappUrl} target="_blank" rel="noreferrer">
              {labels.whatsapp}
            </a>
          </div>
        </div>

        <div className="mt-8 flex justify-between border-t border-white/10 pt-5 text-[0.65rem] uppercase tracking-[0.22em] text-menu-cream/35">
          <span>
            © {year} {restaurantName}
          </span>
          <span>{labels.product}</span>
        </div>
      </div>
    </footer>
  );
}
