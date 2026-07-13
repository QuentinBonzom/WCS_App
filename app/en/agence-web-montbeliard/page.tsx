import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { SeoServicePage } from "@/components/seo-service-page";
import {
  buildPageMetadata,
  getSeoPage,
  serviceLandingJsonLd,
  type FaqItem,
} from "@/lib/seo";

const page = getSeoPage("agenceWebMontbeliard", "en");

export const metadata: Metadata = buildPageMetadata(page, "en");

const faq: FaqItem[] = [
  {
    question: "Why choose a web agency in Montbéliard?",
    answer:
      "A local agency better understands the region, the expectations of local businesses and searches around Montbéliard or Belfort. It also makes project scoping and communication easier.",
  },
  {
    question: "Does WebCode Studio only create showcase websites?",
    answer:
      "No. The studio also works on mobile applications, UI/UX interfaces, redesigns, SEO optimization, maintenance and digital support depending on the project needs.",
  },
  {
    question: "Can you redesign an existing website?",
    answer:
      "Yes. A redesign can start from an existing site when the goal is to modernize the image, improve performance, clarify the offer, fix SEO foundations or increase conversions.",
  },
  {
    question: "How does the first conversation work?",
    answer:
      "The first conversation is used to understand your activity, goals, audience, constraints and timeline. Then you receive a clear recommendation and a quote adapted to the scope.",
  },
];

export default function EnglishAgenceWebMontbeliardPage() {
  return (
    <>
      <JsonLd
        data={serviceLandingJsonLd({
          page,
          serviceName: "Web agency in Montbéliard",
          serviceType: "Digital agency",
          faq,
          locale: "en",
        })}
      />
      <SeoServicePage
        locale="en"
        eyebrow="Web agency in Montbéliard"
        title={
          <>
            A result-driven
            <br />
            web agency.
          </>
        }
        intro="WebCode Studio supports companies in Montbéliard and the Belfort-Montbéliard area with the creation, redesign and optimization of their digital presence: website, mobile application, UI/UX and SEO."
        primaryKeyword="web agency Montbéliard"
        proofPoints={[
          "A technical partner able to scope, design, develop and optimize your digital presence.",
          "A custom approach: no generic template pasted onto your activity, but a structure adapted to your goals.",
          "Concrete follow-up after launch: performance, SEO, maintenance, new pages and continuous improvement.",
        ]}
        sections={[
          {
            title: "Strategy before production",
            text: "The project starts from your goals: generate requests, present expertise, recruit, sell a service or modernize your image. The structure of the site comes from this strategy, not from a purely aesthetic choice.",
          },
          {
            title: "Premium execution quality",
            text: "Design, development, responsive behavior, animations, performance and SEO are handled together. The goal is a credible and smooth experience, not just a visual showcase.",
          },
          {
            title: "A partner for local companies",
            text: "Local queries such as web agency Montbéliard, website creation Montbéliard or web developer Montbéliard require targeted content, a clean technical base and coherent trust signals.",
          },
          {
            title: "A long-term view of the website",
            text: "A good website must be able to evolve: service pages, client cases, SEO content, analytics follow-up, UX improvements, automations or connections to business tools. The base is designed not to block these evolutions.",
          },
        ]}
        outcomes={[
          "Clarify your positioning with a more professional and coherent digital presence.",
          "Improve local visibility on searches linked to Montbéliard, Belfort and your service area.",
          "Reduce friction between visiting the site and contacting you with better messages and CTAs.",
          "Keep an available technical partner to evolve the site after launch.",
        ]}
        faq={faq}
      />
    </>
  );
}
