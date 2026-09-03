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

## ⚠️ Reste à faire — items structurels (audit ECC)

Classés par priorité. Ceux-ci demandent une vraie modif d'architecture ou ton input, je ne les ai pas faits dans cette passe.

### 1. `<html lang="fr">` servi sur les pages anglaises — BLOQUANT SEO + a11y
Le layout racine code en dur `lang="fr"`. `HtmlLang` ne corrige qu'après hydratation côté client. Les crawlers et lecteurs d'écran reçoivent les pages `/en/*` en français.
**Fix :** passer à des route groups `app/(fr)` / `app/(en)` avec un root layout chacun (ou un segment `[locale]`). Restructuration ~1–2 h, touche tous les fichiers de route.

### 2. Menu hamburger (mobile) : pas une vraie modale — SC 2.4.3 / 4.1.2 (A)
`components/ui/hamburger-menu-overlay.tsx` : pas de `role="dialog"`, pas de `aria-modal`, pas de piège de focus, le reste de la page n'est pas `inert`. Un utilisateur clavier/lecteur d'écran sort du menu par l'arrière.
**Fix :** ~40 lignes — `role="dialog" aria-modal`, focus sur le 1er item à l'ouverture, retour au bouton à la fermeture, piège Tab, `inert` sur le reste.

### 3. Slideshow `/services` : souris uniquement — SC 2.1.1 (A)
`components/ui/animated-slideshow.tsx` : `<span onMouseEnter>` sans `tabIndex`, sans clavier, sans tactile. Impossible de changer de slide au clavier. Texte au repos à 20 % d'opacité (quasi invisible).
**Fix :** transformer chaque item en `<button>` dans une liste, sélection au focus/clic + hover ; ou marquer le widget `aria-hidden` s'il est décoratif.

### 4. `/services` : images Unsplash externes, `loading="eager"`, sans dimensions
8 images `images.unsplash.com`, 5 en eager, `<motion.img>` sans width/height → risque CLS + dépendance tierce.
**Fix :** héberger les images dans `public/`, passer par `next/image` avec dimensions.

### 5. Articles de blog sans liens internes
Le modèle `ContentBlock` n'a pas de bloc lien. Les articles (guide Montbéliard, refonte, SEO local) ne transmettent aucun jus vers `/creation-site-internet-montbeliard`, `/refonte-…`, `/agence-…`.
**Fix :** ajouter un tableau `relatedLinks` par article, rendu sous le corps + liens inline.

### 6. Contenu dupliqué entre les 2 landing locales
`area`, `why`, `work.text` sont **identiques mot pour mot** entre `creation-site-internet-montbeliard.ts` et `refonte-site-internet-montbeliard.ts` (FR + EN).
**Fix :** réécrire ces 3 blocs pour chaque page (garder seulement la liste des communes commune).

### 7. Accueil vs landing : cannibalisation
Le H1 de l'accueil (« Création de sites internet à Montbéliard ») est quasi identique à celui de `/creation-site-internet-montbeliard`. 3 URLs envoient le même signal.
**Fix :** rendre l'accueil plus « marque / positionnement », laisser les landing porter les requêtes exact-match.

### 8. Divers SEO (rapide)
- Meta descriptions > 160 car. (accueil ~180, creation ~200, repere-audit ~230) → tronquées en SERP.
- `/repere-audit` : H1 sans le mot-clé (« accessibilité » / « conformité » absents), title trop long.
- `Organization` sans `sameAs` (ajouter Google Business Profile, LinkedIn quand ils existent).
- `sitemap.ts` : `lastModified: new Date()` sur toutes les pages statiques → change à chaque déploiement. Utiliser de vraies dates.
- FAQ `/repere-audit` FR cite des montants d'amende précis (« 7 500 € ») alors que la version EN reste vague — incohérence + exposition juridique.
- « Support 24/7 » (home + services) : non vérifiable → adoucir (cf. ta règle « pas de métriques fabriquées »).
- Contraste : petits textes `text-azure` (`text-sm`) < 4,5:1 sur blanc → utiliser `text-cobalt` ou plus grand.

### 9. Divers a11y (rapide)
- Cibles tactiles footer < 24 px (SC 2.5.8) — augmenter le padding vertical des liens.
- Hero parallax : 15 liens pour 3 projets réels → `aria-hidden`+`tabIndex={-1}` sur les doublons, `group-focus-within:opacity-100` sur le contenu au survol.
- Page contact : saut de titres `<h1>` → `<h3>` (ajouter un `<h2>`).
- Test manuel du zoom 400 % (reflow SC 1.4.10) avec la nav fixe.

---

## Note

Le hook **GateGuard** d'ECC intercepte chaque première modification de fichier et chaque commande destructive pour demander une confirmation. Ça ralentit fortement une passe de corrections en masse. Pour la prochaine session, lancer avec `ECC_GATEGUARD=off` (ou ajouter `pre:edit-write:gateguard-fact-force` à `ECC_DISABLED_HOOKS`) si tu veux que j'enchaîne les items 2–9 rapidement.
