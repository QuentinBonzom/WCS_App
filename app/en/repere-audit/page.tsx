import type { Metadata } from "next";
import Link from "next/link";
import {
  Reveal,
  Magnetic,
  Marquee,
  StaggerGroup,
  StaggerItem,
} from "@/components/motion-primitives";
import { TiltCard } from "@/components/tilt-card";
import { JsonLd } from "@/components/json-ld";
import {
  buildPageMetadata,
  getSeoPage,
  serviceLandingJsonLd,
  type FaqItem,
} from "@/lib/seo";
import { localizeHref } from "@/lib/i18n";

const page = getSeoPage("repereAudit", "en");

export const metadata: Metadata = buildPageMetadata(page, "en");

const reportCriteria = [
  { label: "Images without text alternatives", ok: false },
  { label: "Insufficient contrast at checkout", ok: false },
  { label: "Checkout flow not keyboard navigable", ok: false },
  { label: "Correct heading structure", ok: true },
  { label: "Missing accessibility statement", ok: false },
];

const stats = [
  {
    num: "June 28, 2025",
    lbl: "start date for the new accessibility requirements covering certain products and services",
  },
  {
    num: "106",
    lbl: "RGAA control criteria used to audit web interfaces",
  },
  {
    num: "Follow-up",
    lbl: "compliance information, procedures and corrective measures to organize",
  },
];

const steps = [
  {
    step: "Step 1 · Audit",
    title: "We measure",
    items: [
      "Analysis of the 106 RGAA control criteria",
      "Representative sample of pages",
      "Report prioritized by impact and risk",
    ],
  },
  {
    step: "Step 2 · Remediation",
    title: "We fix",
    items: [
      "Code fixes by our developers",
      "Contrast, keyboard, screen readers and forms",
      "No dependency on questionable accessibility overlays",
    ],
  },
  {
    step: "Step 3 · Compliance",
    title: "We document",
    items: [
      "Published accessibility statement",
      "Multi-year plan and annual action plan",
      "Operational reporting channel",
    ],
  },
];

const tiers = [
  {
    who: "Small business / small e-commerce",
    price: "€1,490",
    note: "from · audit",
    features: [
      "Audit up to 10 key pages",
      "Risk-prioritized report",
      "Templates for legal documents",
    ],
    cta: "Request the audit",
  },
  {
    who: "SME · site + app",
    price: "Custom quote",
    features: [
      "Complete RGAA audit",
      "Code remediation by our team",
      "Regulatory documents prepared",
      "Compliance statement published",
    ],
    cta: "Request a quote",
    featured: true,
  },
  {
    who: "Mid-market / enterprise",
    price: "€290",
    note: "/ month",
    features: [
      "Ongoing compliance maintenance",
      "Annual document updates",
      "Dedicated accessibility contact",
    ],
    cta: "Choose maintenance",
  },
];

const faq: FaqItem[] = [
  {
    question: "Who is affected by digital accessibility obligations?",
    answer:
      "Since the European Accessibility Act started applying on June 28, 2025, certain B2C products and services must comply with new accessibility requirements, including e-commerce, banking, transport, telecommunications, e-books and audiovisual media services. Exemptions can apply, for example for service providers with fewer than 10 employees and less than 2 million euros in annual turnover.",
  },
  {
    question: "What is the risk in case of non-compliance?",
    answer:
      "For products and services covered by accessibility rules, authorities can impose penalties and require corrective measures depending on the applicable regime. The exact exposure depends on the organization, service and legal basis.",
  },
  {
    question: "What exactly does the RGAA audit include?",
    answer:
      "We evaluate your website against the 106 RGAA control criteria on a representative page sample, combining automated checks for speed and manual review for reliability. You receive a report prioritized by impact and risk.",
  },
  {
    question: "Do you fix the website or only audit it?",
    answer:
      "Both. After the audit, our developers code the fixes, covering contrast, keyboard navigation, screen reader compatibility and forms, without relying on an accessibility overlay. We then prepare and publish the regulatory documents.",
  },
  {
    question: "Which regulatory documents should be published?",
    answer:
      "Compliance is not only code. Depending on your applicable regime, we frame the accessibility statement, multi-year plan, annual action plan, useful mentions and reporting channel. We prepare these elements with you instead of delivering only a technical report.",
  },
];

