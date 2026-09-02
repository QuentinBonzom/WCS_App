// Blog content source. Articles are authored as structured blocks so we can
// render semantic HTML (h2 / p / ul) and derive SEO metadata + JSON-LD.

import type { Locale } from "@/lib/i18n";

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
  {
    slug: "refonte-site-internet-7-signes",
    title:
      "Refonte de site internet : 7 signes qu'il est temps de refaire votre site",
    description:
      "Site lent, non responsive, design daté, invisible sur Google : les 7 signaux qui indiquent qu'une refonte de votre site internet est devenue rentable — et comment la mener sans perdre de trafic.",
    excerpt:
      "Site lent, non responsive, design daté, difficile à mettre à jour, invisible sur Google : les signes qu'une refonte s'impose, et comment la faire sans casser votre référencement.",
    keywords: [
      "refonte site internet",
      "refaire son site web",
      "moderniser site internet",
      "refonte site Montbéliard",
      "quand refaire son site",
    ],
    category: "Guide",
    datePublished: "2026-09-02",
    readingMinutes: 6,
    content: [
      {
        type: "p",
        text: "Un site internet vieillit plus vite qu'on ne le croit. Les usages changent, les téléphones prennent le dessus, Google relève ses exigences, et un site qui convertissait bien il y a quatre ans peut aujourd'hui faire fuir des prospects sans que vous le sachiez. Voici sept signaux concrets qui indiquent qu'une refonte est devenue un investissement rentable.",
      },
      {
        type: "h2",
        text: "1. Le site est lent à charger",
      },
      {
        type: "p",
        text: "La vitesse est un critère direct de classement Google et, surtout, de conversion : au-delà de trois secondes de chargement, une part importante des visiteurs abandonne. Si votre site s'appuie sur un thème lourd bourré d'extensions, ou si les images ne sont pas optimisées, la refonte permet de repartir sur un socle léger et rapide.",
      },
      {
        type: "h2",
        text: "2. L'affichage mobile est cassé ou approximatif",
      },
      {
        type: "p",
        text: "La majorité de vos visiteurs consultent votre site sur téléphone, et Google indexe la version mobile en priorité. Menu illisible, textes minuscules, boutons trop rapprochés, images qui débordent : si l'expérience mobile n'est pas irréprochable, vous perdez à la fois des clients et du référencement.",
      },
      {
        type: "h2",
        text: "3. Le design ne vous ressemble plus",
      },
      {
        type: "p",
        text: "Un site daté envoie un signal : celui d'une entreprise qui n'a pas évolué. Vos prospects comparent, souvent en quelques secondes, votre site à celui de vos concurrents. Si le vôtre paraît en retard, la crédibilité en prend un coup avant même le premier contact.",
      },
      {
        type: "h2",
        text: "4. Vous ne pouvez pas le mettre à jour vous-même",
      },
      {
        type: "p",
        text: "Ajouter une page, changer une photo, publier une actualité : si chaque modification passe par un prestataire injoignable ou par du code, votre site devient un frein plutôt qu'un outil. Une refonte est l'occasion de repartir sur une base que vous maîtrisez.",
      },
      {
        type: "h2",
        text: "5. Le site n'apparaît pas sur Google",
      },
      {
        type: "p",
        text: "Structure technique faible, contenus trop minces, absence de données structurées, pages importantes non optimisées : un site peut être en ligne depuis des années sans jamais apparaître sur les recherches qui comptent pour votre activité. La refonte permet de reconstruire des fondations SEO solides.",
      },
      {
        type: "h2",
        text: "6. Le taux de contact a chuté",
      },
      {
        type: "p",
        text: "Si vous recevez moins de demandes qu'avant à trafic équivalent, le problème vient souvent du parcours : proposition de valeur floue, appels à l'action mal placés, formulaire trop long, manque de preuves de confiance. Une refonte centrée sur la conversion corrige ces points.",
      },
      {
        type: "h2",
        text: "7. La technologie n'est plus maintenue",
      },
      {
        type: "p",
        text: "CMS abandonné, extensions qui ne reçoivent plus de mises à jour, faille de sécurité potentielle : au-delà de l'inconfort, c'est un risque. Mieux vaut anticiper une refonte que subir un piratage ou une panne.",
      },
      {
        type: "h2",
        text: "Refaire son site sans perdre son référencement",
      },
      {
        type: "p",
        text: "La principale crainte d'une refonte est justifiée : mal préparée, elle peut faire chuter le trafic du jour au lendemain. On l'évite avec une méthode simple :",
      },
      {
        type: "ul",
        items: [
          "Auditer les pages qui génèrent réellement du trafic et les mots-clés positionnés avant de toucher à quoi que ce soit.",
          "Conserver les contenus utiles et les URL bien référencées plutôt que de tout renommer.",
          "Établir un plan de redirections 301, une ancienne URL vers sa nouvelle version, sans exception.",
          "Mettre à jour le sitemap et la Search Console le jour de la bascule.",
          "Suivre le positionnement les semaines suivantes pour corriger vite si besoin.",
        ],
      },
      {
        type: "p",
        text: "Si plusieurs de ces sept signes vous parlent, une refonte est probablement rentable. Chez WebCode Studio, à Montbéliard, on commence toujours par un audit de votre site actuel : vous savez ce qu'il faut garder, ce qu'il faut changer, et ce que ça coûte, avant de vous engager.",
      },
    ],
  },
];

