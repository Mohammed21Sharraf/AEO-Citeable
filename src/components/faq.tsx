export function Faq() {
  const items = [
    {
      q: "How is this different from an SEO agency?",
      a: "Traditional SEO optimises for Google's ranked results. AEO optimises for AI-generated answers — the text ChatGPT, Perplexity, Gemini, and Google AI produce when a buyer asks for a recommendation. Same destination (buyers finding you), different mechanics. We're not a replacement for SEO; we're what your SEO agency isn't doing.",
    },
    {
      q: "How do you measure whether this is working?",
      a: "We re-run the exact 30-query baseline from your audit every month. Citation rate (how often you appear out of 120 possible placements), competitor gap (the distance between you and the most-cited competitor), and technical readiness are all tracked against the baseline you paid for.",
    },
    {
      q: "My SEO team says AI traffic isn't material yet — why invest now?",
      a: "Compounding. The citations you build today — Reddit threads, industry articles, review-site content — accumulate into the training data and retrieval sets the models use for the next 18 to 36 months. By the time AI traffic becomes obviously material to your CFO, the competitors who started in 2025 have an unassailable lead.",
    },
    {
      q: "Do you guarantee citations?",
      a: "No honest agency can guarantee a specific brand appears for a specific query in a specific model — the models change weekly. What we guarantee is the work: 30 queries run, pages restructured on schedule, citations placed to the agreed volume, and a transparent month-over-month report on the trend.",
    },
    {
      q: "Will you touch my website directly, or do I implement?",
      a: "Your call. We work either way — give us editor access to your CMS and we ship changes end-to-end, or we hand your team a Google Doc and JSON-LD snippets to implement. Most clients start with the Google Doc handoff and move to direct access once trust is established.",
    },
    {
      q: "Is Reddit seeding allowed? I don't want to get our brand burned.",
      a: "We only post from accounts with genuine karma and comment history, we reply to threads where our client is a legitimate recommendation, and we always mention at least one competitor so the comment reads as real advice. Brand-safe by construction — the whole tactic breaks the moment it reads as promotional.",
    },
  ];

  return (
    <section id="faq" className="relative">
      <div className="mx-auto max-w-6xl px-6 py-28 sm:py-36">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-4">
            <span className="section-accent" />
            <p className="eyebrow w-fit">
              <span className="dot" />
              FAQ
            </p>
            <h2 className="mt-5 font-display text-[44px] leading-[1.04] tracking-[-0.02em] text-[color:var(--ink)] sm:text-[56px]">
              Questions
              <br />
              <span className="italic silver-text">worth answering.</span>
            </h2>
          </div>

          <div className="md:col-span-8">
            {items.map((it) => (
              <details key={it.q} className="faq-item">
                <summary>
                  <span className="pr-6 font-display text-[20px] leading-[1.35] text-[color:var(--ink)] sm:text-[22px]">
                    {it.q}
                  </span>
                  <span className="plus" aria-hidden />
                </summary>
                <p className="answer">{it.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
