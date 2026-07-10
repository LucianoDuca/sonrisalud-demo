import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import DemoBanner from "@/components/DemoBanner";
import Footer from "@/components/Footer";
import WhatsAppFloating from "@/components/WhatsAppFloating";
import SchemaOrg from "@/components/SchemaOrg";
import { siteConfig } from "@/lib/site-config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${siteConfig.nombre} — Clínica dental en ${siteConfig.ciudad}`,
  description: `${siteConfig.nombre}: implantes, ortodoncia invisible y odontología general en ${siteConfig.ciudad}. Pide cita sin compromiso.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SchemaOrg config={siteConfig} />
        <DemoBanner config={siteConfig} />
        <div className="flex flex-1 flex-col">{children}</div>
        <Footer config={siteConfig} />
        <WhatsAppFloating config={siteConfig} />
      </body>
    </html>
  );
}
