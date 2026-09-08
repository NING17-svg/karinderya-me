import { site } from "@/data/site";
import type { PageContent, PagePresentation } from "@/types/content";

const shellFor = (
  shell: "content",
  variant: "reading-right-rail" = "reading-right-rail",
): PagePresentation => ({ shell, variant });

const hubShell = (variant: "card-grid" = "card-grid"): PagePresentation => ({
  shell: "hub",
  variant,
});

export const fixedPages: PageContent[] = [
  {
    id: "identity-overview",
    translationKey: "identity-overview",
    locale: "en-US",
    routeKind: "fixed",
    slug: "about",
    url: "/about",
    pageType: "wiki",
    presentation: shellFor("content", "reading-right-rail"),
    h1: "Karinderya! identity, universe, and disambiguation",
    seoTitle: "Karinderya! identity, universe, and how it differs from real-world karinderya",
    metaDescription:
      "Karinderya! on Roblox (Universe 10648820673, Root Place 116497287371701) is a Filipino restaurant simulator by the SILOG Group. Identity facts, status snapshot, and disambiguation from real-world eateries and other Roblox titles.",
    summary:
      "Identity overview for the Roblox Karinderya! universe: ids, creator, status snapshot, theme, and disambiguation from real-world karinderya and other Roblox 'Karinderya' titles.",
    hero: {
      eyebrow: "Identity & status",
      subtitle:
        "Universe 10648820673, Root Place 116497287371701, Creator SILOG Group, Filipino restaurant simulator publicly playable on Roblox since 2026-08-07.",
      ctas: [
        { label: "Codes", href: "/codes/" },
        { label: "Menu", href: "/menu/" },
        { label: "Walkthrough", href: "/walkthrough/" },
      ],
    },
    quickAnswer:
      "Karinderya! on Roblox is the Filipino restaurant simulator published by the SILOG Group under Universe 10648820673 (Root Place 116497287371701), publicly playable since August 7, 2026. The in-game theme is a small karinderya that serves ready-cooked ulam over rice, and it is not the same as a real-world karinderya eatery or other Roblox titles that share the word 'Karinderya'.",
    keyFacts: [
      { label: "Universe id", value: "10648820673" },
      { label: "Root Place id", value: "116497287371701" },
      { label: "Creator", value: "SILOG Group" },
      { label: "Created", value: "2026-08-07" },
      { label: "Updated", value: "2026-08-30" },
      { label: "Theme", value: "Filipino restaurant simulator" },
      { label: "Up-and-coming rank (2026-08-31 snapshot)", value: "#3" },
      { label: "Player count (2026-08-31 snapshot)", value: "7,376" },
      { label: "Favorited count (2026-08-31 snapshot)", value: "359,295" },
      { label: "Visits (2026-08-31 snapshot)", value: "8,869,580" },
      { label: "24-hour concurrent change (2026-08-31 snapshot)", value: "+1,057" },
    ],
    modules: [
      {
        id: "universe-ids",
        type: "prose",
        heading: "Universe and Root Place ids",
        body:
          "Karinderya! is published on Roblox under Universe 10648820673 with Root Place 116497287371701. The universe id and root place id are stable identifiers Roblox assigns to the experience, and they are the only two values that do not drift on the Roblox universe page over time. The Roblox Games API for Universe 10648820673 records the universe creation date as August 7, 2026 and the most recent update as August 30, 2026, which is consistent with a Roblox universe that was opened to public playability 31 days before this site's research date of 2026-09-07.",
      },
      {
        id: "creator",
        type: "prose",
        heading: "Creator and group identity",
        body:
          "The creator listed against the Karinderya! universe is the SILOG Group. The Roblox creator community page for the SILOG Group is searched by name on the universe page; the group id is not enumerated in the game-check brief and must be confirmed against the live universe page before this guide treats it as a hard identity fact. For launch purposes the creator is referenced by name only; the universe page itself stays the canonical source for the creator field.",
      },
      {
        id: "theme",
        type: "prose",
        heading: "Filipino restaurant simulator theme",
        body:
          "The in-game setting is a karinderya: a small Filipino neighborhood eatery that serves ready-cooked ulam (savory main dishes) over rice. Customers arrive, order from a menu, pay for their meal, and that money funds equipment and menu upgrades. This is the core gameplay loop on top of which codes, the customer-money progression, and the upgrade system sit. There is no single-player campaign or story mode in the universe description; the loop is shop-management.",
      },
      {
        id: "status-snapshot",
        type: "prose",
        heading: "Status snapshot from 2026-08-31",
        body:
          "The game-check brief recorded a 2026-08-31 status snapshot for Karinderya! as follows: Up-and-coming rank #3, player count 7,376, favorited count 359,295, visits 8,869,580, and 24-hour concurrent change of +1,057. The universe was 24 days old on that date. These numbers are dated snapshots and are not a current-state claim for 2026-09-07. Concurrency and rank on discovery shelves rotate hour to hour, so any guide that anchors a status claim on rank or player count needs to be re-checked against the universe page on the day it is read.",
      },
      {
        id: "disambiguation",
        type: "prose",
        heading: "Disambiguation from real-world karinderya and other Roblox titles",
        body:
          "The word 'karinderya' refers to a real-world Filipino small eatery that serves ulam, and that meaning is the source of most en-US Google autocomplete suggestions for the bare term. Karinderya! on Roblox is a restaurant simulator that borrows the name but is not a real-world restaurant chain, not a franchise, and not affiliated with any Filipino eatery brand. Several unrelated Roblox experiences also use the word 'Karinderya', including horror-themed 'Karinderya' experiences and creator-named titles such as 'Karinderya ni Mark'. Those titles are disambiguation noise; they are not current-game fact sources for this universe. The Wikipedia karinderya article is used only inside the ulam clarification page to anchor the real-world meaning.",
      },
      {
        id: "limits",
        type: "prose",
        heading: "Limits of this identity overview",
        body:
          "Console or mobile ports outside Roblox — Not announced as of 2026-09-07. A single-player campaign outside the Roblox universe — Not announced as of 2026-09-07. The Roblox universe page is the canonical source for any claim about creator, identifier, or theme. The numbers in the status snapshot are dated and must be re-checked on the day they are quoted; only the universe id and the root place id are stable.",
      },
    ],
    faqIds: ["what-is-karinderya-game", "is-official-karinderya-me", "different-from-real-karinderya", "different-from-other-roblox-titles"],
    relatedPageIds: ["codes", "menu", "ulam", "upgrades", "walkthrough"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-07",
  },
  {
    id: "codes",
    translationKey: "codes",
    locale: "en-US",
    routeKind: "fixed",
    slug: "codes",
    url: "/codes",
    pageType: "guides",
    presentation: shellFor("content", "reading-right-rail"),
    h1: "Karinderya! codes, redemption, and code rewards",
    seoTitle: "Karinderya! codes and how to redeem them",
    metaDescription:
      "Working Karinderya! codes for Roblox (DECOPART1, BRGYPERMIT, 100KCCU), how to redeem them inside the in-game Codes menu, and what each code rewards. Includes an expired roster from public aggregators dated 2026-09-08.",
    summary:
      "Codes roster and redemption walkthrough for Karinderya! on Roblox. The active roster lists three verified codes (DECOPART1, BRGYPERMIT, 100KCCU) with their known rewards, plus an expired roster from the public aggregators so future churn is visible from one page.",
    hero: {
      eyebrow: "Codes & rewards",
      subtitle:
        "Codes change constantly. This page records the latest working Karinderya! codes, where to find them in-game, and how to redeem them correctly.",
      ctas: [
        { label: "Menu", href: "/menu/" },
        { label: "Upgrades", href: "/upgrades/" },
        { label: "Walkthrough", href: "/walkthrough/" },
      ],
    },
    quickAnswer:
      "As of 2026-09-08, the active Karinderya! roster on the public aggregators lists three codes: DECOPART1 (5k Cash + 2x Cash Potion), BRGYPERMIT (cash + potions), and 100KCCU (cash). Paste or type each code exactly inside the in-game Codes panel to redeem; codes are case-sensitive and time-limited, so re-check the aggregator the day you redeem.",
    keyFacts: [
      { label: "Where to redeem", value: "In-game Codes button" },
      { label: "Roster source", value: "Public aggregators (Gamerant, karinderyawiki, Dexerto, MrGuider, ProGameGuides, Roblox Den, Beebom)" },
      { label: "Roster dated", value: "2026-09-08" },
      { label: "Update cadence", value: "Re-check before redeeming" },
      { label: "Active codes", value: "DECOPART1, BRGYPERMIT, 100KCCU" },
    ],
    modules: [
      {
        id: "where-codes-live",
        type: "prose",
        heading: "Where the Codes button sits in Karinderya!",
        body:
          "Karinderya! exposes codes through the standard Roblox Codes experience hook. Inside the Karinderya! menu, look for an entry labelled Codes or a button on the side panel that opens a redemption field. The exact wording may vary, but the Codes surface is part of the standard Roblox experience interface for this universe and is the only place where redeeming a code is intended to work; codes typed in chat or in the Roblox menu bar do not redeem. The in-game Codes entry is also where the most up-to-date list of currently valid codes lives at any given time.",
      },
      {
        id: "how-to-redeem",
        type: "steps",
        heading: "How to redeem a Karinderya! code",
        items: [
          {
            title: "Launch Karinderya! from the universe page",
            body:
              "Open the Roblox universe page for Karinderya! and click the green play button to start the experience. Codes must be redeemed inside a live session; redeeming outside the experience does not credit the reward.",
          },
          {
            title: "Open the in-game menu",
            body:
              "Once Karinderya! loads, find the in-game menu. On most setups this is a button on the left or right edge of the screen that opens the customer, codes, and settings panels.",
          },
          {
            title: "Click the Codes entry",
            body:
              "Inside the menu, open the Codes panel. The Codes panel shows a single text field where a code string is entered, plus a Redeem or Submit button that applies the reward to your karinderya.",
          },
          {
            title: "Paste or type the code exactly",
            body:
              "Codes are case-sensitive and character-sensitive in Roblox experiences. Paste or type the code exactly as it appears in the third-party tracker, with no spaces before or after, and watch for characters that look similar (zero versus capital O, lowercase L versus capital I).",
          },
          {
            title: "Confirm the reward applied",
            body:
              "If the code is still active, the reward appears immediately in your karinderya (cash, boost, or cosmetic item). If nothing happens, the code is expired, mistyped, or already redeemed on this account.",
          },
        ],
      },
      {
        id: "roster-caveats",
        type: "callout",
        tone: "caution",
        title: "Code rosters change every day",
        body:
          "Roblox codes are time-limited. A code that worked yesterday may be expired today, and new codes can be published without notice. Before redeeming, re-check the public aggregators that mirror the live game.",
      },
      {
        id: "active-codes-roster",
        type: "data-table",
        heading: "Active Karinderya! codes (dated 2026-09-08)",
        columns: [
          { key: "code", label: "Code" },
          { key: "reward", label: "Reward" },
          { key: "source", label: "Listed by" },
        ],
        rows: [
          {
            code: "DECOPART1",
            reward: "5k Cash + 2x Cash Potion",
            source: "Gamerant, karinderyawiki",
          },
          {
            code: "BRGYPERMIT",
            reward: "Cash + potions",
            source: "Gamerant, karinderyawiki",
          },
          {
            code: "100KCCU",
            reward: "Cash",
            source: "Gamerant, karinderyawiki",
          },
        ],
      },
      {
        id: "expired-roster",
        type: "prose",
        heading: "Expired roster from public aggregators",
        body:
          "The public aggregators (Gamerant, karinderyawiki, Dexerto, MrGuider, ProGameGuides, Roblox Den, Beebom) keep an expired section so future churn is visible from one page. Codes below previously redeemed for cash, potions, or building materials but no longer grant a reward in Karinderya! as of 2026-09-08: 50KCCU, 3MVISITS (cash + building materials), 2MVISITS (cash + building materials), BAKARENEPAIRYAN (cash + building materials), BATINATAYOHA, 1MVISITS (cash + Deluxe Stove + Parsons Chair + Parsons Table), LERISNATO (5k Cash), BALDOG (5k Cash), MATERIALSDAW (5k Cash + building materials), BRICKS (1k Cash). If a code in this list ever returns a reward again, treat it as a creator reactivation rather than a normal roster entry; the public aggregators will reflect the change on their next refresh.",
      },
    ],
    faqIds: ["do-codes-exist", "where-to-find-codes", "expired-code-help", "is-official-karinderya-me"],
    relatedPageIds: ["identity-overview", "menu", "upgrades", "walkthrough"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-08",
  },
  {
    id: "menu",
    translationKey: "menu-dishes",
    locale: "en-US",
    routeKind: "fixed",
    slug: "menu",
    url: "/menu",
    pageType: "wiki",
    presentation: shellFor("content", "reading-right-rail"),
    h1: "Karinderya! menu, dishes, and the customer-money loop",
    seoTitle: "Karinderya! menu, dishes, and how the customer-money loop works",
    metaDescription:
      "In-game Karinderya! menu reference: dish names, customer demand, unlock conditions, and how menu upgrades feed the customer-money loop. Per-dish price points beyond community coverage are not confirmed as of 2026-09-07.",
    summary:
      "In-game menu reference for Karinderya! on Roblox: which dishes are available, which ones customers actually order, and how menu upgrades feed the customer-money loop that funds progression.",
    hero: {
      eyebrow: "Menu reference",
      subtitle:
        "Karinderya! exposes a small set of Filipino dishes on a rotating menu. This page lists them, the customer demand each one drives, and how they connect to upgrades.",
      ctas: [
        { label: "Ulam clarification", href: "/ulam/" },
        { label: "Upgrades", href: "/upgrades/" },
        { label: "Walkthrough", href: "/walkthrough/" },
      ],
    },
    quickAnswer:
      "Karinderya! runs a Filipino restaurant simulator menu: a small set of ulam dishes (adobo, sinigang, kare-kare, menudo, lumpia and similar) plus rice, drinks, and sides. Customers arrive, pick from whatever the current menu offers, pay, and that money funds the equipment and menu upgrades that widen what can be served next. Exact per-dish price points and per-dish unlock tiers beyond what community videos and the universe page state are not confirmed as of 2026-09-07.",
    keyFacts: [
      { label: "Dish style", value: "Filipino ulam over rice" },
      { label: "Pricing tiers", value: "Not confirmed per-dish as of 2026-09-07" },
      { label: "Unlock progression", value: "Driven by customer-money loop" },
      { label: "Loop source", value: "Roblox universe page and community videos" },
    ],
    modules: [
      {
        id: "menu-overview",
        type: "prose",
        heading: "How the Karinderya! menu works",
        body:
          "The Karinderya! menu is the list of dishes and drinks that customers can order from during a shift. The starting menu is intentionally small; new dishes unlock as the karinderya earns money, buys equipment upgrades, and meets the in-game unlock conditions for each new ulam. Customers pick from the current menu, pay the in-game price, and the payment is added to the karinderya's cash balance. The loop repeats every shift, and the cash funds the next round of upgrades that unlocks the next dish.",
      },
      {
        id: "dish-roles",
        type: "prose",
        heading: "Dishes that show up in the menu",
        body:
          "Community videos and the Roblox community hub for Karinderya! reference Filipino ulam names such as adobo, sinigang, kare-kare, menudo, and lumpia, plus rice as the standard pairing and soft drinks or bottled water as sides. Each dish has its own in-game role: some unlock early and feed the early-game cash flow, others unlock later and pay more per order. The exact dish roster at any given update is set by the SILOG Group; the universe page is the canonical source for the current list.",
      },
      {
        id: "customer-money-loop",
        type: "prose",
        heading: "How the customer-money loop feeds upgrades",
        body:
          "Customers arrive in waves. Each wave has a customer demand pattern based on what is currently unlocked: a starting menu brings low-paying but easy customers, a mid-game menu brings higher-paying regulars, and a late-game menu brings the highest-paying customers. Each sale adds to the karinderya cash balance, and the cash balance is what pays for equipment upgrades and additional menu slots. There is no second currency beyond the cash the customers bring in, so the loop is direct: better menu → more customers → more cash → more menu.",
      },
      {
        id: "unlock-caveats",
        type: "callout",
        tone: "caution",
        title: "Per-dish unlock tiers and price points are not confirmed",
        body:
          "Exact per-dish unlock tiers and per-dish price points beyond what Roblox community and creator videos state are not confirmed as of 2026-09-07. Treat any specific number from a third-party video as a snapshot from when it was recorded, not a current state claim.",
      },
      {
        id: "menu-vs-upgrades",
        type: "prose",
        heading: "Menu and upgrades work together",
        body:
          "A new dish without the equipment to make it is not sellable; an equipment upgrade without a dish to use it on does not pay for itself. The right progression order is to unlock the equipment tier that matches the next menu dish and then run that dish until the next menu dish unlocks. The upgrades page covers the equipment side in detail; this page focuses on the menu side. Both sides are anchored to the Roblox universe page and the Roblox Games API for Universe 10648820673.",
      },
    ],
    faqIds: ["what-dishes", "price-points-known", "menu-and-upgrade-order", "ulam-meaning"],
    relatedPageIds: ["identity-overview", "ulam", "upgrades", "walkthrough"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-07",
  },
  {
    id: "ulam",
    translationKey: "ulam-vs-real-karinderya",
    locale: "en-US",
    routeKind: "fixed",
    slug: "ulam",
    url: "/ulam",
    pageType: "guides",
    presentation: shellFor("content", "reading-right-rail"),
    h1: "Ulam and the real-world karinderya distinction",
    seoTitle: "Ulam, real-world karinderya, and how Karinderya! reuses the term",
    metaDescription:
      "What a real-world karinderya is, what ulam means, and how Karinderya! on Roblox reuses the terms inside its in-game menu. The Wikipedia articles anchor only the real-world meanings; they never support current-game facts.",
    summary:
      "Clarification page for the Filipino food terms used inside Karinderya!: what a karinderya is in real life, what ulam means, and how the Roblox game reuses the same words for in-game mechanics.",
    hero: {
      eyebrow: "Ulam clarification",
      subtitle:
        "Karinderya! borrows two real Filipino food words. This page explains what they mean in real life and how the Roblox game uses them in its menu.",
      ctas: [
        { label: "Menu", href: "/menu/" },
        { label: "About", href: "/about/" },
        { label: "Walkthrough", href: "/walkthrough/" },
      ],
    },
    quickAnswer:
      "A real-world karinderya is a small Filipino neighborhood eatery that serves ready-cooked ulam (savory main dishes) over rice; ulam is the Filipino word for the main savory dish served with rice. Karinderya! on Roblox borrows both words for its restaurant simulator theme but is not a real-world restaurant chain or franchise. The Wikipedia karinderya and Wikipedia ulam articles anchor the real-world meaning; they never support in-game economy, progression, or code facts.",
    keyFacts: [
      { label: "Karinderya (real)", value: "Small Filipino eatery serving ulam over rice" },
      { label: "Ulam (real)", value: "Filipino word for the main savory dish served with rice" },
      { label: "Game usage", value: "Dish names in the in-game menu" },
      { label: "Real-world anchor", value: "Wikipedia karinderya, Wikipedia ulam" },
    ],
    modules: [
      {
        id: "what-is-karinderya-real",
        type: "prose",
        heading: "What a real-world karinderya is",
        body:
          "A karinderya is a small Filipino neighborhood eatery that serves ready-cooked ulam over rice, usually at affordable prices, in a casual counter-service setting. The word is also spelled carinderia in older Tagalog spelling. Karinderya sit alongside sari-sari stores and other small neighborhood food stalls in Philippine residential areas. The Wikipedia karinderya article is used here only as a real-world anchor for the term, never as a source for current-game economy or progression facts.",
      },
      {
        id: "what-is-ulam",
        type: "prose",
        heading: "What ulam means",
        body:
          "Ulam is the Filipino word for the main savory dish served with rice; it covers stews, stir-fries, grilled dishes, and saucy viands such as adobo, sinigang, kare-kare, menudo, and lumpia. A typical Filipino plate is a serving of rice with one or two ulam on the side. The Wikipedia ulam article is used here only as a real-world anchor for the term and for the most common ulam examples; it is not used to support in-game economy or progression facts.",
      },
      {
        id: "common-ulam",
        type: "data-table",
        heading: "Common ulam referenced in Karinderya!",
        columns: [
          { key: "ulam", label: "Ulam" },
          { key: "meaning", label: "Real-world meaning" },
        ],
        rows: [
          { ulam: "Adobo", meaning: "Soy-vinegar braised meat or seafood, a Filipino staple." },
          { ulam: "Sinigang", meaning: "Sour soup or stew, traditionally tamarind-based." },
          { ulam: "Kare-kare", meaning: "Peanut-based oxtail stew, served with bagoong." },
          { ulam: "Menudo", meaning: "Pork and liver stew with potatoes and vegetables." },
          { ulam: "Lumpia", meaning: "Filipino spring rolls, either fresh or fried." },
        ],
      },
      {
        id: "how-game-uses-terms",
        type: "prose",
        heading: "How Karinderya! reuses the terms",
        body:
          "Inside the Roblox game, the same words appear as dish names on the in-game menu. Each ulam becomes a sellable dish with its own in-game unlock condition and customer-demand pattern, and the customer-money loop is what funds the next dish. The mapping between the real-world meanings and the in-game dish roles is intentional: real Filipino ulam names help Roblox players find the right restaurant-simulator experience through autocomplete suggestions that already use those words. The menu page lists the in-game dish roles and unlock conditions.",
      },
      {
        id: "not-franchise",
        type: "prose",
        heading: "Why the game is not a real-world franchise",
        body:
          "Karinderya! on Roblox is a Roblox universe published by the SILOG Group. It is not affiliated with any real-world karinderya chain, does not run any real-world restaurant locations, and does not accept in-person diners. Country-specific real-world franchise names beyond Wikipedia are not used as current-game fact sources for this site. The only link between the Roblox universe and the real world is the shared use of the Filipino food vocabulary for the in-game menu.",
      },
    ],
    faqIds: ["ulam-meaning", "is-real-franchise", "what-dishes", "different-from-real-karinderya"],
    relatedPageIds: ["identity-overview", "menu", "walkthrough"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-07",
  },
  {
    id: "upgrades",
    translationKey: "upgrades-progression",
    locale: "en-US",
    routeKind: "fixed",
    slug: "upgrades",
    url: "/upgrades",
    pageType: "guides",
    presentation: shellFor("content", "reading-right-rail"),
    h1: "Karinderya! upgrades and progression",
    seoTitle: "Karinderya! upgrades, progression order, and the customer-money loop",
    metaDescription:
      "How upgrades, unlocks, and progression work in Karinderya! and the fastest way to advance the karinderya. Specific upgrade math beyond community videos is not confirmed as of 2026-09-07.",
    summary:
      "Upgrades, unlocks, and progression in Karinderya! on Roblox: the customer-money loop, equipment tiers, and a recommended upgrade order.",
    hero: {
      eyebrow: "Upgrades & progression",
      subtitle:
        "Karinderya! progression is shop-management: each upgrade widens what you can serve, which widens what customers order, which funds the next upgrade.",
      ctas: [
        { label: "Menu", href: "/menu/" },
        { label: "Walkthrough", href: "/walkthrough/" },
        { label: "Codes", href: "/codes/" },
      ],
    },
    quickAnswer:
      "Karinderya! progression is a single closed loop: customers arrive, order from the current menu, pay cash, and that cash funds equipment upgrades and menu unlocks. The right progression order is to chase the equipment tier that unlocks the next dish on the menu, run that dish until the next menu unlock, and repeat. Specific upgrade tier math and exact unlock thresholds beyond what Roblox community and creator videos state are not confirmed as of 2026-09-07.",
    keyFacts: [
      { label: "Loop source", value: "Customer payments fund equipment and menu unlocks" },
      { label: "Recommended order", value: "Equipment tier that unlocks next dish" },
      { label: "Upgrade math", value: "Not confirmed beyond community videos as of 2026-09-07" },
      { label: "Source tier", value: "Roblox universe page, community, and creator videos" },
    ],
    modules: [
      {
        id: "upgrade-systems",
        type: "prose",
        heading: "The three upgrade axes in Karinderya!",
        body:
          "Karinderya! progression runs on three axes: equipment upgrades (the karinderya tier, the cooking gear, the counter layout), menu unlocks (which ulam dishes are sellable at the current karinderya tier), and customer satisfaction (how happy customers are with the menu, the service speed, and the karinderya appearance). All three axes are paid for out of the same cash balance; the right way to spend cash is whichever one is currently blocking the next step of the loop.",
      },
      {
        id: "priority-order",
        type: "steps",
        heading: "Recommended upgrade order for a new karinderya",
        items: [
          {
            title: "Stabilize the starting menu",
            body:
              "Run the starting menu until the karinderya has enough cash to afford the next equipment tier. Resist buying cosmetics or non-essential decor until the next equipment tier is reached; the starting menu pays for itself, the next dish does not.",
          },
          {
            title: "Buy the next equipment tier",
            body:
              "The next equipment tier is the one that unlocks the next ulam dish on the menu. Equipment upgrades are gated by cash and, in some setups, by a customer count threshold.",
          },
          {
            title: "Unlock the next menu dish",
            body:
              "Once the equipment is in place, the next menu dish becomes sellable. Run it through a few customer waves to confirm it sells and to learn its in-game price.",
          },
          {
            title: "Repeat until the late-game menu",
            body:
              "Each equipment tier unlocks the next menu dish. The progression order repeats until the late-game menu is fully unlocked; from that point the karinderya runs the late-game menu and earns the highest-paying customers.",
          },
        ],
      },
      {
        id: "codes-and-progression",
        type: "prose",
        heading: "Where codes fit into progression",
        body:
          "Codes sit alongside the customer-money loop as a second cash source. Redeeming an active code adds cash (or a boost) to the karinderya without requiring a customer wave. Codes do not replace the customer-money loop; they speed it up. The codes page lists the current codes roster and the redemption walkthrough.",
      },
      {
        id: "upgrade-caveats",
        type: "callout",
        tone: "caution",
        title: "Exact upgrade math is not confirmed",
        body:
          "Specific upgrade tier math and exact unlock thresholds beyond what Roblox community and creator videos state are not confirmed as of 2026-09-07. Use the recommended order above as a starting point and verify against the universe page when a specific number matters.",
      },
    ],
    faqIds: ["best-upgrade-order", "do-codes-help-progression", "price-points-known", "menu-and-upgrade-order"],
    relatedPageIds: ["identity-overview", "menu", "walkthrough"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-07",
  },
  {
    id: "walkthrough",
    translationKey: "beginner-walkthrough",
    locale: "en-US",
    routeKind: "fixed",
    slug: "walkthrough",
    url: "/walkthrough",
    pageType: "guides",
    presentation: hubShell("card-grid"),
    h1: "Karinderya! walkthrough for beginners",
    seoTitle: "Karinderya! walkthrough for beginners",
    metaDescription:
      "Where to start in Karinderya!, what to do in the first hour, and how the codes, menu, and upgrades guides fit together for a first session.",
    summary:
      "Beginner walkthrough for Karinderya! on Roblox: onboarding checklist, customer-service basics, the money loop, and where the codes, menu, and upgrades pages fit into a first session.",
    hero: {
      eyebrow: "Walkthrough hub",
      subtitle:
        "First-time karinderya owner? This walkthrough gives you the first-hour checklist and links to every guide on the site.",
      ctas: [
        { label: "About", href: "/about/" },
        { label: "Codes", href: "/codes/" },
        { label: "Menu", href: "/menu/" },
        { label: "Upgrades", href: "/upgrades/" },
        { label: "Ulam clarification", href: "/ulam/" },
      ],
    },
    quickAnswer:
      "For a first session in Karinderya!: open the universe page, launch the experience, run the starting menu to learn the customer-money loop, redeem any active code from the Codes panel, then chase the equipment tier that unlocks the next menu dish. Multi-day progression timelines beyond what Roblox community coverage states are not confirmed as of 2026-09-07.",
    keyFacts: [
      { label: "First step", value: "Launch from the universe page" },
      { label: "First upgrade target", value: "Equipment tier that unlocks the next dish" },
      { label: "Code use", value: "Redeem from the in-game Codes panel" },
      { label: "Loop", value: "Customers → cash → upgrades → menu → customers" },
    ],
    modules: [
      {
        id: "first-hour",
        type: "steps",
        heading: "First hour checklist for Karinderya!",
        items: [
          {
            title: "Launch Karinderya! from the universe page",
            body:
              "Open the Roblox universe page for Karinderya! and click play. The universe id 10648820673 and root place id 116497287371701 are stable; if a different universe id appears, you are not in the right experience.",
          },
          {
            title: "Read the identity panel",
            body:
              "Confirm the in-game header shows Karinderya! and the SILOG Group as publisher. Horror-themed 'Karinderya' experiences and other 'Karinderya ni Mark' titles are different games and do not share the customer-money loop.",
          },
          {
            title: "Run the starting menu",
            body:
              "The first customer waves run on the starting menu. Serve them, learn the customer-money loop, and let the karinderya cash balance fill.",
          },
          {
            title: "Open the Codes panel",
            body:
              "Inside the menu, open the Codes panel and redeem any active code from the third-party codes aggregators. Each code adds cash (or a boost) to the karinderya.",
          },
          {
            title: "Buy the next equipment tier",
            body:
              "Use the cash balance to buy the equipment tier that unlocks the next menu dish. Run that dish until the next unlock; the upgrades page covers the order in detail.",
          },
        ],
      },
      {
        id: "guide-map",
        type: "entity-grid",
        heading: "Which guide to read next",
        items: [
          {
            title: "Identity & status",
            summary: "Universe ids, creator, disambiguation from real-world karinderya.",
            href: "/about/",
          },
          {
            title: "Codes",
            summary: "Where the Codes button is, how to redeem a code, and what to expect.",
            href: "/codes/",
          },
          {
            title: "Menu",
            summary: "In-game menu, customer demand, unlock progression.",
            href: "/menu/",
          },
          {
            title: "Ulam clarification",
            summary: "What ulam and karinderya mean in real-world Filipino food.",
            href: "/ulam/",
          },
          {
            title: "Upgrades & progression",
            summary: "Equipment tiers and recommended upgrade order.",
            href: "/upgrades/",
          },
        ],
      },
      {
        id: "first-session-caveats",
        type: "callout",
        tone: "tip",
        title: "Re-check dated facts on launch day",
        body:
          "Rank, player count, favorited count, and visits rotate. The universe id and root place id are stable, but any specific number should be re-checked against the universe page on the day it is quoted.",
      },
    ],
    faqIds: ["best-upgrade-order", "do-codes-exist", "what-dishes", "ulam-meaning"],
    relatedPageIds: ["identity-overview", "codes", "menu", "ulam", "upgrades"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-07",
  },
];