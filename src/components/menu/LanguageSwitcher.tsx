"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import type { Locale } from "@/types/i18n";
import { useLocale } from "next-intl";
import React, { useTransition } from "react";

const languages: Locale[] = ["tr", "en"];

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  function handleLanguageChange(language: Locale) {
    if (language === locale) return;

    startTransition(() => router.replace(pathname, { locale: language }));
  }

  return (
    <div
      className="flex items-center rounded-full border border-white/10 bg-white/4.5 p-1 text-[0.68rem] font-medium tracking-[0.18em] text-theme-text-muted/70"
      aria-label="Language selector"
    >
      {languages.map((language, index) => (
        <React.Fragment key={language}>
          {index === 1 && (
            <span className="mx-1 text-theme-accent/35" aria-hidden="true">
              |
            </span>
          )}
          <button
            key={language}
            type="button"
            disabled={isPending}
            onClick={() => handleLanguageChange(language)}
            aria-pressed={locale === language}
            className="flex items-center cursor-pointer"
          >
            <span
              className={[
                "flex items-center rounded-full px-2 py-2 transition outline-none focus-visible:ring-2 focus-visible:ring-theme-accent/70",
                locale === language
                  ? "bg-theme-control-active/12 text-theme-on-accent"
                  : "hover:text-theme-on-accent",
              ].join(" ")}
            >
              {language.toUpperCase()}
            </span>
          </button>
        </React.Fragment>
      ))}
    </div>
  );
}
