# PDF Document & Report Template

This template provides a print-ready, double-page A4 document format styled with the **Agentyx Brand Design System** (configured to use the high-contrast light theme variant, `.ax-light`).

## Structure

*   `index.html`: Double page preview using CSS styling optimized for printing or PDF exports.
*   Inherits spacing and typographic styles from `../../brand-systems/agentyx-brand-system/colors_and_type.css`.

## How to Preview & Export

1. Start a local server at the workspace root:
   ```bash
   python -m http.server 8000
   ```
2. Open in your browser:
   `http://localhost:8000/documents/report-template/index.html`

### Exporting to PDF

*   **Via Browser**: Open the print menu in Chrome (`Cmd+P` or `Ctrl+P`), set Destination to **Save as PDF**, check **Background graphics**, uncheck **Headers and footers**, and click save.
*   **Via Puppeteer / CLI**: You can automate PDF generation using standard Node.js Puppeteer or Paged.js scripts targeting this HTML file.
