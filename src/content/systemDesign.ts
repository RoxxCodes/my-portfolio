export type SystemDesignCase = {
  title: string;
  problem: string;
  approach: string[];
  outcome: string;
  diagram: {
    nodes: string[];
    flow: string;
  };
};

export const systemDesignCases: SystemDesignCase[] = [
  {
    title: "RabbitMQ → Kafka Migration for Billing Workflows",
    problem:
      "Legacy RabbitMQ pipelines were difficult to replay, lacked durable ordering guarantees, and struggled under spikes during monthly billing runs.",
    approach: [
      "Modeled billing events as immutable Kafka topics partitioned by tenant for ordering guarantees.",
      "Introduced consumer groups for horizontal scaling and at-least-once processing with idempotent handlers.",
      "Built dual-write + shadow consumers to validate parity before cutover, then drained RabbitMQ safely.",
    ],
    outcome:
      "Millions of events/day with replayability, better backpressure handling, and a simplified ops story.",
    diagram: {
      nodes: ["Billing Service", "Kafka (partitioned)", "Subscription Workers", "Payment Service"],
      flow: "Producer → Topic[tenantId] → Consumer Group → Downstream Services",
    },
  },
  {
    title: "Subscription Pipeline Redesign",
    problem:
      "Per-order DB lookups during subscription processing caused timeouts on large subscriptions and hammered MySQL with redundant queries.",
    approach: [
      "Switched to subscription-level batch loading — fetch once, process many.",
      "Held working set in an in-memory Map keyed by order ID for O(1) joins during processing.",
      "Streamed results back with bounded memory using chunked commits.",
    ],
    outcome:
      "~99% reduction in DB load and elimination of timeout errors on the largest tenants.",
    diagram: {
      nodes: ["Scheduler", "Batch Loader", "In-Memory Map", "Subscription Processor", "MySQL"],
      flow: "Scheduler → Batch Load (1 query) → In-Memory Map → Process N orders → Commit",
    },
  },
];
