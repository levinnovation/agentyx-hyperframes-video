# Storyboard

**Format:** 1920x1080 landscape  
**Audio:** Spanish TTS voiceover + restrained electronic underscore if available  
**VO direction:** confident LATAM B2B operator, concise and calm, with visible pauses after the hook and CTA  
**Style basis:** DESIGN.md, captured Agentyx screenshots, light operating-system UI, blue/cyan automation signals

## Asset Audit

| Asset | Type | Assign to Beat | Role |
| --- | --- | --- | --- |
| `capture/screenshots/scroll-000.png` | Screenshot | Beat 1 | Hero brand and opening statement reference |
| `capture/screenshots/scroll-018.png` | Screenshot | Beat 2 | Coordinated team section reference |
| `capture/screenshots/scroll-027.png` | Screenshot | Beat 3 | Product workspace screenshot and lead workflow |
| `capture/screenshots/scroll-036.png` | Screenshot | Beat 3 | Wider dashboard crop for parallax |
| `capture/screenshots/scroll-098.png` | Screenshot | Beat 5 | Dark platform/CTA contrast reference |

## Beat 1 - Hook (0.00-4.00s)

**VO:** "Tu próxima contratación no será una persona. Será un AI Agent."

**Concept:** The website hero is rebuilt as a sharper video opener. The sentence lands in two waves, with "AI Agent" becoming the visual switch that wakes the operating grid.

**Visual:** Pale blue canvas, centered Agentyx brand row, giant kinetic type, a faint screenshot ghost behind it, and three small KPI pills sliding up from the bottom.

**Animation:** Brand DOTS assemble, first sentence rises in, "AI Agent" expands in blue, KPI pills count/glow.

**Transition:** Smooth zoom through into scattered business systems.

## Beat 2 - Problem (4.00-7.80s)

**VO:** "Agentyx despliega empleados de IA que trabajan dentro de tus sistemas: ERP, CRM, WhatsApp y email."

**Concept:** Manual operations fragment into separate systems. The frame becomes a map of disconnected work that Agentyx begins to connect.

**Visual:** Four large system cards orbit the center: ERP, CRM, WhatsApp, Email. Thin cyan paths draw between them while a central Agentyx node turns on.

**Animation:** Cards cascade in, connectors draw with SVG path animation, system chips pulse into alignment.

**Transition:** Cards compress into a browser workspace.

## Beat 3 - Solution (7.80-12.40s)

**VO:** "Atienden, validan, coordinan y entregan resultados en minutos, veinticuatro siete."

**Concept:** A real lead-to-quote workflow moves from message to completed result. It should feel like watching the work finish itself.

**Visual:** Large product workspace screenshot in a browser shell, animated chat response, checklist cards, and floating completed task cards.

**Animation:** Screenshot drifts, chat message types, checklist items turn green, activity cards float forward.

**Transition:** Completion cards sweep into metrics.

## Beat 4 - Proof (12.40-16.20s)

**VO:** "Menos carga operativa. Más foco para tu equipo humano."

**Concept:** The operational payoff becomes measurable. Big KPIs replace the dashboard.

**Visual:** Three metric monuments: `24/7`, `Minutos`, `70%`. Cyan and green traces show capacity, speed, and reduced processing time.

**Animation:** Counters animate up, lines scan across, success dots pulse, supporting copy reveals under each metric.

**Transition:** Gentle blur crossfade to CTA.

## Beat 5 - CTA (16.20-20.00s)

**VO:** "Agenda una demo con Agentyx."

**Concept:** End in a controlled, premium CTA. The interface disappears, leaving brand, outcome, and next action.

**Visual:** Agentyx brand lockup, dark command-panel accent at the bottom edge, blue button "Agendar demo", secondary line "Ver agentes en acción".

**Animation:** Logo assembles, CTA button glows once, final text holds for readability, then fades gently.

**Transition:** Final fade to deep navy.

## Production Architecture

```text
videos/agentyx-product-promo/
├── index.html
├── DESIGN.md
├── SCRIPT.md
├── STORYBOARD.md
├── narration.txt
├── narration.wav
├── transcript.json
├── capture/
└── compositions/
    ├── beat-1-hook.html
    ├── beat-2-systems.html
    ├── beat-3-workflow.html
    ├── beat-4-proof.html
    └── beat-5-cta.html
```
