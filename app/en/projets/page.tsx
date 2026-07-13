import type { Metadata } from "next";
import { ProjetsPage } from "@/app/projets/page";
import { buildPageMetadata, getSeoPage } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata(
  getSeoPage("projects", "en"),
  "en",
);

export default function EnglishProjectsPage() {
  return <ProjetsPage locale="en" />;
}
