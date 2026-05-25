import { profile } from "@/content/profile";

export function Footer() {
  return (
    <footer className="border-t border-border/60 mt-10">
      <div className="container-max py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-accent transition"
          >
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-accent transition"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="hover:text-accent transition"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
