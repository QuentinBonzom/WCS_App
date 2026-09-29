import type { Metadata } from "next";
import Link from "next/link";
import { Reveal, Magnetic } from "@/components/motion";
import { ProjectsRing } from "@/components/sections/projects-ring";
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
      <ProjectsRing
        projects={t.projects}
        labels={{
          eyebrow: t.headerEyebrow,
          titleLines: t.titleLines,
          text: t.headerText,
          hint: t.ringHint,
          imageAlt: t.imageAlt,
          open: t.openProject,
          close: t.close,
          temporary: t.temporary,
          temporaryButton: t.temporaryButton,
          visitButton: t.visitButton,
          appBadge: t.appBadge,
          appStoreButton: t.appStoreButton,
        }}
      />

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
