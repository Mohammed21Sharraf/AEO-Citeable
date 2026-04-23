import Link from "next/link";

export function Pricing() {
  const tiers = [
    {
      name: "Founding Audit",
      price: "$500",
      cadence: "one-time",
      badge: "Limited",
      summary:
        "First-client pricing for the first five companies. Full AI Visibility Audit with every deliverable.",
      includes: [
        "30 queries × 4 platforms",
        "Competitor citation map",
        "AI Visibility Score /100",
        "90-day execution roadmap",
      ],
      cta: "Claim founding slot",
    },
    {
      name: "Standard Audit",
      price: "$1,500",
      cadence: "one-time",
      badge: "Most popular",
      highlight: true,
      summary:
        "The full AI Visibility Audit delivered as a live walkthrough, not a PDF drop.",
      includes: [
        "Everything in Founding Audit",
        "Live 60-minute walkthrough call",
        "Technical readiness report (robots.txt, schema, llms.txt)",
        "Priority-ranked page rewrite list",
      ],
      cta: "Book the audit",
    },
    {
      name: "Growth Retainer",
      price: "$2,500",
      cadence: "per month",
      summary:
        "Execution engine: 5 pages restructured per month + ongoing citation building.",
      includes: [
        "5 pages restructured per month",
        "FAQ + schema shipped to production",
        "8–12 Reddit / Quora placements",
        "Monthly citation-rate report",
      ],
      cta: "Start Growth",
    },
    {
      name: "Authority Retainer",
      price: "$5,000",
      cadence: "per month",
      summary:
        "Full-stack AEO: double the pages, full citation programme, industry publication placements.",
      includes: [
        "10 pages restructured per month",
        "Industry publication pitches + HARO",
        "G2 / Capterra / TrustRadius optimisation",
        "Quarterly strategic review",
      ],
      cta: "Start Authority",
    },
  ];

  return (
    <section id="pricing" className="relative">
      <div className="mx-auto max-w-6xl px-6 py-28 sm:py-36">
        <div className="mb-16 max-w-2xl">
          <span className="section-accent" />
          <p className="eyebrow w-fit">
            <span className="dot" />
            Pricing
          </p>
          <h2 className="mt-5 font-display text-[44px] leading-[1.04] tracking-[-0.02em] text-[color:var(--ink)] sm:text-[60px]">
            One audit to start.{" "}
            <span className="italic silver-text">Retainers to scale.</span>
          </h2>
          <p className="mt-5 max-w-[56ch] text-[16px] leading-[1.65] text-[color:var(--ink-muted)]">
            Start with a single audit. If the gap is real (it usually is), pick
            a retainer. No long-term lock-ins — thirty days&rsquo; notice and
            you&rsquo;re out.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {tiers.map((t) => (
            <article
              key={t.name}
              className={[
                "relative flex flex-col rounded-[var(--radius-lg)] p-7",
                t.highlight
                  ? "silver-surface ring-1 ring-[color:var(--border-strong)]"
                  : "border border-[color:var(--border)] bg-[color:var(--surface)]",
              ].join(" ")}
            >
              {t.badge && (
                <span
                  className="absolute -top-3 left-6 inline-flex items-center gap-2 rounded-full border border-[color:var(--border-strong)] bg-[color:var(--ink)] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-[#f7f8fa]"
                >
                  {t.badge}
                </span>
              )}

              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-display text-[26px] leading-none tracking-tight text-[color:var(--ink)]">
                  {t.name}
                </h3>
              </div>

              <div className="mt-6 flex items-baseline gap-2">
                <span className="font-display text-[44px] leading-none tracking-tight text-[color:var(--ink)]">
                  {t.price}
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[color:var(--ink-subtle)]">
                  {t.cadence}
                </span>
              </div>

              <p className="mt-4 text-[14px] leading-[1.55] text-[color:var(--ink-muted)]">
                {t.summary}
              </p>

              <div className="my-6 h-px w-full bg-[color:var(--border)]" />

              <ul className="flex-1 space-y-3">
                {t.includes.map((inc) => (
                  <li
                    key={inc}
                    className="flex gap-3 text-[13.5px] leading-[1.55] text-[color:var(--ink-muted)]"
                  >
                    <span
                      aria-hidden
                      className="mt-[7px] h-[6px] w-[6px] flex-none rounded-full"
                      style={{
                        background:
                          "linear-gradient(180deg, #ffffff 0%, #a7acb6 100%)",
                        boxShadow: "0 0 0 1px rgba(10,11,15,0.12)",
                      }}
                    />
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="#audit"
                className={
                  t.highlight
                    ? "btn-primary mt-7 w-full"
                    : "btn-ghost mt-7 w-full"
                }
              >
                {t.cta}
              </Link>
            </article>
          ))}
        </div>

        <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.14em] text-[color:var(--ink-subtle)]">
          A free AI Visibility Score is available to solopreneur-community
          members — limited to 3 slots per month.
        </p>
      </div>
    </section>
  );
}
