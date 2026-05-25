import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts, getPost } from "@/content/writing";
import { Prose } from "@/components/Prose";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      tags: post.tags,
    },
  };
}

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default async function PostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const { Content } = post;

  return (
    <article className="container-max pt-32 pb-24 max-w-3xl">
      <Link
        href="/writing"
        className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-accent transition mb-8"
      >
        <span aria-hidden>←</span> All notes
      </Link>

      <header className="mb-10">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="font-mono text-xs text-muted-foreground">
            {formatDate(post.date)}
          </span>
          <span className="text-border">·</span>
          <span className="font-mono text-xs text-muted-foreground">
            {post.readingMinutes} min read
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground text-balance leading-tight">
          {post.title}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground text-balance">
          {post.description}
        </p>
        <div className="mt-5 flex flex-wrap gap-1.5">
          {post.tags.map((t) => (
            <span
              key={t}
              className="text-xs px-2 py-0.5 rounded font-mono text-accent/90 bg-accent/10 border border-accent/20"
            >
              {t}
            </span>
          ))}
        </div>
      </header>

      <Prose>
        <Content />
      </Prose>

      <footer className="mt-16 pt-8 border-t border-border/60">
        <p className="text-sm text-muted-foreground">
          Thanks for reading. If this resonated, you can find me on{" "}
          <Link
            href="https://www.linkedin.com/in/roshangec"
            target="_blank"
            className="text-accent underline underline-offset-4 hover:text-accent/80"
          >
            LinkedIn
          </Link>{" "}
          or{" "}
          <Link
            href="mailto:roshangec@gmail.com"
            className="text-accent underline underline-offset-4 hover:text-accent/80"
          >
            send me an email
          </Link>
          .
        </p>
      </footer>
    </article>
  );
}
