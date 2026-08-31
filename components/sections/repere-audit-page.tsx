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
import { getSeoPage, serviceLandingJsonLd } from "@/lib/seo";
import { defaultLocale, localizeHref, type Locale } from "@/lib/i18n";
import { repereAuditContent } from "@/content/pages/repere-audit";

/**
 * The /repere-audit accessibility-compliance landing page, both locales.
 * Copy lives in `content/pages/repere-audit.ts`.
 */
export function RepereAuditPage({
  locale = defaultLocale,
}: {
  locale?: Locale;
}) {
  const page = getSeoPage("repereAudit", locale);
  const c = repereAuditContent[locale];
  const contactHref = localizeHref("/contact", locale);

  return (
    <main>
      <JsonLd
        data={serviceLandingJsonLd({
          page,
          serviceName: c.serviceName,
          serviceType: c.serviceType,
          faq: c.faq,
          locale,
        })}
      />

      {/* HERO */}
      <header className="bg-fog px-6 pb-24 pt-40">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <span className="mb-3 block text-2xl font-semibold tracking-tight text-azure">
              {c.hero.eyebrow}
            </span>
            <h1 className="text-[clamp(40px,7vw,80px)] font-bold leading-[1.04] tracking-[-0.022em]">
              {c.hero.heading}
            </h1>
            <p className="mt-6 max-w-xl text-xl font-light leading-relaxed text-graphite">
              {c.hero.intro}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Magnetic>
                <Link
                  href={contactHref}
                  className="inline-flex rounded-full bg-azure px-6 py-3 text-xl text-white transition-colors hover:bg-[#0077ed]"
                >
                  {c.hero.ctaPrimary}
                </Link>
              </Magnetic>
              <Link
                href="#methode"
                className="inline-flex rounded-full border border-silver bg-snow px-6 py-3 text-xl text-ink transition-colors hover:border-ink"
              >
                {c.hero.ctaSecondary}
              </Link>
            </div>
            <p className="mt-6 text-[15px] leading-relaxed text-graphite">
              {c.hero.nonCompliance.lead}{" "}
              <span className="font-semibold text-caution">
                {c.hero.nonCompliance.emphasis}
              </span>{" "}
              {c.hero.nonCompliance.tail}
            </p>
          </Reveal>

          {/* Exemple de rapport (illustratif, sans score chiffré) */}
          <Reveal dir="zoom" delay={0.1}>
            <div
              className="rounded-[28px] bg-ink p-7 text-snow shadow-[0_30px_60px_-28px_rgba(29,29,31,0.55)]"
              aria-label={c.hero.report.ariaLabel}
            >
              <div className="flex items-center justify-between border-b border-white/15 pb-4">
                <span className="flex items-center gap-2 text-sm text-white/75">
                  <span className="h-2 w-2 rounded-full bg-azure" aria-hidden />
                  {c.hero.report.source}
                </span>
                <span className="text-xs font-semibold text-white/60">RGAA</span>
              </div>
              <ul className="mt-2">
                {c.hero.report.criteria.map((criterion) => (
                  <li
                    key={criterion.label}
                    className="flex items-center gap-3 border-b border-white/10 py-3 text-[15px] text-white/90 last:border-0"
                  >
                    <span
                      aria-hidden
                      className={`grid h-6 w-6 shrink-0 place-items-center rounded-full text-sm font-semibold ${
                        criterion.ok
                          ? "bg-[#1f7a53]/25 text-[#7be0ae]"
                          : "bg-[#b23a2e]/25 text-[#ff9c8f]"
                      }`}
                    >
                      {criterion.ok ? "✓" : "✕"}
                    </span>
                    {criterion.label}
                  </li>
                ))}
              </ul>
              <div className="mt-5 rounded-2xl border border-azure/40 bg-azure/15 px-4 py-3 text-[15px] text-white/85">
                {c.hero.report.note}
              </div>
            </div>
          </Reveal>
        </div>
      </header>

      {/* STATS / ENJEU */}
      <section className="bg-snow px-6 py-24">
        <div className="mx-auto max-w-[1200px]">
          <Reveal className="mb-12 max-w-3xl">
            <span className="mb-3 block text-2xl font-semibold tracking-tight text-azure">
              {c.why.eyebrow}
            </span>
            <h2 className="text-[clamp(32px,4.5vw,48px)] font-bold leading-[1.1] tracking-[-0.016em]">
              {c.why.heading}
            </h2>
            <p className="mt-5 text-xl font-light leading-relaxed text-graphite">
              {c.why.intro}
            </p>
          </Reveal>

          <StaggerGroup className="grid grid-cols-1 gap-px overflow-hidden rounded-[28px] border border-silver bg-silver md:grid-cols-3">
            {c.why.stats.map((stat) => (
              <StaggerItem key={stat.num} className="bg-snow p-8">
                <div className="font-mono text-[clamp(34px,5vw,44px)] font-bold tracking-tight text-azure">
                  {stat.num}
                </div>
                <p className="mt-3 text-[15px] leading-relaxed text-graphite">
                  {stat.lbl}
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
              {c.method.eyebrow}
            </span>
            <h2 className="text-[clamp(32px,4.5vw,48px)] font-bold leading-[1.1] tracking-[-0.016em]">
              {c.method.heading}
            </h2>
            <p className="mt-5 text-xl font-light leading-relaxed text-graphite">
              {c.method.intro}
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
            {c.method.steps.map((s, i) => (
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

      <Marquee items={c.marquee} />

      {/* TARIFS */}
      <section className="bg-snow px-6 py-28">
        <div className="mx-auto max-w-[1200px]">
          <Reveal className="mb-12 max-w-3xl">
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

          <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
            {c.pricing.tiers.map((t, i) => (
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
                      {c.pricing.mostRequested}
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
                    href={contactHref}
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

      {/* CTA FINAL */}
      <section className="bg-snow px-6 py-32 text-center">
        <Reveal>
          <span className="mb-3 block text-2xl font-semibold tracking-tight text-azure">
            {c.finalCta.eyebrow}
          </span>
          <h2 className="mx-auto max-w-3xl text-[clamp(40px,8vw,80px)] font-bold leading-[1.04] tracking-[-0.022em]">
            {c.finalCta.heading}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-xl font-light text-graphite">
            {c.finalCta.text}
          </p>
          <Magnetic className="mt-8">
            <Link
              href={contactHref}
              className="inline-flex rounded-full bg-azure px-6 py-3 text-xl text-white transition-colors hover:bg-[#0077ed]"
            >
              {c.finalCta.cta}
            </Link>
          </Magnetic>
        </Reveal>
      </section>
    </main>
  );
}
