import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { Reveal, Magnetic } from "@/components/motion-primitives";
import { TiltCard } from "@/components/tilt-card";
import { Counter } from "@/components/counter";
import { JsonLd } from "@/components/json-ld";
import { BackendCockpit, ProjectCockpit } from "@/components/project-cockpit";
import {
  breadcrumbJsonLd,
  buildPageMetadata,
  getSeoPage,
} from "@/lib/seo";
import {
  getDictionary,
  localizeHref,
  type Locale,
} from "@/lib/i18n";

export const metadata: Metadata = buildPageMetadata(getSeoPage("home"), "fr");

const services = [
  {
    title: "Développement Web",
    desc: "Sites sur mesure, rapides et responsive, conçus pour convertir vos visiteurs en clients.",
    href: "/creation-site-web-montbeliard",
    linkLabel: "Création site web Montbéliard",
    icon: (
      <svg
        viewBox="0 0 32 32"
        fill="none"
        className="h-10 w-10"
        aria-hidden
      >
        <path d="M11 9 L5 16 L11 23 M21 9 L27 16 L21 23 M18 6 L14 26" stroke="#1d1d1f" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Applications Mobiles",
    desc: "Apps natives et cross-platform — iOS & Android — pour une expérience exceptionnelle.",
    href: "/services#showcases",
    linkLabel: "Voir les apps mobiles",
    icon: (
      <svg
        viewBox="0 0 32 32"
        fill="none"
        className="h-10 w-10"
        aria-hidden
      >
        <rect x="9" y="3" width="14" height="26" rx="3" stroke="#1d1d1f" strokeWidth="1.6" />
        <line x1="14" y1="25" x2="18" y2="25" stroke="#1d1d1f" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Design UI/UX",
    desc: "Interfaces intuitives et expériences mémorables, du prototype au design system.",
    href: "/services#showcases",
    linkLabel: "Voir le design UI/UX",
    icon: (
      <svg
        viewBox="0 0 32 32"
        fill="none"
        className="h-10 w-10"
        aria-hidden
      >
        <circle cx="16" cy="16" r="13" stroke="#1d1d1f" strokeWidth="1.6" />
        <circle cx="16" cy="16" r="4" stroke="#1d1d1f" strokeWidth="1.6" />
        <path d="M16 3 V12 M16 20 V29 M3 16 H12 M20 16 H29" stroke="#1d1d1f" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    title: "Accessibilité RGAA",
    desc: "Audit, remédiation et documents réglementaires pour sécuriser votre conformité EAA.",
    href: "/repere-audit",
    linkLabel: "Découvrir Repère",
    icon: (
      <ShieldCheck
        className="h-10 w-10 text-ink"
        strokeWidth={1.6}
        aria-hidden
      />
    ),
  },
];

const counters = [
  { target: 2, suffix: "+", l: { fr: "Pays", en: "Countries" } },
];

const homeCopy = {
  fr: {
    available: "Disponible pour de nouveaux projets",
    heroDesktopBefore: "Création de sites web",
    heroDesktopMiddle: "et apps qui",
    heroMobileFirst: "Création de",
    heroMobileSecond: "sites web",
    heroMobileThird: "et apps qui",
    heroHighlight: "convertissent",
    heroMobileText:
      "Studio web à Montbéliard : sites rapides, apps et interfaces sur mesure pour convertir.",
    heroText:
      "Studio web à Montbéliard, nous concevons des sites rapides, des applications mobiles et des interfaces sur mesure pour transformer vos visiteurs en clients.",
    heroLink: "Découvrir nos services",
    heroMockLabels: {
      toggle: "Basculer entre le frontend et le backend du projet",
      front: "Cliquer pour voir le backend",
      back: "Retour au frontend",
      frontShort: "Frontend",
      backShort: "Backend",
    },
    servicesEyebrow: "Nos services",
    servicesTitle: "Pensés pour convertir.",
    servicesText:
      "Quatre expertises au cœur de votre projet digital : création de site internet, application mobile, design UI/UX et conformité accessibilité.",
    services: [
      {
        title: "Développement Web",
        desc: "Sites sur mesure, rapides et responsive, conçus pour convertir vos visiteurs en clients.",
        linkLabel: "Création site web Montbéliard",
      },
      {
        title: "Applications Mobiles",
        desc: "Apps natives et cross-platform - iOS & Android - pour une expérience exceptionnelle.",
        linkLabel: "Voir les apps mobiles",
      },
      {
        title: "Design UI/UX",
        desc: "Interfaces intuitives et expériences mémorables, du prototype au design system.",
        linkLabel: "Voir le design UI/UX",
      },
      {
        title: "Accessibilité RGAA",
        desc: "Audit, remédiation et documents réglementaires pour sécuriser votre conformité EAA.",
        linkLabel: "Découvrir Repère",
      },
    ],
    repereEyebrow: "Repère · nouveau service",
    repereTitle: "Accessibilité, conformité, preuves.",
    repereText:
      "L'accessibilité n'est plus un bonus : on audite votre site, on corrige le code, puis on prépare les documents RGAA attendus pour publier une conformité claire.",
    reperePrimary: "Découvrir Repère",
    repereSecondary: "Parler conformité",
    reperePreview: "aperçu Repère",
    repereRows: [
      { label: "Audit RGAA", state: "106 critères" },
      { label: "Remédiation", state: "Corrections codées" },
      { label: "Documentation", state: "Prête à publier" },
    ],
    repereNote:
      "Un service complémentaire aux créations et refontes : utile pour les e-commerces, plateformes de réservation, applications et services numériques B2C.",
    aboutEyebrow: "Expertise confirmée",
    aboutTitle: "Vos idées, en réalité digitale.",
    aboutText:
      "Développeur passionné, je crée des expériences web modernes et des applications mobiles sur mesure pour donner vie à vos projets.",
    bullets: [
      "Design responsive",
      "Performance optimisée",
      "Référencement SEO",
      "Support 24/7",
    ],
    ctaEyebrow: "Passons au concret",
    ctaTitle: "Démarrer mon projet.",
  },
  en: {
    available: "Available for new projects",
    heroDesktopBefore: "Custom websites",
    heroDesktopMiddle: "and apps that",
    heroMobileFirst: "Custom",
    heroMobileSecond: "websites",
    heroMobileThird: "and apps that",
    heroHighlight: "convert",
    heroMobileText:
      "Web studio in Montbéliard: fast websites, apps and custom interfaces built to convert.",
    heroText:
      "Based in Montbéliard, we design fast websites, mobile applications and custom interfaces that turn visitors into customers.",
    heroLink: "Discover our services",
    heroMockLabels: {
      toggle: "Switch between the project frontend and backend",
      front: "Click to view the backend",
      back: "Back to the frontend",
      frontShort: "Frontend",
      backShort: "Backend",
    },
    servicesEyebrow: "Our services",
    servicesTitle: "Built to convert.",
    servicesText:
      "Four core skills for your digital project: website creation, mobile applications, UI/UX design and accessibility compliance.",
    services: [
      {
        title: "Web Development",
        desc: "Fast, responsive custom websites designed to convert visitors into customers.",
        linkLabel: "Website creation in Montbéliard",
      },
      {
        title: "Mobile Applications",
        desc: "Native and cross-platform apps - iOS & Android - for outstanding user experiences.",
        linkLabel: "View mobile apps",
      },
      {
        title: "UI/UX Design",
        desc: "Intuitive interfaces and memorable experiences, from prototype to design system.",
        linkLabel: "View UI/UX design",
      },
      {
        title: "RGAA Accessibility",
        desc: "Audits, remediation and regulatory documents to secure EAA compliance.",
        linkLabel: "Discover Repère",
      },
    ],
    repereEyebrow: "Repère · new service",
    repereTitle: "Accessibility, compliance, proof.",
    repereText:
      "Accessibility is no longer a bonus: we audit your site, fix the code, then prepare the RGAA documents needed to publish clear compliance.",
    reperePrimary: "Discover Repère",
    repereSecondary: "Talk compliance",
    reperePreview: "Repère preview",
    repereRows: [
      { label: "RGAA audit", state: "106 criteria" },
      { label: "Remediation", state: "Coded fixes" },
      { label: "Documentation", state: "Ready to publish" },
    ],
    repereNote:
      "A complementary service for creations and redesigns: useful for e-commerce, booking platforms, applications and B2C digital services.",
    aboutEyebrow: "Proven expertise",
    aboutTitle: "Your ideas, shipped as digital products.",
    aboutText:
      "As a passionate developer, I create modern web experiences and custom mobile applications to bring your projects to life.",
    bullets: [
      "Responsive design",
      "Optimized performance",
      "SEO",
      "24/7 support",
    ],
    ctaEyebrow: "Ready to build",
    ctaTitle: "Start my project.",
  },
} as const satisfies Record<Locale, object>;

export function HomePage({ locale = "fr" }: { locale?: Locale }) {
  const t = homeCopy[locale];
  const common = getDictionary(locale).common;
  const localizedServices = services.map((service, index) => ({
    ...service,
    ...t.services[index],
  }));

  return (
    <main>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: locale === "fr" ? "Accueil" : "Home", path: "/" },
        ], locale)}
      />
      {/* HERO — Container Scroll */}
      <ContainerScroll
        backContent={<BackendCockpit locale={locale} />}
        labels={t.heroMockLabels}
        titleComponent={
          <div className="mx-auto mb-4 w-full max-w-[760px] px-4 sm:px-0">
            <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1.5 text-sm font-medium text-slate backdrop-blur">
              <i className="h-2 w-2 rounded-full bg-[#30d158] shadow-[0_0_0_5px_rgba(48,209,88,0.12)]" />
              {t.available}
            </span>
            <h1 className="mt-2 text-[clamp(32px,8.2vw,72px)] font-bold leading-[1.04] tracking-[-0.022em] text-ink">
              <span className="hidden sm:inline">
                {t.heroDesktopBefore}
                <br />
                {t.heroDesktopMiddle}{" "}
              </span>
              <span className="sm:hidden">
                {t.heroMobileFirst}
                <span className="block">{t.heroMobileSecond}</span>
                <span className="block">{t.heroMobileThird}</span>
              </span>
              <span className="bg-gradient-to-r from-azure to-[#57b0ff] bg-clip-text text-transparent">
                {t.heroHighlight}
              </span>
              .
            </h1>
            <p className="mx-auto mt-4 max-w-[300px] text-lg font-light leading-snug text-ink sm:hidden">
              {t.heroMobileText}
            </p>
            <p className="mx-auto mt-4 hidden max-w-xl text-xl font-light leading-snug text-ink sm:block">
              {t.heroText}
            </p>
            <Link
              href={localizeHref("/services", locale)}
              className="mt-5 inline-flex text-[17px] text-cobalt hover:underline"
            >
              {t.heroLink} ›
            </Link>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-5 text-sm text-graphite">
              <span>◷&nbsp; {common.response24}</span>
            </div>
          </div>
        }
      >
        <ProjectCockpit locale={locale} />
      </ContainerScroll>

      {/* SERVICES TEASER */}
      <section className="bg-fog px-6 py-32">
        <div className="mx-auto max-w-[1200px]">
          <Reveal className="mb-12 max-w-3xl">
            <span className="mb-3 block text-2xl font-semibold tracking-tight">
              {t.servicesEyebrow}
            </span>
            <h2 className="text-[clamp(40px,6vw,56px)] font-bold leading-[1.07] tracking-[-0.016em]">
              {t.servicesTitle}
            </h2>
            <p className="mt-4 max-w-xl text-xl font-light text-graphite">
              {t.servicesText}
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
            {localizedServices.map((s, i) => (
              <Reveal key={s.title} dir="zoom" delay={i * 0.1}>
                <TiltCard className="h-full rounded-[28px] bg-snow p-7">
                  <div className="mb-5 h-10 w-10">{s.icon}</div>
                  <h3 className="mb-2 text-2xl font-semibold tracking-tight">
                    {s.title}
                  </h3>
                  <p className="mb-4 text-[17px] text-graphite">{s.desc}</p>
                  <Link href={localizeHref(s.href, locale)} className="text-[17px] text-cobalt hover:underline">
                    {s.linkLabel} ›
                  </Link>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* REPERE ACCESSIBILITY SERVICE */}
      <section id="repere" className="bg-ink px-6 py-28 text-white">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-14 lg:grid-cols-[1fr_0.9fr]">
          <Reveal>
            <span className="mb-3 block text-2xl font-semibold tracking-tight text-[#8ec5ff]">
              {t.repereEyebrow}
            </span>
            <h2 className="text-[clamp(36px,6vw,64px)] font-bold leading-[1.07] tracking-[-0.018em]">
              {t.repereTitle}
            </h2>
            <p className="mt-5 max-w-xl text-xl font-light leading-relaxed text-white/70">
              {t.repereText}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Magnetic>
                <Link
                  href={localizeHref("/repere-audit", locale)}
                  className="inline-flex rounded-full bg-white px-6 py-3 text-xl text-ink transition-colors hover:bg-[#8ec5ff]"
                >
                  {t.reperePrimary}
                </Link>
              </Magnetic>
              <Link
                href={localizeHref("/contact", locale)}
                className="inline-flex rounded-full border border-white/20 px-6 py-3 text-xl text-white transition-colors hover:border-white"
              >
                {t.repereSecondary}
              </Link>
            </div>
          </Reveal>

          <Reveal dir="zoom" delay={0.1}>
            <div className="rounded-[28px] border border-white/10 bg-white/[0.08] p-6 shadow-[0_30px_70px_-36px_rgba(0,0,0,0.8)]">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-sm font-medium text-white/70">
                  {t.reperePreview}
                </span>
                <span className="rounded-full bg-[#34c759]/15 px-3 py-1 text-xs font-semibold text-[#8ff0b8]">
                  EAA / RGAA
                </span>
              </div>
              <div className="mt-5 space-y-3">
                {t.repereRows.map((row) => (
                  <div
                    key={row.label}
                    className="flex items-center justify-between gap-4 rounded-2xl bg-white/[0.08] px-4 py-3"
                  >
                    <span className="text-[15px] text-white/90">{row.label}</span>
                    <span className="text-right text-sm font-medium text-[#8ec5ff]">
                      {row.state}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-[15px] leading-relaxed text-white/60">
                {t.repereNote}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-snow px-6 py-32">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-20 md:grid-cols-2">
          <Reveal dir="left">
            <span className="mb-3 block text-2xl font-semibold tracking-tight text-azure">
              {t.aboutEyebrow}
            </span>
            <h2 className="text-[clamp(32px,4.5vw,40px)] font-bold leading-[1.17] tracking-[-0.015em]">
              {t.aboutTitle}
            </h2>
            <p className="mt-4 max-w-xl text-xl font-light text-graphite">
              {t.aboutText}
            </p>
            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {t.bullets.map((r) => (
                <li key={r} className="flex items-center gap-3 text-[17px] text-slate">
                  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 shrink-0">
                    <path d="M5 12.5 L10 17.5 L19 7" stroke="#0071e3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {r}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal dir="right">
            <div className="rounded-[28px] bg-fog p-12">
              <div className="grid grid-cols-1 gap-10 text-center">
                {counters.map((c) => (
                  <div key={c.l.fr}>
                    <span className="block text-[40px] font-bold tracking-[-0.6px]">
                      <Counter target={c.target} suffix={c.suffix} />
                    </span>
                    <span className="mt-1 block text-sm text-graphite">{c.l[locale]}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
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

export default function Home() {
  return <HomePage locale="fr" />;
}
