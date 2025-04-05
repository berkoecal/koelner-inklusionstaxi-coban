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
        <div className='flex flex-1 justify-end'>
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
