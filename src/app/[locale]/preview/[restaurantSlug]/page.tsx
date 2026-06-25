import type { Metadata } from "next";
import { notFound } from "next/navigation";

import RestaurantMenuPageView from "../../[restaurantSlug]/RestaurantMenuPageView";
import { getRestaurantPreviewMenuPageData } from "@/lib/data/menu";
import { hasRestaurantPreviewAccess } from "@/lib/preview/restaurantPreview";
import type { Locale } from "@/types/i18n";

const PREVIEW_ROBOTS: Metadata["robots"] = {
  index: false,
  follow: false,
  googleBot: {
    index: false,
    follow: false,
  },
};

type PreviewPageProps = {
  params: Promise<{
    locale: Locale;
    restaurantSlug: string;
  }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Menu Preview",
    robots: PREVIEW_ROBOTS,
  };
}

export default async function RestaurantPreviewPage({
  params,
  searchParams,
}: PreviewPageProps) {
  const [{ locale, restaurantSlug }, resolvedSearchParams] = await Promise.all([
    params,
    searchParams,
  ]);

  if (!hasRestaurantPreviewAccess(resolvedSearchParams)) {
    notFound();
  }

  const pageData = await getRestaurantPreviewMenuPageData(restaurantSlug);

  if (!pageData) {
    notFound();
  }

  return (
    <RestaurantMenuPageView
      locale={locale}
      pageData={pageData}
      includeStructuredData={false}
    />
  );
}
