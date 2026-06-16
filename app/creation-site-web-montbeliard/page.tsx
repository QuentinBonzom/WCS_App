import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { SeoServicePage } from "@/components/seo-service-page";
import {
  buildPageMetadata,
  serviceLandingJsonLd,
  seoPages,
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
        })}
      />
      <SeoServicePage
        eyebrow="Création site web Montbéliard"
        title={
          <>
            Un site web local,
            <br />
            rapide et visible.
          </>
        }
        intro="WebCode Studio crée des sites internet sur mesure pour les entreprises, artisans, indépendants et commerces de Montbéliard. L'objectif : présenter clairement votre activité, rassurer vos prospects et générer plus de demandes qualifiées."
        primaryKeyword="création site web Montbéliard"
        proofPoints={[
          "Un site responsive pensé pour mobile, tablette et desktop, avec une expérience fluide sur chaque écran.",
          "Une base SEO propre : titres, descriptions, structure de contenu, sitemap, données enrichies et performance.",
          "Un accompagnement clair, du cadrage à la mise en ligne, avec un devis personnalisé et une réponse sous 24h.",
        ]}
        sections={[
          {
            title: "Un site aligné avec votre marché local",
            text: "Un prospect qui cherche une entreprise à Montbéliard doit comprendre rapidement qui vous êtes, ce que vous proposez et pourquoi vous contacter. La page d'accueil, les services, les preuves de confiance et les appels à l'action sont structurés pour rendre la prise de contact évidente.",
          },
          {
            title: "Une architecture prête pour le référencement",
            text: "Le site est construit avec des pages lisibles par Google, des URLs propres, des balises cohérentes, des contenus ciblés et une hiérarchie claire. Cette base technique ne remplace pas le travail de contenu sur la durée, mais elle évite de partir avec un handicap.",
          },
          {
            title: "Un design professionnel sans perdre la conversion",
            text: "Un beau site ne suffit pas. Les sections doivent guider le visiteur : comprendre l'offre, voir des preuves, comparer les bénéfices, puis demander un devis. Chaque choix visuel sert l'expérience et la crédibilité de votre entreprise.",
          },
          {
            title: "Une mise en ligne propre et mesurable",
            text: "Le projet peut inclure la configuration du domaine, les redirections, le formulaire de contact, la Search Console, les analytics et les premiers contrôles après publication. Vous savez ce qui fonctionne et ce qu'il faut améliorer ensuite.",
          },
        ]}
        outcomes={[
          "Être trouvé plus facilement par les clients qui recherchent une activité locale à Montbéliard ou dans le secteur Belfort-Montbéliard.",
          "Donner une image plus professionnelle que les pages sociales seules ou les anciens sites non responsive.",
          "Transformer les visites en demandes de devis grâce à une structure claire et des appels à l'action visibles.",
          "Disposer d'une base évolutive pour ajouter des pages SEO, des cas clients ou des contenus ciblés.",
        ]}
        faq={faq}
      />
    </>
  );
}
