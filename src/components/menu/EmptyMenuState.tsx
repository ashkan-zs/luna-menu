"use client";

import { useTranslations } from "next-intl";

export default function EmptyMenuState() {
  const t = useTranslations("Menu");

  return (
    <div className="rounded-[1.75rem] border border-white/10 bg-white/4.5 px-5 py-12 text-center shadow-[0_18px_60px_rgb(0_0_0_/0.2)] backdrop-blur-xl">
      <h3 className="font-serif text-2xl text-theme-text-strong">
        {t("emptyHeading")}
      </h3>
      <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-theme-text-muted/64">
        {t("emptyDescription")}
      </p>
    </div>
  );
}
