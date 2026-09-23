import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fidelity Printing & Advertising | 3D Outdoor Signage & Media",
  description: "High precision commercial printing, illuminated 3D channel letters, corporate identity collateral, and exhibition packaging led by General Manager Fidel Gebremedhin.",
  openGraph: {
    title: "Fidelity Printing & Advertising | Stand Out!",
    description: "Commercial advertising media, outdoor signage, and high resolution digital print collateral across Ethiopia.",
    images: ["/logos/fidelity-printing.png"],
  },
};

export default function PrintingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
