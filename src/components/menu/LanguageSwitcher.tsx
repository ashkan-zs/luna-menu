"use client";

export type Language = "TR" | "EN";

type LanguageSwitcherProps = {
  activeLanguage: Language;
  onLanguageChange?: (language: Language) => void;
};

const languages: Language[] = ["TR", "EN"];

export default function LanguageSwitcher({
  activeLanguage,
  onLanguageChange,
}: LanguageSwitcherProps) {
  return (
    <div
      className="flex min-h-11 items-center rounded-full border border-white/10 bg-white/[0.045] px-1 text-[0.68rem] font-medium tracking-[0.18em] text-menu-cream/70"
      aria-label="Language selector"
    >
      {languages.map((language, index) => (
        <button
          key={language}
          type="button"
          onClick={() => onLanguageChange?.(language)}
          aria-pressed={activeLanguage === language}
          className={[
            "min-h-9 rounded-full px-2.5 transition outline-none focus-visible:ring-2 focus-visible:ring-menu-brass/70",
            activeLanguage === language
              ? "bg-menu-language-active/12 text-menu-button-text"
              : "hover:text-menu-button-text",
          ].join(" ")}
        >
          {language}
          {index === 0 ? (
            <span className="ml-2 text-menu-brass/35" aria-hidden="true">
              |
            </span>
          ) : null}
        </button>
      ))}
    </div>
  );
}
