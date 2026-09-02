import { Fragment } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Magnetic,
  Marquee,
  Reveal,
  StaggerGroup,
  StaggerItem,
} from "@/components/motion";
import { TiltCard } from "@/components/ui/tilt-card";
import { JsonLd } from "@/components/ui/json-ld";
import {
  buildPageMetadata,
  getSeoPage,
  serviceLandingJsonLd,
  siteConfig,
} from "@/lib/seo";
import { defaultLocale, localizeHref, type Locale } from "@/lib/i18n";
import {
  localLandingContent,
  type LocalLandingKey,
} from "@/content/pages/local-landings";
import { projetsContent } from "@/content/pages/projets";

export function localLandingMetadata(
  pageKey: LocalLandingKey,
  locale: Locale = defaultLocale,
): Metadata {
  return buildPageMetadata(getSeoPage(pageKey, locale), locale);
}

/**
 * Rich local landing page (e.g. /creation-site-internet-montbeliard,
 * /refonte-site-internet-montbeliard). Bespoke layout reusing the site's
 * motion + card primitives. Copy lives in `content/pages/local-landings.ts`.
 */
export function LocalLandingPage({
  pageKey,
  locale = defaultLocale,
}: {
  pageKey: LocalLandingKey;
  locale?: Locale;
}) {
  const page = getSeoPage(pageKey, locale);
  const c = localLandingContent[pageKey][locale];
  const projects = projetsContent[locale].projects.slice(0, 3);
  const contact = localizeHref("/contact", locale);
  const projectsHref = localizeHref("/projets", locale);

  return (
    <main>
      <JsonLd
        data={serviceLandingJsonLd({
          page,
          serviceName: c.serviceName,
          serviceType: c.serviceType,
          faq: c.faq,
          areaServed: siteConfig.localAreas,
          locale,
        })}
      />

      {/* HERO */}
      <header className="bg-fog px-6 pb-24 pt-40 text-center">
        <Reveal>
          <span className="mb-3 block text-2xl font-semibold tracking-tight text-azure">
            {c.hero.eyebrow}
          </span>
          <h1 className="mx-auto max-w-4xl text-[clamp(40px,8vw,84px)] font-bold leading-[1.04] tracking-[-0.022em]">
            {c.hero.titleLines.map((line, i) => (
              <Fragment key={line}>
                {i > 0 && <br />}
                {line}
              </Fragment>
            ))}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl font-light leading-relaxed text-graphite">
            {c.hero.intro}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Magnetic>
              <Link
                href={localizeHref(c.hero.primaryCta.href, locale)}
                className="inline-flex rounded-full bg-azure px-6 py-3 text-xl text-white transition-colors hover:bg-[#0077ed]"
              >
                {c.hero.primaryCta.label}
              </Link>
            </Magnetic>
            <Link
              href={localizeHref(c.hero.secondaryCta.href, locale)}
              className="inline-flex rounded-full border border-silver bg-snow px-6 py-3 text-xl text-ink transition-colors hover:border-ink"
            >
              {c.hero.secondaryCta.label}
            </Link>
          </div>
        </Reveal>
      </header>

      {/* VALUE PROPOSITION */}
      <section className="bg-snow px-6 py-24">
        <div className="mx-auto max-w-[1200px]">
          <Reveal className="mb-12 max-w-3xl">
            <span className="mb-3 block text-2xl font-semibold tracking-tight text-azure">
              {c.value.eyebrow}
            </span>
            <h2 className="text-[clamp(32px,4.5vw,48px)] font-bold leading-[1.1] tracking-[-0.016em]">
              {c.value.heading}
            </h2>
          </Reveal>
          <StaggerGroup className="grid grid-cols-1 gap-3 md:grid-cols-2">
            {c.value.points.map((p) => (
              <StaggerItem key={p.title}>
                <div className="h-full rounded-[28px] bg-fog p-8">
                  <span className="mb-4 block h-1 w-10 rounded-full bg-azure" />
                  <h3 className="mb-2 text-2xl font-semibold tracking-tight">
                    {p.title}
                  </h3>
                  <p className="text-[17px] leading-relaxed text-graphite">
                    {p.text}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* SITE TYPES */}
      <section className="bg-fog px-6 py-24">
        <div className="mx-auto max-w-[1200px]">
          <Reveal className="mb-12 max-w-3xl">
            <span className="mb-3 block text-2xl font-semibold tracking-tight text-azure">
              {c.siteTypes.eyebrow}
            </span>
            <h2 className="text-[clamp(32px,4.5vw,48px)] font-bold leading-[1.1] tracking-[-0.016em]">
              {c.siteTypes.heading}
            </h2>
            <p className="mt-5 text-xl font-light leading-relaxed text-graphite">
              {c.siteTypes.intro}
            </p>
          </Reveal>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            {c.siteTypes.items.map((item, i) => (
              <Reveal key={item.title} dir="zoom" delay={i * 0.06}>
                <TiltCard className="relative h-full rounded-[28px] bg-snow p-8">
                  {item.badge && (
                    <span className="absolute right-7 top-7 rounded-full bg-azure/10 px-3 py-1 text-xs font-semibold text-azure">
                      {item.badge}
                    </span>
                  )}
                  <h3 className="mb-3 text-2xl font-semibold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-[17px] leading-relaxed text-graphite">
                    {item.text}
                  </p>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section className="bg-snow px-6 py-24">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="lg:sticky lg:top-32 lg:self-start">
            <span className="mb-3 block text-2xl font-semibold tracking-tight text-azure">
              {c.advantages.eyebrow}
            </span>
            <h2 className="text-[clamp(32px,4.5vw,48px)] font-bold leading-[1.1] tracking-[-0.016em]">
              {c.advantages.heading}
            </h2>
            <p className="mt-5 text-xl font-light leading-relaxed text-graphite">
              {c.advantages.intro}
            </p>
          </Reveal>
          <ul className="grid grid-cols-1 gap-3">
            {c.advantages.items.map((item) => (
              <Reveal key={item} dir="zoom">
                <li className="flex items-start gap-4 rounded-[28px] bg-fog p-7">
                  <svg viewBox="0 0 24 24" fill="none" className="mt-1 h-5 w-5 shrink-0">
                    <path d="M5 12.5 L10 17.5 L19 7" stroke="#0071e3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-[17px] leading-relaxed text-slate">
                    {item}
                  </span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-fog px-6 py-24">
        <div className="mx-auto max-w-[1200px]">
          <Reveal className="mb-14 max-w-3xl">
            <span className="mb-3 block text-2xl font-semibold tracking-tight text-azure">
              {c.process.eyebrow}
            </span>
            <h2 className="text-[clamp(32px,4.5vw,48px)] font-bold leading-[1.1] tracking-[-0.016em]">
              {c.process.heading}
            </h2>
          </Reveal>
          <StaggerGroup className="grid grid-cols-1 gap-px overflow-hidden rounded-[28px] border border-silver bg-silver sm:grid-cols-2 lg:grid-cols-4">
            {c.process.steps.map((s) => (
              <StaggerItem key={s.step} className="bg-snow p-8">
                <span className="block text-sm font-semibold uppercase tracking-wide text-azure">
                  {s.step}
                </span>
                <h3 className="mt-6 text-2xl font-semibold tracking-tight">
                  {s.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-graphite">
                  {s.text}
                </p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* WORK */}
      <section className="bg-snow px-6 py-24">
        <div className="mx-auto max-w-[1200px]">
          <Reveal className="mb-12 max-w-3xl">
            <span className="mb-3 block text-2xl font-semibold tracking-tight text-azure">
              {c.work.eyebrow}
            </span>
            <h2 className="text-[clamp(32px,4.5vw,48px)] font-bold leading-[1.1] tracking-[-0.016em]">
              {c.work.heading}
            </h2>
            <p className="mt-5 text-xl font-light leading-relaxed text-graphite">
              {c.work.text}
            </p>
          </Reveal>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
            {projects.map((p, i) => (
              <Reveal key={p.title} dir="zoom" delay={i * 0.08}>
                <TiltCard className="group h-full overflow-hidden rounded-[28px] bg-fog">
                  <div className="relative aspect-[16/10] overflow-hidden bg-silver">
                    <Image
                      src={p.img}
                      alt={`Site réalisé pour ${p.title} — ${p.cat}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 400px"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-semibold uppercase tracking-wide text-azure">
                      {p.cat}
                    </span>
                    <h3 className="mt-1 text-xl font-semibold tracking-tight">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-graphite">
                      {p.desc}
                    </p>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-8">
            <Link
              href={projectsHref}
              className="inline-flex text-[17px] text-cobalt hover:underline"
            >
              {c.work.ctaLabel} ›
            </Link>
          </Reveal>
        </div>
      </section>

      <Marquee items={[...c.marquee]} />

      {/* WHY */}
      <section className="bg-fog px-6 py-24">
        <div className="mx-auto max-w-[1200px]">
          <Reveal className="mb-12 max-w-3xl">
            <span className="mb-3 block text-2xl font-semibold tracking-tight text-azure">
              {c.why.eyebrow}
            </span>
            <h2 className="text-[clamp(32px,4.5vw,48px)] font-bold leading-[1.1] tracking-[-0.016em]">
              {c.why.heading}
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
            {c.why.items.map((item, i) => (
              <Reveal key={item.title} dir="zoom" delay={i * 0.08}>
                <div className="h-full rounded-[28px] bg-snow p-8">
                  <h3 className="mb-3 text-2xl font-semibold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-[17px] leading-relaxed text-graphite">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* AREA */}
      <section className="bg-snow px-6 py-24">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <span className="mb-3 block text-2xl font-semibold tracking-tight text-azure">
              {c.area.eyebrow}
            </span>
            <h2 className="text-[clamp(32px,4.5vw,48px)] font-bold leading-[1.1] tracking-[-0.016em]">
              {c.area.heading}
            </h2>
            <p className="mt-5 text-xl font-light leading-relaxed text-graphite">
              {c.area.text}
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-graphite">
              {c.area.note}
            </p>
          </Reveal>
          <Reveal dir="zoom">
            <div className="rounded-[28px] bg-fog p-8">
              <ul className="flex flex-wrap gap-2">
                {siteConfig.localAreas.map((town) => (
                  <li
                    key={town}
                    className="rounded-full border border-silver bg-snow px-4 py-2 text-sm text-slate"
                  >
                    {town}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PRICING APPROACH */}
      <section className="bg-fog px-6 py-24">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="lg:sticky lg:top-32 lg:self-start">
            <span className="mb-3 block text-2xl font-semibold tracking-tight text-azure">
              {c.pricing.eyebrow}
            </span>
            <h2 className="text-[clamp(32px,4.5vw,48px)] font-bold leading-[1.1] tracking-[-0.016em]">
              {c.pricing.heading}
            </h2>
            <p className="mt-5 text-xl font-light leading-relaxed text-graphite">
              {c.pricing.intro}
            </p>
          </Reveal>
          <div>
            <ul className="grid grid-cols-1 gap-3">
              {c.pricing.factors.map((f) => (
                <Reveal key={f} dir="zoom">
                  <li className="flex items-start gap-4 rounded-[28px] bg-snow p-7">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-azure" />
                    <span className="text-[17px] leading-relaxed text-slate">
                      {f}
                    </span>
                  </li>
                </Reveal>
              ))}
            </ul>
            <p className="mt-6 text-[15px] leading-relaxed text-graphite">
              {c.pricing.note}
            </p>
          </div>
        </div>
      </section>

      {/* RELATED PAGES */}
      {c.related && (
        <section className="bg-snow px-6 py-20">
          <div className="mx-auto max-w-[1200px]">
            <Reveal>
              <h2 className="text-[clamp(24px,3.5vw,36px)] font-bold leading-[1.15] tracking-[-0.015em]">
                {c.related.heading}
              </h2>
              <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-[17px]">
                {c.related.links.map((link) => (
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
      )}

      {/* FAQ */}
      <section id="faq" className="bg-fog px-6 py-24">
        <div className="mx-auto max-w-[900px]">
          <Reveal className="mb-12 text-center">
            <span className="mb-3 block text-2xl font-semibold tracking-tight text-azure">
              {c.faqEyebrow}
            </span>
            <h2 className="text-[clamp(32px,4.5vw,48px)] font-bold leading-[1.1] tracking-[-0.016em]">
              {c.faqHeading}
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-3">
            {c.faq.map((item) => (
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

      {/* CTA */}
      <section className="bg-snow px-6 py-32 text-center">
        <Reveal>
          <span className="mb-3 block text-2xl font-semibold tracking-tight text-azure">
            {c.finalCta.eyebrow}
          </span>
          <h2 className="text-[clamp(40px,8vw,80px)] font-bold leading-[1.04] tracking-[-0.022em]">
            {c.finalCta.heading}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-xl font-light text-graphite">
            {c.finalCta.text}
          </p>
          <Magnetic className="mt-8">
            <Link
              href={contact}
              className="inline-flex rounded-full bg-azure px-6 py-3 text-xl text-white transition-colors hover:bg-[#0077ed]"
            >
              {c.finalCta.ctaLabel}
            </Link>
          </Magnetic>
        </Reveal>
      </section>
    </main>
  );
}
