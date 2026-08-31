import type { Locale } from "@/lib/i18n";

/**
 * Services offered, used to build Organization / ItemList structured data.
 * Page-visible service copy lives in the page components, not here.
 */
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

export const seoServicesByLocale: Record<Locale, typeof seoServices> = {
  fr: seoServices,
  en: [
    {
      name: "Web development",
      description:
        "Creation of fast, responsive showcase websites, landing pages and platforms optimized for organic visibility.",
      serviceType: "Web development",
    },
    {
      name: "Mobile applications",
      description:
        "Design and development of iOS and Android applications for smooth user experiences.",
      serviceType: "Mobile app development",
    },
    {
      name: "UI/UX design",
      description:
        "Clear interfaces, efficient user journeys, prototypes and design systems aligned with business goals.",
      serviceType: "UI/UX design",
    },
    {
      name: "SEO",
      description:
        "Technical optimization, content structure, performance and structured data to improve organic visibility.",
      serviceType: "Search engine optimization",
    },
    {
      name: "Repère - digital accessibility",
      description:
        "RGAA audit, remediation and regulatory documentation to make websites and apps compliant with the EAA.",
      serviceType: "Accessibility compliance audit",
    },
  ],
};

/** Client projects, used to build CollectionPage structured data and the /projets grid data. */
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
    url: "https://barberindustrie.fr",
    image: "/projects/barber-industrie.jpg",
  },
  {
    name: "ERPI",
    description:
      "Site industriel pour un bureau d'études spécialisé dans les process industriels et la soudure robotisée.",
    url: "https://erpi-sasu.fr",
    image: "/projects/erpi.jpg",
  },
];

export const seoProjectsByLocale: Record<Locale, typeof seoProjects> = {
  fr: seoProjects,
  en: [
    {
      name: "RSCustom",
      description:
        "Automotive showcase website for CarPlay installations, rear cameras, lighting and detailing.",
      url: "https://www.rscustom.fr",
      image: "/projects/rscustom.jpg",
    },
    {
      name: "Garage à la Carte",
      description:
        "Premium bilingual website for a garage transformation studio in Orlando.",
      url: "https://www.garagealacarte.com",
      image: "/projects/garage-a-la-carte.jpg",
    },
    {
      name: "Barber Industrie",
      description:
        "Web and mobile ecosystem for a barber shop with news and appointment booking.",
      url: "https://barberindustrie.fr",
      image: "/projects/barber-industrie.jpg",
    },
    {
      name: "ERPI",
      description:
        "Industrial website for an engineering office specialized in industrial processes and robotic welding.",
      url: "https://erpi-sasu.fr",
      image: "/projects/erpi.jpg",
    },
  ],
};
