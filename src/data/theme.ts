import type { ThemeConfig } from "@/types/theme";

export const theme = {
  mode: "light",
  tokens: {
    pageBg: "#FFF8EC",
    surface1: "#FFFDF6",
    surface2: "#F7E9C9",
    surface3: "#EFD9A8",
    surfaceInverse: "#3A2418",
    textPrimary: "#1F1410",
    textMuted: "#6B554A",
    textInverse: "#FFF8EC",
    textOnAccentPrimary: "#FFFFFF",
    textLink: "#B5431A",
    focusRing: "#B5431A",
    line: "#E8D8B5",
    lineStrong: "#8C6A3D",
    accentPrimary: "#B5431A",
    accentSecondary: "#2E6B3A",
    accentBright: "#F2A33A",
    statusConfirmed: "#2E6B3A",
    statusCaution: "#C77A0A",
    statusUnknown: "#6B554A",
  },
  typography: {
    headingFamily:
      "Manrope, 'Source Sans 3', system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    bodyFamily:
      "'Source Sans 3', Inter, system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    headingWeight: 800,
  },
  shape: {
    radius: "10px",
    borderWidth: "1px",
    shadow: "0 4px 12px rgba(58, 36, 24, 0.10)",
    hoverLift: "2px",
  },
  density: "comfortable",
  background: { mode: "gradient", overlay: 0, position: "top center" },
  variants: {
    home: "split-panel",
    hub: "card-grid",
    content: "reading-right-rail",
    workspace: "panelled",
  },
  decoration: { motif: "lines", intensity: "low" },
} satisfies ThemeConfig;