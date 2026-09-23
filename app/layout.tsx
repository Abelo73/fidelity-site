import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans, Space_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { LanguageProvider } from "./context/LanguageContext";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const mono = Space_Mono({
  weight: ["400", "700"],
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fidelity Business Group | Architect Fidel Gebremedhin",
  description: "Official portal of Fidelity Business Group — Fidelity Architects, Fidelity Furniture & Interior Design, and Fidelity Printing & Advertising led by Fidel Gebremedhin.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${outfit.variable} ${mono.variable} h-full antialiased light`}
    >
      <body className="min-h-full flex flex-col bg-white text-neutral-900 font-sans selection:bg-[#C5A880] selection:text-white">
        <LanguageProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
