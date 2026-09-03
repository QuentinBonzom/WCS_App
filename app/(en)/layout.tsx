import type { Metadata } from "next";
import { SiteDocument } from "@/components/layout/site-document";
import { buildRootMetadata } from "@/lib/seo";

export const metadata: Metadata = buildRootMetadata("en");

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return <SiteDocument lang="en">{children}</SiteDocument>;
}
