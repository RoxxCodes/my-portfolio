import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/content/writing";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Deep-dive engineering posts on distributed systems, performance, and migrations.",
};

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function WritingIndex() {
  return (
    <div className="container-max pt-32 pb-24">
      <header className="max-w-2xl mb-14">
        <p className="font-mono text-xs uppercase tracking-widest text-accent mb-3">
          Writing
        </p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">
          Notes from production.
        </h1>
        <p className="mt-4 text-muted-foreground text-balance">
          Engineering stories from billing pipelines, broker migrations, and
          the kind of debugging that ends with a one-line DDL change.
        </p>
      </header>

      <ul className="space-y-3">
        {posts.map((p) => (
          <li key={p.slug}>
            <Link
              href={`/writing/${p.slug}`}
              className="group block glass rounded-2xl p-6 md:p-7 hover-lift"
            >
              <div className="flex items-baseline justify-between gap-4 mb-2 flex-wrap">
                <h2 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                  {p.title}
                </h2>
                <span className="font-mono text-xs text-muted-foreground shrink-0">
                  {formatDate(p.date)} · {p.readingMinutes} min
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {p.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-0.5 rounded font-mono text-accent/90 bg-accent/10 border border-accent/20"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
