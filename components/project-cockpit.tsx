const navItems = ["Vue d'ensemble", "Analytics", "Livrables", "Planning"];

const tasks = [
  ["Design responsive", "Validé hier", true],
  ["Paiement sécurisé", "Validé aujourd'hui", true],
  ["Optimisation SEO", "Terminé", true],
  ["Mise en production", "Prévue vendredi", false],
] as const;

function GridIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4 stroke-current">
      <rect x="3" y="3" width="5" height="5" rx="1" />
      <rect x="12" y="3" width="5" height="5" rx="1" />
      <rect x="3" y="12" width="5" height="5" rx="1" />
      <rect x="12" y="12" width="5" height="5" rx="1" />
    </svg>
  );
}

export function ProjectCockpit() {
  return (
    <div
      className="grid h-full w-full grid-cols-[52px_minmax(0,1fr)] bg-[#f7f9fc] text-left text-[#172033] sm:grid-cols-[180px_minmax(0,1fr)]"
      aria-label="Aperçu d'un espace client de suivi de projet"
    >
      <aside className="flex min-w-0 flex-col bg-[#0d1628] px-2 py-4 text-white sm:px-3 sm:py-5">
        <div className="flex items-center justify-center gap-2 px-1 pb-5 text-sm font-bold sm:justify-start">
          <span className="grid h-7 w-7 place-items-center rounded-lg bg-gradient-to-br from-[#2186ff] to-[#74bdff] text-xs">
            W
          </span>
          <span className="hidden sm:inline">WebCode</span>
        </div>

        <nav className="grid gap-1" aria-label="Navigation de l'aperçu">
          {navItems.map((item, index) => (
            <span
              key={item}
              className={`flex items-center justify-center gap-2 rounded-lg px-2 py-2 text-[10px] font-medium sm:justify-start ${
                index === 0
                  ? "bg-white/10 text-white"
                  : "text-[#94a1b8]"
              }`}
            >
              <GridIcon />
              <span className="hidden sm:inline">{item}</span>
            </span>
          ))}
        </nav>

        <div className="mt-auto flex items-center justify-center gap-2 border-t border-white/10 px-1 pt-3 sm:justify-start">
          <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#dcecff] text-[9px] font-bold text-[#1766b5]">
            QM
          </span>
          <span className="hidden sm:block">
            <strong className="block text-[10px]">Quentin</strong>
            <small className="block text-[8px] text-[#7f8da6]">
              Administrateur
            </small>
          </span>
        </div>
      </aside>

      <section className="min-w-0 overflow-hidden">
        <div className="flex h-11 items-center justify-between border-b border-[#e6eaf0] bg-white/90 px-3 sm:px-5">
          <div className="text-[9px] font-semibold sm:text-[10px]">
            <span className="text-[#9099a8]">Projets / </span>Maison Noma
          </div>
          <span className="hidden items-center gap-1.5 rounded-full border border-[#d8eee0] bg-[#f0fbf4] px-2 py-1 text-[8px] font-semibold text-[#27824a] sm:inline-flex">
            <i className="h-1.5 w-1.5 rounded-full bg-[#31b866]" /> Projet en ligne
          </span>
        </div>

        <div className="p-3 sm:p-5">
          <div className="flex items-end justify-between gap-3">
            <div>
              <span className="text-[8px] font-bold tracking-[0.08em] text-[#1677ff]">
                REFONTE E-COMMERCE
              </span>
              <h2 className="mt-1 text-base font-bold leading-tight tracking-[-0.035em] sm:text-xl">
                Bonjour, Maison Noma.
              </h2>
              <p className="mt-1 hidden text-[9px] text-[#7a8494] sm:block">
                Votre projet avance comme prévu. Voici l&apos;essentiel.
              </p>
            </div>
            <span className="hidden text-[8px] text-[#919aaa] md:block">
              Mise à jour aujourd&apos;hui, 09:42
            </span>
          </div>

          <div className="mt-3 grid grid-cols-3 gap-1.5 sm:gap-2.5">
            <article className="rounded-xl border border-[#e5e9ef] bg-white p-2 shadow-sm sm:p-3">
              <span className="block text-[7px] text-[#7f8999] sm:text-[8px]">
                Avancement global
              </span>
              <strong className="mt-1 block text-sm leading-none tracking-[-0.04em] sm:text-lg">
                86%
              </strong>
              <div className="mt-2 h-1 overflow-hidden rounded-full bg-[#edf0f4]">
                <i className="block h-full w-[86%] rounded-full bg-gradient-to-r from-[#1677ff] to-[#65b1ff]" />
              </div>
            </article>
            <article className="rounded-xl border border-[#e5e9ef] bg-white p-2 shadow-sm sm:p-3">
              <span className="block text-[7px] text-[#7f8999] sm:text-[8px]">
                Performance
              </span>
              <strong className="mt-1 block text-sm leading-none tracking-[-0.04em] sm:text-lg">
                98<small className="text-[8px] font-medium text-[#9aa2af]">/100</small>
              </strong>
              <em className="mt-2 hidden text-[7px] not-italic text-[#29945a] sm:block">
                +12 points
              </em>
            </article>
            <article className="rounded-xl border border-[#e5e9ef] bg-white p-2 shadow-sm sm:p-3">
              <span className="block text-[7px] text-[#7f8999] sm:text-[8px]">
                Conversion
              </span>
              <strong className="mt-1 block text-sm leading-none tracking-[-0.04em] sm:text-lg">
                4,8%
              </strong>
              <em className="mt-2 hidden text-[7px] not-italic text-[#29945a] sm:block">
                +31% ce mois
              </em>
            </article>
          </div>

          <div className="mt-2 grid gap-2 md:grid-cols-[minmax(0,1.7fr)_minmax(180px,0.8fr)]">
            <article className="min-w-0 rounded-xl border border-[#e5e9ef] bg-white p-3 shadow-sm">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className="block text-[8px] text-[#7f8999]">
                    Visites qualifiées
                  </span>
                  <strong className="mt-0.5 block text-sm">24 680</strong>
                </div>
                <span className="hidden rounded-md border border-[#e6eaf0] bg-[#fafbfc] px-2 py-1 text-[7px] text-[#697386] sm:block">
                  30 derniers jours
                </span>
              </div>
              <svg
                viewBox="0 0 620 150"
                preserveAspectRatio="none"
                className="mt-2 h-28 w-full overflow-visible"
                role="img"
                aria-label="Courbe de progression des visites"
              >
                <defs>
                  <linearGradient id="cockpit-chart-fill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#1677ff" stopOpacity=".22" />
                    <stop offset="100%" stopColor="#1677ff" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M0 20H620M0 75H620M0 130H620" fill="none" stroke="#edf0f4" />
                <path
                  d="M0 126 C45 122 56 106 92 109 S150 92 184 96 S238 65 278 77 S333 58 370 61 S423 32 464 44 S521 20 552 27 S594 8 620 12 L620 150 L0 150 Z"
                  fill="url(#cockpit-chart-fill)"
                />
                <path
                  d="M0 126 C45 122 56 106 92 109 S150 92 184 96 S238 65 278 77 S333 58 370 61 S423 32 464 44 S521 20 552 27 S594 8 620 12"
                  fill="none"
                  stroke="#1677ff"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <circle cx="552" cy="27" r="5" fill="#fff" stroke="#1677ff" strokeWidth="3" />
              </svg>
            </article>

            <article className="hidden rounded-xl border border-[#e5e9ef] bg-white p-3 shadow-sm md:block">
              <div className="flex items-start justify-between">
                <div>
                  <span className="block text-[8px] text-[#7f8999]">Sprint actuel</span>
                  <strong className="mt-0.5 block text-sm">Finalisation</strong>
                </div>
                <span className="grid h-6 w-7 place-items-center rounded-md bg-[#edf5ff] text-[8px] font-bold text-[#1677ff]">
                  3/4
                </span>
              </div>
              <ul className="mt-3 grid gap-2">
                {tasks.map(([title, detail, done]) => (
                  <li key={title} className="flex items-center gap-2">
                    <i
                      className={`grid h-4 w-4 shrink-0 place-items-center rounded-full border text-[8px] not-italic ${
                        done
                          ? "border-[#2bb467] bg-[#2bb467] text-white"
                          : "border-[#cfd5df]"
                      }`}
                    >
                      {done ? "✓" : ""}
                    </i>
                    <span>
                      <strong className="block text-[8px] leading-tight">{title}</strong>
                      <small className="block text-[7px] text-[#9aa2af]">{detail}</small>
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}

const endpoints = [
  ["GET", "/api/products", "200", "62 ms"],
  ["POST", "/api/checkout", "201", "118 ms"],
  ["GET", "/api/orders", "200", "74 ms"],
  ["PATCH", "/api/customers/:id", "200", "91 ms"],
] as const;

const pipeline = [
  ["Tests unitaires", "1m 08s"],
  ["Build production", "42s"],
  ["Migration database", "12s"],
  ["Déploiement", "28s"],
] as const;

export function BackendCockpit() {
  const backendNav = ["Dashboard", "API", "Base de données", "Déploiements"];

  return (
    <div
      className="grid h-full w-full grid-cols-[52px_minmax(0,1fr)] bg-[#0d111b] text-left text-[#e8edf5] sm:grid-cols-[180px_minmax(0,1fr)]"
      aria-label="Aperçu du backend et de l'infrastructure du projet"
    >
      <aside className="flex min-w-0 flex-col border-r border-white/5 bg-[#080b12] px-2 py-4 sm:px-3 sm:py-5">
        <div className="flex items-center justify-center gap-2 px-1 pb-5 text-sm font-bold sm:justify-start">
          <span className="grid h-7 w-7 place-items-center rounded-lg bg-gradient-to-br from-[#8b5cf6] to-[#3b82f6] text-xs">
            W
          </span>
          <span className="hidden sm:inline">WebCode API</span>
        </div>

        <nav className="grid gap-1" aria-label="Navigation backend">
          {backendNav.map((item, index) => (
            <span
              key={item}
              className={`flex items-center justify-center gap-2 rounded-lg px-2 py-2 text-[10px] font-medium sm:justify-start ${
                index === 0
                  ? "bg-[#7c3aed]/15 text-[#b99aff]"
                  : "text-[#788399]"
              }`}
            >
              <GridIcon />
              <span className="hidden sm:inline">{item}</span>
            </span>
          ))}
        </nav>

        <div className="mt-auto border-t border-white/5 px-1 pt-3">
          <span className="flex items-center justify-center gap-2 sm:justify-start">
            <i className="h-2 w-2 rounded-full bg-[#31d17c] shadow-[0_0_10px_rgba(49,209,124,.65)]" />
            <span className="hidden sm:block">
              <strong className="block text-[9px] text-[#d9e1ee]">Production</strong>
              <small className="block text-[7px] text-[#667085]">Tous les systèmes opérationnels</small>
            </span>
          </span>
        </div>
      </aside>

      <section className="min-w-0 overflow-hidden">
        <div className="flex h-11 items-center justify-between border-b border-white/5 bg-[#111623] px-3 sm:px-5">
          <div className="font-mono text-[8px] text-[#7f8ba0] sm:text-[9px]">
            api.maisonnoma.fr <span className="text-[#394255]">/</span> overview
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#1f6b49] bg-[#123a2b] px-2 py-1 text-[7px] font-semibold text-[#65e6a7] sm:text-[8px]">
            <i className="h-1.5 w-1.5 rounded-full bg-[#40db8e]" /> LIVE
          </span>
        </div>

        <div className="p-3 sm:p-5">
          <div className="flex items-end justify-between gap-3">
            <div>
              <span className="text-[8px] font-bold tracking-[0.1em] text-[#9d7bff]">
                BACKEND & INFRASTRUCTURE
              </span>
              <h2 className="mt-1 text-base font-bold leading-tight tracking-[-0.025em] sm:text-xl">
                Système en bonne santé.
              </h2>
              <p className="mt-1 hidden text-[9px] text-[#788399] sm:block">
                API, base de données et déploiements supervisés en temps réel.
              </p>
            </div>
            <span className="hidden font-mono text-[8px] text-[#556176] md:block">
              region: eu-west-3
            </span>
          </div>

          <div className="mt-3 grid grid-cols-3 gap-1.5 sm:gap-2.5">
            {[
              ["Disponibilité API", "99,99%", "+0,02%"],
              ["Temps de réponse", "84 ms", "-18 ms"],
              ["Requêtes / jour", "12,4k", "+8,6%"],
            ].map(([label, value, delta]) => (
              <article key={label} className="rounded-xl border border-white/5 bg-[#141a28] p-2 shadow-sm sm:p-3">
                <span className="block text-[7px] text-[#758096] sm:text-[8px]">{label}</span>
                <strong className="mt-1 block text-sm leading-none tracking-[-0.03em] text-white sm:text-lg">
                  {value}
                </strong>
                <em className="mt-2 hidden text-[7px] not-italic text-[#4ed99a] sm:block">{delta}</em>
              </article>
            ))}
          </div>

          <div className="mt-2 grid gap-2 md:grid-cols-[minmax(0,1.5fr)_minmax(190px,.85fr)]">
            <article className="min-w-0 rounded-xl border border-white/5 bg-[#141a28] p-3 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <span className="block text-[8px] text-[#758096]">Activité API</span>
                  <strong className="mt-0.5 block text-sm text-white">Dernières requêtes</strong>
                </div>
                <span className="rounded-md border border-white/5 bg-[#0e131e] px-2 py-1 font-mono text-[7px] text-[#7c899e]">
                  temps réel
                </span>
              </div>

              <div className="mt-3 overflow-hidden rounded-lg border border-white/5">
                {endpoints.map(([method, path, status, latency]) => (
                  <div
                    key={`${method}-${path}`}
                    className="grid grid-cols-[42px_minmax(0,1fr)_32px_42px] items-center gap-2 border-b border-white/5 bg-[#0f1420] px-2 py-2 font-mono text-[7px] last:border-0 sm:grid-cols-[48px_minmax(0,1fr)_36px_48px] sm:text-[8px]"
                  >
                    <span className={method === "POST" ? "text-[#f7b955]" : method === "PATCH" ? "text-[#b99aff]" : "text-[#62b4ff]"}>
                      {method}
                    </span>
                    <span className="truncate text-[#c4ccda]">{path}</span>
                    <span className="text-[#4ed99a]">{status}</span>
                    <span className="text-right text-[#667085]">{latency}</span>
                  </div>
                ))}
              </div>

              <div className="mt-3 hidden rounded-lg bg-[#090d15] p-2 font-mono text-[7px] leading-relaxed text-[#657086] sm:block">
                <span className="text-[#4ed99a]">●</span> database connected&nbsp;&nbsp;
                <span className="text-[#62b4ff]">●</span> cache hit 94.2%&nbsp;&nbsp;
                <span className="text-[#b99aff]">●</span> queue 0 pending
              </div>
            </article>

            <article className="hidden rounded-xl border border-white/5 bg-[#141a28] p-3 shadow-sm md:block">
              <div className="flex items-start justify-between">
                <div>
                  <span className="block text-[8px] text-[#758096]">Dernier déploiement</span>
                  <strong className="mt-0.5 block text-sm text-white">v2.8.4</strong>
                </div>
                <span className="rounded-md bg-[#123a2b] px-2 py-1 text-[7px] font-bold text-[#65e6a7]">SUCCÈS</span>
              </div>
              <p className="mt-2 font-mono text-[7px] text-[#667085]">a91c4e2 · main · il y a 18 min</p>
              <ul className="mt-3 grid gap-2">
                {pipeline.map(([label, duration]) => (
                  <li key={label} className="flex items-center gap-2">
                    <i className="grid h-4 w-4 shrink-0 place-items-center rounded-full bg-[#1f6b49] text-[8px] not-italic text-[#84efbc]">✓</i>
                    <span className="min-w-0 flex-1">
                      <strong className="block truncate text-[8px] leading-tight text-[#d7deea]">{label}</strong>
                      <small className="block text-[7px] text-[#667085]">{duration}</small>
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
