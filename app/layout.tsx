import type { Metadata, Viewport } from "next";
import { Poppins, Open_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
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
  title: "ArealWerk – Hochdruckreinigung für Einfahrten, Terrassen & Fassaden",
  description:
    "Professionelle Hochdruckreinigung von Einfahrten, Terrassen, Fassaden und Gehwegen. Schonend, gründlich und zuverlässig – für Ihr Zuhause.",
  keywords: [
    "Hochdruckreiniger",
    "Hochdruckreinigung",
    "Einfahrt reinigen",
    "Terrasse reinigen",
    "Fassadenreinigung",
    "Gehweg reinigen",
    "Pflasterreinigung",
  ],
  authors: [{ name: "ArealWerk" }],
  openGraph: {
    title: "ArealWerk – Hochdruckreinigung",
    description:
      "Professionelle Hochdruckreinigung für Einfahrten, Terrassen, Fassaden und Gehwege.",
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
        <Analytics />
      </body>
    </html>
  );
}
