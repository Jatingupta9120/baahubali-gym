import type { MetadataRoute } from "next";
import { site } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/about", "/training", "/facilities", "/membership", "/gallery", "/contact"].map((p) => ({
    url: `${site.url}${p}`, lastModified: new Date(), priority: p === "" ? 1 : 0.8,
  }));
}
