import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-silver bg-fog pt-12">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-12 px-6 py-8 md:grid-cols-[2fr_1fr_1fr_1fr]">
        <div>
          <Image
            src="/logoWCSsansfond.png"
            alt="WebCode Studio"
            width={612}
            height={408}
            className="h-16 w-auto object-contain"
          />
          <p className="my-3 max-w-[40ch] text-xs leading-relaxed text-graphite">
            Agence digitale premium spécialisée dans la création d&apos;expériences
            web exceptionnelles. Nous transformons vos ambitions en réalités
            numériques performantes.
          </p>
          <span className="inline-flex items-center gap-2 rounded-full bg-silver px-4 py-2 text-sm text-slate">
            <span className="h-2 w-2 rounded-full bg-[#34c759]" /> Disponible pour
            nouveaux projets
          </span>
        </div>

        <div className="flex flex-col gap-2">
          <h4 className="mb-2 text-xs font-semibold uppercase tracking-wide text-ink">
            Expertises
          </h4>
          <Link
            href="/creation-site-vitrine"
            className="text-xs text-graphite transition-colors hover:text-ink"
          >
            Sites Web Premium
          </Link>
          <Link
            href="/services"
            className="text-xs text-graphite transition-colors hover:text-ink"
          >
            Applications Mobiles
          </Link>
          <Link
            href="/services"
            className="text-xs text-graphite transition-colors hover:text-ink"
          >
            Design UI/UX
          </Link>
          <Link
            href="/projets"
            className="text-xs text-graphite transition-colors hover:text-ink"
          >
          Nos Projets
          </Link>
        </div>

        <div className="flex flex-col gap-2">
          <h4 className="mb-2 text-xs font-semibold uppercase tracking-wide text-ink">
            Recherches
          </h4>
          <Link
            href="/creation-site-web-montbeliard"
            className="text-xs text-graphite transition-colors hover:text-ink"
          >
            Création site web Montbéliard
          </Link>
          <Link
            href="/agence-web-montbeliard"
            className="text-xs text-graphite transition-colors hover:text-ink"
          >
            Agence web Montbéliard
          </Link>
          <Link
            href="/creation-site-vitrine"
            className="text-xs text-graphite transition-colors hover:text-ink"
          >
            Création site vitrine
          </Link>
        </div>

        <div className="flex flex-col gap-2">
          <h4 className="mb-2 text-xs font-semibold uppercase tracking-wide text-ink">
            Contact
          </h4>
          <span className="text-xs text-graphite">🌍 Clients internationaux</span>
          <a
            href="mailto:contact@webcodestudio.fr"
            className="text-xs text-graphite transition-colors hover:text-ink"
          >
            contact@webcodestudio.fr
          </a>
          <span className="text-xs text-graphite">Réponse sous 24h garantie</span>
        </div>
      </div>

      <div className="mx-auto max-w-[1200px] border-t border-silver px-6 py-5">
        <p className="text-xs text-graphite">
          © 2026 WebCode Studio. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
