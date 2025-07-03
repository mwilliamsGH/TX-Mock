import { useParams } from "wouter";
import { Link } from "wouter";
import { ArrowLeft, Calendar } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import newsData from "@/data/news.json";

export default function NewsPost() {
  const params = useParams();
  const post = newsData.find(p => p.slug === params.slug);

  if (!post) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-dark mb-4">Post Not Found</h1>
            <p className="text-gray-600 mb-8">The news post you're looking for doesn't exist.</p>
            <Button asChild>
              <Link href="/news">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to News
              </Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <Layout>
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-8">
          <Button asChild variant="outline">
            <Link href="/news">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to News
            </Link>
          </Button>
        </div>
        
        <div className="flex items-center text-sm text-gray-500 mb-6">
          <Calendar className="h-4 w-4 mr-2" />
          <span>{formattedDate}</span>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold text-dark mb-6">
          {post.title}
        </h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            {post.excerpt}
          </p>
          
          <div className="text-gray-700 leading-relaxed">
            {post.body.split('\n').map((paragraph, index) => (
              <p key={index} className="mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </article>
    </Layout>
  );
}
