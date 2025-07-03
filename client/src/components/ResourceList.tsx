import { Download, ExternalLink } from "lucide-react";
import type { Resource } from "@shared/schema";

interface ResourceListProps {
  resources: Resource[];
}

export default function ResourceList({ resources }: ResourceListProps) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {resources.map((resource, index) => (
        <a
          key={index}
          href={resource.href}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 group"
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-dark group-hover:text-accent mb-2">
                {resource.label}
              </h3>
              <p className="text-sm text-gray-600">
                {resource.label.includes('PDF') ? 'Downloadable document' : 'External resource'}
              </p>
            </div>
            {resource.label.includes('PDF') ? (
              <Download className="h-6 w-6 text-accent" />
            ) : (
              <ExternalLink className="h-6 w-6 text-accent" />
            )}
          </div>
        </a>
      ))}
    </div>
  );
}
