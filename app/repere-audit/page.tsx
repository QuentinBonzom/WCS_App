import type { Metadata } from "next";
import Link from "next/link";
import {
  Reveal,
  Magnetic,
  Marquee,
  StaggerGroup,
  StaggerItem,
} from "@/components/motion-primitives";
import { TiltCard } from "@/components/tilt-card";
import { JsonLd } from "@/components/json-ld";
import {
  buildPageMetadata,
  serviceLandingJsonLd,
  seoPages,
  type FaqItem,
} from "@/lib/seo";

const page = seoPages.repereAudit;

export const metadata: Metadata = buildPageMetadata(page);

/* Exemple de rapport — illustratif, sans score chiffré */
const reportCriteria: { label: string; ok: boolean }[] = [
  { label: "Images sans alternative textuelle", ok: false },
  { label: "Contrastes insuffisants au paiement", ok: false },
  { label: "Tunnel d'achat non navigable au clavier", ok: false },
  { label: "Structure des titres correcte", ok: true },
  { label: "Déclaration d'accessibilité absente", ok: false },
];

/* Faits réglementaires vérifiables uniquement */
const stats: { num: string; lbl: string }[] = [
  { num: "28 juin 2025", lbl: "entrée en application des nouvelles exigences d'accessibilité pour les produits et services couverts" },
  { num: "106", lbl: "critères de contrôle RGAA utilisés pour auditer les interfaces web" },
  { num: "Suivi", lbl: "informations de conformité, procédures et mesures correctives à organiser" },
];

const steps: { step: string; title: string; items: string[] }[] = [
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
];

/* Tarifs — modifiables ici. Passez une "price" à "Sur devis" pour masquer un montant. */
const tiers: {
  who: string;
  price: string;
  note?: string;
  features: string[];
  cta: string;
  featured?: boolean;
}[] = [
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
];

const faq: FaqItem[] = [
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
];

