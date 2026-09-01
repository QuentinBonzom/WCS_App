import type { BlogPost } from "@/lib/blog";
import { defaultLocale, localizedPath, type Locale } from "@/lib/i18n";
import { absoluteUrl, siteConfig, type SeoPage } from "./site";

/** Absolute URL without a lone trailing slash, so canonical/hreflang stay consistent. */
function canonical(path: string) {
  return absoluteUrl(path).replace(/\/$/, "");
}

export function pageOgImage(page: SeoPage) {
  const params = new URLSearchParams({
    title: page.title,
    label: page.ogLabel || siteConfig.name,
  });

  return `/api/og?${params.toString()}`;
}

export function buildPageMetadata(page: SeoPage, locale: Locale = defaultLocale) {
  const ogImage = pageOgImage(page);
  const canonicalPath = localizedPath(page.path, locale);

  return {
    title:
      page.path === "/"
        ? {
            absolute: `${page.title} | ${siteConfig.name}`,
          }
        : page.title,
    description: page.description,
    keywords: page.keywords,
    alternates: {
      canonical: canonical(canonicalPath),
      languages: {
        fr: canonical(page.path),
        en: canonical(localizedPath(page.path, "en")),
        "x-default": canonical(page.path),
      },
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url: canonical(canonicalPath),
      siteName: siteConfig.name,
      locale: locale === "fr" ? siteConfig.locale : "en_US",
      type: "website",
      images: [
        {
          url: absoluteUrl(ogImage),
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} - ${page.title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [absoluteUrl(ogImage)],
    },
  };
}

export function postPath(post: BlogPost) {
  return `/blog/${post.slug}`;
}

export function postOgImage(post: BlogPost) {
  const params = new URLSearchParams({
    title: post.title,
    label: post.category || "Blog",
  });

  return `/api/og?${params.toString()}`;
}

export function buildPostMetadata(post: BlogPost, locale: Locale = defaultLocale) {
  const path = postPath(post);
  const ogImage = postOgImage(post);
  const canonicalPath = localizedPath(path, locale);

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: {
      canonical: canonical(canonicalPath),
      languages: {
        fr: canonical(path),
        en: canonical(localizedPath(path, "en")),
        "x-default": canonical(path),
      },
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: canonical(canonicalPath),
      siteName: siteConfig.name,
      locale: locale === "fr" ? siteConfig.locale : "en_US",
      type: "article",
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified ?? post.datePublished,
      authors: [siteConfig.name],
      images: [
        {
          url: absoluteUrl(ogImage),
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} - ${post.title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image" as const,
      title: post.title,
      description: post.description,
      images: [absoluteUrl(ogImage)],
    },
  };
}
