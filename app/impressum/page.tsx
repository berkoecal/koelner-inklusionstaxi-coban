import Link from "next/link";

export default function Impressum() {
  return (
    <div className='container max-w-4xl py-12'>
      <h1 className='text-3xl font-bold mb-6'>Impressum</h1>

      <section className='mb-8'>
        <h2 className='text-xl font-semibold mb-4'>Angaben gemäß § 5 TMG</h2>
        <p className='mb-2'>Kölner Inklusionstaxi GmbH</p>
        <p className='mb-2'>Musterstraße 123</p>
        <p className='mb-2'>50667 Köln</p>
      </section>

      <section className='mb-8'>
        <h2 className='text-xl font-semibold mb-4'>Kontakt</h2>
        <p className='mb-2'>Telefon: +49 (0) 221 12345678</p>
        <p className='mb-2'>E-Mail: info@koelner-inklusionstaxi.de</p>
      </section>

      <section className='mb-8'>
        <h2 className='text-xl font-semibold mb-4'>Vertretungsberechtigte</h2>
        <p className='mb-2'>Geschäftsführer: Max Mustermann</p>
      </section>

      <section className='mb-8'>
        <h2 className='text-xl font-semibold mb-4'>Registereintrag</h2>
        <p className='mb-2'>Handelsregister: Amtsgericht Köln</p>
        <p className='mb-2'>Registernummer: HRB 12345</p>
      </section>

      <section className='mb-8'>
        <h2 className='text-xl font-semibold mb-4'>Umsatzsteuer-ID</h2>
        <p className='mb-2'>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:</p>
        <p className='mb-2'>DE123456789</p>
      </section>

      <section className='mb-8'>
        <h2 className='text-xl font-semibold mb-4'>
          Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
        </h2>
        <p className='mb-2'>Max Mustermann</p>
        <p className='mb-2'>Musterstraße 123</p>
        <p className='mb-2'>50667 Köln</p>
      </section>

      <div className='mt-12'>
        <Link href='/' className='text-primary hover:underline'>
          Zurück zur Startseite
        </Link>
      </div>
    </div>
  );
}
