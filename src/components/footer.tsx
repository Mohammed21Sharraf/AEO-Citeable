import Link from "next/link";
import { CiteableLogo } from "@/components/logo";

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
                { label: "Calculator", href: "#calculator" },
                { label: "FAQ", href: "#faq" },
              ]}
            />
            <FootCol
              title="Contact"
              links={[
                {
                  label: "s.business.uddin@gmail.com",
                  href: "mailto:s.business.uddin@gmail.com",
                },
                {
                  label: "Book a call",
                  href: "https://cal.com/sbusiness-kvxqhq",
                  cal: true,
                },
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
  links: { label: string; href: string; cal?: boolean }[];
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
              {...(l.cal
                ? {
                    "data-cal-link": "sbusiness-kvxqhq",
                    "data-cal-config": '{"theme":"dark"}',
                  }
                : {})}
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
  return <CiteableLogo size={32} />;
}
