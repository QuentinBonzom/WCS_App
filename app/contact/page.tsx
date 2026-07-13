import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/motion-primitives";
import { ContactForm } from "@/components/contact-form";
import { JsonLd } from "@/components/json-ld";
import { buildPageMetadata, contactJsonLd, getSeoPage } from "@/lib/seo";
import { localizeHref, type Locale } from "@/lib/i18n";

export const metadata: Metadata = buildPageMetadata(getSeoPage("contact"), "fr");

const contactCopy = {
  fr: {
    eyebrow: "Contact",
    title: (
      <>
        Devis site web
        <br />
        sur mesure.
      </>
    ),
    intro:
      "Prêt à créer votre site internet, application mobile ou refonte SEO ?",
    infoTitle: "Informations de contact",
    infoText:
      "Nous travaillons avec des clients du monde entier et garantissons une réponse rapide.",
    locationTitle: "Localisation & expertise",
    locationTextBefore:
      "Basé à Montbéliard, France - au cœur du territoire de Belfort-Montbéliard, avec une expertise dédiée à la",
    locationLink: "création de site web à Montbéliard",
    areasTitle: "Zones d'intervention",
    areasText:
      "Services digitaux disponibles dans toute la France et aux États-Unis. Collaboration à distance optimisée.",
    available: "Disponible · Monde entier",
  },
  en: {
    eyebrow: "Contact",
    title: (
      <>
        Custom website
        <br />
        quote.
      </>
    ),
    intro: "Ready to create your website, mobile app or SEO redesign?",
    infoTitle: "Contact information",
    infoText:
      "We work with clients worldwide and guarantee a fast response.",
    locationTitle: "Location & expertise",
    locationTextBefore:
      "Based in Montbéliard, France - in the Belfort-Montbéliard area, with dedicated expertise in",
    locationLink: "website creation in Montbéliard",
    areasTitle: "Service areas",
    areasText:
      "Digital services available across France and the United States. Remote collaboration is fully optimized.",
    available: "Available · Worldwide",
  },
} as const satisfies Record<Locale, object>;

export function ContactPage({ locale = "fr" }: { locale?: Locale }) {
  const t = contactCopy[locale];

  return (
    <main>
      <JsonLd data={contactJsonLd(locale)} />
      <header className="bg-fog px-6 pb-20 pt-36 text-center">
        <Reveal>
          <span className="mb-3 block text-2xl font-semibold tracking-tight text-azure">
            {t.eyebrow}
          </span>
          <h1 className="text-[clamp(48px,9vw,96px)] font-bold leading-[1.04] tracking-[-0.022em]">
            {t.title}
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-xl font-light">
            {t.intro}
          </p>
        </Reveal>
      </header>

      <section className="bg-fog px-6 pb-32 pt-12">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-start gap-12 md:grid-cols-[1.1fr_0.9fr]">
          <Reveal dir="left">
            <ContactForm locale={locale} />
          </Reveal>

          <Reveal dir="right" className="flex flex-col gap-8">
            <div>
              <h3 className="mb-2 text-xl font-semibold tracking-tight">
                {t.infoTitle}
              </h3>
              <p className="mb-3 text-[17px] text-graphite">
                {t.infoText}
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
                {t.locationTitle}
              </h3>
              <p className="text-[17px] text-graphite">
                {t.locationTextBefore}{" "}
                <Link
                  href={localizeHref("/creation-site-web-montbeliard", locale)}
                  className="text-cobalt hover:underline"
                >
                  {t.locationLink}
                </Link>
                .
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-xl font-semibold tracking-tight">
                {t.areasTitle}
              </h3>
              <p className="mb-3 text-[17px] text-graphite">
                {t.areasText}
              </p>
              <span className="inline-flex items-center gap-2 rounded-full bg-silver px-4 py-2 text-sm text-slate">
                <span className="h-2 w-2 rounded-full bg-[#34c759]" /> {t.available}
              </span>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

export default function ContactPageRoute() {
  return <ContactPage locale="fr" />;
}
