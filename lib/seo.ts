import type { MetadataRoute } from "next";
import type { BlogPost } from "@/lib/blog";

type SeoPage = {
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

const siteUrl = stripTrailingSlash(
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.webcodestudio.fr",
);

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

export function absoluteUrl(path = "/") {
  return new URL(path, `${siteConfig.url}/`).toString();
}

const sharedKeywords = [
  "création site web",
  "création site internet",
  "développement web",
  "application mobile",
  "design UI UX",
  "référencement SEO",
  "agence web Montbéliard",
  "site vitrine professionnel",
];

export const seoPages = {
  home: {
    path: "/",
    title: "Création de sites web et applications sur mesure à Montbéliard",
    description:
      "WebCode Studio conçoit des sites web rapides, applications mobiles et interfaces premium pour transformer vos visiteurs en clients. Basé à Montbéliard, disponible en France et à l'international.",
    keywords: sharedKeywords,
    priority: 1,
    changeFrequency: "weekly",
    ogLabel: "Création web & mobile",
  },
  services: {
    path: "/services",
    title: "Services web, mobile, UI/UX et SEO",
    description:
      "Développement de sites web performants, applications mobiles iOS et Android, design UI/UX, optimisation SEO, maintenance et accompagnement digital complet.",
    keywords: [
      ...sharedKeywords,
      "développement application mobile",
      "maintenance site web",
      "optimisation performance web",
    ],
    priority: 0.9,
    changeFrequency: "monthly",
    ogLabel: "Services digitaux",
  },
  projects: {
    path: "/projets",
    title: "Réalisations web et applications clients",
    description:
      "Découvrez les sites vitrines, expériences digitales et applications réalisées par WebCode Studio pour des clients en France et aux États-Unis.",
    keywords: [
      ...sharedKeywords,
      "portfolio site web",
      "réalisations site vitrine",
      "exemples sites professionnels",
    ],
    priority: 0.8,
    changeFrequency: "monthly",
    ogLabel: "Réalisations clients",
    images: [
      "/projects/rscustom.jpg",
      "/projects/garage-a-la-carte.jpg",
      "/projects/barber-industrie.jpg",
      "/projects/erpi.jpg",
    ],
  },
  contact: {
    path: "/contact",
    title: "Contact et devis pour votre projet web",
    description:
      "Contactez WebCode Studio pour créer votre site web, application mobile ou refonte digitale. Consultation gratuite, devis personnalisé et réponse sous 24h.",
    keywords: [
      ...sharedKeywords,
      "devis site web",
      "contact agence web",
      "consultation projet digital",
    ],
    priority: 0.85,
    changeFrequency: "monthly",
    ogLabel: "Devis sous 24h",
  },
  blog: {
    path: "/blog",
    title: "Blog : conseils web, SEO et création de sites",
    description:
      "Conseils pratiques sur la création de sites web, le référencement SEO local, la performance et le design pour les entreprises de Montbéliard et d'ailleurs.",
    keywords: [
      ...sharedKeywords,
      "blog création site web",
      "conseils SEO",
      "guide site internet",
    ],
    priority: 0.7,
    changeFrequency: "weekly",
    ogLabel: "Conseils & guides",
  },
  creationSiteWebMontbeliard: {
    path: "/creation-site-web-montbeliard",
    title: "Création site web Montbéliard",
    description:
      "Création de site web à Montbéliard pour artisans, PME, indépendants et commerces : site internet rapide, SEO local, Google Business Profile et demandes de devis.",
    keywords: [
      ...sharedKeywords,
      "creation de site web montbeliard",
      "création site web Montbéliard",
      "création de site web Montbéliard",
      "création site internet Montbéliard",
      "création de site internet Montbéliard",
      "site web professionnel Montbéliard",
      "développeur web Montbéliard",
      "agence création site web Montbéliard",
      "site internet Belfort Montbéliard",
      "SEO local Montbéliard",
      "Google Business Profile Montbéliard",
    ],
    priority: 0.95,
    changeFrequency: "monthly",
    ogLabel: "Site web à Montbéliard",
  },
  agenceWebMontbeliard: {
    path: "/agence-web-montbeliard",
    title: "Agence web à Montbéliard",
    description:
      "Agence web à Montbéliard spécialisée dans les sites internet sur mesure, refontes, SEO, design UI/UX et accompagnement digital pour entreprises locales.",
    keywords: [
      ...sharedKeywords,
      "agence web Montbéliard",
      "agence digitale Montbéliard",
      "agence web Belfort Montbéliard",
      "refonte site internet Montbéliard",
      "SEO local Montbéliard",
    ],
    priority: 0.95,
    changeFrequency: "monthly",
    ogLabel: "Agence web locale",
  },
  creationSiteVitrine: {
    path: "/creation-site-vitrine",
    title: "Création de site vitrine professionnel",
    description:
      "Création de site vitrine professionnel pour présenter votre activité, rassurer vos prospects et générer des contacts qualifiés avec un site rapide et optimisé SEO.",
    keywords: [
      ...sharedKeywords,
      "création site vitrine",
      "site vitrine professionnel",
      "site vitrine artisan",
      "site vitrine PME",
      "devis site vitrine",
    ],
    priority: 0.9,
    changeFrequency: "monthly",
    ogLabel: "Site vitrine",
  },
  repereAudit: {
    path: "/repere-audit",
    title: "Repère — mise en conformité accessibilité (EAA / RGAA)",
    description:
      "Audit, remédiation et documentation réglementaire pour rendre votre site et votre application conformes à l'European Accessibility Act et au RGAA. Sécurisez-vous contre les sanctions de non-conformité.",
    keywords: [
      ...sharedKeywords,
      "mise en conformité accessibilité",
      "accessibilité numérique",
      "audit accessibilité RGAA",
      "European Accessibility Act",
      "conformité RGAA",
      "déclaration d'accessibilité",
      "audit accessibilité site web",
    ],
    priority: 0.9,
    changeFrequency: "monthly",
    ogLabel: "Accessibilité & conformité",
  },
} satisfies Record<string, SeoPage>;

export const sitemapPages: SeoPage[] = Object.values(seoPages);

export function pageOgImage(page: SeoPage) {
  const params = new URLSearchParams({
    title: page.title,
    label: page.ogLabel || siteConfig.name,
  });

  return `/api/og?${params.toString()}`;
}

export function buildPageMetadata(page: SeoPage) {
  const ogImage = pageOgImage(page);

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
      canonical: page.path,
      languages: {
        fr: page.path,
        "x-default": page.path,
      },
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url: page.path,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
      images: [
        {
          url: ogImage,
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
      images: [ogImage],
    },
  };
}

export const seoServices = [
  {
    name: "Développement web",
    description:
      "Création de sites vitrines, landing pages et plateformes rapides, responsive et optimisées pour le référencement naturel.",
    serviceType: "Web development",
  },
  {
    name: "Applications mobiles",
    description:
      "Conception et développement d'applications iOS et Android pour offrir une expérience fluide à vos utilisateurs.",
    serviceType: "Mobile app development",
  },
  {
    name: "Design UI/UX",
    description:
      "Interfaces claires, parcours utilisateurs efficaces, prototypes et design systems adaptés aux objectifs business.",
    serviceType: "UI/UX design",
  },
  {
    name: "Référencement SEO",
    description:
      "Optimisation technique, structure de contenu, performance et données enrichies pour améliorer la visibilité organique.",
    serviceType: "Search engine optimization",
  },
  {
    name: "Repère — accessibilité numérique",
    description:
      "Audit RGAA, remédiation et documentation réglementaire pour rendre les sites et applications conformes à l'EAA.",
    serviceType: "Accessibility compliance audit",
  },
];

export const seoProjects = [
  {
    name: "RSCustom",
    description:
      "Site vitrine automobile pour présenter des installations CarPlay, caméras de recul, éclairage et detailing.",
    url: "https://www.rscustom.fr",
    image: "/projects/rscustom.jpg",
  },
  {
    name: "Garage à la Carte",
    description:
      "Site premium bilingue pour un studio de transformation de garages à Orlando.",
    url: "https://www.garagealacarte.com",
    image: "/projects/garage-a-la-carte.jpg",
  },
  {
    name: "Barber Industrie",
    description:
      "Écosystème web et mobile pour un salon de coiffure avec actualités et prise de rendez-vous.",
    url: "https://barber-industrie.vercel.app",
    image: "/projects/barber-industrie.jpg",
  },
  {
    name: "ERPI",
    description:
      "Site industriel pour un bureau d'études spécialisé dans les process industriels et la soudure robotisée.",
    url: "https://erpi-tawny.vercel.app",
    image: "/projects/erpi.jpg",
  },
];

export function breadcrumbJsonLd(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    ...breadcrumbListJsonLd(items),
  };
}

