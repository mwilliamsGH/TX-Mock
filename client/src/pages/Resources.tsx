import Layout from "@/components/Layout";
import ResourceList from "@/components/ResourceList";
import buildingData from "@/data/building.json";

export default function Resources() {
  return (
    <Layout>
      <section className="py-20 bg-neutral">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-dark mb-4">Tenant Resources</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Access important documents, handbooks, and vendor information
            </p>
          </div>
          
          <ResourceList resources={buildingData.resources} />
        </div>
      </section>
    </Layout>
  );
}
