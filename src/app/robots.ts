import type { MetadataRoute } from "next";

import { createAbsoluteUrl } from "@/config/app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/studio"],
    },
    sitemap: createAbsoluteUrl("/sitemap.xml"),
  };
}
