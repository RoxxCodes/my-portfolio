import { Section } from "./Section";
import { profile } from "@/content/profile";

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Get in touch"
      title="Let's build something reliable."
      description="Open to senior / staff backend roles, consulting on distributed systems, and interesting collaborations."
    >
      <div className="glass rounded-2xl p-8 md:p-12 max-w-3xl">
        <div className="grid sm:grid-cols-2 gap-6">
          <a
            href={`mailto:${profile.email}`}
            className="group flex items-start gap-3"
          >
            <div className="rounded-lg border border-border bg-card/60 p-2.5 group-hover:border-accent/50 transition">
              <svg
                className="w-4 h-4 text-accent"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  d="M3 8l9 6 9-6M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                Email
              </p>
              <p className="text-foreground group-hover:text-accent transition">
                {profile.email}
              </p>
            </div>
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="group flex items-start gap-3"
          >
            <div className="rounded-lg border border-border bg-card/60 p-2.5 group-hover:border-accent/50 transition">
              <svg
                className="w-4 h-4 text-accent"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.13 1.45-2.13 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.59 0 4.26 2.36 4.26 5.43v6.31zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                LinkedIn
              </p>
              <p className="text-foreground group-hover:text-accent transition">
                linkedin.com/in/roshangec
              </p>
            </div>
          </a>

          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="group flex items-start gap-3"
          >
            <div className="rounded-lg border border-border bg-card/60 p-2.5 group-hover:border-accent/50 transition">
              <svg
                className="w-4 h-4 text-accent"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2 1-.3 2-.4 3-.4s2 .1 3 .4c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.7.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.2c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                GitHub
              </p>
              <p className="text-foreground group-hover:text-accent transition">
                github.com/roshangec
              </p>
            </div>
          </a>

          <div className="flex items-start gap-3">
            <div className="rounded-lg border border-border bg-card/60 p-2.5">
              <svg
                className="w-4 h-4 text-accent"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                Based in
              </p>
              <p className="text-foreground">{profile.location}</p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border/60">
          <a
            href={`mailto:${profile.email}?subject=Hello%20Roshan`}
            className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground hover:bg-accent/90 transition shadow-lg shadow-accent/20"
          >
            Send me an email
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </Section>
  );
}
