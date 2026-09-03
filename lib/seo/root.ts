import type { Metadata } from "next";
import { defaultLocale, localizedPath, type Locale } from "@/lib/i18n";
import { absoluteUrl, siteConfig, siteDescriptions } from "./site";
import { getSeoPage } from "./pages";
import { buildPageMetadata } from "./metadata";

function canonical(path: string) {
  return absoluteUrl(path).replace(/\/$/, "");
}

/**
 * Metadata for a locale's root layout. Split from the old single root layout so
 * `/` and `/en` each advertise their own canonical, description and OG locale.
 */
export function buildRootMetadata(locale: Locale = defaultLocale): Metadata {
  const home = getSeoPage("home", locale);
  const homeMeta = buildPageMetadata(home, locale);

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: `${siteConfig.name} — ${home.title}`,
      template: `%s | ${siteConfig.name}`,
    },
    description: siteDescriptions[locale],
    applicationName: siteConfig.name,
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    category: "technology",
    classification: "Agence web, développement web, application mobile, SEO",
    referrer: "origin-when-cross-origin",
    formatDetection: { email: false, address: false, telephone: false },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    alternates: {
      canonical: canonical(localizedPath("/", locale)),
      languages: {
        fr: canonical("/"),
        en: canonical("/en"),
        "x-default": canonical("/"),
      },
    },
    openGraph: {
      ...homeMeta.openGraph,
      url: canonical(localizedPath("/", locale)),
    },
    twitter: homeMeta.twitter,
    manifest: "/manifest.webmanifest",
  };
}
