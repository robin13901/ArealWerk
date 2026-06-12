import BookingButton from "@/components/BookingButton";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const services = [
  {
    title: "Einfahrten",
    description:
      "Pflasterstein, Beton oder Asphalt – wir entfernen Moos, Algen, Öl- und Reifenspuren gründlich und materialschonend.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-7 w-7"
        aria-hidden="true"
      >
        <path d="M3 21h18" />
        <path d="M5 21V8l7-5 7 5v13" />
        <path d="M9 21v-6h6v6" />
      </svg>
    ),
  },
  {
    title: "Terrassen",
    description:
      "Holz, WPC, Naturstein oder Fliesen – wir bringen Ihre Terrasse zum strahlen, ohne empfindliche Oberflächen anzugreifen.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-7 w-7"
        aria-hidden="true"
      >
        <rect x="3" y="6" width="18" height="14" rx="2" />
        <path d="M3 11h18" />
        <path d="M3 16h18" />
        <path d="M9 6V3" />
        <path d="M15 6V3" />
      </svg>
    ),
  },
  {
    title: "Fassaden",
    description:
      "Putz, Klinker oder Sichtbeton – fachgerechte Reinigung gegen Algen, Verschmutzungen und Umweltablagerungen.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-7 w-7"
        aria-hidden="true"
      >
        <path d="M3 21V7l9-4 9 4v14" />
        <path d="M9 21v-6h6v6" />
        <path d="M9 11h.01" />
        <path d="M15 11h.01" />
      </svg>
    ),
  },
  {
    title: "Gehwege",
    description:
      "Sicher und sauber: Wir entfernen Grünbelag, Verschmutzungen und Ablagerungen von Wegen, Treppen und Hofeinfahrten.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-7 w-7"
        aria-hidden="true"
      >
        <path d="M4 21h16" />
        <path d="m6 21 4-18" />
        <path d="m18 21-4-18" />
        <path d="M9 9h6" />
        <path d="M8 15h8" />
      </svg>
    ),
  },
];

