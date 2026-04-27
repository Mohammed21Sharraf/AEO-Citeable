import Link from "next/link";

export function Nav() {
  return (
    <header className="sticky top-0 z-40">
      <div className="mx-auto max-w-6xl px-6 pt-4">
        <nav
          aria-label="Primary"
          className="flex items-center justify-between gap-6 rounded-full border border-[color:var(--border)] bg-[rgba(251,252,253,0.72)] px-4 py-2 backdrop-blur-xl shadow-[var(--shadow-sm)]"
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
            href="mailto:s.business.uddin@gmail.com?subject=Book%20a%20call%20with%20Citeable"
            className="btn-primary !h-10 !px-4 text-sm"
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
