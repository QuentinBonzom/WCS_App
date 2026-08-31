import { JsonLd } from "@/components/ui/json-ld";
import { SeoServicePage } from "@/components/sections/seo-service-page";
import { buildPageMetadata, getSeoPage, serviceLandingJsonLd } from "@/lib/seo";
import { defaultLocale, type Locale } from "@/lib/i18n";
import {
  serviceLandingContent,
  type ServiceLandingKey,
} from "@/content/pages/service-landings";

/** Metadata for a service-landing route — call from the route's `metadata` export. */
export function serviceLandingMetadata(
  pageKey: ServiceLandingKey,
  locale: Locale = defaultLocale,
) {
  return buildPageMetadata(getSeoPage(pageKey, locale), locale);
}

/**
 * One "SEO service landing" page: structured data + layout, both locales.
 * Copy lives in `content/pages/`, metadata in `lib/seo/pages.ts`.
 */
export function ServiceLandingPage({
  pageKey,
  locale = defaultLocale,
}: {
  pageKey: ServiceLandingKey;
  locale?: Locale;
}) {
  const page = getSeoPage(pageKey, locale);
  const content = serviceLandingContent[pageKey][locale];

  return (
    <>
      <JsonLd
        data={serviceLandingJsonLd({
          page,
          serviceName: content.serviceName,
          serviceType: content.serviceType,
          faq: content.faq,
          areaServed: content.jsonLd?.areaServed,
          keywords: content.jsonLd?.keywords,
          locale,
        })}
      />
      <SeoServicePage content={content} locale={locale} />
    </>
  );
}
