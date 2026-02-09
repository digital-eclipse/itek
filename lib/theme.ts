/**
 * ITEK Solutions — design theme extracted from landing page components.
 * Use for consistent styling, Tailwind class references, or CSS variables.
 */

// ─── Brand colors (from globals.css) ───────────────────────────────────────
export const colors = {
  primary: "#072446",
  primaryForeground: "oklch(0.985 0 0)",
  background: "oklch(1 0 0)",
  foreground: "oklch(0.21 0 0)",
  muted: "oklch(0.97 0 0)",
  mutedForeground: "oklch(0.45 0 0)",
  card: "oklch(1 0 0)",
  border: "oklch(0.92 0 0)",
  ring: "#072446",
  destructive: "oklch(0.577 0.245 27.325)",
  // Semantic / component usage
  white: "#ffffff",
  black: "#000000",
  borderLight: "rgba(0, 0, 0, 0.06)",
  borderDark: "rgba(255, 255, 255, 0.1)",
  textOnDark: "rgba(255, 255, 255, 0.7)",
  textOnDarkMuted: "rgba(255, 255, 255, 0.5)",
} as const;

// ─── Spacing (section & container) ──────────────────────────────────────────
export const spacing = {
  /** Section vertical padding */
  section: {
    sm: "3.5rem",   // py-14
    md: "4rem",     // py-16
    lg: "5rem",     // py-20
    xl: "6rem",     // py-24
    "2xl": "7rem",  // py-28
  },
  /** Container horizontal padding */
  container: {
    base: "1rem",   // px-4
    sm: "1.5rem",   // sm:px-6
    lg: "2rem",     // lg:px-8
  },
  /** Content gaps */
  gap: {
    sm: "0.5rem",
    md: "0.75rem",
    base: "1rem",
    lg: "1.5rem",
    xl: "2rem",
    "2xl": "2.5rem",
    "3xl": "3rem",
    "4xl": "4rem",
  },
  /** Header height (for hero min-height calc) */
  headerHeight: "3.5rem",
} as const;

// ─── Layout ───────────────────────────────────────────────────────────────
export const layout = {
  /** Max content width — used in Header, Footer, sections */
  maxWidth: "88rem", // 1408px — max-w-8xl
  /** Testimonials uses slightly narrower */
  maxWidthNarrow: "80rem", // max-w-7xl
  /** Hero content max width */
  heroContentMaxWidth: "48rem", // max-w-3xl
  /** CTA heading max width */
  ctaHeadingMaxWidth: "42rem", // max-w-2xl
  /** Footer tagline max width */
  footerTaglineMaxWidth: "20rem", // max-w-xs
} as const;

// ─── Typography ───────────────────────────────────────────────────────────
export const typography = {
  /** Section label (e.g. "By the numbers", "Why choose us") */
  sectionLabel: {
    fontSize: "0.75rem",
    fontWeight: 500,
    letterSpacing: "0.1em",
    textTransform: "uppercase" as const,
  },
  /** Headings scale */
  heading: {
    h1: {
      mobile: "1.5rem",   // text-2xl
      sm: "1.875rem",     // sm:text-3xl
      md: "2.25rem",      // md:text-4xl
      lg: "3rem",         // lg:text-5xl
      xl: "2.75rem",      // xl:text-[2.75rem]
      fontWeight: 700,
      lineHeight: "tight",
      letterSpacing: "tight",
    },
    h2: {
      mobile: "1.5rem",   // text-2xl
      sm: "1.875rem",     // sm:text-3xl
      md: "2.25rem",      // md:text-4xl
      lg: "2.5rem",       // md:text-[2.5rem]
      fontWeight: 600,
      lineHeight: "tight",
      letterSpacing: "tight",
    },
    h3: {
      base: "1rem",       // text-base
      lg: "1.125rem",     // sm:text-lg
      fontWeight: 600,
    },
  },
  /** Body / prose */
  body: {
    sm: "0.75rem",   // text-xs
    base: "0.875rem", // text-sm
    md: "1rem",     // text-base
    lg: "1.125rem",  // text-lg
    xl: "1.25rem",   // text-xl
  },
  /** Stats numbers (StatsWhy, Testimonials) */
  stat: {
    mobile: "1.875rem",   // text-3xl
    md: "2.25rem",        // md:text-4xl
    lg: "2.5rem",         // md:text-5xl
    fontWeight: 600,
    letterSpacing: "tight",
  },
  /** Brand wordmark */
  brand: {
    main: { fontSize: "1.25rem", fontWeight: 600, letterSpacing: "tight" },   // sm:text-2xl
    sub: { fontSize: "0.625rem", fontWeight: 400, letterSpacing: "0.1em" },   // sm:text-xs
  },
} as const;

