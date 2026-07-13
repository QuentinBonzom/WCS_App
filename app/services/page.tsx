import type { Metadata } from "next";
import Link from "next/link";
import { FeatureShowcase } from "@/components/gradient-scene";
import { BrowserMock, PhoneMock } from "@/components/device-mock";
import {
  Reveal,
  Marquee,
  Magnetic,
  StaggerGroup,
  StaggerItem,
} from "@/components/motion-primitives";
import { TiltCard } from "@/components/tilt-card";
import { ServicesSlideshow } from "@/components/services-slideshow";
import { JsonLd } from "@/components/json-ld";
import { buildPageMetadata, getSeoPage, servicesJsonLd } from "@/lib/seo";
import { getDictionary, localizeHref, type Locale } from "@/lib/i18n";

export const metadata: Metadata = buildPageMetadata(getSeoPage("services"), "fr");

const process = [
  { n: "01", t: "Découverte", d: "On cadre vos objectifs, votre cible et le périmètre. Devis clair sous 24h." },
  { n: "02", t: "Design", d: "Wireframes, maquettes haute-fidélité et design system validés ensemble." },
  { n: "03", t: "Développement", d: "Code performant et responsive, démos régulières à chaque étape." },
  { n: "04", t: "Lancement", d: "Mise en ligne, optimisation SEO et suivi. On reste à vos côtés." },
];

const more = [
  {
    title: "E-commerce",
    badge: "Bientôt",
    desc: "Boutiques en ligne puissantes en cours de développement. Bientôt disponibles.",
    tags: ["Online Store", "Payments", "Inventory"],
    icon: (
      <>
        <path d="M5 9 H27 L25 23 H7 Z" stroke="#1d1d1f" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M11 13 V8 A5 5 0 0 1 21 8 V13" stroke="#1d1d1f" strokeWidth="1.6" />
      </>
    ),
    dark: false,
  },
  {
    title: "Référencement SEO",
    desc: "Optimisation complète pour améliorer votre visibilité et attirer plus de clients.",
    tags: ["Analytics", "Optimization", "Ranking"],
    icon: (
      <>
        <circle cx="14" cy="14" r="9" stroke="#1d1d1f" strokeWidth="1.6" />
        <line x1="20.5" y1="20.5" x2="28" y2="28" stroke="#1d1d1f" strokeWidth="1.6" strokeLinecap="round" />
      </>
    ),
    dark: false,
  },
  {
    title: "Maintenance & Support",
    desc: "Maintenance proactive et support technique 24/7 pour une performance continue.",
    tags: ["Monitoring", "Updates", "Support"],
    icon: (
      <>
        <circle cx="16" cy="16" r="4" stroke="#fff" strokeWidth="1.6" />
        <path d="M16 3 V8 M16 24 V29 M3 16 H8 M24 16 H29 M6.5 6.5 L10 10 M22 22 L25.5 25.5 M25.5 6.5 L22 10 M10 22 L6.5 25.5" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" />
      </>
    ),
    dark: true,
  },
];

const targetedPages = [
  {
    title: "Création site web Montbéliard",
    desc: "Une page dédiée aux entreprises locales qui cherchent un site rapide, crédible et optimisé pour Google.",
    href: "/creation-site-web-montbeliard",
  },
  {
    title: "Agence web Montbéliard",
    desc: "Une vision complète de l'accompagnement WebCode Studio : stratégie, design, développement, SEO et suivi.",
    href: "/agence-web-montbeliard",
  },
  {
    title: "Création site vitrine",
    desc: "Le format idéal pour présenter votre activité, rassurer vos prospects et générer plus de demandes.",
    href: "/creation-site-vitrine",
  },
  {
    title: "Repère · conformité accessibilité",
    desc: "Audit, remédiation et documentation pour rendre votre site conforme à l'European Accessibility Act et au RGAA.",
    href: "/repere-audit",
  },
];

