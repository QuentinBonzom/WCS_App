# WebCode Studio

Site vitrine construit avec Next.js, React, TypeScript et Tailwind CSS.

## Développement

```bash
npm install
npm run dev
```

Le site est ensuite disponible sur `http://localhost:3000`.

Copiez `.env.example` vers `.env.local` et renseignez `RESEND_API_KEY` pour
activer l'envoi du formulaire de contact. `NEXT_PUBLIC_SITE_URL` alimente les
URLs canoniques, le sitemap et les données structurées. `CONTACT_TO_EMAIL` est
l'adresse qui reçoit les demandes. Le domaine de l'adresse définie dans
`CONTACT_FROM_EMAIL` doit être vérifié dans Resend.

## Vérification

```bash
npm run typecheck
npm run build
```

## Structure

- `app/` : pages et styles globaux
- `components/` : composants réutilisables
- `lib/` : utilitaires partagés
