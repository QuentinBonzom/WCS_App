import type { FaqItem } from "@/lib/seo";
import type { Localized } from "./types";

export type RepereReportCriterion = { label: string; ok: boolean };
export type RepereStat = { num: string; lbl: string };
export type RepereStep = { step: string; title: string; items: string[] };
export type RepereTier = {
  who: string;
  price: string;
  note?: string;
  features: string[];
  cta: string;
  featured?: boolean;
};

export type RepereAuditContent = {
  /** schema.org Service name / serviceType */
  serviceName: string;
  serviceType: string;
  hero: {
    eyebrow: string;
    heading: string;
    intro: string;
    ctaPrimary: string;
    ctaSecondary: string;
    nonCompliance: { lead: string; emphasis: string; tail: string };
    report: {
      ariaLabel: string;
      source: string;
      note: string;
      criteria: RepereReportCriterion[];
    };
  };
  why: { eyebrow: string; heading: string; intro: string; stats: RepereStat[] };
  method: {
    eyebrow: string;
    heading: string;
    intro: string;
    steps: RepereStep[];
  };
  marquee: string[];
  pricing: {
    eyebrow: string;
    heading: string;
    intro: string;
    mostRequested: string;
    tiers: RepereTier[];
  };
  faqEyebrow: string;
  faqHeading: string;
  faq: FaqItem[];
  finalCta: {
    eyebrow: string;
    heading: string;
    text: string;
    cta: string;
  };
};

