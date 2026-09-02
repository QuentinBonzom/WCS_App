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

/**
 * Everything a rich "local landing" page renders, for one locale.
 * Consumed by {@link LocalLandingPage}.
 */
export type LocalLandingContent = {
  /** schema.org Service */
  serviceName: string;
  serviceType: string;
  hero: {
    eyebrow: string;
    titleLines: string[];
    intro: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
  };
  value: {
    eyebrow: string;
    heading: string;
    points: { title: string; text: string }[];
  };
  siteTypes: {
    eyebrow: string;
    heading: string;
    intro: string;
    items: { title: string; text: string; badge?: string }[];
  };
  advantages: {
    eyebrow: string;
    heading: string;
    intro: string;
    items: string[];
  };
  process: {
    eyebrow: string;
    heading: string;
    steps: { step: string; title: string; text: string }[];
  };
  work: { eyebrow: string; heading: string; text: string; ctaLabel: string };
  why: {
    eyebrow: string;
    heading: string;
    items: { title: string; text: string }[];
  };
  area: { eyebrow: string; heading: string; text: string; note: string };
  pricing: {
    eyebrow: string;
    heading: string;
    intro: string;
    factors: string[];
    note: string;
  };
  /** marquee words */
  marquee: string[];
  /** cross-links to sibling local pages */
  related?: { heading: string; links: { label: string; href: string }[] };
  faqEyebrow: string;
  faqHeading: string;
  faq: FaqItem[];
  finalCta: { eyebrow: string; heading: string; text: string; ctaLabel: string };
};
