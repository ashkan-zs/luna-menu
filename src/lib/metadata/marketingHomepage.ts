import type { Metadata } from "next";

import { createAbsoluteUrl } from "@/config/app";
import { routing } from "@/i18n/routing";
import type { Locale } from "@/types/i18n";

const OG_LOCALES: Record<Locale, string> = {
  en: "en_US",
  tr: "tr_TR",
};

export function getMarketingHomepagePath(locale: Locale) {
  return `/${locale}`;
}

function getLanguageAlternates() {
  return Object.fromEntries(
    routing.locales.map((locale) => [
      locale,
      getMarketingHomepagePath(locale as Locale),
    ]),
  );
}

export function createMarketingHomepageMetadata({
  locale,
  title,
  description,
}: {
  locale: Locale;
  title: string;
  description: string;
}): Metadata {
  const path = getMarketingHomepagePath(locale);

  return {
    title,
    description,
    alternates: {
      canonical: path,
      languages: getLanguageAlternates(),
    },
    openGraph: {
      title,
      description,
      url: path,
      siteName: "Luna Menu",
      locale: OG_LOCALES[locale],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export function getAbsoluteMarketingHomepageAlternates() {
  return Object.fromEntries(
    routing.locales.map((locale) => [
      locale,
      createAbsoluteUrl(getMarketingHomepagePath(locale as Locale)),
    ]),
  );
}
