import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink-200/70 bg-white/85 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2.5 text-ink-900 transition-opacity duration-200 hover:opacity-80"
          aria-label="ArealWerk – Startseite"
        >
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
          <span className="font-heading text-lg font-semibold tracking-tight">
            Areal<span className="text-brand-600">Werk</span>
          </span>
        </Link>

        <nav
          aria-label="Hauptnavigation"
          className="hidden items-center gap-8 md:flex"
        >
          <a
            href="#leistungen"
            className="text-sm font-medium text-ink-700 transition-colors duration-200 hover:text-brand-700"
          >
            Leistungen
          </a>
          <a
            href="#vorteile"
            className="text-sm font-medium text-ink-700 transition-colors duration-200 hover:text-brand-700"
          >
            Vorteile
          </a>
          <a
            href="#einsatzgebiet"
            className="text-sm font-medium text-ink-700 transition-colors duration-200 hover:text-brand-700"
          >
            Einsatzgebiet
          </a>
        </nav>

        <a
          href="#kontakt"
          className="hidden md:inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-brand-700 transition-colors duration-200 hover:bg-brand-50 cursor-pointer"
        >
          Kontakt
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
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </a>
      </div>
    </header>
  );
}
