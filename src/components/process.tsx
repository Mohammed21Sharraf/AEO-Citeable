export function Process() {
  const steps = [
    {
      num: "01",
      title: "Audit",
      duration: "Week 1",
      body: "We run 30 queries across ChatGPT, Perplexity, Gemini and Google AI. You get a competitor citation map, an AI Visibility Score, and a clear diagnosis of why you aren't being cited.",
    },
    {
      num: "02",
      title: "Restructure",
      duration: "Weeks 2–4",
      body: "We rewrite your homepage, product, and top landing pages into definition sentences and answer blocks. We ship FAQ schema, fix robots.txt, add llms.txt — the technical foundation AI crawlers look for.",
    },
    {
      num: "03",
      title: "Cite",
      duration: "Month 2 onward",
      body: "We seed Reddit and Quora threads where your buyers actually ask, pitch industry publications AI already trusts, and optimise your G2 / Capterra profiles so reviews feed the models.",
    },
    {
      num: "04",
      title: "Measure",
      duration: "Every month",
      body: "We re-run the 30 queries and compare citation rate to the baseline. You see exactly which queries now name you — and which competitors you displaced.",
    },
  ];

  return (
    <section id="process" className="relative">
      <div className="mx-auto max-w-6xl px-6 py-28 sm:py-36">
        <div className="mb-16 max-w-2xl">
          <span className="section-accent" />
          <p className="eyebrow w-fit">How we work</p>
          <h2 className="mt-5 font-display text-[44px] leading-[1.04] tracking-[-0.02em] text-[color:var(--ink)] sm:text-[60px]">
            From invisible to <span className="italic silver-text">cited</span>{" "}
            in 90 days.
          </h2>
        </div>

        <ol className="relative border-l border-[color:var(--border)] pl-0 sm:pl-10">
          {steps.map((step, i) => (
            <li
              key={step.num}
              className="relative grid gap-5 py-8 sm:grid-cols-12 sm:gap-10"
              style={{
                borderTop: i === 0 ? "1px solid var(--border)" : "1px solid transparent",
                borderBottom: "1px solid var(--border)",
              }}
            >
              <div className="sm:col-span-3">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[color:var(--ink-subtle)]">
                    {step.num}
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[color:var(--ink-subtle)]">
                    {step.duration}
                  </span>
                </div>
                <h3 className="mt-3 font-display text-[34px] leading-none tracking-tight text-[color:var(--ink)]">
                  {step.title}
                </h3>
              </div>
              <p className="max-w-[60ch] text-[16px] leading-[1.65] text-[color:var(--ink-muted)] sm:col-span-9">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
