"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

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
            <span className='text-gradient'>Kölner Rollstuhltaxi</span>
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
          className='mx-auto mt-16 flex-1 lg:mt-0'
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

            <VideoSlideshow />
          </div>
        </motion.div>
      </div>

      {/* Brand Banner Section */}
      <div className='py-12 bg-muted/30'>
        <div className='max-w-7xl mx-auto px-6 lg:px-8'>
          <h2 className='text-center text-xl md:text-2xl lg:text-3xl font-semibold text-muted-foreground mb-8'>
            Bekannt aus
          </h2>
          <div className='overflow-hidden'>
            <div className='flex space-x-16 logos-slide'>
              {[
                {
                  name: "WDR",
                  logo: "./logos/WDR_Dachmarke.png",
                  alt: "WDR Logo",
                  size: "medium",
                  type: "image",
                },
                {
                  name: "SoVD",
                  logo: "./logos/SoVD.png",
                  alt: "SoVD Logo",
                  size: "medium",
                  type: "image",
                },
                {
                  name: "Taxiruf Koeln",
                  logo: "./logos/logo-taxiruf-koeln.png",
                  alt: "Taxiruf Koeln Logo",
                  size: "large",
                  type: "image",
                },
                {
                  name: "Kölner Stadt-Anzeiger",
                  logo: "./logos/koelner-stadtanzeiger.png",
                  alt: "Kölner Stadt-Anzeiger Logo",
                  size: "large",
                  type: "image",
                },
                {
                  name: "AMF",
                  logo: "./logos/AMF.webp",
                  alt: "AMF Logo",
                  size: "large",
                  type: "image",
                },
              ].map((brand) => (
                <div
                  key={brand.name}
                  className='flex flex-shrink-0 items-center justify-center grayscale hover:grayscale-0 transition-all duration-300'
                >
                  {brand.type === "image" ? (
                    <Image
                      src={brand.logo}
                      alt={brand.alt}
                      width={brand.size === "large" ? 400 : 250}
                      height={brand.size === "large" ? 200 : 125}
                      className={`object-contain ${brand.size === "large" ? "h-32" : "h-24"}`}
                    />
                  ) : (
                    <span
                      className={`font-serif font-semibold ${
                        brand.size === "large" ? "text-4xl" : "text-3xl"
                      }`}
                    >
                      {brand.name}
                    </span>
                  )}
                </div>
              ))}
              {/* Duplicate the logos to create a continuous loop */}
              {[
                {
                  name: "WDR-2",
                  logo: "./logos/WDR_Dachmarke.png",
                  alt: "WDR Logo",
                  size: "medium",
                  type: "image",
                },
                {
                  name: "SoVD-2",
                  logo: "./logos/SoVD.png",
                  alt: "SoVD Logo",
                  size: "medium",
                  type: "image",
                },
                {
                  name: "Taxiruf Koeln-2",
                  logo: "./logos/logo-taxiruf-koeln.png",
                  alt: "Taxiruf Koeln Logo",
                  size: "large",
                  type: "image",
                },
                {
                  name: "Kölner Stadt-Anzeiger-2",
                  logo: "./logos/koelner-stadtanzeiger.png",
                  alt: "Kölner Stadt-Anzeiger Logo",
                  size: "large",
                  type: "image",
                },
                {
                  name: "AMF-2",
                  logo: "./logos/AMF.webp",
                  alt: "AMF Logo",
                  size: "large",
                  type: "image",
                },
              ].map((brand) => (
                <div
                  key={brand.name}
                  className='flex flex-shrink-0 items-center justify-center grayscale hover:grayscale-0 transition-all duration-300'
                >
                  {brand.type === "image" ? (
                    <Image
                      src={brand.logo}
                      alt={brand.alt}
                      width={brand.size === "large" ? 400 : 250}
                      height={brand.size === "large" ? 200 : 125}
                      className={`object-contain ${brand.size === "large" ? "h-32" : "h-24"}`}
                    />
                  ) : (
                    <span
                      className={`font-serif font-semibold ${
                        brand.size === "large" ? "text-4xl" : "text-3xl"
                      }`}
                    >
                      {brand.name}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .logos-slide {
          animation: slide 30s linear infinite;
          width: max-content;
        }

        .logos-slide:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}

// Video Slideshow Component
function VideoSlideshow() {
  const [currentVideoIndex, setCurrentVideoIndex] = React.useState(0);

  const videos = [
    {
      id: "2aUXX_d4LBo",
      title: "Kölner Inklusionstaxi Video",
    },
    {
      id: "Xq2gYXZ6eb4",
      title: "Rollstuhltaxi in Aktion",
    },
    {
      id: "77MJIP1takI",
      title: "Barrierefreier Transport",
    },
  ];

  const nextVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length);
  };

  return (
    <div className='relative w-full md:w-[500px] lg:w-[600px]'>
      <div className='rounded-2xl shadow-xl overflow-hidden ring-1 ring-gray-900/10'>
        <iframe
          width='100%'
          height='350'
          src={`https://www.youtube.com/embed/${videos[currentVideoIndex].id}`}
          title={videos[currentVideoIndex].title}
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
          className='w-full'
        ></iframe>
      </div>

      {/* Navigation controls */}
      <div className='absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4 pointer-events-none'>
        <button
          onClick={prevVideo}
          className='bg-black/50 hover:bg-black/70 text-white rounded-full p-2 focus:outline-none pointer-events-auto'
          aria-label='Vorheriges Video'
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
          onClick={nextVideo}
          className='bg-black/50 hover:bg-black/70 text-white rounded-full p-2 focus:outline-none pointer-events-auto'
          aria-label='Nächstes Video'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
          </svg>
        </button>
      </div>

      {/* Video indicator dots */}
      <div className='absolute bottom-4 left-0 right-0 flex justify-center gap-2 pointer-events-none'>
        {videos.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentVideoIndex(index)}
            className={`h-2 w-2 rounded-full pointer-events-auto ${
              index === currentVideoIndex ? "bg-yellow-500" : "bg-white/50"
            }`}
            aria-label={`Video ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
