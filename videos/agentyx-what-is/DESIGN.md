# Design System — agentyx-what-is

## Overview

Video explainer B2B en **tema oscuro** (`:root` de `brand-systems/agentyx-brand-system/colors_and_type.css`). Mockups de producto en scopes `.ax-light`. Mensaje: ejecución, no interacción.

## Source of Truth

- Tokens: [`../../brand-systems/agentyx-brand-system/colors_and_type.css`](../../brand-systems/agentyx-brand-system/colors_and_type.css)
- Guidelines: [`../../brand-systems/agentyx-brand-system/agentyx-brand-guidelines.md`](../../brand-systems/agentyx-brand-system/agentyx-brand-guidelines.md)
- Icons: [`../../brand-systems/agentyx-brand-system/icons.svg`](../../brand-systems/agentyx-brand-system/icons.svg) + `assets/icons/process/`
- Lev lockup: [`../../lev-brand-systems/agentyx-brand-system/colors_and_type.css`](../../lev-brand-systems/agentyx-brand-system/colors_and_type.css)

## Colors (dark canvas)

- **Canvas:** `--ax-bg` `#070b13`
- **Elevated:** `--ax-bg-elevated` `#0c1220`
- **Surface:** `--ax-surface` `#111827`
- **Text primary:** `--ax-fg` `#f8fafc`
- **Text muted:** `--ax-fg-muted` `#94a3b8`
- **Brand blue:** `--ax-brand` `#2563eb`
- **Cyan accent:** `--ax-cyan` `#22d3ee`
- **Hero radial:** `--ax-hero-radial`

## Light mockups (`.ax-light`)

Dashboard panels, checklists y cards de producto usan scope `.ax-light` sobre fondo oscuro.

## Typography (video scale)

- **Hero:** Plus Jakarta Sans 72–96px
- **Section:** 48–64px
- **Body:** Inter 22–28px
- **Eyebrow / KPI:** JetBrains Mono 14–18px, letter-spacing 0.14em

Fonts locales: `assets/fonts/` (copiados de brand-system).

## Components

- Split contrast (Asistencia IA vs Ejecución IA)
- Integration hub + SVG path draw
- Process pipeline (4 steps)
- Before/After compact
- KPI row (24/7, Minutos, -70%)
- Brand close (logo + tagline)
- Avatar PiP (320×320, beats 1 y 5) — opcional vía `audio/avatar.mp4`

## Motion

- Entradas: `power3.out`, `expo.out`
- Drift: `sine.inOut`
- Paths: stroke-dashoffset draw
- Sin bounce excesivo, sin neon

## Do's

- Importar tokens CSS, no hardcodear paleta vieja
- Logo oficial en beats 1 y 5
- Iconos oficiales Agentyx

## Don'ts

- Tema claro `#f7f9fc` del promo viejo
- Lucide / iconos genéricos
- `@font-face` duplicados desde capture
