import type { Metadata, Viewport } from "next";
import { Poppins, Open_Sans } from "next/font/google";
import UmamiAnalytics from "@/components/UmamiAnalytics";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-open-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ArealWerk – Immobilien- & Grundstückspflege im Main-Kinzig-Kreis",
  description:
    "Hochdruckreinigung, Rasen- und Grünpflege sowie Anliegerpflichten – aus einer Hand. Festpreis, digitales Fotoprotokoll und bargeldlose Abwicklung. Linsengericht und Umkreis.",
  keywords: [
    "Hochdruckreinigung",
    "Grundstückspflege",
    "Rasenpflege",
    "Gartenpflege",
    "Hausmeisterservice",
    "Anliegerpflicht",
    "Main-Kinzig-Kreis",
    "Linsengericht",
    "Einfahrt reinigen",
    "Terrasse reinigen",
  ],
  authors: [{ name: "ArealWerk" }],
  openGraph: {
    title: "ArealWerk – Sauber. Gepflegt. Sorgenfrei.",
    description:
      "Hochdruckreinigung und Grünpflege im Main-Kinzig-Kreis. Festpreis, digitale Abwicklung, Fotoprotokoll inklusive.",
    locale: "de_DE",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0E6E96",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`${poppins.variable} ${openSans.variable}`}>
      <body>
        {children}
        <UmamiAnalytics />
      </body>
    </html>
  );
}
