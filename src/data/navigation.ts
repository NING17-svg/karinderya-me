import { site } from "@/data/site";

export interface LocalizedNavigationItem {
  href: string;
  labels: Record<string, string>;
}

export const primaryNavigation: LocalizedNavigationItem[] = [
  { href: "/about/", labels: { "en-US": "About" } },
  { href: "/codes/", labels: { "en-US": "Codes" } },
  { href: "/menu/", labels: { "en-US": "Menu" } },
  { href: "/ulam/", labels: { "en-US": "Ulam" } },
  { href: "/upgrades/", labels: { "en-US": "Upgrades" } },
  { href: "/walkthrough/", labels: { "en-US": "Walkthrough" } },
];

export const footerNavigation: LocalizedNavigationItem[] = [
  { href: "/about/", labels: { "en-US": "About" } },
  { href: "/codes/", labels: { "en-US": "Codes" } },
  { href: "/walkthrough/", labels: { "en-US": "Walkthrough" } },
];

export function navigationLabel(
  item: LocalizedNavigationItem,
  locale: string,
): string {
  return (
    item.labels[locale] ||
    item.labels[site.primaryLocale] ||
    Object.values(item.labels)[0]
  );
}