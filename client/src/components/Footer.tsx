import { Link } from "wouter";
import buildingData from "@/data/building.json";

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">{buildingData.name}</h3>
            <p className="text-gray-400 mb-4">
              {buildingData.overview}
            </p>
            <div className="text-sm text-gray-400">
              <p>Built: {buildingData.yearBuilt}</p>
              <p>Owner: {buildingData.owner}</p>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/resources" className="hover:text-white transition-colors">Tenant Handbook</Link></li>
              <li><Link href="/" className="hover:text-white transition-colors">Amenities</Link></li>
              <li><Link href="/emergency" className="hover:text-white transition-colors">Emergency Info</Link></li>
              <li><Link href="/news" className="hover:text-white transition-colors">News & Updates</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2 text-gray-400">
              <p>{buildingData.address}</p>
              <p>Security: {buildingData.emergency.contacts.securityDesk}</p>
              <p>Management: {buildingData.emergency.contacts.propertyManager}</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 {buildingData.name}. Managed by {buildingData.propertyManager}.</p>
          <p className="text-xs mt-2">
            <a href="/admin" className="text-gray-500 hover:text-gray-300 transition-colors">Property Manager Login</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
