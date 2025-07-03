# User Interface Design Document (TX-v2)

## Project Riverview Commons Tenant Hub Website

**Version 2.0 – July 2025**

*(Tech stack: React 18 + Vite + Tailwind CSS)*

---

### 1 Layout Structure

| Break‑point | Grid | Gutters | Key Rules |
| --- | --- | --- | --- |
| **Mobile** (< 640 px) | 4‑col fluid | 16 px | Hamburger nav • Cards stack • Accordions closed by default |
| **Tablet** (640 – 1023 px) | 8‑col | 24 px | Two‑col cards • Sticky top nav |
| **Desktop** (≥ 1024 px) | 12‑col | 32 px | Max width 1280 px • Quick‑links sidebar appears |

All pages share a single `<MainLayout>` wrapper with header, content slot, and footer.

---

### 2 Core Components

| Component | Purpose | Props (key → value) |
| --- | --- | --- |
| **HeroBanner** | Intro headline & CTA | `title`, `subtitle`, `ctaLabel`, `ctaHref` |
| **QuickFacts** | Building stats bar | `facts[]` (label, value) |
| **AmenityCard** | Showcase amenity | `name`, `description`, `hours` |
| **ResourceList** | Handbook & forms | `items[]` (label, href) |
| **NewsCard** | News preview | front‑matter fields from MD (`title`, `date`, `excerpt`) |
| **EmergencyAccordion** | Step‑by‑step guide | `steps[]` (title, content) |
| **Footer** | Contact + copyright | `address`, `email`, `phone` |

---

### 3 Interaction Patterns

- **Navigation** – Top bar with logo + links. On mobile collapses to hamburger (Headless UI `Disclosure`).
- **Forms** – React Hook Form + Zod; on submit `mailto:` opens in new tab; inline error text under fields.
- **Accordions** – Emergency steps use Headless UI `Disclosure.Panel`.
- **Links to Flow** – Buttons with external icon & `target="_blank"`.

---

### 4 Visual Design & Colour

Tailwind tokens defined in `/tailwind.config.js` using values from `content/brand.json`.

```
colors: {
  primary:  '#2B5D7D',
  accent:   '#6EC1E4',
  neutral:  '#F5F7FA',
  dark:     '#1F2933'
}

```

- **Buttons** – `bg-primary text-white` default; hover `bg-primary/90`.
- **Typography** – `Inter, sans-serif`; scale: `text-base`, `text-lg` (card), `text-3xl` (hero), `text-5xl` (h1).
- **Shadows** – `shadow-md` on cards, `shadow-lg` on hero.

---

### 5 Device Considerations

- **Mobile first** – Touch targets ≥ 44 px, larger accordion hit‑areas.
- **Desktop** – Sidebar quick‑links only on screens ≥ md.
- **Print** – `@print` hides nav & footer; shows contact block.

---

### 6 Accessibility

- Colour contrast ≥ 4.5:1 checked via Tailwind plugin.
- All interactive elements keyboard‑focusable (`focus:ring-accent`).
- `aria-expanded` applied to accordion buttons.
- Images get `alt` from JSON `altText` key.

---

### 7 Page Blueprints

1. **Home** – `HeroBanner` → `QuickFacts` → `AmenityCard` grid (3) → CTA button → Footer
2. **Resources** – `HeroBanner` (smaller) → `ResourceList` → Footer
3. **News Index** – `HeroBanner` → `NewsCard` grid (auto pulls from `/content/news/*.md`)
4. **News Post** – Markdown content rendered via `react-markdown`; back‑link to index
5. **Emergency** – `HeroBanner` → `EmergencyAccordion` → Contact block.

---

*End of document*