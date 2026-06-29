# Audio assets

## narration.wav

Primary voiceover track. Generated with macOS `say` (Paulina, 165 wpm) for timing lock.

**Replace with ElevenLabs** for production quality:
1. Paste `../narration.txt` into ElevenLabs (voz LATAM B2B, calmada)
2. Export WAV → `audio/narration.wav` and copy to `../narration.wav`
3. Re-run transcription → update `../transcript.json`
4. Adjust beat `data-start` / `data-duration` in `../index.html` to match new duration

## avatar.mp4 (HeyGen — optional)

1. Use the same script from `../narration.txt` in HeyGen with your avatar + voice ID
2. Export MP4 → `audio/avatar.mp4`
3. The composition uses avatar audio when present; mute `narration.wav` if duplicate

PiP appears in beats 1 and 5 (bottom-right, 320×320).
