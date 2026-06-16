import type { Metadata } from "next";
import { Reveal } from "@/components/motion-primitives";
import { ContactForm } from "@/components/contact-form";
import { JsonLd } from "@/components/json-ld";
import { buildPageMetadata, contactJsonLd, seoPages } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata(seoPages.contact);

export default function ContactPage() {
  return (
    <main>
      <JsonLd data={contactJsonLd()} />
      <header className="bg-fog px-6 pb-20 pt-36 text-center">
        <Reveal>
          <span className="mb-3 block text-2xl font-semibold tracking-tight text-azure">
            Contact
          </span>
          <h1 className="text-[clamp(48px,9vw,96px)] font-bold leading-[1.04] tracking-[-0.022em]">
            Devis site web
            <br />
            sur mesure.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-xl font-light">
            Prêt à créer votre site internet, application mobile ou refonte SEO ?
            Écrivez-nous pour recevoir une réponse claire sous 24h.
          </p>
        </Reveal>
      </header>

      <section className="bg-fog px-6 pb-32 pt-12">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-start gap-12 md:grid-cols-[1.1fr_0.9fr]">
          <Reveal dir="left">
            <ContactForm />
          </Reveal>

          <Reveal dir="right" className="flex flex-col gap-8">
            <div>
              <h3 className="mb-2 text-xl font-semibold tracking-tight">
                Informations de contact
              </h3>
              <p className="mb-3 text-[17px] text-graphite">
                Nous travaillons avec des clients du monde entier et garantissons
                une réponse rapide.
              </p>
              <a
                href="mailto:contact@webcodestudio.fr"
                className="text-[17px] text-cobalt hover:underline"
              >
                contact@webcodestudio.fr
              </a>
            </div>

            <div>
              <h3 className="mb-2 text-xl font-semibold tracking-tight">
                Localisation & expertise
              </h3>
              <p className="text-[17px] text-graphite">
                📍 Basé à Montbéliard, France — au cœur du territoire de
                Belfort-Montbéliard, à la frontière de l&apos;innovation
                franco-suisse.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-xl font-semibold tracking-tight">
                Zones d&apos;intervention
              </h3>
              <p className="mb-3 text-[17px] text-graphite">
                Services digitaux disponibles dans toute la France et aux
                États-Unis. Collaboration à distance optimisée.
              </p>
              <span className="inline-flex items-center gap-2 rounded-full bg-silver px-4 py-2 text-sm text-slate">
                <span className="h-2 w-2 rounded-full bg-[#34c759]" /> Disponible ·
                Monde entier
              </span>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
