import type { Metadata } from "next";
import { Libre_Baskerville, Inter } from "next/font/google";
import { TopNav } from "@/components/TopNav";
import { Footer } from "@/components/Footer";
import { ChatBot } from "@/components/chatbot/ChatBot";
import Breadcrumb from "@/components/Breadcrumb";
import "./globals.css";

/* -------------------------------------------------------
   Typography (doctrine §15)
   Display/serif: Libre Baskerville
   Body/UI: Inter
   ------------------------------------------------------- */

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

/* -------------------------------------------------------
   Metadata (site-wide defaults — pages override as needed)
   ------------------------------------------------------- */

export const metadata: Metadata = {
  title: {
    default: "Yonke Law — Personal Injury, Medical Malpractice & Wrongful Death | Kansas City",
    template: "%s | Yonke Law",
  },
  description:
    "Yonke Law represents people hurt by someone else's negligence. Personal injury, medical malpractice, and wrongful death attorneys in Kansas City, Missouri. Free consultation. No fee unless we win.",
  metadataBase: new URL("https://yonke.law"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Yonke Law",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

/* -------------------------------------------------------
   Root layout
   ------------------------------------------------------- */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${libreBaskerville.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* Accessibility: skip-to-content link */}
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>

        <TopNav />
        <Breadcrumb />

        <main id="main-content" className="flex-1">
          {children}
        </main>

        <Footer />
        <ChatBot />
      </body>
    </html>
  );
}
