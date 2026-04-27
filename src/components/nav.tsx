import Link from "next/link";
import { CiteableLogo } from "@/components/logo";

export function Nav() {
  return (
    <header className="sticky top-0 z-40">
      <div className="mx-auto max-w-6xl px-6 pt-4">
        <nav
          aria-label="Primary"
          className="flex items-center justify-between gap-6 rounded-full border border-[color:var(--border)] bg-[rgba(14,16,21,0.72)] px-4 py-2 backdrop-blur-xl shadow-[var(--shadow-sm)]"
        >
          <Link href="/" className="flex items-center gap-2 pl-2">
            <LogoMark />
            <span className="font-display text-[20px] leading-none tracking-tight">
              Citeable
            </span>
          </Link>

          <ul className="hidden items-center gap-7 md:flex">
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#process">Process</NavLink>
            <NavLink href="#compare">Compare</NavLink>
            <NavLink href="#calculator">Calculator</NavLink>
            <NavLink href="#faq">FAQ</NavLink>
          </ul>

          <Link
            href="https://cal.com/sbusiness-kvxqhq"
            data-cal-link="sbusiness-kvxqhq"
            data-cal-config='{"theme":"dark"}'
            className="btn-primary !h-10 !px-4 text-[13px]"
          >
            Book a call
            <ArrowIcon />
          </Link>
        </nav>
      </div>
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className="text-sm text-[color:var(--ink-muted)] transition-colors hover:text-[color:var(--ink)]"
      >
        {children}
      </Link>
    </li>
  );
}

function LogoMark() {
  return <CiteableLogo size={28} />;
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
