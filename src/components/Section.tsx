import { cn } from "@/lib/utils";

type SectionProps = {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
};

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
}: SectionProps) {
  return (
    <section id={id} className={cn("py-16 scroll-mt-20", className)}>
      <div className="container-max">
        <div className="max-w-2xl mb-10">
          {eyebrow && (
            <p className="font-mono text-xs uppercase tracking-widest text-accent mb-3">
              {eyebrow}
            </p>
          )}
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance">
            {title}
          </h2>
          {description && (
            <p className="mt-3 text-muted-foreground text-balance">
              {description}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
