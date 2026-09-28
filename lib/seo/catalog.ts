import { projetsContent, type ProjectCard } from "@/content/pages/projets";
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
    name: "Applications et outils métier sur mesure",
    description:
      "Prise de rendez-vous, suivi de dossiers, devis-factures et tableaux de bord sur mesure pour automatiser vos process.",
    serviceType: "Custom software development",
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
      name: "Custom business apps & internal tools",
      description:
        "Booking, case tracking, quotes and invoicing, dashboards — custom-built to automate your processes.",
      serviceType: "Custom software development",
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
  ],
};

/**
 * Client projects for structured data. Single source of truth is the /projets
 * content (`content/pages/projets.ts`) — this is a read-only view so a new
 * project only has to be added in one place.
 */
export type SeoProject = ProjectCard;

export const seoProjectsByLocale: Record<Locale, SeoProject[]> = {
  fr: projetsContent.fr.projects,
  en: projetsContent.en.projects,
};
