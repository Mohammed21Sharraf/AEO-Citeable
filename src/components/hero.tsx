import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[600px]">
        {/* Large metallic arc */}
        <div
          aria-hidden
          className="absolute left-1/2 top-[-280px] h-[720px] w-[1100px] -translate-x-1/2 rounded-full opacity-70 blur-3xl"
          style={{
            background:
              "conic-gradient(from 210deg at 50% 50%, #ffffff, #cbd0d9, #9aa0ab, #ffffff, #d8dce3, #ffffff)",
          }}
        />
      </div>

      <div className="mx-auto max-w-6xl px-6 pt-24 pb-28 sm:pt-32 sm:pb-36">
        <div className="flex flex-col items-center text-center">
          <span className="eyebrow rise rise-1">
            <span className="dot" />
            AEO · Answer Engine Optimisation
          </span>

          <h1 className="rise rise-2 mt-7 max-w-[17ch] font-display text-[56px] leading-[1.02] tracking-[-0.02em] text-[color:var(--ink)] sm:text-[84px] sm:leading-[0.98]">
            When buyers ask AI,
            <br />
            <span className="italic silver-text">you&rsquo;re not in</span> the
            answer.
          </h1>

          <p className="rise rise-3 mt-7 max-w-[56ch] text-balance text-[17px] leading-[1.55] text-[color:var(--ink-muted)] sm:text-[19px]">
            Your buyers stopped Googling. They&rsquo;re asking ChatGPT,
            Perplexity, Gemini and Google AI for recommendations — and most B2B
            SaaS brands are invisible in the response. Citeable is the agency
            that gets you cited.
          </p>

          <div className="rise rise-4 mt-9 flex flex-col items-center gap-3 sm:flex-row">
            <Link href="#audit" className="btn-primary">
              Get your free AI Visibility Score
              <ArrowIcon />
            </Link>
            <Link href="#process" className="btn-ghost">
              See the 4-platform audit
            </Link>
          </div>

          <p className="rise rise-5 mt-5 font-mono text-[11px] uppercase tracking-[0.14em] text-[color:var(--ink-subtle)]">
            Limited to 3 free audits · No credit card · Delivered in 48 hours
          </p>
        </div>

        <HeroMetrics />
      </div>
    </section>
  );
}

function HeroMetrics() {
  const items = [
    { kpi: "4", label: "AI platforms audited" },
    { kpi: "30", label: "Buyer-intent queries" },
    { kpi: "/100", label: "AI Visibility Score" },
    { kpi: "90d", label: "Execution roadmap" },
  ];
  return (
    <div className="mx-auto mt-20 max-w-5xl">
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--border)] sm:grid-cols-4">
        {items.map((item) => (
          <div
            key={item.label}
            className="flex flex-col items-start gap-1 bg-[color:var(--surface)] px-6 py-5"
          >
            <span className="font-display text-[34px] leading-none tracking-tight text-[color:var(--ink)] sm:text-[40px]">
              {item.kpi}
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[color:var(--ink-subtle)]">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
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
