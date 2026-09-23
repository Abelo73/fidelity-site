import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Master Portfolio Gallery | Fidelity Business Group",
  description: "Explore realized architectural design landmarks, custom solid Wanza wood furniture collections, corporate branding, and outdoor commercial signage.",
  openGraph: {
    title: "Master Portfolio Gallery | Fidelity Business Group",
    description: "Visual portfolio gallery across architecture, interior joinery, and print collateral.",
    images: ["/logos/fidelity-group-logo.png"],
  },
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
