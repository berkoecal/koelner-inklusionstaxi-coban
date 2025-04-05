"use client";

import { motion } from "framer-motion";

export default function ServiceHighlight() {
  return (
    <section className='bg-background py-20'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-center'
        >
          <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6'>
            Mobilität für Alle
          </h2>
          <p className='text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto'>
            Wir glauben, dass Mobilität ein Grundrecht ist. Unser Ziel ist es, Menschen mit
            Behinderungen die gleiche Freiheit und Unabhängigkeit zu ermöglichen wie allen anderen.
          </p>
          <motion.div
            className='mt-10 flex justify-center gap-4'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <a
              href='#contact'
              className='apple-button inline-flex items-center bg-yellow-500 hover:bg-yellow-600 text-black'
            >
              Jetzt anfragen
              <svg
                className='w-5 h-5 ml-2'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M14 5l7 7m0 0l-7 7m7-7H3'
                />
              </svg>
            </a>
            <a
              href='tel:+4917622919053'
              className='apple-button inline-flex items-center bg-yellow-500 hover:bg-yellow-600 text-black'
            >
              0176 22919053
              <svg
                className='w-5 h-5 ml-2'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
