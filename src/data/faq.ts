import type { FAQItem } from "@/types/content";

export const faqItems: FAQItem[] = [
  {
    id: "what-is-karinderya-game",
    question: "What is Karinderya! on Roblox?",
    answer:
      "Karinderya! is a Filipino restaurant simulator universe on Roblox published by the SILOG Group under Universe 10648820673. You run a small karinderya, serve ready-cooked ulam to customers, and use the earnings to upgrade the karinderya and unlock more dishes.",
    pageIds: ["home", "identity-overview", "walkthrough"],
    category: "site",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "is-official-karinderya-me",
    question: "Is karinderya.me an official Roblox site?",
    answer:
      "Karinderya.me is an unofficial fan guide. It is not affiliated with Roblox Corporation or the SILOG Group. Game facts on this site are checked against the Roblox universe page and dated third-party codes aggregators.",
    pageIds: ["home", "identity-overview", "codes", "walkthrough"],
    category: "site",
    schemaEligible: true,
    sourceStatus: "internal",
  },
  {
    id: "different-from-real-karinderya",
    question: "Is Karinderya! the same as a real-world karinderya?",
    answer:
      "No. Karinderya! is a Roblox restaurant simulator that borrows the name. A real-world karinderya is a small Filipino neighborhood eatery that serves ready-cooked ulam over rice; it is not affiliated with this Roblox universe.",
    pageIds: ["home", "identity-overview", "ulam"],
    category: "site",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "different-from-other-roblox-titles",
    question: "Is Karinderya! the same as other Roblox 'Karinderya' games?",
    answer:
      "No. Several unrelated Roblox experiences share the word 'Karinderya', including horror-themed 'Karinderya' experiences and creator-named titles such as 'Karinderya ni Mark'. Karinderya! is Universe 10648820673 and is distinct from those titles.",
    pageIds: ["identity-overview"],
    category: "site",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "do-codes-exist",
    question: "Does Karinderya! have codes?",
    answer:
      "Yes. Karinderya! exposes a Codes button inside the in-game menu. Codes are time-limited and published on third-party codes aggregators such as Gamerant, Dexerto, MrGuider, ProGameGuides, Roblox Den, and Beebom.",
    pageIds: ["home", "codes", "walkthrough"],
    category: "site",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "where-to-find-codes",
    question: "Where do I find the latest Karinderya! codes?",
    answer:
      "The in-game Codes panel shows currently valid codes at any given moment. Third-party codes aggregators (Gamerant, Dexerto, MrGuider, ProGameGuides, Roblox Den, Beebom) mirror the live game and refresh their rosters when new codes go live.",
    pageIds: ["codes"],
    category: "site",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "expired-code-help",
    question: "Why is a code not working?",
    answer:
      "Codes are time-limited and case-sensitive. If a code does not redeem, the code is expired, mistyped, or already redeemed on this account. Re-check the third-party aggregator and confirm the spelling before retrying.",
    pageIds: ["codes"],
    category: "site",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "what-dishes",
    question: "What dishes are on the Karinderya! menu?",
    answer:
      "Community videos reference Filipino ulam such as adobo, sinigang, kare-kare, menudo, and lumpia, plus rice and sides. The exact current dish roster is set by the SILOG Group and is listed on the in-game menu.",
    pageIds: ["menu", "walkthrough", "ulam"],
    category: "site",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "ulam-meaning",
    question: "What is ulam?",
    answer:
      "Ulam is the Filipino word for the main savory dish served with rice; it covers stews, stir-fries, grilled dishes, and saucy viands such as adobo, sinigang, kare-kare, menudo, and lumpia.",
    pageIds: ["ulam", "menu", "walkthrough"],
    category: "site",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "is-real-franchise",
    question: "Is Karinderya! a real-world franchise?",
    answer:
      "No. Karinderya! is a Roblox universe published by the SILOG Group. It does not run any real-world restaurant locations and is not affiliated with any Filipino eatery chain.",
    pageIds: ["ulam"],
    category: "site",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "price-points-known",
    question: "Are the per-dish price points and unlock tiers confirmed?",
    answer:
      "Exact per-dish price points and per-dish unlock tiers beyond what Roblox community and creator videos state are not confirmed as of 2026-09-07. Treat any specific number from a third-party video as a dated snapshot.",
    pageIds: ["menu", "upgrades"],
    category: "site",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "menu-and-upgrade-order",
    question: "Should I upgrade the menu or the karinderya first?",
    answer:
      "Both are needed at the same time. The right order is to buy the equipment tier that unlocks the next menu dish and then run that dish until the next unlock. The upgrades page walks through the order in detail.",
    pageIds: ["menu", "upgrades", "walkthrough"],
    category: "site",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "best-upgrade-order",
    question: "What is the fastest way to advance the karinderya?",
    answer:
      "Run the starting menu until you can afford the next equipment tier; buy it; unlock and run the next menu dish; repeat. Codes add cash to the karinderya without requiring a customer wave and speed up the loop.",
    pageIds: ["upgrades", "walkthrough"],
    category: "site",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "do-codes-help-progression",
    question: "Do codes help with progression?",
    answer:
      "Codes add cash (or a boost) to the karinderya without requiring a customer wave. They do not replace the customer-money loop; they speed it up.",
    pageIds: ["codes", "upgrades"],
    category: "site",
    schemaEligible: true,
    sourceStatus: "official",
  },
];