const benefits = [
  {
    title: "Materialschonend",
    description:
      "Wir wählen Druck und Düse passend zur Oberfläche – für ein gründliches Ergebnis ohne Schäden.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Festpreis ohne Überraschungen",
    description:
      "Sie erhalten vorab ein transparentes Angebot. Was wir vereinbaren, gilt – ohne versteckte Kosten.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <rect x="3" y="6" width="18" height="13" rx="2" />
        <path d="M3 10h18" />
        <path d="M8 15h3" />
      </svg>
    ),
  },
  {
    title: "Pünktlich & zuverlässig",
    description:
      "Vereinbarte Termine halten wir verlässlich ein. Vorher, während und nach dem Einsatz halten wir Sie informiert.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    ),
  },
  {
    title: "Wassersparend",
    description:
      "Moderne Geräte und durchdachte Arbeitsweise sorgen für ein hervorragendes Ergebnis bei minimalem Wasserverbrauch.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <path d="M12 22a7 7 0 0 0 7-7c0-4-3-7-7-13C8 8 5 11 5 15a7 7 0 0 0 7 7Z" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <>
      <Header />

      <main id="main">
        {/* HERO ============================================================ */}
        <section className="relative overflow-hidden">
          {/* Decorative background */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-brand-50 via-white to-white"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-32 -right-24 -z-10 h-[420px] w-[420px] rounded-full bg-accent-400/20 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -left-24 -z-10 h-[360px] w-[360px] rounded-full bg-brand-400/15 blur-3xl"
          />

          <div className="container-page py-16 sm:py-20 lg:py-28">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
              {/* Copy */}
              <div className="animate-fade-in">
                <span className="eyebrow">
                  <span
                    className="h-1.5 w-1.5 rounded-full bg-cta-500"
                    aria-hidden="true"
                  />
                  Hochdruckreinigung mit System
                </span>
                <h1 className="mt-5 font-heading text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
                  Sauber wie neu.
                  <span className="block text-brand-700">
                    Schonend gemacht.
                  </span>
                </h1>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-500">
                  Einfahrten, Terrassen, Fassaden und Gehwege – wir entfernen
                  Moos, Algen, Öl und Schmutz mit moderner
                  Hochdrucktechnik. Materialschonend, gründlich und zum
                  fairen Festpreis.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <BookingButton size="lg" source="hero">
                    Jetzt Termin anfragen
                  </BookingButton>
                  <a
                    href="#leistungen"
                    className="btn-secondary"
                  >
                    Leistungen ansehen
                  </a>
                </div>

                {/* Trust badges */}
                <ul className="mt-10 grid grid-cols-2 gap-4 text-sm text-ink-500 sm:grid-cols-3">
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    <span>Festpreisgarantie</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    <span>Versichertes Team</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    <span>Kostenlose Beratung</span>
                  </li>
                </ul>
              </div>

              {/* Visual: interactive before/after slider */}
              <div className="relative animate-fade-in lg:pl-6">
                <BeforeAfterSlider />

                {/* Floating stat card */}
                <div className="absolute -bottom-6 -left-4 hidden rounded-2xl border border-ink-200 bg-white p-4 shadow-soft-md sm:block">
                  <p className="text-2xl font-bold text-brand-700">100%</p>
                  <p className="text-xs text-ink-500">Festpreisgarantie</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES ======================================================== */}
        <section id="leistungen" className="section">
          <div className="container-page">
            <div className="max-w-2xl">
              <span className="eyebrow">Unsere Leistungen</span>
              <h2 className="mt-4 font-heading text-3xl font-semibold leading-tight sm:text-4xl">
                Alles, was Ihr Grundstück sauber hält.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ink-500">
                Vom kleinen Gehweg bis zur kompletten Fassade – wir reinigen
                gründlich und materialgerecht. Ein Partner für alle Flächen
                rund ums Haus.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="card card-hover group"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors duration-250 group-hover:bg-brand-100 group-hover:text-brand-700">
                    {service.icon}
                  </div>
                  <h3 className="mt-5 font-heading text-lg font-semibold">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">
                    {service.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* BENEFITS / WHY US =============================================== */}
        <section
          id="vorteile"
          className="section bg-gradient-to-b from-white via-brand-50/40 to-white"
        >
          <div className="container-page">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-5">
                <span className="eyebrow">Warum ArealWerk</span>
                <h2 className="mt-4 font-heading text-3xl font-semibold leading-tight sm:text-4xl">
                  Sorgfalt, die man sieht.
                </h2>
                <p className="mt-4 text-base leading-relaxed text-ink-500">
                  Wir verbinden moderne Hochdrucktechnik mit echtem
                  Handwerk. Vor jedem Einsatz prüfen wir Material und
                  Verschmutzung – damit das Ergebnis stimmt und nichts
                  beschädigt wird.
                </p>

                <div className="mt-8 hidden lg:block">
                  <BookingButton source="benefits">
                    Jetzt Termin anfragen
                  </BookingButton>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {benefits.map((benefit) => (
                    <div key={benefit.title} className="card card-hover">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cta-500/10 text-cta-600">
                        {benefit.icon}
                      </div>
                      <h3 className="mt-4 font-heading text-base font-semibold">
                        {benefit.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-ink-500">
                        {benefit.description}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 lg:hidden">
                  <BookingButton source="benefits">
                    Jetzt Termin anfragen
                  </BookingButton>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* COVERAGE AREA =================================================== */}
        <section id="einsatzgebiet" className="section">
          <div className="container-page">
            <div className="overflow-hidden rounded-3xl border border-ink-200 bg-gradient-to-br from-brand-700 via-brand-600 to-accent-600 text-white shadow-soft-lg">
              <div className="grid grid-cols-1 gap-8 p-8 sm:p-10 lg:grid-cols-2 lg:gap-12 lg:p-14">
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white/90 backdrop-blur-sm">
                    <span
                      aria-hidden="true"
                      className="h-1.5 w-1.5 rounded-full bg-cta-400"
                    />
                    Einsatzgebiet
                  </span>
                  <h2 className="mt-4 font-heading text-3xl font-semibold leading-tight text-white sm:text-4xl">
                    Wir kommen zu Ihnen – in Ihrer Region.
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-white/80">
                    ArealWerk ist regional verwurzelt. Wir arbeiten in Ihrer
                    Stadt sowie im Umkreis von rund 50&nbsp;km. Außerhalb
                    dieses Gebiets prüfen wir auf Anfrage gerne, ob ein
                    Einsatz möglich ist.
                  </p>

                  <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-white/90 sm:max-w-md">
                    {[
                      "Privathaushalte",
                      "Hausverwaltungen",
                      "Wohnanlagen",
                      "Gewerbeflächen",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 backdrop-blur-sm"
                      >
                        <span
                          aria-hidden="true"
                          className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-cta-400/90 text-brand-900"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-3 w-3"
                          >
                            <path d="M20 6 9 17l-5-5" />
                          </svg>
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col items-start justify-center rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm sm:p-8">
                  <p className="text-sm uppercase tracking-wider text-white/70">
                    So einfach geht's
                  </p>
                  <ol className="mt-4 space-y-4">
                    {[
                      {
                        step: "1",
                        title: "Termin anfragen",
                        text: "Schildern Sie uns kurz Ihr Vorhaben.",
                      },
                      {
                        step: "2",
                        title: "Festpreis erhalten",
                        text: "Wir prüfen die Fläche und nennen einen klaren Preis.",
                      },
                      {
                        step: "3",
                        title: "Sauber ist's.",
                        text: "Wir kommen pünktlich und sorgen für ein sichtbares Ergebnis.",
                      },
                    ].map((s) => (
                      <li key={s.step} className="flex gap-4">
                        <span
                          aria-hidden="true"
                          className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-white text-sm font-bold text-brand-700"
                        >
                          {s.step}
                        </span>
                        <div>
                          <p className="font-semibold text-white">
                            {s.title}
                          </p>
                          <p className="mt-0.5 text-sm text-white/75">
                            {s.text}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA ======================================================= */}
        <section className="section pt-0">
          <div className="container-page">
            <div className="rounded-3xl border border-ink-200 bg-white p-8 text-center shadow-soft sm:p-12 lg:p-16">
              <h2 className="font-heading text-3xl font-semibold leading-tight sm:text-4xl">
                Bereit für glänzende Flächen?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-ink-500">
                Fragen Sie unverbindlich Ihren Termin an. Wir melden uns
                schnellstmöglich mit einem Festpreisangebot zurück.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <BookingButton size="lg" source="final-cta">
                  Jetzt Termin anfragen
                </BookingButton>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

function CheckIcon() {
  return (
    <span
      aria-hidden="true"
      className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-cta-500/15 text-cta-600"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-3 w-3"
      >
        <path d="M20 6 9 17l-5-5" />
      </svg>
    </span>
  );
}
