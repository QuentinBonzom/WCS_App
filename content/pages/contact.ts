import type { Localized } from "./types";

export type ContactContent = {
  eyebrow: string;
  titleLines: string[];
  intro: string;
  infoTitle: string;
  infoText: string;
  locationTitle: string;
  locationTextBefore: string;
  locationLink: string;
  areasTitle: string;
  areasText: string;
  available: string;
};

export const contactContent: Localized<ContactContent> = {
  fr: {
    eyebrow: "Contact",
    titleLines: ["Devis site web", "sur mesure."],
    intro:
      "Prêt à créer votre site internet, application mobile ou refonte SEO ?",
    infoTitle: "Informations de contact",
    infoText:
      "Nous travaillons avec des clients du monde entier et garantissons une réponse rapide.",
    locationTitle: "Localisation & expertise",
    locationTextBefore:
      "Basé à Montbéliard, France - au cœur du territoire de Belfort-Montbéliard, avec une expertise dédiée à la",
    locationLink: "création de site internet à Montbéliard",
    areasTitle: "Zones d'intervention",
    areasText:
      "Services digitaux disponibles dans toute la France et aux États-Unis. Collaboration à distance optimisée.",
    available: "Disponible · Monde entier",
  },
  en: {
    eyebrow: "Contact",
    titleLines: ["Custom website", "quote."],
    intro: "Ready to create your website, mobile app or SEO redesign?",
    infoTitle: "Contact information",
    infoText: "We work with clients worldwide and guarantee a fast response.",
    locationTitle: "Location & expertise",
    locationTextBefore:
      "Based in Montbéliard, France - in the Belfort-Montbéliard area, with dedicated expertise in",
    locationLink: "website creation in Montbéliard",
    areasTitle: "Service areas",
    areasText:
      "Digital services available across France and the United States. Remote collaboration is fully optimized.",
    available: "Available · Worldwide",
  },
};
