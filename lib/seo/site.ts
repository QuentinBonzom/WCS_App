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
    department: "Doubs",
    region: "Bourgogne-Franche-Comté",
    country: "FR",
    /** Approximate coordinates of Montbéliard — no personal address is exposed. */
    geo: { latitude: 47.5108, longitude: 6.7985 },
  },
  /** Broad served areas (international remote work) — used for Organization schema. */
  areas: ["France", "Suisse", "États-Unis"],
  /** Primary local service area around Montbéliard — used for local pages & schema. */
  localAreas: [
    "Montbéliard",
    "Pays de Montbéliard",
    "Audincourt",
    "Sochaux",
    "Valentigney",
    "Bethoncourt",
    "Grand-Charmont",
    "Bavans",
    "Voujeaucourt",
    "Héricourt",
    "Belfort",
    "Doubs",
    "Nord Franche-Comté",
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
