import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Architect Fidel Gebremedhin | Founder, Lecturer & CEO",
  description: "Career trajectory of Architect Fidel Gebremedhin — EiABC Graduate, WSU Lecturer, and Founder of Fidelity Business Group across Addis Ababa and Wolaita Sodo.",
  openGraph: {
    title: "About Architect Fidel Gebremedhin | Founder & CEO",
    description: "Architectural mastery, university lectureship, and social impact projects across Ethiopia.",
    images: ["/images/fidel-portrait.png"],
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
