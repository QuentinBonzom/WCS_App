import type { Localized } from "./types";

export type ProjectCard = {
  cat: string;
  location: string;
  title: string;
  desc: string;
  img: string;
  href: string;
  /** true → show a "temporary link" badge and label */
  temporary: boolean;
};

export type ProjetsContent = {
  headerEyebrow: string;
  titleLines: string[];
  headerText: string;
  temporary: string;
  temporaryButton: string;
  visitButton: string;
  imageAlt: string;
  projects: ProjectCard[];
  ctaEyebrow: string;
  ctaTitle: string;
  ctaText: string;
};

const baseProjects: ProjectCard[] = [
  {
    cat: "Site vitrine",
    location: "France",
    title: "RSCustom",
    desc: "Une expérience automobile sombre et immersive pour présenter les installations CarPlay, caméras de recul, éclairage et detailing.",
    img: "/projects/rscustom.jpg",
    href: "https://www.rscustom.fr",
    temporary: false,
  },
  {
    cat: "Site vitrine bilingue",
    location: "États-Unis",
    title: "Garage à la Carte",
    desc: "Un site premium pour un studio de transformation de garages à Orlando, avec services, réalisations et demande de devis.",
    img: "/projects/garage-a-la-carte.jpg",
    href: "https://www.garagealacarte.com",
    temporary: false,
  },
  {
    cat: "Site web & application mobile",
    location: "France",
    title: "Barber Industrie",
    desc: "Un écosystème web et mobile pour présenter l'équipe, partager les actualités du salon et simplifier la prise de rendez-vous.",
    img: "/projects/barber-industrie.jpg",
    href: "https://barberindustrie.fr",
    temporary: false,
  },
  {
    cat: "Site industriel",
    location: "France",
    title: "ERPI",
    desc: "Une présence digitale technique pour un bureau d'études spécialisé dans les process industriels, l'assemblage et la soudure robotisée.",
    img: "/projects/erpi.jpg",
    href: "https://erpi-sasu.fr",
    temporary: false,
  },
];

/** Client projects — shared by /projets and the home hero parallax. */
export const projects = baseProjects;

export const projetsContent: Localized<ProjetsContent> = {
  fr: {
    headerEyebrow: "Nos projets",
    titleLines: ["Sites web", "sur mesure."],
    headerText:
      "Une sélection de réalisations digitales — sites vitrines, interfaces premium et applications web ou mobiles conçues pour des clients en France et aux États-Unis.",
    temporary: "Lien provisoire",
    temporaryButton: "Voir la version provisoire",
    visitButton: "Visiter le site",
    imageAlt: "Page d'accueil du site",
    projects: baseProjects,
    ctaEyebrow: "Votre projet, ensuite",
    ctaTitle: "À vous de jouer.",
    ctaText:
      "Parlons de votre prochaine réalisation. Consultation gratuite, réponse sous 24h.",
  },
  en: {
    headerEyebrow: "Our projects",
    titleLines: ["Custom", "websites."],
    headerText:
      "A selection of digital work - showcase websites, premium interfaces and web or mobile applications created for clients in France and the United States.",
    temporary: "Temporary link",
    temporaryButton: "View temporary version",
    visitButton: "Visit website",
    imageAlt: "Homepage preview for",
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
    ],
    ctaEyebrow: "Your project next",
    ctaTitle: "Your turn.",
    ctaText:
      "Let's talk about your next launch. Free consultation, reply within 24h.",
  },
};
