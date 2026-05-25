import { metrics } from "@/content/metrics";

export function Metrics() {
  return (
    <section
      aria-labelledby="metrics-heading"
      className="py-16 border-y border-border/60 bg-card/30"
    >
      <div className="container-max">
        <h2 id="metrics-heading" className="sr-only">
          Impact metrics
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {metrics.map((m) => (
            <div key={m.label} className="group">
              <div className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-accent transition-colors">
                {m.value}
              </div>
              <div className="mt-1 text-sm font-medium text-foreground/80">
                {m.label}
              </div>
              <div className="mt-1 text-xs text-muted-foreground leading-snug">
                {m.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
