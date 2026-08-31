import type { Localized } from "./types";

export type BlogListingContent = {
  eyebrow: string;
  title: string;
  intro: string;
};

export const blogListingContent: Localized<BlogListingContent> = {
  fr: {
    eyebrow: "Blog",
    title: "Conseils & guides.",
    intro:
      "Nos articles sur la création de sites web, le référencement SEO local, la performance et le design — pour les entreprises de Montbéliard et d'ailleurs.",
  },
  en: {
    eyebrow: "Blog",
    title: "Advice & guides.",
    intro:
      "Our articles on website creation, local SEO, performance and design - for businesses in Montbéliard and beyond.",
  },
};
