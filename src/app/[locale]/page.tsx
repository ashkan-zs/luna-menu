import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import MarketingHomepage, {
  type MarketingHomepageContent,
} from "@/features/marketing/components/MarketingHomepage";
import { createMarketingHomepageMetadata } from "@/lib/metadata/marketingHomepage";
import type { Locale } from "@/types/i18n";

type PageProps = {
  params: Promise<{
    locale: Locale;
  }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations("MarketingHomepage.seo");

  return createMarketingHomepageMetadata({
    locale,
    title: t("title"),
    description: t("description"),
  });
}

export default async function LocaleHomepage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations("MarketingHomepage");

  const content = {
    nav: t.raw("nav"),
    hero: t.raw("hero"),
    problemSolution: t.raw("problemSolution"),
    features: t.raw("features"),
    themes: t.raw("themes"),
    demos: t.raw("demos"),
    howItWorks: t.raw("howItWorks"),
    faq: t.raw("faq"),
    finalCta: t.raw("finalCta"),
    footer: t.raw("footer"),
  } as MarketingHomepageContent;

  return <MarketingHomepage locale={locale} content={content} />;
}
