import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { SeoServicePage } from "@/components/seo-service-page";
import {
  buildPageMetadata,
  getSeoPage,
  serviceLandingJsonLd,
  siteConfig,
  type FaqItem,
} from "@/lib/seo";

const page = getSeoPage("creationSiteWebMontbeliard", "en");

export const metadata: Metadata = buildPageMetadata(page, "en");

const faq: FaqItem[] = [
  {
    question: "How much does website creation in Montbéliard cost?",
    answer:
      "The price depends on the number of pages, design level, features and SEO work. A simple showcase website does not have the same budget as a custom platform. WebCode Studio provides a clear quote after scoping the need.",
  },
  {
    question: "Do you only work with clients in Montbéliard?",
    answer:
      "No. The studio supports businesses in Montbéliard, Belfort, across France and internationally. Local proximity can make exchanges easier, but the whole process can also be remote.",
  },
  {
    question: "Will the website be optimized for Google?",
    answer:
      "Yes. Technical structure, SEO metadata, performance, core content, sitemap and structured data are considered from the start to help Google index and understand the site.",
  },
  {
    question: "Can my Google Business Profile help my local SEO?",
    answer:
      "Yes, if it is consistent with the website: same business name, same service area, link to the right page, clear service description, photos, reviews and regular posts.",
  },
  {
    question: "Why is my site not ranking yet for website creation Montbéliard?",
    answer:
      "Several signals usually need to work together: a complete local page, clear internal linking, an active Google Business Profile, reviews, local backlinks and indexing time. Publishing a page is not always enough to rank quickly on a competitive query.",
  },
  {
    question: "Can I request improvements after launch?",
    answer:
      "Yes. The site can evolve with new pages, sections, SEO tracking, maintenance or conversion optimizations according to your priorities.",
  },
];

export default function EnglishCreationSiteWebMontbeliardPage() {
  return (
    <>
      <JsonLd
        data={serviceLandingJsonLd({
          page,
          serviceName: "Website creation in Montbéliard",
          serviceType: "Web development",
          faq,
          areaServed: siteConfig.localAreas,
          keywords: [
            "website creation Montbéliard",
            "web design Montbéliard",
            "website development Montbéliard",
            "web agency Montbéliard",
            "local SEO Montbéliard",
          ],
          locale: "en",
        })}
      />
      <SeoServicePage
        locale="en"
        eyebrow="Website creation in Montbéliard"
        title={
          <>
            Website creation
            <br />
            in Montbéliard.
          </>
        }
        intro="WebCode Studio creates custom websites for businesses, artisans, independents and shops in Montbéliard. The goal: be found on Google, reassure local prospects and turn visits into quote requests."
        primaryKeyword="website creation Montbéliard"
        proofPoints={[
          "A local landing page dedicated to the website creation Montbéliard query, with a clear structure and useful content.",
          "A clean SEO base: metadata, internal linking, sitemap, structured data, performance and Search Console follow-up.",
          "Consistency with your Google Business Profile: services, service area, reviews, photos and website link.",
        ]}
        sections={[
          {
            title: "A local page designed for Montbéliard",
            text: "A prospect searching for website creation in Montbéliard wants a nearby, credible provider who understands the local market. The page presents your offer, services, proof and calls to action clearly.",
          },
          {
            title: "A website connected to your Google Business Profile",
            text: "Your verified Google Business Profile is a strong starting point. The website then needs to confirm the same signals: brand name, service area, service description, clear link, local pages and precise content.",
          },
          {
            title: "An explicit local area",
            text: "The strategy targets Montbéliard and nearby searches: Pays de Montbéliard, Belfort, Audincourt, Sochaux, Valentigney, Exincourt, Bethoncourt and Héricourt. These areas are integrated naturally, without keyword stuffing.",
          },
          {
            title: "An architecture ready for SEO",
            text: "The website is built with Google-readable pages, clean URLs, coherent headings, clear Hn hierarchy, targeted content and internal links between home, services, projects, blog and local pages.",
          },
          {
            title: "A launch followed in Search Console",
            text: "The project can include domain configuration, redirects, sitemap, URL inspection, analytics and first checks after publication. You know whether Google discovers the page and what should be improved next.",
          },
        ]}
        outcomes={[
          "Help Google identify the page as a clear answer to website creation Montbéliard searches.",
          "Present a more professional image than social pages alone or old non-responsive websites.",
          "Turn visits from Google and your Business Profile into quote requests.",
          "Keep an evolutive base for SEO pages, case studies, reviews or targeted content.",
        ]}
        serviceAreas={[
          "Montbéliard",
          "Pays de Montbéliard",
          "Belfort",
          "Audincourt",
          "Sochaux",
          "Valentigney",
          "Exincourt",
          "Héricourt",
        ]}
        relatedLinks={[
          {
            href: "/agence-web-montbeliard",
            label: "Web agency in Montbéliard",
            description:
              "The pillar page to understand the full support: strategy, design, development, SEO and follow-up.",
          },
          {
            href: "/creation-site-vitrine",
            label: "Showcase website creation",
            description:
              "The most suitable format to present a local activity and generate qualified requests.",
          },
          {
            href: "/blog/creation-site-web-montbeliard-guide-2026",
            label: "Website creation guide",
            description:
              "Editorial content to strengthen relevance around local searches linked to Montbéliard.",
          },
          {
            href: "/projets",
            label: "WebCode Studio projects",
            description:
              "Examples of websites, digital experiences and apps already delivered to reassure prospects.",
          },
        ]}
        faq={faq}
      />
    </>
  );
}
