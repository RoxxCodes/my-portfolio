import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://roshangupta.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Roshan Gupta — Senior Backend Engineer",
    template: "%s · Roshan Gupta",
  },
  description:
    "Senior Backend Engineer with 7+ years of experience building scalable billing, payments, and event-driven systems in Java, Spring Boot, and Kafka.",
  keywords: [
    "Roshan Gupta",
    "Senior Backend Engineer",
    "Java",
    "Spring Boot",
    "Kafka",
    "Distributed Systems",
    "Microservices",
    "AppDirect",
    "Portfolio",
  ],
  authors: [{ name: "Roshan Gupta" }],
  creator: "Roshan Gupta",
  openGraph: {
    title: "Roshan Gupta — Senior Backend Engineer",
    description:
      "7+ years building scalable billing, payments and event-driven systems.",
    url: siteUrl,
    siteName: "Roshan Gupta",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Roshan Gupta — Senior Backend Engineer",
    description:
      "7+ years building scalable billing, payments and event-driven systems.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
