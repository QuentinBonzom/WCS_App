import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { SeoServicePage } from "@/components/seo-service-page";
import {
  buildPageMetadata,
  serviceLandingJsonLd,
  seoPages,
  type FaqItem,
} from "@/lib/seo";

const page = seoPages.agenceWebMontbeliard;

export const metadata: Metadata = buildPageMetadata(page);

const faq: FaqItem[] = [
  {
    question: "Pourquoi choisir une agence web à Montbéliard ?",
    answer:
      "Une agence locale comprend mieux le territoire, les attentes des entreprises régionales et les recherches autour de Montbéliard ou Belfort. Cela facilite aussi les échanges et le cadrage du projet.",
  },
  {
    question: "WebCode Studio fait-il seulement des sites vitrines ?",
    answer:
      "Non. Le studio intervient aussi sur les applications mobiles, interfaces UI/UX, refontes, optimisation SEO, maintenance et accompagnement digital selon les besoins du projet.",
  },
  {
    question: "Pouvez-vous reprendre un site existant ?",
    answer:
      "Oui. Une refonte peut partir d'un site existant si l'objectif est de moderniser l'image, améliorer les performances, clarifier l'offre, corriger les bases SEO ou augmenter les conversions.",
  },
  {
    question: "Comment se déroule le premier échange ?",
    answer:
      "Le premier échange sert à comprendre votre activité, vos objectifs, votre cible, vos contraintes et vos délais. Ensuite, vous recevez une recommandation claire et un devis adapté au périmètre.",
  },
];

export default function AgenceWebMontbeliardPage() {
  return (
    <>
      <JsonLd
        data={serviceLandingJsonLd({
          page,
          serviceName: "Agence web à Montbéliard",
          serviceType: "Digital agency",
          faq,
        })}
      />
      <SeoServicePage
        eyebrow="Agence web Montbéliard"
        title={
          <>
            Une agence web
            <br />
            orientée résultats.
          </>
        }
        intro="WebCode Studio accompagne les entreprises de Montbéliard et du secteur Belfort-Montbéliard dans la création, la refonte et l'optimisation de leur présence digitale : site internet, application mobile, UI/UX et SEO."
        primaryKeyword="agence web Montbéliard"
        proofPoints={[
          "Un interlocuteur technique capable de cadrer, concevoir, développer et optimiser votre présence digitale.",
          "Une approche sur mesure : pas de modèle générique plaqué sur votre activité, mais une structure adaptée à vos objectifs.",
          "Un suivi concret après la mise en ligne : performance, SEO, maintenance, ajouts de pages et amélioration continue.",
        ]}
        sections={[
          {
            title: "Une stratégie avant la production",
            text: "Le projet commence par vos objectifs : générer des demandes, présenter une expertise, recruter, vendre une prestation ou moderniser votre image. La structure du site découle de cette stratégie, pas d'un simple choix esthétique.",
          },
          {
            title: "Un niveau d'exécution premium",
            text: "Design, développement, responsive, animations, performance et SEO sont traités ensemble. L'objectif est d'obtenir une expérience crédible et fluide, pas seulement une vitrine visuelle.",
          },
          {
            title: "Un partenaire pour les entreprises locales",
            text: "Les requêtes locales comme agence web Montbéliard, création site internet Montbéliard ou développeur web Montbéliard demandent un contenu ciblé, une base technique propre et des signaux de confiance cohérents.",
          },
          {
            title: "Une vision long terme du site",
            text: "Un bon site doit pouvoir évoluer : nouvelles pages services, cas clients, contenus SEO, suivi analytics, améliorations UX, automatisations ou connexion à des outils métier. La base est pensée pour ne pas bloquer ces évolutions.",
          },
        ]}
        outcomes={[
          "Clarifier votre positionnement avec une présence digitale plus professionnelle et cohérente.",
          "Améliorer la visibilité locale sur les recherches liées à Montbéliard, Belfort et votre zone d'intervention.",
          "Réduire la friction entre la visite du site et la prise de contact avec des messages et CTA mieux placés.",
          "Garder un partenaire technique disponible pour faire évoluer le site après le lancement.",
        ]}
        faq={faq}
      />
    </>
  );
}
