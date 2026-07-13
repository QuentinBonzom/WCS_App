import type { Metadata } from "next";
import { ServicesPage } from "@/app/services/page";
import { buildPageMetadata, getSeoPage } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata(
  getSeoPage("services", "en"),
  "en",
);

export default function EnglishServicesPage() {
  return <ServicesPage locale="en" />;
}
