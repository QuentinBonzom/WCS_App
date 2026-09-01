import { Fragment } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/motion";
import { ContactForm } from "@/components/ui/contact-form";
import { JsonLd } from "@/components/ui/json-ld";
import { buildPageMetadata, contactJsonLd, getSeoPage } from "@/lib/seo";
import { localizeHref, type Locale } from "@/lib/i18n";
import { contactContent } from "@/content/pages/contact";

export const metadata: Metadata = buildPageMetadata(getSeoPage("contact"), "fr");

export function ContactPage({ locale = "fr" }: { locale?: Locale }) {
  const t = contactContent[locale];

  return (
    <main>
      <JsonLd data={contactJsonLd(locale)} />
      <header className="bg-fog px-6 pb-20 pt-36 text-center">
        <Reveal>
          <span className="mb-3 block text-2xl font-semibold tracking-tight text-azure">
            {t.eyebrow}
          </span>
          <h1 className="text-[clamp(48px,9vw,96px)] font-bold leading-[1.04] tracking-[-0.022em]">
            {t.titleLines.map((line, index) => (
              <Fragment key={line}>
                {index > 0 && <br />}
                {line}
              </Fragment>
            ))}
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
                  href={localizeHref("/creation-site-internet-montbeliard", locale)}
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
