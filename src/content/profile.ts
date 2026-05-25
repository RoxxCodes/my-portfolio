export const profile = {
  name: "Roshan Gupta",
  role: "Senior Backend Engineer",
  tagline: "Distributed Systems · Billing & Payments · 7+ Years",
  location: "Pune, India",
  email: "roshangec@gmail.com",
  phone: "+91-7000972013",
  github: "https://github.com/roshangec",
  linkedin: "https://www.linkedin.com/in/roshangec",
  resumeUrl: "/Roshan_Gupta_Resume.pdf",
  summary:
    "I build scalable backend systems for billing, payments, and subscription platforms. Over the last 7 years I've shipped multi-tenant SaaS infrastructure, prepaid card systems, and event-driven workflows processing millions of events per day — with a focus on reliability, performance, and clean architecture.",
  longBio: [
    "I'm a Senior Backend Engineer based in Pune, India, currently building the billing and subscription platform at AppDirect that serves thousands of marketplace tenants.",
    "My work spans the boring-but-critical infrastructure that companies run on: payment pipelines, contract enforcement, event-driven workflows, and the kind of database optimizations that turn a 40-second API call into a 2-second one.",
    "I gravitate toward Java, Spring Boot, Kafka, and clean distributed-systems design. I enjoy mentoring, reviewing system designs, and chasing tail-latency problems through the JVM, MySQL, and the network.",
  ],
};

export type Profile = typeof profile;
