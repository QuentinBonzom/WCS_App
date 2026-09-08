import type { FaqItem } from "@/lib/seo";
import type { Localized } from "./types";

export type PricingTier = {
  name: string;
  /** displayed starting price, e.g. "690 €" */
  price: string;
  /** short label above the price, e.g. "à partir de" */
  priceLabel: string;
  tagline: string;
  bestFor: string;
  features: string[];
  ctaLabel: string;
  /** visually promote this tier */
  highlight?: boolean;
};

export type PricingFactor = { title: string; text: string };

export type PricingContent = {
  serviceName: string;
  eyebrow: string;
  titleLines: string[];
  intro: string;
  tiers: PricingTier[];
  /** small print under the pricing grid */
  priceNote: string;
  includedEyebrow: string;
  includedHeading: string;
  included: string[];
  factorsEyebrow: string;
  factorsHeading: string;
  factorsIntro: string;
  factors: PricingFactor[];
  faqEyebrow: string;
  faqHeading: string;
  faq: FaqItem[];
  finalCta: { eyebrow: string; heading: string; text: string; ctaLabel: string };
};

// NOTE (Quentin): adapte `priceNote` selon ton statut TVA
// (micro-entreprise → "TVA non applicable, art. 293 B du CGI" ; sinon "prix HT").
export const tarifsContent: Localized<PricingContent> = {
  fr: {
    serviceName: "Tarifs de création de site internet et d'outils métier",
    eyebrow: "Tarifs",
    titleLines: ["Des prix clairs,", "un devis sans surprise."],
    intro:
      "Chaque projet est différent, mais vous avez le droit de savoir à quoi vous attendre avant de nous contacter. Voici nos tarifs de départ et ce qui fait varier le prix final.",
    tiers: [
      {
        name: "Site vitrine",
        price: "690 €",
        priceLabel: "à partir de",
        tagline: "L'essentiel pour exister en ligne et être trouvé.",
        bestFor:
          "Artisans, indépendants et petites structures qui veulent une présence professionnelle rapidement.",
        features: [
          "Jusqu'à 3 pages (accueil, présentation, contact)",
          "Formulaire de contact",
          "Design responsive, soigné sur mobile et ordinateur",
          "Référencement naturel de base : structure, balises, vitesse",
          "Mise en ligne et prise en main",
        ],
        ctaLabel: "Demander un devis",
      },
      {
        name: "Site sur mesure / Pro",
        price: "990 €",
        priceLabel: "à partir de",
        tagline: "Un site pensé pour votre activité et votre visibilité locale.",
        bestFor:
          "PME et commerces qui veulent se démarquer et attirer des clients près de chez eux.",
        features: [
          "Design personnalisé à votre image",
          "Nombre de pages adapté à votre offre",
          "SEO local poussé : pages ciblées, données structurées, zone géographique",
          "Accompagnement sur les contenus",
          "Tout ce qui est inclus dans la formule Vitrine",
        ],
        ctaLabel: "Demander un devis",
        highlight: true,
      },
      {
        name: "Application & outil métier",
        price: "1 500 €",
        priceLabel: "sur devis · à partir de",
        tagline:
          "Prise de rendez-vous, suivi de dossiers, devis-factures, tableaux de bord.",
        bestFor:
          "Entreprises qui veulent remplacer les fichiers éparpillés et automatiser leurs process.",
        features: [
          "Cahier des charges construit avec vous",
          "Première version utile livrée par étapes",
          "Interface simple, utilisable par toute l'équipe",
          "Hébergement conforme RGPD, vos données restent les vôtres",
          "Suivi et évolutions dans la durée",
        ],
        ctaLabel: "Parler de mon projet",
      },
    ],
    priceNote:
      "Tarifs indicatifs 2026, en euros. Le périmètre exact et le prix final sont fixés dans le devis — gratuit, sans engagement, réponse sous 24 h.",
    includedEyebrow: "Toujours inclus",
    includedHeading: "Ce que vous obtenez quel que soit le budget.",
    included: [
      "Un site rapide et optimisé pour le mobile",
      "Une base SEO propre : titres, balises, sitemap, données structurées",
      "Un site que vous pouvez faire évoluer sans tout refaire",
      "Un interlocuteur unique, pas de sous-traitance",
      "Un devis clair et détaillé avant de vous engager",
    ],
    factorsEyebrow: "Transparence",
    factorsHeading: "Ce qui fait varier le prix.",
    factorsIntro:
      "Le tarif d'un projet dépend de quelques facteurs concrets, bien plus que du nombre de pages.",
    factors: [
      {
        title: "Le type de projet",
        text: "Un site vitrine est plus accessible qu'un site sur mesure, une boutique en ligne ou une application métier.",
      },
      {
        title: "Le design",
        text: "Une trame adaptée coûte moins cher qu'un design entièrement personnalisé à votre image.",
      },
      {
        title: "Les contenus",
        text: "Textes, photos et logos prêts à l'emploi ou à produire changent fortement la charge de travail.",
      },
      {
        title: "Les fonctionnalités",
        text: "Réservation, espace client, paiement en ligne, multilingue, connexions à vos autres outils.",
      },
      {
        title: "Le SEO et la performance",
        text: "Un site pensé pour être trouvé sur Google et rester rapide demande plus de soin qu'une simple mise en ligne.",
      },
    ],
    faqEyebrow: "Questions fréquentes",
    faqHeading: "Ce que les clients demandent avant de se lancer.",
    faq: [
      {
        question: "Les prix affichés sont-ils fermes ?",
        answer:
          "Ce sont des tarifs de départ. Le prix final dépend du périmètre — nombre de pages, fonctionnalités, contenus à produire — et figure noir sur blanc dans le devis, gratuit et sans engagement.",
      },
      {
        question: "Le nom de domaine et l'hébergement sont-ils compris ?",
        answer:
          "Ils sont abordés dans le devis : on vous conseille, on met tout en place, et le coût annuel de ces services — souvent quelques dizaines d'euros — est indiqué clairement à part.",
      },
      {
        question: "En combien de temps mon site est-il en ligne ?",
        answer:
          "Comptez généralement quelques semaines pour un site vitrine, davantage pour un site sur mesure ou une application. Le délai est confirmé dans le devis, avant de commencer.",
      },
      {
        question: "Comment se passe le paiement ?",
        answer:
          "Un acompte à la commande, le solde à la livraison. Pour les projets plus importants, un échéancier peut être défini ensemble.",
      },
      {
        question: "La maintenance est-elle incluse ?",
        answer:
          "La mise en ligne et la prise en main sont incluses. Pour la suite — mises à jour, sauvegardes, évolutions, support — un suivi mensuel ou à la demande est proposé et chiffré séparément.",
      },
      {
        question: "Et si mon besoin évolue plus tard ?",
        answer:
          "Les sites sont construits sur une base évolutive. On peut ajouter des pages, des fonctionnalités ou une boutique par la suite sans repartir de zéro.",
      },
    ],
    finalCta: {
      eyebrow: "Passons au concret",
      heading: "Parlons de votre projet.",
      text: "Décrivez-nous votre besoin : vous recevez un devis clair et personnalisé sous 24 h, sans engagement.",
      ctaLabel: "Demander mon devis",
    },
  },
  en: {
    serviceName: "Website and business-tool pricing",
    eyebrow: "Pricing",
    titleLines: ["Clear prices,", "a quote with no surprises."],
    intro:
      "Every project is different, but you deserve to know what to expect before contacting us. Here are our starting prices and what drives the final cost.",
    tiers: [
      {
        name: "Showcase website",
        price: "€690",
        priceLabel: "from",
        tagline: "The essentials to exist online and be found.",
        bestFor:
          "Artisans, independents and small teams that want a professional presence quickly.",
        features: [
          "Up to 3 pages (home, about, contact)",
          "Contact form",
          "Responsive design, polished on mobile and desktop",
          "Basic SEO: structure, metadata, speed",
          "Launch and handover",
        ],
        ctaLabel: "Request a quote",
      },
      {
        name: "Custom / Pro website",
        price: "€990",
        priceLabel: "from",
        tagline: "A site built around your business and local visibility.",
        bestFor:
          "SMEs and shops that want to stand out and attract nearby customers.",
        features: [
          "Custom design in your brand identity",
          "Page count tailored to your offer",
          "Advanced local SEO: targeted pages, structured data, service area",
          "Support with your content",
          "Everything included in the Showcase plan",
        ],
        ctaLabel: "Request a quote",
        highlight: true,
      },
      {
        name: "Business app & tool",
        price: "€1,500",
        priceLabel: "on quote · from",
        tagline:
          "Appointment booking, case tracking, quotes and invoicing, dashboards.",
        bestFor:
          "Businesses that want to replace scattered files and automate their processes.",
        features: [
          "Scope defined with you",
          "A useful first version delivered in stages",
          "A simple interface the whole team can use",
          "GDPR-compliant hosting, your data stays yours",
          "Ongoing support and improvements",
        ],
        ctaLabel: "Discuss my project",
      },
    ],
    priceNote:
      "Indicative 2026 prices, in euros. The exact scope and final price are set in the quote — free, no commitment, reply within 24h.",
    includedEyebrow: "Always included",
    includedHeading: "What you get whatever the budget.",
    included: [
      "A fast, mobile-optimized website",
      "A clean SEO base: titles, metadata, sitemap, structured data",
      "A site you can grow without rebuilding it",
      "A single point of contact, no subcontracting",
      "A clear, detailed quote before you commit",
    ],
    factorsEyebrow: "Transparency",
    factorsHeading: "What drives the price.",
    factorsIntro:
      "A project's price depends on a few concrete factors, much more than on the number of pages.",
    factors: [
      {
        title: "The type of project",
        text: "A showcase website is more accessible than a custom site, an online store or a business application.",
      },
      {
        title: "The design",
        text: "An adapted layout costs less than a fully custom design built for your brand.",
      },
      {
        title: "The content",
        text: "Ready-to-use text, photos and logos versus content to produce changes the workload significantly.",
      },
      {
        title: "The features",
        text: "Booking, client portal, online payment, multilingual, connections to your other tools.",
      },
      {
        title: "SEO and performance",
        text: "A site built to be found on Google and stay fast takes more care than a simple launch.",
      },
    ],
    faqEyebrow: "Frequent questions",
    faqHeading: "What clients ask before getting started.",
    faq: [
      {
        question: "Are the displayed prices fixed?",
        answer:
          "They are starting prices. The final price depends on the scope — number of pages, features, content to produce — and is stated in writing in the quote, free and with no commitment.",
      },
      {
        question: "Are the domain name and hosting included?",
        answer:
          "They are covered in the quote: we advise you, set everything up, and the annual cost of these services — often a few dozen euros — is listed clearly and separately.",
      },
      {
        question: "How long until my site is online?",
        answer:
          "Usually a few weeks for a showcase website, longer for a custom site or an application. The timeline is confirmed in the quote, before we start.",
      },
      {
        question: "How does payment work?",
        answer:
          "A deposit on order, the balance on delivery. For larger projects, a payment schedule can be agreed together.",
      },
      {
        question: "Is maintenance included?",
        answer:
          "Launch and handover are included. After that — updates, backups, improvements, support — a monthly or on-demand plan is offered and priced separately.",
      },
      {
        question: "What if my needs change later?",
        answer:
          "Sites are built on an evolutive base. You can add pages, features or a store later without starting over.",
      },
    ],
    finalCta: {
      eyebrow: "Let's get concrete",
      heading: "Let's talk about your project.",
      text: "Tell us what you need: you get a clear, personalized quote within 24h, with no commitment.",
      ctaLabel: "Request my quote",
    },
  },
};
