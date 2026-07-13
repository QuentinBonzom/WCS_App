import type { MetadataRoute } from "next";
import { locales, localizedPath } from "@/lib/i18n";
import {
  absoluteUrl,
  postPath,
  seoPagesByLocale,
  type SeoPage,
} from "@/lib/seo";
import { getAllPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticEntries: MetadataRoute.Sitemap = locales.flatMap((locale) =>
    (Object.values(seoPagesByLocale[locale]) as SeoPage[]).map((page) => ({
      url: absoluteUrl(localizedPath(page.path, locale)),
      lastModified,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
      alternates: {
        languages: {
          fr: absoluteUrl(page.path),
          en: absoluteUrl(localizedPath(page.path, "en")),
          "x-default": absoluteUrl(page.path),
        },
      },
      images: page.images?.map((image) => absoluteUrl(image)),
    })),
  );

  const postEntries: MetadataRoute.Sitemap = locales.flatMap((locale) =>
    getAllPosts(locale).map((post) => {
      const path = postPath(post);
      const url = absoluteUrl(localizedPath(path, locale));
      return {
        url,
        lastModified: new Date(post.dateModified ?? post.datePublished),
        changeFrequency: "monthly",
        priority: 0.6,
        alternates: {
          languages: {
            fr: absoluteUrl(path),
            en: absoluteUrl(localizedPath(path, "en")),
            "x-default": absoluteUrl(path),
          },
        },
      };
    }),
  );

  return [...staticEntries, ...postEntries];
}
