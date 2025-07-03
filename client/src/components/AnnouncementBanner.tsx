import { useState } from "react";
import { AlertCircle, Calendar, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Announcement } from "@shared/schema";

interface AnnouncementBannerProps {
  announcements: Announcement[];
}

const priorityColors = {
  low: "bg-blue-50 border-blue-200 text-blue-800",
  medium: "bg-yellow-50 border-yellow-200 text-yellow-800",
  high: "bg-red-50 border-red-200 text-red-800"
};

const priorityIcons = {
  low: "text-blue-600",
  medium: "text-yellow-600",
  high: "text-red-600"
};

export default function AnnouncementBanner({ announcements }: AnnouncementBannerProps) {
  const [dismissedAnnouncements, setDismissedAnnouncements] = useState<string[]>([]);

  const activeAnnouncements = announcements.filter(announcement => {
    if (!announcement.isActive) return false;
    if (dismissedAnnouncements.includes(announcement.id)) return false;
    
    const now = new Date();
    const publishDate = new Date(announcement.publishDate);
    const expiryDate = announcement.expiryDate ? new Date(announcement.expiryDate) : null;
    
    if (publishDate > now) return false;
    if (expiryDate && expiryDate < now) return false;
    
    return true;
  });

  const dismissAnnouncement = (id: string) => {
    setDismissedAnnouncements(prev => [...prev, id]);
  };

  if (activeAnnouncements.length === 0) return null;

  return (
    <div className="space-y-4">
      {activeAnnouncements.map((announcement) => (
        <div
          key={announcement.id}
          className={`rounded-lg border p-4 ${priorityColors[announcement.priority]}`}
        >
          <div className="flex items-start justify-between">
            <div className="flex items-start space-x-3">
              <AlertCircle className={`h-5 w-5 mt-0.5 ${priorityIcons[announcement.priority]}`} />
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-2">
                  {announcement.title}
                </h3>
                <p className="text-sm leading-relaxed mb-3">
                  {announcement.content}
                </p>
                <div className="flex items-center text-xs opacity-75">
                  <Calendar className="h-3 w-3 mr-1" />
                  <span>
                    Published: {new Date(announcement.publishDate).toLocaleDateString()}
                    {announcement.expiryDate && (
                      <span className="ml-2">
                        • Expires: {new Date(announcement.expiryDate).toLocaleDateString()}
                      </span>
                    )}
                  </span>
                </div>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => dismissAnnouncement(announcement.id)}
              className="opacity-70 hover:opacity-100"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}