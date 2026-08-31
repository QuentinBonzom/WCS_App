import { Fragment } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { FeatureShowcase } from "@/components/sections/feature-showcase";
import { BrowserMock, PhoneMock } from "@/components/ui/device-mock";
import {
  Reveal,
  Marquee,
  Magnetic,
  StaggerGroup,
  StaggerItem,
} from "@/components/motion";
import { TiltCard } from "@/components/ui/tilt-card";
import { ServicesSlideshow } from "@/components/sections/services-slideshow";
import { JsonLd } from "@/components/ui/json-ld";
import { buildPageMetadata, getSeoPage, servicesJsonLd } from "@/lib/seo";
import { getDictionary, localizeHref, type Locale } from "@/lib/i18n";
import { servicesContent } from "@/content/pages/services";

export const metadata: Metadata = buildPageMetadata(getSeoPage("services"), "fr");

/** Visuals for the "more services" cards, merged by index with the localized copy. */
const moreVisuals: { dark: boolean; icon: React.ReactNode }[] = [
  {
    dark: false,
    icon: (
      <>
        <path d="M5 9 H27 L25 23 H7 Z" stroke="#1d1d1f" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M11 13 V8 A5 5 0 0 1 21 8 V13" stroke="#1d1d1f" strokeWidth="1.6" />
      </>
    ),
  },
  {
    dark: false,
    icon: (
      <>
        <circle cx="14" cy="14" r="9" stroke="#1d1d1f" strokeWidth="1.6" />
        <line x1="20.5" y1="20.5" x2="28" y2="28" stroke="#1d1d1f" strokeWidth="1.6" strokeLinecap="round" />
      </>
    ),
  },
  {
    dark: true,
    icon: (
      <>
        <circle cx="16" cy="16" r="4" stroke="#fff" strokeWidth="1.6" />
        <path d="M16 3 V8 M16 24 V29 M3 16 H8 M24 16 H29 M6.5 6.5 L10 10 M22 22 L25.5 25.5 M25.5 6.5 L22 10 M10 22 L6.5 25.5" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" />
      </>
    ),
  },
];


