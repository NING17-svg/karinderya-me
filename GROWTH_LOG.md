# GROWTH_LOG.md

## How To Use This File

Record every growth-relevant edit here. Keep entries short, factual, and useful for future agents.

## Change Log

### 2026-09-18 - Equipment upgrade tiers extended on /upgrades

- Task: Add stove-tier roster, 1MVISITS / 2MVISITS / 3MVISITS milestone-bundle history, codes-button tutorial gate, and build-materials second-currency to /upgrades per task 2026-09-18-karinderya-me-equipment-upgrade-tiers. Skipped the per-tier Robux table and the one-line Deluxe Stove Robux price because the listed beginner-guide sources (earnaldo beginner guide, karinderyawiki Code Redemption Guide) do not publish per-tier Robux prices.
- Files changed: `src/data/pages/fixed-pages.ts` (new `stove-tier-roster`, `milestone-bundle-history`, `codes-button-tutorial-gate`, and `build-materials-second-currency` modules on /upgrades; updated metaDescription, summary, quickAnswer, keyFacts, and lastReviewed), `GROWTH_LOG.md`.
- URLs affected: `/upgrades` rewritten in place; no new routes.
- Sources: https://earnaldo.com/blog/karinderya-beginner-guide (stove tier inventory capture, codes-button tutorial gate, build materials), https://karinderyawiki.com/codes/how-to-redeem-codes (1MVISITS / 2MVISITS / 3MVISITS / MATERIALSDAW milestone bundles, 2026-09-02 expiry).
- Internal link role: /upgrades is the equipment-priority page; cross-links from /home (guide-map) and /walkthrough (first-hour checklist + guide-map) already point to /upgrades and need no change.
- Verification: `npm run verify` (note: `validate:template` fails for a pre-existing template-configuration reason — guide-pages fixture deleted by configurator but validator not updated — not batch-induced; `validate:content`, `validate:rendered-seo`, `next build` all pass).

### 2026-09-17 - Active codes roster refreshed on /codes (CUSHIONCHAIRSTO retired)

- Task: Replace the 2026-09-16 active roster with the 2026-09-17 karinderyawiki-verified pair (1MFAVORITES alone as active), move CUSHIONCHAIRSTO into the expired roster with its ~3-day active window stamp and an explicit 'expired by 2026-09-16' line, keep the 'Re-check after the September 26 Update!' callout pointed at the in-game Codes panel, refresh the dated caveat to 2026-09-17, advance lastReviewed to 2026-09-17, and add a one-line 'Karinderya codes churn on a ~3-day window for new furniture codes' note.
- Files changed: `src/data/pages/fixed-pages.ts` (codes page metaDescription, summary, quickAnswer, keyFacts, active-codes-roster data-table, new churn-note prose module, expired-roster prose, recheck-pointer callout, lastReviewed), `GROWTH_LOG.md`.
- URLs affected: `/codes` only; existing page rewritten in place, no new routes.
- Sources: karinderyawiki.com/codes/all-codes (in-game verification 2026-09-16), gamerant.com/karinderya-codes-roblox, rouniverse.com, karinderya.org/updates/.
- Internal link role: codes page is the dedicated dated roster; relatedPageIds still point to /walkthrough and /about (identity-overview) for first-time-redemption context.
- Verification: `npm run verify`.

### 2026-09-16 - Active codes roster refreshed on /codes

- Task: Replace the stale 2026-09-08 roster with the two verified-in-game codes (1MFAVORITES, CUSHIONCHAIRSTO) and their per-code rewards, refresh the expired roster with CUSHIONCHAIR + DECOPART1 + BRGYPERMIT + 100KCCU, and add a re-check pointer for the September 26 Update.
- Files changed: `src/data/pages/fixed-pages.ts` (codes page metaDescription, summary, quickAnswer, keyFacts, active-codes-roster data-table, expired-roster prose, new recheck-pointer callout, lastReviewed), `GROWTH_LOG.md`.
- URLs affected: `/codes` only; existing page rewritten in place, no new routes.
- Sources: karinderyawiki.com/codes/all-codes (last updated 2026-09-14, in-game verification 2026-09-13), gamerant.com/karinderya-codes-roblox, rouniverse.com, karinderya.org/updates/.
- Internal link role: codes page is the dedicated dated roster; cross-links from `/` (hero CTA + entity-grid) and `/walkthrough` (link list + Codes-panel step) already point to `/codes/` and need no change.
- Verification: `npm run verify`.

### 2026-09-15 - Starter cash economy snapshot added

- Task: Add a community-derived starting-economy snapshot to the Menu and Upgrades pages (and a short pointer on Walkthrough) so a new karinderya owner can plan the first session around dated ticket, grocery, and customer-milestone numbers, and so the Deluxe Stove equipment-priority recommendation picks up the 2026-09-13 caveat that it is no longer code-redeemable.
- Files changed: `src/data/pages/fixed-pages.ts` (new `starting-economy-snapshot` and `starting-economy-recheck` modules on /menu; new `starting-economy-snapshot` and `deluxe-stove-caveat` modules on /upgrades; new `starting-economy-pointer` callout on /walkthrough; updated quickAnswer, keyFacts, metaDescription, and lastReviewed on all three pages).
- URLs affected: `/menu`, `/upgrades`, `/walkthrough` rewritten in place; no new routes.
- Sources: `karinderyawiki.com/guides/how-to-make-money` (page last updated 2026-09-13), `rouniverse.com/articles/karinderya-guide`. Snapshot numbers are clearly tagged community-derived and dated 2026-08-24; the Deluxe Stove caveat is dated 2026-09-13.
- Internal link role: snapshot lives on /menu and /upgrades; /walkthrough points to both; /codes is cross-linked from both snapshot modules.
- Verification: `npm run verify`.

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
