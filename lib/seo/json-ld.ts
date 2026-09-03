import { defaultLocale, localizedPath, type Locale } from "@/lib/i18n";
import type { BlogPost } from "@/lib/blog";
import {
  absoluteUrl,
  siteConfig,
  siteDescriptions,
  type FaqItem,
  type SeoPage,
} from "./site";
import { getSeoPage, seoPages } from "./pages";
import { pageOgImage, postOgImage, postPath } from "./metadata";
import {
  seoProjectsByLocale,
  seoServicesByLocale,
} from "./catalog";

export function breadcrumbJsonLd(
  items: Array<{ name: string; path: string }>,
  locale: Locale = defaultLocale,
) {
  return {
    "@context": "https://schema.org",
    ...breadcrumbListJsonLd(items, locale),
  };
}

function breadcrumbListJsonLd(
  items: Array<{ name: string; path: string }>,
  locale: Locale = defaultLocale,
) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(localizedPath(item.path, locale)),
    })),
  };
}

export function baseJsonLd(locale: Locale = defaultLocale) {
  const organizationId = absoluteUrl("#organization");
  const services = seoServicesByLocale[locale];

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "ProfessionalService"],
        "@id": organizationId,
        name: siteConfig.name,
        url: siteConfig.url,
        logo: absoluteUrl(siteConfig.logoPath),
        image: absoluteUrl(pageOgImage(seoPages.home)),
        email: siteConfig.email,
        description: siteDescriptions[locale],
        priceRange: "€€",
        // Service-area business run from a private address — locality only, no street.
        address: {
          "@type": "PostalAddress",
          addressLocality: siteConfig.location.city,
          addressRegion: siteConfig.location.region,
          addressCountry: siteConfig.location.country,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: siteConfig.location.geo.latitude,
          longitude: siteConfig.location.geo.longitude,
        },
        areaServed: siteConfig.localAreas.map((name) => ({
          "@type": "Place",
          name,
        })),
        knowsAbout: [
          "création de site internet",
          "création de site web",
          "création de site vitrine",
          "refonte de site internet",
          "développement web",
          "SEO local",
          "design UI/UX",
          "accessibilité numérique",
        ],
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "customer support",
            email: siteConfig.email,
            areaServed: [
              ...siteConfig.localAreas.slice(0, 3),
              ...siteConfig.areas,
            ],
            availableLanguage: ["fr", "en"],
          },
        ],
        makesOffer: services.map((service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.name,
            description: service.description,
            serviceType: service.serviceType,
            provider: { "@id": organizationId },
          },
        })),
      },
      {
        "@type": "WebSite",
        "@id": absoluteUrl("#website"),
        name: siteConfig.name,
        url: siteConfig.url,
        inLanguage: locale,
        publisher: {
          "@id": organizationId,
        },
      },
    ],
  };
}

export function servicesJsonLd(locale: Locale = defaultLocale) {
  const page = getSeoPage("services", locale);
  const services = seoServicesByLocale[locale];

  return {
    "@context": "https://schema.org",
    "@graph": [
      breadcrumbListJsonLd([
        { name: locale === "fr" ? "Accueil" : "Home", path: "/" },
        { name: "Services", path: "/services" },
      ], locale),
      {
        "@type": "ItemList",
        "@id": absoluteUrl(localizedPath("/services#services", locale)),
        name:
          locale === "fr"
            ? "Services digitaux WebCode Studio"
            : "WebCode Studio digital services",
        itemListElement: services.map((service, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "Service",
            name: service.name,
            description: service.description,
            serviceType: service.serviceType,
            provider: {
              "@id": absoluteUrl("#organization"),
            },
            areaServed: siteConfig.areas,
            url: absoluteUrl(localizedPath(page.path, locale)),
          },
        })),
      },
    ],
  };
}

export function projectsJsonLd(locale: Locale = defaultLocale) {
  const page = getSeoPage("projects", locale);
  const projects = seoProjectsByLocale[locale];

  return {
    "@context": "https://schema.org",
    "@graph": [
      breadcrumbListJsonLd([
        { name: locale === "fr" ? "Accueil" : "Home", path: "/" },
        { name: locale === "fr" ? "Projets" : "Projects", path: "/projets" },
      ], locale),
      {
        "@type": "CollectionPage",
        "@id": absoluteUrl(localizedPath("/projets#portfolio", locale)),
        name: page.title,
        description: page.description,
        hasPart: projects.map((project) => ({
          "@type": "CreativeWork",
          name: project.name,
          description: project.description,
          url: project.url,
          image: absoluteUrl(project.image),
          creator: {
            "@id": absoluteUrl("#organization"),
          },
        })),
      },
    ],
  };
}

