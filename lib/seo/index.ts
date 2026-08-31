/**
 * SEO layer, split by concern:
 * - `site`     — siteConfig, URL helpers, shared types (SeoPage, FaqItem)
 * - `pages`    — per-route metadata catalog (seoPages, getSeoPage, sitemapPages)
 * - `catalog`  — services & projects data used by structured data
 * - `metadata` — Next.js Metadata builders (buildPageMetadata, buildPostMetadata)
 * - `json-ld`  — schema.org structured-data builders
 */
export * from "./site";
export * from "./pages";
export * from "./catalog";
export * from "./metadata";
export * from "./json-ld";
