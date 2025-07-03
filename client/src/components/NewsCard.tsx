import { Calendar, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import type { NewsPost } from "@shared/schema";

interface NewsCardProps {
  post: NewsPost;
}

const newsImages = {
  "2025-07-summer-bbq": "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
  "2025-06-lobby-refresh": "https://images.unsplash.com/photo-1497366412874-3415097a27e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
};

export default function NewsCard({ post }: NewsCardProps) {
  const imageUrl = newsImages[post.slug as keyof typeof newsImages] || "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600";
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <article className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden">
      <div className="h-48 bg-gray-200 overflow-hidden">
        <img 
          src={imageUrl}
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <Calendar className="h-4 w-4 mr-2" />
          <span>{formattedDate}</span>
        </div>
        <h3 className="text-xl font-semibold text-dark mb-3">
          {post.title}
        </h3>
        <p className="text-gray-600 mb-4">
          {post.excerpt}
        </p>
        <Link
          href={`/news/${post.slug}`}
          className="text-accent hover:text-accent/80 font-medium inline-flex items-center"
        >
          Read More
          <ChevronRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