export function contactJsonLd(locale: Locale = defaultLocale) {
  const page = getSeoPage("contact", locale);

  return {
    "@context": "https://schema.org",
    "@graph": [
      breadcrumbListJsonLd([
        { name: locale === "fr" ? "Accueil" : "Home", path: "/" },
        { name: "Contact", path: "/contact" },
      ], locale),
      {
        "@type": "ContactPage",
        "@id": absoluteUrl(localizedPath("/contact#contact", locale)),
        name: page.title,
        description: page.description,
        url: absoluteUrl(localizedPath("/contact", locale)),
        mainEntity: {
          "@id": absoluteUrl("#organization"),
        },
      },
    ],
  };
}

export function serviceLandingJsonLd({
  page,
  serviceName,
  serviceType,
  faq,
  areaServed = siteConfig.areas,
  keywords,
  locale = defaultLocale,
}: {
  page: SeoPage;
  serviceName: string;
  serviceType: string;
  faq: FaqItem[];
  areaServed?: string[];
  keywords?: string[];
  locale?: Locale;
}) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      breadcrumbListJsonLd([
        { name: locale === "fr" ? "Accueil" : "Home", path: "/" },
        { name: serviceName, path: page.path },
      ], locale),
      {
        "@type": "Service",
        "@id": absoluteUrl(localizedPath(`${page.path}#service`, locale)),
        name: serviceName,
        description: page.description,
        serviceType,
        provider: {
          "@id": absoluteUrl("#organization"),
        },
        areaServed: areaServed.map((name) => ({
          "@type": "Place",
          name,
        })),
        url: absoluteUrl(localizedPath(page.path, locale)),
        keywords: (keywords ?? page.keywords).join(", "),
      },
      {
        "@type": "FAQPage",
        "@id": absoluteUrl(localizedPath(`${page.path}#faq`, locale)),
        mainEntity: faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };
}

export function blogListingJsonLd(
  posts: BlogPost[],
  locale: Locale = defaultLocale,
) {
  const page = getSeoPage("blog", locale);

  return {
    "@context": "https://schema.org",
    "@graph": [
      breadcrumbListJsonLd([
        { name: locale === "fr" ? "Accueil" : "Home", path: "/" },
        { name: "Blog", path: "/blog" },
      ], locale),
      {
        "@type": "Blog",
        "@id": absoluteUrl(localizedPath("/blog#blog", locale)),
        name: page.title,
        description: page.description,
        url: absoluteUrl(localizedPath("/blog", locale)),
        inLanguage: locale,
        publisher: { "@id": absoluteUrl("#organization") },
        blogPost: posts.map((post) => ({
          "@type": "BlogPosting",
          headline: post.title,
          description: post.description,
          url: absoluteUrl(localizedPath(postPath(post), locale)),
          datePublished: post.datePublished,
          dateModified: post.dateModified ?? post.datePublished,
        })),
      },
    ],
  };
}

export function blogPostingJsonLd(
  post: BlogPost,
  locale: Locale = defaultLocale,
) {
  const path = localizedPath(postPath(post), locale);
  const url = absoluteUrl(path);

  return {
    "@context": "https://schema.org",
    "@graph": [
      breadcrumbListJsonLd([
        { name: locale === "fr" ? "Accueil" : "Home", path: "/" },
        { name: "Blog", path: "/blog" },
        { name: post.title, path: postPath(post) },
      ], locale),
      {
        "@type": "BlogPosting",
        "@id": `${url}#article`,
        headline: post.title,
        description: post.description,
        url,
        mainEntityOfPage: url,
        datePublished: post.datePublished,
        dateModified: post.dateModified ?? post.datePublished,
        inLanguage: locale,
        keywords: post.keywords.join(", "),
        articleSection: post.category,
        image: absoluteUrl(postOgImage(post)),
        author: {
          "@type": "Organization",
          name: siteConfig.name,
          url: siteConfig.url,
        },
        publisher: {
          "@type": "Organization",
          name: siteConfig.name,
          logo: {
            "@type": "ImageObject",
            url: absoluteUrl(siteConfig.logoPath),
          },
        },
      },
    ],
  };
}
