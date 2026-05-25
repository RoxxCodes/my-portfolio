import { Section } from "./Section";
import { systemDesignCases } from "@/content/systemDesign";
import { KafkaMigrationDiagram } from "./diagrams/KafkaMigrationDiagram";
import { SubscriptionPipelineDiagram } from "./diagrams/SubscriptionPipelineDiagram";

const diagramMap: Record<string, React.ComponentType> = {
  "RabbitMQ → Kafka Migration for Billing Workflows": KafkaMigrationDiagram,
  "Subscription Pipeline Redesign": SubscriptionPipelineDiagram,
};

export function SystemDesign() {
  return (
    <Section
      id="system-design"
      eyebrow="Deep dives"
      title="Real architectures I've shipped."
      description="Not whiteboard fiction — production rewrites with measurable outcomes."
    >
      <div className="space-y-6">
        {systemDesignCases.map((c) => {
          const Diagram = diagramMap[c.title];
          return (
            <article
              key={c.title}
              className="glass rounded-2xl p-6 md:p-8 hover-lift"
            >
              <h3 className="text-xl font-semibold text-foreground mb-1">
                {c.title}
              </h3>

              <div className="grid md:grid-cols-5 gap-8 mt-6">
                <div className="md:col-span-2 space-y-5">
                  <div>
                    <p className="text-xs font-mono uppercase tracking-widest text-accent mb-1">
                      Problem
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {c.problem}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-mono uppercase tracking-widest text-accent mb-1">
                      Approach
                    </p>
                    <ul className="space-y-1.5">
                      {c.approach.map((a, i) => (
                        <li
                          key={i}
                          className="text-sm text-muted-foreground pl-4 relative leading-relaxed"
                        >
                          <span className="absolute left-0 top-2 h-1 w-1 rounded-full bg-accent/60" />
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-mono uppercase tracking-widest text-accent mb-1">
                      Outcome
                    </p>
                    <p className="text-sm text-foreground/90 leading-relaxed">
                      {c.outcome}
                    </p>
                  </div>
                </div>

                <div className="md:col-span-3">
                  <div className="rounded-xl border border-border bg-background/40 p-4 md:p-6 h-full flex items-center">
                    {Diagram ? <Diagram /> : null}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
