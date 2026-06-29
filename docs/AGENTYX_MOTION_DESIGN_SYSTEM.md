# Agentyx Motion Design System

This document defines the visual and motion language for Agentyx **videos**. For presentation slides and pitch decks, use the Presentation Theme in [`brand-systems/agentyx-brand-system/colors_and_type.css`](../brand-systems/agentyx-brand-system/colors_and_type.css) (`.ax-presentation`) and [`brand-systems/agentyx-brand-system/presentation.css`](../brand-systems/agentyx-brand-system/presentation.css).

## Brand Feel

Agentyx should feel like an operational command center for AI employees:

- precise
- calm
- executive
- system-aware
- quietly futuristic
- measurable

Avoid generic AI visuals. The product is not magic dust. It is operational labor becoming structured, visible, and measurable.

## Core Palette

Videos use the **dark default** from `brand-systems/agentyx-brand-system/colors_and_type.css`:

- Canvas: `#070B13` (`--ax-bg`)
- Elevated surface: `#0C1220` (`--ax-bg-elevated`)
- Card surface: `#111827` (`--ax-surface`)
- Primary text: `#F8FAFC` (`--ax-fg`)
- Muted text: `#94A3B8` (`--ax-fg-muted`)
- Primary blue: `#2563EB` (`--ax-brand`)
- Cyan accent: `#22D3EE` (`--ax-cyan`)

Product mockups inside dark scenes use the `.ax-light` scope (white dashboard panels on `#F8FAFC`).

Legacy light palette (`#F7F9FC` page base) applies to presentation slides (`.ax-presentation`), not new videos.

## Typography

- Display: Plus Jakarta Sans, weights 600-800
- Interface body: Inter, weights 400-700
- System labels: JetBrains Mono, weights 400-500

Video sizing:

- Hero headlines: 86-122px
- Section headlines: 58-84px
- Body/UI copy: 20-34px
- Mono labels: 14-20px

## Logo Usage

Use `assets/agentyx-logo.png` for the cube mark.

Preferred treatments:

- Light scenes: logo at 42-96px with subtle drop shadow.
- Dark scenes: logo at 90-110px with blue glow.
- Opening and closing beats must include the logo.

Do not recreate the logo with generic dots, squares, or CSS approximations.

## Components

Use these recurring video components:

- Hero statement with blue phrase emphasis.
- Browser/workspace frame.
- System cards: ERP, CRM, WhatsApp, Email.
- Central Agentyx node.
- Cyan connection paths.
- Completion cards.
- Metric cards with tabular numbers.
- Dark command panel for proof/CTA moments.

## Motion Language

Good Agentyx motion feels like work being executed:

- paths draw between systems
- cards cascade into place
- task cards complete
- metrics count or scan
- product panels drift subtly
- CTA glows once, then holds

Preferred eases:

- `expo.out` for product reveals
- `power3.out` for card entrances
- `sine.inOut` for ambient drift
- `back.out(1.4)` only for small UI pops

Avoid:

- chaotic glitch effects
- overactive neon
- cartoon bounce
- slow generic fades with no operational meaning
- stock footage as filler

## Quality Bar

Every finished video should pass:

- `npx hyperframes lint`
- `npx hyperframes inspect --samples 15`
- visual review of `snapshots/contact-sheet.jpg`

`validate` may report contrast warnings for hidden sub-composition text. Treat actual snapshots as the final visual truth, but fix any warning that appears in visible rendered frames.