export default function EnglishRepereAuditPage() {
  return (
    <main>
      <JsonLd
        data={serviceLandingJsonLd({
          page,
          serviceName: "Repère - digital accessibility compliance",
          serviceType: "Accessibility compliance audit",
          faq,
          locale: "en",
        })}
      />

      <header className="bg-fog px-6 pb-24 pt-40">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <span className="mb-3 block text-2xl font-semibold tracking-tight text-azure">
              European Accessibility Act · in force
            </span>
            <h1 className="text-[clamp(40px,7vw,80px)] font-bold leading-[1.04] tracking-[-0.022em]">
              Is your website non-compliant without knowing it?
            </h1>
            <p className="mt-6 max-w-xl text-xl font-light leading-relaxed text-graphite">
              Since June 28, 2025, new requirements apply to several private
              digital services. Repère audits, fixes and documents your website
              or application so you move toward clear, evidence-backed
              compliance.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Magnetic>
                <Link
                  href={localizeHref("/contact", "en")}
                  className="inline-flex rounded-full bg-azure px-6 py-3 text-xl text-white transition-colors hover:bg-[#0077ed]"
                >
                  Launch my audit
                </Link>
              </Magnetic>
              <Link
                href="#methode"
                className="inline-flex rounded-full border border-silver bg-snow px-6 py-3 text-xl text-ink transition-colors hover:border-ink"
              >
                View the method
              </Link>
            </div>
            <p className="mt-6 text-[15px] leading-relaxed text-graphite">
              Non-compliance:{" "}
              <span className="font-semibold text-caution">
                checks, penalties and corrective measures may apply
              </span>{" "}
              depending on the applicable regime.
            </p>
          </Reveal>

          <Reveal dir="zoom" delay={0.1}>
            <div
              className="rounded-[28px] bg-ink p-7 text-snow shadow-[0_30px_60px_-28px_rgba(29,29,31,0.55)]"
              aria-label="Example compliance report"
            >
              <div className="flex items-center justify-between border-b border-white/15 pb-4">
                <span className="flex items-center gap-2 text-sm text-white/75">
                  <span className="h-2 w-2 rounded-full bg-azure" aria-hidden />
                  sample report · your-store.com
                </span>
                <span className="text-xs font-semibold text-white/60">
                  RGAA
                </span>
              </div>
              <ul className="mt-2">
                {reportCriteria.map((c) => (
                  <li
                    key={c.label}
                    className="flex items-center gap-3 border-b border-white/10 py-3 text-[15px] text-white/90 last:border-0"
                  >
                    <span
                      aria-hidden
                      className={`grid h-6 w-6 shrink-0 place-items-center rounded-full text-sm font-semibold ${
                        c.ok
                          ? "bg-[#1f7a53]/25 text-[#7be0ae]"
                          : "bg-[#b23a2e]/25 text-[#ff9c8f]"
                      }`}
                    >
                      {c.ok ? "✓" : "✕"}
                    </span>
                    {c.label}
                  </li>
                ))}
              </ul>
              <div className="mt-5 rounded-2xl border border-azure/40 bg-azure/15 px-4 py-3 text-[15px] text-white/85">
                Report prioritized by impact and risk - every issue is linked
                to its regulatory exposure.
              </div>
            </div>
          </Reveal>
        </div>
      </header>

      <section className="bg-snow px-6 py-24">
        <div className="mx-auto max-w-[1200px]">
          <Reveal className="mb-12 max-w-3xl">
            <span className="mb-3 block text-2xl font-semibold tracking-tight text-azure">
              Why now
            </span>
            <h2 className="text-[clamp(32px,4.5vw,48px)] font-bold leading-[1.1] tracking-[-0.016em]">
              The rules changed. The scope expanded to private services.
            </h2>
            <p className="mt-5 text-xl font-light leading-relaxed text-graphite">
              Alongside existing public-sector obligations, certain products and
              services covered by the European Accessibility Act now have new
              accessibility requirements.
            </p>
          </Reveal>

          <StaggerGroup className="grid grid-cols-1 gap-px overflow-hidden rounded-[28px] border border-silver bg-silver md:grid-cols-3">
            {stats.map((s) => (
              <StaggerItem key={s.num} className="bg-snow p-8">
                <div className="font-mono text-[clamp(34px,5vw,44px)] font-bold tracking-tight text-azure">
                  {s.num}
                </div>
                <p className="mt-3 text-[15px] leading-relaxed text-graphite">
                  {s.lbl}
                </p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section id="methode" className="bg-fog px-6 py-28">
        <div className="mx-auto max-w-[1200px]">
          <Reveal className="mb-14 max-w-3xl">
            <span className="mb-3 block text-2xl font-semibold tracking-tight text-azure">
              Our method
            </span>
            <h2 className="text-[clamp(32px,4.5vw,48px)] font-bold leading-[1.1] tracking-[-0.016em]">
              Three steps, no jargon, proven compliance.
            </h2>
            <p className="mt-5 text-xl font-light leading-relaxed text-graphite">
              We combine automated auditing for speed with manual review for
              reliability, then we fix and document.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
            {steps.map((s, i) => (
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

      <Marquee
        items={[
          "RGAA AUDIT",
          "REMEDIATION",
          "CONTRASTS",
          "KEYBOARD NAVIGATION",
          "SCREEN READERS",
          "ACCESSIBILITY STATEMENT",
        ]}
      />

      <section className="bg-snow px-6 py-28">
        <div className="mx-auto max-w-[1200px]">
          <Reveal className="mb-12 max-w-3xl">
            <span className="mb-3 block text-2xl font-semibold tracking-tight text-azure">
              Pricing
            </span>
            <h2 className="text-[clamp(32px,4.5vw,48px)] font-bold leading-[1.1] tracking-[-0.016em]">
              A plan for every organization size.
            </h2>
            <p className="mt-5 text-xl font-light leading-relaxed text-graphite">
              Fixed-price audit, remediation by quote, then annual maintenance
              to keep compliance alive over time.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
            {tiers.map((t, i) => (
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
                      Most requested
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
                    href={localizeHref("/contact", "en")}
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

      <section id="faq" className="bg-fog px-6 py-28">
        <div className="mx-auto max-w-[900px]">
          <Reveal className="mb-12 text-center">
            <span className="mb-3 block text-2xl font-semibold tracking-tight text-azure">
              FAQ
            </span>
            <h2 className="text-[clamp(32px,4.5vw,48px)] font-bold leading-[1.1] tracking-[-0.016em]">
              Frequently asked questions.
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
            First step
          </span>
          <h2 className="mx-auto max-w-3xl text-[clamp(40px,8vw,80px)] font-bold leading-[1.04] tracking-[-0.022em]">
            Know where you stand.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-xl font-light text-graphite">
            We send you an initial view of your regulatory exposure. No
            commitment, reply within 48h.
          </p>
          <Magnetic className="mt-8">
            <Link
              href={localizeHref("/contact", "en")}
              className="inline-flex rounded-full bg-azure px-6 py-3 text-xl text-white transition-colors hover:bg-[#0077ed]"
            >
              Request my first review
            </Link>
          </Magnetic>
        </Reveal>
      </section>
    </main>
  );
}
