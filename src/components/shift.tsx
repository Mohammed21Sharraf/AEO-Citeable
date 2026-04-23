export function Shift() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-6 py-28 sm:py-36">
        <div className="grid gap-14 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-5">
            <span className="section-accent" />
            <p className="eyebrow w-fit">
              <span className="dot" />
              The shift
            </p>
            <h2 className="mt-5 font-display text-[44px] leading-[1.04] tracking-[-0.02em] text-[color:var(--ink)] sm:text-[60px]">
              SEO taught buyers to ask Google.
              <br />
              <span className="italic silver-text">AI taught them to ask AI.</span>
            </h2>
          </div>

          <div className="md:col-span-7 md:pl-10">
            <div className="space-y-6 text-[17px] leading-[1.65] text-[color:var(--ink-muted)]">
              <p>
                Since May 2024, B2B SaaS brands have watched organic traffic
                drop with no explanation from their SEO team. The answer
                isn&rsquo;t a Google algorithm update.{" "}
                <span className="text-[color:var(--ink)]">
                  It&rsquo;s that buyers have moved the first question upstream
                  — to an AI.
                </span>
              </p>
              <p>
                When a CMO asks ChatGPT for &ldquo;the best performance
                management platform for a 200-person remote team,&rdquo; one of
                three things happens: your competitors get named, a review
                aggregator gets named, or nothing useful gets named at all. In
                all three cases, you lose the deal before you knew it existed.
              </p>
              <p>
                Monitoring tools will show you the gap. Citeable closes it.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--border)]">
              <Stat value="May 2024" label="When AI citations started replacing clicks" />
              <Stat value="40.1%" label="of LLM-cited sources are Reddit threads" />
              <Stat value="4 engines" label="Every audit covers ChatGPT, Perplexity, Gemini, Google AI" />
              <Stat value="3–12%" label="Average citation rate for un-optimised B2B SaaS" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col gap-1 bg-[color:var(--surface)] p-5">
      <span className="font-display text-[22px] leading-none tracking-tight text-[color:var(--ink)]">
        {value}
      </span>
      <span className="text-[13px] leading-snug text-[color:var(--ink-muted)]">
        {label}
      </span>
    </div>
  );
}
