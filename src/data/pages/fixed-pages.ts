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
      "Working Karinderya! codes for Roblox (1MFAVORITES) as of 2026-09-17, how to redeem them inside the in-game Codes menu, and what each code rewards. Includes an expired roster from public aggregators (CUSHIONCHAIRSTO retired by 2026-09-16 after a ~3-day window) and a re-check pointer for the September 26 Update.",
    summary:
      "Codes roster and redemption walkthrough for Karinderya! on Roblox. The active roster lists one verified code (1MFAVORITES) with its known reward, plus an expired roster from the public aggregators covering CUSHIONCHAIRSTO's ~3-day window and a re-check pointer before the September 26 Update.",
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
      "As of 2026-09-17, the active Karinderya! roster lists one code verified in-game on 2026-09-16: 1MFAVORITES (100,000 Cash + 2x Cash Potion). CUSHIONCHAIRSTO (1,000 Cash + 12x CushionChair) was retired by 2026-09-16 after roughly a 3-day active window. Paste or type the active code exactly inside the in-game Codes panel; 1MFAVORITES is likely to be retired by the September 26 Update, so re-check the in-game Codes panel before the next session. New furniture codes released alongside Mini-Updates typically churn on a ~3-day window, so the short life is normal and not a site bug.",
    keyFacts: [
      { label: "Where to redeem", value: "In-game Codes button" },
      { label: "Roster source", value: "karinderyawiki, Gamerant, rouniverse, karinderya.org" },
      { label: "Roster dated", value: "2026-09-17 (in-game verification 2026-09-16 via karinderyawiki)" },
      { label: "Update cadence", value: "Re-check before and after the September 26 Update" },
      { label: "Active codes", value: "1MFAVORITES" },
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
        heading: "Active Karinderya! codes (dated 2026-09-17)",
        columns: [
          { key: "code", label: "Code" },
          { key: "reward", label: "Reward" },
          { key: "source", label: "Listed by" },
        ],
        rows: [
          {
            code: "1MFAVORITES",
            reward: "100,000 Cash + 2x Cash Potion",
            source: "karinderyawiki, Gamerant, rouniverse, karinderya.org",
          },
        ],
      },
      {
        id: "churn-note",
        type: "prose",
        heading: "Codes churn on a ~3-day window for new furniture codes",
        body:
          "Karinderya codes tied to new furniture or event milestones typically churn on a ~3-day window. CUSHIONCHAIRSTO is the most recent example: it shipped with the September 12, 2026 Mini-Update alongside the CushionChair item, and was retired by karinderyawiki by 2026-09-16 after roughly 3 days. A short active life is normal for this roster and is not a site bug; re-check the in-game Codes panel on the day you redeem, and re-check this page and the public aggregators after every Mini-Update.",
      },
      {
        id: "expired-roster",
        type: "prose",
        heading: "Expired roster from public aggregators",
        body:
          "Codes below previously redeemed in Karinderya! but no longer grant a reward as of 2026-09-17, ordered from most recent retirement: CUSHIONCHAIRSTO (1,000 Cash + 12x CushionChair, ~3-day active window, expired by 2026-09-16), CUSHIONCHAIR (12x CushionChair), DECOPART1 (5k Cash + 2x Cash Potion), BRGYPERMIT (cash + potions), 100KCCU (cash), 50KCCU, 3MVISITS (cash + building materials), 2MVISITS (cash + building materials), BAKARENEPAIRYAN (cash + building materials), BATINATAYOHA, 1MVISITS (cash + Deluxe Stove + Parsons Chair + Parsons Table), LERISNATO (5k Cash), BALDOG (5k Cash), MATERIALSDAW (5k Cash + building materials), BRICKS (1k Cash). The September 12, 2026 Mini-Update retired CUSHIONCHAIR, DECOPART1, BRGYPERMIT, and 100KCCU in one pass; CUSHIONCHAIRSTO was retired a few days later. If a code in this list ever returns a reward again, treat it as a creator reactivation rather than a normal roster entry; the public aggregators will reflect the change on their next refresh.",
      },
      {
        id: "recheck-pointer",
        type: "callout",
        tone: "tip",
        title: "Re-check after the September 26 Update!",
        body:
          "The September 26 Update is the next scheduled Mini-Update. The one active code (1MFAVORITES) is tied to a milestone that pre-dates the September 26 release, so the roster is likely to churn on that day. Before your next session, open the in-game Codes panel inside Karinderya! to confirm the string still redeems; if it does not, this page and the public aggregators (karinderyawiki, Gamerant, rouniverse, karinderya.org) will reflect the new roster on their next refresh.",
      },
    ],
    faqIds: ["do-codes-exist", "where-to-find-codes", "expired-code-help", "is-official-karinderya-me"],
    relatedPageIds: ["identity-overview", "menu", "upgrades", "walkthrough"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-17",
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
      "In-game Karinderya! menu reference: dish names, customer demand, unlock conditions, and how menu upgrades feed the customer-money loop. Includes a 2026-08-24 starting-ticket and 2026-09-13 Deluxe Stove snapshot. Per-dish price points beyond community coverage are not confirmed.",
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
      "Karinderya! runs a Filipino restaurant simulator menu: a small set of ulam dishes (adobo, sinigang, kare-kare, menudo, lumpia and similar) plus rice, drinks, and sides. Customers arrive, pick from whatever the current menu offers, pay, and that money funds the equipment and menu upgrades that widen what can be served next. The two starting tickets community trackers record are ₱35 (1 Rice + 1 Condiments) and ₱75 (1 Rice + 1 Egg + 1 Condiments), with new menu groups unlocking at 100, 400, 670, and 1,994 customers served. Exact per-dish price points beyond those two starting tickets are not confirmed.",
    keyFacts: [
      { label: "Dish style", value: "Filipino ulam over rice" },
      { label: "Starting ticket (rice + condiments)", value: "₱35 (dated 2026-08-24)" },
      { label: "Starting ticket (rice + egg + condiments)", value: "₱75 (dated 2026-08-24)" },
      { label: "Customer milestones for new menu groups", value: "100 / 400 / 670 / 1,994 served" },
      { label: "Pricing tiers beyond starting tickets", value: "Not confirmed per-dish" },
      { label: "Loop source", value: "Roblox universe page, karinderyawiki, rouniverse" },
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
        id: "starting-economy-snapshot",
        type: "prose",
        heading: "Starting-economy snapshot (community-derived)",
        body:
          "The karinderyawiki 'How to Make Money' guide and the rouniverse Karinderya guide both publish concrete starting numbers that the universe page does not. They are community trackers, not first-party data; re-check on the day you read this page, especially after a Mini-Update.\n\nStarting ticket prices dated 2026-08-24: a 1 Rice + 1 Condiments order pays ₱35, and a 1 Rice + 1 Egg + 1 Condiments order pays ₱75. New menu groups unlock at 100, 400, 670, and 1,994 customers served. Grocery restock costs (wiki ingredients guide) are Vegetables ₱90/kg, Eggs ₱120/dozen, Condiments ₱135, Rice (25 kg) ₱200, Bangus ₱130/kg, and Beef ₱585/kg. Use ticket price minus restock cost as the per-ticket margin estimate; per-dish prices beyond the two starting tickets remain unconfirmed.\n\n2026-09-13 caveat: the Deluxe Stove is no longer free via a code, so the equipment-priority recommendation now assumes cash-funded purchases. Check the active codes roster for which items remain code-redeemable and the upgrades page for the new order.",
        links: [
          { label: "Active codes roster", href: "/codes/" },
          { label: "Upgrades & progression", href: "/upgrades/" },
          { label: "karinderyawiki how-to-make-money", href: "https://karinderyawiki.com/guides/how-to-make-money" },
          { label: "rouniverse Karinderya guide", href: "https://rouniverse.com/articles/karinderya-guide" },
        ],
      },
      {
        id: "starting-economy-recheck",
        type: "callout",
        tone: "tip",
        title: "Re-check after the next Mini-Update",
        body:
          "Ticket prices, grocery costs, and customer-milestone thresholds are all snapshot numbers from a third-party tracker. The 2026-09-13 Deluxe Stove caveat is one recent example of how a Mini-Update can change the loop. Re-check the karinderyawiki and rouniverse guides after the next update before quoting any number in a guide or video.",
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
    lastReviewed: "2026-09-15",
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
      "How upgrades, unlocks, and progression work in Karinderya! and the fastest way to advance the karinderya. Covers the Basic / Standard / Deluxe stove tier roster, the 1MVISITS / 2MVISITS / 3MVISITS milestone-bundle history behind the Deluxe Stove unlock path, build materials as a second currency, and the codes-button tutorial gate. Includes a 2026-09-13 caveat that the Deluxe Stove is no longer code-redeemable. Per-tier Robux prices are not confirmed by the listed sources.",
    summary:
      "Upgrades, unlocks, and progression in Karinderya! on Roblox: the customer-money loop, equipment tiers (Basic / Standard / Deluxe stoves plus build materials as a second currency), the codes-button tutorial gate, and a recommended upgrade order that now assumes cash-funded purchases for the Deluxe Stove.",
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
      "Karinderya! progression is a single closed loop: customers arrive, order from the current menu, pay cash, and that cash funds equipment upgrades and menu unlocks. The right progression order is to chase the equipment tier that unlocks the next dish on the menu, run that dish until the next menu unlock, and repeat. Community trackers record 100, 400, 670, and 1,994 customers served as the menu-group unlock thresholds. The stove inventory tier roster is Basic / Standard / Deluxe; build materials (Concrete, Cement, Wood, Wood Plan, Brick) act as a second currency alongside cash. The codes button is hidden until the starter furniture is placed, and as of 2026-09-13 the Deluxe Stove is no longer free via a code, so equipment priority now assumes cash-funded purchases. Per-tier Robux prices are not published by the listed beginner-guide sources.",
    keyFacts: [
      { label: "Loop source", value: "Customer payments fund equipment and menu unlocks" },
      { label: "Recommended order", value: "Equipment tier that unlocks next dish" },
      { label: "Customer-milestone menu-group unlocks", value: "100 / 400 / 670 / 1,994 served" },
      { label: "Stove tier roster", value: "Basic / Standard / Deluxe (per-tier Robux not confirmed)" },
      { label: "Build materials", value: "Concrete, Cement, Wood, Wood Plan, Brick (second currency)" },
      { label: "Codes button", value: "Hidden until starter furniture is placed (tutorial gate)" },
      { label: "Deluxe Stove unlock path", value: "Was 1MVISITS / 2MVISITS milestone code; expired 2026-09-02" },
      { label: "Deluxe Stove (2026-09-13)", value: "No longer code-redeemable; must be earned or purchased" },
      { label: "Upgrade math beyond milestones", value: "Not confirmed" },
      { label: "Source tier", value: "Roblox universe page, karinderyawiki, rouniverse, earnaldo" },
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
        id: "stove-tier-roster",
        type: "prose",
        heading: "Stove tier roster (Basic / Standard / Deluxe)",
        body:
          "The earnaldo beginner guide captures three named stove tiers on the in-game inventory category tab: Basic Stove, Standard Stove, and Deluxe Stove. Stoves are stackable inventory items rather than a one-time linear replacement — you can hold several at once and place them side by side in the karinderya layout. Per-tier Robux prices are not published by the listed beginner-guide sources; the earnaldo check observed the in-game game-pass endpoint returning an empty array, so treat any specific per-tier Robux number from a third-party video or aggregator as unconfirmed. The same caveat that applies to upgrade math applies here: re-check against the in-game shop when a specific price matters.",
        links: [
          { label: "earnaldo beginner guide", href: "https://earnaldo.com/blog/karinderya-beginner-guide" },
        ],
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
        id: "milestone-bundle-history",
        type: "prose",
        heading: "1MVISITS / 2MVISITS / 3MVISITS milestone-bundle history",
        body:
          "The Deluxe Stove used to ship as a milestone-bundle code reward. The karinderyawiki Code Redemption Guide documents the bundle history: 1MVISITS paid 5k Cash + Deluxe Stove + Parsons Chair + Parsons Table (first verified in-game on August 24, 2026, expired by September 2, 2026); 2MVISITS paid the same bundle and was tied to the 2M visits milestone printed in the official game description (also expired by September 2, 2026); 3MVISITS paid 5k Cash + building materials (Pan, Cement, Wood, and more) and expired by September 2, 2026. With those milestone codes retired, the Deluxe Stove is no longer code-redeemable as of 2026-09-13 — it must be earned through the customer-money loop or purchased in-game. Other developer-issued milestone codes (MATERIALSDAW, BRICKS, LERISNATO, BALDOG, BAKARENEPAIRYAN) expired in late August 2026 and are listed in the expired roster on /codes.",
        links: [
          { label: "karinderyawiki Code Redemption Guide", href: "https://karinderyawiki.com/codes/how-to-redeem-codes" },
          { label: "Expired codes roster", href: "/codes/" },
        ],
      },
      {
        id: "codes-button-tutorial-gate",
        type: "callout",
        tone: "caution",
        title: "Codes button is hidden until the starter furniture is placed",
        body:
          "The earnaldo beginner guide records that the ticket-shaped Codes button in the top-right corner is hidden on the HUD until the first 'Place Table and Chairs' objective is complete. Placing the starter furniture on the green footprint pads is what reveals it. If a code appears not to redeem, finish the furniture placement objective first and re-open the Codes panel; pasting or typing codes outside the in-game panel never credits a reward.",
      },
      {
        id: "build-materials-second-currency",
        type: "prose",
        heading: "Build materials as a second currency",
        body:
          "Build materials act as a second currency alongside customer cash. The earnaldo beginner guide records that developer-issued codes have paid out Concrete, Cement, Wood, Wood Plan, and Brick; these stack in the same inventory grid as stoves, and the guide treats them as something the karinderya is also short of. Milestone codes that specifically rewarded building materials include 3MVISITS (5k Cash + Pan, Cement, Wood, and more, expired 2026-09-02) and MATERIALSDAW (5k Cash + building materials, expired 2026-08-24). Apply the same recommended-order thinking to materials as to cash: spend them on whichever axis is currently blocking the next step of the loop, and re-check after every Mini-Update because the developer rotates material-bundle code rewards roughly weekly.",
        links: [
          { label: "earnaldo beginner guide", href: "https://earnaldo.com/blog/karinderya-beginner-guide" },
          { label: "karinderyawiki Code Redemption Guide", href: "https://karinderyawiki.com/codes/how-to-redeem-codes" },
        ],
      },
      {
        id: "starting-economy-snapshot",
        type: "prose",
        heading: "Starting-economy snapshot (community-derived, dated 2026-08-24 / 2026-09-13)",
        body:
          "The karinderyawiki 'How to Make Money' guide and the rouniverse Karinderya guide both publish concrete numbers the universe page does not. The community sources are dated, not first-party data, so re-check after a Mini-Update.\n\nMenu-group unlocks fire at 100, 400, 670, and 1,994 customers served. Starting ticket prices dated 2026-08-24 are ₱35 (1 Rice + 1 Condiments) and ₱75 (1 Rice + 1 Egg + 1 Condiments). Grocery restock costs from the wiki ingredients guide are Vegetables ₱90/kg, Eggs ₱120/dozen, Condiments ₱135, Rice (25 kg) ₱200, Bangus ₱130/kg, and Beef ₱585/kg. Use ticket price minus restock cost as the per-ticket margin estimate.\n\n2026-09-13 caveat: the Deluxe Stove is no longer free via a code, and the Parsons furniture reward from 2MVISITS is no longer redeemable. The equipment-priority recommendation now assumes cash-funded purchases for the Deluxe Stove. The active codes roster tracks what remains code-redeemable.",
        links: [
          { label: "Active codes roster", href: "/codes/" },
          { label: "Menu reference", href: "/menu/" },
          { label: "karinderyawiki how-to-make-money", href: "https://karinderyawiki.com/guides/how-to-make-money" },
          { label: "rouniverse Karinderya guide", href: "https://rouniverse.com/articles/karinderya-guide" },
        ],
      },
      {
        id: "deluxe-stove-caveat",
        type: "callout",
        tone: "caution",
        title: "Deluxe Stove is no longer code-redeemable (2026-09-13)",
        body:
          "The Deluxe Stove used to come free via a code. As of 2026-09-13 it must be earned through the customer-money loop or purchased in-game. Treat any older guide that lists the Deluxe Stove as a free code reward as out of date. Re-check the active codes roster before planning a session around a code-redeemable item.",
      },
      {
        id: "upgrade-caveats",
        type: "callout",
        tone: "caution",
        title: "Exact upgrade math is not confirmed",
        body:
          "Specific upgrade tier math and exact unlock thresholds beyond the customer-milestone menu-group thresholds above are not confirmed. Use the recommended order above as a starting point and verify against the universe page when a specific number matters.",
      },
    ],
    faqIds: ["best-upgrade-order", "do-codes-help-progression", "price-points-known", "menu-and-upgrade-order"],
    relatedPageIds: ["identity-overview", "menu", "walkthrough"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-18",
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
      "For a first session in Karinderya!: open the universe page, launch the experience, run the starting menu to learn the customer-money loop, redeem any active code from the Codes panel, then chase the equipment tier that unlocks the next menu dish. Community trackers record 100, 400, 670, and 1,994 customers served as menu-group unlock thresholds, and 2026-09-13 the Deluxe Stove is no longer code-redeemable. Multi-day progression timelines beyond what Roblox community coverage states are not confirmed.",
    keyFacts: [
      { label: "First step", value: "Launch from the universe page" },
      { label: "First upgrade target", value: "Equipment tier that unlocks the next dish" },
      { label: "Code use", value: "Redeem from the in-game Codes panel" },
      { label: "Loop", value: "Customers → cash → upgrades → menu → customers" },
      { label: "Menu-group unlock thresholds", value: "100 / 400 / 670 / 1,994 served" },
      { label: "Deluxe Stove (2026-09-13)", value: "No longer code-redeemable" },
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
            summary: "In-game menu, customer demand, unlock progression, and the 2026-08-24 starting-economy snapshot.",
            href: "/menu/",
          },
          {
            title: "Ulam clarification",
            summary: "What ulam and karinderya mean in real-world Filipino food.",
            href: "/ulam/",
          },
          {
            title: "Upgrades & progression",
            summary: "Equipment tiers, recommended upgrade order, and the 2026-09-13 Deluxe Stove caveat.",
            href: "/upgrades/",
          },
        ],
      },
      {
        id: "starting-economy-pointer",
        type: "callout",
        tone: "tip",
        title: "Starting-economy snapshot lives on the Menu and Upgrades pages",
        body:
          "Concrete starting numbers (₱35 and ₱75 starting tickets dated 2026-08-24, the 100 / 400 / 670 / 1,994 customer-milestone menu-group thresholds, and the 2026-09-13 note that the Deluxe Stove is no longer code-redeemable) are kept on the Menu and Upgrades pages. Re-check those pages after the next Mini-Update before quoting any number.",
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
    lastReviewed: "2026-09-15",
  },
];