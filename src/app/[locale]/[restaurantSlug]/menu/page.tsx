import { redirect } from "next/navigation";

import type { Locale } from "@/types/i18n";

type PageProps = {
  params: Promise<{
    locale: Locale;
    restaurantSlug: string;
  }>;
};

export default async function MenuAliasPage({ params }: PageProps) {
  const { restaurantSlug, locale } = await params;

  redirect(`/${locale}/${restaurantSlug}`);
}
