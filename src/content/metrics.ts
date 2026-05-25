export type Metric = {
  value: string;
  label: string;
  detail: string;
};

export const metrics: Metric[] = [
  {
    value: "99%",
    label: "DB load reduction",
    detail: "Redesigned subscription pipeline with in-memory processing",
  },
  {
    value: "40s → 2s",
    label: "API latency cut",
    detail: "Fixed MySQL index ordering causing full table scans",
  },
  {
    value: "35%",
    label: "P99 latency improvement",
    detail: "JVM tuning, SQL optimization, distributed tracing",
  },
  {
    value: "Millions",
    label: "Events / day",
    detail: "Kafka pipelines across billing and payment workflows",
  },
  {
    value: "7+",
    label: "Years experience",
    detail: "Backend systems, distributed architectures, mentoring",
  },
  {
    value: "80+",
    label: "Microservices owned",
    detail: "Operational handover across multi-region deployments",
  },
];
