export const APP_THEME_COLOR = "#080705";
export const APP_NAME = "Luna Menu";
export const APP_DESCRIPTION =
  "Premium mobile-first QR menus for restaurants, cafes, and cocktail bars.";

function ensureUrlProtocol(url: string) {
  return /^https?:\/\//.test(url) ? url : `https://${url}`;
}

export function getAppBaseUrl() {
  const url =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.VERCEL_PROJECT_PRODUCTION_URL ||
    process.env.VERCEL_URL ||
    "http://localhost:3000";

  return ensureUrlProtocol(url);
}

export function createAbsoluteUrl(path: string) {
  return new URL(path, getAppBaseUrl()).toString();
}