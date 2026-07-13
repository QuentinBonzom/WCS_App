import type { Metadata } from "next";
import { BlogPage } from "@/app/blog/page";
import { buildPageMetadata, getSeoPage } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata(
  getSeoPage("blog", "en"),
  "en",
);

export default function EnglishBlogPage() {
  return <BlogPage locale="en" />;
}
