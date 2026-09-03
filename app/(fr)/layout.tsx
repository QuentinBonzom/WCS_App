import type { Metadata } from "next";
import { SiteDocument } from "@/components/layout/site-document";
import { buildRootMetadata } from "@/lib/seo";

export const metadata: Metadata = buildRootMetadata("fr");

export default function FrLayout({ children }: { children: React.ReactNode }) {
  return <SiteDocument lang="fr">{children}</SiteDocument>;
}
