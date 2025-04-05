"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";

const timelineEvents = [
  {
    year: 2016,
    title: "Gründung von Taxi Coban",
    description:
      "Start des ersten Inklusionstaxis in Köln mit dem Fokus auf einfühlsamen und vertrauensvollen Service.",
    details:
      "Seit 2016 bietet Taxi Coban als erstes Inklusionstaxi in Köln einen auf den Inklusionsgedanken voll eingestellten Service. Gegründet von Ibrahim Coban, einem echten Kölschen Jung mit Migrationshintergrund, der seit 10 Jahren als passionierter Taxifahrer tätig ist.",
  },
  {
    year: 2018,
    title: "Erweiterung des Serviceangebots",
    description: "Einführung zusätzlicher Alltagshilfen wie Einkaufs- und Medikamentenservice.",
    details:
      "Um den oft anstrengenden Alltag für Kunden so angenehm wie möglich zu gestalten, wurden neben den Personenfahrten auch andere Dienstleistungen wie das Abholen von Einkäufen oder Medikamenten ins Angebot aufgenommen.",
  },
  {
    year: 2019,
    title: "Anschaffung des VW-Caddy Maxi",
    description: "Investition in ein neues, TÜV-geprüftes Fahrzeug für barrierefreie Mobilität.",
    details:
      "Einführung eines speziell ausgestatteten VW-Caddy Maxi, der für jede Art von Rollstuhl geeignet ist und nach neuesten Sicherheitsstandards ausgestattet wurde. Das Fahrzeug kann flexibel als Siebensitzer oder mit vier Plätzen plus Rollstuhl genutzt werden.",
  },
  {
    year: 2020,
    title: "Kooperationen mit lokalen Organisationen",
    description:
      "Beginn der Zusammenarbeit mit dem Bürgerverein Kölner Eigelstein e.V. und dem Sozialverband SOVD.",
    details:
      "Durch strategische Partnerschaften mit dem Bürgerverein Kölner Eigelstein e.V. und dem Sozialverband SOVD konnte das Netzwerk erweitert und mehr Menschen mit Mobilitätseinschränkungen erreicht werden.",
  },
  {
    year: 2021,
    title: "Professionalisierung durch Spezialschulung",
    description:
      "Teilnahme an einer Schulung der BG Verkehr zum Arbeitsschutz bei der Beförderung mobilitätseingeschränkter Personen.",
    details:
      "Im Oktober 2021 nahm Ibrahim Coban an einer Schulung der BG Verkehr teil, um seine Kompetenz im Bereich der Beförderung mobilitätseingeschränkter Personen weiter zu professionalisieren und höchste Sicherheitsstandards zu gewährleisten.",
  },
  {
    year: 2022,
    title: "Etablierung der Mobilitätsunterstützung vom Fahrzeug bis hin zur Wohnungstür",
    description:
      "Wir haben die Mobilitätsunterstützung mit Treppensteiger und Liften eingeführt, um Kunden, vom Fahrzeug bis hin zur Wohnungstür begleiten zu können.",
    details:
      "Für Sie als Nutzer bedeutet dies einen äußerst angenehmen und erschütterungsarmen Steigvorgang. Wir begleiten Sie dabei, die Treppen zu nehmen und die Treppensteiger zu bedienen.",
  },
];

const FlowerIcon = ({ progress }: { progress: number }) => (
  <svg
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className='w-6 h-6'
    style={{ transform: `scale(${progress})` }}
  >
    <path
      d='M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z'
      stroke='currentColor'
      strokeWidth='2'
    />
    <path
      d='M12 8C12 8 14 10 14 12C14 14 12 16 12 16C12 16 10 14 10 12C10 10 12 8 12 8Z'
      stroke='currentColor'
      strokeWidth='2'
    />
  </svg>
);

export default function Timeline() {
  const [expandedEvent, setExpandedEvent] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section ref={containerRef} className='py-20 bg-background overflow-hidden'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          className='text-center mb-12'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className='text-3xl font-bold text-foreground sm:text-4xl'>Unsere Geschichte</h2>
          <p className='mt-4 text-lg text-muted-foreground'>
            Die Entwicklung vom Kölner Inklusionstaxi im Laufe der Jahre
          </p>
        </motion.div>

        <div className='relative'>
          {/* Vertical line */}
          <motion.div
            className='absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-primary/20'
            style={{ scaleY: scaleX }}
          />

          {/* Flower icon */}
          <motion.div
            className='sticky top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-primary'
            style={{ y: useTransform(scrollYProgress, [0, 1], [0, 100]) }}
          >
            <FlowerIcon progress={useTransform(scrollYProgress, [0, 1], [0.5, 1]) as any} />
          </motion.div>

          {timelineEvents.map((event, index) => (
            <TimelineEvent
              key={event.year}
              event={event}
              index={index}
              isExpanded={expandedEvent === index}
              onToggle={() => setExpandedEvent(expandedEvent === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineEvent({
  event,
  index,
  isExpanded,
  onToggle,
}: {
  event: (typeof timelineEvents)[0];
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      className={`mb-8 flex justify-between items-center w-full ${
        index % 2 === 0 ? "flex-row-reverse" : ""
      }`}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
    >
      <div className='w-5/12' />
      <div className='z-20'>
        <div className='flex items-center justify-center w-8 h-8 bg-primary rounded-full'>
          <div className='w-3 h-3 bg-background rounded-full' />
        </div>
      </div>
      <motion.div
        className='w-5/12 cursor-pointer'
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onToggle}
      >
        <div className='p-4 bg-background rounded-lg shadow-md border border-primary/10'>
          <span className='font-bold text-primary'>{event.year}</span>
          <h3 className='text-lg font-semibold mb-1'>{event.title}</h3>
          <p className='text-muted-foreground'>{event.description}</p>
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className='overflow-hidden'
          >
            <p className='mt-2 text-sm text-muted-foreground'>{event.details}</p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
