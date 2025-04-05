"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useAnimation, useMotionValue } from "framer-motion";

const features = [
  {
    title: "Barrierefreie Fahrzeuge",
    description:
      "Speziell ausgestattete Fahrzeuge mit Rampen und Liftsystemen für Rollstuhlfahrer.",
    icon: "♿",
  },
  {
    title: "Qualifiziertes Personal",
    description: "Geschulte Fahrer mit Erfahrung im Umgang mit Menschen mit Behinderungen.",
    icon: "👨‍⚕️",
  },
  {
    title: "24/7 Verfügbarkeit",
    description: "Rund um die Uhr für Sie da - auch für Notfälle und kurzfristige Fahrten.",
    icon: "🕒",
  },
  {
    title: "Kassenabrechnung",
    description: "Direkte Abrechnung mit Krankenkassen für berechtigte Fahrten möglich.",
    icon: "💳",
  },
  {
    title: "Höchste Sicherheit",
    description: "Modernste Sicherheitssysteme und regelmäßige Fahrzeugwartung.",
    icon: "🛡️",
  },
];

export default function FeatureCarousel() {
  return (
    <div className='py-20 bg-gradient-to-b from-background to-secondary/20'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-3xl font-bold text-center mb-12 text-foreground'>Unsere Vorteile</h2>

        <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4'>
          {features.map((feature, index) => (
            <div
              key={index}
              className='h-[250px] p-6 bg-background rounded-2xl shadow-lg flex flex-col justify-between hover-lift transition-all duration-300 ease-in-out border-2 border-transparent hover:border-primary/10'
            >
              <div>
                <div className='text-3xl mb-3'>{feature.icon}</div>
                <h3 className='text-lg font-semibold mb-2 text-foreground'>{feature.title}</h3>
                <p className='text-sm text-muted-foreground'>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
