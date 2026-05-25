import type { MetadataRoute } from "next";

import { PRIMARY_DOMAIN, SERVICES } from "@/lib/site-content";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: PRIMARY_DOMAIN,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${PRIMARY_DOMAIN}/services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...SERVICES.map((service) => ({
      url: `${PRIMARY_DOMAIN}/services/${service.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
