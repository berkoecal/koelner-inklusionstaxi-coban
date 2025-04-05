"use client";

import { motion } from "framer-motion";
import { ShipWheelIcon as Wheelchair, Car, CalendarClock, Users } from "lucide-react";

const services = [
  {
    icon: <Wheelchair className='w-12 h-12 mb-4 text-blue-500' />,
    title: "Rollstuhltransport",
    description:
      "Speziell ausgestattete Fahrzeuge für sicheren und komfortablen Rollstuhltransport.",
  },
  {
    icon: <Car className='w-12 h-12 mb-4 text-yellow-500' />,
    title: "Krankenfahrten",
    description:
      "Zuverlässige Beförderung zu Arzt- und Therapieterminen mit qualifiziertem Personal.",
  },
  {
    icon: <CalendarClock className='w-12 h-12 mb-4 text-green-500' />,
    title: "Regelmäßige Fahrten",
    description:
      "Zuverlässiger Transport zu regelmäßigen Terminen wie Arbeit, Schule oder Therapie.",
  },
  {
    icon: <Users className='w-12 h-12 mb-4 text-purple-500' />,
    title: "Gruppenfahrten",
    description:
      "Organisation von Gruppenfahrten für Vereine, Pflegeheime und Behinderteneinrichtungen.",
  },
];

export default function Services() {
  return (
    <section className='py-20 px-4 sm:px-6 lg:px-8 bg-gray-800'>
      <div className='container mx-auto'>
        <motion.h2
          className='text-5xl font-black mb-16 text-center text-white'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Unsere Leistungen
        </motion.h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className='bg-gray-700 p-6 rounded-lg'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              {service.icon}
              <h3 className='text-xl font-bold mb-2 text-white'>{service.title}</h3>
              <p className='text-gray-300'>{service.description}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          className='mt-16 p-6 bg-gray-700 rounded-lg max-w-3xl mx-auto text-center'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h3 className='text-xl font-bold mb-3 text-white'>Preishinweis</h3>
          <p className='text-gray-300 mb-4'>
            Bei uns bezahlen Sie innerhalb des Kölner Raums den marktüblichen Taxitarif. Sie
            brauchen also keine Bedenken vor hohen Kosten haben. Ab 50 km wäre vorab eine
            Preisverhandlung möglich. In diesem Zusammenhang freuen wir uns über eine Vorbestellung
            und beraten Sie gerne. Den Beschluss der Stadt Köln können Sie hier nachlesen:{" "}
            <a
              href='https://www.stadt-koeln.de/mediaasset/content/satzungen/koelner_taxitarif_28_10_2024.pdf'
              className='text-blue-500 hover:text-blue-600'
            >
              Beschluss der Stadt Köln
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
