export function CiteableLogo({ size = 32 }: { size?: number }) {
  const inner = Math.round(size * 0.625);
  return (
    <span
      aria-hidden
      className="relative grid place-items-center rounded-full"
      style={{
        width: size,
        height: size,
        background:
          "radial-gradient(120% 120% at 30% 25%, #2a2e38 0%, #0e1015 60%, #07080b 100%)",
        boxShadow:
          "inset 0 1px 0 rgba(255,255,255,0.10), inset 0 -1px 0 rgba(0,0,0,0.6), 0 0 0 1px rgba(235,237,242,0.16)",
      }}
    >
      <svg
        viewBox="0 0 24 24"
        width={inner}
        height={inner}
        fill="none"
        aria-hidden
      >
        <defs>
          <linearGradient id="citeable-ring" x1="4" y1="4" x2="20" y2="20" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#ffffff" />
            <stop offset="0.5" stopColor="#a7acb6" />
            <stop offset="1" stopColor="#5a5e68" />
          </linearGradient>
        </defs>
        <circle
          cx="12"
          cy="12"
          r="7.25"
          stroke="url(#citeable-ring)"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeDasharray="34 8"
          transform="rotate(-30 12 12)"
        />
        <circle cx="12" cy="12" r="1.6" fill="#ebedf2" />
      </svg>
    </span>
  );
}
