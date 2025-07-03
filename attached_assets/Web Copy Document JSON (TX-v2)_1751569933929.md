# Web Copy Document JSON (TX-v2)

```json
{
  "building": {
    "name": "Riverview Commons",
    "address": "480 Riverside Drive, Maple Grove, Ontario",
    "yearBuilt": 2014,
    "totalSquareFeet": 80000,
    "floors": 4,
    "parkingRatio": "4.0 / 1000 SF",
    "owner": "Northbrook REIT",
    "propertyManager": "Lexana Property Management",
    "overview": "Riverview Commons is a modern Class‑A suburban office building overlooking the Credit River. Tenants enjoy renovated common areas, on‑site fitness, and quick access to Highway 403.",
    "brand": {
      "primaryColor": "#2B5D7D",
      "accentColor": "#6EC1E4",
      "neutralColor": "#F5F7FA",
      "fontFamily": "Inter, sans-serif"
    },
    "hero": {
      "title": "Everything tenants need — all in one place",
      "subtitle": "Handbooks, amenities, and service links for Riverview Commons.",
      "ctaPrimary": {
        "label": "Tenant Handbook",
        "href": "/resources#handbook"
      }
    },
    "quickFacts": [
      { "label": "Total SF", "value": "80 000" },
      { "label": "Floors", "value": "4" },
      { "label": "Parking", "value": "4/1000 SF" },
      { "label": "Built", "value": "2014" }
    ]
  },

  "amenities": [
    {
      "name": "Riverside Fitness Centre",
      "description": "Tenant‑only gym with cardio, weights, and showers.",
      "hours": "05:00 – 22:00, Mon–Sun"
    },
    {
      "name": "Conference Suite",
      "description": "12‑seat boardroom with 4K display and VC kit. Book via Flow portal.",
      "hours": "07:00 – 19:00, Mon–Fri"
    },
    {
      "name": "Bike Storage",
      "description": "Secure indoor racks and repair station at P1 level.",
      "hours": "24/7 access with fob"
    }
  ],

  "resources": [
    { "label": "Tenant Handbook (PDF)", "href": "https://drive.google.com/uc?id=1‑ABC123" },
    { "label": "Move‑In Checklist (PDF)", "href": "https://drive.google.com/uc?id=1‑DEF456" },
    { "label": "Approved Vendor List", "href": "https://docs.google.com/spreadsheets/d/xyz" }
  ],

  "emergency": {
    "contacts": {
      "securityDesk": "+1 905 555 1122",
      "propertyManager": "+1 905 555 1188",
      "firePolice": "911"
    },
    "steps": [
      {
        "title": "Fire Alarm",
        "content": "Proceed to nearest exit. Assemble at south parking lot. Do not use elevators."
      },
      {
        "title": "Medical Emergency",
        "content": "Call 911, then notify Security Desk. AED located Level 1 lobby."
      },
      {
        "title": "Power Outage",
        "content": "Emergency lighting will activate. Await instructions via PA system."
      }
    ]
  },

  "news": [
    {
      "slug": "2025‑07‑summer‑bbq",
      "title": "Summer Tenant BBQ – July 18",
      "date": "2025‑07‑05",
      "excerpt": "Join us on the rear patio for burgers, salads, and live music at noon.",
      "body": "We’re excited to host our annual tenant appreciation BBQ..."
    },
    {
      "slug": "2025‑06‑lobby‑refresh",
      "title": "Lobby Refresh Completed",
      "date": "2025‑06‑20",
      "excerpt": "New seating, art wall, and greenery now open.",
      "body": "The renovation brings warm wood tones, additional seating..."
    }
  ]
}

```