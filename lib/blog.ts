// Blog content source. Articles are authored as structured blocks so we can
// render semantic HTML (h2 / p / ul) and derive SEO metadata + JSON-LD.

export type ContentBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] };

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  keywords: string[];
  category: string;
  datePublished: string; // ISO date
  dateModified?: string; // ISO date
  readingMinutes: number;
  content: ContentBlock[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "creation-site-web-montbeliard-guide-2026",
    title:
      "Création de site web à Montbéliard : le guide complet pour 2026",
    description:
      "Tout ce qu'une entreprise de Montbéliard doit savoir pour créer un site web efficace en 2026 : objectifs, budget, SEO local, performance et erreurs à éviter.",
    excerpt:
      "Objectifs, budget, SEO local, performance, erreurs à éviter : le guide pratique pour réussir la création de votre site web à Montbéliard et dans le Pays de Montbéliard.",
    keywords: [
      "création site web Montbéliard",
      "site internet Montbéliard",
      "SEO local Montbéliard",
      "prix site web",
      "agence web Montbéliard",
    ],
    category: "Guide",
    datePublished: "2026-06-16",
    readingMinutes: 7,
    content: [
      {
        type: "p",
        text: "À Montbéliard comme partout, un site web n'est plus une option : c'est souvent le premier contact entre votre entreprise et un client potentiel. Avant même de vous appeler, un prospect vous cherche sur Google, regarde votre site, juge votre crédibilité en quelques secondes. Ce guide détaille, étape par étape, comment réussir la création d'un site web local et performant en 2026.",
      },
      {
        type: "h2",
        text: "1. Définir l'objectif avant le design",
      },
      {
        type: "p",
        text: "Un site web n'a de valeur que s'il sert un objectif clair. Avant de parler couleurs ou animations, posez-vous la vraie question : que doit faire le visiteur ? La plupart des sites d'entreprises locales poursuivent l'un de ces buts :",
      },
      {
        type: "ul",
        items: [
          "Générer des demandes de devis (le cas le plus fréquent pour les artisans et PME).",
          "Présenter une activité et rassurer avant un rendez-vous ou un appel.",
          "Vendre en ligne ou prendre des réservations.",
          "Recruter et valoriser une marque employeur.",
        ],
      },
      {
        type: "p",
        text: "Tout le reste — structure des pages, contenus, appels à l'action — découle de cet objectif. Un site « joli » qui ne convertit pas est un site raté.",
      },
      {
        type: "h2",
        text: "2. Le SEO local, votre meilleur allié à Montbéliard",
      },
      {
        type: "p",
        text: "Le référencement local permet d'apparaître quand un habitant du Pays de Montbéliard tape « plombier Montbéliard », « coiffeur Audincourt » ou « création site web Montbéliard ». Trois leviers comptent vraiment :",
      },
      {
        type: "ul",
        items: [
          "Une fiche Google Business Profile complète et à jour : c'est le facteur n°1 du référencement local.",
          "Des pages dédiées à vos services et à votre zone géographique, avec un contenu précis et utile.",
          "Des avis clients réels, réguliers et authentiques, qui renforcent la confiance et le classement.",
        ],
      },
      {
        type: "p",
        text: "Un site techniquement propre (titres structurés, données enrichies, sitemap, balises soignées) facilite l'indexation par Google, mais ne remplace pas un bon contenu et une présence locale active.",
      },
      {
        type: "h2",
        text: "3. La performance n'est pas un luxe",
      },
      {
        type: "p",
        text: "Depuis plusieurs années, Google intègre la vitesse et la stabilité d'affichage (les Core Web Vitals) dans son classement. Un site lent perd des visiteurs avant même d'avoir convaincu : plus de la moitié des internautes quittent une page qui met plus de trois secondes à charger. Concrètement, un site moderne doit :",
      },
      {
        type: "ul",
        items: [
          "Optimiser automatiquement les images (formats AVIF/WebP, chargement progressif).",
          "Limiter le code inutile et charger en priorité ce qui est visible.",
          "Rester fluide et lisible sur mobile, où se fait désormais la majorité des visites.",
        ],
      },
      {
        type: "h2",
        text: "4. Combien coûte un site web en 2026 ?",
      },
      {
        type: "p",
        text: "Le prix dépend surtout de l'ambition du projet. Un site vitrine professionnel bien conçu représente un investissement raisonnable au regard des demandes qu'il génère sur la durée. Plutôt que de chercher le moins cher, comparez ce qui est inclus : design sur mesure, contenus, SEO, performance, responsive, maintenance et accompagnement. Un site bon marché mais invisible sur Google coûte finalement bien plus cher qu'un site pensé pour convertir.",
      },
      {
        type: "h2",
        text: "5. Les erreurs à éviter",
      },
      {
        type: "ul",
        items: [
          "Copier un concurrent sans réfléchir à son propre positionnement.",
          "Négliger les contenus : un beau design avec des textes vagues ne convertit pas.",
          "Oublier le mobile, alors qu'il concentre la majorité du trafic.",
          "Lancer le site puis l'abandonner : un site vit, se met à jour et s'enrichit.",
        ],
      },
      {
        type: "h2",
        text: "En résumé",
      },
      {
        type: "p",
        text: "Réussir la création de son site web à Montbéliard en 2026, c'est partir d'un objectif clair, soigner le SEO local, garantir la performance, investir intelligemment et faire vivre le site dans le temps. C'est exactement la méthode que nous appliquons chez WebCode Studio. Vous avez un projet ? Parlons-en : la consultation est gratuite et le devis personnalisé.",
      },
    ],
  },
  {
    slug: "combien-coute-un-site-web-2026",
    title: "Combien coûte un site web en 2026 ? Prix, facteurs et budget",
    description:
      "Quel budget prévoir pour un site web en 2026 ? On détaille les facteurs qui font varier le prix, les fourchettes du marché par type de site et comment investir intelligemment.",
    excerpt:
      "Site vitrine, e-commerce, application : les facteurs qui font varier le prix d'un site web, les fourchettes du marché et comment éviter le piège du « moins cher ».",
    keywords: [
      "prix site web",
      "combien coûte un site internet",
      "tarif création site web",
      "budget site vitrine",
      "devis site web",
    ],
    category: "Conseils",
    datePublished: "2026-06-12",
    readingMinutes: 6,
    content: [
      {
        type: "p",
        text: "« Combien coûte un site web ? » C'est la première question de presque tous nos prospects. La réponse honnête : cela dépend. Un site n'a pas de prix unique, comme une maison n'a pas de prix unique. Ce qui compte, c'est de comprendre ce qui fait varier le budget pour investir au bon endroit.",
      },
      {
        type: "h2",
        text: "Ce qui fait vraiment varier le prix",
      },
      {
        type: "p",
        text: "Le tarif d'un site dépend de quelques facteurs concrets, bien plus que du nombre de pages :",
      },
      {
        type: "ul",
        items: [
          "Le type de projet : un site vitrine est plus accessible qu'une boutique e-commerce ou une application sur mesure.",
          "Le design : un thème standard coûte moins cher qu'un design entièrement personnalisé à votre image.",
          "Les contenus : textes, photos et logos prêts ou à produire changent fortement la charge de travail.",
          "Les fonctionnalités : paiement en ligne, réservation, espace membre, multilingue, connexions à d'autres outils.",
          "Le SEO et la performance : un site pensé pour être trouvé et rapide demande plus de soin qu'une simple mise en ligne.",
        ],
      },
      {
        type: "h2",
        text: "Les grandes fourchettes du marché",
      },
      {
        type: "p",
        text: "À titre indicatif, voici les ordres de grandeur que l'on observe sur le marché français en 2026. Ce sont des repères, pas des devis : seul un cahier des charges permet de chiffrer précisément.",
      },
      {
        type: "ul",
        items: [
          "Site vitrine professionnel sur mesure : l'investissement le plus courant pour une PME, un artisan ou un indépendant.",
          "Site e-commerce : plus élevé, car il intègre catalogue, paiement, gestion des commandes et logistique.",
          "Application web ou mobile sur mesure : le budget le plus important, proportionnel à la complexité fonctionnelle.",
        ],
      },
      {
        type: "h2",
        text: "Le piège du « moins cher »",
      },
      {
        type: "p",
        text: "Un site très bon marché peut coûter cher au final : invisible sur Google, lent, difficile à modifier, sans accompagnement. Vous payez alors deux fois — une fois pour le site initial, une fois pour le refaire. Comparez ce qui est réellement inclus plutôt que le seul prix affiché.",
      },
      {
        type: "h2",
        text: "Investir intelligemment",
      },
      {
        type: "p",
        text: "Le bon réflexe n'est pas de chercher le tarif le plus bas, mais le meilleur retour sur investissement. Un site qui génère régulièrement des demandes de devis se rentabilise vite. Posez la question autrement : combien vous rapporte un nouveau client, et combien de clients ce site doit-il vous apporter pour être rentable ?",
      },
      {
        type: "p",
        text: "Chez WebCode Studio, le devis est gratuit et personnalisé : on part de votre objectif et de votre budget pour proposer la solution la plus pertinente, sans surcouche inutile. Parlons de votre projet.",
      },
    ],
  },
  {
    slug: "seo-local-par-ou-commencer",
    title: "SEO local : par où commencer pour être visible sur Google ?",
    description:
      "Guide pratique du référencement local pour les entreprises : Google Business Profile, mots-clés géolocalisés, avis clients et contenu. Les premières actions qui comptent vraiment.",
    excerpt:
      "Google Business Profile, mots-clés géolocalisés, avis clients, pages dédiées : les premières actions concrètes pour apparaître quand on vous cherche près de chez vous.",
    keywords: [
      "SEO local",
      "référencement local",
      "Google Business Profile",
      "être visible sur Google",
      "référencement Montbéliard",
    ],
    category: "Guide",
    datePublished: "2026-06-15",
    readingMinutes: 6,
    content: [
      {
        type: "p",
        text: "Quand un client cherche « restaurant près de moi » ou « électricien Montbéliard », Google met en avant les entreprises locales les plus pertinentes. Le SEO local, c'est l'art d'être celle qui apparaît. Bonne nouvelle : les premières actions sont accessibles à toute entreprise, sans budget colossal.",
      },
      {
        type: "h2",
        text: "1. Soigner sa fiche Google Business Profile",
      },
      {
        type: "p",
        text: "C'est le point de départ et le facteur le plus important du référencement local. Une fiche gratuite, mais souvent négligée. Pour qu'elle travaille pour vous :",
      },
      {
        type: "ul",
        items: [
          "Renseignez chaque champ : catégorie précise, horaires, zone d'intervention, téléphone, site web.",
          "Ajoutez de vraies photos de votre activité, de vos locaux ou de vos réalisations.",
          "Publiez régulièrement des actualités, offres ou nouveautés directement sur la fiche.",
          "Répondez à toutes les questions et à tous les avis, positifs comme négatifs.",
        ],
      },
      {
        type: "h2",
        text: "2. Cibler des mots-clés géolocalisés",
      },
      {
        type: "p",
        text: "Pensez comme votre client. Il ne tape pas votre nom de marque, il décrit son besoin avec un lieu : « plombier Audincourt », « création site web Montbéliard », « coiffeur Pays de Montbéliard ». Identifiez ces expressions et utilisez-les naturellement dans vos titres, vos textes et les balises de votre site.",
      },
      {
        type: "h2",
        text: "3. Créer des pages dédiées",
      },
      {
        type: "p",
        text: "Une seule page « Accueil » ne peut pas tout couvrir. Créez une page par service important et, si vous le justifiez, par zone géographique. Chaque page doit apporter un contenu réellement utile : ce que vous proposez, pour qui, avec quels bénéfices et quelles preuves. Évitez de dupliquer le même texte en changeant juste le nom de la ville.",
      },
      {
        type: "h2",
        text: "4. Collecter des avis clients authentiques",
      },
      {
        type: "p",
        text: "Les avis pèsent à la fois sur votre classement et sur la décision du client. Prenez l'habitude d'en demander après chaque prestation réussie, simplement, avec un lien direct vers votre fiche. La régularité et l'authenticité comptent plus que le volume : mieux vaut des avis vrais et réguliers que des avis achetés, qui se repèrent et nuisent à la confiance.",
      },
      {
        type: "h2",
        text: "5. Assurer la base technique",
      },
      {
        type: "p",
        text: "Enfin, votre site doit être rapide, lisible sur mobile et bien structuré. Des données enrichies (votre adresse, vos horaires, votre activité au format compris par Google), un sitemap et des balises propres aident les moteurs à vous comprendre et à bien vous présenter.",
      },
      {
        type: "h2",
        text: "Par quoi commencer concrètement",
      },
      {
        type: "p",
        text: "Si vous ne deviez faire qu'une chose cette semaine : complétez et optimisez votre fiche Google Business Profile. Puis attaquez les pages de votre site et les avis. Le SEO local est un travail de fond, mais les premiers résultats arrivent souvent vite. Besoin d'aide pour structurer tout ça ? C'est précisément ce que nous faisons.",
      },
    ],
  },
];

export function getAllPosts(): BlogPost[] {
  return [...blogPosts].sort(
    (a, b) =>
      new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime(),
  );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function formatPostDate(iso: string): string {
  return new Date(iso).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
