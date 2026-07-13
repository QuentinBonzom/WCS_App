import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { SeoServicePage } from "@/components/seo-service-page";
import {
  buildPageMetadata,
  getSeoPage,
  serviceLandingJsonLd,
  type FaqItem,
} from "@/lib/seo";

const page = getSeoPage("creationSiteVitrine", "en");

export const metadata: Metadata = buildPageMetadata(page, "en");

const faq: FaqItem[] = [
  {
    question: "What is a professional showcase website for?",
    answer:
      "A showcase website presents your activity, services, trust signals and contact options. It reassures prospects and turns a search or recommendation into a concrete request.",
  },
  {
    question: "How many pages does a showcase website need?",
    answer:
      "A showcase website can start with a homepage, services page, projects or case studies page and contact page. Targeted SEO pages can then be added depending on your offers or geographic areas.",
  },
  {
    question: "Can a showcase website be optimized for SEO?",
    answer:
      "Yes. Even a showcase website needs precise content, clear structure, strong performance, clean metadata, a sitemap and targeted pages for priority searches.",
  },
  {
    question: "Is it suitable for a small business or independent professional?",
    answer:
      "Yes. A showcase website is often the best starting point for an artisan, independent professional, shop, practice or SME that wants a professional presence without building a complex application.",
  },
];

export default function EnglishCreationSiteVitrinePage() {
  return (
    <>
      <JsonLd
        data={serviceLandingJsonLd({
          page,
          serviceName: "Professional showcase website creation",
          serviceType: "Website design and development",
          faq,
          locale: "en",
        })}
      />
      <SeoServicePage
        locale="en"
        eyebrow="Showcase website creation"
        title={
          <>
            A showcase website
            <br />
            people want to contact.
          </>
        }
        intro="WebCode Studio creates professional showcase websites to present your activity, highlight your expertise and generate qualified contacts. Every page is designed to be clear, fast, credible and optimized for Google."
        primaryKeyword="showcase website creation"
        proofPoints={[
          "A clear presentation of your services, value proposition and trust signals.",
          "A premium responsive experience so your website stays credible on mobile and desktop.",
          "A solid SEO base to prepare indexing, internal linking and future targeted pages.",
        ]}
        sections={[
          {
            title: "A site that explains your offer simply",
            text: "A good showcase website must quickly answer essential questions: what you do, for whom, with which benefits, which proof and how to contact you. Commercial clarity comes before visual effects.",
          },
          {
            title: "Structured pages built to convert",
            text: "Home, services, projects, testimonials, FAQ and contact should form a logical journey. Visitors should be able to understand, compare, feel reassured and act without effort.",
          },
          {
            title: "Technical quality visible in use",
            text: "Loading time, accessibility, responsive behavior, image quality, metadata, forms and security all influence trust. A professional showcase website must feel stable and pleasant from the first visit.",
          },
          {
            title: "An evolutive base for your visibility",
            text: "The site can later host local pages, service pages, articles, client cases or SEO improvements. This helps grow visibility without rebuilding the project from scratch.",
          },
        ]}
        outcomes={[
          "Present your company professionally when a prospect searches for you on Google.",
          "Replace a scattered presence with a controlled central point: services, work, contact and credibility.",
          "Receive more qualified requests thanks to a clear form and coherent calls to action.",
          "Prepare your organic visibility with a clean structure and content that is easy to enrich.",
        ]}
        faq={faq}
      />
    </>
  );
}
