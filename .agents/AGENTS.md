# Workspace Customization Rules

These rules apply specifically to development, styling, and asset management in the `agentyx-hyperframes-video` workspace.

## 1. Design System Alignment

*   **Design Tokens First**: Do not define inline color values or custom font faces in template CSS. Always import and use the variables and typography classes defined in `/brand-systems/agentyx-brand-system/colors_and_type.css`.
*   **Dual Brand Systems**: Agentyx product materials use `/brand-systems/agentyx-brand-system/`. Lev Innovation parent branding uses `/brand-systems/lev-brand-system/`. Presentations import both when co-branded.
*   **Presentation Theme**: Slides and pitch decks wrap content in `.ax-presentation` and import `/brand-systems/agentyx-brand-system/presentation.css`. Videos and HyperFrames compositions use the dark default (`:root`) — not `.ax-presentation`.
*   **Icons**: Use official icons from `/brand-systems/agentyx-brand-system/assets/icons/` or the sprite `/brand-systems/agentyx-brand-system/icons.svg`. Do not use Lucide or other generic icon sets in Agentyx presentation decks.
*   **Fonts Reference**: Ensure that all HTML documents use the local web fonts (`/brand-systems/agentyx-brand-system/fonts/`) to prevent external network request dependencies and layout shift.
*   **Asset Location**: Use `/brand-systems/agentyx-brand-system/assets/` as the single source of truth for Agentyx branding images, logos, and illustrations. Lev assets live in `/brand-systems/lev-brand-system/assets/`.
*   **Guidelines Compliance**: Consult `/brand-systems/agentyx-brand-system/agentyx-brand-guidelines.md` for Agentyx and `/brand-systems/lev-brand-system/lev-brand-guidelines.md` for Lev Innovation before modifying format templates.

## 2. Text Content & Copywriting

*   **Spanish Accents**: All copy and voiceover narration written in Spanish must be thoroughly proofread for correct grammatical accents (e.g., "contratación", "será", "operación", "cotización").
*   **Brand Voice**: Maintain a precise, calm, and executive tone across all slides, documents, and videos. Avoid informal slang or chaotic phrasing.

## 3. Git Workflow

*   **Atomic Commits**: Keep commits small and focused on a single change area. 
*   **Commit Message Convention**: Use standard prefixes:
    *   `feat: ...` for new templates or layout features.
    *   `chore: ...` for cleaning up directories, build settings, or configurations.
    *   `docs: ...` for guidelines and instructions modifications.
    *   `style: ...` for pure visual design updates.
