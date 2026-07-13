import type { Metadata } from "next";
import { ContactPage } from "@/app/contact/page";
import { buildPageMetadata, getSeoPage } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata(
  getSeoPage("contact", "en"),
  "en",
);

export default function EnglishContactPage() {
  return <ContactPage locale="en" />;
}
