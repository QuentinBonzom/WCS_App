"use client";

import { usePathname } from "next/navigation";
import { baseJsonLd } from "@/lib/seo";
import { getLocaleFromPathname } from "@/lib/i18n";

type JsonLdProps = {
  data: Record<string, unknown>;
};

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

/**
 * Site-wide Organization + WebSite graph, localized from the current path so
 * `/en/*` pages emit English structured data instead of the French default.
 */
export function BaseJsonLd() {
  const locale = getLocaleFromPathname(usePathname());
  return <JsonLd data={baseJsonLd(locale)} />;
}
