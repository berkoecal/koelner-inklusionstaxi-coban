"use client";

import { motion } from "framer-motion";
import Image from "next/image";
export default function AboutUs() {
  return (
    <section className='py-20 px-4 sm:px-6 lg:px-8 bg-gray-900'>
      <div className='container mx-auto'>
        <motion.h2
          className='text-5xl font-black mb-8 text-center text-white'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Über Uns
        </motion.h2>
        <div className='grid md:grid-cols-2 gap-12 items-center'>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className='text-3xl font-bold mb-4 text-white'>Wir sind für Sie da</h3>
            {/* <p className='text-gray-300 mb-6'>
              Bei Kölner Inklusionstaxi steht Ihre Mobilität an erster Stelle. Seit über 15 Jahren
              bieten wir spezialisierten Transportservice für Menschen mit Behinderungen und
              eingeschränkter Mobilität an. Unser Team aus geschulten Fahrern und Begleitpersonen
              sorgt für einen sicheren und komfortablen Transport.
            </p> */}
            <p className='text-gray-300 mb-6'>
              Wir bieten das erste Inklusionstaxi in Köln an. Seit 2016 finden Sie mit uns ein
              einfühlsames, vertrauensvolles und auf den Inklusionsgedanken voll eingestelltes, echt
              kölsches Unternehmen. Hier stehen Sie mit Ihren Bedürfnissen im Vordergrund. Der Chef
              Ibrahim Coban, ne echt Kölsche Jung mit Migrationshintergrund, steht Ihnen gut gelaunt
              mit Rat und Tat zur Seite, egal, wo ihr Fahrtziel liegt. Er ist seit 10 Jahren
              passionierter Taxifahrer und schätzt den Umgang mit Menschen. Der Inklusionsgedanke
              ist für ihn eine Berufung. Um seine Kompentenz in diesem Bereich zu
              professionalisieren, hat er im Oktober 2021 an einer Schulung der BG Verkehr
              teilgenommen, bei der es um den Arbeitsschutz bei der Beförderung
              mobilitätseingeschränkter Personen ging.
            </p>
            <p className='text-gray-300'>
              Mit unserer modernen Fahrzeugflotte, die mit Rampen, Liften und speziellen
              Sicherungssystemen ausgestattet ist, garantieren wir höchste Sicherheitsstandards und
              Barrierefreiheit für alle Fahrgäste.
            </p>
          </motion.div>
          <motion.div
            className='relative h-96'
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className='absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg transform rotate-3'></div>
            <div className='absolute inset-0 bg-gray-800 rounded-lg transform -rotate-3 flex items-center justify-center overflow-hidden'>
              <Image
                src='./cobancologne_02.webp'
                alt='Kölner Inklusionstaxi Service'
                className='w-full h-full object-cover opacity-70'
                width={500}
                height={500}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
