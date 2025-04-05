"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const ExtraServices = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      src: "./kranken-1.webp",
      alt: "Fahrer hilft einer Person mit Mobilitätseinschränkungen mit einem speziellen Treppensteiger",
    },
    {
      src: "./kranken-2.webp",
      alt: "Mobilitätsunterstützung im Wohnbereich",
    },
    {
      src: "./kranken-3.webp",
      alt: "Professionelle Betreuung während des Transports",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className='py-20 px-4 sm:px-6 lg:px-8 bg-gray-900'>
      <div className='container mx-auto'>
        <motion.h2
          className='text-5xl font-black mb-8 text-center text-white'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Extra Services
        </motion.h2>

        <div className='grid md:grid-cols-2 gap-12 items-center'>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className='bg-gray-700 p-6 rounded-lg overflow-hidden'
          >
            <h3 className='text-xl md:text-2xl font-bold mb-4 text-white'>
              Mobilitätsunterstützung im Haus
            </h3>
            <p className='text-gray-300 mb-4'>
              Wir verstehen, dass Transportbedürfnisse nicht immer an Ihrer Haustür enden. Deshalb
              bieten wir einen speziellen Service für Kunden mit Mobilitätseinschränkungen an.
            </p>
            <p className='text-gray-300 mb-4'>
              Unsere geschulten Fahrer sind mit speziellen Treppensteiger-Sitzen ausgestattet, die
              einen sicheren und komfortablen Transport auf Treppen innerhalb Ihres Zuhauses oder
              Wohngebäudes ermöglichen.
            </p>
            <ul className='list-disc pl-5 mb-4 text-gray-300'>
              <li>Professionell ausgebildete Mobilitätsassistenten</li>
              <li>Hochmoderne Treppensteiger-Ausrüstung</li>
              <li>Personalisierte Unterstützung für Ihre spezifischen Bedürfnisse</li>
              <li>Verfügbar als Zusatzleistung zu jedem Transportservice</li>
            </ul>
            <p className='text-gray-300 font-medium'>
              Kontaktieren Sie uns, um mehr über unsere speziellen Mobilitätshilfsdienste zu
              erfahren und wie wir Ihnen helfen können, Ihre gesamte Reise komfortabel und würdevoll
              zu gestalten.
            </p>
          </motion.div>

          <motion.div
            className='relative h-96 w-full max-w-full'
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className='absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg transform rotate-3'></div>
            <div className='absolute inset-0 bg-gray-800 rounded-lg transform -rotate-3 flex items-center justify-center overflow-hidden'>
              <div className='relative w-full h-full'>
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                      index === currentSlide ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <Image
                      src={slide.src}
                      alt={slide.alt}
                      className='w-full h-full object-cover opacity-70'
                      width={500}
                      height={400}
                      sizes='(max-width: 768px) 100vw, 50vw'
                    />
                  </div>
                ))}

                <div className='absolute inset-0 flex items-center justify-between p-4'>
                  <button
                    onClick={prevSlide}
                    className='bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 focus:outline-none'
                    aria-label='Vorheriges Bild'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-6 w-6'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M15 19l-7-7 7-7'
                      />
                    </svg>
                  </button>
                  <button
                    onClick={nextSlide}
                    className='bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 focus:outline-none'
                    aria-label='Nächstes Bild'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-6 w-6'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M9 5l7 7-7 7'
                      />
                    </svg>
                  </button>
                </div>

                <div className='absolute bottom-4 left-0 right-0 flex justify-center space-x-2'>
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 rounded-full ${
                        index === currentSlide ? "bg-white" : "bg-white bg-opacity-50"
                      }`}
                      aria-label={`Gehe zu Bild ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExtraServices;
