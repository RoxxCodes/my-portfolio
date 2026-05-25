export function KafkaMigrationDiagram() {
  return (
    <svg
      viewBox="0 0 460 320"
      className="w-full h-auto"
      role="img"
      aria-label="RabbitMQ to Kafka migration architecture"
    >
      <defs>
        <linearGradient id="km-card" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgb(24 24 28)" />
          <stop offset="100%" stopColor="rgb(18 18 22)" />
        </linearGradient>
        <marker
          id="km-arrow"
          viewBox="0 0 10 10"
          refX="9"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto-start-reverse"
        >
          <path d="M0,0 L10,5 L0,10 z" fill="rgb(16 185 129)" />
        </marker>
      </defs>

      <rect width="460" height="320" fill="transparent" />

      {/* Producer */}
      <g>
        <rect
          x="20"
          y="130"
          width="100"
          height="56"
          rx="10"
          fill="url(#km-card)"
          stroke="rgb(16 185 129 / 0.5)"
          strokeWidth="1.2"
        />
        <text
          x="70"
          y="155"
          textAnchor="middle"
          fontSize="12"
          fontFamily="monospace"
          fill="rgb(237 237 240)"
        >
          Billing
        </text>
        <text
          x="70"
          y="172"
          textAnchor="middle"
          fontSize="11"
          fontFamily="monospace"
          fill="rgb(161 161 170)"
        >
          Service
        </text>
      </g>

      {/* Kafka cluster */}
      <g>
        <rect
          x="170"
          y="60"
          width="140"
          height="200"
          rx="12"
          fill="rgb(16 185 129 / 0.08)"
          stroke="rgb(16 185 129 / 0.4)"
          strokeWidth="1.2"
          strokeDasharray="4 4"
        />
        <text
          x="240"
          y="80"
          textAnchor="middle"
          fontSize="10"
          fontFamily="monospace"
          fill="rgb(16 185 129)"
          letterSpacing="2"
        >
          KAFKA
        </text>

        {/* Partitions */}
        {[0, 1, 2].map((i) => (
          <g key={i}>
            <rect
              x="186"
              y={100 + i * 50}
              width="108"
              height="38"
              rx="6"
              fill="url(#km-card)"
              stroke="rgb(39 39 45)"
            />
            <text
              x="195"
              y={117 + i * 50}
              fontSize="10"
              fontFamily="monospace"
              fill="rgb(161 161 170)"
            >
              billing.events
            </text>
            <text
              x="195"
              y={131 + i * 50}
              fontSize="9"
              fontFamily="monospace"
              fill="rgb(16 185 129)"
            >
              p{i} • tenant {String.fromCharCode(65 + i)}
            </text>
          </g>
        ))}
      </g>

      {/* Consumer group */}
      <g>
        <rect
          x="340"
          y="80"
          width="100"
          height="56"
          rx="10"
          fill="url(#km-card)"
          stroke="rgb(16 185 129 / 0.5)"
          strokeWidth="1.2"
        />
        <text
          x="390"
          y="105"
          textAnchor="middle"
          fontSize="12"
          fontFamily="monospace"
          fill="rgb(237 237 240)"
        >
          Subscription
        </text>
        <text
          x="390"
          y="122"
          textAnchor="middle"
          fontSize="11"
          fontFamily="monospace"
          fill="rgb(161 161 170)"
        >
          Workers
        </text>
      </g>

      <g>
        <rect
          x="340"
          y="180"
          width="100"
          height="56"
          rx="10"
          fill="url(#km-card)"
          stroke="rgb(16 185 129 / 0.5)"
          strokeWidth="1.2"
        />
        <text
          x="390"
          y="205"
          textAnchor="middle"
          fontSize="12"
          fontFamily="monospace"
          fill="rgb(237 237 240)"
        >
          Payment
        </text>
        <text
          x="390"
          y="222"
          textAnchor="middle"
          fontSize="11"
          fontFamily="monospace"
          fill="rgb(161 161 170)"
        >
          Service
        </text>
      </g>

      {/* Arrows */}
      <line
        x1="120"
        y1="158"
        x2="166"
        y2="158"
        stroke="rgb(16 185 129)"
        strokeWidth="1.5"
        markerEnd="url(#km-arrow)"
      />
      <line
        x1="314"
        y1="120"
        x2="336"
        y2="108"
        stroke="rgb(16 185 129)"
        strokeWidth="1.5"
        markerEnd="url(#km-arrow)"
      />
      <line
        x1="314"
        y1="200"
        x2="336"
        y2="208"
        stroke="rgb(16 185 129)"
        strokeWidth="1.5"
        markerEnd="url(#km-arrow)"
      />

      <text
        x="230"
        y="290"
        textAnchor="middle"
        fontSize="10"
        fontFamily="monospace"
        fill="rgb(161 161 170)"
      >
        partitioned by tenantId · at-least-once · replayable
      </text>
    </svg>
  );
}
