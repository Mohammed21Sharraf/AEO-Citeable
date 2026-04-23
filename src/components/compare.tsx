export function Compare() {
  const rows = [
    {
      dim: "Output",
      them: "A monitoring dashboard",
      us: "Cited pages, seeded threads, fixed schema",
    },
    {
      dim: "Platforms",
      them: "ChatGPT only, or Perplexity only",
      us: "ChatGPT + Perplexity + Gemini + Google AI + Claude",
    },
    {
      dim: "Content approach",
      them: "AI-only content that reads like spam to humans",
      us: "Answer-block content that works for humans and machines",
    },
    {
      dim: "After the audit",
      them: "A PDF, a Slack invite, and an invoice",
      us: "Hands-on implementation on your actual pages",
    },
    {
      dim: "Success metric",
      them: "Mentions tracked",
      us: "Citation rate vs. competitors, month over month",
    },
  ];

  return (
    <section id="compare" className="relative">
      <div className="mx-auto max-w-6xl px-6 py-28 sm:py-36">
        <div className="mb-14 max-w-2xl">
          <span className="section-accent" />
          <p className="eyebrow w-fit">
            <span className="dot" />
            Monitoring vs. execution
          </p>
          <h2 className="mt-5 font-display text-[44px] leading-[1.04] tracking-[-0.02em] text-[color:var(--ink)] sm:text-[60px]">
            Dashboards show the gap.
            <br />
            <span className="italic silver-text">We close it.</span>
          </h2>
        </div>

        <div className="silver-surface overflow-hidden rounded-[var(--radius-lg)]">
          <div className="grid grid-cols-12 bg-[color:var(--surface-2)] px-6 py-4 text-[11px] font-mono uppercase tracking-[0.14em] text-[color:var(--ink-subtle)]">
            <div className="col-span-4">Dimension</div>
            <div className="col-span-4">Monitoring-only vendors</div>
            <div className="col-span-4 flex items-center gap-2">
              <CiteableMark />
              Citeable
            </div>
          </div>

          {rows.map((r, i) => (
            <div
              key={r.dim}
              className="grid grid-cols-12 gap-3 px-6 py-5"
              style={{
                borderTop: i === 0 ? "1px solid var(--border)" : "1px solid var(--border)",
              }}
            >
              <div className="col-span-12 font-mono text-[11px] uppercase tracking-[0.14em] text-[color:var(--ink-subtle)] sm:col-span-4">
                {r.dim}
              </div>
              <div className="col-span-12 text-[15px] leading-[1.55] text-[color:var(--ink-muted)] sm:col-span-4">
                {r.them}
              </div>
              <div className="col-span-12 flex items-start gap-2 text-[15px] leading-[1.55] text-[color:var(--ink)] sm:col-span-4">
                <CheckIcon />
                {r.us}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className="mt-1 flex-none"
    >
      <path
        d="M4.5 12.5l4.5 4.5L19.5 6"
        stroke="#0A0B0F"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CiteableMark() {
  return (
    <span
      aria-hidden
      className="inline-block h-4 w-4 rounded-[4px] border border-[color:var(--border-strong)]"
      style={{
        background:
          "linear-gradient(145deg, #ffffff 0%, #d0d4db 50%, #8a8f99 100%)",
      }}
    />
  );
}
