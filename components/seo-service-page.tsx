import Link from "next/link";
import { Magnetic, Reveal, StaggerGroup, StaggerItem } from "@/components/motion-primitives";
import type { FaqItem } from "@/lib/seo";

type SeoSection = {
  title: string;
  text: string;
};

type RelatedLink = {
  href: string;
  label: string;
  description: string;
};

type SeoServicePageProps = {
  eyebrow: string;
  title: React.ReactNode;
  intro: string;
  primaryKeyword: string;
  proofPoints: string[];
  sections: SeoSection[];
  outcomes: string[];
  faq: FaqItem[];
  serviceAreas?: string[];
  relatedLinks?: RelatedLink[];
};

export function SeoServicePage({
  eyebrow,
  title,
  intro,
  primaryKeyword,
  proofPoints,
  sections,
  outcomes,
  faq,
  serviceAreas,
  relatedLinks,
}: SeoServicePageProps) {
  return (
    <main>
      <header className="bg-fog px-6 pb-24 pt-40 text-center">
        <Reveal>
          <span className="mb-3 block text-2xl font-semibold tracking-tight text-azure">
            {eyebrow}
          </span>
          <h1 className="mx-auto max-w-5xl text-[clamp(44px,8vw,88px)] font-bold leading-[1.04] tracking-[-0.022em]">
            {title}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl font-light leading-relaxed text-graphite">
            {intro}
          </p>
          <Magnetic className="mt-8">
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-azure px-6 py-3 text-xl text-white transition-colors hover:bg-[#0077ed]"
            >
              Demander un devis
            </Link>
          </Magnetic>
        </Reveal>
      </header>

      <section className="bg-snow px-6 py-20">
        <StaggerGroup className="mx-auto grid max-w-[1200px] grid-cols-1 gap-px overflow-hidden rounded-[28px] border border-silver bg-silver md:grid-cols-3">
          {proofPoints.map((point) => (
            <StaggerItem key={point} className="bg-snow p-8">
              <span className="mb-4 block h-1 w-10 rounded-full bg-azure" />
              <p className="text-[17px] leading-relaxed text-slate">{point}</p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      <section className="bg-fog px-6 py-28">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="lg:sticky lg:top-32 lg:self-start">
            <span className="mb-3 block text-2xl font-semibold tracking-tight text-azure">
              Référencement local
            </span>
            <h2 className="text-[clamp(32px,4.5vw,48px)] font-bold leading-[1.1] tracking-[-0.016em]">
              Une page conçue pour la recherche “{primaryKeyword}”.
            </h2>
            <p className="mt-5 text-xl font-light leading-relaxed text-graphite">
              Le contenu explique clairement l’offre, le périmètre, les livrables
              et les bénéfices. C’est ce que Google et vos prospects doivent
              comprendre rapidement.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-4">
            {sections.map((section, index) => (
              <Reveal key={section.title} dir="zoom" delay={index * 0.08}>
                <article className="rounded-[28px] bg-snow p-8">
                  <h3 className="mb-3 text-2xl font-semibold tracking-tight">
                    {section.title}
                  </h3>
                  <p className="text-[17px] leading-relaxed text-graphite">
                    {section.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {(serviceAreas?.length || relatedLinks?.length) && (
        <section className="bg-snow px-6 py-28">
          <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <span className="mb-3 block text-2xl font-semibold tracking-tight text-azure">
                Maillage local
              </span>
              <h2 className="text-[clamp(32px,4.5vw,48px)] font-bold leading-[1.1] tracking-[-0.016em]">
                Des signaux cohérents autour de {primaryKeyword}.
              </h2>
              <p className="mt-5 text-xl font-light leading-relaxed text-graphite">
                Google doit comprendre la zone visée, les pages importantes et
                le lien entre votre site, vos services et votre présence locale.
              </p>
            </Reveal>

            <div className="grid grid-cols-1 gap-4">
              {serviceAreas?.length ? (
                <Reveal dir="zoom">
                  <article className="rounded-[28px] bg-fog p-8">
                    <h3 className="mb-5 text-2xl font-semibold tracking-tight">
                      Zone travaillée
                    </h3>
                    <ul className="flex flex-wrap gap-2">
                      {serviceAreas.map((area) => (
                        <li
                          key={area}
                          className="rounded-full border border-silver bg-snow px-4 py-2 text-sm text-slate"
                        >
                          {area}
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              ) : null}

              {relatedLinks?.length ? (
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {relatedLinks.map((link, index) => (
                    <Reveal key={link.href} dir="zoom" delay={index * 0.06}>
                      <Link
                        href={link.href}
                        className="block h-full rounded-[28px] bg-fog p-7 transition-colors hover:bg-silver/60"
                      >
                        <h3 className="text-xl font-semibold tracking-tight">
                          {link.label}
                        </h3>
                        <p className="mt-3 text-[15px] leading-relaxed text-graphite">
                          {link.description}
                        </p>
                        <span className="mt-5 inline-block text-[17px] text-cobalt">
                          Lire la page ›
                        </span>
                      </Link>
                    </Reveal>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </section>
      )}

      <section className="bg-snow px-6 py-28">
        <div className="mx-auto max-w-[1200px]">
          <Reveal className="mb-12 max-w-3xl">
            <span className="mb-3 block text-2xl font-semibold tracking-tight text-azure">
              Résultats attendus
            </span>
            <h2 className="text-[clamp(32px,4.5vw,48px)] font-bold leading-[1.1] tracking-[-0.016em]">
              Un site utile avant d’être simplement beau.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            {outcomes.map((outcome) => (
              <Reveal key={outcome} dir="zoom">
                <div className="flex h-full items-start gap-4 rounded-[28px] bg-fog p-7">
                  <span className="mt-1 h-3 w-3 shrink-0 rounded-full bg-azure" />
                  <p className="text-[17px] leading-relaxed text-slate">
                    {outcome}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

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

      <section className="bg-snow px-6 py-32 text-center">
        <Reveal>
          <span className="mb-3 block text-2xl font-semibold tracking-tight text-azure">
            Projet concret
          </span>
          <h2 className="text-[clamp(48px,9vw,88px)] font-bold leading-[1.04] tracking-[-0.022em]">
            Parlons de votre site.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-xl font-light text-graphite">
            Consultation gratuite, cadrage clair et réponse sous 24h.
          </p>
          <Magnetic className="mt-8">
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-azure px-6 py-3 text-xl text-white transition-colors hover:bg-[#0077ed]"
            >
              Démarrer mon projet
            </Link>
          </Magnetic>
        </Reveal>
      </section>
    </main>
  );
}
