export function SubscriptionPipelineDiagram() {
  return (
    <svg
      viewBox="0 0 460 320"
      className="w-full h-auto"
      role="img"
      aria-label="Subscription pipeline before and after redesign"
    >
      <defs>
        <linearGradient id="sp-card" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgb(24 24 28)" />
          <stop offset="100%" stopColor="rgb(18 18 22)" />
        </linearGradient>
        <marker
          id="sp-arrow-bad"
          viewBox="0 0 10 10"
          refX="9"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto"
        >
          <path d="M0,0 L10,5 L0,10 z" fill="rgb(244 63 94)" />
        </marker>
        <marker
          id="sp-arrow-good"
          viewBox="0 0 10 10"
          refX="9"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto"
        >
          <path d="M0,0 L10,5 L0,10 z" fill="rgb(16 185 129)" />
        </marker>
      </defs>

      {/* BEFORE */}
      <g>
        <text
          x="20"
          y="22"
          fontSize="10"
          fontFamily="monospace"
          fill="rgb(244 63 94)"
          letterSpacing="2"
        >
          BEFORE — N queries
        </text>

        <rect
          x="20"
          y="32"
          width="80"
          height="36"
          rx="6"
          fill="url(#sp-card)"
          stroke="rgb(244 63 94 / 0.5)"
        />
        <text
          x="60"
          y="55"
          textAnchor="middle"
          fontSize="11"
          fontFamily="monospace"
          fill="rgb(237 237 240)"
        >
          Processor
        </text>

        {/* multiple round-trips */}
        {[0, 1, 2, 3].map((i) => (
          <g key={i}>
            <line
              x1="105"
              y1={50}
              x2="200"
              y2={42 + i * 8}
              stroke="rgb(244 63 94 / 0.7)"
              strokeWidth="1"
              markerEnd="url(#sp-arrow-bad)"
            />
          </g>
        ))}
        <text
          x="153"
          y="32"
          fontSize="9"
          fontFamily="monospace"
          fill="rgb(244 63 94)"
        >
          N×SELECT
        </text>

        <rect
          x="205"
          y="32"
          width="80"
          height="36"
          rx="6"
          fill="url(#sp-card)"
          stroke="rgb(244 63 94 / 0.5)"
        />
        <text
          x="245"
          y="49"
          textAnchor="middle"
          fontSize="11"
          fontFamily="monospace"
          fill="rgb(237 237 240)"
        >
          MySQL
        </text>
        <text
          x="245"
          y="62"
          textAnchor="middle"
          fontSize="9"
          fontFamily="monospace"
          fill="rgb(244 63 94)"
        >
          overloaded
        </text>

        <text
          x="305"
          y="55"
          fontSize="11"
          fontFamily="monospace"
          fill="rgb(244 63 94)"
        >
          ⛔ timeouts
        </text>
      </g>

      {/* separator */}
      <line
        x1="20"
        y1="105"
        x2="440"
        y2="105"
        stroke="rgb(39 39 45)"
        strokeDasharray="3 3"
      />

      {/* AFTER */}
      <g>
        <text
          x="20"
          y="135"
          fontSize="10"
          fontFamily="monospace"
          fill="rgb(16 185 129)"
          letterSpacing="2"
        >
          AFTER — load once, process in memory
        </text>

        {/* Scheduler */}
        <rect
          x="20"
          y="155"
          width="80"
          height="42"
          rx="6"
          fill="url(#sp-card)"
          stroke="rgb(16 185 129 / 0.5)"
        />
        <text
          x="60"
          y="180"
          textAnchor="middle"
          fontSize="11"
          fontFamily="monospace"
          fill="rgb(237 237 240)"
        >
          Scheduler
        </text>

        {/* Batch loader */}
        <rect
          x="125"
          y="155"
          width="90"
          height="42"
          rx="6"
          fill="url(#sp-card)"
          stroke="rgb(16 185 129 / 0.5)"
        />
        <text
          x="170"
          y="175"
          textAnchor="middle"
          fontSize="11"
          fontFamily="monospace"
          fill="rgb(237 237 240)"
        >
          Batch loader
        </text>
        <text
          x="170"
          y="189"
          textAnchor="middle"
          fontSize="9"
          fontFamily="monospace"
          fill="rgb(16 185 129)"
        >
          1× SELECT
        </text>

        {/* In-memory map */}
        <rect
          x="240"
          y="148"
          width="100"
          height="56"
          rx="6"
          fill="rgb(16 185 129 / 0.08)"
          stroke="rgb(16 185 129 / 0.5)"
          strokeDasharray="3 3"
        />
        <text
          x="290"
          y="170"
          textAnchor="middle"
          fontSize="11"
          fontFamily="monospace"
          fill="rgb(237 237 240)"
        >
          In-memory
        </text>
        <text
          x="290"
          y="184"
          textAnchor="middle"
          fontSize="11"
          fontFamily="monospace"
          fill="rgb(237 237 240)"
        >
          Map&lt;id, order&gt;
        </text>
        <text
          x="290"
          y="198"
          textAnchor="middle"
          fontSize="9"
          fontFamily="monospace"
          fill="rgb(16 185 129)"
        >
          O(1) lookup
        </text>

        {/* Processor */}
        <rect
          x="365"
          y="155"
          width="75"
          height="42"
          rx="6"
          fill="url(#sp-card)"
          stroke="rgb(16 185 129 / 0.5)"
        />
        <text
          x="402"
          y="180"
          textAnchor="middle"
          fontSize="11"
          fontFamily="monospace"
          fill="rgb(237 237 240)"
        >
          Process
        </text>

        {/* Arrows */}
        <line
          x1="100"
          y1="176"
          x2="123"
          y2="176"
          stroke="rgb(16 185 129)"
          strokeWidth="1.5"
          markerEnd="url(#sp-arrow-good)"
        />
        <line
          x1="215"
          y1="176"
          x2="238"
          y2="176"
          stroke="rgb(16 185 129)"
          strokeWidth="1.5"
          markerEnd="url(#sp-arrow-good)"
        />
        <line
          x1="340"
          y1="176"
          x2="363"
          y2="176"
          stroke="rgb(16 185 129)"
          strokeWidth="1.5"
          markerEnd="url(#sp-arrow-good)"
        />
      </g>

      {/* Outcome banner */}
      <g>
        <rect
          x="60"
          y="240"
          width="340"
          height="50"
          rx="8"
          fill="rgb(16 185 129 / 0.08)"
          stroke="rgb(16 185 129 / 0.4)"
        />
        <text
          x="230"
          y="262"
          textAnchor="middle"
          fontSize="12"
          fontFamily="monospace"
          fill="rgb(237 237 240)"
        >
          DB load ↓ 99% · timeouts eliminated
        </text>
        <text
          x="230"
          y="280"
          textAnchor="middle"
          fontSize="10"
          fontFamily="monospace"
          fill="rgb(161 161 170)"
        >
          same input · invert the access pattern
        </text>
      </g>
    </svg>
  );
}
