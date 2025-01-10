'use client'

import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function AboutContent() {
  const [activeTab, setActiveTab] = useState('vision') // Define the state for the active tab

  const handleTabChange = (value: string) => {
    setActiveTab(value) // Update the active tab state when a tab is clicked
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-gray-800 border-l-4 border-[#2E7D32] pl-4">
          ABOUT US
        </h1>
        <div className="space-y-6 mb-12">
          <p className="text-gray-600 leading-relaxed">
            Organicos Herbal FARM is not just the name of company. It is a place where we try to develop the "ORGANICOS" Herbal extract for our customer satisfaction. We do hard work in the direction so that our company become IDEAL for our competitors.
          </p>
          <p className="text-gray-600 leading-relaxed">
            We, the Group do not believe to beat our competitors. We believe to meet the expectation of our customer by hard work of whole team.
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full"> {/* Use value and onValueChange to control active tab */}
          <TabsList>
            <TabsTrigger value="vision" className="flex-1">Our Vision</TabsTrigger>
            <TabsTrigger value="mission" className="flex-1">Our Mission</TabsTrigger>
          </TabsList>
          <TabsContent value="vision">
            <div className="mt-6 p-6 bg-green-50 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-[#2E7D32]">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                Our vision is to creating a learning arguments. Our goal is to grow profitably as well as ethically by serving the mankind, offering the best quality & advanced nature based products to the world.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="mission">
            <div className="mt-6 p-6 bg-green-50 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-[#2E7D32]">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                Our mission is to provide high-quality herbal extracts and products while maintaining sustainable and ethical practices. We strive to innovate in the field of natural health solutions, ensuring the well-being of our customers and the environment.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
