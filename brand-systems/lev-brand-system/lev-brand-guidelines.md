# Lev Innovation Brand Guidelines

Official guidelines for the **Lev Innovation** parent company brand. Use alongside the Agentyx product brand when composing pitch decks, corporate materials, and co-branded presentations.

---

## 1. Brand Role

Lev Innovation is the parent company. Agentyx is the product.

| Context | Primary brand | Lev usage |
|---------|---------------|-----------|
| Product pitch / demo | Agentyx | Lockup "by Lev innovation" in header/footer |
| Corporate / parent narrative | Lev Innovation | Full Lev logo, black panels |
| Split contrast slides (Past vs Future) | Both | Lev black panel + Agentyx light panel |
| Videos (HyperFrames) | Agentyx dark | Lev lockup optional in closing beat |

---

## 2. Visual Identity

### Colors
- **Background**: `#000000` — pure black
- **Text**: `#FFFFFF` — high contrast white
- **Muted text**: `rgba(255,255,255,0.72)`
- Lev is **monochromatic** — no accent colors beyond white on black

### Logo

Official PNG assets in [`assets/`](assets/):

| File | Uso |
|------|-----|
| [`lev-logo-primary.png`](assets/lev-logo-primary.png) | Logo principal — "Lev" / "Innovation" apilado, blanco (fondos oscuros) |
| [`lev-logo-primary-on-light.png`](assets/lev-logo-primary-on-light.png) | Logo principal — apilado, gris oscuro (fondos claros) |
| [`lev-logotype.png`](assets/lev-logotype.png) | Logotipo — "Lev innovation" horizontal, blanco (fondos oscuros) |
| [`lev-logotype-on-light.png`](assets/lev-logotype-on-light.png) | Logotipo — horizontal, gris oscuro (fondos claros) |
| [`lev-mark.png`](assets/lev-mark.png) | Logo secundario — chevron doble (mark solo) |

**Lockup en slides Agentyx:** `by` + `lev-logotype-on-light.png` en fondos claros; `lev-logotype.png` en fondos oscuros.

### Typography
- Same font stack as Agentyx: Plus Jakarta Sans for headings
- Lev panels use bold for step labels, regular for descriptions

---

## 3. Components

Defined in [`colors_and_type.css`](colors_and_type.css):

- `.lev-lockup` — inline "by" + logotipo PNG para slides co-branded Agentyx
- `.lev-footer-bar` — full-width black bar with centered white statement
- `.lev-split-panel` — 50/50 dark/light split (slide 2 pattern)
- `.lev-mark` — standalone chevron mark image

---

## 4. Usage Rules

1. **Do not** use Lev colors (black/white) as the primary theme for Agentyx product slides — Agentyx uses light blue presentation theme.
2. **Do** use Lev lockup when Agentyx appears as a Lev Innovation product.
3. **Do** use Lev black panels for "before / past / problem" contrast sections.
4. Use official PNG logos — do not recreate the chevron or wordmark in SVG/CSS.

---

## 5. File References

```
brand-systems/lev-brand-system/
├── colors_and_type.css    ← tokens + Lev components
├── lev-brand-guidelines.md    ← this file
└── assets/
    ├── lev-logo-primary.png
    ├── lev-logo-primary-on-light.png
    ├── lev-logotype.png
    ├── lev-logotype-on-light.png
    └── lev-mark.png
```

Import in presentations:
```html
<link rel="stylesheet" href="../../brand-systems/lev-brand-system/colors_and_type.css" />
<span class="lev-lockup">
  <span class="lev-by">by</span>
  <img src="../../brand-systems/lev-brand-system/assets/lev-logotype-on-light.png" alt="Lev innovation" class="lev-logotype-img" />
</span>
```
