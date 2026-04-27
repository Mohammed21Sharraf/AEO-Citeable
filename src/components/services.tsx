export function Services() {
  const services = [
    {
      index: "01",
      title: "AI Visibility Audit",
      price: "Diagnostic engagement",
      summary:
        "30 buyer-intent queries, run across 4 platforms, mapped against your top competitors.",
      deliverables: [
        "30 queries × 4 platforms (ChatGPT, Perplexity, Gemini, Google AI)",
        "Competitor citation map — ranked by share of voice",
        "AI Visibility Score out of 100 (citation rate, competitor gap, technical readiness)",
        "90-day execution roadmap, prioritised by impact",
      ],
    },
    {
      index: "02",
      title: "Content Restructuring",
      price: "Growth retainer",
      summary:
        "We rewrite your top pages into answer-block format the way AI systems actually extract and cite.",
      deliverables: [
        "Definition-sentence rewrites on homepage and top landing pages",
        "Long paragraphs broken into sub-40-word answer blocks",
        "FAQ sections + FAQPage schema tested against Google Rich Results",
        "robots.txt, llms.txt, and Organization / SoftwareApplication schema",
      ],
    },
    {
      index: "03",
      title: "Citation Building",
      price: "Authority retainer",
      summary:
        "We build the Reddit, Quora, industry, and review-platform citations that AI systems treat as authoritative.",
      deliverables: [
        "8–12 Reddit & Quora placements per month in genuine buyer threads",
        "Industry publication pitches (guest posts, HARO quotes, roundups)",
        "G2, Capterra, GetApp, TrustRadius profile + review optimisation",
        "Monthly citation-rate review vs. baseline",
      ],
    },
  ];

  return (
    <section id="services" className="relative">
      <div className="mx-auto max-w-6xl px-6 py-28 sm:py-36">
        <div className="mb-16 flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="section-accent" />
            <p className="eyebrow w-fit">
              <span className="dot" />
              What we do
            </p>
            <h2 className="mt-5 max-w-[22ch] font-display text-[44px] leading-[1.04] tracking-[-0.02em] text-[color:var(--ink)] sm:text-[60px]">
              Three services. <span className="italic silver-text">One outcome.</span>
            </h2>
          </div>
          <p className="max-w-md text-[15px] leading-[1.6] text-[color:var(--ink-muted)]">
            Most AEO vendors sell you a dashboard that tracks the gap. We close
            it — by auditing where you&rsquo;re invisible, restructuring the
            pages AI reads, and seeding the citations AI trusts.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.index}
              className="group silver-surface flex flex-col rounded-[var(--radius-lg)] p-7"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[color:var(--ink-subtle)]">
                  {s.index}
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[color:var(--ink-subtle)]">
                  {s.price}
                </span>
              </div>

              <h3 className="mt-8 font-display text-[30px] leading-[1.1] tracking-[-0.01em] text-[color:var(--ink)]">
                {s.title}
              </h3>
              <p className="mt-3 text-[15px] leading-[1.6] text-[color:var(--ink-muted)]">
                {s.summary}
              </p>

              <div className="mt-6 h-px w-full bg-[color:var(--border)]" />

              <ul className="mt-6 space-y-3">
                {s.deliverables.map((d) => (
                  <li
                    key={d}
                    className="flex gap-3 text-[13.5px] leading-[1.55] text-[color:var(--ink-muted)]"
                  >
                    <span
                      aria-hidden
                      className="mt-[10px] h-px w-3 flex-none bg-[color:var(--silver-4)]"
                    />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
