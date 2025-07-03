import { Clock } from "lucide-react";
import type { Amenity } from "@shared/schema";

interface AmenityCardProps {
  amenity: Amenity;
  image?: string;
}

const amenityImages = {
  "Riverside Fitness Centre": "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
  "Conference Suite": "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
  "Bike Storage": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
};

export default function AmenityCard({ amenity, image }: AmenityCardProps) {
  const imageUrl = image || amenityImages[amenity.name as keyof typeof amenityImages] || "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600";

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6">
      <div className="h-48 bg-gray-200 rounded-lg mb-6 overflow-hidden">
        <img 
          src={imageUrl}
          alt={amenity.name}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-xl font-semibold text-dark mb-3">
        {amenity.name}
      </h3>
      <p className="text-gray-600 mb-4">
        {amenity.description}
      </p>
      <div className="flex items-center text-sm text-accent">
        <Clock className="h-4 w-4 mr-2" />
        <span>{amenity.hours}</span>
      </div>
    </div>
  );
}
