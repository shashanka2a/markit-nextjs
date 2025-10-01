import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "../styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Markit.one - Simplify forms, QR codes, and hiring",
  description: "One hub, many SaaS tools. Simplify forms, QR codes, and hiring — all in one place.",
  keywords: ["forms", "QR codes", "hiring", "SaaS", "business tools", "productivity"],
  authors: [{ name: "Markit.one" }],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Markit.one - Simplify forms, QR codes, and hiring",
    description: "One hub, many SaaS tools. Simplify forms, QR codes, and hiring — all in one place.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Markit.one - Simplify forms, QR codes, and hiring",
    description: "One hub, many SaaS tools. Simplify forms, QR codes, and hiring — all in one place.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
