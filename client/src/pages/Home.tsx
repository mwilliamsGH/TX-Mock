import Layout from "@/components/Layout";
import HeroBanner from "@/components/HeroBanner";
import QuickFacts from "@/components/QuickFacts";
import AmenityCard from "@/components/AmenityCard";
import NewsCard from "@/components/NewsCard";
import buildingData from "@/data/building.json";
import newsData from "@/data/news.json";

export default function Home() {
  return (
    <Layout>
      <HeroBanner
        title={buildingData.hero.title}
        subtitle={buildingData.hero.subtitle}
        ctaPrimary={buildingData.hero.ctaPrimary}
      />
      
      <QuickFacts facts={buildingData.quickFacts} />
      
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Building Amenities</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Enjoy premium amenities designed for modern professionals
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {buildingData.amenities.map((amenity, index) => (
              <AmenityCard key={index} amenity={amenity} />
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Latest News</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Stay updated with building announcements and events
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {newsData.slice(0, 2).map((post, index) => (
              <NewsCard key={index} post={post} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