// ─── Radii ────────────────────────────────────────────────────────────────
export const radius = {
  base: "0.625rem",   // --radius from globals
  sm: "calc(0.625rem - 4px)",
  md: "calc(0.625rem - 2px)",
  lg: "0.625rem",
  xl: "calc(0.625rem + 4px)",
  "2xl": "calc(0.625rem + 8px)",
  "3xl": "calc(0.625rem + 12px)",
  full: "9999px",
} as const;

// ─── Shadows ──────────────────────────────────────────────────────────────
export const shadows = {
  /** Card / testimonial */
  card: "0 1px 3px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.05)",
  cardHover: "0 2px 6px rgba(0, 0, 0, 0.08), 0 8px 24px rgba(0, 0, 0, 0.06)",
  /** StatsWhy cards */
  cardSubtle: "0 1px 3px rgba(0, 0, 0, 0.06)",
  cardSubtleHover: "0 2px 8px rgba(0, 0, 0, 0.08)",
  /** CTA button */
  ctaButton: "0 2px 12px rgba(0, 0, 0, 0.12)",
  ctaButtonHover: "0 4px 20px rgba(0, 0, 0, 0.18)",
  /** Final CTA container (legacy) */
  ctaContainer: "0 1px 3px rgba(0, 0, 0, 0.05)",
} as const;

// ─── Borders ──────────────────────────────────────────────────────────────
export const borders = {
  /** Light sections (Header, Footer, Testimonials, ServicesOverview, StatsWhy) */
  sectionLight: "1px solid rgba(0, 0, 0, 0.06)",
  /** Card / service cell */
  card: "1px solid rgba(0, 0, 0, 0.12)",
  /** Dark section (Final CTA) */
  sectionDark: "1px solid rgba(255, 255, 255, 0.1)",
  /** CTA button */
  button: "1px solid rgba(0, 0, 0, 0.1)",
  /** Hero pill badge */
  heroBadge: "1px solid rgba(255, 255, 255, 0.4)",
} as const;

// ─── Component-specific tokens ─────────────────────────────────────────────
export const components = {
  header: {
    height: "3.5rem",
    border: borders.sectionLight,
    background: "rgba(255, 255, 255, 0.8)",
    backdropBlur: "xl",
  },
  hero: {
    minHeight: "calc(100vh - 3.5rem)",
    borderColor: colors.primary,
    badgeBorder: borders.heroBadge,
    badgeBg: "rgba(255, 255, 255, 0.1)",
  },
  testimonials: {
    maxWidth: layout.maxWidthNarrow,
    cardShadow: shadows.card,
    cardShadowHover: shadows.cardHover,
  },
  servicesOverview: {
    gridBorder: borders.card,
    cellHoverBg: "rgba(0, 0, 0, 0.02)",
  },
  statsWhy: {
    gridGap: { base: "4rem", lg: "5rem", xl: "6rem" },
    cardBorder: "1px solid rgba(0, 0, 0, 0.08)",
    cardShadow: shadows.cardSubtle,
    cardShadowHover: shadows.cardSubtleHover,
  },
  finalCta: {
    buttonWidthDesktop: "57%",
    buttonHeight: { mobile: "3.5rem", sm: "4rem", md: "5rem" },
    buttonPadding: { mobile: "1.25rem 0.75rem", md: "2.5rem 0.5rem" },
    iconSize: { mobile: "2.25rem", sm: "2.5rem", md: "50px" },
    shadow: shadows.ctaButton,
    shadowHover: shadows.ctaButtonHover,
  },
} as const;

// ─── Animation (easing / timing for Framer Motion or CSS) ──────────────────
export const motion = {
  easeSmooth: [0.25, 0.46, 0.45, 0.94] as const,
  spring: { stiffness: 260, damping: 20 },
  springSnappy: { stiffness: 280, damping: 28 },
  stagger: { children: 0.08, delay: 0.1 },
  duration: { fast: 0.2, normal: 0.4, slow: 0.5 },
} as const;

// ─── Tailwind class reference (for documentation / consistency) ────────────
export const tw = {
  containerPadding: "px-4 sm:px-6 lg:px-8",
  sectionBorderLight: "border-black/[0.06]",
  sectionBorderDark: "border-white/10",
  sectionLabel: "text-xs font-medium uppercase tracking-widest text-muted-foreground",
  maxWidthContent: "max-w-8xl",
  maxWidthNarrow: "max-w-7xl",
} as const;
