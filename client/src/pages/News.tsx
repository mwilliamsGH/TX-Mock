import Layout from "@/components/Layout";
import NewsCard from "@/components/NewsCard";
import newsData from "@/data/news.json";

export default function News() {
  return (
    <Layout>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-dark mb-4">Latest News</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Stay updated with building announcements and events
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {newsData.map((post, index) => (
              <NewsCard key={index} post={post} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
