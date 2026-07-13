import type { Metadata } from "next";
import { BlogPostPageContent } from "@/app/blog/[slug]/page";
import { buildPostMetadata } from "@/lib/seo";
import { getAllPosts, getPostBySlug } from "@/lib/blog";

type Params = { slug: string };

export function generateStaticParams() {
  return getAllPosts("en").map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug, "en");
  if (!post) return {};
  return buildPostMetadata(post, "en");
}

export default async function EnglishBlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  return <BlogPostPageContent slug={slug} locale="en" />;
}
