import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Menu from "@/components/Menu";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Nox Vision Studio",
  description: "Nox Vision Studio, Collettivo di creativi in Valle d'Itria",
  applicationName: "Nox",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <title>Nox Vision Studio</title>

      <meta name="application-name" content="Nox Vision Studio" />

      {/* Favicon */}
      <link rel="icon" type="image/png" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" />

      {/* Other meta tags (keep these if needed) */}
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Nox Vision Studio" />
      <meta name="description" content="Nox Vision Studio, Collettivo di creativi in Valle d'Itria" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />

      {/* Other link tags (keep these if needed) */}
      <link rel="apple-touch-icon" type="image/png" href="./src/app/favicon.ico" />
      <link rel="stylesheet" href="./src/styles/global.css" />
      

      </head>

      <body className="flex dm-serif-display-regular min-h-screen flex-col items-center justify-between">
        {children}
        <Analytics />
        <Menu />
        <Header></Header>
      </body>
    </html>
  );
}
