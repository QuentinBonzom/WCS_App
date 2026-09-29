import type { Localized } from "./types";

/** A real app shipped as part of a project, emitted as SoftwareApplication. */
export type ProjectApp = {
  name: string;
  operatingSystem: string;
  applicationCategory: string;
  downloadUrl?: string;
  /** square app icon shown on the project card */
  icon?: string;
};

export type ProjectCard = {
  /** stable id → JSON-LD "@id" …/projets#<slug>. Never change once published. */
  slug: string;
  cat: string;
  location: string;
  title: string;
  desc: string;
  img: string;
  /** phone-size screenshot (390pt wide viewport) shown in an iPhone frame */
  mobileImg?: string;
  href: string;
  /** true → show a "temporary link" badge and label */
  temporary: boolean;
  /** client business name, when it differs from `title` */
  client?: string;
  /** year delivered (ISO 8601 year) */
  year?: string;
  technologies?: string[];
  app?: ProjectApp;
};

export type ProjetsContent = {
  headerEyebrow: string;
  titleLines: string[];
  headerText: string;
  temporary: string;
  temporaryButton: string;
  visitButton: string;
  imageAlt: string;
  /** 3D ring: scroll hint, card button prefix, dialog close label */
  ringHint: string;
  openProject: string;
  close: string;
  appBadge: string;
  appStoreButton: string;
  projects: ProjectCard[];
  similar: {
    heading: string;
    text: string;
    links: { label: string; href: string }[];
  };
  ctaEyebrow: string;
  ctaTitle: string;
  ctaText: string;
};

const baseProjects: ProjectCard[] = [
  {
    slug: "rscustom",
    year: "2024",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    cat: "Site vitrine",
    location: "France",
    title: "RSCustom",
    desc: "Une expérience automobile sombre et immersive pour présenter les installations CarPlay, caméras de recul, éclairage et detailing.",
    img: "/projects/rscustom.jpg",
    href: "https://www.rscustom.fr",
    temporary: false,
  },
  {
    slug: "garage-a-la-carte",
    year: "2024",
    technologies: ["Next.js", "Tailwind CSS", "Next-Intl"],
    cat: "Site vitrine bilingue",
    location: "États-Unis",
    title: "Garage à la Carte",
    desc: "Un site premium pour un studio de transformation de garages à Orlando, avec services, réalisations et demande de devis.",
    img: "/projects/garage-a-la-carte.jpg",
    mobileImg: "/projects/mobile/garage-a-la-carte.jpg",
    href: "https://www.garagealacarte.com",
    temporary: false,
  },
  {
    slug: "barber-industrie",
    year: "2025",
    technologies: ["Next.js", "Tailwind CSS", "React Native", "Expo"],
    // Live on the App Store; Android is announced as "coming soon" on the site.
    app: {
      name: "Barber Industrie",
      operatingSystem: "iOS",
      applicationCategory: "LifestyleApplication",
      downloadUrl: "https://apps.apple.com/fr/app/barber-industrie/id6784750563",
      icon: "/projects/barber-industrie-icon.png",
    },
    cat: "Site web & application mobile",
    location: "France",
    title: "Barber Industrie",
    desc: "Un écosystème web et mobile pour présenter l'équipe, partager les actualités du salon et simplifier la prise de rendez-vous.",
    img: "/projects/barber-industrie.jpg",
    mobileImg: "/projects/mobile/barber-industrie.jpg",
    href: "https://barberindustrie.fr",
    temporary: false,
  },
  {
    slug: "erpi",
    year: "2025",
    technologies: ["Next.js", "Tailwind CSS", "MDX"],
    cat: "Site industriel",
    location: "France",
    title: "ERPI",
    desc: "Une présence digitale technique pour un bureau d'études spécialisé dans les process industriels, l'assemblage et la soudure robotisée.",
    img: "/projects/erpi.jpg",
    mobileImg: "/projects/mobile/erpi.jpg",
    href: "https://erpi-sasu.fr",
    temporary: false,
  },
  {
    slug: "ambul-wash",
    year: "2026",
    technologies: ["Next.js", "Tailwind CSS"],
    cat: "Site vitrine locale",
    location: "Montbéliard",
    title: "Ambul Wash",
    desc: "Un site vitrine pour un service de nettoyage intérieur automobile à domicile, avec formules, tarifs et prise de rendez-vous autour de Montbéliard et Belfort.",
    img: "/projects/ambul-wash.jpg",
    mobileImg: "/projects/mobile/ambul-wash.jpg",
    href: "https://ambulwash.fr",
    temporary: false,
  },
];

