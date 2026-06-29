# Slide Deck Presentation Template

This template enables you to build high-performance slide deck presentations styled automatically with the **Agentyx Brand Design System**.

## Structure

*   `index.html`: Fully styled, vanilla responsive HTML slide layout.
*   Uses central variables in `../../brand-systems/agentyx-brand-system/colors_and_type.css`.
*   Includes slide viewport scaling JavaScript to support standard 16:9 displays.

## How to Run

1. Serve the workspace root using any HTTP server:
   ```bash
   python -m http.server 8000
   ```
2. Navigate to:
   `http://localhost:8000/presentations/pitch-deck-template/index.html`

## Customization

*   **Add Slides**: Simply insert another `<div class="slide" id="slide-N">` block inside the `<div class="deck-viewport">` container. Update the script variables if needed.
*   **Controls**: Use the bottom right buttons, `Spacebar`, or the `Left` and `Right` Arrow keys on your keyboard to navigate slides.
