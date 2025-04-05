"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const vehicles = [
  {
    id: 1,
    title: "Rollstuhl-Kleinbus",
    description: "Geräumiger Kleinbus mit Hebebühne für bis zu 2 Rollstühle und 5 weitere Passagiere",
    imageUrl: "/placeholder.svg?height=600&width=800",
    category: "Gruppenfahrten",
  },
  {
    id: 2,
    title: "Rollstuhl-Kombi",
    description: "Komfortabler PKW mit Rampe für einen Rollstuhl und 3 weitere Passagiere",
    imageUrl: "/placeholder.svg?height=800&width=600",
    category: "Einzelfahrten",
  },
  {
    id: 3,
    title: "Liegendtransporter",
    description: "Speziell ausgestattetes Fahrzeug für liegende Patienten mit medizinischer Ausstattung",
    imageUrl: "/placeholder.svg?height=600&width=800",
    category: "Medizinische Fahrten",
  },
  {
    id: 4,
    title: "Komfort-Limousine",
    description:
      "Barrierefreie Limousine mit erhöhten Sitzen und extra Beinfreiheit für Personen mit eingeschränkter Mobilität",
    imageUrl: "/placeholder.svg?height=800&width=600",
    category: "Komfortfahrten",
  },
  {
    id: 5,
    title: "Behindertengerechter Van",
    description: "Geräumiger Van mit absenkbarem Boden und automatischer Rampe für einfachen Einstieg",
    imageUrl: "/placeholder.svg?height=600&width=800",
    category: "Gruppenfahrten",
  },
  {
    id: 6,
    title: "Spezial-Krankentransporter",
    description: "Vollausgestatteter Krankentransporter für Patienten mit besonderen medizinischen Anforderungen",
    imageUrl: "/placeholder.svg?height=800&width=600",
    category: "Medizinische Fahrten",
  },
]

const categories = ["Alle", ...new Set(vehicles.map((vehicle) => vehicle.category))]

export default function PortfolioGrid() {
  const [filter, setFilter] = useState("Alle")

  const filteredVehicles = filter === "Alle" ? vehicles : vehicles.filter((vehicle) => vehicle.category === filter)

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Unsere Fahrzeugflotte</h2>
          <p className="mt-4 text-lg text-muted-foreground">Speziell ausgestattete Fahrzeuge für jeden Bedarf</p>
        </motion.div>

        <div className="flex justify-center space-x-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredVehicles.map((vehicle) => (
              <motion.div
                key={vehicle.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-background rounded-3xl shadow-lg overflow-hidden hover-lift transition-all duration-300 ease-in-out border-2 border-transparent hover:border-primary/10"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={vehicle.imageUrl || "/placeholder.svg"}
                    alt={vehicle.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 ease-in-out group-hover:scale-105"
                  />
                  <motion.div
                    className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300"
                    whileHover={{ opacity: 1 }}
                  >
                    <p className="text-white text-center px-4">{vehicle.description}</p>
                  </motion.div>
                </div>
                <div className="p-6">
                  <div className="text-sm font-medium text-primary mb-1">{vehicle.category}</div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{vehicle.title}</h3>
                  <a href="#contact" className="text-primary hover:underline inline-flex items-center">
                    Jetzt buchen
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