export function ServicesPage({ locale = "fr" }: { locale?: Locale }) {
  const t = servicesContent[locale];
  const common = getDictionary(locale).common;
  const localizedMore = t.more.map((item, index) => ({
    ...item,
    ...moreVisuals[index],
  }));

  return (
    <main>
      <JsonLd data={servicesJsonLd(locale)} />
      {/* PAGE HEADER */}
      <header className="bg-fog px-6 pb-24 pt-40 text-center">
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
          <p className="mx-auto mt-5 max-w-xl text-xl font-light text-graphite">
            {t.headerText}
          </p>
          <Magnetic className="mt-8">
            <Link
              href="#showcases"
              className="inline-flex rounded-full bg-azure px-6 py-3 text-xl text-white transition-colors hover:bg-[#0077ed]"
            >
              {t.discover}
            </Link>
          </Magnetic>
        </Reveal>
      </header>

      {/* INTERACTIVE SERVICES SLIDESHOW (visual intro) */}
      <ServicesSlideshow locale={locale} />

      {/* FEATURE SHOWCASES (light 2-column splits, alternating bands) */}
      <div id="showcases">
        <FeatureShowcase
          index={t.showcases[0].index}
          band="snow"
          eyebrow={t.showcases[0].eyebrow}
          title={t.showcases[0].title}
          sub={t.showcases[0].sub}
          tags={[...t.showcases[0].tags]}
          href={localizeHref("/creation-site-web-montbeliard", locale)}
          linkLabel={t.showcases[0].linkLabel}
        >
          <BrowserMock
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=70"
            alt={t.showcases[0].alt ?? ""}
          />
        </FeatureShowcase>

        <FeatureShowcase
          index={t.showcases[1].index}
          band="fog"
          eyebrow={t.showcases[1].eyebrow}
          title={t.showcases[1].title}
          sub={t.showcases[1].sub}
          tags={[...t.showcases[1].tags]}
          href={localizeHref("/contact", locale)}
          linkLabel={t.showcases[1].linkLabel}
          reverse
        >
          <PhoneMock
            src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=70"
            alt={t.showcases[1].alt ?? ""}
          />
        </FeatureShowcase>

        <FeatureShowcase
          index={t.showcases[2].index}
          band="snow"
          eyebrow={t.showcases[2].eyebrow}
          title={t.showcases[2].title}
          sub={t.showcases[2].sub}
          tags={[...t.showcases[2].tags]}
          href={localizeHref("/contact", locale)}
          linkLabel={t.showcases[2].linkLabel}
        >
          <BrowserMock
            src="https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&w=1200&q=70"
            alt={t.showcases[2].alt ?? ""}
          />
        </FeatureShowcase>

        <FeatureShowcase
          index={t.showcases[3].index}
          band="fog"
          eyebrow={t.showcases[3].eyebrow}
          title={t.showcases[3].title}
          sub={t.showcases[3].sub}
          tags={[...t.showcases[3].tags]}
          href={localizeHref("/repere-audit", locale)}
          linkLabel={t.showcases[3].linkLabel}
          reverse
        >
          <div className="w-full max-w-[420px] rounded-[24px] bg-ink p-5 text-snow shadow-[0_24px_60px_-32px_rgba(29,29,31,0.65)]">
            <div className="flex items-center justify-between border-b border-white/15 pb-4">
              <span className="text-sm text-white/70">repere.audit</span>
              <span className="rounded-full bg-azure/20 px-3 py-1 text-xs font-semibold text-[#8ec5ff]">
                RGAA
              </span>
            </div>
            <div className="mt-5 space-y-3">
              {t.accessibilityPreviewRows.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between gap-4 rounded-2xl bg-white/[0.08] px-4 py-3"
                >
                  <span className="text-[15px] text-white/90">{item.label}</span>
                  <span className="text-sm font-medium text-[#8ec5ff]">
                    {item.state}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </FeatureShowcase>
      </div>

      {/* MARQUEE */}
      <Marquee
        items={[...t.marquee]}
      />

      {/* PROCESS */}
      <section className="bg-fog px-6 py-32">
        <div className="mx-auto max-w-[1200px]">
          <Reveal className="mb-14 max-w-3xl">
            <span className="mb-3 block text-2xl font-semibold tracking-tight text-azure">
              {t.processEyebrow}
            </span>
            <h2 className="text-[clamp(32px,4.5vw,40px)] font-bold leading-[1.17] tracking-[-0.015em]">
              {t.processTitle}
            </h2>
          </Reveal>

          <StaggerGroup className="grid grid-cols-1 gap-px overflow-hidden rounded-[28px] border border-silver bg-silver sm:grid-cols-2 lg:grid-cols-4">
            {t.process.map((p) => (
              <StaggerItem key={p.n} className="bg-snow p-8">
                <span className="block font-mono text-sm text-azure">{p.n}</span>
                <h3 className="mt-6 text-2xl font-semibold tracking-tight">
                  {p.t}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-graphite">
                  {p.d}
                </p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* MORE SERVICES */}
      <section className="bg-snow px-6 py-32">
        <div className="mx-auto max-w-[1200px]">
          <Reveal className="mb-12 max-w-3xl">
            <span className="mb-3 block text-2xl font-semibold tracking-tight">
              {t.moreEyebrow}
            </span>
            <h2 className="text-[clamp(32px,4.5vw,40px)] font-bold leading-[1.17] tracking-[-0.015em]">
              {t.moreTitle}
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
            {localizedMore.map((m, i) => (
              <Reveal key={m.title} dir="zoom" delay={i * 0.1}>
                <TiltCard
                  className={`relative h-full rounded-[28px] p-7 ${
                    m.dark ? "bg-black text-white" : "bg-fog"
                  }`}
                >
                  {m.badge && (
                    <span className="absolute right-7 top-7 text-xs font-semibold text-caution">
                      {m.badge}
                    </span>
                  )}
                  <svg viewBox="0 0 32 32" fill="none" className="mb-5 h-10 w-10">
                    {m.icon}
                  </svg>
                  <h3 className="mb-2 text-2xl font-semibold tracking-tight">
                    {m.title}
                  </h3>
                  <p className={`mb-4 text-[17px] ${m.dark ? "text-white/70" : "text-graphite"}`}>
                    {m.desc}
                  </p>
                  <ul className={`flex flex-wrap gap-2 text-xs ${m.dark ? "text-white/70" : "text-graphite"}`}>
                    {m.tags.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TARGETED PAGES */}
      <section className="bg-fog px-6 py-28">
        <div className="mx-auto max-w-[1200px]">
          <Reveal className="mb-12 max-w-3xl">
            <span className="mb-3 block text-2xl font-semibold tracking-tight text-azure">
              {t.targetedEyebrow}
            </span>
            <h2 className="text-[clamp(32px,4.5vw,40px)] font-bold leading-[1.17] tracking-[-0.015em]">
              {t.targetedTitle}
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
            {t.targetedPages.map((page) => (
              <Reveal key={page.href} dir="zoom">
                <Link
                  href={localizeHref(page.href, locale)}
                  className="block h-full rounded-[28px] bg-snow p-7 transition-transform hover:-translate-y-1"
                >
                  <h3 className="mb-3 text-2xl font-semibold tracking-tight">
                    {page.title}
                  </h3>
                  <p className="text-[17px] leading-relaxed text-graphite">
                    {page.desc}
                  </p>
                  <span className="mt-5 inline-block text-[17px] text-cobalt">
                    {common.readPage} ›
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-fog px-6 py-32 text-center">
        <Reveal>
          <span className="mb-3 block text-2xl font-semibold tracking-tight text-azure">
            {t.ctaEyebrow}
          </span>
          <h2 className="text-[clamp(48px,9vw,96px)] font-bold leading-[1.04] tracking-[-0.022em]">
            {t.ctaTitle}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-xl font-light">
            {common.freeConsultation} • {common.customQuote} • {common.response24}
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

export default function ServicesPageRoute() {
  return <ServicesPage locale="fr" />;
}
