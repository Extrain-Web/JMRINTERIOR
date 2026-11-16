export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <svg width="38" height="38" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <path
          d="M20 3 36 12v16L20 37 4 28V12z"
          stroke="#daa14c"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <path
          d="M13 26V15l7 6 7-6v11"
          stroke="#daa14c"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
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
