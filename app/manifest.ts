import type { MetadataRoute } from "next";

import { BRAND_NAME, SITE_DESCRIPTION } from "@/lib/site-content";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: BRAND_NAME,
    short_name: "ForceField",
    description: SITE_DESCRIPTION,
    start_url: "/",
    display: "standalone",
    background_color: "#06101f",
    theme_color: "#06101f",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
