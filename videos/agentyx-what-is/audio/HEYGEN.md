# HeyGen avatar integration

No HeyGen API key was available in this environment. A **placeholder** `avatar.mp4` (dark panel, 22s) satisfies the HyperFrames composition slot.

## Replace with your HeyGen export

1. Open [HeyGen](https://app.heygen.com) → create video with the script from `../narration.txt`
2. Select your avatar + Spanish voice
3. Export MP4 → save as `avatar.mp4` in this folder
4. Optional: mute `../narration.wav` in `index.html` and set avatar `data-volume="1"` if using HeyGen audio only
5. Re-render: `npm run render:what-is`

PiP appears bottom-right during beats 1 (0–4s) and 5 (18.2–21.6s).
