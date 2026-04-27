import Link from "next/link";

export function FinalCta() {
  return (
    <section id="audit" className="relative">
      <div className="mx-auto max-w-6xl px-6 pb-28 sm:pb-36">
        <div
          className="relative overflow-hidden rounded-[28px] border border-[color:var(--border-strong)] px-8 py-16 sm:px-16 sm:py-24"
          style={{
            background:
              "radial-gradient(800px 400px at 20% 10%, #ffffff, transparent 60%), radial-gradient(900px 500px at 90% 90%, #cfd3da, transparent 60%), linear-gradient(180deg, #eef0f3, #dfe3e9)",
          }}
        >
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.18]"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.7 0'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.55'/></svg>\")",
              mixBlendMode: "multiply",
            }}
          />

          <div className="relative max-w-3xl">
            <p className="eyebrow w-fit">
              <span className="dot" />
              Your move
            </p>

            <h2 className="mt-6 font-display text-[52px] leading-[1.02] tracking-[-0.02em] text-[color:var(--ink)] sm:text-[76px]">
              Stop being invisible.
              <br />
              <span className="italic silver-text">Start being cited.</span>
            </h2>

            <p className="mt-6 max-w-[52ch] text-[17px] leading-[1.6] text-[color:var(--ink-muted)]">
              The audit is how we start. 30 queries across 4 platforms, a
              competitor citation map, your AI Visibility Score, and a 90-day
              roadmap. Delivered in 48 hours.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="mailto:s.business.uddin@gmail.com?subject=Book%20a%20call%20with%20Citeable"
                className="btn-primary"
              >
                Book a call
                <ArrowIcon />
              </Link>
              <Link href="#calculator" className="btn-ghost">
                Calculate your tax first
              </Link>
            </div>

            <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.14em] text-[color:var(--ink-subtle)]">
              Three free audit slots open this month.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M5 12h14m0 0-5-5m5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
