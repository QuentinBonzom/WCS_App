import { agenceWebMontbeliardContent } from "./agence-web-montbeliard";
import { creationSiteVitrineContent } from "./creation-site-vitrine";
import { creationSiteWebMontbeliardContent } from "./creation-site-web-montbeliard";

/**
 * Copy for the "SEO service landing" pages, keyed by their {@link SeoPageKey}.
 * Rendered by `<ServiceLandingPage pageKey=… />`.
 */
export const serviceLandingContent = {
  creationSiteVitrine: creationSiteVitrineContent,
  agenceWebMontbeliard: agenceWebMontbeliardContent,
  creationSiteWebMontbeliard: creationSiteWebMontbeliardContent,
} as const;

export type ServiceLandingKey = keyof typeof serviceLandingContent;
