# Handoff: Agentyx Marketing Home

> Pacquete de handoff para implementar la home marketing de **Agentyx** (by Lev Innovation) en producción.

---

## Overview

Este paquete contiene el diseño completo de la **landing principal** de [agentyx.app](https://www.agentyx.app) — una plataforma B2B LATAM que despliega "empleados de IA" (AI Agents) para automatizar operación corporativa.

**Lo que se entrega:**
- Una **home marketing** de una sola página, dark-first, con 5 secciones (Hero, Why/Why-Now, Agents grid, Governance, Final CTA).
- El **sistema de design tokens** completo (colors, type, spacing, radii, shadows, motion) que respalda esta y futuras pantallas.
- **3 fuentes web** (Plus Jakarta Sans, Inter, JetBrains Mono) y el logo oficial.

**Cuándo es apropiado:**
- Implementar el sitio marketing en Next.js/React, Astro, Remix, etc.
- Extender el sistema a páginas internas (pricing, casos, doc del producto) — todos los tokens están listos.
- Servir como base para el producto interno ("Centro de control Agentyx") — los tokens incluyen variantes dashboard.

---

## About the Design Files

Los archivos en este bundle son **referencias de diseño creadas en HTML/React (Babel standalone)** — prototipos que muestran apariencia e interacción finales, **no código de producción para copiar literalmente**.

La tarea del developer es **recrear estos diseños HTML en el entorno del proyecto destino** usando sus patrones y librerías establecidos (Next.js + Tailwind, Astro + Vanilla CSS, etc.). Si el proyecto destino aún no existe, recomendamos **Next.js 14 + Tailwind CSS** porque el sitio original (agentyx.app) ya está construido así — los tokens en `colors_and_type.css` mapean 1:1 a clases Tailwind estándar (`bg-slate-900`, `text-blue-500`, etc.) más algunos custom (`bg-agentyx-accent`).

**Específicamente:**
- Los `.jsx` aquí cargan vía `<script type="text/babel">` para preview rápido — en producción usar JSX compilado por Vite/Next.js sin Babel runtime.
- Estilos están en `style={{...}}` inline para portabilidad del prototipo — en producción migrar a Tailwind utility classes o CSS modules.
- Los SVGs de iconos están inline para portabilidad — en producción usar `lucide-react` (`import { ArrowRight, Check, Shield } from 'lucide-react'`).
- El SVG decorativo del hero (curvas cyan) está hard-coded — en producción animarlo con `stroke-dashoffset` (ver sección Interactions).

---

## Fidelity

**Alta fidelidad (hifi).** Los mockups son pixel-perfect en cuanto a colores, tipografía, espaciado y composición — todos los tokens fueron extraídos directamente del build Next.js de producción del sitio en vivo (`agentyx.app`).

**Limitaciones de fidelidad:**
- **Animaciones de scroll** (intersection-observer fade-ups, parallax sutil del campo de curvas SVG): omitidas en el prototipo. Documentadas abajo en "Interactions" para que el developer las implemente con `framer-motion` o IntersectionObserver nativo.
- **Responsive breakpoints**: el prototipo está optimizado para desktop 1280px. El sitio original es responsive — usa breakpoints Tailwind estándar (`sm: 640, md: 768, lg: 1024, xl: 1280`). El nav móvil con drawer hamburger no está mockeado.
- **Theme toggle (Sun/Moon)**: el sitio original soporta light mode persistido en `localStorage.agentyx-theme`. El prototipo solo muestra dark.

---

## Screens / Views

### Screen 1 — Marketing Home (única vista)

**Purpose:** convertir visitantes B2B (CFO, COO, líderes de operaciones) a agendar una demo o probar el demo técnico. Comunicar el posicionamiento "AI Agents, no chatbots" y la propuesta de valor operativa.

**Global layout:**
- Container max-width: `1400px`, padding horizontal `32px` (2rem).
- Background base: `#070b13` (cuasi-negro azulado, dark-first).
- Cada sección: `padding: 96px 32px` (vertical generoso).
- Border entre secciones: `1px solid rgba(255,255,255,0.04)` (apenas perceptible).

---

#### 1.1 — Sticky Nav (component: `Nav.jsx`)

**Layout:** flex space-between, sticky top, padding `16px 32px`. Backdrop blur 12px sobre `rgba(7,11,19,0.72)`. Border-bottom `1px solid rgba(255,255,255,0.06)`.

**Contenido (izq → der):**
- **Logo lockup**: imagen `agentyx-logo.png` 28×28px + wordmark "Agentyx" (Plus Jakarta Sans, 20px, weight 700, color `#f8fafc`, letter-spacing `-0.01em`, line-height 1) + tagline "by Lev Innovation" (Inter, 11px, color `#64748b`, margin-top 2px).
- **Nav links** (centro): gap 28px. Items: "Ver agentes en acción" → `#demo`, "Casos" → `#cases`, "Agentyx" → `#platform`, "Cómo trabajamos" → `#method`. Font: Inter 14px weight 500 color `#94a3b8`. Hover: color `#3b82f6` (transition-color 200ms).
- **CTA "Agendar demo"**: pill ghost — background `rgba(37,99,235,0.10)`, border `1px solid rgba(96,165,250,0.30)`, color `#bfdbfe`, padding `10px 18px`, radius 8px, font Inter 13px weight 500. Hover: background → `rgba(37,99,235,0.20)`.
- **Toggle ES/EN**: capsule pill — outer container `border-radius: 9999px`, border `1px solid rgba(255,255,255,0.15)`, background `rgba(255,255,255,0.04)`, padding 2px. Cada botón: padding `4px 10px`, font Inter 11px UPPERCASE. Activo: bg `#2563eb`, color `#fff`. Inactivo: bg transparent, color `#94a3b8`.

---

#### 1.2 — Hero (component: `Hero.jsx`)

**Layout:** sección position-relative, min-height `calc(100vh - 76px)`, padding `80px 32px 100px`, overflow hidden, text-align center. Content stack vertical, max-width 1100px centrado.

**Layers (z-order bottom→top):**
1. Background base `#070b13`.
2. **Radial gradient layer** (absolute inset-0, pointer-events-none):
   ```css
   background: radial-gradient(circle at 50% 42%, rgba(37,99,235,0.18), transparent 45%),
               linear-gradient(to bottom, rgba(7,11,19,0.05), #070b13 96%);
   ```
3. **Cyan stroke field** (absolute inset -12%, opacity 0.9): SVG viewBox `0 0 696 316`, preserveAspectRatio `xMidYMid slice`. 18 paths de curvas Bezier en color `#67e8f9` con `stroke-width` ascendente (0.5 → 1.18), `stroke-opacity` ascendente (0.06 → 0.27), `stroke-dasharray: 2 6`. **En producción animar `stroke-dashoffset` de `1000` a `0` durante 2.5s al mount** para efecto "scan".
4. **Content layer** (position-relative, text-align center, padding-top 60px).

**Content elements (top→bottom):**

| Elemento | Estilo |
|---|---|
| **Eyebrow** | "EMPLEADOS DE IA · OPERANDO EN TUS SISTEMAS" — JetBrains Mono, 11px, weight 500, UPPERCASE, letter-spacing `0.18em`, color `#67e8f9`, margin-bottom 24px. |
| **H1** | "Tu próxima contratación / no será una persona. / Será un `<span>AI Agent</span>`." — Plus Jakarta Sans, `clamp(40px, 6.5vw, 76px)`, weight 700, line-height 1.05, letter-spacing `-0.025em`, color `#f8fafc`, text-wrap balance. El span "AI Agent" usa color `#60a5fa`. |
| **Subhead** | "Agentyx despliega empleados de IA que trabajan dentro de tus sistemas, ejecutan procesos completos y convierten carga operativa en resultados medibles." — Inter, 18px, line-height 1.55, color `#cbd5e1`, max-width 720px, margin `28px auto 0`, text-wrap pretty. |
| **CTA row** | Display flex, gap 12px, justify-content center, margin-top 36px. Dos botones (ver abajo). |
| **Stat tiles** | Grid 3 columnas, gap 16px, max-width 800px, margin-top 72px. Cada tile: bg `rgba(17,24,39,0.6)`, border `1px solid rgba(255,255,255,0.08)`, radius 12px, padding 20px, backdrop-blur 10px. Contenido: número grande (Plus Jakarta Sans 36px bold, letter-spacing `-0.02em`, color por tile) + eyebrow mono uppercase (10px, color `#64748b`, margin-top 12px) + descripción (Inter 12px, color `#94a3b8`). |

**Stat tiles content:**
1. "Minutos" (color `#60a5fa`) — `PARA EJECUTAR PROCESOS` — "vs. horas humanas"
2. "24/7" (color `#67e8f9`) — `EJECUCIÓN AUTÓNOMA` — "Sin ampliar headcount"
3. "+ Foco" (color `#fbbf24`) — `PARA EL EQUIPO HUMANO` — "en lo estratégico"

**CTAs hero:**
- **Primary**: "Ver agentes en acción → " — bg `#2563eb`, color `#fff`, padding `14px 24px`, radius 10px, font Inter 15px weight 500, shadow `0 4px 24px -4px rgba(37,99,235,0.45)`, gap 8px con icon `ArrowRight` (16px stroke 2 round). Hover: bg `#1d4ed8`.
- **Secondary**: "Probar demo técnica" — bg transparent, border `1px solid rgba(255,255,255,0.15)`, color `#e2e8f0`, mismas dimensiones. Hover: border-color `rgba(255,255,255,0.30)`, bg `rgba(255,255,255,0.03)`.

---

#### 1.3 — Why / Integration Strip (sección `#why`)

**Layout:** `padding: 96px 32px`, background `#070b13`.

**Components:**
- **SectionHeader** (component reusable):
  - Eyebrow: "DÓNDE ESTÁ EL TIEMPO DE TU EQUIPO" (JetBrains Mono 11px UPPERCASE letter-spacing `0.18em` color `#64748b` margin-bottom 18px)
  - Title: "Deja la carpintería operativa en manos de la IA." (Plus Jakarta Sans `clamp(28px, 4vw, 44px)` weight 700 line-height 1.1 letter-spacing `-0.02em` color `#f8fafc` text-wrap balance)
  - Subhead: "Cruzar datos, perseguir aprobaciones y copiar entre plataformas. Agentyx absorbe ese trabajo mecánico 24/7. Tu equipo vuelve a lo estratégico." (Inter 17px line-height 1.55 color `#94a3b8` margin-top 18px max-width 760px center)
  - Margin bottom de todo el header: 56px.

- **IntegrationStrip**: flex wrap, gap 10px, justify-content center, max-width 900px center. 8 chips: ERP, CRM, WhatsApp, Email, Sheets, Portales, Bases de datos, Documentos.
  - Cada chip: padding `8px 16px`, radius 8px, bg `rgba(255,255,255,0.04)`, border `1px solid rgba(255,255,255,0.10)`, JetBrains Mono 12px color `#cbd5e1`. Prefijo dot 6×6px circular bg `#22d3ee` con `box-shadow: 0 0 8px #22d3ee` (efecto glow).

---

#### 1.4 — Agents Grid (sección `#cases`)

**Layout:** padding `96px 32px`, background `#070b13`, border-top `1px solid rgba(255,255,255,0.04)`.

**SectionHeader:**
- Eyebrow: "EMPLEADOS VIRTUALES EN PRODUCCIÓN"
- Title: "Agentes reales, ejecutando trabajo real."
- Subhead: "Ejemplos de agentes autónomos desplegados para absorber operación corporativa en LATAM."

**AgentsGrid:** CSS Grid 2 columnas (responsive: 1 col en `<md`), gap 20px, max-width 1100px center.

**AgentCard** (4 cards):
- Container: bg `#111827`, border `1px solid rgba(255,255,255,0.10)`, radius 14px, padding 26px, shadow `0 1px 0 rgba(0,0,0,0.30), 0 12px 28px -20px rgba(0,0,0,0.42)`.
- Eyebrow: "AGENTE" — JetBrains Mono 10px UPPERCASE letter-spacing `0.14em` color `#64748b`.
- Nombre (H3): Plus Jakarta Sans 20px weight 700 line-height 1.25 color `#f8fafc` margin `12px 0 6px` text-wrap balance.
- Bullets `<ul>`: list-style none, padding 0, margin-top 18px, display flex column gap 10px. Cada `<li>`: Inter 14px color `#cbd5e1` line-height 1.5, display flex gap 12px. Prefijo: SVG Check 16×16 stroke `#60a5fa` stroke-width 2.5 round, margin-top 3px.
- Footer: margin-top 22px, padding-top 16px, border-top `1px solid rgba(255,255,255,0.08)`. Contenido: badge vertical en JetBrains Mono 10px UPPERCASE letter-spacing `0.14em` color `#67e8f9`.

**4 agentes (contenido exacto):**

| Nombre (H3) | Vertical (footer) | Bullets |
|---|---|---|
| Gestor Autónomo de Pedidos y Delivery | Automotriz · Concesionarias | • Atiende llamadas operadas por IA de voz • Procesa órdenes directamente en el sistema • Coordina canal de delivery interno end-to-end • Recupera márgenes frente a apps de terceros |
| Coordinador Proactivo de Servicio al Cliente | Automotriz · Concesionarias | • Monitorea en tiempo real el estado de vehículos • Agenda citas de mantenimiento automáticamente • Envía alertas personalizadas de entregas |
| Auditor de Inventarios y Sincronización Contable | Finanzas · Cadena de Suministro | • Conecta ERP con software contable • Mantiene la información limpia y sincronizada • Analiza tendencias de venta de forma predictiva • Emite órdenes de recompra automáticas |
| Analista de Datos de Negocio e Insights | Operaciones Comerciales · BI | • Cruza bases de datos masivas para resúmenes • Genera insights financieros para decisiones • Gestiona campañas digitales midiendo ROI |

---

#### 1.5 — Governance (sección `#platform`)

**Layout:** padding `96px 32px`, background `#0c1220` (un poco más claro que `#070b13` para crear ritmo visual).

**SectionHeader:**
- Eyebrow: "CÓMO TRABAJA EL EQUIPO"
- Title: "No es un agente suelto. Es un equipo coordinado con jerarquía."
- Subhead: "Cuatro roles, permisos definidos y una ruta de escalamiento cuando la decisión es demasiado importante para automatizar."

**GovernanceList:** CSS Grid 2 columnas, gap 14px, max-width 800px center.

Cada item: display flex align-center, gap 14px, bg `rgba(17,24,39,0.6)`, border `1px solid rgba(255,255,255,0.08)`, radius 10px, padding `16px 20px`. Prefijo: SVG Shield 20×20 stroke `#60a5fa` stroke-width 2 round. Texto: Inter 14px color `#e2e8f0`.

**5 items:**
1. Permisos definidos por sistema
2. Bitácora completa de cada acción
3. Escalamiento humano en decisiones marcadas
4. Resultados medidos por proceso
5. Reversible: kill switch en cada agente

---

#### 1.6 — Final CTA (sección `#method`)

**Layout:** padding `96px 32px`, background `#070b13`. Inner: max-width 1100px center.

**FinalCTA** (un único bloque destacado):
- Container: max-width 1100px center, padding `72px 32px`, radius 24px, background `radial-gradient(circle at 50% 0%, rgba(37,99,235,0.20), transparent 60%), #0c1220`, border `1px solid rgba(96,165,250,0.20)`, text-align center, overflow hidden.
- Eyebrow: "EMPIEZA HOY" — JetBrains Mono 11px UPPERCASE letter-spacing `0.18em` color `#67e8f9` margin-bottom 18px.
- H2: "Integra AI Agents en tu infraestructura operativa." — Plus Jakarta Sans `clamp(28px, 4vw, 44px)` weight 700 line-height 1.1 letter-spacing `-0.02em` color `#f8fafc` text-wrap balance.
- Párrafo: "Deja atrás los reprocesos manuales. Agentes operando dentro de tus sistemas, 24/7, sin ampliar headcount." — Inter 17px line-height 1.55 color `#94a3b8` max-width 640px margin `20px auto 32px`.
- CTA solid azul (mismo estilo que Hero primary): "Evaluar Operación de Mi Empresa →".

---

#### 1.7 — Footer

**Layout:** padding `40px 32px`, border-top `1px solid rgba(255,255,255,0.06)`, display flex justify-between align-center, max-width 1400px center. Font: Inter 12px color `#64748b`.

- Izquierda: logo 22×22px + "Agentyx" (weight 600 color `#cbd5e1`) + "· by Lev Innovation".
- Derecha: "© 2026" + links "Privacidad" / "Términos" (color inherit, no underline, gap 24px).

---

## Interactions & Behavior

### Navigation
- Links de nav (`#demo`, `#cases`, `#platform`, `#method`) hacen **scroll smooth** a las anchors. Implementar con `html { scroll-behavior: smooth; }` o JS de scroll offset que respete la altura del sticky nav (~76px).
- Mobile (`<lg`): nav links se colapsan en menú hamburguesa. Implementar drawer slide-in desde la derecha con backdrop oscuro (`rgba(7,11,19,0.9)` + backdrop-blur).

### Hover states (todos con `transition: <prop> 200ms cubic-bezier(0.22, 1, 0.36, 1)`)
| Elemento | Default | Hover |
|---|---|---|
| Nav links | color `#94a3b8` | color `#3b82f6` |
| Nav CTA "Agendar demo" | bg `rgba(37,99,235,0.10)` | bg `rgba(37,99,235,0.20)` |
| Hero CTA primary | bg `#2563eb` | bg `#1d4ed8` |
| Hero CTA secondary | border `rgba(255,255,255,0.15)` | border `rgba(255,255,255,0.30)`, bg `rgba(255,255,255,0.03)` |
| AgentCard | shadow base | translateY(-2px), shadow más pronunciada |

### Focus states (accesibilidad)
- **Todos los focusables**: `outline: 2px solid #22d3ee; outline-offset: 4px;`
- Nunca quitar el outline. El cyan vibra contra el azul del brand.

### Press states
- **Sin shrink/scale**. Solo oscurecimiento (`bg: --brand-strong`). La marca evita "playfulness".

### Animations (on-scroll / on-mount)
1. **Hero cyan curves**: al mount, animar `stroke-dashoffset` de cada path de `1000` a `0` con stagger de 50ms entre paths, duración 2500ms, easing `cubic-bezier(0.22, 1, 0.36, 1)`.
2. **Section headers**: fade-up (opacity 0→1, translateY 20px→0) al entrar en viewport. Trigger con IntersectionObserver `threshold: 0.2`. Duración 600ms, easing `ease-out`.
3. **Agent cards**: stagger fade-up con delay incremental 100ms entre cards. Mismo easing.
4. **CTAs**: NO bounce, NO overshoot. Solo opacity/translateY.

### Theme toggle
- `localStorage.agentyx-theme` con valores `'dark'` | `'light'`. Si no existe, leer `prefers-color-scheme`. Por defecto: **dark**.
- Toggle aplica clase `.dark` al `<html>`. Tokens light viven en `:root`, tokens dark viven en `.dark`.

### Language toggle (ES/EN)
- El sitio original soporta toggle ES/EN. El prototipo solo provee versión ES. **En producción**, mantener estado en URL (`/en`, `/es`) o cookie, no en localStorage (para SEO).

### Loading / Empty / Error states
- **Loading**: la landing es estática, sin loading state esperado para datos del servidor. Si las "cases" o "agents" fueran fetched, mostrar skeleton cards con bg `#1f2937` y shimmer animado.
- **Form errors** (en formulario de demo si se agrega): borde `#ef4444`, mensaje debajo en Inter 12px color `#fca5a5`.

### Responsive behavior
- **Desktop** (`>=1280`): layout completo como descrito.
- **Tablet** (`768-1279`): agents grid → 2 col se mantiene, governance → 2 col se mantiene, nav links visibles, integraciones chips ajustan wrap.
- **Mobile** (`<768`): agents/governance → 1 col, nav links → drawer, hero H1 → `clamp(32px, 9vw, 48px)`, padding sections → `64px 20px`, stat tiles → 1 col stack.

---

## State Management

La landing es 90% estática. Estado mínimo necesario:

| State variable | Tipo | Uso | Donde vive |
|---|---|---|---|
| `lang` | `'es' \| 'en'` | Toggle idioma del nav | URL segment o cookie |
| `theme` | `'dark' \| 'light'` | Theme toggle Sun/Moon | `localStorage.agentyx-theme` + `<html class>` |
| `mobileNavOpen` | `boolean` | Drawer hamburger en mobile | Component-local (useState) |
| `scrolled` | `boolean` | Si el nav debe ganar más opacidad de bg | Component-local + scroll listener |

**Sin data fetching** en esta vista. Si se integra el formulario de "Agendar demo", usar fetch directo a Calendly API o redirect a `https://calendly.com/levinnovation` (que es lo que hace el sitio original).

---

## Design Tokens

**Source of truth:** `colors_and_type.css` (incluido en este bundle).

### Colors

#### Surfaces (dark)
| Token | Hex | Uso |
|---|---|---|
| `--ax-bg` | `#070b13` | Canvas hero, secciones principales |
| `--ax-bg-elevated` | `#0c1220` | Subsecciones (ej. governance) |
| `--ax-surface` | `#111827` | Cards, popovers |
| `--ax-surface-2` | `#1f2937` | Muted, inputs |
| `--ax-border` | `rgba(255,255,255,0.10)` | Border default |
| `--ax-border-strong` | `rgba(255,255,255,0.18)` | Border énfasis |

#### Brand (azul)
| Token | Hex | Uso |
|---|---|---|
| `--ax-brand` | `#2563eb` | CTAs primarios, brand accent |
| `--ax-brand-strong` | `#1d4ed8` | Hover/press del primary |
| `--ax-brand-soft` | `#3b82f6` | Links, hover nav |
| `--ax-brand-tint` | `rgba(37,99,235,0.10)` | Ghost buttons bg |

#### Accent
| Token | Hex | Uso |
|---|---|---|
| `--ax-cyan` | `#22d3ee` | Focus outline, líneas hero, dots glow |
| `--ax-cyan-soft` | `#67e8f9` | Eyebrows highlight, accents en CTA destacados |
| `--ax-indigo` | `#818cf8` | Dashboard primary (no en marketing) |

#### Foreground (text on dark)
| Token | Hex | Uso |
|---|---|---|
| `--ax-fg` | `#f8fafc` | Headings, H1-H3 |
| `--ax-fg-1` | `#e2e8f0` | Subheads, énfasis |
| `--ax-fg-2` | `#cbd5e1` | Body destacado |
| `--ax-fg-muted` | `#94a3b8` | Body default, nav links |
| `--ax-fg-subtle` | `#64748b` | Meta, eyebrows neutros, tagline |
| `--ax-fg-disabled` | `#475569` | Estados deshabilitados |

#### Semantic
| Token | Hex | Uso |
|---|---|---|
| `--ax-success` | `#22d3ee` | KPI positivo, "Activo" |
| `--ax-warning` | `#f59e0b` | Human-in-loop, warning |
| `--ax-danger` | `#ef4444` | Destructive, "Kill switch" |
| `--ax-neutral` | `#94a3b8` | KPI neutro, disabled |

#### Gradients
- **Hero radial:** `radial-gradient(circle at 50% 42%, rgba(37,99,235,0.16), transparent 45%), linear-gradient(to bottom, rgba(7,11,19,0.05), #070b13 96%)`
- **CTA radial:** `radial-gradient(circle at 50% 0%, rgba(37,99,235,0.20), transparent 60%), #0c1220`
- **Brand glow shadow:** `0 4px 24px -4px rgba(37,99,235,0.35)`

### Typography
| Variable | Font family | Pesos | Uso |
|---|---|---|---|
| `--ax-font-heading` | Plus Jakarta Sans | 400-800 | H1-H6, display |
| `--ax-font-body` | Inter | 300-700 | Body, párrafos, UI text |
| `--ax-font-mono` | JetBrains Mono | 400-500 | Eyebrows, KPIs, chips, código |

**Scale (px / weight / line-height / letter-spacing):**
| Token | Size | Weight | LH | Tracking | Uso |
|---|---|---|---|---|---|
| Display | 72 | 700 | 1.05 | -0.02em | Hero H1 max |
| H1 | 56 / clamp | 700 | 1.05 | -0.025em | Hero hi-impact |
| H2 | 40 | 700 | 1.1 | -0.02em | Section titles |
| H3 | 30 | 700 | 1.15 | -0.01em | Subsection |
| H4 | 24 | 600 | 1.2 | 0 | Card titles |
| H5 | 20 | 600 | 1.25 | 0 | Agent name |
| Body-lg | 17 | 400 | 1.55 | 0 | Subheads |
| Body | 15 | 400 | 1.55 | 0 | Default body |
| Body-sm | 13 | 400 | 1.55 | 0 | Small text |
| Meta | 12 | 400 | 1.55 | 0 | Captions |
| Eyebrow | 10-11 | 500 | normal | 0.14-0.18em | UPPERCASE mono |

### Spacing scale (px)
`4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 64 · 80 · 96`

**Standard use:**
- Card padding interno: 24-32px
- Section padding vertical: 80-120px (default 96)
- Gap entre stat tiles / agent cards: 16-20px
- Header → body gap: 18-28px

### Border radii (px)
| Token | Value | Uso |
|---|---|---|
| xs | 4 | Code inline, dots big |
| sm | 6 | Chips muted |
| **md** | **8** | **Botones, badges (default)** |
| **lg** | **12** | **Cards (default)** |
| xl | 16 | Heroes hijos |
| 2xl | 24 | Final CTA, modales |
| pill | 9999 | Toggles ES/EN, eyebrow pills |

### Shadows
- **Soft:** `0 1px 1px rgba(0,0,0,0.22), 0 10px 24px -18px rgba(0,0,0,0.46)` — listas, hover ligero.
- **Card:** `0 1px 0 rgba(0,0,0,0.30), 0 12px 28px -20px rgba(0,0,0,0.42)` — default elevation.
- **Brand glow:** `0 4px 24px -4px rgba(37,99,235,0.35)` — CTAs primary, hero buttons.
- **Sin inner shadows** en producción.

### Motion
| Token | Value | Uso |
|---|---|---|
| `--ax-ease-out` | `cubic-bezier(0.22, 1, 0.36, 1)` | Entrance, hovers |
| `--ax-ease-in-out` | `cubic-bezier(0.65, 0, 0.35, 1)` | Theme switch, drawer |
| `--ax-dur-fast` | `150ms` | Hover color |
| `--ax-dur-base` | `300ms` | Mounting, default |
| `--ax-dur-slow` | `500ms` | Section reveals, hero animation |

**Regla:** Solo fades + translateY pequeños. NO bounce, NO overshoot, NO scale > 1.05.

---

## Assets

| Asset | Path en bundle | Origen | Nota |
|---|---|---|---|
| `agentyx-logo.png` | `assets/agentyx-logo.png` | Subido por el usuario / build prod | Logo oficial, 7 cubos hexagonales azules, PNG transparente 120KB. Min size 24px. |
| Plus Jakarta Sans woff2 | `fonts/PlusJakartaSans.woff2` | `agentyx.app/_next/static/media/` | Latin-subset (`.p.woff2`). 27KB. Para multi-idioma completo descargar variantes cirílico/vietnamita/griego. |
| Inter woff2 | `fonts/Inter.woff2` | `agentyx.app/_next/static/media/` | Latin-subset. 48KB. |
| JetBrains Mono woff2 | `fonts/Mono.woff2` | `agentyx.app/_next/static/media/` | Latin-subset. 31KB. |

**Iconos** — usar `lucide-react` (`npm i lucide-react`). Iconos canon usados:
`Menu`, `Sun`, `Moon`, `ArrowRight`, `Check`, `Zap`, `Shield`, `Activity`, `Database`, `MessageSquare`, `BarChart3`, `Phone`, `FileText`, `Layers`, `ExternalLink`, `Sparkles`, `Settings`.

Stroke-width: `2`. Stroke-linecap/linejoin: `round`. Color: `currentColor`.

**Sin emoji. Sin unicode decorativos.** Para flechas usar `ArrowRight` icon, no `→`.

---

## Files

Esta carpeta `design_handoff_agentyx_marketing/` contiene:

```
design_handoff_agentyx_marketing/
├── README.md                          ← este documento
├── colors_and_type.css                ← TODOS los tokens (copy-paste a tu proyecto)
├── assets/
│   └── agentyx-logo.png               ← logo oficial
├── fonts/
│   ├── PlusJakartaSans.woff2
│   ├── Inter.woff2
│   └── Mono.woff2                     ← JetBrains Mono
└── reference/
    ├── index.html                     ← prototipo navegable de la home
    ├── Nav.jsx                        ← componente: top nav + logo + toggle ES/EN + CTA
    ├── Hero.jsx                       ← componente: hero con radial + svg field
    └── Section.jsx                    ← componentes: SectionHeader, AgentCard, AgentsGrid,
                                         IntegrationStrip, GovernanceList, FinalCTA, Footer
```

**Cómo abrir la referencia:** servir `reference/` con cualquier static server (`python -m http.server`, `npx serve`) y abrir `index.html`. Los `<script type="text/babel">` se transpilan en runtime — esto es para preview rápido únicamente, no para producción.

**Mapping recomendado a Tailwind** (si el proyecto destino usa Tailwind):
- Extender `tailwind.config.js` con los colores `ax-*` como aliases (`colors: { brand: { DEFAULT: '#2563eb', strong: '#1d4ed8', soft: '#3b82f6' }, surface: { DEFAULT: '#111827', muted: '#1f2937' } }`).
- Para los tokens existentes en Tailwind por defecto (`slate-*`, `blue-*`, `cyan-*`), usar directamente sin redefinir.
- Las font-families: `theme.fontFamily.heading = ['Plus Jakarta Sans', ...]` etc.

---

## Notas finales para el dev

1. **El sitio actual está en Next.js 14 + Tailwind CSS + lucide-react** (deducido del build). Si reproduces en ese stack tendrás camino más fácil.
2. **No inventes colores.** Si necesitas un valor no listado en tokens, deriva con `color-mix()` en CSS o consulta antes.
3. **Mantén el dark-first.** Light mode tiene tokens pero la home **siempre** carga en dark por defecto.
4. **Performance:** las 3 fuentes son ~106KB combinadas. Usa `font-display: swap` (ya está en `colors_and_type.css`) y precarga con `<link rel="preload" as="font">` en `<head>`.
5. **Accesibilidad:**
   - Contraste de `#94a3b8` sobre `#070b13` = **7.2:1** (AAA).
   - Contraste de `#64748b` sobre `#070b13` = **4.8:1** (AA para body, AAA para large text).
   - Focus visible cyan tiene contraste suficiente en ambos modos.
6. **SEO**: meta original es `<title>Agentyx — Empleados de IA para tu operación</title>` y `<meta name="description" content="Agentyx despliega empleados de IA que trabajan dentro de tus sistemas, ejecutan procesos completos y generan capacidad operativa medible.">`. Mantenerlas o evolucionarlas.

¿Dudas? El sistema de diseño completo vive en el proyecto Designer "Agentyx Design System" — ahí están todas las preview cards documentando atomicos.
