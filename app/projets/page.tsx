import { Fragment } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal, Magnetic } from "@/components/motion";
import { TiltCard } from "@/components/ui/tilt-card";
import { JsonLd } from "@/components/ui/json-ld";
import { buildPageMetadata, getSeoPage, projectsJsonLd } from "@/lib/seo";
import { getDictionary, localizeHref, type Locale } from "@/lib/i18n";
import { projetsContent } from "@/content/pages/projets";

export const metadata: Metadata = buildPageMetadata(getSeoPage("projects"), "fr");

export function ProjetsPage({ locale = "fr" }: { locale?: Locale }) {
  const t = projetsContent[locale];
  const common = getDictionary(locale).common;

  return (
    <main>
      <JsonLd data={projectsJsonLd(locale)} />
      <header className="bg-fog px-6 pb-20 pt-36 text-center">
        <Reveal>
          <span className="mb-3 block text-2xl font-semibold tracking-tight text-azure">
            {t.headerEyebrow}
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
            {t.headerText}
          </p>
        </Reveal>
      </header>

      <section className="bg-fog px-6 pb-32 pt-12">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-5 md:grid-cols-2">
          {t.projects.map((p, i) => (
            <Reveal key={p.title} dir="zoom" delay={i * 0.1}>
              <TiltCard className="group h-full overflow-hidden rounded-[28px] bg-snow">
                <div className="relative aspect-[16/10] overflow-hidden bg-silver">
                  <Image
                    src={p.img}
                    alt={`${t.imageAlt} ${p.title}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 600px"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-7">
                  <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wide">
                    <span className="text-azure">{p.cat}</span>
                    <span className="h-1 w-1 rounded-full bg-silver" />
                    <span className="text-graphite">{p.location}</span>
                    {p.temporary ? (
                      <>
                        <span className="h-1 w-1 rounded-full bg-silver" />
                        <span className="rounded-full bg-azure/10 px-2 py-1 text-[10px] text-azure">
                          {t.temporary}
                        </span>
                      </>
                    ) : null}
                  </div>
                  <h3 className="my-2 text-2xl font-semibold tracking-tight">
                    {p.title}
                  </h3>
                  <p className="mb-4 text-[15px] leading-relaxed text-graphite">{p.desc}</p>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-[17px] text-cobalt hover:underline"
                  >
                    {p.temporary ? t.temporaryButton : t.visitButton}{" "}
                    <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-snow px-6 py-24">
        <div className="mx-auto max-w-[1200px]">
          <Reveal>
            <h2 className="text-[clamp(28px,4vw,40px)] font-bold leading-[1.15] tracking-[-0.015em]">
              {t.similar.heading}
            </h2>
            <p className="mt-4 max-w-xl text-xl font-light text-graphite">
              {t.similar.text}
            </p>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[17px]">
              {t.similar.links.map((link) => (
                <Link
                  key={link.href}
                  href={localizeHref(link.href, locale)}
                  className="text-cobalt hover:underline"
                >
                  {link.label} ›
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-fog px-6 py-32 text-center">
        <Reveal>
          <span className="mb-3 block text-2xl font-semibold tracking-tight text-azure">
            {t.ctaEyebrow}
          </span>
          <h2 className="text-[clamp(48px,9vw,96px)] font-bold leading-[1.04] tracking-[-0.022em]">
            {t.ctaTitle}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-xl font-light">
            {t.ctaText}
          </p>
          <Magnetic className="mt-8">
            <Link
              href={localizeHref("/contact", locale)}
              className="inline-flex rounded-full bg-azure px-6 py-3 text-xl text-white transition-colors hover:bg-[#0077ed]"
            >
              {common.startProject}
            </Link>
          </Magnetic>
        </Reveal>
      </section>
    </main>
  );
}

export default function ProjetsPageRoute() {
  return <ProjetsPage locale="fr" />;
}
