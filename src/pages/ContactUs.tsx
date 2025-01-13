import { ContactForm } from "@/components/Companyform"
import { CompanyInfo } from "@/components/CompanyInfo"
import Broad from "public/assets/6.jpg"
export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <img src={Broad} alt="" />
      
      <div className="max-w-7xl mx-auto px-4 py-12 -mt-20 relative">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-2 h-8 bg-[#4A7C43]" />
            <h1 className="text-4xl font-bold">CONTACT US</h1>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <ContactForm />
            </div>

            <div className="space-y-12">
              <div>
                <h2 className="text-2xl font-medium mb-8 text-[#5CD3C6]">
                  OUR INFO
                </h2>
                <CompanyInfo />
              </div>

              <div>
                <h2 className="text-2xl font-medium mb-8">
                  <span className="text-gray-800">FIND</span>{" "}
                  <span className="text-[#5CD3C6]">US</span>
                </h2>
                <div className="h-[300px] bg-gray-100 rounded-lg">
                  {/* Map component would go here */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

