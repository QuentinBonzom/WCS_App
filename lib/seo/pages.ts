import { defaultLocale, type Locale } from "@/lib/i18n";
import { sharedKeywords, type SeoPage } from "./site";

export const seoPages = {
  home: {
    path: "/",
    title: "Agence web à Montbéliard · Création de sites internet",
    description:
      "WebCode Studio, studio web à Montbéliard : création de sites internet, sites vitrines et applications sur mesure pour les entreprises, artisans et commerçants du Doubs. Devis sous 24h.",
    keywords: [
      "agence web Montbéliard",
      "création site internet Montbéliard",
      "création site web Montbéliard",
      "développeur web Montbéliard",
      "développeur web Doubs",
      "agence web Doubs",
      ...sharedKeywords,
    ],
    priority: 1,
    changeFrequency: "weekly",
    ogLabel: "Agence web à Montbéliard",
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
  creationSiteInternetMontbeliard: {
    path: "/creation-site-internet-montbeliard",
    title: "Création de site internet à Montbéliard",
    description:
      "Création de site internet à Montbéliard : sites vitrines, sites sur mesure et refontes pour entreprises, artisans et commerçants du Doubs. Design premium, SEO local, devis clair sous 24h.",
    keywords: [
      ...sharedKeywords,
      "création site internet Montbéliard",
      "creation site internet montbeliard",
      "création de site internet Montbéliard",
      "création site web Montbéliard",
      "création site vitrine Montbéliard",
      "refonte site internet Montbéliard",
      "développeur web Montbéliard",
      "développeur web Doubs",
      "création site web Doubs",
      "SEO local Montbéliard",
    ],
    priority: 0.95,
    changeFrequency: "monthly",
    ogLabel: "Site internet à Montbéliard",
  },
  agenceWebMontbeliard: {
    path: "/agence-web-montbeliard",
    title: "Agence web à Montbéliard",
    description:
      "Agence web à Montbéliard : stratégie, design, développement, SEO local et suivi pour les entreprises du Doubs et du Nord Franche-Comté. Un interlocuteur unique, pas de sous-traitance.",
    keywords: [
      ...sharedKeywords,
      "agence web Montbéliard",
      "agence web Doubs",
      "agence digitale Montbéliard",
      "agence web Belfort Montbéliard",
      "refonte site internet Montbéliard",
      "développeur web Doubs",
      "SEO local Montbéliard",
    ],
    priority: 0.95,
    changeFrequency: "monthly",
    ogLabel: "Agence web à Montbéliard",
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

export const seoPagesByLocale = {
  fr: seoPages,
  en: {
    home: {
      path: "/",
      title: "Custom websites and apps in Montbéliard",
      description:
        "WebCode Studio designs fast websites, mobile applications and premium interfaces that turn visitors into customers. Based in Montbéliard, available in France and internationally.",
      keywords: [
        "website creation",
        "web development",
        "mobile application",
        "UI UX design",
        "SEO",
        "web agency Montbéliard",
        "professional website",
      ],
      priority: 1,
      changeFrequency: "weekly",
      ogLabel: "Web & mobile creation",
    },
    services: {
      path: "/services",
      title: "Web, mobile, UI/UX and SEO services",
      description:
        "High-performing websites, iOS and Android mobile apps, UI/UX design, SEO optimization, maintenance and complete digital support.",
      keywords: [
        "web services",
        "mobile app development",
        "UI UX design",
        "SEO optimization",
        "website maintenance",
      ],
      priority: 0.9,
      changeFrequency: "monthly",
      ogLabel: "Digital services",
    },
    projects: {
      path: "/projets",
      title: "Client websites and app projects",
      description:
        "Explore websites, digital experiences and applications created by WebCode Studio for clients in France and the United States.",
      keywords: [
        "website portfolio",
        "client projects",
        "professional website examples",
      ],
      priority: 0.8,
      changeFrequency: "monthly",
      ogLabel: "Client work",
      images: seoPages.projects.images,
    },
    contact: {
      path: "/contact",
      title: "Contact and quote for your web project",
      description:
        "Contact WebCode Studio to create your website, mobile app or digital redesign. Free consultation, custom quote and reply within 24h.",
      keywords: [
        "website quote",
        "contact web agency",
        "digital project consultation",
      ],
      priority: 0.85,
      changeFrequency: "monthly",
      ogLabel: "Quote within 24h",
    },
    blog: {
      path: "/blog",
      title: "Blog: web, SEO and website creation guides",
      description:
        "Practical advice on website creation, local SEO, performance and design for businesses in Montbéliard and beyond.",
      keywords: [
        "website creation blog",
        "SEO advice",
        "website guide",
      ],
      priority: 0.7,
      changeFrequency: "weekly",
      ogLabel: "Guides & advice",
    },
    creationSiteInternetMontbeliard: {
      path: "/creation-site-internet-montbeliard",
      title: "Website creation in Montbéliard",
      description:
        "Website creation in Montbéliard for businesses, artisans and shops in the Doubs area: showcase sites, custom builds and redesigns. Premium design, local SEO, clear quote within 24h.",
      keywords: [
        "website creation Montbéliard",
        "web design Montbéliard",
        "website development Montbéliard",
        "web agency Montbéliard",
        "web developer Doubs",
        "local SEO Montbéliard",
      ],
      priority: 0.95,
      changeFrequency: "monthly",
      ogLabel: "Website in Montbéliard",
    },
    agenceWebMontbeliard: {
      path: "/agence-web-montbeliard",
      title: "Web agency in Montbéliard",
      description:
        "Web agency in Montbéliard specialized in custom websites, redesigns, SEO, UI/UX design and digital support for local businesses.",
      keywords: [
        "web agency Montbéliard",
        "digital agency Montbéliard",
        "website redesign Montbéliard",
        "local SEO Montbéliard",
      ],
      priority: 0.95,
      changeFrequency: "monthly",
      ogLabel: "Local web agency",
    },
    creationSiteVitrine: {
      path: "/creation-site-vitrine",
      title: "Professional showcase website creation",
      description:
        "Professional showcase website creation to present your business, reassure prospects and generate qualified contacts with a fast SEO-ready site.",
      keywords: [
        "showcase website creation",
        "professional website",
        "small business website",
        "website quote",
      ],
      priority: 0.9,
      changeFrequency: "monthly",
      ogLabel: "Showcase website",
    },
    repereAudit: {
      path: "/repere-audit",
      title: "Repère - accessibility compliance (EAA / RGAA)",
      description:
        "Audit, remediation and regulatory documentation to make your website or app compliant with the European Accessibility Act and RGAA.",
      keywords: [
        "accessibility compliance",
        "digital accessibility",
        "RGAA audit",
        "European Accessibility Act",
        "accessibility statement",
      ],
      priority: 0.9,
      changeFrequency: "monthly",
      ogLabel: "Accessibility & compliance",
    },
  },
} satisfies Record<Locale, Record<keyof typeof seoPages, SeoPage>>;

export type SeoPageKey = keyof typeof seoPages;

export function getSeoPage(key: SeoPageKey, locale: Locale = defaultLocale) {
  return seoPagesByLocale[locale][key];
}

export const sitemapPages: SeoPage[] = Object.values(seoPages);
