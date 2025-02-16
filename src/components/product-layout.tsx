import { ProductSidebar } from "./product-sidebar"

export function ProductLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid md:grid-cols-[300px_1fr] gap-8">
        <ProductSidebar />
        <div>{children}</div>
      </div>
    </div>
  )
}

