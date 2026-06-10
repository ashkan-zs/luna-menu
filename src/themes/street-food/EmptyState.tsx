"use client";

import { SearchX } from "lucide-react";
import { useTranslations } from "next-intl";

export default function StreetFoodEmptyState() {
  const t = useTranslations("Menu");

  return (
    <div className="rounded-[1.75rem] border border-theme-accent/12 bg-paper px-5 py-12 text-center shadow-sm">
      <span className="mx-auto grid size-14 place-items-center rounded-full bg-theme-brand text-theme-accent">
        <SearchX className="size-6" aria-hidden="true" strokeWidth={2.1} />
      </span>
      <h3 className="mt-4 font-heading text-3xl font-black text-theme-text-strong">
        {t("emptyHeading")}
      </h3>
      <p className="mx-auto mt-3 max-w-md text-sm font-medium leading-6 text-theme-text-muted">
        {t("emptyDescription")}
      </p>
    </div>
  );
}
