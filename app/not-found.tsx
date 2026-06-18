import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page introuvable",
  description:
    "La page que vous recherchez n'existe pas ou a été déplacée. Retrouvez nos services de création de sites web et applications.",
  robots: { index: false, follow: true },
};

const links = [
  { href: "/services", label: "Nos services" },
  { href: "/projets", label: "Réalisations" },
  { href: "/creation-site-web-montbeliard", label: "Création site web Montbéliard" },
  { href: "/contact", label: "Contact" },
];

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center bg-fog px-6 py-32 text-center">
      <span className="mb-3 block text-2xl font-semibold tracking-tight text-azure">
        Erreur 404
      </span>
      <h1 className="text-[clamp(40px,8vw,72px)] font-bold leading-[1.04] tracking-[-0.022em]">
        Page introuvable.
      </h1>
      <p className="mx-auto mt-5 max-w-xl text-xl font-light text-graphite">
        La page que vous recherchez n'existe pas ou a été déplacée. Voici quelques
        pistes pour retrouver votre chemin.
      </p>

      <Link
        href="/"
        className="mt-8 inline-flex rounded-full bg-azure px-6 py-3 text-xl text-white transition-colors hover:bg-[#0077ed]"
      >
        Retour à l&apos;accueil
      </Link>

      <nav className="mt-10 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[17px]">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-cobalt hover:underline"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </main>
  );
}
