import { defaultLocale, type Locale } from "@/lib/i18n";
import { sharedKeywords, type SeoPage } from "./site";

export const seoPages = {
  home: {
    path: "/",
    title: "Studio web à Montbéliard · Sites, applications & outils métier",
    description:
      "WebCode Studio, studio web à Montbéliard : sites internet, applications et outils métier sur mesure pour les entreprises et artisans du Doubs et du Nord Franche-Comté. Devis sous 24h.",
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
      "Création de site internet à Montbéliard : sites vitrines et sites sur mesure pour les entreprises et artisans du Doubs. Design premium, SEO local, devis sous 24h.",
    keywords: [
      ...sharedKeywords,
      "création site internet Montbéliard",
      "creation site internet montbeliard",
      "création de site internet Montbéliard",
      "création site web Montbéliard",
      "création site vitrine Montbéliard",
      "développeur web Montbéliard",
      "développeur web Doubs",
      "création site web Doubs",
      "SEO local Montbéliard",
    ],
    priority: 0.95,
    changeFrequency: "monthly",
    ogLabel: "Site internet à Montbéliard",
  },
  refonteSiteInternetMontbeliard: {
    path: "/refonte-site-internet-montbeliard",
    title: "Refonte de site internet à Montbéliard",
    description:
      "Refonte de site internet à Montbéliard : nouveau design, performances, mobile et SEO pour votre site existant, sans casser votre référencement. Audit et devis sous 24h.",
    keywords: [
      ...sharedKeywords,
      "refonte site internet Montbéliard",
      "refonte site web Montbéliard",
      "refonte site internet Doubs",
      "moderniser site internet Montbéliard",
      "refaire site internet Montbéliard",
      "développeur web Montbéliard",
      "SEO local Montbéliard",
    ],
    priority: 0.9,
    changeFrequency: "monthly",
    ogLabel: "Refonte à Montbéliard",
  },
  agenceWebMontbeliard: {
    path: "/agence-web-montbeliard",
    title: "Agence web à Montbéliard",
    description:
      "Agence web à Montbéliard : stratégie, design, développement, SEO local et suivi pour les entreprises du Doubs. Un interlocuteur unique, pas de sous-traitance.",
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
  applicationsMetierMontbeliard: {
    path: "/applications-metier-montbeliard",
    title: "Applications & outils métier sur mesure à Montbéliard",
    description:
      "Développement d'applications web et d'outils métier sur mesure à Montbéliard : prise de rendez-vous, suivi de dossiers, devis-factures, tableaux de bord. Devis sous 24h.",
    keywords: [
      ...sharedKeywords,
      "application métier sur mesure Montbéliard",
      "logiciel de gestion sur mesure",
      "application prise de rendez-vous",
      "outil interne entreprise",
      "développeur application web Montbéliard",
      "logiciel sur mesure Doubs",
    ],
    priority: 0.9,
    changeFrequency: "monthly",
    ogLabel: "Applications métier",
  },
  tarifs: {
    path: "/tarifs",
    title: "Tarifs : prix d'un site internet à Montbéliard",
    description:
      "Combien coûte un site internet ? Tarifs de départ WebCode Studio : site vitrine à partir de 690 €, site sur mesure à partir de 990 €, application métier sur devis. Devis gratuit sous 24h.",
    keywords: [
      ...sharedKeywords,
      "prix création site internet Montbéliard",
      "tarif site vitrine",
      "prix site web",
      "combien coûte un site internet",
      "devis site internet Montbéliard",
      "tarif création site web Doubs",
    ],
    priority: 0.85,
    changeFrequency: "monthly",
    ogLabel: "Tarifs",
  },
} satisfies Record<string, SeoPage>;

export const seoPagesByLocale = {
  fr: seoPages,
  en: {
    home: {
      path: "/",
      title: "Web studio in Montbéliard · Websites, apps & business tools",
      description:
        "WebCode Studio, web studio in Montbéliard: custom websites, applications and business tools for companies and artisans across the Doubs and Nord Franche-Comté. Quote within 24h.",
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
        "Website creation in Montbéliard for businesses, artisans and shops in the Doubs area: showcase sites and custom builds. Premium design, local SEO, clear quote within 24h.",
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
    refonteSiteInternetMontbeliard: {
      path: "/refonte-site-internet-montbeliard",
      title: "Website redesign in Montbéliard",
      description:
        "Website redesign in Montbéliard: new design, performance, mobile and SEO for your existing site — keeping what already works. Audit and quote within 24h.",
      keywords: [
        "website redesign Montbéliard",
        "website revamp Montbéliard",
        "website redesign Doubs",
        "modernize website Montbéliard",
        "web developer Montbéliard",
        "local SEO Montbéliard",
      ],
      priority: 0.9,
      changeFrequency: "monthly",
      ogLabel: "Redesign in Montbéliard",
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
    applicationsMetierMontbeliard: {
      path: "/applications-metier-montbeliard",
      title: "Custom business apps & internal tools in Montbéliard",
      description:
        "Custom web app and internal tool development in Montbéliard: appointment booking, case tracking, quotes and invoicing, dashboards. Quote within 24h.",
      keywords: [
        "custom business application",
        "custom management software",
        "appointment booking application",
        "internal company tool",
        "web application developer Montbéliard",
      ],
      priority: 0.9,
      changeFrequency: "monthly",
      ogLabel: "Business apps",
    },
    tarifs: {
      path: "/tarifs",
      title: "Pricing: how much a website costs in Montbéliard",
      description:
        "How much does a website cost? WebCode Studio starting prices: showcase site from €690, custom site from €990, business app on quote. Free quote within 24h.",
      keywords: [
        "website price",
        "showcase website cost",
        "how much does a website cost",
        "website quote Montbéliard",
        "web design pricing",
      ],
      priority: 0.85,
      changeFrequency: "monthly",
      ogLabel: "Pricing",
    },
  },
} satisfies Record<Locale, Record<keyof typeof seoPages, SeoPage>>;

export type SeoPageKey = keyof typeof seoPages;

/**
 * Last meaningful content change per route, as an ISO date. Used for the
 * sitemap `lastmod` so it stays stable across deploys instead of "now".
 * Bump a date only when that page's copy actually changes.
 */
export const pageLastModified: Record<SeoPageKey, string> = {
  home: "2026-09-03",
  services: "2026-09-03",
  projects: "2026-09-03",
  contact: "2026-09-03",
  blog: "2026-09-04",
  creationSiteInternetMontbeliard: "2026-09-03",
  refonteSiteInternetMontbeliard: "2026-09-03",
  agenceWebMontbeliard: "2026-09-03",
  creationSiteVitrine: "2026-09-03",
  applicationsMetierMontbeliard: "2026-09-04",
  tarifs: "2026-09-08",
};

export function getSeoPage(key: SeoPageKey, locale: Locale = defaultLocale) {
  return seoPagesByLocale[locale][key];
}

export const sitemapPages: SeoPage[] = Object.values(seoPages);
