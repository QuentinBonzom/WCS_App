import type { Localized, LocalLandingContent } from "./types";

export const refonteSiteInternetMontbeliardContent: Localized<LocalLandingContent> =
  {
    fr: {
      serviceName: "Refonte de site internet à Montbéliard",
      serviceType: "Web development",
      hero: {
        eyebrow: "Studio web · Montbéliard (Doubs)",
        titleLines: ["Refonte de site internet", "à Montbéliard."],
        intro:
          "Votre site actuel est lent, daté, mal affiché sur mobile ou invisible sur Google ? WebCode Studio reprend votre site existant, conserve ce qui fonctionne et modernise le reste — sans casser votre référencement.",
        primaryCta: { label: "Auditer mon site", href: "/contact" },
        secondaryCta: { label: "Voir nos réalisations", href: "/projets" },
      },
      value: {
        eyebrow: "Ce que vous obtenez",
        heading: "Un site remis à niveau, pas remis à zéro.",
        points: [
          {
            title: "On garde ce qui marche",
            text: "URL bien positionnées, contenus utiles, image de marque, historique SEO : on conserve vos acquis au lieu de repartir de zéro.",
          },
          {
            title: "Performances et mobile",
            text: "Nouveau socle technique : chargement rapide, affichage impeccable sur mobile, Core Web Vitals mesurés et corrigés.",
          },
          {
            title: "Une offre plus claire",
            text: "On repense la structure et les parcours pour que le visiteur comprenne vite ce que vous proposez et passe à l'action.",
          },
          {
            title: "Un SEO préservé",
            text: "Plan de redirections, conservation des balises et du maillage : la refonte est faite pour ne pas perdre de trafic, voire en gagner.",
          },
        ],
      },
      siteTypes: {
        eyebrow: "Quand refaire son site ?",
        heading: "Les signes qu'une refonte s'impose.",
        intro:
          "Un site vieillit vite. Si vous reconnaissez plusieurs de ces situations, une refonte est probablement rentable.",
        items: [
          {
            title: "Site lent ou non responsive",
            text: "Chargement long, affichage cassé sur téléphone : la vitesse et le mobile sont des critères directs de classement Google et de conversion.",
          },
          {
            title: "Design daté",
            text: "Le site ne reflète plus votre positionnement et inspire moins confiance que celui de vos concurrents.",
          },
          {
            title: "Difficile à mettre à jour",
            text: "Ajouter une page, une photo ou une offre est un casse-tête, ou dépend entièrement d'un prestataire injoignable.",
          },
          {
            title: "Invisible sur Google",
            text: "Structure technique faible, contenus minces, pas de données structurées : le site n'apparaît pas sur vos recherches cibles.",
          },
        ],
      },
      advantages: {
        eyebrow: "Refonte vs. reconstruction",
        heading: "Ce qu'on conserve, ce qu'on change.",
        intro:
          "Une bonne refonte n'est pas un nouveau site posé sur les ruines de l'ancien. On trie ce qui a de la valeur et on modernise le reste.",
        items: [
          "On conserve : les URL qui rankent, les contenus utiles, votre nom de domaine, votre image de marque, l'historique Search Console.",
          "On change : le design, le socle technique, la structure de navigation, les performances, l'accessibilité et les bases SEO.",
          "On sécurise : un plan de redirections 301 pour chaque ancienne URL vers sa nouvelle version.",
          "On mesure : le trafic et le positionnement avant / après, pour vérifier que la refonte fait progresser et non reculer.",
        ],
      },
      process: {
        eyebrow: "Méthode",
        heading: "Une refonte sans perte de trafic.",
        steps: [
          {
            step: "01 · Audit",
            title: "On analyse l'existant",
            text: "Pages qui génèrent du trafic, mots-clés positionnés, contenus à garder, points techniques bloquants. Recommandation et devis sous 24h.",
          },
          {
            step: "02 · Cadrage",
            title: "On décide quoi garder",
            text: "Arborescence cible, contenus conservés ou réécrits, plan de redirections URL par URL.",
          },
          {
            step: "03 · Design & dev",
            title: "On reconstruit proprement",
            text: "Nouveau design validé sur maquettes, développement performant, migration des contenus, démos régulières.",
          },
          {
            step: "04 · Bascule & suivi",
            title: "On met en ligne et on surveille",
            text: "Mise en production, redirections activées, sitemap et Search Console mis à jour, suivi du positionnement les semaines suivantes.",
          },
        ],
      },
      work: {
        eyebrow: "Réalisations",
        heading: "Des sites livrés et suivis.",
        text: "Sites vitrines, écosystèmes web et mobile, présences digitales techniques — pour des clients en France et à l'étranger.",
        ctaLabel: "Voir toutes les réalisations",
      },
      why: {
        eyebrow: "Pourquoi WebCode Studio",
        heading: "Local, technique, impliqué.",
        items: [
          {
            title: "Basé à Montbéliard",
            text: "On connaît le territoire et les recherches des habitants du Pays de Montbéliard. Les échanges se font sur place ou à distance.",
          },
          {
            title: "Un niveau d'exécution premium",
            text: "Design, développement, performance et SEO traités ensemble, avec le même soin qu'une agence parisienne — sans les tarifs parisiens.",
          },
          {
            title: "Un partenaire dans la durée",
            text: "Après la bascule, on suit le positionnement, on corrige et on fait évoluer le site plutôt que de disparaître.",
          },
        ],
      },
      area: {
        eyebrow: "Zone d'intervention",
        heading: "Montbéliard, le Doubs et le Nord Franche-Comté.",
        text: "WebCode Studio accompagne les entreprises de Montbéliard et de sa région : Pays de Montbéliard, Audincourt, Sochaux, Valentigney, Bethoncourt, Grand-Charmont, Bavans, Voujeaucourt, ainsi que Héricourt et Belfort. Le reste de la France et l'international sont pris en charge à distance.",
        note: "Activité exercée depuis un bureau privé — les rendez-vous se font sur site client, en visio ou dans un lieu tiers.",
      },
      pricing: {
        eyebrow: "Approche tarifaire",
        heading: "Un devis clair après audit.",
        intro:
          "Le prix d'une refonte est chiffré sur mesure après analyse du site existant. Il dépend surtout de :",
        factors: [
          "Le nombre de pages à reprendre et le volume de contenu",
          "L'état technique du site actuel et la complexité de la migration",
          "Le niveau de nouveau design et de personnalisation",
          "Les fonctionnalités à conserver, ajouter ou remplacer",
          "L'ampleur du plan de redirections et du travail SEO",
        ],
        note: "L'audit initial permet de situer le budget. Vous recevez ensuite un devis détaillé et engageant sous 24h.",
      },
      marquee: [
        "REFONTE",
        "PERFORMANCE",
        "MOBILE",
        "SEO PRÉSERVÉ",
        "REDIRECTIONS 301",
        "MONTBÉLIARD · DOUBS",
      ],
      related: {
        heading: "Vous partez de zéro ?",
        links: [
          {
            label: "Création de site internet à Montbéliard",
            href: "/creation-site-internet-montbeliard",
          },
          { label: "Agence web à Montbéliard", href: "/agence-web-montbeliard" },
        ],
      },
      faqEyebrow: "FAQ",
      faqHeading: "Questions fréquentes.",
      faq: [
        {
          question: "Une refonte fait-elle perdre du trafic Google ?",
          answer:
            "C'est le principal risque d'une refonte mal préparée. On l'évite avec un audit des pages qui génèrent du trafic, la conservation des contenus qui rankent et un plan de redirections 301 pour chaque ancienne URL. Le positionnement est suivi les semaines qui suivent la bascule.",
        },
        {
          question: "Peut-on garder le même nom de domaine ?",
          answer:
            "Oui, dans la quasi-totalité des cas. Garder votre domaine est même recommandé : il concentre votre historique et votre notoriété. On refait le site « derrière » le même domaine.",
        },
        {
          question: "Mon site est sur WordPress / Wix / un vieux CMS, est-ce un problème ?",
          answer:
            "Non. On récupère les contenus et les URL existantes quelle que soit la technologie de départ, puis on reconstruit sur un socle moderne, rapide et facile à maintenir.",
        },
        {
          question: "Combien de temps prend une refonte ?",
          answer:
            "Généralement 4 à 8 semaines selon le nombre de pages et l'état du site actuel. L'audit initial permet de donner un délai précis dès le devis.",
        },
        {
          question: "Garde-t-on les textes et photos actuels ?",
          answer:
            "On conserve ce qui est bon et à jour, on réécrit ce qui est daté ou peu clair, et on complète si nécessaire. Rien n'est jeté sans raison.",
        },
        {
          question: "Que se passe-t-il après la mise en ligne ?",
          answer:
            "On surveille le positionnement et les erreurs d'indexation les premières semaines, on corrige si besoin, puis le site peut évoluer à la demande ou être laissé en autonomie.",
        },
      ],
      finalCta: {
        eyebrow: "Premier pas",
        heading: "Auditons votre site actuel.",
        text: "Envoyez-nous l'adresse de votre site et vos objectifs. Vous recevez un premier état des lieux et un devis de refonte sous 24h.",
        ctaLabel: "Demander mon audit",
      },
    },
    en: {
      serviceName: "Website redesign in Montbéliard",
      serviceType: "Web development",
      hero: {
        eyebrow: "Web studio · Montbéliard (Doubs, France)",
        titleLines: ["Website redesign", "in Montbéliard."],
        intro:
          "Is your current site slow, dated, broken on mobile or invisible on Google? WebCode Studio takes over your existing site, keeps what works and modernizes the rest — without breaking your SEO.",
        primaryCta: { label: "Audit my site", href: "/contact" },
        secondaryCta: { label: "See our work", href: "/projets" },
      },
      value: {
        eyebrow: "What you get",
        heading: "A site brought up to date, not back to zero.",
        points: [
          {
            title: "We keep what works",
            text: "Well-ranked URLs, useful content, brand, SEO history: we preserve your gains instead of starting over.",
          },
          {
            title: "Performance and mobile",
            text: "New technical base: fast loading, flawless mobile display, Core Web Vitals measured and fixed.",
          },
          {
            title: "A clearer offer",
            text: "We rethink structure and journeys so visitors quickly understand what you offer and take action.",
          },
          {
            title: "SEO preserved",
            text: "Redirect plan, metadata and internal linking kept: the redesign is built to lose no traffic — and ideally gain some.",
          },
        ],
      },
      siteTypes: {
        eyebrow: "When to redo your site?",
        heading: "The signs a redesign is due.",
        intro:
          "Websites age fast. If several of these situations feel familiar, a redesign is probably worth it.",
        items: [
          {
            title: "Slow or not responsive",
            text: "Long loading, broken display on phones: speed and mobile are direct Google ranking and conversion factors.",
          },
          {
            title: "Dated design",
            text: "The site no longer reflects your positioning and inspires less trust than your competitors'.",
          },
          {
            title: "Hard to update",
            text: "Adding a page, photo or offer is a headache, or entirely depends on an unreachable provider.",
          },
          {
            title: "Invisible on Google",
            text: "Weak technical structure, thin content, no structured data: the site doesn't show up for your target searches.",
          },
        ],
      },
      advantages: {
        eyebrow: "Redesign vs. rebuild",
        heading: "What we keep, what we change.",
        intro:
          "A good redesign is not a new site dropped on the ruins of the old one. We sort what has value and modernize the rest.",
        items: [
          "We keep: the URLs that rank, useful content, your domain name, your brand, the Search Console history.",
          "We change: design, technical base, navigation structure, performance, accessibility and SEO foundations.",
          "We secure: a 301 redirect plan for every old URL to its new version.",
          "We measure: traffic and rankings before / after, to confirm the redesign moves you forward, not backward.",
        ],
      },
      process: {
        eyebrow: "Method",
        heading: "A redesign with no traffic loss.",
        steps: [
          {
            step: "01 · Audit",
            title: "We analyze the existing site",
            text: "Pages that generate traffic, ranked keywords, content to keep, blocking technical points. Recommendation and quote within 24h.",
          },
          {
            step: "02 · Scoping",
            title: "We decide what to keep",
            text: "Target site map, content kept or rewritten, URL-by-URL redirect plan.",
          },
          {
            step: "03 · Design & dev",
            title: "We rebuild cleanly",
            text: "New design validated on mockups, fast development, content migration, regular demos.",
          },
          {
            step: "04 · Switch & follow-up",
            title: "We go live and watch",
            text: "Go-live, redirects activated, sitemap and Search Console updated, ranking follow-up over the following weeks.",
          },
        ],
      },
      work: {
        eyebrow: "Work",
        heading: "Sites delivered and followed up.",
        text: "Showcase sites, web and mobile ecosystems, technical digital presences — for clients in France and abroad.",
        ctaLabel: "See all projects",
      },
      why: {
        eyebrow: "Why WebCode Studio",
        heading: "Local, technical, involved.",
        items: [
          {
            title: "Based in Montbéliard",
            text: "We know the area and what people around Montbéliard search for. Meetings can be on site or remote.",
          },
          {
            title: "Premium execution",
            text: "Design, development, performance and SEO handled together, with the same care as a Paris agency — without the Paris rates.",
          },
          {
            title: "A long-term partner",
            text: "After the switch we watch the rankings, fix issues and keep the site evolving rather than disappearing.",
          },
        ],
      },
      area: {
        eyebrow: "Service area",
        heading: "Montbéliard, the Doubs and the Nord Franche-Comté.",
        text: "WebCode Studio supports businesses in Montbéliard and its region: Pays de Montbéliard, Audincourt, Sochaux, Valentigney, Bethoncourt, Grand-Charmont, Bavans, Voujeaucourt, as well as Héricourt and Belfort. The rest of France and international work is handled remotely.",
        note: "Run from a private office — meetings happen at the client's site, by video call or in a third-party location.",
      },
      pricing: {
        eyebrow: "Pricing approach",
        heading: "A clear quote after the audit.",
        intro:
          "A redesign is priced individually after analyzing the existing site. It mainly depends on:",
        factors: [
          "The number of pages to carry over and the volume of content",
          "The technical state of the current site and the complexity of the migration",
          "The level of new design and customization",
          "The features to keep, add or replace",
          "The scale of the redirect plan and SEO work",
        ],
        note: "The initial audit situates the budget. You then receive a detailed, binding quote within 24h.",
      },
      marquee: [
        "REDESIGN",
        "PERFORMANCE",
        "MOBILE",
        "SEO PRESERVED",
        "301 REDIRECTS",
        "MONTBÉLIARD · DOUBS",
      ],
      related: {
        heading: "Starting from scratch?",
        links: [
          {
            label: "Website creation in Montbéliard",
            href: "/creation-site-internet-montbeliard",
          },
          { label: "Web agency in Montbéliard", href: "/agence-web-montbeliard" },
        ],
      },
      faqEyebrow: "FAQ",
      faqHeading: "Frequently asked questions.",
      faq: [
        {
          question: "Does a redesign lose Google traffic?",
          answer:
            "That's the main risk of a poorly prepared redesign. We avoid it with an audit of the pages that generate traffic, keeping the content that ranks and a 301 redirect plan for every old URL. Rankings are monitored in the weeks after the switch.",
        },
        {
          question: "Can we keep the same domain name?",
          answer:
            "Yes, in almost every case. Keeping your domain is recommended: it concentrates your history and reputation. We rebuild the site behind the same domain.",
        },
        {
          question: "My site is on WordPress / Wix / an old CMS — is that a problem?",
          answer:
            "No. We recover the content and existing URLs whatever the starting technology, then rebuild on a modern, fast, easy-to-maintain base.",
        },
        {
          question: "How long does a redesign take?",
          answer:
            "Usually 4 to 8 weeks depending on the number of pages and the state of the current site. The initial audit gives a precise timeline with the quote.",
        },
        {
          question: "Do we keep the current text and photos?",
          answer:
            "We keep what's good and up to date, rewrite what's dated or unclear, and add where needed. Nothing is discarded without reason.",
        },
        {
          question: "What happens after launch?",
          answer:
            "We watch rankings and indexing errors for the first few weeks, fix as needed, then the site can evolve on request or be left autonomous.",
        },
      ],
      finalCta: {
        eyebrow: "First step",
        heading: "Let's audit your current site.",
        text: "Send us your site's address and your goals. You get an initial assessment and a redesign quote within 24h.",
        ctaLabel: "Request my audit",
      },
    },
  };
