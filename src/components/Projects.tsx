import { Section } from "./Section";
import { projects } from "@/content/projects";

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Selected work"
      title="Projects I'm proud of."
      description="A mix of distributed-systems infra, event-driven services, and indie engineering."
    >
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <article
            key={p.title}
            className="glass rounded-2xl p-6 hover-lift flex flex-col"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-lg font-semibold text-foreground">
                {p.title}
              </h3>
              <div className="flex items-center gap-2 shrink-0">
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub repository"
                    className="text-muted-foreground hover:text-accent transition"
                  >
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2 1-.3 2-.4 3-.4s2 .1 3 .4c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.7.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.2c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z" />
                    </svg>
                  </a>
                )}
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Project link"
                    className="text-muted-foreground hover:text-accent transition"
                  >
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        d="M7 17L17 7M9 7h8v8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                )}
              </div>
            </div>

            <p className="mt-1 text-sm text-accent/90 font-medium">
              {p.tagline}
            </p>

            <p className="mt-3 text-sm text-muted-foreground">
              {p.description}
            </p>

            <ul className="mt-4 space-y-1.5 flex-1">
              {p.bullets.map((b, i) => (
                <li
                  key={i}
                  className="text-sm text-muted-foreground/90 pl-4 relative leading-relaxed"
                >
                  <span className="absolute left-0 top-2 h-1 w-1 rounded-full bg-accent/60" />
                  {b}
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-1.5">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="text-xs px-2 py-0.5 rounded font-mono text-accent/90 bg-accent/10 border border-accent/20"
                >
                  {s}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
