import type { MetadataRoute } from "next";
import { siteConfig, treatments } from "@/lib/site";
import { locations } from "@/lib/locations";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const staticRoutes = [
    "",
    "/about",
    "/doctors",
    "/treatments",
    "/contact",
    "/blog",
    "/faq",
    "/locations",
    "/mr",
  ];

  const treatmentRoutes = treatments.map((t) => `/treatments/${t.slug}`);
  const locationRoutes = locations.map((l) => `/locations/${l.slug}`);

  return [...staticRoutes, ...treatmentRoutes, ...locationRoutes].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" || path.startsWith("/locations/") ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.startsWith("/locations/") ? 0.85 : path === "/mr" ? 0.8 : 0.75,
  }));
}