export const repereAuditContent: Localized<RepereAuditContent> = {
  fr: {
    serviceName: "Repère — mise en conformité accessibilité numérique",
    serviceType: "Accessibility compliance audit",
    hero: {
      eyebrow: "European Accessibility Act · en vigueur",
      heading: "Votre site est-il hors conformité sans le savoir ?",
      intro:
        "Depuis le 28 juin 2025, de nouvelles exigences s'appliquent à plusieurs services numériques privés. Repère audite, corrige et documente votre site ou votre application. Vous avancez vers une conformité claire, preuves à l'appui.",
      ctaPrimary: "Lancer mon audit",
      ctaSecondary: "Voir la méthode",
      nonCompliance: {
        lead: "Non-conformité :",
        emphasis: "contrôles, sanctions et mesures correctives possibles",
        tail: "selon le régime applicable.",
      },
      report: {
        ariaLabel: "Exemple de rapport de conformité",
        source: "exemple de rapport · votre-boutique.fr",
        note: "Rapport priorisé par impact et par risque — chaque manquement est relié à son exposition réglementaire.",
        criteria: [
          { label: "Images sans alternative textuelle", ok: false },
          { label: "Contrastes insuffisants au paiement", ok: false },
          { label: "Tunnel d'achat non navigable au clavier", ok: false },
          { label: "Structure des titres correcte", ok: true },
          { label: "Déclaration d'accessibilité absente", ok: false },
        ],
      },
    },
    why: {
      eyebrow: "Pourquoi maintenant",
      heading: "La règle a changé. Le périmètre s'est élargi au privé.",
      intro:
        "Aux obligations déjà existantes pour le secteur public et certaines grandes structures s'ajoutent désormais les produits et services couverts par l'European Accessibility Act.",
      stats: [
        {
          num: "28 juin 2025",
          lbl: "entrée en application des nouvelles exigences d'accessibilité pour les produits et services couverts",
        },
        {
          num: "106",
          lbl: "critères de contrôle RGAA utilisés pour auditer les interfaces web",
        },
        {
          num: "Suivi",
          lbl: "informations de conformité, procédures et mesures correctives à organiser",
        },
      ],
    },
    method: {
      eyebrow: "Notre méthode",
      heading: "Trois étapes, zéro jargon, une conformité prouvée.",
      intro:
        "On combine l'audit automatisé pour la vitesse et la revue manuelle pour la fiabilité, puis on corrige et on documente.",
      steps: [
        {
          step: "Étape 1 · Audit",
          title: "On mesure",
          items: [
            "Analyse des 106 critères de contrôle RGAA",
            "Échantillon représentatif de pages",
            "Rapport priorisé par impact et par risque",
          ],
        },
        {
          step: "Étape 2 · Remédiation",
          title: "On corrige",
          items: [
            "Corrections codées par nos développeurs",
            "Contrastes, clavier, lecteurs d'écran, formulaires",
            "Aucune dépendance à une sur-couche douteuse",
          ],
        },
        {
          step: "Étape 3 · Conformité",
          title: "On documente",
          items: [
            "Déclaration d'accessibilité publiée",
            "Schéma pluriannuel + plan d'action annuel",
            "Canal de signalement opérationnel",
          ],
        },
      ],
    },
    marquee: [
      "AUDIT RGAA",
      "REMÉDIATION",
      "CONTRASTES",
      "NAVIGATION CLAVIER",
      "LECTEURS D'ÉCRAN",
      "DÉCLARATION D'ACCESSIBILITÉ",
    ],
    pricing: {
      eyebrow: "Tarifs",
      heading: "Une formule pour chaque taille d'organisation.",
      intro:
        "Audit au prix fixe, remédiation au devis, puis un abonnement annuel qui maintient votre conformité dans le temps.",
      mostRequested: "Le plus demandé",
      tiers: [
        {
          who: "TPE / petit e-commerce",
          price: "1 490 €",
          note: "à partir de · audit",
          features: [
            "Audit jusqu'à 10 pages clés",
            "Rapport priorisé par risque",
            "Modèles des documents légaux",
          ],
          cta: "Demander l'audit",
        },
        {
          who: "PME · site + application",
          price: "Sur devis",
          features: [
            "Audit complet RGAA",
            "Remédiation codée par nos soins",
            "Documents réglementaires préparés",
            "Déclaration de conformité publiée",
          ],
          cta: "Demander un devis",
          featured: true,
        },
        {
          who: "ETI / grand compte",
          price: "290 €",
          note: "/ mois",
          features: [
            "Maintien de conformité continu",
            "Mise à jour annuelle des documents",
            "Référent accessibilité dédié",
          ],
          cta: "Choisir le maintien",
        },
      ],
    },
    faqEyebrow: "FAQ",
    faqHeading: "Questions fréquentes.",
    faq: [
      {
        question: "Qui est concerné par l'obligation d'accessibilité numérique ?",
        answer:
          "Depuis l'entrée en application de l'European Accessibility Act le 28 juin 2025, certains produits et services B2C doivent respecter de nouvelles exigences d'accessibilité : commerce électronique, services bancaires, transport, télécommunications, livres numériques et médias audiovisuels notamment. Des exemptions existent, par exemple pour les prestataires de services de moins de 10 salariés avec moins de 2 millions d'euros de chiffre d'affaires annuel.",
      },
      {
        question: "Quel est le risque en cas de non-conformité ?",
        answer:
          "Pour les produits et services couverts par la directive Accessibilité, la DGCCRF indique que les infractions relèvent de contraventions de 5e classe, avec des amendes de 7 500 € cumulatives selon le nombre d'infractions constatées. D'autres régimes de sanction peuvent s'ajouter selon l'organisme, le service et le fondement juridique applicable.",
      },
      {
        question: "Que comprend exactement l'audit RGAA ?",
        answer:
          "Nous évaluons votre site au regard des 106 critères de contrôle RGAA sur un échantillon représentatif de pages, en combinant analyse automatisée pour la vitesse et revue manuelle pour la fiabilité. Vous recevez un rapport priorisé par impact et par risque.",
      },
      {
        question: "Corrigez-vous le site ou seulement l'audit ?",
        answer:
          "Les deux. Après l'audit, nos développeurs codent les corrections (contrastes, navigation clavier, compatibilité lecteurs d'écran, formulaires) sans recourir à une sur-couche d'accessibilité, puis nous rédigeons et publions les documents réglementaires.",
      },
      {
        question: "Quels documents réglementaires devez-vous publier ?",
        answer:
          "La conformité ne se limite pas au code. Selon votre régime applicable, on cadre notamment la déclaration d'accessibilité, le schéma pluriannuel, le plan d'action annuel, les mentions utiles et le canal de signalement. Nous préparons ces éléments avec vous au lieu de livrer un simple rapport technique.",
      },
    ],
    finalCta: {
      eyebrow: "Premier pas",
      heading: "Savoir où vous en êtes.",
      text: "On vous renvoie un premier état des lieux de votre exposition réglementaire. Sans engagement, réponse sous 48h.",
      cta: "Demander mon état des lieux",
    },
  },
  en: {
    serviceName: "Repère - digital accessibility compliance",
    serviceType: "Accessibility compliance audit",
    hero: {
      eyebrow: "European Accessibility Act · in force",
      heading: "Is your website non-compliant without knowing it?",
      intro:
        "Since June 28, 2025, new requirements apply to several private digital services. Repère audits, fixes and documents your website or application so you move toward clear, evidence-backed compliance.",
      ctaPrimary: "Launch my audit",
      ctaSecondary: "View the method",
      nonCompliance: {
        lead: "Non-compliance:",
        emphasis: "checks, penalties and corrective measures may apply",
        tail: "depending on the applicable regime.",
      },
      report: {
        ariaLabel: "Example compliance report",
        source: "sample report · your-store.com",
        note: "Report prioritized by impact and risk - every issue is linked to its regulatory exposure.",
        criteria: [
          { label: "Images without text alternatives", ok: false },
          { label: "Insufficient contrast at checkout", ok: false },
          { label: "Checkout flow not keyboard navigable", ok: false },
          { label: "Correct heading structure", ok: true },
          { label: "Missing accessibility statement", ok: false },
        ],
      },
    },
    why: {
      eyebrow: "Why now",
      heading: "The rules changed. The scope expanded to private services.",
      intro:
        "Alongside existing public-sector obligations, certain products and services covered by the European Accessibility Act now have new accessibility requirements.",
      stats: [
        {
          num: "June 28, 2025",
          lbl: "start date for the new accessibility requirements covering certain products and services",
        },
        {
          num: "106",
          lbl: "RGAA control criteria used to audit web interfaces",
        },
        {
          num: "Follow-up",
          lbl: "compliance information, procedures and corrective measures to organize",
        },
      ],
    },
    method: {
      eyebrow: "Our method",
      heading: "Three steps, no jargon, proven compliance.",
      intro:
        "We combine automated auditing for speed with manual review for reliability, then we fix and document.",
      steps: [
        {
          step: "Step 1 · Audit",
          title: "We measure",
          items: [
            "Analysis of the 106 RGAA control criteria",
            "Representative sample of pages",
            "Report prioritized by impact and risk",
          ],
        },
        {
          step: "Step 2 · Remediation",
          title: "We fix",
          items: [
            "Code fixes by our developers",
            "Contrast, keyboard, screen readers and forms",
            "No dependency on questionable accessibility overlays",
          ],
        },
        {
          step: "Step 3 · Compliance",
          title: "We document",
          items: [
            "Published accessibility statement",
            "Multi-year plan and annual action plan",
            "Operational reporting channel",
          ],
        },
      ],
    },
    marquee: [
      "RGAA AUDIT",
      "REMEDIATION",
      "CONTRASTS",
      "KEYBOARD NAVIGATION",
      "SCREEN READERS",
      "ACCESSIBILITY STATEMENT",
    ],
    pricing: {
      eyebrow: "Pricing",
      heading: "A plan for every organization size.",
      intro:
        "Fixed-price audit, remediation by quote, then annual maintenance to keep compliance alive over time.",
      mostRequested: "Most requested",
      tiers: [
        {
          who: "Small business / small e-commerce",
          price: "€1,490",
          note: "from · audit",
          features: [
            "Audit up to 10 key pages",
            "Risk-prioritized report",
            "Templates for legal documents",
          ],
          cta: "Request the audit",
        },
        {
          who: "SME · site + app",
          price: "Custom quote",
          features: [
            "Complete RGAA audit",
            "Code remediation by our team",
            "Regulatory documents prepared",
            "Compliance statement published",
          ],
          cta: "Request a quote",
          featured: true,
        },
        {
          who: "Mid-market / enterprise",
          price: "€290",
          note: "/ month",
          features: [
            "Ongoing compliance maintenance",
            "Annual document updates",
            "Dedicated accessibility contact",
          ],
          cta: "Choose maintenance",
        },
      ],
    },
    faqEyebrow: "FAQ",
    faqHeading: "Frequently asked questions.",
    faq: [
      {
        question: "Who is affected by digital accessibility obligations?",
        answer:
          "Since the European Accessibility Act started applying on June 28, 2025, certain B2C products and services must comply with new accessibility requirements, including e-commerce, banking, transport, telecommunications, e-books and audiovisual media services. Exemptions can apply, for example for service providers with fewer than 10 employees and less than 2 million euros in annual turnover.",
      },
      {
        question: "What is the risk in case of non-compliance?",
        answer:
          "For products and services covered by accessibility rules, authorities can impose penalties and require corrective measures depending on the applicable regime. The exact exposure depends on the organization, service and legal basis.",
      },
      {
        question: "What exactly does the RGAA audit include?",
        answer:
          "We evaluate your website against the 106 RGAA control criteria on a representative page sample, combining automated checks for speed and manual review for reliability. You receive a report prioritized by impact and risk.",
      },
      {
        question: "Do you fix the website or only audit it?",
        answer:
          "Both. After the audit, our developers code the fixes, covering contrast, keyboard navigation, screen reader compatibility and forms, without relying on an accessibility overlay. We then prepare and publish the regulatory documents.",
      },
      {
        question: "Which regulatory documents should be published?",
        answer:
          "Compliance is not only code. Depending on your applicable regime, we frame the accessibility statement, multi-year plan, annual action plan, useful mentions and reporting channel. We prepare these elements with you instead of delivering only a technical report.",
      },
    ],
    finalCta: {
      eyebrow: "First step",
      heading: "Know where you stand.",
      text: "We send you an initial view of your regulatory exposure. No commitment, reply within 48h.",
      cta: "Request my first review",
    },
  },
};
