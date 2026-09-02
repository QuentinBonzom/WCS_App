import { creationSiteInternetMontbeliardContent } from "./creation-site-internet-montbeliard";
import { refonteSiteInternetMontbeliardContent } from "./refonte-site-internet-montbeliard";

/**
 * Copy for the rich local landing pages, keyed by their {@link SeoPageKey}.
 * Rendered by `<LocalLandingPage pageKey=… />`.
 */
export const localLandingContent = {
  creationSiteInternetMontbeliard: creationSiteInternetMontbeliardContent,
  refonteSiteInternetMontbeliard: refonteSiteInternetMontbeliardContent,
} as const;

export type LocalLandingKey = keyof typeof localLandingContent;
