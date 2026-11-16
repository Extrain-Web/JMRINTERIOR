export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <svg width="44" height="44" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <path
          d="M20 3 36 12v16L20 37 4 28V12z"
          stroke="#daa14c"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <text
          x="20"
          y="24.3"
          textAnchor="middle"
          fontSize="11.5"
          fontWeight="800"
          letterSpacing="0.2"
          fill="#daa14c"
          style={{ fontFamily: "var(--font-jakarta), ui-sans-serif, system-ui, sans-serif" }}
        >
          JMR
        </text>
      </svg>
      <span className="leading-none">
        <span
          className={`block text-[26px] font-extrabold tracking-wide ${
            light ? "text-white" : "text-ink"
          }`}
        >
          JMR
        </span>
        <span className="mt-0.5 block text-[10px] font-semibold tracking-[0.42em] text-gold">
          INTERIOR
        </span>
      </span>
    </span>
  );
}
