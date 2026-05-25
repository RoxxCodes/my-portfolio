import type { ComponentType } from "react";
import { Post1 } from "./posts/db-load-99-percent";
import { Post2 } from "./posts/rabbitmq-to-kafka";
import { Post3 } from "./posts/40s-to-2s-mysql-index";

export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingMinutes: number;
  tags: string[];
  Content: ComponentType;
};

export const posts: PostMeta[] = [
  {
    slug: "db-load-99-percent",
    title: "Killing 99% of database load by inverting our processing model",
    description:
      "How redesigning a per-order processing loop into a batch-load + in-memory map eliminated timeouts on our largest subscriptions.",
    date: "2026-04-12",
    readingMinutes: 7,
    tags: ["Performance", "MySQL", "Architecture"],
    Content: Post1,
  },
  {
    slug: "rabbitmq-to-kafka",
    title: "From RabbitMQ to Kafka: a dual-write migration for billing",
    description:
      "Why we moved billing workflows to Kafka, the shadow-consumer strategy we used to validate parity, and what we'd do differently.",
    date: "2026-03-02",
    readingMinutes: 9,
    tags: ["Kafka", "Migration", "Distributed Systems"],
    Content: Post2,
  },
  {
    slug: "40s-to-2s-mysql-index",
    title: "From 40 seconds to 2 seconds: how a wrong index killed us",
    description:
      "A debugging story about MySQL composite index ordering, full table scans, and the EXPLAIN output that revealed the fix.",
    date: "2026-01-18",
    readingMinutes: 6,
    tags: ["MySQL", "Debugging", "Performance"],
    Content: Post3,
  },
];

export function getPost(slug: string): PostMeta | undefined {
  return posts.find((p) => p.slug === slug);
}
