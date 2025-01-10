import {Link} from "react-router-dom"

const products = [
  { name: "Aswagandha Extract", href: "/products/aswagandha-extract" },
  { name: "Curcumin Dry Extract", href: "/products/curcumin-dry-extract" },
  { name: "Ganoderma Dry Extract", href: "/products/ganoderma-dry-extract" },
  { name: "Vijasar Dry Extract", href: "/products/vijasar-dry-extract" },
  { name: "Garcinia Combogia Dry Extract", href: "/products/garcinia-combogia-dry-extract" },
  { name: "Shilajit Dry Extract", href: "/products/shilajit-dry-extract" },
  { name: "Safed Musli Dry Extract", href: "/products/safed-musli-dry-extract" },
  { name: "Morinda Extract / Noni Extract", href: "/products/morinda-extract" },
  { name: "Spirulina Powder", href: "/products/spirulina-powder" },
  { name: "Other Herbal Extracts", href: "/products/other-extracts" },
]

export function ProductSidebar() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-gray-800 border-l-4 border-[#2E7D32] pl-4">
        OUR PRODUCTS
      </h2>
      <nav className="space-y-2">
        {products.map((product) => (
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
  )
}