export default function RepereAuditPage() {
  return (
    <main>
      <JsonLd
        data={serviceLandingJsonLd({
          page,
          serviceName: "Repère — mise en conformité accessibilité numérique",
          serviceType: "Accessibility compliance audit",
          faq,
        })}
      />

      {/* HERO */}
      <header className="bg-fog px-6 pb-24 pt-40">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <span className="mb-3 block text-2xl font-semibold tracking-tight text-azure">
              European Accessibility Act · en vigueur
            </span>
            <h1 className="text-[clamp(40px,7vw,80px)] font-bold leading-[1.04] tracking-[-0.022em]">
              Votre site est-il hors conformité sans le savoir&nbsp;?
            </h1>
            <p className="mt-6 max-w-xl text-xl font-light leading-relaxed text-graphite">
              Depuis le 28 juin 2025, de nouvelles exigences s&apos;appliquent à
              plusieurs services numériques privés. Repère audite, corrige et
              documente votre site ou votre application. Vous avancez vers une
              conformité claire, preuves à l&apos;appui.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Magnetic>
                <Link
                  href="/contact"
                  className="inline-flex rounded-full bg-azure px-6 py-3 text-xl text-white transition-colors hover:bg-[#0077ed]"
                >
                  Lancer mon audit
                </Link>
              </Magnetic>
              <Link
                href="#methode"
                className="inline-flex rounded-full border border-silver bg-snow px-6 py-3 text-xl text-ink transition-colors hover:border-ink"
              >
                Voir la méthode
              </Link>
            </div>
            <p className="mt-6 text-[15px] leading-relaxed text-graphite">
              Non-conformité&nbsp;:{" "}
              <span className="font-semibold text-caution">
                contrôles, sanctions et mesures correctives possibles
              </span>
              selon le régime applicable.
            </p>
          </Reveal>

          {/* Exemple de rapport (illustratif, sans score chiffré) */}
          <Reveal dir="zoom" delay={0.1}>
            <div
              className="rounded-[28px] bg-ink p-7 text-snow shadow-[0_30px_60px_-28px_rgba(29,29,31,0.55)]"
              aria-label="Exemple de rapport de conformité"
            >
              <div className="flex items-center justify-between border-b border-white/15 pb-4">
                <span className="flex items-center gap-2 text-sm text-white/75">
                  <span className="h-2 w-2 rounded-full bg-azure" aria-hidden />
                  exemple de rapport · votre-boutique.fr
                </span>
                <span className="text-xs font-semibold text-white/60">
                  RGAA
                </span>
              </div>
              <ul className="mt-2">
                {reportCriteria.map((c) => (
                  <li
                    key={c.label}
                    className="flex items-center gap-3 border-b border-white/10 py-3 text-[15px] text-white/90 last:border-0"
                  >
                    <span
                      aria-hidden
                      className={`grid h-6 w-6 shrink-0 place-items-center rounded-full text-sm font-semibold ${
                        c.ok
                          ? "bg-[#1f7a53]/25 text-[#7be0ae]"
                          : "bg-[#b23a2e]/25 text-[#ff9c8f]"
                      }`}
                    >
                      {c.ok ? "✓" : "✕"}
                    </span>
                    {c.label}
                  </li>
                ))}
              </ul>
              <div className="mt-5 rounded-2xl border border-azure/40 bg-azure/15 px-4 py-3 text-[15px] text-white/85">
                Rapport priorisé par impact et par risque — chaque manquement est
                relié à son exposition réglementaire.
              </div>
            </div>
          </Reveal>
        </div>
      </header>

      {/* STATS / ENJEU — faits réglementaires vérifiables */}
      <section className="bg-snow px-6 py-24">
        <div className="mx-auto max-w-[1200px]">
          <Reveal className="mb-12 max-w-3xl">
            <span className="mb-3 block text-2xl font-semibold tracking-tight text-azure">
              Pourquoi maintenant
            </span>
            <h2 className="text-[clamp(32px,4.5vw,48px)] font-bold leading-[1.1] tracking-[-0.016em]">
              La règle a changé. Le périmètre s&apos;est élargi au privé.
            </h2>
            <p className="mt-5 text-xl font-light leading-relaxed text-graphite">
              Aux obligations déjà existantes pour le secteur public et certaines
              grandes structures s&apos;ajoutent désormais les produits et services
              couverts par l&apos;European Accessibility Act.
            </p>
          </Reveal>

          <StaggerGroup className="grid grid-cols-1 gap-px overflow-hidden rounded-[28px] border border-silver bg-silver md:grid-cols-3">
            {stats.map((s) => (
              <StaggerItem key={s.num} className="bg-snow p-8">
                <div className="font-mono text-[clamp(34px,5vw,44px)] font-bold tracking-tight text-azure">
                  {s.num}
                </div>
                <p className="mt-3 text-[15px] leading-relaxed text-graphite">
                  {s.lbl}
                </p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* MÉTHODE */}
      <section id="methode" className="bg-fog px-6 py-28">
        <div className="mx-auto max-w-[1200px]">
          <Reveal className="mb-14 max-w-3xl">
            <span className="mb-3 block text-2xl font-semibold tracking-tight text-azure">
              Notre méthode
            </span>
            <h2 className="text-[clamp(32px,4.5vw,48px)] font-bold leading-[1.1] tracking-[-0.016em]">
              Trois étapes, zéro jargon, une conformité prouvée.
            </h2>
            <p className="mt-5 text-xl font-light leading-relaxed text-graphite">
              On combine l&apos;audit automatisé pour la vitesse et la revue
              manuelle pour la fiabilité, puis on corrige et on documente.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
            {steps.map((s, i) => (
              <Reveal key={s.title} dir="zoom" delay={i * 0.1}>
                <div className="h-full rounded-[28px] bg-snow p-8">
                  <span className="block text-sm font-semibold uppercase tracking-wide text-azure">
                    {s.step}
                  </span>
                  <h3 className="mt-2 text-2xl font-semibold tracking-tight">
                    {s.title}
                  </h3>
                  <ul className="mt-5 space-y-2.5">
                    {s.items.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-[15px] leading-relaxed text-graphite"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-azure" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Marquee
        items={[
          "AUDIT RGAA",
          "REMÉDIATION",
          "CONTRASTES",
          "NAVIGATION CLAVIER",
          "LECTEURS D'ÉCRAN",
          "DÉCLARATION D'ACCESSIBILITÉ",
        ]}
      />

      {/* TARIFS */}
      <section className="bg-snow px-6 py-28">
        <div className="mx-auto max-w-[1200px]">
          <Reveal className="mb-12 max-w-3xl">
            <span className="mb-3 block text-2xl font-semibold tracking-tight text-azure">
              Tarifs
            </span>
            <h2 className="text-[clamp(32px,4.5vw,48px)] font-bold leading-[1.1] tracking-[-0.016em]">
              Une formule pour chaque taille d&apos;organisation.
            </h2>
            <p className="mt-5 text-xl font-light leading-relaxed text-graphite">
              Audit au prix fixe, remédiation au devis, puis un abonnement annuel
              qui maintient votre conformité dans le temps.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
            {tiers.map((t, i) => (
              <Reveal key={t.who} dir="zoom" delay={i * 0.08}>
                <TiltCard
                  className={`relative flex h-full flex-col rounded-[28px] p-8 ${
                    t.featured
                      ? "bg-black text-white"
                      : "border border-silver bg-fog"
                  }`}
                >
                  {t.featured && (
                    <span className="absolute right-8 top-8 rounded-full bg-azure px-3 py-1 text-xs font-semibold text-white">
                      Le plus demandé
                    </span>
                  )}
                  <span
                    className={`text-sm font-semibold uppercase tracking-wide ${
                      t.featured ? "text-white/70" : "text-graphite"
                    }`}
                  >
                    {t.who}
                  </span>
                  <div className="mt-3 text-[clamp(30px,4vw,40px)] font-bold tracking-tight">
                    {t.price}
                    {t.note && (
                      <span
                        className={`ml-2 text-base font-medium ${
                          t.featured ? "text-white/60" : "text-graphite"
                        }`}
                      >
                        {t.note}
                      </span>
                    )}
                  </div>
                  <ul className="mt-6 mb-8 flex-1 space-y-2.5">
                    {t.features.map((f) => (
                      <li
                        key={f}
                        className={`flex gap-3 text-[15px] leading-relaxed ${
                          t.featured ? "text-white/80" : "text-slate"
                        }`}
                      >
                        <span
                          className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${
                            t.featured ? "bg-white/70" : "bg-azure"
                          }`}
                        />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`inline-flex justify-center rounded-full px-6 py-3 text-[17px] transition-colors ${
                      t.featured
                        ? "bg-white text-ink hover:bg-azure hover:text-white"
                        : "bg-azure text-white hover:bg-[#0077ed]"
                    }`}
                  >
                    {t.cta}
                  </Link>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-fog px-6 py-28">
        <div className="mx-auto max-w-[900px]">
          <Reveal className="mb-12 text-center">
            <span className="mb-3 block text-2xl font-semibold tracking-tight text-azure">
              FAQ
            </span>
            <h2 className="text-[clamp(32px,4.5vw,48px)] font-bold leading-[1.1] tracking-[-0.016em]">
              Questions fréquentes.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 gap-3">
            {faq.map((item) => (
              <Reveal key={item.question}>
                <article className="rounded-[28px] bg-snow p-7">
                  <h3 className="text-xl font-semibold tracking-tight">
                    {item.question}
                  </h3>
                  <p className="mt-3 text-[17px] leading-relaxed text-graphite">
                    {item.answer}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-snow px-6 py-32 text-center">
        <Reveal>
          <span className="mb-3 block text-2xl font-semibold tracking-tight text-azure">
            Premier pas
          </span>
          <h2 className="mx-auto max-w-3xl text-[clamp(40px,8vw,80px)] font-bold leading-[1.04] tracking-[-0.022em]">
            Savoir où vous en êtes.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-xl font-light text-graphite">
            On vous renvoie un premier état des lieux de votre exposition
            réglementaire. Sans engagement, réponse sous 48h.
          </p>
          <Magnetic className="mt-8">
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-azure px-6 py-3 text-xl text-white transition-colors hover:bg-[#0077ed]"
            >
              Demander mon état des lieux
            </Link>
          </Magnetic>
        </Reveal>
      </section>
    </main>
  );
}
