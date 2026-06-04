export const locals = ["en", "tr"] as const;

export type Locale = (typeof locals)[number];

export type LocalizedString = Record<Locale, string>;