const servicesCopy = {
  fr: {
    headerEyebrow: "Nos services",
    headerTitle: (
      <>
        Sites web, apps, SEO
        <br />
        et accessibilité.
      </>
    ),
    headerText:
      "Création de sites internet, applications mobiles, design UI/UX et conformité accessibilité pour construire une présence digitale qui convertit et reste solide dans le temps.",
    discover: "Découvrir",
    showcases: [
      {
        index: "01 / Développement Web",
        eyebrow: "Développement Web",
        title: <>Des sites qui performent.</>,
        sub: "Sites web sur mesure, rapides et responsive, conçus pour convertir vos visiteurs en clients.",
        tags: ["Responsive Design", "SEO", "Performance"],
        linkLabel: "Créer un site web",
        alt: "Aperçu d'un site web analytics",
      },
      {
        index: "02 / Applications Mobiles",
        eyebrow: "Applications Mobiles",
        title: <>Dans la poche de vos clients.</>,
        sub: "Applications natives et cross-platform offrant une expérience exceptionnelle, sur iOS comme Android.",
        tags: ["iOS & Android", "Cross-platform", "App Store"],
        linkLabel: "Créer mon application",
        alt: "Aperçu d'une application mobile",
      },
      {
        index: "03 / Design UI/UX",
        eyebrow: "Design UI/UX",
        title: <>Des interfaces mémorables.</>,
        sub: "Conception d'interfaces intuitives et d'expériences qui captivent vos utilisateurs, du prototype au design system.",
        tags: ["Prototyping", "User Research", "Design System"],
        linkLabel: "Concevoir mon produit",
        alt: "Aperçu d'un design system",
      },
      {
        index: "04 / Accessibilité",
        eyebrow: "Repère",
        title: <>Votre conformité EAA / RGAA.</>,
        sub: "Audit, remédiation et documentation réglementaire pour rendre votre site ou application accessible, conforme et défendable.",
        tags: ["Audit RGAA", "Corrections", "Déclaration d'accessibilité"],
        linkLabel: "Découvrir Repère",
      },
    ],
    accessibilityPreview: {
      rows: [
        { label: "Contrastes et lisibilité", state: "À vérifier" },
        { label: "Navigation clavier", state: "À tester" },
        { label: "Formulaires et erreurs", state: "À corriger" },
        { label: "Documents de conformité", state: "À publier" },
      ],
    },
    marquee: [
      "RESPONSIVE",
      "PERFORMANCE",
      "SEO",
      "iOS & ANDROID",
      "DESIGN SYSTEM",
      "ACCESSIBILITÉ",
    ],
    processEyebrow: "Méthode",
    processTitle: "Du brief à la mise en ligne.",
    process,
    moreEyebrow: "Et aussi",
    moreTitle: "Un accompagnement complet.",
    more: [
      {
        title: "E-commerce",
        badge: "Bientôt",
        desc: "Boutiques en ligne puissantes en cours de développement. Bientôt disponibles.",
        tags: ["Online Store", "Payments", "Inventory"],
      },
      {
        title: "Référencement SEO",
        desc: "Optimisation complète pour améliorer votre visibilité et attirer plus de clients.",
        tags: ["Analytics", "Optimization", "Ranking"],
      },
      {
        title: "Maintenance & Support",
        desc: "Maintenance proactive et support technique 24/7 pour une performance continue.",
        tags: ["Monitoring", "Updates", "Support"],
      },
    ],
    targetedEyebrow: "Pages utiles",
    targetedTitle: "Des offres pensées pour vos recherches.",
    targetedPages,
    ctaEyebrow: "Passons au concret",
    ctaTitle: "Démarrer mon projet.",
  },
  en: {
    headerEyebrow: "Our services",
    headerTitle: (
      <>
        Websites, apps, SEO
        <br />
        and accessibility.
      </>
    ),
    headerText:
      "Website creation, mobile applications, UI/UX design and accessibility compliance to build a digital presence that converts and stays solid over time.",
    discover: "Discover",
    showcases: [
      {
        index: "01 / Web Development",
        eyebrow: "Web Development",
        title: <>Websites built to perform.</>,
        sub: "Fast, responsive custom websites designed to convert visitors into customers.",
        tags: ["Responsive Design", "SEO", "Performance"],
        linkLabel: "Create a website",
        alt: "Preview of an analytics website",
      },
      {
        index: "02 / Mobile Applications",
        eyebrow: "Mobile Applications",
        title: <>In your customers' pockets.</>,
        sub: "Native and cross-platform applications delivering outstanding experiences on iOS and Android.",
        tags: ["iOS & Android", "Cross-platform", "App Store"],
        linkLabel: "Create my app",
        alt: "Preview of a mobile application",
      },
      {
        index: "03 / UI/UX Design",
        eyebrow: "UI/UX Design",
        title: <>Memorable interfaces.</>,
        sub: "Design of intuitive interfaces and experiences that engage users, from prototype to design system.",
        tags: ["Prototyping", "User Research", "Design System"],
        linkLabel: "Design my product",
        alt: "Preview of a design system",
      },
      {
        index: "04 / Accessibility",
        eyebrow: "Repère",
        title: <>Your EAA / RGAA compliance.</>,
        sub: "Audit, remediation and regulatory documentation to make your website or app accessible, compliant and defensible.",
        tags: ["RGAA audit", "Fixes", "Accessibility statement"],
        linkLabel: "Discover Repère",
      },
    ],
    accessibilityPreview: {
      rows: [
        { label: "Contrast and readability", state: "To check" },
        { label: "Keyboard navigation", state: "To test" },
        { label: "Forms and errors", state: "To fix" },
        { label: "Compliance documents", state: "To publish" },
      ],
    },
    marquee: [
      "RESPONSIVE",
      "PERFORMANCE",
      "SEO",
      "iOS & ANDROID",
      "DESIGN SYSTEM",
      "ACCESSIBILITY",
    ],
    processEyebrow: "Method",
    processTitle: "From brief to launch.",
    process: [
      { n: "01", t: "Discovery", d: "We frame your goals, audience and scope. Clear quote within 24h." },
      { n: "02", t: "Design", d: "Wireframes, high-fidelity mockups and design system validated together." },
      { n: "03", t: "Development", d: "Fast responsive code, with regular demos at every stage." },
      { n: "04", t: "Launch", d: "Go-live, SEO optimization and follow-up. We stay by your side." },
    ],
    moreEyebrow: "Also",
    moreTitle: "Complete support.",
    more: [
      {
        title: "E-commerce",
        badge: "Soon",
        desc: "Powerful online stores are in development. Available soon.",
        tags: ["Online Store", "Payments", "Inventory"],
      },
      {
        title: "SEO",
        desc: "Complete optimization to improve visibility and attract more customers.",
        tags: ["Analytics", "Optimization", "Ranking"],
      },
      {
        title: "Maintenance & Support",
        desc: "Proactive maintenance and technical support for continuous performance.",
        tags: ["Monitoring", "Updates", "Support"],
      },
    ],
    targetedEyebrow: "Useful pages",
    targetedTitle: "Offers shaped around your searches.",
    targetedPages: [
      {
        title: "Website creation in Montbéliard",
        desc: "A page for local companies looking for a fast, credible website optimized for Google.",
        href: "/creation-site-web-montbeliard",
      },
      {
        title: "Web agency in Montbéliard",
        desc: "A complete view of WebCode Studio's support: strategy, design, development, SEO and follow-up.",
        href: "/agence-web-montbeliard",
      },
      {
        title: "Showcase website creation",
        desc: "The ideal format to present your activity, reassure prospects and generate more requests.",
        href: "/creation-site-vitrine",
      },
      {
        title: "Repère · accessibility compliance",
        desc: "Audit, remediation and documentation to make your site compliant with the European Accessibility Act and RGAA.",
        href: "/repere-audit",
      },
    ],
    ctaEyebrow: "Ready to build",
    ctaTitle: "Start my project.",
  },
} as const satisfies Record<Locale, object>;

export function ServicesPage({ locale = "fr" }: { locale?: Locale }) {
  const t = servicesCopy[locale];
  const common = getDictionary(locale).common;
  const localizedMore = more.map((item, index) => ({
    ...item,
    ...t.more[index],
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
            {t.headerTitle}
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
            alt={t.showcases[0].alt}
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
            alt={t.showcases[1].alt}
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
            alt={t.showcases[2].alt}
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
              {t.accessibilityPreview.rows.map((item) => (
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
