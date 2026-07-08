---
name: Coastal Academic
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#50453c'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f1f1f1'
  outline: '#82756b'
  outline-variant: '#d3c4b9'
  surface-tint: '#7a5739'
  primary: '#5d3e22'
  on-primary: '#ffffff'
  primary-container: '#775537'
  on-primary-container: '#facca6'
  inverse-primary: '#ebbe99'
  secondary: '#6e5d25'
  on-secondary: '#ffffff'
  secondary-container: '#fae19c'
  on-secondary-container: '#75632b'
  tertiary: '#2f4947'
  on-tertiary: '#ffffff'
  tertiary-container: '#46615f'
  on-tertiary-container: '#bedbd8'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdcc1'
  primary-fixed-dim: '#ebbe99'
  on-primary-fixed: '#2d1601'
  on-primary-fixed-variant: '#5f4024'
  secondary-fixed: '#fae19c'
  secondary-fixed-dim: '#dcc582'
  on-secondary-fixed: '#231b00'
  on-secondary-fixed-variant: '#55450f'
  tertiary-fixed: '#cbe8e5'
  tertiary-fixed-dim: '#afccc9'
  on-tertiary-fixed: '#04201e'
  on-tertiary-fixed-variant: '#314b4a'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  display-lg:
    fontFamily: Libre Caslon Text
    fontSize: 48px
    fontWeight: '400'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Libre Caslon Text
    fontSize: 32px
    fontWeight: '400'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Libre Caslon Text
    fontSize: 28px
    fontWeight: '400'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Libre Caslon Text
    fontSize: 24px
    fontWeight: '400'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.2'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
  container-max: 1280px
---

## Brand & Style
The design system bridges the gap between scholarly rigor and the serene, expansive atmosphere of a high-end coastal retreat. It is designed for intellectual platforms that value clarity, tradition, and a breathable, light-filled user experience.

The visual style is **Editorial Minimalism** with **Glassmorphic** accents. It emphasizes high-quality typography, generous whitespace (breathable margins), and a sophisticated use of translucency to mimic the effect of sunlight through frosted glass. The interface should feel warm, inviting, and timeless—evoking the sensation of reading an expensive journal on a sun-drenched veranda.

## Colors
The palette is rooted in organic, earthy tones that suggest natural materials and historical documents.

- **Seashell (#F1F1F1):** The primary background color. It provides a softer, warmer base than pure white, reducing eye strain for long-form reading.
- **Old Copper (#775537):** Used for primary text and structural borders. This weathered metallic tone replaces standard blacks or greys to add warmth and academic weight.
- **Butter Yellow (#FBE29D):** An accent for highlights, primary call-to-actions, and active states, mimicking warm sunlight.
- **Nebula Blue (#C0DDDA):** A secondary accent used for functional elements like secondary buttons, data visualization, or distinct categories, providing a cool, oceanic contrast.

## Typography
The typography strategy pairings a scholarly serif with a contemporary, high-legibility sans-serif.

- **Headings (Libre Caslon Text):** Used for all titles and editorial callouts. The high-contrast strokes and elegant serifs provide the "Academic" authority. Use optical sizing where available to maintain delicacy at large sizes.
- **Body & Interface (Hanken Grotesk):** A clean, professional sans-serif that ensures high readability for complex information. The low-contrast strokes balance the ornate nature of the headings.
- **Labeling:** Captions and labels utilize a slightly tighter tracking and uppercase styling in Hanken Grotesk to differentiate functional text from narrative content.

## Layout & Spacing
This design system employs a **Fluid Grid** with wide margins to emphasize its airy, premium nature.

- **Desktop:** 12-column grid with 24px gutters. Page margins should be generous (minimum 64px) to create a "framed" editorial look.
- **Mobile:** 4-column grid with 16px gutters and 20px margins.
- **Rhythm:** Spacing follows an 8px base unit. Use larger vertical increments (48px, 64px, 80px) between sections to maintain the airy atmosphere.
- **Alignment:** Content is typically center-aligned or left-aligned within large containers to mimic the layout of a physical academic journal.

## Elevation & Depth
Depth is created through light and transparency rather than heavy shadows.

- **Glassmorphism:** Secondary panels and navigation overlays use a backdrop-filter (blur: 12px to 20px) with a semi-transparent Seashell (#F1F1F1CC) fill.
- **Subtle Shadows:** Use "Sunlight Shadows"—large blur radius (20px+), very low opacity (5-8%), and a slight Old Copper tint (#7755370A) to ground elements without adding visual weight.
- **Tonal Layering:** Interactive elements like cards use a subtle 1px border in Old Copper at 10% opacity to define their boundaries against the background.

## Shapes
The shape language is deliberately soft to counteract the traditional stiffness of academic themes.

- **Standard Radius:** 16px (rounded-lg) for secondary elements.
- **Primary Containers:** 24px to 32px (rounded-xl) for main content cards and hero sections.
- **Pills:** Buttons and tags should utilize a full pill-shape (999px) to emphasize the coastal, smooth-stone aesthetic.

## Components
- **Buttons:** Primary buttons feature a solid Old Copper fill with Butter Yellow text. Secondary buttons are "Copper-lined" (1px border) with Nebula Blue text.
- **Editorial Cards:** Feature large Libre Caslon titles, generous internal padding (32px), and a subtle gradient background that transitions from Seashell to a soft Butter Yellow tint.
- **Glass Pills:** Tags and chips use a semi-transparent Nebula Blue background with a frosted effect, used for categorizing academic topics.
- **Input Fields:** Minimalist design with a bottom-only border in Old Copper. Focus states are indicated by a soft Butter Yellow glow.
- **Lists:** Bullet points are replaced with custom copper-toned diamond or circle markers to maintain the sophisticated aesthetic.
- **Navigation:** A floating "Glass" header with a strong backdrop blur and high roundedness (32px), containing minimal navigation items.