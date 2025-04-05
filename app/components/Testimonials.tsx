"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    quote:
      "Kölner Inklusionstaxi hat mein Leben verändert. Dank ihres zuverlässigen Services kann ich wieder regelmäßig meine Therapietermine wahrnehmen.",
    author: "Maria Schmidt",
    position: "Stammkundin seit 2019",
    image: "/person-1.jpeg",
  },
  {
    quote:
      "Als Pflegeheim schätzen wir die Professionalität und Pünktlichkeit vom Kölner Inklusionstaxi. Unsere Bewohner fühlen sich stets sicher und gut betreut.",
    author: "Alexandra Weber",
    position: "Leiterin Seniorenresidenz",
    image: "/person-2.jpeg",
  },
  {
    quote:
      "Die Fahrer sind immer freundlich und hilfsbereit. Besonders beeindruckt hat mich, wie geduldig sie mit meinem Vater umgehen, der an Demenz leidet.",
    author: "Sabine Müller",
    position: "Angehörige",
    image: "/person-3.jpeg",
  },
];

export default function Testimonials() {
  return (
    <section className='py-20 px-4 sm:px-6 lg:px-8 bg-gray-900'>
      <div className='container mx-auto'>
        <motion.h2
          className='text-5xl font-black mb-16 text-center text-white'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Was unsere Kunden sagen
        </motion.h2>
        <div className='grid md:grid-cols-3 gap-8'>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              className='bg-gray-800 p-6 rounded-lg'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <p className='text-gray-300 mb-4'>"{testimonial.quote}"</p>
              <div className='flex items-center'>
                <Image
                  src={testimonial.image || "/person-1.jpeg"}
                  alt={testimonial.author}
                  width={50}
                  height={50}
                  className='rounded-full mr-4'
                />
                <div>
                  <p className='font-bold text-white'>{testimonial.author}</p>
                  <p className='text-gray-400'>{testimonial.position}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
