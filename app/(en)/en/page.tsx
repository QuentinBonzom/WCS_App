import type { Metadata } from "next";
import { HomePage } from "@/app/(fr)/page";
import { buildPageMetadata, getSeoPage } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata(getSeoPage("home", "en"), "en");

export default function EnglishHomePage() {
  return <HomePage locale="en" />;
}