function breadcrumbListJsonLd(items: Array<{ name: string; path: string }>) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function baseJsonLd() {
  const organizationId = absoluteUrl("#organization");

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
        "@id": organizationId,
        name: siteConfig.name,
        url: siteConfig.url,
        logo: absoluteUrl(siteConfig.logoPath),
        image: absoluteUrl(pageOgImage(seoPages.home)),
        email: siteConfig.email,
        description: siteConfig.description,
        priceRange: "€€",
        address: {
          "@type": "PostalAddress",
          addressLocality: siteConfig.location.city,
          addressRegion: siteConfig.location.region,
          addressCountry: siteConfig.location.country,
        },
        areaServed: siteConfig.areas.map((name) => ({
          "@type": "Place",
          name,
        })),
        serviceArea: siteConfig.localAreas.map((name) => ({
          "@type": "Place",
          name,
        })),
        knowsAbout: [
          "création de site web",
          "création de site internet",
          "SEO local",
          "Google Business Profile",
          "développement web",
          "site vitrine",
          "accessibilité numérique",
        ],
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "customer support",
            email: siteConfig.email,
            areaServed: siteConfig.areas,
            availableLanguage: ["fr", "en"],
          },
        ],
        makesOffer: seoServices.map((service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.name,
            description: service.description,
            serviceType: service.serviceType,
          },
        })),
      },
      {
        "@type": "WebSite",
        "@id": absoluteUrl("#website"),
        name: siteConfig.name,
        url: siteConfig.url,
        inLanguage: siteConfig.language,
        publisher: {
          "@id": organizationId,
        },
      },
    ],
  };
}

