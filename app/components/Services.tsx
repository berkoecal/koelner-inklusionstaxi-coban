"use client"

import { motion } from "framer-motion"
import { ShipWheelIcon as Wheelchair, Car, CalendarClock, Users } from "lucide-react"

const services = [
  {
    icon: <Wheelchair className="w-12 h-12 mb-4 text-blue-500" />,
    title: "Rollstuhltransport",
    description: "Speziell ausgestattete Fahrzeuge für sicheren und komfortablen Rollstuhltransport.",
  },
  {
    icon: <Car className="w-12 h-12 mb-4 text-yellow-500" />,
    title: "Krankenfahrten",
    description: "Zuverlässige Beförderung zu Arzt- und Therapieterminen mit qualifiziertem Personal.",
  },
  {
    icon: <CalendarClock className="w-12 h-12 mb-4 text-green-500" />,
    title: "Regelmäßige Fahrten",
    description: "Zuverlässiger Transport zu regelmäßigen Terminen wie Arbeit, Schule oder Therapie.",
  },
  {
    icon: <Users className="w-12 h-12 mb-4 text-purple-500" />,
    title: "Gruppenfahrten",
    description: "Organisation von Gruppenfahrten für Vereine, Pflegeheime und Behinderteneinrichtungen.",
  },
]

export default function Services() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
      <div className="container mx-auto">
        <motion.h2
          className="text-5xl font-black mb-16 text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Unsere Leistungen
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-gray-700 p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              {service.icon}
              <h3 className="text-xl font-bold mb-2 text-white">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

