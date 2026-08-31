import type { Metadata } from "next";
import { RepereAuditPage } from "@/components/repere-audit-page";
import { buildPageMetadata, getSeoPage } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata(
  getSeoPage("repereAudit", "en"),
  "en",
);

export default function Page() {
  return <RepereAuditPage locale="en" />;
}
