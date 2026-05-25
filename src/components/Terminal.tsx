"use client";

import { useEffect, useState } from "react";

type Line =
  | { kind: "cmd"; text: string }
  | { kind: "out"; text: string; color?: string };

const script: Line[] = [
  { kind: "cmd", text: "whoami" },
  { kind: "out", text: "roshan.gupta — senior backend engineer" },
  { kind: "cmd", text: "cat impact.log | tail -4" },
  { kind: "out", text: "✓ DB load          ─ reduced 99%", color: "text-emerald-400" },
  { kind: "out", text: "✓ API latency      ─ 40s → 2s", color: "text-emerald-400" },
  { kind: "out", text: "✓ P99 latency      ─ -35%", color: "text-emerald-400" },
  { kind: "out", text: "✓ events/day       ─ millions", color: "text-emerald-400" },
  { kind: "cmd", text: "echo $STACK" },
  { kind: "out", text: "Java · Spring Boot · Kafka · AWS · Postgres" },
  { kind: "cmd", text: "open --resume" },
];

const PROMPT = (
  <>
    <span className="text-emerald-400">roshan</span>
    <span className="text-zinc-500">@</span>
    <span className="text-cyan-400">prod</span>
    <span className="text-zinc-500">:</span>
    <span className="text-zinc-400">~</span>
    <span className="text-zinc-500">$</span>{" "}
  </>
);

export function Terminal() {
  const [renderedLines, setRenderedLines] = useState<Line[]>([]);
  const [currentText, setCurrentText] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (lineIndex >= script.length) return;
    const line = script[lineIndex];

    if (line.kind === "out") {
      const timer = setTimeout(() => {
        setRenderedLines((prev) => [...prev, line]);
        setLineIndex((i) => i + 1);
      }, 180);
      return () => clearTimeout(timer);
    }

    if (charIndex < line.text.length) {
      const timer = setTimeout(() => {
        setCurrentText(line.text.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
      }, 45 + Math.random() * 35);
      return () => clearTimeout(timer);
    }

    const pause = setTimeout(() => {
      setRenderedLines((prev) => [...prev, line]);
      setCurrentText("");
      setCharIndex(0);
      setLineIndex((i) => i + 1);
    }, 450);
    return () => clearTimeout(pause);
  }, [charIndex, lineIndex]);

  const isTypingCmd =
    lineIndex < script.length && script[lineIndex].kind === "cmd";

  return (
    <div className="glass rounded-xl overflow-hidden shadow-2xl shadow-black/40 border border-border/80">
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border/60 bg-card/80">
        <span className="h-3 w-3 rounded-full bg-red-500/80" />
        <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
        <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
        <span className="ml-3 text-xs font-mono text-muted-foreground">
          ~/portfolio — zsh
        </span>
      </div>
      <div className="p-4 font-mono text-sm leading-relaxed min-h-[280px]">
        {renderedLines.map((line, i) =>
          line.kind === "cmd" ? (
            <div key={i} className="text-foreground">
              {PROMPT}
              {line.text}
            </div>
          ) : (
            <div
              key={i}
              className={line.color ?? "text-muted-foreground"}
            >
              {line.text}
            </div>
          )
        )}
        {isTypingCmd && (
          <div className="text-foreground">
            {PROMPT}
            {currentText}
            <span className="inline-block w-2 h-4 -mb-0.5 bg-accent ml-0.5 animate-pulse" />
          </div>
        )}
        {lineIndex >= script.length && (
          <div className="text-foreground">
            {PROMPT}
            <span className="inline-block w-2 h-4 -mb-0.5 bg-accent ml-0.5 animate-pulse" />
          </div>
        )}
      </div>
    </div>
  );
}
