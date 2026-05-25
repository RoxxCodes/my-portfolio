import Link from "next/link";
import { profile } from "@/content/profile";
import { Terminal } from "./Terminal";

export function Hero() {
  return (
    <section className="relative min-h-[88vh] flex items-center pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-accent/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-cyan-500/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob pointer-events-none [animation-delay:2s]" />

      <div className="container-max relative">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-3 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/60 px-3 py-1 text-xs font-mono text-muted-foreground mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              Available for senior / staff backend roles
            </div>

            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-balance leading-[1.05]">
              Hi, I'm <span className="text-gradient">Roshan Gupta</span>.
              <br />
              <span className="text-muted-foreground/90 text-3xl md:text-4xl font-medium">
                I build backend systems that don't fall over at 3am.
              </span>
            </h1>

            <p className="mt-6 text-lg text-muted-foreground max-w-2xl text-balance">
              {profile.summary}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground hover:bg-accent/90 transition shadow-lg shadow-accent/20"
              >
                View work
                <span aria-hidden>→</span>
              </a>
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-5 py-2.5 text-sm font-medium text-foreground hover:border-accent/50 transition"
              >
                Download résumé
              </a>
              <a
                href="/writing"
                className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground transition"
              >
                Read notes →
              </a>
            </div>

            <div className="mt-10 flex items-center gap-5 text-sm text-muted-foreground">
              <Link
                href={profile.github}
                target="_blank"
                className="hover:text-foreground transition inline-flex items-center gap-2"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2 1-.3 2-.4 3-.4s2 .1 3 .4c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.7.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.2c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z" />
                </svg>
                GitHub
              </Link>
              <Link
                href={profile.linkedin}
                target="_blank"
                className="hover:text-foreground transition inline-flex items-center gap-2"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.13 1.45-2.13 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.59 0 4.26 2.36 4.26 5.43v6.31zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
                </svg>
                LinkedIn
              </Link>
              <span className="text-border">·</span>
              <span className="font-mono text-xs">{profile.location}</span>
            </div>
          </div>

          <div className="lg:col-span-2 animate-fade-in-up [animation-delay:200ms]">
            <Terminal />
          </div>
        </div>
      </div>
    </section>
  );
}