const blogPostsEn: BlogPost[] = [
  {
    slug: "creation-site-web-montbeliard-guide-2026",
    title: "Website creation in Montbeliard: the complete 2026 guide",
    description:
      "Everything a Montbeliard business should know before creating an effective website in 2026: goals, budget, local SEO, performance and mistakes to avoid.",
    excerpt:
      "Goals, budget, local SEO, performance and mistakes to avoid: a practical guide to creating a successful website in Montbeliard and the surrounding area.",
    keywords: [
      "website creation Montbeliard",
      "website Montbeliard",
      "local SEO Montbeliard",
      "website price",
      "web agency Montbeliard",
    ],
    category: "Guide",
    datePublished: "2026-06-16",
    readingMinutes: 7,
    content: [
      {
        type: "p",
        text: "In Montbeliard, as everywhere else, a website is no longer optional: it is often the first contact between your business and a potential customer. Before calling you, a prospect searches for you on Google, visits your site and judges your credibility in a few seconds. This guide explains, step by step, how to create a local, high-performing website in 2026.",
      },
      {
        type: "h2",
        text: "1. Define the goal before the design",
      },
      {
        type: "p",
        text: "A website only has value if it serves a clear goal. Before discussing colors or animations, ask the real question: what should the visitor do? Most local business websites aim to achieve one of these goals:",
      },
      {
        type: "ul",
        items: [
          "Generate quote requests, which is the most common case for artisans and SMEs.",
          "Present an activity and reassure prospects before a meeting or call.",
          "Sell online or take bookings.",
          "Recruit and strengthen an employer brand.",
        ],
      },
      {
        type: "p",
        text: "Everything else - page structure, content and calls to action - comes from that goal. A beautiful website that does not convert is a failed website.",
      },
      {
        type: "h2",
        text: "2. Local SEO, your best ally in Montbeliard",
      },
      {
        type: "p",
        text: "Local SEO helps you appear when someone in the Montbeliard area searches for terms like plumber Montbeliard, hairdresser Audincourt or website creation Montbeliard. Three levers matter most:",
      },
      {
        type: "ul",
        items: [
          "A complete and up-to-date Google Business Profile: this is the number one local SEO factor.",
          "Dedicated pages for your services and geographic area, with precise and useful content.",
          "Real, regular and authentic customer reviews, which strengthen trust and ranking.",
        ],
      },
      {
        type: "p",
        text: "A technically clean website, with structured headings, rich data, a sitemap and careful metadata, helps Google index your pages. But it does not replace useful content and an active local presence.",
      },
      {
        type: "h2",
        text: "3. Performance is not a luxury",
      },
      {
        type: "p",
        text: "For years, Google has included speed and visual stability, known as Core Web Vitals, in its ranking signals. A slow site loses visitors before it has convinced them. In practice, a modern site should:",
      },
      {
        type: "ul",
        items: [
          "Automatically optimize images with AVIF/WebP formats and progressive loading.",
          "Limit unnecessary code and prioritize what is visible first.",
          "Stay smooth and readable on mobile, where most visits now happen.",
        ],
      },
      {
        type: "h2",
        text: "4. How much does a website cost in 2026?",
      },
      {
        type: "p",
        text: "The price mostly depends on the ambition of the project. A well-designed professional showcase website is a reasonable investment compared with the leads it can generate over time. Instead of looking for the cheapest option, compare what is included: custom design, content, SEO, performance, responsive design, maintenance and support.",
      },
      {
        type: "h2",
        text: "5. Mistakes to avoid",
      },
      {
        type: "ul",
        items: [
          "Copying a competitor without thinking about your own positioning.",
          "Neglecting content: a beautiful design with vague text does not convert.",
          "Forgetting mobile, even though it represents most traffic.",
          "Launching the site and abandoning it: a website must live, evolve and grow.",
        ],
      },
      {
        type: "h2",
        text: "In short",
      },
      {
        type: "p",
        text: "Creating a successful website in Montbeliard in 2026 means starting with a clear goal, taking local SEO seriously, guaranteeing performance, investing wisely and keeping the site alive over time. This is exactly the method we use at WebCode Studio. Have a project? Let's talk: the consultation is free and the quote is personalized.",
      },
    ],
  },
  {
    slug: "combien-coute-un-site-web-2026",
    title: "How much does a website cost in 2026? Price, factors and budget",
    description:
      "What budget should you plan for a website in 2026? We explain the factors that influence price, market ranges by project type and how to invest wisely.",
    excerpt:
      "Showcase website, e-commerce, application: the factors that influence website pricing, market ranges and how to avoid the cheapest-option trap.",
    keywords: [
      "website price",
      "how much does a website cost",
      "website creation rate",
      "showcase website budget",
      "website quote",
    ],
    category: "Advice",
    datePublished: "2026-06-12",
    readingMinutes: 6,
    content: [
      {
        type: "p",
        text: "How much does a website cost? This is the first question almost every prospect asks. The honest answer is: it depends. A website does not have one fixed price, just as a house does not have one fixed price. What matters is understanding what changes the budget so you can invest in the right place.",
      },
      {
        type: "h2",
        text: "What really changes the price",
      },
      {
        type: "p",
        text: "A website's price depends on a few concrete factors, much more than on the number of pages:",
      },
      {
        type: "ul",
        items: [
          "The type of project: a showcase website is more accessible than an e-commerce store or a custom application.",
          "The design: a standard theme costs less than a fully custom design created for your brand.",
          "The content: ready-to-use text, photos and logos change the workload significantly.",
          "The features: online payment, booking, member areas, multilingual content and integrations.",
          "SEO and performance: a site built to be found and fast requires more care than a simple launch.",
        ],
      },
      {
        type: "h2",
        text: "Typical market ranges",
      },
      {
        type: "p",
        text: "As a guideline, here are the broad ranges seen on the French market in 2026. They are benchmarks, not quotes: only a clear scope can produce an accurate price.",
      },
      {
        type: "ul",
        items: [
          "Custom professional showcase website: the most common investment for an SME, artisan or independent business.",
          "E-commerce website: higher, because it includes catalog, payment, order management and logistics.",
          "Custom web or mobile application: the largest budget, proportional to functional complexity.",
        ],
      },
      {
        type: "h2",
        text: "The cheapest-option trap",
      },
      {
        type: "p",
        text: "A very cheap website can become expensive later: invisible on Google, slow, hard to update and unsupported. You pay twice - once for the initial site, then again to rebuild it. Compare what is actually included instead of focusing only on the displayed price.",
      },
      {
        type: "h2",
        text: "Investing wisely",
      },
      {
        type: "p",
        text: "The right reflex is not to search for the lowest rate, but for the best return on investment. A site that regularly generates quote requests can pay for itself quickly. Ask the question differently: how much is a new customer worth, and how many customers should the site bring to be profitable?",
      },
      {
        type: "p",
        text: "At WebCode Studio, the quote is free and personalized. We start from your goal and budget to recommend the most relevant solution, without unnecessary layers. Let's talk about your project.",
      },
    ],
  },
  {
    slug: "seo-local-par-ou-commencer",
    title: "Local SEO: where should you start to be visible on Google?",
    description:
      "A practical local SEO guide for businesses: Google Business Profile, location-based keywords, customer reviews and content. The first actions that matter.",
    excerpt:
      "Google Business Profile, location-based keywords, customer reviews and dedicated pages: the first concrete actions to appear when people search nearby.",
    keywords: [
      "local SEO",
      "Google Business Profile",
      "be visible on Google",
      "Montbeliard SEO",
      "local ranking",
    ],
    category: "Guide",
    datePublished: "2026-06-15",
    readingMinutes: 6,
    content: [
      {
        type: "p",
        text: "When a customer searches for restaurant near me or electrician Montbeliard, Google highlights the most relevant local businesses. Local SEO is the art of being one of them. The good news: the first actions are accessible to any business, without a huge budget.",
      },
      {
        type: "h2",
        text: "1. Take care of your Google Business Profile",
      },
      {
        type: "p",
        text: "This is the starting point and the most important local SEO factor. It is free, but often neglected. To make it work for you:",
      },
      {
        type: "ul",
        items: [
          "Fill in every field: precise category, opening hours, service area, phone number and website.",
          "Add real photos of your activity, premises or completed work.",
          "Regularly publish updates, offers or news directly on the profile.",
          "Reply to every question and every review, positive or negative.",
        ],
      },
      {
        type: "h2",
        text: "2. Target location-based keywords",
      },
      {
        type: "p",
        text: "Think like your customer. They do not always type your brand name; they describe a need with a place: plumber Audincourt, website creation Montbeliard, hairdresser Pays de Montbeliard. Identify these phrases and use them naturally in titles, copy and metadata.",
      },
      {
        type: "h2",
        text: "3. Create dedicated pages",
      },
      {
        type: "p",
        text: "A single homepage cannot cover everything. Create one page per important service and, when justified, per geographic area. Each page must provide useful content: what you offer, for whom, with which benefits and which proof. Avoid duplicating the same text by only changing the city name.",
      },
      {
        type: "h2",
        text: "4. Collect authentic customer reviews",
      },
      {
        type: "p",
        text: "Reviews influence both ranking and customer decisions. Get used to asking after each successful service, simply, with a direct link to your profile. Regularity and authenticity matter more than volume: real and steady reviews beat bought reviews, which damage trust.",
      },
      {
        type: "h2",
        text: "5. Secure the technical base",
      },
      {
        type: "p",
        text: "Finally, your site must be fast, mobile-readable and well structured. Rich data, a sitemap and clean metadata help search engines understand and present your business properly.",
      },
      {
        type: "h2",
        text: "What to start with concretely",
      },
      {
        type: "p",
        text: "If you could only do one thing this week, complete and optimize your Google Business Profile. Then work on your website pages and reviews. Local SEO is long-term work, but the first results often arrive quickly. Need help structuring it all? That is exactly what we do.",
      },
    ],
  },
  {
    slug: "refonte-site-internet-7-signes",
    title: "Website redesign: 7 signs it's time to rebuild your site",
    description:
      "Slow, not responsive, dated design, invisible on Google: the 7 signals that a website redesign has become worth it — and how to run it without losing traffic.",
    excerpt:
      "Slow, not responsive, dated design, hard to update, invisible on Google: the signs a redesign is due, and how to do it without breaking your SEO.",
    keywords: [
      "website redesign",
      "rebuild website",
      "modernize website",
      "website redesign Montbéliard",
      "when to redo your site",
    ],
    category: "Guide",
    datePublished: "2026-09-02",
    readingMinutes: 6,
    content: [
      {
        type: "p",
        text: "A website ages faster than you'd think. Habits change, phones take over, Google raises the bar, and a site that converted well four years ago can now push prospects away without you knowing. Here are seven concrete signals that a redesign has become a worthwhile investment.",
      },
      {
        type: "h2",
        text: "1. The site is slow to load",
      },
      {
        type: "p",
        text: "Speed is a direct Google ranking factor and, above all, a conversion factor: beyond three seconds of loading, a large share of visitors leave. If your site relies on a heavy theme stuffed with plugins, or if images aren't optimized, a redesign lets you start over on a light, fast base.",
      },
      {
        type: "h2",
        text: "2. Mobile display is broken or rough",
      },
      {
        type: "p",
        text: "Most of your visitors browse on a phone, and Google indexes the mobile version first. Unreadable menu, tiny text, cramped buttons, overflowing images: if the mobile experience isn't flawless, you lose both customers and rankings.",
      },
      {
        type: "h2",
        text: "3. The design no longer reflects you",
      },
      {
        type: "p",
        text: "A dated site sends a signal: that of a business that hasn't evolved. Prospects compare your site to your competitors', often in seconds. If yours looks behind, credibility takes a hit before the first contact.",
      },
      {
        type: "h2",
        text: "4. You can't update it yourself",
      },
      {
        type: "p",
        text: "Adding a page, changing a photo, publishing news: if every change goes through an unreachable provider or through code, your site becomes a burden rather than a tool. A redesign is the chance to start over on a base you control.",
      },
      {
        type: "h2",
        text: "5. The site doesn't show up on Google",
      },
      {
        type: "p",
        text: "Weak technical structure, thin content, no structured data, key pages not optimized: a site can be online for years without ever appearing for the searches that matter to your business. A redesign lets you rebuild solid SEO foundations.",
      },
      {
        type: "h2",
        text: "6. The contact rate has dropped",
      },
      {
        type: "p",
        text: "If you get fewer enquiries than before at equal traffic, the problem is often the journey: unclear value proposition, badly placed calls to action, a form that's too long, missing trust signals. A conversion-focused redesign fixes these.",
      },
      {
        type: "h2",
        text: "7. The technology is no longer maintained",
      },
      {
        type: "p",
        text: "Abandoned CMS, plugins that no longer receive updates, potential security holes: beyond the discomfort, it's a risk. Better to plan a redesign than to suffer a hack or an outage.",
      },
      {
        type: "h2",
        text: "Redoing your site without losing your rankings",
      },
      {
        type: "p",
        text: "The main fear about a redesign is justified: poorly prepared, it can drop traffic overnight. You avoid it with a simple method:",
      },
      {
        type: "ul",
        items: [
          "Audit the pages that actually generate traffic and the ranked keywords before touching anything.",
          "Keep the useful content and well-ranked URLs rather than renaming everything.",
          "Set up a 301 redirect plan, one old URL to its new version, with no exception.",
          "Update the sitemap and Search Console on switch day.",
          "Monitor rankings in the following weeks to fix quickly if needed.",
        ],
      },
      {
        type: "p",
        text: "If several of these seven signs ring true, a redesign is probably worth it. At WebCode Studio, in Montbéliard, we always start with an audit of your current site: you know what to keep, what to change and what it costs before committing.",
      },
    ],
  },
];

const blogPostsByLocale: Record<Locale, BlogPost[]> = {
  fr: blogPosts,
  en: blogPostsEn,
};

export function getAllPosts(locale: Locale = "fr"): BlogPost[] {
  return [...blogPostsByLocale[locale]].sort(
    (a, b) =>
      new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime(),
  );
}

export function getPostBySlug(
  slug: string,
  locale: Locale = "fr",
): BlogPost | undefined {
  return blogPostsByLocale[locale].find((post) => post.slug === slug);
}

export function formatPostDate(iso: string, locale: Locale = "fr"): string {
  return new Date(iso).toLocaleDateString(locale === "fr" ? "fr-FR" : "en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
