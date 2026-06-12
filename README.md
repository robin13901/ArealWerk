# ArealWerk

Professionelle Hochdruckreinigung – Mobile-optimierte Next.js-Marketing-Website mit Fake-Door-Conversion-Test.

## Tech-Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **@vercel/analytics** für privacy-friendly, cookiefreie Reichweitenmessung & Custom Events

## Setup

```bash
npm install
npm run dev
```

Build:

```bash
npm run build
```

## Fake-Door-Test

Der CTA-Button **„Jetzt Termin anfragen"** öffnet ein Modal mit der Nachricht
„Aktuell sind alle Termine ausgebucht. Wir nehmen keine neuen Anfragen
entgegen."

Bei jedem Klick wird ein Custom Event an Vercel Analytics gesendet:

```ts
import { track } from "@vercel/analytics";
track("booking_intent", { source: "hero" | "benefits" | "final-cta" });
```

So lässt sich messen, wie viele Besucher ernsthaft buchen würden.

## Deployment

1. Repository zu Vercel verbinden.
2. Im Vercel-Dashboard **Web Analytics** aktivieren (kostenlos für Hobby-Projekte).
3. Custom Events (`booking_intent`) erscheinen automatisch im Analytics-Dashboard.

## Pflichtseiten

- `/impressum` – Platzhalter mit Markierung **BITTE ERSETZEN** an allen relevanten Stellen.
- `/datenschutz` – DSGVO-konforme Datenschutzerklärung inkl. Hinweis auf cookiefreie Vercel-Analytics-Nutzung.

## Design-System

- **Stil:** Soft UI Evolution (subtile Tiefe, moderne Schatten, WCAG AA+)
- **Farben:** Tiefblau (Vertrauen/Wasser) + Cyan-Akzent + Grün-CTA
- **Typografie:** Poppins (Headings) + Open Sans (Body)
- **Pattern:** Conversion-optimized mit CTA above the fold
