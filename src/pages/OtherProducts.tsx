import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductHero } from "../components/product-hero"
import { ProductLayout } from "../components/product-layout"
import { HerbalTable } from "@/components/herbal-table"

export default function OtherExtracts() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <ProductHero />
        <ProductLayout>
          <HerbalTable />
        </ProductLayout>
      </main>
      <Footer />
    </div>
  )
}

