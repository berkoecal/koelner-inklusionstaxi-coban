import Link from "next/link";

export const metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung und Cookie-Richtlinien unserer Website",
};

export default function Datenschutz() {
  return (
    <div className='container mx-auto px-4 py-12 max-w-4xl'>
      <h1 className='text-3xl font-bold mb-8'>Datenschutzerklärung</h1>

      <div className='space-y-8'>
        <section>
          <h2 className='text-2xl font-semibold mb-4'>1. Allgemeine Informationen</h2>
          <p className='mb-4'>
            Wir freuen uns über Ihr Interesse an unserer Website. Der Schutz Ihrer Privatsphäre ist
            für uns sehr wichtig. Nachfolgend informieren wir Sie ausführlich über den Umgang mit
            Ihren Daten.
          </p>
        </section>

        <section>
          <h2 className='text-2xl font-semibold mb-4'>2. Verantwortliche Stelle</h2>
          <p className='mb-4'>Verantwortlich für die Datenverarbeitung auf dieser Website ist:</p>
        </section>

        <section className='mb-8'>
          <h2 className='text-xl font-semibold mb-4'>1. Datenschutz auf einen Blick</h2>
          <h3 className='text-lg font-medium mb-2'>Allgemeine Hinweise</h3>
          <p className='mb-4'>
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
            personenbezogenen Daten passiert, wenn Sie unsere Website besuchen. Personenbezogene
            Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text
            aufgeführten Datenschutzerklärung.
          </p>

          <h3 className='text-lg font-medium mb-2'>Datenerfassung auf unserer Website</h3>
          <p className='mb-4'>
            <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong>
            <br />
            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen
            Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
          </p>

          <p className='mb-4'>
            <strong>Wie erfassen wir Ihre Daten?</strong>
            <br />
            Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann
            es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
          </p>

          <p className='mb-4'>
            Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst.
            Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit
            des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie unsere
            Website betreten.
          </p>

          <p className='mb-4'>
            <strong>Wofür nutzen wir Ihre Daten?</strong>
            <br />
            Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu
            gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
          </p>

          <p className='mb-4'>
            <strong>Welche Rechte haben Sie bezüglich Ihrer Daten?</strong>
            <br />
            Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft, Empfänger und Zweck
            Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht,
            die Berichtigung, Sperrung oder Löschung dieser Daten zu verlangen. Hierzu sowie zu
            weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter der im Impressum
            angegebenen Adresse an uns wenden. Des Weiteren steht Ihnen ein Beschwerderecht bei der
            zuständigen Aufsichtsbehörde zu.
          </p>
        </section>

        <section className='mb-8'>
          <h2 className='text-xl font-semibold mb-4'>
            2. Allgemeine Hinweise und Pflichtinformationen
          </h2>
          <h3 className='text-lg font-medium mb-2'>Datenschutz</h3>
          <p className='mb-4'>
            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir
            behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen
            Datenschutzvorschriften sowie dieser Datenschutzerklärung.
          </p>

          <p className='mb-4'>
            Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben.
            Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können.
            Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir
            sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
          </p>

          <p className='mb-4'>
            Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation
            per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem
            Zugriff durch Dritte ist nicht möglich.
          </p>
        </section>

        <section className='mb-8'>
          <h2 className='text-xl font-semibold mb-4'>3. Datenerfassung auf unserer Website</h2>
          <h3 className='text-lg font-medium mb-2'>Cookies</h3>
          <p className='mb-4'>
            Die Internetseiten verwenden teilweise so genannte Cookies. Cookies richten auf Ihrem
            Rechner keinen Schaden an und enthalten keine Viren. Cookies dienen dazu, unser Angebot
            nutzerfreundlicher, effektiver und sicherer zu machen. Cookies sind kleine Textdateien,
            die auf Ihrem Rechner abgelegt werden und die Ihr Browser speichert.
          </p>

          <p className='mb-4'>
            Die meisten der von uns verwendeten Cookies sind so genannte "Session-Cookies". Sie
            werden nach Ende Ihres Besuchs automatisch gelöscht. Andere Cookies bleiben auf Ihrem
            Endgerät gespeichert bis Sie diese löschen. Diese Cookies ermöglichen es uns, Ihren
            Browser beim nächsten Besuch wiederzuerkennen.
          </p>

          <p className='mb-4'>
            Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert
            werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte
            Fälle oder generell ausschließen sowie das automatische Löschen der Cookies beim
            Schließen des Browser aktivieren. Bei der Deaktivierung von Cookies kann die
            Funktionalität dieser Website eingeschränkt sein.
          </p>
        </section>
      </div>

      <div className='mt-12'>
        <Link href='/' className='text-primary hover:underline'>
          Zurück zur Startseite
        </Link>
      </div>
    </div>
  );
}
