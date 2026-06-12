import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Datenschutzerklärung – ArealWerk",
  description:
    "Informationen zum Datenschutz und zur Verarbeitung personenbezogener Daten bei ArealWerk.",
  robots: { index: true, follow: true },
};

export default function DatenschutzPage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <article className="container-page py-16 sm:py-20">
          <div className="mx-auto max-w-3xl">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-brand-700 transition-colors duration-200 hover:text-brand-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.25"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <path d="M19 12H5" />
                <path d="m12 19-7-7 7-7" />
              </svg>
              Zurück zur Startseite
            </Link>

            <h1 className="mt-6 font-heading text-4xl font-semibold tracking-tight">
              Datenschutzerklärung
            </h1>
            <p className="mt-3 text-sm text-ink-500">
              Stand: {new Date().toLocaleDateString("de-DE", {
                year: "numeric",
                month: "long",
              })}
            </p>

            <section className="prose prose-slate mt-10 max-w-none">
              <h2 className="font-heading text-xl font-semibold">
                1. Verantwortlicher
              </h2>
              <p className="mt-3 leading-relaxed text-ink-700">
                Verantwortlicher im Sinne der Datenschutz-Grundverordnung
                (DSGVO) und anderer nationaler Datenschutzgesetze sowie
                sonstiger datenschutzrechtlicher Bestimmungen ist:
              </p>
              <p className="mt-3 leading-relaxed text-ink-700">
                <strong>BITTE ERSETZEN:</strong> Name / Firma, Anschrift,
                Kontakt – siehe&nbsp;
                <Link
                  href="/impressum"
                  className="text-brand-700 underline-offset-2 hover:underline"
                >
                  Impressum
                </Link>
                .
              </p>

              <h2 className="mt-10 font-heading text-xl font-semibold">
                2. Allgemeines zur Datenverarbeitung
              </h2>
              <p className="mt-3 leading-relaxed text-ink-700">
                Wir verarbeiten personenbezogene Daten unserer Nutzerinnen
                und Nutzer grundsätzlich nur, soweit dies zur Bereitstellung
                einer funktionsfähigen Website sowie unserer Inhalte und
                Leistungen erforderlich ist. Die Verarbeitung erfolgt
                regelmäßig nur nach Einwilligung der Nutzer oder in den
                Fällen, in denen eine vorherige Einholung einer Einwilligung
                aus tatsächlichen Gründen nicht möglich ist und die
                Verarbeitung der Daten durch gesetzliche Vorschriften
                gestattet ist.
              </p>

              <h2 className="mt-10 font-heading text-xl font-semibold">
                3. Bereitstellung der Website &amp; Server-Logfiles
              </h2>
              <p className="mt-3 leading-relaxed text-ink-700">
                Bei jedem Aufruf unserer Website erfasst unser Hosting-Anbieter
                automatisch technische Informationen, die Ihr Browser
                übermittelt. Dazu zählen insbesondere:
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-6 text-ink-700">
                <li>anonymisierte IP-Adresse</li>
                <li>Datum und Uhrzeit der Anfrage</li>
                <li>aufgerufene Seite</li>
                <li>verwendeter Browser und Betriebssystem</li>
                <li>Referrer-URL</li>
              </ul>
              <p className="mt-3 leading-relaxed text-ink-700">
                Rechtsgrundlage ist Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;f DSGVO
                (berechtigtes Interesse an einem stabilen, sicheren und
                technisch einwandfreien Betrieb der Website).
              </p>

              <h2 className="mt-10 font-heading text-xl font-semibold">
                4. Hosting durch Vercel
              </h2>
              <p className="mt-3 leading-relaxed text-ink-700">
                Diese Website wird bei Vercel Inc., 340 S Lemon Ave #4133,
                Walnut, CA 91789, USA gehostet. Beim Aufruf unserer Website
                werden technisch notwendige Daten an Vercel übertragen, um
                die Website auszuliefern. Vercel verarbeitet diese Daten
                gemäß seiner&nbsp;
                <a
                  href="https://vercel.com/legal/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-700 underline-offset-2 hover:underline"
                >
                  Datenschutzerklärung
                </a>
                . Rechtsgrundlage ist Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;f
                DSGVO.
              </p>

              <h2 className="mt-10 font-heading text-xl font-semibold">
                5. Reichweitenmessung mit Vercel Analytics
              </h2>
              <p className="mt-3 leading-relaxed text-ink-700">
                Wir setzen auf dieser Website&nbsp;
                <strong>Vercel Web Analytics</strong> der Vercel Inc. ein,
                um die Nutzung unserer Website statistisch auszuwerten. Vercel
                Analytics arbeitet&nbsp;
                <strong>cookiefrei und privacy-friendly</strong>: Es werden
                keine Cookies gesetzt und es findet kein Cross-Site- oder
                Cross-Device-Tracking statt.
              </p>
              <p className="mt-3 leading-relaxed text-ink-700">
                Verarbeitet werden ausschließlich aggregierte und
                anonymisierte technische Informationen, beispielsweise:
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-6 text-ink-700">
                <li>aufgerufene Seite (URL-Pfad)</li>
                <li>Referrer (woher der Besucher kommt)</li>
                <li>Land (auf Basis der IP-Adresse, nicht gespeichert)</li>
                <li>Gerätetyp und Browser (grobe Kategorien)</li>
                <li>
                  benutzerdefinierte Ereignisse, z.&nbsp;B. der Klick auf den
                  Button „Termin anfragen“ (Event:&nbsp;
                  <code className="rounded bg-ink-100 px-1 py-0.5 text-sm">
                    booking_intent
                  </code>
                  )
                </li>
              </ul>
              <p className="mt-3 leading-relaxed text-ink-700">
                Es werden keine personenbezogenen Daten dauerhaft gespeichert
                und keine eindeutigen Besucher-IDs erzeugt. Eine Identifikation
                einzelner Personen ist nicht möglich.
              </p>
              <p className="mt-3 leading-relaxed text-ink-700">
                Rechtsgrundlage ist Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;f DSGVO
                (berechtigtes Interesse an einer datenschutzfreundlichen
                Reichweitenmessung zur Verbesserung unseres Angebots).
                Weitere Informationen finden Sie in der&nbsp;
                <a
                  href="https://vercel.com/legal/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-700 underline-offset-2 hover:underline"
                >
                  Datenschutzerklärung von Vercel
                </a>
                .
              </p>

              <h2 className="mt-10 font-heading text-xl font-semibold">
                6. Cookies
              </h2>
              <p className="mt-3 leading-relaxed text-ink-700">
                Diese Website setzt&nbsp;
                <strong>keine Cookies</strong> für Tracking-, Analyse- oder
                Marketingzwecke ein. Es werden auch keine vergleichbaren
                Technologien (z.&nbsp;B. Local Storage) zu Tracking-Zwecken
                genutzt.
              </p>

              <h2 className="mt-10 font-heading text-xl font-semibold">
                7. Ihre Rechte
              </h2>
              <p className="mt-3 leading-relaxed text-ink-700">
                Sie haben uns gegenüber folgende Rechte hinsichtlich der Sie
                betreffenden personenbezogenen Daten:
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-6 text-ink-700">
                <li>Recht auf Auskunft (Art.&nbsp;15 DSGVO)</li>
                <li>Recht auf Berichtigung (Art.&nbsp;16 DSGVO)</li>
                <li>Recht auf Löschung (Art.&nbsp;17 DSGVO)</li>
                <li>
                  Recht auf Einschränkung der Verarbeitung (Art.&nbsp;18
                  DSGVO)
                </li>
                <li>Recht auf Datenübertragbarkeit (Art.&nbsp;20 DSGVO)</li>
                <li>Recht auf Widerspruch (Art.&nbsp;21 DSGVO)</li>
                <li>
                  Recht auf Widerruf einer erteilten Einwilligung (Art.&nbsp;7
                  Abs.&nbsp;3 DSGVO)
                </li>
              </ul>
              <p className="mt-3 leading-relaxed text-ink-700">
                Zudem haben Sie das Recht, sich bei einer
                Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer
                personenbezogenen Daten zu beschweren (Art.&nbsp;77 DSGVO).
              </p>

              <h2 className="mt-10 font-heading text-xl font-semibold">
                8. Änderungen dieser Datenschutzerklärung
              </h2>
              <p className="mt-3 leading-relaxed text-ink-700">
                Wir behalten uns vor, diese Datenschutzerklärung anzupassen,
                damit sie stets den aktuellen rechtlichen Anforderungen
                entspricht oder um Änderungen unserer Leistungen umzusetzen,
                z.&nbsp;B. bei der Einführung neuer Services. Für Ihren
                erneuten Besuch gilt dann die neue Datenschutzerklärung.
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
