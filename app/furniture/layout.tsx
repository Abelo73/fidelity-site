import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fidelity Furniture & Interior Design | Pure Wanza Wood Craftsmanship",
  description: "Architect-designed custom furniture crafted from 100% pure Ethiopian Wanza wood. Specializing in circular coffee tables (#ክብ_የቡና_ጠረጴዛ), nursery sets, and bedroom suites.",
  openGraph: {
    title: "Fidelity Furniture & Interior Design",
    description: "Where quality meets elegance! Architect-guided solid Wanza wood craftsmanship in Wolaita Sodo & Addis Ababa.",
    images: ["/images/wanza-coffee-table.png"],
  },
};

export default function FurnitureLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
