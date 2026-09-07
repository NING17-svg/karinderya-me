import { site } from "@/data/site";
import type { PageContent } from "@/types/content";

export const homePage: PageContent = {
  id: "home",
  translationKey: "home",
  locale: "en-US",
  routeKind: "home",
  slug: "",
  url: "/",
  pageType: "home",
  presentation: { shell: "home" },
  h1: "Karinderya Roblox: Codes, Menu, Ulam and Progression Guides",
  seoTitle:
    "Karinderya Roblox Guides: Codes, Menu, Ulam, Upgrades, Walkthrough",
  metaDescription:
    "Karinderya Roblox is a Filipino eatery simulator from the SILOG Group on universe 10648820673. Find codes, the menu reference, ulam terms, upgrades and a beginner walkthrough.",
  summary:
    "Unofficial US English launch hub for Karinderya! on Roblox (Universe 10648820673, Root Place 116497287371701, Creator SILOG Group). Codes, menu, ulam, upgrades, and a beginner walkthrough.",
  hero: {
    eyebrow: "Launch hub",
    subtitle: site.tagline,
    ctas: [
      { label: "Codes", href: "/codes/" },
      { label: "Walkthrough", href: "/walkthrough/" },
    ],
  },
  quickAnswer:
    "Karinderya! on Roblox is a Filipino eatery simulator published by the SILOG Group (Universe 10648820673, Root Place 116497287371701), publicly playable since August 7, 2026. You run a small karinderya, serve customers from a menu of Filipino ulam, and spend the earnings on upgrades that widen what you can serve next. This site splits that into six pages: identity, codes, menu, ulam terms, upgrades, and a beginner walkthrough.",
  keyFacts: [
    { label: "Universe", value: "10648820673" },
    { label: "Root Place", value: "116497287371701" },
    { label: "Creator", value: "SILOG Group" },
    { label: "Public since", value: "2026-08-07" },
    { label: "Theme", value: "Filipino restaurant simulator" },
    { label: "Site status", value: "2026-09-07 snapshot" },
  ],
  modules: [
    {
      id: "what-karinderya-is",
      type: "prose",
      heading: "What Karinderya! on Roblox is and who runs it",
      body:
        "Karinderya! is a restaurant-management experience built around the Filipino karinderya: a small neighborhood eatery that serves ready-cooked ulam over rice. The Roblox universe carries the id 10648820673, its root place is 116497287371701, and the creator listed against the universe is the SILOG Group. The universe was created on August 7, 2026 and recorded an update on August 30, 2026. The loop is short and repeatable: customers arrive, order from whatever the menu currently offers, pay, and that money funds the upgrades and unlocks that widen what you can serve next. If you want the identity facts on their own, the Karinderya! identity and status page keeps them in one place.",
    },
    {
      id: "guide-map",
      type: "entity-grid",
      heading: "Where each Karinderya! guide lives",
      items: [
        {
          title: "Codes",
          summary:
            "Where the Codes button is, how to redeem a code, and what to expect.",
          href: "/codes/",
        },
        {
          title: "Menu",
          summary:
            "In-game menu, dish roles, customer demand, and unlock progression.",
          href: "/menu/",
        },
        {
          title: "Ulam",
          summary:
            "Real-world karinderya and ulam meaning; how the game reuses the words.",
          href: "/ulam/",
        },
        {
          title: "Upgrades",
          summary:
            "Equipment tiers and recommended upgrade order for the karinderya.",
          href: "/upgrades/",
        },
        {
          title: "Walkthrough",
          summary:
            "First-hour checklist for a new karinderya and links to every guide.",
          href: "/walkthrough/",
        },
        {
          title: "Identity",
          summary:
            "Universe ids, creator, disambiguation from real-world karinderya.",
          href: "/about/",
        },
      ],
    },
    {
      id: "status-snapshot",
      type: "prose",
      heading: "Status numbers and what they do not prove",
      body:
        "The game-check brief for this universe recorded a dated snapshot on August 31, 2026: an Up-and-coming rank of #3, a player count of 7,376, 359,295 favorites, 8,869,580 visits, and a 24-hour concurrent change of +1,057. The universe was 24 days old on that date. Read those as momentum signals for a very new universe, not as a description of the game today. Roblox concurrency moves hour to hour, and rank positions on discovery shelves rotate. The two numbers that do not drift are the universe id and the root place id, which is exactly why every page on this site anchors identity claims to those two values and to the official universe page rather than to a rank.",
    },
    {
      id: "what-is-not-announced",
      type: "callout",
      tone: "caution",
      title: "Not announced as of 2026-09-07",
      body:
        "Standalone console or mobile versions outside Roblox, a single-player campaign outside the Roblox universe, and per-dish unlock tiers beyond community coverage are not announced as of 2026-09-07. The device support that does exist is whatever the Roblox universe page lists for the experience.",
    },
  ],
  faqIds: [
    "what-is-karinderya-game",
    "is-official-karinderya-me",
    "different-from-real-karinderya",
    "do-codes-exist",
  ],
  relatedPageIds: [
    "identity-overview",
    "codes",
    "menu",
    "ulam",
    "upgrades",
    "walkthrough",
  ],
  schemaTypes: ["WebSite", "CollectionPage", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-09-07",
};