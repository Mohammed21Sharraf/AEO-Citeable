export function Platforms() {
  const platforms = [
    { name: "ChatGPT", hint: "OpenAI" },
    { name: "Perplexity", hint: "Answer engine" },
    { name: "Gemini", hint: "Google" },
    { name: "Google AI Mode", hint: "SERP AI" },
    { name: "Claude", hint: "Anthropic" },
  ];
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-6 border-y border-[color:var(--border)] py-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-[32ch] font-mono text-[11px] uppercase tracking-[0.14em] text-[color:var(--ink-subtle)]">
            We audit, restructure, and build citations across every answer
            engine your buyers use.
          </p>
          <ul className="grid grid-cols-2 gap-x-8 gap-y-3 sm:flex sm:flex-wrap sm:items-center sm:gap-8">
            {platforms.map((p) => (
              <li key={p.name} className="flex items-baseline gap-2">
                <span className="font-display text-[22px] leading-none tracking-tight text-[color:var(--ink)]">
                  {p.name}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[color:var(--ink-subtle)]">
                  {p.hint}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
