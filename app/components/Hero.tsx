"use client";

import { motion } from "framer-motion";
import Image from "next/image";
export default function Hero() {
  return (
    <div className='relative isolate overflow-hidden bg-background'>
      <div className='mx-auto max-w-7xl px-6 py-20 lg:flex lg:items-center lg:gap-x-10 lg:px-8'>
        <div className='mx-auto max-w-2xl lg:mx-0 lg:max-w-lg lg:flex-shrink-0'>
          <motion.h1
            className='mt-10 text-4xl font-bold tracking-tight text-foreground sm:text-6xl'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className='text-gradient'>Kölner Inklusionstaxi</span>
          </motion.h1>
          <motion.p
            className='mt-6 text-lg leading-8 text-muted-foreground'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Spezialisierter Taxiservice für Menschen mit Behinderungen. Sicher, zuverlässig und
            barrierefrei durch den Alltag.
          </motion.p>
          <motion.div
            className='mt-10 flex items-center gap-x-6'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a
              href='#contact'
              className='apple-button bg-yellow-500 hover:bg-yellow-600 text-black'
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Kontaktieren
            </a>
            <a
              href='#services'
              className='text-sm font-semibold leading-6 text-foreground'
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Unsere Leistungen <span aria-hidden='true'>→</span>
            </a>
          </motion.div>
        </div>
        <motion.div
          className='mx-auto mt-16 lg:mt-0'
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className='relative flex flex-col gap-6'>
            {/* <Image
              src='/cobancologne_02.webp'
              alt='Barrierefreies Taxi mit Rollstuhlrampe'
              width={600}
              height={600}
              className='w-[500px] rounded-2xl shadow-xl ring-1 ring-gray-900/10'
            /> */}

            <div className='w-[500px] rounded-2xl shadow-xl overflow-hidden ring-1 ring-gray-900/10'>
              <iframe
                width='550'
                height='350'
                src='https://www.youtube.com/embed/2aUXX_d4LBo'
                title='Kölner Inklusionstaxi Video'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
                className='w-full'
              ></iframe>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
