import type { Metadata } from "next";
import Link from "next/link";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { Reveal, Magnetic } from "@/components/motion-primitives";
import { TiltCard } from "@/components/tilt-card";
import { Counter } from "@/components/counter";
import { JsonLd } from "@/components/json-ld";
import { BackendCockpit, ProjectCockpit } from "@/components/project-cockpit";
import { breadcrumbJsonLd, buildPageMetadata, seoPages } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata(seoPages.home);

const services = [
  {
    title: "Développement Web",
    desc: "Sites sur mesure, rapides et responsive, conçus pour convertir vos visiteurs en clients.",
    icon: (
      <path d="M11 9 L5 16 L11 23 M21 9 L27 16 L21 23 M18 6 L14 26" stroke="#1d1d1f" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: "Applications Mobiles",
    desc: "Apps natives et cross-platform — iOS & Android — pour une expérience exceptionnelle.",
    icon: (
      <>
        <rect x="9" y="3" width="14" height="26" rx="3" stroke="#1d1d1f" strokeWidth="1.6" />
        <line x1="14" y1="25" x2="18" y2="25" stroke="#1d1d1f" strokeWidth="1.6" strokeLinecap="round" />
      </>
    ),
  },
  {
    title: "Design UI/UX",
    desc: "Interfaces intuitives et expériences mémorables, du prototype au design system.",
    icon: (
      <>
        <circle cx="16" cy="16" r="13" stroke="#1d1d1f" strokeWidth="1.6" />
        <circle cx="16" cy="16" r="4" stroke="#1d1d1f" strokeWidth="1.6" />
        <path d="M16 3 V12 M16 20 V29 M3 16 H12 M20 16 H29" stroke="#1d1d1f" strokeWidth="1.6" />
      </>
    ),
  },
];

const counters = [
  { target: 2, suffix: "+", l: "Pays" },
];

export default function Home() {
  return (
    <main>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Accueil", path: "/" },
        ])}
      />
      {/* HERO — Container Scroll */}
      <ContainerScroll
        backContent={<BackendCockpit />}
        titleComponent={
          <div className="mb-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1.5 text-sm font-medium text-slate backdrop-blur">
              <i className="h-2 w-2 rounded-full bg-[#30d158] shadow-[0_0_0_5px_rgba(48,209,88,0.12)]" />
              Disponible pour de nouveaux projets
            </span>
            <h1 className="mt-2 text-[clamp(40px,8vw,72px)] font-bold leading-[1.04] tracking-[-0.022em] text-ink">
              Création de sites web
              <br />
              et apps qui{" "}
              <span className="bg-gradient-to-r from-azure to-[#57b0ff] bg-clip-text text-transparent">
                convertissent
              </span>
              .
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-xl font-light leading-snug text-ink">
              Studio web à Montbéliard, nous concevons des sites rapides, des
              applications mobiles et des interfaces sur mesure pour transformer
              vos visiteurs en clients.
            </p>
            <Link href="/services" className="mt-5 inline-flex text-[17px] text-cobalt hover:underline">
              Découvrir nos services ›
            </Link>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-5 text-sm text-graphite">
              <span>◷&nbsp; Réponse sous 24h</span>
            </div>
          </div>
        }
      >
        <ProjectCockpit />
      </ContainerScroll>

      {/* SERVICES TEASER */}
      <section className="bg-fog px-6 py-32">
        <div className="mx-auto max-w-[1200px]">
          <Reveal className="mb-12 max-w-3xl">
            <span className="mb-3 block text-2xl font-semibold tracking-tight">
              Nos services
            </span>
            <h2 className="text-[clamp(40px,6vw,56px)] font-bold leading-[1.07] tracking-[-0.016em]">
              Pensés pour convertir.
            </h2>
            <p className="mt-4 max-w-xl text-xl font-light text-graphite">
              Trois expertises au cœur de votre projet digital : création de
              site internet, application mobile et design UI/UX orientés
              performance.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.title} dir="zoom" delay={i * 0.1}>
                <TiltCard className="h-full rounded-[28px] bg-snow p-7">
                  <svg viewBox="0 0 32 32" fill="none" className="mb-5 h-10 w-10">
                    {s.icon}
                  </svg>
                  <h3 className="mb-2 text-2xl font-semibold tracking-tight">
                    {s.title}
                  </h3>
                  <p className="mb-4 text-[17px] text-graphite">{s.desc}</p>
                  <Link href="/services" className="text-[17px] text-cobalt hover:underline">
                    En savoir plus ›
                  </Link>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-snow px-6 py-32">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-20 md:grid-cols-2">
          <Reveal dir="left">
            <span className="mb-3 block text-2xl font-semibold tracking-tight text-azure">
              Expertise confirmée
            </span>
            <h2 className="text-[clamp(32px,4.5vw,40px)] font-bold leading-[1.17] tracking-[-0.015em]">
              Vos idées, en réalité digitale.
            </h2>
            <p className="mt-4 max-w-xl text-xl font-light text-graphite">
              Développeur passionné, je crée des expériences web modernes et des
              applications mobiles sur mesure pour donner vie à vos projets.
            </p>
            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                "Design responsive",
                "Performance optimisée",
              "Référencement SEO",
                "Support 24/7",
              ].map((r) => (
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
                  <div key={c.l}>
                    <span className="block text-[40px] font-bold tracking-[-0.6px]">
                      <Counter target={c.target} suffix={c.suffix} />
                    </span>
                    <span className="mt-1 block text-sm text-graphite">{c.l}</span>
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
