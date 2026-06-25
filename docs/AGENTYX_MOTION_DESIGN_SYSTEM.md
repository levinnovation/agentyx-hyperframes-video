# Agentyx Motion Design System

This document defines the visual and motion language for Agentyx videos.

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

- Primary surface: `#F7F9FC`
- Raised surface: `#FFFFFF`
- Primary text: `#172033`
- Dark text: `#111827`
- Muted text: `#475569`
- Primary blue: `#2563EB`
- Strong blue: `#1D4ED8`
- Cyan accent: `#22D3EE`
- Success green: `#34D399`
- Border: `#D2DAE4`
- Dark command surface: `#070B13`

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
