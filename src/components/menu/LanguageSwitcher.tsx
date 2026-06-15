"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import type { Locale } from "@/types/i18n";
import { useLocale } from "next-intl";
import React, { useTransition } from "react";

const languages: Locale[] = ["tr", "en"];

type Position = "inline" | "top-right" | "bottom-right";
type Variant = "pill" | "circle";
type Color = "default" | "dark" | "light" | "gold";

type LanguageSwitcherProps = {
  className?: string;
  position?: Position;
  variant?: Variant;
  color?: Color;
};

const positionClasses: Record<Position, string> = {
  inline: "",
  "top-right": "fixed right-4 top-4 z-50",
  "bottom-right": "fixed bottom-4 right-4 z-50",
};

const colorClasses: Record<Color, string> = {
  default:
    "border-white/10 bg-white/4.5 text-theme-text-muted/70 hover:text-theme-on-accent",
  dark: "border-white/10 bg-black/50 text-white/70 hover:text-white",
  light: "border-black/10 bg-white/80 text-black/70 hover:text-black",
  gold: "border-theme-accent/30 bg-theme-accent/10 text-theme-accent hover:text-theme-on-accent",
};

export default function LanguageSwitcher({
  className = "",
  position = "inline",
  variant = "pill",
  color = "default",
}: LanguageSwitcherProps) {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const nextLanguage: Locale = locale === "tr" ? "en" : "tr";

  function handleLanguageChange(language: Locale) {
    if (language === locale) return;

    startTransition(() => router.replace(pathname, { locale: language }));
  }

  if (variant === "circle") {
    return (
      <button
        type="button"
        disabled={isPending}
        onClick={() => handleLanguageChange(nextLanguage)}
        aria-label={`Switch language to ${nextLanguage.toUpperCase()}`}
        className={[
          "flex w-12 h-12 items-center justify-center rounded-full border text-[0.68rem] font-semibold tracking-[0.18em] transition backdrop-blur-md disabled:cursor-not-allowed disabled:opacity-60",
          "outline-none focus-visible:ring-2 focus-visible:ring-theme-accent/70",
          "cursor-pointer",
          positionClasses[position],
          colorClasses[color],
          className,
        ].join(" ")}
      >
        {nextLanguage.toUpperCase()}
      </button>
    );
  }

  return (
    <div
      className={[
        "flex items-center rounded-full border p-1 text-[0.68rem] font-medium tracking-[0.18em] backdrop-blur-md",
        positionClasses[position],
        colorClasses[color],
        className,
      ].join(" ")}
      aria-label="Language selector"
    >
      {languages.map((language, index) => (
        <div key={language} className="flex items-center">
          {index === 1 && (
            <span className="mx-1 text-theme-accent/35" aria-hidden="true">
              |
            </span>
          )}

          <button
            type="button"
            disabled={isPending}
            onClick={() => handleLanguageChange(language)}
            aria-pressed={locale === language}
            className="flex cursor-pointer items-center disabled:cursor-not-allowed disabled:opacity-60"
          >
            <span
              className={[
                "flex items-center rounded-full px-2 py-2 outline-none transition focus-visible:ring-2 focus-visible:ring-theme-accent/70",
                locale === language
                  ? "bg-theme-control-active/12 text-theme-on-accent"
                  : "",
              ].join(" ")}
            >
              {language.toUpperCase()}
            </span>
          </button>
        </div>
      ))}
    </div>
  );
}

