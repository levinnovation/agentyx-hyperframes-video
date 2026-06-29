# Social Banner Graphics Template

This template provides a standard OpenGraph/LinkedIn post landscape template (1200x630px ratio) aligned with the **Agentyx Brand Design System**.

## Structure

*   `index.html`: Fully styled HTML viewport representing the social post layout.
*   Inherits colors, variables, typography, and styles from `../../brand-systems/agentyx-brand-system/colors_and_type.css`.

## How to Preview & Export

1. Start a local server at the workspace root:
   ```bash
   python -m http.server 8000
   ```
2. Open in your browser:
   `http://localhost:8000/posts/banner-template/index.html`

### Exporting to PNG/JPG

*   **Manual**: Open the banner template in the browser, press `Cmd+Shift+4` (macOS) to take a screenshot of the 1200x630 card container.
*   **Automated**: You can use Puppeteer or Playwright to capture a screenshot of the `.banner-viewport` DOM element:
    ```javascript
    const element = await page.$('.banner-viewport');
    await element.screenshot({ path: 'output-social-post.png' });
    ```
