# Agentyx Brand Guidelines & Design System

Official guidelines for creating consistent B2B marketing materials, videos, presentations, documents, and social media posts for **Agentyx** (by Lev Innovation).

---

## 1. Brand Feel & Personality

Agentyx is a light, precise operating system for AI employees. The branding avoids chaotic, over-neon, generic AI cliches. Instead, it maintains a technical, clean, and highly executive presentation.

*   **Precise & Technical**: High-contrast, clean alignments, and detailed system info.
*   **Calm & Executive**: Restrained color usage, generous white space, and low-drama presentation.
*   **System-Aware**: Visual structures that represent integrations (checklists, nodes, connectors).
*   **Measurable**: Prominent presentation of KPIs, metrics, and quantitative progress.

---

## 2. Design Tokens

The source of truth for these tokens is [colors_and_type.css](file:///Users/jaya/projects/agentyx-hyperframes-video/brand-system/colors_and_type.css).

### Colors (Dark Mode Default)
*   **Primary Canvas (`--ax-bg`)**: `#070b13` (Deep blue-black)
*   **Raised Canvas (`--ax-bg-elevated`)**: `#0c1220` (Darker navy for sections)
*   **Surfaces/Cards (`--ax-surface`)**: `#111827` (Card panels)
*   **Subhead Text (`--ax-fg-1`)**: `#e2e8f0` (High contrast text)
*   **Default Body Text (`--ax-fg-muted`)**: `#94a3b8` (Slate-400)
*   **Primary Brand Blue (`--ax-brand`)**: `#2563eb` (Main CTA, buttons)
*   **Active Cyan Accent (`--ax-cyan`)**: `#22d3ee` (Glows, connectors, focus rings)
*   **Success Green (`--ax-success`)**: `#22d3ee` (Completed states)

### Colors (Light Mode - Used inside Dashboard/App Mockups)
*   **Primary Canvas (`--ax-bg`)**: `#f8fafc` (Off-white slate)
*   **Surfaces/Cards (`--ax-surface`)**: `#ffffff` (White dashboard cards)
*   **Borders (`--ax-border`)**: `#e2e8f0` (Light gray borders)
*   **Text (`--ax-fg`)**: `#0f172a` (Slate-900)

### Typography
*   **Headings / Display**: `Plus Jakarta Sans` (Weights 600–800)
*   **Body / UI Text**: `Inter` (Weights 300–700)
*   **Eyebrows, Technical Codes, KPIs**: `JetBrains Mono` (Weights 400–500)

### Spacing & Radii
*   **Gaps**: `4px` · `8px` · `12px` · `16px` · `20px` · `24px` · `32px` · `48px` · `64px` · `96px`
*   **Default Button Radius (`--ax-radius-md`)**: `8px`
*   **Default Card Radius (`--ax-radius-lg`)**: `12px`
*   **Large Panels / CTA Card (`--ax-radius-2xl`)**: `24px`

---

## 3. Motion & Interaction Principles

When creating animated or interactive components (such as in videos, web slides, or HTML pages):

*   **Draw Connections**: Animate paths drawing between system nodes (e.g. SVG path stroke animations).
*   **Quiet Entrances**: Avoid bouncy or rubber-band animations. Use `power3.out` or `expo.out` for crisp reveals.
*   **Ambient Drift**: Slow, subtle linear translations (e.g. `sine.inOut`) for screenshots or background fields.
*   **Interactive Glows**: Limit glows to active states, primary CTA buttons, and status indicators.

---

## 4. Multi-Format Guidelines

### Video Graphics (`/videos`)
*   Maintain a 1920x1080 resolution.
*   Must use the official logo `agentyx-logo.png` in the opening (Beat 1) and closing (Beat 5) scenes.
*   Dashboard mockups should use light-themed HTML scopes (`.ax-light`) to mimic the actual Agentyx product interface.

### Presentations & Slides (`/presentations`)
*   Standard 16:9 ratio using the **Presentation Theme** (`.ax-presentation`) — light blue Agentyx style from the official pitch deck.
*   Import [`presentation.css`](presentation.css) and optionally [`lev-brand-system/colors_and_type.css`](../lev-brand-system/colors_and_type.css) for Lev Innovation lockups.
*   Use radial gradients (`rgba(37,99,235,0.12)`) centered on title slides.
*   Integrations should use official line-art icons from [`assets/icons/`](assets/icons/) — not generic Lucide icons.
*   For parent company branding, use `.lev-lockup` from Lev Innovation design system.

### Icon Library

Official icons live in `brand-systems/agentyx-brand-system/assets/icons/` and the sprite sheet [`icons.svg`](icons.svg).

| Category | Icons | Usage |
|----------|-------|-------|
| Integration | CRM, Email, ERP, Chat | System chips, hub diagrams |
| Process | Cube iso, Engine, Trigger, Brain, Target | Workflow steps, execution flow |
| UI | Check, X, Shield, Finance, etc. | Lists, badges, row cards |

**Rules:**
- Line icons: stroke `#0F172A`, weight 1.75, rounded caps — on light presentation backgrounds
- 3D cubes: use `--ax-cube-top/front/side` tokens — only for process/engine slots
- Do not mix Lucide generic icons in Agentyx presentation decks
- Reference via sprite: `<svg class="ax-icon"><use href="../../brand-systems/agentyx-brand-system/icons.svg#ax-crm"/></svg>`

---

## 5. Presentation Theme (`.ax-presentation`)

For B2B slides and pitch decks, wrap content in `.ax-presentation` scope. This applies light blue tokens without affecting the dark default used by videos.

### Colors (Presentation Theme)
*   **Canvas (`--ax-bg`)**: `#F4F6FA`
*   **Cards (`--ax-surface`)**: `#FFFFFF`
*   **Inverted panels (`--ax-surface-inverted`)**: `#0F172A`
*   **Headline highlight (`--ax-brand-highlight`)**: `#2563EB`
*   **Photo overlay (`--ax-photo-overlay`)**: `rgba(15, 23, 42, 0.72)`

### Components
See [`presentation.css`](presentation.css): `.ax-slide-cover`, `.ax-card-light`, `.ax-process-cubes`, `.ax-integration-hub`, `.ax-split-contrast`, `.ax-footer-statement`, etc.

### Lev Innovation Co-branding
When slides need "by Lev innovation", import Lev design system and use `.lev-lockup`. See [`lev-brand-system/lev-brand-guidelines.md`](../lev-brand-system/lev-brand-guidelines.md).

---

## 6. Dual Brand Architecture

| Brand | Design System | Primary use |
|-------|---------------|-------------|
| **Agentyx** | `brand-systems/agentyx-brand-system/` | Product, slides, videos, banners |
| **Lev Innovation** | `brand-systems/lev-brand-system/` | Parent company lockup, black panels, corporate |

Videos use Agentyx **dark** theme (`:root`). Presentations use Agentyx **presentation** theme (`.ax-presentation`).

### Documents & Reports (`/documents`)
*   Designed primarily for PDF generation or printing (A4 or Letter size).
*   Use light theme styles as default for high-contrast reading.
*   Keep page numbers, headers, and footers aligned to a strict layout grid.

### Social Media & Banners (`/posts`)
*   Focus on large, legible display fonts (Plus Jakarta Sans) combined with high-impact key phrases.
*   Surrounds text with subtle cyan curves or grids to anchor the technical feeling.
