import { Layout } from "@/components/layout"
import { HeroSlider } from "@/components/hero-slider"
import { ProductCarousel } from "@/components/product-carousel"
import { WelcomeSection } from "@/components/welcome-section"
import { ProductsSection } from "@/components/product-section"
import { DetailedProductList } from "@/components/detailed-product-list"


export default function Home() {
  return (
    <Layout>
      <HeroSlider />
      <ProductCarousel />
      <WelcomeSection />
      <ProductsSection />
      <DetailedProductList />
     
    </Layout>
  )
}
