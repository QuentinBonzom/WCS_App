import type { Localized } from "./types";

export type ServiceShowcase = {
  index: string;
  eyebrow: string;
  title: string;
  sub: string;
  tags: string[];
  linkLabel: string;
  alt?: string;
};

export type ServicesContent = {
  headerEyebrow: string;
  titleLines: string[];
  headerText: string;
  discover: string;
  showcases: ServiceShowcase[];
  accessibilityPreviewRows: { label: string; state: string }[];
  marquee: string[];
  processEyebrow: string;
  processTitle: string;
  process: { n: string; t: string; d: string }[];
  moreEyebrow: string;
  moreTitle: string;
  more: { title: string; badge?: string; desc: string; tags: string[] }[];
  targetedEyebrow: string;
  targetedTitle: string;
  targetedPages: { title: string; desc: string; href: string }[];
  ctaEyebrow: string;
  ctaTitle: string;
};

export const servicesContent: Localized<ServicesContent> = {
  fr: {
    headerEyebrow: "Nos services",
    titleLines: ["Sites web, apps, SEO", "et accessibilité."],
    headerText:
      "Création de sites internet, applications mobiles, design UI/UX et conformité accessibilité pour construire une présence digitale qui convertit et reste solide dans le temps.",
    discover: "Découvrir",
    showcases: [
      {
        index: "01 / Développement Web",
        eyebrow: "Développement Web",
        title: "Des sites qui performent.",
        sub: "Sites web sur mesure, rapides et responsive, conçus pour convertir vos visiteurs en clients.",
        tags: ["Responsive Design", "SEO", "Performance"],
        linkLabel: "Créer un site web",
        alt: "Aperçu d'un site web analytics",
      },
      {
        index: "02 / Applications Mobiles",
        eyebrow: "Applications Mobiles",
        title: "Dans la poche de vos clients.",
        sub: "Applications natives et cross-platform offrant une expérience exceptionnelle, sur iOS comme Android.",
        tags: ["iOS & Android", "Cross-platform", "App Store"],
        linkLabel: "Créer mon application",
        alt: "Aperçu d'une application mobile",
      },
      {
        index: "03 / Design UI/UX",
        eyebrow: "Design UI/UX",
        title: "Des interfaces mémorables.",
        sub: "Conception d'interfaces intuitives et d'expériences qui captivent vos utilisateurs, du prototype au design system.",
        tags: ["Prototyping", "User Research", "Design System"],
        linkLabel: "Concevoir mon produit",
        alt: "Aperçu d'un design system",
      },
      {
        index: "04 / Accessibilité",
        eyebrow: "Repère",
        title: "Votre conformité EAA / RGAA.",
        sub: "Audit, remédiation et documentation réglementaire pour rendre votre site ou application accessible, conforme et défendable.",
        tags: ["Audit RGAA", "Corrections", "Déclaration d'accessibilité"],
        linkLabel: "Découvrir Repère",
      },
    ],
    accessibilityPreviewRows: [
      { label: "Contrastes et lisibilité", state: "À vérifier" },
      { label: "Navigation clavier", state: "À tester" },
      { label: "Formulaires et erreurs", state: "À corriger" },
      { label: "Documents de conformité", state: "À publier" },
    ],
    marquee: [
      "RESPONSIVE",
      "PERFORMANCE",
      "SEO",
      "iOS & ANDROID",
      "DESIGN SYSTEM",
      "ACCESSIBILITÉ",
    ],
    processEyebrow: "Méthode",
    processTitle: "Du brief à la mise en ligne.",
    process: [
      {
        n: "01",
        t: "Découverte",
        d: "On cadre vos objectifs, votre cible et le périmètre. Devis clair sous 24h.",
      },
      {
        n: "02",
        t: "Design",
        d: "Wireframes, maquettes haute-fidélité et design system validés ensemble.",
      },
      {
        n: "03",
        t: "Développement",
        d: "Code performant et responsive, démos régulières à chaque étape.",
      },
      {
        n: "04",
        t: "Lancement",
        d: "Mise en ligne, optimisation SEO et suivi. On reste à vos côtés.",
      },
    ],
    moreEyebrow: "Et aussi",
    moreTitle: "Un accompagnement complet.",
    more: [
      {
        title: "E-commerce",
        badge: "Bientôt",
        desc: "Boutiques en ligne puissantes en cours de développement. Bientôt disponibles.",
        tags: ["Online Store", "Payments", "Inventory"],
      },
      {
        title: "Référencement SEO",
        desc: "Optimisation complète pour améliorer votre visibilité et attirer plus de clients.",
        tags: ["Analytics", "Optimization", "Ranking"],
      },
      {
        title: "Maintenance & Support",
        desc: "Maintenance proactive et support technique 24/7 pour une performance continue.",
        tags: ["Monitoring", "Updates", "Support"],
      },
    ],
    targetedEyebrow: "Pages utiles",
    targetedTitle: "Des offres pensées pour vos recherches.",
    targetedPages: [
      {
        title: "Création site web Montbéliard",
        desc: "Une page dédiée aux entreprises locales qui cherchent un site rapide, crédible et optimisé pour Google.",
        href: "/creation-site-web-montbeliard",
      },
      {
        title: "Agence web Montbéliard",
        desc: "Une vision complète de l'accompagnement WebCode Studio : stratégie, design, développement, SEO et suivi.",
        href: "/agence-web-montbeliard",
      },
      {
        title: "Création site vitrine",
        desc: "Le format idéal pour présenter votre activité, rassurer vos prospects et générer plus de demandes.",
        href: "/creation-site-vitrine",
      },
      {
        title: "Repère · conformité accessibilité",
        desc: "Audit, remédiation et documentation pour rendre votre site conforme à l'European Accessibility Act et au RGAA.",
        href: "/repere-audit",
      },
    ],
    ctaEyebrow: "Passons au concret",
    ctaTitle: "Démarrer mon projet.",
  },
  en: {
    headerEyebrow: "Our services",
    titleLines: ["Websites, apps, SEO", "and accessibility."],
    headerText:
      "Website creation, mobile applications, UI/UX design and accessibility compliance to build a digital presence that converts and stays solid over time.",
    discover: "Discover",
    showcases: [
      {
        index: "01 / Web Development",
        eyebrow: "Web Development",
        title: "Websites built to perform.",
        sub: "Fast, responsive custom websites designed to convert visitors into customers.",
        tags: ["Responsive Design", "SEO", "Performance"],
        linkLabel: "Create a website",
        alt: "Preview of an analytics website",
      },
      {
        index: "02 / Mobile Applications",
        eyebrow: "Mobile Applications",
        title: "In your customers' pockets.",
        sub: "Native and cross-platform applications delivering outstanding experiences on iOS and Android.",
        tags: ["iOS & Android", "Cross-platform", "App Store"],
        linkLabel: "Create my app",
        alt: "Preview of a mobile application",
      },
      {
        index: "03 / UI/UX Design",
        eyebrow: "UI/UX Design",
        title: "Memorable interfaces.",
        sub: "Design of intuitive interfaces and experiences that engage users, from prototype to design system.",
        tags: ["Prototyping", "User Research", "Design System"],
        linkLabel: "Design my product",
        alt: "Preview of a design system",
      },
      {
        index: "04 / Accessibility",
        eyebrow: "Repère",
        title: "Your EAA / RGAA compliance.",
        sub: "Audit, remediation and regulatory documentation to make your website or app accessible, compliant and defensible.",
        tags: ["RGAA audit", "Fixes", "Accessibility statement"],
        linkLabel: "Discover Repère",
      },
    ],
    accessibilityPreviewRows: [
      { label: "Contrast and readability", state: "To check" },
      { label: "Keyboard navigation", state: "To test" },
      { label: "Forms and errors", state: "To fix" },
      { label: "Compliance documents", state: "To publish" },
    ],
    marquee: [
      "RESPONSIVE",
      "PERFORMANCE",
      "SEO",
      "iOS & ANDROID",
      "DESIGN SYSTEM",
      "ACCESSIBILITY",
    ],
    processEyebrow: "Method",
    processTitle: "From brief to launch.",
    process: [
      {
        n: "01",
        t: "Discovery",
        d: "We frame your goals, audience and scope. Clear quote within 24h.",
      },
      {
        n: "02",
        t: "Design",
        d: "Wireframes, high-fidelity mockups and design system validated together.",
      },
      {
        n: "03",
        t: "Development",
        d: "Fast responsive code, with regular demos at every stage.",
      },
      {
        n: "04",
        t: "Launch",
        d: "Go-live, SEO optimization and follow-up. We stay by your side.",
      },
    ],
    moreEyebrow: "Also",
    moreTitle: "Complete support.",
    more: [
      {
        title: "E-commerce",
        badge: "Soon",
        desc: "Powerful online stores are in development. Available soon.",
        tags: ["Online Store", "Payments", "Inventory"],
      },
      {
        title: "SEO",
        desc: "Complete optimization to improve visibility and attract more customers.",
        tags: ["Analytics", "Optimization", "Ranking"],
      },
      {
        title: "Maintenance & Support",
        desc: "Proactive maintenance and technical support for continuous performance.",
        tags: ["Monitoring", "Updates", "Support"],
      },
    ],
    targetedEyebrow: "Useful pages",
    targetedTitle: "Offers shaped around your searches.",
    targetedPages: [
      {
        title: "Website creation in Montbéliard",
        desc: "A page for local companies looking for a fast, credible website optimized for Google.",
        href: "/creation-site-web-montbeliard",
      },
      {
        title: "Web agency in Montbéliard",
        desc: "A complete view of WebCode Studio's support: strategy, design, development, SEO and follow-up.",
        href: "/agence-web-montbeliard",
      },
      {
        title: "Showcase website creation",
        desc: "The ideal format to present your activity, reassure prospects and generate more requests.",
        href: "/creation-site-vitrine",
      },
      {
        title: "Repère · accessibility compliance",
        desc: "Audit, remediation and documentation to make your site compliant with the European Accessibility Act and RGAA.",
        href: "/repere-audit",
      },
    ],
    ctaEyebrow: "Ready to build",
    ctaTitle: "Start my project.",
  },
};
