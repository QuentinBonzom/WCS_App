import type { MetadataRoute } from "next";
import { absoluteUrl, postPath, sitemapPages } from "@/lib/seo";
import { getAllPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticEntries: MetadataRoute.Sitemap = sitemapPages.map((page) => ({
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

  const postEntries: MetadataRoute.Sitemap = getAllPosts().map((post) => {
    const url = absoluteUrl(postPath(post));
    return {
      url,
      lastModified: new Date(post.dateModified ?? post.datePublished),
      changeFrequency: "monthly",
      priority: 0.6,
      alternates: {
        languages: { fr: url, "x-default": url },
      },
    };
  });

  return [...staticEntries, ...postEntries];
}
