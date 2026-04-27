@AGENTS.md

# Pre-publish checklist

The site has three placeholders for the production domain. They were set to `https://citeable.com` as a stand-in. Before pointing real DNS at the site, replace that string in all three files with the actual production URL:

1. `src/app/robots.ts` — `SITE_URL` constant. Becomes the `Host:` line in the generated `/robots.txt`.
2. `src/app/page.tsx` — `SITE_URL` constant. Used as the `url` field in the JSON-LD Organization schema.
3. `public/llms.txt` — appears in every section link (e.g. `https://citeable.com/#services`). Find/replace the bare domain.

A `git grep "citeable.com"` will list every spot in one shot.

When a sitemap exists later (e.g. `src/app/sitemap.ts`), also add a `sitemap` field to `robots.ts` so crawlers can find it.

# Scheduled check-in: case studies / aggregateRating

A one-shot cron job is queued for **2026-06-22 at 09:03 local** (job ID `c24e5f94`, set on 2026-04-27). When it fires, the wake-up agent will:

1. Look for client wins / testimonials / measurable AEO outcomes accumulated since 2026-04-27 (in this repo, in `../AEO agency/`, or by asking the user directly).
2. If found, draft updates to:
   - `src/app/page.tsx` — extend `organizationSchema` with `aggregateRating` and a `review` array of Schema.org `Review` objects.
   - `public/llms.txt` — append a `## Case studies` section.
3. Present the diff and wait for user approval before any commit / push / PR.
4. If no results yet, report back and offer to reschedule.

**Caveat — durability is uncertain.** The cron was created with `durable: true`, but the runtime confirmation reported it as session-only ("dies when Claude exits"). After any major Claude Code session restart between now and 2026-06-22, run `/schedule list` and verify `c24e5f94` is still queued. If it's gone, ask me to recreate it — the original prompt is preserved in this CLAUDE.md so it can be reinstated verbatim.

**Why this is here:** AI engines weight Organization schema with `aggregateRating` and `Review` heavily. Right now the site has none because there are no clients to cite. Once Citeable lands paying customers with results, the schema and `llms.txt` should reflect that proof — but it's the kind of thing that gets forgotten while delivery is busy. The cron is the reminder that lives outside the user's head.
