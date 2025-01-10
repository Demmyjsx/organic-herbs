import { products } from "@/constants/product"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { useState } from "react"

export function HeroSlider() {
  const [current, setCurrent] = useState(0)

  return (
    <div className="relative h-[600px] overflow-hidden">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full h-full"
        setApi={(api) => {
          api?.on("select", () => {
            setCurrent(api.selectedScrollSnap())
          })
        }}
      >
        <CarouselContent>
          {products.map((product, index) => (
            <CarouselItem key={index} className={`relative w-full h-[600px] ${current === index ? 'opacity-100' : 'opacity-50'}`}>
              <div className="absolute inset-0">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
              </div>
              <div className="relative z-10 flex items-center justify-center h-full text-white text-center px-4">
                <div className="max-w-4xl">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    {product.title}
                  </h1>
                  <p className="text-lg md:text-xl">
                    {product.description}
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious
          className="absolute left-4 top-1/2 -translate-y-1/2"
          onClick={() => setCurrent((prev) => (prev - 1 + products.length) % products.length)}
        />
        <CarouselNext
          className="absolute right-4 top-1/2 -translate-y-1/2"
          onClick={() => setCurrent((prev) => (prev + 1) % products.length)}
        />
      </Carousel>
    </div>
  )
}
