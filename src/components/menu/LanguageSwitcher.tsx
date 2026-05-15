"use client";

import { SupportedLanguage } from "@/types/menu";
import React from "react";

type LanguageSwitcherProps = {
  activeLanguage: SupportedLanguage;
  onLanguageChange?: (language: SupportedLanguage) => void;
};

const languages: SupportedLanguage[] = ["tr", "en"];

export default function LanguageSwitcher({
  activeLanguage,
  onLanguageChange,
}: LanguageSwitcherProps) {
  return (
    <div
      className="flex items-center rounded-full border border-white/10 bg-white/4.5 p-1 text-[0.68rem] font-medium tracking-[0.18em] text-menu-cream/70"
      aria-label="Language selector"
    >
      {languages.map((language, index) => (
        <React.Fragment key={language}>
          {index === 1 && (
            <span className="mx-1 text-menu-brass/35" aria-hidden="true">
              |
            </span>
          )}
          <button
            key={language}
            type="button"
            onClick={() => onLanguageChange?.(language)}
            aria-pressed={activeLanguage === language}
            className="flex items-center cursor-pointer"
          >
            <span
              className={[
                "flex items-center rounded-full px-2 py-2 transition outline-none focus-visible:ring-2 focus-visible:ring-menu-brass/70",
                activeLanguage === language
                  ? "bg-menu-language-active/12 text-menu-button-text"
                  : "hover:text-menu-button-text",
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
