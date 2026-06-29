import BookingButton from "@/components/BookingButton";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const services = [
  {
    title: "Hochdruckreinigung",
    description:
      "Pflastersteine, Terrassen und Einfahrten. Wir entfernen hartnäckigen Schmutz, Moos und Algen materialschonend – für einen glänzenden ersten Eindruck.",
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
        {/* Pressure washer wand + spray */}
        <path d="M3 14h4l2-3" />
        <path d="M9 11h3l2-2" />
        <path d="m14 9 7-4" />
        <path d="M14 9v5" />
        <path d="M11 14h6" />
        <path d="M11 17h6" />
      </svg>
    ),
  },
  {
    title: "Rasen- & Grünpflege",
    description:
      "Rasenmähen, Heckenrückschnitt und Unkrautentfernung. Wir sorgen dafür, dass Ihr Gartenbereich stets ordentlich, gesund und repräsentativ aussieht.",
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
        {/* Lawn / grass blades */}
        <path d="M3 20h18" />
        <path d="M5 20c0-4 2-7 2-10" />
        <path d="M9 20c0-3 1-6 1-9" />
        <path d="M13 20c0-3 2-5 2-8" />
        <path d="M17 20c0-3 1-5 2-7" />
      </svg>
    ),
  },
  {
    title: "Das Sorglos-Abo",
    description:
      "Sie wollen sich um nichts mehr kümmern? Wir kommen in regelmäßigen Abständen für die Grünpflege und Reinigung vorbei. Zuverlässig und jederzeit flexibel anpassbar.",
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
        {/* Repeat / subscription cycle */}
        <path d="M21 12a9 9 0 1 1-3-6.7" />
        <path d="M21 3v6h-6" />
      </svg>
    ),
  },
  {
    title: "Anlieger- & Gehwegpflege",
    description:
      "Laubentfernung, Rinnenreinigung und Gehwegpflege. Wir übernehmen Ihre Anliegerpflichten gemäß der örtlichen Straßenreinigungssatzung sicher und pünktlich.",
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
        {/* Broom / sweeping */}
        <path d="M19 4 12 11" />
        <path d="M11 12 6 17l-3 3" />
        <path d="m12 11 5 5" />
        <path d="M11 18a3 3 0 0 1-3 3H4l3-3" />
        <path d="m14 14 5 5" />
      </svg>
    ),
  },
];

const benefits = [
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
    title: "Digitale & einfache Abwicklung",
    description:
      "Kein Bargeld-Stress. Nach getaner Arbeit erhalten Sie automatisch ein Vorher-Nachher-Fotoprotokoll und eine saubere, digitale Rechnung für Ihre Unterlagen.",
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
        {/* Phone with photo + receipt */}
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <path d="M9 7h6" />
        <rect x="9" y="10" width="6" height="4" rx="0.5" />
        <path d="M9 17h4" />
      </svg>
    ),
  },
  {
    title: "Materialschonend & sicher",
    description:
      "Wir arbeiten mit Profi-Geräten und dem exakt passenden Druck für jeden Stein. Unser Team ist voll versichert – Ihr Eigentum ist bei uns in den besten Händen.",
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
                  Immobilien- & Grundstückspflege
                </span>
                <h1 className="mt-5 font-heading text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
                  Sauber. Gepflegt.
                  <span className="block text-brand-700">Sorgenfrei.</span>
                </h1>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-500">
                  Ob professionelle Hochdruckreinigung für Terrassen und
                  Einfahrten oder die regelmäßige Rasen- und Gartenpflege –
                  ArealWerk ist Ihr zuverlässiger Partner in der Region.
                  Wir pflegen Ihr Grundstück schonend, gründlich und zum
                  transparenten Festpreis. Lehnen Sie sich zurück, wir
                  übernehmen die Arbeit.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <BookingButton size="lg" source="hero">
                    Jetzt Termin anfragen
                  </BookingButton>
                  <a href="#leistungen" className="btn-secondary">
                    Unsere Leistungen
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
                    <span>100&nbsp;% bargeldlos &amp; digital</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    <span>Regional &amp; zuverlässig</span>
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
                Alles, was Ihr Grundstück in Bestform hält.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ink-500">
                Vom kleinen Gehweg bis zum kompletten Garten – wir verbinden
                modernste Technik mit verlässlichem Handwerk. Ein
                Ansprechpartner für alle Flächen rund ums Haus.
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
                  Zuverlässigkeit, die man sieht.
                  <span className="block text-brand-700">
                    Service, der entspannt.
                  </span>
                </h2>
                <p className="mt-4 text-base leading-relaxed text-ink-500">
                  Wir machen Schluss mit Handwerker-Frust. Bei uns gibt es
                  keine versteckten Kosten, keine Termin-Ausfälle und keine
                  Zettelwirtschaft. Nur saubere Arbeit.
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
                    ArealWerk ist in Linsengericht und dem Main-Kinzig-Kreis
                    verwurzelt. Wir arbeiten in Ihrer Stadt sowie im Umkreis
                    von rund 50&nbsp;km. Außerhalb dieses Gebiets prüfen wir
                    auf Anfrage gerne, ob ein Einsatz möglich ist.
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
                        text: "Telefonisch oder online. Schildern Sie uns kurz Ihr Vorhaben – ganz unkompliziert.",
                      },
                      {
                        step: "2",
                        title: "Festpreis erhalten",
                        text: "Wir prüfen den Aufwand und nennen Ihnen einen klaren Preis. Was wir vereinbaren, gilt.",
                      },
                      {
                        step: "3",
                        title: "Zurücklehnen & freuen",
                        text: "Wir kommen pünktlich und erledigen die Arbeit. Sie erhalten Fotos und Rechnung bequem digital. Sauber ist's.",
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
                Bereit für ein rundum gepflegtes Grundstück?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-ink-500">
                Fragen Sie unverbindlich Ihren Termin an. Wir melden uns
                schnellstmöglich mit einem transparenten Festpreisangebot
                zurück.
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
