import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fidelity Architects & Consulting Engineers | Design & Supervision",
  description: "Architectural design, 3D building visualization, master planning, and on-site construction supervision by EiABC-certified architects led by Fidel Gebremedhin.",
  openGraph: {
    title: "Fidelity Architects & Consulting Engineers",
    description: "Building a legacy from conceptual 3D renders up to turnkey construction execution.",
    images: ["/logos/fidelity-architects.png"],
  },
};

export default function ArchitectsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
