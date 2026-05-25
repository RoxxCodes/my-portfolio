import { Section } from "./Section";
import { profile } from "@/content/profile";
import { skillGroups } from "@/content/skills";

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="Backend engineer who likes the hard problems."
    >
      <div className="max-w-3xl space-y-5 text-[15px] md:text-base text-muted-foreground leading-relaxed">
        {profile.longBio.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <div className="mt-12">
        <p className="font-mono text-xs uppercase tracking-widest text-accent mb-3">
          Stack & toolkit
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-5">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <p className="text-xs font-semibold text-foreground/80 mb-2">
                {group.title}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs px-2 py-0.5 rounded font-mono text-muted-foreground bg-card/60 border border-border/60"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
