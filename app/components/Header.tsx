"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { MoonIcon, SunIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
    setMobileMenuOpen(false); // Close mobile menu after clicking a link
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

        {/* Mobile menu button */}
        <div className='flex lg:hidden'>
          <button
            type='button'
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground'
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className='sr-only'>Open main menu</span>
            {mobileMenuOpen ? (
              <XMarkIcon className='h-6 w-6' aria-hidden='true' />
            ) : (
              <Bars3Icon className='h-6 w-6' aria-hidden='true' />
            )}
          </button>
        </div>

        {/* Desktop navigation */}
        <div className='hidden lg:flex gap-x-12'>
          <Link
            href='#services'
            className='text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors'
            onClick={(e) => scrollToSection(e, "services")}
          >
            Leistungen
          </Link>
          <Link
            href='#extra-services'
            className='text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors'
            onClick={(e) => scrollToSection(e, "extra-services")}
          >
            Extra Services
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

        <div className='hidden lg:flex flex-1 justify-end items-center gap-4'>
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
          <a
            href='https://wa.me/4917622919053'
            target='_blank'
            rel='noopener noreferrer'
            className='text-sm font-semibold text-green-500 hover:text-green-600 transition-colors'
            aria-label='WhatsApp Chat'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              className='w-5 h-5'
            >
              <path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z' />
            </svg>
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

        {/* Mobile quick actions */}
        <div className='flex lg:hidden items-center gap-2 ml-auto mr-4'>
          <a
            href='tel:+4917622919053'
            className='text-foreground hover:text-primary transition-colors'
            aria-label='Call us'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-5 h-5'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z'
              />
            </svg>
          </a>
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className='rounded-full p-1.5 bg-primary/10 text-primary hover:bg-primary/20 transition-colors'
            >
              {theme === "dark" ? (
                <SunIcon className='h-4 w-4' />
              ) : (
                <MoonIcon className='h-4 w-4' />
              )}
            </button>
          )}
        </div>
      </nav>

      {/* Mobile menu, show/hide based on menu state */}
      {mobileMenuOpen && (
        <div className='lg:hidden'>
          <div className='fixed inset-0 z-50'></div>
          <div className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
            <div className='mt-6 flow-root'>
              <div className='-my-6 divide-y divide-gray-500/10'>
                <div className='space-y-2 py-6'>
                  <Link
                    href='#services'
                    className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-foreground hover:bg-primary/10'
                    onClick={(e) => scrollToSection(e, "services")}
                  >
                    Leistungen
                  </Link>
                  <Link
                    href='#extra-services'
                    className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-foreground hover:bg-primary/10'
                    onClick={(e) => scrollToSection(e, "extra-services")}
                  >
                    Extra Services
                  </Link>
                  <Link
                    href='#about'
                    className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-foreground hover:bg-primary/10'
                    onClick={(e) => scrollToSection(e, "about")}
                  >
                    Über uns
                  </Link>
                  <Link
                    href='#contact'
                    className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-foreground hover:bg-primary/10'
                    onClick={(e) => scrollToSection(e, "contact")}
                  >
                    Kontakt
                  </Link>
                </div>
                <div className='py-6 flex items-center gap-4'>
                  <a
                    href='tel:+4917622919053'
                    className='text-base font-semibold text-foreground hover:text-primary transition-colors flex items-center'
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
                  <a
                    href='https://wa.me/4917622919053'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-green-500 hover:text-green-600 transition-colors'
                    aria-label='WhatsApp Chat'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                      className='w-5 h-5'
                    >
                      <path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z' />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </motion.header>
  );
}
