import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card"
import  Aswagha from "../assets/Aswagandha-Extract.jpg"
import  Curcumin_Dry_Extract from "../assets/Curcumin-Dry-Extract.jpg"

const productLinks = [
  { name: "Aswagandha Extract", href: "/products/aswagandha-extract" },
  { name: "Curcumin Dry Extract", href: "/products/curcumin-dry-extract" },
  { name: "Ganoderma Dry Extract", href: "/products/ganoderma-dry-extract" },
  { name: "Vijasar Dry Extract", href: "/products/vijasar-dry-extract" },
  { name: "Garcinia Combogia Dry Extract", href: "/products/garcinia-combogia-dry-extract" },
  { name: "Shilajit Dry Extract", href: "/products/shilajit-dry-extract" },
  { name: "Safed Musli Dry Extract", href: "/products/safed-musli-dry-extract" },
  { name: "Morinda Extract / Noni Extract", href: "/products/morinda-extract" },
  { name: "Spirulina Powder", href: "/products/spirulina-powder" },
  { name: "Other Herbal Extracts", href: "/products/other-herbal-extracts" },
]

export function ProductsSection() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="grid md:grid-cols-12 gap-8">
        {/* Sidebar */}
        <div className="md:col-span-3">
          <h3 className="text-2xl font-bold mb-6 text-gray-800 border-l-4 border-[#2E7D32] pl-4">
            OUR PRODUCTS
          </h3>
          <nav className="space-y-2">
            {productLinks.map((product) => (
              <Link
                key={product.name}
                to={product.href}
                className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md text-gray-600 hover:text-[#2E7D32] transition-colors"
              >
                <span className="text-[#2E7D32]">→</span>
                {product.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Hot Products */}
        <div className="md:col-span-9">
          <h3 className="text-2xl font-bold mb-6 text-gray-800 border-l-4 border-[#2E7D32] pl-4">
            HOT PRODUCTS
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            
            <Card>

              <CardContent className="p-0">
                <div className="relative h-64 overflow-hidden">
                  <img src={Aswagha}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <h4 className="text-white text-2xl font-bold">Aswagandha Extract</h4>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-4">Aswagandha Extract</h4>
                  <p className="text-gray-600">
                    Organicos Herbal Extract is a renowned Ashwagandha Dry extract Manufacturer and Supplier. Ashwagandha is one of the most powerful herbs in Ayurvedic healing, has been used since ancient times for a wide variety of conditions and for it.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-0">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={Curcumin_Dry_Extract}
                    alt="Curcumin Dry Extract"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <h4 className="text-white text-2xl font-bold">Curcumin Dry Extract</h4>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-4">Curcumin Dry Extract</h4>
                  <p className="text-gray-600">
                    Therapeutic properties of turmeric have been known for centuries, modern science has identified the curcuminoids (phenolic compounds found in turmeric) and provides a scientific basis for many clinical uses of standardized curcumin.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

