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
    headerEyebrow: "Nos réalisations",
    titleLines: ["Sites internet", "sur mesure."],
    headerText:
      "Une sélection de réalisations WebCode Studio — sites vitrines, écosystèmes web et mobile et présences digitales techniques, conçus pour des clients en France et à l'étranger.",
    temporary: "Lien provisoire",
    temporaryButton: "Voir la version provisoire",
    visitButton: "Visiter le site",
    imageAlt: "Page d'accueil du site",
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
    ctaEyebrow: "Votre projet, ensuite",
    ctaTitle: "À vous de jouer.",
    ctaText:
      "Parlons de votre prochaine réalisation. Consultation gratuite, réponse sous 24h.",
  },
  en: {
    headerEyebrow: "Our work",
    titleLines: ["Custom", "websites."],
    headerText:
      "A selection of WebCode Studio work - showcase websites, web and mobile ecosystems and technical digital presences, created for clients in France and abroad.",
    temporary: "Temporary link",
    temporaryButton: "View temporary version",
    visitButton: "Visit website",
    imageAlt: "Homepage preview for",
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
    ],
    ctaEyebrow: "Your project next",
    ctaTitle: "Your turn.",
    ctaText:
      "Let's talk about your next launch. Free consultation, reply within 24h.",
  },
};
