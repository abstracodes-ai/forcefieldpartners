import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    host: "https://forcefieldpartners.in",
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://forcefieldpartners.in/sitemap.xml",
  };
}
