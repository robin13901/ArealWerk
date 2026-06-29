import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      id="kontakt"
      className="border-t border-ink-200 bg-ink-50/60"
    >
      <div className="container-page py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2.5">
              <span
                aria-hidden="true"
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 text-white shadow-soft"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M12 2v6" />
                  <path d="M12 22a4 4 0 0 0 4-4c0-2.5-2-4.5-4-8-2 3.5-4 5.5-4 8a4 4 0 0 0 4 4Z" />
                </svg>
              </span>
              <span className="font-heading text-lg font-semibold tracking-tight text-ink-900">
                Areal<span className="text-brand-600">Werk</span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-500">
              Professionelle Grundstückspflege und Hochdruckreinigung.
              Sauber. Verlässlich. Sorgenfrei.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-ink-700">
              Leistungen
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-ink-500">
              <li>
                <a
                  href="#leistungen"
                  className="transition-colors duration-200 hover:text-brand-700"
                >
                  Hochdruckreinigung
                </a>
              </li>
              <li>
                <a
                  href="#leistungen"
                  className="transition-colors duration-200 hover:text-brand-700"
                >
                  Rasen- & Grünpflege
                </a>
              </li>
              <li>
                <a
                  href="#leistungen"
                  className="transition-colors duration-200 hover:text-brand-700"
                >
                  Das Sorglos-Abo
                </a>
              </li>
              <li>
                <a
                  href="#leistungen"
                  className="transition-colors duration-200 hover:text-brand-700"
                >
                  Anlieger- & Gehwegpflege
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-ink-700">
              Rechtliches
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-ink-500">
              <li>
                <Link
                  href="/impressum"
                  className="transition-colors duration-200 hover:text-brand-700"
                >
                  Impressum
                </Link>
              </li>
              <li>
                <Link
                  href="/datenschutz"
                  className="transition-colors duration-200 hover:text-brand-700"
                >
                  Datenschutzerklärung
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-ink-200 pt-6 text-sm text-ink-500 sm:flex-row sm:items-center">
          <p>© {year} ArealWerk. Alle Rechte vorbehalten.</p>
          <p className="text-xs text-ink-400">
            Grundstückspflege mit Sorgfalt – Made in Germany.
          </p>
        </div>
      </div>
    </footer>
  );
}
