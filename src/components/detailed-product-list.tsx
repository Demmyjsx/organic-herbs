import { Card, CardContent } from "@/components/ui/card"

import {Link} from "react-router-dom"

const products = [
  {
    title: "Ganoderma Dry Extract",
    image: "/assets/Ganoderma-Dry-Extract-11.jpg",
    description: "ORGANICOS HERBAL FARM, are a leading supplier of Ganoderma dry extract in Indonesia, we are offering a huge range of...",
    href: "/products/ganoderma-dry-extract"
  },
  {
    title: "Vijasar Dry Extract",
    image: "/assets/Vijasar-Dry-Extract.jpg",
    description: "Vijaysar Known as the Indonesia kino tree or Malabar Kino, it is Found commonly in hilly regions of central and...",
    href: "/products/vijasar-dry-extract"
  },
  {
    title: "Garcinia Combogia Dry Extract",
    image: "/assets/Garcinia-Combogia-Dry-Extract.jpg",
    description: "We are one the leading manufacturers and suppliers of Garcinia combogia dry extract. The uses of Garcinia are...",
    href: "/products/garcinia-combogia-dry-extract"
  },
  {
    title: "Shilajit Dry Extract",
    image: "/assets/Shilajit-Dry-Extract.jpg",
    description: "Shilajit is one of the important herbs in Indonesia Ayurved to cure various diseases. We have establised ourself as...",
    href: "/products/shilajit-dry-extract"
  },
  {
    title: "Safed Musli Dry Extract",
    image: "/assets/Safed-Musli-Dry-Extract.jpg",
    description: "We are manufacturer and supplier of Safed Musli dry extract in India. Safed musli dry extract is found effective...",
    href: "/products/safed-musli-dry-extract"
  },
  {
    title: "Morinda Extract / Noni Extract",
    image: "/assets/Morinda-Extract.jpg",
    description: "We one of the reputed name of Morinda Extract Supplier and manufacturer in Indonesia. Morinda extract or Noni Extract ...",
    href: "/products/morinda-extract"
  }
]

export function DetailedProductList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-32">
    {products.map((product) => (
      <Card
        key={product.title}
        className="overflow-hidden group relative"
      >
        <Link to={product.href}>
          <div className="relative h-64 group">
            {/* Image container with hover effect */}
            <img
              src={product.image}
              alt={product.title}
              className="object-contain w-full h-full"
            />
            {/* Background overlay for hover effect */}
            <div className="absolute inset-0 bg-teal-600/50 transition-all duration-500 h-0 group-hover:h-full"></div>
          </div>
          <CardContent className="p-6">
            <h4 className="text-[#2E7D32] text-xl font-semibold mb-3">
              {product.title}
            </h4>
            <p className="text-gray-600 line-clamp-3">
              {product.description}
            </p>
          </CardContent>
        </Link>
      </Card>
    ))}
  </div>
  
  )
}

