import { Fragment } from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import { Magnetic, Reveal } from "@/components/motion";
import { JsonLd } from "@/components/ui/json-ld";
import { buildPageMetadata, getSeoPage, pricingJsonLd } from "@/lib/seo";
import { getDictionary, localizeHref, type Locale } from "@/lib/i18n";
import { tarifsContent } from "@/content/pages/tarifs";

/** Metadata for the /tarifs route — call from the route's `metadata` export. */
export function pricingMetadata(locale: Locale = "fr") {
  return buildPageMetadata(getSeoPage("tarifs", locale), locale);
}

/** Lowest starting price across the tiers, for the AggregateOffer schema. */
const LOW_PRICE = 690;

export function PricingPage({ locale = "fr" }: { locale?: Locale }) {
  const page = getSeoPage("tarifs", locale);
  const t = tarifsContent[locale];
  const common = getDictionary(locale).common;

  return (
    <main>
      <JsonLd
        data={pricingJsonLd({
          page,
          serviceName: t.serviceName,
          lowPrice: LOW_PRICE,
          offerCount: t.tiers.length,
          faq: t.faq,
          locale,
        })}
      />

      {/* HEADER */}
      <header className="bg-fog px-6 pb-24 pt-40 text-center">
        <Reveal>
          <span className="mb-3 block text-2xl font-semibold tracking-tight text-cobalt">
            {t.eyebrow}
          </span>
          <h1 className="mx-auto max-w-4xl text-[clamp(44px,8vw,88px)] font-bold leading-[1.04] tracking-[-0.022em]">
            {t.titleLines.map((line, index) => (
              <Fragment key={line}>
                {index > 0 && <br />}
                {line}
              </Fragment>
            ))}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl font-light leading-relaxed text-graphite">
            {t.intro}
          </p>
        </Reveal>
      </header>

      {/* PRICING GRID */}
      <section className="bg-fog px-6 pb-12">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-4 lg:grid-cols-3">
          {t.tiers.map((tier, index) => (
            <Reveal key={tier.name} dir="zoom" delay={index * 0.08}>
              <div
                className={`flex h-full flex-col rounded-[28px] p-8 ${
                  tier.highlight
                    ? "bg-ink text-white shadow-[0_40px_90px_-40px_rgba(29,29,31,0.6)]"
                    : "bg-snow"
                }`}
              >
                <h2 className="text-2xl font-semibold tracking-tight">
                  {tier.name}
                </h2>
                <p
                  className={`mt-2 text-[15px] leading-relaxed ${
                    tier.highlight ? "text-white/70" : "text-graphite"
                  }`}
                >
                  {tier.tagline}
                </p>

                <div className="mt-6">
                  <span
                    className={`block text-xs font-semibold uppercase tracking-wide ${
                      tier.highlight ? "text-[#8ec5ff]" : "text-cobalt"
                    }`}
                  >
                    {tier.priceLabel}
                  </span>
                  <span className="mt-1 block text-[40px] font-bold tracking-[-0.02em]">
                    {tier.price}
                  </span>
                </div>

                <p
                  className={`mt-4 text-[15px] leading-relaxed ${
                    tier.highlight ? "text-white/60" : "text-slate"
                  }`}
                >
                  {tier.bestFor}
                </p>

                <ul className="mt-6 flex flex-1 flex-col gap-3">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-[15px] leading-relaxed"
                    >
                      <Check
                        className={`mt-0.5 h-4 w-4 shrink-0 ${
                          tier.highlight ? "text-[#8ec5ff]" : "text-azure"
                        }`}
                        strokeWidth={2.5}
                        aria-hidden
                      />
                      <span className={tier.highlight ? "text-white/85" : "text-slate"}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={localizeHref("/contact", locale)}
                  className={`mt-8 inline-flex justify-center rounded-full px-6 py-3 text-[17px] transition-colors ${
                    tier.highlight
                      ? "bg-white text-ink hover:bg-[#8ec5ff]"
                      : "bg-azure text-white hover:bg-[#0077ed]"
                  }`}
                >
                  {tier.ctaLabel}
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-[13px] leading-relaxed text-graphite">
          {t.priceNote}
        </p>
      </section>

      {/* ALWAYS INCLUDED */}
      <section className="bg-snow px-6 py-28">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="lg:sticky lg:top-32 lg:self-start">
            <span className="mb-3 block text-2xl font-semibold tracking-tight text-cobalt">
              {t.includedEyebrow}
            </span>
            <h2 className="text-[clamp(32px,4.5vw,48px)] font-bold leading-[1.1] tracking-[-0.016em]">
              {t.includedHeading}
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 gap-3">
            {t.included.map((item, index) => (
              <Reveal key={item} dir="zoom" delay={index * 0.06}>
                <div className="flex items-start gap-4 rounded-[28px] bg-fog p-7">
                  <Check
                    className="mt-1 h-5 w-5 shrink-0 text-azure"
                    strokeWidth={2.5}
                    aria-hidden
                  />
                  <p className="text-[17px] leading-relaxed text-slate">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT DRIVES THE PRICE */}
      <section className="bg-fog px-6 py-28">
        <div className="mx-auto max-w-[1200px]">
          <Reveal className="mb-12 max-w-3xl">
            <span className="mb-3 block text-2xl font-semibold tracking-tight text-cobalt">
              {t.factorsEyebrow}
            </span>
            <h2 className="text-[clamp(32px,4.5vw,48px)] font-bold leading-[1.1] tracking-[-0.016em]">
              {t.factorsHeading}
            </h2>
            <p className="mt-5 text-xl font-light leading-relaxed text-graphite">
              {t.factorsIntro}
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            {t.factors.map((factor, index) => (
              <Reveal key={factor.title} dir="zoom" delay={index * 0.06}>
                <article className="h-full rounded-[28px] bg-snow p-7">
                  <h3 className="mb-2 text-xl font-semibold tracking-tight">
                    {factor.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-graphite">
                    {factor.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-snow px-6 py-28">
        <div className="mx-auto max-w-[900px]">
          <Reveal className="mb-12 text-center">
            <span className="mb-3 block text-2xl font-semibold tracking-tight text-cobalt">
              {t.faqEyebrow}
            </span>
            <h2 className="text-[clamp(32px,4.5vw,48px)] font-bold leading-[1.1] tracking-[-0.016em]">
              {t.faqHeading}
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 gap-3">
            {t.faq.map((item) => (
              <Reveal key={item.question}>
                <article className="rounded-[28px] bg-fog p-7">
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

      {/* FINAL CTA */}
      <section className="bg-fog px-6 py-32 text-center">
        <Reveal>
          <span className="mb-3 block text-2xl font-semibold tracking-tight text-cobalt">
            {t.finalCta.eyebrow}
          </span>
          <h2 className="text-[clamp(48px,9vw,88px)] font-bold leading-[1.04] tracking-[-0.022em]">
            {t.finalCta.heading}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-xl font-light text-graphite">
            {t.finalCta.text}
          </p>
          <Magnetic className="mt-8">
            <Link
              href={localizeHref("/contact", locale)}
              className="inline-flex rounded-full bg-azure px-6 py-3 text-xl text-white transition-colors hover:bg-[#0077ed]"
            >
              {t.finalCta.ctaLabel}
            </Link>
          </Magnetic>
          <p className="mt-4 text-[15px] text-graphite">
            {common.freeConsultation} • {common.customQuote} • {common.response24}
          </p>
        </Reveal>
      </section>
    </main>
  );
}
