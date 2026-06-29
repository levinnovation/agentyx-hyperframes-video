---
name: Lev Innovation Design System
version: 1.0.0
tokens:
  colors:
    bg: "#000000"
    bg-elevated: "#0a0a0a"
    surface: "#111111"
    fg: "#ffffff"
    fg-muted: "rgba(255, 255, 255, 0.72)"
    fg-subtle: "rgba(255, 255, 255, 0.52)"
    border: "rgba(255, 255, 255, 0.12)"
    accent: "#ffffff"
  typography:
    fonts:
      heading: "Plus Jakarta Sans"
      body: "Inter"
  radii:
    sm: "6px"
    md: "8px"
---
# Design System: Lev Innovation

Official design system specification for the **Lev Innovation** parent company brand. Use alongside the Agentyx product brand when composing pitch decks, corporate materials, and co-branded presentations.

## 1. Visual Atmosphere
*   **Atmosphere:** Monochrome, minimalist, premium, high contrast.
*   **Colors:** Pure black backgrounds (`#000000`) and high-contrast white elements. No accent colors.
*   **Logo/Chevron:** Roundedstroke chevron mark and bold kerning wordmark. Rounded corners only.

## 2. Component Stylings
*   **Lockup (`.lev-lockup`):**
    *   Inline layout containing a text indicator (`by`) and the wide wordmark PNG logo (`lev-logotype-on-light.png` or `lev-logotype.png`).
*   **Footer Statement Bar (`.lev-footer-bar`):**
    *   Full-width black bar with centered white statement text. Used to lock/anchor slides.
*   **Split Panel (`.lev-split-panel`):**
    *   A grid dividing the canvas into a dark panel (pure black, white text) and a light panel (warm off-white, slate text).

## 3. Co-branding Rules
1.  **Do not** use Lev black/white styling as the primary theme for product-focused Agentyx slides.
2.  **Do** include the `.lev-lockup` on the cover page and footer of product slides to establish the product-parent architecture.
3.  **Do** use Lev black panels to represent "the past / the problem" in split comparative slides.
