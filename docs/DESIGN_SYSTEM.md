# Phase 02: Design System

## Style Overview
**Premium Industrial Editorial**
The visual system reflects precision engineering, architectural visualization, and premium B2B technology. The focus is on raw utility with high-end digital polish. 

### Core Tenets
* **Typography:** Large, impactful display type with strong hierarchy and technical micro-labels.
* **Layout:** Asymmetric editorial compositions, generous whitespace, and sharp edges (minimal rounding).
* **Color:** Restrained palette focused on deep navy/near-black, warm white, and precise accents (blue/gold). No neon, no glassmorphism.
* **Motion:** Mechanical, deliberate, and intentional (communicating inspection and measurement).

---

## 1. Color Tokens

| Token | Variable | Value | Usage |
| :--- | :--- | :--- | :--- |
| **Primary Base** | `--color-primary-base` | `#0A0D14` | Main background, deep space. |
| **Primary Surface**| `--color-primary-surface`| `#111520` | Subtle contrast areas, technical panels. |
| **Text Primary** | `--color-text-primary` | `#F5F6F8` | Primary headlines and body copy. |
| **Text Secondary** | `--color-text-secondary`| `#8B95A5` | Supporting copy, metadata. |
| **Accent Blue** | `--color-accent-blue` | `#2563EB` | Primary interactive elements, verification status. |
| **Accent Gold** | `--color-accent-gold` | `#D97706` | Warning, measurement, secondary highlights. |
| **Border Subdued** | `--color-border` | `rgba(255,255,255,0.1)`| Grid lines, panel separators. |

---

## 2. Typography Scale

**Font Family:** `Inter` (or similar clean sans-serif geometric/grotesque).

| Token | Variable | Size/Weight | Purpose |
| :--- | :--- | :--- | :--- |
| **Display Large**| `--text-display-lg` | `5.5rem` / `700` | Major hero statements, high-impact numbers. |
| **Display Base** | `--text-display` | `4rem` / `600` | Section headers. |
| **Heading 1** | `--text-h1` | `2.5rem` / `500` | Sub-section headers. |
| **Heading 2** | `--text-h2` | `1.5rem` / `500` | Block titles. |
| **Body Base** | `--text-body` | `1.125rem` / `400`| Standard reading copy. |
| **Label Tech** | `--text-label` | `0.75rem` / `600` | Technical readouts, uppercase tracking. |

---

## 3. Spacing Scale

Based on an 8pt/4pt system for mechanical precision.

* `--space-4`: `0.25rem`
* `--space-8`: `0.5rem`
* `--space-16`: `1rem`
* `--space-24`: `1.5rem`
* `--space-32`: `2rem`
* `--space-64`: `4rem`
* `--space-96`: `6rem`
* `--space-128`: `8rem` (Primary section padding)

---

## 4. Breakpoints & Grid

**Breakpoints:**
* `sm`: 640px
* `md`: 768px
* `lg`: 1024px
* `xl`: 1280px
* `2xl`: 1536px

**Grid System:**
* `--container-max`: `1440px`
* 12-column foundation for asymmetric spans.
* Heavy use of offset columns and vertical whitespace.

---

## 5. UI Components (Foundation)

* **Cards/Containers:** Square or minimally rounded (`--radius-sm: 2px`). Sharp borders (`1px solid var(--color-border)`). No shadows, relying on contrast and borders.
* **Buttons:** Solid rectangular blocks. High contrast hover states (e.g., inverting colors or filling from left-to-right).
* **Technical Labels:** Monospaced or heavily tracked uppercase text (e.g., `LETTER-SPACING: 0.1em`). Often prefixed with mechanical symbols like `//` or `>`.

---

## 6. Motion Tokens (Mechanics)

Animation curves should feel like robotic precision rather than organic easing.

| Token | Variable | Timing / Curve |
| :--- | :--- | :--- |
| **Snap/Measure** | `--ease-snap` | `cubic-bezier(0.85, 0, 0.15, 1)` | For quick, exact measurements. |
| **Scan/Verify** | `--ease-scan` | `linear` | For scanning lines and steady inspections. |
| **Reveal/Slide** | `--ease-reveal` | `cubic-bezier(0.16, 1, 0.3, 1)` | For content entering the viewport. |
| **Duration Fast**| `--duration-fast` | `150ms` | Hover states, focus rings. |
| **Duration Base**| `--duration-base` | `400ms` | Standard transitions. |
| **Duration Slow**| `--duration-slow` | `800ms` | Structural reveals. |
