import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { SeoServicePage } from "@/components/seo-service-page";
import {
  buildPageMetadata,
  serviceLandingJsonLd,
  seoPages,
  siteConfig,
  type FaqItem,
} from "@/lib/seo";

const page = seoPages.creationSiteWebMontbeliard;

export const metadata: Metadata = buildPageMetadata(page);

const faq: FaqItem[] = [
  {
    question: "Combien coûte la création d'un site web à Montbéliard ?",
    answer:
      "Le prix dépend du nombre de pages, du niveau de design, des fonctionnalités et du travail SEO. Un site vitrine simple n'a pas le même budget qu'une plateforme sur mesure. WebCode Studio fournit un devis clair après cadrage du besoin.",
  },
  {
    question: "Travaillez-vous uniquement avec des clients de Montbéliard ?",
    answer:
      "Non. Le studio accompagne des entreprises à Montbéliard, Belfort, en France et à l'international. La proximité locale facilite les échanges, mais tout le process peut aussi se faire à distance.",
  },
  {
    question: "Le site sera-t-il optimisé pour Google ?",
    answer:
      "Oui. La structure technique, les balises SEO, la performance, les contenus principaux, le sitemap et les données structurées sont pensés dès la conception pour faciliter l'indexation et la compréhension par Google.",
  },
  {
    question: "Ma fiche Google Business Profile peut-elle aider mon référencement ?",
    answer:
      "Oui, si elle est cohérente avec le site : même nom d'entreprise, même zone d'intervention, lien vers la bonne page, description claire des services, photos, avis clients et publications régulières. La page du site et la fiche Google Business Profile doivent se renforcer mutuellement.",
  },
  {
    question: "Pourquoi mon site n'apparaît pas encore sur la recherche création de site web Montbéliard ?",
    answer:
      "Il faut généralement combiner plusieurs signaux : une page locale complète, un maillage interne clair, une fiche Google Business Profile active, des avis, des liens entrants locaux et du temps d'indexation. Une page publiée ne suffit pas toujours à apparaître vite sur une requête concurrentielle.",
  },
  {
    question: "Est-ce que je pourrai demander des évolutions après la mise en ligne ?",
    answer:
      "Oui. Le site peut évoluer avec de nouvelles pages, des sections, du suivi SEO, de la maintenance ou des optimisations de conversion selon vos priorités.",
  },
];

export default function CreationSiteWebMontbeliardPage() {
  return (
    <>
      <JsonLd
        data={serviceLandingJsonLd({
          page,
          serviceName: "Création de site web à Montbéliard",
          serviceType: "Web development",
          faq,
          areaServed: siteConfig.localAreas,
          keywords: [
            "création de site web Montbéliard",
            "creation de site web montbeliard",
            "création site internet Montbéliard",
            "développeur web Montbéliard",
            "agence web Montbéliard",
            "SEO local Montbéliard",
          ],
        })}
      />
      <SeoServicePage
        eyebrow="Création de site web Montbéliard"
        title={
          <>
            Création de site web
            <br />
            à Montbéliard.
          </>
        }
        intro="WebCode Studio crée des sites internet sur mesure pour les entreprises, artisans, indépendants et commerces de Montbéliard. L'objectif : être trouvé sur Google, rassurer vos prospects locaux et transformer les visites en demandes de devis."
        primaryKeyword="création de site web Montbéliard"
        proofPoints={[
          "Une landing locale dédiée à la requête création de site web Montbéliard, avec une structure claire et des contenus utiles.",
          "Une base SEO propre : balises, maillage interne, sitemap, données enrichies, performance et suivi Search Console.",
          "Une cohérence avec votre fiche Google Business Profile : services, zone d'intervention, avis, photos et lien vers le site.",
        ]}
        sections={[
          {
            title: "Une page locale conçue pour Montbéliard",
            text: "Un prospect qui tape création de site web Montbéliard cherche un prestataire proche, crédible et capable de comprendre son marché. La page présente clairement votre offre, vos services, vos preuves et vos appels à l'action pour transformer cette recherche locale en contact.",
          },
          {
            title: "Un site relié à votre fiche Google Business Profile",
            text: "Votre fiche Google Business Profile validée est un bon départ. Le site doit ensuite confirmer les mêmes signaux : nom de marque, zone de service, description des prestations, lien clair, pages locales et contenus qui expliquent précisément ce que vous proposez à Montbéliard.",
          },
          {
            title: "Une zone locale explicite",
            text: "La stratégie vise Montbéliard et les recherches proches : Pays de Montbéliard, Belfort, Audincourt, Sochaux, Valentigney, Exincourt, Bethoncourt et Héricourt. Ces zones sont intégrées naturellement dans le contenu et les données structurées, sans bourrage de mots-clés.",
          },
          {
            title: "Une architecture prête pour le référencement",
            text: "Le site est construit avec des pages lisibles par Google, des URLs propres, des titres cohérents, une hiérarchie Hn claire, des contenus ciblés et un maillage interne entre l'accueil, les services, les projets, le blog et les pages locales.",
          },
          {
            title: "Une mise en ligne suivie dans Search Console",
            text: "Le projet peut inclure la configuration du domaine, les redirections, le sitemap, l'inspection d'URL, les analytics et les premiers contrôles après publication. Vous savez si Google découvre la page, quels mots-clés progressent et ce qu'il faut améliorer ensuite.",
          },
        ]}
        outcomes={[
          "Aider Google à identifier clairement la page comme réponse à la recherche création de site web Montbéliard.",
          "Donner une image plus professionnelle que les pages sociales seules ou les anciens sites non responsive.",
          "Transformer les visites issues de Google et de votre fiche Business Profile en demandes de devis.",
          "Disposer d'une base évolutive pour ajouter des pages SEO, des cas clients, des avis ou des contenus ciblés.",
        ]}
        serviceAreas={[
          "Montbéliard",
          "Pays de Montbéliard",
          "Belfort",
          "Audincourt",
          "Sochaux",
          "Valentigney",
          "Exincourt",
          "Héricourt",
        ]}
        relatedLinks={[
          {
            href: "/agence-web-montbeliard",
            label: "Agence web Montbéliard",
            description:
              "La page pilier pour comprendre l'accompagnement complet : stratégie, design, développement, SEO et suivi.",
          },
          {
            href: "/creation-site-vitrine",
            label: "Création site vitrine",
            description:
              "Le format le plus adapté pour présenter une activité locale et générer des demandes qualifiées.",
          },
          {
            href: "/blog/creation-site-web-montbeliard-guide-2026",
            label: "Guide création de site web",
            description:
              "Un contenu éditorial pour renforcer la pertinence sur les recherches locales liées à Montbéliard.",
          },
          {
            href: "/projets",
            label: "Réalisations WebCode Studio",
            description:
              "Des exemples de sites, expériences digitales et applications déjà livrés pour rassurer les prospects.",
          },
        ]}
        faq={faq}
      />
    </>
  );
}
