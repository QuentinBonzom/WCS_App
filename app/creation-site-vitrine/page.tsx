import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { SeoServicePage } from "@/components/seo-service-page";
import {
  buildPageMetadata,
  serviceLandingJsonLd,
  seoPages,
  type FaqItem,
} from "@/lib/seo";

const page = seoPages.creationSiteVitrine;

export const metadata: Metadata = buildPageMetadata(page);

const faq: FaqItem[] = [
  {
    question: "À quoi sert un site vitrine professionnel ?",
    answer:
      "Un site vitrine présente votre activité, vos services, vos preuves de confiance et vos moyens de contact. Il sert à rassurer les prospects et à transformer une recherche ou une recommandation en demande concrète.",
  },
  {
    question: "Combien de pages faut-il pour un site vitrine ?",
    answer:
      "Un site vitrine peut commencer avec une page d'accueil, une page services, une page projets ou réalisations, et une page contact. Des pages SEO ciblées peuvent ensuite être ajoutées selon vos offres ou zones géographiques.",
  },
  {
    question: "Un site vitrine peut-il être optimisé pour le SEO ?",
    answer:
      "Oui. Même un site vitrine doit avoir des contenus précis, une structure claire, des performances solides, des balises propres, un sitemap et des pages ciblées pour les recherches prioritaires.",
  },
  {
    question: "Est-ce adapté à une petite entreprise ou un indépendant ?",
    answer:
      "Oui. Un site vitrine est souvent le meilleur point de départ pour un artisan, indépendant, commerce, cabinet ou PME qui veut une présence professionnelle sans construire une application complexe.",
  },
];

export default function CreationSiteVitrinePage() {
  return (
    <>
      <JsonLd
        data={serviceLandingJsonLd({
          page,
          serviceName: "Création de site vitrine professionnel",
          serviceType: "Website design and development",
          faq,
        })}
      />
      <SeoServicePage
        eyebrow="Création site vitrine"
        title={
          <>
            Un site vitrine
            <br />
            qui donne envie.
          </>
        }
        intro="WebCode Studio crée des sites vitrines professionnels pour présenter votre activité, valoriser votre expertise et générer des contacts qualifiés. Chaque page est pensée pour être claire, rapide, crédible et optimisée pour Google."
        primaryKeyword="création site vitrine"
        proofPoints={[
          "Une présentation claire de vos services, de votre valeur ajoutée et de vos preuves de confiance.",
          "Une expérience responsive premium pour que votre site reste crédible sur mobile comme sur desktop.",
          "Une base SEO solide pour préparer l'indexation, le maillage interne et les futures pages ciblées.",
        ]}
        sections={[
          {
            title: "Un site qui explique votre offre simplement",
            text: "Un bon site vitrine doit répondre vite aux questions essentielles : ce que vous faites, pour qui, avec quels bénéfices, quelles preuves et comment vous contacter. La clarté commerciale passe avant l'effet de style.",
          },
          {
            title: "Des pages structurées pour convertir",
            text: "Accueil, services, réalisations, témoignages, FAQ et contact doivent former un parcours logique. Le visiteur doit pouvoir comprendre, comparer, se rassurer et agir sans effort.",
          },
          {
            title: "Une qualité technique qui se voit dans l'usage",
            text: "Temps de chargement, accessibilité, responsive, qualité des images, balises, formulaires et sécurité jouent sur la confiance. Un site vitrine professionnel doit être stable et agréable dès la première visite.",
          },
          {
            title: "Une base évolutive pour votre visibilité",
            text: "Le site peut ensuite accueillir des pages locales, des pages services, des articles, des cas clients ou des optimisations SEO. Cela permet de développer la visibilité sans reconstruire le projet à zéro.",
          },
        ]}
        outcomes={[
          "Présenter votre entreprise de façon professionnelle quand un prospect vous cherche sur Google.",
          "Remplacer une présence dispersée par un point central maîtrisé : services, réalisations, contact et crédibilité.",
          "Recevoir plus de demandes qualifiées grâce à un formulaire clair et des appels à l'action cohérents.",
          "Préparer votre référencement naturel avec une structure propre et des contenus faciles à enrichir.",
        ]}
        faq={faq}
      />
    </>
  );
}
