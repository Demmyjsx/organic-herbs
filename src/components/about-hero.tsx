import HeroPlant from "public/assets/6.jpg"
export function AboutHero() {
    return (
      <div className="relative h-[400px] overflow-hidden">
        <img
          src={HeroPlant}
          alt="Herbal plants"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>
    )
  }
  
  