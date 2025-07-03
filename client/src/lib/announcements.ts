import type { Announcement } from "@shared/schema";

// Import announcement files
import wifiUpgrade from "@/data/announcements/2025-07-03-wifi-upgrade.json";
import securityCards from "@/data/announcements/2025-07-02-security-cards.json";

// Combine all announcements
export const announcements: Announcement[] = [
  wifiUpgrade as Announcement,
  securityCards as Announcement,
];

// Filter active announcements based on publish/expiry dates
export const getActiveAnnouncements = (): Announcement[] => {
  const now = new Date();
  
  return announcements.filter(announcement => {
    if (!announcement.isActive) return false;
    
    const publishDate = new Date(announcement.publishDate);
    const expiryDate = announcement.expiryDate ? new Date(announcement.expiryDate) : null;
    
    if (publishDate > now) return false;
    if (expiryDate && expiryDate < now) return false;
    
    return true;
  });
};

// Sort announcements by priority and date
export const getSortedAnnouncements = (): Announcement[] => {
  const priorityOrder = { high: 3, medium: 2, low: 1 };
  
  return getActiveAnnouncements().sort((a, b) => {
    // Sort by priority first
    const priorityDiff = priorityOrder[b.priority] - priorityOrder[a.priority];
    if (priorityDiff !== 0) return priorityDiff;
    
    // Then by publish date (newest first)
    return new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime();
  });
};