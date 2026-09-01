import type { Locale } from "@/lib/i18n";

/**
 * Copy for the home page (`app/page.tsx` → `HomePage`).
 * Structural data (service icons/links, counters) stays in the page component.
 */
export const homeContent = {
  fr: {
    heroParallax: {
      titleLines: ["Création de sites internet", "à Montbéliard."],
      highlight: "Montbéliard",
      intro:
        "WebCode Studio est un studio web basé à Montbéliard. Nous créons des sites internet, sites vitrines et applications sur mesure pour les entreprises, artisans et commerçants du Doubs — rapides, crédibles et pensés pour convertir.",
      primaryCta: { label: "Demander un devis", href: "/contact" },
      secondaryCta: { label: "Voir nos réalisations", href: "/projets" },
      visitLabel: "Visiter le site",
    },
    servicesEyebrow: "Nos services",
    servicesTitle: "Pensés pour convertir.",
    servicesText:
      "De la création de site vitrine au développement sur mesure : quatre expertises pour une présence digitale qui vous rend visible sur Google et transforme vos visiteurs en clients.",
    services: [
      {
        title: "Sites internet & vitrines",
        desc: "Sites sur mesure, sites vitrines et refontes : rapides, responsive et optimisés pour le référencement local.",
        linkLabel: "Création site internet Montbéliard",
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
    local: {
      eyebrow: "Zone d'intervention",
      heading: "Un studio web ancré à Montbéliard.",
      text: "Basés dans le Pays de Montbéliard, nous accompagnons les entreprises, artisans, commerçants et indépendants du Doubs et du Nord Franche-Comté — Audincourt, Sochaux, Valentigney, Héricourt, Belfort — dans la création, la refonte et le référencement de leur site internet. Le reste de la France et l'international sont pris en charge à distance.",
      cta: {
        label: "Création de site internet à Montbéliard",
        href: "/creation-site-internet-montbeliard",
      },
    },
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
      titleLines: ["Website creation", "in Montbéliard."],
      highlight: "Montbéliard",
      intro:
        "WebCode Studio is a web studio based in Montbéliard. We build custom websites, showcase sites and apps for businesses, artisans and shops across the Doubs — fast, credible and built to convert.",
      primaryCta: { label: "Request a quote", href: "/contact" },
      secondaryCta: { label: "See our work", href: "/projets" },
      visitLabel: "Visit website",
    },
    servicesEyebrow: "Our services",
    servicesTitle: "Built to convert.",
    servicesText:
      "From showcase sites to custom development: four skills for a digital presence that makes you visible on Google and turns visitors into customers.",
    services: [
      {
        title: "Websites & showcase sites",
        desc: "Custom sites, showcase sites and redesigns: fast, responsive and optimized for local search.",
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
    local: {
      eyebrow: "Service area",
      heading: "A web studio rooted in Montbéliard.",
      text: "Based in the Montbéliard area, we support businesses, artisans and shops across the Doubs and the Nord Franche-Comté — Audincourt, Sochaux, Valentigney, Héricourt, Belfort — with the creation, redesign and SEO of their website. The rest of France and international work is handled remotely.",
      cta: {
        label: "Website creation in Montbéliard",
        href: "/creation-site-internet-montbeliard",
      },
    },
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
