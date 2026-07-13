import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal, Magnetic } from "@/components/motion-primitives";
import { TiltCard } from "@/components/tilt-card";
import { JsonLd } from "@/components/json-ld";
import { buildPageMetadata, getSeoPage, projectsJsonLd } from "@/lib/seo";
import { getDictionary, localizeHref, type Locale } from "@/lib/i18n";

export const metadata: Metadata = buildPageMetadata(getSeoPage("projects"), "fr");

const projects = [
  {
    cat: "Site vitrine",
    location: "France",
    title: "RSCustom",
    desc: "Une expérience automobile sombre et immersive pour présenter les installations CarPlay, caméras de recul, éclairage et detailing.",
    img: "/projects/rscustom.jpg",
    href: "https://www.rscustom.fr",
    temporary: false,
  },
  {
    cat: "Site vitrine bilingue",
    location: "États-Unis",
    title: "Garage à la Carte",
    desc: "Un site premium pour un studio de transformation de garages à Orlando, avec services, réalisations et demande de devis.",
    img: "/projects/garage-a-la-carte.jpg",
    href: "https://www.garagealacarte.com",
    temporary: false,
  },
  {
    cat: "Site web & application mobile",
    location: "France",
    title: "Barber Industrie",
    desc: "Un écosystème web et mobile pour présenter l'équipe, partager les actualités du salon et simplifier la prise de rendez-vous.",
    img: "/projects/barber-industrie.jpg",
    href: "https://barberindustrie.fr",
    temporary: false,
  },
  {
    cat: "Site industriel",
    location: "France",
    title: "ERPI",
    desc: "Une présence digitale technique pour un bureau d'études spécialisé dans les process industriels, l'assemblage et la soudure robotisée.",
    img: "/projects/erpi.jpg",
    href: "https://erpi-tawny.vercel.app",
    temporary: true,
  },
];

const projectsCopy = {
  fr: {
    headerEyebrow: "Nos projets",
    headerTitle: (
      <>
        Sites web
        <br />
        sur mesure.
      </>
    ),
    headerText:
      "Une sélection de réalisations digitales — sites vitrines, interfaces premium et applications web ou mobiles conçues pour des clients en France et aux États-Unis.",
    temporary: "Lien provisoire",
    temporaryButton: "Voir la version provisoire",
    visitButton: "Visiter le site",
    imageAlt: "Page d'accueil du site",
    projects,
    ctaEyebrow: "Votre projet, ensuite",
    ctaTitle: "À vous de jouer.",
    ctaText:
      "Parlons de votre prochaine réalisation. Consultation gratuite, réponse sous 24h.",
  },
  en: {
    headerEyebrow: "Our projects",
    headerTitle: (
      <>
        Custom
        <br />
        websites.
      </>
    ),
    headerText:
      "A selection of digital work - showcase websites, premium interfaces and web or mobile applications created for clients in France and the United States.",
    temporary: "Temporary link",
    temporaryButton: "View temporary version",
    visitButton: "Visit website",
    imageAlt: "Homepage preview for",
    projects: [
      {
        ...projects[0],
        cat: "Showcase website",
        desc: "A dark, immersive automotive experience presenting CarPlay installations, rear cameras, lighting and detailing.",
      },
      {
        ...projects[1],
        cat: "Bilingual showcase website",
        location: "United States",
        desc: "A premium website for a garage transformation studio in Orlando, with services, projects and quote requests.",
      },
      {
        ...projects[2],
        cat: "Website & mobile app",
        desc: "A web and mobile ecosystem to present the team, share shop news and simplify appointment booking.",
      },
      {
        ...projects[3],
        cat: "Industrial website",
        desc: "A technical digital presence for an engineering office specialized in industrial processes, assembly and robotic welding.",
      },
    ],
    ctaEyebrow: "Your project next",
    ctaTitle: "Your turn.",
    ctaText:
      "Let's talk about your next launch. Free consultation, reply within 24h.",
  },
} as const satisfies Record<Locale, object>;

export function ProjetsPage({ locale = "fr" }: { locale?: Locale }) {
  const t = projectsCopy[locale];
  const common = getDictionary(locale).common;

  return (
    <main>
      <JsonLd data={projectsJsonLd(locale)} />
      <header className="bg-fog px-6 pb-20 pt-36 text-center">
        <Reveal>
          <span className="mb-3 block text-2xl font-semibold tracking-tight text-azure">
            {t.headerEyebrow}
          </span>
          <h1 className="text-[clamp(48px,9vw,96px)] font-bold leading-[1.04] tracking-[-0.022em]">
            {t.headerTitle}
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-xl font-light">
            {t.headerText}
          </p>
        </Reveal>
      </header>

      <section className="bg-fog px-6 pb-32 pt-12">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-5 md:grid-cols-2">
          {t.projects.map((p, i) => (
            <Reveal key={p.title} dir="zoom" delay={i * 0.1}>
              <TiltCard className="group h-full overflow-hidden rounded-[28px] bg-snow">
                <div className="relative aspect-[16/10] overflow-hidden bg-silver">
                  <Image
                    src={p.img}
                    alt={`${t.imageAlt} ${p.title}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 600px"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-7">
                  <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wide">
                    <span className="text-azure">{p.cat}</span>
                    <span className="h-1 w-1 rounded-full bg-silver" />
                    <span className="text-graphite">{p.location}</span>
                    {p.temporary ? (
                      <>
                        <span className="h-1 w-1 rounded-full bg-silver" />
                        <span className="rounded-full bg-azure/10 px-2 py-1 text-[10px] text-azure">
                          {t.temporary}
                        </span>
                      </>
                    ) : null}
                  </div>
                  <h3 className="my-2 text-2xl font-semibold tracking-tight">
                    {p.title}
                  </h3>
                  <p className="mb-4 text-[15px] leading-relaxed text-graphite">{p.desc}</p>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-[17px] text-cobalt hover:underline"
                  >
                    {p.temporary ? t.temporaryButton : t.visitButton}{" "}
                    <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-snow px-6 py-32 text-center">
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
