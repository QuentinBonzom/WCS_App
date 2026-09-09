import type { Locale } from "@/lib/i18n";

/**
 * Copy for the home page (`app/page.tsx` → `HomePage`).
 * Structural data (service icons/links, counters) stays in the page component.
 */
export const homeContent = {
  fr: {
    heroParallax: {
      titleLines: ["Le studio web", "du Pays de Montbéliard."],
      highlight: "Montbéliard",
      intro:
        "WebCode Studio conçoit des sites internet, des applications et des outils métier sur mesure pour les entreprises, artisans et commerçants du Doubs et du Nord Franche-Comté. Rapide, crédible, pensé pour convertir — et un seul interlocuteur.",
      primaryCta: { label: "Demander un devis", href: "/contact" },
      secondaryCta: { label: "Voir nos réalisations", href: "/projets" },
      visitLabel: "Visiter le site",
    },
    servicesEyebrow: "Nos services",
    servicesTitle: "Pensés pour convertir.",
    servicesText:
      "De la création de site vitrine au développement sur mesure : trois expertises pour une présence digitale qui vous rend visible sur Google et transforme vos visiteurs en clients.",
    services: [
      {
        title: "Sites internet & vitrines",
        desc: "Sites sur mesure, sites vitrines et refontes : rapides, responsive et optimisés pour le référencement local.",
        linkLabel: "Création site internet Montbéliard",
      },
      {
        title: "Applications & outils métier",
        desc: "Prise de rendez-vous, suivi de dossiers, devis-factures : des outils sur mesure qui remplacent les fichiers éparpillés.",
        linkLabel: "Applications métier sur mesure",
      },
      {
        title: "Design UI/UX",
        desc: "Interfaces intuitives et expériences mémorables, du prototype au design system.",
        linkLabel: "Voir le design UI/UX",
      },
    ],
    servicesCta: {
      label: "Voir le détail des prestations et les tarifs",
      href: "/tarifs",
      hint: "À partir de 690 €",
    },
    local: {
      eyebrow: "Zone d'intervention",
      heading: "Un studio web ancré à Montbéliard.",
      text: "Basés dans le Pays de Montbéliard, nous accompagnons les entreprises, artisans, commerçants et indépendants du Doubs et du Nord Franche-Comté — Audincourt, Sochaux, Valentigney, Héricourt, Belfort — dans la création, la refonte et le référencement de leur site internet. Le reste de la France et l'international sont pris en charge à distance.",
      cta: {
        label: "Création de site internet à Montbéliard",
        href: "/creation-site-internet-montbeliard",
      },
    },
    aboutEyebrow: "Expertise confirmée",
    aboutTitle: "Vos idées, en réalité digitale.",
    aboutText:
      "Développeur passionné, je crée des expériences web modernes et des applications mobiles sur mesure pour donner vie à vos projets.",
    bullets: [
      "Design responsive",
      "Performance optimisée",
      "Référencement SEO",
      "Suivi et maintenance",
    ],
    ctaEyebrow: "Passons au concret",
    ctaTitle: "Démarrer mon projet.",
  },
  en: {
    heroParallax: {
      titleLines: ["The web studio", "for the Montbéliard area."],
      highlight: "Montbéliard",
      intro:
        "WebCode Studio builds custom websites, applications and business tools for companies, artisans and shops across the Doubs and Nord Franche-Comté. Fast, credible, built to convert — with a single point of contact.",
      primaryCta: { label: "Request a quote", href: "/contact" },
      secondaryCta: { label: "See our work", href: "/projets" },
      visitLabel: "Visit website",
    },
    servicesEyebrow: "Our services",
    servicesTitle: "Built to convert.",
    servicesText:
      "From showcase sites to custom development: three skills for a digital presence that makes you visible on Google and turns visitors into customers.",
    services: [
      {
        title: "Websites & showcase sites",
        desc: "Custom sites, showcase sites and redesigns: fast, responsive and optimized for local search.",
        linkLabel: "Website creation in Montbéliard",
      },
      {
        title: "Business apps & internal tools",
        desc: "Booking, case tracking, quotes and invoicing: custom tools that replace scattered spreadsheets.",
        linkLabel: "Custom business apps",
      },
      {
        title: "UI/UX Design",
        desc: "Intuitive interfaces and memorable experiences, from prototype to design system.",
        linkLabel: "View UI/UX design",
      },
    ],
    servicesCta: {
      label: "See the full services and pricing",
      href: "/tarifs",
      hint: "From €690",
    },
    local: {
      eyebrow: "Service area",
      heading: "A web studio rooted in Montbéliard.",
      text: "Based in the Montbéliard area, we support businesses, artisans and shops across the Doubs and the Nord Franche-Comté — Audincourt, Sochaux, Valentigney, Héricourt, Belfort — with the creation, redesign and SEO of their website. The rest of France and international work is handled remotely.",
      cta: {
        label: "Website creation in Montbéliard",
        href: "/creation-site-internet-montbeliard",
      },
    },
    aboutEyebrow: "Proven expertise",
    aboutTitle: "Your ideas, shipped as digital products.",
    aboutText:
      "As a passionate developer, I create modern web experiences and custom mobile applications to bring your projects to life.",
    bullets: [
      "Responsive design",
      "Optimized performance",
      "SEO",
      "Follow-up & maintenance",
    ],
    ctaEyebrow: "Ready to build",
    ctaTitle: "Start my project.",
  },
} as const satisfies Record<Locale, object>;
