import { agenceWebMontbeliardContent } from "./agence-web-montbeliard";
import { creationSiteVitrineContent } from "./creation-site-vitrine";

/**
 * Copy for the "SEO service landing" pages, keyed by their {@link SeoPageKey}.
 * Rendered by `<ServiceLandingPage pageKey=… />`.
 * The Montbéliard local page has its own richer component (`LocalLandingPage`).
 */
export const serviceLandingContent = {
  creationSiteVitrine: creationSiteVitrineContent,
  agenceWebMontbeliard: agenceWebMontbeliardContent,
} as const;

export type ServiceLandingKey = keyof typeof serviceLandingContent;
