import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/motion-primitives";
import { TiltCard } from "@/components/tilt-card";
import { JsonLd } from "@/components/json-ld";
import { buildPageMetadata, blogListingJsonLd, seoPages } from "@/lib/seo";
import { getAllPosts, formatPostDate } from "@/lib/blog";

export const metadata: Metadata = buildPageMetadata(seoPages.blog);

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main>
      <JsonLd data={blogListingJsonLd(posts)} />

      {/* PAGE HEADER */}
      <header className="bg-fog px-6 pb-24 pt-40 text-center">
        <Reveal>
          <span className="mb-3 block text-2xl font-semibold tracking-tight text-azure">
            Blog
          </span>
          <h1 className="text-[clamp(48px,9vw,96px)] font-bold leading-[1.04] tracking-[-0.022em]">
            Conseils & guides.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-xl font-light text-graphite">
            Nos articles sur la création de sites web, le référencement SEO
            local, la performance et le design — pour les entreprises de
            Montbéliard et d&apos;ailleurs.
          </p>
        </Reveal>
      </header>

      {/* POSTS GRID */}
      <section className="bg-snow px-6 pb-32 pt-12">
        <div className="mx-auto grid max-w-300 grid-cols-1 gap-5 md:grid-cols-2">
          {posts.map((post, i) => (
            <Reveal key={post.slug} dir="zoom" delay={i * 0.1}>
              <TiltCard className="h-full rounded-card bg-fog">
                <Link href={`/blog/${post.slug}`} className="block h-full p-7">
                  <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wide">
                    <span className="text-azure">{post.category}</span>
                    <span className="h-1 w-1 rounded-full bg-silver" />
                    <time
                      dateTime={post.datePublished}
                      className="text-graphite"
                    >
                      {formatPostDate(post.datePublished)}
                    </time>
                    <span className="h-1 w-1 rounded-full bg-silver" />
                    <span className="text-graphite">
                      {post.readingMinutes} min de lecture
                    </span>
                  </div>
                  <h2 className="mt-4 text-2xl font-semibold tracking-tight">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-[17px] leading-relaxed text-graphite">
                    {post.excerpt}
                  </p>
                  <span className="mt-5 inline-block text-[17px] text-cobalt">
                    Lire l&apos;article ›
                  </span>
                </Link>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
