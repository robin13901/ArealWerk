# ArealWerk

Professionelle Hochdruckreinigung – Mobile-optimierte Next.js-Marketing-Website mit Fake-Door-Conversion-Test.

## Tech-Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Umami Analytics** für privacy-friendly, cookiefreie Reichweitenmessung & unbegrenzte Custom Events (kostenlos)

## Setup

```bash
npm install
npm run dev
```

Build:

```bash
npm run build
```

## Umami Analytics einrichten (kostenlos)

1. Account erstellen auf [cloud.umami.is](https://cloud.umami.is/) – kostenloser Tier reicht völlig.
2. Neue Website anlegen (`arealwerk.vercel.app`) und die **Website-ID** kopieren.
3. In Vercel unter **Settings → Environment Variables** setzen:

   ```
   NEXT_PUBLIC_UMAMI_WEBSITE_ID = <deine-website-id>
   ```

   *(Optional, falls du Umami selbst hostest:*
   `NEXT_PUBLIC_UMAMI_SCRIPT_URL = https://dein-umami.example.com/script.js`*)*

4. Redeploy auslösen → Umami trackt automatisch Pageviews + Custom Events.

## Fake-Door-Test

Der CTA-Button **„Jetzt Termin anfragen"** öffnet ein Modal mit der Nachricht
„Aktuell sind alle Termine ausgebucht. Wir nehmen keine neuen Anfragen
entgegen."

Bei jedem Klick wird ein Custom Event an Umami gesendet:

```ts
window.umami?.track("booking_intent", { source: "hero" | "benefits" | "final-cta" });
```

So lässt sich messen, wie viele Besucher ernsthaft buchen würden – inkl. der
**Quelle** des Klicks (Hero / Vorteile / Final CTA).

Im Umami-Dashboard erscheint das Event unter **Events** → `booking_intent`.

## Pflichtseiten

- `/impressum` – Platzhalter mit Markierung **BITTE ERSETZEN** an allen relevanten Stellen.
- `/datenschutz` – DSGVO-konforme Datenschutzerklärung inkl. Hinweis auf cookiefreie Umami-Nutzung.

## Design-System

- **Stil:** Soft UI Evolution (subtile Tiefe, moderne Schatten, WCAG AA+)
- **Farben:** Tiefblau (Vertrauen/Wasser) + Cyan-Akzent + Grün-CTA
- **Typografie:** Poppins (Headings) + Open Sans (Body)
- **Pattern:** Conversion-optimized mit CTA above the fold
- **Hero-Visual:** Interaktiver Vorher/Nachher-Slider (Drag/Tastatur), photo-realistisches SVG-Rendering
