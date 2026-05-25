import { Section } from "./Section";
import { experiences, education } from "@/content/experience";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="7+ years shipping production backend systems."
      description="From multi-tenant SaaS billing platforms to prepaid card systems and connected-car infrastructure."
    >
      <ol className="relative border-l border-border/60 ml-3 md:ml-4">
        {experiences.map((exp, idx) => (
          <li key={idx} className="mb-10 ml-6 md:ml-8 last:mb-0">
            <span className="absolute -left-[7px] mt-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-background border-2 border-accent">
              {exp.current && (
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              )}
            </span>
            <div className="glass rounded-xl p-6 hover-lift">
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                <h3 className="text-lg font-semibold text-foreground">
                  {exp.role}{" "}
                  <span className="text-accent">@ {exp.company}</span>
                </h3>
                <span className="font-mono text-xs text-muted-foreground">
                  {exp.period}
                </span>
              </div>
              <p className="text-xs text-muted-foreground mb-4">
                {exp.location}
              </p>
              <ul className="space-y-2">
                {exp.highlights.map((h, i) => (
                  <li
                    key={i}
                    className="text-sm text-muted-foreground leading-relaxed pl-5 relative"
                  >
                    <span className="absolute left-0 top-2 h-1 w-1 rounded-full bg-accent/70" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-12">
        <p className="font-mono text-xs uppercase tracking-widest text-accent mb-3">
          Education
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {education.map((edu, i) => (
            <div
              key={i}
              className="glass rounded-xl p-5 hover-lift"
            >
              <h4 className="font-semibold text-foreground">{edu.degree}</h4>
              <p className="text-sm text-muted-foreground mt-1">
                {edu.school} · {edu.location}
              </p>
              <p className="font-mono text-xs text-muted-foreground mt-2">
                {edu.period}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
