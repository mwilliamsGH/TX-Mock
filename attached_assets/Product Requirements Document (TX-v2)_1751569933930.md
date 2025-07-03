# Product Requirements Document (TX-v2)

## Project Riverview Commons Tenant Hub Website

**Version 2.0 – July 2025**

---

### 1 High‑Level Instructions

Create a **single‑purpose Tenant Hub** website for Riverview Commons using **React 18 + Vite + Tailwind CSS**.  All pages must be statically generated at build‑time and hosted on Vercel as a static project.  Content lives in JSON/Markdown committed by Decap CMS.  No analytics, no back‑end APIs.

- **Module in scope:** TX (Tenant Hub) only.
- **Target launch:** 6 weeks from kick‑off.

---

### 2 Who Is This App For?

- **Primary users:** Employees & facilities staff of the eight tenant companies occupying Riverview Commons.
- **Secondary users:** Building management team who will update news and documents via Decap CMS.

| Persona | Goal | Success signal |
| --- | --- | --- |
| Office employee | Find handbook, amenity hours, emergency info | Gets info in ≤3 clicks, spends <1 min on site |
| Facilities lead | Send staff to emergency page during drill | Procedures page loads on mobile, clearly readable |
| Property manager | Post a news update without dev help | New post visible on site within 5 min of hitting "Publish" |

---

### 3 Functional Requirements – What Does It Do?

1. **Serve static pages**: Home, Resources, Emergency, News index, News post.
2. **Display tenant handbook** via inline PDF viewer with search.
3. **Show amenity list** with hours and quick facts.
4. **News feed** managed through Decap CMS; build triggers full site rebuild.
5. **Emergency procedures accordion** with downloadable contact card.
6. **Deep‑link button** to Flow Tenant Portal (`VITE_FLOW_PORTAL_URL`).
7. **Contact form** validates locally (React Hook Form + Zod) and emails `pm@riverview‑commons.com` via simple fetch to serverless mail webhook.

Out of scope: Leasing pages, AI chat, analytics, future Flow API widgets.

---

### 4 User Stories – How Will Users Interact?

*As an office employee*

- I can open the site on my phone and tap “Tenant Resources” to download the handbook PDF.
- I can view the gym’s opening hours on the Home page without logging in.
- I can click “Submit a Ticket” and be taken straight into the Flow app.

*As a property manager*

- I can log into `/admin` (Decap) and create a news post with title, body, and image.
- When I hit **Publish**, the site automatically rebuilds and the post appears at `/news` within five minutes.

---

### 5 User Interface – How Will It Look?

| Page | Key sections (top → bottom) | Notes |
| --- | --- | --- |
| **Home (`/`)** | Hero banner → Quick‑facts bar → Amenity cards → Ticket CTA → Latest news (3) | Brand colours from Tailwind config (`primary`, `accent`). |
| **Tenant Resources (`/resources`)** | Handbook viewer → Downloadable forms list | PDF opens in responsive container |
| **Emergency (`/emergency`)** | Alert banner → Accordion steps → Emergency contacts card | Colours shift to `accent` + red accents |
| **News Index (`/news`)** | Post grid (card layout) | Infinite scroll not required |
| **News Post (`/news/:slug`)** | Cover image → Title → Body (MDX) → Back link |  |

Navigation: fixed top‑bar on desktop, hamburger on mobile.  Font stack: `Inter`, `Sans‑Serif`.  WCAG 2.1 AA contrast achieved via colour tokens.

---

*Document owner: Product Lead – Lexana Property Websites*