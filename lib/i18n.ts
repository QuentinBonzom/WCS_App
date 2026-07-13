export const locales = ["fr", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "fr";

export const localeNames: Record<Locale, string> = {
  fr: "Français",
  en: "English",
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

function splitPath(path: string) {
  const hashIndex = path.indexOf("#");
  const queryIndex = path.indexOf("?");
  const cutIndexes = [hashIndex, queryIndex].filter((index) => index >= 0);
  const suffixIndex = cutIndexes.length ? Math.min(...cutIndexes) : -1;

  return suffixIndex >= 0
    ? { pathname: path.slice(0, suffixIndex), suffix: path.slice(suffixIndex) }
    : { pathname: path, suffix: "" };
}

export function getLocaleFromPathname(pathname: string): Locale {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "fr";
}

export function stripLocaleFromPathname(pathname: string) {
  if (pathname === "/en") return "/";
  if (pathname.startsWith("/en/")) return pathname.slice(3) || "/";
  return pathname || "/";
}

export function localizedPath(path: string, locale: Locale) {
  if (!path.startsWith("/")) return path;

  const { pathname, suffix } = splitPath(stripLocaleFromPathname(path));
  const cleanPath =
    pathname === "/" ? "/" : `/${pathname.replace(/^\/+|\/+$/g, "")}`;

  if (locale === "fr") {
    return `${cleanPath}${suffix}`;
  }

  return `${cleanPath === "/" ? "/en" : `/en${cleanPath}`}${suffix}`;
}

export function switchLocalePath(pathname: string, locale: Locale) {
  return localizedPath(stripLocaleFromPathname(pathname), locale);
}

export function localizeHref(href: string, locale: Locale) {
  if (!href.startsWith("/")) return href;
  if (href.startsWith("/api") || href.startsWith("/_next")) return href;
  return localizedPath(href, locale);
}

export const dictionary = {
  fr: {
    nav: {
      home: "Accueil",
      services: "Services",
      projects: "Projets",
      blog: "Blog",
      contact: "Contact",
      brandAria: "WebCode Studio - accueil",
      openMenu: "Ouvrir le menu",
      closeMenu: "Fermer le menu",
      language: "Changer de langue",
    },
    footer: {
      description:
        "Agence digitale premium spécialisée dans la création d'expériences web exceptionnelles. Nous transformons vos ambitions en réalités numériques performantes.",
      available: "Disponible pour nouveaux projets",
      expertise: "Expertises",
      searches: "Recherches",
      contact: "Contact",
      webCreation: "Création de site web",
      mobileApps: "Applications Mobiles",
      uiUx: "Design UI/UX",
      accessibility: "Accessibilité RGAA",
      projects: "Nos Projets",
      localWebCreation: "Création de site web Montbéliard",
      localAgency: "Agence web Montbéliard",
      showcaseWebsite: "Création site vitrine",
      accessibilityAudit: "Audit accessibilité RGAA",
      internationalClients: "Clients internationaux",
      response: "Réponse sous 24h garantie",
      rights: "Tous droits réservés.",
    },
    common: {
      startProject: "Démarrer mon projet",
      freeConsultation: "Consultation gratuite",
      customQuote: "Devis personnalisé",
      response24: "Réponse sous 24h",
      requestQuote: "Demander un devis",
      readPage: "Lire la page",
      readArticle: "Lire l'article",
      minutesRead: "min de lecture",
      faq: "FAQ",
      frequentQuestions: "Questions fréquentes.",
      projectCtaEyebrow: "Projet concret",
      projectCtaTitle: "Parlons de votre site.",
      projectCtaText: "Consultation gratuite, cadrage clair et réponse sous 24h.",
    },
  },
  en: {
    nav: {
      home: "Home",
      services: "Services",
      projects: "Projects",
      blog: "Blog",
      contact: "Contact",
      brandAria: "WebCode Studio - home",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      language: "Change language",
    },
    footer: {
      description:
        "A premium digital studio specialized in exceptional web experiences. We turn your ambitions into high-performing digital products.",
      available: "Available for new projects",
      expertise: "Expertise",
      searches: "Searches",
      contact: "Contact",
      webCreation: "Website creation",
      mobileApps: "Mobile Apps",
      uiUx: "UI/UX Design",
      accessibility: "RGAA Accessibility",
      projects: "Our Projects",
      localWebCreation: "Website creation in Montbéliard",
      localAgency: "Web agency in Montbéliard",
      showcaseWebsite: "Showcase website creation",
      accessibilityAudit: "RGAA accessibility audit",
      internationalClients: "International clients",
      response: "Guaranteed reply within 24h",
      rights: "All rights reserved.",
    },
    common: {
      startProject: "Start my project",
      freeConsultation: "Free consultation",
      customQuote: "Custom quote",
      response24: "Reply within 24h",
      requestQuote: "Request a quote",
      readPage: "Read the page",
      readArticle: "Read the article",
      minutesRead: "min read",
      faq: "FAQ",
      frequentQuestions: "Frequently asked questions.",
      projectCtaEyebrow: "Concrete project",
      projectCtaTitle: "Let's talk about your website.",
      projectCtaText: "Free consultation, clear scoping and reply within 24h.",
    },
  },
} satisfies Record<Locale, Record<string, Record<string, string>>>;

export function getDictionary(locale: Locale) {
  return dictionary[locale];
}
