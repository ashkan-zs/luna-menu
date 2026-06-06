"use client";

import { useTranslations } from "next-intl";

export default function ArtisanEmptyState() {
  const t = useTranslations("Menu");

  return (
    <div className="rounded-[1.75rem] border border-espresso/10 bg-paper px-5 py-12 text-center shadow-[0_18px_50px_rgb(59_42_36/0.08)]">
      <h3 className="font-heading text-3xl uppercase text-espresso">
        {t("emptyHeading")}
      </h3>
      <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-text-secondary">
        {t("emptyDescription")}
      </p>
    </div>
  );
}
