"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const BENCHMARK_CITATION_RATE = 40; // top-competitor citation rate across 4 AI platforms
const RECOVERY_FACTOR_90D = 0.4; // share of at-risk pipeline typically recovered in 90 days

const fmtUSD = (n: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);

const fmtPct = (n: number) => `${Math.round(n)}%`;
const fmtNum = (n: number) => new Intl.NumberFormat("en-US").format(Math.round(n));

export function Calculator() {
  const [acv, setAcv] = useState(25_000);
  const [monthlyDeals, setMonthlyDeals] = useState(12);
  const [aiBuyerPct, setAiBuyerPct] = useState(35);
  const [citationRate, setCitationRate] = useState(5);

  const { aiInfluencedDeals, monthlyAtRisk, annualAtRisk, recoverable90d, gap } =
    useMemo(() => {
      const aiInfluencedDeals = monthlyDeals * (aiBuyerPct / 100);
      const gap = Math.max(0, BENCHMARK_CITATION_RATE - citationRate);
      const lostDeals = aiInfluencedDeals * (gap / 100);
      const monthlyAtRisk = lostDeals * acv;
      const annualAtRisk = monthlyAtRisk * 12;
      const recoverable90d = monthlyAtRisk * 3 * RECOVERY_FACTOR_90D;
      return { aiInfluencedDeals, monthlyAtRisk, annualAtRisk, recoverable90d, gap };
    }, [acv, monthlyDeals, aiBuyerPct, citationRate]);

  return (
    <section id="calculator" className="relative">
      <div className="mx-auto max-w-6xl px-6 py-28 sm:py-36">
        <div className="mb-14 max-w-2xl">
          <span className="section-accent" />
          <p className="eyebrow w-fit">
            <span className="dot" />
            The invisibility tax
          </p>
          <h2 className="mt-5 font-display text-[44px] leading-[1.04] tracking-[-0.02em] text-[color:var(--ink)] sm:text-[60px]">
            Calculate the pipeline <span className="italic silver-text">quietly walking</span> to cited competitors.
          </h2>
          <p className="mt-5 max-w-[58ch] text-[16px] leading-[1.65] text-[color:var(--ink-muted)]">
            Move the sliders. See how much revenue is at risk every month buyers
            ask AI and your brand isn&rsquo;t in the answer.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-12">
          <div className="silver-surface rounded-[var(--radius-lg)] p-7 md:col-span-7">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[color:var(--ink-subtle)]">
              Your inputs
            </p>

            <div className="mt-6 space-y-7">
              <Slider
                label="Average annual contract value"
                value={acv}
                display={fmtUSD(acv)}
                min={1_000}
                max={500_000}
                step={1_000}
                onChange={setAcv}
              />
              <Slider
                label="Inbound-sourced deals per month"
                value={monthlyDeals}
                display={fmtNum(monthlyDeals)}
                min={1}
                max={200}
                step={1}
                onChange={setMonthlyDeals}
              />
              <Slider
                label="% of buyers consulting AI before choosing"
                value={aiBuyerPct}
                display={fmtPct(aiBuyerPct)}
                min={5}
                max={80}
                step={1}
                onChange={setAiBuyerPct}
                hint="Gartner projects 50%+ by end of 2026."
              />
              <Slider
                label="Your current AI citation rate (estimated)"
                value={citationRate}
                display={fmtPct(citationRate)}
                min={0}
                max={40}
                step={1}
                onChange={setCitationRate}
                hint={`Un-optimised B2B SaaS averages 3–12%. Top competitor benchmark: ${BENCHMARK_CITATION_RATE}%.`}
              />
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="grid grid-cols-1 gap-4">
              <Output
                kpiLabel="Monthly revenue at risk"
                value={fmtUSD(monthlyAtRisk)}
                highlight
                foot={`Based on a ${Math.round(gap)} pt citation gap versus the top competitor.`}
              />
              <Output
                kpiLabel="Annual invisibility tax"
                value={fmtUSD(annualAtRisk)}
                foot="12 months of lost pipeline if nothing changes."
              />
              <Output
                kpiLabel="Recoverable in 90 days"
                value={fmtUSD(recoverable90d)}
                foot={`Assumes a 40% recovery on ~${fmtNum(aiInfluencedDeals * 3)} AI-influenced deals.`}
                accent
              />
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="mailto:s.business.uddin@gmail.com?subject=Book%20a%20call%20with%20Citeable"
                className="btn-primary flex-1"
              >
                Book a call
                <ArrowIcon />
              </Link>
              <Link href="#services" className="btn-ghost flex-1">
                See what we do
              </Link>
            </div>

            <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-[color:var(--ink-subtle)]">
              Rough-order estimate · Numbers firm up after a 30-query audit
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Slider({
  label,
  value,
  display,
  min,
  max,
  step,
  hint,
  onChange,
}: {
  label: string;
  value: number;
  display: string;
  min: number;
  max: number;
  step: number;
  hint?: string;
  onChange: (n: number) => void;
}) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div>
      <div className="flex items-baseline justify-between gap-4">
        <label className="text-[13.5px] font-medium text-[color:var(--ink)]">
          {label}
        </label>
        <span className="font-display text-[22px] leading-none tracking-tight text-[color:var(--ink)]">
          {display}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="citeable-range mt-3 w-full"
        style={
          {
            // Fallback CSS variable to draw a filled portion; the custom style block in globals.css uses accent-color.
            ["--fill" as string]: `${pct}%`,
          } as React.CSSProperties
        }
      />
      {hint && (
        <p className="mt-2 text-[12px] leading-snug text-[color:var(--ink-subtle)]">
          {hint}
        </p>
      )}
    </div>
  );
}

function Output({
  kpiLabel,
  value,
  foot,
  highlight,
  accent,
}: {
  kpiLabel: string;
  value: string;
  foot?: string;
  highlight?: boolean;
  accent?: boolean;
}) {
  return (
    <div
      className={[
        "rounded-[var(--radius-lg)] p-6",
        highlight
          ? "border border-[color:var(--border-strong)] bg-[color:var(--ink)] text-[#f7f8fa]"
          : accent
          ? "silver-surface"
          : "border border-[color:var(--border)] bg-[color:var(--surface)]",
      ].join(" ")}
    >
      <p
        className={[
          "font-mono text-[11px] uppercase tracking-[0.14em]",
          highlight ? "text-[#b9bcc3]" : "text-[color:var(--ink-subtle)]",
        ].join(" ")}
      >
        {kpiLabel}
      </p>
      <p
        className={[
          "mt-3 font-display leading-none tracking-tight",
          highlight ? "text-[44px] sm:text-[52px]" : "text-[34px] sm:text-[40px]",
        ].join(" ")}
      >
        {value}
      </p>
      {foot && (
        <p
          className={[
            "mt-3 text-[12.5px] leading-snug",
            highlight ? "text-[#b9bcc3]" : "text-[color:var(--ink-muted)]",
          ].join(" ")}
        >
          {foot}
        </p>
      )}
    </div>
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
