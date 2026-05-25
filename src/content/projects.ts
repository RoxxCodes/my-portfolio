export type Project = {
  title: string;
  tagline: string;
  description: string;
  bullets: string[];
  stack: string[];
  link?: string;
  github?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Distributed Task Scheduler",
    tagline: "Reliable scheduling at scale",
    description:
      "A distributed job scheduling system supporting recurring and one-time task execution across multiple worker instances.",
    bullets: [
      "Redis Sorted Set–based scheduling with Kafka consumer groups for scalable task processing and duplicate prevention.",
      "Retry handling, worker recovery, and failure recovery mechanisms for reliable execution.",
      "Designed for horizontal scaling without single points of failure.",
    ],
    stack: ["Java", "Spring Boot", "PostgreSQL", "Redis", "Kafka"],
    github: "https://github.com/roshangec",
    featured: true,
  },
  {
    title: "SpiceMoney — Merchant Reward & Loyalty Engine",
    tagline: "Event-driven rewards for millions of merchants",
    description:
      "Kafka-based backend powering merchant reward, milestone tracking, and offer workflows.",
    bullets: [
      "Built consumer pipelines processing reward events with idempotent processing guarantees.",
      "Implemented QR validation and fraud-prevention logic for merchant offers and reward distribution.",
      "Developed APIs for bulk QR generation and printable PDF generation.",
    ],
    stack: ["Java", "Spring Boot", "Kafka", "Docker"],
    featured: true,
  },
  {
    title: "MediaSync for iOS",
    tagline: "Local Wi-Fi media server & viewer",
    description:
      "A local media streaming application allowing secure photo and video sharing over Wi-Fi without the cloud.",
    bullets: [
      "Built native iOS client in Swift and SwiftUI.",
      "Backend services in Swift using Vapor with WebSocket-based real-time communication.",
      "Lazy loading and infinite scrolling for large media libraries.",
    ],
    stack: ["Swift", "SwiftUI", "Vapor", "WebSocket"],
    github: "https://github.com/roshangec",
    featured: true,
  },
];
