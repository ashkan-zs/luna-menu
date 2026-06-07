import { urlFor } from "../lib/image";
import type { SanityImageWithAlt } from "../types";

export function mapSanityImageToUrl(
  image: SanityImageWithAlt | undefined,
): string | undefined {
  if (!image?.asset?._ref) {
    return undefined;
  }

  return urlFor(image).url();
}
