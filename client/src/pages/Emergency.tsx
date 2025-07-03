import Layout from "@/components/Layout";
import EmergencyAccordion from "@/components/EmergencyAccordion";
import { AlertTriangle } from "lucide-react";
import buildingData from "@/data/building.json";

export default function Emergency() {
  return (
    <Layout>
      <section className="py-20 bg-red-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
              <AlertTriangle className="h-8 w-8 text-red-600" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-dark mb-4">Emergency Procedures</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Important safety information for all building occupants
            </p>
          </div>
          
          <EmergencyAccordion steps={buildingData.emergency.steps} />
          
          <div className="mt-12 bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-dark mb-4">Emergency Contacts</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-lg font-semibold text-dark mb-1">Security Desk</div>
                <div className="text-accent font-medium">
                  {buildingData.emergency.contacts.securityDesk}
                </div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-lg font-semibold text-dark mb-1">Property Manager</div>
                <div className="text-accent font-medium">
                  {buildingData.emergency.contacts.propertyManager}
                </div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-lg font-semibold text-dark mb-1">Fire/Police</div>
                <div className="text-red-600 font-medium">
                  {buildingData.emergency.contacts.firePolice}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
