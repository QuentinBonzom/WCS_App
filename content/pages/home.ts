import type { Locale } from "@/lib/i18n";

/**
 * Copy for the home page (`app/page.tsx` → `HomePage`).
 * Structural data (service icons/links, counters) stays in the page component.
 */
export const homeContent = {
  fr: {
    heroParallax: {
      titleLines: ["Sites web et apps", "qui convertissent."],
      highlight: "convertissent",
      intro:
        "Studio web à Montbéliard, nous concevons des sites rapides, des applications mobiles et des interfaces sur mesure pour transformer vos visiteurs en clients.",
      primaryCta: { label: "Démarrer mon projet", href: "/contact" },
      secondaryCta: { label: "Découvrir nos services", href: "/services" },
      visitLabel: "Visiter le site",
    },
    servicesEyebrow: "Nos services",
    servicesTitle: "Pensés pour convertir.",
    servicesText:
      "Quatre expertises au cœur de votre projet digital : création de site internet, application mobile, design UI/UX et conformité accessibilité.",
    services: [
      {
        title: "Développement Web",
        desc: "Sites sur mesure, rapides et responsive, conçus pour convertir vos visiteurs en clients.",
        linkLabel: "Création site web Montbéliard",
      },
      {
        title: "Applications Mobiles",
        desc: "Apps natives et cross-platform - iOS & Android - pour une expérience exceptionnelle.",
        linkLabel: "Voir les apps mobiles",
      },
      {
        title: "Design UI/UX",
        desc: "Interfaces intuitives et expériences mémorables, du prototype au design system.",
        linkLabel: "Voir le design UI/UX",
      },
      {
        title: "Accessibilité RGAA",
        desc: "Audit, remédiation et documents réglementaires pour sécuriser votre conformité EAA.",
        linkLabel: "Découvrir Repère",
      },
    ],
    repereEyebrow: "Repère · nouveau service",
    repereTitle: "Accessibilité, conformité, preuves.",
    repereText:
      "L'accessibilité n'est plus un bonus : on audite votre site, on corrige le code, puis on prépare les documents RGAA attendus pour publier une conformité claire.",
    reperePrimary: "Découvrir Repère",
    repereSecondary: "Parler conformité",
    reperePreview: "aperçu Repère",
    repereRows: [
      { label: "Audit RGAA", state: "106 critères" },
      { label: "Remédiation", state: "Corrections codées" },
      { label: "Documentation", state: "Prête à publier" },
    ],
    repereNote:
      "Un service complémentaire aux créations et refontes : utile pour les e-commerces, plateformes de réservation, applications et services numériques B2C.",
    aboutEyebrow: "Expertise confirmée",
    aboutTitle: "Vos idées, en réalité digitale.",
    aboutText:
      "Développeur passionné, je crée des expériences web modernes et des applications mobiles sur mesure pour donner vie à vos projets.",
    bullets: [
      "Design responsive",
      "Performance optimisée",
      "Référencement SEO",
      "Support 24/7",
    ],
    ctaEyebrow: "Passons au concret",
    ctaTitle: "Démarrer mon projet.",
  },
  en: {
    heroParallax: {
      titleLines: ["Websites and apps", "that convert."],
      highlight: "convert",
      intro:
        "Based in Montbéliard, we design fast websites, mobile applications and custom interfaces that turn visitors into customers.",
      primaryCta: { label: "Start my project", href: "/contact" },
      secondaryCta: { label: "Discover our services", href: "/services" },
      visitLabel: "Visit website",
    },
    servicesEyebrow: "Our services",
    servicesTitle: "Built to convert.",
    servicesText:
      "Four core skills for your digital project: website creation, mobile applications, UI/UX design and accessibility compliance.",
    services: [
      {
        title: "Web Development",
        desc: "Fast, responsive custom websites designed to convert visitors into customers.",
        linkLabel: "Website creation in Montbéliard",
      },
      {
        title: "Mobile Applications",
        desc: "Native and cross-platform apps - iOS & Android - for outstanding user experiences.",
        linkLabel: "View mobile apps",
      },
      {
        title: "UI/UX Design",
        desc: "Intuitive interfaces and memorable experiences, from prototype to design system.",
        linkLabel: "View UI/UX design",
      },
      {
        title: "RGAA Accessibility",
        desc: "Audits, remediation and regulatory documents to secure EAA compliance.",
        linkLabel: "Discover Repère",
      },
    ],
    repereEyebrow: "Repère · new service",
    repereTitle: "Accessibility, compliance, proof.",
    repereText:
      "Accessibility is no longer a bonus: we audit your site, fix the code, then prepare the RGAA documents needed to publish clear compliance.",
    reperePrimary: "Discover Repère",
    repereSecondary: "Talk compliance",
    reperePreview: "Repère preview",
    repereRows: [
      { label: "RGAA audit", state: "106 criteria" },
      { label: "Remediation", state: "Coded fixes" },
      { label: "Documentation", state: "Ready to publish" },
    ],
    repereNote:
      "A complementary service for creations and redesigns: useful for e-commerce, booking platforms, applications and B2C digital services.",
    aboutEyebrow: "Proven expertise",
    aboutTitle: "Your ideas, shipped as digital products.",
    aboutText:
      "As a passionate developer, I create modern web experiences and custom mobile applications to bring your projects to life.",
    bullets: [
      "Responsive design",
      "Optimized performance",
      "SEO",
      "24/7 support",
    ],
    ctaEyebrow: "Ready to build",
    ctaTitle: "Start my project.",
  },
} as const satisfies Record<Locale, object>;
