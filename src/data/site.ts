import type { SiteLocaleConfig } from "@/types/localization";

export interface SiteOfficialSource {
  label: string;
  href: string;
  description: string;
}

export interface SiteConfig {
  name: string;
  brandMark?: string;
  gameName: string;
  domain: string;
  baseUrl: string;
  description: string;
  tagline: string;
  primaryLocale: string;
  locales: SiteLocaleConfig[];
  author: string;
  gaMeasurementId: string;
  bingSiteAuthCode: string;
  officialSources: SiteOfficialSource[];
  disclaimer: string;
}

export const site: SiteConfig = {
  name: "Karinderya! Guide",
  brandMark: "KR",
  gameName: "Karinderya!",
  domain: "karinderya.me",
  baseUrl: (process.env.NEXT_PUBLIC_SITE_URL || "https://karinderya.me").replace(/\/$/, ""),
  description:
    "Unofficial US English guide hub for Karinderya! on Roblox (Universe 10648820673). Codes, menu, ulam glossary, upgrades, walkthrough, and disambiguation from real-world karinderya eateries.",
  tagline:
    "Codes, menu, ulam terms, upgrades, and a beginner walkthrough for the SILOG Group's Filipino eatery simulator.",
  primaryLocale: "en-US",
  locales: [
    {
      code: "en-US",
      label: "English",
      pathPrefix: "",
      htmlLang: "en-US",
      openGraphLocale: "en_US",
      ui: {
        searchOpen: "Search",
        searchClose: "Close search",
        searchPlaceholder: "Search this guide",
        searchSubmit: "Search",
        searchLoading: "Loading search…",
        searchError: "Search is unavailable right now.",
        searchNoResults: "No matching pages found.",
        recentUpdates: "Recent updates",
        lastReviewed: "Last reviewed",
      },
    },
  ],
  author: "Karinderya.me",
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "",
  bingSiteAuthCode: process.env.NEXT_PUBLIC_BING_SITE_AUTH_CODE || "",
  officialSources: [
    {
      label: "Roblox universe page",
      href: "https://www.roblox.com/games/116497287371701/Karinderya!",
      description: "Official store page for Karinderya! (Root Place 116497287371701).",
    },
    {
      label: "Roblox Games API",
      href: "https://games.roblox.com/v1/games?universeIds=10648820673",
      description: "Universe 10648820673 metadata: created 2026-08-07, updated 2026-08-30.",
    },
    {
      label: "SILOG Group",
      href: "https://www.roblox.com/groups",
      description: "Creator group behind Karinderya!.",
    },
    {
      label: "Wikipedia karinderya",
      href: "https://en.wikipedia.org/wiki/Karinderya",
      description: "Real-world Filipino eatery concept, used only inside the ulam clarification page.",
    },
    {
      label: "Wikipedia ulam",
      href: "https://en.wikipedia.org/wiki/Ulam",
      description: "Filipino ulam category used only inside the ulam clarification page.",
    },
  ],
  disclaimer:
    "Karinderya.me is an unofficial fan guide. It is not affiliated with Roblox Corporation or the SILOG Group. Game facts are checked against the Roblox universe page and dated third-party codes aggregators; refer to the universe page for the live game.",
};