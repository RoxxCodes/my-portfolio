import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Roshan Gupta — Senior Backend Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "linear-gradient(135deg, #0a0a0c 0%, #0f1a17 60%, #082a20 100%)",
          padding: 80,
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            color: "#10b981",
            fontSize: 24,
            fontFamily: "monospace",
          }}
        >
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: 999,
              background: "#10b981",
            }}
          />
          roshangupta.dev
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 88,
              fontWeight: 800,
              letterSpacing: -2,
              lineHeight: 1.05,
            }}
          >
            Roshan Gupta
          </div>
          <div
            style={{
              fontSize: 44,
              color: "#a1a1aa",
              fontWeight: 500,
              maxWidth: 980,
            }}
          >
            Senior Backend Engineer · Distributed Systems · 7+ Years
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 16,
            fontSize: 22,
            color: "#a1a1aa",
            fontFamily: "monospace",
          }}
        >
          <span style={{ color: "#10b981" }}>Java</span>
          <span>·</span>
          <span style={{ color: "#10b981" }}>Spring Boot</span>
          <span>·</span>
          <span style={{ color: "#10b981" }}>Kafka</span>
          <span>·</span>
          <span style={{ color: "#10b981" }}>AWS</span>
          <span>·</span>
          <span style={{ color: "#10b981" }}>Microservices</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
