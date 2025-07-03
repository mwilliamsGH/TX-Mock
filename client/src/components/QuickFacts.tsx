import type { QuickFact } from "@shared/schema";

interface QuickFactsProps {
  facts: QuickFact[];
}

export default function QuickFacts({ facts }: QuickFactsProps) {
  return (
    <section className="bg-neutral py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {facts.map((fact, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">
                {fact.value}
              </div>
              <div className="text-sm md:text-base text-gray-600">
                {fact.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
