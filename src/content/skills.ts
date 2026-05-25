export type SkillGroup = {
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    items: ["Java", "JavaScript", "TypeScript", "SQL", "Swift"],
  },
  {
    title: "Backend",
    items: [
      "Spring Boot",
      "Spring MVC",
      "Hibernate",
      "JPA",
      "REST APIs",
      "GraphQL",
      "Microservices",
    ],
  },
  {
    title: "Databases",
    items: ["MySQL", "PostgreSQL", "MongoDB", "Redis"],
  },
  {
    title: "Messaging",
    items: ["Apache Kafka", "RabbitMQ"],
  },
  {
    title: "Cloud & DevOps",
    items: ["AWS", "Docker", "Kubernetes", "Jenkins", "GitHub Actions"],
  },
  {
    title: "Testing & Observability",
    items: [
      "JUnit",
      "Mockito",
      "Integration Testing",
      "Datadog",
      "Distributed Tracing",
    ],
  },
  {
    title: "Concepts",
    items: [
      "Distributed Systems",
      "Event-Driven Architecture",
      "System Design",
      "Scalability",
      "Performance Optimization",
    ],
  },
];
