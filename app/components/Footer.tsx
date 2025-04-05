import Link from "next/link";
import { Instagram, Facebook, X } from "lucide-react";

export default function Footer() {
  return (
    <footer className='bg-background border-t border-border'>
      <div className='mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8'>
        <nav
          className='-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12'
          aria-label='Footer'
        >
          {[
            { name: "Über uns", href: "/#about" },
            { name: "Leistungen", href: "/#services" },
            { name: "Kontakt", href: "/#contact" },
            { name: "Datenschutz", href: "/datenschutz" },
            { name: "Impressum", href: "/impressum" },
          ].map((item) => (
            <div key={item.name} className='pb-6'>
              <Link
                href={item.href}
                className='text-sm leading-6 text-muted-foreground hover:text-foreground'
              >
                {item.name}
              </Link>
            </div>
          ))}
        </nav>

        {/* Social Media Icons */}
        <div className='mt-8 flex justify-center space-x-6'>
          <Link
            href='https://instagram.com/kolner_inklusionstaxi'
            target='_blank'
            rel='noopener noreferrer'
            className='text-muted-foreground hover:text-foreground'
          >
            <span className='sr-only'>Instagram</span>
            <Instagram className='h-6 w-6' />
          </Link>
          <Link
            href='https://facebook.com/kolnerinklusionstaxi'
            target='_blank'
            rel='noopener noreferrer'
            className='text-muted-foreground hover:text-foreground'
          >
            <span className='sr-only'>Facebook</span>
            <Facebook className='h-6 w-6' />
          </Link>
          <Link
            href='https://x.com/kolnerinklusion'
            target='_blank'
            rel='noopener noreferrer'
            className='text-muted-foreground hover:text-foreground'
          >
            <span className='sr-only'>X</span>
            <X className='h-6 w-6' />
          </Link>
        </div>

        <p className='mt-10 text-center text-sm leading-5 text-muted-foreground'>
          &copy; {new Date().getFullYear()} Kölner Rollstuhltaxi. Alle Rechte vorbehalten.
        </p>
      </div>
    </footer>
  );
}
