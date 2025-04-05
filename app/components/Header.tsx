"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.header
      className='sticky top-0 z-50 bg-background/80 backdrop-blur-md'
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav
        className='mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8'
        aria-label='Global'
      >
        <div className='flex lg:flex-1'>
          <Link href='/' className='-m-1.5 p-1.5'>
            <span className='sr-only'>Kölner Inklusionstaxi</span>
            <div className='flex items-center'>
              <span className='text-xl font-bold text-yellow-500'>
                Kölner <span className='text-blue-600'>Inklusionstaxi</span>
              </span>
            </div>
          </Link>
        </div>
        <div className='flex gap-x-12'>
          <Link
            href='#services'
            className='text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors'
            onClick={(e) => scrollToSection(e, "services")}
          >
            Leistungen
          </Link>
          <Link
            href='#about'
            className='text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors'
            onClick={(e) => scrollToSection(e, "about")}
          >
            Über uns
          </Link>
          <Link
            href='#contact'
            className='text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors'
            onClick={(e) => scrollToSection(e, "contact")}
          >
            Kontakt
          </Link>
        </div>
        <div className='flex flex-1 justify-end items-center gap-4'>
          <a
            href='tel:+4917622919053'
            className='text-sm font-semibold text-foreground hover:text-primary transition-colors flex items-center'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-5 h-5 mr-2'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z'
              />
            </svg>
            0176 22919053
          </a>
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className='rounded-full p-2 bg-primary/10 text-primary hover:bg-primary/20 transition-colors'
            >
              {theme === "dark" ? (
                <SunIcon className='h-5 w-5' />
              ) : (
                <MoonIcon className='h-5 w-5' />
              )}
            </button>
          )}
        </div>
      </nav>
    </motion.header>
  );
}
