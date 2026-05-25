import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ForceField Partners LLP",
    short_name: "ForceField",
    description:
      "Execution teams for field operations, DevSecOps, MLOps, and AI workflow automation.",
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
