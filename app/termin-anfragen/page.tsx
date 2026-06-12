import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Termin anfragen – ArealWerk",
  description:
    "Aktuell sind alle Termine ausgebucht. Wir nehmen vorübergehend keine neuen Anfragen entgegen.",
  // Don't index this page — it's a transient "sold out" placeholder
  robots: { index: false, follow: false },
};

export default function TerminAnfragenPage() {
  return (
    <>
      <Header />

      <main className="bg-gradient-to-b from-brand-50 via-white to-white">
        <section className="container-page py-20 sm:py-28 lg:py-32">
          <div className="mx-auto max-w-xl animate-fade-in">
            <div className="rounded-3xl border border-ink-200 bg-white p-8 text-center shadow-soft-lg sm:p-12">
              {/* Icon */}
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-8 w-8"
                  aria-hidden="true"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <path d="M16 2v4M8 2v4M3 10h18" />
                  <path d="m9 16 2 2 4-4" />
                </svg>
              </div>

              <h1 className="mt-6 font-heading text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                Aktuell keine Termine verfügbar
              </h1>

              <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-ink-500">
                Vielen Dank für Ihr Interesse. Aktuell sind alle Termine
                ausgebucht und wir nehmen vorübergehend keine neuen Anfragen
                entgegen.
              </p>

              <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-ink-400">
                Bitte schauen Sie zu einem späteren Zeitpunkt wieder vorbei –
                wir freuen uns, sobald wir Sie wieder mit unserem Service
                unterstützen können.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link href="/" className="btn-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <path d="M19 12H5" />
                    <path d="m12 19-7-7 7-7" />
                  </svg>
                  <span>Zurück zur Startseite</span>
                </Link>
              </div>
            </div>

            {/* Subtle signal that we're a small craft business */}
            <p className="mt-8 text-center text-xs text-ink-400">
              ArealWerk – Hochdruckreinigung mit Sorgfalt.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
