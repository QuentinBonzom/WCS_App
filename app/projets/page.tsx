import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal, Magnetic } from "@/components/motion-primitives";
import { TiltCard } from "@/components/tilt-card";
import { JsonLd } from "@/components/json-ld";
import { buildPageMetadata, projectsJsonLd, seoPages } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata(seoPages.projects);

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
    href: "https://barber-industrie.vercel.app",
    temporary: true,
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

export default function ProjetsPage() {
  return (
    <main>
      <JsonLd data={projectsJsonLd()} />
      <header className="bg-fog px-6 pb-20 pt-36 text-center">
        <Reveal>
          <span className="mb-3 block text-2xl font-semibold tracking-tight text-azure">
            Nos projets
          </span>
          <h1 className="text-[clamp(48px,9vw,96px)] font-bold leading-[1.04] tracking-[-0.022em]">
            Sites web
            <br />
            sur mesure.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-xl font-light">
            Une sélection de réalisations digitales — sites vitrines, interfaces
            premium et applications web ou mobiles conçues pour des clients en
            France et aux États-Unis.
          </p>
        </Reveal>
      </header>

      <section className="bg-fog px-6 pb-32 pt-12">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-5 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.title} dir="zoom" delay={i * 0.1}>
              <TiltCard className="group h-full overflow-hidden rounded-[28px] bg-snow">
                <div className="relative aspect-[16/10] overflow-hidden bg-silver">
                  <Image
                    src={p.img}
                    alt={`Page d'accueil du site ${p.title}`}
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
                          Lien provisoire
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
                    {p.temporary ? "Voir la version provisoire" : "Visiter le site"}{" "}
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
            Votre projet, ensuite
          </span>
          <h2 className="text-[clamp(48px,9vw,96px)] font-bold leading-[1.04] tracking-[-0.022em]">
            À vous de jouer.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-xl font-light">
            Parlons de votre prochaine réalisation. Consultation gratuite, réponse
            sous 24h.
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
