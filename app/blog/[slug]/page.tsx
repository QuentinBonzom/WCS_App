import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Magnetic, Reveal } from "@/components/motion-primitives";
import { JsonLd } from "@/components/json-ld";
import { buildPostMetadata, blogPostingJsonLd } from "@/lib/seo";
import {
  blogPosts,
  getPostBySlug,
  formatPostDate,
  type ContentBlock,
} from "@/lib/blog";

type Params = { slug: string };

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return buildPostMetadata(post);
}

function Block({ block, lead = false }: { block: ContentBlock; lead?: boolean }) {
  switch (block.type) {
    case "h2":
      return (
        <h2 className="mt-14 scroll-mt-28 text-[clamp(25px,3.6vw,32px)] font-bold leading-[1.2] tracking-[-0.015em] text-ink text-balance">
          <span className="mr-3 inline-block h-[0.7em] w-1 translate-y-px rounded-full bg-azure align-middle" />
          {block.text}
        </h2>
      );
    case "p":
      if (lead) {
        return (
          <p className="text-[clamp(19px,2.4vw,22px)] font-light leading-[1.6] text-ink text-pretty">
            {block.text}
          </p>
        );
      }
      return (
        <p className="mt-6 text-[18px] leading-[1.8] text-slate text-pretty">
          {block.text}
        </p>
      );
    case "ul":
      return (
        <ul className="mt-6 space-y-3.5">
          {block.items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 text-[18px] leading-[1.7] text-slate text-pretty"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="mt-1 h-5 w-5 shrink-0"
                aria-hidden="true"
              >
                <path
                  d="M5 12.5 L10 17.5 L19 7"
                  stroke="#0071e3"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {item}
            </li>
          ))}
        </ul>
      );
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <main>
      <JsonLd data={blogPostingJsonLd(post)} />

      {/* ARTICLE HEADER */}
      <header className="bg-fog px-6 pb-16 pt-40">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/blog"
            className="text-[15px] text-cobalt hover:underline"
          >
            ‹ Tous les articles
          </Link>
          <div className="mt-5 flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wide">
            <span className="text-azure">{post.category}</span>
            <span className="h-1 w-1 rounded-full bg-silver" />
            <time dateTime={post.datePublished} className="text-graphite">
              {formatPostDate(post.datePublished)}
            </time>
            <span className="h-1 w-1 rounded-full bg-silver" />
            <span className="text-graphite">
              {post.readingMinutes} min de lecture
            </span>
          </div>
          <h1 className="mt-4 text-[clamp(34px,6vw,60px)] font-bold leading-[1.06] tracking-[-0.02em] text-balance">
            {post.title}
          </h1>
        </div>
      </header>

      {/* ARTICLE BODY */}
      <article className="bg-snow px-6 py-16">
        <div className="mx-auto max-w-170">
          {post.content.map((block, i) => (
            <Block key={i} block={block} lead={i === 0 && block.type === "p"} />
          ))}
        </div>
      </article>

      {/* CTA */}
      <section className="bg-fog px-6 py-28 text-center">
        <Reveal>
          <h2 className="text-[clamp(32px,5vw,48px)] font-bold leading-[1.1] tracking-[-0.016em]">
            Un projet de site web&nbsp;?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-xl font-light text-graphite">
            Consultation gratuite • Devis personnalisé • Réponse sous 24h
          </p>
          <Magnetic className="mt-8">
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-azure px-6 py-3 text-xl text-white transition-colors hover:bg-[#0077ed]"
            >
              Démarrer mon projet
            </Link>
          </Magnetic>
        </Reveal>
      </section>
    </main>
  );
}
