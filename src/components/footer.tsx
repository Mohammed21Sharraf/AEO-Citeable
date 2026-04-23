import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative border-t border-[color:var(--border)]">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link href="/" className="flex items-center gap-2">
              <LogoMark />
              <span className="font-display text-[22px] leading-none tracking-tight">
                Citeable
              </span>
            </Link>
            <p className="mt-5 max-w-[44ch] text-[14px] leading-[1.6] text-[color:var(--ink-muted)]">
              The Answer Engine Optimisation agency for B2B SaaS. We get your
              brand cited by ChatGPT, Perplexity, Gemini, and Google AI — by
              actually doing the work, not selling a dashboard.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 md:col-span-7 md:grid-cols-3">
            <FootCol
              title="Services"
              links={[
                { label: "AI Visibility Audit", href: "#services" },
                { label: "Content Restructuring", href: "#services" },
                { label: "Citation Building", href: "#services" },
              ]}
            />
            <FootCol
              title="Company"
              links={[
                { label: "Process", href: "#process" },
                { label: "Compare", href: "#compare" },
                { label: "Pricing", href: "#pricing" },
                { label: "FAQ", href: "#faq" },
              ]}
            />
            <FootCol
              title="Contact"
              links={[
                { label: "syed@eduintbd.com", href: "mailto:syed@eduintbd.com" },
                { label: "Book a call", href: "#audit" },
              ]}
            />
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-[color:var(--border)] pt-6 text-[12px] text-[color:var(--ink-subtle)] sm:flex-row sm:items-center">
          <span className="font-mono uppercase tracking-[0.14em]">
            © {new Date().getFullYear()} Citeable. All rights reserved.
          </span>
          <span className="font-mono uppercase tracking-[0.14em]">
            Built for the brands AI forgot.
          </span>
        </div>
      </div>
    </footer>
  );
}

function FootCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[color:var(--ink-subtle)]">
        {title}
      </p>
      <ul className="mt-4 space-y-2">
        {links.map((l) => (
          <li key={l.label}>
            <Link
              href={l.href}
              className="text-[14px] text-[color:var(--ink)] transition-colors hover:text-[color:var(--ink-muted)]"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function LogoMark() {
  return (
    <span
      aria-hidden
      className="relative grid h-8 w-8 place-items-center overflow-hidden rounded-[10px] border border-[color:var(--border-strong)]"
      style={{
        background:
          "linear-gradient(145deg, #ffffff 0%, #e0e4ea 40%, #9aa0ab 75%, #e6e9ee 100%)",
        boxShadow:
          "inset 0 1px 0 rgba(255,255,255,0.8), inset 0 -1px 0 rgba(0,0,0,0.08)",
      }}
    >
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden>
        <path
          d="M7 14.5c0-4.14 3.36-7.5 7.5-7.5M7 9.5c0 4.14 3.36 7.5 7.5 7.5"
          stroke="#0A0B0F"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
        <circle cx="17.5" cy="7" r="1.6" fill="#0A0B0F" />
      </svg>
    </span>
  );
}
