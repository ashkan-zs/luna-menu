import "server-only";

const PREVIEW_SECRET_PARAM_NAMES = ["previewSecret", "secret"] as const;

type PreviewSearchParams = Record<string, string | string[] | undefined>;

export function hasRestaurantPreviewAccess(searchParams: PreviewSearchParams) {
  const previewSecret = process.env.LUNA_PREVIEW_SECRET;

  if (!previewSecret) {
    return false;
  }

  return PREVIEW_SECRET_PARAM_NAMES.some((paramName) => {
    const value = searchParams[paramName];
    const submittedSecret = Array.isArray(value) ? value[0] : value;

    return submittedSecret === previewSecret;
  });
}
