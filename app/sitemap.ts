import type { MetadataRoute } from "next";
import { absoluteUrl, sitemapPages } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return sitemapPages.map((page) => ({
    url: absoluteUrl(page.path),
    lastModified,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
    alternates: {
      languages: {
        fr: absoluteUrl(page.path),
        "x-default": absoluteUrl(page.path),
      },
    },
    images: page.images?.map((image) => absoluteUrl(image)),
  }));
}
