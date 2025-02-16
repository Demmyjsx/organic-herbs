import { Button } from "@/components/ui/button"

export function WelcomeSection() {
  return (
    <section className="py-16 container mx-auto px-4">
      <div className="max-w-4xl">
        <h2 className="text-4xl font-bold mb-8 text-gray-800 border-l-4 border-[#2E7D32] pl-4">
          WELCOME TO ORGANICOS HERBAL FARM
        </h2>
        <div className="space-y-6 text-gray-600">
          <p>
            ORGANICOS HERBAL FARM is not just the name of company. It is a place where we try to develop the "ORGANICOS" Herbal Farm for our customer satisfaction. We do hard work in the direction so that our company become IDEAL for our competitors.
          </p>
          <p>
            We, the Group do not believe to beat our competitors. We believe to meet the expectation of our customer by hard work of whole team.
          </p>
          <Button 
            variant="default" 
            className="bg-[#2E7D32] hover:bg-[#1B5E20] text-white"
          >
            Read More
          </Button>
        </div>
      </div>
    </section>
  )
}

