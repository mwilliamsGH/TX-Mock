import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import type { EmergencyStep } from "@shared/schema";

interface EmergencyAccordionProps {
  steps: EmergencyStep[];
}

export default function EmergencyAccordion({ steps }: EmergencyAccordionProps) {
  return (
    <Accordion type="single" collapsible className="space-y-4">
      {steps.map((step, index) => (
        <AccordionItem key={index} value={`step-${index}`} className="bg-white rounded-lg shadow-md">
          <AccordionTrigger className="px-6 py-4 text-lg font-semibold text-dark hover:bg-gray-50 rounded-lg">
            {step.title}
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-4">
            <p className="text-gray-600">
              {step.content}
            </p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
