import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Impressum – ArealWerk",
  description: "Impressum und Anbieterkennzeichnung von ArealWerk.",
  robots: { index: true, follow: true },
};

export default function ImpressumPage() {
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
              Impressum
            </h1>
            <p className="mt-3 text-sm text-ink-500">
              Angaben gemäß § 5 TMG
            </p>

            <div className="mt-10 rounded-2xl border border-amber-300 bg-amber-50 p-5 text-sm text-amber-900">
              <p className="font-semibold uppercase tracking-wider">
                BITTE ERSETZEN
              </p>
              <p className="mt-1 text-amber-800">
                Die folgenden Angaben sind Platzhalter. Vor der Veröffentlichung
                müssen alle Felder durch die echten Anbieterdaten ersetzt
                werden.
              </p>
            </div>

            <section className="prose prose-slate mt-10 max-w-none">
              <h2 className="font-heading text-xl font-semibold">Anbieter</h2>
              <p className="mt-3 leading-relaxed text-ink-700">
                <strong>BITTE ERSETZEN: Vollständiger Name / Firmenname</strong>
                <br />
                BITTE ERSETZEN: Straße und Hausnummer
                <br />
                BITTE ERSETZEN: PLZ und Ort
                <br />
                BITTE ERSETZEN: Land
              </p>

              <h2 className="mt-10 font-heading text-xl font-semibold">
                Kontakt
              </h2>
              <p className="mt-3 leading-relaxed text-ink-700">
                Telefon: BITTE ERSETZEN
                <br />
                E-Mail: BITTE ERSETZEN
              </p>

              <h2 className="mt-10 font-heading text-xl font-semibold">
                Vertretungsberechtigte Person
              </h2>
              <p className="mt-3 leading-relaxed text-ink-700">
                BITTE ERSETZEN: Vor- und Nachname
              </p>

              <h2 className="mt-10 font-heading text-xl font-semibold">
                Umsatzsteuer-Identifikationsnummer
              </h2>
              <p className="mt-3 leading-relaxed text-ink-700">
                Umsatzsteuer-Identifikationsnummer gemäß § 27&nbsp;a
                Umsatzsteuergesetz: <br />
                BITTE ERSETZEN
              </p>

              <h2 className="mt-10 font-heading text-xl font-semibold">
                Registereintrag
              </h2>
              <p className="mt-3 leading-relaxed text-ink-700">
                BITTE ERSETZEN: Eintragung im Handels-/Vereins-/Genossenschafts-
                oder Partnerschaftsregister
                <br />
                Registergericht: BITTE ERSETZEN
                <br />
                Registernummer: BITTE ERSETZEN
              </p>

              <h2 className="mt-10 font-heading text-xl font-semibold">
                Verantwortlich für den Inhalt nach § 55 Abs.&nbsp;2 RStV
              </h2>
              <p className="mt-3 leading-relaxed text-ink-700">
                BITTE ERSETZEN: Vor- und Nachname
                <br />
                BITTE ERSETZEN: Anschrift
              </p>

              <h2 className="mt-10 font-heading text-xl font-semibold">
                Streitschlichtung
              </h2>
              <p className="mt-3 leading-relaxed text-ink-700">
                Die Europäische Kommission stellt eine Plattform zur
                Online-Streitbeilegung (OS) bereit:&nbsp;
                <a
                  href="https://ec.europa.eu/consumers/odr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-700 underline-offset-2 hover:underline"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
                . Unsere E-Mail-Adresse finden Sie oben im Impressum.
              </p>
              <p className="mt-3 leading-relaxed text-ink-700">
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
                vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>

              <h2 className="mt-10 font-heading text-xl font-semibold">
                Haftung für Inhalte
              </h2>
              <p className="mt-3 leading-relaxed text-ink-700">
                Als Diensteanbieter sind wir gemäß § 7 Abs.&nbsp;1 TMG für eigene
                Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter
                jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
                Informationen zu überwachen oder nach Umständen zu forschen,
                die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>

              <h2 className="mt-10 font-heading text-xl font-semibold">
                Haftung für Links
              </h2>
              <p className="mt-3 leading-relaxed text-ink-700">
                Unser Angebot enthält ggf. Links zu externen Websites Dritter,
                auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir
                für diese fremden Inhalte auch keine Gewähr übernehmen. Für
                die Inhalte der verlinkten Seiten ist stets der jeweilige
                Anbieter oder Betreiber der Seiten verantwortlich.
              </p>

              <h2 className="mt-10 font-heading text-xl font-semibold">
                Urheberrecht
              </h2>
              <p className="mt-3 leading-relaxed text-ink-700">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
                diesen Seiten unterliegen dem deutschen Urheberrecht. Die
                Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
                Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen
                der schriftlichen Zustimmung des jeweiligen Autors bzw.
                Erstellers.
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