/** Client projects shared by /projets and the home hero parallax. */
export const projects = baseProjects;

export const projetsContent: Localized<ProjetsContent> = {
  fr: {
    headerEyebrow: "Nos réalisations",
    titleLines: ["Sites internet", "sur mesure."],
    headerText:
      "Une sélection de réalisations WebCode Studio : sites vitrines, écosystèmes web et mobile et présences digitales techniques, conçus pour des clients en France et à l'étranger.",
    temporary: "Lien provisoire",
    temporaryButton: "Voir la version provisoire",
    visitButton: "Visiter le site",
    imageAlt: "Page d'accueil du site",
    ringHint: "Faites défiler · cliquez sur un projet",
    openProject: "Voir le projet",
    close: "Fermer",
    appBadge: "Application iOS",
    appStoreButton: "Télécharger sur l'App Store",
    projects: baseProjects,
    similar: {
      heading: "Un projet similaire ?",
      text: "Que vous soyez à Montbéliard, dans le Doubs ou ailleurs, on cadre votre projet et on vous répond sous 24h.",
      links: [
        {
          label: "Création de site internet à Montbéliard",
          href: "/creation-site-internet-montbeliard",
        },
        { label: "Nos services", href: "/services" },
        { label: "Demander un devis", href: "/contact" },
      ],
    },
    ctaEyebrow: "Et votre projet ?",
    ctaTitle: "Le prochain, c'est le vôtre.",
    ctaText:
      "Racontez-nous ce que vous voulez construire : premier échange gratuit, réponse sous 24h.",
  },
  en: {
    headerEyebrow: "Our work",
    titleLines: ["Custom", "websites."],
    headerText:
      "A selection of WebCode Studio work: showcase websites, web and mobile ecosystems and technical digital presences, created for clients in France and abroad.",
    temporary: "Temporary link",
    temporaryButton: "View temporary version",
    visitButton: "Visit website",
    imageAlt: "Homepage preview for",
    ringHint: "Scroll · click a project",
    openProject: "View project",
    close: "Close",
    appBadge: "iOS app",
    appStoreButton: "Download on the App Store",
    similar: {
      heading: "A similar project?",
      text: "Whether you're in Montbéliard, the Doubs or elsewhere, we scope your project and reply within 24h.",
      links: [
        {
          label: "Website creation in Montbéliard",
          href: "/creation-site-internet-montbeliard",
        },
        { label: "Our services", href: "/services" },
        { label: "Request a quote", href: "/contact" },
      ],
    },
    projects: [
      {
        ...baseProjects[0],
        cat: "Showcase website",
        desc: "A dark, immersive automotive experience presenting CarPlay installations, rear cameras, lighting and detailing.",
      },
      {
        ...baseProjects[1],
        cat: "Bilingual showcase website",
        location: "United States",
        desc: "A premium website for a garage transformation studio in Orlando, with services, projects and quote requests.",
      },
      {
        ...baseProjects[2],
        cat: "Website & mobile app",
        desc: "A web and mobile ecosystem to present the team, share shop news and simplify appointment booking.",
      },
      {
        ...baseProjects[3],
        cat: "Industrial website",
        desc: "A technical digital presence for an engineering office specialized in industrial processes, assembly and robotic welding.",
      },
      {
        ...baseProjects[4],
        cat: "Local showcase website",
        desc: "A showcase website for an at-home car interior cleaning service, with plans, pricing and online booking around Montbéliard and Belfort.",
      },
    ],
    ctaEyebrow: "What about yours?",
    ctaTitle: "Yours could be next.",
    ctaText:
      "Tell us what you want to build: free first call, reply within 24h.",
  },
};