export function servicesJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      breadcrumbListJsonLd([
        { name: "Accueil", path: "/" },
        { name: "Services", path: "/services" },
      ]),
      {
        "@type": "ItemList",
        "@id": absoluteUrl("/services#services"),
        name: "Services digitaux WebCode Studio",
        itemListElement: seoServices.map((service, index) => ({
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
          },
        })),
      },
    ],
  };
}

export function projectsJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      breadcrumbListJsonLd([
        { name: "Accueil", path: "/" },
        { name: "Projets", path: "/projets" },
      ]),
      {
        "@type": "CollectionPage",
        "@id": absoluteUrl("/projets#portfolio"),
        name: seoPages.projects.title,
        description: seoPages.projects.description,
        hasPart: seoProjects.map((project) => ({
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

export function contactJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      breadcrumbListJsonLd([
        { name: "Accueil", path: "/" },
        { name: "Contact", path: "/contact" },
      ]),
      {
        "@type": "ContactPage",
        "@id": absoluteUrl("/contact#contact"),
        name: seoPages.contact.title,
        description: seoPages.contact.description,
        url: absoluteUrl("/contact"),
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
}: {
  page: SeoPage;
  serviceName: string;
  serviceType: string;
  faq: FaqItem[];
  areaServed?: string[];
  keywords?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      breadcrumbListJsonLd([
        { name: "Accueil", path: "/" },
        { name: serviceName, path: page.path },
      ]),
      {
        "@type": "Service",
        "@id": absoluteUrl(`${page.path}#service`),
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
        url: absoluteUrl(page.path),
        keywords: (keywords ?? page.keywords).join(", "),
      },
      {
        "@type": "FAQPage",
        "@id": absoluteUrl(`${page.path}#faq`),
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

export function buildPostMetadata(post: BlogPost) {
  const path = postPath(post);
  const ogImage = postOgImage(post);

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: {
      canonical: path,
      languages: {
        fr: path,
        "x-default": path,
      },
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: path,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "article",
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified ?? post.datePublished,
      authors: [siteConfig.name],
      images: [
        {
          url: ogImage,
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
      images: [ogImage],
    },
  };
}

export function blogListingJsonLd(posts: BlogPost[]) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      breadcrumbListJsonLd([
        { name: "Accueil", path: "/" },
        { name: "Blog", path: "/blog" },
      ]),
      {
        "@type": "Blog",
        "@id": absoluteUrl("/blog#blog"),
        name: seoPages.blog.title,
        description: seoPages.blog.description,
        url: absoluteUrl("/blog"),
        inLanguage: siteConfig.language,
        publisher: { "@id": absoluteUrl("#organization") },
        blogPost: posts.map((post) => ({
          "@type": "BlogPosting",
          headline: post.title,
          description: post.description,
          url: absoluteUrl(postPath(post)),
          datePublished: post.datePublished,
          dateModified: post.dateModified ?? post.datePublished,
        })),
      },
    ],
  };
}

export function blogPostingJsonLd(post: BlogPost) {
  const url = absoluteUrl(postPath(post));

  return {
    "@context": "https://schema.org",
    "@graph": [
      breadcrumbListJsonLd([
        { name: "Accueil", path: "/" },
        { name: "Blog", path: "/blog" },
        { name: post.title, path: postPath(post) },
      ]),
      {
        "@type": "BlogPosting",
        "@id": `${url}#article`,
        headline: post.title,
        description: post.description,
        url,
        mainEntityOfPage: url,
        datePublished: post.datePublished,
        dateModified: post.dateModified ?? post.datePublished,
        inLanguage: siteConfig.language,
        keywords: post.keywords.join(", "),
        articleSection: post.category,
        image: absoluteUrl(postOgImage(post)),
        author: { "@id": absoluteUrl("#organization") },
        publisher: { "@id": absoluteUrl("#organization") },
      },
    ],
  };
}
