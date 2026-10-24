# Astravelle JavaScript Starter + Admin Panel

## Preview in Acode
Open `dashboard-preview.html` in Acode and use Preview/Open in Browser. It is a standalone HTML/CSS/JavaScript demo.

## Next.js JavaScript project
- `app/page.js` — user dashboard demo
- `app/admin/page.js` — admin panel UI demo
- `app/globals.css` — shared styling
- `app/layout.js` — root layout
- `app/api/health/route.js` — database health endpoint
- `app/api/admin/overview/route.js` — disabled admin API placeholder
- `app/api/wallet/withdrawals/route.js` — disabled withdrawal placeholder
- `lib/db.js` — Neon helper
- `database/schema.sql` — draft schema

## Safety note
This is a UI/starter project, not a live payment platform. The admin screen uses demo data and client-side navigation only. It has no real admin authentication or permissions, so do not expose it as a real admin console or use it to approve real-money transactions. The withdrawal API intentionally returns 501. Secure authentication, server-side role checks, audit logs, transaction ledger, chain deposit verification, and atomic balance reservation must be implemented before handling funds.
