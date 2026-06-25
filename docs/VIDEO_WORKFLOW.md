# Video Workflow

Use this workflow for every Agentyx HyperFrames video.

## 1. Start With Intent

Define:

- Audience
- Distribution channel
- Duration
- CTA
- One message the viewer should remember

Keep each video focused on one idea. If the request has multiple messages, split it into multiple videos.

## 2. Capture Source Material

For website-based videos:

```bash
npx hyperframes capture <url> -o videos/<video-name>/capture
```

Read the generated files:

- `capture/extracted/tokens.json`
- `capture/extracted/visible-text.txt`
- `capture/extracted/asset-descriptions.md`
- `capture/screenshots/contact-sheet-1.jpg`
- Scroll screenshots for the key product sections

## 3. Create The Four Core Artifacts

Every video needs:

- `DESIGN.md` - brand and visual constraints
- `SCRIPT.md` - narration and story arc
- `STORYBOARD.md` - beat-by-beat motion direction
- `index.html` plus `compositions/*.html` - HyperFrames implementation

The example video in `videos/agentyx-product-promo/` is the reference structure.

## 4. Build With HyperFrames Rules

Composition rules:

- Use local captured assets by path.
- Register every GSAP timeline in `window.__timelines`.
- Keep timelines deterministic.
- Avoid async timeline construction.
- Use local `@font-face` declarations.
- Use root-relative asset paths from sub-compositions, such as `capture/...` or `assets/...`.
- Every image needs motion treatment: drift, scale, parallax, shine, or reveal.

## 5. Quality Gate

Run:

```bash
npm run check:agentyx
```

For a new video, adapt the command to the new project folder:

```bash
cd videos/<video-name>
npx hyperframes lint
npx hyperframes validate
npx hyperframes inspect --samples 15
npx hyperframes snapshot . --at <beat-midpoints>
```

Open `snapshots/contact-sheet.jpg` and inspect:

- Is every frame visible?
- Is the hierarchy clear?
- Is the text readable?
- Are product visuals on brand?
- Does the animation imply real operational motion?

## 6. Preview And Iterate

```bash
cd videos/<video-name>
npx hyperframes preview --port 3017
```

Deliver the Studio URL first. Render MP4 only after approval.

## 7. Render

```bash
cd videos/<video-name>
npx hyperframes render --output renders/<video-name>.mp4
```

Do not commit large renders unless the team intentionally wants the final asset versioned.
