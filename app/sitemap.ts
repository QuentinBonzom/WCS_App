import type { MetadataRoute } from "next";
import { locales, localizedPath } from "@/lib/i18n";
import {
  absoluteUrl,
  pageLastModified,
  postPath,
  seoPagesByLocale,
  type SeoPage,
  type SeoPageKey,
} from "@/lib/seo";
import { getAllPosts } from "@/lib/blog";

/** Absolute URL without a lone trailing slash, to match the rendered canonical tags. */
function loc(path: string) {
  return absoluteUrl(path).replace(/\/$/, "");
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = locales.flatMap((locale) =>
    (
      Object.entries(seoPagesByLocale[locale]) as [SeoPageKey, SeoPage][]
    ).map(([key, page]) => ({
      url: loc(localizedPath(page.path, locale)),
      lastModified: new Date(page.lastModified ?? pageLastModified[key]),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
      alternates: {
        languages: {
          fr: loc(page.path),
          en: loc(localizedPath(page.path, "en")),
          "x-default": loc(page.path),
        },
      },
      images: page.images?.map((image) => absoluteUrl(image)),
    })),
  );

  const postEntries: MetadataRoute.Sitemap = locales.flatMap((locale) =>
    getAllPosts(locale).map((post) => {
      const path = postPath(post);
      return {
        url: loc(localizedPath(path, locale)),
        lastModified: new Date(post.dateModified ?? post.datePublished),
        changeFrequency: "monthly" as const,
        priority: 0.6,
        alternates: {
          languages: {
            fr: loc(path),
            en: loc(localizedPath(path, "en")),
            "x-default": loc(path),
          },
        },
      };
    }),
  );

  return [...staticEntries, ...postEntries];
}
