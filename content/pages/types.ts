import type { FaqItem } from "@/lib/seo";
import type { Locale } from "@/lib/i18n";

/** A value that exists in every supported locale. */
export type Localized<T> = Record<Locale, T>;

export type SeoSection = { title: string; text: string };

export type RelatedLink = {
  href: string;
  label: string;
  description: string;
};

/**
 * Everything a "SEO service landing" page renders, for one locale.
 * Consumed by {@link SeoServicePage} and by `serviceLandingJsonLd`.
 */
export type ServiceLandingContent = {
  /** schema.org Service name */
  serviceName: string;
  /** schema.org serviceType */
  serviceType: string;
  /** optional overrides for the structured data */
  jsonLd?: {
    areaServed?: string[];
    keywords?: string[];
  };
  eyebrow: string;
  /** rendered as an <h1> with a <br/> between each line */
  titleLines: string[];
  intro: string;
  primaryKeyword: string;
  proofPoints: string[];
  sections: SeoSection[];
  outcomes: string[];
  serviceAreas?: string[];
  relatedLinks?: RelatedLink[];
  faq: FaqItem[];
};
