import { cn } from "@/lib/utils";

export function Prose({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "prose-custom max-w-none text-[15px] leading-7 text-muted-foreground",
        className
      )}
    >
      {children}
    </div>
  );
}
