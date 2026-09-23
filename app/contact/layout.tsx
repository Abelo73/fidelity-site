import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Direct Order Desk | Fidelity Business Group",
  description: "Contact Architect Fidel Gebremedhin for architectural project consultations, custom Wanza furniture orders (0911 97 18 00 / 0916 41 12 37), or commercial advertising quotes.",
  openGraph: {
    title: "Contact & Order Desk | Fidelity Business Group",
    description: "Direct customer service hotlines, office & workshop locations in Addis Ababa and Wolaita Sodo.",
    images: ["/logos/fidelity-group-logo.png"],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
