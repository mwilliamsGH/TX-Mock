# Software Requirements Specification (TX-v2)

## Project Riverview Commons Tenant Hub Website

**Version 2.1 – July 2025**

*(Tech stack: React 18 + Vite + Tailwind; TX module only)*

---

### 1 System Design (High Level)

```
📦 Build‑time
    Decap CMS (Git) ──▶ GitHub  ──▶ Vercel Build  (runs `vite build`)

🚚 Runtime
    Visitor Browser ──▶ Static HTML/CSS/JS from Vercel CDN
    "Submit Ticket" CTA ──▶ Flow Tenant Portal (opens new tab)

```

- **Delivery model:** Purely static site. Every commit from Decap triggers a full rebuild & redeploy.
- **Hosting:** Vercel “Static Project” (edge‑cached worldwide).

---

### 2 Architecture Pattern

| Layer | Responsibility | Library / Tool |
| --- | --- | --- |
| Build | Bundling / transpile | **Vite 5** (`vite build`) |
| UI | React component tree | **React 18** + **react-router-dom v6** |
| Styling | Design tokens, utilities | **Tailwind CSS** (`tailwind.config.js` holds brand colours) |
| Forms | Tenant enquiry forms | **React Hook Form** + **Zod** validation |
| Content | Structured data | JSON / Markdown in `/content/`, committed via Decap CMS |
| Deployment | Preview & prod | Vercel static hosting |

---

### 3 State Management

- Minimal client state handled locally by React Hook Form.
- No global Redux/Context; pages read data directly from imported JSON at build‑time.

---

### 4 Data Flow

```
[Editor] → Decap CMS GUI → Git commit (content JSON / MD)
        ↘ n8n webhook validates JSON
GitHub push → Vercel CI → `pnpm install && vite build` → Deploy
Visitor requests page → Vercel CDN serves pre‑built asset
Visitor clicks "Submit Ticket" → Redirect to Flow URL with tenant ID query string

```

---

### 5 Technical Stack (summarised)

- **React 18** (functional components, hooks)
- **Vite 5** with `@vitejs/plugin-react`
- **Tailwind CSS** with custom colour palette loaded from `/content/brand.json`
- **react-router-dom v6** for routing
- **React Hook Form + Zod** for form validation
- **Decap CMS** (Git‑based) for editing News posts & JSON blobs
- **Vercel** static project for hosting / previews

---

### 6 Authentication Process

No user authentication on the public site.  Tenant‑only actions link out to Flow Tenant Portal, which handles SSO independently.  Flow portal URL stored as `VITE_FLOW_PORTAL_URL` env variable.

---

### 7 Route Design

| Path | Component | Purpose |  |
| --- | --- | --- | --- |
| `/` | `HomePage` | Hero banner, quick facts, amenity highlights |  |
| `/resources` | `ResourcesPage` | Tenant handbook PDF link, forms, vendor contacts |  |
| `/news` | `NewsIndex` | List of markdown news posts (sorted by date) |  |
| `/news/:slug` | `NewsPost` | Render individual MD file via `react-markdown` |  |
| `/emergency` | `EmergencyPage` | Evacuation steps & phone numbers |  |
| `*` | `NotFoundPage` | 404 route |  |
|  |  |  |  |

| Path | Purpose | Data source | Components |
| --- | --- | --- | --- |
| `/` | Homepage (hero, quick facts, amenity highlights, login CTA) | `building.json`, `amenities.json` | `HeroBanner`, `QuickFacts`, `AmenityGrid`, `LoginCTA` |
| `/resources` | Tenant resources & handbook viewer | `tenant_resources.json`, handbook PDF | `HandbookViewer`, `DownloadList` |
| `/news` | Building announcements & events | Markdown posts in `/content/news` | `NewsList`, `PostCard` |
| `/news/:slug` | Individual post page | MD front‑matter | `MDXRenderer` |
| `/emergency` | Emergency procedures & contacts | `emergency.json` | `EmergencyAccordion`, `ContactTable` |
| `/admin` | Decap CMS | — | External (Git‑based) |

---

### 8 API Design

No internal API routes. External integrations:

---

### 9 Database Design / ERD

*No database required.*  All data is static JSON/Markdown fetched at build‑time. Example content folder:

```
/content
  brand.json            # colours, fonts
  building.json         # quick facts
  amenities.json
  emergency.json
  /news
    2025-06-30-fire-drill.md

```

---

### 10 Static/Content Schema (zod)

```
export const BuildingSchema = z.object({
  name: z.string(),
  address: z.string(),
  yearBuilt: z.number(),
  totalSquareFeet: z.number(),
  floors: z.number(),
  parkingRatio: z.string()
});

```

Validation runs in an n8n step before merge to `main`.

---

*End of document*