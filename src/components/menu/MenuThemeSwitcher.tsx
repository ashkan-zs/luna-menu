"use client";

import { Palette } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import type { MenuTheme, MenuThemeId } from "@/types/theme";

type MenuThemeSwitcherProps = {
  themes: MenuTheme[];
  activeThemeId: MenuThemeId;
  onThemeChange: (themeId: MenuThemeId) => void;
};

const copy = {
  buttonLabel: "Customize menu theme",
  panelLabel: "Theme presets",
};

export default function MenuThemeSwitcher({
  themes,
  activeThemeId,
  onThemeChange,
}: MenuThemeSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const activeTheme =
    themes.find((theme) => theme.id === activeThemeId) ?? themes[0];

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handlePointerDown = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        aria-label={copy.buttonLabel}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
        className="grid size-11 cursor-pointer place-items-center rounded-full border border-white/10 bg-white/4.5 text-theme-text-muted/76 transition duration-300 hover:border-theme-accent/32 hover:text-theme-text-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-theme-accent/80"
      >
        <Palette size={18} strokeWidth={1.7} aria-hidden="true" />
      </button>

      {isOpen ? (
        <div
          aria-label={copy.panelLabel}
          className="absolute right-0 top-[calc(100%+0.75rem)] w-[min(18rem,calc(100vw-2rem))] overflow-hidden rounded-[1.25rem] border border-white/10 bg-theme-bg/92 p-2 text-theme-text shadow-[0_22px_70px_rgb(0_0_0_/0.42)] backdrop-blur-2xl"
        >
          <div className="px-3 pb-2 pt-2">
            <p className="text-[0.62rem] font-medium uppercase tracking-[0.24em] text-theme-accent/72">
              Theme
            </p>
            <p className="mt-1 truncate font-serif text-lg text-theme-text-strong">
              {activeTheme.name}
            </p>
          </div>

          <div className="space-y-1">
            {themes.map((theme) => {
              const isActive = theme.id === activeThemeId;

              return (
                <button
                  key={theme.id}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => {
                    onThemeChange(theme.id);
                    setIsOpen(false);
                  }}
                  className={[
                    "flex min-h-13 w-full cursor-pointer items-center gap-3 rounded-2xl border px-3 py-2 text-left transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-theme-accent/80",
                    isActive
                      ? "border-theme-accent/35 bg-theme-accent/12"
                      : "border-transparent hover:border-white/10 hover:bg-white/5.5",
                  ].join(" ")}
                >
                  <span
                    className="flex size-9 shrink-0 overflow-hidden rounded-full border border-white/12"
                    aria-hidden="true"
                  >
                    <span
                      className="flex-1"
                      style={{ backgroundColor: theme.swatches.background }}
                    />
                    <span
                      className="flex-1"
                      style={{ backgroundColor: theme.swatches.surface }}
                    />
                    <span
                      className="flex-1"
                      style={{ backgroundColor: theme.swatches.accent }}
                    />
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate text-sm font-medium text-theme-text-soft">
                      {theme.name}
                    </span>
                    <span className="mt-0.5 block text-xs text-theme-text-muted/58">
                      {theme.accentLabel}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
}
