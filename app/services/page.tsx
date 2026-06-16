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
import { JsonLd } from "@/components/json-ld";
import { buildPageMetadata, seoPages, servicesJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata(seoPages.services);

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
];

export default function ServicesPage() {
  return (
    <main>
      <JsonLd data={servicesJsonLd()} />
      {/* PAGE HEADER */}
      <header className="bg-fog px-6 pb-24 pt-40 text-center">
        <Reveal>
          <span className="mb-3 block text-2xl font-semibold tracking-tight text-azure">
            Nos services
          </span>
          <h1 className="text-[clamp(48px,9vw,96px)] font-bold leading-[1.04] tracking-[-0.022em]">
            Sites web, apps
            <br />
            et SEO premium.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-xl font-light text-graphite">
            Création de sites internet, applications mobiles, design UI/UX et
            optimisation SEO pour construire une présence digitale qui convertit.
          </p>
          <Magnetic className="mt-8">
            <Link
              href="#showcases"
              className="inline-flex rounded-full bg-azure px-6 py-3 text-xl text-white transition-colors hover:bg-[#0077ed]"
            >
              Découvrir
            </Link>
          </Magnetic>
        </Reveal>
      </header>

      {/* FEATURE SHOWCASES (light 2-column splits, alternating bands) */}
      <div id="showcases">
        <FeatureShowcase
          index="01 / Développement Web"
          band="snow"
          eyebrow="Développement Web"
          title={<>Des sites qui performent.</>}
          sub="Sites web sur mesure, rapides et responsive, conçus pour convertir vos visiteurs en clients."
          tags={["Responsive Design", "SEO", "Performance"]}
          href="/creation-site-web-montbeliard"
          linkLabel="Créer un site web"
        >
          <BrowserMock
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=70"
            alt="Aperçu d'un site web analytics"
          />
        </FeatureShowcase>

        <FeatureShowcase
          index="02 / Applications Mobiles"
          band="fog"
          eyebrow="Applications Mobiles"
          title={<>Dans la poche de vos clients.</>}
          sub="Applications natives et cross-platform offrant une expérience exceptionnelle, sur iOS comme Android."
          tags={["iOS & Android", "Cross-platform", "App Store"]}
          linkLabel="Créer mon application"
          reverse
        >
          <PhoneMock
            src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=70"
            alt="Aperçu d'une application mobile"
          />
        </FeatureShowcase>

        <FeatureShowcase
          index="03 / Design UI/UX"
          band="snow"
          eyebrow="Design UI/UX"
          title={<>Des interfaces mémorables.</>}
          sub="Conception d'interfaces intuitives et d'expériences qui captivent vos utilisateurs, du prototype au design system."
          tags={["Prototyping", "User Research", "Design System"]}
          linkLabel="Concevoir mon produit"
        >
          <BrowserMock
            src="https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&w=1200&q=70"
            alt="Aperçu d'un design system"
          />
        </FeatureShowcase>
      </div>

      {/* MARQUEE */}
      <Marquee
        items={[
          "RESPONSIVE",
          "PERFORMANCE",
          "SEO",
          "iOS & ANDROID",
          "DESIGN SYSTEM",
          "ACCESSIBILITÉ",
        ]}
      />

      {/* PROCESS */}
      <section className="bg-fog px-6 py-32">
        <div className="mx-auto max-w-[1200px]">
          <Reveal className="mb-14 max-w-3xl">
            <span className="mb-3 block text-2xl font-semibold tracking-tight text-azure">
              Méthode
            </span>
            <h2 className="text-[clamp(32px,4.5vw,40px)] font-bold leading-[1.17] tracking-[-0.015em]">
              Du brief à la mise en ligne.
            </h2>
          </Reveal>

          <StaggerGroup className="grid grid-cols-1 gap-px overflow-hidden rounded-[28px] border border-silver bg-silver sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p) => (
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
              Et aussi
            </span>
            <h2 className="text-[clamp(32px,4.5vw,40px)] font-bold leading-[1.17] tracking-[-0.015em]">
              Un accompagnement complet.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
            {more.map((m, i) => (
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
              Pages utiles
            </span>
            <h2 className="text-[clamp(32px,4.5vw,40px)] font-bold leading-[1.17] tracking-[-0.015em]">
              Des offres pensées pour vos recherches.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
            {targetedPages.map((page) => (
              <Reveal key={page.href} dir="zoom">
                <Link
                  href={page.href}
                  className="block h-full rounded-[28px] bg-snow p-7 transition-transform hover:-translate-y-1"
                >
                  <h3 className="mb-3 text-2xl font-semibold tracking-tight">
                    {page.title}
                  </h3>
                  <p className="text-[17px] leading-relaxed text-graphite">
                    {page.desc}
                  </p>
                  <span className="mt-5 inline-block text-[17px] text-cobalt">
                    Lire la page ›
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
            Appel à l&apos;action
          </span>
          <h2 className="text-[clamp(48px,9vw,96px)] font-bold leading-[1.04] tracking-[-0.022em]">
            Démarrer mon projet.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-xl font-light">
            Consultation gratuite • Devis personnalisé • Réponse sous 24h
          </p>
          <Magnetic className="mt-8">
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-azure px-6 py-3 text-xl text-white transition-colors hover:bg-[#0077ed]"
            >
              Démarrer mon projet
            </Link>
          </Magnetic>
        </Reveal>
      </section>
    </main>
  );
}
