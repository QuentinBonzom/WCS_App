import type { MetadataRoute } from "next";
import type { Locale } from "@/lib/i18n";

/** Shape of every entry in {@link seoPages} — one route's SEO/metadata config. */
export type SeoPage = {
  path: string;
  title: string;
  description: string;
  keywords: string[];
  priority: number;
  changeFrequency: NonNullable<
    MetadataRoute.Sitemap[number]["changeFrequency"]
  >;
  ogLabel?: string;
  images?: string[];
};

export type FaqItem = {
  question: string;
  answer: string;
};

function stripTrailingSlash(value: string) {
  return value.replace(/\/+$/, "");
}

const canonicalSiteUrl = "https://www.webcodestudio.fr";

function normalizeSiteUrl(value?: string) {
  try {
    const url = new URL(value || canonicalSiteUrl);

    url.protocol = "https:";
    url.hostname =
      url.hostname === "webcodestudio.fr"
        ? "www.webcodestudio.fr"
        : url.hostname;
    url.pathname = "";
    url.search = "";
    url.hash = "";

    return stripTrailingSlash(url.toString());
  } catch {
    return canonicalSiteUrl;
  }
}

const siteUrl = normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL);

export const siteConfig = {
  name: "WebCode Studio",
  shortName: "WebCode",
  url: siteUrl,
  locale: "fr_FR",
  language: "fr",
  email: "contact@webcodestudio.fr",
  logoPath: "/logoWCSsansfond.png",
  description:
    "Studio web à Montbéliard spécialisé dans la création de sites internet rapides, applications mobiles, design UI/UX et référencement SEO.",
  location: {
    city: "Montbéliard",
    region: "Bourgogne-Franche-Comté",
    country: "FR",
  },
  areas: ["France", "États-Unis", "Suisse", "Belfort", "Montbéliard"],
  localAreas: [
    "Montbéliard",
    "Pays de Montbéliard",
    "Belfort",
    "Audincourt",
    "Sochaux",
    "Valentigney",
    "Exincourt",
    "Bethoncourt",
    "Héricourt",
    "Bourgogne-Franche-Comté",
  ],
};

export const siteDescriptions: Record<Locale, string> = {
  fr: siteConfig.description,
  en: "Web studio in Montbéliard specializing in fast websites, mobile applications, UI/UX design and SEO.",
};

export function absoluteUrl(path = "/") {
  return new URL(path, `${siteConfig.url}/`).toString();
}

/** Keyword set shared by most French pages, spread into their `keywords`. */
export const sharedKeywords = [
  "création site web",
  "création site internet",
  "développement web",
  "application mobile",
  "design UI UX",
  "référencement SEO",
  "agence web Montbéliard",
  "site vitrine professionnel",
];
