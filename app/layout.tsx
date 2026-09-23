import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans, Space_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import JsonLd from "./components/JsonLd";
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
  metadataBase: new URL("https://fidelity-site.vercel.app"),
  title: {
    default: "Fidelity Business Group | Architect Fidel Gebremedhin",
    template: "%s | Fidelity Business Group",
  },
  description:
    "Official portal of Fidelity Business Group — Fidelity Architects, Fidelity Furniture & Interior Design, and Fidelity Printing & Advertising directed by Fidel Gebremedhin (EiABC Graduate & WSU Lecturer).",
  keywords: [
    "Fidel Gebremedhin",
    "Fidelity Architects",
    "Ethiopian Architect",
    "Wanza Furniture",
    "EiABC",
    "Wolaita Sodo University",
    "DICHA BOYS",
    "Adonay Mada",
    "Fidelity Printing",
    "Addis Ababa Architecture",
    "Ethiopian Building Supervision",
    "Custom Woodwork Ethiopia",
  ],
  authors: [{ name: "Fidel Gebremedhin" }],
  creator: "Fidelity Business Group",
  publisher: "Fidelity Business Group",
  icons: {
    icon: [
      { url: "/icon.png", sizes: "any" },
      { url: "/logos/fidelity-group-logo.png", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "am_ET",
    url: "https://fidelity-site.vercel.app",
    siteName: "Fidelity Business Group",
    title: "Fidelity Business Group | Architect Fidel Gebremedhin",
    description:
      "Architecting Legacies, Crafting Elegant Spaces. Fusing contemporary architectural mastery, urban design, structural engineering, and solid Ethiopian Wanza wood craftsmanship.",
    images: [
      {
        url: "/logos/fidelity-group-logo.png",
        width: 1200,
        height: 630,
        alt: "Fidelity Business Group Monogram Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fidelity Business Group | Architect Fidel Gebremedhin",
    description:
      "Architectural planning, on-site building supervision, solid Wanza furniture, and commercial 3D advertising signage across Ethiopia.",
    images: ["/logos/fidelity-group-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
        <JsonLd />
        <LanguageProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
