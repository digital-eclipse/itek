import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BookACallDialogProvider } from "@/components/landing/BookACallDialog";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "ITEK Solutions | Managed IT Services",
    template: "%s | ITEK Solutions",
  },
  description:
    "ITEK Solutions delivers enterprise-grade managed IT services, cybersecurity, cloud infrastructure, and helpdesk support for businesses across Canada.",
  keywords: [
    "managed IT services",
    "MSP",
    "cybersecurity",
    "cloud infrastructure",
    "IT support",
    "helpdesk",
    "Canada",
    "ITEK Solutions",
  ],
  authors: [{ name: "ITEK Solutions" }],
  creator: "ITEK Solutions",
  metadataBase: new URL("https://iteksolutions.ca"),
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://iteksolutions.ca",
    siteName: "ITEK Solutions",
    title: "ITEK Solutions | Managed IT Services",
    description:
      "Enterprise-grade managed IT services, cybersecurity, cloud infrastructure, and helpdesk support for Canadian businesses.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ITEK Solutions | Managed IT Services",
    description:
      "Enterprise-grade managed IT services, cybersecurity, cloud infrastructure, and helpdesk support for Canadian businesses.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${inter.variable} flex min-h-screen flex-col font-sans antialiased`}
      >
        <BookACallDialogProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </BookACallDialogProvider>
      </body>
    </html>
  );
}
