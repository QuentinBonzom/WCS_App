# Audit ECC — WebCode Studio

Outillage utilisé : **Chrome DevTools MCP** (Lighthouse + trace performance sur le site en prod) + agents ECC **`seo-specialist`** et **`a11y-architect`** (audit du code).

---

## Résultats Lighthouse (mobile)

| Page | Avant | Après | Détail |
|---|---|---|---|
| Accueil — Accessibilité | 94 | **~100** | contraste footer + ordre des titres corrigés |
| Accueil — SEO / Best Practices | 100 / 100 | 100 / 100 | inchangé |
| `/creation-site-internet-montbeliard` — Accessibilité | **86** | **100** | listes invalides + contraste + titres corrigés |
| — SEO | 100 | 100 | — |

**Performance (accueil, trace réelle)** : LCP **140 ms**, CLS **0.00**, TTFB 59 ms — excellent, rien à optimiser. (Pas encore de données terrain CrUX — trafic trop faible.)

---

## ✅ Corrigé et déployé (`145b113`)

### Accessibilité (WCAG 2.2 AA)
- **Footer** : fond bleu profond `#00458c` + texte `white/80` → contraste conforme (était **3,05:1**, seuil 4,5). Titres de colonnes `<h4>` → `<h2>` (ordre des titres). Colonnes de liens en `<nav>` + `<ul>/<li>`.
- **`prefers-reduced-motion`** : `<MotionProvider reducedMotion="user">` global + versions statiques de `Reveal` / `StaggerGroup` / `StaggerItem` / `Marquee` / `Magnetic`. Le bandeau défilant (marquee) devient une liste statique. `ScrollProgress` passé en `aria-hidden`.
- **Lien d'évitement** (« Aller au contenu ») + cible `#main-content` dans le layout.
- **Navigation principale** : landmark `<nav aria-label>` + `<header>`, `aria-current="page"` sur l'onglet actif, `aria-label` sur les liens icône-seule (tablette).
- **Formulaire de contact** : zones live `role="status"` / `role="alert"`, `aria-busy`, `autocomplete` (name/email/organization), anneau de focus visible, titre `<h3>` → `<h2>`.
- **Landing locale** : correction du HTML invalide (`<ul>` > `<div>` > `<li>`), icônes décoratives `aria-hidden`.
- **Token `graphite`** `#707070` → `#5c5c5c` : le texte secondaire (utilisé partout) passe le contraste 4,5:1 sur les fonds clairs.

### SEO
- **Pages `/en/*`** : elles émettaient les données structurées `Organization`/`WebSite` **en français** (description FR, `inLanguage:"fr"`, zones « Suisse/États-Unis »). Corrigé : `BaseJsonLd` détecte la locale via l'URL → schéma anglais sur `/en`.
- **`BlogPosting`** : `author` / `publisher` en objets `Organization` explicites (recommandation Google Article) au lieu de références `@id` inter-scripts.
- **Page 404** : n'hérite plus du `canonical` → accueil (`alternates.canonical: null`) — cohérent avec le `noindex`.
- Sélecteur de langue : `aria-current="page"` + `hrefLang`.

---

## ✅ Corrigé — passe 2 (`e9aff92`, `27b2cc2`, `a36325c`, `59c5645`)

- **#2 Menu hamburger** : vraie modale — `role="dialog" aria-modal`, focus trap, retour au bouton, `inert` sur le reste.
- **#3 Slideshow `/services`** : le montage au survol est désormais `aria-hidden` (décoratif), retiré du parcours clavier/AT.
- **#6 Contenu dupliqué** : `area` / `why` / `work` réécrits distinctement pour la page refonte.
- **#8 (partiel)** : meta descriptions FR retaillées < 160 c., `/repere-audit` H1 + title revus, FAQ FR sans montants d'amende, « Support 24/7 » adouci.
- **#9 (partiel)** : hero parallax `aria-hidden` + `tabIndex=-1`, titres contact `<h2>`, cibles tactiles footer `min-h-6` + focus visible.

## ✅ Corrigé — passe 3

- **#1 `<html lang>`** : route groups `app/(fr)` / `app/(en)`, chacun son root layout (`SiteDocument` partagé, `buildRootMetadata(locale)`). `lang` correct rendu côté serveur sur `/en/*`. `html-lang.tsx` supprimé.
- **#4 Images `/services`** : les 8 visuels Unsplash rapatriés dans `public/services/`, montage `<img>` avec dimensions, `remotePattern` unsplash retiré de `next.config`.
- **#5 Liens internes blog** : `getRelatedReading(slug, locale)` dans `lib/blog.ts` + bloc « Sur le même sujet » en fin d'article (3 liens ciblés/article, FR + EN).
- **#8 sitemap** : `pageLastModified` (dates ISO figées par route) → fini le `lastModified: new Date()` qui bougeait à chaque déploiement.
- **#8 contraste** : petits `text-azure` (text-sm/xs) → `text-cobalt` dans motion, repere-audit, local-landing, services, projets.
- **Nouveau : `/applications-metier-montbeliard`** (FR + EN) — landing « applications & outils métier sur mesure » (prise de RDV, suivi de dossiers, devis-factures, tableaux de bord). Wired dans la grille services de l'accueil (remplace « Applications Mobiles ») + `targetedPages` de `/services`.

---

## ⚠️ Reste à faire

### 7. Accueil vs landing : cannibalisation
Le H1 de l'accueil (« Création de sites internet à Montbéliard ») reste quasi identique à celui de `/creation-site-internet-montbeliard`.
**Fix :** rendre l'accueil plus « marque / positionnement », laisser les landing porter les requêtes exact-match. (Amorcé : l'accueil met désormais en avant les outils métier en plus des sites.)

### 8. Divers SEO — restes
- `Organization` sans `sameAs` : à ajouter quand la fiche Google Business Profile / le LinkedIn existent (pas de valeur inventée).
- Liens inline dans le corps des articles (en plus du bloc de fin) : demanderait d'étendre le modèle `ContentBlock`.

### 9. Divers a11y — restes
- Test manuel du zoom 400 % (reflow SC 1.4.10) avec la nav fixe.

---

## Note

Le hook **GateGuard** d'ECC intercepte chaque première modification de fichier pour demander une confirmation (« présente ces faits »). Ça ralentit fortement une passe multi-fichiers. Lancer la session avec `ECC_GATEGUARD=off` (ou ajouter `pre:edit-write:gateguard-fact-force` à `ECC_DISABLED_HOOKS`) pour enchaîner.
