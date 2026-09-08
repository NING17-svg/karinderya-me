# GROWTH_LOG.md

## How To Use This File

Record every growth-relevant edit here. Keep entries short, factual, and useful for future agents.

## Change Log

### 2026-08-12 - Static discovery and review freshness baseline added

- Task: Add locale-aware static search, automatic recent updates, visible review dates, and browser metadata/security defaults to the shared template.
- Files changed: Header/search components, content helpers, locale UI labels, homepage/page hero rendering, manifest/favicon metadata, Next.js security headers, and deterministic validators.
- URLs affected: No existing URLs changed; search results use the final route manifest URLs and recent updates use existing indexable pages.
- SEO/GEO changed: Last reviewed dates are public on every page; the homepage surfaces recent non-trust content by deterministic `lastReviewed` order; locale search never falls back across locales. Search indexes are emitted as per-locale force-static resources and lazy-loaded so full-site index data is not repeated in every page payload.
- Browser baseline: Neutral SVG favicon, web manifest, `X-Content-Type-Options`, `Referrer-Policy`, and `X-Frame-Options` are wired without adding a restrictive CSP.
- Verification: Typecheck, lint, template/content/SEO validation, and full verify are required before launch.

### 2026-07-21 - V3 locale and entity routing added

- Task: Upgrade the shared template for configuration-driven locale routes and programmatic entity pages.
- Files changed: Site/page/entity types, locale and entity generators, dynamic routes, metadata, sitemap, validators, and template documentation.
- URLs affected: Existing primary-locale URLs retain their paths; additional locale and entity routes are generated from configuration.
- SEO changed: Canonical, hreflang, x-default, Open Graph locale, multilingual sitemap alternates, and final route-manifest validation are now data-driven.
- Entity changed: Generic entity Hubs/details now render source links, relationships, and optional registered local images from one base fact package.
- Verification: Typecheck, template validation, content validation, rendered SEO validation, route-manifest generation, and multilingual entity fixtures.

### 2026-09-08 - Active codes roster populated on /codes

- Task: Replace the deliberately-empty roster section on /codes with the three verified codes (DECOPART1, BRGYPERMIT, 100KCCU) and their known rewards, plus an 'expired roster' subsection using the public aggregator list.
- Files changed: `src/data/pages/fixed-pages.ts` (codes page modules, quickAnswer, keyFacts, metaDescription, summary, lastReviewed), `GROWTH_LOG.md`.
- URLs affected: `/codes` only; existing page rewritten in place, no new routes.
- Sources: gamerant.com/karinderya-codes-roblox, karinderyawiki.com/codes/all-codes, plus the dated aggregators listed in the page footer (Dexerto, MrGuider, ProGameGuides, Roblox Den, Beebom).
- Internal link role: codes page is the dedicated dated roster; the homepage Recent Updates grid surfaces it via `lastReviewed: 2026-09-08`.
- Verification: `npm run verify`.

### 2026-09-07 - Adsterra integration activated

- Task: Adsterra-integrator populated the six fixed ad units (Native Banner, 728x90, 468x60, 320x50, 160x600, Smartlink) for karinderya.me.
- Files changed: `src/data/ads.ts` (six values), `GROWTH_LOG.md`.
- Ad details: placements 31128655-31128660, all six units Active on Adsterra platform; local verification runs after the patch.
- Follow-up: site-performance-analyst weekly check will start tracking revenue once AdSense/Adsterra ingest flows settle.

### YYYY-MM-DD - Template baseline initialized

- Task: Create the initial generated guide-site baseline.
- Files changed: Template project files.
- URLs affected: `/`, `/wiki`, `/guides`, `/release-date`, `/faq`, `/about`, `/contact`, `/privacy-policy`, `/terms`.
- Content changed: Neutral placeholder content only.
- Ad baseline: Fixed Adsterra-ready modules are present and disabled; no ad markup or request is emitted.
- Follow-up: Replace this entry with a real launch/configuration entry when the one-click builder fills the site for a specific game.
