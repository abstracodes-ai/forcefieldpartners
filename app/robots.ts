import type { MetadataRoute } from "next";

import { PRIMARY_DOMAIN } from "@/lib/site-content";

export default function robots(): MetadataRoute.Robots {
  return {
    host: PRIMARY_DOMAIN,
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${PRIMARY_DOMAIN}/sitemap.xml`,
  };
}
