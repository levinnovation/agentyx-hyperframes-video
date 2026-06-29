# Storyboard — agentyx-what-is

**Format:** 1920×1080 landscape  
**Duration:** 25s  
**Audio:** narration.wav (ElevenLabs / macOS TTS dev) + optional HeyGen avatar PiP  
**Style:** Dark brand-system, cyan connectors, `.ax-light` product panels

## Beat 1 — Posicionamiento (0–5s)

**VO:** "Agentyx no es un chatbot ni un copiloto."

**Visual:** Split contrast full frame. Left: "Asistencia IA" dimmed (chat bubble, stops at conversation). Right: "Ejecución IA" lit (engine icon, completes workflow). Eyebrow mono. Avatar PiP bottom-right fades in.

**Animation:** Panels slide in from sides; right panel glows cyan; left desaturates.

**Transition:** Right panel expands, crossfade to hub.

## Beat 2 — Qué es (5–10s)

**VO:** "Son agentes de IA que ejecutan trabajo operativo real dentro de tu negocio."

**Visual:** Integration hub on dark canvas. Central Agentyx node. ERP, CRM, WhatsApp, Email cards at corners. Cyan paths draw to center.

**Animation:** Cards cascade; node scales in; paths stroke-draw; chips pulse.

**Transition:** Zoom into center node → pipeline.

## Beat 3 — Cómo funciona (10–17s)

**VO:** "Reciben contexto, deciden qué hacer, usan tus herramientas y completan el flujo."

**Visual:** Horizontal pipeline: Trigger → Context → Execute → Outcome with official icons. Below: `.ax-light` checklist panel with items checking off green.

**Animation:** Steps reveal left-to-right; arrows draw; checklist items complete sequentially.

**Transition:** Checklist morphs to metrics.

## Beat 4 — Valor (17–22s)

**VO:** "Menos tareas manuales. Ejecución continua, veinticuatro siete."

**Visual:** Compact before/after row + three KPI monuments: 24/7, Minutos, -70% carga operativa.

**Animation:** Before fades, after brightens; counters animate; scan lines on KPIs.

**Transition:** Blur crossfade to brand close.

## Beat 5 — Cierre marca (22–25s)

**VO:** "Agentyx. Sistemas de IA para operaciones."

**Visual:** Centered logo + wordmark. Tagline below. Subtle cyan glow once. Lev lockup small. Avatar PiP returns briefly.

**Animation:** Logo assembles; glow pulse; gentle fade hold.

**Transition:** Fade to black.

## Production architecture

```text
videos/agentyx-what-is/
├── index.html
├── compositions/
│   ├── beat-1-positioning.html
│   ├── beat-2-systems.html
│   ├── beat-3-execution-flow.html
│   ├── beat-4-value.html
│   └── beat-5-brand-close.html
├── audio/narration.wav
└── audio/avatar.mp4 (optional HeyGen)
```
