# Decap CMS Setup for Riverview Commons Tenant Hub

## Overview

This project now includes Decap CMS (formerly Netlify CMS) functionality to allow property managers to create and manage building announcements without requiring technical knowledge.

## Features

### Building Announcements Management
- Create, edit, and delete building announcements
- Set announcement priority (Low, Medium, High)
- Choose announcement type (Maintenance, Event, General, Alert)
- Set publish and expiry dates
- Toggle active/inactive status

### Site Settings Management
- Edit building information
- Manage amenities, resources, and emergency contacts
- Update brand colors and hero content

## How It Works

### File Structure
```
client/
├── public/admin/
│   ├── config.yml          # Decap CMS configuration
│   └── index.html          # CMS admin interface
├── src/data/
│   ├── announcements/      # Individual announcement JSON files
│   │   ├── 2025-07-03-wifi-upgrade.json
│   │   └── 2025-07-02-security-cards.json
│   └── building.json       # Main building data
└── lib/
    └── announcements.ts     # Utilities for loading announcements
```

### Announcement Display
- Announcements appear on the home page in a dedicated section
- Filtered by active status and date ranges
- Sorted by priority (High > Medium > Low) then by date
- Color-coded by priority level
- Dismissible by users

### Content Management Workflow
1. Access `/admin` to open Decap CMS interface
2. Create or edit announcements
3. Set appropriate priority and type
4. Configure publish/expiry dates
5. Save changes - files are updated in the repository

## Setup Requirements

### For Development
- The admin interface is available at `/admin`
- Uses Netlify Identity for authentication
- Configuration in `client/public/admin/config.yml`

### For Production Deployment
1. Enable Netlify Identity on your Netlify site
2. Configure Git Gateway in Netlify
3. Add users to Netlify Identity dashboard
4. Users can access CMS at `yoursite.com/admin`

## Data Schema

### Announcement Schema
```typescript
{
  id: string;                                    // Unique identifier
  title: string;                                 // Announcement title
  content: string;                               // Announcement body
  type: "maintenance" | "event" | "general" | "alert";
  priority: "low" | "medium" | "high";
  publishDate: string;                           // ISO date string
  expiryDate?: string;                           // Optional ISO date string
  isActive: boolean;                             // Show/hide toggle
}
```

## Integration Points

### Home Page Integration
- `AnnouncementBanner` component displays active announcements
- Imported via `getSortedAnnouncements()` utility function
- Automatically filters expired and inactive announcements

### Future Enhancements
- Email notifications for new announcements
- Tenant-specific announcement targeting
- Rich text editing with images
- Announcement categories and tagging