import {Link} from "react-router-dom"
import { Facebook, Twitter } from 'lucide-react'

const productLinks = [
  "Aswagandha Extract",
  "Curcumin Dry Extract",
  "Ganoderma Dry Extract",
  "Vijasar Dry Extract",
  "Garcinia Combogia Dry Extract",
  "Shilajit Dry Extract",
  "Safed Musli Dry Extract",
  "Morinda Extract / Noni Extract",
  "Spirulina Powder",
  "Other Herbal Extracts"
]

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Our Certificates", href: "/certificates" },
  { name: "Our Machines", href: "/machines" },
  { name: "Contact us", href: "/contact" }
]

export function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Us Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white border-l-4 border-[#2E7D32] pl-4">
              ABOUT US
            </h3>
            <p className="text-sm leading-relaxed">
              ORGANICOS HERBAL FARM is not just the name of company. It is a place where we try to develop the "ORGANICOS" Herbal extract for our customer satisfaction. We do hard work in the direction so that our company become IDEAL for our competitors.
            </p>
            <div className="mt-6">
              <h4 className="text-xl font-bold mb-4 text-white border-l-4 border-[#2E7D32] pl-4">
                FOLLOW US
              </h4>
              <div className="flex gap-4">
                <Link 
                  to="#" 
                  className="bg-[#1DA1F2] p-2 rounded-md hover:opacity-90 transition-opacity"
                >
                  <Twitter className="w-5 h-5" />
                </Link>
                <Link 
                  to="#" 
                  className="bg-[#4267B2] p-2 rounded-md hover:opacity-90 transition-opacity"
                >
                  <Facebook className="w-5 h-5" />
                </Link>
            
            
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white border-l-4 border-[#2E7D32] pl-4">
              LINKS
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="hover:text-white transition-colors inline-flex items-center gap-2"
                  >
                    <span className="text-[#2E7D32]">→</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white border-l-4 border-[#2E7D32] pl-4">
              OUR PRODUCTS
            </h3>
            <ul className="space-y-2">
              {productLinks.map((product) => (
                <li key={product}>
                  <Link 
                    to={`/products/${product.toLowerCase().replace(/\s+/g, '-')}`}
                    className="hover:text-white transition-colors inline-flex items-center gap-2"
                  >
                    <span className="text-[#2E7D32]">→</span>
                    {product}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white border-l-4 border-[#2E7D32] pl-4">
              CONTACT US
            </h3>
            <div className="space-y-4">
              <p className="text-sm">
                <strong>Address: </strong>FVX9+7GQ, Unnamed Road, East Kombos, Singkil, Manado City, North Sulawesi, Indonesia
              </p>
              <p>
                <strong>Phone: </strong>
                <Link to="tel:+6283872929468" className="hover:text-white transition-colors">
                  +62-83872929468
                </Link>
              </p>
              <p>
                <strong>Email: </strong>
                <Link to="mailto:info@organicosherbalfarm.com" className="hover:text-white transition-colors">
                  info@organicosherbalfarm.com
                </Link>
              </p>
              <p>
                <Link to="mailto:sales@organicosherbalfarm.com" className="hover:text-white transition-colors">
                  sales@organicosherbalfarm.com
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <p className="text-sm text-center">
            Copyright © 2019, ORGANICOS HERBAL FARM, All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  )
}

