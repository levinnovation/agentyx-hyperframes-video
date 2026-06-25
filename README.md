# Agentyx HyperFrames Video

Reusable HyperFrames video production base for Agentyx by Lev Innovation.

This repository contains the first Agentyx product promo as a working example and a practical production system for creating future videos with the same brand language, workflow, and quality bar.

## What This Repo Is

- A reference HyperFrames project for the 20-second Agentyx product promo.
- A lightweight design system for Agentyx motion graphics.
- A repeatable workflow for turning websites, product screens, scripts, and campaigns into videos.
- A starting point for team members who need to create, modify, or extend Agentyx videos.

## Current Example

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
├── assets/
└── compositions/
```

Preview the current promo:

```bash
npm run preview:agentyx
```

Then open:

```text
http://localhost:3017/#project/agentyx-product-promo
```

## Quick Start

Requirements:

- Node.js 22+
- HyperFrames through `npx`
- Chrome/Chromium available to HyperFrames
- FFmpeg only when rendering final MP4 exports

Install nothing globally:

```bash
npm run check:agentyx
npm run preview:agentyx
```

Render only after creative approval:

```bash
npm run render:agentyx
```

## Production Principles

- Website capture is source material, not the final creative.
- `DESIGN.md` defines brand truth: colors, typography, components, and anti-patterns.
- `SCRIPT.md` defines the story.
- `STORYBOARD.md` defines the motion design and scene logic.
- `index.html` orchestrates the final timeline.
- Every composition must pass lint and layout inspection.
- Preview first, render later.

## Docs

- [Video Workflow](docs/VIDEO_WORKFLOW.md)
- [Agentyx Motion Design System](docs/AGENTYX_MOTION_DESIGN_SYSTEM.md)
- [New Video Brief Template](docs/NEW_VIDEO_BRIEF_TEMPLATE.md)

## Repository Status

The first video is intentionally included as an editable reference project. Future videos should be added under `videos/<video-name>/` and follow the same artifact structure.
