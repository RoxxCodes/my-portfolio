export type Experience = {
  company: string;
  role: string;
  location: string;
  period: string;
  current?: boolean;
  highlights: string[];
};

export const experiences: Experience[] = [
  {
    company: "AppDirect",
    role: "Senior Software Engineer",
    location: "Pune, India",
    period: "Apr 2022 – Present",
    current: true,
    highlights: [
      "Design and maintain Java and Spring Boot microservices for a multi-tenant billing and subscription platform serving thousands of marketplace tenants.",
      "Migrated billing and payment workflows from RabbitMQ to Apache Kafka handling millions of events per day, improving scalability, replayability, and operational reliability.",
      "Redesigned the subscription processing pipeline by replacing repeated per-order database lookups with subscription-level data loading and in-memory Map-based processing — reducing DB load by ~99% and resolving timeouts on large subscriptions.",
      "Developed GraphQL and Kafka-based services for minimum-spend contract enforcement, with monthly scheduled jobs that aggregate partner spend, validate contract thresholds, and auto-charge remaining balances.",
      "Optimized a high-latency tenant API by fixing inefficient MySQL index ordering that was causing full table scans — cutting response time from 40s to 2s.",
      "Improved backend performance through JVM tuning, SQL optimization, and distributed tracing — reducing P99 latency by ~35%.",
      "Contribute to code reviews, production support, incident response, and mentoring engineers across backend platform teams.",
    ],
  },
  {
    company: "Paycraft Solutions",
    role: "Senior Software Engineer",
    location: "Bengaluru, India",
    period: "Nov 2021 – Apr 2022",
    highlights: [
      "Developed Java and Spring Boot microservices for prepaid card systems used by ICICI and HDFC Bank, supporting millions of billing and payment events per day.",
      "Built a reusable logging library adopted across 10+ services to standardize API request/response logging for transaction debugging and tracing.",
      "Improved backend performance via SQL optimization, indexing, and connection-pool tuning — reducing average issue resolution time by ~30%.",
      "Maintained 80%+ unit and integration test coverage using JUnit and Mockito.",
    ],
  },
  {
    company: "AppDirect",
    role: "Software Engineer",
    location: "Pune, India",
    period: "Mar 2019 – Nov 2021",
    highlights: [
      "Migrated Jaguar Land Rover connected-car backend services from a legacy CMS to AppDirect infrastructure across 4 regions (UK, US, China, Europe).",
      "Managed operational handover and support ownership of 80+ Java and Node.js microservices from the Calgary team to Pune.",
      "Built a bulk cryptographic signing service for secure OTA delivery workflows — reducing onboarding time for new product versions by ~40%.",
      "Integrated third-party APIs including Reuters, CNN, and AccuWeather into in-vehicle infotainment systems.",
    ],
  },
];

export const education = [
  {
    school: "Sunbeam Institute of Information Technology",
    degree: "PG Diploma in Advanced Computing",
    location: "Pune, Maharashtra",
    period: "2018 – 2019",
  },
  {
    school: "Government Engineering College, Raipur",
    degree: "B.E. in Computer Science",
    location: "Chhattisgarh, India",
    period: "2014 – 2018",
  },
];
